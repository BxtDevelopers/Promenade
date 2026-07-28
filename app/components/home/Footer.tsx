'use client';

import {
  MapPin,
  Phone,
  Clock3,} from 'lucide-react';
import Link from 'next/link';
import { FaFacebook, FaInstagram } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-[90%] mx-auto px-[clamp(22px,4vw,60px)] py-[80px]">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center">
              <img
                src="/assets/PDlogo_red3.webp"
                alt="Promenade Dental Logo"
                className="w-52 md:w-56 h-auto transition-opacity duration-300"
              />
            </a>

            <p className="text-muted max-w-[32ch] leading-relaxed text-[15px]">
              Modern family dentistry designed around comfort,
              transparency, and long-term oral health for every stage
              of life.
            </p>

            <div className="flex items-center gap-4 mt-8">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-muted hover:text-coral hover:border-coral transition-all"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-muted hover:text-coral hover:border-coral transition-all"
              >
                <FaFacebook size={18} />
              </a>
            </div>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="text-ink text-sm uppercase tracking-[0.16em] mb-5">
              Treatments
            </h3>

            <ul className="space-y-3 text-muted">
              <li>
                <a href="#" className="hover:text-coral transition-colors">
                  General Dentistry
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-coral transition-colors">
                  Cosmetic Dentistry
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-coral transition-colors">
                  Dental Implants
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-coral transition-colors">
                  Invisalign
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-coral transition-colors">
                  Emergency Care
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-ink text-sm uppercase tracking-[0.16em] mb-5">
              Company
            </h3>

            <ul className="space-y-3 text-muted">
              <li>
                <a href="#" className="hover:text-coral transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-coral transition-colors">
                  Meet the Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-coral transition-colors">
                  New Patients
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-coral transition-colors">
                  Insurance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-coral transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-ink text-sm uppercase tracking-[0.16em] mb-5">
              Visit Us
            </h3>

            <div className="space-y-5 text-muted text-[15px]">
              <Link href='https://maps.app.goo.gl/ufAu9qeLdfAFBAMr9' target='_blank' className="flex gap-3">
                <MapPin
                  size={18}
                  className="text-coral mt-1 shrink-0"
                />
                <span className='hover:text-white'>
                  4905 S. Alma School Road
                  <br />
                  Suite 1
                  <br />
                  Chandler, AZ 85248
                </span>
              </Link >

              <Link href='tel:+14808028188' target='_blank' className="flex gap-3">
                <Phone
                  size={18}
                  className="text-coral shrink-0"
                />
                <span className='hover:text-white'>(480) 802-8188</span>
              </Link>

              <div className="flex gap-3">
                <Clock3
                  size={18}
                  className="text-coral mt-1 shrink-0"
                />
                <span>
                  Mon–Fri: 8am–7pm
                  <br />
                  Sat: 9am–5pm
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-line my-10" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-muted-2 text-[13px]">
          <p>
            © 2026 Promenade Dental. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="hover:text-coral transition-colors"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-coral transition-colors"
            >
              Terms of Service
            </a>

            <a
              href="#"
              className="hover:text-coral transition-colors"
            >
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
