import { Droplet, Crown, Activity, Sparkles, Smile } from 'lucide-react'
import Reveal from '../common/Reveal'

interface CoverageItem {
  icon: typeof Droplet
  title: string
  period: string
  fails: string
  promise: string
  yourPart: string
}

const coverage: CoverageItem[] = [
  {
    icon: Droplet,
    title: 'Tooth-colored fillings',
    period: 'Warranty period: 2 years',
    fails: 'Breakage, leakage, or loss under normal use',
    promise: 'Repair or replace at no cost to you*',
    yourPart: 'Keep your 6-month cleanings & exams',
  },
  {
    icon: Crown,
    title: 'Crowns & bridges',
    period: 'Warranty period: 5 years',
    fails: 'Breakage, misfit, or leakage under normal use',
    promise: 'Repair or replace at no cost to you*',
    yourPart: 'Keep your 6-month cleanings & exams',
  },
  {
    icon: Activity,
    title: 'Root canals',
    period: 'Warranty period: 5 years',
    fails: 'The treated tooth develops a covered problem',
    promise: 'Re-treat, or credit the fee toward next steps*',
    yourPart: 'Keep your 6-month cleanings & exams',
  },
  // {
  //   icon: Sparkles,
  //   title: 'Veneers & bonding',
  //   period: 'Warranty period: [confirm]',
  //   fails: 'Debonding or chipping under normal use',
  //   promise: 'Repair or replace at no cost to you*',
  //   yourPart: 'Keep your 6-month cleanings & exams',
  // },
  // {
  //   icon: Smile,
  //   title: 'Dentures & partials',
  //   period: 'Warranty period: [confirm]',
  //   fails: 'Breakage or misfit under normal use',
  //   promise: 'Repair or replace at no cost to you*',
  //   yourPart: 'Keep your 6-month cleanings & exams',
  // },
]

export default function CoverageGrid() {
  return (
    <section className="bg-bg-2 py-section">
      <div className="mx-auto max-w-[1240px] px-site">
        <Reveal>
          <span className="text-[11.5px] font-medium uppercase tracking-[0.32em] text-coral">
            What&apos;s covered
          </span>
          <h2 className="mt-[6px] font-serif text-section font-light leading-[1.05] tracking-[-0.02em] text-white">
            Coverage by <em className="italic font-normal text-coral">treatment</em>.
          </h2>
        </Reveal>

        <div className="mt-[40px] grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {coverage.map(({ icon: Icon, title, period, fails, promise, yourPart }, i) => (
            <Reveal
              key={title}
              delay={i * 50}
              className="rounded-[20px] border border-line bg-gradient-to-b from-ivory/[0.02] to-transparent p-7"
            >
              <div className="mb-4 flex h-[38px] w-[38px] items-center justify-center rounded-full border border-coral/50">
                <Icon className="h-[18px] w-[18px] text-coral" strokeWidth={1.8} />
              </div>
              <h3 className="mb-1 font-serif text-[21px] font-normal text-white">{title}</h3>
              <div className="mb-2 text-[12px] font-medium uppercase tracking-[0.06em] text-coral">
                {period}
              </div>
              <dl>
                <dt className="mt-[13px] text-[11px] font-semibold uppercase tracking-[0.06em] text-ivory-2">
                  If it fails
                </dt>
                <dd className="mt-[3px] text-[13.5px] font-light leading-[1.5] text-muted">
                  {fails}
                </dd>
                <dt className="mt-[13px] text-[11px] font-semibold uppercase tracking-[0.06em] text-ivory-2">
                  Our promise
                </dt>
                <dd className="mt-[3px] text-[13.5px] font-light leading-[1.5] text-muted">
                  {promise}
                </dd>
                <dt className="mt-[13px] text-[11px] font-semibold uppercase tracking-[0.06em] text-ivory-2">
                  Your part
                </dt>
                <dd className="mt-[3px] text-[13.5px] font-light leading-[1.5] text-muted">
                  {yourPart}
                </dd>
              </dl>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}