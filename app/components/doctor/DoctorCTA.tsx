import Link from 'next/link'
import Reveal from '../common/Reveal'
import BookButton from '../common/BookButton'

export default function DoctorCTA() {
  return (
    <section className="bg-bg py-section">
      <div className="mx-auto max-w-[1240px] px-site">
        <Reveal>
          <div className="rounded-[26px] bg-bg-2 px-[clamp(28px,5vw,72px)] py-[clamp(44px,6vw,80px)] text-center">
            <h2 className="mx-auto max-w-[20ch] font-serif text-section font-light leading-[1.05] tracking-[-0.02em] text-white">
              Book a visit with{' '}
              <em className="italic font-normal text-coral">Dr. Sarin</em>.
            </h2>
            <p className="mx-auto mt-5 max-w-[52ch] text-[15.5px] font-light leading-[1.7] text-muted">
              New patients are welcome, including those who have been away from
              dental care for a while.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <BookButton className="rounded-full bg-coral px-7 py-[14px] text-[14px] font-medium text-white transition-colors duration-200 hover:bg-coral-deep">
                Request an Appointment
              </BookButton>
              <Link
                href="/about-us"
                className="rounded-full border border-line px-7 py-[14px] text-[14px] font-medium text-white transition-colors duration-200 hover:border-coral hover:text-coral"
              >
                Meet the Whole Team
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
