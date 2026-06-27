'use client'

import { useEffect, useRef } from 'react'

interface Stat {
  to?: number
  dec?: number
  suffix?: string
  text?: string
  label: string
}

const stats: Stat[] = [
  { to: 25,  suffix: '+',  label: 'Years in Chandler' },
  { to: 4.9, dec: 1,       label: '★ Average rating' },
  { to: 150, suffix: '+',  label: 'Google reviews' },
  { text: 'PPO',           label: 'Most plans accepted' },
]

function CountUp({ to, dec = 0, suffix = '', text }: Omit<Stat, 'label'>) {
  const ref = useRef<HTMLSpanElement>(null)
  const ran  = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el || text) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting || ran.current) return
        ran.current = true

        if (reduce) {
          el.textContent = `${(to ?? 0).toFixed(dec)}${suffix}`
          return
        }

        let t0: number | null = null
        const step = (t: number) => {
          if (!t0) t0 = t
          const p  = Math.min((t - t0) / 1400, 1)
          const ev = 1 - Math.pow(1 - p, 3)
          el.textContent = `${((to ?? 0) * ev).toFixed(dec)}${suffix}`
          if (p < 1) requestAnimationFrame(step)
          else el.textContent = `${(to ?? 0).toFixed(dec)}${suffix}`
        }
        requestAnimationFrame(step)
      })
    }, { threshold: 0.4 })

    obs.observe(el)
    return () => obs.disconnect()
  }, [to, dec, suffix, text])

  if (text) {
    return (
      <span
        className="block font-serif font-light text-coral leading-none tracking-[-0.01em] text-[clamp(30px,3.8vw,46px)]"
      >
        {text}
      </span>
    )
  }

  return (
    <span
      ref={ref}
      className="block font-serif font-light text-coral leading-none tracking-[-0.01em] text-[clamp(38px,4.8vw,58px)]"
    >
      0
    </span>
  )
}

export default function StatsBand() {
  return (
    <section
      className="border-b border-[rgba(244,236,221,0.14)] bg-[linear-gradient(180deg,rgba(232,154,114,0.04),transparent)]"
    >
      <div
        className="grid mx-auto max-w-[1240px] px-[clamp(22px,4vw,60px)] py-[clamp(40px,5vw,60px)] gap-[24px] grid-cols-2 sm:grid-cols-2 lg:grid-cols-4"
      >
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="rv text-center relative"
            style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
          >
            {/* Show dividers only on large screens when grid is 4 columns */}
            {i < stats.length - 1 && (
              <div
                className="absolute right-[-12px] top-1/2 -translate-y-1/2 w-px h-12 hidden lg:block bg-[rgba(244,236,221,0.14)]"
              />
            )}
            <CountUp to={s.to} dec={s.dec} suffix={s.suffix} text={s.text} />
            <span
              className="block mt-3 text-[11.5px] tracking-[0.15em] uppercase font-medium text-ivory-2"
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}