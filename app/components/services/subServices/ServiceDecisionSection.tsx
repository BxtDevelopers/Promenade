'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '@/app/lib/useScrollReveal';

// 1. Data Interfaces
interface TreatmentMatch {
  title: string;
  body: string;
}

interface ServiceDecisionData {
  eyebrow?: string; // Optional, e.g., "Cosmetic Care"
  heading: string;
  body: string;
  matches: TreatmentMatch[];
}

export default function ServiceDecisionSection({ data }: { data: ServiceDecisionData }) {
  const [headRef, headIn] = useScrollReveal();
  const [activeIdx, setActiveIdx] = useState(0);
  // Mobile accordion: which item is expanded (-1 = none, or index)
  const [mobileOpenIdx, setMobileOpenIdx] = useState<number>(0);

  return (
    <section className="py-section bg-bg-2 border-t border-line overflow-hidden">
      <div className="lg:px-site max-w-[90%] mx-auto">

        {/* ── Header ── */}
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={[
            'mb-16 md:mb-24 max-w-7xl',
            'transition-all duration-1000 ease-out',
            headIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ].join(' ')}
        >
          {data.eyebrow && (
            <span className="inline-block text-[11.5px] font-medium tracking-eyebrow uppercase text-coral mb-4">
              {data.eyebrow}
            </span>
          )}
          <h2 className="font-serif font-light text-3xl lg:text-7xl leading-[1.08] tracking-[-0.02em] text-ivory mb-6">
            {data.heading}
          </h2>
          <p className="text-muted text-[15px] md:text-[16px] font-light leading-[1.7] max-w-[80%]">
            {data.body}
          </p>
        </div>

        {/* ── Mobile: Accordion ── */}
        <div className="lg:hidden flex flex-col divide-y divide-line border-t border-b border-line">
          {data.matches.map((match, i) => {
            const isOpen = mobileOpenIdx === i;
            const num = String(i + 1).padStart(2, '0');

            return (
              <div key={i}>
                {/* Accordion trigger */}
                <button
                  onClick={() => setMobileOpenIdx(isOpen ? -1 : i)}
                  className="w-full text-left flex items-center justify-between gap-4 py-5 px-1 group"
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-serif text-sm transition-colors duration-300 ${isOpen ? 'text-coral' : 'text-muted-2'}`}>
                      {num}
                    </span>
                    <h3 className={`font-serif font-normal text-[18px] leading-snug transition-colors duration-300 ${isOpen ? 'text-ivory' : 'text-muted'}`}>
                      {match.title}
                    </h3>
                  </div>
                  {/* Chevron */}
                  <span
                    className={`shrink-0 text-muted transition-transform duration-300 ${isOpen ? 'rotate-180 text-coral' : ''}`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </button>

                {/* Accordion panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.16, 0.84, 0.34, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 px-1 pl-9">
                        {/* Icon */}
                        <div className="w-9 h-9 rounded-full bg-coral/10 border border-coral/20 flex items-center justify-center mb-4">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-coral">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                          </svg>
                        </div>
                        <p className="text-muted text-[15px] font-light leading-[1.8]">
                          {match.body}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* ── Desktop: Original Split Layout ── */}
        <div className="hidden lg:grid grid-cols-[1fr_1.3fr] gap-20 items-start">

          {/* LEFT: Tabs */}
          <div className="relative flex flex-col gap-0 border-l border-line/50 pl-8">
            {data.matches.map((match, i) => {
              const isActive = activeIdx === i;
              const num = String(i + 1).padStart(2, '0');

              return (
                <button
                  key={i}
                  onMouseEnter={() => setActiveIdx(i)}
                  onClick={() => setActiveIdx(i)}
                  className={[
                    'relative text-left py-6 w-full',
                    'transition-all duration-300 group',
                    isActive ? 'text-ivory' : 'text-muted hover:text-ivory/70',
                  ].join(' ')}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute w-[2px] h-full -left-[33px] top-0 bg-coral"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <div className="flex flex-col gap-2 pr-8">
                    <span className={`font-serif text-lg transition-colors duration-300 ${isActive ? 'text-coral' : 'text-muted-2 group-hover:text-coral/50'}`}>
                      {num}
                    </span>
                    <h3 className="font-serif font-normal text-[20px] md:text-[22px] leading-snug">
                      {match.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT: Active Panel */}
          <div className="relative w-full rounded-[32px] bg-bg border border-line overflow-hidden min-h-[420px] flex items-center">
            <div className="absolute inset-0 z-0 opacity-40">
              <div className="absolute -top-[20%] -right-[10%] w-[300px] h-[300px] bg-coral/10 blur-[100px] rounded-full animate-breathe" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -15, filter: 'blur(4px)' }}
                transition={{ duration: 0.4, ease: [0.16, 0.84, 0.34, 1] }}
                className="relative z-10 p-14 lg:p-16 flex flex-col justify-center h-full w-full"
              >
                <div className="absolute top-8 right-8 font-serif font-light text-[180px] leading-none text-ivory/30 select-none pointer-events-none">
                  0{activeIdx + 1}
                </div>

                <div className="relative z-10 max-w-[45ch]">
                  <div className="w-12 h-12 rounded-full bg-coral/10 border border-coral/20 flex items-center justify-center mb-8">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-coral">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                    </svg>
                  </div>

                  <h4 className="font-serif font-normal text-[24px] md:text-[28px] text-ivory mb-5 leading-snug">
                    {data.matches[activeIdx].title}
                  </h4>
                  <p className="text-muted text-[15.5px] md:text-[16.5px] font-light leading-[1.8]">
                    {data.matches[activeIdx].body}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}