import { Sun } from 'lucide-react'
import Reveal from '../common/Reveal'
import Image from 'next/image'

export default function OurStory() {
  return (
    <section className="py-[clamp(40px,5vw,64px)]">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-[clamp(30px,4vw,60px)] px-site lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <span className="text-[11.5px] font-medium uppercase tracking-[0.32em] text-coral">
            Our story
          </span>
          <h2 className="mt-[14px] font-serif text-[clamp(28px,3.6vw,46px)] font-light leading-[1.05] tracking-[-0.02em] text-ivory">
            A neighborhood practice, <em className="italic font-normal text-coral">not a chain</em>.
          </h2>
          <p className="mt-[18px] text-body-lg font-light leading-[1.6] text-ivory">
            Promenade Dental was built in Fulton Ranch on a simple idea: do honest, conservative
            dentistry, explain everything in plain language, and stand behind the work. No
            upselling, no pressure &mdash; just the care you actually need, done well.
          </p>
          <p className="mt-[14px] text-body-lg font-light leading-[1.6] text-ivory">
            Today that same practice is led by Dr. Shriya Sarin, with founding dentist Dr. James
            Wei personally entrusting his patients to her care.
          </p>
        </Reveal>

        <Reveal className="relative min-h-[clamp(240px,32vw,400px)] overflow-hidden rounded-[20px] border border-line">
        <Image
            src="/assets/pd-office.jpeg"
            alt="Promenade Dental Office"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
        />

        <div className="absolute inset-0 bg-black/10" />
        </Reveal>
      </div>
    </section>
  )
}