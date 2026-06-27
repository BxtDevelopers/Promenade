'use client';

export default function StickyMobileFooter() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-bg border-t border-line safe-area-pb">
      <div className="grid grid-cols-3 divide-x divide-line">

        <a
          href="tel:+14808028188"
          className="flex flex-col items-center gap-1 py-3 px-2 text-ivory hover:text-coral transition-colors active:bg-white/5"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d="M4 4h4l1.5 3.5-2 1.5a9 9 0 0 0 3.5 3.5l1.5-2L16 12v4a1 1 0 0 1-1 1C7 17 3 11 3 5a1 1 0 0 1 1-1Z"
              stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"
            />
          </svg>
          <span className="text-[11px] tracking-[0.04em] uppercase font-medium">Call</span>
        </a>

        <a
          href="#book"
          className="flex flex-col items-center gap-1 py-3 px-2 bg-coral text-bg hover:bg-coral/90 transition-colors active:bg-coral/80"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <rect x="3" y="4" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.4"/>
            <path d="M7 2v3M13 2v3M3 8h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
          <span className="text-[11px] tracking-[0.04em] uppercase font-semibold">Book</span>
        </a>

        <a
          href="https://maps.app.goo.gl/ufAu9qeLdfAFBAMr9"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-3 px-2 text-ivory hover:text-coral transition-colors active:bg-white/5"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d="M10 2a6 6 0 0 1 6 6c0 4-6 10-6 10S4 12 4 8a6 6 0 0 1 6-6Z"
              stroke="currentColor" strokeWidth="1.4"
            />
            <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.4"/>
          </svg>
          <span className="text-[11px] tracking-[0.04em] uppercase font-medium">Directions</span>
        </a>

      </div>
    </div>
  );
}