/**
 * Vyne Trellis bill-pay link. This is for paying an existing balance — distinct
 * from the Cherry / CareCredit financing links on /payments, which are about
 * spreading a *future* treatment cost over time.
 *
 * `image` renders Vyne's own branded button asset (the markup they supply);
 * `pill` matches the site's button system for use in the nav and footer.
 */

export const PAY_BILL_URL = 'https://pay.vynetrellis.com/p/nc8cr5ms'

type Props = {
  variant?: 'image' | 'pill'
  className?: string
  children?: React.ReactNode
}

export default function MakeAPaymentButton({
  variant = 'image',
  className = '',
  children,
}: Props) {
  if (variant === 'image') {
    return (
      <a
        href={PAY_BILL_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Make a payment (opens in a new tab)"
        className={`inline-block h-12 w-[156px] align-middle transition hover:-translate-y-0.5 ${className}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://pay.vynetrellis.com/make_a_payment.png"
          alt="Make a Payment"
          width={156}
          height={48}
          className="max-h-full max-w-full"
        />
      </a>
    )
  }

  return (
    <a
      href={PAY_BILL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children ?? 'Make a Payment'}
    </a>
  )
}
