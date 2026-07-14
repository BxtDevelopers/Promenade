'use client';
'use client';

import Image from 'next/image';
import { ShieldCheck } from 'lucide-react';
import { useScrollReveal } from '@/app/lib/useScrollReveal';

// Add a scale property to control individual logo sizes
const CARRIERS = [
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

export default function InsuranceSection() {
  const [textRef, textIn] = useScrollReveal();

  return (
    <section id="insurance" className="py-16 md:py-24 lg:py-[clamp(60px,7vw,100px)] px-4 md:px-8">
      <div className="mx-auto max-w-[1240px]">
        {/* Main Vibrant Coral Card */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-coral/60 p-8 md:p-14 lg:p-20 shadow-xl shadow-coral/60">

          {/* Subtle overlay gradient to give the coral some depth */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,white_0%,transparent_40%,rgba(0,0,0,0.1)_100%)] opacity-30 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16 items-start">

            {/* Left Side: The Pitch */}
            <div
              ref={textRef as React.RefObject<HTMLDivElement>}
              className={[
                'text-left lg:sticky lg:top-32 transition-all duration-1000 ease-out',
                textIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
              ].join(' ')}
            >
              {/* Pill badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/75 px-4 py-2 backdrop-blur-sm border border-white/30 shadow-sm">
                <ShieldCheck className="h-4 w-4 text-coral" strokeWidth={2.5} />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-coral">
                  Insurance
                </span>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl lg:text-[clamp(36px,4.5vw,56px)] font-light leading-[1.05] tracking-tight text-white">
                Most PPO plans <br className="hidden lg:block" />
                <em className="italic text-white">accepted.</em>
              </h2>

              <p className="mt-6 max-w-[42ch] text-base md:text-lg leading-relaxed font-medium text-slate-800">
                We&apos;re in-network with {CARRIERS.length} major carriers and we&apos;ll maximize your
                benefits for you — zero surprises, just great care.
              </p>

              <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white/90">
                 <span className="flex h-2 w-2 rounded-full bg-white animate-pulse" />
                  Don&apos;t see your plan? Call us
                   <a href="tel:+14808028188" className="underline underline-offset-2 hover:text-white"> (480) 802-8188</a> 
              </div>
            </div>

            {/* Right Side: Carrier Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
              {CARRIERS.map((carrier, i) => (
                <CarrierCard 
                  key={carrier.name} 
                  name={carrier.name} 
                  file={carrier.file} 
                  scale={carrier.scale}
                  index={i} 
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Individual Carrier Card ───────────────────────────── */

function CarrierCard({ 
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
        'group flex h-24 items-center justify-center rounded-2xl bg-white px-4 py-6 text-center',
        'shadow-lg shadow-orange-900/10 transition-all duration-[450ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]',
        'hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-900/20',
      ].join(' ')}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(16px)',
        transitionDelay: `${index * 0.05}s`,
      }}
    >
      {/* We apply the scale to this inner wrapper so it doesn't affect the card container itself */}
      <div 
        className="relative h-full w-full transition-transform duration-300"
        style={{ transform: `scale(${scale})` }}
      >
        <Image
          src={`/assets/insurance-carriers/${file}`}
          alt={`${name} insurance accepted`}
          fill
          sizes="(max-width: 768px) 50vw, 33vw"
          className="object-contain p-2 transition-all duration-300"
        />
      </div>
    </div>
  );
}