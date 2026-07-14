'use client';

import Link from 'next/link';
import { useScrollReveal } from '@/app/lib/useScrollReveal';
import { useBookingModal } from '../../common/BookingModalProvider';

interface ProcessData {
  eyebrow: string;
  heading: string;
  subtitle: string;
  steps: { title: string; body: string }[];
  cta?: { label: string; href: string };
}

export default function ServiceProcess({ data }: { data: ProcessData }) {
  const [headRef, headIn] = useScrollReveal();
  const { openBookingModal } = useBookingModal();

  return (
    <section className="py-section bg-bg-2  border-t border-line">
      <div className="lg:px-site max-w-[90%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 lg:gap-24 items-start">
          
          {/* ── Left Column: Sticky Header ── */}
          <div
            ref={headRef as React.RefObject<HTMLDivElement>}
            className={[
              'lg:sticky lg:top-32 transition-all duration-1000 ease-out',
              headIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
            ].join(' ')}
          >
            <span className="inline-block text-[11.5px] font-medium tracking-eyebrow uppercase text-coral mb-4">
              {data.eyebrow}
            </span>
            <h2 className="font-serif font-light text-3xl lg:text-7xl leading-[1.08] tracking-[-0.02em] text-white mb-6 max-w-[18ch]">
              {data.heading}
            </h2>
            <p className="text-white/80 text-[15px] md:text-[16px] font-light leading-[1.7] max-w-[80%] mb-10">
              {data.subtitle}
            </p>

            {/* Optional CTA pinned to the bottom of the sticky section */}
            {data.cta && (
              <button
                onClick={openBookingModal}
                className="group inline-flex items-center gap-3 text-[14px] text-coral font-light tracking-[0.02em] uppercase transition-all duration-300 hover:text-white"
              >
                <span className="underline underline-offset-4 decoration-coral/40 group-hover:decoration-white/60 transition-colors">
                  {data.cta.label}
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="transition-transform duration-[450ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:translate-x-1"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </button>
            )}
          </div>

          {/* ── Right Column: Vertical Timeline ── */}
          <div className="relative">
            {/* The continuous vertical line (Desktop only) */}
            <div className="absolute left-[26px] top-[52px] bottom-10 w-px bg-white/10 hidden md:block" />

            <div className="flex flex-col gap-6 md:gap-10">
              {data.steps.map((step, i) => (
                <ProcessStep key={i} step={step} index={i} delay={i * 0.15} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── Individual Timeline Step ──────────────────────────── */

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
  const stepNum = String(index + 1).padStart(2, '0');

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="relative flex flex-col md:flex-row gap-6 md:gap-10 group transition-all duration-1000 ease-out"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(32px)',
        transitionDelay: `${delay}s`,
      }}
    >
      {/* ── Timeline Node ── */}
      <div className="relative z-10 shrink-0 flex md:block items-center gap-4">
        <div 
          className={[
            'w-[52px] h-[52px] rounded-full flex items-center justify-center font-serif text-[17px] transition-all duration-[600ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]',
            'border bg-bg-2',
            inView 
              ? 'border-coral/50 text-coral shadow-[0_0_20px_rgba(232,154,114,0.15)]' 
              : 'border-line text-muted-2',
            'group-hover:bg-coral/20 group-hover:border-coral group-hover:scale-110'
          ].join(' ')}
        >
          {stepNum}
        </div>
        
        {/* Mobile-only connecting line (since the main one is hidden on md down) */}
        <div className="flex-1 h-px bg-line md:hidden" />
      </div>

      {/* ── Step Card Content ── */}
      <div 
        className={[
          'flex-1 rounded-[22px] p-7 md:p-9',
          'border border-coral bg-ivory',
          'transition-all duration-[450ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]',
          'hover:-translate-y-1 hover:border-coral/40 hover:bg-coral/5 hover:shadow-[0_16px_32px_-16px_rgba(0,0,0,0.5)]',
          'coral-underline'
        ].join(' ')}
      >
        <h3 className="font-serif font-normal text-[20px] md:text-[22px] text-white/90 mb-3 transition-colors group-hover:text-coral">
          {step.title}
        </h3>
        <p className="text-muted text-[14.5px] md:text-[15px] font-light leading-[1.7]">
          {step.body}
        </p>
      </div>
    </div>
  );
}