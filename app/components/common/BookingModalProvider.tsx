'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import BookingModal from './BookingModal';

interface BookingModalContextValue {
  openBookingModal: () => void;
  closeBookingModal: () => void;
}

const BookingModalContext = createContext<BookingModalContextValue | null>(null);
export function BookingModalProvider({ children }: { children: React.ReactNode }) {
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
      <BookingModal open={open} onClose={closeBookingModal} />
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