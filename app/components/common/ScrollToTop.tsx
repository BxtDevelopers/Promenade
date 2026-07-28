'use client';

import { ArrowUp } from 'lucide-react';
import { useEffect, useState, useCallback } from 'react';

export default function ScrollToTop({ threshold = 480 }: { threshold?: number }) {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(scrolled > threshold);
      setProgress(max > 0 ? Math.min(scrolled / max, 1) : 0);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  const handleClick = useCallback(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  }, []);

  // Ring math: 40px button, 2px stroke, radius 18
  const r = 18;
  const circumference = 2 * Math.PI * r;
  const offset = circumference * (1 - progress);

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Scroll back to top"
      className={[
        'fixed z-40 flex items-center justify-center w-11 h-11 rounded-full cursor-pointer',
        'bg-bg/90 backdrop-blur-sm border border-coral',
        'transition-all duration-300 ease-out hover:-translate-y-0.5',
        'bottom-[70px] right-[22px] md:bottom-[30px] md:right-[30px]',
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-3 pointer-events-none',
      ].join(' ')}
    >
        {/* <svg width="40" height="40" viewBox="0 0 40 40" className="absolute inset-0 -rotate-90">
          <circle cx="20" cy="20" r={r} fill="none" stroke="rgba(244,236,221,0.12)" strokeWidth="2" />
          <circle
            cx="20"
            cy="20"
            r={r}
            fill="none"
            stroke="#e89a72"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: 'stroke-dashoffset 120ms linear' }}
          />
        </svg> */}
      <ArrowUp className="w-5 h-5 text-ink relative" />
    </button>
  );
}