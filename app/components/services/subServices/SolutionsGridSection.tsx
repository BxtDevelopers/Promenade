'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useScrollReveal } from '@/app/lib/useScrollReveal';

// 1. Data Interfaces
interface SolutionCardItem {
  title: string;
  subtitle: string;
  body: string;
  image: string;
}

interface SolutionsGridData {
  eyebrow: string;
  heading: string;
  body: string;
  cards: SolutionCardItem[];
  cta?: {
    label: string;
    href: string;
  };
}

export default function SolutionsGridSection({ data }: { data: SolutionsGridData }) {
  const [headRef, headIn] = useScrollReveal();

  return (
    <section className="py-section bg-bg border-t border-line overflow-hidden">
      <div className="lg:px-site max-w-[90%] mx-auto">
        
        {/* ── Split Header ── */}
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={[
            'flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16 mb-14 md:mb-20',
            'transition-all duration-1000 ease-out',
            headIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ].join(' ')}
        >
          <div className="flex-1">
            <span className="inline-block text-[11.5px] font-medium tracking-eyebrow uppercase text-coral mb-4">
              {data.eyebrow}
            </span>
            <h2 className="font-serif font-light text-3xl lg:text-7xl leading-[1.08] tracking-[-0.02em] text-ivory max-w-[20ch]">
              {data.heading}
            </h2>
          </div>
          <div className="flex-1 lg:max-w-[500px]">
            <p className="text-ivory/80 text-[15px] md:text-[16px] font-light leading-[1.7]">
              {data.body}
            </p>
          </div>
        </div>

        {/* ── Image Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {data.cards.map((card, i) => (
            <SolutionCard key={i} card={card} delay={i * 0.15} />
          ))}
        </div>

        {/* ── Optional CTA ── */}
        {data.cta && (
          <div className="mt-14 md:mt-20 flex justify-center">
            <Link
              href={data.cta.href}
              className="group inline-flex items-center gap-3 text-[13px] text-ivory font-medium tracking-[0.04em] uppercase rounded-full border border-ivory/20 px-8 py-[15px] hover:border-coral hover:bg-coral/5 transition-all duration-300"
            >
              {data.cta.label}
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-coral transition-transform duration-[400ms] ease-out group-hover:translate-x-1"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M2 7h10M8 3l4 4-4 4" />
              </svg>
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}

/* ── Individual Image Card ─────────────────────────────── */

function SolutionCard({
  card,
  delay,
}: {
  card: SolutionCardItem;
  delay: number;
}) {
  const [ref, inView] = useScrollReveal();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={[
        'group relative rounded-[22px] overflow-hidden flex flex-col justify-end w-full aspect-[4/5] sm:aspect-auto sm:h-[480px] lg:h-[540px]',
        'border border-line bg-panel/[0.4]',
        'transition-all duration-[600ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]',
        'hover:-translate-y-2 hover:border-coral/50 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)]',
        'coral-underline'
      ].join(' ')}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(32px)',
        transitionDelay: `${delay}s`,
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover object-center filter brightness-90 transition-transform duration-[1200ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-105 group-hover:brightness-100"
        />
        {/* Gradient overlay so text is always readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-ivory via-ivory/80 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-80" />
      </div>

      {/* Card Content */}
      <div className="relative z-10 p-7 lg:p-9 transition-transform duration-[450ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:translate-y-[-4px]">
        <span className="block text-coral font-sans text-[10.5px] tracking-eyebrow uppercase font-medium mb-3">
          {card.subtitle}
        </span>
        <h3 className="font-serif font-normal text-[22px] md:text-[26px] text-white leading-[1.1] mb-4">
          {card.title}
        </h3>
        <p className="text-ivory-2/80 font-sans font-light text-[14.5px] leading-[1.7]">
          {card.body}
        </p>
      </div>
    </div>
  );
}