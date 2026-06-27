const carriers = ['Delta Dental', 'Cigna', 'MetLife', 'Aetna']

export default function InsuranceSection() {
  return (
    <section id="insurance" className="py-[clamp(60px,7vw,100px)]">
      <div className="mx-auto max-w-[1240px] px-[clamp(22px,4vw,60px)]">
        <div
          className="rv grid items-center rounded-[26px] p-[clamp(34px,4vw,60px)] border border-[rgba(244,236,221,0.14)] bg-[linear-gradient(135deg,rgba(232,154,114,0.07),transparent_62%)] grid-cols-1 lg:grid-cols-[1.15fr_.85fr] gap-[clamp(34px,4vw,60px)]"
        >
          {/* Left */}
          <div>
            <span className="text-[11.5px] tracking-[0.32em] uppercase font-medium text-coral">
              Insurance
            </span>
            <h2
              className="font-serif font-light tracking-[-0.02em] leading-[1.08] text-ivory mt-[14px] text-[clamp(28px,3.4vw,44px)]"
            >
              Most PPO plans{' '}
              <em className="italic text-coral">accepted</em>.
            </h2>
            <p
              className="font-light text-[15.5px] leading-[1.75] mt-5 max-w-[50ch] text-muted"
            >
              We&apos;re in-network with most major plans and we&apos;ll maximize your benefits for
              you — no surprises.
            </p>
          </div>

          {/* Right */}
          <div>
            <div className="flex flex-wrap gap-[10px]">
              {carriers.map(c => (
                <div
                  key={c}
                  className="font-serif text-[16px] text-center rounded-[12px] flex-1 basis-[calc(50%-10px)] px-[20px] py-[14px] border border-[rgba(244,236,221,0.14)] bg-[rgba(244,236,221,0.03)] text-[color:var(--ivory-2)]"
                >
                  {c}
                </div>
              ))}
            </div>
            <p
              className="text-[12px] font-light mt-[14px] text-muted-2"
            >
              Carrier names are placeholders — we&apos;ll confirm your in-network list.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}