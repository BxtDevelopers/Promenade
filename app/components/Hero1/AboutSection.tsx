"use client";
import { CheckCircle2, Award, Shield, Clock } from "lucide-react";
import AnimatedHeading from "../common/AnimatedHeading";

const highlights = [
  { icon: Award, text: "Award-winning dental care since 2009" },
  { icon: Shield, text: "State-of-the-art sterilisation & safety protocols" },
  { icon: Clock, text: "Same-day emergency appointments available" },
  { icon: CheckCircle2, text: "All insurance plans welcomed & direct billing" },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#fdfaf5] pt-24 lg:pt-32 overflow-hidden relative">

      {/* Decorative background elements */}
      {/* <div className="absolute top-20 right-0 w-72 h-72 rounded-full opacity-[0.06] pointer-events-none"
        style={{ background: "radial-gradient(circle, #ffa07a 0%, transparent 70%)", transform: "translate(30%, -20%)" }} />
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle, #1A365D 0%, transparent 70%)", transform: "translate(-40%, -50%)" }} /> */}

      {/* Scattered decorative plus signs */}
      {[
        { top: "8%", left: "3%", size: 18, opacity: 0.12 },
        { top: "15%", right: "5%", size: 12, opacity: 0.09 },
        { top: "55%", right: "2%", size: 20, opacity: 0.08 },
        { bottom: "20%", left: "2%", size: 14, opacity: 0.1 },
      ].map((pos, i) => (
        <svg key={i} className="absolute pointer-events-none" style={{ ...pos, width: pos.size, height: pos.size, opacity: pos.opacity }} viewBox="0 0 20 20" fill="#ffa07a">
          <rect x="8" y="0" width="4" height="20" rx="2" />
          <rect x="0" y="8" width="20" height="4" rx="2" />
        </svg>
      ))}

      <div className="w-[90%] mx-auto">

        {/* Section header — kept identical */}
        <div className="text-center mb-20">
          <span className="inline-block text-sm font-semibold tracking-[0.28em] uppercase text-[#ffa07a] font-['Cormorant_Garamond'] mb-4">
            Who We Are
          </span>
          <AnimatedHeading
              text="A Clinic Built on"
              highlight="Trust & Excellence"
              className="text-4xl md:text-5xl lg:text-7xl font-bold font-['Sora'] text-[#1A365D] mb-5 leading-tight"
            />
          {/* <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-['Sora'] text-[#1A365D] mb-5 leading-tight">
            A Clinic Built on <span className="text-[#ffa07a]">Trust & Excellence</span>
          </h2> */}
          <p className="text-xl text-[#64748B] font-['Poppins'] max-w-5xl mx-auto leading-relaxed font-medium">
            Promenade Dental was founded with a single mission: to provide world-class dental care in a warm, welcoming environment where every patient feels at home.
          </p>
        </div>

        {/* About grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-28">

          {/* ── Image collage — refreshed ── */}
          <div className="relative">
            {/* Decorative ring behind images */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[480px] h-[300px] md:h-[480px] rounded-full border-4 border-dashed  border-[#ffa07a]/80 pointer-events-none" />
            {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border-20 border-[#1A365D]/20 pointer-events-none" /> */}

            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-5">
                <div className="relative group overflow-hidden rounded-3xl shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80"
                    alt="Modern dental clinic"
                    className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A365D]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="relative group overflow-hidden rounded-3xl shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80"
                    alt="Dental treatment"
                    className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A365D]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
              <div className="mt-10 space-y-5">
                <div className="relative group overflow-hidden rounded-3xl shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80"
                    alt="Happy patient"
                    className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A365D]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="relative group overflow-hidden rounded-3xl shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80"
                    alt="Dental equipment"
                    className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A365D]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>

            {/* Floating badge — kept, slightly refined */}
            <div className="absolute -bottom-6 right-4 md:-right-4 bg-white rounded-2xl shadow-2xl px-7 py-5 border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full bg-[#1A365D] flex items-center justify-center text-white font-bold text-xl font-['Poppins']">
                  23+
                  {/* Pulse ring */}
                  <span className="absolute inset-0 rounded-full border-2 border-[#ffa07a] animate-ping opacity-70" />
                </div>
                <div>
                  <p className="text-[#1A365D] font-semibold text-sm font-['Poppins']">Years of</p>
                  <p className="text-[#ffa07a] font-bold text-sm font-['Poppins']">Excellence</p>
                </div>
              </div>
            </div>

            {/* Small accent dot cluster */}
            <div className="absolute -top-3 -left-3 grid grid-cols-4 gap-1.5 pointer-events-none opacity-40">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-[#ffa07a]" />
              ))}
            </div>
          </div>

          {/* ── Content side ── */}
          <div className="space-y-9">
            <div className="space-y-5">
              <AnimatedHeading
                text="Your Comfort Is Our Priority"
                className="text-3xl md:text-5xl font-semibold font-['Poppins'] text-[#1A365D] leading-tight"
              />
             
              <p className="text-lg text-[#64748B] font-['Poppins'] leading-relaxed font-medium">
                From the moment you walk through our doors, you'll notice the difference. Our clinic blends the latest dental technology with a spa-like atmosphere designed to put even the most anxious patients at ease.
              </p>
              <p className="text-lg text-[#64748B] font-['Poppins'] leading-relaxed font-medium">
                We invest in continuing education, the latest equipment, and a team culture built on genuine care — because we believe great smiles start with great relationships.
              </p>
            </div>

            {/* Highlight cards — split layout with connecting line */}
            <div className="relative grid grid-cols-1 gap-3">
              {/* Vertical accent line */}
              <div className="absolute left-[26px] top-0 bottom-0 w-px bg-gradient-to-b from-[#ffa07a]/60 via-[#ffa07a]/20 to-transparent pointer-events-none" />

              {highlights.map((item, i) => (
                <div
                  key={item.text}
                  className="flex items-center gap-5 p-5 rounded-2xl bg-white border border-[#ffa07a]/20 hover:border-[#ffa07a]/50 hover:shadow-lg shadow-sm transition-all duration-300 group relative"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl bg-[#ffa07a]/10 border border-[#ffa07a]/30 flex items-center justify-center shrink-0 group-hover:bg-[#1A365D] group-hover:border-[#1A365D] transition-all duration-300 z-10">
                    <item.icon className="w-5 h-5 text-[#ffa07a] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-[#1A365D] font-['Poppins'] text-base leading-relaxed font-semibold">{item.text}</span>

                  {/* Subtle right arrow on hover */}
                  <svg className="w-4 h-4 text-[#ffa07a] ml-auto opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300 shrink-0" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 10h12M12 6l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-[#1A365D] text-white font-semibold font-['Poppins'] text-[15px] px-9 py-4 rounded-full hover:bg-[#ffa07a] transition-colors duration-300 shadow-lg shadow-[#1A365D]/20"
            >
              Schedule a Visit
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