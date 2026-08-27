import React, { useState, useEffect, useRef } from 'react';
import SmsConsent from './SmsConsent';
import FormPurpose from './FormPurpose';
import { trackLead } from '@/app/lib/analytics';
import { attributionLine } from '@/app/lib/attribution';
export interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

export interface BookingFormState {
  name: string;
  phone: string;
  email: string;
  reason: string;
  date: string;
  message: string;
}

const REASONS = [
  'General Checkup & Cleaning',
  'Cosmetic Consultation',
  'Dental Emergency',
  'Restorative Dentistry',
] as const;

const EMPTY_FORM: BookingFormState = {
  name: '',
  phone: '',
  email: '',
  reason: '',
  date: '',
  message: '',
};

/* ── Component ──────────────────────────────────────────── */

export default function BookingModal({ open, onClose }: BookingModalProps) {
  const [status, setStatus] = useState<'form' | 'submitting' | 'done'>('form');
  const [form, setForm] = useState<BookingFormState>(EMPTY_FORM);
  const [error, setError] = useState<string | null>(null);
  const [smsConsent, setSmsConsent] = useState(false);
  const [mounted, setMounted] = useState(false);

  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    setStatus('form');
    setForm(EMPTY_FORM);
    setError(null);
    setSmsConsent(false);

    const raf = requestAnimationFrame(() => setMounted(true));
    const focusTimer = setTimeout(() => firstFieldRef.current?.focus(), 300);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(focusTimer);
      setMounted(false);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  const update =
    (key: keyof BookingFormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.phone) {
      setError('Please give us your name and a phone number so we can reach you.');
      return;
    }
    if (!form.reason) {
      setError('Please pick a reason for your visit.');
      return;
    }

    setError(null);
    setStatus('submitting');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'booking',
          name: form.name,
          phone: form.phone,
          email: form.email,
          // The API's booking handler labels this field "Service".
          service: form.reason,
          date: form.date,
          message: form.message,
          smsConsent,
          source: attributionLine(),
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? 'Request failed');
      }

      trackLead('booking_request', { reason: form.reason });
      setStatus('done');
    } catch (err) {
      // Never report success we did not get — the patient needs to know
      // the request did not reach the practice so they can call instead.
      console.error('Booking request failed:', err);
      setError(
        'Sorry — we could not send your request just now. Please call us at (480) 802-8188 and we will get you booked.',
      );
      setStatus('form');
    }
  };

  return (
    <div
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className={[
        'fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8',
        'bg-neutral-900/60 backdrop-blur-sm',
        'transition-opacity duration-300 ease-out',
        mounted ? 'opacity-100' : 'opacity-0',
      ].join(' ')}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Book an appointment"
        className={[
          'relative w-full max-w-[95%] sm:max-w-md md:max-w-4xl lg:max-w-[80%] max-h-[95vh] flex flex-col md:grid md:grid-cols-[1.2fr_0.8fr] overflow-hidden',
          'rounded-[20px] md:rounded-[24px] bg-white shadow-2xl',
          'transition-all duration-[450ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]',
          mounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.96]',
        ].join(' ')}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close booking form"
          className={[
            'absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-10 h-10 rounded-full flex items-center justify-center',
            'transition-all duration-300 ease-out hover:rotate-90',
            // Mobile styling (sits on white background)
            'bg-neutral-100 text-neutral-500 hover:bg-neutral-200 hover:text-neutral-900',
            // Desktop styling (sits on dark image overlay)
            'md:border md:border-white/20 md:bg-black/20 md:text-white md:backdrop-blur-md md:hover:bg-white md:hover:text-neutral-900',
          ].join(' ')}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        {/* ── Left: Form ── */}
        <div className="px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14 overflow-y-auto custom-scrollbar flex-1">
          {status !== 'done' ? (
            <>
              <span className="inline-block text-xs font-semibold tracking-wider uppercase text-accent mb-2 md:mb-3">
                Quick Booking
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl leading-tight text-neutral-900 mb-2 md:mb-3 pr-8">
                Let’s get you seen <span className="text-accent italic">soon.</span>
              </h2>
              <p className="text-neutral-500 text-sm md:text-base leading-relaxed max-w-[42ch] mb-6 md:mb-8">
                Tell us a bit about what you need — we usually reply the same business day. Dental emergency? Let us know below.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
                <Field label="Full name">
                  <input
                    ref={firstFieldRef}
                    required
                    type="text"
                    placeholder="Jane Rivera"
                    value={form.name}
                    onChange={update('name')}
                    className={INPUT_CLASS}
                  />
                </Field>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <Field label="Phone">
                    <input
                      required
                      type="tel"
                      placeholder="(480) 555-0134"
                      value={form.phone}
                      onChange={update('phone')}
                      className={INPUT_CLASS}
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      type="email"
                      placeholder="jane@email.com"
                      value={form.email}
                      onChange={update('email')}
                      className={INPUT_CLASS}
                    />
                  </Field>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <Field label="Reason for visit">
                    <CustomReasonDropdown
                      value={form.reason}
                      onChange={(val) => setForm((f) => ({ ...f, reason: val }))}
                      options={REASONS}
                    />
                  </Field>
                  <Field label="Preferred date">
                      <input
                        type="date"
                        value={form.date}
                        onChange={update('date')}
                        onClick={(e) => {
                          if (typeof e.currentTarget.showPicker === 'function') {
                            e.currentTarget.showPicker();
                          }
                        }}
                        className={INPUT_CLASS}
                      />
                    </Field>
                </div>

                <Field label="Message (optional)">
                  <textarea
                    rows={3}
                    placeholder="Anything we should know before your visit?"
                    value={form.message}
                    onChange={update('message')}
                    className={[INPUT_CLASS, 'resize-none'].join(' ')}
                  />
                </Field>

                <SmsConsent
                  id="booking-modal-sms-consent"
                  checked={smsConsent}
                  onChange={setSmsConsent}
                />

                <FormPurpose />

                {error && (
                  <div
                    role="alert"
                    className="rounded-xl border border-red-500/30 bg-red-500/5 px-4 py-3 text-sm text-red-600"
                  >
                    {error}
                  </div>
                )}

                {/* ── Action Buttons Container ── */}
                <div className="mt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className={[
                      'w-full sm:w-auto inline-flex items-center justify-center gap-2',
                      'rounded-xl bg-coral text-ink font-medium text-base sm:text-[15px]',
                      'px-8 py-3.5 sm:py-3 shadow-lg shadow-coral/20',
                      'transition-all duration-300 ease-out',
                      'hover:-translate-y-0.5 hover:bg-coral/90 hover:shadow-coral/30 active:translate-y-0 disabled:opacity-70 disabled:translate-y-0',
                    ].join(' ')}
                  >
                    {status === 'submitting' ? 'Sending…' : 'Request My Visit'}
                    {status !== 'submitting' && (
                      <svg width="16" height="12" viewBox="0 0 16 12" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M1 6H15M15 6L10 1M15 6L10 11" />
                      </svg>
                    )}
                  </button>

                  <a
                    href="tel:+14808028188"
                    className={[
                      'w-full sm:w-auto inline-flex items-center justify-center gap-2',
                      'rounded-xl border border-red-500/30 bg-red-500/5 text-red-500 font-medium text-base sm:text-[15px]',
                      'px-6 py-3.5 sm:py-3',
                      'transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-red-500/10 hover:border-red-500/40 active:translate-y-0',
                    ].join(' ')}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    Emergency? Call Us
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] sm:text-xs text-neutral-400 mt-2 pb-4 md:pb-0">
                  <span>Same-day emergency slots</span>
                  <Dot />
                  <span>Most PPO plans accepted</span>
                </div>
              </form>
            </>
          ) : (
            <div className="py-10 md:pt-10 h-full flex flex-col justify-center min-h-[50vh]">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-coral/10 border border-coral/20 flex items-center justify-center mb-6 text-accent">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4.5 4.5L19 8" />
                </svg>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-neutral-900 mb-3 md:mb-4">
                You’re on <span className="text-accent italic">our list.</span>
              </h2>
              <p className="text-neutral-500 text-sm md:text-base leading-relaxed max-w-[42ch] mb-6 md:mb-8">
                Thanks{form.name ? `, ${form.name.split(' ')[0]}` : ''} — our team will reach out
                 to confirm your visit. For anything urgent, call us directly.
              </p>
              <a
                href="tel:+14808028188"
                className="font-serif text-xl sm:text-2xl text-accent hover:text-accent/80 transition-colors"
              >
                (480) 802-8188
              </a>
              <button
                type="button"
                onClick={onClose}
                className="self-start mt-8 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                ← Return to site
              </button>
            </div>
          )}
        </div>

        {/* ── Right: Visual panel ── */}
        <div className="relative hidden md:flex flex-col justify-between overflow-hidden bg-neutral-900 px-9 py-10 text-white">
          <img 
            src="https://geimshospital.com/wp-content/uploads/2025/03/Dental-img.jpg" 
            alt="Modern dental clinic" 
            className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-coral/40 via-neutral-900/20 to-neutral-900/90 pointer-events-none" />

          <div className="absolute top-7 -right-12 rotate-[38deg] bg-coral text-ink text-[10px] font-bold tracking-widest uppercase px-14 py-2 shadow-lg z-10">
            Same-day appts
          </div>

          <div className="relative z-10 mt-auto">
            <div className="mb-8 max-w-[28ch]">
              <p className="font-serif italic text-xl leading-snug mb-3 text-white">
                “Everyone here is so nice and professional — the best dental care I’ve had in my whole life.”
              </p>
              <p className="text-xs text-white/70 tracking-wide uppercase">— Joyce F., Google review</p>
            </div>

            <div>
              <h3 className="font-serif text-2xl mb-1 text-white">
                Your best smile <span className="text-accent/90 italic">starts here.</span>
              </h3>
              <p className="text-sm text-white/70">Fulton Ranch · Chandler, AZ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Small helpers ──────────────────────────────────────── */

