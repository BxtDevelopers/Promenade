'use client';

import React from 'react';
import { useScrollReveal } from '@/app/lib/useScrollReveal';

// 1. Data Interfaces
export interface ComparisonColumn {
  title: string;
  body: string;
}

export interface ComparisonData {
  eyebrow: string;
  heading: React.ReactNode | string;
  bodyParagraphs: string[];
  adultTooth: ComparisonColumn;
  babyTooth: ComparisonColumn;
  cta: {
    label: string;
    href: string;
  };
}

// 2. Component
export default function ComparisonSection({ data }: { data: ComparisonData }) {
  const [headRef, headIn] = useScrollReveal();
  const [gridRef, gridIn] = useScrollReveal();

  return (
    <section className="py-section relative overflow-hidden border-t border-line isolate">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-coral/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="lg:px-site max-w-[90%] mx-auto">
        
        {/* Header Section */}
        <div 
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={[
            "max-w-5xl mx-auto text-center mb-16 transition-all duration-1000 ease-out",
            headIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          ].join(' ')}
        >
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-6 bg-coral block" aria-hidden="true" />
            <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-coral">
              {data.eyebrow}
            </span>
            <span className="h-[1px] w-6 bg-coral block" aria-hidden="true" />
          </div>

          <h2 className="font-serif font-light text-3xl lg:text-6xl leading-[1.15] tracking-[-0.02em] text-ivory mb-8">
            {data.heading}
          </h2>

          <div className="flex flex-col gap-4">
            {data.bodyParagraphs.map((para, i) => (
              <p key={i} className="text-muted text-lg font-light leading-[1.75]">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Side-by-Side Comparison Grid */}
        <div 
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className={[
            "grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto transition-all duration-1000 delay-200 ease-out",
            gridIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          ].join(' ')}
        >
          {/* Adult Tooth Card */}
          <div className="group relative p-8 lg:p-10 rounded-[32px] bg-white/[0.02] border border-white/5 backdrop-blur-md hover:bg-white/[0.04] hover:border-coral/30 transition-all duration-500 shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-coral/5 blur-[40px] rounded-full group-hover:bg-coral/10 transition-colors duration-500" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-panel border border-white/10 flex items-center justify-center mb-6 group-hover:border-coral/40 group-hover:scale-110 transition-all duration-500 shadow-inner">
                {/* Standard Tooth Icon */}
                <svg className="w-7 h-7 text-coral group-hover:text-coral transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4h.002m0 0v-.001" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-ivory mb-4 group-hover:text-coral transition-colors">
                {data.adultTooth.title}
              </h3>
              <p className="text-muted text-[15px] font-light leading-[1.7]">
                {data.adultTooth.body}
              </p>
            </div>
          </div>

          {/* Baby Tooth Card */}
          <div className="group relative p-8 lg:p-10 rounded-[32px] bg-white/[0.02] border border-white/5 backdrop-blur-md hover:bg-white/[0.04] hover:border-coral-deep/30 transition-all duration-500 shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 blur-[40px] rounded-full group-hover:bg-amber-400/10 transition-colors duration-500" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-panel border border-white/10 flex items-center justify-center mb-6 group-hover:border-coral-deep/40 group-hover:scale-110 transition-all duration-500 shadow-inner">
                {/* Shield/Protection Icon for Baby Tooth */}
                <svg className="w-7 h-7 text-coral group-hover:text-coral-deep transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-ivory mb-4 group-hover:text-coral transition-colors">
                {data.babyTooth.title}
              </h3>
              <p className="text-muted text-[15px] font-light leading-[1.7]">
                {data.babyTooth.body}
              </p>
            </div>
          </div>
        </div>

        {/* Call To Action Container */}
        <div className="mt-14 text-center">
          <a 
            href={data.cta.href}
            className="inline-flex items-center gap-2 px-8 py-4 bg-coral hover:bg-amber-500 text-white font-medium text-[15px] rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(232,154,114,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {data.cta.label}
          </a>
        </div>

      </div>
    </section>
  );
}