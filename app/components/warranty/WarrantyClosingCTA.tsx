import Link from 'next/link'
import Reveal from '../common/Reveal'

export default function WarrantyClosingCTA() {
  return (
    <section className="relative overflow-hidden py-[clamp(84px,10vw,150px)] text-center">
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
          <h2 className="font-serif text-[clamp(40px,7vw,90px)] font-light leading-[1] tracking-[-0.03em] text-ivory">
            Care that&apos;s <em className="italic font-normal text-coral">built to last.</em>
          </h2>
        </Reveal>

        <Reveal className="mt-[42px] flex flex-wrap items-center justify-center gap-[18px]">
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-3 whitespace-nowrap rounded-full bg-coral px-[30px] py-[17px] font-sans text-[14px] font-semibold uppercase tracking-[0.05em] text-bg shadow-[0_20px_44px_-18px_rgba(232,154,114,.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-ivory"
          >
            Book your visit
          </Link>
          <Link
            href="tel:+14808028188"
            className="rounded-full border border-line px-[30px] py-[17px] font-sans text-[14px] font-medium uppercase tracking-[0.05em] text-ivory transition-all duration-300 hover:border-ivory"
          >
            Call (480) 802-8188
          </Link>
        </Reveal>

        <Reveal className="mx-auto mt-[28px] max-w-[94ch] text-[11.5px] font-light leading-[1.55] text-muted-2">
          *Coverage applies to workmanship on covered treatments under normal use, for patients
          who keep the recommended 6-month cleanings and exams at Promenade Dental. It does not
          cover damage from trauma, accidents, neglect, or conditions outside the practice&apos;s
          control. Specific warranty periods, coverage, and exclusions are set by Promenade Dental
          and provided in writing &mdash; the terms shown here are placeholders pending final
          confirmation.
        </Reveal>
      </div>
    </section>
  )
}