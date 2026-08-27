import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Reveal from '../common/Reveal'
import { DOCTOR } from '@/app/lib/data/doctorData'

/**
 * Clinical interests, each linking to the service page that covers it. The
 * links matter as much as the copy: they are what connect this person to the
 * treatments the site already ranks for, rather than leaving the profile as an
 * orphan page that mentions them.
 */
export default function DoctorFocusAreas() {
  return (
    <section className="bg-bg py-section">
      <div className="mx-auto max-w-[1240px] px-site">
        <Reveal>
          <span className="text-[11.5px] font-medium uppercase tracking-[0.32em] text-accent">
            Clinical interests
          </span>
          <h2 className="mt-[6px] max-w-[22ch] font-serif text-section font-light leading-[1.05] tracking-[-0.02em] text-ink">
            What Dr. Sarin{' '}
            <em className="italic font-normal text-accent">treats</em>.
          </h2>
        </Reveal>

        <div className="mt-[clamp(30px,4vw,52px)] grid grid-cols-1 gap-5 md:grid-cols-2">
          {DOCTOR.focusAreas.map((area, i) => (
            <Reveal key={area.title} delay={i * 60}>
              <Link
                href={area.href}
                className="group flex h-full flex-col rounded-[18px] border border-ink/10 bg-white p-7 transition-colors duration-200 hover:border-coral/50"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-serif text-[21px] font-light leading-[1.25] text-ink">
                    {area.title}
                  </h3>
                  <ArrowUpRight
                    className="mt-1 h-[18px] w-[18px] shrink-0 text-accent transition-transform duration-200 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-3 text-[14.5px] font-light leading-[1.65] text-body-2">
                  {area.description}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
