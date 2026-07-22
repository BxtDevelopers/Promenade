'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'

const LAST_UPDATED = 'July 21, 2026'

type Section = {
  id: string
  title: string
  body: ReactNode
}

function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="mt-6 rounded-2xl border border-coral/30 bg-coral/5 px-5 py-4 text-[13px] leading-[1.7] text-ivory/80">
      <span className="font-semibold text-coral">Before this goes live: </span>
      {children}
    </div>
  )
}

function P({ children }: { children: ReactNode }) {
  return <p className="mt-4 text-[18px] leading-[1.75] text-ivory/80">{children}</p>
}

function List({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mt-4 space-y-2.5 pl-5 text-[18   px] leading-[1.7] text-ivory/80">
      {items.map((item, i) => (
        <li key={i} className="list-disc marker:text-coral pl-1.5">
          {item}
        </li>
      ))}
    </ul>
  )
}

const sections: Section[] = [
  {
    id: 'acceptance',
    title: '1. Acceptance of Terms',
    body: (
      <P>
        By using this website, you agree to these Terms &amp; Conditions. If you do not agree,
        please discontinue use of the site. We may update these terms from time to time; the
        &ldquo;Last updated&rdquo; date above reflects the most recent revision.
      </P>
    ),
  },
  {
    id: 'about-site',
    title: '2. About This Website',
    body: (
      <>
        <P>
          This website provides general information about Promenade Dental and the services we
          offer in Chandler, AZ. Content on this site &mdash; including service descriptions and
          blog-style pages &mdash; is for informational purposes only and is{' '}
          <span className="font-medium text-ivory">not a substitute for professional dental advice, diagnosis, or treatment</span>
          . Always consult a licensed dentist regarding any dental or health concern.
        </P>
        <P>
          Browsing this website, submitting a contact form, or requesting an appointment online
          does not, by itself, create a dentist-patient relationship. That relationship begins
          once you are seen and accepted as a patient at our office.
        </P>
      </>
    ),
  },
  {
    id: 'appointments',
    title: '3. Appointments & Scheduling',
    body: (
      <>
        <P>
          Requests submitted through this website (via our booking tool, contact form, or phone
          number) are requests only and are not confirmed until our office contacts you directly.
          We aim to respond promptly, and same-day emergency requests are handled by phone
          whenever possible.
        </P>
        <P>
          Please arrive on time for scheduled visits. Cancellations or rescheduling should be made
          as far in advance as possible so we can offer the time to another patient.
        </P>
        <Callout>
          confirm your practice&rsquo;s specific cancellation / late-arrival / no-show policy
          (notice period, any fees) so it can be stated here accurately.
        </Callout>
      </>
    ),
  },
  {
    id: 'fees',
    title: '4. Fees, Insurance & Payment',
    body: (
      <>
        <P>
          Any pricing, insurance, or promotional information shown on this website (such as
          new-patient specials) is provided for general reference and is subject to change without
          notice. We accept most major PPO plans, but coverage varies by carrier and plan, and we
          cannot guarantee benefits until they are verified with your insurer.
        </P>
        <P>
          You will always be shown your treatment plan and estimated cost, and asked to approve
          it, before treatment begins. You remain responsible for any portion of the cost not
          covered by your insurance.
        </P>
      </>
    ),
  },
  {
    id: 'warranty-reference',
    title: '5. Treatment Outcomes & Our Warranty',
    body: (
      <P>
        We do not guarantee specific treatment outcomes on this website. Certain restorative work
        we perform is backed by our written care guarantee — see our{' '}
        <Link href="/warranty" className="text-coral hover:text-ivory">
          Warranty page
        </Link>{' '}
        for what is covered, for how long, and what is required to keep coverage active.
      </P>
    ),
  },
  {
    id: 'ip',
    title: '6. Website Content & Intellectual Property',
    body: (
      <P>
        The text, images, logos, and design of this website are owned by Promenade Dental or used
        with permission, and are protected by applicable copyright and trademark law. You may view
        and share pages for personal, non-commercial use, but may not copy, reproduce, or
        republish substantial portions of this site without our written permission.
      </P>
    ),
  },
  {
    id: 'conduct',
    title: '7. Acceptable Use',
    body: (
      <>
        <P>When using this website, you agree not to:</P>
        <List
          items={[
            'Submit false, misleading, or another person\u2019s health information without their authorization.',
            'Attempt to gain unauthorized access to any part of the site or our systems.',
            'Use the site for any unlawful purpose or in a way that could damage, disable, or impair it.',
            'Send unsolicited advertising or spam through our contact or booking forms.',
          ]}
        />
      </>
    ),
  },
  {
    id: 'third-party',
    title: '8. Third-Party Links',
    body: (
      <P>
        This site may link to third-party websites (such as insurance carriers, review platforms,
        or map services) for your convenience. We do not control and are not responsible for the
        content, privacy practices, or availability of those external sites.
      </P>
    ),
  },
  {
    id: 'liability',
    title: '9. Disclaimer & Limitation of Liability',
    body: (
      <P>
        This website and its content are provided &ldquo;as is&rdquo; without warranties of any
        kind, express or implied. To the fullest extent permitted by law, Promenade Dental is not
        liable for any indirect, incidental, or consequential damages arising from your use of
        this website or reliance on information found on it. Nothing in this section limits any
        rights you have under our written treatment warranty or applicable law.
      </P>
    ),
  },
  {
    id: 'governing-law',
    title: '10. Governing Law',
    body: (
      <P>
        These Terms &amp; Conditions are governed by the laws of the State of Arizona, without
        regard to its conflict-of-law principles.
      </P>
    ),
  },
  {
    id: 'contact',
    title: '11. Contact Us',
    body: (
      <>
        <P>Questions about these Terms &amp; Conditions can be directed to:</P>
        <List
          items={[
            <>Promenade Dental &mdash; 4905 S. Alma School Road, Suite 1, Chandler, AZ 85248</>,
            <>
              Phone:{' '}
              <Link href="tel:+14808028188" className="text-coral hover:text-ivory">
                (480) 802-8188
              </Link>
            </>,
          ]}
        />
      </>
    ),
  },
]

