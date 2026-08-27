import Reveal from '../common/Reveal'
import { DOCTOR } from '@/app/lib/data/doctorData'

export default function DoctorPhilosophy() {
  return (
    <section className="bg-bg-2 py-section">
      <div className="mx-auto max-w-[1240px] px-site">
        <Reveal>
          <span className="text-[11.5px] font-medium uppercase tracking-[0.32em] text-accent">
            How she practises
          </span>
          <h2 className="mt-[6px] max-w-[20ch] font-serif text-section font-light leading-[1.05] tracking-[-0.02em] text-white">
            Care that explains{' '}
            <em className="italic font-normal text-accent">itself</em>.
          </h2>
        </Reveal>

        <div className="mt-[clamp(32px,4vw,56px)] grid grid-cols-1 gap-x-10 gap-y-9 md:grid-cols-2">
          {DOCTOR.philosophy.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <div className="border-t border-line pt-6">
                <h3 className="font-serif text-[20px] font-light leading-[1.3] text-white">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[52ch] text-[15px] font-light leading-[1.7] text-body">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
