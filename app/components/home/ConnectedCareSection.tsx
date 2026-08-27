'use client';

import React from 'react';
import { Crown, Moon, Sparkles, Anchor, Search, ArrowRight } from 'lucide-react';

const CONNECTIONS = [
  {
    icon: Crown,
    label: 'Crown',
    detail: 'Protects a weakened tooth',
  },
  {
    icon: Moon,
    label: 'Night Guard',
    detail: 'Prevents future damage',
  },
  {
    icon: Sparkles,
    label: 'Whitening',
    detail: 'Planned once gums are stable',
  },
  {
    icon: Anchor,
    label: 'Implant',
    detail: 'Keeps surrounding teeth from shifting',
  },
  {
    icon: Search,
    label: 'Cleaning',
    detail: 'Catches early signs before symptoms appear',
  },
];

export default function ConnectedCareSection() {
  return (
    <section className="py-section bg-bg">
      <div className="lg:px-site max-w-[90%] mx-auto">

        {/* Heading + intro */}
        <div className="text-center">
          <h2 className="font-serif font-light text-3xl lg:text-[clamp(40px,4.6vw,80px)] leading-[1.05] tracking-[-0.02em] text-ink">
            Dentistry That{' '}
            <em className="not-italic text-accent">Connects</em>.
          </h2>

          <div className="mt-6 md:mt-7 space-y-4 lg:max-w-[80%] mx-auto">
            <p className="text-body text-[15px] md:text-[16px] font-light leading-[1.75]">
              A healthy smile is not only about clean teeth. It includes gum
              health, bite stability, tooth strength, jaw comfort, appearance,
              and the ability to eat and speak comfortably.
            </p>
            <p className="text-body text-[15px] md:text-[16px] font-light leading-[1.75]">
              That is why we do not treat dental services as isolated
              procedures. At Promenade Dental, each treatment is connected to
              a larger goal: helping your mouth stay healthy, functional, and
              confident over time.
            </p>
          </div>
        </div>

        {/* Connected flow */}
        <div className="mt-16 md:mt-20">
          <div className="flex flex-col lg:flex-row lg:items-stretch">
            {CONNECTIONS.map((item, i) => {
              const Icon = item.icon;
              const isLast = i === CONNECTIONS.length - 1;
              return (
                <React.Fragment key={item.label}>
                  <div className="flex-1 flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center gap-4 lg:gap-5 py-5 lg:py-0">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/5 border border-line flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-serif font-light text-ink text-[17px] lg:text-lg">
                        {item.label}
                      </h3>
                      <p className="text-body text-[13.5px] font-light leading-[1.6] mt-1 max-w-[200px] lg:mx-auto">
                        {item.detail}
                      </p>
                    </div>
                  </div>

                  {!isLast && (
                    <>
                      {/* connector — desktop horizontal */}
                      <div className="hidden lg:flex items-center justify-center px-3">
                        <span className="block w-10 h-px bg-gradient-to-r from-coral/40 via-line to-line" />
                      </div>
                      {/* connector — mobile vertical */}
                      <div className="lg:hidden flex justify-start pl-6">
                        <span className="block w-px h-6 bg-gradient-to-b from-coral/40 via-line to-line" />
                      </div>
                    </>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Outcome node */}
          <div className="mt-10 lg:mt-16 flex justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-2.5 md:gap-3 rounded-full bg-coral/10 border border-coral/30 px-5 md:px-6 py-3 text-center">
              <span className="text-accent text-[11px] md:text-[12px] font-medium tracking-wide2 uppercase">
                One Connected Goal
              </span>
              <ArrowRight className="w-4 h-4 text-accent shrink-0" strokeWidth={1.5} />
              <span className="text-ink text-[13.5px] md:text-[14px] font-light">
                A healthy, functional, confident smile
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}