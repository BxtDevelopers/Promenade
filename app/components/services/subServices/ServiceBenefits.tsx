// components/services/ServiceBenefits.tsx
'use client';

import { useEffect, useRef, useState } from 'react';

export default function ServiceBenefits({
  eyebrow,
  heading,
  description,
  benefits,
}: {
  eyebrow: string;
  heading: string;
  description?: string;
  benefits: {
    title: string;
    body: string;
    paths: string[];
  }[];
}) {
  return (
    <section className="py-section">
      <div className="px-site max-w-[90%] mx-auto">
        <div className="mb-12 ">
  <span className="inline-block text-[11.5px] font-medium tracking-eyebrow uppercase text-coral mb-4">
    {eyebrow}
  </span>

  <h2 className="font-serif font-light text-3xl lg:text-7xl leading-[1.08] tracking-[-0.02em] text-ivory mb-6">
    {heading}
  </h2>

  {description && (
    <p className="text-muted text-lg font-light leading-relaxed max-w-[80%]">
      {description}
    </p>
  )}
</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
          {benefits.map((b, i) => (
            <BenefitCard key={i} benefit={b} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitCard({ benefit }: { benefit: { title: string; body: string; paths: string[] } }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = useState(false);
  const [hov, setHov] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setDrawn(true); obs.unobserve(el); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className={[
        'relative rounded-[22px] px-7 pt-[30px] pb-8 overflow-hidden cursor-pointer',
        'border transition-all duration-[450ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] coral-underline',
        hov ? 'border-coral/40 bg-coral/5 -translate-y-[5px]' : 'border-line bg-ivory/[0.02]',
      ].join(' ')}
    >
      <svg viewBox="0 0 48 46" aria-hidden="true" className="w-[52px] h-auto mb-[22px] block">
        {benefit.paths.map((d, i) => (
          <path
            key={i}
            d={d}
            pathLength={1}
            className="fill-none stroke-coral"
            style={{
              strokeWidth: 1.6,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeDasharray: 1,
              strokeDashoffset: drawn ? 0 : 1,
              transition: drawn ? 'stroke-dashoffset 1.1s ease' : 'none',
            }}
          />
        ))}
      </svg>
      <h3 className="font-serif font-normal text-[19px] mb-3 text-ivory">{benefit.title}</h3>
      <p className="text-muted text-[14.5px] font-light leading-[1.65]">{benefit.body}</p>
    </div>
  );
}