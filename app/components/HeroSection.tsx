"use client";
import { ArrowRight, Star, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative min-h-[100svh] pt-36 pb-20 lg:pt-40 lg:pb-20 flex items-center bg-[#FDE8D8] overflow-hidden"
    >
      {/* Background brand elements for 'ownable identity' 
        Soft, warm organic shapes replacing clinical white 
      */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-white/40 to-transparent pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#ffa07a]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-[92%] max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Bold Typography & Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="inline-flex items-center gap-3 mb-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <span className="w-10 h-[2px] bg-[#ffa07a]" />
            <span className="text-sm font-['DM_Sans'] text-[#1A365D] tracking-[0.25em] uppercase font-bold">
              Award-Winning Care Since 2009
            </span>
          </div>

          <h1 className="font-['Poppins'] font-bold leading-[1.05] text-[#1A365D] mb-6 tracking-tighter animate-fade-in" style={{ animationDelay: "200ms" }}>
            <span className="block text-[clamp(3.2rem,6vw,5.5rem)]">Advanced Dental</span>
            <span className="block text-[clamp(3.2rem,6vw,5.5rem)] text-[#ffa07a]">& Cosmetic Care.</span>
          </h1>

          <p className="text-[clamp(1.1rem,1.5vw,1.25rem)] text-[#1A365D]/80 font-['DM_Sans'] font-medium leading-relaxed mb-10 max-w-xl animate-fade-in" style={{ animationDelay: "300ms" }}>
            Where cutting-edge technology meets genuine compassion. Step into a warm, stress-free environment designed to bring out your best smile.
          </p>

          {/* Primary & Secondary Actions */}
          <div className="flex flex-col sm:flex-row gap-5 mb-14 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <a
              href="#contact"
              className="group inline-flex justify-center items-center gap-3 bg-[#1A365D] text-white font-bold font-['DM_Sans'] text-[16px] px-9 py-4.5 rounded-full shadow-[0_12px_30px_rgba(26,54,93,0.15)] hover:shadow-[0_15px_40px_rgba(26,54,93,0.25)] hover:-translate-y-1 hover:bg-[#204273] transition-all duration-300"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex justify-center items-center gap-3 border-2 border-[#1A365D]/15 text-[#1A365D] font-bold font-['DM_Sans'] text-[16px] px-9 py-4.5 rounded-full hover:bg-[#1A365D]/5 transition-all duration-300"
            >
              Explore Treatments
            </a>
          </div>

          {/* Social Proof / Trust Indicators */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 pt-8 border-t border-[#1A365D]/10 animate-fade-in" style={{ animationDelay: "500ms" }}>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[11, 32, 44, 25].map((img, i) => (
                  <img 
                    key={i} 
                    src={`https://i.pravatar.cc/100?img=${img}`} 
                    alt="Patient" 
                    className="w-12 h-12 rounded-full border-2 border-[#FDE8D8] shadow-sm object-cover" 
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-[#ffa07a] mb-0.5">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="text-[13px] font-['DM_Sans'] font-bold text-[#1A365D]">5,000+ Happy Patients</span>
              </div>
            </div>

            <div className="hidden sm:block w-px h-10 bg-[#1A365D]/10" />

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-[#ffa07a]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] font-['DM_Sans'] font-bold text-[#1A365D]">Top Rated Clinic</span>
                <span className="text-[12px] font-['DM_Sans'] text-[#1A365D]/60">Certified Specialists</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Ownable Visual Moment (Split Layout) */}
        <div className="lg:col-span-5 relative lg:h-[750px] flex items-center justify-center w-full animate-fade-in" style={{ animationDelay: "300ms" }}>
          
          {/* Distinctive Architectural Shape - Replaces generic squares/circles */}
          <div className="absolute inset-0 bg-white rounded-t-[12rem] rounded-b-[3rem] rotate-3 scale-105 shadow-[0_20px_60px_rgba(26,54,93,0.08)] transition-transform duration-700 hover:rotate-6" />
          
          <img
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=90"
            alt="Confident patient smiling after dental treatment"
            className="relative z-10 w-full h-[500px] lg:h-[90%] object-cover rounded-t-[12rem] rounded-b-[3rem] shadow-xl"
            loading="eager"
          />

          {/* Floating Dimensional Card */}
          <div className="absolute -bottom-6 -left-4 lg:-left-12 z-20 bg-white p-5 lg:p-6 rounded-3xl shadow-[0_20px_50px_rgba(26,54,93,0.12)] border border-white/50 flex items-center gap-4 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 rounded-2xl bg-[#FDE8D8] text-[#ffa07a] flex items-center justify-center shrink-0">
               <span className="text-[#1A365D] font-black text-2xl font-['Poppins']">15</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#1A365D] font-bold font-['Poppins'] text-lg leading-none mb-1">Years of</span>
              <span className="text-[#1A365D]/60 text-sm font-['DM_Sans'] font-medium uppercase tracking-widest">Excellence</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}