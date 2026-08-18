/**
 * Shared between the client-rendered accordion and the server-rendered
 * FAQPage JSON-LD. It must live outside the 'use client' module: importing a
 * value from a client module into a server component yields a client
 * reference rather than the array itself.
 */
export const FAQS = [
  {
    q: 'Are you accepting new patients?',
    a: "Yes \u2014 new patients are always welcome. Most requests can be scheduled within the same week, and we offer same-day appointments for emergencies.",
  },
  {
    q: 'Do I need a referral to book an appointment?',
    a: 'No referral needed. You can call, book online, or send us a message and we\u2019ll find a time that works for you.',
  },
  {
    q: 'What should I bring to my first visit?',
    a: 'Please bring a photo ID, your insurance card (if applicable), and a list of any current medications. If you have recent X-rays from another provider, feel free to bring those too.',
  },
  {
    q: 'Do you treat dental emergencies?',
    a: 'Yes. Call us as early as possible and let us know it\u2019s an emergency \u2014 we hold space in our schedule every day for urgent cases like severe pain, swelling, or a broken tooth.',
  },
  {
    q: 'Is parking available?',
    a: 'Yes, free parking is available directly outside our suite at Fulton Ranch \u2014 no garages or paid lots.',
  },
] as const;
