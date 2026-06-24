export default function NewPatientsSection() {
  return (
    <section className="py-section bg-panel">
      <div className="lg:px-site max-w-[90%] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] lg:gap-[70px] items-center">

          {/* Content — left */}
          <div className="order-2 lg:order-1">
            <h2 className="font-serif font-light text-3xl
              lg:text-[clamp(40px,4.6vw,80px)] leading-[1.05] tracking-[-0.02em] text-ivory">
              New Patients{' '}
              <em className="not-italic text-coral">Are Welcome</em>.
            </h2>

            <div className="mt-6 md:mt-7 space-y-4">
              <p className="text-muted text-[15px] md:text-[16px] font-light leading-[1.75]">
                Choosing a new dentist is easier when you know what to
                expect. During your first visit, our team reviews your
                dental history, listens to your concerns, evaluates your
                oral health, and explains any findings clearly.
              </p>
              <p className="text-muted text-[15px] md:text-[16px] font-light leading-[1.75]">
                Your visit may include a comprehensive exam, digital imaging
                if needed, gum health evaluation, oral cancer screening,
                bite assessment, and a discussion of your treatment
                priorities.
              </p>
              <p className="text-muted text-[15px] md:text-[16px] font-light leading-[1.75]">
                If treatment is recommended, Dr. Shriya explains what is
                urgent, what is preventive, what is elective, and what
                options may be available.
              </p>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 mt-8 text-[14px] text-coral font-light tracking-[0.02em]
                underline underline-offset-4 decoration-coral/40 hover:decoration-coral transition-colors"
            >
              View New Patient Information
            </a>
          </div>

          {/* Image — right */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-arch-sm overflow-hidden border border-line aspect-[5/4] lg:aspect-[5/4]">
              <img
                src="/assets/dental-lobby.jpg"
                alt="New patient being welcomed at Promenade Dental in Chandler, AZ"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}