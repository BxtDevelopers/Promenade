"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "How do I book my first appointment?",
        a: "Booking is easy! You can call us at (555) 123-4567, use the 'Book Appointment' button on our website, or drop by the clinic during opening hours. New patients are always welcome and we'll typically have you seen within a week for routine care.",
      },
      {
        q: "What should I bring to my first visit?",
        a: "Please bring a valid photo ID, your insurance card (if applicable), a list of any medications you're currently taking, and any recent dental X-rays if you have them. Arriving 10 minutes early to complete your new patient forms is appreciated.",
      },
      {
        q: "Do you accept walk-ins?",
        a: "We welcome walk-ins for dental emergencies during business hours. For routine appointments, we recommend booking in advance to secure your preferred time slot. Same-day appointments are often available for urgent needs.",
      },
    ],
  },
  {
    category: "Treatments & Procedures",
    questions: [
      {
        q: "Is teeth whitening safe?",
        a: "Yes, professional teeth whitening is completely safe when performed by a qualified dentist. Our whitening treatments use clinically proven formulas that lift stains without damaging your enamel. We also offer take-home kits for a more gradual whitening experience.",
      },
      {
        q: "How long does Invisalign treatment take?",
        a: "Treatment duration varies depending on the complexity of your case. Mild corrections can be achieved in as little as 6 months, while more involved cases typically take 12–18 months. During your free consultation, we'll give you a personalised timeline and show you a preview of your expected results.",
      },
      {
        q: "Are dental implants painful?",
        a: "The implant procedure is performed under local anaesthesia, so you'll feel minimal discomfort during the surgery. Most patients report that it's much more comfortable than they expected. Post-procedure soreness is normal for a few days and is easily managed with over-the-counter pain relief.",
      },
      {
        q: "How often should I have a dental check-up?",
        a: "We recommend visiting us every 6 months for a routine cleaning and examination. However, patients with gum disease, a history of cavities, or certain medical conditions may benefit from more frequent visits. We'll personalise a care schedule that's right for you.",
      },
    ],
  },
  {
    category: "Cost & Insurance",
    questions: [
      {
        q: "Do you accept dental insurance?",
        a: "Yes, we accept most major dental insurance plans and offer direct billing to your insurer. Our team will help you understand your coverage and maximise your benefits. We also offer flexible payment plans for patients without insurance.",
      },
      {
        q: "What if I can't afford treatment?",
        a: "We believe everyone deserves a healthy smile. We offer 0% interest financing plans, as well as in-house membership plans for patients without insurance that cover cleanings, X-rays, and discounts on other treatments. Ask our front desk team for details.",
      },
      {
        q: "How much does a teeth cleaning cost?",
        a: "A routine cleaning and exam starts at $120. For patients with dental insurance, this is often fully or partially covered. We'll always provide you with a transparent cost estimate before beginning any treatment so there are no surprises.",
      },
    ],
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<string | null>("0-0");

  return (
    <section id="faq" className="bg-white pt-16 md:pt-24 lg:pt-32">
      <div className="w-[90%] mx-auto">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left sticky header */}
          <div className="lg:col-span-2 lg:sticky lg:top-24 h-fit">
            <span className="inline-block text-xs font-semibold tracking-[0.28em] uppercase text-[#ffa07a] font-['Cormorant_Garamond'] mb-4">
              Got Questions?
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium font-['Poppins'] text-[#1A365D] mb-6 leading-tight">
              Frequently Asked <span className=" text-[#ffa07a]">Questions</span>
            </h2>
            <p className="text-[16px] text-[#64748B] font-['Poppins'] leading-relaxed mb-8 font-light">
              We understand you may have questions before your first visit. Here are the answers to the most common ones. Can't find what you're looking for?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#1A365D] text-white font-semibold font-['Poppins'] text-[15px] px-8 py-4 rounded-full hover:bg-[#ffa07a] transition-colors duration-300"
            >
              Ask Us Directly →
            </a>

            {/* Decorative */}
            <div className="mt-12 hidden lg:block p-7 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-[#1A365D] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[13px] text-[#64748B] font-['Poppins']">Call us anytime</p>
                  <p className="text-[#1A365D] font-bold font-['Poppins'] text-[16px]">(555) 123-4567</p>
                </div>
              </div>
              <p className="text-[13px] text-[#64748B] font-['Poppins']">Mon–Fri 8am–7pm · Sat 9am–5pm</p>
            </div>
          </div>

          {/* Right accordion */}
          <div className="lg:col-span-3 space-y-10">
            {faqs.map((category, catIdx) => (
              <div key={catIdx}>
                <h3 className="text-[13px] font-bold tracking-[0.2em] uppercase text-[#2B6CB0] font-['Poppins'] mb-5">
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.questions.map((item, qIdx) => {
                    const key = `${catIdx}-${qIdx}`;
                    const isOpen = openIndex === key;
                    return (
                      <div
                        key={key}
                        className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                          isOpen
                            ? "border-[#ffa07a]/40 bg-white shadow-md"
                            : "border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm"
                        }`}
                      >
                        <button
                          className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left"
                          onClick={() => setOpenIndex(isOpen ? null : key)}
                        >
                          <span className="font-semibold text-[#1A365D] font-['Poppins'] text-[15px] pr-2">
                            {item.q}
                          </span>
                          <div
                            className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                              isOpen ? "bg-[#ffa07a] text-white" : "bg-gray-100 text-[#1A365D]"
                            }`}
                          >
                            {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                          </div>
                        </button>
                        <div
                          className={`transition-all duration-300 overflow-hidden ${
                            isOpen ? "max-h-64 pb-6 px-7" : "max-h-0"
                          }`}
                        >
                          <p className="text-[#64748B] font-['Poppins'] text-[15px] leading-relaxed font-light">{item.a}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}