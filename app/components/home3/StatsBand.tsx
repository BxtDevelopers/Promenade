'use client'

import { useEffect, useRef } from 'react'
import { useGoogleReviews } from "@/app/context/GoogleReviewsContext";

interface Stat {
  to?: number
  dec?: number
  suffix?: string
  text?: string
  label: string
}


function CountUp({
  to,
  dec = 0,
  suffix = "",
  text,
}: Omit<Stat, "label">) {
  const ref = useRef<HTMLSpanElement>(null);
  const ran = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || text) return;

    // Reset when the value changes
    ran.current = false;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const animate = () => {
      if (ran.current) return;

      ran.current = true;

      if (reduce) {
        el.textContent = `${(to ?? 0).toFixed(dec)}${suffix}`;
        return;
      }

      let start: number | null = null;

      const step = (time: number) => {
        if (!start) start = time;

        const progress = Math.min((time - start) / 1400, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        el.textContent = `${((to ?? 0) * eased).toFixed(dec)}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = `${(to ?? 0).toFixed(dec)}${suffix}`;
        }
      };

      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
        }
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [to, dec, suffix, text]);

  if (text) {
    return (
      <span className="block font-serif font-light text-accent leading-none tracking-[-0.01em] text-[clamp(30px,3.8vw,46px)] mt-3">
        {text}
      </span>
    );
  }

  return (
    <span
      ref={ref}
      className="block font-serif font-light text-accent leading-none tracking-[-0.01em] text-[clamp(38px,4.8vw,58px)]"
    >
      0
    </span>
  );
}

export default function StatsBand() {
  const { rating, totalReviews, available } = useGoogleReviews();
  // Only claim a rating when we actually have one. Without this guard a failed
  // Places lookup advertises "0.0 average rating" and "0+ Google reviews".
  const stats = [
    { to: 23, suffix: "+", label: "Years in Chandler" },
    ...(available
      ? [
          { to: rating, dec: 1, label: "★ Average rating" },
          { to: totalReviews, suffix: "+", label: "Google reviews" },
        ]
      : []),
    { text: "PPO", label: "Most plans accepted" },
  ];
  return (
    <section
    >
      <div
        className={
          // Static class strings — Tailwind cannot see interpolated names.
          available
            ? "grid mx-auto max-w-[1240px] px-[clamp(22px,4vw,60px)] py-[clamp(40px,5vw,60px)] gap-[24px] grid-cols-2 sm:grid-cols-2 lg:grid-cols-4"
            : "grid mx-auto max-w-[1240px] px-[clamp(22px,4vw,60px)] py-[clamp(40px,5vw,60px)] gap-[24px] grid-cols-2 sm:grid-cols-2 lg:grid-cols-2"
        }
      >
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="rv text-center relative"
            style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
          >
            {/* Show dividers only on large screens when grid is 4 columns */}
            {i < stats.length - 1 && (
              <div
                className="absolute right-[-12px] top-1/2 -translate-y-1/2 w-px h-12 hidden lg:block bg-[rgba(244,236,221,0.14)]"
              />
            )}
            <CountUp to={s.to} dec={s.dec} suffix={s.suffix} text={s.text} />
            <span
              className="block mt-3 text-[11.5px] tracking-[0.15em] uppercase font-medium text-ink"
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}