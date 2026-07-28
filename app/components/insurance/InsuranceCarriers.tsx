import Reveal from '../common/Reveal'

const CARRIERS = [
  'Aetna',
  'Blue Cross Blue Shield',
  'Cigna',
  'Delta Dental',
  'Guardian',
  'Humana',
  'MetLife',
  'Premier Access',
  'Principal',
   'UFCW',
  'United Concordia',
  'UnitedHealthcare',
]

export default function InsuranceCarriers() {
  return (
    <section className="py-[clamp(60px,7vw,104px)]">
      <div className="mx-auto max-w-[1240px] px-site">
        <Reveal delay={0}>
          <div className="text-[11.5px] font-medium uppercase tracking-[0.32em] text-coral">
            Plans we work with
          </div>
          <h2 className="mt-[14px] font-serif text-[clamp(30px,4vw,52px)] font-light leading-[1.05] tracking-[-0.02em] text-ink">
            Chances are, <em className="italic font-normal text-coral">you&rsquo;re covered</em>.
          </h2>
        </Reveal>

        <Reveal
          className="mt-[30px] grid grid-cols-2 gap-[10px] sm:grid-cols-3 md:grid-cols-5"
          delay={0.1}
        >
          {CARRIERS.map((carrier) => (
            <div
              key={carrier}
              className="rounded-xl border border-line bg-ink px-3 py-[14px] text-center font-serif text-[16px] text-white"
            >
              {carrier}
            </div>
          ))}
        </Reveal>

        {/* <Reveal
          className="mt-[26px] rounded-2xl border border-dashed border-coral/50 bg-coral/[0.07] px-[18px] py-[15px] text-[13px] font-light leading-[1.55] text-cream"
          delay={0.2}
        >
          <b className="font-semibold text-coral">Confirm before launch:</b> being
          &ldquo;in-network&rdquo; is plan- and provider-specific. Please verify which of these
          you&rsquo;re truly in-network with versus simply accept, and swap these name chips for
          official carrier logos when you have them.
        </Reveal> */}
      </div>
    </section>
  )
}