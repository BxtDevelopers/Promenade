import { Lock, Clock, Receipt } from 'lucide-react'
import Reveal from '../common/Reveal'
import MakeAPaymentButton from '../common/MakeAPaymentButton'

const POINTS = [
  { icon: Lock, text: 'Secure, encrypted checkout handled by Vyne Trellis' },
  { icon: Clock, text: 'Pay any time — no account or login required' },
  { icon: Receipt, text: 'Card payments, with an emailed receipt' },
]

export default function PayYourBill() {
  return (
    <section className="py-[clamp(60px,7vw,104px)]" id="pay-bill">
      <div className="mx-auto max-w-[1240px] px-site">
        <Reveal
          className="grid grid-cols-1 items-center gap-[clamp(30px,4vw,56px)] rounded-[22px] border border-ivory bg-ivory/[0.02] px-[clamp(26px,3.4vw,44px)] py-[clamp(30px,3.4vw,44px)] lg:grid-cols-[1.25fr_1fr]"
          delay={0}
        >
          <div>
            <div className="text-[11.5px] font-medium uppercase tracking-[0.32em] text-accent">
              Already have a balance?
            </div>
            <h2 className="mt-[14px] font-serif text-[clamp(30px,4vw,52px)] font-light leading-[1.05] tracking-[-0.02em] text-ivory">
              Pay your bill <em className="font-normal italic text-accent">online</em>.
            </h2>
            <p className="mt-3 max-w-[56ch] text-[15.5px] font-light leading-relaxed text-ivory">
              Settle an outstanding statement in a couple of minutes from your phone or
              computer &mdash; no need to call the office or mail a check.
            </p>

            <ul className="mt-[26px] space-y-2">
              {POINTS.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="relative pl-[26px] text-[14.5px] font-light leading-[1.55] text-ivory"
                >
                  <Icon className="absolute left-0 top-[5px] h-3.5 w-3.5 stroke-[2.4] text-accent" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start gap-4 lg:items-center">
            <MakeAPaymentButton />
            <p className="max-w-[36ch] text-[13px] font-light leading-[1.55] text-body-2 lg:text-center">
              Opens our secure Vyne Trellis payment page in a new tab. Questions about a
              statement? Call{' '}
              <a href="tel:+14808028188" className="text-accent no-underline">
                (480) 802-8188
              </a>
              .
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
