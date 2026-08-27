'use client'

import Link from 'next/link'

/**
 * Carrier-required SMS opt-in disclosure (A2P/10DLC).
 *
 * Keep this component as the single source of the consent wording — carriers
 * compare the disclosure shown at opt-in against the SMS Terms published at
 * /privacy-policy#sms-terms, and the two must agree. If the practice ever
 * starts sending promotional messages, BOTH must be updated: the message types
 * declared here are informational and conversational only.
 *
 * The checkbox must never default to checked; pre-ticked consent is not valid
 * consent.
 */
export default function SmsConsent({
  id,
  checked,
  onChange,
  tone = 'light',
}: {
  /** Unique per form — BookingModal is mounted site-wide alongside page forms. */
  id: string
  checked: boolean
  onChange: (checked: boolean) => void
  tone?: 'light' | 'dark'
}) {
  const textClass = tone === 'dark' ? 'text-white/70' : 'text-ink/70'
  const linkClass =
    tone === 'dark'
      ? 'text-accent underline underline-offset-2 hover:text-white'
      : 'text-accent underline underline-offset-2 hover:text-ink'

  return (
    <div className="flex items-start gap-3">
      <input
        id={id}
        name="smsConsent"
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-[3px] h-4 w-4 shrink-0 cursor-pointer accent-coral"
      />
      <label htmlFor={id} className={`cursor-pointer text-[12px] leading-[1.6] ${textClass}`}>
        I agree to receive informational and conversational SMS from Promenade Dental at the
        number provided — appointment reminders, confirmations, and replies to messages I
        send. Reply STOP to unsubscribe; reply HELP for help. Msg &amp; data rates may apply.
        Messaging frequency may vary. See our{' '}
        <Link href="/privacy-policy#sms-terms" className={linkClass}>
          Privacy Policy and SMS Terms
        </Link>
        . Consent is not a condition of treatment.
      </label>
    </div>
  )
}
