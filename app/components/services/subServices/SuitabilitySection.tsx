'use client';

import React from 'react';
import Link from 'next/link';
import { useScrollReveal } from '@/app/lib/useScrollReveal';

// 1. Data Interfaces
interface SuitabilityList {
  title: string;
  items: string[];
}

export interface SuitabilityData {
  eyebrow?: string;
  heading: string;
  body: string;
  goodFit: SuitabilityList;
  alternative: SuitabilityList;
  cta?: {
    label: string;
    href: string;
  };
}

export default function SuitabilitySection({ data }: { data: SuitabilityData }) {
  const [headRef, headIn] = useScrollReveal();
  const [leftRef, leftIn] = useScrollReveal();
  const [rightRef, rightIn] = useScrollReveal();

  return (
    <section className="py-section  border-t border-line overflow-hidden">
      <div className="lg:px-site max-w-[90%] mx-auto">
        
        {/* ── Header Area ── */}
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={[
            'mb-14 md:mb-20 text-center',
            'transition-all duration-1000 ease-out',
            headIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ].join(' ')}
        >
          {data.eyebrow && (
            <span className="inline-block text-[11.5px] font-medium tracking-eyebrow uppercase text-accent mb-4">
              {data.eyebrow}
            </span>
          )}
          
            <h2 className="font-serif font-light text-3xl lg:text-7xl leading-[1.08] tracking-[-0.02em] text-ink">
              {data.heading}
            </h2>
            
            <div className="space-y-4 pt-2">
              {data.body.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-ink/80 text-[15px] md:text-[16px] font-light leading-[1.7] lg:max-w-[80%] mx-auto">
                  {paragraph}
                </p>
              ))}
          </div>
        </div>

        {/* ── Two-Column Decision Area ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Left Column: Good Fit */}
          <div
            ref={leftRef as React.RefObject<HTMLDivElement>}
            className={[
  'relative rounded-[22px] p-8 md:p-10',
  'bg-white border border-neutral-200 shadow-[0_10px_40px_rgba(0,0,0,0.09)]',
  'transition-all duration-1000 ease-[cubic-bezier(0.16,0.84,0.34,1)]',
  leftIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12',
].join(' ')}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-coral/20 border border-coral/30 flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-serif font-normal text-[22px] md:text-[26px] text-slate-900 leading-snug">
                {data.goodFit.title}
              </h3>
            </div>
            
            <ul className="space-y-4">
              {data.goodFit.items.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-accent mt-1.5 shrink-0">—</span>
                  <p className="text-accent text-lg font-light leading-[1.65]">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Alternative */}
          <div
            ref={rightRef as React.RefObject<HTMLDivElement>}
           className={[
  'relative rounded-[22px] p-8 md:p-10',
  'bg-white border border-neutral-200 shadow-[0_10px_40px_rgba(0,0,0,0.09)]',
  'transition-all duration-1000 ease-[cubic-bezier(0.16,0.84,0.34,1)]',
  rightIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12',
].join(' ')}
            style={{ transitionDelay: '0.15s' }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-bg-2 border border-line flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
              <h3 className="font-serif font-normal text-[22px] md:text-[26px] text-slate-900 leading-snug">
                {data.alternative.title}
              </h3>
            </div>
            
            <ul className="space-y-4">
              {data.alternative.items.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-body-2 mt-1.5 shrink-0">—</span>
                  <p className="text-ink/70 text-lg font-light leading-[1.65]">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── CTA Area ── */}
        {data.cta && (
          <div className="mt-14 md:mt-20 flex justify-center">
            <Link
              href={data.cta.href}
              className="group inline-flex items-center justify-center py-[16px] px-9 rounded-full font-sans font-semibold text-[13px] tracking-wide2 uppercase bg-coral text-ink border-none transition-all duration-300 hover:bg-ink hover:text-bg hover:-translate-y-0.5 shadow-btn"
            >
              {data.cta.label} →
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}