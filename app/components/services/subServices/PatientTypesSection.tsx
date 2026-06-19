'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PatientType {
  title: string;
  description: string;
}

interface PatientTypesProps {
  data: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: PatientType[];
  };
}

export default function PatientTypesSection({ data }: PatientTypesProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /* ── Only run horizontal GSAP scroll on non-touch / md+ screens ── */
    const mq = window.matchMedia('(min-width: 768px)');
    if (!mq.matches) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current!;
      const totalWidth = track.scrollWidth - sectionRef.current!.offsetWidth + 200;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: `+=${totalWidth + 400}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(trackRef.current, { x: -totalWidth, ease: 'none' });

      /* Progress line */
      tl.to(lineRef.current, { scaleX: 1, ease: 'none' }, 0);

      /* Card stagger fade-in */
      gsap.utils.toArray<HTMLElement>('.patient-card').forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0.25, scale: 0.93, y: 16 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              containerAnimation: tl,
              start: 'left 80%',
              end: 'left 40%',
              scrub: true,
            },
          }
        );
      });

      /* Header reveal */
      gsap.fromTo(
        '.patient-header > *',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.14,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.patient-header', start: 'top 80%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-bg overflow-hidden py-section"
    >
      {/* Radial coral glow */}
      <div className="absolute inset-x-0 top-0 h-[420px] pointer-events-none bg-[radial-gradient(60%_40%_at_50%_0%,rgba(232,154,114,0.09),transparent_70%)]" />

      {/* ── Header + Progress Line ── */}
      <div className="px-site max-w-[90%] mx-auto relative z-10 mb-8 md:mb-12">
        <div className="patient-header flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-12 mb-10 md:mb-14">
          <div>
            <span className="inline-block text-[11.5px] font-medium tracking-eyebrow uppercase text-coral font-sans mb-3 md:mb-4">
              {data.eyebrow}
            </span>
            <h2 className="font-serif font-light text-3xl lg:text-7xl leading-[1.08] tracking-[-0.02em] text-ivory">
              {data.heading}
            </h2>
          </div>
          <p className="text-muted font-sans font-light text-[15px] md:text-[16px] max-w-[50%] leading-[1.7]">
            {data.intro}
          </p>
        </div>

        {/* Progress line — GSAP animated on desktop */}
        <div className="relative h-px w-full bg-line overflow-hidden hidden md:block">
          <div
            ref={lineRef}
            className="absolute left-0 top-0 h-full w-full origin-left bg-gradient-to-r from-coral to-coral-deep"
            style={{ transform: 'scaleX(0)' }}
          />
        </div>
      </div>

      {/* ── Desktop GSAP Track ── */}
      <div
        ref={trackRef}
        className="hidden md:flex gap-6 pl-[5%] pr-40 relative z-10"
        style={{ width: 'max-content' }}
      >
        {data.items.map((item, index) => (
          <PatientTypeCard key={index} item={item} index={index} />
        ))}

        {/* End cap */}
        {/* <div className="flex-shrink-0 w-24 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-coral/10 border border-coral/40 flex items-center justify-center">
            <svg className="w-5 h-5 text-coral" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 10h12M12 6l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div> */}
      </div>

      {/* ── Mobile Vertical Grid ── */}
      <div className="md:hidden px-site max-w-[1240px] mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {data.items.map((item, index) => (
            <PatientTypeCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Individual Card Component ── */
function PatientTypeCard({
  item,
  index,
}: {
  item: PatientType;
  index: number;
}) {
  const step = String(index + 1).padStart(2, '0');

  return (
    <div className="patient-card group relative flex-shrink-0 w-full sm:w-80 md:w-[22rem]">
      
      {/* Step dot + number (External to card) */}
      <div className="flex items-center gap-3 mb-5 md:mb-6">
        <div className="w-4 h-4 rounded-full bg-coral ring-4 ring-coral/20 shrink-0 transition-transform duration-300 group-hover:scale-125" />
        <span className="font-serif font-light text-[42px] md:text-[48px] leading-none text-ivory/25 tracking-tight">
          {step}
        </span>
      </div>

      {/* Card Body */}
      <div
        className={[
          'relative rounded-[22px] p-6 md:p-8 h-auto md:h-[260px] flex flex-col',
          'border border-line bg-bg-2',
          'transition-all duration-[400ms] ease-out',
          'group-hover:-translate-y-2 group-hover:border-coral/35',
          'group-hover:shadow-[0_32px_64px_-24px_rgba(0,0,0,0.7)]',
          'coral-underline', // Reused your global class for the animated bottom line
        ].join(' ')}
      >
        <div className="mt-2 md:mt-4">
          <h3 className="font-serif font-normal text-[20px] md:text-[22px] text-ivory leading-snug mb-3">
            {item.title}
          </h3>
          <p className="text-muted font-sans font-light text-[14.5px] md:text-[15px] leading-[1.7]">
            {item.description}
          </p>
        </div>
      </div>

      {/* Hover Step Badge */}
      <div className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-coral flex items-center justify-center text-bg text-[11px] font-semibold font-sans shadow-btn opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {step}
      </div>
      
    </div>
  );
}