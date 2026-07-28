import { Check } from "lucide-react"

const reasons = [
  {
    title: 'Treated like family',
    desc:  'Warm, personal care from a team that remembers you — not a number on a chart.',
  },
  {
    title: 'No rushing, no pressure',
    desc:  'We explain every option in plain language and let you decide. Never a hard sell.',
  },
  {
    title: 'Gentle, conservative care',
    desc:  'We treat what actually needs treating — and keep anxious visits calm.',
  },
  {
    title: 'The same dentist every visit',
    desc:  'Continuity of care with someone who knows your history and your goals.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-[clamp(74px,8vw,120px)]">
      <div className="mx-auto max-w-[1240px] px-[clamp(22px,4vw,60px)]">

        {/* Section head */}
        <div className="rv mb-[46px]">
          <span className="text-[11.5px] tracking-[0.32em] uppercase font-medium text-coral">
            Why patients choose us
          </span>
          <h2
            className="font-serif font-light tracking-[-0.02em] leading-[1.05] text-ink mt-2 text-[clamp(30px,4vw,52px)]"
          >
            Care that feels{' '}
            <em className="italic text-coral">different</em> — on purpose.
          </h2>
        </div>

        {/* 4-column responsive grid */}
        <div className="grid gap-[clamp(20px,2.5vw,32px)] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="rv pt-[22px] border-t border-coral/50"
              style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
            >
              {/* Check icon in circle */}
              <span
                className="inline-flex w-[30px] h-[30px] rounded-full items-center justify-center mb-[18px] border border-[rgba(232,154,114,0.5)]"
              >
                <Check className="w-4 h-4 text-coral" />
              </span>
              <b className="block font-serif font-normal text-[19px] leading-[1.15] mb-[10px] text-ink">
                {r.title}
              </b>
              <p className="text-[14.5px] font-light leading-[1.65] text-muted">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}