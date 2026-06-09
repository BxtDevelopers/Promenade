"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const initiatives = [
  {
    tag: "Annual Initiative",
    title: "Smile Forward Program",
    body: "Every year we dedicate two Saturdays entirely to free dental care for families in need. No forms, no income verification — just care, full stop. Over 800 free appointments given since 2015.",
    image: "https://images.unsplash.com/photo-1667133295308-9ef24f71952e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGRlbnRhbHxlbnwwfHwwfHx8MA%3D%3D",
    accent: "#ffa07a",
  },
  {
    tag: "Schools Partnership",
    title: "Young Smiles Initiative",
    body: "We partner with 6 local primary schools to provide free screenings and fluoride treatments every September. Early detection changes lives — and it removes the cost barrier entirely for families.",
    image: "https://images.unsplash.com/photo-1631051103633-24959376b92d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGRlbnRhbHxlbnwwfHwwfHx8MA%3D%3D",
    accent: "#1A365D",
  },
  {
    tag: "Senior Care",
    title: "Golden Years Discount",
    body: "Patients over 70 receive a permanent 20% discount on all treatments, no questions asked. Because the people who built this community deserve to keep their smiles.",
    image: "https://images.unsplash.com/photo-1609207825181-52d3214556dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    accent: "#ffa07a",
  },
];

export default function CommunitySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      gsap.fromTo(
        ".community-header > *",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: ".community-header", start: "top 80%" },
        }
      );

      // Each panel: image and text alternate fade-in
      gsap.utils.toArray<HTMLElement>(".community-panel").forEach((panel) => {
        const img = panel.querySelector(".panel-image");
        const content = panel.querySelector(".panel-content");

        gsap.fromTo(
          img,
          { scale: 1.08, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: panel, start: "top 78%" },
          }
        );

        gsap.fromTo(
  Array.from(content?.children ?? []),
  { y: 35, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    stagger: 0.12,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: panel,
      start: "top 75%",
    },
  }
);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="community" className="relative bg-[#fdfaf5] py-28 lg:py-36 overflow-hidden">

      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #1A365D 0px, #1A365D 1px, transparent 1px, transparent 12px)`,
        }}
      />

      <div className="w-[90%] mx-auto">

        {/* Header */}
        <div className="community-header text-center mb-24">
          <span className="inline-block text-sm font-semibold tracking-[0.28em] uppercase text-[#ffa07a] font-['Cormorant_Garamond'] mb-4">
            Beyond the Chair
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-['Sora'] text-[#1A365D] mb-5 leading-tight">
            Rooted in <span className="text-[#ffa07a]">Community</span>
          </h2>
          <p className="text-xl text-[#64748B] font-['Poppins'] max-w-3xl mx-auto leading-relaxed font-medium">
            We believe a healthy smile shouldn't depend on a healthy bank account. Here's how we give back.
          </p>
        </div>

        {/* Panels */}
        <div className="space-y-16">
          {initiatives.map((item, i) => (
            <div
              key={item.title}
              className={`community-panel grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              {/* Image */}
              <div className="panel-image relative rounded-3xl overflow-hidden shadow-2xl shadow-[#1A365D]/10 aspect-[4/3]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                {/* Color wash overlay */}
                <div
                  className="absolute inset-0 mix-blend-multiply opacity-15"
                  style={{ background: item.accent }}
                />
                {/* Tag chip on image */}
                <div className="absolute top-5 left-5">
                  <span
                    className="px-4 py-2 rounded-full text-xs font-bold font-['Poppins'] uppercase tracking-wider backdrop-blur-sm"
                    style={{ background: `${item.accent}cc`, color: "white" }}
                  >
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="panel-content space-y-6">
                {/* Number */}
                <span className="font-['Cormorant_Garamond'] font-bold text-8xl leading-none pointer-events-none select-none"
                  style={{ color: item.accent, opacity: 0.12 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3 className="font-['Sora'] font-bold text-3xl md:text-4xl text-[#1A365D] leading-tight mt-4">
                  {item.title}
                </h3>

                <p className="font-['Poppins'] text-[#64748B] text-lg leading-relaxed font-medium">
                  {item.body}
                </p>

                {/* Divider */}
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-[#e2e8f0]" />
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: item.accent }}
                  />
                  <div className="h-px flex-1 bg-[#e2e8f0]" />
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 font-['Poppins'] font-semibold text-sm transition-all duration-300 group"
                  style={{ color: item.accent }}
                >
                  Learn how to get involved
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M4 10h12M12 6l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}