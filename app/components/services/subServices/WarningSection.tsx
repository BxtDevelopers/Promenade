'use client';

import React from 'react';
import { useScrollReveal } from '@/app/lib/useScrollReveal';
import { Phone } from 'lucide-react';
import { IoWarningOutline } from 'react-icons/io5';

// 1. Data Interfaces
export interface WarningCTA {
  subtext: string;
  phoneNumber: string;
  phoneLink: string;
  buttonText: string;
}

export interface WarningData {
  eyebrow: string;
  heading: React.ReactNode | string; // Allows gradient injections
  body: string;
  cta: WarningCTA;
  gridHeading: string;
  warnings: string[];
}

// 2. The Dynamic Component
export default function WarningSection({ data }: { data: WarningData }) {
  const [leftRef, leftIn] = useScrollReveal();
  const [rightRef, rightIn] = useScrollReveal();

  return (
    <section className="relative py-section bg-bg-2 overflow-hidden isolate border-y border-line">
      {/* Ambient Emergency Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-coral/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="lg:px-site max-w-[90%] mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Context & Emergency CTA (Spans 5 cols) */}
          <div 
            ref={leftRef as React.RefObject<HTMLDivElement>}
            className={[
              "xl:col-span-5 xl:sticky xl:top-32 flex flex-col transition-all duration-1000 ease-out",
              leftIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12',
            ].join(' ')}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coral opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-coral"></span>
              </span>
              <span className="inline-block text-[12px] font-bold tracking-[0.2em] uppercase text-coral font-sans">
                {data.eyebrow}
              </span>
            </div>

            <h2 className="font-serif font-light text-4xl lg:text-[clamp(40px,4.5vw,56px)] leading-[1.1] tracking-[-0.02em] text-white mb-6">
              {data.heading}
            </h2>

            <p className="text-muted text-body-lg font-light leading-[1.75] mb-10 lg:max-w-[80%]">
              {data.body}
            </p>

            {/* Premium Phone CTA Block */}
            <div className="group relative p-8 rounded-[24px] bg-gradient-to-br from-coral/10 via-ivory to-ivory border border-coral/30 overflow-hidden hover:border-coral transition-colors duration-500 shadow-[0_0_40px_rgba(250,114,104,0.08)]">
              <div className="absolute -right-12 -top-12 w-40 h-40 bg-coral/20 blur-[40px] rounded-full group-hover:bg-coral/30 transition-colors duration-500" />
              
              <div className="relative z-10">
                <p className="text-white/80 text-[13px] font-bold tracking-[0.1em] uppercase mb-2">
                  {data.cta.subtext}
                </p>
                <a 
                  href={data.cta.phoneLink} 
                  className="block font-serif text-4xl lg:text-5xl text-white group-hover:text-coral transition-colors duration-300 mb-6"
                >
                  {data.cta.phoneNumber}
                </a>
                
                <a 
                  href={data.cta.phoneLink} 
                  className="inline-flex items-center justify-center w-full px-8 py-4 bg-coral text-white text-[16px] font-medium rounded-full hover:bg-coral-deep hover:scale-[1.02] transition-all duration-300 shadow-lg"
                >
                  <Phone className='w-4 h-4 mr-2'/>
                  {data.cta.buttonText}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Warning Signs Grid (Spans 7 cols) */}
          <div 
            ref={rightRef as React.RefObject<HTMLDivElement>}
            className={[
              "xl:col-span-7 flex flex-col transition-all duration-1000 delay-200 ease-out",
              rightIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12',
            ].join(' ')}
          >
            <div className="p-8 lg:p-10 rounded-[32px] bg-white/[0.02] border border-white/5 backdrop-blur-md shadow-2xl">
              <h3 className="text-xl text-white font-serif mb-8 border-b border-line pb-6">
                {data.gridHeading}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                {data.warnings.map((sign, index) => (
                  <div 
                    key={index}
                    className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white/[0.04] transition-colors duration-300 border border-transparent hover:border-white/10"
                  >
                    {/* Warning Icon */}
                    <div className="w-10 h-10 rounded-full bg-coral/10 border border-coral/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-coral group-hover:border-coral transition-all duration-300">
                      <IoWarningOutline className='w-5 h-5 text-coral group-hover:text-white' />
                    </div>
                    {/* Text */}
                    <p className="text-white text-[15px] leading-[1.6] group-hover:text-white/90 transition-colors duration-300 my-auto">
                      {sign}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}