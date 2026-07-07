'use client';

import React, { useEffect, useRef } from 'react';
import { useScrollReveal } from '@/app/lib/useScrollReveal';

export default function ClosingCTA() {
  const [h1Ref, h1Vis] = useScrollReveal();
  const [textRef, textVis] = useScrollReveal();
  const [rowRef, rowVis] = useScrollReveal();
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
          Always Welcoming New Patients
        </span>

        <h2
          ref={h1Ref as React.RefObject<HTMLHeadingElement>}
          className="font-serif font-light text-[clamp(40px,7vw,96px)] leading-[1.1] tracking-[-0.03em] text-white"
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
            <a href="tel:+14808028188" className="text-white hover:text-coral transition-colors">
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
            className="border border-line hover:border-coral text-white bg-transparent px-[30px] py-[17px] rounded-full font-sans text-[14px] tracking-[0.05em] uppercase font-medium transition-all duration-300"
          >
            Call (480) 802-8188
          </a>
        </div>

      </div>
    </section>
  );
}

