// components/services/ServiceHero.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useBookingModal } from '../../common/BookingModalProvider';

const ARC_COUNT = 15;

export default function ServiceHero({
  eyebrow,
  title,
  highlight,
  description,
  image,
  trustPoints,
  primaryCTA,
  secondaryCTA,
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  image: string;
  trustPoints?: string[];
  primaryCTA?: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
}) {
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
  const { openBookingModal } = useBookingModal();

  return (
    <header
      ref={heroRef}
      className="relative flex items-center overflow-hidden min-h-screen"
    >
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image} 
          alt={title}
          fill
          priority
          className="object-cover object-center"
        />
        {/* ── Added Solid Dark Overlay for Text Legibility ── */}
        <div className="absolute inset-0 bg-ink/60" />
      </div>

      {/* Your custom gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-hero-grade" />

      {/* Cursor glow */}
      <div
        ref={cursorGlowRef}
        className="absolute inset-0 z-[1] pointer-events-none hidden md:block"
        style={{
          background:
            'radial-gradient(300px 300px at var(--mx,50%) var(--my,50%), rgba(232,154,114,0.2), transparent 70%)',
        }}
      />

      {/* Content */}
      <div
        className="relative z-[2] w-full max-w-[90%] mx-auto lg:px-site"
        style={{ paddingTop: 'clamp(110px, 12vw, 140px)', paddingBottom: 'clamp(48px, 7vw, 96px)' }}
      >
        <div className="lg:max-w-6xl items-center">

          {/* Left — Copy */}
          <div>
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="flex items-center gap-3 text-[11px] tracking-eyebrow uppercase font-medium text-coral mb-5"
            >
              <span className="text-coral">{eyebrow}</span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-serif font-light text-4xl md:text-7xl leading-[1.1em] text-white">
              <span className="block">
                <motion.span
                  className="inline-block"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.35, duration: 1.1, ease: [0.16, 0.84, 0.34, 1] }}
                >
                  {title} <em className="not-italic text-coral">{highlight}</em>
                </motion.span>
              </span>
            </h1>

            {/* Description */}
            <motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.9, duration: 1 }}
  className="lg:max-w-[80%] text-white/80  md:text-xl font-light leading-[1.7] mt-6"
>
  {description}
</motion.p>

{/* Trust Points */}
{trustPoints?.length ? (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.1, duration: 0.8 }}
    className="flex flex-wrap gap-2.5 mt-8"
  >
    {trustPoints.map((item) => (
      <span
        key={item}
        className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-white/80"
      >
        {item}
      </span>
    ))}
  </motion.div>
) : null}

{/* CTA Buttons */}
{(primaryCTA || secondaryCTA) && (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.2, duration: 0.8 }}
    className="flex flex-wrap gap-4 mt-8"
  >
    {primaryCTA && (
      <button
        onClick={openBookingModal}
        className="
          inline-flex items-center justify-center
          px-8 py-4
          rounded-full
          bg-coral
          text-white
          text-[14px]
          uppercase
          tracking-wide
          transition-all duration-300
          hover:bg-coral/90
        "
      >
        {primaryCTA.label}
      </button>
    )}

    {secondaryCTA && (
      <Link
        href={secondaryCTA.href}
        className="
          inline-flex items-center justify-center
          px-8 py-4
          rounded-full
          border border-line
          text-white
          text-[14px]
          uppercase
          tracking-wide
          transition-all duration-300
          hover:border-coral
        "
      >
        {secondaryCTA.label}
      </Link>
    )}
  </motion.div>
)}
          </div>

        </div>
      </div>
    </header>
  );
}

/* ─── Booking Form ─────────────────────────────────────── */

