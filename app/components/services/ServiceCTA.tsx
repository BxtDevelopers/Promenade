'use client';

import React from 'react';
import { useScrollReveal } from '@/app/lib/useScrollReveal';

const ADDRESS = '4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248';
const PHONE = '(480) 802-8188';
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `Promenade Dental, ${ADDRESS}`
)}`;

export default function ServiceCTA() {
  const [h1Ref, h1Vis] = useScrollReveal();
  const [textRef, textVis] = useScrollReveal();
  const [rowRef, rowVis] = useScrollReveal();
  const [addrRef, addrVis] = useScrollReveal();

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
  Comprehensive Dental Care in Chandler, AZ
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
  Find the right
  <br />
  <em className="italic text-coral">dental treatment.</em>
</h2>

<div
  ref={textRef as React.RefObject<HTMLDivElement>}
  className="max-w-[720px] mx-auto mt-[26px] text-muted text-[15px] md:text-[16px] font-light leading-[1.8]"
  style={{
    opacity: textVis ? 1 : 0,
    transform: textVis ? 'none' : 'translateY(34px)',
    transition:
      'opacity 1s ease 0.05s, transform 1s cubic-bezier(0.16,0.84,0.34,1) 0.05s',
  }}
>
  <p>
    Whether you need a dental cleaning, cosmetic smile improvement,
    tooth repair, a dental implant consultation, or emergency dental
    care, Promenade Dental helps you understand your options clearly
    and choose treatment that supports your long-term oral health.
  </p>

  <p className="mt-4">
    Schedule a visit with Dr. Shriya at Promenade Dental in Fulton
    Ranch, Chandler, AZ and take the next step toward a healthier,
    more confident smile.
  </p>
</div>

        <div
  ref={rowRef as React.RefObject<HTMLDivElement>}
  className="flex items-center justify-center gap-[18px] mt-[40px] flex-wrap"
  style={{
    opacity: rowVis ? 1 : 0,
    transform: rowVis ? 'none' : 'translateY(34px)',
    transition:
      'opacity 1s ease 0.1s, transform 1s cubic-bezier(0.16,0.84,0.34,1) 0.1s',
  }}
>
  <GhostButton />
  <CallButton />
</div>
      </div>
    </section>
  );
}

function CallButton() {
  return (
    <a
      href="tel:+14808028188"
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
      Call (480) 802-8188
    </a>
  );
}

function GhostButton() {
  return (
    <button
      className="
        bg-coral
        hover:bg-ivory
        text-bg
        px-[30px]
        py-[17px]
        rounded-full
        font-sans
        text-[14px]
        tracking-[0.05em]
        uppercase
        font-semibold
        transition-all
        duration-300
        hover:-translate-y-[2px]
        shadow-btn
      "
    >
      Book an Appointment
    </button>
  );
}