const INPUT_CLASS = [
  'w-full rounded-xl border border-neutral-200 bg-neutral-50/50',
  'px-4 py-3 md:py-3.5 text-base md:text-[15px] font-sans text-neutral-900 shadow-sm',
  'placeholder:text-neutral-400 outline-none',
  'transition-all duration-200 ease-out',
  'focus:border-coral focus:bg-white focus:ring-4 focus:ring-coral/10',
].join(' ');

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5 md:gap-2">
      <span className="text-[13px] md:text-sm font-medium text-neutral-700">{label}</span>
      {children}
    </label>
  );
}

function Dot() {
  return <span className="w-1 h-1 rounded-full bg-coral inline-block" />;
}

function CustomReasonDropdown({ 
  value, 
  onChange, 
  options 
}: { 
  value: string; 
  onChange: (val: string) => void; 
  options: readonly string[]; 
}) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={[
          'w-full flex items-center justify-between',
          'rounded-xl border bg-neutral-50/50',
          'px-4 py-3 md:py-3.5 text-base md:text-[15px] font-sans shadow-sm outline-none',
          'transition-all duration-200 ease-out',
          open 
            ? 'border-coral bg-white ring-4 ring-coral/10' 
            : 'border-neutral-200 hover:border-neutral-300',
          value ? 'text-neutral-900' : 'text-neutral-400'
        ].join(' ')}
      >
        <span>{value || 'Select an option'}</span>

        {/* Custom Chevron - replaces the native select arrow */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`transition-transform duration-300 text-neutral-500 ${
            open ? 'rotate-180' : ''
          }`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-white border border-neutral-100 rounded-xl overflow-hidden z-50 shadow-xl max-h-60 overflow-y-auto custom-scrollbar">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
              className="w-full text-left px-4 py-3 text-base md:text-[15px] text-neutral-600 hover:bg-neutral-50 hover:text-accent transition-colors"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}