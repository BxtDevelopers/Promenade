import Image from 'next/image'
import Reveal from '../common/Reveal'
import { DOCTOR } from '@/app/lib/data/doctorData'

export default function DoctorBio() {
  return (
    <section className="bg-bg py-section">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-start gap-[clamp(36px,5vw,72px)] px-site lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <span className="text-[11.5px] font-medium uppercase tracking-[0.32em] text-accent">
            About Dr. Sarin
          </span>
          <h2 className="mt-[6px] font-serif text-section font-light leading-[1.05] tracking-[-0.02em] text-ink">
            Comprehensive dentistry, and{' '}
            <em className="italic font-normal text-accent">better sleep</em>.
          </h2>

          <div className="mt-7 space-y-5">
            {DOCTOR.bio.map((paragraph, i) => (
              <p
                key={i}
                className="max-w-[68ch] text-[15.5px] font-light leading-[1.75] text-body-2"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="relative aspect-[0.86] w-full overflow-hidden rounded-[24px]">
            <Image
              src={DOCTOR.secondaryPortrait.src}
              alt={DOCTOR.secondaryPortrait.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 460px"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