export default function TermsContent() {
  return (
    <>
      <section className="relative pt-[clamp(120px,15vw,184px)] pb-[clamp(28px,4vw,40px)]">
        <div className="mx-auto max-w-[1240px] px-site">
          <span className="text-[11.5px] font-medium uppercase tracking-[0.32em] text-coral">
            Website terms
          </span>

          <h1 className="mt-[18px] font-serif text-[clamp(34px,5.5vw,52px)] font-light leading-[1.05] tracking-[-0.025em] text-ivory">
            Terms &amp; <em className="italic font-normal text-coral">Conditions.</em>
          </h1>

          <p className="mt-[20px] max-w-[58ch] text-[20px] font-light leading-[1.7] text-ivory/80">
            The terms that govern your use of this website and requests made through it.
          </p>

          <span className="mt-[22px] inline-flex items-center gap-2 rounded-full border border-line bg-ivory px-4 py-[9px] text-[12.5px] tracking-[0.03em] text-ivory-2">
            Last updated: {LAST_UPDATED}
          </span>
        </div>
      </section>

      <section className="pb-[clamp(60px,8vw,100px)]">
        <div className="mx-auto max-w-[1240px] px-site">
          {/* Table of contents */}
          <nav className="rounded-2xl border border-line/60 px-6 py-5">
            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-coral">
              On this page
            </span>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-[17.5px] text-ivory/70 transition-colors hover:text-coral"
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
                <h2 className="font-serif text-[22px] font-normal leading-[1.2] tracking-[-0.01em] text-ivory sm:text-[30px]">
                  {s.title}
                </h2>
                {s.body}
              </div>
            ))}
          </div>

          <p className="mt-[clamp(40px,5vw,56px)] text-[12.5px] leading-[1.7] text-ivory/50">
            This page is provided for general informational purposes and does not constitute
            legal advice. Please have this content reviewed by qualified legal counsel before
            publishing.
          </p>
        </div>
      </section>
    </>
  )
}