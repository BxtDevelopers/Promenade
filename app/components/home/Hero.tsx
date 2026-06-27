'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowBigLeft, ArrowRight } from 'lucide-react';

const ARC_COUNT = 15;

export default function Hero() {
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
    <header ref={heroRef} className="relative flex flex-col overflow-hidden min-h-[90vh]">
      {/* Arch SVG field */}
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1000 560"
          preserveAspectRatio="xMidYMax slice"
          aria-hidden="true"
        >
          <g ref={archGroupRef} className="animate-breathe" style={{ transformOrigin: '500px 560px' }} />
        </svg>
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

      {/* ── Main content ── */}
      <div
        className="relative z-[2] w-full max-w-[90%] mx-auto lg:px-site pt-40 text-left flex-1 flex flex-col justify-end"
        style={{ paddingBottom: 'clamp(48px, 7vw, 96px)' }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-[11px] md:text-[11.5px] tracking-eyebrow uppercase font-medium text-coral"
        >
          Promenade Dental · Fulton Ranch, Chandler AZ
        </motion.div>

        {/* Headline — shorter, punchier */}
        <h1 className="font-serif font-light text-hero leading-tight mt-4 md:mt-6 text-ivory">
          {[
            { text: 'Gentle, Personal', delay: 0.45 },
            { text: 'Care for Your', delay: 0.58 },
            { italic: 'Best Smile.', delay: 0.71 },
          ].map((line, i) => (
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

        {/* Single punchy subline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="text-muted text-body-lg font-light leading-[1.7] mt-6 max-w-[52ch]"
        >
          Family, cosmetic, restorative, and emergency dentistry — all with the same dentist, every visit.
        </motion.p>

        {/* CTA button */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="mt-8"
        >
          <HeroButton />
        </motion.div> */}
      </div>

      {/* ── Trust bar — below hero content, above fold on desktop ── */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="relative z-[2] w-full border-t border-white/10 bg-white/[0.04] backdrop-blur-sm"
      >
        <div className="max-w-[90%] mx-auto lg:px-site py-4 flex flex-wrap items-center gap-x-8 gap-y-3">
          {[
            { icon: '✓', text: 'Welcoming New Patients' },
            { icon: '✓', text: 'Most PPO Plans Accepted' },
            { icon: '✓', text: 'Same-Day Emergency Appointments' },
            { icon: '★', text: '200+ Happy Patients' },
          ].map((item) => (
            <span key={item.text} className="flex items-center gap-2 text-[13px] text-ivory/70 tracking-[0.02em]">
              <span className="text-coral text-[11px]">{item.icon}</span>
              {item.text}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="relative z-[2] lg:max-w-[50%] bg-bg"
      >
        <div className="max-w-[90%] mx-auto lg:px-site py-5 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <QuickAction
            href="#book"
            label="Book an Appointment"
            sub="Online scheduling, 24/7"
            icon={
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <rect x="3" y="4" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M7 2v3M13 2v3M3 8h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            }
            primary
          />
          <QuickAction
            href="/services"
            label="Our Services"
            sub="Family · Cosmetic · Implants"
            icon={
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M10 3a7 7 0 1 0 0 14A7 7 0 0 0 10 3Z" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M10 7v3l2 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            }
          />
          <QuickAction
            href="tel:+14808028188"
            label="Dental Emergency?"
            sub="Call (480) 802-8188 now"
            icon={
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 4h4l1.5 3.5-2 1.5a9 9 0 0 0 3.5 3.5l1.5-2L16 12v4a1 1 0 0 1-1 1C7 17 3 11 3 5a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            urgent
          />
        </div>
      </motion.div> */}

      {/* Scroll cue */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1.4 }}
        className="absolute left-1/2 bottom-[clamp(140px,20vw,180px)] -translate-x-1/2 z-[3] hidden md:flex flex-col items-center gap-[9px] text-[10.5px] tracking-[0.3em] uppercase text-ivory/60"
      >
        <span>Scroll</span>
        <span className="block w-px h-8 bg-gradient-to-b from-ivory/60 to-transparent animate-cue" />
      </motion.div> */}
    </header>
  );
}

/* ── Quick action tile ── */
function QuickAction({
  href, label, sub, icon, primary, urgent,
}: {
  href: string;
  label: string;
  sub: string;
  icon: React.ReactNode;
  primary?: boolean;
  urgent?: boolean;
}) {
  return (
    <a
      href={href}
      className={[
        'group flex items-center gap-4 px-5 py-4 rounded-[14px] border transition-all duration-300',
        primary
          ? 'bg-coral border-coral hover:bg-coral/90 text-bg'
          : urgent
          ? 'bg-ivory/[0.03] border-line hover:border-coral/50 hover:bg-coral/5 text-ivory'
          : 'bg-ivory/[0.03] border-line hover:border-ivory/30 hover:bg-ivory/5 text-ivory',
      ].join(' ')}
    >
      <span className={primary ? 'text-bg' : 'text-coral'}>{icon}</span>
      <span className="min-w-0">
        <span className="block text-[13.5px] font-medium tracking-[0.01em]">{label}</span>
        <span className={`block text-[11.5px] mt-0.5 ${primary ? 'text-bg/70' : 'text-muted'}`}>{sub}</span>
      </span>
      <ArrowRight size={20}/>
    </a>
  );
}

/* ── Primary CTA button ── */
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


