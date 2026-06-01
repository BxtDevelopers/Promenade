
"use client";
import { useState } from "react";
import {
  Sparkles,
  ShieldCheck,
  Smile,
  BadgePlus,
  Baby,
  Siren,
  ArrowRight,
  PhoneCall
} from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "General Dentistry",
    shortDesc: "Preventive care for a lifetime of healthy smiles.",
    fullDesc:
      "Our comprehensive general dentistry covers routine cleanings, fillings, root canals, and gum disease treatment. We believe prevention is the best cure — our bi-annual checkups catch issues early, saving you time, discomfort, and cost.",
    features: [
      "Routine Cleanings & X-rays",
      "Tooth-colored Fillings",
      "Root Canal Therapy",
      "Gum Disease Treatment",
      "Dental Sealants",
    ],
    color: "from-[#1A365D] to-[#2B6CB0]",
    img: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80",
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    shortDesc: "Transform your smile with artistic precision.",
    fullDesc:
      "From subtle touch-ups to complete smile makeovers, our cosmetic services blend artistry with the latest technology. Achieve the bright, symmetrical smile you've always wanted with treatments customised entirely for your unique features.",
    features: [
      "Professional Teeth Whitening",
      "Porcelain Veneers",
      "Smile Makeovers",
      "Tooth Bonding",
      "Gum Contouring",
    ],
    color: "from-[#ffa07a] to-[#F4845F]",
    img: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80",
  },
  {
    icon: Smile,
    title: "Orthodontics",
    shortDesc: "Straighter teeth at any age — discreetly.",
    fullDesc:
      "We're a certified Invisalign Diamond Provider, meaning our specialists have completed hundreds of successful clear aligner cases. Whether you're a teen or adult, we create a custom roadmap to your perfectly aligned smile.",
    features: [
      "Invisalign Clear Aligners",
      "Traditional Braces",
      "Retainers",
      "Bite Correction",
      "Teen & Adult Options",
    ],
    color: "from-[#1A365D] to-[#2B6CB0]",
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80",
  },
  {
    icon: BadgePlus,
    title: "Dental Implants",
    shortDesc: "Permanent, natural-looking tooth replacement.",
    fullDesc:
      "Dental implants are the gold standard for replacing missing teeth. With a 98% success rate, our titanium implants integrate with your jawbone to provide a permanent, stable foundation for crowns, bridges, or full-arch restorations.",
    features: [
      "Single Tooth Implants",
      "Implant-Supported Bridges",
      "All-on-4 Full Arch",
      "Bone Grafting",
      "Immediate Loading",
    ],
    color: "from-[#ffa07a] to-[#F4845F]",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
  },
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    shortDesc: "Fun, gentle care for your little ones.",
    fullDesc:
      "We love seeing little smiles! Our child-friendly environment, patient team, and distraction techniques make dental visits positive experiences that build lifelong healthy habits from the very first appointment.",
    features: [
      "First Visit from Age 1",
      "Fluoride Treatments",
      "Dental Sealants",
      "Space Maintainers",
      "Habit Counselling",
    ],
    color: "from-[#1A365D] to-[#2B6CB0]",
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80",
  },
  {
    icon: Siren,
    title: "Emergency Dentistry",
    shortDesc: "Urgent care when you need it most.",
    fullDesc:
      "Dental emergencies don't wait. Neither do we. We reserve daily slots for urgent cases and offer extended hours to ensure that a broken tooth, severe toothache, or lost crown is treated the same day you call.",
    features: [
      "Same-day Appointments",
      "Broken Tooth Repair",
      "Severe Toothache Relief",
      "Lost Crown/Filling",
      "Dental Trauma Care",
    ],
    color: "from-[#ffa07a] to-[#F4845F]",
    img: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="services" className="bg-white py-24 lg:py-32 relative">
      {/* Background visual element */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#FDE8D8]/30 to-transparent pointer-events-none" />

      <div className="w-[92%] max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[2px] bg-[#ffa07a]" />
              <span className="text-sm font-bold tracking-[0.25em] uppercase text-[#ffa07a] font-['DM_Sans']">
                What We Offer
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Poppins'] text-[#1A365D] leading-[1.1] tracking-tight">
              Comprehensive <br className="hidden lg:block" />
              <span className="text-[#ffa07a] relative inline-block mt-2">
                Dental Services
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#FDE8D8] -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
                </svg>
              </span>
            </h2>
          </div>
          <p className="text-[17px] text-[#1A365D]/70 font-['DM_Sans'] max-w-md leading-relaxed font-medium">
            From your first check-up to a complete smile transformation, we provide every dental service your family needs under one roof.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {services.map((service, i) => {
    const Icon = service.icon;
    const isActive = active === i;

    return (
      <div
        key={i}
        className="group relative rounded-[2rem] cursor-pointer transition-all duration-500 bg-white shadow-[0_4px_20px_rgba(26,54,93,0.04)] border border-[#1A365D]/5 hover:shadow-[0_20px_40px_rgba(26,54,93,0.12)] hover:-translate-y-2 hover:border-[#ffa07a]/30 flex flex-col h-full"
        onClick={() => setActive(isActive ? null : i)}
      >
        {/* Image Section */}
        <div className="relative h-56 overflow-hidden shrink-0 rounded-t-[2rem]">
          <img
            src={service.img}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />

          <div
            className={`absolute inset-0 bg-gradient-to-b ${service.color} opacity-60 mix-blend-multiply group-hover:opacity-40 transition-opacity duration-500`}
          />

          {/* Floating Icon */}
          <div className="absolute bottom-1 right-8 z-20">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-[0_15px_30px_rgba(26,54,93,0.15)] flex items-center justify-center rotate-3 group-hover:-rotate-3 transition-transform duration-300">
              <Icon className="w-8 h-8 text-[#ffa07a]" />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 pt-12 flex-1 flex flex-col">
          <h3 className="text-2xl font-bold font-['Poppins'] text-[#1A365D] mb-3 group-hover:text-[#ffa07a] transition-colors">
            {service.title}
          </h3>

          <p className="text-[#1A365D]/70 text-[16px] font-['DM_Sans'] leading-relaxed mb-6 font-medium">
            {service.shortDesc}
          </p>

          <div
            className={`grid transition-all duration-500 ease-in-out ${
              isActive
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="border-t border-[#1A365D]/10 pt-5 mt-2">
                <p className="text-[#1A365D]/70 text-[15px] font-['DM_Sans'] leading-relaxed mb-5">
                  {service.fullDesc}
                </p>

                <ul className="space-y-3">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 text-[14px] font-['DM_Sans'] text-[#1A365D] font-bold"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ffa07a] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-6 flex items-center justify-between">
            <span className="inline-flex items-center gap-2 text-[#1A365D] font-bold font-['DM_Sans'] text-[15px] group-hover:text-[#ffa07a] transition-colors">
              {isActive ? "Show Less" : "Learn More"}

              <ArrowRight
                className={`w-4 h-4 transition-transform duration-300 ${
                  isActive
                    ? "-rotate-45"
                    : "group-hover:translate-x-1"
                }`}
              />
            </span>
          </div>
        </div>
      </div>
    );
  })}
</div>

        {/* CTA Banner */}
        <div className="mt-24 rounded-[2.5rem] bg-[#1A365D] p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden shadow-[0_20px_50px_rgba(26,54,93,0.2)]">
          {/* Abstract overlay */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#ffa07a]/20 to-transparent blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />
          
          <div className="relative text-center lg:text-left z-10">
            <h3 className="text-3xl lg:text-4xl font-bold font-['Poppins'] text-white mb-4 tracking-wide">
              Not sure which service is right for you?
            </h3>
            <p className="text-white/80 font-['DM_Sans'] text-lg font-medium">
              Talk to our treatment coordinators for a personalized plan.
            </p>
          </div>
          <a
            href="#contact"
            className="relative z-10 flex items-center gap-3 bg-[#ffa07a] text-[#1A365D] font-bold font-['DM_Sans'] text-[16px] px-10 py-5 rounded-full hover:bg-white hover:-translate-y-1 shadow-[0_10px_20px_rgba(255,160,122,0.3)] hover:shadow-[0_15px_30px_rgba(255,255,255,0.3)] transition-all duration-300 whitespace-nowrap"
          >
            <PhoneCall className="w-5 h-5" />
            Speak to a Coordinator
          </a>
        </div>
      </div>
    </section>
  );
}