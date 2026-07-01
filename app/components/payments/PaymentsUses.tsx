import Reveal from '../common/Reveal'

const USES = [
  { title: 'Dentures & partials', body: 'Comfortable, removable tooth replacement' },
  { title: 'Crowns & bridges', body: 'Restoring damaged or missing teeth' },
  { title: 'Cosmetic & veneers', body: 'Whitening, veneers, smile makeovers' },
  { title: 'Clear aligners', body: 'Straightening for teens and adults' },
]

export default function PaymentsUses() {
  return (
    <section className="bg-bg-2 py-[clamp(60px,7vw,104px)]">
      <div className="mx-auto max-w-[1240px] px-site">
        <Reveal delay={0}>
          <div className="text-[11.5px] font-medium uppercase tracking-[0.32em] text-coral">
            What it covers
          </div>
          <h2 className="mt-[14px] font-serif text-[clamp(30px,4vw,52px)] font-light leading-[1.05] tracking-[-0.02em] text-ivory">
            Use it for the care that <em className="italic font-normal text-coral">matters most</em>.
          </h2>
        </Reveal>

        <div className="mt-[42px] grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {USES.map((use, i) => (
            <Reveal key={use.title} className="rounded-[18px] border border-line p-6" delay={i * 0.08}>
              <b className="mb-1.5 block font-serif text-[18px] font-normal text-ivory">
                {use.title}
              </b>
              <span className="block text-[13.5px] font-light leading-[1.55] text-muted">
                {use.body}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}