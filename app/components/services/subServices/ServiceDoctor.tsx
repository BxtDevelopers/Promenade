'use client';

import React from 'react';
import { motion } from 'framer-motion';

// ─── Static data ──────────────────────────────────────────────────────────────

const CREDENTIALS = [
  'D.D.S., UCLA School of Dentistry',
  'B.S. Biology with Honors, UCLA',
  'Thousands of CE hours beyond state requirements',
  'Practicing in Chandler, AZ since graduation',
];

const FACTS = [
  { value: '23+', label: 'Years in Chandler' },
  { value: '8k+', label: 'Patients treated' },
  { value: 'UCLA', label: 'Dental school' },
];

// ─── Credential pill ──────────────────────────────────────────────────────────

function CredentialPill({ label }: { label: string }) {
  return (
    <span
      className={[
        'inline-flex items-center gap-2',
        'rounded-full border border-line',
        'px-4 py-2',
        'text-muted text-[12px] md:text-[13px] font-light tracking-wide',
      ].join(' ')}
    >
      <span className="w-[5px] h-[5px] rounded-full bg-coral shrink-0" />
      {label}
    </span>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ServiceDoctor() {
  return (
    <section className="py-section border-t border-line">
      <div className="px-site max-w-[1240px] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[clamp(48px,6vw,96px)] items-center">

          {/* ── Copy — left column on desktop ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 0.84, 0.34, 1] }}
            className="order-2 lg:order-1"
          >
            {/* Eyebrow */}
            <p className="text-coral text-[11px] md:text-[12px] tracking-wide3 uppercase font-medium mb-3 md:mb-4">
              Meet Your Dentist
            </p>

            {/* Name */}
            <h2
              className="font-serif font-light leading-tight text-ink"
              style={{ fontSize: 'clamp(34px, 4.8vw, 64px)' }}
            >
              Dr. Shriya
              <br />
              <em className="not-italic text-coral">Sarin</em>
              <span className="text-muted" style={{ fontSize: '0.55em' }}> D.D.S.</span>
            </h2>

            {/* Bio */}
            <p className="text-muted text-[15px] md:text-[16px] font-light leading-[1.75] mt-5 md:mt-6 max-w-[50ch]">
              Dr. Shriya Sarin is dedicated to providing patient-centered dental
              care at Promenade Dental. A UCLA School of Dentistry graduate, she
              combines advanced training, modern techniques, and a meticulous
              attention to detail to help Chandler families achieve healthy,
              confident smiles — in a comfortable, non-rushed environment where
              you always see the same dentist.
            </p>

            {/* Credential pills */}
            <ul className="flex flex-wrap gap-2 mt-7 md:mt-8 list-none p-0">
              {CREDENTIALS.map((c) => (
                <li key={c}>
                  <CredentialPill label={c} />
                </li>
              ))}
            </ul>

            {/* Quote */}
            <div className="mt-8 md:mt-10 pt-7 md:pt-8 border-t border-line">
              <p className="text-muted text-[14px] md:text-[15px] font-light leading-[1.7] italic max-w-[44ch]">
                &ldquo;My goal is for every patient to leave feeling informed,
                comfortable, and genuinely cared for — not just treated.&rdquo;
              </p>
              <p className="text-ink text-[13px] mt-3 font-medium tracking-wide">
                — Dr. Shriya Sarin
              </p>
            </div>
          </motion.div>

          {/* ── Portrait — right column on desktop ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 0.84, 0.34, 1] }}
            className="relative w-full max-w-[480px] mx-auto lg:max-w-none order-1 lg:order-2"
            style={{ aspectRatio: '0.84' }}
          >
            <div className="absolute inset-0 rounded-arch-sm overflow-hidden">
              <img
                src="/assets/dr-shriya-2.jpeg"
                alt="Dr. Shriya Sarin, D.D.S. — Promenade Dental, Chandler AZ"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className={[
                'absolute bottom-5 right-5',
                'bg-navy/80 backdrop-blur-sm',
                'border border-line rounded-2xl',
                'px-5 py-4',
                'flex gap-6',
              ].join(' ')}
            >
              {FACTS.map((f) => (
                <div key={f.label} className="text-center">
                  <b className="font-serif text-[20px] font-normal text-ink block leading-none">
                    {f.value}
                  </b>
                  <span className="text-muted text-[11px] mt-1 block whitespace-nowrap">
                    {f.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}