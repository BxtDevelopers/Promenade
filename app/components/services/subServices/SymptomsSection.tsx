'use client';

import { useScrollReveal } from '@/app/lib/useScrollReveal';

// 1. Interface matching your exact data structure
interface Symptom {
  title: string;
  body: string;
}

interface SymptomsData {
  eyebrow: string;
  heading: string;
  body: string;
  symptoms: Symptom[];
}

export default function SymptomsSection({ data }: { data: SymptomsData }) {
  const [textRef, textIn] = useScrollReveal();

  return (
    <section className="py-section relative border-t border-line bg-bg">
      <div className="lg:px-site max-w-[90%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-24 items-start">
          
          {/* ── Left Column (Sticky) ── */}
          <div
            ref={textRef as React.RefObject<HTMLDivElement>}
            className={[
              'lg:sticky lg:top-32 transition-all duration-1000 ease-out',
              textIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
            ].join(' ')}
          >
            <span className="inline-block text-[11.5px] font-medium tracking-eyebrow uppercase text-coral mb-4">
              {data.eyebrow}
            </span>
            <h2 className="font-serif font-light text-3xl lg:text-7xl leading-[1.08] tracking-[-0.02em] text-ivory mb-6 max-w-[18ch]">
              {data.heading}
            </h2>
            <p className="text-muted text-[15px] md:text-[16px] font-light leading-[1.7] max-w-[80%]">
              {data.body}
            </p>
          </div>

          {/* ── Right Column (Cards Grid) ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {data.symptoms.map((symptom, i) => (
              <SymptomCard key={i} symptom={symptom} index={i} delay={i * 0.1} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── Individual Symptom Card ───────────────────────────── */

function SymptomCard({
  symptom,
  delay,
}: {
  symptom: Symptom;
  index: number;
  delay: number;
}) {
  const [ref, inView] = useScrollReveal();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={[
        'group relative rounded-[18px] p-6 md:p-7 h-full flex flex-col',
        'border-2 border-coral bg-white',
        'transition-all duration-[450ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]',
        'hover:-translate-y-1 hover:border-coral/40 hover:bg-coral/5 hover:shadow-[0_16px_32px_-16px_rgba(0,0,0,0.5)]',
        'coral-underline'
      ].join(' ')}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(24px)',
        transitionDelay: `${delay}s`,
      }}
    >
      {/* Subtle Icon / Bullet */}
      <div className="w-8 h-8 rounded-full bg-coral/10 border border-coral/20 flex items-center justify-center mb-5 shrink-0 transition-colors duration-300 group-hover:bg-coral/20 group-hover:border-coral/40">
        <svg 
          width="14" 
          height="14" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          className="text-coral"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>

      <h3 className="font-serif font-normal text-[19px] md:text-[21px] text-coral leading-snug mb-2 md:mb-3">
        {symptom.title}
      </h3>
      <p className="text-bg group-hover:text-muted font-sans font-light text-[14px] md:text-[14.5px] leading-[1.65]">
        {symptom.body}
      </p>
    </div>
  );
}