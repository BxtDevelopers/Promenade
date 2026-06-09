"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 5000, suffix: "+", label: "Smiles Transformed", duration: 2.5 },
  { value: 15, suffix: " yrs", label: "Of Excellence", duration: 1.5 },
  { value: 98, suffix: "%", label: "Patient Satisfaction", duration: 2 },
  { value: 3, suffix: "", label: "Expert Specialists", duration: 1 },
];

const features = [
  "HEPA air filtration in every room",
  "Digital X-ray (90% less radiation)",
  "CEREC® same-day crowns",
  "3D CBCT cone beam imaging",
  "Laser gum therapy",
  "Sedation dentistry available",
];

export default function ClinicSpace() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRevealRef = useRef<HTMLDivElement>(null);
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image clip-path reveal
      gsap.fromTo(
        ".clinic-image-wrap",
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.4,
          ease: "expo.out",
          stagger: 0.2,
          scrollTrigger: { trigger: imageRevealRef.current, start: "top 75%" },
        }
      );

      // Image scale-in from inside
      gsap.fromTo(
        ".clinic-image-wrap img",
        { scale: 1.3 },
        {
          scale: 1,
          duration: 1.6,
          ease: "expo.out",
          stagger: 0.2,
          scrollTrigger: { trigger: imageRevealRef.current, start: "top 75%" },
        }
      );

      // Counter animation
      stats.forEach((stat, i) => {
  const el = counterRefs.current[i];
  if (!el) return;

  const counter = { value: 0 };

  gsap.to(counter, {
    value: stat.value,
    duration: stat.duration,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".stats-row",
      start: "top 85%",
      once: true,
    },
    onUpdate: () => {
      el.textContent = Math.round(counter.value).toString();
    },
  });
});

      // Features list stagger
      gsap.fromTo(
        ".feature-item",
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: { trigger: ".features-list", start: "top 82%" },
        }
      );

      // Left content
      gsap.fromTo(
        ".clinic-content > *",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ".clinic-content", start: "top 80%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="clinic-space" className="relative bg-white py-28 lg:py-36 overflow-hidden">

      {/* Horizontal line accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ffa07a]/30 to-transparent" />

      <div className="w-[90%] mx-auto">

        {/* Stats row */}
        <div className="stats-row grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="text-center group"
            >
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span
                  ref={(el) => { counterRefs.current[i] = el; }}
                  className="font-['Sora'] font-black text-5xl md:text-6xl text-[#1A365D]"
                >
                  0
                </span>
                <span className="font-['Sora'] font-black text-3xl md:text-4xl text-[#ffa07a]">
                  {s.suffix}
                </span>
              </div>
              <p className="font-['Poppins'] text-[#64748B] text-sm font-semibold uppercase tracking-wider">
                {s.label}
              </p>
              <div className="mt-2 mx-auto w-8 h-0.5 bg-[#ffa07a]/40 group-hover:w-16 transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>

        {/* Main layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Images — overlapping collage with clip-path reveal */}
          <div ref={imageRevealRef} className="relative h-[560px]">

            {/* Main large image */}
            <div className="clinic-image-wrap absolute top-0 left-0 w-[75%] h-[58%] rounded-3xl overflow-hidden shadow-2xl shadow-[#1A365D]/15">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80"
                alt="Modern clinic interior"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom right image */}
            <div className="clinic-image-wrap absolute bottom-0 right-0 w-[65%] h-[55%] rounded-3xl overflow-hidden shadow-2xl shadow-[#ffa07a]/20">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80"
                alt="Advanced dental equipment"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Small accent image */}
            <div className="clinic-image-wrap absolute bottom-6 left-4 w-[30%] h-[32%] rounded-2xl overflow-hidden shadow-xl border-4 border-white z-10">
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&q=80"
                alt="Smiling patient"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating tech badge */}
            <div className="absolute top-[52%] left-[38%] z-20 bg-[#1A365D] text-white rounded-2xl px-5 py-4 shadow-2xl border border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#ffa07a]/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#ffa07a]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-xs font-bold font-['Poppins']">Latest Tech</p>
                  <p className="text-[#ffa07a] text-[10px] font-['Poppins']">2024 Equipment</p>
                </div>
              </div>
            </div>

            {/* Decorative dot cluster */}
            <div className="absolute -bottom-4 -right-4 grid grid-cols-5 gap-2 pointer-events-none opacity-30">
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#ffa07a]" />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="clinic-content space-y-8">
            <div>
              <span className="inline-block text-sm font-semibold tracking-[0.28em] uppercase text-[#ffa07a] font-['Cormorant_Garamond'] mb-4">
                Our Space & Technology
              </span>
              <h2 className="text-4xl md:text-5xl font-bold font-['Sora'] text-[#1A365D] leading-tight mb-5">
                Built for Comfort,<br />
                <span className="text-[#ffa07a]">Engineered for Results</span>
              </h2>
              <p className="text-[#64748B] font-['Poppins'] font-medium text-lg leading-relaxed">
                Our clinic isn't just beautiful — it's a precision instrument. We invested heavily in the technology that makes your treatment faster, safer, and more comfortable than you'd believe possible.
              </p>
            </div>

            {/* Features grid */}
            <div className="features-list grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((f) => (
                <div key={f} className="feature-item flex items-center gap-3 group">
                  <div className="w-5 h-5 rounded-full bg-[#ffa07a]/15 border border-[#ffa07a]/40 flex items-center justify-center shrink-0 group-hover:bg-[#ffa07a] group-hover:border-[#ffa07a] transition-all duration-300">
                    <svg className="w-3 h-3 text-[#ffa07a] group-hover:text-white transition-colors duration-300" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="font-['Poppins'] text-[#1A365D] text-sm font-semibold">{f}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-[#ffa07a] text-white font-semibold font-['Poppins'] text-[15px] px-9 py-4 rounded-full hover:bg-[#1A365D] transition-colors duration-300 shadow-lg shadow-[#ffa07a]/30"
            >
              Tour the Clinic
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 10h12M12 6l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}