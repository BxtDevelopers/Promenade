/*
 * Updates applied based on design feedback:
 * - Stats Section & Animation: Fixed the JavaScript counter animation bug using a robust requestAnimationFrame implementation. Redesigned with bold, oversized typography to make the numbers the hero of the section[cite: 4].
 * - Section Differentiation & Hierarchy: Transformed into a "rich dark section" using the navy brand color to create visual rhythm, making it stand out as prime conversion real estate[cite: 4].
 * - Typography: Applied Poppins for titles/numbers to increase size differential and command visual authority, while using DM Sans for the descriptive subtitles[cite: 4].
 * - Whitespace: Established a generous, clear spacing scale for the padding and component gaps[cite: 4].
 */

"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 5000, suffix: "+", label: "Happy Patients", detail: "and counting" },
  { value: 15, suffix: "+", label: "Years of Excellence", detail: "est. 2009" },
  { value: 98, suffix: "%", label: "Patient Satisfaction", detail: "verified reviews" },
  { value: 12, suffix: "", label: "Expert Specialists", detail: "on our team" },
];

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let animationFrameId: number;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutQuart for a smooth, premium deceleration
      const ease = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(ease * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        // Ensure the final value is exactly the target
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [start, target, duration]);

  return count;
}

function Stat({ value, suffix, label, detail, start, index }: {
  value: number; suffix: string; label: string; detail: string; start: boolean; index: number;
}) {
  const count = useCountUp(value, 2500, start);
  
  return (
    <div
      className={`relative flex flex-col items-center text-center px-4 py-12 lg:py-16 group transition-all duration-700 opacity-0 translate-y-8 ${start ? 'opacity-100 translate-y-0' : ''}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Decorative subtle background highlight on hover */}
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500 rounded-3xl" />

      {/* Vertical Divider line — Desktop */}
      {index > 0 && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-24 bg-gradient-to-b from-transparent via-white/15 to-transparent hidden lg:block" />
      )}
      
      {/* Horizontal Divider line — Mobile */}
      {index > 0 && index % 2 === 0 && (
        <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent lg:hidden" />
      )}

      {/* Number (Hero element) */}
      <div className="relative flex items-start justify-center gap-1 mb-4">
        <span className="font-['Poppins'] font-black text-white leading-none text-[clamp(3.5rem,7vw,5.5rem)] tracking-tighter">
          {count.toLocaleString()}
        </span>
        <span className="font-['Poppins'] font-bold text-[#ffa07a] text-[clamp(2rem,4vw,3.5rem)] leading-none -mt-2">
          {suffix}
        </span>
      </div>

      {/* Label (Title) */}
      <span className="font-['Poppins'] font-bold text-white text-[16px] md:text-[18px] tracking-wide mb-2 z-10">
        {label}
      </span>

      {/* Detail (Subtitle) */}
      <span className="font-['DM_Sans'] text-[#FDE8D8]/70 text-[13px] md:text-[14px] tracking-widest uppercase font-medium z-10">
        {detail}
      </span>
    </div>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="stats" ref={ref} className="bg-[#1A365D] relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#ffa07a]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ffa07a]/30 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="w-[92%] max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4 py-8">
          {stats.map((s, i) => (
            <Stat key={i} {...s} start={visible} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}