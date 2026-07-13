import Link from 'next/link'
import Image from 'next/image'

const BASE = 'https://promenade-dental.vercel.app'

export default function DoctorsSection() {
  return (
    <section id="doctors" className="bg-bg-2 py-[clamp(70px,8vw,118px)]">
      <div className="mx-auto max-w-[1240px] px-[clamp(22px,4vw,60px)]">

        {/* Section head */}
        <div className="rv mb-0">
          <span className="text-[11.5px] tracking-[0.32em] uppercase font-medium text-coral">
            A new chapter
          </span>
          <h2
            className="font-serif font-light tracking-[-0.02em] leading-[1.05] text-white mt-2 text-[clamp(30px,4vw,52px)]"
          >
            The same trusted practice,{' '}
            <em className="italic text-coral">in caring new hands</em>.
          </h2>
          <p
            className="font-light text-[15.5px] leading-[1.75] mt-[14px] text-muted lg:max-w-[80%]"
          >
            After 18 years looking after Chandler families, Dr. James Wei is handing Promenade Dental
            to Dr. Shriya Sarin — the same gentle, unhurried care and the same familiar office, now
            led by Dr. Shriya.
          </p>
        </div>

        {/* Exterior photo */}
        <figure
          className="rv relative rounded-[20px] overflow-hidden my-[clamp(34px,4vw,52px)] shadow-[0_50px_90px_-50px_rgba(0,0,0,0.7)]"
        >
          <div
            className="w-full relative flex items-center justify-center bg-panel h-[clamp(280px,42vw,520px)]"
          >
            <Image 
              src="/assets/pd-office.jpeg" 
              alt="Promenade Dental exterior" 
              fill
              className="object-cover object-center"
            />
          </div>
          <figcaption
            className="absolute left-0 right-0 bottom-0 flex flex-col gap-[7px] p-[64px_30px_26px] bg-[linear-gradient(transparent,rgba(11,28,44,0.88))]"
          >
            <span
              className="font-serif font-light leading-[1.12] text-white text-[clamp(20px,2.4vw,30px)]"
            >
              Passing the torch — Dr. Wei welcomes Dr. Shriya.
            </span>
            <span
              className="text-[11px] tracking-[0.18em] uppercase font-medium text-coral"
            >
              Promenade Dental · Fulton Ranch, Chandler AZ
            </span>
          </figcaption>
        </figure>

        {/* Two doctors */}
        <div className="grid gap-[clamp(30px,4vw,60px)] grid-cols-1 md:grid-cols-2">

          {/* Dr. Wei */}
          <article className="rv">
            <div
              className="relative flex flex-col items-center justify-center gap-[10px] rounded-[200px_200px_22px_22px] mb-[22px] aspect-[1.12] bg-[linear-gradient(160deg,var(--panel),var(--bg-2))] border border-dashed border-[rgba(244,236,221,0.14)] overflow-hidden"
            >
              <Image 
                src="/assets/dr-james.webp" 
                alt="Portrait of Dr. James Wei" 
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="text-[12px] tracking-[0.16em] uppercase font-medium text-coral">
              Founding Dentist · since 2000
            </div>
            <h3
              className="font-serif font-light tracking-[-0.03em] leading-[0.92] mt-[16px] mb-0 text-white text-[clamp(26px,3.2vw,38px)]"
            >
              Dr. James{' '}
              <span className="italic text-coral">Wei</span>
            </h3>
            <p
              className="text-[16px] font-light leading-[1.7] mt-[14px] text-muted max-w-[40ch]"
            >
              Built Promenade Dental over 18 years with a conservative, do-only-what&apos;s-needed
              approach — and is personally entrusting his patients to Dr. Shriya.
            </p>
          </article>

          {/* Dr. Shriya */}
          <article className="rv">
            <div
              className="relative flex flex-col items-center justify-center gap-[10px] rounded-[200px_200px_22px_22px] mb-[22px] aspect-[1.12] bg-[linear-gradient(160deg,var(--panel),var(--bg-2))] border border-dashed border-[rgba(244,236,221,0.14)] overflow-hidden"
            >
              <Image 
                src="/assets/dr-shriya.jpeg" 
                alt="Portrait of Dr. Shriya Sarin" 
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="text-[12px] tracking-[0.16em] uppercase font-medium text-coral">
              Dentist &amp; Owner
            </div>
            <h3
              className="font-serif font-light tracking-[-0.03em] leading-[0.92] mt-[16px] mb-0 text-white text-[clamp(26px,3.2vw,38px)]"
            >
              Dr. Shriya{' '}
              <span className="italic text-coral">Sarin</span>
            </h3>
            <p
              className="text-[16px] font-light leading-[1.7] mt-[14px] text-muted max-w-[40ch]"
            >
              Carrying forward the same calm, unhurried care Chandler families have trusted for
              years — with a gentle touch for anxious and first-time patients.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}