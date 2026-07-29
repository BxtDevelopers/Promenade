'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  CalendarCheck,
  ClipboardList,
  Stethoscope,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const MILESTONES = [
  {
    step: '01',
    tag: 'Book',
    title: 'Reserve Your Visit',
    body: 'Call, click, or walk in. New patients are always welcome — same-week appointments available for most requests, and same-day for emergencies.',
    icon: CalendarCheck,
  },
  {
    step: '02',
    tag: 'Arrive',
    title: 'A Warm Welcome',
    body: 'No clipboards in the waiting room. You’re greeted by name, offered a seat in a calm space, and given time — not a number.',
    icon: ClipboardList,
  },
  {
    step: '03',
    tag: 'Consult',
    title: 'We Listen First',
    body: 'Before anything else, your dentist sits with you. Your history, your concerns, your goals — in plain language, no rush, no pressure.',
    icon: Stethoscope,
  },
  {
    step: '04',
    tag: 'Treat',
    title: 'Gentle, Precise Care',
    body: 'Modern technology, steady hands, and a pace set by you. Every step explained as we go — you’re always in control.',
    icon: Sparkles,
  },
  {
    step: '05',
    tag: 'Follow Up',
    title: 'Your Plan, Not Ours',
    body: 'After treatment you leave with a clear picture of what’s next — honest recommendations, realistic timelines, and zero upselling.',
    icon: ShieldCheck,
  },
  {
    step: '06',
    tag: 'Long Term',
    title: 'A Relationship, Not a Record',
    body: 'We remember your name, your family, and your smile. Most of our patients have been with us for years — and bring their kids in too.',
    icon: HeartHandshake,
  },
] as const;


export default function PatientJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef   = useRef<HTMLDivElement>(null);
  const lineRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /* ── Only run horizontal GSAP scroll on non-touch / md+ screens ── */
    const mq = window.matchMedia('(min-width: 768px)');
    if (!mq.matches) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current!;
      const totalWidth =
        track.scrollWidth - sectionRef.current!.offsetWidth + 200;

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
      gsap.utils.toArray<HTMLElement>('.journey-card').forEach((card) => {
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
        '.journey-header > *',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.14,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.journey-header', start: 'top 80%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="patient-journey"
      className="relative bg-bg overflow-hidden"
      
    >
      {/* Radial coral glow */}
      <div className="absolute inset-x-0 top-0 h-[420px] pointer-events-none bg-[radial-gradient(60%_40%_at_50%_0%,rgba(232,154,114,0.09),transparent_70%)]" />

      {/* ── Header + progress line ── */}
      <div className="px-site max-w-[1240px] mx-auto pt-16 md:pt-24 pb-8 relative z-10">

        <div className="journey-header mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6">
          <div>
            <span className="inline-block text-[11.5px] font-medium tracking-eyebrow uppercase text-coral font-sans mb-3 md:mb-4">
              Your Experience
            </span>
            <h2 className="font-serif font-light text-3xl
            lg:text-[clamp(40px,4.6vw,80px)] leading-[1.04] tracking-[-0.025em] text-ink">
              From first call<br />
              to <em className="not-italic text-coral">lasting smile</em>.
            </h2>
          </div>
          <p className="text-muted font-sans font-light text-[15px] md:text-[16px] max-w-[38ch] leading-[1.7]">
            Six moments that define every visit — and why patients keep coming back.
          </p>
        </div>

        {/* Progress line — only meaningful on desktop where GSAP animates it */}
        <div className="relative h-px w-full bg-line mb-10 md:mb-12 overflow-hidden hidden md:block">
          <div
            ref={lineRef}
            className="absolute left-0 top-0 h-full w-full origin-left bg-gradient-to-r from-coral to-coral-deep"
            style={{ transform: 'scaleX(0)' }}
          />
        </div>

      </div>

      {/* ── Card track ──────────────────────────────────────────
          Desktop: horizontal flex, width:max-content, GSAP translates it
          Mobile:  normal block flow, cards stack vertically in a grid
      ─────────────────────────────────────────────────────── */}

      {/* DESKTOP track */}
      <div
        ref={trackRef}
        className="hidden md:flex gap-6 pl-[5%] pr-40  relative z-10"
        style={{ width: 'max-content' }}
      >
        {MILESTONES.map((m, i) => (
          <JourneyCard key={m.step} m={m} i={i} />
        ))}

        {/* End cap */}
        <div className="flex-shrink-0 w-24 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-coral/10 border border-coral/40 flex items-center justify-center">
            <svg className="w-5 h-5 text-coral" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 10h12M12 6l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* MOBILE grid — vertical stacked cards, no GSAP */}
      <div className="md:hidden px-site max-w-[1240px] mx-auto pb-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {MILESTONES.map((m, i) => (
            <JourneyCard key={m.step} m={m} i={i} />
          ))}
        </div>
      </div>

    </section>
  );
}

/* ── Shared card — used in both desktop track and mobile grid ── */
function JourneyCard({
  m,
  i,
}: {
  m: (typeof MILESTONES)[number];
  i: number;
}) {
  const Icon = m.icon;
  return (
    <div className="journey-card group relative flex-shrink-0 w-full sm:w-80 md:w-[22rem]">

      {/* Step dot + number */}
      <div className="flex items-center gap-3 mb-5 md:mb-6">
        <div className="w-4 h-4 rounded-full bg-coral ring-4 ring-coral/20 shrink-0 transition-transform duration-300 group-hover:scale-125" />
        <span className="font-serif font-light text-[42px] md:text-[48px] leading-none text-ink/25 tracking-tight">
          {m.step}
        </span>
      </div>

      {/* Card body */}
      <div
        className={[
          'relative rounded-[22px] p-6 md:p-8 h-auto md:h-[272px] flex flex-col justify-between',
          'border border-line bg-bg-2',
          'transition-all duration-[400ms] ease-out',
          'group-hover:-translate-y-2 group-hover:border-coral/35',
          'group-hover:shadow-[0_32px_64px_-24px_rgba(0,0,0,0.7)]',
          'after:absolute after:bottom-0 after:left-7 after:right-7 after:h-[1.5px] after:bg-coral',
          'after:origin-left after:scale-x-0 after:transition-transform after:duration-500',
          'group-hover:after:scale-x-100',
        ].join(' ')}
      >
        {/* Icon + tag row */}
        <div className="flex items-start justify-between mb-4">
          <div className="inline-flex items-center justify-center w-[48px] h-[48px] md:w-[52px] md:h-[52px] rounded-2xl bg-coral/10 shrink-0">
            <Icon className="w-5 h-5 md:w-6 md:h-6 text-coral" />
          </div>
          <span className="text-[10.5px] tracking-eyebrow uppercase font-medium text-coral/60 font-sans mt-1">
            {m.tag}
          </span>
        </div>

        <div>
          <h3 className="font-serif font-normal text-[18px] md:text-[20px] text-ink leading-snug mb-2 md:mb-3">
            {m.title}
          </h3>
          <p className="text-muted font-sans font-light text-[13.5px] md:text-[14px] leading-[1.7]">
            {m.body}
          </p>
        </div>
      </div>

      {/* Hover step badge */}
      <div className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-coral flex items-center justify-center text-bg text-[11px] font-semibold font-sans shadow-btn opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {m.step}
      </div>

    </div>
  );
}