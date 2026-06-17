// components/services/ServiceStats.tsx
'use client';

import { useEffect, useState } from 'react';
import { useScrollReveal } from '@/app/lib/useScrollReveal';

export default function ServiceStats({
  eyebrow,
  heading,
  stats,
}: {
  eyebrow: string;
  heading: string;
  stats: { value: number; suffix?: string; prefix?: string; label: string }[];
}) {
  const [headRef, headIn] = useScrollReveal();
  const [panelRef, panelIn] = useScrollReveal();

  return (
    <section className="py-section bg-bg-2">
      <div className="px-site max-w-[1240px] mx-auto">

        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={[
            'mb-12 md:mb-16 max-w-3xl transition-all duration-1000 ease-out',
            headIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ].join(' ')}
        >
          <span className="inline-block text-[11.5px] font-medium tracking-eyebrow uppercase text-coral mb-4">
            {eyebrow}
          </span>
          <h2 className="font-serif font-light text-3xl lg:text-7xl leading-[1.08] tracking-[-0.02em] text-ivory">
            {heading}
          </h2>
        </div>

        <div
          ref={panelRef as React.RefObject<HTMLDivElement>}
          className={[
            'rounded-[22px] border border-line bg-ivory/[0.02]',
            'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
            'transition-all duration-1000 ease-out',
            panelIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ].join(' ')}
        >
          {stats.map((s, i) => (
            <StatCell key={i} stat={s} delay={i * 0.08} index={i} total={stats.length} />
          ))}
        </div>

      </div>
    </section>
  );
}

function StatCell({
  stat,
  delay,
  index,
  total,
}: {
  stat: { value: number; suffix?: string; prefix?: string; label: string };
  delay: number;
  index: number;
  total: number;
}) {
  const [ref, inView] = useScrollReveal();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(stat.value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, stat.value]);

  const isLast = index === total - 1;
  const isLastInMobileRow = index % 2 === 1;
  const isLastInTabletRow = index % 2 === 1;

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={[
        'px-7 md:px-8 py-8 md:py-10 transition-all duration-700 ease-out',
        'border-b border-line sm:border-b-0',
        !isLast ? 'lg:border-r lg:border-line' : '',
        !isLastInTabletRow ? 'sm:border-r sm:border-line' : '',
        index >= total - (total % 2 === 0 ? 2 : 1) && total % 1 === 0 ? '' : '',
        index === total - 1 ? 'border-b-0' : '',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
      ].join(' ')}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="font-serif font-light text-4xl leading-none text-coral tracking-[-0.02em]">
        {stat.prefix}
        {display.toLocaleString()}
        {stat.suffix}
      </div>
      <p className="mt-3 text-muted text-sm font-light leading-[1.55] max-w-[22ch]">
        {stat.label}
      </p>
    </div>
  );
}