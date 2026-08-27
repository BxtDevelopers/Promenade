import Link from 'next/link'
import { CircleDollarSign, ShieldCheck, Check, Users } from 'lucide-react'
import Reveal from '../common/Reveal'

const cards = [
  {
    icon: CircleDollarSign,
    title: 'Clear pricing, always',
    body: 'You approve every step and cost before anything starts — no surprise bills.',
  },
  {
    icon: ShieldCheck,
    title: 'We stand behind our work',
    body: (
      <>
        If something we placed doesn&apos;t hold up under normal use, we&apos;ll make it right.{' '}
        <Link href="/warranty" className="text-accent no-underline">
          See our warranty 
        </Link>
      </>
    ),
  },
  {
    icon: Check,
    title: 'Gentle with nervous patients',
    body: 'No rushing, no judgment — a calm pace and a light touch for anxious and first-time visitors.',
  },
  {
    icon: Users,
    title: 'The same dentist every visit',
    body: 'Continuity of care with a team that remembers you — not a number on a chart.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-section">
      <div className="mx-auto max-w-[1240px] px-site">
        <Reveal>
          <span className="text-[11.5px] font-medium uppercase tracking-[0.32em] text-accent">
            Why patients choose us
          </span>
          <h2 className="mt-[6px] font-serif text-section font-light leading-[1.05] tracking-[-0.02em] text-ink">
            Why families choose <em className="italic font-normal text-accent">Promenade Dental</em> in
            Chandler.
          </h2>
        </Reveal>

        <div className="mt-[46px] grid grid-cols-1 gap-[clamp(20px,2.5vw,32px)] sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 60} className="border-t border-coral/50 pt-[22px]">
              <span className="mb-[18px] inline-flex h-10 w-10 items-center justify-center rounded-full border border-coral/50">
                <Icon className="h-6 w-6 text-accent" strokeWidth={2.2} />
              </span>
              <b className="mb-[10px] block font-serif text-2xl font-normal leading-[1.15] text-ink">
                {title}
              </b>
              <p className="text-lg font-light leading-[1.65] text-body">{body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}