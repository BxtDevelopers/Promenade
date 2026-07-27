import Link from 'next/link'
import Reveal from '../common/Reveal'

export default function VisitUs() {
  return (
    <section id="visit" className="py-section bg-bg-2">
      <div className="mx-auto max-w-[1240px] px-site">
        <Reveal>
          <span className="text-[11.5px] font-medium uppercase tracking-[0.32em] text-coral">
            Visit us
          </span>
          <h2 className="mt-[6px] font-serif text-section font-light leading-[1.05] tracking-[-0.02em] text-white">
            Right here in <em className="italic font-normal text-coral">Fulton Ranch</em>.
          </h2>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 items-center gap-[clamp(28px,4vw,52px)] lg:grid-cols-2">
          <Reveal>
            <p className="text-body-lg font-light leading-[1.6] text-ivory-2">
              Conveniently located in Fulton Ranch and Ocotillo, we care for families throughout
              South Chandler and Sun Lakes &mdash; and we are easy to reach from Intel and
              Chandler Fashion Center.
            </p>

            <div className="mt-[14px] text-[15px] leading-[1.8] text-ivory-2">
              <b className="font-medium text-ivory">Promenade Dental</b>
              <br />
              4905 S. Alma School Road, Suite 1
              <br />
              Chandler, AZ 85248
              <br />
              <Link href="tel:+14808028188" className="text-coral no-underline">
                (480) 802-8188
              </Link>
              <br />
              Mon 8am&mdash;1pm (by appointment only) &middot; Tue&mdash;Thu 8am&mdash;7pm &middot; Fri&mdash;Sun Closed
            </div>

            <p className="mt-3 text-[13.5px] text-muted">
              Free parking at the door &middot; Wheelchair accessible &middot; Serving Chandler,
              Ocotillo, Fulton Ranch &amp; Sun Lakes.
            </p>

            <div className="mt-[30px]">
              <Link
                href="https://maps.google.com/?q=4905+S+Alma+School+Road+Suite+1+Chandler+AZ+85248"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-3 whitespace-nowrap rounded-full bg-coral px-[30px] py-[17px] font-sans text-[14px] font-semibold uppercase tracking-[0.05em] text-bg shadow-[0_20px_44px_-18px_rgba(232,154,114,.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-ivory"
              >
                Get directions
              </Link>
            </div>
          </Reveal>

          <Reveal>
            <iframe
              className="aspect-[4/3] w-full rounded-[20px] border-0 shadow-2xl saturate-[0.92]"
              src="https://www.google.com/maps?q=4905+S+Alma+School+Road+Suite+1+Chandler+AZ+85248&output=embed"
              loading="lazy"
              title="Map to Promenade Dental, Chandler AZ"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}