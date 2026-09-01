'use client';

import { useEffect, useRef, useState } from 'react';
import { DENTVA_ORIGIN, type BookingWidgetConfig } from '@/app/lib/bookingConfig';
import { trackLead } from '@/app/lib/analytics';

export interface DentvaBookingModalProps {
  open: boolean;
  onClose: () => void;
  config: BookingWidgetConfig;
}

/**
 * Real-time scheduling, rendered inside our own modal chrome.
 *
 * Dentva documents two integrations. We use the inline embed (their "Option
 * 2") rather than the popup script (their "Option 1") for three reasons:
 *
 *   1. The popup works by loading embed.js in <head> on every page and binding
 *      to any button carrying a `clean-book` class. That is a third-party
 *      script on every route, executing for the ~99% of visits that never open
 *      the booking modal. The iframe below is not requested until `open` is
 *      true, so a visitor who never books pays nothing for it.
 *
 *   2. Eighteen call sites already open booking through useBookingModal().
 *      A class-based binding cannot be triggered programmatically, so adopting
 *      the popup would mean rewriting every one of them and giving up the
 *      single seam.
 *
 *   3. The dialog semantics here — focus move, Escape to close, body scroll
 *      lock, backdrop click — are already implemented and tested for the
 *      in-house form. Reusing them keeps one accessible modal on the site
 *      instead of two that behave differently.
 */
export default function DentvaBookingModal({ open, onClose, config }: DentvaBookingModalProps) {
  /*
   * The dialog is a separate component mounted only while open, rather than
   * one component that early-returns null. Both render the same thing, but
   * unmounting means `loaded` and the reported-conversion guard are fresh on
   * every open by construction — there is no reset effect to forget, and no
   * chance of a second booking inheriting the first one's "already reported"
   * flag and going uncounted.
   */
  if (!open) return null;
  return <BookingWidgetDialog onClose={onClose} config={config} />;
}

