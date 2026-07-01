'use client';

import React from 'react';
import { useScrollReveal } from '@/app/lib/useScrollReveal';
import { CiWarning } from 'react-icons/ci';

export interface ImmediateGuidanceData {
  eyebrow: string;
  heading: React.ReactNode | string;
  bodyMain: string;
  handlingInstructions: string;
  cta: {
    label: string;
    phoneDisplay: string;
    phoneLink: string;
  };
  medicalWarning: string;
}

export default function ImmediateGuidanceAlert({ data }: { data: ImmediateGuidanceData }) {
  const [ref, inView] = useScrollReveal();

  return (
    <section className="py-12 lg:py-16 bg-bg overflow-hidden isolate relative">
      <div className="lg:px-site max-w-[90%] mx-auto">
        
        <div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className={[
            "relative w-full rounded-[32px] overflow-hidden border border-coral/30 shadow-[0_0_50px_rgba(232,154,114,0.08)] transition-all duration-1000 ease-out",
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          ].join(' ')}
        >
          {/* Intense Ambient Glows specific to this alert box */}
          <div className="absolute inset-0 bg-gradient-to-br from-panel via-bg to-bg -z-20" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-coral/15 blur-[120px] rounded-full pointer-events-none -z-10" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

          <div className="p-8 lg:p-14">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-10 border-b border-coral/20 pb-10">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-5">
                  <span className="relative flex h-3.5 w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coral opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-coral"></span>
                  </span>
                  <span className="text-[13px] font-bold tracking-[0.2em] uppercase text-coral">
                    {data.eyebrow}
                  </span>
                </div>
                
                <h2 className="font-serif font-light text-3xl lg:text-5xl leading-[1.15] tracking-[-0.02em] text-ivory">
                  {data.heading}
                </h2>
              </div>

              {/* Massive CTA Button */}
              <div className="shrink-0">
                <a 
                  href={data.cta.phoneLink}
                  className="group relative inline-flex flex-col items-center justify-center px-8 py-5 rounded-2xl bg-coral hover:bg-amber-500 text-white transition-all duration-300 shadow-[0_0_30px_rgba(232,154,114,0.3)] hover:scale-105 hover:shadow-[0_0_40px_rgba(245,158,11,0.4)]"
                >
                  <span className="text-[12px] font-bold uppercase tracking-widest opacity-90 mb-1">
                    {data.cta.label}
                  </span>
                  <span className="font-serif text-3xl">
                    {data.cta.phoneDisplay}
                  </span>
                </a>
              </div>
            </div>

            {/* Content Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              {/* Left: General Info & Handling */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <p className="text-ivory text-[17px] md:text-[18px] font-light leading-[1.7]">
                  {data.bodyMain}
                </p>
                
                {/* Highlighted Handling Instructions Box */}
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm mt-2">
                  <div className="w-10 h-10 rounded-full bg-coral/10 border border-coral/20 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-ivory font-serif text-lg mb-1">If you have the tooth:</h4>
                    <p className="text-muted text-[15px] font-light leading-[1.6]">
                      {data.handlingInstructions}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Medical Warning */}
              <div className="lg:col-span-5">
                <div className="h-full p-8 rounded-2xl bg-red-950/20 border border-red-500/20 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <CiWarning className='w-6 h-6 text-red-400' />
                    <h4 className="text-white font-bold tracking-widest text-[11px] uppercase">
                      Important Medical Note
                    </h4>
                  </div>
                  <p className="text-white text-[15px] font-light leading-[1.7]">
                    {data.medicalWarning}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}