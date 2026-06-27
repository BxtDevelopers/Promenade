export default function NewPatientsSection() {
  return (
    <section className="py-section bg-panel">
      <div className="lg:px-site max-w-[90%] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] lg:gap-[70px] items-center">

          {/* Content — left */}
          <div className="order-2 lg:order-1">
            <span className="inline-block text-[11.5px] font-medium tracking-eyebrow uppercase text-coral font-sans mb-4">
              New Patients
            </span>
            <h2 className="font-serif font-light text-3xl
              lg:text-[clamp(40px,4.6vw,80px)] leading-[1.05] tracking-[-0.02em] text-ivory">
              You'll know exactly{' '}
              <em className="not-italic text-coral">what to expect</em>.
            </h2>

            <div className="mt-6 md:mt-7 space-y-4">
              <p className="text-muted text-[15px] md:text-[16px] font-light leading-[1.75]">
                Switching dentists can feel like a big deal. So at your first visit, we slow down. Dr. Shriya will review your history, listen to what's been bothering you (or what you've been avoiding), and do a thorough exam before suggesting anything.
              </p>
              <p className="text-muted text-[15px] md:text-[16px] font-light leading-[1.75]">
                Your visit typically includes a comprehensive exam, digital imaging if needed, gum health evaluation, oral cancer screening, bite assessment, and an honest conversation about your options.
              </p>
              <p className="text-muted text-[15px] md:text-[16px] font-light leading-[1.75]">
                Nothing gets scheduled without your full understanding. We'll tell you what's urgent, what can wait, and what's entirely optional.
              </p>
            </div>

            <a
              href="/new-patients"
              className="inline-flex items-center gap-2 mt-8 text-[14px] text-coral font-light tracking-[0.02em]
                underline underline-offset-4 decoration-coral/40 hover:decoration-coral transition-colors"
            >
              View New Patient Information →
            </a>
          </div>

          {/* Image — right */}
          <div className="order-1 lg:order-2 flex flex-col gap-4">
            <div className="relative rounded-arch-sm overflow-hidden border border-line aspect-[5/4]">
              <img
                src="/assets/dental-lobby.jpg"
                alt="The welcoming reception area at Promenade Dental, Chandler AZ"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            {/* Social proof pull-quote under image */}
            <div className="rounded-[14px] border border-line bg-ivory/[0.02] px-5 py-4">
              <p className="text-ivory text-[14px] font-serif font-light leading-[1.6]">
                "I was nervous about finding a new dentist after moving. Dr. Shriya took her time explaining everything — I left feeling really good about the plan."
              </p>
              <p className="text-muted text-[12px] mt-2 tracking-[0.03em]">— Chandler patient · Google Review</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}