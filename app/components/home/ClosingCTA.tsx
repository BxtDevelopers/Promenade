'use client';

import React, { useState } from 'react';
import { useScrollReveal } from '@/app/lib/useScrollReveal';

export default function ClosingCTA() {
  const [h1Ref, h1Vis] = useScrollReveal();
  const [rowRef, rowVis] = useScrollReveal();
  const [addrRef, addrVis] = useScrollReveal();

  return (
    <section className="relative overflow-hidden pt-[clamp(20px,5vw,20px)] pb-10  lg:pb-32 text-center">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(60% 80% at 50% 50%, rgba(232,154,114,0.14), transparent 65%)',
        }}
      />

      <div className="relative max-w-[1240px] mx-auto px-[clamp(22px,4vw,60px)]">
        <span className="block mb-[22px] text-[11.5px] tracking-eyebrow uppercase font-medium text-coral">
          New patients welcome
        </span>

        <h2
          ref={h1Ref as React.RefObject<HTMLHeadingElement>}
          className="font-serif font-light text-[clamp(40px,7vw,96px)] leading-none tracking-[-0.03em] text-ivory"
          style={{
            opacity: h1Vis ? 1 : 0,
            transform: h1Vis ? 'none' : 'translateY(34px)',
            transition:
              'opacity 1s ease, transform 1s cubic-bezier(0.16,0.84,0.34,1)',
          }}
        >
          Your best smile
          <br />
          <em className="italic text-coral">starts here.</em>
        </h2>

        <div
          ref={rowRef as React.RefObject<HTMLDivElement>}
          className="flex items-center justify-center gap-[18px] mt-[44px] flex-wrap"
          style={{
            opacity: rowVis ? 1 : 0,
            transform: rowVis ? 'none' : 'translateY(34px)',
            transition:
              'opacity 1s ease 0.1s, transform 1s cubic-bezier(0.16,0.84,0.34,1) 0.1s',
          }}
        >
          <CTAButton />
          <GhostButton />
        </div>

        <div
          ref={addrRef as React.RefObject<HTMLDivElement>}
          className="mt-[50px] text-muted text-[14px] font-light leading-[1.9]"
          style={{
            opacity: addrVis ? 1 : 0,
            transform: addrVis ? 'none' : 'translateY(34px)',
            transition:
              'opacity 1s ease 0.2s, transform 1s cubic-bezier(0.16,0.84,0.34,1) 0.2s',
          }}
        >
          <b className="text-ivory font-medium">
            Most major PPO plans accepted · New patients welcome
          </b>
          <br />
          Promenade Dental — Fulton Ranch · 4905 S. Alma School Road, Suite 1 ·
          Chandler, AZ 85248
          <br />
          (480) 802-8188 · Mon–Fri 8am–7pm · Sat 9am–5pm
        </div>
      </div>
    </section>
  );
}

function CTAButton() {
  return (
    <button
      className="
        inline-flex items-center gap-3
        bg-coral hover:bg-ivory
        text-bg
        border-0
        font-sans font-semibold
        text-[14px]
        tracking-[0.05em]
        uppercase
        px-[30px]
        py-[17px]
        rounded-full
        whitespace-nowrap
        transition-all
        duration-300
        hover:-translate-y-[2px]
        shadow-btn
      "
    >
      Book an Appointment →
    </button>
  );
}

function GhostButton() {
  return (
    <button
      className="
        border border-line
        hover:border-ivory
        text-ivory
        bg-transparent
        px-[30px]
        py-[17px]
        rounded-full
        font-sans
        text-[14px]
        tracking-[0.05em]
        uppercase
        font-medium
        transition-all
        duration-300
      "
    >
      New-patient exam · $99
    </button>
  );
}