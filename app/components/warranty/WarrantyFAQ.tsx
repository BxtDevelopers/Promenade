import { Plus } from 'lucide-react'
import Reveal from '../common/Reveal'

const faqs = [
  {
    q: 'Why do I need to keep 6-month cleanings?',
    a: 'Regular cleanings and exams are your best defense against breakage and decay — they let us catch small issues before they become big ones. Keeping these visits with us is also what keeps your warranty active.',
  },
  {
    q: "What isn't covered?",
    a: "The guarantee applies to treatment performed on or after August 1, 2026 — work completed before that date isn't covered. Beyond that, it covers our workmanship under normal use, and generally doesn't cover damage from accidents or trauma, neglect, grinding without a recommended night guard, or conditions outside our control. We'll always explain what applies to your specific treatment up front.",
  },
  {
    q: 'Does it really cost me nothing?',
    a: "For covered work that fails under normal use while your routine visits are current, we repair or replace it at no cost to you.* We'll go over the exact terms with you before treatment so there are no surprises.",
  },
  {
    q: 'How else can I protect my dental work?',
    a: "Brush twice a day for two minutes, floss daily, limit sugary and acidic foods, wear a night guard if we recommend one, and don't smoke. These habits help your dentistry last far longer.",
  },
  {
    q: 'How do I make a claim?',
    a: "Just call the office at (480) 802-8188 or mention it at your next visit. We'll get you scheduled and take care of covered work right away.",
  },
]

export default function WarrantyFAQ() {
  return (
    <section className="py-section">
      <div className="mx-auto max-w-[1240px] px-site text-center">
        <Reveal>
          <span className="text-[11.5px] font-medium uppercase tracking-[0.32em] text-coral">
            Common questions
          </span>
          <h2 className="mt-[6px] font-serif text-section font-light leading-[1.05] tracking-[-0.02em] text-ink">
            The warranty, <em className="italic font-normal text-coral">explained</em>.
          </h2>
        </Reveal>

        <Reveal className="mt-[38px] max-w-[880px] mx-auto">
          {faqs.map(({ q, a }, i) => (
            <details
              key={q}
              open={i === 0}
              className="group mb-3 rounded-[16px] border border-line bg-ink/[0.06] px-[22px]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-serif text-[19px] font-normal text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                {q}
                <Plus className="h-[18px] w-[18px] shrink-0 text-coral transition-transform duration-200 group-open:rotate-45" />
              </summary>
              <div className="-mt-1 pb-5 text-[14.5px] font-light leading-[1.7] text-muted">
                {a}
              </div>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  )
}