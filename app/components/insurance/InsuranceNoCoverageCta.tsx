import Link from 'next/link'
import Reveal from '../common/Reveal'

export default function InsuranceNoCoverageCta() {
  return (
    <section id="no-insurance" className="relative overflow-hidden py-[clamp(84px,10vw,150px)] text-center">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(60% 80% at 50% 50%, rgba(232,154,114,.14), transparent 65%)',
        }}
      />
      <div className="relative mx-auto max-w-[1240px] px-site">
        <Reveal delay={0}>
          <span className="mb-[22px] block text-[11.5px] font-medium uppercase tracking-[0.32em] text-coral">
            No insurance? No problem.
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-serif text-[clamp(40px,7vw,90px)] font-light leading-[1] tracking-[-0.03em] text-ivory">
            Great care,
            <br />
            <em className="italic font-normal text-coral">without the runaround.</em>
          </h2>
        </Reveal>

        <Reveal className="mt-[30px]" delay={0.1}>
          <p className="mx-auto max-w-[60ch] text-sm font-light leading-relaxed text-muted md:text-[15px]">
            You don&rsquo;t need insurance to get gentle, honest dentistry. Start with our{' '}
            <b className="font-medium text-ivory">$159 new-patient cleaning, exam &amp; X-rays</b>,
            use your <b className="font-medium text-ivory">HSA / FSA</b> funds, or spread larger
            treatment over time.
          </p>
        </Reveal>

        <Reveal className="mt-[30px] flex flex-wrap items-center justify-center gap-[18px]" delay={0.15}>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-3 whitespace-nowrap rounded-full bg-coral px-[30px] py-[17px] font-sans text-sm font-semibold uppercase tracking-[0.05em] text-bg shadow-[0_20px_44px_-18px_rgba(232,154,114,.7)] transition hover:-translate-y-0.5 hover:bg-ivory"
          >
            Book your first visit
          </Link>
          <a
            href="/payments"
            className="whitespace-nowrap rounded-full border border-line px-[22px] py-[15px] text-[13px] tracking-[0.03em] text-ivory transition hover:border-ivory"
          >
            Explore payment plans
          </a>
        </Reveal>
      </div>
    </section>
  )
}