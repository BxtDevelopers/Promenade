'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

const BASE = 'https://promenade-dental.vercel.app'

const services = [
  {
    href:    `${BASE}/services/cosmetic-dentistry`,
    num:     '01',
    title:   'Cosmetic Dentistry',
    desc:    'Whitening, veneers, and natural-looking smile work.',
    iconPath: (
      <>
        <path pathLength="1" d="M6 38 A18 18 0 0 1 42 38" />
        <path pathLength="1" d="M24 4 L24 14 M19 9 L29 9 M20.8 5.8 L27.2 12.2 M27.2 5.8 L20.8 12.2" />
      </>
    ),
  },
  {
    href:    `${BASE}/services/family-dentistry`,
    num:     '02',
    title:   'Family Dentistry',
    desc:    'Cleanings, exams, and gentle care for every age.',
    iconPath: (
      <>
        <path pathLength="1" d="M6 38 A18 18 0 0 1 42 38" />
        <path pathLength="1" d="M14 38 A10 10 0 0 1 34 38" />
      </>
    ),
  },
  {
    href:    `${BASE}/services/sleep-apnea`,
    num:     '03',
    title:   'Sleep Apnea',
    desc:    'Custom oral appliances for snoring and better sleep.',
    iconPath: (
      <>
        <path pathLength="1" d="M6 38 A18 18 0 0 1 42 38" />
        <path pathLength="1" d="M15 9 H23 L15 18 H23 M26 13 H31 L26 20 H31" />
      </>
    ),
  },
  {
    href:    `${BASE}/services/emergency-dentistry`,
    num:     '04',
    title:   'Emergency Care',
    desc:    "Same-day relief when pain can't wait.",
    iconPath: (
      <>
        <path pathLength="1" d="M6 38 A18 18 0 0 1 42 38" />
        <path pathLength="1" d="M24 9 L24 25 M16 17 L32 17" />
      </>
    ),
  },
]

export default function ServicesGrid() {
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([])

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('scard-draw')
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.3 })

    cardRefs.current.forEach(el => { if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="services"
      className="bg-bg-2 py-[clamp(74px,8vw,120px)]"
    >
      <div className="mx-auto max-w-[1240px] px-[clamp(22px,4vw,60px)]">

        {/* Head */}
        <div className="flex items-end justify-between gap-[30px] flex-wrap mb-[34px]">
          <h2
            className="font-serif font-light tracking-[-0.02em] leading-[1.05] text-ivory text-[clamp(30px,4vw,52px)]"
          >
            Care for{' '}
            <em className="italic text-coral">every need</em>.
          </h2>
          <span className="text-[11.5px] tracking-[0.32em] uppercase font-medium text-coral">
            Services
          </span>
        </div>

        {/* Responsive Grid */}
        <div className="grid gap-[18px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Link
              key={s.num}
              href={s.href}
              ref={el => { cardRefs.current[i] = el }}
              className="relative rounded-[22px] p-[30px_28px] overflow-hidden no-underline block transition-all duration-[450ms] cubic-bezier-[.2,.8,.2,1] group border border-[rgba(244,236,221,0.14)] bg-[linear-gradient(180deg,rgba(244,236,221,0.02),transparent)] hover:-translate-y-[5px] hover:border-[rgba(232,154,114,0.4)] hover:bg-[linear-gradient(180deg,rgba(232,154,114,0.05),transparent)]"
            >
              {/* Coral underline on hover */}
              <div
                className="absolute left-[28px] right-[28px] bottom-0 h-[1.5px] bg-coral scale-x-0 origin-left transition-transform duration-[550ms] ease group-hover:scale-x-100"
              />

              {/* Icon */}
              <svg
                viewBox="0 0 48 46"
                aria-hidden="true"
                className="scard-icon w-[52px] mb-[22px] block"
              >
                {s.iconPath}
              </svg>

              <span className="font-serif text-[13px] tracking-[0.1em] text-muted-2">
                {s.num}
              </span>
              <h3 className="font-serif font-normal text-ivory mt-[5px] mb-3 text-[clamp(20px,2.2vw,26px)]">
                {s.title}
              </h3>
              <p className="text-[14.5px] font-light leading-[1.65] text-muted">
                {s.desc}
              </p>
              <span
                className="inline-flex items-center gap-2 mt-[18px] text-[13px] tracking-[0.04em] text-coral"
              >
                Explore →
              </span>
            </Link>
          ))}
        </div>

        {/* All services link */}
        <Link
          href={`${BASE}/services`}
          className="inline-flex items-center gap-[10px] mt-[34px] no-underline text-[13px] tracking-[0.08em] uppercase font-medium text-ivory transition-[gap] duration-300 hover:gap-[18px] border-b border-coral pb-[6px]"
        >
          See all services <span className="text-coral">→</span>
        </Link>
      </div>
    </section>
  )
}