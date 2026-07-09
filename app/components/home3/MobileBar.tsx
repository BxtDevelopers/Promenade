import Link from 'next/link'
import { Phone, Calendar, MapPin } from 'lucide-react'

const BASE = 'https://promenade-dental.vercel.app'

export default function MobileBar() {
  return (
    <>
      {/* Sticky bar — shown only on mobile */}
      <div
        id="mobile-bar"
        className="fixed left-0 right-0 bottom-0 z-[80] grid grid-cols-3 md:hidden bg-[rgba(11,28,44,0.97)] backdrop-blur-[10px] border-t border-[rgba(244,236,221,0.14)]"
      >
        <Link
          href="tel:+14808028188"
          className="flex flex-col items-center justify-center gap-[5px] p-[11px_6px] no-underline text-coral text-[10.5px] tracking-[0.1em] uppercase font-medium"
        >
          <Phone className="w-[19px] h-[19px]" strokeWidth={1.7} />
          Call
        </Link>

        <Link
          href={`/contact-us`}
          className="flex flex-col items-center justify-center gap-[5px] p-[11px_6px] no-underline text-bg bg-coral font-semibold text-[10.5px] tracking-[0.1em] uppercase"
        >
          <Calendar className="w-[19px] h-[19px]" strokeWidth={1.7} />
          Book
        </Link>

        <Link
          href="https://maps.app.goo.gl/ufAu9qeLdfAFBAMr9"
          className="flex flex-col items-center justify-center gap-[5px] p-[11px_6px] no-underline text-white text-[10.5px] tracking-[0.1em] uppercase font-medium"
        >
          <MapPin className="w-[19px] h-[19px]" strokeWidth={1.7} />
          Directions
        </Link>
      </div>

      {/* Spacer so content doesn't sit under bar on mobile */}
      <div className="h-[64px] md:hidden" />
    </>
  )
}