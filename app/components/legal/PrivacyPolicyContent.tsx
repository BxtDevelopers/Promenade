'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'

const LAST_UPDATED = 'July 21, 2026'

type Section = {
  id: string
  title: string
  body: ReactNode
}

// function Callout({ children }: { children: ReactNode }) {
//   return (
//     <div className="mt-6 rounded-2xl border border-coral/30 bg-coral/5 px-5 py-4 text-[13px] leading-[1.7] text-ink/80">
//       <span className="font-semibold text-accent">Before this goes live: </span>
//       {children}
//     </div>
//   )
// }

function P({ children }: { children: ReactNode }) {
  return <p className="mt-4 text-[18px] leading-[1.75] text-ink/80">{children}</p>
}

function List({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mt-4 space-y-2.5 pl-5 text-[18px] leading-[1.7] text-ink/80">
      {items.map((item, i) => (
        <li key={i} className="list-disc marker:text-accent pl-1.5">
          {item}
        </li>
      ))}
    </ul>
  )
}

const sections: Section[] = [
  {
    id: 'introduction',
    title: '1. Introduction',
    body: (
      <>
        <P>
          Promenade Dental (&ldquo;Promenade Dental,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;) is committed to protecting your privacy and the confidentiality of
          your health information. This Privacy Policy explains two things: how we, as a
          healthcare provider, handle Protected Health Information (&ldquo;PHI&rdquo;) under the
          Health Insurance Portability and Accountability Act (HIPAA), and how we handle
          information collected through this website.
        </P>
        <P>
          This page is provided for your convenience and does not replace the printed Notice of
          Privacy Practices available at our office, which is the controlling document for how we
          use and disclose your PHI.
        </P>
      </>
    ),
  },
  {
    id: 'phi-uses',
    title: '2. How We Use and Disclose Your Health Information',
    body: (
      <>
        <P>
          As a HIPAA-covered healthcare provider, we may use and disclose your PHI, without your
          written authorization, for the following purposes:
        </P>
        <List
          items={[
            <>
              <span className="font-medium text-ink">Treatment</span> &mdash; sharing
              information among our dentists, hygienists, and staff, and with other providers
              involved in your care (e.g., specialists we refer you to).
            </>,
            <>
              <span className="font-medium text-ink">Payment</span> &mdash; submitting claims to
              your dental insurance, verifying benefits, and billing you directly for services
              rendered.
            </>,
            <>
              <span className="font-medium text-ink">Healthcare Operations</span> &mdash;
              quality improvement, staff training, appointment reminders, and normal practice
              administration.
            </>,
          ]}
        />
        <P>
          We may also disclose limited PHI where required or permitted by law &mdash; for example,
          in response to a court order, to public health authorities, or to prevent a serious
          threat to health or safety. Any other use of your PHI (such as marketing unrelated to
          your treatment) requires your written authorization, which you may revoke at any time.
        </P>
      </>
    ),
  },
  {
    id: 'patient-rights',
    title: '3. Your Rights Under HIPAA',
    body: (
      <>
        <P>You have the right to:</P>
        <List
          items={[
            'Request access to, and a copy of, your dental records.',
            'Request that we amend your records if you believe information is incorrect or incomplete.',
            'Request an accounting of certain disclosures of your PHI made by our office.',
            'Request restrictions on certain uses or disclosures of your PHI (we are not required to agree, except where you have paid in full out-of-pocket for a service).',
            'Request confidential communications — for example, that we contact you only at a certain phone number or address.',
            'Receive a paper copy of our full Notice of Privacy Practices upon request, even if you agreed to receive it electronically.',
            'File a complaint with our office or with the U.S. Department of Health and Human Services, Office for Civil Rights, if you believe your privacy rights have been violated. Filing a complaint will not affect your care.',
          ]}
        />
      </>
    ),
  },
  {
    id: 'website-privacy',
    title: '4. Information We Collect Through This Website',
    body: (
      <>
        <P>
          Separate from your clinical PHI, this website may collect limited information when you
          interact with it, such as when you request an appointment, call us, or fill out a
          contact form. This can include your name, phone number, email address, and any details
          you choose to share about the reason for your visit.
        </P>
        <P>We use this information only to:</P>
        <List
          items={[
            'Respond to your appointment request or inquiry.',
            'Confirm, reschedule, or follow up on appointments.',
            'Improve our website and the care we provide.',
          ]}
        />
        <P>
          We do not sell your personal information. Our website may use standard analytics or
          scheduling tools to operate — please avoid submitting detailed medical history through
          general contact forms; sensitive treatment details are best discussed by phone or in
          person.
        </P>
        <P>
          <strong className="font-medium text-ink">Mobile Opt-In Consent:</strong> No mobile opt-in message consent will be shared with third parties or affiliates for marketing purposes.
        </P>
        <P>
          Our site may use cookies or similar technologies for basic functionality and analytics.
          You can control cookies through your browser settings. This website is not directed at
          children under 13, and we do not knowingly collect information from children through the
          site.
        </P>
      </>
    ),
  },
  {
    id: 'sms-terms',
    title: '5. Text Message (SMS) Terms and Conditions',
    body: (
      <>
        <P>
          If you consent to receive SMS from Promenade Dental, you agree to receive
          informational and conversational SMS from us. That means appointment reminders,
          confirmations and reschedule notices, post-visit follow-up, and replies to
          messages you send us. We do not send marketing or promotional text messages.
        </P>
        <P>
          Reply STOP to unsubscribe; reply HELP for help. Msg &amp; data rates may apply.
          Messaging frequency may vary. Visit our{' '}
          <Link href="/privacy-policy" className="text-accent underline underline-offset-2 hover:text-ink">
            Privacy Policy
          </Link>{' '}
          and{' '}
          <Link href="/terms-and-conditions" className="text-accent underline underline-offset-2 hover:text-ink">
            Terms and Conditions
          </Link>
          .
        </P>
        <P>
          <strong className="font-medium text-ink">How we obtain your consent:</strong> you
          opt in by ticking the SMS box on a form on this website, by giving written consent
          at our office, or by texting us first. Consent is never pre-selected, and agreeing
          to receive text messages is not a condition of receiving treatment. You can
          withdraw consent at any time by replying STOP or by telling us at your next visit.
        </P>
        <P>
          <strong className="font-medium text-ink">Mobile Opt-In Consent:</strong> No mobile
          opt-in message consent will be shared with third parties or affiliates for
          marketing purposes.
        </P>
      </>
    ),
  },
  {
    id: 'security',
    title: '6. How We Protect Your Information',
    body: (
      <P>
        We maintain administrative, technical, and physical safeguards designed to protect your
        health information and any information submitted through this website, consistent with
        HIPAA&rsquo;s Security Rule. No method of transmission or storage is 100% secure, and we
        continually work to maintain appropriate safeguards.
      </P>
    ),
  },
  {
    id: 'retention',
    title: '7. Record Retention',
    body: (
      <P>
        We retain dental and health records in accordance with Arizona state requirements and our
        professional obligations. Records are retained for as long as required by law, and are
        disposed of securely afterward.
      </P>
    ),
  },
  {
    id: 'changes',
    title: '8. Changes to This Notice',
    body: (
      <P>
        We may update this policy from time to time to reflect changes in our practices or the
        law. The &ldquo;Last updated&rdquo; date at the top of this page reflects the most recent
        revision. Material changes to how we handle PHI will also be reflected in the printed
        Notice of Privacy Practices at our office.
      </P>
    ),
  },
  /*
   * The website audit flagged three CCPA gaps: no "Do Not Sell My Personal
   * Information" link, no stated method for requesting stored data, and forms
   * that never said why they collect it. This section answers the first two;
   * the forms carry their own purpose line.
   *
   * Note the framing. A single-location practice is very unlikely to meet any
   * CCPA threshold, and patient PHI is HIPAA-covered and expressly exempt from
   * CCPA either way — so the honest statement is that we do not sell, not a
   * bare opt-out link implying we do. The footer link still carries the
   * literal "Do Not Sell My Personal Information" wording that compliance
   * scanners look for, and points here.
   */
  {
    id: 'do-not-sell',
    title: '9. Your California Privacy Rights',
    body: (
      <>
        <P>
          <strong className="font-medium text-ink">
            We do not sell your personal information, and we do not share it for
            cross-context behavioral advertising.
          </strong>{' '}
          We have never done so, and we do not exchange your information for money or
          anything else of value. There is no sale for you to opt out of.
        </P>
        <P>
          Most of what we hold about you is protected health information governed by
          HIPAA, which carries stronger protections than California&rsquo;s consumer
          privacy law and is handled under the terms described above. The rights below
          apply to the limited website information described in section 4.
        </P>
        <P>You may ask us to:</P>
        <List
          items={[
            'Tell you what personal information we have collected about you through this website, where it came from, and who we shared it with.',
            'Send you a copy of that information.',
            'Delete that information, subject to the record-retention obligations described in section 7.',
            'Correct information that is inaccurate.',
          ]}
        />
        <P>
          <strong className="font-medium text-ink">How to make a request.</strong>{' '}
          Email{' '}
          <Link href="mailto:info@promenadedds.com" className="text-accent underline underline-offset-2 hover:text-ink">
            info@promenadedds.com
          </Link>{' '}
          with the subject line &ldquo;Privacy Request,&rdquo; or call{' '}
          <Link href="tel:+14808028188" className="text-accent underline underline-offset-2 hover:text-ink">
            (480) 802-8188
          </Link>{' '}
          and ask for the Privacy Officer. Tell us what you would like us to do and how
          to reach you. We will confirm receipt within 10 business days and respond
          within 45 days; if we need longer, we will tell you why and when to expect a
          reply.
        </P>
        <P>
          We will ask you to verify your identity before we act on a request, so that we
          do not hand your information to someone else. You may use an authorized agent,
          and we will ask for proof of their authority. Exercising any of these rights
          will never affect the care you receive from us.
        </P>
      </>
    ),
  },
  {
    id: 'contact',
    title: '10. Contact Us',
    body: (
      <>
        <P>
          If you have questions about this policy, want to exercise any of the rights listed
          above, or wish to file a complaint, please contact us:
        </P>
        <List
          items={[
            <>Promenade Dental &mdash; 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248</>,
            <>
              Phone:{' '}
              <Link href="tel:+14808028188" className="text-accent underline underline-offset-2 hover:text-ink">
                (480) 802-8188
              </Link>
            </>,
            <>
              Email:{' '}
              <Link href="mailto:info@promenadedds.com" className="text-accent underline underline-offset-2 hover:text-ink">
                info@promenadedds.com
              </Link>
            </>,
            <>Attn: Privacy Officer</>,
          ]}
        />
        {/* <Callout>
          confirm the name/direct email of the designated Privacy Officer, and add the current
          U.S. Department of Health and Human Services, Office for Civil Rights complaint link,
          before publishing.
        </Callout> */}
      </>
    ),
  },
]

