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
comparison?:{
   eyebrow: string;
    heading: string;
    body: string;
    matches:{
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
          image: '/assets/cosmetic.jfif',

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
  }


  // ─────────────────────────────────────────────────────────────────────────
  // 2. COSMETIC DENTISTRY
  // ─────────────────────────────────────────────────────────────────────────
  // {
  //   slug: 'cosmetic-dentistry',
  //   name: 'Cosmetic Dentistry',
  //   hero: {
  //     eyebrow: 'Cosmetic Dentistry',
  //     title: 'The smile you\'ve always',
  //     highlight: 'imagined.',
  //     description:
  //       'From subtle touch-ups to complete smile makeovers — Dr. Verma combines clinical precision with a fine-arts eye to craft results that look genuinely natural and feel completely yours.',
  //   },
  //   overview: {
  //     eyebrow: 'Overview',
  //     heading: 'Artistry meets precision dentistry.',
  //     body:
  //       'A beautiful smile is often the first thing people notice — and one of the most powerful boosts to confidence. Dr. Verma\'s background in both dentistry and design means every cosmetic treatment is planned with both health and aesthetics in mind, so your results look as good as they feel.',
  //     features: [
  //       'Porcelain veneers & composite bonding',
  //       'ZOOM! in-office teeth whitening',
  //       'Smile design & full smile makeovers',
  //       'Crown & bridge restorations',
  //     ],
  //     image: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=1200&q=80',
  //   },
  //   process: {
  //     eyebrow: 'What To Expect',
  //     heading: 'Your smile, designed together.',
  //     subtitle: 'Every cosmetic case starts with a conversation — not a sales pitch.',
  //     steps: [
  //       { title: 'Smile Consultation', body: 'Dr. Verma listens to what you want, reviews your dental health, and maps out realistic options — no pressure, no upselling.' },
  //       { title: 'Treatment Planning', body: 'A detailed plan with timeline, costs, and expected outcomes so you know exactly what to expect before committing to anything.' },
  //       { title: 'Precision Treatment', body: 'Each procedure is performed with meticulous care, using materials matched to your natural tooth shade and anatomy.' },
  //       { title: 'Final Reveal', body: 'A final check to ensure fit, function, and aesthetics are all exactly right before you leave.' },
  //     ],
  //   },
  //   benefits: {
  //     eyebrow: 'Why Choose Us',
  //     heading: 'Cosmetic care with a conscience.',
  //     items: [
  //       {
  //         title: 'Trained Artistic Eye',
  //         body: 'Dr. Verma\'s design background means your cosmetic work is shaped by proportion and aesthetics, not just clinical protocols.',
  //         paths: ['M6 38 A18 18 0 0 1 42 38', 'M14 24 Q24 14 34 24 Q24 34 14 24'],
  //       },
  //       {
  //         title: 'Conservative Approach',
  //         body: 'Dr. Verma recommends only what genuinely improves your smile — preserving as much natural tooth structure as possible.',
  //         paths: ['M6 38 A18 18 0 0 1 42 38', 'M18 20 l4 4 l8 -8'],
  //       },
  //       {
  //         title: 'Seamless, Natural Results',
  //         body: 'Every restoration is shade-matched and contoured to blend with your surrounding teeth — no obvious "dental work" look.',
  //         paths: ['M6 38 A18 18 0 0 1 42 38', 'M16 24 h16 M24 16 v16'],
  //       },
  //     ],
  //   },
  //   gallery: {
  //     eyebrow: 'Inside Our Office',
  //     heading: 'A calm space, built for ease.',
  //     images: [
  //       'https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=900&q=80',
  //       'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=900&q=80',
  //       'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=900&q=80',
  //       'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=900&q=80',
  //     ],
  //   },
  //   faq: {
  //     eyebrow: 'Questions',
  //     heading: 'Good to know.',
  //     items: [
  //       { q: 'How do I know which cosmetic treatment is right for me?', a: 'Dr. Verma will assess your teeth and discuss your goals at a no-obligation consultation, then recommend the most conservative option that achieves the result you want.' },
  //       { q: 'Are cosmetic procedures covered by insurance?', a: 'Most cosmetic treatments are elective and not covered by insurance. Dr. Verma\'s team will walk you through costs transparently before any treatment begins.' },
  //       { q: 'How long do veneers or crowns last?', a: 'With proper care, porcelain veneers typically last 10–15 years and crowns 15+ years. Dr. Verma uses high-quality materials and matches every restoration to your bite for longevity.' },
  //       { q: 'Will my results look natural?', a: 'Yes — Dr. Verma takes great care to shade-match and contour every restoration so it blends naturally. "Done" should never look "dental."' },
  //     ],
  //   },
  //   stats: {
  //     eyebrow: 'By The Numbers',
  //     heading: 'Smiles transformed in Chandler.',
  //     items: [
  //       { value: 12, suffix: '+', label: 'Years of cosmetic experience' },
  //       { value: 500, suffix: '+', label: 'Smile makeovers completed' },
  //       { value: 98, suffix: '%', label: 'Patient satisfaction rate' },
  //       { value: 1, suffix: ' visit', label: 'ZOOM! whitening turnaround' },
  //     ],
  //   },
  //   testimonials: {
  //     eyebrow: 'Patient Stories',
  //     heading: 'Smiles that speak for themselves.',
  //     items: [
  //       { quote: 'I\'ve wanted veneers for years but was nervous. Dr. Verma walked me through every step and the result is beyond what I imagined — completely natural looking.', name: 'Jennifer L.', context: 'Veneer patient' },
  //       { quote: 'The ZOOM! whitening was quick, comfortable, and the difference was dramatic. I was amazed by how much brighter my smile was in just one visit.', name: 'Marcus T.', context: 'Whitening patient' },
  //       { quote: 'Dr. Verma is both a dentist and an artist. She redesigned my whole smile and I finally feel confident enough to smile in photos.', name: 'Alanna B.', context: 'Smile makeover patient' },
  //     ],
  //   },
  //   comparison: {
  //     eyebrow: 'The Difference',
  //     heading: 'Cosmetic dentistry, done with care.',
  //     subtitle: 'Not all cosmetic dentistry is created equal.',
  //     without: {
  //       title: 'Typical Cosmetic Practice',
  //       points: ['Cookie-cutter results that look overdone', 'Aggressive prep that removes healthy tooth', 'Upfront pressure to commit to treatment', 'One-size pricing with no transparency'],
  //     },
  //     withUs: {
  //       title: 'Cosmetic Care With Dr. Verma',
  //       points: ['Natural-looking results tailored to your face', 'Conservative prep — healthy structure preserved', 'No-pressure consultation before any commitment', 'Clear, itemized costs explained in advance'],
  //     },
  //   },
  //   cta: {
  //     title: 'Ready to love',
  //     highlight: 'your smile?',
  //     subtitle: 'Book a cosmetic consultation with Dr. Verma — same-week appointments are usually available.',
  //     buttonText: 'Book a Consultation',
  //     buttonHref: '/contact',
  //   },
  // },

  // // ─────────────────────────────────────────────────────────────────────────
  // // 3. DENTAL IMPLANTS
  // // ─────────────────────────────────────────────────────────────────────────
  // {
  //   slug: 'dental-implants',
  //   name: 'Dental Implants',
  //   hero: {
  //     eyebrow: 'Dental Implants',
  //     title: 'A permanent tooth that',
  //     highlight: 'feels like your own.',
  //     description:
  //       'Dental implants are the gold standard for replacing a missing tooth — a titanium root and a custom crown that look, feel, and function just like natural teeth for decades to come.',
  //   },
  //   overview: {
  //     eyebrow: 'Overview',
  //     heading: 'The closest thing to a natural tooth.',
  //     body:
  //       'Unlike bridges or dentures, a dental implant replaces the entire tooth — root and all. The titanium post bonds with your jaw over time, preventing bone loss and keeping surrounding teeth stable. Dr. Verma places and restores implants in-house, giving you continuity of care from placement through the final crown.',
  //     features: [
  //       'Single-tooth & multiple-tooth implants',
  //       'Implant-supported crowns & bridges',
  //       'Implant-supported dentures',
  //       'Bone preservation after tooth loss',
  //     ],
  //     image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1200&q=80',
  //   },
  //   process: {
  //     eyebrow: 'What To Expect',
  //     heading: 'A clear, step-by-step process.',
  //     subtitle: 'Implant treatment is a journey — Dr. Verma will guide you through every stage.',
  //     steps: [
  //       { title: 'Consultation & Imaging', body: 'A full assessment including X-rays to evaluate bone density and determine whether you\'re a good candidate for implants.' },
  //       { title: 'Implant Placement', body: 'The titanium post is carefully placed into the jawbone under local anesthesia. Most patients are surprised by how comfortable the procedure is.' },
  //       { title: 'Healing Period', body: 'Over 3–6 months, the implant fuses with your bone (osseointegration). A temporary restoration keeps your smile intact during this time.' },
  //       { title: 'Crown Placement', body: 'Once healed, a custom-made porcelain crown is attached — matched to your natural teeth and built to last for decades.' },
  //     ],
  //   },
  //   benefits: {
  //     eyebrow: 'Why Choose Implants',
  //     heading: 'Built to last a lifetime.',
  //     items: [
  //       {
  //         title: 'Looks & Feels Natural',
  //         body: 'Implant-supported crowns are indistinguishable from natural teeth — in feel, function, and appearance.',
  //         paths: ['M6 38 A18 18 0 0 1 42 38', 'M18 20 l4 4 l8 -8'],
  //       },
  //       {
  //         title: 'Prevents Bone Loss',
  //         body: 'The implant root stimulates your jawbone just like a natural tooth, preventing the bone resorption that follows tooth loss.',
  //         paths: ['M6 38 A18 18 0 0 1 42 38', 'M24 12 v20 M14 24 h20'],
  //       },
  //       {
  //         title: 'No Impact on Adjacent Teeth',
  //         body: 'Unlike a traditional bridge, an implant doesn\'t require grinding down the healthy teeth on either side.',
  //         paths: ['M6 38 A18 18 0 0 1 42 38', 'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6'],
  //       },
  //     ],
  //   },
  //   gallery: {
  //     eyebrow: 'Inside Our Office',
  //     heading: 'A calm space, built for ease.',
  //     images: [
  //       'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=80',
  //       'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=900&q=80',
  //       'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=900&q=80',
  //       'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=900&q=80',
  //     ],
  //   },
  //   faq: {
  //     eyebrow: 'Questions',
  //     heading: 'Good to know.',
  //     items: [
  //       { q: 'Am I a good candidate for implants?', a: 'Most adults with good general health and adequate bone density are candidates. Dr. Verma will evaluate your bone structure and overall oral health at your consultation.' },
  //       { q: 'Is the implant procedure painful?', a: 'Most patients report the procedure is more comfortable than expected. Local anesthesia is used throughout, and any post-procedure soreness is typically managed with over-the-counter pain relief.' },
  //       { q: 'How long do implants last?', a: 'With proper care, implants can last 20–30 years or a lifetime. The crown itself may need replacement after 15+ years due to normal wear.' },
  //       { q: 'Does insurance cover implants?', a: 'Coverage varies by plan. Some PPO plans cover a portion of the implant or crown. Dr. Verma\'s team will review your specific benefits before treatment.' },
  //     ],
  //   },
  //   stats: {
  //     eyebrow: 'By The Numbers',
  //     heading: 'Implants that stand the test of time.',
  //     items: [
  //       { value: 95, suffix: '%+', label: '10-year implant success rate' },
  //       { value: 20, suffix: '+', label: 'Years implants can last with care' },
  //       { value: 3, suffix: 'M+', label: 'Implants placed in the US each year' },
  //       { value: 1, suffix: ' office', label: 'Placement & restoration under one roof' },
  //     ],
  //   },
  //   testimonials: {
  //     eyebrow: 'Patient Stories',
  //     heading: 'What patients are saying.',
  //     items: [
  //       { quote: 'I lost a front tooth and was devastated. Dr. Verma\'s implant looks and feels so natural — I genuinely forget it\'s not my real tooth.', name: 'Robert H.', context: 'Single implant patient' },
  //       { quote: 'The process took a few months but Dr. Verma explained every step. Worth every bit of the wait — I can eat and smile normally again.', name: 'Carol F.', context: 'Implant patient' },
  //       { quote: 'Dr. Verma does excellent work at reasonable prices. The implant crown she made is perfect — completely indistinguishable from my other teeth.', name: 'Deborah S.', context: 'Long-term patient' },
  //     ],
  //   },
  //   cta: {
  //     title: 'Missing a tooth?',
  //     highlight: 'Let\'s fix that.',
  //     subtitle: 'Book an implant consultation with Dr. Verma — she\'ll assess your options and walk you through the full process at no pressure.',
  //     buttonText: 'Book a Consultation',
  //     buttonHref: '/contact',
  //   },
  // },

  // // ─────────────────────────────────────────────────────────────────────────
  // // 4. CROWNS & BRIDGES
  // // ─────────────────────────────────────────────────────────────────────────
  // {
  //   slug: 'crowns-bridges',
  //   name: 'Crowns & Bridges',
  //   hero: {
  //     eyebrow: 'Crowns & Bridges',
  //     title: 'Restore strength.',
  //     highlight: 'Reclaim your smile.',
  //     description:
  //       'Custom-crafted crowns and bridges that repair damaged teeth and fill gaps — matched precisely to your bite and natural tooth shade so the result is both functional and seamless.',
  //   },
  //   overview: {
  //     eyebrow: 'Overview',
  //     heading: 'Strong, beautiful, long-lasting restorations.',
  //     body:
  //       'A crown completely caps a damaged or weakened tooth, restoring its shape, strength, and appearance. A bridge uses crowns on either side of a gap to anchor a prosthetic tooth in between. Dr. Verma customizes every restoration for fit, function, and aesthetics — so it blends naturally with your smile.',
  //     features: [
  //       'Porcelain & ceramic crowns',
  //       'Implant-supported crowns',
  //       'Three-unit & multi-unit bridges',
  //       'Same-day temporaries while your crown is fabricated',
  //     ],
  //     image: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=1200&q=80',
  //   },
  //   process: {
  //     eyebrow: 'What To Expect',
  //     heading: 'Two visits. A lasting result.',
  //     subtitle: 'Crown and bridge treatment is straightforward — typically completed in two comfortable appointments.',
  //     steps: [
  //       { title: 'Exam & Preparation', body: 'Dr. Verma assesses the tooth, removes any decay, and shapes it to receive the crown. Digital impressions are taken — no messy putty.' },
  //       { title: 'Temporary Crown', body: 'A well-fitting temporary is placed the same day so your tooth is protected and looks normal while your permanent crown is being made.' },
  //       { title: 'Custom Fabrication', body: 'Your crown or bridge is crafted at a dental lab from high-quality porcelain, matched precisely to your surrounding teeth.' },
  //       { title: 'Permanent Placement', body: 'At your second visit, Dr. Verma checks the fit and shade before cementing the final restoration into place.' },
  //     ],
  //   },
  //   benefits: {
  //     eyebrow: 'Why Choose Us',
  //     heading: 'Restorations that last.',
  //     items: [
  //       {
  //         title: 'Precision Shade Matching',
  //         body: 'Every crown and bridge is color-matched to blend with your natural teeth — no grey margins, no "fake tooth" look.',
  //         paths: ['M6 38 A18 18 0 0 1 42 38', 'M14 24 Q24 14 34 24 Q24 34 14 24'],
  //       },
  //       {
  //         title: 'Durable Materials',
  //         body: 'We use high-strength porcelain and ceramic that resist chipping and staining, giving you a restoration built to handle everyday use.',
  //         paths: ['M6 38 A18 18 0 0 1 42 38', 'M24 12 v20 M14 24 h20'],
  //       },
  //       {
  //         title: 'Comfortable Two-Visit Process',
  //         body: 'Most crown and bridge cases wrap up in two appointments, with a same-day temporary so you\'re never without a tooth in between.',
  //         paths: ['M6 38 A18 18 0 0 1 42 38', 'M18 20 l4 4 l8 -8'],
  //       },
  //     ],
  //   },
  //   gallery: {
  //     eyebrow: 'Inside Our Office',
  //     heading: 'A calm space, built for ease.',
  //     images: [
  //       'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=80',
  //       'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=900&q=80',
  //       'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=900&q=80',
  //       'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=900&q=80',
  //     ],
  //   },
  //   faq: {
  //     eyebrow: 'Questions',
  //     heading: 'Good to know.',
  //     items: [
  //       { q: 'How long does a crown last?', a: 'With proper care, a well-made porcelain crown typically lasts 15 years or more. Avoiding grinding and keeping up with regular cleanings maximizes longevity.' },
  //       { q: 'Does getting a crown hurt?', a: 'The preparation is done under local anesthesia, so the procedure itself is comfortable. Some sensitivity around the gum line is normal in the days after, but it settles quickly.' },
  //       { q: 'Can a bridge replace an implant?', a: 'A bridge is a faster, non-surgical option but requires reshaping the teeth on either side of the gap. Dr. Verma will help you weigh the pros and cons of both at your consultation.' },
  //       { q: 'Will my crown look natural?', a: 'Yes — Dr. Verma takes detailed shade measurements to ensure your crown blends with your surrounding teeth. Most patients tell us no one notices the difference.' },
  //     ],
  //   },
  //   stats: {
  //     eyebrow: 'By The Numbers',
  //     heading: 'Restorations Chandler trusts.',
  //     items: [
  //       { value: 1000, suffix: '+', label: 'Crowns & bridges placed' },
  //       { value: 15, suffix: '+', label: 'Years a quality crown can last' },
  //       { value: 2, suffix: ' visits', label: 'Typical crown completion time' },
  //       { value: 12, suffix: '+', label: 'Years of restorative experience' },
  //     ],
  //   },
  //   testimonials: {
  //     eyebrow: 'Patient Stories',
  //     heading: 'What patients are saying.',
  //     items: [
  //       { quote: 'Dr. Verma does excellent work. The crown she made matches my teeth so perfectly — I\'ve had compliments on my smile and no one knows it\'s a crown.', name: 'Joyce F.', context: 'Crown patient' },
  //       { quote: 'I was nervous about getting a bridge but Dr. Verma walked me through it all. Two appointments, minimal discomfort, and the result is fantastic.', name: 'Roy R.', context: 'Bridge patient' },
  //       { quote: 'Very gentle and thorough. The crown fit perfectly the first time and I didn\'t need any adjustments. I\'m impressed.', name: 'Sue Z.', context: 'Patient since 2018' },
  //     ],
  //   },
  //   cta: {
  //     title: 'Damaged tooth?',
  //     highlight: 'We can fix that.',
  //     subtitle: 'Book an exam with Dr. Verma — same-week appointments are usually available in Chandler.',
  //     buttonText: 'Book an Appointment',
  //     buttonHref: '/contact',
  //   },
  // },

  // // ─────────────────────────────────────────────────────────────────────────
  // // 5. ZOOM! TEETH WHITENING
  // // ─────────────────────────────────────────────────────────────────────────
  // {
  //   slug: 'teeth-whitening',
  //   name: 'ZOOM! Teeth Whitening',
  //   hero: {
  //     eyebrow: 'ZOOM! Teeth Whitening',
  //     title: 'Dramatically whiter teeth.',
  //     highlight: 'One visit.',
  //     description:
  //       'Philips ZOOM! is the gold-standard in-office whitening system — up to 8 shades brighter in a single 90-minute appointment, with results that last.',
  //   },
  //   overview: {
  //     eyebrow: 'Overview',
  //     heading: 'Professional whitening that actually works.',
  //     body:
  //       'Store-bought strips can only do so much. ZOOM! uses a proprietary hydrogen peroxide gel activated by a specially designed LED light to break down deep stains caused by coffee, wine, age, and lifestyle — safely, quickly, and under Dr. Verma\'s supervision for a comfortable experience.',
  //     features: [
  //       'Up to 8 shades whiter in one visit',
  //       'Philips ZOOM! WhiteSpeed LED system',
  //       'Custom take-home trays included for touch-ups',
  //       'Safe for enamel when professionally administered',
  //     ],
  //     image: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=1200&q=80',
  //   },
  //   process: {
  //     eyebrow: 'What To Expect',
  //     heading: 'Bright results in 90 minutes.',
  //     subtitle: 'In-office ZOOM! is one of the most straightforward treatments in dentistry.',
  //     steps: [
  //       { title: 'Pre-Treatment Check', body: 'Dr. Verma checks your teeth and gums to ensure you\'re a good candidate and your enamel is healthy enough for whitening.' },
  //       { title: 'Prep & Protection', body: 'Your gums and lips are carefully covered, leaving only the teeth exposed. Takes just a few minutes.' },
  //       { title: 'ZOOM! Application', body: 'The whitening gel is applied and activated by the ZOOM! LED light in three 15-minute rounds — most patients watch a show or relax.' },
  //       { title: 'Take-Home Trays', body: 'Custom-fit whitening trays are provided so you can maintain and boost your results from home on your schedule.' },
  //     ],
  //   },
  //   benefits: {
  //     eyebrow: 'Why ZOOM!',
  //     heading: 'The fastest way to a whiter smile.',
  //     items: [
  //       {
  //         title: 'Up to 8 Shades Whiter',
  //         body: 'ZOOM! consistently outperforms at-home strips and trays, delivering dramatic, even whitening across all visible teeth.',
  //         paths: ['M6 38 A18 18 0 0 1 42 38', 'M18 20 l4 4 l8 -8'],
  //       },
  //       {
  //         title: 'Done in One Visit',
  //         body: 'Walk in with stained teeth and leave with a noticeably brighter smile — no waiting weeks for gradual results.',
  //         paths: ['M6 38 A18 18 0 0 1 42 38', 'M24 12 L24 30 M14 22 L34 22'],
  //       },
  //       {
  //         title: 'Supervised & Safe',
  //         body: 'Professional-grade whitening under Dr. Verma\'s care means optimal results with protection for your gums and enamel throughout.',
  //         paths: ['M6 38 A18 18 0 0 1 42 38', 'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6'],
  //       },
  //     ],
  //   },
  //   gallery: {
  //     eyebrow: 'Inside Our Office',
  //     heading: 'A calm space, built for ease.',
  //     images: [
  //       'https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=900&q=80',
  //       'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=900&q=80',
  //       'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=80',
  //       'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=900&q=80',
  //     ],
  //   },
  //   faq: {
  //     eyebrow: 'Questions',
  //     heading: 'Good to know.',
  //     items: [
  //       { q: 'Is ZOOM! whitening safe?', a: 'Yes — when performed under professional supervision. Dr. Verma assesses your enamel and gum health before treatment to ensure you\'re a suitable candidate and that the process is comfortable.' },
  //       { q: 'How long do the results last?', a: 'Results typically last 12–24 months depending on diet and lifestyle. The custom take-home trays provided make periodic touch-ups easy and affordable.' },
  //       { q: 'Will it make my teeth sensitive?', a: 'Some patients experience mild, temporary sensitivity during or after treatment. Dr. Verma uses desensitizing gel and the ZOOM! system includes a post-treatment relief formula to minimize this.' },
  //       { q: 'Does whitening work on crowns or veneers?', a: 'Whitening gel only affects natural tooth enamel, not existing restorations. Dr. Verma will advise if any crowns or veneers need to be updated after whitening to match your new shade.' },
  //     ],
  //   },
  //   stats: {
  //     eyebrow: 'By The Numbers',
  //     heading: 'The results speak for themselves.',
  //     items: [
  //       { value: 8, suffix: ' shades', label: 'Whiter in a single appointment' },
  //       { value: 90, suffix: ' min', label: 'Typical treatment time' },
  //       { value: 24, suffix: ' mo', label: 'How long results can last' },
  //       { value: 1, suffix: ' visit', label: 'All it takes to transform your smile' },
  //     ],
  //   },
  //   testimonials: {
  //     eyebrow: 'Patient Stories',
  //     heading: 'What patients are saying.',
  //     items: [
  //       { quote: 'The ZOOM! whitening was so easy and the results were incredible. My teeth are noticeably brighter and I\'ve had multiple people comment on my smile.', name: 'Marcus T.', context: 'Whitening patient' },
  //       { quote: 'I was skeptical it would work as well as advertised but I\'m converted. Dr. Verma made the process comfortable and the before/after difference is dramatic.', name: 'Lindsey P.', context: 'New patient' },
  //       { quote: 'Done in one lunch break and my teeth are several shades lighter. Worth every penny — I should have done this years ago.', name: 'Peter L.', context: 'Patient since 2020' },
  //     ],
  //   },
  //   cta: {
  //     title: 'Ready for a',
  //     highlight: 'noticeably brighter smile?',
  //     subtitle: 'ZOOM! appointments are quick to schedule — ask about our current whitening specials when you book.',
  //     buttonText: 'Book Whitening',
  //     buttonHref: '/contact',
  //   },
  // },

  // // ─────────────────────────────────────────────────────────────────────────
  // // 6. ROOT CANALS
  // // ─────────────────────────────────────────────────────────────────────────
  // {
  //   slug: 'root-canals',
  //   name: 'Root Canals',
  //   hero: {
  //     eyebrow: 'Root Canal Treatment',
  //     title: 'Save the tooth.',
  //     highlight: 'End the pain.',
  //     description:
  //       'Modern root canal treatment is nothing like its reputation — Dr. Verma performs virtually pain-free procedures that eliminate infection, preserve your natural tooth, and have you feeling better fast.',
  //   },
  //   overview: {
  //     eyebrow: 'Overview',
  //     heading: 'The procedure that saves teeth.',
  //     body:
  //       'When a tooth\'s nerve or pulp becomes infected — from deep decay, a crack, or trauma — a root canal removes the infection at its source. Without treatment, the infection can spread and the tooth may need extraction. Dr. Verma\'s gentle technique and modern anesthesia make the procedure comfortable, and most patients are relieved by how straightforward it is.',
  //     features: [
  //       'Removal of infected nerve & pulp',
  //       'Thorough canal cleaning & shaping',
  //       'Biocompatible root sealing',
  //       'Crown placement to protect the restored tooth',
  //     ],
  //     image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1200&q=80',
  //   },
  //   process: {
  //     eyebrow: 'What To Expect',
  //     heading: 'Comfortable, step by step.',
  //     subtitle: 'Most root canals are completed in one or two visits and are far more comfortable than patients expect.',
  //     steps: [
  //       { title: 'Diagnosis & Anesthesia', body: 'X-rays confirm the diagnosis and deep local anesthesia ensures you feel nothing during the procedure. Dr. Verma takes time to make sure you\'re fully numb before starting.' },
  //       { title: 'Pulp Removal', body: 'The infected pulp and nerve tissue are carefully removed through a small opening in the top of the tooth.' },
  //       { title: 'Cleaning & Shaping', body: 'The canals are thoroughly cleaned, shaped, and disinfected to eliminate all traces of infection.' },
  //       { title: 'Sealing & Crown', body: 'The canals are filled and sealed. A crown is typically placed at a follow-up visit to protect and restore the tooth\'s full function.' },
  //     ],
  //   },
  //   benefits: {
  //     eyebrow: 'Why Treat It',
  //     heading: 'Save the tooth you have.',
  //     items: [
  //       {
  //         title: 'Eliminates Pain & Infection',
  //         body: 'A root canal removes the infected tissue causing your pain — most patients feel significant relief within a day or two of treatment.',
  //         paths: ['M6 38 A18 18 0 0 1 42 38', 'M18 20 l4 4 l8 -8'],
  //       },
  //       {
  //         title: 'Preserves Your Natural Tooth',
  //         body: 'Keeping your natural tooth prevents bone loss, avoids the cost and complexity of implants, and maintains your bite.',
  //         paths: ['M6 38 A18 18 0 0 1 42 38', 'M24 12 v20 M14 24 h20'],
  //       },
  //       {
  //         title: 'Stops Infection from Spreading',
  //         body: 'Left untreated, a dental abscess can spread to the jaw, neck, and beyond. A root canal stops the infection at its source.',
  //         paths: ['M6 38 A18 18 0 0 1 42 38', 'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6'],
  //       },
  //     ],
  //   },
  //   gallery: {
  //     eyebrow: 'Inside Our Office',
  //     heading: 'A calm space, built for ease.',
  //     images: [
  //       'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=80',
  //       'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=900&q=80',
  //       'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=900&q=80',
  //       'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=900&q=80',
  //     ],
  //   },
  //   faq: {
  //     eyebrow: 'Questions',
  //     heading: 'Good to know.',
  //     items: [
  //       { q: 'Are root canals painful?', a: 'Modern root canals are typically no more uncomfortable than getting a filling. Deep local anesthesia is used throughout, and Dr. Verma won\'t proceed until you\'re fully numb.' },
  //       { q: 'How long does recovery take?', a: 'Most patients return to normal activities the day after. Mild tenderness around the area can last a few days and is managed with over-the-counter pain relief.' },
  //       { q: 'Do I need a crown after a root canal?', a: 'Usually yes — the tooth becomes more brittle after the pulp is removed, and a crown protects it from cracking under bite pressure. Dr. Verma will advise based on your specific tooth.' },
  //       { q: 'What happens if I don\'t get treatment?', a: 'The infection will continue to spread, causing increasing pain and potentially an abscess. Eventually the tooth may need to be extracted, which is more costly and complex to restore.' },
  //     ],
  //   },
  //   stats: {
  //     eyebrow: 'By The Numbers',
  //     heading: 'Root canals, done right.',
  //     items: [
  //       { value: 15, suffix: 'M+', label: 'Root canals performed in the US each year' },
  //       { value: 95, suffix: '%', label: 'Success rate with proper restoration' },
  //       { value: 1, suffix: '–2', label: 'Visits to complete most root canals' },
  //       { value: 24, suffix: 'hr', label: 'Average time to feel relief after treatment' },
  //     ],
  //   },
  //   testimonials: {
  //     eyebrow: 'Patient Stories',
  //     heading: 'What patients are saying.',
  //     items: [
  //       { quote: 'I was terrified going in but Dr. Verma and her staff took the time to help me feel comfortable. I barely felt anything and the relief afterward was immediate.', name: 'Peter L.', context: 'Root canal patient' },
  //       { quote: 'I\'d put off the root canal for months because I was scared. I wish I hadn\'t waited — Dr. Verma was so gentle and it was over before I knew it.', name: 'Carol F.', context: 'Patient since 2020' },
  //       { quote: 'I drove from out of town because I couldn\'t find anyone I trusted as much. Dr. Verma is thorough, skillful, and genuinely caring.', name: 'Deborah S.', context: 'Long-term patient' },
  //     ],
  //   },
  //   cta: {
  //     title: 'Tooth pain',
  //     highlight: 'that won\'t quit?',
  //     subtitle: 'Don\'t wait — infections don\'t get better on their own. Call us or book online and we\'ll get you seen quickly.',
  //     buttonText: 'Book an Urgent Appointment',
  //     buttonHref: '/contact',
  //   },
  // },

  // // ─────────────────────────────────────────────────────────────────────────
  // // 7. VENEERS
  // // ─────────────────────────────────────────────────────────────────────────
  // {
  //   slug: 'veneers',
  //   name: 'Veneers',
  //   hero: {
  //     eyebrow: 'Porcelain Veneers',
  //     title: 'Transform your smile.',
  //     highlight: 'Keep it natural.',
  //     description:
  //       'Ultra-thin porcelain veneers cover the front surface of your teeth to correct chips, stains, gaps, and shape — with results so natural, only you\'ll know they\'re veneers.',
  //   },
  //   overview: {
  //     eyebrow: 'Overview',
  //     heading: 'The porcelain solution for a perfect smile.',
  //     body:
  //       'Veneers are one of the most versatile cosmetic tools in dentistry. A thin shell of porcelain — custom-designed for your face and bonded to the front of each tooth — can address discoloration, chips, minor misalignment, uneven sizing, and unwanted gaps in a single treatment plan. Dr. Verma\'s artistic eye ensures every veneer is shaped and shaded to complement your unique smile.',
  //     features: [
  //       'Porcelain & composite veneer options',
  //       'Custom shade and shape design',
  //       'Minimal prep — preserves natural tooth structure',
  //       'Stain-resistant, durable porcelain',
  //     ],
  //     image: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=1200&q=80',
  //   },
  //   process: {
  //     eyebrow: 'What To Expect',
  //     heading: 'Your new smile in a few visits.',
  //     subtitle: 'Veneer treatment is carefully planned — the design stage is just as important as the placement.',
  //     steps: [
  //       { title: 'Smile Design Consultation', body: 'Dr. Verma reviews your goals and assesses your teeth. Photos, shade guides, and mockups help you visualize the result before any prep begins.' },
  //       { title: 'Minimal Tooth Prep', body: 'A very small amount of enamel is removed from the front surface — typically less than 0.5mm — to ensure the veneers sit flush and look natural.' },
  //       { title: 'Temporaries Placed', body: 'Temporary veneers are placed while your custom porcelain veneers are crafted at the lab, giving you a preview of your new smile.' },
  //       { title: 'Final Bonding', body: 'Dr. Verma checks the fit, shade, and bite before permanently bonding your porcelain veneers into place.' },
  //     ],
  //   },
  //   benefits: {
  //     eyebrow: 'Why Veneers',
  //     heading: 'One treatment, multiple solutions.',
  //     items: [
  //       {
  //         title: 'Fixes Multiple Issues at Once',
  //         body: 'Veneers address discoloration, chips, gaps, and minor misalignment simultaneously — without needing separate treatments for each.',
  //         paths: ['M6 38 A18 18 0 0 1 42 38', 'M18 20 l4 4 l8 -8'],
  //       },
  //       {
  //         title: 'Natural Translucency',
  //         body: 'Porcelain mimics the light-reflecting properties of natural enamel, so veneers have the same depth and luminosity as real teeth.',
  //         paths: ['M6 38 A18 18 0 0 1 42 38', 'M14 24 Q24 14 34 24 Q24 34 14 24'],
  //       },
  //       {
  //         title: 'Stain-Resistant Surface',
  //         body: 'Unlike natural enamel, glazed porcelain resists coffee, wine, and tea staining — keeping your smile bright longer.',
  //         paths: ['M6 38 A18 18 0 0 1 42 38', 'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6'],
  //       },
  //     ],
  //   },
  //   gallery: {
  //     eyebrow: 'Inside Our Office',
  //     heading: 'A calm space, built for ease.',
  //     images: [
  //       'https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=900&q=80',
  //       'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=900&q=80',
  //       'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=900&q=80',
  //       'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=80',
  //     ],
  //   },
  //   faq: {
  //     eyebrow: 'Questions',
  //     heading: 'Good to know.',
  //     items: [
  //       { q: 'Are veneers permanent?', a: 'Veneers require a small amount of enamel removal, which means the process is irreversible. They\'re not "permanent" in that they\'ll need replacing after 10–15 years, but your teeth will always need veneers from that point on.' },
  //       { q: 'Do veneers look fake?', a: 'Not when done well. Dr. Verma designs every veneer case individually, paying close attention to shade gradients, translucency, and tooth shape so results look like a better version of your natural smile.' },
  //       { q: 'Can I whiten my teeth after getting veneers?', a: 'Whitening gel doesn\'t affect porcelain. If you\'re considering veneers, it\'s best to whiten first so Dr. Verma can match your veneer shade to your naturally whitened teeth.' },
  //       { q: 'How do I care for veneers?', a: 'Exactly like natural teeth — brush, floss, and attend regular checkups. Avoid using your teeth as tools and wear a night guard if you grind your teeth.' },
  //     ],
  //   },
  //   stats: {
  //     eyebrow: 'By The Numbers',
  //     heading: 'Beautiful results that last.',
  //     items: [
  //       { value: 10, suffix: '–15', label: 'Years a quality veneer lasts' },
  //       { value: 0.5, suffix: 'mm', label: 'Typical enamel prep thickness' },
  //       { value: 2, suffix: '–3', label: 'Visits from consult to final placement' },
  //       { value: 500, suffix: '+', label: 'Cosmetic cases completed by Dr. Verma' },
  //     ],
  //   },
  //   testimonials: {
  //     eyebrow: 'Patient Stories',
  //     heading: 'What patients are saying.',
  //     items: [
  //       { quote: 'I\'ve wanted veneers for years but was nervous about looking fake. Dr. Verma\'s result is so natural — everyone just thinks I finally have a great smile.', name: 'Jennifer L.', context: 'Veneer patient' },
  //       { quote: 'Dr. Verma took her time on the design phase and it made all the difference. The shape, the shade — everything is exactly what I had in mind.', name: 'Alanna B.', context: 'Smile makeover patient' },
  //       { quote: 'Professional, attentive, and genuinely caring. My veneers are beautiful and my confidence has gone through the roof.', name: 'Priya K.', context: 'Patient since 2019' },
  //     ],
  //   },
  //   cta: {
  //     title: 'Ready to transform',
  //     highlight: 'your smile?',
  //     subtitle: 'Book a veneer consultation with Dr. Verma — she\'ll walk you through exactly what\'s possible for your specific teeth.',
  //     buttonText: 'Book a Consultation',
  //     buttonHref: '/contact',
  //   },
  // },

  // // ─────────────────────────────────────────────────────────────────────────
  // // 8. NIGHT GUARDS
  // // ─────────────────────────────────────────────────────────────────────────
  // {
  //   slug: 'night-guards',
  //   name: 'Night Guards',
  //   hero: {
  //     eyebrow: 'Night Guards & Bruxism',
  //     title: 'Protect your teeth',
  //     highlight: 'while you sleep.',
  //     description:
  //       'Custom night guards from Dr. Verma shield your teeth from the damage caused by grinding and clenching — relieving jaw pain, headaches, and protecting enamel you can\'t get back.',
  //   },
  //   overview: {
  //     eyebrow: 'Overview',
  //     heading: 'Stop grinding before it causes lasting damage.',
  //     body:
  //       'Bruxism — grinding and clenching your teeth — often happens unconsciously during sleep. Over time it wears down enamel, cracks teeth, strains jaw muscles, and can lead to TMJ disorder and chronic headaches. A custom-fitted night guard from Promenade Dental acts as a cushioned barrier between your upper and lower teeth, absorbing the force before it reaches your enamel.',
  //     features: [
  //       'Custom-fitted from dental impressions',
  //       'Hard, soft, or dual-laminate materials',
  //       'Relieves jaw pain & morning headaches',
  //       'Protects existing restorations (crowns, veneers)',
  //     ],
  //     image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80',
  //   },
  //   process: {
  //     eyebrow: 'What To Expect',
  //     heading: 'A perfect fit in two visits.',
  //     subtitle: 'Custom night guards are far more effective than over-the-counter options — and more comfortable to wear.',
  //     steps: [
  //       { title: 'Exam & Assessment', body: 'Dr. Verma checks your teeth for signs of grinding — wear patterns, cracks, or enamel thinning — and discusses your symptoms.' },
  //       { title: 'Impressions', body: 'Precise impressions of your upper and lower teeth are taken so your guard fits your bite exactly. Digital impressions mean no messy putty.' },
  //       { title: 'Lab Fabrication', body: 'Your custom night guard is crafted at a dental lab from the material best suited to your grinding severity — soft, hard, or dual-laminate.' },
  //       { title: 'Fitting & Adjustments', body: 'At your second visit, Dr. Verma ensures the guard fits comfortably and makes any fine adjustments needed for your bite.' },
  //     ],
  //   },
  //   benefits: {
  //     eyebrow: 'Why Custom Matters',
  //     heading: 'Better fit. Better protection.',
  //     items: [
  //       {
  //         title: 'Perfectly Matched to Your Bite',
  //         body: 'A custom guard is fabricated from your exact impressions, distributing force evenly and staying in place throughout the night.',
  //         paths: ['M6 38 A18 18 0 0 1 42 38', 'M18 20 l4 4 l8 -8'],
  //       },
  //       {
  //         title: 'Relieves Pain at the Source',
  //         body: 'By cushioning your teeth from grinding forces, a night guard reduces the jaw muscle tension that causes morning headaches and TMJ soreness.',
  //         paths: ['M6 38 A18 18 0 0 1 42 38', 'M14 24 Q24 14 34 24 Q24 34 14 24'],
  //       },
  //       {
  //         title: 'Protects Enamel & Restorations',
  //         body: 'Enamel doesn\'t grow back and restorations are expensive. A night guard is one of the most cost-effective preventive investments you can make.',
  //         paths: ['M6 38 A18 18 0 0 1 42 38', 'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6'],
  //       },
  //     ],
  //   },
  //   gallery: {
  //     eyebrow: 'Inside Our Office',
  //     heading: 'A calm space, built for ease.',
  //     images: [
  //       'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=80',
  //       'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80',
  //       'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=900&q=80',
  //       'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=900&q=80',
  //     ],
  //   },
  //   faq: {
  //     eyebrow: 'Questions',
  //     heading: 'Good to know.',
  //     items: [
  //       { q: 'How do I know if I grind my teeth?', a: 'Common signs include worn or chipped enamel, morning jaw soreness or headaches, tooth sensitivity, and a partner mentioning grinding sounds at night. Dr. Verma can identify grinding wear during a routine exam.' },
  //       { q: 'Can\'t I just buy a guard at the pharmacy?', a: 'Over-the-counter guards are one-size-fits-most and often bulky, making them uncomfortable and ineffective. A custom guard sits flush with your bite and is far more likely to stay in place and actually protect your teeth.' },
  //       { q: 'How long does a night guard last?', a: 'Most custom night guards last 3–5 years with proper care. Severe grinders may go through them more quickly. Dr. Verma can monitor wear at your regular checkups.' },
  //       { q: 'Will a night guard cure my jaw pain?', a: 'A night guard addresses the symptoms and prevents further damage, but it doesn\'t treat the underlying cause of bruxism. Dr. Verma can discuss additional options such as stress management or orthodontic evaluation if appropriate.' },
  //     ],
  //   },
  //   stats: {
  //     eyebrow: 'By The Numbers',
  //     heading: 'Protection worth investing in.',
  //     items: [
  //       { value: 10, suffix: '%', label: 'Of adults grind their teeth regularly' },
  //       { value: 2, suffix: ' visits', label: 'Typical turnaround for a custom guard' },
  //       { value: 3, suffix: '–5', label: 'Years a custom guard typically lasts' },
  //       { value: 1, suffix: ' guard', label: 'Prevents years of expensive enamel damage' },
  //     ],
  //   },
  //   testimonials: {
  //     eyebrow: 'Patient Stories',
  //     heading: 'What patients are saying.',
  //     items: [
  //       { quote: 'I\'d been waking up with jaw pain every day for years. Dr. Verma\'s night guard changed everything — I can\'t believe I waited so long.', name: 'Marcus T.', context: 'Night guard patient' },
  //       { quote: 'The custom fit is a total game-changer compared to the pharmacy guard I\'d been using. It actually stays in and I barely notice it.', name: 'Sarah M.', context: 'Patient since 2021' },
  //       { quote: 'Dr. Verma noticed my grinding wear at a routine cleaning and recommended a guard. Headaches are gone and she potentially saved my teeth from real damage.', name: 'Roy R.', context: 'Patient since 2018' },
  //     ],
  //   },
  //   cta: {
  //     title: 'Waking up with',
  //     highlight: 'jaw pain or headaches?',
  //     subtitle: 'Book an exam with Dr. Verma — she can spot grinding wear and get you fitted for a custom guard quickly.',
  //     buttonText: 'Book an Appointment',
  //     buttonHref: '/contact',
  //   },
  // },

];


export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}