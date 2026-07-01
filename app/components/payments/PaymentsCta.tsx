import Reveal from '../common/Reveal'

export default function PaymentsCta() {
  return (
    <section className="relative overflow-hidden py-[clamp(84px,10vw,150px)] text-center">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(60% 80% at 50% 50%, rgba(232,154,114,.14), transparent 65%)',
        }}
      />
      <div className="relative mx-auto max-w-[1240px] px-site">
        <Reveal delay={0}>
          <span className="mb-[22px] block text-[11.5px] font-medium uppercase tracking-[0.32em] text-coral">
            Ready when you are
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-serif text-[clamp(40px,7vw,90px)] font-light leading-[1] tracking-[-0.03em] text-ivory">
            Get started today.
            <br />
            <em className="italic font-normal text-coral">See your options.</em>
          </h2>
        </Reveal>

        <Reveal className="mt-[42px] flex flex-wrap items-center justify-center gap-[18px]" delay={0.1}>
          <a
            href="#providers"
            className="inline-flex items-center gap-3 whitespace-nowrap rounded-full bg-coral px-[30px] py-[17px] font-sans text-sm font-semibold uppercase tracking-[0.05em] text-bg shadow-[0_20px_44px_-18px_rgba(232,154,114,.7)] transition hover:-translate-y-0.5 hover:bg-ivory"
          >
            Apply now
          </a>
          <a
            href="tel:+14808028188"
            className="whitespace-nowrap rounded-full border border-line px-[22px] py-[15px] text-[13px] tracking-[0.03em] text-ivory transition hover:border-ivory"
          >
            Call (480) 802-8188
          </a>
        </Reveal>

        <Reveal
          className="mx-auto mt-[48px] max-w-[820px] rounded-2xl border border-dashed border-coral/50 bg-coral/[0.07] px-[18px] py-[15px] text-left text-[13px] font-light leading-[1.55] text-ivory-2"
          delay={0.15}
        >
          <b className="font-semibold text-coral">Before launch:</b> swap the apply links for
          your real ones &mdash; Cherry issues a practice-specific link
          (pay.withcherry.com/your-practice; the one here is a guess), and CareCredit can give you
          a provider-branded prequalify link in place of the generic one.
        </Reveal>

        <Reveal className="mx-auto mt-5 max-w-[94ch] text-[11.5px] font-light leading-[1.55] text-muted-2" delay={0.2}>
          *Financing is provided by third-party lenders &mdash; Cherry and CareCredit (a Synchrony
          product) &mdash; not by Promenade Dental. Approval, payment amounts, terms, interest
          rates, and any credit impact are determined by the provider and subject to their
          eligibility requirements. CareCredit promotional &ldquo;no interest if paid in
          full&rdquo; offers are deferred-interest: interest accrues from the purchase date and is
          charged in full if the balance is not paid off by the end of the promotional period.
          Figures shown are illustrative only. Promenade Dental is not a lender and does not
          provide financial advice.
        </Reveal>
      </div>
    </section>
  )
}