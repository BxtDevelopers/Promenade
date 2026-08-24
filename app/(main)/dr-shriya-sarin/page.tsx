import Navbar from '@/app/components/home3/Navbar'
import Footer from '@/app/components/home3/Footer'
import JsonLd from '@/app/components/common/JsonLd'
import DoctorHero from '@/app/components/doctor/DoctorHero'
import DoctorBio from '@/app/components/doctor/DoctorBio'
import DoctorFocusAreas from '@/app/components/doctor/DoctorFocusAreas'
import DoctorPhilosophy from '@/app/components/doctor/DoctorPhilosophy'
import DoctorCredentials from '@/app/components/doctor/DoctorCredentials'
import DoctorCTA from '@/app/components/doctor/DoctorCTA'
import { DOCTOR } from '@/app/lib/data/doctorData'
import {
  buildBreadcrumbJsonLd,
  buildDoctorProfileJsonLd,
  buildPageMetadata,
} from '@/app/lib/seo'

/**
 * The dentist's own page.
 *
 * A top-level URL rather than /about-us/dr-shriya-sarin for two reasons. The
 * `/about-us/:path+` catch-all in next.config.ts redirects every child of
 * /about-us to the parent, so a nested route would never render. And this page
 * is the canonical record for a person, not a subsection of a page about the
 * practice — the third-party profiles that will point here read better
 * resolving to a root-level URL.
 */
export const metadata = buildPageMetadata({
  title: 'Dr. Shriya Sarin, DMD — Dentist & Owner | Promenade Dental, Chandler AZ',
  description:
    'Dr. Shriya Sarin, DMD, is the dentist and owner of Promenade Dental in Chandler, Arizona. Education, credentials, clinical interests and care philosophy.',
  path: DOCTOR.path,
})

export default function DoctorPage() {
  return (
    <main className="bg-bg text-ink">
      <JsonLd data={buildDoctorProfileJsonLd(DOCTOR)} />
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about-us' },
          { name: 'Dr. Shriya Sarin, DMD', path: DOCTOR.path },
        ])}
      />

      <Navbar textColor="text-white" hoverColor="hover:text-white/80" />
      <DoctorHero />
      <DoctorBio />
      <DoctorFocusAreas />
      <DoctorPhilosophy />
      <DoctorCredentials />
      <DoctorCTA />
      <Footer />
    </main>
  )
}
