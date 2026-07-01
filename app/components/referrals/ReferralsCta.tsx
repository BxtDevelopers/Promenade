import Reveal from '../common/Reveal'

export default function ReferralsCta() {
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
            Refer a friend
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-serif text-[clamp(40px,7vw,70px)] font-light leading-[1] tracking-[-0.03em] text-ivory">
            Know someone who&rsquo;d love it here?
            <br />
            <em className="italic font-normal text-coral">Send them our way.</em>
          </h2>
        </Reveal>

        <Reveal className="mt-[42px] flex flex-wrap items-center justify-center gap-[18px]" delay={0.1}>
          <a
            href="#refer"
            className="inline-flex items-center gap-3 whitespace-nowrap rounded-full bg-coral px-[30px] py-[17px] font-sans text-sm font-semibold uppercase tracking-[0.05em] text-bg shadow-[0_20px_44px_-18px_rgba(232,154,114,.7)] transition hover:-translate-y-0.5 hover:bg-ivory"
          >
            Refer a friend
          </a>
          <a
            href="tel:+14808028188"
            className="whitespace-nowrap rounded-full border border-line px-[22px] py-[15px] text-[13px] tracking-[0.03em] text-ivory transition hover:border-ivory"
          >
            Call (480) 802-8188
          </a>
        </Reveal>

        <Reveal
          className="mx-auto mt-[48px] max-w-[760px] rounded-2xl border border-dashed border-coral/50 bg-coral/[0.07] px-[18px] py-[15px] text-left text-[13px] font-light leading-[1.55] text-ivory-2"
          delay={0.15}
        >
          <b className="font-semibold text-coral">To confirm before launch:</b> the $50 / $50
          reward amounts are a placeholder &mdash; set the figures you&rsquo;re comfortable with
          and confirm any AZ rules on patient referral incentives. Final terms &amp; conditions
          wording also needs to be added.
        </Reveal>
      </div>
    </section>
  )
}