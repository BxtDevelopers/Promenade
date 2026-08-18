'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { SERVICES } from '@/app/lib/data/serviceData';
import { SUB_SERVICES } from '@/app/lib/data/subServiceData'; // 👈 import your sub-services

const NAV_LINKS = [
  { label: 'Home', href: '/home02' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Contact', href: '/contact-us' },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openServiceSlug, setOpenServiceSlug] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${scrolled
          ? 'bg-bg/95 backdrop-blur-xl border-b border-line shadow-lg'
          : 'bg-transparent'
        }
      `}
    >
      <div className="px-site max-w-[90%] mx-auto flex items-center justify-between h-[90px]">

        {/* Logo */}
        <a href="/home02" className="flex items-center">
          <img
            src="/assets/PDlogo_red3.webp"
            alt="Promenade Dental Logo"
            className="w-52 md:w-56 h-auto transition-opacity duration-300"
          />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-[34px] list-none text-[13.5px] tracking-nav font-normal">
          {NAV_LINKS.slice(0, 2).map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="text-ink/[0.78] transition-colors duration-300 hover:text-ink"
              >
                {item.label}
              </Link>
            </li>
          ))}

          {/* Services Dropdown */}
          <li className="relative group">
            <button className="flex items-center gap-1 text-ink/[0.78] hover:text-ink transition-colors">
              Services
              <ChevronDown size={14} />
            </button>

            <div
              className="
                absolute left-1/2 -translate-x-1/2 top-full mt-4
                w-[280px]
                opacity-0 invisible
                group-hover:opacity-100 group-hover:visible
                transition-all duration-300
                bg-panel border border-line rounded-2xl
                p-3 shadow-xl
              "
            >
    


              {SERVICES.map((service) => {
                const subServices = SUB_SERVICES.filter(
                  (s) => s.serviceSlug === service.slug
                );
                const hasSubServices = subServices.length > 0;

                return (
                  // Each service row is itself a hover group for the sub-flyout
                  <div key={service.slug} className="relative group/sub">
                    <div className="flex items-center justify-between px-4 py-3 rounded-lg text-ink/80 hover:text-ink hover:bg-bg-2 transition-colors cursor-pointer">
                      <Link
                        href={`/services/${service.slug}`}
                        className="flex-1"
                        // Stop the parent dropdown from closing on click
                        onClick={(e) => e.stopPropagation()}
                      >
                        {service.name}
                      </Link>
                      {hasSubServices && (
                        <ChevronRight size={13} className="text-muted shrink-0" />
                      )}
                    </div>

                    {/* Sub-service flyout — opens to the right */}
                    {hasSubServices && (
                      <div
                        className="
                          absolute left-full top-0 ml-2
                          w-[220px]
                          opacity-0 invisible
                          group-hover/sub:opacity-100 group-hover/sub:visible
                          transition-all duration-200
                          bg-panel border border-line rounded-2xl
                          p-3 shadow-xl
                        "
                      >
                        {subServices.map((sub) => (
                          <Link
                            key={sub.slug}
                            href={`/services/${service.slug}/${sub.slug}`}
                            className="block px-4 py-2.5 rounded-lg text-ink/75 hover:text-ink hover:bg-bg-2 transition-colors text-[13px]"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

            <div className="h-px bg-line my-2" />


              <Link
                href="/services"
                className="block px-4 py-3 rounded-lg text-coral hover:bg-bg-2 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </li>

          <li>
            <Link
              href="/contact-us"
              className="text-ink/[0.78] transition-colors duration-300 hover:text-ink"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-[22px]">
          <a
            href="tel:+14808028188"
            className="hidden md:block text-ink text-[13.5px] tracking-nav opacity-85 no-underline"
          >
            (480) 802-8188
          </a>
          <div className="hidden md:block">
            <NavBookButton />
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 cursor-pointer"
          >
            <span className={['block w-6 h-px bg-ink transition-all duration-300 origin-center', menuOpen ? 'rotate-45 translate-y-[6px]' : ''].join(' ')} />
            <span className={['block w-6 h-px bg-ink transition-all duration-300', menuOpen ? 'opacity-0 scale-x-0' : ''].join(' ')} />
            <span className={['block w-6 h-px bg-ink transition-all duration-300 origin-center', menuOpen ? '-rotate-45 -translate-y-[6px]' : ''].join(' ')} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
  {menuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.28, ease: [0.16, 0.84, 0.34, 1] }}
      className="lg:hidden absolute top-[90px] left-0 right-0 bg-bg/95 backdrop-blur-md border-t border-line px-site pb-8 pt-6"
    >
      <ul className="flex flex-col gap-5 list-none mb-7">
        <li>
          <Link href="/home02" onClick={() => setMenuOpen(false)} className="text-ink/80 text-[16px]">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about-us" onClick={() => setMenuOpen(false)} className="text-ink/80 text-[16px]">
            About Us
          </Link>
        </li>

        {/* Mobile Services */}
        <li>
          {/* "Services" header — links to /services page like "View All Services" */}
          <div className="flex items-center justify-between mb-3">
            <Link
              href="/services"
              onClick={() => setMenuOpen(false)}
              className="text-ink font-medium text-[16px] hover:text-coral transition-colors"
            >
              Services
            </Link>
            <Link
              href="/services"
              onClick={() => setMenuOpen(false)}
              className="text-[11px] tracking-eyebrow uppercase text-coral/80 hover:text-coral transition-colors"
            >
              View All →
            </Link>
          </div>

          <div className="pl-4 flex flex-col border-l border-line/40">
            {SERVICES.map((service) => {
              const subServices = SUB_SERVICES.filter(
                (s) => s.serviceSlug === service.slug
              );
              const hasSubServices = subServices.length > 0;
              const isOpen = openServiceSlug === service.slug;

              return (
                <div key={service.slug} className="border-b border-line/20 last:border-b-0">
                  
                  {/* Service row */}
                  <div className="flex items-center justify-between py-3">
                    <Link
                      href={`/services/${service.slug}`}
                      onClick={() => setMenuOpen(false)}
                      className="text-muted hover:text-ink transition-colors text-[15px] flex-1"
                    >
                      {service.name}
                    </Link>

                    {/* Chevron only toggles sub-services, doesn't navigate */}
                    {hasSubServices && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenServiceSlug(isOpen ? null : service.slug);
                        }}
                        className="p-2 -mr-2 text-muted hover:text-coral transition-colors"
                        aria-label={isOpen ? 'Collapse sub-services' : 'Expand sub-services'}
                      >
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-coral' : ''}`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Sub-services — animated accordion */}
                  <AnimatePresence initial={false}>
                    {isOpen && hasSubServices && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 0.84, 0.34, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 border-l border-coral/20 flex flex-col gap-0 pb-3 ml-1">
                          {subServices.map((sub) => (
                            <Link
                              key={sub.slug}
                              href={`/services/${service.slug}/${sub.slug}`}
                              onClick={() => setMenuOpen(false)}
                              className="text-muted/60 hover:text-ink text-[13.5px] transition-colors py-2"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              );
            })}
          </div>
        </li>

        <li>
          <Link href="/contact-us" onClick={() => setMenuOpen(false)} className="text-ink/80 text-[16px]">
            Contact
          </Link>
        </li>
      </ul>

      <a href="tel:+14808028188" className="block text-muted text-[14px] tracking-nav mb-5 no-underline">
        (480) 802-8188
      </a>
      <NavBookButton />
    </motion.div>
  )}
</AnimatePresence>
    </nav>
  );
}

function NavBookButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={[
        'rounded-full px-[22px] py-[11px] font-sans text-[13px] tracking-wide2 uppercase font-medium cursor-pointer transition-all duration-300',
        hovered
          ? 'bg-ink text-bg border border-ink'
          : 'bg-transparent text-ink border border-ink/40',
      ].join(' ')}
    >
      Book a Visit
    </button>
  );
}

