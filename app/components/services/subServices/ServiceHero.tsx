// components/services/ServiceHero.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ARC_COUNT = 15;

export default function ServiceHero({
  eyebrow,
  title,
  highlight,
  description,
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
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

  return (
    <header
      ref={heroRef}
      className="relative flex items-center overflow-hidden"
      style={{ minHeight: 'clamp(580px, 94vh, 900px)' }}
    >
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
            'radial-gradient(300px 300px at var(--mx,50%) var(--my,50%), rgba(232,154,114,0.2), transparent 70%)',
        }}
      />

      {/* Content */}
      <div
        className="relative z-[2] w-full max-w-[1240px] mx-auto px-site"
        style={{ paddingTop: 'clamp(96px, 12vw, 140px)', paddingBottom: 'clamp(48px, 7vw, 96px)' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[60px] items-center">

          {/* Left — Copy */}
          <div>
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="flex items-center gap-3 text-[11px] tracking-eyebrow uppercase font-medium text-coral mb-5"
            >
              <Link href="/" className="hover:text-ivory transition-colors">Home</Link>
              <span className="text-muted-2">/</span>
              <Link href="/services" className="hover:text-ivory transition-colors">Services</Link>
              <span className="text-muted-2">/</span>
              <span className="text-ivory/70">{eyebrow}</span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-serif font-light text-5xl lg:text-8xl text-ivory">
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
              className="max-w-[48ch] text-muted text-body-lg font-light leading-[1.7] mt-6"
            >
              {description}
            </motion.p>
          </div>

          {/* Right — Booking form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 1.1, ease: [0.16, 0.84, 0.34, 1] }}
          >
            <BookingForm service={eyebrow} />
          </motion.div>

        </div>
      </div>
    </header>
  );
}

/* ─── Booking Form ─────────────────────────────────────── */

function BookingForm({ service }: { service: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [fields, setFields] = useState({
    name: '',
    phone: '',
    email: '',
    service: service,
    date: '',
    message: '',
  });

  const set = (k: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setFields((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = () => {
    if (!fields.name || !fields.phone || !fields.email) return;
    setSubmitted(true);
  };

  const inputClass =
    'w-full bg-white border border-bg rounded-[10px] px-4 py-[13px] text-bg text-[14px] font-light placeholder:text-bg focus:outline-none focus:border-coral/60 transition-colors duration-200';

  const labelClass = 'block text-[11px] tracking-eyebrow uppercase font-medium text-bg mb-[7px]';

  if (submitted) {
    return (
      <div
        className="rounded-[20px] border border-ivory/10 flex flex-col items-center justify-center text-center gap-4 py-16 px-8"
        style={{ background: 'rgba(244,236,221,0.04)', backdropFilter: 'blur(12px)' }}
      >
        <span className="w-12 h-12 rounded-full border border-coral/40 flex items-center justify-center text-coral text-xl">✓</span>
        <p className="font-serif font-light text-ivory text-2xl">We'll be in touch</p>
        <p className="text-muted text-[14px] font-light leading-relaxed max-w-[30ch]">
          Thanks, {fields.name.split(' ')[0]}. A member of our team will reach out within one business day to confirm your visit.
        </p>
      </div>
    );
  }

  return (
    <div
      className="rounded-[20px] border border-ivory/10 p-7 md:p-8 bg-white"
    //   style={{ background: 'rgba(244,236,221,0.04)', backdropFilter: 'blur(12px)' }}
    >
      {/* Form header */}
      <p className="text-[11px] tracking-eyebrow uppercase font-medium text-coral mb-1">Request an Appointment</p>
      <p className="font-serif font-light text-bg text-xl leading-snug mb-6">
        Book your visit in&nbsp;<em className="not-italic text-coral">60 seconds</em>
      </p>

      <div className="flex flex-col gap-4">
        {/* Name + Phone */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Full name</label>
            <input className={inputClass} placeholder="Jane Smith" value={fields.name} onChange={set('name')} name='name' />
          </div>
          <div>
            <label className={labelClass}>Phone</label>
            <input className={inputClass} placeholder="(480) 555-0100" value={fields.phone} onChange={set('phone')} />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className={labelClass}>Email</label>
          <input type="email" className={inputClass} placeholder="jane@email.com" value={fields.email} onChange={set('email')} />
        </div>

        {/* Service */}
        <div>
          <label className={labelClass}>Service</label>
          <select
            className={inputClass + ' appearance-none cursor-pointer'}
            value={fields.service}
            onChange={set('service')}
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(244,236,221,0.3)' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center' }}
          >
            <option value="" className="bg-white">Select a service…</option>
            {['General Dentistry', 'Cosmetic Dentistry', 'Teeth Whitening', 'Invisalign', 'Dental Implants', 'Emergency Care'].map((s) => (
              <option key={s} value={s} className="bg-white">{s}</option>
            ))}
          </select>
        </div>

        {/* Preferred date */}
        <div>
          <label className={labelClass}>Preferred date</label>
          <input
            type="date"
            className={inputClass}
            value={fields.date}
            onChange={set('date')}
            style={{ colorScheme: 'dark' }}
          />
        </div>

        {/* Message */}
        <div>
          <label className={labelClass}>Anything we should know? <span className="normal-case text-ivory/25">(optional)</span></label>
          <textarea
            rows={2}
            className={inputClass + ' resize-none'}
            placeholder="e.g. dental anxiety, insurance info…"
            value={fields.message}
            onChange={set('message')}
          />
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className="w-full mt-1 py-[15px] rounded-full font-sans font-semibold text-[13px] tracking-wide2 uppercase bg-coral text-bg border-none cursor-pointer transition-all duration-300 hover:bg-ivory hover:text-bg hover:-translate-y-0.5 shadow-btn"
        >
          Request Appointment →
        </button>

        <p className="text-center text-[11px] text-ivory/25 font-light -mt-1">
          No commitment — we'll confirm availability with you first.
        </p>
      </div>
    </div>
  );
}