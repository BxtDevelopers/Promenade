import { Phone, Mail, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { MdCelebration } from "react-icons/md";

const footerLinks = {
  Services: [
    "General Dentistry",
    "Cosmetic Dentistry",
    "Orthodontics & Invisalign",
    "Dental Implants",
    "Teeth Whitening",
    "Pediatric Dentistry",
    "Emergency Dentistry",
  ],
  "Patient Info": [
    "New Patients",
    "Insurance & Financing",
    "Patient Forms",
    "Smile Gallery",
    "Dental Blog",
    "Refer a Friend",
  ],
  Clinic: [
    "About Us",
    "Meet the Team",
    "Careers",
    "Technology & Equipment",
    "Testimonials",
    "Contact Us",
  ],
};

const socials = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaXTwitter, href: "#", label: "X" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F1E35] text-white">
      {/* Top band */}
      <div className="bg-[#ffa07a] py-4">
        <div className="w-[95%] mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white font-['Poppins'] text-lg font-medium flex flex-wrap gap-3">
           <MdCelebration className="hidden md:block md:w-6 md:h-6" /> New Patient Special: Exam + X-rays at just $99 on your first visit. Limited spots available.
          </p>
          <a
            href="#contact"
            className="shrink-0 bg-white text-[#ffa07a] font-bold font-['Poppins'] text-[14px] px-7 py-2.5 rounded-full hover:bg-gray-100 transition-colors"
          >
            Claim Offer →
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="w-[95%] mx-auto py-20">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand column - text only */}
          <div className="lg:col-span-2 space-y-7">
            <div className="flex flex-col leading-none">
              <img src='/assets/PDlogo_red3.webp' alt='Promenade Dental Logo' className="w-72 h-auto" />
            </div>

            <p className="text-white/60 font-['Poppins'] text-[15px] leading-relaxed max-w-xs font-light">
              Award-winning dental care delivered with compassion, precision, and a genuine love for creating beautiful smiles.
            </p>

            {/* Contact info */}
            <div className="space-y-4">
              {[
                { icon: Phone, text: "(480) 802-8188", href: "tel:+14808028188" },
                { icon: Mail, text: "info@.promenadedds.com", href: "mailto:info@.promenadedds.com" },
                { icon: MapPin, text: "4905 S Alma School Rd, Chandler, AZ 85248, USA", href: "https://maps.app.goo.gl/13ePYvxzcpXJqD4e7" },
              ].map((item) => (
                <a
                  key={item.text}
                  href={item.href}
                  className="flex items-start gap-3 text-white/60 hover:text-[#F4845F] transition-colors text-[15px] font-['Poppins'] font-light"
                >
                  <item.icon className="w-4 h-4 mt-0.5 shrink-0 text-[#F4845F]" />
                  {item.text}
                </a>
              ))}
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ffa07a] transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-bold font-['Poppins'] text-[13px] mb-6 uppercase tracking-[0.2em]">
                {category}
              </h4>
              <ul className="space-y-3.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/50 hover:text-[#F4845F] font-['Poppins'] text-[15px] transition-colors font-light"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 p-9 rounded-3xl bg-white/5 border border-white/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-2xl font-semibold font-['Cormorant_Garamond'] text-white mb-1">
                Get Dental Tips & Exclusive Offers
              </h4>
              <p className="text-white/50 font-['Poppins'] text-[15px] font-light">
                Subscribe to our newsletter for oral health tips, special promotions, and clinic updates.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-2 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 lg:w-72 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-['Poppins'] text-[15px] placeholder-white/30 focus:outline-none focus:border-[#F4845F] transition-colors"
              />
              <button className="shrink-0 bg-[#ffa07a] text-white font-bold font-['Poppins'] text-[14px] px-7 py-3.5 rounded-full hover:bg-[#d05a24] transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[14px] text-white/40 font-['Poppins']">
          <p>© {new Date().getFullYear()} Promenade Dental Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/70 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white/70 transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}