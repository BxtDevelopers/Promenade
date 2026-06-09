'use client';

import React from 'react';

const row1 = [
  { quote: "Best dental experience I've had — calm, kind, and zero judgment.", by: 'Maya R.' },
  { quote: 'They explained everything and never once made me feel rushed.', by: 'Daniel K.' },
  { quote: 'My kids actually ask to go to the dentist now.', by: 'Priya S.' },
  { quote: 'Booked online, seen the same week, totally painless visit.', by: 'Marcus T.' },
  { quote: 'Takes my insurance and my anxiety seriously. Rare combo.', by: 'Elena G.' },
];

const row2 = [
  { quote: 'Gentle, thorough, and genuinely lovely people.', by: 'Rachel B.' },
  { quote: 'The office is beautiful and the care matches it.', by: 'Omar F.' },
  { quote: 'Walked in nervous, left smiling. Highly recommend.', by: 'Sara N.' },
  { quote: 'Honest about what I actually needed — no upselling.', by: 'Trevor W.' },
  { quote: "The whole family goes here now. Couldn't be happier.", by: 'The Patels' },
];

export default function Testimonials() {
  return (
    <section className="py-[clamp(80px,9vw,140px)] overflow-hidden">
      {/* <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .marquee {
          animation: marquee 42s linear infinite;
        }

        .marquee-reverse {
          animation: marquee 52s linear infinite reverse;
        }

        .marquee:hover,
        .marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style> */}

      <div className="max-w-[1240px] mx-auto px-[clamp(22px,4vw,60px)]">
        <span className="block mb-[50px] text-[11.5px] tracking-[0.32em] uppercase font-medium text-coral">
          Straight from the chair
        </span>

        <h2
          className="
            font-serif
            font-light
            text-3xl
            lg:text-[clamp(40px,4.6vw,80px)]
            leading-[1.04]
            tracking-[-0.02em]
            text-ivory
          "
        >
          Patients don&apos;t usually rave about the dentist 
          <em className="italic text-coral"> Ours do.</em>
        </h2>
      </div>

      <MarqueeRow
        chips={row1}
        direction="forward"
        delay="clamp(40px,5vw,64px)"
      />

      <MarqueeRow
        chips={row2}
        direction="reverse"
        delay="18px"
      />
    </section>
  );
}

function MarqueeRow({
  chips,
  direction,
  delay,
}: {
  chips: { quote: string; by: string }[];
  direction: 'forward' | 'reverse';
  delay: string;
}) {
  const doubled = [...chips, ...chips];

  return (
    <div
      className="overflow-hidden marquee-mask"
      style={{ marginTop: delay }}
    >
      <div
        className={`flex gap-[18px] w-max ${
          direction === 'reverse'
            ? 'marquee-reverse'
            : 'marquee'
        }`}
      >
        {doubled.map((c, i) => (
          <div
            key={i}
            className="
              shrink-0
              w-[min(390px,82vw)]
              border
              border-line
              rounded-[20px]
              px-[26px]
              py-[24px]
            "
            style={{
              background:
                'linear-gradient(180deg, rgba(244,236,221,0.03), transparent)',
            }}
          >
            <div
              className="mb-3 text-[12px]"
              style={{
                color: '#FBBF24',
                letterSpacing: '3px',
              }}
            >
              ★★★★★
            </div>

            <p
              className="
                font-serif
                font-light
                text-[18px]
                leading-[1.45]
                text-ivory-2
              "
            >
              &ldquo;{c.quote}&rdquo;
            </p>

            <cite
              className="
                block
                mt-[14px]
                not-italic
                text-muted
                text-[12px]
                uppercase
              "
              style={{
                letterSpacing: '0.08em',
              }}
            >
              — {c.by}
            </cite>
          </div>
        ))}
      </div>
    </div>
  );
}