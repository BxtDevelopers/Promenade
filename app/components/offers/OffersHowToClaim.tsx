import { PhoneCall, BadgeCheck, Sparkles } from 'lucide-react'
import Reveal from '../common/Reveal'

const STEPS = [
  {
    icon: PhoneCall,
    title: 'Step 1',
    body: 'Book online or call and mention the offer you\u2019d like to use.',
  },
  {
    icon: BadgeCheck,
    title: 'Step 2',
    body: 'We confirm eligibility and apply it to your visit \u2014 no codes to track down.',
  },
  {
    icon: Sparkles,
    title: 'Step 3',
    body: 'Enjoy your care at the discounted rate, with nothing added at checkout.',
  },
]

export default function OffersHowToClaim() {
  return (
    <section className="bg-white py-[clamp(74px,8vw,120px)]">
      <div className="mx-auto max-w-[1240px] px-site">
        <Reveal className="mb-[34px] flex flex-wrap items-end justify-between gap-[30px]" delay={0}>
          <div>
            <div className="text-[11.5px] font-medium uppercase tracking-[0.32em] text-accent">
              How to claim
            </div>
            <h2 className="mt-[14px] font-serif text-[clamp(30px,4vw,52px)] font-light leading-[1.05] tracking-[-0.02em] text-neutral-900">
              No codes, <em className="italic font-normal text-accent">no hassle</em>.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-3">
          {STEPS.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} className="border-t border-neutral-200 pt-[22px]" delay={i * 0.1}>
              <span className="mb-[18px] inline-flex h-10 w-10 items-center justify-center rounded-full border border-coral/50">
                <Icon className="h-5 w-5 text-accent" strokeWidth={2.2} />
              </span>
              <b className="mb-[10px] block font-serif text-[19px] font-normal leading-[1.15] text-neutral-900">
                {title}
              </b>
              <p className="text-[14.5px] font-light leading-[1.65] text-neutral-500">{body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}