export default function PrivacyPolicyContent() {
  return (
    <>
      <section className="relative pt-[clamp(120px,15vw,184px)] pb-[clamp(28px,4vw,40px)]">
        <div className="mx-auto max-w-[1240px] px-site">
          <span className="text-[11.5px] font-medium uppercase tracking-[0.32em] text-accent">
            Your privacy
          </span>

          <h1 className="mt-[18px] font-serif text-[clamp(34px,5.5vw,52px)] font-light leading-[1.05] tracking-[-0.025em] text-ink">
            Privacy <em className="italic font-normal text-accent">Policy.</em>
          </h1>

          <p className="mt-[20px] max-w-[58ch] text-[20px] font-light leading-[1.7] text-ink/80">
            How Promenade Dental protects and uses your personal and health information — both in
            our office and on this website.
          </p>

          <span className="mt-[22px] inline-flex items-center gap-2 rounded-full border border-line bg-ink px-4 py-[9px] text-[12.5px] tracking-[0.03em] text-cream">
            Last updated: {LAST_UPDATED}
          </span>
        </div>
      </section>

      <section className="pb-[clamp(60px,8vw,100px)]">
        <div className="mx-auto max-w-[1240px] px-site">
          {/* Table of contents */}
          <nav className="rounded-2xl border border-line/60 px-6 py-5">
            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-accent">
              On this page
            </span>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-[15.5px] text-ink/70 transition-colors hover:text-accent"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sections */}
          <div className="mt-[clamp(36px,5vw,56px)] space-y-[clamp(36px,5vw,52px)]">
            {sections.map((s) => (
              <div key={s.id} id={s.id} className="scroll-mt-28 border-t border-line/60 pt-8">
                <h2 className="font-serif text-[22px] font-normal leading-[1.2] tracking-[-0.01em] text-ink sm:text-[30px]">
                  {s.title}
                </h2>
                {s.body}
              </div>
            ))}
          </div>

          {/* <p className="mt-[clamp(40px,5vw,56px)] text-[12.5px] leading-[1.7] text-ink/50">
            This page is provided for general informational purposes and does not constitute
            legal advice. Please have this content reviewed by qualified legal counsel before
            publishing.
          </p> */}
        </div>
      </section>
    </>
  )
}