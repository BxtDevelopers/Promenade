import type { Metadata } from 'next'
import Script from 'next/script'
import '../../globals.css'

export const metadata: Metadata = {
  title:       'Promenade Dental',
  description: 'Family and cosmetic dentistry in Fulton Ranch, Chandler, AZ.',
}

const jsonLd = {
  '@context':   'https://schema.org',
  '@type':      'Dentist',
  name:         'Promenade Dental',
  description:  'Family and cosmetic dentistry in Fulton Ranch, Chandler, AZ. Gentle, unhurried care; most PPO plans accepted; same-day emergencies; new patients welcome.',
  url:          'https://promenade-dental.vercel.app/',
  telephone:    '+1-480-802-8188',
  priceRange:   '$$',
  address: {
    '@type':          'PostalAddress',
    streetAddress:    '4905 S. Alma School Road, Suite 1',
    addressLocality:  'Chandler',
    addressRegion:    'AZ',
    postalCode:       '85248',
    addressCountry:   'US',
  },
  areaServed:   ['Chandler', 'Fulton Ranch', 'Ocotillo', 'Sun Lakes', 'Gilbert'],
  availableService: [
    { '@type': 'MedicalProcedure', name: 'Cosmetic Dentistry' },
    { '@type': 'MedicalProcedure', name: 'Family Dentistry' },
    { '@type': 'MedicalProcedure', name: 'Sleep Apnea Oral Appliance Therapy' },
    { '@type': 'MedicalProcedure', name: 'Emergency Dentistry' },
  ],
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '17:00' },
  ],
}


export default function Home02Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="schema-dentist"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      {children}
    </>
  );
}