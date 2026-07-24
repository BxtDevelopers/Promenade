/*
 * Updates applied based on design feedback:
 * - Typography: Updated heading typography to Poppins to command visual authority, and body/subtitle text to DM Sans to establish a clear hierarchy and character[cite: 7].
 * - Cards & Components: Replaced flat accordion borders with subtle shadow layering, premium padding, and smooth transition states to make them feel tactile and interactive[cite: 7].
 * - Whitespace & Section Differentiation: Applied a soft warm background tone with generous spacing to break visual uniformity and create a comfortable reading rhythm[cite: 7].
 */

"use client";
import { useState } from "react";
import { Plus, Minus, PhoneCall, ArrowRight } from "lucide-react";

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
    <section id="faq" className="bg-[#FDE8D8]/30 py-24 lg:py-32 relative overflow-hidden">
      {/* Background Visual Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/40 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#ffa07a]/5 rounded-full blur-[80px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="w-[92%] max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-12">
          
          {/* Left Column: Sticky Header & CTA */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[2px] bg-[#ffa07a]" />
              <span className="text-sm font-bold tracking-[0.25em] uppercase text-[#ffa07a] font-['DM_Sans']">
                Got Questions?
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Poppins'] text-[#1A365D] mb-6 leading-[1.15] tracking-tight">
              Frequently Asked <br />
              <span className="text-[#ffa07a]">Questions</span>
            </h2>
            
            <p className="text-[17px] text-[#1A365D]/70 font-['DM_Sans'] font-medium leading-relaxed mb-10 max-w-md">
              We understand you may have questions before your first visit. Here are the answers to the most common ones. Can't find what you're looking for?
            </p>
            
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-[#1A365D] text-white font-bold font-['DM_Sans'] text-[16px] px-9 py-4.5 rounded-full hover:bg-[#ffa07a] transition-all duration-300 shadow-[0_10px_30px_rgba(26,54,93,0.15)] hover:shadow-[0_15px_40px_rgba(26,54,93,0.25)] hover:-translate-y-1"
            >
              Ask Us Directly
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Tactile Support Card */}
            <div className="mt-14 hidden lg:block p-8 rounded-[2rem] bg-white border border-[#1A365D]/5 shadow-[0_20px_50px_rgba(26,54,93,0.05)] hover:shadow-[0_25px_60px_rgba(26,54,93,0.1)] hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-5 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-[#FDE8D8] text-[#ffa07a] flex items-center justify-center shrink-0">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[14px] text-[#1A365D]/60 font-['DM_Sans'] font-bold uppercase tracking-wider mb-1">
                    Call Us Anytime
                  </p>
                  <p className="text-[#1A365D] font-black font-['Poppins'] text-xl">
                    (555) 123-4567
                  </p>
                </div>
              </div>
              <div className="w-full h-px bg-[#1A365D]/10 my-4" />
              <p className="text-[14px] text-[#1A365D]/70 font-['DM_Sans'] font-medium flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Tue–Thu 8am–7pm
              </p>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 space-y-12">
            {faqs.map((category, catIdx) => (
              <div key={catIdx}>
                <h3 className="text-[22px] font-bold text-[#1A365D] font-['Poppins'] mb-6 flex items-center gap-4">
                  {category.category}
                  <span className="h-px flex-1 bg-[#1A365D]/10" />
                </h3>
                
                <div className="space-y-4">
                  {category.questions.map((item, qIdx) => {
                    const key = `${catIdx}-${qIdx}`;
                    const isOpen = openIndex === key;
                    
                    return (
                      <div
                        key={key}
                        className={`rounded-2xl transition-all duration-300 overflow-hidden border ${
                          isOpen
                            ? "bg-white border-[#ffa07a]/30 shadow-[0_15px_35px_rgba(26,54,93,0.08)]"
                            : "bg-white border-[#1A365D]/5 shadow-[0_4px_15px_rgba(26,54,93,0.03)] hover:shadow-[0_10px_25px_rgba(26,54,93,0.06)] hover:border-[#ffa07a]/20"
                        }`}
                      >
                        <button
                          className="w-full flex items-center justify-between gap-6 px-8 py-6 text-left group cursor-pointer"
                          onClick={() => setOpenIndex(isOpen ? null : key)}
                        >
                          <span className={`font-bold font-['Poppins'] text-[17px] transition-colors duration-300 ${isOpen ? "text-[#ffa07a]" : "text-[#1A365D] group-hover:text-[#ffa07a]"}`}>
                            {item.q}
                          </span>
                          <div
                            className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                              isOpen 
                                ? "bg-[#ffa07a] text-white rotate-180 shadow-md" 
                                : "bg-[#FDE8D8]/50 text-[#1A365D] group-hover:bg-[#FDE8D8]"
                            }`}
                          >
                            {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                          </div>
                        </button>
                        
                        <div
                          className={`transition-all duration-500 ease-[0.22,1,0.36,1] ${
                            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="pb-8 px-8 border-t border-[#1A365D]/5 pt-5">
                            <p className="text-[#1A365D]/70 font-['DM_Sans'] text-[16px] leading-relaxed font-medium">
                              {item.a}
                            </p>
                          </div>
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