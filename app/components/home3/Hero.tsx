'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Check } from 'lucide-react'

const BASE = 'https://promenade-dental.vercel.app'

export default function Hero() {
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

      {/* Gradient overlay */}
      {/* <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `
            linear-gradient(180deg,transparent 0%,transparent 46%,rgba(11,28,44,.5) 76%,rgba(11,28,44,.96) 100%),
            radial-gradient(70% 60% at 72% 28%,rgba(232,154,114,.12),transparent 60%)
          `,
        }}
      /> */}

      {/* Content */}
      <div
        className="relative z-[2] w-full mx-auto"
        style={{
          maxWidth: '1340px',
          padding: '120px clamp(22px,4vw,60px) clamp(48px,6vw,80px)',
        }}
      >
        {/* Eyebrow */}
        <div
          className="text-[11.5px] tracking-[0.32em] uppercase font-medium text-coral opacity-0"
          style={{ animation: 'fade 1s ease 0.3s forwards' }}
        >
          Family &amp; Cosmetic Dentistry · Fulton Ranch, Chandler AZ
        </div>

        {/* Headline */}
        <h1
          className="font-serif font-light leading-[0.98] tracking-[-0.025em] mt-[22px] text-ivory"
          style={{ fontSize: 'clamp(44px,7.6vw,98px)' }}
        >
          <span className="block overflow-hidden">
            <span
              className="inline-block"
              style={{ transform: 'translateY(110%)', animation: 'lnrise 1.1s cubic-bezier(.16,.84,.34,1) 0.45s forwards' }}
            >
              Family Dentist 
            </span>
          </span>
          <span className="block overflow-hidden">
            <span
              className="inline-block"
              style={{ transform: 'translateY(110%)', animation: 'lnrise 1.1s cubic-bezier(.16,.84,.34,1) 0.58s forwards' }}
            >
              in{' '}
              <em className="not-italic font-normal text-coral">Chandler, AZ.</em>
            </span>
          </span>
        </h1>

        {/* Badges */}
        <div
          className="flex flex-wrap gap-[10px] mt-[26px] opacity-0"
          style={{ animation: 'fade 1.2s ease 0.95s forwards' }}
        >
          {['Accepting new patients', 'Flexible scheduling'].map(text => (
            <span
              key={text}
              className="inline-flex items-center gap-2 text-[12.5px] tracking-[0.03em] text-ivory rounded-full px-4 py-[9px] border border-coral"
              style={{
                background: 'rgba(244,236,221,0.04)',
              }}
            >
              <Check className='w-4 h-4 text-coral'/>
              {text}
            </span>
          ))}
        </div>

        {/* Footer row */}
        <div
          className="flex items-center justify-between gap-[30px] mt-[30px] flex-wrap opacity-0"
          style={{ animation: 'fade 1.2s ease 1.1s forwards' }}
        >
          <p
            className="text-ivory font-light leading-[1.55]"
            style={{ maxWidth: '42ch', fontSize: 'clamp(16px,1.3vw,19px)' }}
          >
            Comprehensive, gentle dental care for families across Chandler — Ocotillo, Fulton Ranch, and Sun Lakes.
          </p>
          <Link
            href={`/contact-us`}
            className="inline-flex items-center gap-3 rounded-full font-sans font-semibold text-[14px] tracking-[0.05em] uppercase text-[var(--bg)] bg-coral no-underline whitespace-nowrap transition-all duration-300 hover:bg-[var(--ivory)] hover:-translate-y-0.5"
            style={{
              padding: '17px 30px',
              boxShadow: '0 20px 44px -18px rgba(232,154,114,0.7)',
            }}
          >
            Schedule my first visit →
          </Link>
        </div>
      </div>
    </header>
  )
}