'use client';

import Image from 'next/image';
import { useScrollReveal } from '@/app/lib/useScrollReveal';

const DOCTORS = [
  {
    name: 'Dr. Shriya Sarin',
    role: 'Cosmetic & Restorative Dentistry',
    bio: 'Detail-driven and design-minded, Dr. Shriya focuses on results that look entirely natural \u2014 combining modern technique with a careful aesthetic eye.',
    stats: [
      { value: '10+ yrs', label: 'Cosmetic dentistry' },
      { value: '1,000+', label: 'Smiles restored' },
    ],
    img: '/assets/dr-shriya-2.jpeg',
  },
] as const;

export default function MeetTheDoctors() {
  const [leadRef, leadIn] = useScrollReveal();

  return (
    <section className="py-section bg-bg-2">
      <div className="px-site max-w-[1240px] mx-auto">

        {/* Lead */}
        <div
          ref={leadRef as React.RefObject<HTMLDivElement>}
          className={[
            'transition-all duration-1000 ease-out',
            leadIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ].join(' ')}
        >
          <span className="inline-block text-[11.5px] font-medium tracking-eyebrow uppercase text-accent font-sans mb-4">
            Meet the Team
          </span>
          <h2 className="font-serif font-light text-3xl
            lg:text-[clamp(40px,4.6vw,80px)] leading-[1.05] tracking-[-0.02em] text-ink max-w-[18ch]">
            The dentists you&apos;ll{' '}
            <em className="not-italic text-accent">actually</em> get to know.
          </h2>
        </div>

        {/* Doctor cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[18px] mt-12 md:mt-16">
          {DOCTORS.map((doc, i) => (
            <DoctorCard key={doc.name} doctor={doc} delay={i * 0.12} />
          ))}
        </div>

      </div>
    </section>
  );
}

function DoctorCard({
  doctor,
  delay,
}: {
  doctor: (typeof DOCTORS)[number];
  delay: number;
}) {
  const [ref, inView] = useScrollReveal();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="rounded-[22px] border border-line bg-ink/[0.02] overflow-hidden transition-all duration-1000 ease-out"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(34px)',
        transitionDelay: `${delay}s`,
      }}
    >
      <div className="relative aspect-[4/3] w-full">
        <Image src={doctor.img} alt={doctor.name} fill className="object-cover" />
      </div>

      <div className="p-7 md:p-8">
        <span className="inline-block text-[11.5px] font-medium tracking-eyebrow uppercase text-accent font-sans mb-2">
          {doctor.role}
        </span>

        <h3 className="font-serif font-normal text-[clamp(22px,2.4vw,30px)] text-ink mb-3">
          {doctor.name}
        </h3>

        <p className="text-body text-[14.5px] font-light leading-[1.65] mb-6">
          {doctor.bio}
        </p>

        <div className="flex gap-8 border-t border-line pt-5">
          {doctor.stats.map((s) => (
            <div key={s.label}>
              <p className="font-serif font-normal text-[20px] text-accent">{s.value}</p>
              <p className="text-body-2 text-[12px] mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}