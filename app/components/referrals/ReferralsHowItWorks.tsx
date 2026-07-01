import Reveal from '../common/Reveal'

const STEPS = [
  {
    n: '01',
    title: 'Refer someone you care about',
    body: 'Fill out the form below, or just give the front desk their name at your next visit.',
  },
  {
    n: '02',
    title: 'They book their first visit',
    body: 'New patients are always welcome, and we keep same-day slots open for emergencies.',
  },
  {
    n: '03',
    title: 'You both get rewarded',
    body: 'They save $50 on their first visit, and we add a $50 credit to your account for next time.',
  },
]

export default function ReferralsHowItWorks() {
  return (
    <section className="bg-bg-2 py-[clamp(74px,8vw,120px)]">
      <div className="mx-auto max-w-[1240px] px-site">
        <Reveal className="mb-[34px] flex flex-wrap items-end justify-between gap-[30px]" delay={0}>
          <div>
            <div className="text-[11.5px] font-medium uppercase tracking-[0.32em] text-coral">
              How it works
            </div>
            <h2 className="mt-[14px] font-serif text-[clamp(30px,4vw,52px)] font-light leading-[1.05] tracking-[-0.02em] text-ivory">
              Three <em className="italic font-normal text-coral">easy steps</em>.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-[clamp(28px,4vw,56px)] sm:grid-cols-3">
          {STEPS.map(({ n, title, body }, i) => (
            <Reveal key={n} className="relative" delay={i * 0.1}>
              <span className="font-serif text-sm tracking-[0.14em] text-coral">{n}</span>
              <h3 className="mb-[14px] mt-[14px] font-serif text-[clamp(22px,2.5vw,30px)] font-normal text-ivory">
                {title}
              </h3>
              <p className="max-w-[32ch] text-[15px] font-light leading-[1.72] text-muted">{body}</p>
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