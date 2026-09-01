'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { trackLead } from '@/app/lib/analytics';

export interface NexHealthBookingModalProps {
  open: boolean;
  onClose: () => void;
}

type AppointmentType = { id: number; name: string; minutes: number };
type Slot = {
  time: string;
  endTime: string;
  operatoryId: number | null;
  providerId: number;
};

/*
 * Times are rendered by slicing the ISO string, not by constructing a Date.
 *
 * Slots arrive as "2026-09-08T09:00:00.000-04:00" — the offset is already the
 * practice's local time, which is the only time that means anything to either
 * the patient or the front desk. Passing that through `new Date()` reinterprets
 * it in the visitor's timezone, so a Chandler patient browsing from a laptop
 * still set to Eastern would be shown appointment times that do not exist.
 * Slicing is exact and has no timezone to get wrong.
 */
function slotDate(iso: string) {
  return iso.slice(0, 10);
}

function slotTimeLabel(iso: string) {
  const [h, m] = iso.slice(11, 16).split(':').map(Number);
  const period = h >= 12 ? 'pm' : 'am';
  const hour = h % 12 === 0 ? 12 : h % 12;
  return m === 0 ? `${hour}${period}` : `${hour}:${String(m).padStart(2, '0')}${period}`;
}

function dayLabel(date: string) {
  const [y, m, d] = date.split('-').map(Number);
  // Constructed as UTC and read back as UTC, so the weekday cannot shift by a
  // day for visitors west of the practice.
  const dt = new Date(Date.UTC(y, m - 1, d));
  return dt.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export default function NexHealthBookingModal({ open, onClose }: NexHealthBookingModalProps) {
  if (!open) return null;
  return <BookingDialog onClose={onClose} />;
}

type Step = 'reason' | 'time' | 'details' | 'done';

function BookingDialog({ onClose }: { onClose: () => void }) {
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState<Step>('reason');
  const [types, setTypes] = useState<AppointmentType[]>([]);
  const [slots, setSlots] = useState<Slot[]>([]);
  const [grant, setGrant] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [type, setType] = useState<AppointmentType | null>(null);
  const [slot, setSlot] = useState<Slot | null>(null);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    note: '',
  });

  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true));
    const t = setTimeout(() => closeRef.current?.focus(), 250);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.body.dataset.modalOpen = 'true';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prev;
      delete document.body.dataset.modalOpen;
    };
  }, [onClose]);

  /** Pure fetch — no state, so it is safe to call from an effect. */
  const fetchSlots = useCallback(
    async (appointmentType: AppointmentType | null) => {
      const params = new URLSearchParams({ days: '14' });
      if (appointmentType) params.set('appointmentTypeId', String(appointmentType.id));
      const res = await fetch(`/api/booking/slots?${params}`);
      if (!res.ok) throw new Error('unavailable');
      return (await res.json()) as {
        grant: string | null;
        appointmentTypes: AppointmentType[];
        slots: Slot[];
      };
    },
    [],
  );

  /** For event handlers, where setting state synchronously is fine. */
  const loadSlots = useCallback(
    async (appointmentType: AppointmentType | null) => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchSlots(appointmentType);
        setTypes(data.appointmentTypes);
        setSlots(data.slots);
        setGrant(data.grant);
      } catch {
        setError('We could not load available times just now.');
      } finally {
        setLoading(false);
      }
    },
    [fetchSlots],
  );

  // Initial load. State is only touched in the promise continuations, and the
  // cancelled flag stops a slow response from writing into an unmounted
  // dialog — a patient who opens booking and closes it again before the
  // request lands should not resurrect it.
  useEffect(() => {
    let cancelled = false;
    fetchSlots(null)
      .then((data) => {
        if (cancelled) return;
        setTypes(data.appointmentTypes);
        setSlots(data.slots);
        setGrant(data.grant);
        setLoading(false);
      })
      .catch(() => {
        if (cancelled) return;
        setError('We could not load available times just now.');
        setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [fetchSlots]);

  const byDay = useMemo(() => {
    const map = new Map<string, Slot[]>();
    for (const s of slots) {
      const key = slotDate(s.time);
      const list = map.get(key);
      if (list) list.push(s);
      else map.set(key, [s]);
    }
    return [...map.entries()].slice(0, 14);
  }, [slots]);

  const chooseType = async (t: AppointmentType) => {
    setType(t);
    setStep('time');
    await loadSlots(t);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!slot || !type) return;
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch('/api/booking/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          grant,
          providerId: slot.providerId,
          operatoryId: slot.operatoryId,
          appointmentTypeId: type.id,
          appointmentTypeName: type.name,
          startTime: slot.time,
          endTime: slot.endTime,
        }),
      });

      if (res.status === 409) {
        // Someone took the slot between our availability read and this write.
        // Reload and send them back to the picker rather than failing flat.
        setError('Sorry — that time was just taken. Please pick another.');
        setSlot(null);
        setStep('time');
        await loadSlots(type);
        return;
      }

      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error ?? 'Booking failed');
      }

      // Fires only on a confirmed 201. This is the whole reason for building
      // first-party: the conversion is reported against a booking the practice
      // management system actually accepted, not a form submission.
      trackLead('booking_request', {
        booking_method: 'nexhealth',
        reason: type.name,
      });
      setStep('done');
    } catch (err) {
      setError(
        err instanceof Error && err.message !== 'Booking failed'
          ? err.message
          : 'We could not complete the booking. Please call (480) 802-8188.',
      );
    } finally {
      setSubmitting(false);
    }
  };

  const canSubmit =
    form.firstName && form.lastName && form.email && form.phone.replace(/\D/g, '').length >= 10 && form.dateOfBirth;

  return (
    <div
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className={[
        'fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8',
        'bg-neutral-900/60 backdrop-blur-sm transition-opacity duration-300 ease-out',
        mounted ? 'opacity-100' : 'opacity-0',
      ].join(' ')}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Book an appointment"
        className={[
          'relative w-full max-w-[95%] sm:max-w-lg md:max-w-2xl h-[min(46rem,95vh)] max-h-full',
          'flex flex-col overflow-hidden rounded-[20px] md:rounded-[24px] bg-white shadow-2xl',
          'transition-all duration-[450ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]',
          mounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.96]',
        ].join(' ')}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close booking"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 transition-all duration-300 hover:rotate-90 hover:bg-neutral-200 hover:text-neutral-900"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className="flex-none px-5 pt-8 pb-3 sm:px-8 sm:pt-10">
          <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-wider text-accent">
            {step === 'done' ? 'Confirmed' : 'Book Online'}
          </span>
          <h2 className="pr-8 font-serif text-2xl leading-tight text-neutral-900 sm:text-3xl">
            {step === 'reason' && <>What brings you <span className="italic text-accent">in?</span></>}
            {step === 'time' && <>Pick a time that <span className="italic text-accent">works.</span></>}
            {step === 'details' && <>Almost <span className="italic text-accent">done.</span></>}
            {step === 'done' && <>You&rsquo;re <span className="italic text-accent">booked.</span></>}
          </h2>
          {slot && step === 'details' && (
            <p className="mt-2 text-sm text-neutral-500">
              {type?.name} · {dayLabel(slotDate(slot.time))} at {slotTimeLabel(slot.time)}
            </p>
          )}
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-4 sm:px-8">
          {error && (
            <p className="mb-4 rounded-[10px] bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
          )}

          {loading && step !== 'done' && (
            <p className="py-8 text-center text-sm text-neutral-400">Loading available times…</p>
          )}

          {!loading && step === 'reason' && (
            <div className="flex flex-col gap-2">
              {types.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => void chooseType(t)}
                  className="flex items-center justify-between rounded-[12px] border border-neutral-200 px-4 py-3.5 text-left transition-colors hover:border-accent hover:bg-accent/5"
                >
                  <span className="text-[15px] text-neutral-900">{t.name}</span>
                  <span className="text-xs text-neutral-400">{t.minutes} min</span>
                </button>
              ))}
            </div>
          )}

          {!loading && step === 'time' && (
            <div className="flex flex-col gap-5">
              {byDay.length === 0 && (
                <p className="py-6 text-center text-sm text-neutral-500">
                  No times available in the next two weeks. Please call (480) 802-8188.
                </p>
              )}
              {byDay.map(([date, daySlots]) => (
                <div key={date}>
                  <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    {dayLabel(date)}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {daySlots.map((s) => (
                      <button
                        key={`${s.time}-${s.providerId}-${s.operatoryId}`}
                        type="button"
                        onClick={() => {
                          setSlot(s);
                          setStep('details');
                        }}
                        className="rounded-full border border-neutral-200 px-3.5 py-2 text-[13px] text-neutral-700 transition-colors hover:border-accent hover:bg-accent hover:text-white"
                      >
                        {slotTimeLabel(s.time)}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {step === 'details' && (
            <form id="booking-details" onSubmit={submit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-3">
                <Field label="First name">
                  <input required value={form.firstName} onChange={(e) => setForm((f) => ({ ...f, firstName: e.target.value }))} className={inputClass} />
                </Field>
                <Field label="Last name">
                  <input required value={form.lastName} onChange={(e) => setForm((f) => ({ ...f, lastName: e.target.value }))} className={inputClass} />
                </Field>
              </div>
              <Field label="Date of birth">
                <input required type="date" value={form.dateOfBirth} onChange={(e) => setForm((f) => ({ ...f, dateOfBirth: e.target.value }))} className={inputClass} />
              </Field>
              <Field label="Phone">
                <input required type="tel" inputMode="tel" value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} className={inputClass} />
              </Field>
              <Field label="Email">
                <input required type="email" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} className={inputClass} />
              </Field>
              <Field label="Anything we should know? (optional)">
                <textarea rows={2} value={form.note} onChange={(e) => setForm((f) => ({ ...f, note: e.target.value }))} className={inputClass} />
              </Field>
            </form>
          )}

          {step === 'done' && slot && (
            <div className="py-6 text-center">
              <p className="text-[15px] text-neutral-700">
                {type?.name} on <strong>{dayLabel(slotDate(slot.time))}</strong> at{' '}
                <strong>{slotTimeLabel(slot.time)}</strong>.
              </p>
              <p className="mt-3 text-sm text-neutral-500">
                A confirmation is on its way to {form.email}.
              </p>
            </div>
          )}
        </div>

        <div className="flex-none border-t border-neutral-100 px-5 py-4 sm:px-8">
          {step === 'details' ? (
            <button
              type="submit"
              form="booking-details"
              disabled={!canSubmit || submitting}
              className="w-full rounded-full bg-accent px-6 py-3.5 text-[14px] font-semibold uppercase tracking-wider text-white transition-opacity disabled:opacity-40"
            >
              {submitting ? 'Booking…' : 'Confirm appointment'}
            </button>
          ) : (
            <p className="text-center text-sm text-neutral-500">
              Prefer to talk to someone?{' '}
              <a href="tel:+14808028188" className="font-medium text-accent hover:underline">
                Call (480) 802-8188
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

const inputClass =
  'w-full rounded-[10px] border border-neutral-200 px-3.5 py-2.5 text-[15px] text-neutral-900 outline-none transition-colors focus:border-accent';

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[13px] font-medium text-neutral-600">{label}</span>
      {children}
    </label>
  );
}
