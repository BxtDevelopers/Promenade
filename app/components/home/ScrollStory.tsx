'use client';

import React, { useEffect, useRef, useState } from 'react';

const STEPS = [
  {
    n: '01',
    title: 'Severe Tooth Pain',
    body:
      'Persistent toothaches, sensitivity, and discomfort can affect eating, sleeping, and everyday life. Our team identifies the source of the pain and provides fast, effective relief.',
    img: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1200&q=80',
  },
  {
    n: '02',
    title: 'Broken or Chipped Teeth',
    body:
      'Whether caused by an accident or everyday wear, damaged teeth can impact both appearance and function. We offer durable restorations to protect and rebuild your smile.',
    img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80',
  },
  {
    n: '03',
    title: 'Missing Teeth',
    body:
      'Missing teeth can affect confidence, speech, and chewing ability. From dental implants to bridges, we provide modern solutions that look and feel natural.',
    img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80',
  },
  {
    n: '04',
    title: 'Gum Disease',
    body:
      'Healthy gums are the foundation of a healthy smile. Our advanced periodontal treatments help stop infection, protect teeth, and restore long-term oral health.',
    img: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1200&q=80',
  },
  {
    n: '05',
    title: 'Crooked Teeth',
    body:
      'Misaligned teeth can affect both aesthetics and oral health. We offer clear aligners and orthodontic treatments designed to create a straighter, healthier smile.',
    img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80',
  },
  {
    n: '06',
    title: 'Smile Makeovers',
    body:
      'Transform the appearance of your smile with customized cosmetic treatments including whitening, veneers, bonding, and complete smile design solutions.',
    img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=80',
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
    height: `${STEPS.length * 80}vh`,
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
                : 'text-ivory/45'
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
                    : 'bg-ivory/20'
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
        <div className="relative z-[2] w-full max-w-[1240px] mx-auto px-site">

          {/* Eyebrow */}
        
          {/* Step slides — fixed height keeps layout stable */}
          <div className="relative h-[260px] sm:h-[260px]">
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
            Dental Problems , We Solve
          </p>
                <h2 className="font-serif font-light text-story-head leading-tight2 tracking-[-0.03em] my-[14px_0_20px] text-ivory mt-[14px] mb-5">
                  {s.title}
                </h2>
                <p className="text-muted text-story-body font-light leading-[1.6] max-w-[36ch]">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Progress dots ── */}
        <div className="absolute left-0 right-0 bottom-[8vh] z-[2]">
          <div className="max-w-[1240px] mx-auto px-site flex gap-[14px]">
            {STEPS.map((_, i) => (
              <div
                key={i}
                className="flex-1 h-[2px] bg-ivory/[0.16] overflow-hidden rounded-sm"
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