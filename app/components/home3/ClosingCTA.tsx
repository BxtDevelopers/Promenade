'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'


export default function ClosingCTA() {
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

      {/* Content wrapper with z-10 so it sits above the arches */}
      <div className="relative z-10 mx-auto max-w-[1240px] px-[clamp(22px,4vw,60px)]">
        <span className="block text-[11.5px] tracking-[0.32em] uppercase font-medium text-accent mb-[22px]">
          New patients welcome
        </span>

        <h2 className="rv font-serif font-light tracking-[-0.03em] leading-none text-white text-[clamp(40px,7vw,90px)]">
          Your best smile starts
          <br />
          <em className="italic text-accent"> at Promenade Dental.</em>
        </h2>

        <div className="rv flex items-center justify-center gap-[18px] mt-[42px] flex-wrap">
          <Link
            href={`/contact-us`}
            className="inline-flex items-center gap-3 rounded-full font-sans font-semibold text-[14px] tracking-[0.05em] uppercase text-ink hover:text-bg bg-coral no-underline whitespace-nowrap transition-all duration-300 hover:bg-ink hover:-translate-y-0.5 px-[30px] py-[17px] shadow-[0_20px_44px_-18px_rgba(232,154,114,0.7)]"
          >
            Schedule my first visit →
          </Link>
          <Link
            href="tel:+14808028188"
            className="inline-block rounded-full text-white bg-transparent no-underline whitespace-nowrap font-sans text-[14px] tracking-[0.05em] uppercase font-medium transition-all duration-300 hover:border-white px-[30px] py-[17px] border border-[rgba(244,236,221,0.14)]"
          >
            Call (480) 802-8188
          </Link>
        </div>

        <div className="rv mt-12 text-[14px] font-light leading-[1.9] text-body">
          <b className="text-white font-medium">Most major PPO plans accepted · New patients welcome</b>
          <br />
          Promenade Dental — Fulton Ranch · 4905 S. Alma School Rd, Suite 1 · Chandler, AZ 85248
          <br />
          (480) 802-8188 · Mon 8am&ndash;1pm (by appt only) &middot; Tue&ndash;Thu 8am&ndash;7pm &middot; Fri&ndash;Sun Closed
        </div>
      </div>
      
    </section>
  )
}