'use client'
import Reveal from '../common/Reveal'
import { useBookingModal } from '../common/BookingModalProvider'

export default function OffersHero() {
  const { openBookingModal } = useBookingModal()

  return (
    <section className="relative overflow-hidden pb-[clamp(36px,4vw,56px)] pt-[clamp(120px,15vw,184px)]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(60% 70% at 74% 16%, rgba(232,154,114,.13), transparent 60%)',
        }}
      />
      <div className="relative mx-auto max-w-[1240px] px-site">
        <Reveal className="text-[11.5px] font-medium uppercase tracking-[0.32em] text-accent" delay={0}>
          Offers &amp; Specials
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-[18px] font-serif text-[clamp(40px,6.6vw,82px)] font-light leading-[1.2] text-ink">
            Great dentistry,
            <br />
            <em className="font-normal italic text-accent">made more affordable.</em>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-[22px] max-w-[54ch] text-[clamp(16px,1.4vw,19px)] font-light leading-[1.6] text-ink">
            A few ways we help new patients, seniors, and anyone chasing a
            brighter smile get quality care without the sticker shock.
          </p>
        </Reveal>

        <Reveal className="mt-[30px] flex flex-wrap items-center gap-3.5" delay={0.15}>
          <button
            onClick={openBookingModal}
            className="inline-flex items-center gap-3 whitespace-nowrap rounded-full bg-coral px-[30px] py-[17px] font-sans text-sm font-semibold uppercase tracking-[0.05em] text-ink hover:text-bg shadow-[0_20px_44px_-18px_rgba(232,154,114,.7)] transition hover:-translate-y-0.5 hover:bg-ink"
          >
            Claim an offer
          </button>
          <a
            href="tel:+14808028188"
            className="whitespace-nowrap rounded-full border border-ink/30 px-[22px] py-[15px] text-[13px] tracking-[0.03em] text-ink transition hover:border-ink/70"
          >
            Call (480) 802-8188
          </a>
        </Reveal>
      </div>
    </section>
  )
}