"use client";
import { CheckCircle2, Award, Shield, Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const highlights = [
  { icon: Award, text: "Award-winning dental care since 2009", tag: "Recognition" },
  { icon: Shield, text: "State-of-the-art sterilisation & safety protocols", tag: "Safety" },
  { icon: Clock, text: "Same-day emergency appointments available", tag: "Availability" },
  { icon: CheckCircle2, text: "All insurance plans welcomed & direct billing", tag: "Accessibility" },
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="bg-white pt-24 lg:pt-36 overflow-hidden" ref={ref}>
      <div className="w-[92%] max-w-7xl mx-auto">

        {/* Editorial section marker */}
        <div className="flex items-center gap-6 mb-20">
          <div className="w-12 h-px bg-[#ffa07a]" />
          <span className="text-[11px] font-['DM_Sans'] text-[#ffa07a] tracking-[0.28em] uppercase font-semibold">
            Who We Are
          </span>
          <div className="flex-1 h-px bg-[#1A365D]/8" />
          <span className="text-[11px] font-['DM_Sans'] text-[#94A3B8] tracking-widest">02</span>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-20 items-start mb-0">

          {/* Left — image collage */}
          <div
            className={`relative transition-all duration-1000 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            {/* Staggered image arrangement */}
            <div className="relative">
              {/* Large primary image */}
              <div className="relative rounded-[2rem] overflow-hidden h-[500px]">
                <img
                  src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=85"
                  alt="Modern dental clinic"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A365D]/40 to-transparent" />
              </div>

              {/* Floating second image — offset right/bottom */}
              <div className="absolute -bottom-12 -right-8 w-56 h-56 rounded-[1.5rem] overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=85"
                  alt="Dental equipment"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute top-8 -right-6 bg-[#1A365D] rounded-2xl px-6 py-5 shadow-xl">
                <div className="flex items-baseline gap-1">
                  <span className="font-['Poppins'] font-bold text-4xl text-white leading-none">15</span>
                  <span className="font-['Poppins'] text-[#ffa07a] font-semibold text-sm">yrs</span>
                </div>
                <p className="font-['DM_Sans'] text-white/60 text-[11px] tracking-wider uppercase mt-1">Excellence</p>
              </div>

              {/* Accent shape */}
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full border-2 border-[#ffa07a]/20 -z-10" />
              <div className="absolute -top-4 left-12 w-16 h-16 rounded-full border border-[#1A365D]/10 -z-10" />
            </div>
          </div>

          {/* Right — content */}
          <div
            className={`relative transition-all duration-1000 delay-200 pb-16 lg:pb-28 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <h2 className="font-['Poppins'] font-semibold text-[#1A365D] text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] mb-6">
              A Clinic Built on{" "}
              <span className="text-[#ffa07a]">Trust</span>
              {" & "}
              <span className="relative inline-block">
                Excellence
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[#ffa07a]/30 rounded-full" />
              </span>
            </h2>

            <p className="font-['DM_Sans'] text-[#64748B] text-[16px] leading-relaxed mb-4 font-light">
              Promenade Dental was founded with a single mission: to provide world-class dental care in a warm, welcoming environment where every patient feels genuinely at home.
            </p>
            <p className="font-['DM_Sans'] text-[#64748B] text-[16px] leading-relaxed mb-10 font-light">
              We invest in continuing education, the latest equipment, and a team culture built on care — because we believe great smiles start with great relationships.
            </p>

            {/* Highlights — horizontal list style */}
            <div className="space-y-0 mb-10">
              {highlights.map((item, i) => (
                <div
                  key={item.text}
                  className={`flex items-start gap-5 py-4 border-b border-[#1A365D]/8 group cursor-default transition-all duration-300 hover:pl-2`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-[#1A365D]/5 flex items-center justify-center shrink-0 group-hover:bg-[#ffa07a] transition-colors duration-300">
                    <item.icon className="w-4.5 h-4.5 text-[#1A365D] group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block font-['DM_Sans'] text-[11px] text-[#ffa07a] tracking-[0.2em] uppercase mb-1 font-semibold">{item.tag}</span>
                    <span className="font-['DM_Sans'] text-[#1A365D] text-[14px] leading-snug">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-[#1A365D] text-white font-semibold font-['DM_Sans'] text-[14px] tracking-wide px-8 py-4 rounded-full hover:bg-[#ffa07a] transition-all duration-300"
            >
              Schedule a Visit
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 10h12M12 6l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}