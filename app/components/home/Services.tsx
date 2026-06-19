'use client';

import React, { useEffect, useRef, useState } from 'react';

const SERVICES = [
  {
    no: '01',
    title: 'Family & Preventive Dentistry',
    body:
      'Preventive dentistry helps protect your teeth and gums before small issues become painful or expensive. Our family dental care includes exams, cleanings, digital evaluation, children\u2019s dentistry, gum health checks, night guards, and routine monitoring for patients of all ages.',
    body2:
      'Whether you are bringing your child for an early dental visit or scheduling your own routine cleaning, we focus on prevention, education, and early diagnosis.',
    ctaLabel: 'Explore Family Dentistry',
    ctaHref: '#',
    paths: ['M6 38 A18 18 0 0 1 42 38', 'M14 38 A10 10 0 0 1 34 38'],
  },
  {
    no: '02',
    title: 'Cosmetic Dentistry',
    body:
      'Cosmetic dentistry improves the appearance of your smile while respecting your natural teeth, facial features, and oral health. Treatment may include teeth whitening, ZOOM! whitening, porcelain veneers, cosmetic bonding, and smile makeover planning.',
    body2:
      'If your concern is tooth color, chips, uneven edges, gaps, worn teeth, or an overall lack of smile confidence, Dr. Shriya can help you understand which options fit your goals.',
    ctaLabel: 'Explore Cosmetic Dentistry',
    ctaHref: '#',
    paths: [
      'M6 38 A18 18 0 0 1 42 38',
      'M24 4 L24 14 M19 9 L29 9 M20.8 5.8 L27.2 12.2 M27.2 5.8 L20.8 12.2',
    ],
  },
  {
    no: '03',
    title: 'Restorative Dentistry',
    body:
      'Restorative dentistry repairs teeth that are decayed, cracked, weakened, infected, or missing. Our care includes tooth-colored fillings, dental crowns, dental bridges, root canal therapy, tooth extractions, dentures, inlays, and onlays.',
    body2:
      'The purpose of restorative care is not only to fix a tooth. It is to rebuild chewing comfort, protect your bite, prevent further damage, and help your smile function naturally again.',
    ctaLabel: 'Explore Restorative Dentistry',
    ctaHref: '#',
    paths: [
      'M6 38 A18 18 0 0 1 42 38',
      'M24 12 L24 33 M18 33 L30 33 M20 18 L28 18 M20 23 L28 23',
    ],
  },
  {
    no: '04',
    title: 'Dental Implants',
    body:
      'Dental implants replace missing teeth with stable, natural-looking tooth replacements. Depending on your needs, implant treatment may support a single crown, a bridge, or a denture\u2014built around your bone support, bite, and long-term comfort.',
    body2:
      'At Promenade Dental, implant consultations focus on your bone support, bite, smile goals, health history, and the best replacement option for long-term comfort and function.',
    ctaLabel: 'Explore Dental Implants',
    ctaHref: '#',
    paths: [
      'M6 38 A18 18 0 0 1 42 38',
      'M24 9 L24 25 M16 17 L32 17',
    ],
  },
  {
    no: '05',
    title: 'Emergency Dentistry',
    body:
      'Dental emergencies can happen suddenly. Severe tooth pain, swelling, a broken tooth, a knocked-out tooth, or a lost restoration should be evaluated quickly.',
    body2:
      'If you are looking for an emergency dentist in Chandler, call Promenade Dental. We help patients understand what may be causing the pain and what treatment can provide relief.',
    ctaLabel: 'Call for Emergency Dental Care',
    ctaHref: '#',
    paths: ['M6 38 A18 18 0 0 1 42 38', 'M24 9 L24 25 M16 17 L32 17'],
  },
] as const;

export default function ServicesSection() {
  return (
    <section className="py-section">
      <div className="px-site max-w-[90%] mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between gap-[30px] flex-wrap mb-[30px] text-center">
          <div>
            <h2 className="font-serif font-light text-3xl 
              lg:text-[clamp(40px,4.6vw,80px)] leading-[1.05] tracking-[-0.02em] text-ivory">
              Complete Dental Services{' '}
              <em className="not-italic text-coral">in Chandler, AZ</em>.
            </h2>
            <p className="text-muted text-[15px] md:text-[16px] font-light leading-[1.75] mt-5 lg:max-w-[80%] mx-auto">
              Promenade Dental provides care across the main areas patients
              commonly need from a trusted local dentist: prevention,
              cosmetic improvement, tooth repair, tooth replacement, and
              urgent dental care.
            </p>
          </div>
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

      {/* Second paragraph */}
      <p className="text-muted text-[14.5px] font-light leading-[1.65] mt-3">
        {service.body2}
      </p>

      {/* CTA */}
      <a
        href={service.ctaHref}
        className="inline-flex items-center gap-2 mt-5 text-[14px] text-coral font-light tracking-[0.02em]
          underline underline-offset-4 decoration-coral/40 hover:decoration-coral transition-colors"
      >
        {service.ctaLabel}
      </a>
    </div>
  );
}