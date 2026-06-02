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
    <section id="services" className=" lg:pt-32">
      <div className="w-[90%] mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:justify-between mb-16 gap-6">
          <div>
            <span className="inline-block text-sm font-semibold tracking-[0.28em] uppercase text-[#ffa07a] font-['Cormorant_Garamond'] mb-4">
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-['Sora'] text-[#1A365D] mb-5 ">
             Our Comprehensive <br className="hidden lg:block"/> <span className=" text-[#ffa07a]">Dental Services</span>
            </h2>
          </div>
          <p className="text-xl text-[#64748B] font-['Poppins'] max-w-lg leading-relaxed  font-medium">
            From your first check-up to a complete smile transformation, we provide every dental service your family needs under one roof.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
  {services.map((service, i) => {
    const Icon = service.icon;
    return (
      <div
        key={i}
        className={`group relative rounded-3xl cursor-pointer transition-all duration-500 border border-gray-200 shadow-xl hover:-translate-y-1 hover:border-[#ffa07a]`}
        onClick={() => setActive(active === i ? null : i)}
      >
        {/* Image — its own clipping context so the card itself doesn't clip */}
        <div className="relative h-52 overflow-hidden rounded-t-3xl">
          <img
            src={service.img}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className={`absolute inset-0 bg-linear-to-b ${service.color} opacity-55`} />
          <div className="absolute top-5 left-5 w-13 h-13 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center p-3">
            <Icon className="w-7 h-7 text-white" />
          </div>
        </div>

        <div className="p-7 bg-white rounded-b-3xl">
          <h3 className="text-3xl font-bold font-['Sora'] text-[#1A365D] mb-2">
            {service.title}
          </h3>
          <p className="text-[#64748B] text-lg font-['Poppins'] leading-relaxed mb-4 font-medium">
            {service.shortDesc}
          </p>

          <div className="overflow-visible">
            <p className="text-[#64748B] text-[16px] font-['Poppins'] leading-relaxed mb-4 border-t border-gray-100 pt-4 font-light">
              {service.fullDesc}
            </p>
            <ul className="space-y-2.5">
              {service.features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-3 text-lg font-['Poppins'] text-[#1A365D] font-medium"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ffa07a] shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[#ffa07a] font-semibold font-['Poppins'] text-[15px] mt-5 mb-1 hover:gap-3 transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    );
  })}
</div>

        {/* CTA Banner */}
        <div className="mt-16 rounded-3xl bg-[#7B1E2B] p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
  <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />

  <div className="relative text-center lg:text-left">
    <h3 className="text-3xl md:text-5xl font-bold font-['sora'] text-white mb-6">
      Dental Emergency? We're Here to Help.
    </h3>

    <p className="text-white/80 font-['Poppins'] text-lg font-medium max-w-2xl">
      Experiencing severe tooth pain, a broken tooth, swelling, or a dental injury?
      Our emergency dentistry team provides prompt care to relieve pain and
      protect your oral health.
    </p>
  </div>

  <a
    href="tel:+1234567890"
    className="relative shrink-0 bg-white text-[#7B1E2B] font-semibold font-['Poppins'] text-[15px] px-10 py-4 rounded-full hover:bg-gray-100 hover:shadow-2xl hover:translate-y-[-2px] transition-all whitespace-nowrap"
  >
    Emergency Appointment 
  </a>
</div>
      </div>
    </section>
  );
}