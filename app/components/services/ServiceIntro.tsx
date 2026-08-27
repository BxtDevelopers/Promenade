'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// ─── Animation variant ────────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, delay, ease: [0.16, 0.84, 0.34, 1] as const },
});

// ─── Component ────────────────────────────────────────────────────────────────

export default function ServiceIntro() {
  return (
    <section className="py-section border-t border-line bg-bg-2">
      <div className="=lg:px-site max-w-[90%] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[clamp(48px,6vw,96px)] items-center">

          {/* ── Image — left on desktop, top on mobile ── */}
          <motion.div
            {...fadeUp(0)}
            className="relative w-full max-w-[540px] mx-auto lg:max-w-none order-1 lg:order-1"
            style={{ aspectRatio: '0.9' }}
          >
            {/* Main image */}
            <div className="absolute inset-0 rounded-arch-sm overflow-hidden">
              {/* Lazy so React does not hoist a high-priority
                  <link rel="preload"> for it — this sits below the hero and was
                  pulling 158KB ahead of the page's own LCP image. */}
              <img
                src="/assets/pd-office.jpeg"
                alt="Dr. Shriya Sarin examining a patient at Promenade Dental, Chandler AZ"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating pill — bottom left */}
            <motion.div
              {...fadeUp(0.35)}
              className={[
                'absolute bottom-5 left-5',
                'bg-navy/90 backdrop-blur-lg',
                'border border-line rounded-2xl',
                'px-5 py-4',
              ].join(' ')}
            >
              <p className="text-white text-[11px] tracking-wide3 uppercase font-semibold  mb-1">
                Before Any Treatment
                </p>
                <p className="text-white text-[13px] font-light leading-snug max-w-[22ch]">
                Every recommendation begins with a complete evaluation.
                </p>
            </motion.div>
          </motion.div>

          {/* ── Copy — right on desktop, below on mobile ── */}
          <motion.div
            {...fadeUp(0.1)}
            className="order-2 lg:order-2"
          >
            {/* Eyebrow */}
            <p className="text-accent text-[11px] md:text-[12px] tracking-wide3 uppercase font-medium mb-4">
              Our Approach to Care
            </p>

            {/* Heading */}
            <h2
            className="font-serif font-light text-3xl
            lg:text-[clamp(40px,4.6vw,80px)]
            leading-[1.05] tracking-[-0.02em] text-white"
            >
            Dental treatment starts with the{' '}
            <em className="not-italic text-accent">right diagnosis.</em>
            </h2>

            {/* Body copy — three paragraphs from the brief */}
                <div className="mt-6 md:mt-7 space-y-4">
                <p className="text-body text-[15px] md:text-[16px] font-light leading-[1.75]">
                    A dental service is not just a procedure. It is a response to a
                    specific condition, goal, symptom, or risk. Understanding the cause
                    of a problem is often just as important as choosing the treatment
                    itself.
                </p>

                <p className="text-body text-[15px] md:text-[16px] font-light leading-[1.75]">
                    A toothache may come from decay, infection, gum inflammation, a
                    cracked tooth, or bite pressure. A cosmetic concern may involve tooth
                    color, shape, spacing, wear, or alignment. A missing tooth can affect
                    chewing, surrounding teeth, jaw balance, and smile confidence.
                </p>

                <p className="text-body text-[15px] md:text-[16px] font-light leading-[1.75]">
                    That is why Dr. Shriya evaluates your teeth, gums, bite, smile,
                    medical history, and treatment goals before recommending the next
                    step. This helps patients understand whether their care is
                    preventive, cosmetic, restorative, surgical, urgent, or part of a
                    long-term plan.
                </p>

                <p className="text-body text-[15px] md:text-[16px] font-light leading-[1.75]">
                    Our goal is to provide treatment that is clear, comfortable, and
                    connected to your overall oral health — helping you make confident
                    decisions about your smile.
                </p>
                </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}