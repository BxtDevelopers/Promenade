"use client";
import { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

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
    }, 4500);
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [paused]);

  const prev = () => { setPaused(true); setCurrent((c) => (c - 1 + reviews.length) % reviews.length); };
  const next = () => { setPaused(true); setCurrent((c) => (c + 1) % reviews.length); };

  return (
    <section id="reviews" className="bg-white pt-24 lg:pt-32 overflow-hidden">
      <div className="w-[90%] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.28em] uppercase text-[#ffa07a] font-['Cormorant_Garamond'] mb-4">
            Patient Stories
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium font-['Sora'] text-[#1A365D] mb-5">
            What Our Patients <span className=" text-[#ffa07a]">Say</span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[#F59E0B] fill-[#F59E0B]" />
              ))}
            </div>
            <span className="font-bold text-[#1A365D] font-['Poppins'] text-3xl">4.9</span>
            <span className="text-[#64748B] font-['Poppins'] text-[15px]">from 500+ Google reviews</span>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="grid lg:grid-cols-3 gap-7 overflow-hidden">
            {[0, 1, 2].map((offset) => {
              const idx = (current + offset) % reviews.length;
              const review = reviews[idx];
              return (
                <div
                  key={`${idx}-${current}`}
                  className="bg-white rounded-3xl p-9 mb-2 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 relative"
                >
                  <Quote className="w-9 h-9 text-gray-100 absolute top-7 right-7" />

                  <div className="flex gap-0.5 mb-5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4.5 h-4.5 text-[#F59E0B] fill-[#F59E0B]" />
                    ))}
                  </div>

                  <p className="text-[#374151] font-['Poppins'] text-[15px] leading-relaxed mb-7 line-clamp-5 font-light">
                    "{review.text}"
                  </p>

                  <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                    <div className={`w-13 h-13 rounded-full bg-linear-to-br ${avatarColors[idx]} flex items-center justify-center text-white font-bold font-['Poppins'] text-sm shrink-0 w-12 h-12`}>
                      {review.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-[#1A365D] font-['Poppins'] text-[15px]">{review.name}</p>
                      <p className="text-[#ffa07a] text-[13px] font-['Poppins'] font-medium">{review.treatment} · {review.date}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:bg-[#1A365D] hover:border-[#1A365D] hover:text-white text-[#1A365D] transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setPaused(true); setCurrent(i); }}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? "w-7 h-2.5 bg-[#ffa07a]" : "w-2.5 h-2.5 bg-gray-200"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:bg-[#1A365D] hover:border-[#1A365D] hover:text-white text-[#1A365D] transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Google badge */}
        <div className="my-6 lg:my-14 flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="flex items-center gap-3 bg-white px-7 py-5 rounded-2xl border border-gray-100 shadow-md">
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div>
              <p className="text-[15px] font-bold text-[#1A365D] font-['Poppins']">Google Reviews</p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-[#F59E0B] fill-[#F59E0B]" />)}
                <span className="text-[13px] text-[#64748B] font-['Poppins'] ml-1">4.9 · 500+ reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}