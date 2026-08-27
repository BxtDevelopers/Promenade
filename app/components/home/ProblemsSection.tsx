'use client';

import { useScrollReveal } from '@/app/lib/useScrollReveal';

const PROBLEMS = [
  {
    symptom: 'Tooth pain',
    description: 'Persistent or sharp pain can signal decay, infection, or a cracked tooth — all treatable when caught early.',
    href: '/services/emergency-dentistry',
    urgent: true,
  },
  {
    symptom: 'Chipped or broken tooth',
    description: 'A chip or fracture can be repaired with bonding, a crown, or a veneer depending on the size and location.',
    href: '/services/restorative-dentistry',
    urgent: false,
  },
  {
    symptom: 'Missing tooth',
    description: 'Missing teeth affect your bite, bone health, and confidence. Implants, bridges, and dentures are all options worth understanding.',
    href: '/services/restorative-dentistry',
    urgent: false,
  },
  {
    symptom: 'Bleeding gums',
    description: 'Gums that bleed when you brush or floss often signal early gum disease — which is very manageable with the right care.',
    href: '/services/family-dentistry',
    urgent: false,
  },
  {
    symptom: 'Tooth sensitivity',
    description: 'Sensitivity to hot, cold, or sweets can have several causes. A quick exam usually identifies the source and the fix.',
    href: '/services/restorative-dentistry',
    urgent: false,
  },
  {
    symptom: 'Stained or yellowed teeth',
    description: 'Professional whitening or veneers can dramatically brighten your smile in one or two visits.',
    href: '/services/cosmetic-dentistry',
    urgent: false,
  },
  {
    symptom: 'Swelling in the mouth or jaw',
    description: 'Swelling often means infection that needs prompt attention. Call us the same day.',
    href: '/services/emergency-dentistry',
    urgent: true,
  },
  {
    symptom: 'Loose or lost crown or filling',
    description: 'Don\'t wait — exposed teeth can become sensitive or decay quickly. We\'ll get you in as soon as possible.',
    href: '/services/emergency-dentistry',
    urgent: true,
  },
] as const;

export default function ProblemsSection() {
  const [leadRef, leadIn] = useScrollReveal();

  return (
    <section className="py-section">
      <div className="lg:px-site max-w-[90%] mx-auto">

        {/* Lead */}
        <div
          ref={leadRef as React.RefObject<HTMLDivElement>}
          className={[
            'max-w-[640px] mb-12',
            'transition-all duration-1000 ease-out',
            leadIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ].join(' ')}
        >
          <span className="inline-block text-[11.5px] font-medium tracking-eyebrow uppercase text-accent font-sans mb-4">
            Problems We Treat
          </span>
          <h2 className="font-serif font-light text-3xl lg:text-[clamp(40px,4.6vw,80px)] leading-[1.05] tracking-[-0.02em] text-ink">
            Does something{' '}
            <em className="not-italic text-accent">feel off</em>?
          </h2>
          <p className="text-body text-[15px] md:text-[16px] font-light leading-[1.75] mt-5">
            Patients don't always know the name for what they're experiencing. Here are the most common concerns we see — and what can be done about them.
          </p>
        </div>

        {/* Problem grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[14px]">
          {PROBLEMS.map((p, i) => (
            <ProblemCard key={p.symptom} problem={p} delay={i * 0.06} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProblemCard({
  problem,
  delay,
}: {
  problem: (typeof PROBLEMS)[number];
  delay: number;
}) {
  const [ref, inView] = useScrollReveal();

  return (
    <a
      ref={ref as React.RefObject<HTMLAnchorElement>}
      href={problem.href}
      className="group relative flex flex-col gap-3 rounded-[18px] border border-line bg-ink/[0.02] px-5 pt-5 pb-6 transition-all duration-[400ms] ease-out hover:border-coral/40 hover:bg-coral/5 hover:-translate-y-[3px]"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? undefined : 'translateY(24px)',
        transitionDelay: `${delay}s`,
      }}
    >
      {/* Urgent badge */}
      {problem.urgent && (
        <span className="absolute top-4 right-4 text-[10px] tracking-[0.1em] uppercase text-accent border border-coral/30 rounded-full px-2 py-0.5">
          Urgent
        </span>
      )}

      <h3 className="font-serif text-[18px] lg:text-[20px] text-ink group-hover:text-accent transition-colors pr-10">
        {problem.symptom}
      </h3>
      <p className="text-body text-[13.5px] font-light leading-[1.65] flex-1">
        {problem.description}
      </p>
      <span className="text-accent text-[13px] font-light tracking-[0.02em] underline underline-offset-4 decoration-coral/40 group-hover:decoration-coral transition-colors">
        See how we help →
      </span>
    </a>
  );
}

