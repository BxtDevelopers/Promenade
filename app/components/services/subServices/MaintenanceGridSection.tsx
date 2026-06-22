'use client';

import React from 'react';
import { useScrollReveal } from '@/app/lib/useScrollReveal';
import {
  Coffee,
  ShieldCheck,
  Sparkles,
  RefreshCw,
} from 'lucide-react';

// 1. Data Interfaces
interface MaintenanceCardItem {
  title: string;
  body: string;
}

export interface MaintenanceGridData {
  eyebrow?: string;
  heading: string;
  body: string;
  cards: MaintenanceCardItem[];
}

export default function MaintenanceGridSection({ data }: { data: MaintenanceGridData }) {
  const [headRef, headIn] = useScrollReveal();

  return (
    <section className="py-section bg-bg-2 border-t border-line relative overflow-hidden">
      <div className="lg:px-site max-w-[90%] mx-auto relative z-10">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:pt-8">
            {data.cards.map((card, i) => (
              <MaintenanceCard key={i} card={card} index={i} delay={i * 0.15} />
            ))}
          </div>
          {/* ── Left Column: Sticky Editorial Copy ── */}
          <div
            ref={headRef as React.RefObject<HTMLDivElement>}
            className={[
              'lg:sticky lg:top-32 transition-all duration-1000 ease-out',
              headIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
            ].join(' ')}
          >
            {data.eyebrow && (
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="text-[11.5px] font-medium tracking-eyebrow uppercase text-coral">
                  {data.eyebrow}
                </span>
              </div>
            )}
            
            <h2 className="font-serif font-light text-3xl lg:text-7xl md:text-[clamp(40px,4vw,56px)] leading-[1.08] tracking-[-0.02em] text-ivory mb-6 ]">
              {data.heading}
            </h2>
            
            <div className="space-y-4 pt-2">
              {data.body.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-muted text-[15px] md:text-[16px] font-light leading-[1.7] lg:max-w-[80%] ">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* ── Right Column: 2x2 Maintenance Grid ── */}
          

        </div>
      </div>
    </section>
  );
}

/* ── Individual Maintenance Card ───────────────────────── */

function MaintenanceCard({
  card,
  index,
  delay,
}: {
  card: MaintenanceCardItem;
  index: number;
  delay: number;
}) {
  const [ref, inView] = useScrollReveal();

  const num = String(index + 1).padStart(2, '0');


  const icons = [
    Coffee,
    ShieldCheck,
    Sparkles,
    RefreshCw,
  ];

  const Icon = icons[index] || Sparkles;

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={[
        'group relative flex flex-col',
        'rounded-[24px]',
        'p-8 md:p-9',
        'min-h-[300px]',
        'bg-[#FCFBF8]',
        'border border-[#E7E2D9]',
        'overflow-hidden',
        'transition-all duration-500',
        'ease-[cubic-bezier(0.2,0.8,0.2,1)]',
        'hover:-translate-y-2',
        'hover:border-coral/30',
        'hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)]',
      ].join(' ')}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? 'none'
          : 'translateY(32px)',
        transitionDelay: `${delay}s`,
      }}
    >
      {/* Top Accent */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-coral scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />

      {/* Number */}
      <div className="flex items-center justify-between mb-8">
        <span className="font-serif text-[18px] text-coral font-medium">
          {num}
        </span>

        <div className="w-12 h-12 rounded-full bg-coral/10 border border-coral/20 flex items-center justify-center">
          <Icon
            size={22}
            className="text-coral"
            strokeWidth={1.75}
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-end">
        <h3 className="font-serif font-normal text-[22px] text-slate-900 leading-snug mb-4">
          {card.title}
        </h3>

        <p className="text-slate-600 text-[15px] leading-[1.75]">
          {card.body}
        </p>
      </div>
    </div>
  );
}