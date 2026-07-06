import Link from 'next/link'
import { Check } from 'lucide-react'
import Reveal from '../common/Reveal'

const badges = ['No cost to you*', 'Backed in writing', 'Honored visit after visit']

export default function WarrantyHero() {
  return (
    <section className="relative pt-[clamp(120px,15vw,184px)] pb-[clamp(36px,4vw,56px)]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 70% at 74% 16%, rgba(232,154,114,.13), transparent 60%)',
        }}
      />
      <div className="relative mx-auto max-w-[1240px] px-site">
        <Reveal>
          <span className="text-[11.5px] font-medium uppercase tracking-[0.32em] text-coral">
            Our warranty
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-[18px] font-serif text-story-head font-light leading-[1] tracking-[-0.025em] text-ivory">
            If it breaks,
            <br />
            <em className="italic font-normal text-coral">we&apos;ll make it right.</em>
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-[22px] max-w-[54ch] text-story-body font-light leading-[1.6] text-ivory">
            We believe in the quality of our work &mdash; and we want you to feel that confidence
            too. If something we placed doesn&apos;t hold up under normal use, we&apos;ll repair
            or replace it. Because it&apos;s the right thing to do.
          </p>
        </Reveal>

        <div className="mt-[26px] flex flex-wrap gap-[10px]">
          {badges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-ivory px-4 py-[9px] text-[12.5px] tracking-[0.03em] text-ivory-2"
            >
              <Check className="h-[14px] w-[14px] text-coral" strokeWidth={2.4} />
              {badge}
            </span>
          ))}
        </div>

        <Reveal delay={200} className="mt-[30px] flex flex-wrap items-center gap-[14px]">
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-3 whitespace-nowrap rounded-full bg-coral px-[30px] py-[17px] font-sans text-[14px] font-semibold uppercase tracking-[0.05em] text-bg shadow-[0_20px_44px_-18px_rgba(232,154,114,.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-ivory"
          >
            Book a visit
          </Link>
          <Link
            href="tel:+14808028188"
            className="rounded-full border border-coral px-[30px] py-[17px] font-sans text-[14px] font-medium uppercase tracking-[0.05em] text-ivory transition-all duration-300 hover:border-ivory"
          >
            Call (480) 802-8188
          </Link>
        </Reveal>
      </div>
    </section>
  )
}