"use client";
import { useState } from "react";
import { GraduationCap, Award, ArrowRight } from "lucide-react";
import AnimatedHeading from "../common/AnimatedHeading";

const team = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Lead Cosmetic Dentist",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
    bio: "Harvard-trained with 15 years of expertise in smile transformations.",
    credentials: ["Harvard School of Dental Medicine", "Fellow, American Academy of Cosmetic Dentistry"],
    stat: { number: "15+", label: "Years Experience" },
    num: "01",
  },
  {
    name: "Dr. James Okafor",
    role: "Orthodontic Specialist",
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80",
    bio: "Certified Invisalign Diamond Provider with over 3,000 cases completed.",
    credentials: ["Invisalign Diamond Provider", "Board Certified Orthodontist"],
    stat: { number: "3K+", label: "Cases Completed" },
    num: "02",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Implantologist",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80",
    bio: "Specialist in full-arch restorations and mini dental implants.",
    credentials: ["Fellow, International Congress of Oral Implantologists", "Advanced Certificate, Implantology"],
    stat: { number: "98%", label: "Success Rate" },
    num: "03",
  },
];

export default function Team() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="w-[90%] mx-auto py-24 lg:py-32 relative">

      {/* Subtle bg decoration */}
     <div
  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
             w-[280px] h-[280px]
             md:w-[500px] md:h-[500px]
             lg:w-[700px] lg:h-[700px]
             rounded-full pointer-events-none opacity-[0.03]"
  style={{ background: "radial-gradient(circle, #ffa07a 0%, transparent 70%)" }}
/>

      {/* ── Header ── */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
        <div>
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.28em] uppercase text-[#ffa07a] font-['Cormorant_Garamond'] mb-4">
            Our Specialists
          </span>
          <AnimatedHeading
            text="Meet the Team"
            highlight="Behind Your Smile"
            className="text-4xl md:text-5xl lg:text-7xl font-bold font-['Sora'] text-[#1A365D] leading-tight"
          />
        </div>
      </div>

      {/* ── Cards ── */}
      <div className="grid md:grid-cols-3 gap-7">
        {team.map((member, i) => (
          <div
            key={member.name}
            //@ts-ignore
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-default"
          >
            {/* Top gradient accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-1 z-10 transition-all duration-300"
              style={{ background: hovered === i ? "linear-gradient(90deg,#1A365D,#ffa07a)" : "transparent" }}
            />

            {/* Image area */}
            <div className="relative h-72 overflow-hidden">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              {/* Dark gradient always present, deeper on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A365D]/80 via-[#1A365D]/20 to-transparent" />


              {/* Role pill bottom-right */}
              <div className="absolute bottom-4 right-4 bg-[#ffa07a] rounded-full px-3 py-1.5">
                <span className="font-['Poppins'] text-white text-[11px] font-bold tracking-wide">{member.role}</span>
              </div>
            </div>

            {/* Card body */}
            <div className="p-7">
              <h4 className="text-2xl font-bold font-['Sora'] text-[#1A365D] mb-2">{member.name}</h4>
              <p className="text-[#64748B] text-[15px] font-['Poppins'] leading-relaxed font-medium mb-5">{member.bio}</p>

              {/* Credentials */}
              <div className="space-y-2 mb-5 border-t border-gray-100 pt-5">
                {member.credentials.map((c) => (
                  <div key={c} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#ffa07a]/10 border border-[#ffa07a]/25 flex items-center justify-center shrink-0 mt-0.5">
                      <GraduationCap className="w-3 h-3 text-[#ffa07a]" />
                    </div>
                    <span className="text-[13px] font-['Poppins'] text-[#64748B] font-medium leading-snug">{c}</span>
                  </div>
                ))}
              </div>

              {/* CTA link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-[#1A365D] font-semibold font-['Poppins'] text-sm hover:text-[#ffa07a] hover:gap-3 transition-all duration-300 group/link"
              >
                Book with {member.name.split(" ")[1]}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}