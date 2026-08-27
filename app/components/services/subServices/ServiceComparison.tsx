'use client';

import { useScrollReveal } from '@/app/lib/useScrollReveal';
import { HiOutlineCheck } from 'react-icons/hi';
import { HiOutlineXMark } from 'react-icons/hi2';

export default function ServiceComparison({
  eyebrow,
  heading,
  subtitle,
  without,
  withUs,
}: {
  eyebrow: string;
  heading: string;
  subtitle?: string;
  without: { title: string; points: string[] };
  withUs: { title: string; points: string[] };
}) {
  const [headRef, headIn] = useScrollReveal();
  const [tableRef, tableIn] = useScrollReveal();

  const rows = Math.max(without.points.length, withUs.points.length);

  return (
    <section className="py-20 md:py-24 bg-bg-2">
      <div className="px-site max-w-[1240px] mx-auto">
        {/* Heading */}
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={[
            'mb-10 md:mb-16 max-w-[680px] transition-all duration-1000 ease-out',
            headIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ].join(' ')}
        >
          <span className="inline-block text-[11px] md:text-[11.5px] font-medium tracking-eyebrow uppercase text-accent mb-4">
            {eyebrow}
          </span>

          <h2 className="font-serif font-light text-[38px] sm:text-5xl lg:text-7xl leading-[1.08] tracking-[-0.02em] text-ink">
            {heading}
          </h2>

          {subtitle && (
            <p className="text-body text-base sm:text-lg lg:text-xl font-light leading-[1.7] mt-5 max-w-[48ch]">
              {subtitle}
            </p>
          )}
        </div>

        {/* ========================= */}
        {/* Desktop Table */}
        {/* ========================= */}
        <div
          ref={tableRef as React.RefObject<HTMLDivElement>}
          className={[
            'hidden md:block rounded-[22px] border border-line overflow-hidden',
            'transition-all duration-1000 ease-out',
            tableIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ].join(' ')}
        >
          {/* Header */}
          <div className="grid grid-cols-2">
            <div className="px-7 lg:px-9 py-6 border-r border-line">
              <span className="inline-flex items-center gap-2 text-base lg:text-lg tracking-wide uppercase font-medium text-body-2">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-2" />
                {without.title}
              </span>
            </div>

            <div className="px-7 lg:px-9 py-6 bg-coral/[0.05]">
              <span className="inline-flex items-center gap-2 text-base lg:text-lg tracking-wide uppercase font-medium text-accent">
                <span className="w-1.5 h-1.5 rounded-full bg-coral" />
                {withUs.title}
              </span>
            </div>
          </div>

          {/* Rows */}
          {Array.from({ length: rows }).map((_, i) => (
            <div
              key={i}
              className="grid grid-cols-2 border-t border-line"
            >
              <ComparisonCell
                text={without.points[i]}
                variant="muted"
              />

              <ComparisonCell
                text={withUs.points[i]}
                variant="coral"
              />
            </div>
          ))}
        </div>

        {/* ========================= */}
        {/* Mobile Cards */}
        {/* ========================= */}
        <div
          className={[
            'md:hidden space-y-4',
            'transition-all duration-1000 ease-out',
            tableIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ].join(' ')}
        >
          {Array.from({ length: rows }).map((_, i) => (
            <div
              key={i}
              className="rounded-[18px] border border-line overflow-hidden"
            >
              {/* Typical */}
              <div className="p-5 border-b border-line">
                <div className="flex items-center gap-2 mb-3">
                  <HiOutlineXMark className="w-5 h-5 text-body-2 flex-shrink-0" />

                  <span className="text-[11px] tracking-eyebrow uppercase text-body-2 font-medium">
                    {without.title}
                  </span>
                </div>

                <p className="text-body text-[15px] leading-7 font-light">
                  {without.points[i]}
                </p>
              </div>

              {/* With Us */}
              <div className="p-5 bg-coral/[0.04]">
                <div className="flex items-center gap-2 mb-3">
                  <HiOutlineCheck className="w-5 h-5 text-accent flex-shrink-0" />

                  <span className="text-[11px] tracking-eyebrow uppercase text-accent font-medium">
                    {withUs.title}
                  </span>
                </div>

                <p className="text-ink text-[15px] leading-7 font-light">
                  {withUs.points[i]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonCell({
  text,
  variant,
}: {
  text?: string;
  variant: 'muted' | 'coral';
}) {
  const isCoral = variant === 'coral';

  return (
    <div
      className={[
        'flex items-start gap-3 px-7 lg:px-9 py-6',
        isCoral ? 'bg-coral/[0.05]' : '',
        !isCoral ? 'border-r border-line' : '',
      ].join(' ')}
    >
      {text ? (
        <>
          {isCoral ? (
            <HiOutlineCheck className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" />
          ) : (
            <HiOutlineXMark className="w-5 h-5 mt-0.5 flex-shrink-0 text-body-2" />
          )}

          <span
            className={[
              'text-base lg:text-lg leading-[1.8] font-light',
              isCoral ? 'text-cream' : 'text-body',
            ].join(' ')}
          >
            {text}
          </span>
        </>
      ) : (
        <span className="text-body-2/40">—</span>
      )}
    </div>
  );
}