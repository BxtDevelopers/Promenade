import Reveal from '../common/Reveal'

const points = [
  {
    title: 'It covers our restorative work',
    body: 'Fillings, crowns, bridges and more that we place are backed by our guarantee against failure under normal use.',
  },
  {
    title: 'Keep your 6-month visits',
    body: 'Routine cleanings and exams with us are how we catch small issues early — and they keep your coverage active.',
  },
  {
    title: 'If it breaks, just tell us',
    body: 'Contact the office and we\u2019ll get you in. Covered work is repaired or replaced — at no cost to you.*',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-section">
      <div className="mx-auto max-w-[1240px] px-site">
        <Reveal>
          <span className="text-[11.5px] font-medium uppercase tracking-[0.32em] text-accent">
            How it works
          </span>
          <h2 className="mt-[6px] font-serif text-section font-light leading-[1.05] tracking-[-0.02em] text-ink">
            Simple, and <em className="italic font-normal text-accent">on your side</em>.
          </h2>
        </Reveal>

        <div className="mt-[40px] grid grid-cols-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point, i) => (
            <Reveal key={point.title} delay={i * 60} className="border-t border-coral/50 pt-5">
              <b className="mb-2 block font-serif text-2xl font-normal text-ink">
                {point.title}
              </b>
              <p className="text-[14px] font-light leading-[1.6] text-body">{point.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}