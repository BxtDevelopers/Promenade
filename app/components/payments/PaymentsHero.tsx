import { Check } from 'lucide-react'
import Reveal from '../common/Reveal'

const BADGES = [
  'Apply online in minutes',
  'Monthly payment options',
  'Check options with no credit impact*',
]

export default function PaymentsHero() {
  return (
    <section className="relative overflow-hidden pb-[clamp(36px,4vw,56px)] pt-[clamp(120px,15vw,184px)]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(60% 70% at 74% 16%, rgba(232,154,114,.13), transparent 60%)',
        }}
      />
      <div className="relative mx-auto max-w-[1240px] px-site">
        <Reveal className="text-[11.5px] font-medium uppercase tracking-[0.32em] text-coral" delay={0}>
          Payment plans
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-[18px] font-serif text-[clamp(40px,6.6vw,82px)] font-light leading-[1] tracking-[-0.025em] text-ivory">
            Care now.
            <br />
            <em className="font-normal italic text-coral">Pay over time.</em>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-[22px] max-w-[54ch] text-[clamp(16px,1.4vw,19px)] font-light leading-[1.6] text-ivory-2">
            Don&rsquo;t let cost stand between you and the care you need. Spread treatment over
            manageable monthly payments &mdash; apply online in minutes, with no paperwork at the
            office.
          </p>
        </Reveal>

        <Reveal className="mt-[26px] flex flex-wrap gap-2.5" delay={0.15}>
          {BADGES.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-ivory/[0.04] px-4 py-[9px] text-[12.5px] tracking-[0.03em] text-ivory-2"
            >
              <Check className="h-3.5 w-3.5 shrink-0 stroke-[2.4] text-coral" />
              {badge}
            </span>
          ))}
        </Reveal>

        <Reveal className="mt-[30px] flex flex-wrap items-center gap-3.5" delay={0.2}>
          <a
            href="#providers"
            className="inline-flex items-center gap-3 whitespace-nowrap rounded-full bg-coral px-[30px] py-[17px] font-sans text-sm font-semibold uppercase tracking-[0.05em] text-bg shadow-[0_20px_44px_-18px_rgba(232,154,114,.7)] transition hover:-translate-y-0.5 hover:bg-ivory"
          >
            See if you prequalify
          </a>
          <a
            href="tel:+14808028188"
            className="whitespace-nowrap rounded-full border border-ivory/30 px-[22px] py-[15px] text-[13px] tracking-[0.03em] text-ivory transition hover:border-ivory/70"
          >
            Questions? (480) 802-8188
          </a>
        </Reveal>
      </div>
    </section>
  )
}