import Reveal from '../common/Reveal'

const FAQS = [
  {
    q: 'What insurance do you accept?',
    a: "We're in-network with most major PPO plans, including Aetna, Cigna, Delta Dental, Guardian, MetLife, UnitedHealthcare, and many more. If you don't see your plan, give us a call \u2014 we'll verify your coverage and tell you exactly what to expect.",
  },
  {
    q: 'Will you bill my insurance for me?',
    a: "Yes. We file your claim directly with your insurer and manage the follow-up, so you don't deal with paperwork or wait on reimbursement. You simply pay any portion your plan doesn't cover.",
  },
  {
    q: "How do I know what I'll owe?",
    a: 'We verify your benefits before treatment and walk you through what\u2019s covered and your out-of-pocket cost \u2014 before we begin. You approve every step and cost up front, with no surprise bills.',
  },
  {
    q: "What if I don't have dental insurance?",
    a: "You're still very welcome. New patients can start with our $125 cleaning, exam & X-rays, and we accept HSA and FSA funds. For larger treatment, we offer payment plans so cost never has to delay your care.",
  },
  {
    q: 'How often does my plan cover cleanings?',
    a: "Most plans cover two cleanings every 12 months, but coverage varies. We'll confirm the specifics of your plan and help you make the most of your benefits before they reset each year.",
  },
]

export default function InsuranceFaqs() {
  return (
    <section className="bg-bg-2 py-[clamp(60px,7vw,104px)]">
      <div className="mx-auto max-w-[1240px] px-site text-center">
        <Reveal delay={0}>
          <div className="text-[11.5px] font-medium uppercase tracking-[0.32em] text-coral">
            Common questions
          </div>
          <h2 className="mt-[14px] font-serif text-[clamp(30px,4vw,52px)] font-light leading-[1.05] tracking-[-0.02em] text-white">
            Insurance, <em className="italic font-normal text-coral">answered</em>.
          </h2>
        </Reveal>

        <div className="mt-[38px] max-w-[880px] mx-auto space-y-3">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 0.05}>
              <details
                open={i === 0}
                className="group rounded-2xl border border-line bg-ink/[0.03] px-[22px]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-serif text-[19px] font-normal text-white marker:content-none">
                  {faq.q}
                  <span className="shrink-0 text-[22px] leading-none text-coral group-open:hidden">
                    +
                  </span>
                  <span className="hidden shrink-0 text-[22px] leading-none text-coral group-open:inline">
                    &ndash;
                  </span>
                </summary>
                <div className="-mt-1 pb-5 text-[14.5px] text-left font-light leading-[1.7] text-muted">
                  {faq.a}
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}