'use client';

import React from 'react';
import { useScrollReveal } from '@/app/lib/useScrollReveal';

// 1. Data Interfaces
interface Feature {
  title: string;
  body: string;
}

interface ServiceFeature {
  eyebrow: string;
  heading: string;
  body: string;
  features: Feature[];
}

export default function ServiceFeatures({ data }: { data: ServiceFeature }) {
  const [headRef, headIn] = useScrollReveal();

  return (
    <section className="py-section bg-bg border-t border-line overflow-hidden relative">
      
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-coral/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="lg:px-site max-w-[90%] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-start">
          
          {/* ── Left: Sticky Editorial Copy ── */}
          <div
            ref={headRef as React.RefObject<HTMLDivElement>}
            className={[
              'lg:sticky lg:top-32 transition-all duration-1000 ease-out',
              headIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
            ].join(' ')}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="text-[11.5px] font-medium tracking-eyebrow uppercase text-coral">
                {data.eyebrow}
              </span>
            </div>
            
            <h2 className="font-serif font-light text-3xl lg:text-7xl leading-[1.08] tracking-[-0.02em] text-ivory mb-6 max-w-[16ch]">
              {data.heading}
            </h2>
            
            <p className="text-muted text-[15.5px] md:text-[16.5px] font-light leading-[1.8] lg:max-w-[80%]">
              {data.body}
            </p>
          </div>

          {/* ── Right: Horizontal Feature Strips ── */}
          <div className="flex flex-col gap-4 md:gap-6 mt-4 lg:mt-0">
            {data.features.map((feature, i) => (
              <FeatureStrip key={i} feature={feature} index={i} delay={i * 0.15} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── Individual Horizontal Feature Strip ───────────────── */

function FeatureStrip({
  feature,
  index,
  delay,
}: {
  feature: Feature;
  index: number;
  delay: number;
}) {
  const [ref, inView] = useScrollReveal();
  const num = String(index + 1).padStart(2, '0');

  // Simple SVG icons assigned based on index to add visual flair
  const icons = [
    <path key="1" strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-2.25l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />, // Sun/Brightness
    <path key="2" strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />, // Shield/Protection
    <path key="3" strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /> // User/Dentist
  ];

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={[
        'group relative flex flex-col sm:flex-row items-start sm:items-center gap-6 rounded-[22px] p-6 md:p-8',
        'border border-line bg-panel/[0.4]',
        'transition-all duration-[500ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]',
        'hover:-translate-x-2 hover:border-coral/50 hover:bg-coral/5 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.4)]',
        'coral-underline'
      ].join(' ')}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(24px)',
        transitionDelay: `${delay}s`,
      }}
    >
      {/* Left Icon/Number Area */}
      <div className="flex items-center gap-5 shrink-0">
        <span className="font-serif text-[20px] text-muted-2 group-hover:text-coral transition-colors duration-300">
          {num}
        </span>
        <div className="w-12 h-12 rounded-full bg-bg-2 border border-line flex items-center justify-center transition-colors duration-300 group-hover:border-coral/40 group-hover:bg-coral/10">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ivory group-hover:text-coral transition-colors duration-300">
            {icons[index % icons.length]}
          </svg>
        </div>
      </div>

      {/* Content Area */}
      <div>
        <h3 className="font-serif font-normal text-[20px] text-ivory mb-2 leading-snug">
          {feature.title}
        </h3>
        <p className="text-muted text-[14.5px] font-light leading-[1.65]">
          {feature.body}
        </p>
      </div>
    </div>
  );
}