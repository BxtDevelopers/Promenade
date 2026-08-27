'use client';

import { useState } from 'react';
import { useScrollReveal } from '@/app/lib/useScrollReveal';
import CustomReasonDropdown from '../common/CustomDropDown';
import SmsConsent from '../common/SmsConsent';
import FormPurpose from '../common/FormPurpose';
import { trackLead } from '@/app/lib/analytics';
import { attributionLine } from '@/app/lib/attribution';

export default function ContactForm() {
  const [leadRef, leadIn] = useScrollReveal();
  const [formRef, formIn] = useScrollReveal();
  const [smsConsent, setSmsConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Added submitting state

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true); // Set submitting to true when request starts
    
    // Extract data from the native form element
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // smsConsent is sent explicitly as a boolean; FormData would otherwise
        // yield the string "on", or omit the key entirely when unchecked.
        // `source` reaches the practice inbox so the campaign survives the
        // hand-off into Dentrix, which is where cost per booked patient is won.
        body: JSON.stringify({
          formType: 'contact',
          ...data,
          smsConsent,
          source: attributionLine(),
        }),
      });

      if (response.ok) {
        trackLead('contact_request');
        setSubmitted(true);
      } else {
        console.error("Submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false); // Reset submitting state regardless of success/fail
    }
  };

  return (
    <section id="contact" className="py-section bg-bg-2">
      <div className="px-site max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[60px]">

          {/* Left — heading + quick info */}
          <div
            ref={leadRef as React.RefObject<HTMLDivElement>}
            className={[
              'transition-all duration-1000 ease-out',
              leadIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
            ].join(' ')}
          >
            <span className="inline-block text-[11.5px] font-medium tracking-eyebrow uppercase text-accent font-sans mb-4">
              Contact Us 
            </span>
            <h2 className="font-serif font-light text-3xl
              lg:text-[clamp(40px,4.6vw,80px)] leading-[1.05] tracking-[-0.02em] text-white max-w-[16ch]">
              Tell us how we can{' '}
              <em className="not-italic text-accent">help</em>.
            </h2>

            <p className="text-body text-[15px] md:text-[16px] font-light leading-[1.7] mt-6 max-w-[44ch]">
              Whether it&apos;s a question about treatment, insurance, or
              booking your first visit — fill out the form and our team will
              get back to you within one business day.
            </p>

            <div className="mt-10 space-y-5 max-w-[44ch]">
              <div className="flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-coral mt-2 shrink-0" />
                <p className="text-cream text-[14.5px] font-light leading-[1.7]">
                  Prefer to talk? Call{' '}
                  <a href="tel:+14808028188" className="text-accent hover:underline">
                    (480) 802-8188
                  </a>{' '}
                  during office hours.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-coral mt-2 shrink-0" />
                <p className="text-cream text-[14.5px] font-light leading-[1.7]">
                  Dental emergency? Mention it in your message and we&apos;ll
                  prioritize a same-day response.
                </p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div
            ref={formRef as React.RefObject<HTMLDivElement>}
            className={[
              'rounded-[22px] border border-white/80 bg-ink/[0.02] p-7 md:p-9',
              'transition-all duration-1000 ease-out delay-150',
              formIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
            ].join(' ')}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16">
                <h3 className="font-serif font-normal text-2xl text-white mb-3">
                  Message sent.
                </h3>
                <p className="text-body text-lg font-light leading-[1.7] max-w-[36ch]">
                  Thanks for reaching out — our team will get back to you.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Full name" name="name" type="text" placeholder="Jane Doe" required />
                  <Field label="Phone" name="phone" type="tel" placeholder="(480) 000-0000" />
                </div>

                <Field label="Email" name="email" type="email" placeholder="you@example.com" required />

                <div>
                  <CustomReasonDropdown/>
                </div>

                <div>
                  <label className="block text-[12.5px] tracking-eyebrow uppercase font-medium text-white mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="How can we help?"
                    className="w-full bg-transparent border border-white/70 rounded-xl px-4 py-3 text-[14.5px] text-white font-light placeholder:text-body focus:outline-none focus:border-coral transition-colors resize-none"
                  />
                </div>

                <SmsConsent
                  id="contact-form-sms-consent"
                  checked={smsConsent}
                  onChange={setSmsConsent}
                  tone="dark"
                />

                <FormPurpose tone="dark" />

                <button
                  type="submit"
                  disabled={isSubmitting} // Disables button while sending
                  className="inline-flex items-center justify-center bg-coral text-ink font-sans font-medium text-[14.5px] px-8 py-4 rounded-full transition-colors duration-300 hover:bg-coral-deep w-full sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit \u2192'} 
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[12.5px] tracking-eyebrow uppercase font-medium text-white mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full bg-transparent border border-white/70 rounded-xl px-4 py-3 text-[14.5px] text-white font-light placeholder:text-body focus:outline-none focus:border-coral transition-colors"
      />
    </div>
  );
}