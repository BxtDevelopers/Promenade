// 'use client';

// import { useScrollReveal } from '@/app/lib/useScrollReveal';

// const STEPS = [
//   {
//     n: '01',
//     title: 'Book your visit',
//     body: 'Request an appointment online or call us at (480) 802-8188. New patients are always welcome — no referral needed.',
//     cta: { label: 'Book Online', href: '#book' },
//   },
//   {
//     n: '02',
//     title: 'We review your history',
//     body: "We'll take time to understand your dental health, concerns, and goals — then perform a thorough exam with digital imaging if needed.",
//     cta: null,
//   },
//   {
//     n: '03',
//     title: 'Walk away with a clear plan',
//     body: "Dr. Shriya explains what's urgent, what's preventive, and what's optional — no pressure, no surprises. You leave knowing exactly what comes next.",
//     cta: null,
//   },
// ] as const;

// export default function NewPatientFlow() {
//   const [leadRef, leadIn] = useScrollReveal();

//   return (
//     <section className="py-section bg-panel">
//       <div className="lg:px-site max-w-[90%] mx-auto">

//         {/* Lead */}
//         <div
//           ref={leadRef as React.RefObject<HTMLDivElement>}
//           className={[
//             'mb-14 max-w-[640px]',
//             'transition-all duration-1000 ease-out',
//             leadIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
//           ].join(' ')}
//         >
//           <span className="inline-block text-[11.5px] font-medium tracking-eyebrow uppercase text-coral font-sans mb-4">
//             Your First Visit
//           </span>
//           <h2 className="font-serif font-light text-3xl lg:text-[clamp(40px,4.6vw,80px)] leading-[1.05] tracking-[-0.02em] text-ivory">
//             Starting at Promenade is{' '}
//             <em className="not-italic text-coral">simple</em>.
//           </h2>
//         </div>

//         {/* Steps */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[30px] relative">
//           {STEPS.map((step, i) => (
//             <StepCard 
//               key={step.n} 
//               step={step} 
//               delay={i * 0.12} 
//               isLast={i === STEPS.length - 1} 
//             />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

// function StepCard({
//   step,
//   delay,
//   isLast,
// }: {
//   step: (typeof STEPS)[number];
//   delay: number;
//   isLast: boolean;
// }) {
//   const [ref, inView] = useScrollReveal();

//   return (
//     <div
//       ref={ref as React.RefObject<HTMLDivElement>}
//       className="relative z-[1] transition-all duration-1000 ease-out"
//       style={{
//         opacity: inView ? 1 : 0,
//         transform: inView ? 'none' : 'translateY(28px)',
//         transitionDelay: `${delay}s`,
//       }}
//     >
//       {/* Desktop connecting line (Attached to the card, disabled on the last item) */}
//       {!isLast && (
//         <div 
//           className="hidden md:block absolute top-[22px] left-[44px] w-[calc(100%-44px+30px)] h-px border-t border-dashed border-line -z-10" 
//           aria-hidden="true" 
//         />
//       )}

//       {/* Step number bubble */}
//       <div className="flex items-center gap-4 mb-5">
//         <span className="w-11 h-11 rounded-full border border-coral/30 bg-panel flex items-center justify-center font-serif text-[14px] text-coral shrink-0 relative z-10">
//           {step.n}
//         </span>
        
//         {/* Mobile connecting line (Disabled on the last item so it doesn't point to nowhere) */}
//         {!isLast && (
//           <div className="md:hidden flex-1 h-px border-t border-dashed border-line" />
//         )}
//       </div>

//       <h3 className="font-serif font-normal text-[clamp(20px,2vw,24px)] text-ivory mb-3">
//         {step.title}
//       </h3>

//       <p className="text-muted text-[14.5px] font-light leading-[1.75]">
//         {step.body}
//       </p>

//       {step.cta && (
//         <a
//           href={step.cta.href}
//           className="inline-flex items-center gap-2 mt-5 text-[13.5px] text-coral font-light tracking-[0.02em] underline underline-offset-4 decoration-coral/40 hover:decoration-coral transition-colors"
//         >
//           {step.cta.label} →
//         </a>
//       )}
//     </div>
//   );
// }

const steps = [
  {
    num:   '01',
    title: 'Book',
    desc:  'Call or request online. New patients are always welcome, and emergencies are seen same-day.',
  },
  {
    num:   '02',
    title: 'We listen & review',
    desc:  'We go over your history and what`s bothering you, then examine carefully — no rushing, no judgment.',
  },
  {
    num:   '03',
    title: 'Leave with a clear plan',
    desc:  'You`ll know exactly what`s urgent, what can wait, and what it costs — before anything is decided.',
  },
]

export default function NewPatientFlow() {
  return (
    <section id="new-patients" className="py-[clamp(74px,8vw,120px)]">
      <div className="mx-auto max-w-[1240px] px-[clamp(22px,4vw,60px)]">

        {/* Head */}
        <div className="rv mb-0">
          <span className="text-[11.5px] tracking-[0.32em] uppercase font-medium text-coral">
            Your first visit
          </span>
          <h2 className="font-serif font-light tracking-[-0.02em] leading-[1.05] text-ivory mt-2 text-[clamp(30px,4vw,52px)]">
            Simple from{' '}
            <em className="italic text-coral">the start</em>.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid mt-[50px] gap-[clamp(28px,4vw,56px)] grid-cols-1 md:grid-cols-3">
          {steps.map((s, i) => (
            <div 
              key={s.num} 
              className="rv relative" 
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Arrow connector between steps */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-[6px] w-[13px] h-[13px] right-[-28px] border-t-[1.5px] border-r-[1.5px] border-t-coral border-r-coral rotate-45 opacity-50" />
              )}

              <span className="font-serif text-[14px] tracking-[0.14em] text-coral">
                {s.num}
              </span>
              <h3 className="font-serif font-normal text-ivory mt-[14px] mb-[14px] text-[clamp(22px,2.5vw,30px)]">
                {s.title}
              </h3>
              <p className="text-[15px] font-light leading-[1.72] text-muted max-w-[32ch]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}