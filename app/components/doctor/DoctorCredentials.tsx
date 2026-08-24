import Reveal from '../common/Reveal'
import { DOCTOR } from '@/app/lib/data/doctorData'

const LABEL =
  'font-serif text-[13px] font-medium uppercase tracking-[0.08em] text-coral'

/**
 * Education, training and identifiers, rendered open rather than behind a
 * <details> as on /about-us. There, seventeen bullets across two doctors were
 * the bulk of the section's height; here the credentials are the reason the
 * page exists, and hiding them behind a toggle would bury the entity's
 * strongest corroborating detail.
 */
export default function DoctorCredentials() {
  return (
    <section className="bg-bg-2 py-section">
      <div className="mx-auto max-w-[1240px] px-site">
        <Reveal>
          <span className="text-[11.5px] font-medium uppercase tracking-[0.32em] text-coral">
            Credentials
          </span>
          <h2 className="mt-[6px] max-w-[24ch] font-serif text-section font-light leading-[1.05] tracking-[-0.02em] text-white">
            Education &amp; advanced{' '}
            <em className="italic font-normal text-coral">training</em>.
          </h2>
        </Reveal>

        <div className="mt-[clamp(32px,4vw,56px)] grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <h3 className={LABEL}>Education</h3>
            <ul className="mt-4 space-y-5">
              {DOCTOR.education.map((entry) => (
                <li key={entry.qualification} className="border-t border-line pt-4">
                  <div className="text-[15.5px] font-light leading-[1.4] text-white">
                    {entry.qualification}
                  </div>
                  <div className="mt-1 text-[14px] font-light leading-[1.5] text-muted">
                    {entry.institution}
                    {entry.location ? ` — ${entry.location}` : ''}
                  </div>
                </li>
              ))}
            </ul>

            <h3 className={`mt-10 ${LABEL}`}>Advanced Training</h3>
            <ul className="mt-4 space-y-5">
              {DOCTOR.training.map((entry) => (
                <li key={entry.title} className="border-t border-line pt-4">
                  <div className="text-[15.5px] font-light leading-[1.4] text-white">
                    {entry.title}
                  </div>
                  <div className="mt-1 text-[14px] font-light leading-[1.5] text-muted">
                    {entry.organization}
                  </div>
                </li>
              ))}
            </ul>

            {DOCTOR.memberships.length > 0 && (
              <>
                <h3 className={`mt-10 ${LABEL}`}>Professional Memberships</h3>
                <ul className="mt-4 space-y-5">
                  {DOCTOR.memberships.map((entry) => (
                    <li key={entry.name} className="border-t border-line pt-4">
                      <div className="text-[15.5px] font-light leading-[1.4] text-white">
                        {entry.url ? (
                          <a
                            href={entry.url}
                            className="transition-colors hover:text-coral"
                            rel="noopener"
                          >
                            {entry.name}
                          </a>
                        ) : (
                          entry.name
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </Reveal>

          <Reveal delay={80}>
            <div className="rounded-[20px] border border-line p-7">
              <h3 className={LABEL}>Practice Details</h3>
              <dl className="mt-5 space-y-4 text-[14.5px] font-light leading-[1.6]">
                <div>
                  <dt className="text-muted">Role</dt>
                  <dd className="mt-[2px] text-white">
                    {DOCTOR.jobTitle}, Promenade Dental
                  </dd>
                </div>
                <div>
                  <dt className="text-muted">Location</dt>
                  <dd className="mt-[2px] text-white">
                    4905 S. Alma School Rd, Suite 1
                    <br />
                    Chandler, AZ 85248
                  </dd>
                </div>
                <div>
                  {/* Published deliberately. The NPI is public record and is the
                      one identifier that survives directory churn, so listing it
                      lets any third party verify that the person described here
                      and the person in their database are the same. */}
                  <dt className="text-muted">NPI</dt>
                  <dd className="mt-[2px] text-white">{DOCTOR.npi}</dd>
                </div>
                <div>
                  <dt className="text-muted">Languages</dt>
                  <dd className="mt-[2px] text-white">
                    {DOCTOR.languages.join(', ')}
                  </dd>
                </div>
              </dl>

              <h3 className={`mt-8 ${LABEL}`}>Verified Profiles</h3>
              <ul className="mt-4 space-y-2">
                {DOCTOR.sameAs.map((url) => (
                  <li key={url}>
                    <a
                      href={url}
                      rel="noopener"
                      className="text-[14px] font-light text-muted underline decoration-line underline-offset-4 transition-colors hover:text-coral"
                    >
                      {new URL(url).hostname.replace(/^www\./, '')}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
