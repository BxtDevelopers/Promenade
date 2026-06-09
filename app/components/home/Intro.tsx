'use client';

import { useScrollReveal } from "@/app/lib/useScrollReveal";

const META = [
  {
    title: 'Unhurried by design',
    body: 'One dentist, real time in the chair, and a pace that never rushes you. We listen first, treat second.',
  },
  {
    title: 'Artistry meets science',
    body: 'Modern technology and a careful aesthetic eye — for results that look entirely, naturally yours.',
  },
  {
    title: 'Comfort, considered',
    body: 'Soft light, warm tones, and small touches throughout. Even nervous visits feel like a breath out.',
  },
  {
    title: 'For the whole family',
    body: 'From a child\u2019s first visit to a complete smile makeover \u2014 beautiful smiles for all ages, in one calm place.',
  },
] as const;

export default function Intro() {
  const [leadRef, leadIn] = useScrollReveal();

  return (
    <section className="py-intro">
      <div className="px-site max-w-[1240px] mx-auto">

        {/* Lead */}
        <p
          ref={leadRef as React.RefObject<HTMLParagraphElement>}
          className={[
            'font-serif font-light text-3xl lg:text-[clamp(40px,4.6vw,80px)] leading-[1.3] tracking-[-0.01em] text-ivory-2',
            'max-w-[20ch]',
            'transition-all duration-1000 ease-out',
            leadIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ].join(' ')}
        >
          Care that feels less like a clinic, and more like being{' '}
          <em className="not-italic text-coral">looked after</em>.
        </p>

        {/* 2-col meta grid — stacked on mobile, 2-col on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[60px] gap-y-8 mt-12 md:mt-16 max-w-[760px]">
          {META.map((item, i) => (
            <MetaCard key={item.title} item={item} delay={i * 0.09} />
          ))}
        </div>

      </div>
    </section>
  );
}

function MetaCard({
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
      <h4 className="font-serif font-normal text-[19px] mb-[10px] text-ivory">
        {item.title}
      </h4>
      <p className="text-muted text-[15px] font-light leading-[1.7]">{item.body}</p>
    </div>
  );
}