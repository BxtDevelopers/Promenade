import Link from 'next/link'
import Image from 'next/image'


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
            After 23 years of caring for Chandler families, Dr. James Wei has transferred ownership of Promenade Dental to Dr. Shriya Sarin who will maintain the same comfortable and friendly environment you all are familiar with.
          </p>
        </div>

        {/* Exterior photo */}
        <figure
          className="rv relative rounded-[20px] overflow-hidden my-[clamp(34px,4vw,52px)] shadow-[0_50px_90px_-50px_rgba(0,0,0,0.7)]"
        >
          {/* The subject of this photo — Dr. Wei and Dr. Shriya — sits low in
              the frame. A fixed 520px height cropped their legs, and the
              caption's gradient darkened what was left, so the handshake this
              section is about was effectively invisible. Using the image's own
              aspect ratio shows it whole, and the caption now sits below
              rather than over it. */}
          <div className="relative w-full aspect-[1500/844] bg-panel">
            <Image
              src="/assets/pd-office.jpeg"
              alt="Dr. James Wei and Dr. Shriya Sarin outside Promenade Dental in Chandler"
              fill
              // Without sizes, next/image assumes 100vw and requested w=3840
              // for a 1500px-wide source.
              sizes="(max-width: 1024px) 100vw, 1125px"
              className="object-cover object-center"
            />
          </div>
          <figcaption
            className="flex flex-col gap-[7px] bg-panel p-[22px_30px_26px]"
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
                src="/assets/dr-wei-james.jpeg" 
                alt="Portrait of Dr. James Wei" 
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="text-[12px] tracking-[0.16em] uppercase font-medium text-coral">
              Founding Dentist • since 2003
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
              Built Promenade Dental for over 23 years with conservative, high-quality dental care and personalized attention — and is entrusting his patients to Dr. Shriya.
            </p>
          </article>

          {/* Dr. Shriya */}
          <article className="rv">
            <div
              className="relative flex flex-col items-center justify-center gap-[10px] rounded-[200px_200px_22px_22px] mb-[22px] aspect-[1.12] bg-[linear-gradient(160deg,var(--panel),var(--bg-2))] border border-dashed border-[rgba(244,236,221,0.14)] overflow-hidden"
            >
              <Image 
                src="/assets/dr-shriya-2.jpeg" 
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