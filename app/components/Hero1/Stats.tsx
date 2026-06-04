"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 5000, suffix: "+", label: "Happy Patients" },
  { value: 15, suffix: "+", label: "Years of Excellence" },
  { value: 98, suffix: "%", label: "Patient Satisfaction" },
  { value: 12, suffix: "", label: "Expert Specialists" },
];

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatItem({ value, suffix, label, start }: { value: number; suffix: string; label: string; start: boolean }) {
  const count = useCountUp(value, 1800, start);
  return (
    <div className="flex flex-col items-center gap-2 px-8 py-8 relative">
      <span className="text-4xl md:text-5xl lg:text-6xl font-semibold font-['Poppins'] text-[#1A365D]">
        {count.toLocaleString()}{suffix}
      </span>
      <span className="text-[15px] font-['Poppins'] text-[#64748B] tracking-wide font-medium">{label}</span>
    </div>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-[#fdfaf5] border-y border-gray-100 shadow-lg shadow-gray-200 z-10 mb-6">
      <div className="w-[95%] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-100 ">
          {stats.map((stat, i) => (
            <StatItem key={i} {...stat} start={visible} />
          ))}
        </div>
      </div>
    </div>
  );
}