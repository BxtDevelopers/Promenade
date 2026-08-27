import { Calendar, ShieldCheck, CreditCard, CheckCircle } from 'lucide-react'
import Reveal from '../common/Reveal'

const STEPS = [
  {
    icon: Calendar,
    title: 'Step 1',
    body: 'Schedule your appointment',
  },
  {
    icon: ShieldCheck,
    title: 'Step 2',
    body: 'We verify your insurance benefits',
  },
  {
    icon: CreditCard,
    title: 'Step 3',
    body: 'We explain your estimated coverage and out-of-pocket costs',
  },
  {
    icon: CheckCircle,
    title: 'Step 4',
    body: 'Receive treatment with confidence',
  },
]

export default function InsuranceHowItWorks() {
  return (
    <section className="bg-bg-2 py-[clamp(74px,8vw,120px)]">
      <div className="mx-auto max-w-[1240px] px-site">
        <Reveal className="mb-[34px] flex flex-wrap items-end justify-between gap-[30px]" delay={0}>
          <div>
            <div className="text-[11.5px] font-medium uppercase tracking-[0.32em] text-accent">
              How it works
            </div>
            <h2 className="mt-[14px] font-serif text-[clamp(30px,4vw,52px)] font-light leading-[1.05] tracking-[-0.02em] text-white">
              Coverage made <em className="italic font-normal text-accent">simple</em>.
            </h2>
          </div>
        </Reveal>

        {/* Updated lg:grid-cols-3 to lg:grid-cols-4 to fit the 4 steps evenly */}
        <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} className="border-t border-line pt-[22px]" delay={i * 0.1}>
              <span className="mb-[18px] inline-flex h-10 w-10 items-center justify-center rounded-full border border-coral/50">
                <Icon className="h-6 w-6 text-accent" strokeWidth={2.2} />
              </span>
              <b className="mb-[10px] block font-serif text-[19px] font-normal leading-[1.15] text-white">
                {title}
              </b>
              <p className="text-[14.5px] font-light leading-[1.65] text-body">{body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}