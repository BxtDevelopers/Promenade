// 'use client';

// import { useScrollReveal } from "@/app/lib/useScrollReveal";

// const META = [
//   {
//     title: 'Unhurried by design',
//     body: 'One dentist, real time in the chair, and a pace that never rushes you. We listen first, treat second.',
//   },
//   {
//     title: 'Artistry meets science',
//     body: 'Modern technology and a careful aesthetic eye — for results that look entirely, naturally yours.',
//   },
//   {
//     title: 'Comfort, considered',
//     body: 'Soft light, warm tones, and small touches throughout. Even nervous visits feel like a breath out.',
//   },
//   {
//     title: 'For the whole family',
//     body: 'From a child\u2019s first visit to a complete smile makeover \u2014 beautiful smiles for all ages, in one calm place.',
//   },
// ] as const;

// export default function Intro() {
//   const [leadRef, leadIn] = useScrollReveal();

//   return (
//     <section className="py-intro">
//       <div className="px-site max-w-[1240px] mx-auto">

//         {/* Lead */}
//         <p
//           ref={leadRef as React.RefObject<HTMLParagraphElement>}
//           className={[
//             'font-serif font-light text-3xl lg:text-[clamp(40px,4.6vw,80px)] leading-[1.3] tracking-[-0.01em] text-ivory-2',
//             'max-w-[20ch]',
//             'transition-all duration-1000 ease-out',
//             leadIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
//           ].join(' ')}
//         >
//           Care that feels less like a clinic, and more like being{' '}
//           <em className="not-italic text-coral">looked after</em>.
//         </p>

//         {/* 2-col meta grid — stacked on mobile, 2-col on md+ */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[60px] gap-y-8 mt-12 md:mt-16 max-w-[760px]">
//           {META.map((item, i) => (
//             <MetaCard key={item.title} item={item} delay={i * 0.09} />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

// function MetaCard({
//   item,
//   delay,
// }: {
//   item: { title: string; body: string };
//   delay: number;
// }) {
//   const [ref, inView] = useScrollReveal();
//   return (
//     <div
//       ref={ref as React.RefObject<HTMLDivElement>}
//       className="transition-all duration-1000 ease-out"
//       style={{
//         opacity: inView ? 1 : 0,
//         transform: inView ? 'none' : 'translateY(34px)',
//         transitionDelay: `${delay}s`,
//       }}
//     >
//       <h4 className="font-serif font-normal text-[19px] mb-[10px] text-ivory">
//         {item.title}
//       </h4>
//       <p className="text-muted text-[15px] font-light leading-[1.7]">{item.body}</p>
//     </div>
//   );
// }

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
    <section className="py-section border-t border-line">
      <div className="px-site max-w-[90%] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[clamp(48px,6vw,96px)] items-center">

          {/* ── Image — left on desktop, top on mobile ── */}
          <motion.div
            {...fadeUp(0)}
            className="relative w-full max-w-[540px] mx-auto lg:max-w-none order-1 lg:order-1"
            style={{ aspectRatio: '0.9' }}
          >
            {/* Main image */}
            <div className="absolute inset-0 rounded-arch-sm overflow-hidden">
              <img
                src="/assets/dr-shriya.jpeg"
                alt="Dr. Shriya Verma examining a patient at Promenade Dental, Chandler AZ"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating pill — bottom left */}
            <motion.div
              {...fadeUp(0.35)}
              className={[
                'absolute bottom-5 left-5',
                'bg-navy/80 backdrop-blur-sm',
                'border border-line rounded-2xl',
                'px-5 py-4',
              ].join(' ')}
            >
              <p className="text-coral text-[11px] tracking-wide3 uppercase font-medium mb-1">
                One dentist. Always.
              </p>
              <p className="text-ivory text-[13px] font-light leading-snug max-w-[22ch]">
                Every visit, Dr. Shriya — no rotating associates.
              </p>
            </motion.div>
          </motion.div>

          {/* ── Copy — right on desktop, below on mobile ── */}
          <motion.div
            {...fadeUp(0.1)}
            className="order-2 lg:order-2"
          >
            {/* Eyebrow */}
            <p className="text-coral text-[11px] md:text-[12px] tracking-wide3 uppercase font-medium mb-4">
              Our Approach
            </p>

            {/* Heading */}
            <h2
              className="font-serif font-light text-3xl
              lg:text-[clamp(40px,4.6vw,80px)]  leading-[1.05] tracking-[-0.02em] text-ivory"
            >
              Dental care built around{' '}
              <em className="not-italic text-coral">one dentist,</em>
              <br />
              one patient, one smile
              <br />
              at a time.
            </h2>

            {/* Body copy — three paragraphs from the brief */}
            <div className="mt-6 md:mt-7 space-y-4">
              <p className="text-muted text-[15px] md:text-[16px] font-light leading-[1.75]">
                At Promenade Dental, dentistry begins with understanding the
                person behind the smile. Some patients visit us for routine exams
                and cleanings. Others come in because of tooth pain, a broken
                tooth, bleeding gums, missing teeth, or cosmetic concerns. Many
                are simply looking for a dentist in Chandler who can care for the
                whole family with patience and consistency.
              </p>
              <p className="text-muted text-[15px] md:text-[16px] font-light leading-[1.75]">
                Dr. Shriya takes time to examine your teeth, gums, bite, smile,
                and dental history before recommending care — identifying what is
                urgent, what can be prevented, what can be improved, and what
                needs long-term planning.
              </p>
              <p className="text-muted text-[15px] md:text-[16px] font-light leading-[1.75]">
                Our goal is simple: help you keep your natural teeth healthy,
                restore what has been damaged, improve the appearance of your
                smile when desired, and make every visit feel clear, comfortable,
                and respectful.
              </p>
            </div>

            {/* Divider */}
            <div className="mt-8 md:mt-10 pt-7 md:pt-8 border-t border-line">
              <Link
                href="/about"
                className={[
                  'inline-flex items-center gap-3',
                  'rounded-full border border-ivory/20',
                  'px-6 py-3',
                  'text-ivory text-[13px] font-medium tracking-nav',
                  'hover:border-ivory/60 hover:bg-ivory/5',
                  'transition-all duration-300',
                ].join(' ')}
              >
                Meet Dr. Shriya
                {/* Arrow */}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="text-coral"
                  aria-hidden="true"
                >
                  <path
                    d="M2 7h10M8 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}