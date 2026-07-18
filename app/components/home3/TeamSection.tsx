import Reveal from '../common/Reveal'

const TEAM = [
  { name: 'Stephanie Crow', role: 'Patient Coordinator' },
  { name: 'Theresa Kelly', role: 'Dental Assistant' },
  { name: 'Jolyn Uhrinyak', role: 'Dental Hygienist' },
]

function initials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
}

export default function TeamSection() {
  return (
    <section id="team" className="bg-bg-2 pb-[clamp(70px,8vw,118px)]">
      <div className="mx-auto max-w-[1240px] px-[clamp(22px,4vw,60px)]">
        <Reveal className="mb-[clamp(34px,4vw,52px)]" delay={0}>
          <span className="text-[11.5px] tracking-[0.32em] uppercase font-medium text-coral">
            The people behind your care
          </span>
          <h2 className="font-serif font-light tracking-[-0.02em] leading-[1.05] text-white mt-2 text-[clamp(30px,4vw,52px)]">
            Meet the <em className="italic text-coral">team</em>.
          </h2>
        </Reveal>

        <div className="grid gap-[clamp(26px,3vw,40px)] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map(({ name, role }, i) => (
            <Reveal key={name} delay={i * 0.08}>
              <article className="text-center sm:text-left">
                <div
                  className="relative flex items-center justify-center rounded-[200px_200px_22px_22px] mb-[20px] aspect-[1.12] max-w-[220px] mx-auto sm:mx-0 bg-[linear-gradient(160deg,var(--panel),var(--bg-2))] border border-dashed border-[rgba(244,236,221,0.14)] overflow-hidden"
                >
                  {/* Swap this span for an <Image> once headshots are available */}
                  <span className="font-serif font-light text-coral text-[clamp(34px,4vw,46px)]">
                    {initials(name)}
                  </span>
                </div>

                <div className="text-[11.5px] tracking-[0.16em] uppercase font-medium text-coral">
                  {role}
                </div>
                <h3 className="font-serif font-light tracking-[-0.02em] leading-[1.1] mt-[10px] text-white text-[clamp(21px,2.4vw,26px)]">
                  {name}
                </h3>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}