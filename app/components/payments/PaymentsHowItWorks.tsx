import Reveal from '../common/Reveal'

const STEPS = [
  {
    n: '01',
    title: 'Apply online',
    body: 'Fill out a short application from your phone in a few minutes. Basic info gets you a decision.',
  },
  {
    n: '02',
    title: 'Choose your plan',
    body: 'If approved, pick the monthly length that fits your budget \u2014 including interest-free options for those who qualify.*',
  },
  {
    n: '03',
    title: 'Get your care',
    body: 'Book your treatment with Dr.\u00a0Shriya and pay over time. We handle the rest at the front desk.',
  },
]

export default function PaymentsHowItWorks() {
  return (
    <section className="bg-bg-2 py-[clamp(74px,8vw,120px)]">
      <div className="mx-auto max-w-[1240px] px-site">
        <Reveal className="mb-[34px] flex flex-wrap items-end justify-between gap-[30px]" delay={0}>
          <div>
            <div className="text-[11.5px] font-medium uppercase tracking-[0.32em] text-accent">
              How it works
            </div>
            <h2 className="mt-[14px] font-serif text-[clamp(30px,4vw,52px)] font-light leading-[1.05] tracking-[-0.02em] text-white">
              Three steps, <em className="italic font-normal text-accent">no surprises</em>.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-[clamp(28px,4vw,56px)] sm:grid-cols-3">
          {STEPS.map(({ n, title, body }, i) => (
            <Reveal key={n} className="relative" delay={i * 0.1}>
              <span className="font-serif text-lg tracking-[0.14em] text-accent">{n}</span>
              <h3 className="mb-[14px] mt-[14px] font-serif text-[clamp(22px,2.5vw,30px)] font-normal text-white">
                {title}
              </h3>
              <p className="max-w-[32ch] text-[15px] font-light leading-[1.72] text-body">{body}</p>
              {i < STEPS.length - 1 && (
                <span className="absolute right-[-28px] top-[6px] hidden h-[13px] w-[13px] rotate-45 border-r-[1.5px] border-t-[1.5px] border-coral/50 sm:block" />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}