'use client';

import Link from 'next/link';
import { useScrollReveal } from '@/app/lib/useScrollReveal';

interface ProcessData {
  eyebrow: string;
  heading: string;
  subtitle: string;
  steps: { title: string; body: string }[];
  cta?: { label: string; href: string };
}

export default function ServiceProcess({ data }: { data: ProcessData }) {
  const [headRef, headIn] = useScrollReveal();

  return (
    <section className="py-section bg-bg-2">
      <div className="px-site max-w-[90%] mx-auto">
        
        {/* Header */}
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={[
            'flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16 mb-16 md:mb-20',
            'transition-all duration-1000 ease-out',
            headIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ].join(' ')}
        >
          <div className="flex-1">
            <span className="inline-block text-[11.5px] font-medium tracking-eyebrow uppercase text-accent mb-4">
              {data.eyebrow}
            </span>
            <h2 className="font-serif font-light text-section leading-[1.08] tracking-[-0.02em] text-ink max-w-[20ch]">
              {data.heading}
            </h2>
          </div>
          <div className="flex-1 lg:max-w-[500px]">
            <p className="text-body text-[15px] md:text-[16px] font-light leading-[1.7]">
              {data.subtitle}
            </p>
          </div>
        </div>

        {/* Process Steps Grid */}
        <div className="relative">
          {/* Horizontal connecting line on large screens */}
          <div className="absolute left-0 right-0 top-[26px] h-px bg-line hidden lg:block" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {data.steps.map((s, i) => (
              <ProcessStep key={i} step={s} index={i} delay={i * 0.15} />
            ))}
          </div>
        </div>

        {/* Optional CTA */}
        {data.cta && (
          <div className="mt-16 md:mt-24 flex justify-center lg:justify-start">
            <Link 
              href={data.cta.href}
              className="group inline-flex items-center gap-3 text-[14px] text-accent font-light tracking-[0.02em] uppercase
                transition-all duration-300 hover:text-ink"
            >
              <span className="underline underline-offset-4 decoration-coral/40 group-hover:decoration-ink/60 transition-colors">
                {data.cta.label}
              </span>
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}

/* ── Individual Step Component ─────────────────────────── */

function ProcessStep({
  step,
  index,
  delay,
}: {
  step: { title: string; body: string };
  index: number;
  delay: number;
}) {
  const [ref, inView] = useScrollReveal();
  
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="group relative transition-all duration-1000 ease-out"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(28px)',
        transitionDelay: `${delay}s`,
      }}
    >
      {/* Number Node */}
      <div className="relative z-10 w-[52px] h-[52px] rounded-full bg-bg-2 border border-coral/40 flex items-center justify-center font-serif text-accent text-[17px] mb-6 transition-colors duration-500 group-hover:bg-coral/10">
        {String(index + 1).padStart(2, '0')}
      </div>
      
      {/* Content */}
      <h3 className="font-serif font-normal text-[20px] md:text-[22px] text-ink mb-3">
        {step.title}
      </h3>
      <p className="text-body text-[14.5px] md:text-[15px] font-light leading-[1.7]">
        {step.body}
      </p>
    </div>
  );
}