  // app/lib/serviceData.ts
export interface ServiceGridCard {
  title: string;
  description: string;
  bestFor: string[];
  cta: string;
  href: string;
}

export interface EducationSection {
  eyebrow: string;
  heading: string;
  body: string;
  supportingText: string;
  image: string;
  imageAlt: string;
  cta: {
    label: string;
    href: string;
  };
}

export interface SymptomCard {
  title: string;
  body: string;
}

export interface PatientTypeCard {
  title: string;
  description: string;
}

export interface PatientTypesSection {
  eyebrow: string;
  heading: string;
  intro: string;
  items: PatientTypeCard[];
}

export interface RelatedServiceCard {
  title: string;
  description: string;
  href: string;
}


export interface LocalAreaSection {
  eyebrow: string;
  heading: string;
  body: string;
  address: {
    practice: string;
    street: string;
    cityStateZip: string;
    phone: string;
  };
  cta: {
    label: string;
    href: string;
  };
}
  export interface ServiceData {
    serviceSlug?:string
    slug: string;
    name: string;
    metaTitle:string;
    metaDescription:string;
    hero: {
      eyebrow: string;
      title: string;
      highlight: string;
      description: string;
      image:string;
      trustPoints:string[];
      primaryCTA:{
        label:string,
        href:string
      };
      secondaryCTA:{
        label:string,
        href:string
      }
    };
    overview: {
      eyebrow: string;
      heading: string;
      body: string;
      features: string[];
      image: string;
      cta:{
        label:string,
        href:string
      }
    };
    features?:{
    eyebrow: string;
      heading: string;
      body: string;
      features: {
        title:string;
        body:string
      }[];
}
  servicesGrid :{
  eyebrow: string;
  heading: string;
  intro: string;
  services: ServiceGridCard[];
}
educationSection?: EducationSection;
patientTypesSection?: PatientTypesSection;
localArea?: LocalAreaSection;
    doctor?:{
      eyebrow: string;
      heading: string;
      body: string;
      credentials: string[];
      image: string;
      imageAlt:string
    };
    process: {
  eyebrow: string;
  heading: string;
  subtitle: string;
  steps: { title: string; body: string }[];
  cta?: {
    label: string;
    href: string;
  };
};
suitability?:{
eyebrow: string;
    heading: string;
    body: string;
 goodFit:{
  title:string;
  items:string[]
};
alternative:{
  title:string;
  items:string[]
};
cta?: {
    label: string;
    href: string;
  };

}
comparison?:{
   eyebrow: string;
    heading: string;
    body: string;
    matches:{
      title:string;
      body:string;
    }[]
}
maintenance?:{
  eyebrow: string;
    heading: string;
    body: string;
    cards:{
      title:string;
      body:string;
    }[]
}
solutionsGrid?:{
  eyebrow: string;
    heading: string;
    body: string;
    cards:{
      title:string;
      subtitle:string;
      body:string;
      image:string;
    }[]
  }
symptomsSection?: {
    eyebrow: string;
    heading: string;
    body: string;
    symptoms: SymptomCard[];
  };
    benefits: {
      eyebrow: string;
      heading: string;
      description:string;
      items: { title: string; body: string; paths: string[] }[];
    };
    whyItMatters: {
      eyebrow: string;
      heading: string;
      description:string;
      items: { title: string; body: string; paths: string[] }[];
    };
    relatedServices?: {
    eyebrow: string;
    heading: string;
    intro: string;
    services: RelatedServiceCard[];
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
      image: string;
    };
  }


