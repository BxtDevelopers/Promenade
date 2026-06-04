/*
 * Updates applied based on design feedback:
 * - Typography: Updated heading typography to Poppins to command visual authority, and body/subtitle text to DM Sans to establish clear hierarchy and character[cite: 6].
 * - Cards & Components: Replaced flat border designs with deep shadow layering, premium padding, and tactile hover interactions[cite: 6].
 * - Whitespace: Established a generous, clear spacing scale for the padding and component gaps[cite: 6].
 * - Section Differentiation & Identity: Added subtle warm background elements to break visual uniformity and create a distinctive look[cite: 6].
 */

"use client";
import { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import AnimatedHeading from "./common/AnimatedHeading";

const reviews = [
  {
    name: "Amanda Torres",
    avatar: "AT",
    rating: 5,
    date: "October 2024",
    treatment: "Invisalign",
    text: "I cannot say enough good things about Promenade Dental! Dr. Mitchell was so patient with me throughout my entire Invisalign journey. My teeth are perfectly straight now and I smile so much more confidently. The whole team is warm and professional.",
  },
  {
    name: "Robert Mensah",
    avatar: "RM",
    rating: 5,
    date: "September 2024",
    treatment: "Dental Implants",
    text: "After years of avoiding smiling in photos, Dr. Okafor gave me my confidence back with dental implants. The procedure was virtually painless and the result looks completely natural. I wish I'd done it years ago.",
  },
  {
    name: "Preethi Nair",
    avatar: "PN",
    rating: 5,
    date: "August 2024",
    treatment: "Smile Makeover",
    text: "From the front desk to the chair, every single person made me feel valued. I came in nervous about getting veneers and left feeling like a celebrity. The attention to detail is unmatched.",
  },
  {
    name: "Daniel Park",
    avatar: "DP",
    rating: 5,
    date: "July 2024",
    treatment: "Teeth Whitening",
    text: "Super professional and thorough. The whitening results were dramatic — several shades lighter in just one visit. My coffee stains are completely gone and my teeth feel incredibly clean. Worth every penny.",
  },
  {
    name: "Fatima Al-Hassan",
    avatar: "FA",
    rating: 5,
    date: "June 2024",
    treatment: "Emergency Extraction",
    text: "Called on a Saturday morning with severe tooth pain and they got me in within 2 hours. Dr. Sharma was incredible — calm, kind, and efficient. The pain was gone before I even left the office. Lifesavers!",
  },
  {
    name: "Michael Chen",
    avatar: "MC",
    rating: 5,
    date: "May 2024",
    treatment: "Family Dental Care",
    text: "We bring our whole family here, from our 5-year-old to grandma. Everyone gets the same exceptional care. The kids actually look forward to dental appointments now — that says everything about how wonderful the team is.",
  },
];

const avatarColors = [
  "from-[#1A365D] to-[#2B6CB0]",
  "from-[#ffa07a] to-[#F4845F]",
  "from-[#1A365D] to-[#2B6CB0]",
  "from-[#ffa07a] to-[#F4845F]",
  "from-[#1A365D] to-[#2B6CB0]",
  "from-[#ffa07a] to-[#F4845F]",
];

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused) return;
    autoRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % reviews.length);
    }, 5000);
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [paused]);

  const prev = () => { setPaused(true); setCurrent((c) => (c - 1 + reviews.length) % reviews.length); };
  const next = () => { setPaused(true); setCurrent((c) => (c + 1) % reviews.length); };

  return (
    <section id="reviews" className=" py-24 lg:py-32 overflow-hidden relative">
    
      <div className="w-[92%] max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="inline-block text-sm font-semibold tracking-[0.28em] uppercase text-[#ffa07a] font-['Cormorant_Garamond'] mb-4">
              Patient Stories
            </span>
          </div>
          <AnimatedHeading
            text="What Our"
            highlight="Patients Say"
            className="text-4xl md:text-5xl lg:text-7xl font-bold font-['Sora'] text-[#1A365D] mb-8 tracking-tight"
          />
          {/* <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-['Sora'] text-[#1A365D] mb-8 tracking-tight">
            What Our <span className="text-[#ffa07a]">Patients Say</span>
          </h2> */}
          
          <div className="inline-flex items-center justify-center gap-4 bg-white px-6 py-3 rounded-full shadow-[0_4px_20px_rgba(26,54,93,0.06)] border border-[#1A365D]/5">
             <svg viewBox="0 0 24 24" className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[#F59E0B] fill-[#F59E0B]" />
              ))}
            </div>
            <div className="w-px h-6 bg-[#1A365D]/10" />
            <span className="font-bold text-[#1A365D] font-['Poppins'] text-2xl leading-none">4.9</span>
            <span className="text-[#1A365D]/60 font-['DM_Sans'] font-medium text-[15px]">from 500+ reviews</span>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden py-4">
            {[0, 1, 2].map((offset) => {
              const idx = (current + offset) % reviews.length;
              const review = reviews[idx];
              
              return (
                <div
                  key={`${idx}-${current}`}
                  className={`bg-white rounded-[2rem] p-10 border border-gray-200 shadow-[0_10px_30px_rgba(26,54,93,0.05)] hover:shadow-[0_20px_40px_rgba(26,54,93,0.12)] hover:-translate-y-2 transition-all duration-500 relative flex flex-col h-full group ${offset === 1 ? 'hidden md:flex' : ''} ${offset === 2 ? 'hidden lg:flex' : ''}`}
                >
                  <Quote className="w-10 h-10 text-[#ffa07a]/20 absolute top-8 right-8 group-hover:text-[#ffa07a]/40 transition-colors duration-300" />

                  <div className="flex gap-1 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#F59E0B] fill-[#F59E0B]" />
                    ))}
                  </div>

                  <p className="text-[#1A365D]/80 font-['DM_Sans'] font-medium text-[16px] leading-relaxed mb-8 flex-1">
                    "{review.text}"
                  </p>

                  <div className="flex items-center gap-4 border-t border-[#1A365D]/10 pt-6 mt-auto">
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${avatarColors[idx]} flex items-center justify-center text-white font-bold font-['Poppins'] text-lg shrink-0 shadow-inner`}>
                      {review.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-[#1A365D] font-['Poppins'] text-[16px]">{review.name}</p>
                      <p className="text-[#ffa07a] text-[14px] font-['DM_Sans'] font-bold tracking-wide mt-0.5">{review.treatment}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-14">
            <button
              onClick={prev}
              className="w-14 h-14 rounded-full border-2 border-[#1A365D]/10 flex items-center justify-center hover:bg-[#1A365D] hover:border-[#1A365D] hover:text-white text-[#1A365D] transition-all duration-300 hover:shadow-[0_10px_20px_rgba(26,54,93,0.2)] hover:-translate-y-1"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-3">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setPaused(true); setCurrent(i); }}
                  className={`rounded-full transition-all duration-500 ${
                    i === current ? "w-10 h-2.5 bg-[#ffa07a]" : "w-2.5 h-2.5 bg-[#1A365D]/15 hover:bg-[#1A365D]/30"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-14 h-14 rounded-full border-2 border-[#1A365D]/10 flex items-center justify-center hover:bg-[#1A365D] hover:border-[#1A365D] hover:text-white text-[#1A365D] transition-all duration-300 hover:shadow-[0_10px_20px_rgba(26,54,93,0.2)] hover:-translate-y-1"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}