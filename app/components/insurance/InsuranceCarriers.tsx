import Reveal from '../common/Reveal'

const CARRIERS = [
  'Aetna',
  'Ameritas',
  'Blue Cross Blue Shield',
  'Cigna',
  'Delta Dental',
  'Dominion',
  'GEHA',
  'Guardian',
  'Humana',
  'Kaiser PPO',
  'Lincoln Financial',
  'MetLife',
  'Moda',
  'Mutual of Omaha',
  'Pacific Source',
  'Premera',
  'Principal',
  'Sun Life',
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
          <h2 className="mt-[14px] font-serif text-[clamp(30px,4vw,52px)] font-light leading-[1.05] tracking-[-0.02em] text-ivory">
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
              className="rounded-xl border border-line bg-ivory/[0.03] px-3 py-[14px] text-center font-serif text-[16px] text-ivory-2"
            >
              {carrier}
            </div>
          ))}
        </Reveal>

        <Reveal
          className="mt-[26px] rounded-2xl border border-dashed border-coral/50 bg-coral/[0.07] px-[18px] py-[15px] text-[13px] font-light leading-[1.55] text-ivory-2"
          delay={0.2}
        >
          <b className="font-semibold text-coral">Confirm before launch:</b> being
          &ldquo;in-network&rdquo; is plan- and provider-specific. Please verify which of these
          you&rsquo;re truly in-network with versus simply accept, and swap these name chips for
          official carrier logos when you have them.
        </Reveal>
      </div>
    </section>
  )
}