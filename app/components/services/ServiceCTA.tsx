'use client';

import React, { useEffect, useRef } from 'react';
import { useScrollReveal } from '@/app/lib/useScrollReveal';
import { useBookingModal } from '../common/BookingModalProvider';

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

  const archRef = useRef<SVGGElement>(null)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const group = archRef.current
    if (!group) return

    const CX = 500, CY = 560, AN = 15
    const arcs: SVGPathElement[] = []

    for (let a = 0; a < AN; a++) {
      const r = 82 + a * 33
      const p = document.createElementNS('http://www.w3.org/2000/svg', 'path')
      p.setAttribute('d', `M${CX - r} ${CY} A${r} ${r} 0 0 1 ${CX + r} ${CY}`)
      p.setAttribute('fill', 'none')
      p.setAttribute('stroke', (a === 4 || a === 9 || a === 13) ? 'rgba(232,154,114,0.4)' : 'rgba(244,236,221,0.14)')
      p.setAttribute('stroke-width', '1')
      p.setAttribute('stroke-linecap', 'round')
      
      // Added pathLength to ensure the 1 dasharray trick works consistently across all browsers
      p.setAttribute('pathLength', '1') 
      p.style.strokeDasharray = '1'
      p.style.strokeDashoffset = reduce ? '0' : '1'
      
      group.appendChild(p)
      arcs.push(p)
    }

    if (!reduce) {
      arcs.forEach((p, i) => {
        p.style.transition = `stroke-dashoffset 1.7s ease ${i * 0.055}s`
      })
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          arcs.forEach(p => { p.style.strokeDashoffset = '0' })
        })
      })
    }

    return () => { while (group.firstChild) group.removeChild(group.firstChild) }
  }, [])


  return (
    <section className="relative text-center overflow-hidden py-[clamp(84px,10vw,150px)] bg-bg-2">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_50%,rgba(232,154,114,0.14),transparent_65%)] z-0" />

      {/* Background Arch SVG */}
      <div className="absolute inset-0 z-0">
        <svg
          viewBox="0 0 1000 560"
          preserveAspectRatio="xMidYMax slice"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full"
        >
          <g ref={archRef} />
        </svg>
      </div>
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
  className="font-serif font-light text-[clamp(40px,7vw,96px)] leading-none tracking-[-0.03em] text-white"
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
        hover:border-coral
        text-white
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
    const { openBookingModal } = useBookingModal();
  return (
    <button
      onClick={openBookingModal}
      className="
        bg-coral
        hover:bg-ink
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