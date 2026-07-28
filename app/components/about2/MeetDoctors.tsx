import Image from 'next/image'
import Reveal from '../common/Reveal'

// Column classes must be written out in full — Tailwind cannot see a class
// name built by interpolation, so `lg:grid-cols-${n}` was never generated.
const eduList = (items: string[], noOfCols: 1 | 2) => (
  <ul
    className={`grid grid-cols-1 gap-x-8 gap-[4px] ${
      noOfCols === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-1'
    }`}
  >
    {items.map((item,i) => (
      <li
        key={i}
        className="relative py-[5px] pl-[20px] text-[14px] font-light leading-[1.5] text-muted before:absolute before:left-0 before:top-[12px] before:h-[6px] before:w-[6px] before:rounded-full before:bg-coral before:opacity-70"
      >
        {item}
      </li>
    ))}
  </ul>
)

export default function MeetDoctors() {
  return (
    <section className="bg-bg-2 py-section">
      {/* Was lg:max-w-[90%] — far wider than every other section, which blew
          the portraits up to ~700px and made the block dominate the page. */}
      <div className="mx-auto max-w-[1240px] px-site">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-[30px]">
            <div>
              <span className="text-[11.5px] font-medium uppercase tracking-[0.32em] text-coral">
                Meet the Doctors
              </span>
              <h2 className="mt-[6px] font-serif text-section font-light leading-[1.05] tracking-[-0.02em] text-white">
                The same trusted practice, <em className="italic font-normal text-coral">in caring new hands</em>.
              </h2>
            </div>
          </div>
        </Reveal>

        {/* Dr. Shriya Sarin */}
        <Reveal className="mt-8 grid grid-cols-1 items-center gap-[clamp(36px,5vw,80px)] lg:grid-cols-[0.82fr_1.18fr]">
          <div className="relative mx-auto aspect-[0.9] w-full max-w-[400px] lg:mx-0">
            <div className="relative h-full w-full overflow-hidden rounded-arch-sm shadow-[0_50px_90px_-40px_rgba(0,0,0,.7)]">
              <Image
                src="/assets/dr-shriya-2.jpeg"
                alt="Dr. Shriya Sarin, DMD"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 400px"
              />
            </div>
          </div>

          <div>
            <div className="text-[12px] font-medium uppercase tracking-[0.16em] text-coral">
              Dentist &amp; Owner
            </div>

            <h3 className="mt-4 font-serif text-[clamp(30px,3.2vw,44px)] font-light leading-[0.98] tracking-[-0.02em] text-white">
              Shriya <span className="italic text-coral">Sarin</span>, DMD
            </h3>

            <p className="mt-2 text-[13px] font-medium uppercase tracking-[0.06em] text-coral">
              Doctor of Dental Medicine — Arizona School of Dentistry and Oral Health
            </p>
              <div className="mt-5 grid gap-x-8 gap-y-6 lg:grid-cols-2">
  <div>
    <h4 className="mb-1.5 font-serif text-[13px] font-medium uppercase tracking-[0.08em] text-coral">
      Dental Sleep Medicine &amp; Patient Care
    </h4>

    <p className="text-[15px] font-light leading-[1.65] text-muted">
      Dr. Shriya Sarin is passionate about helping patients achieve better oral
      health, improved sleep, and a higher quality of life. In addition to
      providing comprehensive dental care, she has advanced training in Dental
      Sleep Medicine through the American Academy of Dental Sleep Medicine,
      allowing her to help patients explore non-surgical oral appliance therapy
      for snoring and obstructive sleep apnea.
    </p>
  </div>

  <div>
    <h4 className="mb-1.5 font-serif text-[13px] font-medium uppercase tracking-[0.08em] text-coral">
      Focus Areas
    </h4>

    {eduList(
      [
        'Sleep apnea and snoring solutions using custom oral appliance therapy',
        'Preventive and family dentistry for patients of all ages',
        'Patient education and conservative treatment planning',
        'Long-term oral health and wellness-focused care',
      ],
      1
    )}
  </div>
</div>
          
            <h4 className="mt-[18px] mb-1.5 font-serif text-[13px] font-medium uppercase tracking-[0.08em] text-coral">
              Education &amp; Advanced Training
            </h4>

            {eduList([
              'Doctor of Dental Medicine (DMD) — Arizona School of Dentistry and Oral Health',
              'Dental Sleep Medicine Training — American Academy of Dental Sleep Medicine',
              'Certificate in Dental Public Health — Arizona School of Dentistry and Oral Health',
              'Master of Health Administration — University of North Texas Health Science Center, Fort Worth, Texas',
              'Bachelor of Dental Surgery (BDS) — Ghaziabad, India',
            ],2)}
                  </div>

            
        </Reveal>

        {/* Dr. James M. Wei */}
        <Reveal className="mt-[clamp(40px,5vw,72px)] grid grid-cols-1 items-center gap-[clamp(36px,5vw,80px)] lg:grid-cols-[1.18fr_0.82fr]">
          <div className="order-2 lg:order-1">
            <div className="text-[12px] font-medium uppercase tracking-[0.16em] text-coral">
  Family &amp; Cosmetic Dentist &middot; Founder, since 2003
</div>

<h3 className="mt-4 font-serif text-[clamp(30px,3.2vw,44px)] font-light leading-[0.98] tracking-[-0.02em] text-white">
  James M. <span className="italic text-coral">Wei</span>, DDS
</h3>

<p className="mt-2 text-[13px] font-medium uppercase tracking-[0.06em] text-coral">
              Doctor of Dental Surgery – University of California, Los Angeles (UCLA) School of Dentistry
            </p>

<div className="mt-5 grid gap-x-8 gap-y-6 lg:grid-cols-2">
  <div>
    <h4 className="mb-1.5 font-serif text-[13px] font-medium uppercase tracking-[0.08em] text-coral">
      Why Dentistry?
    </h4>

    <p className="text-[15px] font-light leading-[1.65] text-muted">
      Dr. Wei brings an artist&apos;s eye to dentistry. He studied both Biology
      (with honors) and Design at UCLA before earning his D.D.S. degree from the UCLA
      School of Dentistry in 2000. Since moving to Chandler, he has built a
      reputation for conservative, detail-oriented dental care that prioritizes
      natural-looking, long-lasting results.
    </p>
  </div>

  <div>
    <h4 className="mb-1.5 font-serif text-[13px] font-medium uppercase tracking-[0.08em] text-coral">
  Outside the Office
</h4>

{eduList(
  [
    'Family time with his wife and son',
    'Traveling',
    'Cooking',
    'Reading & self-improvement',
  ],
  1
)}
  </div>
</div>

<h4 className="mt-[18px] mb-1.5 font-serif text-[13px] font-medium uppercase tracking-[0.08em] text-coral">
  Education &amp; Training
</h4>

{eduList(
  [
    'B.S. in Biology, with honors — UCLA',
    'Design — UCLA School of Fine Arts',
    'D.D.S. — UCLA School of Dentistry, 2000',
    'Thousands of hours of continuing education beyond state requirements',
  ],
  2
)}

          </div>

          <div className="order-1 relative mx-auto aspect-[0.9] w-full max-w-[400px] lg:order-2 lg:mx-0">
            <div className="relative h-full w-full overflow-hidden rounded-arch-sm shadow-[0_50px_90px_-40px_rgba(0,0,0,.7)]">
              <Image
                src="/assets/dr-wei-james.jpeg"
                alt="Dr. James M. Wei, DDS"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 400px"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}