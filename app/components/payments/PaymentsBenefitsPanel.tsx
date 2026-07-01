import { Check } from 'lucide-react'
import Link from 'next/link'
import Reveal from '../common/Reveal'

const KNOWNS = [
  'Use your HSA or FSA funds toward any remaining balance',
  "We'll give you a clear written estimate before anything begins",
  'You approve every step and cost up front \u2014 no surprise bills',
  "Prefer to talk it through? We'll walk you the options in person",
]

export default function PaymentsBenefitsPanel() {
  return (
    <section className="py-[clamp(60px,7vw,104px)]">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-[clamp(30px,4vw,60px)] px-site lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal delay={0}>
          <div className="text-[11.5px] font-medium uppercase tracking-[0.32em] text-coral">
            Pairs with your benefits
          </div>
          <h2 className="mt-[14px] font-serif text-[clamp(30px,4vw,50px)] font-light leading-[1.05] tracking-[-0.02em] text-ivory">
            Works <em className="italic font-normal text-coral">with</em> your insurance, not
            instead of it.
          </h2>
          <p className="mt-4 max-w-[54ch] text-[clamp(16px,1.4vw,19px)] font-light leading-[1.6] text-ivory-2">
            Already have a plan? A payment plan simply covers the portion your insurance
            doesn&rsquo;t &mdash; so larger treatment never has to wait.
          </p>
          <div className="mt-[18px]">
            <Link
              href="/insurance"
              className="inline-flex whitespace-nowrap rounded-full border border-line px-[22px] py-[15px] text-[13px] tracking-[0.03em] text-ivory transition hover:border-ivory"
            >
              See insurance we accept
            </Link>
          </div>
        </Reveal>

        <Reveal
          className="rounded-[22px] border border-line bg-ivory/[0.03] px-[clamp(26px,3vw,34px)] py-[clamp(26px,3vw,34px)]"
          delay={0.1}
        >
          <h3 className="mb-[14px] font-serif text-[20px] font-normal text-ivory">
            Also good to know
          </h3>
          <ul className="space-y-1.5">
            {KNOWNS.map((item) => (
              <li
                key={item}
                className="relative pl-6 text-[14.5px] font-light leading-[1.55] text-muted"
              >
                <Check className="absolute left-0 top-2 h-3.5 w-3.5 stroke-[2.5] text-coral" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}