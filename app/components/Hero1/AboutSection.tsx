"use client";
import { CheckCircle2, Award, Shield, Clock } from "lucide-react";

const highlights = [
  { icon: Award, text: "Award-winning dental care since 2009" },
  { icon: Shield, text: "State-of-the-art sterilisation & safety protocols" },
  { icon: Clock, text: "Same-day emergency appointments available" },
  { icon: CheckCircle2, text: "All insurance plans welcomed & direct billing" },
];



export default function AboutSection() {
  return (
    <section id="about" className="bg-[#fdfaf5] pt-24 lg:pt-32 overflow-hidden">
      <div className="w-[90%] mx-auto">

        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block text-sm font-semibold tracking-[0.28em] uppercase text-[#ffa07a] font-['Cormorant_Garamond'] mb-4">
            Who We Are
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-['Sora'] text-[#1A365D] mb-5 leading-tight">
            A Clinic Built on <span className=" text-[#ffa07a]">Trust & Excellence</span>
          </h2>
          <p className="text-xl text-[#64748B] font-['Poppins'] max-w-5xl mx-auto leading-relaxed font-medium">
            Promenade Dental was founded with a single mission: to provide world-class dental care in a warm, welcoming environment where every patient feels at home.
          </p>
        </div>

        {/* About grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-28">
          {/* Image collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-5">
                <img
                  src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80"
                  alt="Modern dental clinic"
                  className="w-full h-60 object-cover rounded-3xl shadow-xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80"
                  alt="Dental treatment"
                  className="w-full h-44 object-cover rounded-3xl shadow-xl"
                />
              </div>
              <div className="mt-10 space-y-5">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80"
                  alt="Happy patient"
                  className="w-full h-44 object-cover rounded-3xl shadow-xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80"
                  alt="Dental equipment"
                  className="w-full h-60 object-cover rounded-3xl shadow-xl"
                />
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 bg-white rounded-2xl shadow-2xl px-7 py-5 border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#1A365D] flex items-center justify-center text-white font-bold text-xl font-['Cormorant_Garamond']">
                  15
                </div>
                <div>
                  <p className="text-[#1A365D] font-semibold text-sm font-['Poppins']">Years of</p>
                  <p className="text-[#ffa07a] font-bold text-sm font-['Poppins']">Excellence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-9">
            <div className="space-y-5">
              <h3 className="text-3xl md:text-5xl font-semibold font-['Poppins'] text-[#1A365D] leading-tight">
                Your Comfort Is Our Priority
              </h3>
              <p className="text-lg text-[#64748B] font-['Poppins'] leading-relaxed font-medium">
                From the moment you walk through our doors, you'll notice the difference. Our clinic blends the latest dental technology with a spa-like atmosphere designed to put even the most anxious patients at ease.
              </p>
              <p className="text-lg text-[#64748B] font-['Poppins'] leading-relaxed font-medium">
                We invest in continuing education, the latest equipment, and a team culture built on genuine care — because we believe great smiles start with great relationships.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {highlights.map((item) => (
                <div key={item.text} className="flex items-start gap-5 p-5 rounded-2xl  bg-white border  border-[#ffa07a]/30 hover:border-gray-100 hover:bg-gray-50 shadow-md transition-all group">
                  <div className="w-11 h-11 rounded-xl bg-[#ffa07a] flex items-center justify-center shrink-0 group-hover:bg-[#1A365D] transition-colors">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[#1A365D] font-['Poppins'] text-lg leading-relaxed pt-0.5 font-semibold">{item.text}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-[#1A365D] text-white font-semibold font-['Poppins'] text-[15px] px-9 py-4 rounded-full hover:bg-[#ffa07a] transition-colors duration-300"
            >
              Schedule a Visit
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 10h12M12 6l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Team */}
        
      </div>
    </section>
  );
}