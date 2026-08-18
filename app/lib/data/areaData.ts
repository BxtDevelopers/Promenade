/**
 * Neighbourhood landing pages.
 *
 * The practice sits at the south end of 85248, which means a meaningful share of
 * the ZIP's "dentist near me" searches resolve to competitors further north on
 * Alma School Road on distance alone. Competing for the whole ZIP is a losing
 * proposition; owning the specific communities the practice is genuinely closest
 * to is not. Each entry targets one of those communities.
 *
 * Content rule: everything here must be true of this practice and this location.
 * No invented drive times, no invented patient counts.
 */

export interface AreaData {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    image: string;
    trustPoints: string[];
    primaryCTA: { label: string; href: string };
    secondaryCTA: { label: string; href: string };
  };
  overview: {
    eyebrow: string;
    heading: string;
    body: string;
    features: string[];
    image: string;
    cta: { label: string; href: string };
  };
  whyHere: {
    eyebrow: string;
    heading: string;
    description: string;
    items: { title: string; body: string; paths: string[] }[];
  };
  services: {
    eyebrow: string;
    heading: string;
    intro: string;
    services: { title: string; description: string; href: string }[];
  };
  faq: {
    eyebrow: string;
    heading: string;
    items: { q: string; a: string }[];
  };
  cta: {
    title: string;
    highlight: string;
    subtitle: string;
    buttonText: string;
    buttonHref: string;
    secondaryButtonText: string;
    secondaryButtonHref: string;
    image: string;
  };
}

const SHARED_CTA = {
  buttonText: 'Book an Appointment',
  buttonHref: '/contact-us',
  secondaryButtonText: 'Call (480) 802-8188',
  secondaryButtonHref: 'tel:+14808028188',
  image: '/assets/dental-lobby.jpg',
};

