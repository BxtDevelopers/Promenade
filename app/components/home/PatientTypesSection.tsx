const PATIENT_TYPES = [
  {
    no: '01',
    label: 'Routine Care',
    text: 'A family dentist in Chandler for regular exams and cleanings',
  },
  {
    no: '02',
    label: 'Tooth Repair',
    text: 'A restorative dentist for crowns, bridges, fillings, dentures, or root canals',
  },
  {
    no: '03',
    label: 'Tooth Replacement',
    text: 'An implant dentist to discuss missing tooth replacement',
  },
  {
    no: '04',
    label: 'Urgent Care',
    text: 'An emergency dentist for tooth pain, swelling, or broken teeth',
  },
  {
    no: '05',
    label: 'Dental Anxiety',
    text: 'A gentle dentist for dental anxiety or past negative dental experiences',
  },
  {
    no: '06',
    label: 'New Patients',
    text: 'A new patient dentist near Fulton Ranch or Chandler 85248',
  },
] as const;

// export default function PatientTypesSection() {
//   return (
//     <section className="py-section">
//       <div className="px-site max-w-[90%] mx-auto">

//         {/* Header */}
//         <div className="flex items-end justify-between gap-[30px] flex-wrap mb-[30px]">
//           <div>
//             <h2 className="font-serif font-light text-3xl
//               lg:text-[clamp(40px,4.6vw,80px)] leading-[1.05] tracking-[-0.02em] text-ink">
//               A Chandler Dental Office for{' '}
//               <em className="not-italic text-accent">Families, Adults, and Smile-Focused Patients</em>.
//             </h2>
//             <p className="text-body text-[15px] md:text-[16px] font-light leading-[1.75] mt-5 max-w-[80%]">
//               Promenade Dental serves patients with different needs, ages, and
//               treatment goals. The common thread is that every patient
//               deserves careful diagnosis, honest explanation, and dentistry
//               that supports long-term oral health.
//             </p>
//           </div>
//         </div>

//         {/* Intro line */}
//         <p className="font-serif text-[18px] md:text-[20px] text-ink font-light mt-12 mb-[18px]">
//           We commonly help patients who are looking for:
//         </p>

//         {/* List */}
//         <div className="flex flex-col">
//           {PATIENT_TYPES.map((p) => (
//             <PatientRow key={p.no} item={p} />
//           ))}
//         </div>

//         {/* Closing line */}
//         <p className="text-body text-[15px] md:text-[16px] font-light leading-[1.75] mt-10 max-w-[80%]">
//           Whether your visit is simple, urgent, cosmetic, or complex, the
//           first step is understanding your condition clearly.
//         </p>

//       </div>
//     </section>
//   );
// }

// /* ── Individual row ────────────────────────────────────── */
// function PatientRow({
//   item,
// }: {
//   item: (typeof PATIENT_TYPES)[number];
// }) {
//   return (
//     <div
//       className="group relative flex items-center gap-6 md:gap-10 py-6 px-1
//         border-t border-line transition-all duration-[450ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]
//         hover:bg-coral/5 cursor-pointer"
//     >
//       {/* Number */}
//       <span className="font-serif text-[18px] text-body-2 tracking-[0.1em] shrink-0 w-[28px]">
//         {item.no}
//       </span>

//       {/* Label */}
//       <span className="font-serif font-normal text-[clamp(16px,1.6vw,20px)] text-ink shrink-0
//         w-[150px] md:w-[190px] leading-[1.3]">
//         {item.label}
//       </span>

//       {/* Text */}
//       <span className="text-body text-[14.5px] md:text-[15px] font-light leading-[1.65] flex-1">
//         {item.text}
//       </span>

//       {/* Arrow indicator */}
//       <span
//         aria-hidden="true"
//         className="font-serif text-accent text-[20px] shrink-0 opacity-0 -translate-x-2
//           transition-all duration-[450ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]
//           group-hover:opacity-100 group-hover:translate-x-0"
//       >
//         →
//       </span>
//     </div>
//   );
// }

export default function PatientTypesSection() {
  return (
    <section className="py-section">
      <div className="lg:px-site max-w-[90%] mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between gap-[30px] flex-wrap mb-[30px] text-center">
          <div>
            <h2 className="font-serif font-light text-3xl
              lg:text-[clamp(40px,4.6vw,80px)] leading-[1.05] tracking-[-0.02em] text-ink">
              A Chandler Dental Office for{' '}
              <em className="not-italic text-accent">Families, Adults, and Smile-Focused Patients</em>.
            </h2>
            <p className="text-body text-[15px] md:text-[16px] font-light leading-[1.75] mt-5 lg:max-w-[80%] mx-auto">
              Promenade Dental serves patients with different needs, ages, and
              treatment goals. The common thread is that every patient
              deserves careful diagnosis, honest explanation, and dentistry
              that supports long-term oral health.
            </p>
          </div>
        </div>

        {/* Intro line */}
        <p className="font-serif text-[18px] md:text-[20px] text-ink font-light mt-12 mb-[18px] text-center">
          We commonly help patients who are looking for:
        </p>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PATIENT_TYPES.map((p) => (
            <PatientCard key={p.no} item={p} />
          ))}
        </div>

        {/* Closing line */}
        <p className="text-body text-[15px] md:text-[16px] font-light leading-[1.75] mt-10 text-center lg:max-w-[80%] mx-auto">
          Whether your visit is simple, urgent, cosmetic, or complex, the
          first step is understanding your condition clearly.
        </p>

      </div>
    </section>
  );
}

/* ── Individual Card ────────────────────────────────────── */
function PatientCard({
  item,
}: {
  item: (typeof PATIENT_TYPES)[number];
}) {
  return (
    <div
      className="group relative flex flex-col justify-between gap-4 p-6 md:p-8
        border border-line rounded-lg transition-all duration-[450ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]
        hover:bg-coral/5 hover:border-coral/30 cursor-pointer"
    >
      <div className="flex flex-col gap-4">
        {/* Top Header: Number and Arrow */}
        <div className="flex items-center justify-between">
          <span className="font-serif text-[18px] text-body-2 tracking-[0.1em]">
            {item.no}
          </span>
        </div>

        {/* Label */}
        <h3 className="font-serif font-normal text-[clamp(18px,1.8vw,22px)] text-ink leading-[1.3]">
          {item.label}
        </h3>

        {/* Text */}
        <p className="text-body text-[14.5px] md:text-[15px] font-light leading-[1.65]">
          {item.text}
        </p>
      </div>
    </div>
  );
}