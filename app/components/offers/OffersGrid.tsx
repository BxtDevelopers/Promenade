'use client'
import { ShieldCheck, CreditCard, ClipboardCheck, HeartHandshake, Sparkles, Check } from 'lucide-react'
import Reveal from '../common/Reveal'
import { useBookingModal } from '../common/BookingModalProvider'

/**
 * The New Patient Welcome price.
 *
 * Stated here because it is claimed in paid search and social ads, and an ad
 * that promises a price the landing page never mentions is the most reliable
 * way to lose a click that has already been paid for. If this changes, it must
 * change in the ad creative at the same time.
 *
 * Includes the exam, cleaning and X-rays — the three items named in the ads.
 */
const NEW_PATIENT_PRICE = '$125'

const NEW_PATIENT_INCLUDES = 'Exam, cleaning & X-rays'

const NEW_PATIENT_PERKS = [
  { icon: ShieldCheck, label: 'Insurance verification' },
  { icon: CreditCard, label: 'Flexible financing' },
  { icon: ClipboardCheck, label: 'Comprehensive consultation' },
]

const SIMPLE_OFFERS = [
  {
    icon: HeartHandshake,
    title: 'Senior Discount',
    body: 'A 10% courtesy discount on your care if you’re 55 or over — just mention it when you book.',
  },
  {
    icon: Sparkles,
    title: 'Professional Whitening Offer',
    body: 'Save on in-office or take-home whitening when paired with a routine cleaning and exam.',
  },
]

export default function OffersGrid() {
  const { openBookingModal } = useBookingModal()

  return (
    <section className="bg-bg-2 py-[clamp(74px,8vw,120px)]">
      <div className="mx-auto max-w-[1240px] px-site">
        <Reveal className="mb-[34px]" delay={0}>
          <div className="text-[11.5px] font-medium uppercase tracking-[0.32em] text-accent">
            Patient Offers
          </div>
          <h2 className="mt-[14px] font-serif text-[clamp(30px,4vw,52px)] font-light leading-[1.05] tracking-[-0.02em] text-white">
            Current <em className="italic font-normal text-accent">savings</em>.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-[20px] lg:grid-cols-3">
          {/* Featured: New Patient Welcome */}
          <Reveal delay={0.05} className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-coral/40 bg-ink/[0.03] p-[34px] md:p-[42px]">
              <div>
                <span className="mb-[18px] inline-flex h-10 w-10 items-center justify-center rounded-full border border-coral/50">
                  <ClipboardCheck className="h-5 w-5 text-accent" strokeWidth={2.2} />
                </span>
                <b className="block font-serif text-[26px] font-normal leading-[1.15] text-white">
                  New Patient Welcome
                </b>

                {/* The price leads. Someone arriving from an ad that named it
                    should see it without scrolling or hunting. */}
                <div className="mt-[14px] flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-serif text-[clamp(38px,5vw,52px)] font-light leading-[1] tracking-[-0.02em] text-accent">
                    {NEW_PATIENT_PRICE}
                  </span>
                  <span className="text-[15px] font-light leading-[1.4] text-white">
                    {NEW_PATIENT_INCLUDES}
                  </span>
                </div>

                <p className="mt-[12px] max-w-[46ch] text-[14.5px] font-light leading-[1.65] text-body">
                  Everything you need for a smooth, no-surprises first visit.
                </p>

                <ul className="mt-[22px] grid grid-cols-1 gap-[12px] sm:grid-cols-3">
                  {NEW_PATIENT_PERKS.map(({ icon: Icon, label }) => (
                    <li
                      key={label}
                      className="flex items-center gap-2.5 rounded-full border border-line px-4 py-[10px] text-[13px] text-white"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-accent" strokeWidth={2.2} />
                      {label}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={openBookingModal}
                className="mt-[28px] inline-flex w-fit items-center gap-2 whitespace-nowrap rounded-full bg-coral px-[26px] py-[15px] font-sans text-[13px] font-semibold uppercase tracking-[0.05em] text-ink hover:text-bg transition hover:-translate-y-0.5 hover:bg-ink"
              >
                Book your first visit
              </button>
            </div>
          </Reveal>

          {/* Senior Discount + Whitening */}
          <div className="grid grid-cols-1 gap-[20px]">
            {SIMPLE_OFFERS.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={0.1 + i * 0.05}>
                <div className="flex h-full flex-col rounded-2xl border border-line bg-ink/[0.03] p-[28px]">
                  <span className="mb-[16px] inline-flex h-10 w-10 items-center justify-center rounded-full border border-coral/50">
                    <Icon className="h-5 w-5 text-accent" strokeWidth={2.2} />
                  </span>
                  <b className="block font-serif text-[19px] font-normal leading-[1.15] text-white">
                    {title}
                  </b>
                  <p className="mt-[10px] text-[14px] font-light leading-[1.6] text-body">
                    {body}
                  </p>
                  <span className="mt-auto pt-[16px] inline-flex items-center gap-1.5 text-[12.5px] font-medium uppercase tracking-[0.03em] text-accent">
                    <Check className="h-3.5 w-3.5 stroke-[2.4]" />
                    Ask at checkout
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}