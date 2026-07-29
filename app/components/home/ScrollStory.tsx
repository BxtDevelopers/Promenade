'use client';

import React, { useEffect, useRef, useState } from 'react';

const STEPS = [
  {
    n: '01',
    title: 'Preventive & Family Care',
    items: [
      'Dental exams and cleanings',
      'Children\u2019s dentistry',
      'Gum disease treatment',
      'Night guards for teeth grinding',
      'Oral cancer screening',
      'Dental hygiene education',
    ],
    img: '/assets/preventiveandfamily.jpg',
    ctaLabel: 'Explore Preventive Care',
    ctaHref: '/services/family-dentistry',
  },
  {
    n: '02',
    title: 'Cosmetic Dentistry',
    items: [
      'Teeth whitening',
      'ZOOM! professional whitening',
      'Porcelain veneers',
      'Cosmetic dental bonding',
      'Smile makeover planning',
      'Tooth shape and color improvement',
    ],
    img: '/assets/cosmetic.jpg',
    ctaLabel: 'Explore Cosmetic Dentistry',
    ctaHref: '/services/cosmetic-dentistry',
  },
  {
    n: '03',
    title: 'Restorative Dentistry',
    items: [
      'Tooth-colored fillings',
      'Dental crowns',
      'Dental bridges',
      'Root canal therapy',
      'Tooth extractions',
      'Dentures and partial dentures',
      'Inlays and onlays',
    ],
    img: '/assets/resorative.jpg',
    ctaLabel: 'Explore Restorative Care',
    ctaHref: '/services/restorative-dentistry',
  },
  {
    n: '04',
    title: 'Dental Implants',
    items: [
      'Single tooth implants',
      'Implant-supported bridges',
      'Implant-supported dentures',
      'Missing tooth consultations',
    ],
    img: '/assets/dentalimplants.jpg',
    ctaLabel: 'Explore Dental Implants',
    ctaHref: '/services/dental-implants',
  },
  {
    n: '05',
    title: 'Emergency Dentistry',
    items: [
      'Toothache relief',
      'Broken or chipped tooth care',
      'Knocked-out tooth guidance',
      'Swelling or infection evaluation',
      'Lost crown or filling support',
    ],
    img: '/assets/emergency.jpg',
    ctaLabel: 'Get Emergency Help',
    ctaHref: '/services/emergency-dentistry',
  },
] as const;

export default function ScrollStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const onScroll = () => {
      const r = section.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      if (total <= 0) return;
      const p = Math.min(Math.max(-r.top / total, 0), 1);
      setIdx(Math.min(STEPS.length - 1, Math.floor(p * STEPS.length * 0.999)));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    /* 360vh tall scroll container — must stay style, Tailwind has no h-[360vh] */
    <section
  ref={sectionRef}
  className="relative"
  style={{
    height: `${STEPS.length * 100}vh`,
  }}
>

      {/* Sticky stage */}
      <div className="sticky top-0 h-screen min-h-[560px] overflow-hidden flex items-center bg-bg">

        {/* ── Background images ── */}
        <div className="absolute inset-0 z-0">
          {STEPS.map((s, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{ opacity: i === idx ? 1 : 0 }}
            >
              <img
                src={s.img}
                alt=""
                className="w-full h-full object-cover transition-transform duration-[1800ms] ease-in-out"
                style={{ transform: i === idx ? 'scale(1)' : 'scale(1.1)' }}
              />
            </div>
          ))}
          {/* Veil overlay — complex multi-gradient, stays in globals as bg-story-veil */}
          <div className="absolute inset-0 bg-story-veil" />
        </div>

          {/* ── Vertical Step Indicator ── */}
<div className="absolute right-[clamp(22px,4vw,60px)] top-1/2 -translate-y-1/2 z-[2]">
  <div className="flex flex-col items-center">
    {STEPS.map((step, i) => (
      <React.Fragment key={step.n}>
        <span
          className={`
            font-serif
            text-[20px]
            md:text-[24px]
            transition-colors
            duration-500
            ${
              i === idx
                ? 'text-coral'
                : 'text-ink/45'
            }
          `}
        >
          {step.n}
        </span>

        {i < STEPS.length - 1 && (
          <div className="h-8 flex items-center">
            <div
              className={`
                w-[1px]
                h-full
                transition-colors
                duration-500
                ${
                  i < idx
                    ? 'bg-coral'
                    : 'bg-ink/20'
                }
              `}
            />
          </div>
        )}
      </React.Fragment>
    ))}
  </div>
</div>

        {/* ── Foreground copy ── */}
        <div className="relative z-[2] w-full max-w-[90%] mx-auto px-site">

          {/* Eyebrow */}
        
          {/* Step slides — fixed height keeps layout stable */}
          {/* Step slides — fixed height keeps layout stable */}
          <div className="relative h-[480px] sm:h-[460px]">
            {STEPS.map((s, i) => (
              <div
                key={i}
                className="absolute inset-0 transition-[opacity,transform] duration-700 ease-in-out"
                style={{
                  opacity: i === idx ? 1 : 0,
                  transform: i === idx ? 'none' : 'translateY(44px)',
                  pointerEvents: i === idx ? 'auto' : 'none',
                  /* cubic-bezier not expressible in Tailwind duration */
                  transitionTimingFunction:
                    i === idx ? 'cubic-bezier(0.16,0.84,0.34,1)' : 'ease',
                }}
              >
                
                <span className="font-serif text-[20px] lg:text-[40px] text-coral tracking-[0.12em]">
                  {s.n}
                </span>
                <p className="text-[11.5px] tracking-eyebrow uppercase font-medium text-coral mt-[34px]">
                  Dental Treatments We Provide
                </p>
                <h2 className="font-serif font-light text-4xl lg:text-7xl lg:leading-tight2 tracking-[-0.03em] my-[14px_0_20px] text-ink mt-[14px] mb-5 max-w-[80%] md:max-w-full">
                  {s.title}
                </h2>

                {/* Service list */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-[10px] max-w-[44ch] sm:max-w-[56ch]">
                  {s.items.map((item, j) => (
                    <li
                      key={j}
                      className="text-muted text-story-body font-light leading-[1.5] flex items-start gap-[10px]"
                    >
                      <span className="text-coral mt-[2px] shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* ── Added CTA Below Bullet Points ── */}
                <div className="mt-8 md:mt-10">
                  <a
                    href={s.ctaHref || '#'} // Assumes you add ctaHref to your STEPS data
                    className="group inline-flex items-center gap-3 text-[13px] text-ink font-medium tracking-[0.04em] uppercase rounded-full border border-ink/20 px-7 py-[14px] hover:border-coral hover:bg-coral/5 transition-all duration-300"
                  >
                    {s.ctaLabel || 'Explore Services'} {/* Assumes you add ctaLabel to your STEPS data */}
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
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* ── Progress dots ── */}
        <div className="absolute left-0 right-0 bottom-[8vh] z-[2]">
          <div className="max-w-[90%] mx-auto px-site flex gap-[14px]">
            {STEPS.map((_, i) => (
              <div
                key={i}
                className="flex-1 h-[2px] bg-ink/[0.16] overflow-hidden rounded-sm"
              >
                <div
                  className="h-full bg-coral transition-[width] duration-500 ease-in-out"
                  style={{ width: i <= idx ? '100%' : '0%' }}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}