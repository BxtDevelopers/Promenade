import { Check } from 'lucide-react'
import Link from 'next/link'

const BASE = 'https://promenade-dental.vercel.app'

const points = [
  {
    title: 'Clear pricing upfront',
    desc:  'You approve every step and cost before anything starts — no surprise bills.',
  },
  {
    title: 'Workmanship guaranteed',
    desc:  "If something we placed doesn't hold up under normal use, we'll make it right.",
  },
  {
    title: 'One team, accountable',
    desc:  'The same dentists who do the work stand behind it, visit after visit.',
  },
]

export default function WarrantySection() {
  return (
    <section
      id="warranty"
      className="py-[clamp(60px,7vw,100px)]"
    >
      <div className="mx-auto max-w-[1240px] px-[clamp(22px,4vw,60px)]">
        <div
          className="rv text-center relative overflow-hidden rounded-[26px] p-[clamp(40px,5vw,68px)] border border-[rgba(244,236,221,0.14)] bg-[radial-gradient(80%_120%_at_50%_0,rgba(232,154,114,0.08),transparent_60%)]"
        >
          {/* Seal */}
          <div
            className="w-[58px] h-[58px] mx-auto mb-[22px] rounded-full grid place-items-center border border-[rgba(232,154,114,0.5)]"
          >
            <Check className="w-6 h-6 text-coral" />
          </div>

          <span className="text-[11.5px] tracking-[0.32em] uppercase font-medium text-coral">
            Our promise
          </span>

          <h2
            className="font-serif font-light tracking-[-0.02em] leading-[1.05] text-ivory mt-[10px] text-[clamp(30px,4.2vw,52px)]"
          >
            No surprises —{' '}
            <em className="italic text-coral">and we stand behind our work</em>.
          </h2>

          <p
            className="font-light text-[16px] leading-[1.7] mx-auto mt-5 text-muted max-w-[56ch]"
          >
            You&apos;ll know the plan and the price before we begin, and the dentistry we do is
            backed by our care guarantee.
          </p>

          {/* 3 points */}
          <div className="grid gap-6 mt-[46px] text-left grid-cols-1 md:grid-cols-3">
            {points.map(p => (
              <div
                key={p.title}
                className="pt-5 border-t border-[rgba(244,236,221,0.14)]"
              >
                <b className="font-serif font-normal text-[18px] block mb-2 text-ivory">
                  {p.title}
                </b>
                <p className="text-[14px] font-light leading-[1.6] text-muted">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          <Link
            href={`${BASE}/warranty`}
            className="inline-flex items-center gap-[10px] mt-[30px] no-underline text-[13px] tracking-[0.08em] uppercase font-medium text-ivory transition-[gap] duration-300 hover:gap-[18px] border-b border-coral pb-[6px]"
          >
            Read our full guarantee{' '}
            <span className="text-coral">→</span>
          </Link>

          <p className="text-[10.5px] font-light leading-[1.5] mt-7 text-muted-2">
            Warranty wording is a placeholder — set the exact terms you&apos;re comfortable
            committing to before this goes live.
          </p>
        </div>
      </div>
    </section>
  )
}