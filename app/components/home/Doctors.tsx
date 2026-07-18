'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const DOCTORS = [
  {
    id: 0,
    firstName: 'Dr. Shriya',
    lastName: 'Sarin',
    role: 'Comfort-Focused & Cosmetic Care',
    bio: 'Gentle hands and a careful aesthetic eye, with a special focus on making anxious and first-time patients feel completely at ease from the first visit.',
    facts: [
      { value: 'Cosmetic', label: 'Smile design' },
      { value: 'Gentle', label: 'Anxiety-friendly' },
    ],
    img: '/assets/dr-shriya-2.jpeg',
    alt: 'Dr. Shriya Sarin',
  },
] as const;

export default function DoctorsSection() {
  const [active, setActive] = useState(0);
  const doc = DOCTORS[active];

  return (
    <section className="py-section">
      <div className="px-site max-w-[1240px] mx-auto">

        {/* Section header */}
        <div className="mb-10 md:mb-12">
          <h2 className="font-serif font-light text-3xl
            lg:text-[clamp(40px,4.6vw,80px)] leading-[1.05] tracking-[-0.02em] text-ivory">
            Meet the dentists you&apos;ll{' '}
            <em className="not-italic text-coral">actually</em> get to know.
          </h2>
        </div>

        {/* Feature grid — portrait on top for mobile, side-by-side on md+ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[clamp(36px,5vw,80px)] items-center">

          {/* Portrait */}
          <div
            className="relative w-full max-w-[480px] mx-auto md:max-w-none"
            style={{ aspectRatio: '0.84' }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0 rounded-arch-sm overflow-hidden"
              >
                <img
                  src={doc.img}
                  alt={doc.alt}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Copy panel */}
          <div>
            <div
              className="relative"
              style={{ minHeight: 'clamp(340px, 34vw, 400px)' }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: [0.16, 0.84, 0.34, 1] }}
                  className="absolute inset-0"
                >
                  {/* Role */}
                  <p className="text-coral text-[11px] md:text-[12px] tracking-wide3 uppercase font-medium">
                    {doc.role}
                  </p>

                  {/* Name */}
                  <h3
                    className="font-serif font-light leading-tight mt-3 md:mt-4 text-ivory"
                    style={{ fontSize: 'clamp(36px, 5.4vw, 72px)' }}
                  >
                    {doc.firstName}
                    <br />
                    <span className="text-coral italic">{doc.lastName}</span>
                  </h3>

                  {/* Bio */}
                  <p className="text-muted text-[15px] md:text-[16px] font-light leading-[1.7] mt-5 md:mt-[22px] max-w-[42ch]">
                    {doc.bio}
                  </p>

                  {/* Stats */}
                  <ul className="flex gap-8 md:gap-11 mt-6 md:mt-7 list-none p-0">
                    {doc.facts.map((f) => (
                      <li key={f.label}>
                        <b className="font-serif text-[22px] md:text-[24px] font-normal text-ivory block leading-none">
                          {f.value}
                        </b>
                        <span className="text-muted text-[12px] md:text-[13px] mt-1.5 block">
                          {f.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Tab switcher */}
            <div className="flex gap-[10px] mt-8 md:mt-9 flex-wrap">
              {DOCTORS.map((d) => (
                <DrTab
                  key={d.id}
                  label={`${d.firstName} ${d.lastName}`}
                  active={active === d.id}
                  onClick={() => setActive(d.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DrTab({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={[
        'rounded-full px-[16px] md:px-[18px] py-[10px] md:py-[11px] font-sans text-[13px] tracking-nav cursor-pointer',
        'transition-all duration-300 border',
        active
          ? 'bg-ivory text-bg border-ivory'
          : 'bg-transparent text-muted border-line hover:text-ivory',
      ].join(' ')}
    >
      {label}
    </button>
  );
}

