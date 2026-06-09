"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    number: "01",
    title: "Compassion First",
    body: "Every decision we make starts with one question: 'How does this feel for the patient?' Anxiety, fear, cost — we meet every concern with empathy before expertise.",
    color: "#ffa07a",
    bg: "#fff8f5",
  },
  {
    number: "02",
    title: "Relentless Precision",
    body: "We obsess over millimetres. Whether placing an implant or crafting a veneer, the margin for 'good enough' simply doesn't exist in our clinic.",
    color: "#1A365D",
    bg: "#f0f4fa",
  },
  {
    number: "03",
    title: "Transparency Always",
    body: "We show you exactly what we see, explain every option in plain language, and never recommend treatment you don't need. Full stop.",
    color: "#ffa07a",
    bg: "#fff8f5",
  },
  {
    number: "04",
    title: "Continuous Growth",
    body: "Our team attends more continuing education than required by any college. Because dentistry evolves — and your care should too.",
    color: "#1A365D",
    bg: "#f0f4fa",
  },
  {
    number: "05",
    title: "Community Roots",
    body: "We live here too. From free school screenings to senior care days, we invest in the health of our whole neighbourhood — not just our patients.",
    color: "#ffa07a",
    bg: "#fff8f5",
  },
  {
    number: "06",
    title: "Joyful Environment",
    body: "A clean, calm, beautiful space isn't a luxury — it's part of the care. We designed every corner of our clinic to make you feel like you belong.",
    color: "#1A365D",
    bg: "#f0f4fa",
  },
];

export default function CoreValues() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        ".values-header > *",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: ".values-header", start: "top 80%" },
        }
      );

      // Cards: alternating slide from sides
      gsap.utils.toArray<HTMLElement>(".value-card").forEach((card, i) => {
        const fromLeft = i % 3 < 1.5;
        gsap.fromTo(
          card,
          { x: fromLeft ? -60 : 60, opacity: 0, scale: 0.94 },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
            },
            delay: (i % 3) * 0.1,
          }
        );
      });

      // Big number hover parallax
      document.querySelectorAll<HTMLElement>(".value-card").forEach((card) => {
        const num = card.querySelector<HTMLElement>(".value-num");
        card.addEventListener("mousemove", (e) => {
          const rect = card.getBoundingClientRect();
          const cx = e.clientX - rect.left - rect.width / 2;
          const cy = e.clientY - rect.top - rect.height / 2;
          gsap.to(num, { x: cx * 0.08, y: cy * 0.08, duration: 0.4, ease: "power2.out" });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(num, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.5)" });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="core-values" className="relative bg-[#fdfaf5] py-28 lg:py-36 overflow-hidden">

      {/* Faint large circle accent */}
      <div className="absolute -left-32 bottom-0 w-96 h-96 rounded-full border border-[#ffa07a]/15 pointer-events-none" />
      <div className="absolute right-0 top-1/4 w-64 h-64 rounded-full border border-[#1A365D]/10 pointer-events-none" />

      {/* Scattered plus signs */}
      {[
        { top: "6%", right: "8%", size: 16, opacity: 0.12 },
        { bottom: "12%", left: "5%", size: 12, opacity: 0.09 },
      ].map((pos, i) => (
        <svg key={i} className="absolute pointer-events-none" style={{ ...pos, width: pos.size, height: pos.size, opacity: pos.opacity }} viewBox="0 0 20 20" fill="#ffa07a">
          <rect x="8" y="0" width="4" height="20" rx="2" />
          <rect x="0" y="8" width="20" height="4" rx="2" />
        </svg>
      ))}

      <div className="w-[90%] mx-auto">
        {/* Header */}
        <div className="values-header text-center mb-20">
          <span className="inline-block text-sm font-semibold tracking-[0.28em] uppercase text-[#ffa07a] font-['Cormorant_Garamond'] mb-4">
            What Drives Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-['Sora'] text-[#1A365D] mb-5 leading-tight">
            Our Core <span className="text-[#ffa07a]">Values</span>
          </h2>
          <p className="text-xl text-[#64748B] font-['Poppins'] max-w-3xl mx-auto leading-relaxed font-medium">
            These aren't framed on a wall. They're practiced in every appointment, every interaction, every day.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div
              key={v.number}
              className="value-card group relative rounded-3xl p-10 border border-transparent hover:border-current transition-all duration-500 cursor-default overflow-hidden"
              style={{ background: v.bg, borderColor: `${v.color}20` }}
            >
              {/* Big ghost number */}
              <span
                className="value-num absolute -top-2 right-1 font-['Sora'] font-black text-[7rem] leading-none select-none pointer-events-none transition-opacity duration-300"
                style={{ color: v.color, opacity: 0.2 }}
              >
                {v.number}
              </span>

              {/* Accent dot */}
              <div
                className="w-2 h-2 rounded-full mb-6 group-hover:scale-150 transition-transform duration-300"
                style={{ background: v.color }}
              />


              <h3 className="font-['Sora'] font-bold text-xl text-[#1A365D] mb-4 leading-snug">
                {v.title}
              </h3>
              <p className="font-['Poppins'] text-[#64748B] text-[15px] leading-relaxed">
                {v.body}
              </p>

              {/* Hover gradient sweep */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                style={{
                  background: `linear-gradient(135deg, ${v.color}06 0%, transparent 60%)`,
                }}
              />

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{ background: `linear-gradient(to right, transparent, ${v.color}, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}