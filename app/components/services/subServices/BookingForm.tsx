import { useState } from "react";

export default function BookingForm({ service }: { service: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [fields, setFields] = useState({
    name: '',
    phone: '',
    email: '',
    service: service,
    date: '',
    message: '',
  });

  const set = (k: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setFields((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = () => {
    if (!fields.name || !fields.phone || !fields.email) return;
    setSubmitted(true);
  };

  const inputClass =
    'w-full bg-white border border-ivory/50 rounded-[10px] px-4 py-[13px] text-ivory text-[14px] font-light placeholder:text-ivory focus:outline-none focus:border-coral/60 transition-colors duration-200';

  const labelClass = 'block text-[11px] tracking-eyebrow uppercase font-medium text-ivory mb-[7px]';

  if (submitted) {
    return (
      <div
        className="rounded-[20px] border border-ivory/10 flex flex-col items-center justify-center text-center gap-4 py-16 px-8"
        style={{ background: 'rgba(244,236,221,0.04)', backdropFilter: 'blur(12px)' }}
      >
        <span className="w-12 h-12 rounded-full border border-coral/40 flex items-center justify-center text-coral text-xl">✓</span>
        <p className="font-serif font-light text-ivory text-2xl">We'll be in touch</p>
        <p className="text-muted text-[14px] font-light leading-relaxed max-w-[30ch]">
          Thanks, {fields.name.split(' ')[0]}. A member of our team will reach out within one business day to confirm your visit.
        </p>
      </div>
    );
  }

  return (
    <div
      className="rounded-[20px] border border-coral/60 p-7 md:p-8 bg-white"
    //   style={{ background: 'rgba(244,236,221,0.04)', backdropFilter: 'blur(12px)' }}
    >
      {/* Form header */}
      <p className="text-[11px] tracking-eyebrow uppercase font-medium text-coral mb-1">Request an Appointment</p>
      <p className="font-serif font-light text-ivory text-xl leading-snug mb-6">
        Book your visit in&nbsp;<em className="not-italic text-coral">60 seconds</em>
      </p>

      <div className="flex flex-col gap-4">
        {/* Name + Phone */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Full name</label>
            <input className={inputClass} placeholder="Jane Smith" value={fields.name} onChange={set('name')} name='name' />
          </div>
          <div>
            <label className={labelClass}>Phone</label>
            <input className={inputClass} placeholder="(480) 555-0100" value={fields.phone} onChange={set('phone')} />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className={labelClass}>Email</label>
          <input type="email" className={inputClass} placeholder="jane@email.com" value={fields.email} onChange={set('email')} />
        </div>

        {/* Service */}
        <div>
          <label className={labelClass}>Service</label>
          <select
            className={inputClass + ' appearance-none cursor-pointer'}
            value={fields.service}
            onChange={set('service')}
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(244,236,221,0.3)' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center' }}
          >
            <option value="" className="bg-white">Select a service…</option>
            {['General Dentistry', 'Cosmetic Dentistry', 'Teeth Whitening', 'Invisalign', 'Dental Implants', 'Emergency Care'].map((s) => (
              <option key={s} value={s} className="bg-white">{s}</option>
            ))}
          </select>
        </div>

        {/* Preferred date */}
        <div>
          <label className={labelClass}>Preferred date</label>
          <input
            type="date"
            className={inputClass}
            value={fields.date}
            onChange={set('date')}
            style={{ colorScheme: 'dark' }}
          />
        </div>

        {/* Message */}
        <div>
          <label className={labelClass}>Anything we should know? <span className="normal-case text-ivory/25">(optional)</span></label>
          <textarea
            rows={2}
            className={inputClass + ' resize-none'}
            placeholder="e.g. dental anxiety, insurance info…"
            value={fields.message}
            onChange={set('message')}
          />
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className="w-full mt-1 py-[15px] rounded-full font-sans font-semibold text-[13px] tracking-wide2 uppercase bg-coral text-bg border-none cursor-pointer transition-all duration-300 hover:bg-ivory hover:text-bg hover:-translate-y-0.5 shadow-btn"
        >
          Request Appointment →
        </button>

        <p className="text-center text-sm text-ivory/60 font-light -mt-1">
          No commitment — we'll confirm availability with you first.
        </p>
      </div>
    </div>
  );
}