'use client';

import React from 'react';
import { motion } from 'framer-motion';

// ─── Types ────────────────────────────────────────────────────────────────────

interface ServiceDoctorProps {
  eyebrow?: string;
  heading?: string;
  /** Full bio paragraph */
  body: string;
  /** Short credential pills shown beneath the bio */
  credentials: string[];
  /** Portrait image src */
  image: string;
  imageAlt?: string;
  /** 2–3 quick-stat facts (value + label) */
  facts?: { value: string; label: string }[];
}

// ─── Default props (matches the data object we created) ──────────────────────

const defaultProps = {
  eyebrow: 'Meet Your Dentist',
  heading: 'Dr. Shriya Verma, D.D.S.',
  body: `Dr. Shriya Verma is dedicated to providing patient-centered dental care at Promenade Dental. A UCLA School of Dentistry graduate, she combines advanced training, modern techniques, and meticulous attention to detail to help Chandler families achieve healthy, confident smiles.`,
  credentials: [
    'D.D.S., UCLA School of Dentistry',
    'B.S. Biology with Honors, UCLA',
    'Thousands of CE hours beyond state requirements',
    'Practicing in Chandler, AZ since graduation',
  ],
  // Replace with real portrait; this is a placeholder
  image: '/assets/dr-shriya.jpeg',
  imageAlt: 'Dr. Shriya Verma, D.D.S. — Promenade Dental, Chandler AZ',
  facts: [
    { value: '12+', label: 'Years in Chandler' },
    { value: '8 k+', label: 'Patients treated' },
    { value: 'UCLA', label: 'Dental school' },
  ],
};

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
      {/* Coral dot */}
      <span className="w-[5px] h-[5px] rounded-full bg-coral shrink-0" />
      {label}
    </span>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ServiceDoctor(props: ServiceDoctorProps) {
  const {
    eyebrow,
    heading,
    body,
    credentials,
    image,
    imageAlt,
    facts,
  } = { ...defaultProps, ...props };

  return (
    <section className="py-section border-t border-line">
      <div className="px-site max-w-[1240px] mx-auto">

        {/* ── Grid: portrait left, copy right (reverses on mobile) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[clamp(48px,6vw,96px)] items-center">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 0.84, 0.34, 1] }}
            className="order-0 lg:order-none"
          >
            {/* Eyebrow */}
            {eyebrow && (
              <p className="text-coral text-[11px] md:text-[12px] tracking-wide3 uppercase font-medium mb-3 md:mb-4">
                {eyebrow}
              </p>
            )}

            {/* Heading — matches DoctorsSection name style */}
            {heading && (
              <h2
                className="font-serif font-light leading-tight text-ivory"
                style={{ fontSize: 'clamp(34px, 4.8vw, 64px)' }}
              >
                {/* Split "Dr. Shriya" / "Verma" to get the coral italic on surname */}
                {heading.includes('Verma') ? (
                  <>
                    Dr. Shriya
                    <br />
                    <em className="not-italic text-coral">Verma</em>
                    {heading.replace('Dr. Shriya Verma', '').trim() && (
                      <span className="text-muted text-[0.55em]">
                        {' '}
                        {heading.replace('Dr. Shriya Verma', '').trim()}
                      </span>
                    )}
                  </>
                ) : (
                  heading
                )}
              </h2>
            )}

            {/* Bio */}
            <p className="text-muted text-[15px] md:text-[16px] font-light leading-[1.75] mt-5 md:mt-6 max-w-[50ch]">
              {body}
            </p>

            {/* Credential pills */}
            {credentials && credentials.length > 0 && (
              <ul className="flex flex-wrap gap-2 mt-7 md:mt-8 list-none p-0">
                {credentials.map((c) => (
                  <li key={c}>
                    <CredentialPill label={c} />
                  </li>
                ))}
              </ul>
            )}

            {/* Divider + personal note */}
            <div className="mt-8 md:mt-10 pt-7 md:pt-8 border-t border-line">
              <p className="text-muted text-[14px] md:text-[15px] font-light leading-[1.7] italic max-w-[44ch]">
                &ldquo;My goal is for every patient to leave feeling informed,
                comfortable, and genuinely cared for — not just treated.&rdquo;
              </p>
              <p className="text-ivory text-[13px] mt-3 font-medium tracking-wide">
                — Dr. Shriya Verma
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 0.84, 0.34, 1] }}
            className="relative w-full max-w-[480px] mx-auto lg:max-w-none order-1 lg:order-none"
            style={{ aspectRatio: '0.84' }}
          >
            <div className="absolute inset-0 rounded-arch-sm overflow-hidden">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Floating credential card — bottom-right corner */}
            {facts && facts.length > 0 && (
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
                {facts.map((f) => (
                  <div key={f.label} className="text-center">
                    <b className="font-serif text-[20px] font-normal text-ivory block leading-none">
                      {f.value}
                    </b>
                    <span className="text-muted text-[11px] mt-1 block whitespace-nowrap">
                      {f.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}