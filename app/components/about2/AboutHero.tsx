import Link from 'next/link'
import Reveal from '../common/Reveal'

export default function AboutHero() {
  return (
    <section className="relative pt-[clamp(120px,15vw,184px)] pb-[clamp(36px,4vw,56px)]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 70% at 74% 16%, rgba(232,154,114,.13), transparent 60%)',
        }}
      />
      <div className="relative mx-auto lg:max-w-[90%] px-site">
        <Reveal>
          <span className="text-[11.5px] font-medium uppercase tracking-[0.32em] text-coral">
            About us
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-[18px] font-serif text-story-head font-light leading-[1] tracking-[-0.025em] text-ivory">
            Gentle dentistry,
            <br />
            <em className="italic font-normal text-coral">built on trust.</em>
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-[22px] lg:max-w-[60%] text-story-body font-light leading-[1.6] text-ivory">
            For 18 years, Chandler families have trusted Promenade Dental for calm, unhurried
            care &mdash; the kind where you&apos;re treated like a person, never rushed, and never
            sold something you don&apos;t need. That hasn&apos;t changed; it&apos;s simply in
            caring new hands.
          </p>
        </Reveal>

        <Reveal delay={200} className="mt-[30px] flex flex-wrap items-center gap-[14px]">
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-3 whitespace-nowrap rounded-full bg-coral px-[30px] py-[17px] font-sans text-[14px] font-semibold uppercase tracking-[0.05em] text-bg shadow-[0_20px_44px_-18px_rgba(232,154,114,.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-ivory"
          >
            Book a visit
          </Link>
          <Link
            href="tel:+14808028188"
            className="rounded-full border border-coral/60 px-[30px] py-[17px] font-sans text-[14px] font-medium uppercase tracking-[0.05em] text-ivory transition-all duration-300 hover:border-ivory"
          >
            Call (480) 802-8188
          </Link>
        </Reveal>
      </div>
    </section>
  )
}