function BookingWidgetDialog({
  onClose,
  config,
}: Omit<DentvaBookingModalProps, 'open'>) {
  const [mounted, setMounted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  /*
   * Conversion reporting must fire at most once per opening. The widget is
   * free to emit its completion event more than once (a re-render on their
   * side, a confirmation screen that remounts), and each extra call would be
   * counted by Google Ads as another booked appointment — inflating exactly
   * the number Smart Bidding optimises against.
   */
  const reported = useRef(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true));
    const focusTimer = setTimeout(() => closeRef.current?.focus(), 300);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(focusTimer);
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    // Read by globals.css to hide Cherry's floating estimator, which paints
    // over this dialog from a z-index we cannot outrank.
    document.body.dataset.modalOpen = 'true';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
      delete document.body.dataset.modalOpen;
    };
  }, [onClose]);

  /*
   * Conversion tracking across the iframe boundary.
   *
   * The in-house form reports a lead itself, because it owns the request and
   * knows the API accepted it. A booking completed inside a cross-origin frame
   * is invisible to us: we cannot read the frame, and no navigation happens on
   * our side. Without a signal from Dentva, moving booking into the widget
   * would silently stop reporting the `generate_lead` conversion that the
   * Google Ads lead action and the ChatGPT pixel both depend on.
   *
   * So we listen for one. The origin is pinned to DENTVA_ORIGIN — a message
   * listener that does not check its origin will happily take instructions
   * from any page that can reach this window.
   *
   * The event NAME below is a guess, and is the one part of this file that
   * needs confirming with Dentva. It matches on several plausible spellings so
   * that a reasonable contract works on day one, but "no conversions recorded"
   * is a silent failure. Verify against a real test booking before spending on
   * ads that optimise toward it.
   */
  useEffect(() => {
    const COMPLETION_EVENTS = new Set([
      'booking_complete',
      'booking_completed',
      'appointment_booked',
      'booking:success',
      'clean-book:success',
    ]);

    const onMessage = (event: MessageEvent) => {
      if (event.origin !== DENTVA_ORIGIN) return;

      const data = event.data;
      const name =
        typeof data === 'string'
          ? data
          : typeof data === 'object' && data !== null
            ? ((data as Record<string, unknown>).type ??
               (data as Record<string, unknown>).event ??
               (data as Record<string, unknown>).name)
            : undefined;

      if (typeof name !== 'string' || !COMPLETION_EVENTS.has(name)) return;
      if (reported.current) return;

      reported.current = true;
      trackLead('booking_request', { booking_method: 'dentva_widget' });
    };

    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

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
          /*
           * The frame is cross-origin, so its content height is unknowable to
           * us and the dialog cannot size itself to fit. Two failure modes sit
           * on either side of this, and both have already happened here:
           *
           *   - Let the frame absorb the leftover space, and on a laptop it
           *     gets ~530px. Dentva's own snippet asks for 700, so their
           *     "Next" button lands below the cut with no way to reach it —
           *     the booking flow is unusable from step one.
           *   - Let the frame carry its full height unconstrained, and the
           *     dialog runs past the viewport and clips its own footer.
           *
           * So: the frame keeps the height Dentva asks for (below), and the
           * region holding it scrolls when the viewport cannot fit it. The
           * dialog itself grows toward 52rem where there is room.
           *
           * max-h-full is not redundant with 95vh: the backdrop pads itself,
           * so the space actually available is the viewport minus that
           * padding. Without the cap the dialog resolves against the full
           * viewport and overflows its container by exactly the padding.
           */
          'relative w-full max-w-[95%] sm:max-w-lg md:max-w-2xl h-[min(52rem,95vh)] max-h-full flex flex-col overflow-hidden',
          'rounded-[20px] md:rounded-[24px] bg-white shadow-2xl',
          'transition-all duration-[450ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]',
          mounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.96]',
        ].join(' ')}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close booking widget"
          className={[
            'absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-10 h-10 rounded-full flex items-center justify-center',
            'bg-neutral-100 text-neutral-500 transition-all duration-300 ease-out',
            'hover:rotate-90 hover:bg-neutral-200 hover:text-neutral-900',
          ].join(' ')}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className="flex-none px-5 pt-8 pb-2 sm:px-8 sm:pt-10">
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-accent mb-2">
            Book Online
          </span>
          {/* Not "pick a time": the widget's first step asks for name, date of
              birth and contact details, and time selection is step two of
              three. A header promising a calendar sets up the wrong
              expectation for the screen directly beneath it. */}
          <h2 className="font-serif text-2xl sm:text-3xl leading-tight text-neutral-900 mb-2 pr-8">
            Book your <span className="text-accent italic">appointment.</span>
          </h2>
        </div>

        {/* min-h-0 lets this shrink below its content; without it a flex child
            refuses to go under its intrinsic size and overflows the dialog.
            overflow-y-auto is what makes the short-viewport case survivable:
            the frame keeps its full height and the patient scrolls to it. */}
        <div className="relative min-h-0 flex-1 overflow-y-auto px-2 pb-2 sm:px-4 sm:pb-4">
          {/*
            The placeholder sits behind the iframe rather than replacing it, so
            the frame begins loading immediately on open instead of waiting for
            a state flip. A patient who came from a "book now" ad should not
            watch a spinner while we decide to start the request.
          */}
          {!loaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-neutral-400">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-neutral-200 border-t-accent" />
              <p className="text-sm">Loading available times…</p>
            </div>
          )}

          <iframe
            src={config.url}
            title="Book an appointment with Promenade Dental"
            onLoad={() => setLoaded(true)}
            className={[
              /* 700px is the height Dentva's own embed snippet specifies.
                 Their form is not internally scrollable, so anything shorter
                 hides the bottom of the step — including its Next button. */
              'h-[700px] w-full rounded-[12px] border border-[#e5e7eb] transition-opacity duration-300',
              loaded ? 'opacity-100' : 'opacity-0',
            ].join(' ')}
          />
        </div>

        {/*
          A scheduling widget is a third-party dependency on a healthcare site.
          If it fails to load, is blocked by an extension, or the practice's
          availability is empty, the patient must still have a way through —
          hence the number, always visible and not dependent on the frame.
        */}
        <p className="flex-none px-5 pb-5 text-center text-sm text-neutral-500 sm:px-8 sm:pb-6">
          Prefer to talk to someone?{' '}
          <a href="tel:+14808028188" className="font-medium text-accent hover:underline">
            Call (480) 802-8188
          </a>
        </p>
      </div>
    </div>
  );
}
