'use client'
import { useEffect, useRef } from 'react'
import Reveal from '../common/Reveal'

export default function ReferralsCta() {

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
        <Reveal delay={0}>
          <span className="mb-[22px] block text-[11.5px] font-medium uppercase tracking-[0.32em] text-accent">
            Refer a friend
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-serif text-[clamp(40px,7vw,70px)] font-light leading-[1] tracking-[-0.03em] text-white">
            Know someone who&rsquo;d love it here?
            <br />
            <em className="italic font-normal text-accent">Send them our way.</em>
          </h2>
        </Reveal>

        <Reveal className="mt-[42px] flex flex-wrap items-center justify-center gap-[18px]" delay={0.1}>
          <a
            href="#refer"
            className="inline-flex items-center gap-3 whitespace-nowrap rounded-full bg-coral px-[30px] py-[17px] font-sans text-sm font-semibold uppercase tracking-[0.05em] text-ink hover:text-bg shadow-[0_20px_44px_-18px_rgba(232,154,114,.7)] transition hover:-translate-y-0.5 hover:bg-ink"
          >
            Refer a friend
          </a>
          <a
            href="tel:+14808028188"
            className="whitespace-nowrap rounded-full border border-line px-[22px] py-[15px] text-[13px] tracking-[0.03em] text-white transition hover:border-ink"
          >
            Call (480) 802-8188
          </a>
        </Reveal>

        {/* <Reveal
          className="mx-auto mt-[48px] max-w-[760px] rounded-2xl border border-dashed border-coral/50 bg-coral/[0.07] px-[18px] py-[15px] text-left text-[13px] font-light leading-[1.55] text-cream"
          delay={0.15}
        >
          <b className="font-semibold text-accent">To confirm before launch:</b> the $50 / $50
          reward amounts are a placeholder &mdash; set the figures you&rsquo;re comfortable with
          and confirm any AZ rules on patient referral incentives. Final terms &amp; conditions
          wording also needs to be added.
        </Reveal> */}
      </div>
    </section>
  )
}