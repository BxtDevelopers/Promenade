import { CreditCard, ListChecks, ShieldCheck } from 'lucide-react'
import Reveal from '../common/Reveal'

const STEPS = [
  {
    icon: ShieldCheck,
    title: "We're in your network",
    body: 'In-network with most major PPO plans, which keeps your out-of-pocket cost as low as your plan allows.',
  },
  {
    icon: ListChecks,
    title: 'We bill them directly',
    body: 'No forms, no waiting on reimbursement. We file your claim and handle the back-and-forth with your insurer.',
  },
  {
    icon: CreditCard,
    title: 'You see your cost up front',
    body: "We verify your benefits before treatment and tell you exactly what's covered \u2014 before anything begins.",
  },
]

export default function InsuranceHowItWorks() {
  return (
    <section className="bg-bg-2 py-[clamp(74px,8vw,120px)]">
      <div className="mx-auto max-w-[1240px] px-site">
        <Reveal className="mb-[34px] flex flex-wrap items-end justify-between gap-[30px]" delay={0}>
          <div>
            <div className="text-[11.5px] font-medium uppercase tracking-[0.32em] text-coral">
              How it works
            </div>
            <h2 className="mt-[14px] font-serif text-[clamp(30px,4vw,52px)] font-light leading-[1.05] tracking-[-0.02em] text-white">
              Coverage made <em className="italic font-normal text-coral">simple</em>.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} className="border-t border-line pt-[22px]" delay={i * 0.1}>
              <span className="mb-[18px] inline-flex h-10 w-10 items-center justify-center rounded-full border border-coral/50">
                <Icon className="h-6 w-6 text-coral" strokeWidth={2.2} />
              </span>
              <b className="mb-[10px] block font-serif text-[19px] font-normal leading-[1.15] text-white">
                {title}
              </b>
              <p className="text-[14.5px] font-light leading-[1.65] text-muted">{body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}