export const AREAS: AreaData[] = [
  {
    slug: 'fulton-ranch',
    name: 'Fulton Ranch',
    metaTitle: 'Dentist in Fulton Ranch, Chandler AZ | Promenade Dental',
    metaDescription:
      'Promenade Dental is the family and cosmetic dental practice in Fulton Ranch, Chandler AZ — on S. Alma School Rd, minutes from home for Fulton Ranch residents.',
    hero: {
      eyebrow: 'Fulton Ranch, Chandler',
      title: 'The dental practice',
      highlight: 'in your own neighbourhood.',
      description:
        'Promenade Dental is located on S. Alma School Road in Fulton Ranch — not a drive across Chandler, but the practice down the road. Family, cosmetic, restorative, and emergency dentistry, with the same dentist at every visit.',
      image: '/assets/h-hero.jpg',
      trustPoints: [
        'Located in Fulton Ranch on S. Alma School Rd',
        'Same dentist every visit — no rotating providers',
        'Same-day appointments for dental emergencies',
      ],
      primaryCTA: { label: 'Book an Appointment', href: '/contact-us' },
      secondaryCTA: { label: 'Call (480) 802-8188', href: 'tel:+14808028188' },
    },
    overview: {
      eyebrow: 'Your Neighbourhood Practice',
      heading: 'Dentistry a few minutes from your front door',
      body:
        'Most Fulton Ranch residents drive past several dental offices on the way to one further out. Promenade Dental is inside the neighbourhood, which changes what routine care feels like: a cleaning before work is genuinely a short trip, a cracked tooth on a Tuesday afternoon does not mean crossing town, and bringing children in does not consume an entire morning.',
      features: [
        'Exams, cleanings, and children’s dentistry for the whole household',
        'Cosmetic and restorative treatment planned over time, not rushed',
        'Same-day emergency appointments when something goes wrong',
        'Most major PPO plans accepted',
        'Evening appointments Tuesday through Thursday',
      ],
      image: '/assets/dental-lobby.jpg',
      cta: { label: 'See Our Services', href: '/services' },
    },
    whyHere: {
      eyebrow: 'Why Neighbours Choose Us',
      heading: 'What being local actually changes',
      description:
        'Proximity is not the only reason to pick a dentist, but it changes which appointments you actually keep.',
      items: [
        {
          title: 'Routine care stops getting postponed',
          body:
            'Six-month cleanings are the appointments people skip when they are inconvenient. When the practice is minutes away, they get kept — and most of what we treat is cheaper and simpler when it is caught at a cleaning.',
          paths: ['/services/family-dentistry/dental-exams-cleanings'],
        },
        {
          title: 'Emergencies are handled the same day',
          body:
            'A broken tooth or sudden swelling is a different experience when help is in your own neighbourhood. We keep same-day slots for exactly this.',
          paths: ['/services/emergency-dentistry'],
        },
        {
          title: 'The whole family goes to one place',
          body:
            'Children, parents, and grandparents can be seen at the same practice, which makes scheduling around school and work considerably easier.',
          paths: ['/services/family-dentistry/childrens-dentistry'],
        },
        {
          title: 'You see the same dentist each time',
          body:
            'Continuity matters most for treatment planned across several visits — crowns, bridges, aligners. You are not re-explaining your history to someone new.',
          paths: ['/about-us'],
        },
      ],
    },
    services: {
      eyebrow: 'What We Provide',
      heading: 'Care for Fulton Ranch families',
      intro:
        'Everything most households need in one practice, with referrals out only when a case genuinely calls for a specialist.',
      services: [
        {
          title: 'Family Dentistry',
          description:
            'Exams, cleanings, children’s dentistry, gum care, and night guards for every age in the household.',
          href: '/services/family-dentistry',
        },
        {
          title: 'Cosmetic Dentistry',
          description:
            'Whitening, veneers, and clear aligners planned around your bite as well as your appearance.',
          href: '/services/cosmetic-dentistry',
        },
        {
          title: 'Restorative Dentistry',
          description:
            'Crowns, bridges, and dentures for teeth that are damaged, decayed, or missing.',
          href: '/services/restorative-dentistry',
        },
        {
          title: 'Emergency Dentistry',
          description:
            'Same-day care for toothache, swelling, broken teeth, and knocked-out teeth.',
          href: '/services/emergency-dentistry',
        },
      ],
    },
    faq: {
      eyebrow: 'Frequently Asked Questions',
      heading: 'Fulton Ranch Patient Questions',
      items: [
        {
          q: 'Where exactly is Promenade Dental in Fulton Ranch?',
          a: 'We are at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248, on Alma School Road in the Fulton Ranch area. Parking is directly outside the suite.',
        },
        {
          q: 'Are you accepting new patients from Fulton Ranch?',
          a: 'Yes. New patients are welcome, and most requests can be scheduled within the same week. Same-day appointments are kept available for emergencies.',
        },
        {
          q: 'Do you see children as well as adults?',
          a: 'Yes — we treat the whole family, from first visits through to adult restorative and cosmetic care, which means one practice and one set of appointments for the household.',
        },
        {
          q: 'What are your hours?',
          a: 'Monday 8am to 1pm by appointment, Tuesday through Thursday 8am to 7pm. The Tuesday-to-Thursday evening hours are there so appointments do not have to come out of a working day.',
        },
        {
          q: 'Which insurance plans do you accept?',
          a: 'We accept most major PPO plans. If you tell us your plan when you call, we will confirm your coverage and what it means for your specific treatment before you commit.',
        },
      ],
    },
    cta: {
      title: 'Fulton Ranch, your dentist is',
      highlight: 'just down the road.',
      subtitle:
        'Promenade Dental provides family, cosmetic, restorative, and emergency dentistry from inside your own neighbourhood on S. Alma School Rd.',
      ...SHARED_CTA,
    },
  },

  {
    slug: 'sun-lakes',
    name: 'Sun Lakes',
    metaTitle: 'Dentist for Sun Lakes, AZ | Promenade Dental, Chandler',
    metaDescription:
      'Dental care for Sun Lakes residents at Promenade Dental in Chandler AZ — dentures, crowns, bridges, and gentle routine care, a short drive north on Alma School Rd.',
    hero: {
      eyebrow: 'Serving Sun Lakes',
      title: 'Unhurried dental care,',
      highlight: 'a short drive up Alma School.',
      description:
        'Promenade Dental serves Sun Lakes residents from S. Alma School Road in Chandler. The care most requested by our Sun Lakes patients — dentures, crowns, bridges, and gentle routine maintenance — is exactly what this practice is built around.',
      image: '/assets/adult-dental-exam.jpg',
      trustPoints: [
        'Straight up Alma School Rd from Sun Lakes',
        'Dentures, bridges, crowns, and root canals',
        'Unhurried appointments with the same dentist each visit',
      ],
      primaryCTA: { label: 'Book an Appointment', href: '/contact-us' },
      secondaryCTA: { label: 'Call (480) 802-8188', href: 'tel:+14808028188' },
    },
    overview: {
      eyebrow: 'Care for Sun Lakes Residents',
      heading: 'Dentistry that fits how you actually want to be treated',
      body:
        'Sun Lakes patients tend to arrive with a clear idea of what they want from a dental practice: enough time in the chair to have things explained properly, a dentist who does not change between visits, and treatment planned around keeping natural teeth as long as possible. That is how this practice runs — appointments are unhurried by design, and the same dentist follows your care from start to finish.',
      features: [
        'Full and partial dentures, fitted and adjusted for comfort',
        'Crowns, bridges, and root canals to save existing teeth',
        'Gentle cleanings and gum care for sensitive mouths',
        'Treatment sequenced and priced clearly before it begins',
        'Most major PPO plans accepted',
      ],
      image: '/assets/h-dentures.jpg',
      cta: { label: 'Explore Restorative Care', href: '/services/restorative-dentistry' },
    },
    whyHere: {
      eyebrow: 'Why Sun Lakes Patients Come Here',
      heading: 'What matters most in this stage of dental care',
      description:
        'Dental priorities shift over time. These are the ones our Sun Lakes patients raise most often.',
      items: [
        {
          title: 'Keeping natural teeth as long as possible',
          body:
            'Crowns, root canals, and gum treatment are usually preferable to extraction. We plan around preservation first and replacement second.',
          paths: ['/services/restorative-dentistry/root-canals'],
        },
        {
          title: 'Replacing missing teeth properly',
          body:
            'Bridges and full or partial dentures each suit different cases. We will explain honestly which fits your bite, your remaining teeth, and your budget.',
          paths: ['/services/restorative-dentistry/dentures'],
        },
        {
          title: 'Comfort during treatment',
          body:
            'Sensitivity, dry mouth, and jaw fatigue all change what a comfortable appointment looks like. Longer appointments and a gentler pace are the default here, not an upgrade.',
          paths: ['/services/family-dentistry/dental-exams-cleanings'],
        },
        {
          title: 'Straight answers about cost',
          body:
            'Larger treatment is staged, and so are the costs. You get the full sequence and the numbers in writing before anything starts.',
          paths: ['/payments'],
        },
      ],
    },
    services: {
      eyebrow: 'What We Provide',
      heading: 'Most requested by our Sun Lakes patients',
      intro:
        'Restorative and preventive care makes up the majority of what Sun Lakes residents come to us for.',
      services: [
        {
          title: 'Dentures',
          description:
            'Full and partial dentures fitted for comfort, chewing, and speech — with adjustments after delivery.',
          href: '/services/restorative-dentistry/dentures',
        },
        {
          title: 'Root Canals',
          description:
            'Treating infection to keep a natural tooth in place rather than replacing it — the preferred outcome wherever it is possible.',
          href: '/services/restorative-dentistry/root-canals',
        },
        {
          title: 'Crowns & Bridges',
          description:
            'Restoring damaged teeth and closing gaps without removing more tooth structure than necessary.',
          href: '/services/restorative-dentistry/dental-crowns',
        },
        {
          title: 'Exams & Cleanings',
          description:
            'Gentle routine care and gum maintenance, which is what keeps larger treatment from becoming necessary.',
          href: '/services/family-dentistry/dental-exams-cleanings',
        },
      ],
    },
    faq: {
      eyebrow: 'Frequently Asked Questions',
      heading: 'Sun Lakes Patient Questions',
      items: [
        {
          q: 'How far is Promenade Dental from Sun Lakes?',
          a: 'We are at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248 — north along Alma School Road from Sun Lakes, with parking directly outside the suite.',
        },
        {
          q: 'What are my options for replacing a missing tooth?',
          a: 'We provide bridges and full or partial dentures, and where a tooth can still be saved we will always look at crowns or root canal treatment first. A consultation is the only way to say which is right for your case, and we will refer you on where a case calls for a specialist.',
        },
        {
          q: 'I already wear dentures. Can you help with fit?',
          a: 'Yes. Denture fit changes as the jaw changes shape over time. We assess fit and adjust or reline where that solves it, and talk through the alternatives when it does not.',
        },
        {
          q: 'Do you take time to explain treatment?',
          a: 'Yes, and this is deliberate. Appointments are scheduled to allow for it, and you will see the same dentist each visit rather than repeating your history to someone new.',
        },
        {
          q: 'Do you accept Medicare Advantage or PPO dental plans?',
          a: 'We accept most major PPO plans. Coverage under Medicare Advantage dental benefits varies considerably by plan, so tell us your plan when you call and we will check what it covers before treatment begins.',
        },
      ],
    },
    cta: {
      title: 'Sun Lakes, unhurried dental care is',
      highlight: 'a short drive away.',
      subtitle:
        'Promenade Dental provides dentures, crowns, bridges, and gentle routine care from S. Alma School Rd in Chandler.',
      ...SHARED_CTA,
    },
  },

  {
    slug: 'ocotillo',
    name: 'Ocotillo',
    metaTitle: 'Dentist Serving Ocotillo, Chandler AZ | Promenade Dental',
    metaDescription:
      'Family, cosmetic, and emergency dentistry for Ocotillo residents at Promenade Dental on S. Alma School Rd, Chandler AZ 85248. Same dentist every visit.',
    hero: {
      eyebrow: 'Serving Ocotillo, Chandler',
      title: 'A practice where you see',
      highlight: 'the same dentist every time.',
      description:
        'Promenade Dental serves Ocotillo households from S. Alma School Road in south Chandler — family dentistry, cosmetic treatment, and same-day emergency care, without being handed between providers.',
      image: '/assets/h-hero.jpg',
      trustPoints: [
        'On S. Alma School Rd in south Chandler',
        'One dentist following your care throughout',
        'Same-day emergency appointments',
      ],
      primaryCTA: { label: 'Book an Appointment', href: '/contact-us' },
      secondaryCTA: { label: 'Call (480) 802-8188', href: 'tel:+14808028188' },
    },
    overview: {
      eyebrow: 'Care for Ocotillo Households',
      heading: 'Continuity is the part most practices get wrong',
      body:
        'Ocotillo has no shortage of dental offices. What is harder to find is a practice small enough that the person who examined you last time is the person examining you now. That continuity is the difference between treatment planned coherently over years and treatment restarted every visit — and it matters most exactly when a case is complex.',
      features: [
        'Exams, cleanings, and children’s dentistry',
        'Whitening, veneers, and clear aligners',
        'Crowns, bridges, and other restorative treatment',
        'Same-day emergency appointments',
        'Evening appointments Tuesday through Thursday',
      ],
      image: '/assets/dental-lobby.jpg',
      cta: { label: 'See Our Services', href: '/services' },
    },
    whyHere: {
      eyebrow: 'Why Ocotillo Patients Switch',
      heading: 'What patients tell us they were missing',
      description:
        'The reasons Ocotillo patients give for changing practices are consistent.',
      items: [
        {
          title: 'A rotating cast of dentists',
          body:
            'Larger group practices often cannot guarantee who you will see. Here you see the same dentist, which is what makes long-term planning possible.',
          paths: ['/about-us'],
        },
        {
          title: 'Treatment plans that felt rushed',
          body:
            'Appointments here are scheduled with enough time to explain what is happening and why, including when the right answer is to wait and monitor.',
          paths: ['/services/family-dentistry/dental-exams-cleanings'],
        },
        {
          title: 'Surprises on the bill',
          body:
            'We check coverage and set out costs before treatment rather than after, including where a plan will not cover something.',
          paths: ['/insurance'],
        },
        {
          title: 'Nowhere to go in an emergency',
          body:
            'Same-day slots are held for genuine emergencies — a cracked tooth or sudden swelling should not mean waiting a week.',
          paths: ['/services/emergency-dentistry'],
        },
      ],
    },
    services: {
      eyebrow: 'What We Provide',
      heading: 'Care for Ocotillo families',
      intro:
        'A full general practice, so most of what a household needs is handled in one place.',
      services: [
        {
          title: 'Family Dentistry',
          description:
            'Exams, cleanings, children’s dentistry, and gum care for every age.',
          href: '/services/family-dentistry',
        },
        {
          title: 'Cosmetic Dentistry',
          description:
            'Whitening, veneers, and clear aligners, sequenced correctly when more than one is planned.',
          href: '/services/cosmetic-dentistry',
        },
        {
          title: 'Emergency Dentistry',
          description:
            'Same-day appointments for toothache, swelling, broken teeth, and knocked-out teeth.',
          href: '/services/emergency-dentistry',
        },
        {
          title: 'Sleep Apnea & Snoring',
          description:
            'Oral appliance therapy for snoring and sleep apnea — care most general practices in the area do not provide.',
          href: '/services/sleep-apnea-snoring-solutions',
        },
      ],
    },
    faq: {
      eyebrow: 'Frequently Asked Questions',
      heading: 'Ocotillo Patient Questions',
      items: [
        {
          q: 'Where is Promenade Dental relative to Ocotillo?',
          a: 'We are at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248, on Alma School Road in south Chandler, with parking directly outside the suite.',
        },
        {
          q: 'Will I see the same dentist at every appointment?',
          a: 'Yes. That continuity is deliberate and is the main reason patients give for moving here from larger group practices.',
        },
        {
          q: 'Can I get an appointment outside working hours?',
          a: 'We are open until 7pm Tuesday through Thursday, so appointments do not have to come out of the working day.',
        },
        {
          q: 'Do you treat dental emergencies the same day?',
          a: 'Yes. We keep same-day appointments available for genuine emergencies including toothache, swelling, broken teeth, and knocked-out teeth.',
        },
        {
          q: 'Do you offer treatment for snoring or sleep apnea?',
          a: 'Yes. We provide oral appliance therapy for snoring and obstructive sleep apnea, which is not something most general dental practices nearby offer.',
        },
      ],
    },
    cta: {
      title: 'Ocotillo, meet the dentist',
      highlight: 'you will actually get to know.',
      subtitle:
        'Promenade Dental provides family, cosmetic, restorative, and emergency dentistry from S. Alma School Rd in south Chandler.',
      ...SHARED_CTA,
    },
  },
];

export function getAreaBySlug(slug: string): AreaData | undefined {
  return AREAS.find((a) => a.slug === slug);
}
