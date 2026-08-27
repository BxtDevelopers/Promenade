'use client';

import React from 'react';
import Link from 'next/link';
import { useScrollReveal } from '@/app/lib/useScrollReveal';

// 1. Data Interfaces
export interface WhiteningCardItem {
  title: string;
  body: string;
  bestFor: string;
  ctaLabel: string;
  ctaHref: string;
  highlight?: boolean;
}

export interface WhiteningOptionsData {
  eyebrow: string;
  heading: string;
  intro: string;
  cards: WhiteningCardItem[];
}

export default function WhiteningOptionsSection({ data }: { data: WhiteningOptionsData }) {
  const [headRef, headIn] = useScrollReveal();

  return (
    <section className="py-section bg-bg-2 border-t border-line relative overflow-hidden">
      <div className="px-site max-w-[90%] mx-auto relative z-10">
        
        {/* ── Centered Header ── */}
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={[
            'text-center max-w-4xl mx-auto mb-16 md:mb-20',
            'transition-all duration-1000 ease-out',
            headIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ].join(' ')}
        >
          <span className="inline-block text-[11.5px] font-medium tracking-eyebrow uppercase text-accent mb-4">
            {data.eyebrow}
          </span>
          <h2 className="font-serif font-light text-section leading-[1.08] tracking-[-0.02em] text-ink mb-6">
            {data.heading}
          </h2>
          <p className="text-body text-[15px] md:text-[16px] font-light leading-[1.7] max-w-3xl mx-auto">
            {data.intro}
          </p>
        </div>

        {/* ── 3-Column Treatment Cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {data.cards.map((card, i) => (
            <TreatmentCard key={i} card={card} delay={i * 0.15} />
          ))}
        </div>

      </div>
    </section>
  );
}

/* ── Individual Treatment Card ─────────────────────────── */

function TreatmentCard({
  card,
  delay,
}: {
  card: WhiteningCardItem;
  delay: number;
}) {
  const [ref, inView] = useScrollReveal();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={[
        'group relative rounded-[22px] p-7 md:p-9 flex flex-col',
        'border transition-all duration-[500ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]',
        'coral-underline',
        // If it's the highlighted ZOOM card, give it a default lift and glowing border
        card.highlight 
          ? 'bg-coral/5 border-coral/40 shadow-[0_0_40px_rgba(232,154,114,0.08)] lg:-translate-y-4' 
          : 'bg-panel/[0.4] border-line',
        // Unified hover states
        'hover:-translate-y-4 hover:border-coral/50 hover:bg-coral/10 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]'
      ].join(' ')}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? (card.highlight ? 'translateY(-16px)' : 'none') : 'translateY(32px)',
        transitionDelay: `${delay}s`,
      }}
    >
      
      {/* Optional Highlight Tag */}
      {card.highlight && (
        <span className="absolute -top-3 left-8 bg-coral text-ink text-[10px] uppercase font-bold tracking-[0.14em] px-3 py-1.5 rounded-full shadow-md">
          Advanced Option
        </span>
      )}

      {/* Header Area */}
      <h3 className="font-serif font-normal text-[22px] md:text-[24px] text-ink leading-[1.2] mb-4 transition-colors group-hover:text-white mt-2">
        {card.title}
      </h3>
      
      {/* Body Text */}
      <p className="text-body text-[14.5px] font-light leading-[1.7] flex-1 mb-8">
        {card.body}
      </p>

      {/* Best For Meta Section */}
      <div className="pt-6 border-t border-line/60 mb-6">
        <span className="text-accent font-medium uppercase tracking-[0.14em] text-[10px] block mb-2">
          Best for
        </span>
        <p className="text-cream/90 text-[13px] font-light leading-[1.6]">
          {card.bestFor}
        </p>
      </div>

      {/* Action Link */}
      <Link
        href={card.ctaHref}
        className={[
          'inline-flex items-center gap-2 mt-auto text-[13.5px] font-medium tracking-[0.02em] transition-colors duration-300',
          card.highlight ? 'text-accent' : 'text-ink group-hover:text-accent'
        ].join(' ')}
      >
        <span className="underline underline-offset-4 decoration-coral/40 group-hover:decoration-coral transition-colors">
          {card.ctaLabel}
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="transition-transform duration-[400ms] ease-out group-hover:translate-x-1"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 7h10M8 3l4 4-4 4" />
        </svg>
      </Link>

    </div>
  );
}