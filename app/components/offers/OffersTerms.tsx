import { Info } from 'lucide-react'
import Reveal from '../common/Reveal'

const TERMS = [
  'New Patient Welcome is $125 and covers a comprehensive exam, a routine cleaning and X-rays.',
  'New Patient Welcome pricing applies to patients who haven\u2019t visited in the last 12 months.',
  'The $125 price assumes a routine cleaning. If gum disease treatment is needed, we will explain the difference in cost before starting.',
  'Offers cannot be combined with insurance benefits or other promotions.',
  'Senior Discount is 10% and applies to patients 55+ \u2014 valid ID may be requested.',
  'Whitening offer requires a current cleaning and exam within the last 6 months.',
  'Pricing and availability may change \u2014 ask our team to confirm current details.',
]

export default function OffersTerms() {
  return (
    <section className="bg-white pb-[clamp(74px,8vw,120px)]">
      <div className="mx-auto max-w-[1240px] px-site">
        <Reveal delay={0}>
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-[30px] md:p-[38px]">
            <div className="flex items-center gap-2.5">
              <Info className="h-4 w-4 text-accent" strokeWidth={2.2} />
              <span className="text-[11.5px] font-medium uppercase tracking-[0.32em] text-accent">
                Good to know
              </span>
            </div>

            <ul className="mt-[20px] grid grid-cols-1 gap-x-[30px] gap-y-[12px] md:grid-cols-2">
              {TERMS.map((term) => (
                <li
                  key={term}
                  className="flex items-start gap-2.5 text-[13.5px] font-light leading-[1.6] text-neutral-500"
                >
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-coral" />
                  {term}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}