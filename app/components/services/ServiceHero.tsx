'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ARC_COUNT = 15;

const HEADLINE_LINES: { text?: string; italic?: string; delay: number }[] = [
  { text: 'Complete Dental Care', delay: 0.45 },
  { text: 'for Your Health, Comfort,', delay: 0.58 },
  { italic: 'and Smile Confidence.', delay: 0.71 },
];

export default function ServiceHero() {
  const archGroupRef = useRef<SVGGElement>(null);
  const cursorGlowRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const arcsRef = useRef<SVGPathElement[]>([]);

  useEffect(() => {
    const group = archGroupRef.current;
    if (!group) return;
    group.innerHTML = '';
    arcsRef.current = [];
    const CX = 500, CY = 560;
    for (let a = 0; a < ARC_COUNT; a++) {
      const r = 82 + a * 33;
      const isCoral = a === 4 || a === 9 || a === 13;
      const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      p.setAttribute('d', `M${CX - r} ${CY} A${r} ${r} 0 0 1 ${CX + r} ${CY}`);
      p.setAttribute('pathLength', '1');
      p.style.cssText = [
        'fill:none',
        `stroke:${isCoral ? 'rgba(232,154,114,0.5)' : 'rgba(244,236,221,0.14)'}`,
        'stroke-linecap:round',
        'stroke-dasharray:1',
        'stroke-dashoffset:1',
        `transition:stroke-dashoffset 1.7s ease ${a * 0.055}s`,
      ].join(';');
      group.appendChild(p);
      arcsRef.current.push(p);
    }
    requestAnimationFrame(() =>
      requestAnimationFrame(() =>
        arcsRef.current.forEach((p) => (p.style.strokeDashoffset = '0'))
      )
    );
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    const glow = cursorGlowRef.current;
    if (!hero) return;
    const onMove = (e: MouseEvent) => {
      const r = hero.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width;
      const ny = (e.clientY - r.top) / r.height;
      glow?.style.setProperty('--mx', `${nx * 100}%`);
      glow?.style.setProperty('--my', `${ny * 100}%`);
      const dx = nx - 0.5, dy = ny - 0.5;
      arcsRef.current.forEach((arc, i) => {
        const k = (i + 1) / arcsRef.current.length;
        arc.setAttribute('transform', `translate(${dx * 46 * k},${dy * 18 * k})`);
      });
    };
    const onLeave = () => arcsRef.current.forEach((a) => a.removeAttribute('transform'));
    hero.addEventListener('mousemove', onMove);
    hero.addEventListener('mouseleave', onLeave);
    return () => {
      hero.removeEventListener('mousemove', onMove);
      hero.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <header
      ref={heroRef}
      className="relative flex items-end overflow-hidden min-h-screen"
    >
      {/* Arch SVG field */}
      {/* <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1000 560"
          preserveAspectRatio="xMidYMax slice"
          aria-hidden="true"
        >
          <g ref={archGroupRef} className="animate-breathe" style={{ transformOrigin: '500px 560px' }} />
        </svg>
      </div> */}
      <div className="absolute inset-0 z-0">
              <Image
                src="/assets/h-hero.jpg"
                alt="hero-img"
                fill
                priority
                className="object-cover object-center"
              />
              {/* ── Added Solid Dark Overlay for Text Legibility ── */}
              <div className="absolute inset-0 bg-bg/60" />
            </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-hero-grade" />

      {/* Cursor glow */}
      <div
        ref={cursorGlowRef}
        className="absolute inset-0 z-[1] pointer-events-none hidden md:block"
        style={{
          background:
            'radial-gradient(300px 300px at var(--mx,72%) var(--my,28%), rgba(232,154,114,0.2), transparent 70%)',
        }}
      />

      {/* Content */}
      <div
        className="relative z-[2] w-full max-w-[90%] mx-auto px-site pt-40 text-left"
        style={{ paddingBottom: 'clamp(48px, 7vw, 96px)' }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-[11px] md:text-[11.5px] tracking-eyebrow uppercase font-medium text-coral"
        >
          Promenade Dental Services in Chandler, AZ
        </motion.div>

        {/* Headline */}
        <h1 className="font-serif font-light text-hero leading-tight mt-4 md:mt-6 text-ivory">
          {HEADLINE_LINES.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ delay: line.delay, duration: 1.1, ease: [0.16, 0.84, 0.34, 1] }}
              >
                {line.text ? (
                  line.text
                ) : (
                  <em className="not-italic font-normal text-coral">{line.italic}</em>
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Footer row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1.2 }}
          className="flex flex-col  md:justify-between gap-6 md:gap-[30px] mt-8 md:mt-10 max-w-5xl"
        >
          <p className="text-ivory text-body-lg font-light leading-[1.7]">
            Promenade Dental provides comprehensive dental services in Chandler, AZ
            for patients who need preventive care, cosmetic smile improvement,
            tooth repair, tooth replacement, or urgent dental treatment.

            Led by Dr. Shriya Sarin, our Fulton Ranch dental office helps patients
            understand their oral health clearly and choose treatment that supports
            long-term comfort, function, and confidence.

            Whether you are visiting for a routine cleaning, tooth pain, teeth
            whitening, a dental crown, missing teeth, or a complete smile makeover,
            your care begins with careful diagnosis and a clear conversation about
            your options.
            </p>
                  <div className="flex flex-wrap gap-2.5 mt-6">
          {[
            "Welcoming New Patients",
            "Same-Day Appointments Available",
            "Trusted by 200+ Patients",
          ].map((item) => (
            <span
              key={item}
              className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 md:text-body-lg text-ivory/80 tracking-[0.02em]"
            >
              {item}
            </span>
          ))}
        </div>  
          <div className="flex flex-wrap gap-4 items-center">
  <HeroButton />

  <a
    href="tel:+14808028188"
    className="
      inline-flex items-center gap-3
      border border-line
      text-ivory
      px-[26px] md:px-[30px]
      py-[15px] md:py-[17px]
      rounded-full
      text-[13px] md:text-[14px]
      uppercase tracking-wide2
      transition-all duration-300
      hover:border-coral
    "
  >
    Call (480) 802-8188
  </a>
</div>
        </motion.div>
      </div>
    </header>
  );
}

function HeroButton() {
  const ref = useRef<HTMLButtonElement>(null);
  const [hov, setHov] = useState(false);

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    ref.current!.style.transform = `translate(${(e.clientX - (r.left + r.width / 2)) * 0.25}px,${(e.clientY - (r.top + r.height / 2)) * 0.4}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = '';
    setHov(false);
  };

  return (
    <button
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={onLeave}
      className={[
        'inline-flex items-center gap-3 border-none font-sans font-semibold text-[13px] md:text-[14px] tracking-wide2 uppercase',
        'px-[26px] md:px-[30px] py-[15px] md:py-[17px] rounded-full cursor-pointer whitespace-nowrap transition-all duration-300',
        'shadow-btn text-bg',
        hov ? 'bg-ivory -translate-y-0.5' : 'bg-coral',
      ].join(' ')}
    >
      Book an Appointment →
    </button>
  );
}