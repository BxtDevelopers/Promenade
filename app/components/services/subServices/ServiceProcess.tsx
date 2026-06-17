// components/services/ServiceProcess.tsx
'use client';

import { useScrollReveal } from '@/app/lib/useScrollReveal';

export default function ServiceProcess({
  eyebrow,
  heading,
  subtitle,
  steps,
}: {
  eyebrow: string;
  heading: string;
  subtitle: string;
  steps: { title: string; body: string }[];
}) {
  const [headRef, headIn] = useScrollReveal();

  return (
    <section className="py-24 bg-bg-2">
      <div className="px-site max-w-[1240px] mx-auto">

        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={[
            'flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 transition-all duration-1000 ease-out',
            headIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ].join(' ')}
        >
          <div>
            <span className="inline-block text-[11.5px] font-medium tracking-eyebrow uppercase text-coral mb-4">
              {eyebrow}
            </span>
            <h2 className="font-serif font-light text-3xl lg:text-7xl leading-[1.08] tracking-[-0.02em] text-ivory max-w-lg">
              {heading}
            </h2>
          </div>
          <p className="text-muted text-xl font-light leading-[1.7] max-w-[36ch]">{subtitle}</p>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-[26px] h-px bg-line hidden lg:block" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {steps.map((s, i) => (
              <ProcessStep key={i} step={s} index={i} delay={i * 0.1} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function ProcessStep({
  step,
  index,
  delay,
}: {
  step: { title: string; body: string };
  index: number;
  delay: number;
}) {
  const [ref, inView] = useScrollReveal();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="relative transition-all duration-1000 ease-out"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(28px)',
        transitionDelay: `${delay}s`,
      }}
    >
      <div className="relative z-10 w-[52px] h-[52px] rounded-full bg-bg-2 border border-coral/40 flex items-center justify-center font-serif text-coral text-[17px] mb-6">
        {String(index + 1).padStart(2, '0')}
      </div>
      <h3 className="font-serif font-normal text-xl text-ivory mb-2">{step.title}</h3>
      <p className="text-muted text-md font-light leading-[1.7]">{step.body}</p>
    </div>
  );
}