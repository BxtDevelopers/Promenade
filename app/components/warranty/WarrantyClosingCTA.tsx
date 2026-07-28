'use client'
import Link from 'next/link'
import Reveal from '../common/Reveal'
import { useEffect, useRef } from 'react'
import { useBookingModal } from '../common/BookingModalProvider';

export default function WarrantyClosingCTA() {
   const { openBookingModal } = useBookingModal();
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
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(60% 80% at 50% 50%, rgba(232,154,114,.14), transparent 65%)',
        }}
      />
      <div className="relative mx-auto max-w-[1240px] px-site">
        <span className="mb-[22px] block text-[11.5px] font-medium uppercase tracking-[0.32em] text-coral">
          Dentistry you can trust
        </span>

        <Reveal>
          <h2 className="font-serif text-[clamp(40px,7vw,90px)] font-light leading-[1] tracking-[-0.03em] text-white">
            Care that&apos;s <em className="italic font-normal text-coral">built to last.</em>
          </h2>
        </Reveal>

        <Reveal className="mt-[42px] flex flex-wrap items-center justify-center gap-[18px]">
          <button
            onClick={openBookingModal}
            className="inline-flex items-center gap-3 whitespace-nowrap rounded-full bg-coral px-[30px] py-[17px] font-sans text-[14px] font-semibold uppercase tracking-[0.05em] text-ink hover:text-bg shadow-[0_20px_44px_-18px_rgba(232,154,114,.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink"
          >
            Book your visit
          </button>
          <Link
            href="tel:+14808028188"
            className="rounded-full border border-line px-[30px] py-[17px] font-sans text-[14px] font-medium uppercase tracking-[0.05em] text-white transition-all duration-300 hover:border-coral"
          >
            Call (480) 802-8188
          </Link>
        </Reveal>

        <Reveal className="mx-auto mt-[28px] max-w-[95ch] text-sm font-light leading-[1.55] text-white/90">
          <span className='text-red-500'>*</span>{" "} Coverage applies to workmanship on covered treatments under normal use, for patients
          who keep the recommended 6-month cleanings and exams at Promenade Dental. It does not
          cover damage from trauma, accidents, neglect, or conditions outside the practice&apos;s
          control. Specific warranty periods, coverage, and exclusions are set by Promenade Dental 
          and provided in writing
          {/*  &mdash; the terms shown here are placeholders pending final
          confirmation. */}
        </Reveal>
      </div>
    </section>
  )
}