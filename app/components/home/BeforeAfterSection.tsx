'use client';

import { useState } from 'react';
import { useScrollReveal } from '@/app/lib/useScrollReveal';

// Updated to take separate before and after images
const CASES = [
  {
    label: 'Porcelain Veneers',
    note: 'Smile makeover · 8 veneers',
    beforeAlt: 'Before porcelain veneers',
    afterAlt: 'After porcelain veneers',
    beforeImg: '/assets/cosmetic-before.png', // placeholder
    afterImg: '/assets/cosmetic-after.png',   // placeholder
  },
  {
    label: 'Teeth Whitening',
    note: 'ZOOM! in-office whitening',
    beforeAlt: 'Before teeth whitening',
    afterAlt: 'After teeth whitening',
    beforeImg: '/assets/preventive-before.png', // placeholder
    afterImg: '/assets/preventive-after.png',   // placeholder
  },
  {
    label: 'Dental Implant',
    note: 'Single implant + crown',
    beforeAlt: 'Before dental implant',
    afterAlt: 'After dental implant',
    beforeImg: '/assets/implant-before.png', // placeholder
    afterImg: '/assets/implant-after.png',   // placeholder
  },
] as const;

export default function BeforeAfterSection() {
  const [leadRef, leadIn] = useScrollReveal();

  return (
    <section className="py-section bg-panel">
      <div className="lg:px-site max-w-[90%] mx-auto">

        {/* Lead */}
        <div
          ref={leadRef as React.RefObject<HTMLDivElement>}
          className={[
            'flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12',
            'transition-all duration-1000 ease-out',
            leadIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ].join(' ')}
        >
          <div>
            <span className="inline-block text-[11.5px] font-medium tracking-eyebrow uppercase text-accent font-sans mb-4">
              Smile Gallery
            </span>
            <h2 className="font-serif font-light text-3xl lg:text-[clamp(40px,4.6vw,80px)] leading-[1.05] tracking-[-0.02em] text-ink">
              Real results from{' '}
              <em className="not-italic text-accent">real patients</em>.
            </h2>
          </div>
          <p className="text-body text-[14px] font-light leading-[1.7] max-w-[36ch] md:text-right">
            Patient results shared with permission. Individual outcomes vary.
          </p>
        </div>

        {/* Cases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
          {CASES.map((c, i) => (
            <BeforeAfterCard key={c.label} cas={c} delay={i * 0.1} />
          ))}
        </div>

        {/* Gallery coming soon notice */}
        <div className="mt-8 rounded-[16px] border border-dashed border-line px-6 py-5 text-center">
          <p className="text-body text-[13.5px] font-light">
            Full smile gallery coming soon. In the meantime,{' '}
            <a href="/contact-us" className="text-accent underline underline-offset-4 decoration-coral/40 hover:decoration-coral transition-colors">
              ask Dr. Shriya about smile makeover options
            </a>{' '}
            at your consultation.
          </p>
        </div>

      </div>
    </section>
  );
}

function BeforeAfterCard({
  cas,
  delay,
}: {
  cas: (typeof CASES)[number];
  delay: number;
}) {
  const [ref, inView] = useScrollReveal();
  const [sliderPos, setSliderPos] = useState(50); // Start at 50%

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="transition-all duration-1000 ease-out"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(28px)',
        transitionDelay: `${delay}s`,
      }}
    >
      {/* Interactive Slider Area */}
      <div className="relative rounded-[18px] overflow-hidden aspect-[4/3] border border-line select-none">
        
        {/* Base Image (After) */}
        <img
          src={cas.afterImg}
          alt={cas.afterAlt}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* Clipped Image (Before) */}
        <div 
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <img
            src={cas.beforeImg}
            alt={cas.beforeAlt}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
        </div>

        {/* The Slider Handle (Visuals only) */}
        <div 
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_5px_rgba(0,0,0,0.3)] pointer-events-none z-10"
          style={{ left: `${sliderPos}%` }}
        >
          {/* Pause/Drag Icon Pill */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg text-gray-800">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l-6-6 6-6" />
              <path d="M15 6l6 6-6 6" />
            </svg>
          </div>
        </div>

        {/* Invisible Native Input (Handles all the interaction logic) */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPos}
          onChange={(e) => setSliderPos(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20 m-0 p-0"
        />

        {/* Labels */}
        <span className="absolute top-3 left-3 text-[10.5px] tracking-[0.12em] uppercase text-ink/60 bg-bg/50 backdrop-blur-sm px-2 py-1 rounded-full pointer-events-none z-10">Before</span>
        <span className="absolute top-3 right-3 text-[10.5px] tracking-[0.12em] uppercase text-ink/60 bg-bg/50 backdrop-blur-sm px-2 py-1 rounded-full pointer-events-none z-10">After</span>
      </div>

      {/* Caption */}
      <div className="mt-4 px-1">
        <p className="font-serif text-[17px] text-ink">{cas.label}</p>
        <p className="text-body text-[13px] font-light mt-0.5">{cas.note}</p>
      </div>
    </div>
  );
}