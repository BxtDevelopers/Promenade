'use client'

import { useBookingModal } from './BookingModalProvider'

/**
 * Opens the booking modal. Exists so that a server component can render a
 * booking CTA without becoming a client component itself — only the button
 * needs the context.
 */
export default function BookButton({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const { openBookingModal } = useBookingModal()

  return (
    <button type="button" onClick={openBookingModal} className={className}>
      {children}
    </button>
  )
}
