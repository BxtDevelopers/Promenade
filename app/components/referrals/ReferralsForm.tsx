'use client'

import { useState } from 'react'
import Reveal from '../common/Reveal'
import SmsConsent from '../common/SmsConsent'
import FormPurpose from '../common/FormPurpose'
import { trackLead } from '@/app/lib/analytics'
import { attributionLine } from '@/app/lib/attribution'

export default function ReferralsForm() {
  const [smsConsent, setSmsConsent] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false) // Added submitting state

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true); // Set submitting to true when request starts
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Consent covers the referrer's own number, not the friend's.
        body: JSON.stringify({
          formType: 'referral',
          ...data,
          smsConsent,
          source: attributionLine(),
        }),
      });

      if (response.ok) {
        trackLead('referral');
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false); // Reset submitting state regardless of success/fail
    }
  }

  return (
    <section className="py-[clamp(60px,7vw,104px)]" id="refer">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-[clamp(30px,4vw,60px)] px-site lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal delay={0}>
          <div className="text-[11.5px] font-medium uppercase tracking-[0.32em] text-accent">
            Send a referral
          </div>
          <h2 className="mt-[14px] font-serif text-[clamp(30px,4vw,50px)] font-light leading-[1.05] tracking-[-0.02em] text-ink">
            Introduce a friend in <em className="italic font-normal text-accent">under a minute</em>.
          </h2>
          <p className="mt-[18px] max-w-[54ch] text-[clamp(16px,1.4vw,19px)] font-light leading-[1.6] text-ink">
            Tell us who to expect and we&rsquo;ll reach out to get them booked. Your credit lands
            on your account the moment their first visit is complete.
          </p>
        </Reveal>

        <Reveal
          className="rounded-[24px] border border-line bg-ink/90 px-[clamp(26px,3vw,34px)] py-[clamp(26px,3vw,34px)]"
          delay={0.1}
        >
          {submitted ? (
            <p className="text-[15px] font-light leading-[1.7] text-cream">
              Thanks &mdash; we&rsquo;ve got it. We&rsquo;ll reach out to your friend to get them
              booked, and your credit will land on your account once their first visit is
              complete.
            </p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-2">
                <Field label="Your name" name="yourName" placeholder="Jane Smith" />
                <Field
                  label="Your phone"
                  name="yourPhone"
                  type="tel"
                  placeholder="(480) 555-0100"
                />
              </div>
              <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-2">
                <Field label="Friend's name" name="friendName" placeholder="Alex Doe" />
                <Field
                  label="Friend's phone or email"
                  name="friendContact"
                  placeholder="alex@email.com"
                />
              </div>

              <div className="mb-[15px]">
                <label
                  htmlFor="notes"
                  className="mb-[7px] block text-[11.5px] font-medium uppercase tracking-[0.04em] text-cream"
                >
                  Anything we should know? (optional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  placeholder="They're a little nervous about dental visits&hellip;"
                  className="w-full rounded-[14px] border border-white bg-ink/[0.06] px-4 py-[13px] font-sans text-[14.5px] text-white outline-none focus:border-coral"
                />
              </div>

              <SmsConsent
                id="referrals-form-sms-consent"
                checked={smsConsent}
                onChange={setSmsConsent}
                tone="dark"
              />

              <FormPurpose tone="dark" />

              <button
                type="submit"
                disabled={isSubmitting} // Disables button while sending
                className="mt-1 w-full justify-center rounded-full border-none bg-coral px-[30px] py-[17px] text-center font-sans text-sm font-semibold uppercase tracking-[0.05em] text-ink hover:text-bg shadow-[0_20px_44px_-18px_rgba(232,154,114,.7)] transition hover:bg-ink disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send referral'}
              </button>

              <p className="mt-3 text-[12px] font-light text-white">
                By sending, you confirm your friend is okay with us reaching out. We&rsquo;ll
                never share their details with anyone else.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
}) {
  return (
    <div className="mb-[15px]">
      <label
        htmlFor={name}
        className="mb-[7px] block text-[11.5px] font-medium uppercase tracking-[0.04em] text-white"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-[14px] border border-white bg-ink/[0.06] px-4 py-[13px] font-sans text-[14.5px] text-white outline-none focus:border-coral"
      />
    </div>
  )
}