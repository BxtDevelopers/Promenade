/**
 * Dr. Shriya Sarin — the practice's entity record.
 *
 * This exists as data rather than as copy inside a component because the same
 * facts have to appear in three places that must never disagree: the profile
 * page, the Person JSON-LD, and the page metadata. A credential that is worded
 * one way on the page and another way in the markup is a weaker entity signal
 * than one stated consistently, and Google reconciles the two.
 *
 * Content rule, inherited from areaData.ts: everything here must be true of
 * this dentist. Every claim below is already published by the practice on
 * /about-us. Nothing is inferred, rounded up, or filled in for symmetry —
 * where a fact is missing (state licence number, board memberships, year she
 * took over the practice) the field is absent rather than guessed, and the
 * page renders without it.
 */

export const DOCTOR = {
  slug: 'dr-shriya-sarin',
  path: '/dr-shriya-sarin',

  /** Legal name, without honorifics — the form used for `name` in JSON-LD. */
  name: 'Shriya Sarin',
  displayName: 'Dr. Shriya Sarin, DMD',
  honorificPrefix: 'Dr.',
  honorificSuffix: 'DMD',
  jobTitle: 'Dentist & Owner',

  /**
   * National Provider Identifier. A government-issued identifier is the single
   * most durable thing tying this person to the third-party directories that
   * describe her, because it survives directory churn and name variants.
   * Mirrors the value already used in lib/seo.ts.
   */
  npi: '1326770538',

  portrait: {
    src: '/assets/dr-shriya.jpeg',
    alt: 'Dr. Shriya Sarin, DMD, Dentist and Owner at Promenade Dental in Chandler, Arizona',
  },
  secondaryPortrait: {
    src: '/assets/dr-shriya-2.jpeg',
    alt: 'Dr. Shriya Sarin, DMD, at Promenade Dental in Chandler, Arizona',
  },
  introVideo: '/assets/dr-shriya-intro.mp4',

  /**
   * The one-sentence identity claim. Deliberately states person, credential,
   * role, practice and city in a single sentence — this is the sentence a
   * language model or a knowledge panel has to be able to lift verbatim.
   */
  summary:
    'Dr. Shriya Sarin, DMD, is a dentist and the owner of Promenade Dental in Chandler, Arizona, where she provides family, preventive and restorative dentistry alongside oral appliance therapy for snoring and obstructive sleep apnea.',

  bio: [
    'Dr. Shriya Sarin is passionate about helping patients achieve better oral health, improved sleep, and a higher quality of life. She practises comprehensive general dentistry at Promenade Dental in Chandler, Arizona, caring for patients at every stage — children learning their first habits, adults maintaining healthy teeth, and older patients protecting the dental work they already have.',
    'Alongside general practice, she has advanced training in Dental Sleep Medicine through the American Academy of Dental Sleep Medicine. That training lets her offer custom oral appliance therapy as a non-surgical option for patients with snoring and obstructive sleep apnea — including those who have found CPAP difficult to tolerate.',
    'Her path into dentistry has been an unusually broad one. Before earning her DMD in Arizona, she completed a Bachelor of Dental Surgery in India, a Master of Health Administration in Texas, and a certificate in dental public health. That background shapes how she practises: attentive to the individual patient in the chair, and to the wider question of what keeps a community healthy over decades rather than appointments.',
  ],

  /**
   * Philosophy, drawn from the care commitments the practice already makes on
   * its family dentistry pages — listen first, examine fully, explain findings,
   * plan the next step — rather than from generic bedside-manner copy.
   */
  philosophy: [
    {
      title: 'Listen before examining',
      body: 'A visit starts with what brought you in and what you are worried about. Patients who have been away from dental care for years are common here, and are met without lecture.',
    },
    {
      title: 'Explain what is actually there',
      body: 'Findings are shown and described in plain terms — what is happening, what it means, and what happens if it waits. You should leave understanding your own mouth better than when you arrived.',
    },
    {
      title: 'Treat conservatively',
      body: 'The smallest intervention that solves the problem is the right one. Where watching is reasonable, watching is offered as an option rather than skipped past.',
    },
    {
      title: 'Plan for the long term',
      body: 'Care is sequenced around what keeps teeth for decades, not around what can be done in one appointment.',
    },
  ],

  /** Clinical interests. Each maps to a service the practice genuinely offers. */
  focusAreas: [
    {
      title: 'Sleep apnea & snoring',
      description:
        'Custom oral appliance therapy as a non-surgical alternative for snoring and obstructive sleep apnea.',
      href: '/services/sleep-apnea-snoring-solutions',
    },
    {
      title: 'Preventive & family dentistry',
      description:
        'Exams, cleanings and preventive planning for patients of all ages, in one office.',
      href: '/services/family-dentistry',
    },
    {
      title: 'Restorative dentistry',
      description:
        'Fillings, crowns, bridges and dentures to repair damaged teeth and replace missing ones.',
      href: '/services/restorative-dentistry',
    },
    {
      title: 'Emergency dental care',
      description:
        'Tooth pain, broken and knocked-out teeth, and other urgent dental problems.',
      href: '/services/emergency-dentistry',
    },
  ],

  /**
   * Education, most recent first. `institution` is kept separate from the
   * qualification because it becomes `alumniOf` in the structured data, and
   * schema.org wants the organisation there, not the degree string.
   */
  education: [
    {
      qualification: 'Doctor of Dental Medicine (DMD)',
      institution: 'Arizona School of Dentistry and Oral Health',
      location: 'Mesa, Arizona',
    },
    {
      qualification: 'Certificate in Dental Public Health',
      institution: 'Arizona School of Dentistry and Oral Health',
      location: 'Mesa, Arizona',
    },
    {
      qualification: 'Master of Health Administration (MHA)',
      institution: 'University of North Texas Health Science Center',
      location: 'Fort Worth, Texas',
    },
    {
      qualification: 'Bachelor of Dental Surgery (BDS)',
      institution: 'Ghaziabad, India',
      location: null,
    },
  ],

  /**
   * Advanced training that is not a degree.
   *
   * Modelled as training rather than membership on purpose. The practice states
   * she trained *through* the American Academy of Dental Sleep Medicine, which
   * is not the same claim as holding current membership or board certification,
   * and the stronger claim must not be manufactured in structured data. If she
   * does hold AADSM membership or ABDSM certification, add it to
   * `memberships` below and it will appear on the page and in the markup.
   */
  training: [
    {
      title: 'Dental Sleep Medicine',
      organization: 'American Academy of Dental Sleep Medicine',
    },
  ],

  /**
   * Professional memberships and licensure. Empty until the practice supplies
   * verifiable values — an unverified membership in `sameAs`-adjacent markup is
   * exactly the kind of claim that devalues the rest of the record.
   */
  memberships: [] as { name: string; url?: string }[],

  languages: ['English'],

  /**
   * Profiles that describe *this person* — not the practice. This is the list
   * Google uses to reconcile the page with the third-party record, so only
   * verified-live URLs belong here. Mirrors DOCTORS.current in lib/seo.ts.
   */
  sameAs: [
    'https://doctor.webmd.com/doctor/shriya-sarin-1398f657-9705-46f6-b601-e6de0319f2e6-overview',
    'https://health.usnews.com/dentists/shriya-sarin-3152191',
  ],
} as const;

/** Shape consumed by buildDoctorProfileJsonLd() in lib/seo.ts. */
export type DoctorProfile = typeof DOCTOR;
