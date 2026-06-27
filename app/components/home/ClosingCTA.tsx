'use client';

import React from 'react';
import { useScrollReveal } from '@/app/lib/useScrollReveal';

export default function ClosingCTA() {
  const [h1Ref, h1Vis] = useScrollReveal();
  const [textRef, textVis] = useScrollReveal();
  const [rowRef, rowVis] = useScrollReveal();

  return (
    <section className="relative overflow-hidden py-10 lg:py-32 text-center">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(60% 80% at 50% 50%, rgba(232,154,114,0.14), transparent 65%)',
        }}
      />

      <div className="relative max-w-[1240px] mx-auto px-[clamp(22px,4vw,60px)]">
        <span className="block mb-[22px] text-[11.5px] tracking-eyebrow uppercase font-medium text-coral">
          Always Welcoming New Patients
        </span>

        <h2
          ref={h1Ref as React.RefObject<HTMLHeadingElement>}
          className="font-serif font-light text-[clamp(40px,7vw,96px)] leading-[1.1] tracking-[-0.03em] text-ivory"
          style={{
            opacity: h1Vis ? 1 : 0,
            transform: h1Vis ? 'none' : 'translateY(34px)',
            transition: 'opacity 1s ease, transform 1s cubic-bezier(0.16,0.84,0.34,1)',
          }}
        >
          Ready to find a dentist{' '}
          <br />
          <em className="italic text-coral">you actually like?</em>
        </h2>

        <div
          ref={textRef as React.RefObject<HTMLDivElement>}
          className="max-w-[600px] mx-auto mt-[26px] text-muted text-[15px] md:text-[16px] font-light leading-[1.8]"
          style={{
            opacity: textVis ? 1 : 0,
            transform: textVis ? 'none' : 'translateY(34px)',
            transition: 'opacity 1s ease 0.05s, transform 1s cubic-bezier(0.16,0.84,0.34,1) 0.05s',
          }}
        >
          <p>
            Whether it's a long-overdue cleaning, a smile you've been wanting to fix, or a tooth that's been hurting for longer than it should — we're here, and we're easy to reach.
          </p>
          <p className="mt-4">
            Book online or call us at{' '}
            <a href="tel:+14808028188" className="text-ivory hover:text-coral transition-colors">
              (480) 802-8188
            </a>
            . Same-day appointments are often available.
          </p>
        </div>

        <div
          ref={rowRef as React.RefObject<HTMLDivElement>}
          className="flex items-center justify-center gap-[18px] mt-[40px] flex-wrap"
          style={{
            opacity: rowVis ? 1 : 0,
            transform: rowVis ? 'none' : 'translateY(34px)',
            transition: 'opacity 1s ease 0.1s, transform 1s cubic-bezier(0.16,0.84,0.34,1) 0.1s',
          }}
        >
          {/* Primary */}
          <button className="bg-coral hover:bg-coral/90 text-bg border-none px-[30px] py-[17px] rounded-full font-sans text-[14px] tracking-[0.05em] uppercase font-semibold transition-all duration-300 cursor-pointer">
            Book an Appointment
          </button>

          {/* Secondary */}
          <a
            href="tel:+14808028188"
            className="border border-line hover:border-ivory text-ivory bg-transparent px-[30px] py-[17px] rounded-full font-sans text-[14px] tracking-[0.05em] uppercase font-medium transition-all duration-300"
          >
            Call (480) 802-8188
          </a>
        </div>

      </div>
    </section>
  );
}

