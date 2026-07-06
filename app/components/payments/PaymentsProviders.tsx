import { Check } from 'lucide-react'
import Reveal from '../common/Reveal'

const PROVIDERS = [
  {
    name: 'Cherry',
    tag: 'Simple monthly plans, no surprises.',
    points: [
      'Apply in about a minute with a soft credit check \u2014 no impact to your score',
      'Pay-in-4 is always interest-free; 0% APR monthly plans for those who qualify',
      'Terms up to 60 months, with no hidden fees and no prepayment penalties',
    ],
    cta: 'Apply with Cherry',
    href: 'https://pay.withcherry.com/promenade-dental',
  },
  {
    name: 'CareCredit',
    tag: 'A reusable health & wellness credit line.',
    points: [
      'See if you prequalify with no impact to your credit score',
      'No interest if paid in full within 6, 12, 18, or 24 months on purchases of $200+*',
      'Longer reduced-APR plans for larger treatment \u2014 and reuse it for future visits',
    ],
    cta: 'Apply with CareCredit',
    href: 'https://www.carecredit.com/apply/',
  },
]

export default function PaymentsProviders() {
  return (
    <section className="py-[clamp(60px,7vw,104px)]" id="providers">
      <div className="mx-auto max-w-[1240px] px-site">
        <Reveal delay={0}>
          <div className="text-[11.5px] font-medium uppercase tracking-[0.32em] text-coral">
            Choose your plan
          </div>
          <h2 className="mt-[14px] font-serif text-[clamp(30px,4vw,52px)] font-light leading-[1.05] tracking-[-0.02em] text-ivory">
            Two ways to <em className="italic font-normal text-coral">pay over time</em>.
          </h2>
          <p className="mt-3 max-w-[60ch] text-[15.5px] font-light leading-relaxed text-ivory">
            We partner with Cherry and CareCredit, so you can pick whichever fits you best. Both
            let you apply online in minutes and check your options with no impact to your credit
            score.
          </p>
        </Reveal>

        <div className="mt-[42px] grid grid-cols-1 gap-[18px] md:grid-cols-2">
          {PROVIDERS.map((p, i) => (
            <Reveal
              key={p.name}
              className="flex flex-col rounded-[22px] border border-ivory bg-ivory/[0.02] px-[clamp(26px,3vw,34px)] py-[clamp(26px,3vw,34px)]"
              delay={i * 0.1}
            >
              <h3 className="font-serif text-[26px] font-normal text-ivory">{p.name}</h3>
              <div className="mb-[18px] mt-1.5 text-[13px] tracking-[0.04em] text-coral">
                {p.tag}
              </div>
              <ul className="mb-[26px] space-y-1.5">
                {p.points.map((point) => (
                  <li key={point} className="relative pl-[26px] text-[14.5px] font-light leading-[1.55] text-ivory">
                    <Check className="absolute left-0 top-[7px] h-3.5 w-3.5 stroke-[3] text-coral" />
                    {point}
                  </li>
                ))}
              </ul>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full bg-coral px-[30px] py-[17px] font-sans text-sm font-semibold uppercase tracking-[0.05em] text-bg shadow-[0_20px_44px_-18px_rgba(232,154,114,.7)] transition hover:-translate-y-0.5 hover:bg-ivory"
              >
                {p.cta}
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-4 text-sm font-light text-muted-2" delay={0.25}>
          Not sure which to choose? Call us at{' '}
          <a href="tel:+14808028188" className="text-coral no-underline">
            (480) 802-8188
          </a>{' '}
          and we&rsquo;ll help you compare.
        </Reveal>
      </div>
    </section>
  )
}