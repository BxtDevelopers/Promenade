'use client';

import { useScrollReveal } from '@/app/lib/useScrollReveal';

const STATS = [
  { value: '23+', label: 'Years serving Chandler families' },
  { value: '8,000+', label: 'Patients cared for' },
  { value: '1,000+', label: 'Smile transformations' },
  { value: '4.9\u2605', label: 'Average patient rating' },
] as const;

export default function ByTheNumbers() {
  const [leadRef, leadIn] = useScrollReveal();

  return (
    <section className="py-section">
      <div className="px-site max-w-[1240px] mx-auto">

        {/* Lead */}
        <div
          ref={leadRef as React.RefObject<HTMLDivElement>}
          className={[
            'transition-all duration-1000 ease-out',
            leadIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ].join(' ')}
        >
          <span className="inline-block text-[11.5px] font-medium tracking-eyebrow uppercase text-coral font-sans mb-4">
            Promenade by the Numbers
          </span>
          <h2 className="font-serif font-light text-3xl
            lg:text-[clamp(40px,4.6vw,80px)] leading-[1.05] tracking-[-0.02em] text-ivory max-w-2xl">
            A track record{' '}
            <em className="not-italic text-coral">built on trust</em>.
          </h2>
        </div>

        {/* Stat grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[18px] mt-12 md:mt-16">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} delay={i * 0.09} />
          ))}
        </div>

      </div>
    </section>
  );
}

function StatCard({
  stat,
  delay,
}: {
  stat: { value: string; label: string };
  delay: number;
}) {
  const [ref, inView] = useScrollReveal();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="rounded-[22px] border border-line bg-ivory/[0.02] px-6 py-8 text-center transition-all duration-1000 ease-out"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(34px)',
        transitionDelay: `${delay}s`,
      }}
    >
      <p className="font-serif font-light text-[clamp(32px,3.6vw,52px)] leading-none text-coral">
        {stat.value}
      </p>
      <p className="text-muted text-[14px] font-light leading-[1.6] mt-3">
        {stat.label}
      </p>
    </div>
  );
}