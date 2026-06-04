"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import AnimatedHeading from "../common/AnimatedHeading";

const hours = [
  { day: "Monday – Friday", time: "8:00 AM – 7:00 PM" },
  { day: "Saturday", time: "9:00 AM – 5:00 PM" },
  { day: "Sunday", time: "Emergency Only" },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", message: "", date: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white py-24 lg:py-32">
      <div className="w-[90%] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold tracking-[0.28em] uppercase text-[#ffa07a] font-['Cormorant_Garamond'] mb-4">
            Get in Touch
          </span>
            <AnimatedHeading
            text="Book Your"
            highlight="Appointment"
            className="text-4xl md:text-5xl lg:text-7xl font-bold font-['Sora'] text-[#1A365D] mb-5 leading-tight"
          />
          {/* <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-['Sora'] text-[#1A365D] mb-5">
            Book Your <span className=" text-[#ffa07a]">Appointment</span>
          </h2> */}
          <p className="text-xl text-[#64748B] font-['Poppins'] max-w-2xl mx-auto font-medium leading-relaxed">
            Ready for a healthier, more beautiful smile? Fill out the form below and our team will confirm your appointment within 2 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Info panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact cards */}
            {[
              { icon: Phone, label: "Call Us", value: " (480) 802-8188", href:"tel:+14808028188"},
              { icon: Mail, label: "Email Us", value: "info@promenadedds.com", href: "mailto:info@promenadedds.com" },
              { icon: MapPin, label: "Visit Us", value: "4905 S. Alma School Road, Suite 1 Chandler, AZ 85248 ", href: "https://www.google.com/maps?sll=33.235985,-111.859246&q=4905+S.+Alma+School+Road,+Suite+1+Chandler,+AZ+85248,+United+States&z=16" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                className="flex items-center gap-5 p-5 bg-white rounded-2xl border border-gray-100 hover:border-[#ffa07a]/30 hover:shadow-lg transition-all group shadow-sm"
              >
                <div className="w-13 h-13 rounded-xl bg-[#1A365D] flex items-center justify-center shrink-0 group-hover:bg-[#ffa07a] transition-colors p-3">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[13px] text-[#64748B] font-['Poppins']">{item.label}</p>
                  <p className="text-[15px] font-semibold text-[#1A365D] font-['Poppins']">{item.value}</p>
                </div>
              </a>
            ))}

            <div className="p-7 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <Clock className="w-5 h-5 text-[#ffa07a]" />
                <span className="font-bold text-[#1A365D] font-['Poppins'] text-[15px]">Opening Hours</span>
              </div>
              <div className="space-y-3">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between text-[15px] font-['Poppins']">
                    <span className="text-[#64748B] font-light">{h.day}</span>
                    <span className={`font-semibold ${h.time === "Emergency Only" ? "text-[#ffa07a]" : "text-[#1A365D]"}`}>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hours */}
            
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-14 bg-white rounded-3xl border border-gray-100 shadow-md">
                <div className="w-20 h-20 rounded-full bg-[#1A365D] flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-4xl font-light font-['Cormorant_Garamond'] text-[#1A365D] mb-3">Request Received!</h3>
                <p className="text-[16px] text-[#64748B] font-['Poppins'] leading-relaxed font-light">
                  Thank you, {form.name}! Our team will confirm your appointment within 2 hours. Check your email at {form.email} for a confirmation.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl border border-gray-100 p-9 lg:p-11 space-y-6 shadow-md"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { id: "name", label: "Full Name *", type: "text", placeholder: "Jane Smith" },
                    { id: "email", label: "Email Address *", type: "email", placeholder: "jane@example.com" },
                    { id: "phone", label: "Phone Number", type: "tel", placeholder: "(555) 000-0000" },
                    { id: "date", label: "Preferred Date", type: "date", placeholder: "" },
                  ].map((field) => (
                    <div key={field.id}>
                      <label className="block text-[13px] font-bold text-[#1A365D] font-['Poppins'] mb-2 tracking-wide">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        required={field.label.includes("*")}
                        placeholder={field.placeholder}
                        value={(form as any)[field.id]}
                        onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                        className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-[#1A365D] font-['Poppins'] text-[15px] placeholder-gray-400 focus:outline-none focus:border-[#ffa07a] focus:bg-white focus:ring-2 focus:ring-[#ffa07a]/10 transition-all"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-[#1A365D] font-['Poppins'] mb-2 tracking-wide">
                    Service Interested In
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-[#1A365D] font-['Poppins'] text-[15px] focus:outline-none focus:border-[#ffa07a] focus:bg-white focus:ring-2 focus:ring-[#ffa07a]/10 transition-all"
                  >
                    <option value="">Select a service...</option>
                    <option>General Dentistry / Check-up</option>
                    <option>Teeth Whitening</option>
                    <option>Invisalign / Orthodontics</option>
                    <option>Dental Implants</option>
                    <option>Veneers / Smile Makeover</option>
                    <option>Pediatric Dentistry</option>
                    <option>Emergency Care</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-[#1A365D] font-['Poppins'] mb-2 tracking-wide">
                    Message or Special Request
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your concerns or any questions you have..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-[#1A365D] font-['Poppins'] text-[15px] placeholder-gray-400 focus:outline-none focus:border-[#ffa07a] focus:bg-white focus:ring-2 focus:ring-[#ffa07a]/10 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-[#ffa07a] text-white font-bold font-['Poppins'] text-[16px] py-4.5 rounded-xl hover:bg-[#d05a24] hover:shadow-xl transition-all duration-300"
                >
                  <Send className="w-5 h-5" />
                  Book My Appointment
                </button>

                <p className="text-center text-[13px] text-[#94A3B8] font-['Poppins']">
                  By submitting, you agree to our Privacy Policy. We'll never share your details.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}