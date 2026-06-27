import Link from 'next/link'

const BASE = 'https://promenade-dental.vercel.app'

export default function MobileBar() {
  return (
    <>
      {/* Sticky bar — shown only on mobile via CSS */}
      <div
        className="fixed left-0 right-0 bottom-0 z-[80] hidden sm:hidden"
        id="mobile-bar"
        style={{
          display:        'grid',
          gridTemplateColumns: 'repeat(3,1fr)',
          background:     'rgba(11,28,44,0.97)',
          backdropFilter: 'blur(10px)',
          borderTop:      '1px solid rgba(244,236,221,0.14)',
        }}
      >
        <Link
          href="tel:+14808028188"
          className="flex flex-col items-center justify-center gap-[5px] no-underline text-ivory text-[10.5px] tracking-[0.1em] uppercase font-medium"
          style={{ padding: '11px 6px' }}
        >
          <svg viewBox="0 0 24 24" className="w-[19px] h-[19px]" style={{ stroke: 'currentColor', fill: 'none', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
            <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
          </svg>
          Call
        </Link>

        <Link
          href={`${BASE}/contact-us`}
          className="flex flex-col items-center justify-center gap-[5px] no-underline text-bg font-semibold text-[10.5px] tracking-[0.1em] uppercase"
          style={{ padding: '11px 6px', background: 'var(--coral)' }}
        >
          <svg viewBox="0 0 24 24" className="w-[19px] h-[19px]" style={{ stroke: 'currentColor', fill: 'none', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
            <rect x="3" y="4.5" width="18" height="17" rx="2" />
            <path d="M3 9h18M8 2.5v4M16 2.5v4" />
          </svg>
          Book
        </Link>

        <Link
          href="https://maps.app.goo.gl/ufAu9qeLdfAFBAMr9"
          className="flex flex-col items-center justify-center gap-[5px] no-underline text-ivory text-[10.5px] tracking-[0.1em] uppercase font-medium"
          style={{ padding: '11px 6px' }}
        >
          <svg viewBox="0 0 24 24" className="w-[19px] h-[19px]" style={{ stroke: 'currentColor', fill: 'none', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
            <path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11Z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
          Directions
        </Link>
      </div>

      {/* Spacer so content doesn't sit under bar on mobile */}
      <div className="h-[64px] md:hidden" />
    </>
  )
}