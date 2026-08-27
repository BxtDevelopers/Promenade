import { Sun } from 'lucide-react'
import Reveal from '../common/Reveal'
import Image from 'next/image'

export default function OurStory() {
  return (
    <section className="py-[clamp(40px,5vw,64px)]">
      <div className="mx-auto grid lg:max-w-[1340px] grid-cols-1 items-center gap-[clamp(30px,4vw,60px)] px-site lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <span className="text-[11.5px] font-medium uppercase tracking-[0.32em] text-accent">
            Our story
          </span>
          <h2 className="mt-[14px] font-serif text-[clamp(28px,3.6vw,46px)] font-light leading-[1.05] tracking-[-0.02em] text-ink">
            A neighborhood practice, <em className="italic font-normal text-accent">not a chain</em>.
          </h2>
          <p className="mt-[18px] text-body-lg font-light leading-[1.6] text-ink">
            At Promenade Dental, we believe dentistry is far more than teeth — it is about building confidence by creating beautiful smiles, and it is about enhancing wellness and comfort. With a modern approach, we have upgraded the practice with a vision to redefine the dental experience through personalized, comprehensive care in a calm and elevated environment. Among countless options available, if you choose us, we are there for you! We are committed to providing the best patient experience, taking time to truly understand each patient. After all, no two smiles &mdash; and no two lives &mdash; are the same.
          </p>
          <p className="mt-[14px] text-body-lg font-light leading-[1.6] text-ink">
          We believe exceptional care begins with listening. Whether you are seeking preventative care, smile enhancement, restorative treatment or solutions for better sleep, every treatment is thoughtfully tailored to support long-term health and confidence.
          </p>
        </Reveal>

        {/* Aspect ratio matches the source photo (1500x844) so object-cover has
            nothing to crop — a fixed height cut the "P" off the storefront sign. */}
        <Reveal className="relative aspect-[1500/844] overflow-hidden rounded-[20px] border border-line">
        <Image
            src="/assets/pd-office.jpeg"
            alt="The Promenade Dental storefront in Chandler, Arizona"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
        />

        <div className="absolute inset-0 bg-black/10" />
        </Reveal>
      </div>
    </section>
  )
}