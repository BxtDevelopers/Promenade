import Reveal from '../common/Reveal'

const FAQS = [
  {
    q: 'Will checking my options affect my credit?',
    a: "Checking your options with Cherry, or prequalifying with CareCredit, uses a soft credit check that doesn't affect your score. A hard inquiry only happens later \u2014 with CareCredit if you submit a full card application, and with Cherry only if you accept a plan.",
  },
  {
    q: 'Is there interest?',
    a: "It depends on the plan. Cherry's Pay-in-4 is always interest-free, with 0% APR monthly plans for those who qualify. CareCredit offers no interest if you pay in full within the 6\u201324 month promotional period \u2014 if a balance remains after that, interest is charged from the original purchase date \u2014 plus longer reduced-APR plans. Your exact terms are shown before you accept.",
  },
  {
    q: 'What can I finance?',
    a: "Any treatment at Promenade Dental \u2014 crowns, bridges, cosmetic work, clear aligners, and more. It's especially helpful for care that insurance only partly covers.",
  },
  {
    q: 'Can I use it with my dental insurance?',
    a: "Yes. A payment plan can cover whatever your insurance doesn't, and you can apply HSA or FSA funds too. We'll provide a clear estimate of your out-of-pocket cost first.",
  },
  {
    q: 'How do I apply?',
    a: "Choose Cherry or CareCredit above and apply online in a few minutes, or call us at (480) 802-8188 and we'll help you through it at your visit.",
  },
]

export default function PaymentsFaqs() {
  return (
    <section className="bg-bg-2 py-[clamp(60px,7vw,104px)]">
      <div className="mx-auto max-w-[1240px] px-site text-center">
        <Reveal delay={0}>
          <div className="text-[11.5px] font-medium uppercase tracking-[0.32em] text-coral">
            Common questions
          </div>
          <h2 className="mt-[14px] font-serif text-[clamp(30px,4vw,52px)] font-light leading-[1.05] tracking-[-0.02em] text-white">
            Payment plans, <em className="italic font-normal text-coral">answered</em>.
          </h2>
        </Reveal>

        <div className="mt-[38px] max-w-[880px] space-y-3 mx-auto">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 0.05}>
              <details
                open={i === 0}
                className="group rounded-2xl border border-line bg-ivory/[0.03] px-[22px]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-serif text-[17px] font-normal text-white marker:content-none sm:text-[19px]">
                  {faq.q}
                  <span className="shrink-0 text-[22px] leading-none text-coral group-open:hidden">
                    +
                  </span>
                  <span className="hidden shrink-0 text-[22px] leading-none text-coral group-open:inline">
                    &ndash;
                  </span>
                </summary>
                <div className="-mt-1 pb-5 text-left text-[14.5px] font-light leading-[1.7] text-muted">
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