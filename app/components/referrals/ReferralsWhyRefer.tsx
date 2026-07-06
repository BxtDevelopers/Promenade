import { CheckCircle2, Heart, RotateCw, Users } from 'lucide-react'
import Reveal from '../common/Reveal'

const REASONS = [
  {
    icon: Heart,
    title: 'Treated like family',
    body: 'Warm, personal care from a team that remembers you \u2014 not a number on a chart.',
  },
  {
    icon: CheckCircle2,
    title: 'No rushing, no pressure',
    body: "Every option explained in plain language, so your friend decides with confidence.",
  },
  {
    icon: RotateCw,
    title: 'Same dentist every visit',
    body: "Continuity of care with Dr.\u00a0Shriya, who gets to know each patient's history and goals.",
  },
  {
    icon: Users,
    title: 'Loved by the neighborhood',
    body: '150+ five-star reviews from Chandler families just like yours.',
  },
]

export default function ReferralsWhyRefer() {
  return (
    <section className="bg-bg-2 py-[clamp(74px,8vw,120px)]">
      <div className="mx-auto max-w-[1240px] px-site">
        <Reveal className="mb-[34px]" delay={0}>
          <div className="text-[11.5px] font-medium uppercase tracking-[0.32em] text-coral">
            Why patients refer us
          </div>
          <h2 className="mt-[14px] font-serif text-[clamp(30px,4vw,52px)] font-light leading-[1.05] tracking-[-0.02em] text-white">
            Care worth <em className="italic font-normal text-coral">passing along</em>.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-[clamp(20px,2.5vw,32px)] sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} className="border-t border-line pt-[22px]" delay={i * 0.08}>
              <span className="mb-[18px] inline-flex h-[30px] w-[30px] items-center justify-center rounded-full border border-coral/50">
                <Icon className="h-[15px] w-[15px] text-coral" strokeWidth={2.2} />
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