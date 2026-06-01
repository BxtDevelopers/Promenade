/*
 * Updates applied based on design feedback:
 * - Typography: Implemented Poppins for headers and the logo, while using DM Sans for navigation links and body text to ensure strong hierarchy and character[cite: 9].
 * - Color System & Distinctiveness: Anchored the bottom of the page with the rich dark navy (#1A365D) to create a clear visual cadence, offset by the warm accent color (#ffa07a) for hover states[cite: 9].
 * - Whitespace & Layout: Built with a generous spacing scale, giving the columns and content blocks room to breathe, elevating the premium feel[cite: 9].
 * - Micro-interactions: Added refined, smooth hover states on all links and social icons for tactile feedback without excessive motion[cite: 9].
 */

"use client";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { FaFacebook,FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#1A365D] relative overflow-hidden pt-24 pb-8 border-t border-[#1A365D]/20">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ffa07a]/30 to-transparent" />
      <div className="absolute -bottom-[50%] -right-[10%] w-[80vw] h-[80vw] rounded-full bg-[#ffa07a]/5 blur-[120px] pointer-events-none" />

      <div className="w-[92%] max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 lg:pr-8">
            <a href="#home" className="flex flex-col leading-none group mb-6 inline-block">
              <span className="text-3xl font-black font-['Poppins'] text-white tracking-tight">
                Promenade<span className="text-[#ffa07a] ml-1.5 inline-block group-hover:-translate-y-1 transition-transform duration-300">✦</span>
              </span>
              <span className="text-[11px] tracking-[0.4em] uppercase font-['DM_Sans'] font-medium mt-1.5 text-white/50">
                Dental Studio
              </span>
            </a>
            <p className="text-white/70 font-['DM_Sans'] text-[15px] leading-relaxed mb-8 max-w-sm">
              Where cutting-edge technology meets genuine compassion. We are dedicated to providing award-winning care in a warm, stress-free environment.
            </p>
            <div className="flex items-center gap-4">
              {[FaFacebook, FaXTwitter, FaInstagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-[#ffa07a] hover:text-[#1A365D] hover:-translate-y-1 transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-white font-bold font-['Poppins'] text-[18px] mb-6">Explore</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Treatments', 'Patient Reviews', 'FAQ'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-white/70 font-['DM_Sans'] text-[15px] hover:text-[#ffa07a] transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold font-['Poppins'] text-[18px] mb-6">Services</h4>
            <ul className="space-y-4">
              {['General Dentistry', 'Cosmetic Care', 'Invisalign', 'Dental Implants', 'Emergency Care'].map((link) => (
                <li key={link}>
                  <a href="#services" className="text-white/70 font-['DM_Sans'] text-[15px] hover:text-[#ffa07a] transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold font-['Poppins'] text-[18px] mb-6">Contact</h4>
            <ul className="space-y-5">
              <li>
                <a href="#" className="flex items-start gap-3 text-white/70 hover:text-[#ffa07a] transition-colors group">
                  <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-white/40 group-hover:text-[#ffa07a] transition-colors" />
                  <span className="font-['DM_Sans'] text-[15px] leading-relaxed">
                    123 Smile Avenue, Suite 200<br />Toronto, ON M5V 1J2
                  </span>
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="flex items-center gap-3 text-white/70 hover:text-[#ffa07a] transition-colors group">
                  <Phone className="w-5 h-5 shrink-0 text-white/40 group-hover:text-[#ffa07a] transition-colors" />
                  <span className="font-['DM_Sans'] text-[15px]">(555) 123-4567</span>
                </a>
              </li>
              <li>
                <a href="mailto:hello@promenadedental.ca" className="flex items-center gap-3 text-white/70 hover:text-[#ffa07a] transition-colors group">
                  <Mail className="w-5 h-5 shrink-0 text-white/40 group-hover:text-[#ffa07a] transition-colors" />
                  <span className="font-['DM_Sans'] text-[15px]">hello@promenade.ca</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 font-['DM_Sans'] text-[13px]">
            &copy; {new Date().getFullYear()} Promenade Dental Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 hover:text-white font-['DM_Sans'] text-[13px] transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-white font-['DM_Sans'] text-[13px] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}