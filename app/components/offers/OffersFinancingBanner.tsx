'use client'
import Reveal from '../common/Reveal'
import { useBookingModal } from '../common/BookingModalProvider'

export default function OffersFinancingBanner() {
  const { openBookingModal } = useBookingModal()

  return (
    <section className="relative overflow-hidden bg-bg-2 py-[clamp(74px,8vw,120px)]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(55% 75% at 30% 40%, rgba(232,154,114,.13), transparent 60%)',
        }}
      />
      <div className="relative mx-auto max-w-[1240px] px-site">
        <div className="flex flex-col items-start gap-[30px] md:flex-row md:items-end md:justify-between">
          <Reveal delay={0} className="max-w-[54ch]">
            <div className="text-[11.5px] font-medium uppercase tracking-[0.32em] text-accent">
              Bigger treatment plan?
            </div>
            <h2 className="mt-[14px] font-serif text-[clamp(30px,4vw,52px)] font-light leading-[1.05] tracking-[-0.02em] text-white">
              Offers cover the visit &mdash;
              <br />
              <em className="italic font-normal text-accent">financing covers the rest.</em>
            </h2>
            <p className="mt-[18px] text-[14.5px] font-light leading-[1.65] text-body">
              For work beyond a cleaning, we&rsquo;ll walk you through insurance
              benefits and flexible payment plans so cost never delays care.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="flex shrink-0 flex-wrap items-center gap-3.5">
            <button
              onClick={openBookingModal}
              className="inline-flex items-center gap-3 whitespace-nowrap rounded-full bg-coral px-[28px] py-[16px] font-sans text-sm font-semibold uppercase tracking-[0.05em] text-ink hover:text-bg shadow-[0_20px_44px_-18px_rgba(232,154,114,.7)] transition hover:-translate-y-0.5 hover:bg-ink"
            >
              Ask about financing
            </button>
            <a
              href="/insurance"
              className="whitespace-nowrap rounded-full border border-line px-[22px] py-[15px] text-[13px] tracking-[0.03em] text-white transition hover:border-coral"
            >
              View insurance info
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}