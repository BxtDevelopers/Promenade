'use client'
import Link from 'next/link'
import Reveal from '../common/Reveal'
import { useBookingModal } from '../common/BookingModalProvider';
import { useEffect, useRef } from 'react';

export default function AboutHero() {
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
        p.setAttribute('stroke', (a === 4 || a === 9 || a === 13) ? 'rgba(232,154,114,.3)' : 'rgba(244,236,221,.5)')
        p.setAttribute('stroke-width', '1')
        p.setAttribute('stroke-linecap', 'round')
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
    <header
      className="relative flex items-end overflow-hidden"
      style={{ minHeight: 'clamp(560px,82vh,760px)' }}
    >
      {/* Background arch SVG */}
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

      {/* <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 70% at 74% 16%, rgba(232,154,114,.13), transparent 60%)',
        }}
      /> */}
      <div
        className="relative z-[2] w-full max-w-[1340px] mx-auto px-site text-center pb-10"
      >
        <Reveal>
          <span className="text-[11.5px] font-medium uppercase tracking-[0.32em] text-coral">
            About us
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-[18px] font-serif text-story-head font-light leading-[1] tracking-[0.025em] text-ink">
            Gentle dentistry,
            <br />
            <em className="italic font-normal text-coral">built on trust.</em>
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-[22px] lg:max-w-[60%] mx-auto text-story-body font-light leading-[1.6] text-ink">
            For 23 years, Chandler families have trusted Promenade Dental for gentle and unhurried care &mdash; the kind that ensures you receive the highest quality dental care and personalized attention.
          </p>
        </Reveal>

        <Reveal delay={200} className="mt-[30px] flex flex-wrap items-center justify-center gap-[14px]">
          <button
            onClick={openBookingModal}
            className="inline-flex items-center gap-3 whitespace-nowrap rounded-full bg-coral px-[30px] py-[17px] font-sans text-[14px] font-semibold uppercase tracking-[0.05em] text-ink hover:text-bg shadow-[0_20px_44px_-18px_rgba(232,154,114,.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink"
          >
            Book a visit
          </button>
          <Link
            href="tel:+14808028188"
            className="rounded-full border border-coral/60 px-[30px] py-[17px] font-sans text-[14px] font-medium uppercase tracking-[0.05em] text-ink transition-all duration-300 hover:border-ink"
          >
            Call (480) 802-8188
          </Link>
        </Reveal>
      </div>
    </header>
  )
}