import Link from 'next/link'
import { Activity, Zap, Droplet, Crown, Sparkles, Moon, Smile } from 'lucide-react'
import { LiaToothSolid } from 'react-icons/lia'

const BASE = 'https://promenade-dental.vercel.app'

interface Problem {
  href: string
  icon: React.ReactNode
  title: string
  desc: string
}

const problems: Problem[] = [
  {
    href: `/services/emergency-dentistry/toothache-relief`,
    icon: <Activity className="w-[26px] h-[26px] flex-none text-coral" strokeWidth={1.5} />,
    title: 'Tooth pain',
    desc: 'Ache, throbbing, or sensitivity',
  },
  {
    href: `/services/emergency-dentistry/broken-chipped-tooth`,
    icon: <Zap className="w-[26px] h-[26px] flex-none text-coral" strokeWidth={1.5} />,
    title: 'Chipped or broken tooth',
    desc: 'Cracks, breaks, worn edges',
  },
  {
    href: `/services/restorative-dentistry/dental-bridges`,
    icon: <LiaToothSolid className="w-[26px] h-[26px] flex-none text-coral" strokeWidth={1.5} />,
    title: 'Missing tooth',
    desc: 'Dental bridges, dentures & partials',
  },
  {
    href: `/services/family-dentistry/gum-disease-treatment`,
    icon: <Droplet className="w-[26px] h-[26px] flex-none text-coral" strokeWidth={1.5} />,
    title: 'Bleeding gums',
    desc: 'Tenderness or swelling',
  },
  {
    href: `/services/restorative-dentistry/dental-crowns`,
    icon: <Crown className="w-[26px] h-[26px] flex-none text-coral" strokeWidth={1.5} />,
    title: 'Lost filling or crown',
    desc: 'Something came loose',
  },
  {
    href: `/services/cosmetic-dentistry/teeth-whitening`,
    icon: <Sparkles className="w-[26px] h-[26px] flex-none text-coral" strokeWidth={1.5} />,
    title: 'Stained or dull smile',
    desc: 'Whitening & cosmetic work',
  },
  {
    href: `/services/sleep-apnea`,
    icon: <Moon className="w-[26px] h-[26px] flex-none text-coral" strokeWidth={1.5} />,
    title: 'Snoring or poor sleep',
    desc: 'Sleep apnea & snoring solutions',
  },
]

export default function ProblemsSection() {
  return (
    <section id="problems" className="py-[clamp(74px,8vw,120px)]">
      <div className="mx-auto max-w-[1240px] px-[clamp(22px,4vw,60px)]">

        {/* Head */}
        <div className="rv mb-[34px]">
          <span className="text-[11.5px] tracking-[0.32em] uppercase font-medium text-coral">
            In your words
          </span>
          <h2 className="font-serif font-light tracking-[-0.02em] leading-[1.05] text-ivory mt-2 text-[clamp(30px,4vw,52px)]">
            What brought you{' '}
            <em className="italic text-coral">here?</em>
          </h2>
          <p className="font-light text-[15.5px] leading-[1.75] mt-[14px] text-muted max-w-[42ch]">
            Tell us what&apos;s going on — we&apos;ll point you to the right care.
          </p>
        </div>

        {/* Chips */}
        <div className="flex flex-wrap gap-[14px]">
          {problems.map((p, i) => (
            <Link
              key={p.title}
              href={p.href}
              className="rv flex items-center gap-4 no-underline rounded-[18px] transition-all duration-[350ms] hover:-translate-y-1 group flex-[1_1_260px] p-[20px_24px] border border-ivory/30 bg-[linear-gradient(180deg,rgba(244,236,221,0.02),transparent)] hover:border-[rgba(232,154,114,0.45)] hover:bg-[linear-gradient(180deg,rgba(232,154,114,0.06),transparent)]"
              style={{
                transitionDelay: `${(i % 3) * 0.08}s`,
              }}
            >
              {p.icon}
              <div>
                <div className="font-serif text-[19px] text-ivory leading-[1.1]">
                  {p.title}
                </div>
                <div className="text-[12.5px] mt-1 tracking-[0.02em] text-muted-2">
                  {p.desc}
                </div>
              </div>
              <span className="ml-auto text-[18px] text-coral opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}