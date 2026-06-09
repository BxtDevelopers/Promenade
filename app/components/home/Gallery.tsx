'use client';

import React, { useState } from 'react';
import { useScrollReveal } from '@/app/lib/useScrollReveal';

const PANELS = [
  {
    img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=80',
    label: 'Reception',
    desc: 'A welcoming first impression with comfortable seating, warm lighting, and a team ready to make every visit feel effortless.',
  },
  {
    img: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=900&q=80',
    label: 'Treatment Suite',
    desc: 'Private, modern treatment rooms designed to maximize comfort while delivering exceptional clinical care.',
  },
  {
    img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&q=80',
    label: 'Technology',
    desc: 'Advanced imaging and diagnostic tools help us provide more accurate, efficient, and comfortable treatment.',
  },
  {
    img: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=900&q=80',
    label: 'Comfort Lounge',
    desc: 'A calming environment where patients can relax before and after their appointment in complete peace.',
  },
] as const;

export default function PracticeGallery() {
  const [active, setActive] = useState(0);
  const [headRef, headIn] = useScrollReveal();

  return (
    <section className="py-section bg-bg-2 relative overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_50%_0,rgba(232,154,114,0.08),transparent_60%)]" />

      <div className="relative px-site max-w-[1240px] mx-auto">

        {/* Heading */}
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={[
            'text-center max-w-[640px] mx-auto mb-[clamp(32px,5vw,64px)]',
            'transition-all duration-1000 ease-out',
            headIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ].join(' ')}
        >
          <span className="text-[11px] md:text-[11.5px] tracking-eyebrow uppercase font-medium text-coral">
            Inside Promenade
          </span>
          <h2 className="font-serif font-light text-3xl
            lg:text-[clamp(40px,4.6vw,80px)] leading-[1.05] tracking-[-0.02em] mt-4 mb-4 text-ivory">
            A space designed to put you{' '}
            <em className="not-italic text-coral">at ease</em>.
          </h2>
          {/* Hint changes based on device capability */}
          <p className="text-muted font-light text-[15px] md:text-[16px]">
            <span className="hidden md:inline">Hover to step through the space — calm, modern, and spotless.</span>
            <span className="md:hidden">Tap to step through the space — calm, modern, and spotless.</span>
          </p>
        </div>

        {/* Expanding panels — horizontal on md+, vertical stack on mobile */}
        <div
          className="hidden md:flex gap-[14px]"
          style={{ height: 'clamp(380px, 52vh, 520px)' }}
        >
          {PANELS.map((panel, i) => (
            <div
              key={panel.label}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              className={[
                'relative overflow-hidden cursor-pointer rounded-arch-xs',
                'bg-bg-2 bg-center bg-cover',
                'transition-[flex,filter] ease-[cubic-bezier(0.7,0,0.2,1)] duration-[650ms]',
                active === i ? 'filter-none' : 'brightness-[0.6] grayscale-[0.18]',
              ].join(' ')}
              style={{
                flex: active === i ? 4.6 : 1,
                backgroundImage: `url('${panel.img}')`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-bg/[0.86] via-transparent to-transparent" />
              <div
                className={[
                  'absolute z-[2] left-8 right-8 bottom-8',
                  'transition-all duration-500 ease-in-out',
                  active === i
                    ? 'opacity-100 translate-y-0 delay-[120ms]'
                    : 'opacity-0 translate-y-4',
                ].join(' ')}
              >
                <h3 className="font-serif text-[26px] text-ivory mb-3">
                  {panel.label}
                </h3>

                <p className="text-[15px] leading-relaxed text-ivory/80 max-w-[34ch]">
                  {panel.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Mobile: vertical tap-through stack */}
        <div className="md:hidden flex flex-col gap-[10px]">
          {PANELS.map((panel, i) => (
            <div
              key={panel.label}
              onClick={() => setActive(i)}
              className={[
                'relative overflow-hidden cursor-pointer rounded-arch-xs bg-center bg-cover',
                'transition-all ease-[cubic-bezier(0.7,0,0.2,1)] duration-[600ms]',
                active === i ? 'filter-none' : 'brightness-[0.55] grayscale-[0.2]',
              ].join(' ')}
              style={{
                height: active === i ? '260px' : '72px',
                backgroundImage: `url('${panel.img}')`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
              {/* Label always visible on mobile */}
              <div
                className={[
                  'absolute z-[2] left-5 right-5 bottom-5',
                  'font-serif text-ivory transition-all duration-400',
                  active === i ? 'text-[20px] opacity-100' : 'text-[14px] opacity-70',
                ].join(' ')}
              >
                <h3>
                {panel.label}
                </h3>

                <p className="text-[12px] leading-relaxed text-ivory/80 max-w-[34ch]">
                  {panel.desc}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}