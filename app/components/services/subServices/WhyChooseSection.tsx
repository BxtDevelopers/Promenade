'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '@/app/lib/useScrollReveal';

// 1. Data Interface
interface BenefitItem {
  title: string;
  body: string;
  paths: string[];
}

interface WhyChooseData {
  eyebrow: string;
  heading: string;
  description: string;
  items: BenefitItem[];
}

export default function WhyChooseSection({ data }: { data: WhyChooseData }) {
  const [headRef, headIn] = useScrollReveal();

  return (
    <section className="py-section bg-bg-2  border-t border-line relative">
      {/* Subtle background glow to contrast with previous section */}
      <div className="absolute top-0 inset-x-0 flex justify-center pointer-events-none opacity-50">
        <div className="w-[800px] h-[300px] bg-[radial-gradient(ellipse_at_top,rgba(232,154,114,0.08),transparent_70%)]" />
      </div>

      <div className="lg:px-site max-w-[90%] mx-auto relative z-10">
        
        {/* ── Centered Header ── */}
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={[
            'text-center max-w-6xl mx-auto mb-16 md:mb-24',
            'transition-all duration-1000 ease-out',
            headIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ].join(' ')}
        >
          <span className="inline-block text-[11.5px] font-medium tracking-eyebrow uppercase text-coral mb-4">
            {data.eyebrow}
          </span>
          <h2 className="font-serif font-light text-3xl lg:text-7xl leading-[1.08] tracking-[-0.02em] text-white mb-6">
            {data.heading}
          </h2>
          <p className="text-muted text-[15px] md:text-[16px] font-light leading-[1.7] max-w-2xl mx-auto">
            {data.description}
          </p>
        </div>

        {/* ── 2x2 Grid (or 1x4 on mobile) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
          {data.items.map((item, index) => (
            <TrustCard key={index} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}

/* ── Individual Trust Card with SVG Animation ──────────── */

function TrustCard({ item }: { item: BenefitItem }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  /* Draw icon paths on scroll into view */
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setDrawn(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={[
        'group relative rounded-[22px] px-8 pt-9 pb-10 overflow-hidden cursor-pointer h-full flex flex-col',
        'border transition-all duration-[450ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]',
        'coral-underline', 
        isHovered
          ? 'border-coral/40 bg-coral/5 -translate-y-[5px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]'
          : 'border-line bg-ivory', // Slightly different card background to stand out
      ].join(' ')}
    >
      {/* Animated SVG Icon */}
      <svg
        viewBox="0 0 48 46"
        aria-hidden="true"
        className="w-[56px] h-auto mb-[26px] block shrink-0"
      >
        {item.paths.map((d, i) => (
          <path
            key={i}
            d={d}
            pathLength={1}
            className="fill-none stroke-coral drop-shadow-sm"
            style={{
              strokeWidth: 1.6,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeDasharray: 1,
              strokeDashoffset: drawn ? 0 : 1,
              transition: drawn ? `stroke-dashoffset 1.2s ease ${i * 0.15}s` : 'none',
            }}
          />
        ))}
      </svg>

      <div className="flex-1">
        <h3 className="font-serif font-normal text-[22px] lg:text-[24px] mb-3 text-white group-hover:text-coral transition-colors ">
          {item.title}
        </h3>
        <p className="text-muted text-[15px] font-light leading-[1.7]">
          {item.body}
        </p>
      </div>
    </div>
  );
}