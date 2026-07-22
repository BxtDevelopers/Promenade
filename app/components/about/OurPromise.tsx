"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const marqueeItems = [
  "Award-Winning Care",
  "✦",
  "5,000+ Smiles",
  "✦",
  "23+ Years Strong",
  "✦",
  "Invisalign Diamond",
  "✦",
  "Same-Day Emergencies",
  "✦",
  "All Insurance Welcome",
  "✦",
];

const commitments = [
  {
    heading: "We'll never oversell.",
    sub: "Treatment plans are based on what you need, not what generates revenue.",
  },
  {
    heading: "We'll always explain.",
    sub: "Plain language, never dental jargon. Ask us anything — twice if you need to.",
  },
  {
    heading: "We'll remember you.",
    sub: "Every patient gets a care coordinator. Continuity isn't a luxury here — it's standard.",
  },
];

export default function OurPromise() {
  const sectionRef = useRef<HTMLElement>(null);
  const marquee1Ref = useRef<HTMLDivElement>(null);
  const marquee2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Infinite marquee
      const duration = 28;
      gsap.to(marquee1Ref.current, {
        xPercent: -50,
        duration,
        ease: "none",
        repeat: -1,
      });
      gsap.to(marquee2Ref.current, {
        xPercent: 50,
        duration: duration * 0.85,
        ease: "none",
        repeat: -1,
      });

      // Content reveal
      gsap.fromTo(
        ".promise-content > *",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: ".promise-content", start: "top 80%" },
        }
      );

      // Commitment cards
      gsap.fromTo(
        ".commitment-item",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ".commitments-grid", start: "top 82%" },
        }
      );

      // Big quote
      gsap.fromTo(
        ".big-quote",
        { scale: 0.85, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: { trigger: ".big-quote", start: "top 85%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="our-promise"
      className="relative bg-[#1A365D] overflow-hidden"
    >
      {/* Top marquee */}
      <div className="py-5 border-b border-white/10 overflow-hidden">
        <div
          ref={marquee1Ref}
          className="flex gap-10 whitespace-nowrap"
          style={{ width: "200%" }}
        >
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="font-['Cormorant_Garamond'] font-semibold text-white/60 text-lg tracking-widest shrink-0"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="w-[90%] mx-auto py-28 lg:py-40">
        <div className="promise-content">
          <span className="inline-block text-sm font-semibold tracking-[0.28em] uppercase text-[#ffa07a] font-['Cormorant_Garamond'] mb-6">
            Our Promise to You
          </span>

          <div className="big-quote mb-16">
            <p className="font-['Cormorant_Garamond'] font-medium italic text-white text-4xl md:text-6xl lg:text-7xl leading-tight max-w-5xl">
              "A great dentist doesn't just fix teeth —<br />
              <span className="text-[#ffa07a]">they change how you feel about yourself."</span>
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-10 h-px bg-[#ffa07a]" />
              <span className="font-['Poppins'] text-white/50 text-sm">
                Dr. Sarah Mitchell, Founder
              </span>
            </div>
          </div>
        </div>

        {/* Commitments */}
        <div className="commitments-grid grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden">
          {commitments.map((c, i) => (
            <div
              key={c.heading}
              className="commitment-item bg-[#1A365D] hover:bg-[#162d52] p-10 transition-colors duration-300 group"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="w-8 h-8 rounded-full bg-[#ffa07a]/20 border border-[#ffa07a]/40 flex items-center justify-center shrink-0 mt-1">
                  <span className="font-['Poppins'] font-bold text-[#ffa07a] text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-['Sora'] font-bold text-white text-xl leading-snug">
                  {c.heading}
                </h3>
              </div>
              <p className="font-['Poppins'] text-white/50 text-[15px] leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                {c.sub}
              </p>

              {/* Bottom accent */}
              <div className="mt-8 w-0 h-px bg-[#ffa07a] group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 flex flex-col sm:flex-row items-center gap-5 justify-center">
          <a
            href="#contact"
            className="px-10 py-5 rounded-full bg-[#ffa07a] text-white font-bold font-['Poppins'] text-base hover:bg-white hover:text-[#1A365D] transition-all duration-300 shadow-xl shadow-[#ffa07a]/20 group flex items-center gap-3"
          >
            Book Your First Visit
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 10h12M12 6l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="tel:+14808028188"
            className="px-10 py-5 rounded-full bg-transparent text-white font-semibold font-['Poppins'] text-base border border-white/30 hover:border-white/60 hover:bg-white/5 transition-all duration-300 flex items-center gap-3"
          >
            <svg className="w-5 h-5 text-[#ffa07a]" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            (480) 802-8188
          </a>
        </div>
      </div>

      {/* Bottom reverse marquee */}
      <div className="py-5 border-t border-white/10 overflow-hidden">
        <div
          ref={marquee2Ref}
          className="flex gap-10 whitespace-nowrap"
          style={{ width: "200%", transform: "translateX(-50%)" }}
        >
          {[...marqueeItems.slice().reverse(), ...marqueeItems.slice().reverse()].map((item, i) => (
            <span
              key={i}
              className="font-['Cormorant_Garamond'] font-semibold text-white/40 text-lg tracking-widest shrink-0"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}