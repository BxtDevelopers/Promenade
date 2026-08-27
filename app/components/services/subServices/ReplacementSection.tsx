'use client';

import React from 'react';
import { useScrollReveal } from '@/app/lib/useScrollReveal';

// 1. Data Interfaces
export interface GridCardItem {
  title: string;
  body: string;
}

export interface ReplacementGridData {
  eyebrow: string;
  heading: React.ReactNode | string;
  body: string;
  cards: GridCardItem[];
  cta: {
    label: string;
    href: string;
  };
}

// 2. The Component
export default function ReplacementSection({ data }: { data: ReplacementGridData }) {
  const [headRef, headIn] = useScrollReveal();
  const [gridRef, gridIn] = useScrollReveal();

  // Premium, abstract icons for the 3 cards (dynamically assigned by index)
  const icons = [
    // Implant (Node/Anchor)
    <path key="1" strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />,
    // Bridge (Connection)
    <path key="2" strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />,
    // Denture (Grid/Appliance)
    <path key="3" strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />,
  ];

  return (
    <section className="py-section relative overflow-hidden bg-bg-2 isolate border-t border-line">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-coral/5 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="lg:px-site max-w-[90%] mx-auto">
        
        {/* Intro / Header */}
        <div 
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={[
            "max-w-5xl mx-auto text-center mb-16 transition-all duration-1000 ease-out",
            headIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          ].join(' ')}
        >
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-6 bg-coral block" aria-hidden="true" />
            <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-accent">
              {data.eyebrow}
            </span>
            <span className="h-[1px] w-6 bg-coral block" aria-hidden="true" />
          </div>

          <h2 className="font-serif font-light text-3xl lg:text-6xl leading-[1.15] tracking-[-0.02em] text-white mb-6">
            {data.heading}
          </h2>

          <p className="text-body text-lg font-light leading-[1.75]">
            {data.body}
          </p>
        </div>

        {/* 3-Column Grid */}
        <div 
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className={[
            "grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 transition-all duration-1000 delay-200 ease-out",
            gridIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          ].join(' ')}
        >
          {data.cards.map((card, index) => (
            <div 
              key={index}
              className="group relative p-8 lg:p-10 rounded-[32px] bg-white/[0.02] border border-white/30 backdrop-blur-md hover:bg-white/[0.04] hover:border-coral/40 transition-all duration-500 shadow-xl overflow-hidden flex flex-col h-full"
            >
              {/* Card Hover Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-coral/5 blur-[40px] rounded-full group-hover:bg-coral/20 transition-colors duration-700" />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon Circle */}
                <div className="w-14 h-14 rounded-2xl bg-panel border border-white/10 flex items-center justify-center mb-6 group-hover:border-coral/50 group-hover:bg-coral/5 group-hover:scale-110 transition-all duration-500 shadow-inner">
                  <svg className="w-6 h-6 text-accent/80 group-hover:text-accent transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    {icons[index % icons.length]}
                  </svg>
                </div>
                
                <h3 className="font-serif text-2xl text-white mb-4 group-hover:text-white transition-colors duration-300">
                  {card.title}
                </h3>
                
                <p className="text-body text-[15px] font-light leading-[1.7] flex-grow">
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call To Action */}
        <div className="mt-16 text-center">
          <a 
            href={data.cta.href}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-coral/50 bg-coral/5  font-medium text-[15px] hover:bg-coral text-ink hover:border-coral transition-all duration-300 shadow-[0_0_20px_rgba(232,154,114,0.0)] hover:shadow-[0_0_25px_rgba(232,154,114,0.3)]"
          >
            {data.cta.label}
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}