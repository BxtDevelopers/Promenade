import Image from 'next/image'
import Reveal from '../common/Reveal'
import BookButton from '../common/BookButton'
import { DOCTOR } from '@/app/lib/data/doctorData'

/**
 * The identity block.
 *
 * The <h1> carries the full entity — name, credential, role, practice, city —
 * because this page exists to be the authoritative answer to "who is Dr. Shriya
 * Sarin". A heading of just "Meet Dr. Shriya" would leave every one of those
 * facts to be inferred from surrounding prose.
 */
export default function DoctorHero() {
  return (
    <section className="bg-bg-2 pt-[clamp(132px,12vw,176px)] pb-[clamp(60px,7vw,100px)]">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-[clamp(36px,5vw,80px)] px-site lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <div className="relative mx-auto aspect-[0.9] w-full max-w-[400px] lg:mx-0">
            <div className="relative h-full w-full overflow-hidden rounded-arch-sm shadow-[0_50px_90px_-40px_rgba(0,0,0,.7)]">
              <Image
                src={DOCTOR.portrait.src}
                alt={DOCTOR.portrait.alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 400px"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="text-[12px] font-medium uppercase tracking-[0.16em] text-accent">
            {DOCTOR.jobTitle} &middot; Promenade Dental, Chandler AZ
          </div>

          <h1 className="mt-4 font-serif text-[clamp(34px,4.4vw,60px)] font-light leading-[1] tracking-[-0.02em] text-white">
            Dr. Shriya <span className="italic text-accent">Sarin</span>, DMD
          </h1>

          <p className="mt-6 max-w-[62ch] text-[16px] font-light leading-[1.7] text-body">
            {DOCTOR.summary}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <BookButton className="rounded-full bg-coral px-7 py-[14px] text-[14px] font-medium text-white transition-colors duration-200 hover:bg-coral-deep">
              Book with Dr. Sarin
            </BookButton>
            <a
              href="tel:+14808028188"
              className="rounded-full border border-line px-7 py-[14px] text-[14px] font-medium text-white transition-colors duration-200 hover:border-coral hover:text-accent"
            >
              Call (480) 802-8188
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
