'use client';

import React, { useEffect, useRef, useState } from 'react';

/* ── SVG icon paths per service ─────────────────────────── */
const SERVICES = [
  {
    no: '01',
    title: 'General & Family Dentistry',
    body:
      'Comprehensive preventive and restorative care for children, teens, and adults—helping every member of your family maintain a healthy, confident smile for life.',
    paths: ['M6 38 A18 18 0 0 1 42 38', 'M14 38 A10 10 0 0 1 34 38'],
  },
  {
    no: '02',
    title: 'Cosmetic Dentistry',
    body:
      'Enhance the appearance of your smile with professional whitening, bonding, veneers, and personalized cosmetic treatments designed to look naturally beautiful.',
    paths: [
      'M6 38 A18 18 0 0 1 42 38',
      'M24 4 L24 14 M19 9 L29 9 M20.8 5.8 L27.2 12.2 M27.2 5.8 L20.8 12.2',
    ],
  },
  {
    no: '03',
    title: 'ZOOM!™ Whitening',
    body:
      'Achieve a noticeably brighter smile in a single visit with professional-grade whitening that delivers fast, safe, and long-lasting results.',
    paths: [
      'M6 38 A18 18 0 0 1 42 38',
      'M24 3 L24 11 M14 7 L17 13 M34 7 L31 13 M8 15 L13 18 M40 15 L35 18',
    ],
  },
  {
    no: '04',
    title: 'Implants & Crowns',
    body:
      'Restore strength, function, and confidence with custom-crafted crowns and dental implants that blend seamlessly with your natural smile.',
    paths: [
      'M6 38 A18 18 0 0 1 42 38',
      'M24 12 L24 33 M18 33 L30 33 M20 18 L28 18 M20 23 L28 23',
    ],
  },
  {
    no: '05',
    title: 'Root Canal Therapy',
    body:
      'Modern root canal treatment is comfortable, efficient, and highly effective at eliminating pain while preserving your natural tooth.',
    paths: [
      'M6 38 A18 18 0 0 1 42 38',
      'M24 38 L24 46 M19 38 L16 46 M29 38 L32 46',
    ],
  },
  {
    no: '06',
    title: 'Emergency Dentistry',
    body:
      'Dental emergencies can’t wait. We offer prompt same-day appointments for tooth pain, broken teeth, injuries, and urgent dental concerns.',
    paths: ['M6 38 A18 18 0 0 1 42 38', 'M24 9 L24 25 M16 17 L32 17'],
  },
] as const;

export default function ServicesSection() {
  return (
    <section className="py-section">
      <div className="px-site max-w-[1240px] mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between gap-[30px] flex-wrap mb-[30px]">
          <h2 className="font-serif font-light text-3xl
            lg:text-[clamp(40px,4.6vw,80px)] leading-[1.05] tracking-[-0.02em] text-ivory">
            Comprehensive care,{' '}
            <em className="not-italic text-coral">under one roof</em>.
          </h2>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px] mt-12">
          {SERVICES.map((s) => (
            <ServiceCard key={s.no} service={s} />
          ))}
        </div>

      </div>
    </section>
  );
}

/* ── Individual card ───────────────────────────────────── */
function ServiceCard({
  service,
}: {
  service: (typeof SERVICES)[number];
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = useState(false);
  const [hov, setHov] = useState(false);

  /* Draw icon paths on scroll into view */
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
        'border transition-all duration-[450ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]',
        /* bottom coral line via ::after — defined in globals as coral-underline */
        'coral-underline',
        hov
          ? 'border-coral/40 bg-coral/5 -translate-y-[5px]'
          : 'border-line bg-ivory/[0.02]',
      ].join(' ')}
    >
      {/* SVG icon */}
      <svg
        viewBox="0 0 48 46"
        aria-hidden="true"
        className="w-[52px] h-auto mb-[22px] block"
      >
        {service.paths.map((d, i) => (
          <path
            key={i}
            d={d}
            pathLength={1}
            className="fill-none stroke-coral rounded-sm"
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

      {/* Number */}
      <span className="font-serif text-[13px] text-muted-2 tracking-[0.1em]">
        {service.no}
      </span>

      {/* Title */}
      <h3 className="font-serif font-normal text-[clamp(20px,2.2vw,26px)] mt-[5px] mb-3 text-ivory">
        {service.title}
      </h3>

      {/* Body */}
      <p className="text-muted text-[14.5px] font-light leading-[1.65]">
        {service.body}
      </p>
    </div>
  );
}