'use client';

import Link from 'next/link';
import { useScrollReveal } from '@/app/lib/useScrollReveal';

// 1. Data Interfaces
interface RelatedServiceItem {
  title: string;
  description: string;
  href: string;
}

interface RelatedServicesData {
  eyebrow: string;
  heading: string;
  intro: string;
  services: RelatedServiceItem[];
}

export default function RelatedServicesSection({ data }: { data: RelatedServicesData }) {
  const [headRef, headIn] = useScrollReveal();

  return (
    <section className="py-section border-t border-line">
      <div className="lg:px-site max-w-[90%] mx-auto">
        
        {/* ── Header ── */}
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={[
            'flex flex-col md:flex-row md:items-end md:justify-between gap-8 lg:gap-16 mb-14 md:mb-20',
            'transition-all duration-1000 ease-out',
            headIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ].join(' ')}
        >
          <div className="flex-1">
            <span className="inline-block text-[11.5px] font-medium tracking-eyebrow uppercase text-coral mb-4">
              {data.eyebrow}
            </span>
            <h2 className="font-serif font-light text-3xl lg:text-7xl leading-[1.08] tracking-[-0.02em] text-ink max-w-[22ch]">
              {data.heading}
            </h2>
          </div>
          <div className="flex-1 lg:max-w-[500px]">
            <p className="text-ink/80 text-body-lg md:text-[16px] font-light leading-[1.7]">
              {data.intro}
            </p>
          </div>
        </div>

        {/* ── 4-Column Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {data.services.map((service, i) => (
            <RelatedServiceCard key={i} item={service} delay={i * 0.15} />
          ))}
        </div>

      </div>
    </section>
  );
}

/* ── Individual Clickable Card ─────────────────────────── */

function RelatedServiceCard({
  item,
  delay,
}: {
  item: RelatedServiceItem;
  delay: number;
}) {
  const [ref, inView] = useScrollReveal();

  return (
    <Link
      href={item.href}
      ref={ref as React.RefObject<HTMLAnchorElement>}
      className={[
        'group block relative rounded-[22px] p-7 md:p-8 h-full flex flex-col justify-between',
        'border border-line bg-panel',
        'transition-all duration-[450ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]',
        'hover:-translate-y-[5px] hover:border-coral/40 hover:bg-coral/5 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]',
        'coral-underline'
      ].join(' ')}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(24px)',
      }}
    >
      <div>
        <h3 className="font-serif font-normal text-[20px] md:text-[22px] eading-snug mb-3 transition-colors text-white group-hover:text-coral">
          {item.title}
        </h3>
        <p className="text-muted font-sans font-light text-[14.5px] leading-[1.65]">
          {item.description}
        </p>
      </div>

      {/* Animated Arrow */}
      <div className="mt-8 flex items-center justify-end">
        <div className="w-10 h-10 rounded-full bg-line/50 border border-line flex items-center justify-center transition-all duration-[450ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:bg-coral group-hover:border-coral">
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            className="text-white transition-transform duration-[450ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]  group-hover:translate-x-0.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}