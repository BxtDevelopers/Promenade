'use client';

import Image from 'next/image';
import { useScrollReveal } from '@/app/lib/useScrollReveal';

const PLANS = [
   { name: 'Aetna', file: 'aetna-logo.png', scale: 1.7 },
  { name: 'Blue Cross Blue Shield', file: 'bluecross-logo.png', scale: 2.7 },
  { name: 'Cigna', file: 'cigna-logo.png', scale: 2.6 }, 
  { name: 'Delta Dental', file: 'deltadental-logo.webp', scale: 1.5 },
  { name: 'Guardian', file: 'guardian-logo.webp', scale: 1.1 }, // Example of scaling down
  { name: 'Humana', file: 'humana-logo.png', scale: 1.1 },
  { name: 'MetLife', file: 'metlife-logo.webp', scale: 2.5 },
  { name: 'Premier Access', file: 'premieraccess-logo.png', scale: 1.4 },
  { name: 'Principal', file: 'principal-logo.png', scale: 1.2 },
  { name: 'UFCW', file: 'ufcw-logo.webp', scale: 1.2 },
  { name: 'United Concordia', file: 'unitedconcordia-logo.png', scale: 1.2 },
  { name: 'UnitedHealthcare', file: 'unitedhealthcare-logo.webp', scale: 1.2 },
];

export default function InsuranceInfo() {
  const [leadRef, leadIn] = useScrollReveal();

  return (
    <section className="py-section bg-bg-2">
      <div className="px-site max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-[60px] items-start">

          {/* Lead */}
          <div
            ref={leadRef as React.RefObject<HTMLDivElement>}
            className={[
              'transition-all duration-1000 ease-out',
              leadIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
            ].join(' ')}
          >
            <span className="inline-block text-[11.5px] font-medium tracking-eyebrow uppercase text-coral font-sans mb-4">
              Insurance &amp; New Patients
            </span>
            <h2 className="font-serif font-light text-3xl
              lg:text-[clamp(40px,4.6vw,80px)] leading-[1.05] tracking-[-0.02em] text-white max-w-[16ch]">
              Most major PPO plans{' '}
              <em className="not-italic text-coral">accepted</em>.
            </h2>
            <p className="text-muted text-[15px] md:text-[16px] font-light leading-[1.7] mt-6 max-w-[42ch]">
              Not sure if you&apos;re covered? Send us your insurance details
              before your visit and we&apos;ll confirm your benefits ahead of
              time — no surprises at checkout.
            </p>
          </div>

          {/* Plan grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-[14px] mt-auto">
            {PLANS.map((plan, i) => (
              <PlanCard 
                key={plan.name} 
                name={plan.name} 
                file={plan.file} 
                scale={plan.scale} 
                index={i} 
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── Individual Plan Card ───────────────────────────── */

function PlanCard({ 
  name, 
  file, 
  scale = 1,
  index 
}: { 
  name: string; 
  file: string; 
  scale?: number;
  index: number;
}) {
  const [ref, inView] = useScrollReveal();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={[
        'group flex h-24 items-center justify-center rounded-2xl border border-line bg-bg px-4 py-6 text-center',
        'transition-all duration-[450ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]',
        'hover:-translate-y-1 hover:bg-bg/90',
      ].join(' ')}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(16px)',
        transitionDelay: `${index * 0.05}s`,
      }}
    >
      <div 
        className="relative h-full w-full transition-transform duration-300"
        style={{ transform: `scale(${scale})` }}
      >
        <Image
          src={`/assets/insurance-carriers/${file}`}
          alt={`${name} insurance accepted`}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-contain p-2 transition-all duration-300 opacity-80 group-hover:opacity-100"
        />
      </div>
    </div>
  );
}