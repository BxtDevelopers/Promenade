'use client';

import { useScrollReveal } from '@/app/lib/useScrollReveal';

const VALUES = [
  {
    title: 'Patient-first, always',
    body: "Every decision starts with what's right for you \u2014 not what's fastest or most profitable for us.",
  },
  {
    title: 'Comfort, considered',
    body: 'Soft light, warm tones, and small details throughout \u2014 designed to make even nervous visits feel easy.',
  },
  {
    title: 'Honest, no upsell',
    body: "Clear explanations and realistic recommendations. If you don't need it, we won't suggest it.",
  },
  {
    title: 'Family for life',
    body: "From a child's first cleaning to a parent's first implant \u2014 one practice, every stage of life.",
  },
] as const;

export default function OurValues() {
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
            Our Philosophy
          </span>
          <h2 className="font-serif font-light text-3xl
            lg:text-[clamp(40px,4.6vw,80px)] leading-[1.05] tracking-[-0.02em] text-ink max-w-[15ch]">
            The values behind{' '}
            <em className="not-italic text-coral">every visit</em>.
          </h2>
        </div>

        {/* 2-col value grid — stacked on mobile, 2-col on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[60px] gap-y-8 mt-12 md:mt-16 max-w-[760px]">
          {VALUES.map((item, i) => (
            <ValueCard key={item.title} item={item} delay={i * 0.09} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ValueCard({
  item,
  delay,
}: {
  item: { title: string; body: string };
  delay: number;
}) {
  const [ref, inView] = useScrollReveal();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="transition-all duration-1000 ease-out"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(34px)',
        transitionDelay: `${delay}s`,
      }}
    >
      <h4 className="font-serif font-normal text-[19px] mb-[10px] text-ink">
        {item.title}
      </h4>
      <p className="text-muted text-[15px] font-light leading-[1.7]">{item.body}</p>
    </div>
  );
}