export const SERVICES = [
{
  slug: 'family-dentistry',
  name: 'Family Dentistry',
  metaTitle: 'Family Dentist in Chandler, AZ | Promenade Dental',
  metaDescription:
    'Promenade Dental provides family and preventive dentistry in Chandler AZ, including exams, cleanings, children’s dentistry, gum care, and custom night guards.',
    hero: {
  eyebrow: 'Family & Preventive Dentistry in Fulton Ranch',
  title: 'Fewer cavities, healthier gums, and',
  highlight: 'more confident dental visits.',
  description:
    'Promenade Dental helps Chandler families prevent cavities, gum problems, tooth wear, and dental emergencies with gentle exams, cleanings, children’s dentistry, gum care, and custom night guards in Fulton Ranch.',
  image: '/assets/preventiveandfamily.jpg',

  trustPoints: [
    'Same Dentist Every Visit',
    'Children, Adults, and Seniors Welcome',
    'Gentle Care for Anxious Patients',
    'Located in Fulton Ranch',
    'New Patients Welcome',
  ],

  primaryCTA: {
    label: 'Book a Family Dental Visit',
    href: '/contact',
  },

  secondaryCTA: {
    label: 'Call (480) 802-8188',
    href: 'tel:+14808028188',
  },
},

    overview: {
      eyebrow: 'Family & Preventive Dentistry',
      heading: 'Protect your family from cavities, gum disease, and emergency dental visits.',
      body:
        'Small dental problems often begin quietly. A cavity may not hurt at first, bleeding gums may seem minor, and teeth grinding can happen while you sleep without realizing it. Even with daily brushing, plaque can harden into tartar and create issues over time. At Promenade Dental, family and preventive dentistry focuses on identifying these concerns early, before they become painful, stressful, or expensive. Dr. Shriya evaluates your teeth, gums, bite, dental history, and daily habits together to help your family stay ahead of common dental problems and maintain long-term oral health.',
      features: [
        'Comprehensive exams & preventive cleanings',
        'Children’s dentistry for growing smiles',
        'Gum health evaluations & periodontal care',
        'Custom night guards for teeth grinding',
      ],
      image: '/assets/service-family.jpg',
      cta: {
  label: 'Schedule Preventive Dental Care',
  href: '/contact',
},
    },
    process: {
  eyebrow: 'First Visit Process',
  heading: 'Your First Visit Is Designed to Give You Clear Answers',
  subtitle:
    'Your first family dental visit at Promenade Dental is focused on understanding your current oral health and giving you a clear plan. The appointment may include a dental exam, digital X-rays if needed, gum health evaluation, oral cancer screening, cavity check, bite assessment, review of existing dental work, and discussion of any symptoms or concerns.',

  steps: [
    {
      title: 'We Listen First',
      body:
        'Your visit begins with your dental history, concerns, symptoms, goals, and any past experiences that may affect your comfort.',
    },
    {
      title: 'We Check Your Full Oral Health',
      body:
        'Dr. Shriya evaluates your teeth, gums, bite, jaw comfort, existing dental work, and signs of tooth wear or grinding.',
    },
    {
      title: 'We Explain What We Find',
      body:
        'You receive a clear explanation of what is healthy, what needs care, what can wait, and what should be monitored.',
    },
    {
      title: 'We Plan the Next Step',
      body:
        'If treatment is needed, Dr. Shriya explains your options so you can make a confident decision.',
    },
  ],

  cta: {
    label: 'View New Patient Information',
    href: '/new-patients',
  },
},
    whyItMatters: {
  eyebrow: 'Why Preventive Dentistry Matters',
  heading: 'Preventive dentistry helps you avoid bigger dental treatments later.',
  description:
    'Most major dental treatments start as smaller issues. Preventive care helps identify those issues while they are easier to manage. Regular dental visits can help reduce the risk of cavities, gum disease, tooth infections, cracked teeth, and emergency dental appointments.',
  items: [
    {
      title: 'Catch Cavities Earlier',
      body:
        'Small cavities can often be treated more simply when they are found early. Regular exams help detect decay before it becomes tooth pain or infection.',
      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M18 16 h12 a6 6 0 0 1 0 12 h-12 a6 6 0 0 1 0 -12 z',
      ],
    },
    {
      title: 'Keep Gums Healthier',
      body:
        'Bleeding, swelling, and bad breath can be early signs of gum inflammation. Preventive visits help monitor gum health before the condition progresses.',
      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 24 q10 -10 20 0 q-2 10 -10 14 q-8 -4 -10 -14',
      ],
    },
    {
      title: 'Protect Teeth From Wear',
      body:
        'Grinding, clenching, and bite pressure can slowly damage teeth. A preventive exam can help identify wear patterns and protect your teeth before cracks or fractures appear.',
      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M16 18 l8 8 l8 -8 M16 30 l8 -8 l8 8',
      ],
    },
  ],
},
      servicesGrid: {
        eyebrow: 'Family Dental Services',
        heading: 'Family Dental Services at Promenade Dental',
        intro:
          'Every family has different dental needs. Some patients need routine cleanings. Some children need a comfortable first visit. Some adults need gum care. Others need help with grinding, clenching, or tooth wear. Promenade Dental brings these preventive services together in one local dental office.',

        services: [
          {
            title: 'Dental Exams & Cleanings',
            description:
              'Routine exams and cleanings help remove plaque and tartar, check for cavities, monitor gum health, and catch early signs of dental problems before they become more serious.',
            bestFor: [
              'Routine checkups',
              'Dental cleanings',
              'Plaque buildup',
              'Bad breath',
              'Cavity prevention',
              'Gum monitoring',
            ],
            cta: 'Learn About Dental Cleanings',
            href: '/services/dental-cleanings',
          },

          {
            title: "Children's Dentistry",
            description:
              'Gentle children’s dental visits help kids feel comfortable at the dentist while supporting healthy tooth development, cavity prevention, brushing habits, and early dental confidence.',
            bestFor: [
              'First dental visits',
              "Kids' cleanings",
              'Cavity prevention',
              'Nervous children',
              'Family dental care',
            ],
            cta: "Learn About Children's Dentistry",
            href: '/services/children-dentistry',
          },

          {
            title: 'Gum Disease Evaluation & Care',
            description:
              'Bleeding gums, swollen gums, bad breath, and gum recession can be signs of gum disease. Promenade Dental checks gum health and helps patients understand the right next step.',
            bestFor: [
              'Bleeding gums',
              'Gum inflammation',
              'Bad breath',
              'Gum recession',
              'Periodontal maintenance',
            ],
            cta: 'Learn About Gum Disease Care',
            href: '/services/gum-disease-treatment',
          },

          {
            title: 'Custom Night Guards',
            description:
              'A custom night guard can help protect your teeth from grinding, clenching, enamel wear, cracked teeth, jaw soreness, and damage to existing dental work.',
            bestFor: [
              'Teeth grinding',
              'Jaw pain',
              'Morning headaches',
              'Worn teeth',
              'Clenching',
              'Chipped teeth',
            ],
            cta: 'Learn About Night Guards',
            href: '/services/night-guards',
          },
        ],
      },

      educationSection: {
        eyebrow: 'Oral Health Evaluation',
        heading:
          'Your Dental Visit Should Explain What Is Healthy, What Needs Care, and What Can Wait',
        body:
          'A good preventive visit should give you more than a cleaning. It should help you understand what is happening in your mouth and what may need attention later. At Promenade Dental, Dr. Shriya explains your oral health in a clear and practical way. You will know whether your gums are healthy, whether cavities are present, whether old dental work needs monitoring, whether tooth sensitivity has a clear cause, and whether grinding or bite pressure may be affecting your teeth.',
        supportingText:
          'The goal is not to rush you into treatment. The goal is to help you make informed decisions before small dental concerns become larger problems.',
        image:
          'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80',
        imageAlt:
          'Dentist reviewing dental X-rays and discussing oral health with a patient',
        cta: {
          label: 'Book a Preventive Dental Exam',
          href: '/contact',
        },
      },
      patientTypesSection: {
        eyebrow: 'Who We Help',
        heading: 'Family Dentistry for Every Stage of Life',
        intro:
          'Promenade Dental cares for children, parents, adults, seniors, and anxious patients with a calm and personalized approach. Each patient receives care based on their age, comfort level, dental history, and oral health needs.',

        items: [
          {
            title: 'For Children',
            description:
              'Children need dental visits that feel safe, simple, and positive. Early care helps prevent cavities, build healthy habits, and reduce dental fear.',
          },

          {
            title: 'For Parents',
            description:
              'Parents need a dental office that can care for the whole family without making appointments feel complicated. Promenade Dental helps families stay consistent with routine care.',
          },

          {
            title: 'For Adults',
            description:
              'Adults often delay dental care because life gets busy. Preventive visits help catch tooth decay, gum issues, tooth wear, and older dental work concerns before they become urgent.',
          },

          {
            title: 'For Seniors',
            description:
              'Seniors may need ongoing care for gum health, tooth wear, crowns, bridges, dentures, dry mouth, and missing teeth. Preventive visits help maintain comfort and function.',
          },

          {
            title: 'For Anxious Patients',
            description:
              'If you feel nervous about dental visits, Dr. Shriya takes time to explain what she sees, what it means, and what options you have.',
          },
        ],
      },
      symptomsSection: {
        eyebrow: 'When to Schedule a Visit',
        heading:
          'Do Not Wait for Tooth Pain Before Scheduling a Dental Visit',
        body:
          'Pain is not always the first sign of a dental problem. Many issues begin with smaller symptoms that are easy to ignore. A preventive dental visit can help identify the cause before the problem becomes harder to treat.',
        symptoms: [
          {
            title: 'Bleeding Gums',
            body:
              'Bleeding while brushing or flossing may be a sign of gum inflammation or gum disease.',
          },
          {
            title: 'Tooth Sensitivity',
            body:
              'Sensitivity to cold, sweets, or pressure may come from decay, gum recession, enamel wear, or grinding.',
          },
          {
            title: 'Bad Breath',
            body:
              'Bad breath that keeps returning may be connected to plaque buildup, gum inflammation, dry mouth, or other oral health concerns.',
          },
          {
            title: 'Jaw Soreness',
            body:
              'Morning jaw tightness, headaches, or facial soreness may be signs of grinding or clenching.',
          },
          {
            title: 'Chipped or Worn Teeth',
            body:
              'Small chips, rough edges, or flattened teeth may indicate bite pressure or nighttime grinding.',
          },
          {
            title: 'Overdue Cleaning',
            body:
              'If it has been more than six months since your last cleaning, a preventive visit can help reset your oral health routine.',
          },
        ],
      },
      benefits: {
        eyebrow: 'Why Choose Promenade Dental',
        heading: 'Why Families Choose Promenade Dental for Preventive Care',
        description:
          'Families choose Promenade Dental because the care is personal, clear, and built around long-term oral health. Patients are not treated like a number or rushed through a quick appointment.',
        items: [
          {
            title: 'Same Dentist Every Visit',
            body:
              'Seeing Dr. Shriya consistently helps create better continuity. She can understand your history, track changes, and notice patterns over time.',
            paths: [
              'M6 38 A18 18 0 0 1 42 38',
              'M17 20 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0 M25 20 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0 M16 28 q8 6 16 0',
            ],
          },
          {
            title: 'Clear Explanations',
            body:
              'You should understand what is happening in your mouth. Findings are explained in simple language, without pressure or confusion.',
            paths: [
              'M6 38 A18 18 0 0 1 42 38',
              'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6',
            ],
          },
          {
            title: 'Prevention Before Bigger Treatment',
            body:
              'The goal is to catch smaller issues before they turn into pain, emergency visits, or more complex dental work.',
            paths: [
              'M6 38 A18 18 0 0 1 42 38',
              'M24 12 L24 30 M14 22 L34 22',
            ],
          },
          {
            title: 'One Office for the Whole Family',
            body:
              'Promenade Dental provides preventive, cosmetic, restorative, implant, and emergency care, making it easier for families to stay consistent with dental visits.',
            paths: [
              'M6 38 A18 18 0 0 1 42 38',
              'M15 18 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0 M25 22 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0 M12 32 q7-6 14 0 M23 32 q5-5 10 0',
            ],
          },
        ],
      },
      localArea: {
        eyebrow: 'Local Family Dental Care',
        heading:
          'Family Dentist Near Fulton Ranch, Ocotillo, and Chandler 85248',
        body:
          'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248. Our office serves families from Fulton Ranch, Ocotillo, Sun Lakes, South Chandler, and nearby communities.\n\nIf you are looking for a family dentist, dental cleaning, children’s dentist, gum care, or night guard near Chandler 85248, Promenade Dental offers local preventive care with clear communication and a gentle patient experience.',
        address: {
          practice: 'Promenade Dental',
          street: '4905 S. Alma School Rd, Suite 1',
          cityStateZip: 'Chandler, AZ 85248',
          phone: '(480) 802-8188',
        },
        cta: {
          label: 'Get Directions',
          href: 'https://maps.app.goo.gl/ufAu9qeLdfAFBAMr9',
        },
      },

      relatedServices: {
        eyebrow: 'Explore Related Care',
        heading: 'Related Dental Services for Long-Term Oral Health',
        intro:
          'Family dentistry often connects with other areas of care. A preventive visit may reveal a cosmetic concern, a damaged tooth, a missing tooth, or an urgent problem that needs treatment.',
        services: [
          {
            title: 'Cosmetic Dentistry',
            description:
              'Improve tooth color, shape, spacing, and smile balance with teeth whitening, veneers, bonding, and smile makeover planning.',
            href: '/services/cosmetic-dentistry',
          },
          {
            title: 'Restorative Dentistry',
            description:
              'Repair damaged, decayed, cracked, or weakened teeth with fillings, crowns, bridges, root canals, dentures, and extractions.',
            href: '/services/restorative-dentistry',
          },
          {
            title: 'Dental Implants',
            description:
              'Replace missing teeth with implant-supported options designed to restore chewing comfort, smile appearance, and long-term function.',
            href: '/services/dental-implants',
          },
          {
            title: 'Emergency Dentistry',
            description:
              'Get help for tooth pain, swelling, broken teeth, knocked-out teeth, and urgent dental concerns.',
            href: '/services/emergency-dentistry',
          },
        ],
      },
    faq: {
  eyebrow: 'Frequently Asked Questions',
  heading: 'Frequently Asked Questions About Family Dentistry',
  items: [
    {
      q: 'How often should my family visit the dentist?',
      a: 'Most patients benefit from dental exams and cleanings every six months. Some patients with gum disease, frequent cavities, or ongoing dental concerns may need more frequent visits.',
    },
    {
      q: 'Do you accept new family dentistry patients?',
      a: 'Yes. Promenade Dental welcomes new patients and families looking for dental care in Chandler, Fulton Ranch, Ocotillo, Sun Lakes, and nearby communities.',
    },
    {
      q: 'Do children need dental cleanings even if they have baby teeth?',
      a: 'Yes. Baby teeth help with chewing, speech, spacing, and future adult tooth development. Regular visits help prevent cavities and build healthy dental habits early.',
    },
    {
      q: 'What is preventive dentistry?',
      a: 'Preventive dentistry includes exams, cleanings, gum evaluations, oral hygiene guidance, X-rays when needed, oral cancer screening, night guards, and early diagnosis of dental problems.',
    },
    {
      q: 'Are bleeding gums a serious problem?',
      a: 'Bleeding gums may be a sign of gum inflammation or gum disease. It is common, but it should not be ignored. A dental exam can help identify the cause.',
    },
    {
      q: 'Can a night guard stop teeth grinding?',
      a: 'A night guard does not always stop the grinding habit, but it can help protect teeth from the damage caused by grinding and clenching during sleep.',
    },
    {
      q: 'Is Promenade Dental near Fulton Ranch?',
      a: 'Yes. Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248.',
    },
    {
      q: 'Is family dentistry only for children?',
      a: 'No. Family dentistry includes care for children, adults, parents, and seniors. It focuses on long-term oral health for every stage of life.',
    },
    {
      q: 'What if I have not visited the dentist in years?',
      a: 'You are welcome at Promenade Dental. The first visit is about understanding your current oral health and helping you decide what to do next without judgment.',
    },
    {
      q: 'Can I schedule a cleaning if I also have a specific concern?',
      a: 'Yes. If you have sensitivity, bleeding gums, tooth pain, grinding, or another concern, mention it when scheduling so the team can plan your visit appropriately.',
    },
  ],
},
  
    cta: {
      title: 'Ready for Fewer Dental',
      highlight: 'Surprises?',
      subtitle:
        'Promenade Dental helps families stay ahead of cavities, gum problems, tooth wear, and emergency visits with preventive dental care that is clear, gentle, and personal.',
      buttonText: 'Book a Family Dental Appointment',
      buttonHref: '/contact',
      image:'/assets/dental-lobby.jpg'
    },
  },
  {
    slug: 'cosmetic-dentistry',
        name: 'Cosmetic Dentistry',

        metaTitle: 'Cosmetic Dentist in Chandler, AZ | Promenade Dental',

        metaDescription:
          'Promenade Dental provides cosmetic dentistry in Chandler AZ, including teeth whitening, ZOOM whitening, veneers, dental bonding, and smile makeover planning.',

    hero: {
          eyebrow: 'Cosmetic Dentist in Chandler, AZ',
          title: 'Improve stained, chipped, uneven,',
          highlight: 'or worn teeth with cosmetic dentistry.',
          description:
            'Promenade Dental helps patients improve tooth color, shape, spacing, chips, worn edges, and smile balance with cosmetic treatments such as teeth whitening, ZOOM whitening, veneers, bonding, and smile makeover planning.',
          image: '/assets/cosmetic.jpg',

          trustPoints: [
            'Natural-Looking Smile Improvements',
            'Teeth Whitening & ZOOM Whitening',
            'Veneers, Bonding & Smile Makeovers',
            'Cosmetic Care Planned Around Oral Health',
            'Located in Fulton Ranch',
            'New Patients Welcome',
          ],

          primaryCTA: {
            label: 'Book a Cosmetic Consultation',
            href: '/contact',
          },

          secondaryCTA: {
            label: 'Call (480) 802-8188',
            href: 'tel:+14808028188',
          },
        },
      overview: {
      eyebrow: 'Cosmetic Dentistry',
      heading: 'Fix the smile concerns that make you hide your teeth.',
      body:
      'Stained teeth, chipped edges, uneven shapes, small gaps, worn teeth, or old dental work can change the way your smile looks. Some patients stop smiling in photos. Some cover their mouth when they laugh. Others feel their teeth do not match how healthy, polished, or confident they want to appear. Cosmetic dentistry at Promenade Dental focuses on improving your smile in a way that still looks natural. Dr. Shriya looks at your tooth color, shape, gum balance, bite, enamel, existing dental work, and overall oral health before recommending the right cosmetic option.',
      features: [
      'Correct stained or discolored teeth',
      'Improve chips, gaps, and uneven edges',
      'Create a more balanced smile appearance',
      'Treatment recommendations based on oral health',
      ],
      image: '/assets/service-cosmetic.jpg',
      cta: {
      label: 'Start Your Smile Consultation',
      href: '/contact',
      },
      },
      whyItMatters: {
      eyebrow: 'Why Cosmetic Dentistry Matters',
      heading: 'A better smile starts with healthy teeth and gums.',
      description:
      'Cosmetic dentistry is not only about making teeth look whiter or straighter. The best cosmetic results come from understanding the health, strength, and structure behind the smile. Before treatment, Promenade Dental checks whether your teeth and gums are stable enough for whitening, veneers, bonding, or a larger smile makeover plan.',
      items: [
      {
      title: 'Tooth Color Is Only One Part of the Smile',
      body:
      'Whitening can improve stains, but tooth shape, old fillings, enamel thickness, and natural discoloration also affect how bright your smile can look.',
      paths: [
      'M6 38 A18 18 0 0 1 42 38',
      'M14 20 h20 M14 28 h16 M14 36 h12',
      ],
      },
      {
      title: 'Chips and Worn Edges May Have a Cause',
      body:
      'Small chips, rough edges, or worn teeth may come from grinding, clenching, bite pressure, or weakened enamel. Cosmetic repair should consider why the damage happened.',
      paths: [
      'M6 38 A18 18 0 0 1 42 38',
      'M16 18 l8 8 l8 -8 M16 30 l8 -8 l8 8',
      ],
      },
      {
      title: 'Gum Health Affects Cosmetic Results',
      body:
      'Inflamed gums, recession, or uneven gum levels can affect how teeth look. Healthy gums help cosmetic treatment look cleaner, balanced, and more natural.',
      paths: [
      'M6 38 A18 18 0 0 1 42 38',
      'M14 24 q10 -10 20 0 q-2 10 -10 14 q-8 -4 -10 -14',
      ],
      },
      ],
      },
      servicesGrid: {
        eyebrow: 'Cosmetic Dental Services',
        heading: 'Cosmetic Dental Services at Promenade Dental',
        intro:
        'Different smile concerns need different cosmetic solutions. Some patients need a brighter smile. Some need small repairs. Some want to improve tooth shape or spacing. Others need a complete smile makeover that combines more than one treatment.',

        services: [
        {
        title: 'Teeth Whitening',
        description:
        'Professional teeth whitening helps brighten stains caused by coffee, tea, wine, aging, and lifestyle factors. Whitening is often a good option for patients who like the shape of their teeth but want a cleaner, brighter smile.',
        bestFor: [
        'Yellow teeth',
        'Surface stains',
        'Dull smile',
        'Coffee stains',
        'Tea stains',
        'Brighter smile',
        ],
        cta: 'Learn About Teeth Whitening',
        href: '/services/teeth-whitening',
        },

        {
          title: 'ZOOM! Whitening',
          description:
            'ZOOM! whitening is a professional whitening system used within teeth whitening treatment. It may be recommended for patients who want a faster, professionally supervised whitening option.',
          bestFor: [
            'Professional whitening',
            'Faster whitening',
            'Stained teeth',
            'Brighter smile before events',
          ],
          cta: 'Ask About ZOOM Whitening',
          href: '/services/zoom-whitening',
        },

        {
          title: 'Porcelain Veneers',
          description:
            'Porcelain veneers are thin custom restorations placed on the front of teeth to improve color, shape, size, spacing, and overall smile appearance. Veneers can create a more uniform smile while still looking natural when planned carefully.',
          bestFor: [
            'Chipped teeth',
            'Gaps',
            'Uneven teeth',
            'Permanent stains',
            'Small teeth',
            'Smile redesign',
          ],
          cta: 'Learn About Veneers',
          href: '/services/porcelain-veneers',
        },

        {
          title: 'Cosmetic Dental Bonding',
          description:
            'Dental bonding uses tooth-colored material to repair small chips, close minor gaps, smooth uneven edges, or improve the shape of a tooth. Bonding is often a conservative option for smaller cosmetic changes.',
          bestFor: [
            'Small chips',
            'Minor gaps',
            'Uneven tooth edges',
            'Quick cosmetic repairs',
            'Tooth reshaping',
          ],
          cta: 'Learn About Dental Bonding',
          href: '/services/dental-bonding',
        },

        {
          title: 'Smile Makeover Planning',
          description:
            'A smile makeover combines multiple cosmetic or restorative treatments into one planned result. Depending on your needs, this may include whitening, veneers, bonding, crowns, gum care, or tooth replacement.',
          bestFor: [
            'Multiple smile concerns',
            'Worn teeth',
            'Old dental work',
            'Stained teeth',
            'Uneven smile',
          ],
          cta: 'Plan Your Smile Makeover',
          href: '/services/smile-makeover',
        },
        ],
        },
        patientTypesSection: {
          eyebrow: 'Smile Concerns We Treat',
          heading: 'Cosmetic Dentistry for the Smile Problems Patients Notice Every Day',
          intro:
          'Many patients know what bothers them about their smile, but they do not always know which treatment fits the problem. Promenade Dental helps connect your concern with the right cosmetic option.',

          items: [
          {
          title: 'Stained or Yellow Teeth',
          description:
          'If your teeth look yellow, dull, or stained, professional whitening may help brighten your smile. If the discoloration is deeper or does not respond well to whitening, veneers may be discussed.',
          },

          {
            title: 'Chipped Teeth',
            description:
              'Small chips may be repaired with cosmetic bonding. Larger chips, worn edges, or weakened teeth may need veneers or crowns depending on the tooth structure.',
          },

          {
            title: 'Gaps Between Teeth',
            description:
              'Minor gaps may be improved with bonding or veneers. The right option depends on the size of the gap, tooth shape, bite, and long-term goals.',
          },

          {
            title: 'Uneven Tooth Shape',
            description:
              'Teeth that look small, uneven, pointed, or irregular may be improved with bonding, veneers, or smile makeover planning.',
          },

          {
            title: 'Worn or Short Teeth',
            description:
              'Worn teeth may come from grinding, clenching, or bite pressure. Cosmetic treatment may involve bonding, veneers, crowns, or a night guard to protect the result.',
          },

          {
            title: 'Old or Mismatched Dental Work',
            description:
              'Older fillings, crowns, or bonding may no longer match your smile. Dr. Shriya can evaluate whether cosmetic or restorative replacement may improve the appearance and function of your teeth.',
          },

          ],
          },
          comparison: {
            eyebrow: 'Whitening, Bonding, Veneers, or Smile Makeover?',
            heading: 'Choose the Cosmetic Treatment That Matches the Real Problem',
            body: 'Cosmetic dentistry works best when the treatment matches the cause of the concern. Whitening can brighten tooth color, but it does not change tooth shape. Bonding can repair small chips, but it may not be ideal for every long-term cosmetic goal. Veneers can make larger changes, but they require careful planning. A smile makeover may be better when several problems need to be addressed together.',
            matches: [
              {
                title: 'Choose Whitening When Color Is the Main Concern',
                body: 'Whitening is often recommended when teeth are healthy but look yellow, stained, or dull.',
              },
              {
                title: 'Choose Bonding for Small Chips or Minor Shape Changes',
                body: 'Bonding may be a good fit when one or two teeth need conservative cosmetic improvement.',
              },
              {
                title: 'Choose Veneers for More Complete Smile Changes',
                body: 'Veneers may be used when tooth color, shape, spacing, and symmetry need to be improved together.',
              },
              {
                title: 'Choose a Smile Makeover When Several Issues Are Connected',
                body: 'A smile makeover can combine whitening, veneers, bonding, crowns, or other treatments into one plan.',
              },
            ],
          },
          process: {
          eyebrow: 'Cosmetic Consultation Process',
          heading: 'Your Cosmetic Consultation Is Designed to Find the Right Smile Plan',
          subtitle:
          'Your cosmetic dentistry consultation at Promenade Dental is focused on understanding what you want to improve and what your teeth can support safely. Dr. Shriya evaluates your smile before recommending treatment so the final plan fits your oral health, appearance goals, and long-term function.',

          steps: [
          {
          title: 'We Listen to What You Want to Change',
          body:
          'Your visit begins with your smile concerns, goals, timeline, and what you want your teeth to look like.',
          },
          {
          title: 'We Check Your Teeth, Gums, and Bite',
          body:
          'Dr. Shriya evaluates tooth health, gum condition, enamel, bite pressure, previous dental work, and any signs of grinding or wear.',
          },
          {
          title: 'We Explain Your Cosmetic Options',
          body:
          'You will understand whether whitening, bonding, veneers, crowns, or a smile makeover is the better fit.',
          },
          {
          title: 'We Build a Plan That Looks Natural',
          body:
          'The goal is to improve your smile while keeping the result balanced, healthy, and natural-looking.',
          },
          ],

          cta: {
          label: 'Book a Cosmetic Consultation',
          href: '/contact',
          },
          },

          educationSection: {
          eyebrow: 'Natural-Looking Cosmetic Dentistry',
          heading:
          'Cosmetic Dentistry Should Improve Your Smile Without Making It Look Fake',
          body:
          'Many patients want a better smile, but they do not want teeth that look too white, too bulky, or unnatural. At Promenade Dental, cosmetic dentistry is planned around your face, gums, tooth shape, smile line, bite, and natural tooth color.',
          supportingText:
          'A beautiful cosmetic result should look like it belongs to you. The goal is not to make every smile look the same. The goal is to improve what bothers you while keeping your smile balanced and comfortable.',
          image:
          '/assets/dr-shriya.jpeg',
          imageAlt:
          'Patient discussing cosmetic dentistry goals with Dr. Shriya during a smile consultation',
          cta: {
          label: 'Talk to Dr. Shriya About Your Smile Goals',
          href: '/contact',
          },
          },
          benefits: {
            eyebrow: 'Why Choose Promenade Dental',
            heading: 'Why Patients Choose Promenade Dental for Cosmetic Dentistry',
            description:
            'Cosmetic dentistry is personal. Patients want to know their concerns are understood, their options are explained clearly, and their smile will not be overtreated.',

            items: [
            {
            title: 'Cosmetic Care Planned Around Oral Health',
            body:
            'Dr. Shriya checks the teeth, gums, bite, and enamel before recommending cosmetic treatment.',
            paths: [
            'M6 38 A18 18 0 0 1 42 38',
            'M18 16 h12 a6 6 0 0 1 0 12 h-12 a6 6 0 0 1 0 -12 z',
            ],
            },

            {
              title: 'Natural-Looking Results',
              body:
                'The goal is to improve tooth color, shape, and balance while keeping the smile realistic and comfortable.',
              paths: [
                'M6 38 A18 18 0 0 1 42 38',
                'M14 24 q10 -10 20 0 q-2 10 -10 14 q-8 -4 -10 -14',
              ],
            },

            {
              title: 'Clear Treatment Options',
              body:
                'Patients receive simple explanations about whitening, bonding, veneers, and smile makeover options.',
              paths: [
                'M6 38 A18 18 0 0 1 42 38',
                'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6',
              ],
            },

            {
              title: 'One Office for Cosmetic and General Dental Care',
              body:
                'Promenade Dental also provides family, preventive, restorative, implant, and emergency care, which helps cosmetic treatment fit into the bigger oral health picture.',
              paths: [
                'M6 38 A18 18 0 0 1 42 38',
                'M15 18 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0 M25 22 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0 M12 32 q7-6 14 0 M23 32 q5-5 10 0',
              ],
            },

            ],
            },
     localArea: {
          eyebrow: 'Local Cosmetic Dentistry',
          heading:
          'Cosmetic Dentist Near Fulton Ranch, Ocotillo, and Chandler 85248',
          body:
          'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248. Our office serves patients from Fulton Ranch, Ocotillo, Sun Lakes, South Chandler, and nearby communities.\n\nIf you are looking for teeth whitening, veneers, dental bonding, or smile makeover planning near Chandler 85248, Promenade Dental offers cosmetic dentistry with clear communication and a natural-looking approach.',

          address: {
          practice: 'Promenade Dental',
          street: '4905 S. Alma School Rd, Suite 1',
          cityStateZip: 'Chandler, AZ 85248',
          phone: '(480) 802-8188',
          },

          cta: {
          label: 'Get Directions',
          href: 'https://maps.app.goo.gl/ufAu9qeLdfAFBAMr9',
          },
          },
   relatedServices: {
        eyebrow: 'Explore Related Care',
        heading: 'Related Dental Services That Support a Healthier Smile',
        intro:
        'Cosmetic dentistry often connects with preventive, restorative, and implant care. Before improving the appearance of a smile, it is important to understand the health and function behind it.',

        services: [
        {
        title: 'Family & Preventive Dentistry',
        description:
        'Regular exams, cleanings, and gum evaluations help keep your teeth and gums healthy before cosmetic treatment.',
        href: '/services/family-preventive-dentistry',
        },
        {
        title: 'Restorative Dentistry',
        description:
        'Crowns, fillings, bridges, root canals, and other restorative treatments may be needed when teeth are damaged, decayed, or weakened.',
        href: '/services/restorative-dentistry',
        },
        {
        title: 'Dental Implants',
        description:
        'Dental implants may help replace missing teeth and improve the appearance, function, and balance of the smile.',
        href: '/services/dental-implants',
        },
        {
        title: 'Emergency Dentistry',
        description:
        'If tooth pain, swelling, or a broken tooth is affecting your smile, urgent dental care may be needed before cosmetic treatment.',
        href: '/services/emergency-dentistry',
        },
        ],
        },
    faq: {
          eyebrow: 'Frequently Asked Questions',
          heading: 'Frequently Asked Questions About Cosmetic Dentistry',
          items: [
          {
          q: 'What is cosmetic dentistry?',
          a: 'Cosmetic dentistry focuses on improving the appearance of your teeth and smile. It may include teeth whitening, veneers, bonding, smile makeover planning, and other treatments that improve tooth color, shape, spacing, or balance.',
          },
          {
          q: 'Do you offer teeth whitening?',
          a: 'Yes. Promenade Dental offers professional teeth whitening, including ZOOM whitening when appropriate. Whitening may help brighten stains caused by coffee, tea, wine, aging, and lifestyle factors.',
          },
          {
          q: 'Is ZOOM whitening a separate service?',
          a: 'ZOOM whitening is a professional whitening system used within teeth whitening treatment. It is not a separate cosmetic category, but it may be recommended for patients who want a faster whitening option.',
          },
          {
          q: 'What is the difference between bonding and veneers?',
          a: 'Bonding is often used for smaller cosmetic changes such as minor chips, small gaps, or uneven edges. Veneers are usually used for more complete changes to tooth color, shape, size, and spacing.',
          },
          {
          q: 'Can cosmetic dentistry fix chipped teeth?',
          a: 'Yes. Chipped teeth may be improved with bonding, veneers, or crowns depending on the size of the chip, the strength of the tooth, and the bite.',
          },
          {
          q: 'Will my cosmetic dental work look natural?',
          a: 'The goal at Promenade Dental is to create cosmetic improvements that look balanced and natural. Dr. Shriya considers tooth shape, color, gum balance, smile line, and facial features when planning treatment.',
          },
          {
          q: 'Do my teeth need to be healthy before cosmetic dentistry?',
          a: 'Yes. Healthy teeth and gums support better cosmetic results. If cavities, gum disease, grinding, or damaged teeth are present, those issues may need to be addressed before or during cosmetic treatment.',
          },
          {
          q: 'How do I know which cosmetic treatment I need?',
          a: 'A consultation helps determine whether whitening, bonding, veneers, crowns, or a smile makeover is the best fit for your concern. The right option depends on tooth color, shape, enamel, bite, gum health, and your goals.',
          },
          {
          q: 'Is cosmetic dentistry only for front teeth?',
          a: 'Cosmetic dentistry often focuses on visible teeth, but the bite, gums, and back teeth can affect how the smile looks and functions. Dr. Shriya evaluates the full mouth before recommending treatment.',
          },
          {
          q: 'Where is Promenade Dental located?',
          a: 'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248.',
          },
          ],
          },

    cta: {
  title: 'Ready to Feel Better',
  highlight: 'About Your Smile?',
  subtitle:
    'Promenade Dental helps patients improve stained, chipped, uneven, worn, or dull-looking teeth with cosmetic dentistry that is clear, natural-looking, and planned around long-term oral health.',
  buttonText: 'Book a Cosmetic Consultation',
  buttonHref: '/contact',

  secondaryButtonText: 'Call (480) 802-8188',
  secondaryButtonHref: 'tel:+14808028188',

  image: '/assets/dental-lobby.jpg',
},

  },
  {
    slug: 'restorative-dentistry',
    name: 'Restorative Dentistry',
    metaTitle: 'Restorative Dentist in Chandler, AZ | Promenade Dental',
    metaDescription:
      'Restorative dentistry in Chandler AZ for damaged, decayed, infected, weak, or missing teeth. Promenade Dental offers fillings, crowns, bridges, root canals, dentures and more.',

      hero: {
        eyebrow: 'Restorative Dental Care in Fulton Ranch, Chandler',

        title: 'Restorative Dentistry for Damaged, Decayed,',
        highlight: 'Infected, or Missing Teeth in Chandler',

        description:
          'Promenade Dental helps patients restore tooth strength, chewing comfort, and smile function with restorative treatments such as tooth-colored fillings, dental crowns, bridges, root canals, extractions, dentures, and inlays or onlays.',

        image: '/assets/resorative.jpg',

        trustPoints: [
          'Treatment for Damaged and Decayed Teeth',
          'Crowns, Fillings, Bridges & Root Canals',
          'Tooth Replacement Options Available',
          'Planned Around Comfort, Function & Oral Health',
          'Located in Fulton Ranch',
          'New Patients Welcome',
        ],

        primaryCTA: {
          label: 'Book a Restorative Consultation',
          href: '/contact',
        },

        secondaryCTA: {
          label: 'Call (480) 802-8188',
          href: 'tel:+14808028188',
        },
      },
      overview: {
        eyebrow: 'Restorative Dentistry',

        heading:
          'Restorative Dental Care for Tooth Pain, Cracked Teeth, Cavities, and Missing Teeth',

        body:
          'A damaged tooth can affect more than appearance. Cavities, cracks, infection, worn enamel, loose fillings, broken crowns, or missing teeth can change how you chew, speak, smile, and use your bite every day. Restorative dentistry at Promenade Dental is designed to repair damaged teeth, protect weak teeth, relieve dental pain when possible, and replace missing teeth with treatment planned around your oral health, comfort, and long-term function.',

        features: [
          'Repair damaged and weakened teeth',
          'Relieve discomfort caused by decay or infection',
          'Restore chewing comfort and bite function',
          'Replace missing teeth with customized solutions',
        ],

        image: '/assets/service-restorative.jpg',

        cta: {
          label: 'Start Your Restorative Dental Visit',
          href: '/contact',
        },
      },
      whyItMatters: {
        eyebrow: 'Why Restorative Dentistry Matters',

        heading:
          'Restorative Dental Evaluation for Tooth Damage, Bite Function, Gum Health, and Treatment Options',

        description:
          'Restorative treatment should begin with understanding why the tooth is damaged and how much healthy structure remains. A small cavity may need a filling. A cracked or weakened tooth may need a crown. An infected tooth may need root canal therapy. A missing tooth may need a bridge, denture, or implant option. Dr. Shriya evaluates the tooth, surrounding gums, bite pressure, existing dental work, symptoms, and long-term replacement needs before recommending treatment.',

        items: [
          {
            title: 'Tooth Structure and Damage',
            body:
              'The amount of healthy tooth remaining helps determine whether a filling, crown, inlay, onlay, root canal, or extraction may be needed.',
            paths: [
              'M6 38 A18 18 0 0 1 42 38',
              'M18 14 q6 -4 12 0 q4 4 0 10 q-4 6 -10 10 q-6 -4 -8 -10 q-2 -6 6 -10',
            ],
          },

          {
            title: 'Pain, Infection, and Sensitivity',
            body:
              'Tooth pain, swelling, deep decay, and lingering sensitivity may point to infection or nerve involvement that needs evaluation.',
            paths: [
              'M6 38 A18 18 0 0 1 42 38',
              'M24 14 v12 M24 32 v2 M16 22 q8 -10 16 0',
            ],
          },

          {
            title: 'Bite and Tooth Replacement Needs',
            body:
              'A damaged or missing tooth can change how other teeth function. Restorative care considers chewing comfort, bite balance, and future tooth stability.',
            paths: [
              'M6 38 A18 18 0 0 1 42 38',
              'M14 22 h20 M18 30 h12 M20 14 q4 6 8 0 q4 6 8 0',
            ],
          },
        ],
      },

      servicesGrid: {
        eyebrow: 'Restorative Dentistry Services',

        heading: 'Restorative Dentistry Services for Repairing and Replacing Teeth',

        intro:
          'Promenade Dental provides restorative treatments for teeth that are decayed, cracked, infected, weakened, worn, or missing. The right treatment depends on the condition of the tooth, the amount of damage, the bite, the gums, and the patient’s goals.',

        services: [
          {
            title: 'Tooth-Colored Fillings',
            description:
              'Tooth-colored fillings repair cavities and small areas of tooth damage using material designed to blend with the natural tooth.',
            bestFor: [
              'Small cavities',
              'Minor decay',
              'Replacing old fillings',
              'Early tooth repair',
            ],
            cta: 'Learn About Tooth-Colored Fillings',
            href: '/services/tooth-colored-fillings',
          },

          {
            title: 'Dental Crowns',
            description:
              'Dental crowns cover and protect teeth that are cracked, weakened, heavily filled, broken, or treated with root canal therapy.',
            bestFor: [
              'Cracked teeth',
              'Weak teeth',
              'Large fillings',
              'Broken teeth',
              'Post-root canal protection',
            ],
            cta: 'Learn About Dental Crowns',
            href: '/services/dental-crowns',
          },

          {
            title: 'Dental Bridges',
            description:
              'Dental bridges replace one or more missing teeth by anchoring an artificial tooth to nearby teeth or dental implants when appropriate.',
            bestFor: [
              'Missing teeth',
              'Fixed tooth replacement',
              'Chewing support',
              'Smile restoration',
            ],
            cta: 'Learn About Dental Bridges',
            href: '/services/dental-bridges',
          },

          {
            title: 'Root Canal Therapy',
            description:
              'Root canal therapy treats infection or inflammation inside a tooth to help relieve pain and preserve the natural tooth when possible.',
            bestFor: [
              'Tooth infection',
              'Severe tooth pain',
              'Deep decay',
              'Dental abscess',
              'Lingering sensitivity',
            ],
            cta: 'Learn About Root Canals',
            href: '/services/root-canal-therapy',
          },

          {
            title: 'Tooth Extractions',
            description:
              'Tooth extraction may be needed when a tooth is too damaged, infected, loose, or broken to be predictably restored.',
            bestFor: [
              'Non-restorable teeth',
              'Severe decay',
              'Infection',
              'Broken teeth',
              'Painful teeth',
            ],
            cta: 'Learn About Tooth Extractions',
            href: '/services/tooth-extractions',
          },

          {
            title: 'Dentures & Partials',
            description:
              'Dentures and partial dentures replace multiple missing teeth and help restore chewing ability, speech, facial support, and smile appearance.',
            bestFor: [
              'Several missing teeth',
              'Full tooth loss',
              'Removable replacement',
              'Partial tooth replacement',
            ],
            cta: 'Learn About Dentures',
            href: '/services/dentures-partials',
          },

          {
            title: 'Inlays & Onlays',
            description:
              'Inlays and onlays repair teeth that need more support than a filling but may not require a full crown.',
            bestFor: [
              'Moderate tooth damage',
              'Larger cavities',
              'Preserving tooth structure',
              'Partial restorations',
            ],
            cta: 'Learn About Inlays & Onlays',
            href: '/services/inlays-onlays',
          },
        ],
      },
      comparison: {
        eyebrow: 'Fillings, Crowns, Root Canals, or Extractions?',

        heading:
          'Fillings, Crowns, Root Canals, or Extractions for Different Levels of Tooth Damage',

        body:
          'Restorative dentistry is not one treatment. The right option depends on how much damage is present and whether the tooth can still be protected, repaired, or saved.',

        matches: [
          {
            title: 'Fillings for Smaller Cavities',
            body:
              'A filling may be recommended when decay is limited and enough healthy tooth structure remains.',
          },

          {
            title: 'Crowns for Weak or Cracked Teeth',
            body:
              'A crown may be recommended when a tooth needs stronger protection than a filling can provide.',
          },

          {
            title: 'Root Canals for Tooth Infection',
            body:
              'Root canal therapy may be recommended when infection or inflammation reaches the inside of the tooth.',
          },

          {
            title: 'Extractions for Teeth That Cannot Be Restored',
            body:
              'Extraction may be recommended when a tooth is too damaged, infected, or unstable to repair predictably.',
          },
        ],
      },
      solutionsGrid: {
        eyebrow: 'Missing Tooth Replacement',
        heading: 'Bridges, Dentures, or Implants for Replacing Missing Teeth',
        body: 'A missing tooth can affect more than the space in your smile. Nearby teeth may shift, chewing can become less comfortable, and bite pressure may change. Promenade Dental helps patients understand replacement options based on the number of missing teeth, gum health, bone support, budget, comfort, and long-term goals.',
        cards: [
          {
            title: 'Dental Bridges',
            subtitle: 'Fixed Tooth Replacement',
            body: 'A bridge can replace one or more missing teeth and is fixed in place, often using neighboring teeth or implants for support.',
            image: '/assets/dental-bridge.jpg', // Replace with your actual image path
          },
          {
            title: 'Dentures & Partials',
            subtitle: 'Multiple Missing Teeth',
            body: 'Dentures and partials can replace several missing teeth with removable appliances designed to support chewing, speech, and appearance.',
            image: '/assets/dentures.webp', // Replace with your actual image path
          },
          {
            title: 'Dental Implants',
            subtitle: 'Stable Tooth Replacement',
            body: 'Dental implants may support a crown, bridge, or denture when bone support and oral health are suitable.',
            image: '/assets/dental-implants.png', // Replace with your actual image path
          },
        ],
        cta: {
          label: 'Discuss Tooth Replacement Options',
          href: '/contact',
        },
      },
      symptomsSection: {
        eyebrow: 'When to Schedule a Restorative Evaluation',

        heading:
          'Restorative Care for Pain, Cracks, and Broken Teeth',

        body:
          'Many restorative problems begin with symptoms that patients try to ignore. Pain, sensitivity, chewing discomfort, or a broken tooth should be evaluated before the condition becomes more difficult to treat.',

        symptoms: [
          {
            title: 'Tooth Pain or Throbbing',
            body:
              'Pain may be caused by decay, infection, cracks, bite pressure, or gum-related problems.',
          },

          {
            title: 'Sensitivity to Cold or Sweets',
            body:
              'Sensitivity may come from cavities, exposed root surfaces, enamel wear, or cracks in the tooth.',
          },

          {
            title: 'Broken or Chipped Tooth',
            body:
              'A broken tooth may need bonding, a filling, a crown, root canal therapy, or extraction depending on the damage.',
          },

          {
            title: 'Pain When Chewing',
            body:
              'Chewing pain may indicate a cracked tooth, deep decay, infection, or bite-related stress.',
          },

          {
            title: 'Loose Filling or Crown',
            body:
              'Loose or damaged dental work should be checked before decay or fracture worsens underneath.',
          },

          {
            title: 'Missing Tooth or Loose Denture',
            body:
              'Missing teeth and unstable dentures can affect chewing, speech, and long-term bite comfort.',
          },
        ],
      },
      process: {
        eyebrow: 'Restorative Treatment Process',

        heading:
          'Restorative Care for Stronger Teeth and Lasting Function',

        subtitle:
          'Your restorative treatment plan is based on diagnosis, tooth condition, symptoms, bite function, and your long-term oral health needs. Dr. Shriya explains what is urgent, what can be repaired, what should be monitored, and what options may be available.',

        steps: [
          {
            title: 'Tooth and Symptom Evaluation',
            body:
              'Dr. Shriya reviews your symptoms, dental history, X-rays if needed, existing dental work, and the condition of the affected tooth.',
          },

          {
            title: 'Diagnosis and Treatment Options',
            body:
              'You receive a clear explanation of what is causing the issue and whether a filling, crown, root canal, extraction, bridge, denture, or another option may be needed.',
          },

          {
            title: 'Restorative Treatment Planning',
            body:
              'Treatment is planned around tooth strength, comfort, appearance, chewing function, and long-term stability.',
          },

          {
            title: 'Follow-Up and Maintenance',
            body:
              'After restorative care, routine visits help monitor the restored tooth, bite comfort, gum health, and surrounding teeth.',
          },
        ],

        cta: {
          label: 'Book a Restorative Dental Visit',
          href: '/contact',
        },
      },
      benefits: {
        eyebrow: 'Why Choose Promenade Dental',

        heading:
          'Dentist-Led Restorative Care for Tooth Repair and Replacement',

        description:
          'Restorative dentistry often involves important decisions about saving, repairing, protecting, or replacing teeth. Promenade Dental focuses on clear diagnosis, practical treatment planning, and care that supports long-term oral health.',

        items: [
          {
            title: 'Treatment Based on Diagnosis',
            body:
              'Dr. Shriya evaluates the tooth, gums, bite, X-rays, symptoms, and existing dental work before recommending treatment.',
            paths: [
              'M6 38 A18 18 0 0 1 42 38',
              'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6',
            ],
          },

          {
            title: 'Repair Before Bigger Problems Develop',
            body:
              'Restorative care helps address decay, cracks, weak teeth, and loose dental work before the condition worsens.',
            paths: [
              'M6 38 A18 18 0 0 1 42 38',
              'M24 12 L24 30 M14 22 L34 22',
            ],
          },

          {
            title: 'Tooth Replacement Options Explained Clearly',
            body:
              'Patients are guided through bridges, dentures, implants, and other options when teeth are missing or cannot be saved.',
            paths: [
              'M6 38 A18 18 0 0 1 42 38',
              'M14 24 h20 M18 18 h12 M18 30 h12 M24 14 v20',
            ],
          },

          {
            title: 'Family, Cosmetic, and Restorative Care in One Office',
            body:
              'Promenade Dental can connect restorative care with preventive, cosmetic, implant, and emergency dentistry when needed.',
            paths: [
              'M6 38 A18 18 0 0 1 42 38',
              'M15 18 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0 M25 22 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0 M12 32 q7-6 14 0 M23 32 q5-5 10 0',
            ],
          },
        ],
      },
      localArea: {
        eyebrow: 'Local Restorative Dentistry',

        heading:
          'Restorative Dentist Near Fulton Ranch and Chandler 85248',

        body:
          'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248. Our office serves patients from Fulton Ranch, Ocotillo, Sun Lakes, South Chandler, and nearby communities.\n\nIf you are looking for restorative dentistry, dental crowns, tooth-colored fillings, root canals, dental bridges, dentures, or tooth repair near Chandler 85248, Promenade Dental offers restorative care planned around diagnosis, comfort, and long-term function.',

        address: {
          practice: 'Promenade Dental',
          street: '4905 S. Alma School Rd, Suite 1',
          cityStateZip: 'Chandler, AZ 85248',
          phone: '(480) 802-8188',
        },

        cta: {
          label: 'Get Directions',
          href: 'https://maps.app.goo.gl/ufAu9qeLdfAFBAMr9',
        },
      },
      relatedServices: {
        eyebrow: 'Explore Related Care',

        heading:
          'Related Dental Services for Complete Smile Care',

        intro:
          'Restorative dentistry often connects with preventive care, cosmetic treatment, dental implants, and emergency dentistry. The right next step depends on the condition of the tooth and the patient’s goal.',

        services: [
          {
            title: 'Family & Preventive Dentistry',
            description:
              'Preventive visits help catch cavities, gum disease, tooth wear, and dental problems before larger restorative treatment is needed.',
            href: '/services/family-preventive-dentistry',
          },

          {
            title: 'Cosmetic Dentistry',
            description:
              'Cosmetic dentistry may help improve tooth color, shape, spacing, and smile appearance after restorative needs are addressed.',
            href: '/services/cosmetic-dentistry',
          },

          {
            title: 'Dental Implants',
            description:
              'Dental implants may help replace missing teeth with stable restorations when oral health and bone support are suitable.',
            href: '/services/dental-implants',
          },

          {
            title: 'Emergency Dentistry',
            description:
              'Emergency dental care may be needed for severe tooth pain, swelling, broken teeth, or knocked-out teeth.',
            href: '/services/emergency-dentistry',
          },
        ],
      },
      faq: {
        eyebrow: 'Frequently Asked Questions',

        heading:
          'Frequently Asked Questions About Restorative Dentistry',

        items: [
          {
            q: 'What is restorative dentistry?',
            a: 'Restorative dentistry focuses on repairing or replacing teeth that are damaged, decayed, infected, weakened, worn, or missing. It may include fillings, crowns, bridges, root canals, extractions, dentures, inlays, onlays, and implant-supported options.',
          },
          {
            q: 'How do I know if I need a filling or a crown?',
            a: 'A filling may be used for smaller cavities or minor damage. A crown may be needed when a tooth is cracked, weakened, heavily filled, or damaged enough that it needs stronger protection.',
          },
          {
            q: 'When is a root canal needed?',
            a: 'Root canal therapy may be needed when decay, infection, or inflammation reaches the inside of the tooth. Symptoms may include severe tooth pain, lingering sensitivity, swelling, or pain when chewing.',
          },
          {
            q: 'When does a tooth need to be extracted?',
            a: 'A tooth may need extraction if it is too damaged, infected, loose, fractured, or decayed to be predictably restored. Dr. Shriya evaluates whether the tooth can be saved before recommending extraction.',
          },
          {
            q: 'Can missing teeth be replaced?',
            a: 'Yes. Missing teeth may be replaced with dental bridges, dentures, partial dentures, dental implants, or implant-supported restorations depending on your oral health and goals.',
          },
          {
            q: 'Are tooth-colored fillings available?',
            a: 'Yes. Promenade Dental offers tooth-colored fillings to repair cavities and small areas of tooth damage while blending with the natural tooth color.',
          },
          {
            q: 'What is the difference between a bridge and a denture?',
            a: 'A bridge is fixed in place and replaces one or more missing teeth using nearby teeth or implants for support. A denture or partial denture is removable and can replace several or all missing teeth.',
          },
          {
            q: 'Do restorative treatments also improve appearance?',
            a: 'Many restorative treatments can improve both function and appearance. Crowns, fillings, bridges, dentures, and implant restorations may help restore chewing ability while improving the look of the smile.',
          },
          {
            q: 'Is restorative dentistry painful?',
            a: 'Restorative care is planned around patient comfort. The level of treatment depends on the condition being treated, and Dr. Shriya explains what to expect before care begins.',
          },
          {
            q: 'Where is Promenade Dental located?',
            a: 'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248.',
          },
        ],
      },
      cta: {
        title: 'Rebuild Your Smile',
        highlight: 'With Restorative Care',

        subtitle:
          'Promenade Dental helps patients repair damaged teeth, restore chewing comfort, relieve dental problems when possible, and replace missing teeth with restorative care planned around diagnosis, function, and long-term oral health.',

        buttonText: 'Book a Restorative Consultation',
        buttonHref: '/contact',

        secondaryButtonText: 'Call (480) 802-8188',
        secondaryButtonHref: 'tel:+14808028188',

        image: '/assets/dental-lobby.jpg',
      },
  },

  {
    slug: 'dental-implants',
name: 'Dental Implants',

metaTitle: 'Dental Implants in Chandler, AZ | Promenade Dental',

metaDescription:
  'Dental implants in Chandler AZ for replacing missing teeth with stable, natural-looking restorations. Visit Promenade Dental near Fulton Ranch for implant consultation.',

hero: {
  eyebrow: 'Tooth Replacement Options in Fulton Ranch',

  title: 'Dental Implants for Missing Teeth and',
  highlight: 'Stable Tooth Replacement in Chandler',

  description:
    'Promenade Dental helps patients explore dental implant options for replacing one tooth, several teeth, or supporting dentures with treatment planning focused on oral health, bone support, chewing function, smile appearance, and long-term stability.',

  image: '/assets/h-dentalimplants.jpg',

  trustPoints: [
    'Single Tooth Implant Options',
    'Implant-Supported Bridges',
    'Implant-Supported Dentures',
    'Treatment Planning Based on Bone and Gum Health',
    'Located in Fulton Ranch',
    'New Patients Welcome',
  ],

  primaryCTA: {
    label: 'Book an Implant Consultation',
    href: '/contact',
  },

  secondaryCTA: {
    label: 'Call (480) 802-8188',
    href: 'tel:+14808028188',
  },
},
overview: {
  eyebrow: 'Dental Implant Solutions',

  heading:
    'Dental Implants for Missing Teeth, Chewing Difficulty, Tooth Shifting, and Denture Instability',

  body:
    'Missing teeth can affect chewing comfort, speech, smile appearance, bite balance, and the position of nearby teeth. For some patients, missing teeth may also make dentures feel loose or uncomfortable during daily use. Dental implants are designed to support replacement teeth by acting as artificial tooth roots. Depending on the case, implants may support a single crown, bridge, or denture. At Promenade Dental, Dr. Shriya evaluates your missing tooth area, gum health, bone support, bite, medical history, and replacement goals before discussing implant options.',

  features: [
    'Replace one or multiple missing teeth',
    'Support crowns, bridges, or dentures',
    'Help maintain bite balance and function',
    'Treatment planned around oral health goals',
  ],

  image: '/assets/service-dental-implants.jpg',

  cta: {
    label: 'Start Your Implant Evaluation',
    href: '/contact',
  },
},
whyItMatters: {
  eyebrow: 'Dental Implant Evaluation',

  heading:
    'Dental Implant Evaluation for Missing Teeth, Bone Support, Gum Health, Bite Function, and Replacement Options',

  description:
    'Dental implant treatment depends on the health and structure of the mouth. Before implant treatment is recommended, Dr. Shriya evaluates the missing tooth area, bone support, gum health, nearby teeth, bite pressure, medical history, oral hygiene, and whether additional treatment may be needed first. The consultation helps determine whether a single implant, implant-supported bridge, implant-supported denture, traditional bridge, or removable denture should be considered.',

  items: [
    {
      title: 'Bone Support',
      body:
        'Dental implants need adequate bone support for stability. If bone support is limited, additional planning may be needed.',
      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 30 h20 M18 22 h12 M20 14 q4 6 8 0 q4 6 8 0',
      ],
    },

    {
      title: 'Gum Health',
      body:
        'Healthy gums help support implant treatment and long-term maintenance.',
      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 24 q10 -10 20 0 q-2 8 -10 12 q-8 -4 -10 -12',
      ],
    },

    {
      title: 'Missing Tooth Pattern',
      body:
        'The number and position of missing teeth help determine whether a single implant, bridge, or denture-supported option may be suitable.',
      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M12 24 h8 M24 24 h8 M18 18 v12',
      ],
    },
  ],

  cta: {
    label: 'Find Out If Dental Implants Are Right for You',
    href: '/contact',
  },
},
features: {
  eyebrow: 'Benefits of Dental Implants',

  heading:
    'Dental Implants for Stable Tooth Replacement, Chewing Support, and Smile Function',

  body:
    'Dental implants can provide support for replacement teeth in a way that helps restore everyday function. They are often considered for patients who want a stable replacement option and have suitable oral health, gum health, and bone support.',

  features: [
    {
      title: 'Supports Replacement Teeth',

      body:
        'Implants can support crowns, bridges, or dentures depending on how many teeth need replacement.',
    },

    {
      title: 'Helps Restore Chewing Comfort',

      body:
        'Implant-supported restorations can improve chewing support compared with an untreated missing tooth space.',
    },

    {
      title: 'Helps Maintain Tooth Replacement Stability',

      body:
        'Implants may help provide stability for replacement teeth, bridges, or dentures when properly planned.',
    },
  ],
},
servicesGrid: {
  eyebrow: 'Dental Implant Treatment Options',

  heading:
    'Dental Implant Options for One Missing Tooth, Several Missing Teeth, or Denture Support',

  intro:
    'Dental implants can be used in different ways depending on how many teeth are missing and what type of replacement is needed. Promenade Dental helps patients understand the differences between single implants, implant-supported bridges, and implant-supported dentures.',

  services: [
    {
      title: 'Single Tooth Implant',

      description:
        'A single tooth implant can replace one missing tooth with an implant-supported crown when gum health and bone support are suitable.',

      bestFor: [
        'One missing tooth',
        'Independent tooth replacement',
        'Avoiding support from neighboring teeth',
        'Stable single tooth restoration',
      ],

      cta: 'Learn About Single Tooth Implants',

      href: '/services/single-tooth-implant',
    },

    {
      title: 'Implant-Supported Bridge',

      description:
        'An implant-supported bridge can replace multiple missing teeth using dental implants for support instead of relying only on natural teeth.',

      bestFor: [
        'Several missing teeth',
        'Fixed replacement',
        'Implant-supported chewing support',
        'Avoiding traditional bridge support in selected cases',
      ],

      cta: 'Learn About Implant-Supported Bridges',

      href: '/services/implant-supported-bridge',
    },

    {
      title: 'Implant-Supported Dentures',

      description:
        'Implant-supported dentures use dental implants to help improve denture stability for patients replacing many or all teeth.',

      bestFor: [
        'Full arch tooth replacement',
        'Loose denture concerns',
        'Improved denture support',
        'Removable or fixed implant-supported options',
      ],

      cta: 'Learn About Implant-Supported Dentures',

      href: '/services/implant-supported-dentures',
    },
  ],
},
suitability: {
  eyebrow: 'Is Implant Treatment Right for You?',

  heading:
    'Dental Implants for Patients With Missing Teeth and Suitable Gum and Bone Support',

  body:
    'Dental implants may be suitable for patients who want a stable tooth replacement option and have the oral health needed to support implant treatment. The right recommendation depends on gum health, bone support, medical history, bite pressure, oral hygiene, and the number of missing teeth.\n\nAt Promenade Dental, Dr. Shriya helps you understand whether dental implants, bridges, dentures, partials, or another restorative option may fit your needs.',

  goodFit: {
    title: 'Dental Implants May Be Right If',

    items: [
      'You are missing one or more teeth',
      'You want a stable replacement option',
      'You want to avoid a removable appliance when possible',
      'You have suitable gum and bone support',
      'You want to support a crown, bridge, or denture with implants',
    ],
  },

  alternative: {
    title: 'Another Option May Be Better If',

    items: [
      'Bone support is limited without additional treatment',
      'Gum disease needs treatment first',
      'Medical factors affect healing or implant suitability',
      'You prefer a removable denture or partial',
      'A traditional bridge may be more practical for the missing tooth space',
    ],
  },

  cta: {
    label: 'Schedule an Implant Suitability Evaluation',
    href: '/contact',
  },
},
comparison: {
  eyebrow: 'Dental Implants, Bridges, or Dentures?',

  heading:
    'Dental Implants, Bridges, and Dentures for Different Missing Tooth Replacement Needs',

  body:
    'Missing teeth can be replaced in different ways. Dental implants may support individual crowns, bridges, or dentures. Traditional bridges are fixed restorations that may use neighboring teeth for support. Dentures and partials are removable options for replacing several or all missing teeth.',

  matches: [
    {
      title: 'Dental Implants for Stable Replacement Support',

      body:
        'Implants may be recommended when a patient wants stable support for a crown, bridge, or denture and has suitable oral health.',
    },

    {
      title: 'Dental Bridges for Fixed Tooth Replacement',

      body:
        'A bridge may be recommended when one or more missing teeth can be replaced with a fixed restoration supported by neighboring teeth or implants.',
    },

    {
      title: 'Dentures and Partials for Removable Replacement',

      body:
        'Dentures and partials may be recommended when several or all teeth need replacement with a removable appliance.',
    },
  ],
},
process: {
  eyebrow: 'Dental Implant Planning Process',

  heading:
    'Dental Implant Planning for Bone Support, Gum Health, Tooth Replacement, and Long-Term Function',

  subtitle:
    'Dental implant treatment is planned around the health of the mouth and the type of replacement needed. The goal is to determine whether implants are suitable and how they can support the final restoration.',

  steps: [
    {
      title: 'Missing Tooth and Oral Health Evaluation',

      body:
        'Dr. Shriya evaluates the missing tooth area, gums, nearby teeth, bite, bone support, and overall oral health.',
    },

    {
      title: 'Implant Suitability Review',

      body:
        'You receive a clear explanation of whether dental implants are suitable and whether additional treatment may be needed before implant placement.',
    },

    {
      title: 'Tooth Replacement Planning',

      body:
        'The final replacement is planned based on whether you need a single implant crown, implant-supported bridge, or implant-supported denture.',
    },

    {
      title: 'Restoration and Maintenance Planning',

      body:
        'Implant restorations require ongoing cleaning, gum monitoring, bite evaluation, and routine dental visits.',
    },
  ],

  cta: {
    label: 'Book an Implant Consultation',
    href: '/contact',
  },
},
maintenance: {
  eyebrow: 'Dental Implant Maintenance',

  heading:
    'Dental Implant Care for Patients Who Want Long-Term Stability and Healthy Gums',

  body:
    'Dental implants need ongoing care just like natural teeth and other restorations. Healthy gums, good home hygiene, routine dental exams, and bite monitoring help support long-term implant success.',

  cards: [
    {
      title: 'Clean Around the Implant Restoration',

      body:
        'Plaque and bacteria can collect around implant-supported crowns, bridges, or dentures, so daily cleaning is important.',
    },

    {
      title: 'Keep Gums Healthy',

      body:
        'Gum inflammation around implants should be monitored because healthy tissue helps support implant stability.',
    },

    {
      title: 'Avoid Excessive Bite Stress',

      body:
        'Grinding, clenching, or heavy bite pressure can affect implant restorations and surrounding teeth.',
    },

    {
      title: 'Attend Routine Dental Visits',

      body:
        'Regular visits help monitor implant restorations, bite comfort, gum health, and oral hygiene.',
    },
  ],
},
benefits: {
  eyebrow: 'Why Choose Promenade Dental',

  heading:
    'Dentist-Led Implant Planning for Missing Teeth, Function, Appearance, and Long-Term Oral Health',

  description:
    'Dental implant treatment should be planned around the patient’s whole mouth, not only the missing tooth. Promenade Dental evaluates gum health, bone support, bite function, restorative needs, and replacement goals before discussing implant options.',

  items: [
    {
      title: 'Complete Missing Tooth Evaluation',

      body:
        'Dr. Shriya evaluates the missing tooth area, nearby teeth, gums, bite, bone support, and X-rays when needed.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6',
      ],
    },

    {
      title: 'Implant Options Explained Clearly',

      body:
        'Patients are guided through single implants, implant-supported bridges, implant-supported dentures, traditional bridges, and removable options when relevant.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 24 h20 M18 18 h12 M18 30 h12 M24 14 v20',
      ],
    },

    {
      title: 'Restorative Planning Around the Final Tooth',

      body:
        'Implant treatment planning considers how the final crown, bridge, or denture should function and look.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M24 12 L24 30 M14 22 L34 22',
      ],
    },

    {
      title: 'Restorative and Preventive Care in One Office',

      body:
        'Promenade Dental can connect implant planning with crowns, bridges, dentures, extractions, preventive care, and long-term maintenance.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M15 18 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0 M25 22 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0 M12 32 q7-6 14 0 M23 32 q5-5 10 0',
      ],
    },
  ],
},
localArea: {
  eyebrow: 'Local Dental Implant Care',

  heading:
    'Dental Implants Near Fulton Ranch and Chandler 85248',

  body:
    'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248. Our office serves patients from Fulton Ranch, Ocotillo, Sun Lakes, South Chandler, and nearby communities.\n\nIf you are looking for dental implants, single tooth implants, implant-supported bridges, implant-supported dentures, or missing tooth replacement near Chandler 85248, Promenade Dental offers implant consultations based on oral health, bone support, gum health, bite function, and long-term replacement goals.',

  address: {
    practice: 'Promenade Dental',
    street: '4905 S. Alma School Rd, Suite 1',
    cityStateZip: 'Chandler, AZ 85248',
    phone: '(480) 802-8188',
  },

  cta: {
    label: 'Get Directions',
    href: 'https://maps.app.goo.gl/ufAu9qeLdfAFBAMr9',
  },
},
relatedServices: {
  eyebrow: 'Explore Related Implant Care',

  heading:
    'Related Implant and Restorative Services for Missing Teeth and Tooth Replacement',

  intro:
    'Dental implants are one option for replacing missing teeth. Some patients may need single tooth replacement, multiple tooth replacement, denture support, extractions, or restorative treatment before or after implant planning.',

  services: [
    {
      title: 'Single Tooth Implant',

      description:
        'A single tooth implant can replace one missing tooth with an implant-supported crown when suitable.',

      href: '/services/single-tooth-implant',
    },

    {
      title: 'Implant-Supported Bridge',

      description:
        'An implant-supported bridge may replace several missing teeth with support from dental implants.',

      href: '/services/implant-supported-bridge',
    },

    {
      title: 'Implant-Supported Dentures',

      description:
        'Implant-supported dentures may improve denture stability for patients replacing many or all teeth.',

      href: '/services/implant-supported-dentures',
    },

    {
      title: 'Restorative Dentistry',

      description:
        'Restorative dentistry may be needed before or after implant treatment to protect remaining teeth and support long-term oral health.',

      href: '/services/restorative-dentistry',
    },
  ],
},
faq: {
  eyebrow: 'Frequently Asked Questions',

  heading:
    'Dental Implant Questions About Missing Teeth, Bone Support, Bridges, Dentures, and Long-Term Care',

  items: [
    {
      q: 'What are dental implants?',
      a: 'Dental implants are artificial tooth roots used to support replacement teeth such as crowns, bridges, or dentures.',
    },

    {
      q: 'Who is a good candidate for dental implants?',
      a: 'A good implant candidate usually needs suitable bone support, healthy gums, good oral hygiene, and medical factors that support proper healing. A dental evaluation is needed to confirm suitability.',
    },

    {
      q: 'Can one missing tooth be replaced with an implant?',
      a: 'Yes. A single tooth implant may replace one missing tooth with an implant-supported crown when the area has suitable gum and bone support.',
    },

    {
      q: 'Can implants replace several missing teeth?',
      a: 'Yes. Multiple missing teeth may be replaced with an implant-supported bridge or implant-supported denture depending on the case.',
    },

    {
      q: 'Are dental implants better than bridges?',
      a: 'Implants and bridges solve missing tooth problems differently. Implants do not rely on neighboring teeth in the same way a traditional bridge may, but suitability depends on bone support, gum health, medical history, and treatment goals.',
    },

    {
      q: 'Can dental implants support dentures?',
      a: 'Yes. Implant-supported dentures use dental implants to help improve denture support and stability when the patient is a suitable candidate.',
    },

    {
      q: 'Do dental implants need special care?',
      a: 'Dental implants need daily cleaning, healthy gums, routine dental visits, and bite monitoring. Implant-supported restorations should be maintained carefully.',
    },

    {
      q: 'Can I get an implant after tooth extraction?',
      a: 'A dental implant may be possible after extraction depending on healing, bone support, gum health, and the condition of the extraction site.',
    },

    {
      q: 'What happens if I do not replace a missing tooth?',
      a: 'A missing tooth can affect chewing, tooth position, bite support, and smile appearance. Nearby teeth may shift over time.',
    },

    {
      q: 'Where is Promenade Dental located?',
      a: 'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248.',
    },
  ],
},
cta: {
  title: 'Schedule a Dental Implant Consultation',
  highlight: 'for Missing Teeth or Stable Tooth Replacement',

  subtitle:
    'Promenade Dental helps patients explore dental implant options for single tooth replacement, multiple tooth replacement, and denture support with treatment planning based on gum health, bone support, bite function, appearance, and long-term oral health.',

  buttonText: 'Book an Implant Consultation',
  buttonHref: '/contact',

  secondaryButtonText: 'Call (480) 802-8188',
  secondaryButtonHref: 'tel:+14808028188',

  image: '/assets/dental-implants-cta.jpg',
},
  }


];


export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}