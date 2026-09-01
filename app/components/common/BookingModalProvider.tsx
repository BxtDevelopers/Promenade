'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import BookingModal from './BookingModal';
import DentvaBookingModal from './DentvaBookingModal';
import NexHealthBookingModal from './NexHealthBookingModal';
import type { BookingWidgetConfig } from '@/app/lib/bookingConfig';

interface BookingModalContextValue {
  openBookingModal: () => void;
  closeBookingModal: () => void;
}

const BookingModalContext = createContext<BookingModalContextValue | null>(null);

/**
 * Single seam for booking.
 *
 * Every "book an appointment" CTA on the site — eighteen of them at last
 * count — calls openBookingModal(). Which modal that opens is decided here and
 * nowhere else, so swapping the booking mechanism is a one-file change rather
 * than a site-wide edit.
 *
 * `widgetConfig` is resolved on the server (lib/bookingConfig.ts). When it is
 * null — no token set, or a preview deployment — booking falls back to the
 * in-house request form. That is a real booking path, not a broken one, so an
 * unconfigured or expired token degrades to same-day callback rather than to a
 * dead button.
 */
export function BookingModalProvider({
  children,
  widgetConfig = null,
  nexHealthEnabled = false,
}: {
  children: React.ReactNode;
  widgetConfig?: BookingWidgetConfig | null;
  /*
   * A boolean, not the config. The NexHealth credentials never leave the
   * server — the client only needs to know which experience to render, and the
   * route handlers hold everything else.
   */
  nexHealthEnabled?: boolean;
}) {
  const [open, setOpen] = useState(false);

  const openBookingModal = useCallback(() => setOpen(true), []);
  const closeBookingModal = useCallback(() => setOpen(false), []);

  const value = useMemo(
    () => ({ openBookingModal, closeBookingModal }),
    [openBookingModal, closeBookingModal],
  );

  return (
    <BookingModalContext.Provider value={value}>
      {children}
      {/*
        Preference order, most to least capable: first-party scheduling, then
        the embedded widget, then the request form. Each falls through to the
        next when unconfigured, so there is no combination of environment
        variables that produces a dead booking button.
      */}
      {nexHealthEnabled ? (
        <NexHealthBookingModal open={open} onClose={closeBookingModal} />
      ) : widgetConfig ? (
        <DentvaBookingModal open={open} onClose={closeBookingModal} config={widgetConfig} />
      ) : (
        <BookingModal open={open} onClose={closeBookingModal} />
      )}
    </BookingModalContext.Provider>
  );
}

export function useBookingModal() {
  const ctx = useContext(BookingModalContext);
  if (!ctx) {
    throw new Error('useBookingModal must be used within a <BookingModalProvider>');
  }
  return ctx;
}
