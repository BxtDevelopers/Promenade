import Link from 'next/link'

/**
 * Why this form collects what it collects.
 *
 * The website audit flagged that forms here take name, phone, email and
 * free-text health context without ever saying what happens to it. Disclosing
 * the purpose at the point of collection is a CCPA expectation and, more to the
 * point, it is what a patient handing over a phone number is entitled to know.
 *
 * Kept as one shared component for the same reason as SmsConsent: the wording
 * has to match what the Privacy Policy says, and four hand-copied paragraphs
 * drift. If the practice ever starts using form submissions for marketing, this
 * text and section 4 of the Privacy Policy must change together.
 */
export default function FormPurpose({
  tone = 'light',
}: {
  tone?: 'light' | 'dark'
}) {
  const textClass = tone === 'dark' ? 'text-white/70' : 'text-ink/70'
  const linkClass =
    tone === 'dark'
      ? 'text-accent underline underline-offset-2 hover:text-white'
      : 'text-accent underline underline-offset-2 hover:text-ink'

  return (
    <p className={`text-[12px] leading-[1.6] ${textClass}`}>
      We use the details you enter here only to respond to this request and to
      schedule or follow up on your care. We do not sell your information or use
      it for advertising. Please keep medical history out of this form — bring
      that to your visit or call us. See our{' '}
      <Link href="/privacy-policy#website-privacy" className={linkClass}>
        Privacy Policy
      </Link>
      .
    </p>
  )
}
