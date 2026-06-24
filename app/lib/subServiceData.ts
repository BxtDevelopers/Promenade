
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
    hero?: {
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
    overview?: {
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
  servicesGrid? :{
  eyebrow: string;
  heading: string;
  intro: string;
  services: ServiceGridCard[];
}
features?:{
    eyebrow: string;
      heading: string;
      body: string;
      features: {
        title:string;
        body:string
      }[];
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
    process?: {
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
    benefits?: {
      eyebrow: string;
      heading: string;
      description:string;
      items: { title: string; body: string; paths: string[] }[];
    };
    whyItMatters?: {
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
    faq?: {
      eyebrow: string;
      heading: string;
      items: { q: string; a: string }[];
    };
    cta?: {
      title: string;
      highlight: string;
      subtitle: string;
      buttonText: string;
      buttonHref: string;
      image: string;
    };
  }


export const SUB_SERVICES = [
      {
    serviceSlug: 'cosmetic-dentistry',
    slug: 'teeth-whitening',
    name: 'Teeth Whitening',

    metaTitle: 'Teeth Whitening in Chandler, AZ | Promenade Dental',

    metaDescription:
      'Professional teeth whitening in Chandler AZ for yellow, stained, or discolored teeth. ZOOM whitening available at Promenade Dental when appropriate.',
      hero: {
  eyebrow: 'Professional Teeth Whitening in Fulton Ranch',

  title: 'Professional Teeth Whitening for',
  highlight: 'Stained or Discolored Teeth in Chandler',

  description:
    'Promenade Dental helps patients brighten yellow, stained, or dull-looking teeth with professional teeth whitening and ZOOM whitening options planned around tooth shade, sensitivity, enamel health, and cosmetic goals.',

  image: '/assets/teeth-whitening.webp',

  trustPoints: [
    'Professional Whitening Options',
    'ZOOM Whitening Available When Appropriate',
    'Planned Around Sensitivity and Enamel Health',
    'Part of Cosmetic Dentistry at Promenade Dental',
    'Located in Fulton Ranch',
    'New Patients Welcome',
  ],

  primaryCTA: {
    label: 'Book a Whitening Consultation',
    href: '/contact',
  },

  secondaryCTA: {
    label: 'Call (480) 802-8188',
    href: 'tel:+14808028188',
  },
},
overview: {
  eyebrow: 'Professional Teeth Whitening',

  heading:
    'Professional Teeth Whitening for Yellow Teeth, Coffee Stains, and Tooth Discoloration',

  body:
    'Tooth discoloration can build slowly over time. Coffee, tea, wine, dark-colored foods, tobacco use, aging, and daily habits can make healthy teeth look yellow, stained, or less bright than they used to be. Professional teeth whitening at Promenade Dental is designed for patients who want to improve tooth color without changing the shape or structure of their teeth. Dr. Shriya evaluates tooth shade, enamel condition, gum health, sensitivity, and existing dental work before recommending a whitening option.',

  features: [
    'Brighten yellow or stained teeth',
    'Address discoloration from food, drinks, and tobacco',
    'Planned around enamel health and tooth sensitivity',
    'Personalized whitening recommendations',
  ],

  image: '/assets/service-teeth-whitening.jpg',

  cta: {
    label: 'Start Your Whitening Consultation',
    href: '/contact',
  },
},
whyItMatters: {
  eyebrow: 'Whitening Evaluation',

  heading:
    'Whitening Consultation for Tooth Discoloration, Sensitivity, and Existing Dental Work',

  description:
    'Not every type of tooth discoloration responds to whitening in the same way. Some stains sit on the surface of the enamel. Some discoloration is deeper inside the tooth. Some patients have crowns, veneers, fillings, or bonding that do not whiten like natural teeth. A whitening consultation helps determine whether professional whitening is the right treatment, what result may be realistic, and whether another cosmetic option may be better for your smile.',

  items: [
    {
      title: 'Surface Stains',
      body:
        'Surface stains from coffee, tea, wine, and food habits may respond well to professional whitening.',
      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M18 14 q6 -4 12 0 q4 4 0 10 q-4 6 -10 10 q-6 -4 -8 -10 q-2 -6 6 -10',
      ],
    },

    {
      title: 'Deeper Discoloration',
      body:
        'Deeper tooth discoloration may need a different cosmetic approach if whitening cannot create the desired result.',
      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M24 14 v12 M24 32 v2 M16 22 q8 -10 16 0',
      ],
    },

    {
      title: 'Existing Dental Work',
      body:
        'Crowns, veneers, fillings, and bonding should be checked before whitening because they may not change shade like natural enamel.',
      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 22 h20 M18 30 h12 M20 14 q4 6 8 0 q4 6 8 0',
      ],
    },
  ],
},
features: {
  eyebrow: 'Professional Whitening',
  heading: 'More Controlled Than Store-Bought Products',
  body: 'Over-the-counter whitening products may help some patients, but they are not planned around your full oral health. Professional whitening gives your dentist the opportunity to check your teeth first, understand your whitening goals, and guide treatment based on sensitivity, enamel health, gum condition, and visible dental work.',
  features: [
    {
      title: 'Better Shade Planning',
      body: 'Your current tooth shade and whitening goal can be discussed before treatment begins, helping set clearer expectations.',
    },
    {
      title: 'Sensitivity Awareness',
      body: 'If you already have sensitive teeth, whitening can be planned more carefully after checking enamel, gums, and exposed root surfaces.',
    },
    {
      title: 'Dentist-Led Guidance',
      body: 'Dr. Shriya can explain whether whitening is the right option or whether veneers, bonding, or restorative treatment may fit better.',
    },
  ],
},
servicesGrid: {
  eyebrow: 'Teeth Whitening Options',
heading: 'Teeth Whitening Options for Stains and Sensitivity',

  intro:
    'Promenade Dental offers professional whitening guidance based on what is causing the discoloration, how sensitive your teeth are, how quickly you want results, and how bright you want your smile to appear.',

  services: [
    {
      title: 'Professional Teeth Whitening',

      description:
        'Professional whitening is designed to brighten natural enamel affected by common stains and yellowing. It may be suitable for patients whose main concern is tooth color rather than tooth shape, chips, spacing, or old dental work.',

      bestFor: [
        'Yellow teeth',
        'Surface stains',
        'Dull-looking teeth',
        'General cosmetic whitening',
        'Brighter smile goals',
      ],

      cta: 'Ask About Professional Whitening',

      href: '/services/cosmetic-dentistry/teeth-whitening',
    },

    {
      title: 'ZOOM Whitening',

      description:
        'ZOOM whitening is a professional whitening system that may be recommended for suitable patients who want a faster, dentist-supervised whitening option. It is part of the broader teeth whitening service at Promenade Dental.',

      bestFor: [
        'Faster whitening',
        'Professional whitening',
        'Event preparation',
        'Supervised cosmetic whitening',
      ],

      cta: 'Ask About ZOOM Whitening',

      href: '/services/cosmetic-dentistry/zoom-whitening',
    },

    {
      title: 'Whitening Consultation',

      description:
        'A whitening consultation helps determine whether your teeth are suitable for whitening and whether stain type, sensitivity, enamel condition, or visible dental work may affect your result.',

      bestFor: [
        'First-time whitening',
        'Sensitive teeth',
        'Uneven tooth color',
        'Old crowns or fillings',
        'Realistic shade planning',
      ],

      cta: 'Book a Whitening Consultation',

      href: '/contact',
    },
  ],
},
educationSection: {
  eyebrow: 'ZOOM Whitening',

  heading:
    'ZOOM Whitening for Patients Who Want Faster Professional Whitening Results',

  body:
    'ZOOM whitening may be recommended for patients who want a noticeable whitening result in a shorter timeline. It can be useful before weddings, events, travel, photos, interviews, or occasions where patients want their smile to look brighter.',

  supportingText:
    'Before recommending ZOOM whitening, Dr. Shriya checks your teeth and gums to confirm whether whitening is suitable. Sensitivity, enamel condition, gum health, and existing dental work can all affect the final result.',

  image:
    '/assets/zoom.jpeg',

  imageAlt:
    'Patient receiving professional teeth whitening treatment at a dental office',

  cta: {
    label: 'Ask If ZOOM Whitening Is Right for You',
    href: '/contact',
  },
},
suitability: {
  eyebrow: 'Is Whitening Right For You?',
  heading: 'Teeth Whitening for Patients Whose Main Concern Is Tooth Color',
  body: 'Teeth whitening is most useful when your teeth are healthy but look stained, yellow, or dull. It is not designed to change tooth shape, close gaps, repair chips, straighten teeth, or replace old dental work.\n\nAt Promenade Dental, Dr. Shriya helps you understand whether whitening alone can achieve your goal or whether bonding, veneers, crowns, or another cosmetic treatment may be more appropriate.',
  goodFit: {
    title: 'Whitening May Be Right If',
    items: [
      'Your teeth are healthy but stained',
      'Your main concern is yellow or dull tooth color',
      'You want a brighter smile without changing tooth shape',
      'You do not have untreated cavities or gum inflammation',
      'You understand that natural teeth and dental work respond differently',
    ],
  },
  alternative: {
    title: 'Another Option May Be Better If',
    items: [
      'Your teeth are chipped or uneven',
      'You have visible crowns, veneers, or bonding',
      'Your discoloration is deep or internal',
      'You want to change tooth size, shape, or spacing',
      'You need restorative care before cosmetic whitening',
    ],
  },
  cta: {
    label: 'Find Out If Whitening Fits Your Smile',
    href: '/contact',
  },
},
solutionsGrid: {
  eyebrow: 'Alternative Cosmetic Treatments',

  heading:
    'Veneers or Bonding for Chipped, Uneven, or Deeply Discolored Teeth',

  body:
    'Whitening can improve tooth color, but it cannot correct every cosmetic concern. If your teeth are chipped, uneven, worn down, deeply discolored, or affected by older visible dental work, another cosmetic treatment may provide a better result.',

  cards: [
    {
      title: 'Dental Bonding',
      subtitle: 'Small Chips or Minor Gaps',

      body:
        'Bonding may help repair small chips, uneven edges, or minor spaces using tooth-colored material.',

      image: '/assets/dental-bonding.jpg',
    },

    {
      title: 'Porcelain Veneers',
      subtitle: 'More Complete Smile Changes',

      body:
        'Veneers may improve tooth color, shape, size, spacing, and symmetry when whitening alone is not enough.',

      image: '/assets/porcelain-veneers.jpg',
    },

    {
      title: 'Smile Makeover Planning',
      subtitle: 'Multiple Cosmetic Concerns',

      body:
        'A smile makeover may combine whitening, bonding, veneers, crowns, or gum care into one planned result.',

      image: '/assets/smile-makeover.jpg',
    },
  ],

  cta: {
    label: 'Explore Cosmetic Dentistry Options',
    href: '/services/cosmetic-dentistry',
  },
},
process: {
  eyebrow: 'Teeth Whitening Process',

  heading:
  'Teeth Whitening Planning for Shade, Sensitivity, and Results',

  subtitle:
    'Your whitening treatment is planned around your current tooth shade, oral health, sensitivity level, existing dental work, and cosmetic goal. This helps create a safer, clearer, and more realistic whitening experience.',

  steps: [
    {
      title: 'Tooth Shade and Smile Review',
      body:
        'Dr. Shriya reviews your current tooth shade, smile goals, and the type of discoloration you want to improve.',
    },

    {
      title: 'Teeth, Gums, and Sensitivity Check',
      body:
        'Your teeth, gums, enamel, and sensitivity level are checked before whitening is recommended.',
    },

    {
      title: 'Whitening Option Recommendation',
      body:
        'Based on your evaluation, Dr. Shriya may recommend professional teeth whitening, ZOOM whitening, or another cosmetic treatment.',
    },

    {
      title: 'Aftercare and Maintenance Guidance',
      body:
        'You receive guidance on stain prevention, oral hygiene, touch-ups, and habits that help maintain a brighter result.',
    },
  ],

  cta: {
    label: 'Book a Whitening Appointment',
    href: '/contact',
  },
},
maintenance: {
  eyebrow: 'Results & Maintenance',
  heading: 'Whitening Maintenance for Longer-Lasting Results',
  body: 'Whitening results can vary based on stain type, diet, oral hygiene, enamel condition, and lifestyle habits. Coffee, tea, red wine, tobacco, and dark-colored foods may gradually stain teeth again after whitening.\n\nPromenade Dental can guide you on practical maintenance habits, cleaning intervals, and touch-up options so your smile stays brighter for longer.',
  cards: [
    {
      title: 'Limit Heavy Stain Exposure',
      body: 'Reducing frequent exposure to coffee, tea, wine, and tobacco can help slow new staining.',
    },
    {
      title: 'Keep Up With Cleanings',
      body: 'Regular dental cleanings help remove plaque and surface buildup that can make teeth look dull.',
    },
    {
      title: 'Follow Whitening Aftercare',
      body: 'Following the aftercare instructions can help protect your results during the early post-whitening period.',
    },
    {
      title: 'Ask About Touch-Ups',
      body: 'Some patients may benefit from occasional whitening touch-ups depending on their habits and goals.',
    },
  ],
},
benefits: {
  eyebrow: 'Why Choose Promenade Dental',

heading:
  'Dentist-Led Teeth Whitening with Clear Expectations',

  description:
    'Teeth whitening may seem simple, but the best results come from choosing the right treatment for the right mouth. Promenade Dental provides whitening guidance with attention to oral health, shade planning, sensitivity, and long-term cosmetic goals.',

  items: [
    {
      title: 'Dentist-Led Whitening Planning',

      body:
        'Dr. Shriya checks your teeth, gums, sensitivity, and existing dental work before recommending whitening.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6',
      ],
    },

    {
      title: 'ZOOM Whitening Available When Appropriate',

      body:
        'ZOOM whitening may be recommended for patients who want a faster whitening option and are suitable for treatment.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M24 12 L24 30 M14 22 L34 22',
      ],
    },

    {
      title: 'Realistic Shade Expectations',

      body:
        'Patients are guided on what whitening can improve and when another cosmetic treatment may be needed.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 24 h20 M18 18 h12 M18 30 h12 M24 14 v20',
      ],
    },

    {
      title: 'Cosmetic and General Dental Care in One Office',

      body:
        'If whitening is not enough, Promenade Dental can also discuss bonding, veneers, restorative care, or smile makeover planning.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M15 18 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0 M25 22 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0 M12 32 q7-6 14 0 M23 32 q5-5 10 0',
      ],
    },
  ],
},
localArea: {
  eyebrow: 'Local Teeth Whitening',

  heading:
    'Teeth Whitening Near Fulton Ranch and Chandler 85248',

  body:
    'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248. Our office serves patients from Fulton Ranch, Ocotillo, Sun Lakes, South Chandler, and nearby communities.\n\nIf you are looking for professional teeth whitening, ZOOM whitening, or cosmetic dentistry near Chandler 85248, Promenade Dental offers whitening options planned around tooth shade, stain type, sensitivity, and oral health.',

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
  eyebrow: 'Related Cosmetic Services',

  heading:
  'Related Treatments for Stains, Chips, and Uneven Teeth',

  intro:
    'Teeth whitening improves tooth color, but some smile concerns may need another cosmetic or restorative option. Promenade Dental helps patients choose the treatment that matches the actual concern.',

  services: [
    {
      title: 'Cosmetic Dentistry',

      description:
        'Explore cosmetic treatments for tooth color, shape, spacing, chips, worn edges, and smile balance.',

      href: '/services/cosmetic-dentistry',
    },

    {
      title: 'Porcelain Veneers',

      description:
        'Veneers may help when stains, tooth shape, gaps, or uneven teeth need more complete cosmetic improvement.',

      href: '/services/cosmetic-dentistry/porcelain-veneers',
    },

    {
      title: 'Dental Bonding',

      description:
        'Bonding may help repair small chips, minor gaps, or uneven tooth edges with tooth-colored material.',

      href: '/services/cosmetic-dentistry/dental-bonding',
    },

    {
      title: 'Smile Makeover',

      description:
        'A smile makeover may combine whitening, veneers, bonding, crowns, or other treatments into one planned result.',

      href: '/services/cosmetic-dentistry/smile-makeover',
    },
  ],
},
faq: {
  eyebrow: 'Frequently Asked Questions',

  heading:
  'Teeth Whitening FAQs: Results, Sensitivity, and Safety',

  items: [
    {
      q: 'What causes teeth to become yellow or stained?',
      a: 'Teeth can become yellow or stained from coffee, tea, wine, dark-colored foods, tobacco use, aging, enamel changes, and daily habits. Some discoloration is surface-level, while other discoloration may be deeper inside the tooth.',
    },

    {
      q: 'Is professional teeth whitening better than store-bought whitening products?',
      a: 'Professional whitening is supervised by a dental team and planned around tooth shade, enamel health, gum condition, sensitivity, and existing dental work. Store-bought products may not work the same way for every patient.',
    },

    {
      q: 'What is ZOOM whitening?',
      a: 'ZOOM whitening is a professional whitening system used as part of teeth whitening treatment. It may be recommended for patients who want a faster whitening option under dental supervision.',
    },

    {
      q: 'Does teeth whitening work on crowns, veneers, or fillings?',
      a: 'No. Crowns, veneers, bonding, and tooth-colored fillings do not whiten the same way natural tooth enamel does. This is why existing dental work should be checked before whitening.',
    },

    {
      q: 'Will teeth whitening make my teeth sensitive?',
      a: 'Some patients may experience temporary sensitivity after whitening. If you already have sensitive teeth, Dr. Shriya can evaluate your enamel, gums, and risk factors before recommending a whitening option.',
    },

    {
      q: 'How long do whitening results last?',
      a: 'Whitening results vary based on diet, oral hygiene, coffee or tea use, tobacco use, enamel condition, and other habits. Touch-ups and regular cleanings may help maintain results longer.',
    },

    {
      q: 'Can whitening remove all stains?',
      a: 'Not always. Surface stains may respond well, but deeper discoloration, older dental work, or certain types of internal staining may need veneers, bonding, or another cosmetic treatment.',
    },

    {
      q: 'Is teeth whitening safe?',
      a: 'Teeth whitening can be safe when planned appropriately and supervised by a dental professional. A dental exam helps check for cavities, gum irritation, sensitivity, or enamel concerns before treatment.',
    },

    {
      q: 'How do I know if whitening is right for me?',
      a: 'A consultation helps determine whether whitening is the right option based on your tooth color, stain type, sensitivity, oral health, existing dental work, and cosmetic goals.',
    },

    {
      q: 'Where is Promenade Dental located?',
      a: 'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248.',
    },
  ],
},
cta: {
  title: 'Schedule a Teeth Whitening Visit',
 highlight: 'for Stained Teeth',
  subtitle:
    'Promenade Dental helps patients improve yellow, stained, or dull-looking teeth with professional whitening options planned around oral health, sensitivity, and realistic cosmetic goals.',

  buttonText: 'Book a Whitening Consultation',
  buttonHref: '/contact',

  secondaryButtonText: 'Call (480) 802-8188',
  secondaryButtonHref: 'tel:+14808028188',

image: '/assets/dental-lobby.jpg',
},
  },

  {
  serviceSlug: 'cosmetic-dentistry',
  slug: 'veneers',
  name: 'Porcelain Veneers',

  metaTitle:
    'Porcelain Veneers in Chandler, AZ | Promenade Dental',

  metaDescription:
    'Porcelain veneers in Chandler AZ for chipped, stained, uneven, worn, or gapped teeth. Visit Promenade Dental for natural-looking cosmetic veneer planning.',

  hero: {
    eyebrow: 'Cosmetic Veneers in Fulton Ranch',

    title: 'Porcelain Veneers for',
    highlight: 'Chipped, Stained, or Uneven Teeth',

    description:
      'We at Promenade Dental help patients improve tooth shape, color, size, spacing, and smile balance with porcelain veneers planned around oral health, enamel condition, bite function, gum appearance, and natural-looking results.',

    image: '/assets/Rosemin--1024x536.webp',

    trustPoints: [
      'Porcelain Veneers for Cosmetic Smile Improvement',
      'Planned Around Tooth Shape, Color & Bite',
      'Natural-Looking Cosmetic Treatment',
      'Part of Cosmetic Dentistry at Promenade Dental',
      'Located in Fulton Ranch',
      'New Patients Welcome',
    ],

    primaryCTA: {
      label: 'Book a Veneers Consultation',
      href: '/contact',
    },

    secondaryCTA: {
      label: 'Call (480) 802-8188',
      href: 'tel:+14808028188',
    },
  },
  overview: {
  eyebrow: 'Porcelain Veneers',

  heading:
    'Porcelain Veneers for Teeth That Look Chipped, Stained, Small, Uneven, or Spaced',

  body:
    'Some smile concerns cannot be corrected with whitening alone. Teeth may look permanently stained, chipped, worn, small, uneven, or slightly spaced even when they are otherwise healthy. These issues can affect how balanced, polished, or confident your smile appears. Porcelain veneers are thin custom restorations placed on the front surface of selected teeth to improve tooth color, shape, size, and symmetry. At Promenade Dental, Dr. Shriya evaluates your enamel, gums, bite, tooth position, and cosmetic goals before recommending veneers.',

  features: [
    'Improve tooth color, shape, and symmetry',
    'Address chips, stains, gaps, and uneven teeth',
    'Custom-designed for a natural appearance',
    'Planned around enamel health and bite function',
  ],

  image: '/assets/service-porcelain-veneers.jpg',

  cta: {
    label: 'Start Your Veneers Consultation',
    href: '/contact',
  },
},
whyItMatters: {
  eyebrow: 'Veneer Evaluation',

  heading:
    'Veneer Consultation for Tooth Shape, Enamel Health, Bite Pressure, and Smile Goals',

  description:
    'Porcelain veneers are a cosmetic treatment, but they still need careful dental planning. Before recommending veneers, Dr. Shriya checks whether your teeth and gums are healthy, whether there is enough enamel for treatment, whether your bite places heavy pressure on the front teeth, and whether another treatment may be more appropriate. A veneer consultation helps determine how many teeth may need veneers, what changes are realistic, and whether whitening, bonding, crowns, or gum care should be considered before or alongside veneer treatment.',

  items: [
    {
      title: 'Tooth Shape and Size',

      body:
        'Veneers can improve teeth that look small, narrow, uneven, short, or differently shaped from surrounding teeth.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M18 14 q6 -4 12 0 q4 4 0 10 q-4 6 -10 10 q-6 -4 -8 -10 q-2 -6 6 -10',
      ],
    },

    {
      title: 'Enamel and Tooth Structure',

      body:
        'Healthy enamel and stable tooth structure help support better veneer planning and long-term function.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M24 14 v12 M24 32 v2 M16 22 q8 -10 16 0',
      ],
    },

    {
      title: 'Bite and Grinding Risk',

      body:
        'Patients who grind or clench may need bite evaluation or a night guard to help protect cosmetic dental work.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 22 h20 M18 30 h12 M20 14 q4 6 8 0 q4 6 8 0',
      ],
    },
  ],
},
features: {
  eyebrow: 'Why Veneers',

  heading:
    'Porcelain Veneers for Smile Concerns Whitening or Bonding May Not Fully Correct',

  body:
    'Whitening can improve tooth color, and bonding can help with smaller repairs. Veneers may be considered when several cosmetic concerns need to be improved together, such as color, shape, symmetry, size, or spacing.',

  features: [
    {
      title: 'More Than Tooth Color',
      body:
        'Veneers can change the appearance of tooth shape and size, not just brightness.',
    },

    {
      title: 'More Complete Than Small Bonding Repairs',
      body:
        'For multiple visible teeth or broader cosmetic goals, veneers may create a more uniform result than bonding alone.',
    },

    {
      title: 'Planned for Smile Balance',
      body:
        'Veneers can help improve how visible teeth work together in the smile line, especially when several front teeth look uneven.',
    },
  ],
},
servicesGrid: {
eyebrow: 'Veneer Treatment Options',

heading:
'Veneer Options Based on Tooth Shape, Color, and Smile Goals',

intro:
'Not every patient needs the same veneer plan. Some patients need one or two veneers for specific teeth. Others may need several veneers for a more balanced smile. Some may need whitening, bonding, gum care, or restorative treatment before veneers are planned.',

services: [
{
title: 'Single-Tooth Veneer',
  description:
    'A single veneer may be used when one visible tooth looks chipped, discolored, small, or different from nearby teeth.',

  bestFor: [
    'One uneven tooth',
    'One chipped tooth',
    'One discolored front tooth',
    'Minor smile imbalance',
  ],

  cta: 'Ask About a Single Veneer',

  href: '/services/cosmetic-dentistry/porcelain-veneers',
},

{
  title: 'Multiple Porcelain Veneers',

  description:
    'Multiple veneers may be used when several front teeth need improvement in color, shape, spacing, or symmetry.',

  bestFor: [
    'Uneven smile',
    'Small teeth',
    'Multiple stained teeth',
    'Visible gaps',
    'Broader cosmetic changes',
  ],

  cta: 'Ask About Multiple Veneers',

  href: '/services/cosmetic-dentistry/porcelain-veneers',
},

{
  title: 'Veneers in a Smile Makeover',

  description:
    'Veneers may be combined with whitening, bonding, crowns, gum care, or other treatments when several smile concerns need to be addressed together.',

  bestFor: [
    'Multiple cosmetic concerns',
    'Worn teeth',
    'Old dental work',
    'Smile redesign',
    'Full smile planning',
  ],

  cta: 'Plan a Smile Makeover',

  href: '/services/cosmetic-dentistry/smile-makeover',
},

],
},
suitability: {
eyebrow: 'Are Veneers Right for You?',

heading:
'Porcelain Veneers for Patients Who Want to Improve Tooth Shape, Color, Size, or Small Gaps',

body:
'Porcelain veneers may be a good option when the main concern is how the front teeth look. They are commonly considered for visible teeth that are stained, chipped, worn, small, uneven, or slightly spaced.\n\nAt Promenade Dental, Dr. Shriya helps you understand whether veneers are the right treatment or whether whitening, bonding, crowns, orthodontics, or restorative care may be more appropriate.',

goodFit: {
title: 'Veneers May Be Right If',
items: [
  'Your front teeth are chipped, worn, or uneven',
  'Your teeth have stains that whitening cannot fully improve',
  'You want to improve tooth shape, size, or symmetry',
  'You have small gaps between visible teeth',
  'You want a more complete cosmetic result than whitening alone',
],

},

alternative: {
title: 'Another Option May Be Better If',

items: [
  'Your main concern is only mild surface staining',
  'You have active cavities or gum disease',
  'You grind heavily without protection',
  'Your tooth is too weak and may need a crown',
  'You want to correct larger alignment or bite issues',
],

},

cta: {
label: 'Find Out If Veneers Fit Your Smile',
href: '/contact',
},
},
comparison: {
eyebrow: 'Veneers, Whitening, or Bonding?',

heading:
'Veneers, Whitening, or Bonding for Different Cosmetic Concerns',

body:
'Cosmetic dentistry works best when the treatment matches the real concern. Whitening is mainly for tooth color. Bonding is often used for smaller chips or minor gaps. Veneers may be considered when tooth color, shape, size, and smile balance need to be improved together.',

matches: [
{
title: 'Teeth Whitening for Tooth Color',

  body:
    'Whitening may be the better first option when your teeth are healthy and the main concern is yellowing or surface stains.',
},

{
  title: 'Dental Bonding for Small Repairs',

  body:
    'Bonding may be a conservative option for small chips, minor spacing, or uneven tooth edges.',
},

{
  title: 'Porcelain Veneers for Complete Cosmetic Changes',

  body:
    'Veneers may be better when multiple front teeth need improvement in color, shape, size, spacing, or symmetry.',
},
],
},
process: {
eyebrow: 'Porcelain Veneers Process',

heading:
'Porcelain Veneer Planning for Shade, Shape, and Smile Balance',

subtitle:
'Your veneer treatment is planned around your oral health, tooth structure, cosmetic goals, and how your teeth function together. This helps create a veneer plan that looks natural and supports long-term comfort.',

steps: [
{
title: 'Smile Goals and Cosmetic Concerns',

  body:
    'Dr. Shriya discusses what you want to change, such as tooth color, shape, size, spacing, or overall smile balance.',
},

{
  title: 'Teeth, Gums, and Bite Evaluation',

  body:
    'Your teeth, gums, enamel, existing dental work, bite pressure, and signs of grinding are evaluated before treatment planning.',
},

{
  title: 'Veneer Design and Treatment Planning',

  body:
    'The number of veneers, desired shade, tooth shape, and smile line are planned based on your mouth and cosmetic goals.',
},

{
  title: 'Veneer Placement and Follow-Up',

  body:
    'Once veneers are created and placed, the bite, comfort, appearance, and fit are reviewed.',
},

],

cta: {
label: 'Book a Veneers Consultation',
href: '/contact',
},
},
educationSection: {
  eyebrow: 'Natural-Looking Veneers',

  heading:
    'Porcelain Veneers Planned for Natural Tooth Color, Shape, and Smile Proportion',

  body:
    'Veneers should not look bulky, overly white, or disconnected from the rest of your smile. A good veneer plan considers tooth shade, face shape, lip movement, gum line, tooth length, tooth width, and how the smile looks when speaking and laughing.',

  supportingText:
    'At Promenade Dental, the goal is to improve the teeth that bother you while keeping the final result balanced with your natural features.',

  image:
    '/assets/porcelain-dental-veneers.jpg',

  imageAlt:
    'Patient smiling with natural-looking porcelain veneers',

  cta: {
    label: 'Talk to Dr. Shriya About Veneers',
    href: '/contact',
  },
},
maintenance: {
  eyebrow: 'Veneer Care & Maintenance',

  heading:
    'Veneer Maintenance for Long-Term Cosmetic Results',

  body:
    'Porcelain veneers are designed to be durable, but they still need good daily care and regular dental visits. Healthy gums, stable bite pressure, and proper home care all help protect your cosmetic result.\n\nPromenade Dental provides guidance on maintaining veneers, protecting them from unnecessary wear, and monitoring their condition during routine dental visits.',

  cards: [
    {
      title: 'Keep Up With Dental Cleanings',
      body:
        'Regular cleanings help maintain gum health and remove buildup around veneers and natural teeth.',
    },

    {
      title: 'Protect Veneers From Grinding',
      body:
        'If you grind or clench your teeth, a night guard may be recommended to help protect veneers from excessive pressure.',
    },

    {
      title: 'Avoid Using Teeth as Tools',
      body:
        'Biting hard objects, opening packages, or chewing ice can increase the risk of veneer damage.',
    },

    {
      title: 'Monitor Gum and Bite Changes',
      body:
        'Routine dental visits help check gum health, bite comfort, and the condition of veneers over time.',
    },
  ],
},
benefits: {
eyebrow: 'Why Choose Promenade Dental',

heading:
'Dentist-Led Veneer Planning for Natural-Looking Results',

description:
'Porcelain veneers are highly personal. The best results come from careful planning, realistic expectations, and a clear understanding of what veneers can improve. Promenade Dental focuses on cosmetic outcomes that support both appearance and long-term oral health.',

items: [
{
title: 'Treatment Planned Around Oral Health',
  body:
    'Dr. Shriya evaluates teeth, gums, enamel, bite, and existing dental work before recommending veneers.',

  paths: [
    'M6 38 A18 18 0 0 1 42 38',
    'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6',
  ],
},

{
  title: 'Cosmetic Goals Are Clearly Discussed',

  body:
    'Patients can explain what they want to change so the veneer plan reflects their actual smile concerns.',

  paths: [
    'M6 38 A18 18 0 0 1 42 38',
    'M24 12 L24 30 M14 22 L34 22',
  ],
},

{
  title: 'Natural-Looking Smile Design',

  body:
    'Veneer planning considers tooth color, shape, size, gum line, and smile balance.',

  paths: [
    'M6 38 A18 18 0 0 1 42 38',
    'M14 24 h20 M18 18 h12 M18 30 h12 M24 14 v20',
  ],
},

{
  title: 'Cosmetic and General Dental Care in One Office',

  body:
    'If veneers are not the best fit, Promenade Dental can discuss whitening, bonding, crowns, or other treatment options.',

  paths: [
    'M6 38 A18 18 0 0 1 42 38',
    'M15 18 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0 M25 22 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0 M12 32 q7-6 14 0 M23 32 q5-5 10 0',
  ],
},

],
},
localArea: {
eyebrow: 'Local Porcelain Veneers',

heading:
'Porcelain Veneers Near Fulton Ranch and Chandler 85248',

body:
'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248. Our office serves patients from Fulton Ranch, Ocotillo, Sun Lakes, South Chandler, and nearby communities.\n\nIf you are looking for porcelain veneers, cosmetic veneers, dental bonding, teeth whitening, or smile makeover planning near Chandler 85248, Promenade Dental offers cosmetic dentistry planned around tooth shape, color, enamel health, and natural-looking results.',

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
  eyebrow: 'Related Cosmetic Services',

  heading:
    'Related Cosmetic Treatments for Stains, Chips, Gaps, and Uneven Teeth',

  intro:
    'Porcelain veneers can improve several cosmetic concerns, but some patients may benefit from whitening, bonding, restorative treatment, or a broader smile makeover plan.',

  services: [
    {
      title: 'Cosmetic Dentistry',

      description:
        'Explore cosmetic treatment options for tooth color, shape, spacing, chips, worn edges, and smile balance.',

      href: '/services/cosmetic-dentistry',
    },

    {
      title: 'Teeth Whitening',

      description:
        'Whitening may be the better first option when tooth color is the main concern and the tooth shape is already acceptable.',

      href: '/services/cosmetic-dentistry/teeth-whitening',
    },

    {
      title: 'Dental Bonding',

      description:
        'Bonding may be suitable for smaller chips, minor gaps, or limited tooth reshaping.',

      href: '/services/cosmetic-dentistry/dental-bonding',
    },

    {
      title: 'Smile Makeover',

      description:
        'A smile makeover may combine veneers, whitening, bonding, crowns, gum care, or other treatments into one complete plan.',

      href: '/services/cosmetic-dentistry/smile-makeover',
    },
  ],
},
faq: {
  eyebrow: 'Frequently Asked Questions',

  heading:
    'Porcelain Veneer Questions About Stains, Chips, Gaps, Results, and Care',

  items: [
    {
      q: 'What are porcelain veneers?',
      a: 'Porcelain veneers are thin custom restorations placed on the front surface of selected teeth to improve tooth color, shape, size, spacing, and overall smile appearance.',
    },

    {
      q: 'What problems can veneers fix?',
      a: 'Veneers may improve chipped teeth, stained teeth, small teeth, uneven teeth, worn edges, minor gaps, and teeth that do not match the rest of the smile.',
    },

    {
      q: 'Are veneers better than teeth whitening?',
      a: 'Veneers and whitening solve different problems. Whitening mainly improves tooth color. Veneers can improve tooth color, shape, size, spacing, and symmetry.',
    },

    {
      q: 'Are veneers better than bonding?',
      a: 'Bonding may be better for smaller repairs, while veneers may be better for more complete cosmetic changes across one or more visible teeth.',
    },

    {
      q: 'Do veneers look natural?',
      a: 'Veneers can look natural when they are planned around tooth color, shape, gum line, smile balance, and facial features.',
    },

    {
      q: 'Do veneers require healthy teeth?',
      a: 'Yes. Teeth and gums should be evaluated before veneers. Cavities, gum disease, heavy grinding, or weak tooth structure may need to be addressed first.',
    },

    {
      q: 'Can veneers close gaps between teeth?',
      a: 'Veneers may help close small gaps between visible teeth. Larger spacing or bite-related concerns may need orthodontic evaluation or another treatment plan.',
    },

    {
      q: 'Can veneers stain?',
      a: 'Porcelain veneers are generally more stain-resistant than natural enamel, but the surrounding teeth and margins still need good care and regular cleaning.',
    },

    {
      q: 'How do I know if veneers are right for me?',
      a: 'A consultation helps determine whether veneers are appropriate based on your tooth shape, enamel, gum health, bite, existing dental work, and cosmetic goals.',
    },

    {
      q: 'Where is Promenade Dental located?',
      a: 'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248.',
    },
  ],
},
cta: {
 title: 'Schedule a Veneers Consultation',
  highlight: 'for a More Confident Smile',

  subtitle:
    'Promenade Dental helps patients improve visible smile concerns with porcelain veneers planned around tooth shape, enamel health, bite function, and natural-looking cosmetic results.',

  buttonText: 'Book a Veneers Consultation',
  buttonHref: '/contact',

  secondaryButtonText: 'Call (480) 802-8188',
  secondaryButtonHref: 'tel:+14808028188',

  image: '/assets/dental-lobby.jpg',
},

},

{
  serviceSlug: 'cosmetic-dentistry',
  slug: 'dental-bonding',
  name: 'Dental Bonding',

  metaTitle:
    'Dental Bonding in Chandler, AZ | Promenade Dental',

  metaDescription:
    'Cosmetic dental bonding in Chandler AZ for chipped, uneven, slightly gapped, or worn teeth. Visit Promenade Dental for conservative smile repair.',

  hero: {
    eyebrow: 'Cosmetic Dental Bonding in Fulton Ranch',

    title: 'Cosmetic Dental Bonding for',
    highlight: 'Chipped, Uneven, or Slightly Gapped Teeth',

    description:
      'Promenade Dental helps patients repair small chips, minor gaps, uneven edges, and tooth shape concerns with cosmetic dental bonding planned around tooth color, enamel health, bite pressure, and natural-looking results.',

    image: '/assets/h-dental-bonding.jpg',

    trustPoints: [
      'Conservative Cosmetic Tooth Repair',
      'For Small Chips, Gaps & Uneven Edges',
      'Tooth-Colored Bonding Material',
      'Planned Around Bite & Enamel Health',
      'Located in Fulton Ranch',
      'New Patients Welcome',
    ],

    primaryCTA: {
      label: 'Book a Bonding Consultation',
      href: '/contact',
    },

    secondaryCTA: {
      label: 'Call (480) 802-8188',
      href: 'tel:+14808028188',
    },
  },
  overview: {
  eyebrow: 'Dental Bonding',

  heading:
    'Dental Bonding for Small Chips, Minor Gaps, and Uneven Tooth Edges',

  body:
    'Small cosmetic concerns can still affect how your smile looks. A chipped front tooth, a rough edge, a narrow gap, or one uneven tooth can draw attention even when the rest of your teeth are healthy. Cosmetic dental bonding uses tooth-colored material to reshape, smooth, or repair selected teeth. At Promenade Dental, Dr. Shriya evaluates the tooth structure, enamel, bite pressure, tooth color, and cosmetic goal before recommending bonding.',

  features: [
    'Repair small chips and worn edges',
    'Improve minor gaps and uneven teeth',
    'Tooth-colored material for natural results',
    'Planned around enamel health and bite function',
  ],

  image: '/assets/service-dental-bonding.jpg',

  cta: {
    label: 'Start Your Bonding Consultation',
    href: '/contact',
  },
},
whyItMatters: {
  eyebrow: 'Bonding Evaluation',

  heading:
    'Bonding Consultation for Tooth Shape, Small Chips, Gaps, and Bite Pressure',

  description:
    'Dental bonding works best when the concern is limited to a small area of the tooth. Before treatment, Dr. Shriya checks whether the tooth is healthy, whether the chip or gap is suitable for bonding, whether grinding or bite pressure caused the damage, and whether another treatment may last longer. A bonding consultation helps determine whether cosmetic bonding is the right option or whether veneers, crowns, whitening, or restorative treatment may be more appropriate.',

  items: [
    {
      title: 'Tooth Shape and Edge Concerns',

      body:
        'Bonding may improve a tooth that looks slightly short, uneven, pointed, rough, or different from nearby teeth.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M18 14 q6 -4 12 0 q4 4 0 10 q-4 6 -10 10 q-6 -4 -8 -10 q-2 -6 6 -10',
      ],
    },

    {
      title: 'Small Chips and Minor Damage',

      body:
        'Bonding can repair small chips when enough healthy tooth structure remains and the bite does not place heavy pressure on the area.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M24 14 v12 M24 32 v2 M16 22 q8 -10 16 0',
      ],
    },

    {
      title: 'Bite and Grinding Risk',

      body:
        'If tooth wear, clenching, or grinding caused the chip, bite evaluation may be needed before bonding is planned.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 22 h20 M18 30 h12 M20 14 q4 6 8 0 q4 6 8 0',
      ],
    },
  ],
},
features: {
  eyebrow: 'Why Dental Bonding',

  heading:
    'Cosmetic Bonding for Smile Concerns That Do Not Need Veneers or Crowns',

  body:
    'Not every cosmetic concern needs a larger treatment. Dental bonding may be a conservative option when the issue is small, the tooth is healthy, and the goal is to improve shape, edge, or appearance without changing the entire smile.',

  features: [
    {
      title: 'Conservative Tooth Repair',
      body:
        'Bonding may require less tooth preparation than veneers or crowns, depending on the case.',
    },

    {
      title: 'Tooth-Colored Cosmetic Improvement',
      body:
        'The bonding material is selected to blend with your surrounding tooth color for a natural appearance.',
    },

    {
      title: 'Focused Smile Correction',
      body:
        'Bonding can target one or a few specific teeth instead of changing the whole smile.',
    },
  ],
},
servicesGrid: {
  eyebrow: 'Dental Bonding Treatment Options',

  heading:
  'Dental Bonding for Chips, Gaps, and Uneven Teeth',   

  intro:
    'Dental bonding can be used in different ways depending on the cosmetic concern. Some patients need a small chip repaired. Some want to close a minor space. Others want to smooth uneven edges or improve the shape of one visible tooth.',

  services: [
    {
      title: 'Bonding for Chipped Teeth',

      description:
        'Bonding may help repair small chips on front teeth or visible teeth using tooth-colored material shaped to match the surrounding tooth.',

      bestFor: [
        'Small chips',
        'Rough edges',
        'Minor front tooth damage',
        'Visible tooth repair',
      ],

      cta: 'Ask About Chipped Tooth Bonding',

      href: '/services/cosmetic-dentistry/dental-bonding',
    },

    {
      title: 'Bonding for Small Gaps',

      description:
        'Bonding may help close minor gaps between teeth when the spacing is small and the bite allows a stable result.',

      bestFor: [
        'Small spaces',
        'Minor cosmetic gaps',
        'Visible front tooth spacing',
        'Conservative gap correction',
      ],

      cta: 'Ask About Gap Bonding',

      href: '/services/cosmetic-dentistry/dental-bonding',
    },

    {
      title: 'Bonding for Uneven Tooth Edges',

      description:
        'Bonding may help smooth, reshape, or build up uneven tooth edges so the smile looks more balanced.',

      bestFor: [
        'Uneven edges',
        'Small teeth',
        'Worn edges',
        'Rough tooth shape',
        'Minor cosmetic reshaping',
      ],

      cta: 'Ask About Tooth Reshaping',

      href: '/services/cosmetic-dentistry/dental-bonding',
    },
  ],
},
suitability: {
  eyebrow: 'Is Dental Bonding Right for You?',

  heading:
    'Dental Bonding for Patients With Small Cosmetic Tooth Concerns',

  body:
    'Dental bonding is often considered when the cosmetic concern is small and the tooth is otherwise healthy. It is commonly used for minor chips, slight gaps, rough edges, and small shape changes.\n\nAt Promenade Dental, Dr. Shriya helps you understand whether bonding can meet your goal or whether veneers, crowns, whitening, or orthodontic treatment may be more appropriate.',

  goodFit: {
    title: 'Bonding May Be Right If',

    items: [
      'You have a small chip on a visible tooth',
      'You have a minor gap between front teeth',
      'One tooth looks slightly uneven or misshaped',
      'You want a conservative cosmetic repair',
      'Your tooth is healthy enough for bonding',
    ],
  },

  alternative: {
    title: 'Another Option May Be Better If',

    items: [
      'The tooth is badly cracked or weak',
      'The chip is large or affects tooth strength',
      'You have heavy grinding or bite pressure',
      'You want a more complete smile change',
      'The tooth needs a crown, veneer, or orthodontic treatment',
    ],
  },

  cta: {
    label: 'Find Out If Bonding Fits Your Smile',
    href: '/contact',
  },
},
comparison: {
  eyebrow: 'Bonding, Veneers, or Whitening?',

  heading:
    'Dental Bonding, Veneers, or Whitening for Different Cosmetic Tooth Problems',

  body:
    'Cosmetic dentistry works best when the treatment matches the concern. Bonding is often used for small repairs. Veneers may be better for larger cosmetic changes. Whitening is mainly used when tooth color is the primary issue.',

  matches: [
    {
      title: 'Dental Bonding for Small Repairs',

      body:
        'Bonding may be suitable for small chips, minor gaps, uneven edges, or limited tooth reshaping.',
    },

    {
      title: 'Porcelain Veneers for Larger Smile Changes',

      body:
        'Veneers may be better when several teeth need changes in color, shape, size, spacing, or symmetry.',
    },

    {
      title: 'Teeth Whitening for Tooth Color',

      body:
        'Whitening may be better when teeth are healthy but look yellow, stained, or dull.',
    },
  ],
},
process: {
  eyebrow: 'Dental Bonding Process',
heading:
  'Dental Bonding Planning for Shape, Color, and Bite',

  subtitle:
    'Your dental bonding treatment is planned around the tooth being repaired, the surrounding teeth, your bite, and your cosmetic goal. This helps the bonding material blend with your smile and function comfortably.',

  steps: [
    {
      title: 'Tooth and Smile Evaluation',

      body:
        'Dr. Shriya reviews the chip, gap, edge, or shape concern and checks the health of the tooth.',
    },

    {
      title: 'Shade and Shape Planning',

      body:
        'The bonding material is selected and shaped to blend with nearby teeth as closely as possible.',
    },

    {
      title: 'Bonding Placement',

      body:
        'Tooth-colored material is placed, shaped, and refined on the selected tooth or teeth.',
    },

    {
      title: 'Bite and Finish Check',

      body:
        'The bonding is checked for comfort, bite contact, edge smoothness, and appearance.',
    },
  ],

  cta: {
    label: 'Book a Bonding Appointment',
    href: '/contact',
  },
},
maintenance: {
  eyebrow: 'Bonding Care & Maintenance',

  heading:
    'Dental Bonding Care for Patients Who Want Longer-Lasting Cosmetic Repairs',

  body:
    'Dental bonding can improve small cosmetic concerns, but it still needs proper care. Bonding material can stain, chip, or wear over time depending on habits, bite pressure, and oral hygiene.\n\nPromenade Dental can guide you on how to protect bonded teeth and when touch-ups may be needed.',

  cards: [
    {
      title: 'Avoid Biting Hard Objects',
      body:
        'Chewing ice, biting pens, or using teeth as tools can increase the risk of bonding damage.',
    },

    {
      title: 'Watch Staining Habits',
      body:
        'Coffee, tea, wine, tobacco, and dark-colored foods can stain natural teeth and bonding material over time.',
    },

    {
      title: 'Protect Against Grinding',
      body:
        'If you clench or grind your teeth, a night guard may be recommended to protect the bonding.',
    },

    {
      title: 'Keep Up With Dental Visits',
      body:
        'Routine exams help monitor bonding edges, tooth health, gum health, and bite comfort.',
    },
  ],
},
benefits: {
  eyebrow: 'Why Choose Promenade Dental',

 heading:
  'Dentist-Led Bonding for Natural-Looking Repairs',

  description:
    'Dental bonding is a small treatment, but it still needs careful planning. The tooth color, bite, shape, and reason for the chip or gap should all be considered before bonding is placed.',

  items: [
    {
      title: 'Treatment Planned Around Tooth Health',

      body:
        'Dr. Shriya checks the tooth structure, enamel, gums, and bite before recommending bonding.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6',
      ],
    },

    {
      title: 'Natural-Looking Tooth-Colored Material',

      body:
        'Bonding material is selected and shaped to blend with the surrounding teeth.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M24 12 L24 30 M14 22 L34 22',
      ],
    },

    {
      title: 'Clear Guidance on Treatment Limits',

      body:
        'Patients are told when bonding may work well and when veneers, crowns, or orthodontic treatment may be better.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 24 h20 M18 18 h12 M18 30 h12 M24 14 v20',
      ],
    },

    {
      title: 'Cosmetic and General Dental Care in One Office',

      body:
        'Promenade Dental can also discuss whitening, veneers, crowns, night guards, or other treatment if bonding is not the best fit.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M15 18 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0 M25 22 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0 M12 32 q7-6 14 0 M23 32 q5-5 10 0',
      ],
    },
  ],
},
localArea: {
  eyebrow: 'Local Dental Bonding',

  heading:
    'Cosmetic Dental Bonding Near Fulton Ranch and Chandler 85248',

  body:
    'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248. Our office serves patients from Fulton Ranch, Ocotillo, Sun Lakes, South Chandler, and nearby communities.\n\nIf you are looking for dental bonding, chipped tooth repair, bonding for small gaps, or cosmetic dentistry near Chandler 85248, Promenade Dental offers conservative cosmetic treatment planned around tooth color, tooth shape, bite comfort, and natural appearance.',

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
  eyebrow: 'Related Cosmetic Services',

  heading:
    'Related Cosmetic Treatments for Chips, Gaps, Stains, and Uneven Teeth',

  intro:
    'Dental bonding is useful for small cosmetic repairs, but some patients may benefit from whitening, veneers, restorative treatment, or a broader cosmetic plan.',

  services: [
    {
      title: 'Cosmetic Dentistry',

      description:
        'Explore cosmetic treatment options for tooth color, shape, spacing, chips, worn edges, and smile balance.',

      href: '/services/cosmetic-dentistry',
    },

    {
      title: 'Teeth Whitening',

      description:
        'Whitening may be better when teeth are healthy but look yellow, stained, or dull.',

      href: '/services/cosmetic-dentistry/teeth-whitening',
    },

    {
      title: 'Porcelain Veneers',

      description:
        'Veneers may be better when several teeth need changes in color, shape, size, spacing, or symmetry.',

      href: '/services/cosmetic-dentistry/porcelain-veneers',
    },

    {
      title: 'Smile Makeover',

      description:
        'A smile makeover may combine bonding, veneers, whitening, crowns, or other treatments into one planned result.',

      href: '/services/cosmetic-dentistry/smile-makeover',
    },
  ],
},
faq: {
  eyebrow: 'Frequently Asked Questions',

  heading:
  'Dental Bonding FAQs: Chips, Gaps, and Care',

  items: [
    {
      q: 'What is cosmetic dental bonding?',
      a: 'Cosmetic dental bonding uses tooth-colored material to repair or reshape teeth with small chips, minor gaps, rough edges, or limited cosmetic concerns.',
    },

    {
      q: 'What problems can dental bonding fix?',
      a: 'Dental bonding may help with small chips, minor gaps, uneven tooth edges, slightly misshaped teeth, and small areas of cosmetic damage.',
    },

    {
      q: 'Is bonding better than veneers?',
      a: 'Bonding may be better for smaller, more conservative repairs. Veneers may be better when multiple teeth need more complete changes in color, shape, size, or spacing.',
    },

    {
      q: 'Can bonding fix a chipped front tooth?',
      a: 'Yes. Bonding may be used to repair a small chip on a front tooth if the tooth is healthy and the bite does not place too much pressure on the repair.',
    },

    {
      q: 'Can bonding close gaps between teeth?',
      a: 'Bonding may help close minor gaps between teeth. Larger gaps or bite-related spacing may require veneers, orthodontic treatment, or another option.',
    },

    {
      q: 'Does dental bonding stain?',
      a: 'Bonding material can stain over time, especially with frequent coffee, tea, wine, tobacco, or dark-colored foods. Regular care and maintenance help protect the appearance.',
    },

    {
      q: 'Is dental bonding permanent?',
      a: 'Bonding is durable but may need repair, polishing, or replacement over time. Its longevity depends on bite pressure, habits, oral hygiene, and the size of the bonded area.',
    },

    {
      q: 'Does bonding require tooth drilling?',
      a: 'Bonding is often conservative and may require little to no removal of tooth structure, depending on the case.',
    },

    {
      q: 'How do I know if bonding is right for me?',
      a: 'A consultation helps determine whether bonding is appropriate based on the size of the chip, tooth health, bite pressure, enamel, cosmetic goal, and surrounding teeth.',
    },

    {
      q: 'Where is Promenade Dental located?',
      a: 'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248.',
    },
  ],
},
cta: {
  title: 'Schedule a Bonding Consultation',
highlight: 'for a More Balanced Smile',

  subtitle:
    'Promenade Dental helps patients improve small cosmetic tooth concerns with dental bonding planned around tooth health, bite comfort, tooth color, and natural-looking results.',

  buttonText: 'Book a Bonding Consultation',
  buttonHref: '/contact',

  secondaryButtonText: 'Call (480) 802-8188',
  secondaryButtonHref: 'tel:+14808028188',

  image: '/assets/dental-lobby.jpg',
},
},

{
  serviceSlug: 'restorative-dentistry',
  slug: 'tooth-colored-fillings',
  name: 'Tooth-Colored Fillings',

  metaTitle:
    'Tooth-Colored Fillings in Chandler, AZ | Promenade Dental',

  metaDescription:
    'Tooth-colored fillings in Chandler AZ for cavities, minor decay, and small tooth damage. Visit Promenade Dental for natural-looking cavity repair.',

  hero: {
    eyebrow: 'Natural-Looking Cavity Repair in Fulton Ranch',

    title: 'Tooth-Colored Fillings for',
    highlight: 'Cavities, Minor Decay, and Small Tooth Damage',

    description:
      'Promenade Dental helps patients repair cavities and minor tooth damage with tooth-colored fillings designed to restore tooth structure, protect against further decay, and blend with the natural appearance of your smile.',

    image: '/assets/tooth-coloring.jpg',

    trustPoints: [
      'Natural-Looking Cavity Repair',
      'Treatment for Small Cavities & Minor Decay',
      'Tooth-Colored Composite Material',
      'Planned Around Tooth Health & Comfort',
      'Located in Fulton Ranch',
      'New Patients Welcome',
    ],

    primaryCTA: {
      label: 'Book a Filling Appointment',
      href: '/contact',
    },

    secondaryCTA: {
      label: 'Call (480) 802-8188',
      href: 'tel:+14808028188',
    },
  },
  overview: {
  eyebrow: 'Tooth-Colored Fillings',

  heading:
    'Tooth-Colored Fillings for Cavities, Tooth Sensitivity, and Early Decay',

  body:
    'Cavities often begin as small areas of enamel damage. At first, you may not feel pain. As decay grows, the tooth may become sensitive to cold, sweets, pressure, or chewing. If left untreated, a small cavity can become a larger restoration, tooth infection, or dental emergency. Tooth-colored fillings at Promenade Dental repair areas of decay using composite material selected to match the surrounding tooth. Dr. Shriya evaluates the size, depth, and location of the cavity before recommending the right restorative treatment.',

  features: [
    'Repair cavities and minor tooth damage',
    'Natural-looking tooth-colored material',
    'Protect teeth from further decay',
    'Planned around tooth health and comfort',
  ],

  image: '/assets/service-tooth-colored-fillings.jpg',

  cta: {
    label: 'Schedule a Cavity Evaluation',
    href: '/contact',
  },
},
whyItMatters: {
  eyebrow: 'Filling Evaluation',

  heading:
    'Cavity Evaluation for Tooth Decay, Filling Size, Tooth Strength, and Sensitivity',

  description:
    'Not every cavity needs the same type of restoration. A small cavity may be repaired with a tooth-colored filling. A larger area of damage may need an inlay, onlay, or crown. If decay reaches the nerve, root canal therapy may be needed before the tooth can be restored. A filling evaluation helps determine how much tooth structure is affected, whether the tooth is still strong enough for a filling, and whether symptoms suggest a deeper problem.',

  items: [
    {
      title: 'Size of the Cavity',

      body:
        'The size and depth of the cavity help determine whether a filling is enough or a stronger restoration is needed.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M18 14 q6 -4 12 0 q4 4 0 10 q-4 6 -10 10 q-6 -4 -8 -10 q-2 -6 6 -10',
      ],
    },

    {
      title: 'Tooth Sensitivity',

      body:
        'Sensitivity to cold, sweets, or pressure can help identify how advanced the cavity may be.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M24 14 v12 M24 32 v2 M16 22 q8 -10 16 0',
      ],
    },

    {
      title: 'Tooth Strength',

      body:
        'The remaining healthy tooth structure matters. A weakened tooth may need more support than a filling can provide.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 22 h20 M18 30 h12 M20 14 q4 6 8 0 q4 6 8 0',
      ],
    },
  ],
},
features: {
  eyebrow: 'Why Tooth-Colored Fillings',

  heading:
    'Tooth-Colored Fillings for Natural-Looking Cavity Repair and Tooth Protection',

  body:
    'Tooth-colored fillings repair small to moderate areas of decay while helping the treated tooth look natural. The filling material is shaped and polished so it restores the damaged area and supports normal chewing comfort.',

  features: [
    {
      title: 'Repairs Small Areas of Decay',
      body:
        'A filling removes the decayed portion of the tooth and restores the area with tooth-colored material.',
    },

    {
      title: 'Blends With Natural Tooth Color',
      body:
        'Composite filling material is selected to match the shade of the surrounding tooth more closely than metal-colored fillings.',
    },

    {
      title: 'Helps Prevent Decay From Spreading',
      body:
        'Treating cavities early can help stop decay from reaching deeper layers of the tooth.',
    },
  ],
},
servicesGrid: {
  eyebrow: 'Tooth-Colored Filling Options',

  heading: 'Filling Options for Cavities and Tooth Damage',

  intro:
    'Tooth-colored fillings can be used for new cavities, small areas of tooth damage, or replacement of older fillings when appropriate. The right approach depends on the tooth condition, filling size, bite pressure, and remaining tooth strength.',

  services: [
    {
      title: 'Fillings for New Cavities',

      description:
        'A new cavity filling repairs decay before it spreads deeper into the tooth. Early treatment can help prevent larger restorative needs later.',

      bestFor: [
        'Small cavities',
        'Early decay',
        'Cold sensitivity',
        'Sweet sensitivity',
        'Routine cavity treatment',
      ],

      cta: 'Book a Cavity Filling',

      href: '/services/restorative-dentistry/tooth-colored-fillings',
    },

    {
      title: 'Replacement of Old or Damaged Fillings',

      description:
        'Older fillings can wear, chip, leak, or loosen over time. Dr. Shriya can evaluate whether an old filling needs monitoring, repair, or replacement.',

      bestFor: [
        'Loose fillings',
        'Worn fillings',
        'Leaking fillings',
        'Broken fillings',
        'Old dental work',
      ],

      cta: 'Check an Old Filling',

      href: '/services/restorative-dentistry/tooth-colored-fillings',
    },

    {
      title: 'Fillings for Small Tooth Damage',

      description:
        'Tooth-colored filling material may help repair small areas of tooth damage when the tooth does not need a crown or larger restoration.',

      bestFor: [
        'Minor tooth damage',
        'Small chips',
        'Small worn areas',
        'Limited tooth repair',
      ],

      cta: 'Ask About Tooth Repair',

      href: '/services/restorative-dentistry/tooth-colored-fillings',
    },
  ],
},
suitability: {
  eyebrow: 'Are Tooth-Colored Fillings Right for You?',

  heading:
    'Tooth-Colored Fillings for Patients With Small to Moderate Cavities',

  body:
    'Tooth-colored fillings are commonly used when decay is limited and enough healthy tooth structure remains. If the tooth is heavily damaged, cracked, infected, or weakened, a crown, inlay, onlay, root canal, or extraction may be considered instead.\n\nAt Promenade Dental, Dr. Shriya helps you understand whether a filling is enough or whether the tooth needs stronger protection.',

  goodFit: {
    title: 'A Filling May Be Right If',

    items: [
      'You have a small or moderate cavity',
      'The tooth has enough healthy structure remaining',
      'You have minor sensitivity but no severe pain',
      'The damage is limited to one area',
      'You want a natural-looking cavity repair',
    ],
  },

  alternative: {
    title: 'Another Treatment May Be Better If',

    items: [
      'The cavity is very large or deep',
      'The tooth is cracked or structurally weak',
      'You have severe or lingering tooth pain',
      'Decay has reached the nerve of the tooth',
      'The tooth needs a crown, inlay, onlay, or root canal',
    ],
  },

  cta: {
    label: 'Find Out If You Need a Filling',
    href: '/contact',
  },
},
comparison: {
  eyebrow: 'Fillings, Crowns, or Inlays & Onlays?',

  heading:
    'Fillings, Crowns, and Inlays for Different Levels of Tooth Damage',

  body:
    'The right restoration depends on how much tooth structure is damaged. Fillings are usually used for smaller cavities. Inlays and onlays may be used when a tooth needs more support than a filling but not a full crown. Crowns are used when the tooth needs stronger protection.',

  matches: [
    {
      title: 'Fillings for Smaller Cavities',

      body:
        'A filling may be recommended when decay is limited and the tooth remains strong enough for a conservative repair.',
    },

    {
      title: 'Inlays and Onlays for Moderate Damage',

      body:
        'An inlay or onlay may be considered when a filling is not enough but a full crown may not be necessary.',
    },

    {
      title: 'Crowns for Weak or Cracked Teeth',

      body:
        'A crown may be recommended when the tooth is cracked, heavily filled, broken, or too weak for a filling.',
    },
  ],
},
process: {
  eyebrow: 'Tooth-Colored Filling Process',

  heading:
    'Tooth-Colored Filling Treatment for Decay Removal and Tooth Repair',

  subtitle:
    'A tooth-colored filling is planned around the location of the cavity, the amount of decay, the tooth shape, and the way your teeth come together when you bite. The goal is to repair the tooth while preserving as much healthy structure as possible.',

  steps: [
    {
      title: 'Cavity Diagnosis',

      body:
        'Dr. Shriya evaluates the tooth, symptoms, and X-rays if needed to confirm whether a filling is appropriate.',
    },

    {
      title: 'Decay Removal',

      body:
        'The decayed portion of the tooth is carefully removed while preserving healthy tooth structure.',
    },

    {
      title: 'Tooth-Colored Filling Placement',

      body:
        'Composite material is placed, shaped, and polished to restore the damaged area.',
    },

    {
      title: 'Bite and Comfort Check',

      body:
        'The filling is checked to make sure it feels comfortable when you bite and chew.',
    },
  ],

  cta: {
    label: 'Book a Filling Appointment',
    href: '/contact',
  },
},
maintenance: {
  eyebrow: 'Filling Care & Maintenance',

  heading:
    'Filling Care for Patients Who Want to Prevent New Cavities and Filling Damage',

  body:
    'A filling repairs an area of damage, but it does not make the tooth immune to future decay. Good home care, regular cleanings, and routine exams help protect both the filling and the surrounding tooth.\n\nPromenade Dental can help you maintain your fillings and monitor your oral health during routine dental visits.',

  cards: [
    {
      title: 'Brush and Floss Around the Filling',
      body:
        'Plaque can still collect around the edges of a filling, so daily brushing and flossing remain important.',
    },

    {
      title: 'Limit Frequent Sugar Exposure',
      body:
        'Frequent sugar exposure can increase cavity risk around natural teeth and restored areas.',
    },

    {
      title: 'Avoid Chewing Hard Objects',
      body:
        'Ice, pens, and hard objects can chip or damage fillings and natural teeth.',
    },

    {
      title: 'Keep Up With Dental Exams',
      body:
        'Routine exams help check whether fillings are sealed, comfortable, and functioning properly.',
    },
  ],
},
benefits: {
  eyebrow: 'Why Choose Promenade Dental',

  heading:
    'Dentist-Led Filling Treatment for Natural-Looking Cavity Repair',

  description:
    'A dental filling may seem simple, but proper diagnosis and placement matter. The size of the cavity, tooth strength, bite pressure, sensitivity, and appearance all affect the right treatment decision.',

  items: [
    {
      title: 'Diagnosis Before Treatment',

      body:
        'Dr. Shriya evaluates the tooth, symptoms, X-rays when needed, and surrounding structure before recommending a filling.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6',
      ],
    },

    {
      title: 'Natural-Looking Composite Material',

      body:
        'Tooth-colored material is selected to blend with the treated tooth as closely as possible.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M24 12 L24 30 M14 22 L34 22',
      ],
    },

    {
      title: 'Treatment Planned Around Tooth Strength',

      body:
        'Patients are guided on whether a filling is enough or whether the tooth needs more support.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 24 h20 M18 18 h12 M18 30 h12 M24 14 v20',
      ],
    },

    {
      title: 'Preventive and Restorative Care in One Office',

      body:
        'Promenade Dental can help treat cavities and monitor your oral health with exams, cleanings, crowns, inlays, onlays, and preventive care.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M15 18 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0 M25 22 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0 M12 32 q7-6 14 0 M23 32 q5-5 10 0',
      ],
    },
  ],
},
localArea: {
  eyebrow: 'Local Tooth-Colored Fillings',

  heading:
    'Tooth-Colored Fillings Near Fulton Ranch and Chandler 85248',

  body:
    'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248. Our office serves patients from Fulton Ranch, Ocotillo, Sun Lakes, South Chandler, and nearby communities.\n\nIf you are looking for cavity treatment, white fillings, tooth-colored fillings, replacement fillings, or restorative dentistry near Chandler 85248, Promenade Dental offers natural-looking filling treatment planned around tooth health, comfort, and function.',

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
  eyebrow: 'Related Restorative Services',

  heading: 'Related Treatments for Cavities and Damaged Teeth',

  intro:
    'A tooth-colored filling is often used for smaller cavities, but some teeth need additional protection or treatment depending on the size of the damage and the symptoms.',

  services: [
    {
      title: 'Restorative Dentistry',

      description:
        'Explore restorative treatments for damaged, decayed, infected, weak, or missing teeth.',

      href: '/services/restorative-dentistry',
    },

    {
      title: 'Dental Crowns',

      description:
        'Crowns may be recommended when a tooth is too weak, cracked, or heavily damaged for a filling.',

      href: '/services/restorative-dentistry/dental-crowns',
    },

    {
      title: 'Inlays & Onlays',

      description:
        'Inlays and onlays may be used when a tooth needs more support than a filling but may not require a full crown.',

      href: '/services/restorative-dentistry/inlays-onlays',
    },

    {
      title: 'Root Canal Therapy',

      description:
        'Root canal therapy may be needed when decay or infection reaches the inside of the tooth.',

      href: '/services/restorative-dentistry/root-canal-therapy',
    },
  ],
},
faq: {
  eyebrow: 'Frequently Asked Questions',

  heading: 'Tooth-Colored Filling FAQs',

  items: [
    {
      q: 'What is a tooth-colored filling?',
      a: 'A tooth-colored filling is a dental restoration used to repair a cavity or small area of tooth damage with composite material designed to blend with the natural tooth color.',
    },

    {
      q: 'When do I need a filling?',
      a: 'You may need a filling when a cavity or small area of damage is present and enough healthy tooth structure remains to support the restoration.',
    },

    {
      q: 'Are tooth-colored fillings better than metal fillings?',
      a: 'Tooth-colored fillings are often chosen because they blend with natural teeth. The best material depends on the tooth location, size of the cavity, bite pressure, and clinical needs.',
    },

    {
      q: 'Can a filling fix tooth sensitivity?',
      a: 'A filling may help if sensitivity is caused by a cavity or small area of decay. Sensitivity can also come from gum recession, enamel wear, cracks, or bite issues, so diagnosis is important.',
    },

    {
      q: 'What happens if I ignore a cavity?',
      a: 'An untreated cavity can grow deeper and may eventually cause tooth pain, infection, the need for a root canal, a crown, or even tooth loss.',
    },

    {
      q: 'Can old fillings be replaced?',
      a: 'Yes. Old fillings may need replacement if they are cracked, leaking, worn, loose, or allowing decay around the edges.',
    },

    {
      q: 'Is a filling enough for a large cavity?',
      a: 'Not always. Larger cavities may need an inlay, onlay, crown, or root canal depending on the amount of tooth damage and whether the nerve is affected.',
    },

    {
      q: 'Do tooth-colored fillings look natural?',
      a: 'Tooth-colored fillings are designed to blend with the surrounding tooth shade, especially when placed in visible areas.',
    },

    {
      q: 'How do I know if I need a filling or crown?',
      a: 'A dental exam helps determine whether the tooth has enough healthy structure for a filling or whether it needs stronger protection with a crown.',
    },

    {
      q: 'Where is Promenade Dental located?',
      a: 'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248.',
    },
  ],
},
cta: {
  title: 'Schedule a Filling Appointment',

highlight: 'for a Healthier Smile',

  subtitle:
    'Promenade Dental helps patients repair cavities and small areas of tooth damage with tooth-colored fillings planned around tooth health, comfort, bite function, and natural appearance.',

  buttonText: 'Book a Filling Appointment',
  buttonHref: '/contact',

  secondaryButtonText: 'Call (480) 802-8188',
  secondaryButtonHref: 'tel:+14808028188',

  image: '/assets/dental-lobby.jpg',
},
},

{
serviceSlug: 'restorative-dentistry',
slug: 'dental-crowns',

name: 'Dental Crowns',

metaTitle:
  'Dental Crowns in Chandler, AZ | Promenade Dental',

metaDescription:
  'Dental crowns in Chandler AZ for cracked, broken, weak, worn, or root canal-treated teeth. Visit Promenade Dental for restorative crown treatment.',

hero: {
  eyebrow: 'Restorative Dental Crowns in Fulton Ranch',

  title: 'Dental Crowns for',
  highlight:
    'Cracked, Broken, Weak, or Root Canal-Treated Teeth in Chandler',

  description:
    'Promenade Dental helps patients protect and restore damaged teeth with dental crowns planned around tooth strength, bite comfort, appearance, existing dental work, and long-term function.',

  image: '/assets/h-dental-crowns.jpg',

  trustPoints: [
    'Crowns for Cracked, Weak, or Broken Teeth',
    'Protection After Root Canal Therapy',
    'Restores Chewing Comfort & Tooth Shape',
    'Planned Around Bite & Tooth Strength',
    'Located in Fulton Ranch',
    'New Patients Welcome',
  ],

  primaryCTA: {
    label: 'Book a Crown Consultation',
    href: '/contact',
  },

  secondaryCTA: {
    label: 'Call (480) 802-8188',
    href: 'tel:+14808028188',
  },
},
overview: {
  eyebrow: 'Dental Crowns',

  heading:
    'Dental Crowns for Teeth That Are Too Weak or Damaged for a Filling',

  body:
    'A filling may be enough for a small cavity, but some teeth need stronger protection. A tooth may become weak after a large cavity, crack, fracture, root canal, heavy filling, bite pressure, or years of wear. A dental crown covers the visible part of the tooth to help protect the remaining structure, restore chewing function, and improve tooth shape. Dr. Shriya evaluates how much healthy tooth remains, where the damage is located, and how your bite affects the tooth before recommending a crown.',

  features: [
    'Protect weak, cracked, or broken teeth',
    'Restore chewing function and tooth shape',
    'Recommended after root canal treatment when needed',
    'Planned around bite forces and remaining tooth structure',
  ],

  image: '/assets/service-dental-crowns.jpg',

  cta: {
    label: 'Start Your Crown Evaluation',
    href: '/contact',
  },
},
whyItMatters: {
  eyebrow: 'Crown Evaluation',

  heading:
    'Dental Crown Evaluation for Tooth Cracks, Large Fillings, Bite Pressure, and Tooth Strength',

  description:
    'Not every damaged tooth needs a crown, but some teeth need more support than a filling can provide. Before recommending a crown, Dr. Shriya evaluates the remaining tooth structure, existing fillings, cracks, symptoms, bite pressure, gum health, and X-rays when needed. The evaluation helps determine whether the tooth can be restored with a crown, whether root canal therapy may be needed first, or whether another restorative treatment is more appropriate.',

  items: [
    {
      title: 'Amount of Healthy Tooth Remaining',

      body:
        'The amount of remaining healthy tooth structure helps determine whether a filling, inlay, onlay, or crown is the most appropriate restoration.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M16 14 q8 -4 16 0 q4 6 0 12 q-4 6 -12 10 q-8 -4 -10 -10 q-2 -6 6 -12',
      ],
    },

    {
      title: 'Cracks and Fracture Risk',

      body:
        'Cracks can weaken a tooth and may become more serious under chewing pressure if the tooth is not properly protected.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M24 12 l-4 10 h5 l-3 12 l8 -12 h-5 l4 -10',
      ],
    },

    {
      title: 'Bite Pressure and Tooth Wear',

      body:
        'Grinding, clenching, and heavy bite forces can affect crown planning and may indicate the need for additional protection such as a night guard.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 20 h20 M16 28 h16 M18 14 q6 8 12 0 q6 8 12 0',
      ],
    },
  ],
},
features: {
  eyebrow: 'Why Dental Crowns',

  heading:
    'Dental Crowns for Tooth Protection, Chewing Comfort, and Restored Tooth Shape',

  body:
    'A dental crown is used when a tooth needs stronger support than a smaller restoration can provide. Crowns help protect damaged teeth while restoring the shape needed for chewing, speaking, and normal bite function.',

  features: [
    {
      title: 'Protects a Weak Tooth',
      body:
        'A crown covers and supports a tooth that may be too weak for a filling alone.',
    },

    {
      title: 'Restores Chewing Function',
      body:
        'A crown helps rebuild the tooth shape needed for comfortable biting and chewing.',
    },

    {
      title: 'Improves Tooth Appearance',
      body:
        'A crown can improve the appearance of a damaged, worn, discolored, or misshaped tooth.',
    },
  ],
},
servicesGrid: {
  eyebrow: 'Dental Crown Treatment Options',

  heading:
  'Dental Crowns for Cracked, Broken, and Worn Teeth',

  intro:
    'Dental crowns can be used in several restorative situations. The right crown plan depends on the reason the tooth needs protection, how much tooth structure remains, and how the tooth functions in your bite.',

  services: [
    {
      title: 'Crowns for Cracked or Broken Teeth',

      description:
        'A crown may protect a cracked or broken tooth by covering the remaining structure and reducing the risk of further damage.',

      bestFor: [
        'Cracked teeth',
        'Broken teeth',
        'Fracture risk',
        'Pain when chewing',
        'Weakened tooth structure',
      ],

      cta: 'Ask About a Crown for a Cracked Tooth',

      href: '/services/restorative-dentistry/dental-crowns',
    },

    {
      title: 'Crowns After Root Canal Treatment',

      description:
        'A tooth that has had root canal therapy may need a crown to protect it from fracture and restore chewing strength.',

      bestFor: [
        'Root canal-treated teeth',
        'Weakened teeth after treatment',
        'Back teeth needing protection',
        'Restored chewing strength',
        'Bite support needs',
      ],

      cta: 'Ask About a Crown After Root Canal',

      href: '/services/restorative-dentistry/dental-crowns',
    },

    {
      title: 'Crowns for Large Cavities or Fillings',

      description:
        'When a cavity or old filling has removed too much tooth structure, a crown may provide stronger support than another filling.',

      bestFor: [
        'Large fillings',
        'Deep cavities',
        'Weak teeth',
        'Worn restorations',
        'Replacement of failing dental work',
      ],

      cta: 'Ask About Crown Treatment',

      href: '/services/restorative-dentistry/dental-crowns',
    },
  ],
},
suitability: {
  eyebrow: 'Dental Crowns for Suitability Assessment',

  heading:
    'Dental Crowns for Patients With Weak, Cracked, Broken, or Heavily Filled Teeth',

  body:
    'A crown may be recommended when a tooth needs full coverage protection. It is often used for teeth that are cracked, broken, weakened by decay, heavily filled, worn down, or treated with root canal therapy.\n\nAt Promenade Dental, Dr. Shriya helps you understand whether a crown is the right option or whether a filling, inlay, onlay, root canal, extraction, or implant replacement may be more appropriate.',

  goodFit: {
    title: 'A Crown May Be Right If',

    items: [
      'You have a cracked or broken tooth',
      'The tooth has a large filling or deep cavity',
      'The tooth feels weak when chewing',
      'You have had root canal therapy on the tooth',
      'The tooth needs stronger protection than a filling can provide',
    ],
  },

  alternative: {
    title: 'Another Treatment May Be Better If',

    items: [
      'The cavity is small and a filling is sufficient',
      'The tooth needs root canal therapy before restoration',
      'The tooth is too damaged to save predictably',
      'A missing tooth may be better replaced with an implant, bridge, or denture',
      'The tooth may be better restored with an inlay or onlay',
    ],
  },

  cta: {
    label: 'Find Out If Crown Treatment Fits Your Tooth',
    href: '/contact',
  },
},
comparison: {
  eyebrow: 'Fillings, Crowns, or Inlays & Onlays?',

  heading:
    'Crowns, Fillings, and Inlays for Different Levels of Tooth Damage',

  body:
    'The right restoration depends on how much tooth structure is damaged and how much support the tooth needs. Fillings are usually used for smaller cavities. Inlays and onlays may support moderate damage. Crowns are used when the tooth needs full coverage protection.',

  matches: [
    {
      title: 'Fillings for Smaller Cavities',

      body:
        'A filling may be recommended when decay is limited and the tooth remains strong enough for a conservative repair.',
    },

    {
      title: 'Inlays and Onlays for Moderate Damage',

      body:
        'An inlay or onlay may be used when a tooth needs more support than a filling but may not require a full crown.',
    },

    {
      title: 'Crowns for Full Tooth Protection',

      body:
        'A crown may be recommended when the tooth is cracked, heavily filled, broken, worn, or too weak for a smaller restoration.',
    },
  ],
},
process: {
  eyebrow: 'Dental Crown Process',

  heading:
  'Dental Crown Treatment Planning for Strength, Fit, and Comfort',
  subtitle:
    'A dental crown is planned around the condition of the tooth, the shape needed for chewing, the way your teeth come together, and how the crown should look in your smile. The goal is to protect the tooth while restoring comfort and function.',

  steps: [
    {
      title: 'Tooth Diagnosis',

      body:
        'Dr. Shriya evaluates the tooth, symptoms, X-rays when needed, existing restorations, cracks, and remaining tooth structure.',
    },

    {
      title: 'Crown Treatment Planning',

      body:
        'The crown is planned based on tooth strength, bite pressure, appearance, gum health, and whether any additional treatment is needed first.',
    },

    {
      title: 'Tooth Preparation and Crown Design',

      body:
        'The tooth is prepared for the crown, and the crown is designed to fit the tooth, bite, and surrounding smile.',
    },

    {
      title: 'Crown Placement and Bite Check',

      body:
        'The crown is placed and checked for fit, appearance, chewing comfort, and bite contact.',
    },
  ],

  cta: {
    label: 'Book a Crown Consultation',
    href: '/contact',
  },
},
maintenance: {
  eyebrow: 'Dental Crown Care & Maintenance',

  heading:
    'Dental Crown Care for Patients Who Want Long-Term Tooth Protection',

  body:
    'A crown protects a damaged tooth, but the tooth and gums around it still need regular care. Good home hygiene, routine exams, and bite monitoring help protect the crown and the natural tooth underneath.',

  cards: [
    {
      title: 'Clean Around the Crown Margin',
      body:
        'Plaque can collect where the crown meets the tooth, so brushing and flossing around the crown remain important.',
    },

    {
      title: 'Avoid Chewing Hard Objects',
      body:
        'Ice, hard candy, pens, and using teeth as tools can damage crowns and natural teeth.',
    },

    {
      title: 'Manage Grinding or Clenching',
      body:
        'If you grind or clench, a night guard may be recommended to help protect the crown and surrounding teeth.',
    },

    {
      title: 'Keep Up With Dental Exams',
      body:
        'Routine visits help check crown fit, gum health, bite comfort, and the tooth underneath the crown.',
    },
  ],
},
benefits: {
  eyebrow: 'Why Choose Promenade Dental',

  heading:
  'Dentist-Led Crown Treatment for Damaged Teeth and Bite Comfort',

  description:
    'A crown is an important restorative treatment. It should be planned around the reason the tooth failed, how much tooth structure remains, and how the tooth functions under chewing pressure.',

  items: [
    {
      title: 'Diagnosis Before Treatment',

      body:
        'Dr. Shriya evaluates the tooth, symptoms, X-rays when needed, cracks, fillings, bite, and gum health before recommending a crown.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6',
      ],
    },

    {
      title: 'Treatment Planned Around Tooth Strength',

      body:
        'Patients are guided on whether a crown is needed or whether a filling, inlay, onlay, root canal, or extraction may be more appropriate.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 24 h20 M18 18 h12 M18 30 h12 M24 14 v20',
      ],
    },

    {
      title: 'Function and Appearance Considered Together',

      body:
        'Crown planning considers chewing comfort, bite fit, tooth shape, and how the restoration looks in the smile.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M12 22 q12 -10 24 0 M18 28 h12 M24 16 v20',
      ],
    },

    {
      title: 'Restorative and Preventive Care in One Office',

      body:
        'Promenade Dental can monitor the crown, surrounding teeth, gums, and bite during ongoing preventive care.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M15 18 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0 M25 22 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0 M12 32 q7-6 14 0 M23 32 q5-5 10 0',
      ],
    },
  ],
},
localArea: {
  eyebrow: 'Dental Crowns Near Fulton Ranch',

  heading:
    'Dental Crowns Near Fulton Ranch and Chandler 85248',

  body:
    'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248. Our office serves patients from Fulton Ranch, Ocotillo, Sun Lakes, South Chandler, and nearby communities.\n\nIf you are looking for a dental crown, tooth cap, cracked tooth repair, crown after root canal, or restorative dentistry near Chandler 85248, Promenade Dental offers crown treatment planned around tooth strength, bite comfort, and long-term function.',

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
  eyebrow: 'Related Restorative Services',

  heading:
  'Related Restorative Treatments for Damaged Teeth',

  intro:
    'A dental crown is often used for damaged or weakened teeth, but some conditions may need another restorative treatment before or instead of a crown.',

  services: [
    {
      title: 'Restorative Dentistry',

      description:
        'Explore restorative treatments for damaged, decayed, infected, weak, or missing teeth.',

      href: '/services/restorative-dentistry',
    },

    {
      title: 'Tooth-Colored Fillings',

      description:
        'Fillings may be used when a cavity is small and the tooth does not need full coverage protection.',

      href: '/services/restorative-dentistry/tooth-colored-fillings',
    },

    {
      title: 'Root Canal Therapy',

      description:
        'Root canal therapy may be needed when infection or inflammation reaches the inside of the tooth.',

      href: '/services/restorative-dentistry/root-canal-therapy',
    },

    {
      title: 'Inlays & Onlays',

      description:
        'Inlays and onlays may be used when a tooth needs more support than a filling but may not require a full crown.',

      href: '/services/restorative-dentistry/inlays-onlays',
    },
  ],
},
faq: {
  eyebrow: 'Frequently Asked Questions',

  heading:
  'Dental Crown Questions About Treatment and Care',

  items: [
    {
      q: 'What is a dental crown?',
      a: 'A dental crown is a restoration that covers the visible part of a damaged or weakened tooth to help protect it, restore shape, and support chewing function.',
    },

    {
      q: 'When do I need a dental crown?',
      a: 'A crown may be needed when a tooth is cracked, broken, heavily filled, weakened by decay, worn down, or treated with root canal therapy.',
    },

    {
      q: 'Is a crown better than a filling?',
      a: 'A crown is not automatically better than a filling. A filling may be enough for smaller cavities, while a crown may be needed when the tooth requires stronger protection.',
    },

    {
      q: 'Do I need a crown after a root canal?',
      a: 'Many root canal-treated teeth, especially back teeth, need crowns because they can be more vulnerable to fracture. Dr. Shriya will evaluate whether a crown is needed for your tooth.',
    },

    {
      q: 'Can a crown fix a cracked tooth?',
      a: 'A crown may help protect a cracked tooth, depending on the location and depth of the crack. Some cracked teeth may need root canal therapy or another treatment.',
    },

    {
      q: 'Can a crowned tooth still get a cavity?',
      a: 'Yes. The natural tooth under and around the crown can still develop decay, especially near the crown margin. Good brushing, flossing, and regular dental visits are important.',
    },

    {
      q: 'How long do dental crowns last?',
      a: 'Crown longevity varies based on material, bite pressure, oral hygiene, grinding habits, diet, and regular dental care.',
    },

    {
      q: 'What happens if my old crown feels loose?',
      a: 'A loose crown should be evaluated quickly. The tooth underneath may be exposed to bacteria, decay, or fracture risk.',
    },

    {
      q: 'How do I know if I need a crown, filling, or onlay?',
      a: 'A dental exam helps determine how much tooth structure remains and whether the tooth needs a filling, inlay, onlay, crown, root canal, or another treatment.',
    },

    {
      q: 'Where is Promenade Dental located?',
      a: 'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248.',
    },
  ],
},
cta: {
 title: 'Schedule a Dental Crown Consultation',
highlight: 'for Damaged Teeth',

  subtitle:
    'Promenade Dental helps patients protect and restore damaged teeth with dental crowns planned around diagnosis, tooth strength, bite comfort, appearance, and long-term oral health.',

  buttonText: 'Book a Crown Consultation',
  buttonHref: '/contact',

  secondaryButtonText: 'Call (480) 802-8188',
  secondaryButtonHref: 'tel:+14808028188',

  image: '/assets/dental-lobby.jpg',
},
},
{
  serviceSlug: 'restorative-dentistry',
  slug: 'dental-bridges',

  name: 'Dental Bridges',

  metaTitle:
    'Dental Bridges in Chandler, AZ | Promenade Dental',

  metaDescription:
    'Dental bridges in Chandler AZ for missing teeth and fixed tooth replacement. Visit Promenade Dental for restorative bridge planning near Fulton Ranch.',

  hero: {
    eyebrow: 'Fixed Tooth Replacement in Fulton Ranch',

    title: 'Dental Bridges for',
    highlight:
      'Missing Teeth and Fixed Tooth Replacement in Chandler',

    description:
      'Promenade Dental helps patients replace missing teeth with dental bridges planned around chewing comfort, smile appearance, bite support, neighboring teeth, gum health, and long-term function.',

    image: '/assets/h-dental-bridges.jpg',

    trustPoints: [
      'Fixed replacement for missing teeth',
      'Restores chewing support and smile appearance',
      'Planned around neighboring teeth and bite function',
      'Alternative to removable partial dentures in selected cases',
      'Located in Fulton Ranch',
      'New Patients Welcome',
    ],

    primaryCTA: {
      label: 'Book a Bridge Consultation',
      href: '/contact',
    },

    secondaryCTA: {
      label: 'Call (480) 802-8188',
      href: 'tel:+14808028188',
    },
  },
  overview: {
  eyebrow: 'Dental Bridges',

  heading:
    'Dental Bridges for Missing Teeth, Chewing Difficulty, and Gaps in the Smile',

  body:
    'A missing tooth can affect more than appearance. It can make chewing harder, change how your teeth meet, allow nearby teeth to shift, and leave a visible gap when you smile or speak. A dental bridge replaces one or more missing teeth with a fixed restoration supported by neighboring teeth or implants when appropriate. Dr. Shriya evaluates the missing tooth area, nearby teeth, gum health, bite pressure, and replacement options before recommending a bridge.',

  features: [
    'Replace one or more missing teeth with a fixed solution',
    'Restore chewing function and bite balance',
    'Help prevent nearby teeth from shifting',
    'Improve smile appearance and speech',
  ],

  image: '/assets/service-dental-bridges.jpg',

  cta: {
    label: 'Start Your Missing Tooth Consultation',
    href: '/contact',
  },
},
whyItMatters: {
  eyebrow: 'Bridge Evaluation',

  heading:
    'Dental Bridge Evaluation for Missing Teeth, Neighboring Teeth, Gum Health, and Bite Support',

  description:
    'A dental bridge depends on the condition of the surrounding mouth. Before recommending a bridge, Dr. Shriya checks the health of the neighboring teeth, the gums, the bite, the missing tooth space, and whether an implant or removable partial denture may be a better option. The evaluation helps determine whether a traditional bridge, implant-supported bridge, partial denture, or dental implant should be considered.',

  items: [
    {
      title: 'Missing Tooth Location',

      body:
        'The position of the missing tooth affects chewing function, smile appearance, and the type of replacement that may be recommended.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M16 14 q8 -4 16 0 q4 6 0 12 q-4 6 -12 10 q-8 -4 -10 -10 q-2 -6 6 -12',
      ],
    },

    {
      title: 'Health of Neighboring Teeth',

      body:
        'A traditional bridge often uses nearby teeth for support, so those teeth need to be healthy enough for treatment planning.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M18 14 h16 v20 h-16 z M20 18 h12 M20 24 h12 M20 30 h10',
      ],
    },

    {
      title: 'Bite and Chewing Pressure',

      body:
        'The bridge must be planned around how your teeth come together during biting and chewing.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 22 h20 M16 30 h16 M18 14 q6 8 12 0 q6 8 12 0',
      ],
    },
  ],
},
features: {
  eyebrow: 'Why Dental Bridges',

  heading:
    'Dental Bridges for Chewing, Smile, and Tooth Stability',

  body:
    'Replacing a missing tooth helps restore more than the visible space. A bridge can improve chewing support, help maintain smile appearance, and reduce the chance of nearby teeth moving into the gap.',

  features: [
    {
      title: 'Restores the Missing Tooth Space',
      body:
        'A bridge fills the gap left by one or more missing teeth with a fixed restoration.',
    },

    {
      title: 'Supports Chewing Comfort',
      body:
        'Replacing a missing tooth can help distribute bite pressure more evenly and improve eating comfort.',
    },

    {
      title: 'Helps Limit Tooth Shifting',
      body:
        'Nearby teeth may move toward an empty space over time. A bridge can help maintain tooth position when properly planned.',
    },
  ],
},
servicesGrid: {
  eyebrow: 'Dental Bridge Treatment Options',

  heading:
    'Dental Bridge Options for One or More Missing Teeth',

  intro:
    'Dental bridges can be planned in different ways depending on the number of missing teeth, the strength of neighboring teeth, gum health, bone support, and long-term treatment goals.',

  services: [
    {
      title: 'Traditional Dental Bridge',

      description:
        'A traditional bridge replaces a missing tooth by using neighboring teeth as support for a fixed restoration.',

      bestFor: [
        'One missing tooth',
        'Fixed replacement',
        'Healthy neighboring teeth',
        'Visible tooth gaps',
      ],

      cta: 'Ask About a Traditional Bridge',

      href: '/services/restorative-dentistry/dental-bridges',
    },

    {
      title: 'Bridge for Multiple Missing Teeth',

      description:
        'A bridge may replace more than one missing tooth when the surrounding teeth or implants can support the restoration.',

      bestFor: [
        'Several missing teeth',
        'Fixed tooth replacement',
        'Chewing support',
        'Smile restoration',
      ],

      cta: 'Ask About Multiple Tooth Replacement',

      href: '/services/restorative-dentistry/dental-bridges',
    },

    {
      title: 'Implant-Supported Bridge',

      description:
        'An implant-supported bridge uses dental implants rather than natural teeth to support replacement teeth when appropriate.',

      bestFor: [
        'Multiple missing teeth',
        'Avoiding support from natural teeth',
        'Implant-based replacement',
        'Stable long-term tooth replacement',
      ],

      cta: 'Ask About Implant-Supported Bridges',

      href: '/services/restorative-dentistry/dental-bridges',
    },
  ],
},
suitability: {
  eyebrow: 'Dental Bridges for Suitability Assessment',

  heading:
    'Dental Bridges for Patients Who Want a Fixed Replacement for Missing Teeth',

  body:
    'A dental bridge may be recommended when one or more teeth are missing and the patient wants a fixed replacement that does not come in and out like a removable denture. The right plan depends on the missing tooth location, supporting teeth, gum health, bone support, and bite.\n\nAt Promenade Dental, Dr. Shriya explains whether a bridge is suitable or whether a dental implant, partial denture, implant-supported bridge, or another option may be a better fit.',

  goodFit: {
    title: 'A Dental Bridge May Be Right If',

    items: [
      'You are missing one or more teeth',
      'You want a fixed replacement option',
      'Nearby teeth can support the bridge',
      'You want to improve chewing and smile appearance',
      'You are not ready for or suitable for an implant in that area',
    ],
  },

  alternative: {
    title: 'Another Option May Be Better If',

    items: [
      'Neighboring teeth are not strong enough',
      'You want to avoid preparing nearby healthy teeth',
      'You are missing several teeth in different areas',
      'You prefer a removable partial denture',
      'A dental implant may provide better long-term support',
    ],
  },

  cta: {
    label: 'Find Out If a Dental Bridge Fits Your Smile',
    href: '/contact',
  },
},
comparison: {
  eyebrow: 'Dental Bridges vs Implants vs Partial Dentures',

  heading:
    'Dental Bridges, Dental Implants, and Partial Dentures for Different Missing Tooth Needs',

  body:
    'Missing teeth can be replaced in different ways. A bridge is fixed and often uses nearby teeth for support. An implant replaces the tooth root and supports a crown or bridge. A partial denture is removable and can replace multiple missing teeth.',

  matches: [
    {
      title: 'Dental Bridge for Fixed Tooth Replacement',

      body:
        'A bridge may be suitable when the patient wants a fixed restoration and the surrounding teeth can support the treatment.',
    },

    {
      title: 'Dental Implant for Independent Tooth Replacement',

      body:
        'An implant may be suitable when bone support and oral health allow a replacement that does not rely on neighboring teeth.',
    },

    {
      title: 'Partial Denture for Removable Tooth Replacement',

      body:
        'A partial denture may be suitable when several teeth are missing or when a removable replacement is preferred.',
    },
  ],
},
process: {
  eyebrow: 'Dental Bridge Process',

  heading:
    'Dental Bridge Planning for Tooth Replacement and Function',

  subtitle:
    'A dental bridge is planned around the missing tooth space, support teeth, bite, gum health, and how the replacement should look and function. The goal is to restore the missing tooth area while helping the bridge feel comfortable and stable.',

  steps: [
    {
      title: 'Missing Tooth Evaluation',

      body:
        'Dr. Shriya evaluates the missing tooth area, nearby teeth, gums, bite, and X-rays when needed.',
    },

    {
      title: 'Replacement Option Review',

      body:
        'You receive a clear explanation of whether a bridge, implant, partial denture, or implant-supported bridge may be suitable.',
    },

    {
      title: 'Bridge Design and Tooth Preparation',

      body:
        'If a bridge is recommended, the supporting teeth or implants are planned and the bridge is designed for fit, function, and appearance.',
    },

    {
      title: 'Bridge Placement and Bite Check',

      body:
        'The bridge is placed and checked for comfort, chewing function, bite contact, and appearance.',
    },
  ],

  cta: {
    label: 'Book a Dental Bridge Consultation',
    href: '/contact',
  },
},
maintenance: {
  eyebrow: 'Dental Bridge Care & Maintenance',

  heading:
    'Dental Bridge Care for Patients Who Want Long-Term Tooth Replacement Stability',

  body:
    'A dental bridge needs regular care to protect the supporting teeth, gums, and replacement tooth area. Good home hygiene and routine dental visits help reduce the risk of decay, gum inflammation, and bridge complications.',

  cards: [
    {
      title: 'Clean Under and Around the Bridge',
      body:
        'Food and plaque can collect around a bridge. Special flossing tools or cleaning methods may be recommended.',
    },

    {
      title: 'Protect the Supporting Teeth',
      body:
        'The teeth supporting the bridge must stay healthy because they help hold the restoration in place.',
    },

    {
      title: 'Avoid Heavy Bite Stress',
      body:
        'Chewing hard objects or grinding can place extra pressure on a bridge and supporting teeth.',
    },

    {
      title: 'Keep Up With Dental Exams',
      body:
        'Routine visits help check bridge fit, gum health, bite comfort, and the condition of supporting teeth.',
    },
  ],
},
benefits: {
  eyebrow: 'Why Choose Promenade Dental',

  heading:
    'Dentist-Led Bridge Planning for Missing Teeth and Chewing Support',

  description:
    'Replacing a missing tooth is an important decision. The best option depends on the teeth, gums, bite, bone support, and the patient’s preference for fixed or removable treatment.',

  items: [
    {
      title: 'Diagnosis Before Treatment',

      body:
        'Dr. Shriya evaluates the missing tooth space, neighboring teeth, gums, bite, and X-rays when needed before recommending a bridge.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6',
      ],
    },

    {
      title: 'Replacement Options Explained Clearly',

      body:
        'Patients are guided through bridges, implants, implant-supported bridges, and partial dentures when relevant.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 24 h20 M18 18 h12 M18 30 h12 M24 14 v20',
      ],
    },

    {
      title: 'Function and Appearance Planned Together',

      body:
        'Bridge treatment considers chewing comfort, bite support, tooth shape, and smile appearance.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M12 22 q12 -10 24 0 M18 28 h12 M24 16 v20',
      ],
    },

    {
      title: 'Restorative and Implant Care in One Office',

      body:
        'Promenade Dental can connect bridge planning with restorative dentistry, implant consultations, dentures, crowns, and preventive care.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M15 18 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0 M25 22 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0 M12 32 q7-6 14 0 M23 32 q5-5 10 0',
      ],
    },
  ],
},
localArea: {
  eyebrow: 'Dental Bridges Near Fulton Ranch',

  heading:
    'Dental Bridges Near Fulton Ranch and Chandler 85248',

  body:
    'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248. Our office serves patients from Fulton Ranch, Ocotillo, Sun Lakes, South Chandler, and nearby communities.\n\nIf you are looking for a dental bridge, fixed tooth replacement, missing tooth replacement, or restorative dentistry near Chandler 85248, Promenade Dental offers bridge treatment planned around tooth support, gum health, bite comfort, and long-term function.',

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
  eyebrow: 'Related Restorative Services',

  heading:
    'Related Treatments for Missing Teeth and Replacement',

  intro:
    'Dental bridges are one option for missing tooth replacement. Some patients may also need crowns, dentures, dental implants, or broader restorative planning depending on their oral health.',

  services: [
    {
      title: 'Restorative Dentistry',

      description:
        'Explore restorative treatments for damaged, decayed, infected, weak, worn, or missing teeth.',

      href: '/services/restorative-dentistry',
    },

    {
      title: 'Dental Crowns',

      description:
        'Crowns may be used to support a traditional bridge or protect damaged teeth.',

      href: '/services/restorative-dentistry/dental-crowns',
    },

    {
      title: 'Dentures & Partials',

      description:
        'Dentures and partials may help replace multiple missing teeth with removable appliances.',

      href: '/services/restorative-dentistry/dentures-partials',
    },

    {
      title: 'Dental Implants',

      description:
        'Dental implants may replace missing teeth or support a bridge when oral health and bone support are suitable.',

      href: '/services/restorative-dentistry/dental-implants',
    },
  ],
},
faq: {
  eyebrow: 'Frequently Asked Questions',

  heading:
    'Dental Bridge Questions About Missing Teeth',

  items: [
    {
      q: 'What is a dental bridge?',
      a: 'A dental bridge is a fixed restoration used to replace one or more missing teeth. It fills the missing tooth space and is supported by neighboring teeth or implants when appropriate.',
    },

    {
      q: 'When do I need a dental bridge?',
      a: 'A bridge may be considered when one or more teeth are missing and the patient wants a fixed replacement option to restore chewing support and smile appearance.',
    },

    {
      q: 'Is a dental bridge better than an implant?',
      a: 'A bridge and an implant are different solutions for missing teeth. A bridge uses neighboring teeth for support, while an implant replaces the tooth root. The best option depends on bone support, tooth condition, gum health, bite, and treatment goals.',
    },

    {
      q: 'Is a dental bridge removable?',
      a: 'A traditional dental bridge is fixed in place and does not come in and out like a removable partial denture.',
    },

    {
      q: 'Can a bridge replace more than one missing tooth?',
      a: 'Yes. A bridge may replace more than one missing tooth when the supporting teeth or implants can safely support the restoration.',
    },

    {
      q: 'Do dental bridges look natural?',
      a: 'Dental bridges are designed to restore the missing tooth area and blend with the surrounding teeth as much as possible.',
    },

    {
      q: 'How do I clean under a dental bridge?',
      a: 'Cleaning under a bridge often requires special floss, floss threaders, or other cleaning tools. Your dental team can show you how to clean around the bridge properly.',
    },

    {
      q: 'Can teeth shift after losing a tooth?',
      a: 'Yes. Nearby teeth may shift toward an empty space over time. Replacing a missing tooth can help maintain tooth position and bite support.',
    },

    {
      q: 'How do I know if I need a bridge, implant, or denture?',
      a: 'A consultation helps determine the best option based on the number of missing teeth, nearby tooth health, gum health, bone support, bite, and your preference for fixed or removable treatment.',
    },

    {
      q: 'Where is Promenade Dental located?',
      a: 'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248.',
    },
  ],
},
cta: {
  title: 'Schedule a Dental Bridge Consultation',
  highlight: 'for Missing Teeth',

  subtitle:
    'Promenade Dental helps patients replace missing teeth with dental bridges planned around chewing comfort, smile appearance, neighboring teeth, gum health, and long-term function.',

  buttonText: 'Book a Bridge Consultation',
  buttonHref: '/contact',

  secondaryButtonText: 'Call (480) 802-8188',
  secondaryButtonHref: 'tel:+14808028188',

  image: '/assets/dental-lobby.jpg',
},
},

{
  serviceSlug: 'restorative-dentistry',
  slug: 'root-canals',

  name: 'Root Canal Therapy',

  metaTitle:
    'Root Canal Therapy in Chandler, AZ | Promenade Dental',

  metaDescription:
    'Root canal therapy in Chandler AZ for infected teeth, severe tooth pain, deep decay, and dental abscess concerns. Visit Promenade Dental near Fulton Ranch.',

  hero: {
    eyebrow: 'Tooth Infection Treatment in Fulton Ranch',

    title: 'Root Canal Therapy for',
    highlight:
      'Tooth Infection, Severe Tooth Pain, and Deep Decay in Chandler',

    description:
      'Promenade Dental helps patients treat infected or inflamed teeth with root canal therapy planned around pain relief, tooth preservation, infection control, crown protection, and long-term oral health.',

    image: '/assets/h-root-canal.jpg',

    trustPoints: [
      'Treatment for infected or inflamed teeth',
      'Helps save natural teeth when possible',
      'Planned around comfort and diagnosis',
      'May be followed by crown protection',
      'Located in Fulton Ranch',
      'New Patients Welcome',
    ],

    primaryCTA: {
      label: 'Book a Root Canal Evaluation',
      href: '/contact',
    },

    secondaryCTA: {
      label: 'Call (480) 802-8188',
      href: 'tel:+14808028188',
    },
  },
  overview: {
  eyebrow: 'Root Canal Therapy',

  heading:
    'Root Canal Therapy for Tooth Pain, Tooth Infection, and Lingering Sensitivity',

  body:
    'Severe tooth pain, lingering sensitivity, swelling, pressure when chewing, or deep decay can be signs that the inside of a tooth is inflamed or infected. When the nerve tissue inside the tooth is affected, a regular filling may not be enough to solve the problem. Root canal therapy removes infected or inflamed tissue from inside the tooth, cleans and seals the root canal space, and helps preserve the natural tooth when it can be saved. Dr. Shriya evaluates your symptoms, X-rays, tooth structure, gum condition, and restoration needs before recommending treatment.',

  features: [
    'Removes infected or inflamed tissue from inside the tooth',
    'Helps preserve natural teeth when possible',
    'Addresses severe tooth pain and lingering sensitivity',
    'Planned around long-term tooth restoration and function',
  ],

  image: '/assets/service-root-canals.jpg',

  cta: {
    label: 'Schedule a Tooth Pain Evaluation',
    href: '/contact',
  },
},
whyItMatters: {
  eyebrow: 'Root Canal Evaluation',

  heading:
    'Root Canal Evaluation for Tooth Infection, Deep Cavities, Swelling, and Bite Pain',

  description:
    'Not every toothache needs a root canal, but certain symptoms need careful evaluation. Deep decay, cracks, trauma, old fillings, repeated dental work, or infection can affect the inner pulp of the tooth. A root canal evaluation helps determine whether the tooth can be saved, whether infection is present, whether a crown may be needed afterward, and whether extraction or another treatment may be more appropriate.',

  items: [
    {
      title: 'Tooth Pain and Lingering Sensitivity',

      body:
        'Pain that lingers after cold, heat, or chewing may suggest deeper inflammation inside the tooth.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M24 12 q-8 6 -8 16 q0 10 8 16 q8 -6 8 -16 q0 -10 -8 -16',
      ],
    },

    {
      title: 'Swelling or Dental Abscess',

      body:
        'Swelling, pus, gum tenderness, or pressure may indicate infection that needs prompt dental evaluation.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M16 18 q8 -8 16 0 q8 8 0 16 q-8 8 -16 0 q-8 -8 0 -16',
      ],
    },

    {
      title: 'Tooth Structure and Crown Needs',

      body:
        'After root canal therapy, some teeth may need a crown to protect the remaining structure from fracture.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M16 16 h16 v8 h-16 z M18 24 h12 v10 h-12 z',
      ],
    },
  ],
},
features: {
  eyebrow: 'Why Root Canal Therapy',

  heading:
    'Root Canal Therapy for Saving an Infected Tooth Instead of Removing It',

  body:
    'When the inside of a tooth becomes infected or inflamed, the tooth may not heal on its own. Root canal therapy is designed to treat the infection inside the tooth and preserve the natural tooth when possible.',

  features: [
    {
      title: 'Treats Infection Inside the Tooth',

      body:
        'Root canal therapy removes inflamed or infected pulp from inside the tooth and cleans the root canal space.',
    },

    {
      title: 'Helps Relieve Tooth Pain',

      body:
        'When pain is caused by infection or inflammation inside the tooth, root canal therapy may help address the source of the problem.',
    },

    {
      title: 'Helps Preserve the Natural Tooth',

      body:
        'Saving the natural tooth can help maintain chewing function, bite support, and tooth position.',
    },
  ],
},
servicesGrid: {
  eyebrow: 'Root Canal Treatment Situations',

  heading:
  'Root Canal Treatment for Tooth Infection and Deep Decay',

  intro:
    'Root canal therapy may be recommended when the inner pulp of the tooth is damaged, inflamed, or infected. The cause may be deep decay, cracks, trauma, or repeated dental work on the same tooth.',

  services: [
    {
      title: 'Root Canal for Deep Tooth Decay',

      description:
        'When decay reaches the inside of the tooth, a filling alone may not solve the infection or inflammation. Root canal therapy may be needed before the tooth is restored.',

      bestFor: [
        'Deep cavities',
        'Lingering sensitivity',
        'Severe tooth pain',
        'Decay near the nerve',
      ],

      cta: 'Ask About Deep Decay Treatment',

      href: '/services/restorative-dentistry/root-canals',
    },

    {
      title: 'Root Canal for Dental Abscess or Infection',

      description:
        'A dental abscess may occur when infection spreads from inside the tooth to the surrounding tissues. Root canal therapy may help treat the infected tooth when it can be saved.',

      bestFor: [
        'Swelling',
        'Gum boil',
        'Pus',
        'Pressure pain',
        'Infected tooth symptoms',
      ],

      cta: 'Ask About Tooth Infection Treatment',

      href: '/services/restorative-dentistry/root-canals',
    },

    {
      title: 'Root Canal for Cracked or Injured Teeth',

      description:
        'A crack, fracture, or injury can allow bacteria to reach the inner tooth tissue. Root canal therapy may be needed if the pulp becomes inflamed or infected.',

      bestFor: [
        'Cracked teeth',
        'Trauma',
        'Pain when chewing',
        'Tooth injury',
        'Deep fracture symptoms',
      ],

      cta: 'Ask About Cracked Tooth Evaluation',

      href: '/services/restorative-dentistry/root-canals',
    },
  ],
},
suitability: {
  eyebrow: 'Root Canal Therapy Suitability Assessment',

  heading:
    'Root Canal Therapy for Patients With Infected Teeth That May Still Be Saved',

  body:
    'Root canal therapy may be recommended when the tooth is infected or inflamed but still has enough structure to be restored. The goal is to treat the inside of the tooth and preserve it when possible.\n\nAt Promenade Dental, Dr. Shriya helps you understand whether the tooth can be saved with root canal therapy or whether extraction, crown treatment, or another option may be more appropriate.',

  goodFit: {
    title: 'Root Canal Therapy May Be Right If',

    items: [
      'You have severe or lingering tooth pain',
      'You have deep decay near the nerve',
      'You have swelling or signs of infection',
      'You feel pain when chewing or biting',
      'The tooth has enough structure to restore after treatment',
    ],
  },

  alternative: {
    title: 'Another Treatment May Be Better If',

    items: [
      'The tooth is too broken to restore',
      'The crack extends too far below the gum line',
      'The tooth has poor long-term support',
      'Extraction and replacement may be more predictable',
      'The symptoms are caused by gum, bite, or sinus-related issues instead of the tooth nerve',
    ],
  },

  cta: {
    label: 'Find Out If Your Tooth Can Be Saved',
    href: '/contact',
  },
},
comparison: {
  eyebrow: 'Root Canal Therapy vs Tooth Extraction',

  heading:
    'Root Canal Therapy or Tooth Extraction for Severe Tooth Pain and Infection',

  body:
    'When a tooth is badly infected or damaged, patients often wonder whether the tooth should be saved or removed. Root canal therapy may help preserve the natural tooth when the tooth can still be restored. Extraction may be needed when the tooth is too damaged, unstable, or infected to save predictably.',

  matches: [
    {
      title: 'Root Canal Therapy for Saving the Tooth',

      body:
        'Root canal therapy may be recommended when infection is inside the tooth but the tooth can still be cleaned, sealed, and restored.',
    },

    {
      title: 'Tooth Extraction When the Tooth Cannot Be Restored',

      body:
        'Extraction may be recommended when the tooth is severely broken, has poor support, or cannot be predictably restored.',
    },

    {
      title: 'Tooth Replacement After Extraction',

      body:
        'If a tooth is removed, replacement options such as a bridge, denture, or dental implant may be discussed to restore function and prevent shifting.',
    },
  ],
},
educationSection: {
  eyebrow: 'Crown Protection After Root Canal',

  heading:
    'Dental Crowns After Root Canal Therapy for Weak or Back Teeth',

  body:
    'After root canal therapy, some teeth need a dental crown for protection. This is especially common for back teeth because they handle more chewing pressure. A crown can help protect the remaining tooth structure and restore chewing function after the root canal is completed.',

  supportingText:
    'Dr. Shriya evaluates the tooth after treatment to determine whether a filling or crown is needed for long-term protection.',

  image:
    '/assets/dental-crowns.jpg',

  imageAlt:
    'Dental crown restoration placed on a tooth after root canal therapy for protection and function',

  cta: {
    label: 'Ask About Crown Protection After Root Canal',
    href: '/contact',
  },
},
process: {
  eyebrow: 'Root Canal Therapy Process',

  heading:
  'Root Canal Treatment for Infection Removal and Restoration',

  subtitle:
    'Root canal therapy is planned around diagnosis, tooth condition, symptoms, and the final restoration needed to protect the tooth. The goal is to treat the infection or inflammation inside the tooth and restore the tooth for normal function.',

  steps: [
    {
      title: 'Tooth Diagnosis and X-Ray Review',

      body:
        'Dr. Shriya evaluates your symptoms, tooth structure, X-rays when needed, gum condition, and signs of infection.',
    },

    {
      title: 'Infected or Inflamed Tissue Removal',

      body:
        'The inflamed or infected pulp inside the tooth is removed, and the canal space is cleaned and shaped.',
    },

    {
      title: 'Root Canal Sealing',

      body:
        'The cleaned canal space is sealed to help reduce the risk of reinfection.',
    },

    {
      title: 'Final Tooth Restoration',

      body:
        'The tooth is restored with a filling or crown depending on tooth strength, location, and chewing pressure.',
    },
  ],

  cta: {
    label: 'Book a Root Canal Evaluation',
    href: '/contact',
  },
},
maintenance: {
  eyebrow: 'Root Canal Recovery & Maintenance',

  heading:
    'Root Canal Aftercare for Tooth Comfort, Crown Protection, and Long-Term Function',

  body:
    'After root canal therapy, the treated tooth needs proper restoration and ongoing care. Good oral hygiene, bite protection, and routine dental visits help support long-term comfort and function.',

  cards: [
    {
      title: 'Complete the Final Restoration',
      body:
        'A root canal-treated tooth may need a filling or crown to protect it after treatment.',
    },

    {
      title: 'Avoid Heavy Chewing Until Restored',
      body:
        'The tooth may need protection from strong chewing forces until the final restoration is completed.',
    },

    {
      title: 'Keep the Area Clean',
      body:
        'Brushing, flossing, and routine cleanings help protect the tooth and surrounding gums.',
    },

    {
      title: 'Monitor Any New Symptoms',
      body:
        'Pain, swelling, bite changes, or crown problems should be checked by the dentist.',
    },
  ],
},
benefits: {
  eyebrow: 'Why Choose Promenade Dental',

  heading:
  'Dentist-Led Root Canal Therapy for Infection and Tooth Preservation',

  description:
    'Root canal therapy requires careful diagnosis and restoration planning. The tooth must be evaluated for infection, structure, bite pressure, gum health, and whether it can be restored predictably.',

  items: [
    {
      title: 'Diagnosis Before Treatment',

      body:
        'Dr. Shriya evaluates symptoms, X-rays when needed, tooth structure, gums, and bite before recommending root canal therapy.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6',
      ],
    },

    {
      title: 'Treatment Focused on Saving the Tooth',

      body:
        'Root canal therapy is considered when the natural tooth can be preserved and restored.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M20 18 q4 -6 8 0 q4 6 0 12 q-4 6 -8 0 q-4 -6 0 -12',
      ],
    },

    {
      title: 'Crown and Restoration Planning',

      body:
        'Promenade Dental evaluates whether the tooth needs a filling or crown after root canal therapy.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M16 16 h16 v8 h-16 z M18 24 h12 v10 h-12 z',
      ],
    },

    {
      title: 'Restorative and Emergency Care in One Office',

      body:
        'Promenade Dental can connect root canal therapy with crowns, fillings, extractions, emergency dentistry, and long-term preventive care.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M15 18 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0 M25 22 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0 M12 32 q7-6 14 0 M23 32 q5-5 10 0',
      ],
    },
  ],
},
localArea: {
  eyebrow: 'Root Canal Therapy Near Fulton Ranch',

  heading:
    'Root Canal Therapy Near Fulton Ranch and Chandler 85248',

  body:
    'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248. Our office serves patients from Fulton Ranch, Ocotillo, Sun Lakes, South Chandler, and nearby communities.\n\nIf you are looking for root canal therapy, tooth infection treatment, severe tooth pain care, dental abscess evaluation, or restorative dentistry near Chandler 85248, Promenade Dental offers root canal evaluations planned around diagnosis, comfort, tooth preservation, and long-term function.',

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
  eyebrow: 'Related Restorative Services',

  heading:
  'Related Treatments for Tooth Infection and Restoration',

  intro:
    'Root canal therapy often connects with other restorative or emergency treatments. The right next step depends on whether the tooth can be saved, restored, or needs replacement.',

  services: [
    {
      title: 'Restorative Dentistry',

      description:
        'Explore restorative treatments for damaged, decayed, infected, weak, worn, or missing teeth.',

      href: '/services/restorative-dentistry',
    },

    {
      title: 'Dental Crowns',

      description:
        'Crowns may protect teeth after root canal therapy or restore cracked, weak, or broken teeth.',

      href: '/services/restorative-dentistry/dental-crowns',
    },

    {
      title: 'Tooth Extractions',

      description:
        'Extraction may be considered when a tooth cannot be predictably saved or restored.',

      href: '/services/restorative-dentistry/tooth-extractions',
    },

    {
      title: 'Emergency Dentistry',

      description:
        'Emergency dental care may be needed for severe tooth pain, swelling, broken teeth, or infection symptoms.',

      href: '/services/emergency-dentistry',
    },
  ],
},
faq: {
  eyebrow: 'Frequently Asked Questions',

  heading:
  'Root Canal Questions About Pain, Infection, and Treatment',

  items: [
    {
      q: 'What is root canal therapy?',
      a: 'Root canal therapy is a dental treatment that removes inflamed or infected tissue from inside a tooth, cleans and seals the canal space, and helps preserve the natural tooth when possible.',
    },

    {
      q: 'When do I need a root canal?',
      a: 'A root canal may be needed when the inside of a tooth becomes infected or inflamed due to deep decay, cracks, trauma, repeated dental work, or a dental abscess.',
    },

    {
      q: 'What symptoms may mean I need a root canal?',
      a: 'Symptoms may include severe tooth pain, lingering sensitivity to hot or cold, swelling, pain when chewing, a gum boil, or deep decay. A dental exam is needed to confirm the cause.',
    },

    {
      q: 'Is a root canal better than removing the tooth?',
      a: 'Root canal therapy may help save the natural tooth when it can still be restored. Extraction may be needed if the tooth is too damaged or unstable to save predictably.',
    },

    {
      q: 'Will I need a crown after a root canal?',
      a: 'Some root canal-treated teeth need crowns, especially back teeth that handle heavier chewing pressure. Dr. Shriya will evaluate whether a crown is needed.',
    },

    {
      q: 'Can a root canal treat a dental abscess?',
      a: 'Root canal therapy may help treat an abscessed tooth when the tooth can be saved. The dentist must evaluate the infection, tooth structure, and surrounding tissues.',
    },

    {
      q: 'Can tooth pain go away without treatment?',
      a: 'Tooth pain may come and go, but infection or deep decay can still remain. Pain relief does not always mean the tooth is healthy. A dental evaluation is important.',
    },

    {
      q: 'What happens if I delay root canal treatment?',
      a: 'Delaying treatment may allow infection or damage to worsen, which can increase the chance of swelling, severe pain, tooth loss, or the need for extraction.',
    },

    {
      q: 'How do I know if I need a root canal or filling?',
      a: 'A filling may repair a smaller cavity. Root canal therapy may be needed when decay, infection, or inflammation reaches the inside of the tooth. A dental exam and X-rays help determine the right treatment.',
    },

    {
      q: 'Where is Promenade Dental located?',
      a: 'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248.',
    },
  ],
},
cta: {
  title: 'Schedule a Root Canal Evaluation',
highlight: 'for Infected Teeth',

  subtitle:
    'Promenade Dental helps patients evaluate and treat infected or inflamed teeth with root canal therapy planned around diagnosis, comfort, tooth preservation, and final restoration needs.',

  buttonText: 'Book a Root Canal Evaluation',
  buttonHref: '/contact',

  secondaryButtonText: 'Call (480) 802-8188',
  secondaryButtonHref: 'tel:+14808028188',

  image: '/assets/dental-lobby.jpg',
},
},
{
  serviceSlug: 'restorative-dentistry',
  slug: 'tooth-extractions',

  name: 'Tooth Extractions',

  metaTitle:
    'Tooth Extraction in Chandler, AZ | Promenade Dental',

  metaDescription:
    'Tooth extractions in Chandler AZ for severely damaged, infected, broken, or non-restorable teeth. Visit Promenade Dental near Fulton Ranch.',

  hero: {
    eyebrow: 'Tooth Removal in Fulton Ranch',

    title: 'Tooth Extractions for',

    highlight:
      'Severely Damaged, Infected, Broken, or Non-Restorable Teeth in Chandler',

    description:
      'Promenade Dental helps patients evaluate and remove teeth that cannot be predictably saved, with extraction planning focused on comfort, diagnosis, infection control, healing, and future tooth replacement options when needed.',

    image: '/assets/h-tooth-extraction.jpg',

    trustPoints: [
      'Evaluation before extraction',
      'Treatment for non-restorable teeth',
      'Replacement options discussed when needed',
      'Planned around comfort and healing',
      'Located in Fulton Ranch',
      'New Patients Welcome',
    ],

    primaryCTA: {
      label: 'Book a Tooth Extraction Evaluation',
      href: '/contact',
    },

    secondaryCTA: {
      label: 'Call (480) 802-8188',
      href: 'tel:+14808028188',
    },
  },
  overview: {
  eyebrow: 'Tooth Extractions',

  heading:
    'Tooth Extractions for Teeth That Cannot Be Saved With a Filling, Crown, or Root Canal',

  body:
    'The goal of dental care is to save natural teeth whenever possible. But sometimes a tooth is too damaged, infected, loose, cracked, or decayed to be restored safely or predictably. A tooth extraction may be recommended when keeping the tooth could lead to more pain, infection, swelling, or damage to nearby teeth and gums. Dr. Shriya evaluates the tooth, symptoms, X-rays when needed, gum support, infection risk, and replacement options before recommending removal.',

  features: [
    'Recommended when a tooth cannot be predictably restored',
    'Helps address severe damage, infection, or advanced decay',
    'May reduce the risk of ongoing pain and swelling',
    'Includes discussion of future tooth replacement options when needed',
  ],

  image: '/assets/service-tooth-extractions.jpg',

  cta: {
    label: 'Schedule an Extraction Evaluation',
    href: '/contact',
  },
},
whyItMatters: {
  eyebrow: 'Tooth Extraction Evaluation',

  heading:
    'Tooth Extraction Evaluation for Severe Decay, Infection, Cracks, and Tooth Mobility',

  description:
    'Not every painful tooth needs to be removed. Some teeth can be repaired with a filling, crown, root canal, or other restorative treatment. An extraction evaluation helps determine whether the tooth can still be saved or whether removal is the safer long-term option. Dr. Shriya checks the amount of remaining tooth structure, the depth of decay, infection signs, cracks or fractures, gum and bone support, tooth mobility, and how the tooth affects your bite and nearby teeth.',

  items: [
    {
      title: 'Tooth Structure',

      body:
        'A tooth may need extraction if too much structure is missing for a filling, crown, or other restoration to hold predictably.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M16 14 h16 v20 h-16 z M20 18 h8 M20 24 h8 M20 30 h6',
      ],
    },

    {
      title: 'Infection and Swelling',

      body:
        'An infected tooth may need root canal therapy or extraction depending on whether the tooth can still be restored.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M16 18 q8 -8 16 0 q8 8 0 16 q-8 8 -16 0 q-8 -8 0 -16',
      ],
    },

    {
      title: 'Gum and Bone Support',

      body:
        'A loose tooth or tooth with poor support may not have a predictable long-term restorative option.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 30 h20 M18 14 v12 M24 14 v12 M16 22 h10',
      ],
    },
  ],

  cta: {
    label: 'Find Out If the Tooth Can Be Saved',
    href: '/contact',
  },
},
features: {
  eyebrow: 'Why Tooth Extraction May Be Needed',

  heading:
    'Tooth Removal for Dental Problems That May Worsen if Left Untreated',

  body:
    'A severely damaged or infected tooth can affect surrounding teeth, gums, chewing comfort, and overall oral health. Extraction may be recommended when the tooth cannot be restored in a way that is stable, comfortable, or safe.',

  features: [
    {
      title: 'Removes a Non-Restorable Tooth',

      body:
        'If a tooth is broken, decayed, or weakened beyond repair, extraction may prevent ongoing pain or repeated failed treatment.',
    },

    {
      title: 'Helps Address Infection Risk',

      body:
        'When infection cannot be resolved by saving the tooth, removal may be part of controlling the dental problem.',
    },

    {
      title: 'Creates Space for Replacement Planning',

      body:
        'After extraction, replacement options such as a bridge, denture, or implant can be discussed when appropriate.',
    },
  ],
},
servicesGrid: {
  eyebrow: 'Tooth Extraction Treatment Situations',

  heading:
  'Tooth Extractions for Damaged, Infected, and Loose Teeth',

  intro:
    'Tooth extraction may be considered for different dental conditions. The reason for removal affects the treatment plan, healing expectations, and whether tooth replacement should be discussed.',

  services: [
    {
      title: 'Extraction for Severe Tooth Decay',

      description:
        'When decay destroys too much tooth structure or reaches a point where the tooth cannot be restored predictably, extraction may be recommended.',

      bestFor: [
        'Large cavities',
        'Non-restorable decay',
        'Deep tooth damage',
        'Repeated tooth breakdown',
      ],

      cta: 'Ask About Severe Decay Treatment',

      href: '/services/restorative-dentistry/tooth-extractions',
    },

    {
      title: 'Extraction for Broken or Fractured Teeth',

      description:
        'A broken tooth may need extraction if the fracture extends too deeply or leaves too little healthy structure for restoration.',

      bestFor: [
        'Broken teeth',
        'Fractured teeth',
        'Cracked roots',
        'Tooth damage below the gum line',
      ],

      cta: 'Ask About Broken Tooth Evaluation',

      href: '/services/restorative-dentistry/tooth-extractions',
    },

    {
      title: 'Extraction for Infected Teeth That Cannot Be Saved',

      description:
        'An infected tooth may sometimes be treated with root canal therapy. If the tooth cannot be restored or the infection is not manageable with tooth-saving treatment, extraction may be considered.',

      bestFor: [
        'Dental abscess',
        'Swelling',
        'Infected tooth',
        'Severe tooth pain',
        'Non-restorable tooth infection',
      ],

      cta: 'Ask About Tooth Infection Treatment',

      href: '/services/restorative-dentistry/tooth-extractions',
    },

    {
      title: 'Extraction for Loose Teeth With Poor Support',

      description:
        'A tooth may become loose because of advanced gum disease, bone loss, trauma, or other structural problems. If support is too poor, extraction may be needed.',

      bestFor: [
        'Loose teeth',
        'Poor gum support',
        'Advanced periodontal damage',
        'Unstable teeth',
      ],

      cta: 'Ask About Loose Tooth Evaluation',

      href: '/services/restorative-dentistry/tooth-extractions',
    },
  ],
},
suitability: {
  eyebrow: 'Tooth Extraction Suitability Assessment',

  heading:
    'Tooth Extraction for Patients With Teeth That Are Too Damaged or Unstable to Restore',

  body:
    'Tooth extraction is usually considered after the tooth has been evaluated for possible repair. If the tooth can be saved predictably, restorative treatment may be recommended. If it cannot be saved, removal may be the better long-term option.\n\nAt Promenade Dental, Dr. Shriya explains whether extraction is necessary and what options may be available after the tooth is removed.',

  goodFit: {
    title: 'Extraction May Be Needed If',

    items: [
      'The tooth is severely broken or decayed',
      'The tooth cannot support a crown or filling',
      'The tooth is infected and cannot be saved predictably',
      'The tooth is loose with poor gum or bone support',
      'The crack or fracture extends too deeply',
    ],
  },

  alternative: {
    title: 'Another Treatment May Be Possible If',

    items: [
      'The tooth can be repaired with a filling',
      'The tooth can be protected with a crown',
      'Root canal therapy can treat the infection',
      'The tooth has enough structure to restore',
      'The gum and bone support are stable',
    ],
  },

  cta: {
    label: 'Find Out Whether Extraction Is Necessary',
    href: '/contact',
  },
},
comparison: {
  eyebrow: 'Tooth Extraction vs Root Canal vs Crown',

  heading:
    'Tooth Extraction, Root Canal Therapy, or Dental Crown for Tooth Damage',

  body:
    'A painful or damaged tooth does not always need extraction. The right treatment depends on the cause of the problem and whether the tooth can still be restored.',

  matches: [
    {
      title: 'Dental Crown for Weak or Cracked Teeth',

      body:
        'A crown may be recommended when a tooth is weak, cracked, or heavily filled but still has enough structure to protect.',
    },

    {
      title: 'Root Canal Therapy for Infected Teeth That Can Be Saved',

      body:
        'Root canal therapy may be recommended when infection is inside the tooth but the tooth can still be cleaned, sealed, and restored.',
    },

    {
      title: 'Tooth Extraction for Teeth That Cannot Be Restored',

      body:
        'Extraction may be recommended when the tooth is too damaged, unstable, or infected to save predictably.',
    },
  ],
},
solutionsGrid: {
  eyebrow: 'Tooth Replacement After Extraction',

  heading:
  'Tooth Replacement Options After Extraction',

  body:
    'After a tooth is removed, the empty space may affect chewing, smile appearance, and tooth position. Not every extracted tooth needs immediate replacement, but many patients benefit from understanding their options before the tooth is removed. Promenade Dental can discuss replacement options such as dental bridges, dentures, partial dentures, dental implants, or implant-supported restorations based on your oral health and goals.',

  cards: [
    {
      title: 'Dental Bridge After Extraction',

      subtitle: 'Fixed Tooth Replacement',

      body:
        'A bridge can replace a missing tooth with a fixed restoration supported by nearby teeth or implants when appropriate.',

      image: '/assets/dental-bridge.jpg',
    },

    {
      title: 'Partial Denture After Extraction',

      subtitle: 'Removable Tooth Replacement',

      body:
        'A partial denture may replace one or more missing teeth with a removable appliance.',

      image: '/assets/dentures.webp',
    },

    {
      title: 'Dental Implant After Extraction',

      subtitle: 'Long-Term Tooth Replacement',

      body:
        'A dental implant may be considered when bone support, healing, and oral health are suitable for implant treatment.',

      image: '/assets/dental-implants.png',
    },
  ],

  cta: {
    label: 'Discuss Tooth Replacement Options',
    href: '/contact',
  },
},
process: {
  eyebrow: 'Tooth Extraction Process',

  heading:
    'Tooth Extraction Planning for Comfort, Healing, and Replacement',

  subtitle:
    'A tooth extraction is planned around the condition of the tooth, surrounding bone and gums, symptoms, medical history, and future replacement needs. The goal is to remove the tooth as safely and comfortably as possible while helping you understand what happens next.',

  steps: [
    {
      title: 'Tooth Diagnosis and X-Ray Review',

      body:
        'Dr. Shriya evaluates the tooth, symptoms, gum support, surrounding teeth, and X-rays when needed.',
    },

    {
      title: 'Treatment Options Discussion',

      body:
        'You receive a clear explanation of whether the tooth can be saved or whether extraction is recommended.',
    },

    {
      title: 'Tooth Removal and Site Care',

      body:
        'The tooth is removed with attention to comfort, safety, and care of the extraction site.',
    },

    {
      title: 'Healing and Replacement Planning',

      body:
        'After extraction, healing instructions and replacement options are discussed when appropriate.',
    },
  ],

  cta: {
    label: 'Book a Tooth Extraction Evaluation',
    href: '/contact',
  },
},
maintenance: {
  eyebrow: 'Tooth Extraction Aftercare',

  heading:
    'Tooth Extraction Aftercare for Healing, Comfort, and Infection Prevention',

  body:
    'Proper aftercare helps support healing after a tooth extraction. Following instructions from the dental team can reduce discomfort, protect the blood clot, and lower the chance of complications.',

  cards: [
    {
      title: 'Protect the Extraction Site',

      body:
        'Avoid disturbing the area so the blood clot can form and healing can begin properly.',
    },

    {
      title: 'Follow Eating and Drinking Instructions',

      body:
        'Soft foods, hydration, and avoiding certain habits may be recommended during the early healing period.',
    },

    {
      title: 'Keep the Mouth Clean Carefully',

      body:
        'The dental team will explain how to keep the area clean without disrupting the healing site.',
    },

    {
      title: 'Watch for Unusual Symptoms',

      body:
        'Increasing pain, swelling, bleeding, fever, or bad taste should be reported to the dental office.',
    },
  ],
},
benefits: {
  eyebrow: 'Why Choose Promenade Dental',

 heading:
  'Tooth Extraction Planning for Comfort and Healing',

  description:
    'Tooth extraction should be based on diagnosis, not guesswork. Promenade Dental evaluates whether the tooth can be saved, whether removal is necessary, and what should happen after extraction.',

  items: [
    {
      title: 'Diagnosis Before Removal',

      body:
        'Dr. Shriya evaluates the tooth, symptoms, X-rays when needed, gums, bone support, and restoration options before recommending extraction.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6',
      ],
    },

    {
      title: 'Tooth-Saving Options Considered First',

      body:
        'Fillings, crowns, root canal therapy, and other restorative options are considered when the tooth can still be saved predictably.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 24 h20 M18 18 h12 M18 30 h12 M24 14 v20',
      ],
    },

    {
      title: 'Clear Replacement Planning',

      body:
        'If the tooth is removed, bridge, denture, partial, or implant options can be discussed when appropriate.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M12 22 q12 -10 24 0 M18 28 h12 M24 16 v20',
      ],
    },

    {
      title: 'Restorative and Emergency Care in One Office',

      body:
        'Promenade Dental can connect extractions with restorative dentistry, emergency care, implants, dentures, and preventive follow-up.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M15 18 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0 M25 22 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0 M12 32 q7-6 14 0 M23 32 q5-5 10 0',
      ],
    },
  ],
},
localArea: {
  eyebrow: 'Tooth Extractions Near Fulton Ranch',

  heading:
    'Tooth Extractions Near Fulton Ranch and Chandler 85248',

  body:
    'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248. Our office serves patients from Fulton Ranch, Ocotillo, Sun Lakes, South Chandler, and nearby communities.\n\nIf you are looking for tooth extraction, tooth removal, broken tooth extraction, infected tooth evaluation, or restorative dentistry near Chandler 85248, Promenade Dental offers extraction evaluations planned around diagnosis, comfort, healing, and replacement needs.',

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
  eyebrow: 'Related Restorative Services',

  heading:
  'Related Treatments for Tooth Pain and Infection',

  intro:
    'Tooth extraction is one possible treatment for a severely damaged or infected tooth. Some patients may need another restorative or emergency treatment before deciding whether the tooth should be removed.',

  services: [
    {
      title: 'Root Canal Therapy',

      description:
        'Root canal therapy may help save an infected tooth when enough structure remains for restoration.',

      href: '/services/restorative-dentistry/root-canals',
    },

    {
      title: 'Dental Crowns',

      description:
        'Crowns may protect weak, cracked, or root canal-treated teeth when extraction is not necessary.',

      href: '/services/restorative-dentistry/dental-crowns',
    },

    {
      title: 'Dental Bridges',

      description:
        'A bridge may replace a missing tooth after extraction when a fixed replacement is suitable.',

      href: '/services/restorative-dentistry/dental-bridges',
    },

    {
      title: 'Dental Implants',

      description:
        'A dental implant may be considered after extraction when oral health, bone support, and healing are suitable.',

      href: '/services/restorative-dentistry/dental-implants',
    },
  ],
},
faq: {
eyebrow: 'Frequently Asked Questions',

heading:
  'Questions About Tooth Extractions',

items: [
{
q: 'When does a tooth need to be extracted?',
a: 'A tooth may need extraction when it is too damaged, decayed, infected, loose, or fractured to be predictably restored with a filling, crown, root canal, or other treatment.',
},

{
  q: 'Can an infected tooth be saved instead of removed?',
  a: 'Sometimes. Root canal therapy may help save an infected tooth if the tooth has enough structure and support to be restored. If the tooth cannot be saved predictably, extraction may be recommended.',
},

{
  q: 'Do all broken teeth need extraction?',
  a: 'No. Some broken teeth can be repaired with bonding, fillings, crowns, or root canal therapy. Extraction may be needed when the fracture is too deep or the tooth is not restorable.',
},

{
  q: 'What happens after a tooth is removed?',
  a: 'After extraction, the area heals over time. Dr. Shriya may discuss replacement options such as a bridge, partial denture, denture, or dental implant depending on the location and your needs.',
},

{
  q: 'Do I need to replace an extracted tooth?',
  a: 'Not every extraction site requires the same replacement plan, but many missing teeth should be replaced to support chewing, tooth position, and bite function. The best option depends on your oral health and goals.',
},

{
  q: 'Is tooth extraction painful?',
  a: 'Tooth extraction is planned around patient comfort. Dr. Shriya will explain what to expect before treatment and provide aftercare instructions for healing.',
},

{
  q: 'Can I get an implant after extraction?',
  a: 'A dental implant may be an option after extraction if the bone support, gum health, healing, and overall oral health are suitable.',
},

{
  q: 'What should I avoid after tooth extraction?',
  a: 'You should follow the aftercare instructions provided by the dental team. These may include avoiding actions that disturb the extraction site, certain foods, smoking, or heavy activity during early healing.',
},

{
  q: 'Is wisdom tooth extraction included?',
  a: 'Wisdom tooth extraction depends on the tooth position, complexity, and whether the case can be handled in-office or needs referral. This should be confirmed with the dental team.',
},

{
  q: 'Where is Promenade Dental located?',
  a: 'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248.',
},
],
},
cta: {
title: 'Schedule a Tooth Extraction',
highlight: 'for Damaged Teeth',

subtitle:
'Promenade Dental helps patients evaluate whether a tooth can be saved or should be removed, with extraction planning focused on diagnosis, comfort, healing, and future replacement options.',

buttonText: 'Book a Tooth Extraction Evaluation',
buttonHref: '/contact',

secondaryButtonText: 'Call (480) 802-8188',
secondaryButtonHref: 'tel:+14808028188',

image: '/assets/dental-lobby.jpg',
},

},
{
  serviceSlug: 'restorative-dentistry',
  slug: 'dentures',

  name: 'Dentures & Partials',

  metaTitle:
    'Dentures & Partials in Chandler, AZ | Promenade Dental',

  metaDescription:
    'Dentures and partial dentures in Chandler AZ for replacing multiple missing teeth. Visit Promenade Dental for removable tooth replacement near Fulton Ranch.',

hero: {
    eyebrow: 'Removable Tooth Replacement in Fulton Ranch',

    title: 'Dentures and Partials for',

    highlight:
      'Multiple Missing Teeth and Removable Tooth Replacement in Chandler',

    description:
      'Promenade Dental helps patients replace missing teeth with full dentures and partial dentures planned around chewing comfort, speech support, facial support, gum health, appearance, and long-term function.',

    image: '/assets/h-dentures.jpg',

    trustPoints: [
      'Full and partial denture options',
      'Replacement for multiple missing teeth',
      'Planned around comfort, fit, and function',
      'Tooth replacement options explained clearly',
      'Located in Fulton Ranch',
      'New Patients Welcome',
    ],

    primaryCTA: {
      label: 'Book a Denture Consultation',
      href: '/contact',
    },

    secondaryCTA: {
      label: 'Call (480) 802-8188',
      href: 'tel:+14808028188',
    },
  },
overview: {
  eyebrow: 'Dentures & Partials',

  heading:
    'Dentures and Partials for Missing Teeth, Chewing Difficulty, Speech Changes, and Smile Gaps',

  body:
    'Multiple missing teeth can affect eating, speaking, facial support, and confidence in daily interactions. Missing teeth can also place extra pressure on remaining teeth and make chewing less comfortable. Dentures and partial dentures are removable tooth replacement options designed to restore missing teeth and support everyday function. Dr. Shriya evaluates the number of missing teeth, remaining tooth health, gum condition, bite, jaw support, comfort needs, and replacement goals before recommending a denture option.',

  features: [
    'Removable options for replacing multiple missing teeth',
    'Supports chewing comfort and everyday function',
    'Helps restore speech, appearance, and facial support',
    'Treatment recommendations based on oral health and replacement goals',
  ],

  image: '/assets/service-dentures.jpg',

  cta: {
    label: 'Start Your Denture Consultation',
    href: '/contact',
  },
},
whyItMatters: {
  eyebrow: 'Denture Evaluation',

  heading:
    'Denture Evaluation for Missing Teeth, Gum Health, Bite Support, Fit, and Replacement Options',

  description:
    'Denture treatment should be planned around the entire mouth, not only the missing teeth. The comfort and stability of a denture depend on gum health, jaw support, remaining teeth, bite pressure, muscle movement, and how the appliance fits during speaking and chewing. A denture consultation helps determine whether a full denture, partial denture, immediate denture, implant-supported denture, bridge, or implant option should be considered.',

  items: [
    {
      title: 'Number of Missing Teeth',

      body:
        'The number and location of missing teeth help determine whether a partial denture, full denture, bridge, or implant-supported option may be appropriate.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 16 h20 M12 24 h24 M16 32 h16',
      ],
    },

    {
      title: 'Health of Remaining Teeth',

      body:
        'Partial dentures rely on remaining teeth for support and stability, so those teeth must be evaluated carefully.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M16 14 h16 v20 h-16 z M20 18 h8 M20 24 h8 M20 30 h6',
      ],
    },

    {
      title: 'Gum and Jaw Support',

      body:
        'The fit and comfort of a denture depend on the gums, jaw ridge, bite relationship, and soft tissue support.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 30 h20 M18 14 v12 M24 14 v12 M16 22 h10',
      ],
    },
  ],

  cta: {
    label: 'Find Out Which Denture Option Fits Your Needs',
    href: '/contact',
  },
},
features: {
  eyebrow: 'Why Dentures and Partials May Be Recommended',

  heading:
  'Dentures and Partials for Smile Restoration, Chewing Support, and Facial Balance',

  body:
    'Dentures and partials can help restore the areas left by missing teeth. They are designed to support chewing, speech, smile appearance, and facial structure while giving patients a removable tooth replacement option.',

  features: [
    {
      title: 'Replaces Several or All Missing Teeth',

      body:
        'A denture or partial denture can replace multiple missing teeth when fixed replacement options are not preferred or not suitable.',
    },

    {
      title: 'Supports Eating and Speaking',

      body:
        'Replacing missing teeth can help improve chewing ability and speech support.',
    },

    {
      title: 'Restores Smile Appearance',

      body:
        'Dentures and partials are planned to help fill visible gaps and support the appearance of the smile and face.',
    },
  ],
},
servicesGrid: {
  eyebrow: 'Denture Treatment Options',

  heading:
  'Denture Options for Missing Teeth and Implant Support',

  intro:
    'Different denture options serve different needs. The right option depends on how many teeth are missing, whether healthy teeth remain, whether implants are suitable, and whether the patient prefers removable or more stable tooth replacement.',

  services: [
    {
      title: 'Full Dentures',

      description:
        'Full dentures replace all teeth in the upper arch, lower arch, or both arches with a removable appliance.',

      bestFor: [
        'Complete tooth loss',
        'Full arch replacement',
        'Removable tooth replacement',
        'Facial support',
      ],

      cta: 'Ask About Full Dentures',

      href: '/services/restorative-dentistry/dentures',
    },

    {
      title: 'Partial Dentures',

      description:
        'Partial dentures replace several missing teeth while using remaining natural teeth for support and stability.',

      bestFor: [
        'Several missing teeth',
        'Remaining healthy teeth',
        'Removable partial replacement',
        'Tooth gaps',
      ],

      cta: 'Ask About Partial Dentures',

      href: '/services/restorative-dentistry/dentures',
    },

    {
      title: 'Immediate Dentures',

      description:
        'Immediate dentures may be placed after extractions so the patient does not go without teeth during the initial healing period.',

      bestFor: [
        'Planned extractions',
        'Temporary tooth replacement',
        'Transition after tooth removal',
        'Healing period support',
      ],

      cta: 'Ask About Immediate Dentures',

      href: '/services/restorative-dentistry/dentures',
    },

    {
      title: 'Implant-Supported Dentures',

      description:
        'Implant-supported dentures use dental implants to improve denture stability when bone support, healing, and oral health are suitable.',

      bestFor: [
        'Improved denture stability',
        'Full arch replacement',
        'Implant-supported options',
        'Reduced movement',
      ],

      cta: 'Ask About Implant-Supported Dentures',

      href: '/services/restorative-dentistry/dentures',
    },
  ],
},
suitability: {
  eyebrow: 'Denture and Partial Denture Assessment',

  heading:
    'Dentures and Partials for Patients Who Need to Replace Several or All Missing Teeth',

  body:
    'Dentures or partials may be recommended when several teeth are missing or when a removable replacement is the most practical option. Some patients choose dentures because they need to replace many teeth. Others may consider bridges or implants depending on tooth position, bone support, budget, and long-term goals.\n\nAt Promenade Dental, Dr. Shriya explains whether a denture, partial denture, bridge, implant, or implant-supported option may be most suitable.',

  goodFit: {
    title: 'Dentures or Partials May Be Right If',

    items: [
      'You are missing several teeth',
      'You need full arch tooth replacement',
      'You want a removable replacement option',
      'You have remaining teeth that can support a partial',
      'You need a practical replacement after extractions',
    ],
  },

  alternative: {
    title: 'Another Option May Be Better If',

    items: [
      'You want a fixed replacement option',
      'You are replacing only one missing tooth',
      'A dental bridge is suitable for the missing space',
      'You want implant-supported stability',
      'Remaining teeth or gums need treatment first',
    ],
  },

  cta: {
    label: 'Find Out If Dentures Are Right for You',
    href: '/contact',
  },
},
comparison: {
  eyebrow: 'Dentures vs Partials vs Bridges vs Implants',

  heading:
    'Dentures, Partials, Bridges, and Implants for Different Missing Tooth Replacement Needs',

  body:
    'Missing teeth can be replaced in different ways. Dentures are removable and can replace many teeth. Partials replace several missing teeth while some natural teeth remain. Bridges are fixed restorations for selected missing tooth spaces. Implants may support crowns, bridges, or dentures when suitable.',

  matches: [
    {
      title: 'Full Dentures for Complete Tooth Loss',

      body:
        'Full dentures may be recommended when all teeth in an arch need replacement.',
    },

    {
      title: 'Partial Dentures for Several Missing Teeth',

      body:
        'Partials may be suitable when some natural teeth remain and several teeth need replacement.',
    },

    {
      title: 'Dental Bridges for Fixed Tooth Replacement',

      body:
        'A bridge may replace one or more missing teeth when neighboring teeth or implants can support the restoration.',
    },

    {
      title: 'Dental Implants for Stable Replacement Support',

      body:
        'Implants may replace individual teeth or support dentures and bridges when bone and oral health are suitable.',
    },
  ],
},
process: {
  eyebrow: 'Denture Treatment Process',

  heading:
  'Denture Treatment Planning for Fit, Comfort, and Function',

  subtitle:
    'Denture treatment is planned around the gums, jaw shape, missing teeth, remaining teeth, bite, and facial support. The goal is to create a replacement that supports daily function while fitting as comfortably as possible.',

  steps: [
    {
      title: 'Missing Tooth and Gum Evaluation',

      body:
        'Dr. Shriya evaluates missing teeth, remaining teeth, gums, jaw support, bite relationship, and oral health.',
    },

    {
      title: 'Replacement Option Review',

      body:
        'You receive a clear explanation of full dentures, partial dentures, immediate dentures, bridges, implants, and implant-supported options when relevant.',
    },

    {
      title: 'Denture Design and Fitting',

      body:
        'The denture or partial is designed around fit, tooth position, bite, comfort, speech support, and appearance.',
    },

    {
      title: 'Adjustment and Follow-Up',

      body:
        'Follow-up visits may be needed to adjust comfort, fit, pressure points, bite, or appliance stability.',
    },
  ],

  cta: {
    label: 'Book a Denture Consultation',
    href: '/contact',
  },
},
maintenance: {
  eyebrow: 'Denture Adjustment and Maintenance',

  heading:
    'Denture Care for Patients Who Want Better Fit, Comfort, and Long-Term Use',

  body:
    'Dentures and partials need regular care and periodic evaluation. The mouth can change over time, which may affect fit and comfort. Routine dental visits help check the denture, gums, remaining teeth, and bite support.',

  cards: [
    {
      title: 'Clean Dentures Daily',

      body:
        'Dentures should be cleaned regularly to reduce buildup, odor, staining, and irritation.',
    },

    {
      title: 'Remove and Store as Directed',

      body:
        'The dental team will explain how and when to remove, clean, and store your denture safely.',
    },

    {
      title: 'Check for Sore Spots',

      body:
        'Pressure areas, rubbing, or sore gums should be evaluated so adjustments can be made.',
    },

    {
      title: 'Monitor Fit Over Time',

      body:
        'Gums and jaw support can change, so dentures may need adjustment, relining, or replacement over time.',
    },
  ],
},
benefits: {
  eyebrow: 'Why Choose Promenade Dental',

  heading:
  'Dentist-Led Denture Planning for Comfort, Fit, and Tooth Replacement',

  description:
    'Dentures should be planned around comfort, function, and long-term oral health. Promenade Dental evaluates the teeth, gums, bite, and replacement needs before recommending a denture or partial.',

  items: [
    {
      title: 'Diagnosis Before Replacement',

      body:
        'Dr. Shriya evaluates missing teeth, remaining teeth, gums, bite, jaw support, and X-rays when needed.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6',
      ],
    },

    {
      title: 'Replacement Options Explained Clearly',

      body:
        'Patients are guided through full dentures, partial dentures, bridges, implants, and implant-supported dentures when relevant.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 24 h20 M18 18 h12 M18 30 h12 M24 14 v20',
      ],
    },

    {
      title: 'Fit and Function Considered Together',

      body:
        'Denture planning considers chewing comfort, speech support, appliance stability, smile appearance, and facial support.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M12 22 q12 -10 24 0 M18 28 h12 M24 16 v20',
      ],
    },

    {
      title: 'Restorative and Implant Care in One Office',

      body:
        'Promenade Dental can connect denture planning with extractions, bridges, implants, crowns, and preventive care.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M15 18 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0 M25 22 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0 M12 32 q7-6 14 0 M23 32 q5-5 10 0',
      ],
    },
  ],
},
localArea: {
  eyebrow: 'Dentures and Partials Near Fulton Ranch',

  heading:
    'Dentures and Partials Near Fulton Ranch and Chandler 85248',

  body:
    'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248. Our office serves patients from Fulton Ranch, Ocotillo, Sun Lakes, South Chandler, and nearby communities.\n\nIf you are looking for dentures, partial dentures, full dentures, removable tooth replacement, or restorative dentistry near Chandler 85248, Promenade Dental offers denture consultations based on missing teeth, gum health, comfort, fit, and long-term function.',

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
  eyebrow: 'Related Restorative Services',

  heading:
  'Related Treatments for Missing Teeth and Tooth Replacement',

  intro:
    'Dentures and partials are one option for tooth replacement. Some patients may also need extractions, bridges, implants, or restorative treatment before or after denture planning.',

  services: [
    {
      title: 'Tooth Extractions',

      description:
        'Extractions may be needed before dentures if remaining teeth cannot be predictably restored.',

      href: '/services/restorative-dentistry/tooth-extractions',
    },

    {
      title: 'Dental Bridges',

      description:
        'Bridges may replace one or more missing teeth with a fixed restoration when suitable.',

      href: '/services/restorative-dentistry/dental-bridges',
    },

    {
      title: 'Dental Implants',

      description:
        'Implants may replace teeth or support dentures when oral health and bone support are suitable.',

      href: '/services/restorative-dentistry/dental-implants',
    },

    {
      title: 'Implant-Supported Dentures',

      description:
        'Implant-supported dentures may improve stability for patients who want more support than traditional removable dentures.',

      href: '/services/restorative-dentistry/dental-implants',
    },
  ],
},
faq: {
  eyebrow: 'Frequently Asked Questions',

  heading: 'About Missing Teeth, Partial Dentures, Full Dentures and Tooth Replacement',

  items: [
    {
      q: 'What are dentures?',
      a: 'Dentures are removable appliances used to replace missing teeth. Full dentures replace all teeth in an arch, while partial dentures replace several missing teeth when some natural teeth remain.',
    },

    {
      q: 'What is the difference between full dentures and partial dentures?',
      a: 'Full dentures replace all teeth in the upper arch, lower arch, or both. Partial dentures replace several missing teeth while using remaining natural teeth for support.',
    },

    {
      q: 'When do I need dentures?',
      a: 'Dentures may be considered when several or all teeth are missing, when teeth need removal, or when a removable replacement option is preferred.',
    },

    {
      q: 'Are dentures removable?',
      a: 'Yes. Traditional full and partial dentures are removable. Implant-supported denture options may provide additional support when suitable.',
    },

    {
      q: 'Can dentures help with chewing?',
      a: 'Dentures can help restore chewing ability, but they may feel different from natural teeth. Fit, adjustment, and practice are important for comfort and function.',
    },

    {
      q: 'Do dentures affect speech?',
      a: 'Dentures may affect speech at first while your mouth adapts. Proper fit and practice can help improve comfort and speech support.',
    },

    {
      q: 'Can I get dentures after tooth extraction?',
      a: 'Yes. Dentures may be planned after extractions. In some cases, immediate dentures may be used during the initial healing period.',
    },

    {
      q: 'Are dental implants better than dentures?',
      a: 'Dental implants and dentures serve different needs. Implants may provide more stable support when bone and oral health are suitable, while dentures can replace many teeth with a removable appliance.',
    },

    {
      q: 'Do dentures need adjustments?',
      a: 'Yes. Dentures may need adjustments over time because gums and jaw support can change. Sore spots, looseness, or bite discomfort should be checked.',
    },

    {
      q: 'Where is Promenade Dental located?',
      a: 'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248.',
    },
  ],
},
cta: {
  title: 'Schedule a Denture Consultation',

  highlight: 'for Multiple Missing Teeth',

  subtitle:
    'Promenade Dental helps patients replace missing teeth with full dentures, partial dentures, and related tooth replacement options planned around comfort, fit, chewing support, speech, appearance, and long-term function.',

  buttonText: 'Book a Denture Consultation',

  buttonHref: '/contact',

  secondaryButtonText: 'Call (480) 802-8188',

  secondaryButtonHref: 'tel:+14808028188',

  image: '/assets/dental-lobby.jpg',
},
},

{
  serviceSlug: 'restorative-dentistry',
  slug: 'inlays-onlays',

  name: 'Inlays & Onlays',

  metaTitle:
    'Inlays & Onlays in Chandler, AZ | Promenade Dental',

  metaDescription:
    'Inlays and onlays in Chandler AZ for larger cavities, moderate tooth damage, and teeth that need more support than a filling. Visit Promenade Dental near Fulton Ranch.',

  hero: {
    eyebrow: 'Conservative Tooth Restoration in Fulton Ranch',

    title: 'Inlays and Onlays for',

    highlight:
      'Larger Cavities, Moderate Tooth Damage, and Weakened Teeth in Chandler',

    description:
      'Promenade Dental helps patients restore damaged teeth with inlays and onlays when a filling may not provide enough support, but a full dental crown may not be necessary.',

    image: '/assets/h-inlays.jpg',

    trustPoints: [
      'For larger cavities and moderate tooth damage',
      'More support than a filling in selected cases',
      'May preserve more tooth structure than a crown',
      'Planned around bite comfort and tooth strength',
      'Located in Fulton Ranch',
      'New Patients Welcome',
    ],

    primaryCTA: {
      label: 'Book an Inlay or Onlay Consultation',
      href: '/contact',
    },

    secondaryCTA: {
      label: 'Call (480) 802-8188',
      href: 'tel:+14808028188',
    },
  },
  overview: {
  eyebrow: 'Inlays & Onlays',

  heading:
    'Inlays and Onlays for Teeth That Need More Support Than a Filling',

  body:
    'Some cavities or damaged teeth are too large for a standard filling, but not damaged enough to require a full dental crown. In these cases, an inlay or onlay may help restore the tooth while preserving healthy structure. Inlays and onlays are custom restorations used to repair moderate tooth damage. They are planned around the size of the cavity, the remaining tooth structure, chewing pressure, tooth shape, and long-term function.',

  features: [
    'Designed for larger cavities and moderate tooth damage',
    'Provides more support than a standard filling',
    'May preserve more healthy tooth structure than a crown',
    'Planned around strength, fit, and long-term function',
  ],

  image: '/assets/service-inlays-onlays.jpg',

  cta: {
    label: 'Schedule a Tooth Restoration Evaluation',
    href: '/contact',
  },
},
whyItMatters: {
  eyebrow: 'Inlay and Onlay Evaluation',

  heading:
    'Inlay and Onlay Evaluation for Large Cavities, Tooth Strength, Bite Pressure, and Remaining Tooth Structure',

  description:
    'The right restoration depends on how much tooth structure remains after decay or damage is removed. A small cavity may need a filling. A larger damaged area may need an inlay, onlay, or crown. A deeply infected tooth may need root canal therapy before it can be restored. Dr. Shriya evaluates the tooth, existing fillings, cavity size, cracks, bite pressure, gum health, and symptoms before recommending the most suitable restoration.',

  items: [
    {
      title: 'Size of the Damaged Area',

      body:
        'The larger the cavity or damaged portion, the more support the tooth may need after repair.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 16 h20 M12 24 h24 M16 32 h16',
      ],
    },

    {
      title: 'Remaining Tooth Strength',

      body:
        'An inlay or onlay may be considered when the tooth still has enough structure to avoid full crown coverage.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M16 14 h16 v20 h-16 z M20 18 h8 M20 24 h8 M20 30 h6',
      ],
    },

    {
      title: 'Bite and Chewing Pressure',

      body:
        'Back teeth handle heavy chewing forces, so restoration planning must consider how the tooth functions during biting and chewing.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 30 h20 M18 14 v12 M24 14 v12 M16 22 h10',
      ],
    },
  ],

  cta: {
    label: 'Find Out If an Inlay or Onlay Is Right for You',
    href: '/contact',
  },
},
features: {
  eyebrow: 'What Inlays and Onlays Do',

  heading:
    'Dental Inlays and Onlays for Moderate Tooth Repair Without Full Crown Coverage',

  body:
    'Inlays and onlays are often described as conservative restorations because they can repair larger areas of damage while preserving more natural tooth structure than a full crown in selected cases.',

  features: [
    {
      title: 'Dental Inlays for Damage Inside the Tooth Cusps',

      body:
        'An inlay repairs damage within the chewing surface of the tooth, between the raised points called cusps.',
    },

    {
      title: 'Dental Onlays for Damage That Extends Over a Cusp',

      body:
        'An onlay repairs a larger area of tooth damage and may cover one or more cusps for added protection.',
    },
  ],
},
servicesGrid: {
  eyebrow: 'Inlay and Onlay Treatment Situations',

  heading:
  'Inlays and Onlays for Large Cavities and Worn Fillings',

  intro:
    'Inlays and onlays may be recommended when a tooth needs stronger support than a filling but does not require full coverage with a dental crown.',

  services: [
    {
      title: 'Inlays and Onlays for Larger Cavities',

      description:
        'When a cavity is too large for a regular filling, an inlay or onlay may help restore the tooth with stronger support.',

      bestFor: [
        'Larger cavities',
        'Moderate decay',
        'Damaged back teeth',
        'Filling alternatives',
      ],

      cta: 'Ask About Large Cavity Restoration',

      href: '/services/restorative-dentistry/inlays-onlays',
    },

    {
      title: 'Inlays and Onlays for Old or Failing Fillings',

      description:
        'An older filling may weaken, leak, crack, or leave the tooth with less support. An inlay or onlay may be considered when replacing a larger restoration.',

      bestFor: [
        'Large old fillings',
        'Worn restorations',
        'Leaking fillings',
        'Weakened tooth structure',
      ],

      cta: 'Ask About Replacing an Old Filling',

      href: '/services/restorative-dentistry/inlays-onlays',
    },

    {
      title: 'Inlays and Onlays for Moderate Tooth Damage',

      description:
        'If a tooth has damage that is more extensive than a small chip or cavity, an inlay or onlay may restore function without covering the full tooth.',

      bestFor: [
        'Moderate tooth damage',
        'Weakened cusps',
        'Back tooth repair',
        'Partial tooth restoration',
      ],

      cta: 'Ask About Moderate Tooth Repair',

      href: '/services/restorative-dentistry/inlays-onlays',
    },
  ],
},
suitability: {
  eyebrow: 'Inlay and Onlay Assessment',

  heading:
    'Inlays and Onlays for Patients Who Need Stronger Tooth Repair Than a Filling',

  body:
    'An inlay or onlay may be suitable when a tooth has moderate damage and still has enough healthy structure to avoid a full crown. It can be a useful option when a filling may not be strong enough, but a crown may remove more tooth structure than needed.\n\nAt Promenade Dental, Dr. Shriya helps you understand whether an inlay, onlay, filling, crown, root canal, or extraction is the right next step.',

  goodFit: {
    title: 'An Inlay or Onlay May Be Right If',

    items: [
      'You have a larger cavity',
      'A regular filling may not be strong enough',
      'The tooth still has good remaining structure',
      'An old large filling needs replacement',
      'The damage affects the chewing surface or cusps',
    ],
  },

  alternative: {
    title: 'Another Treatment May Be Better If',

    items: [
      'The cavity is small enough for a filling',
      'The tooth is cracked or severely weakened',
      'The tooth needs full crown coverage',
      'Decay or infection has reached the nerve',
      'The tooth cannot be predictably restored',
    ],
  },

  cta: {
    label: 'Find Out If an Inlay or Onlay Fits Your Tooth',
    href: '/contact',
  },
},
comparison: {
  eyebrow: 'Inlay vs Onlay vs Filling vs Crown',

  heading:
    'Fillings, Inlays, Onlays, and Crowns for Different Levels of Tooth Damage',

  body:
    'The difference between these restorations comes down to how much tooth damage exists and how much support the tooth needs after repair.',

  matches: [
    {
      title: 'Fillings for Smaller Cavities',

      body:
        'A filling may be recommended when decay is limited and the tooth has enough structure for a direct restoration.',
    },

    {
      title: 'Inlays for Larger Damage Within the Cusps',

      body:
        'An inlay may be used when the damaged area is larger than a filling but does not extend over the tooth cusps.',
    },

    {
      title: 'Onlays for Damage Involving the Cusps',

      body:
        'An onlay may be used when the restoration needs to cover one or more cusps for added support.',
    },

    {
      title: 'Crowns for Full Tooth Protection',

      body:
        'A crown may be recommended when the tooth is cracked, heavily damaged, root canal-treated, or too weak for a partial restoration.',
    },
  ],
},
process: {
  eyebrow: 'Inlay and Onlay Treatment Process',

  heading:
  'Inlay and Onlay Planning for Bite Comfort and Long-Term Function',

  subtitle:
    'Inlays and onlays are planned around the shape of the damaged tooth, the chewing surface, the bite, and the amount of healthy tooth that can be preserved. The goal is to restore the tooth in a way that supports chewing while protecting the remaining structure.',

  steps: [
    {
      title: 'Tooth Diagnosis',

      body:
        'Dr. Shriya evaluates the cavity, tooth damage, symptoms, old fillings, bite pressure, and X-rays when needed.',
    },

    {
      title: 'Restoration Recommendation',

      body:
        'You receive a clear explanation of whether a filling, inlay, onlay, crown, root canal, or another treatment is most appropriate.',
    },

    {
      title: 'Tooth Preparation and Restoration Design',

      body:
        'The damaged area is prepared, and the inlay or onlay is designed to fit the tooth shape and chewing surface.',
    },

    {
      title: 'Placement and Bite Check',

      body:
        'The restoration is placed and checked for fit, comfort, bite contact, and chewing function.',
    },
  ],

  cta: {
    label: 'Book an Inlay or Onlay Consultation',
    href: '/contact',
  },
},
maintenance: {
  eyebrow: 'Inlay and Onlay Maintenance',

  heading:
    'Inlay and Onlay Care for Patients Who Want Long-Term Tooth Protection',

  body:
    'Inlays and onlays restore damaged teeth, but the natural tooth and gums still need regular care. Good oral hygiene and routine dental visits help protect the restoration and surrounding tooth structure.',

  cards: [
    {
      title: 'Brush and Floss Around the Restoration',

      body:
        'Plaque can collect around restoration edges, so brushing and flossing remain important.',
    },

    {
      title: 'Avoid Chewing Hard Objects',

      body:
        'Hard objects can damage restorations and natural tooth structure.',
    },

    {
      title: 'Monitor Bite Comfort',

      body:
        'A restoration that feels high, uneven, or uncomfortable when chewing should be checked.',
    },

    {
      title: 'Keep Up With Dental Exams',

      body:
        'Routine exams help monitor restoration fit, tooth health, gum condition, and bite function.',
    },
  ],
},
benefits: {
eyebrow: 'Why Choose Promenade Dental',

heading:
'Dentist-Led Inlay and Onlay Planning for Tooth Preservation and Bite Comfort',

description:
'Inlays and onlays require careful treatment planning because they sit between simple fillings and full dental crowns. The right choice depends on tooth strength, cavity size, chewing pressure, and how much healthy tooth can be preserved.',

items: [
{
title: 'Diagnosis Before Restoration',

  body:
    'Dr. Shriya evaluates decay, cracks, old fillings, symptoms, X-rays when needed, and tooth strength before recommending treatment.',

  paths: [
    'M6 38 A18 18 0 0 1 42 38',
    'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6',
  ],
},

{
  title: 'Conservative Restoration Planning',

  body:
    'When suitable, inlays and onlays may preserve more healthy tooth structure than a full crown.',

  paths: [
    'M6 38 A18 18 0 0 1 42 38',
    'M14 24 h20 M18 18 h12 M18 30 h12 M24 14 v20',
  ],
},

{
  title: 'Function and Fit Considered Together',

  body:
    'Treatment planning considers chewing comfort, bite contact, tooth shape, and long-term stability.',

  paths: [
    'M6 38 A18 18 0 0 1 42 38',
    'M12 22 q12 -10 24 0 M18 28 h12 M24 16 v20',
  ],
},

{
  title: 'Restorative Options Explained Clearly',

  body:
    'Promenade Dental helps patients understand whether a filling, inlay, onlay, crown, root canal, or extraction is the right option.',

  paths: [
    'M6 38 A18 18 0 0 1 42 38',
    'M15 18 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0 M25 22 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0 M12 32 q7-6 14 0 M23 32 q5-5 10 0',
  ],
},

],
},
localArea: {
  eyebrow: 'Inlays and Onlays Near Fulton Ranch',

  heading:
    'Inlays and Onlays Near Fulton Ranch and Chandler 85248',

  body:
    'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248. Our office serves patients from Fulton Ranch, Ocotillo, Sun Lakes, South Chandler, and nearby communities.\n\nIf you are looking for dental inlays, dental onlays, large cavity restoration, filling alternatives, crown alternatives, or restorative dentistry near Chandler 85248, Promenade Dental offers inlay and onlay evaluations planned around tooth strength, bite comfort, and long-term function.',

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
  eyebrow: 'Related Restorative Services',

  heading:
    'Related Treatments for Cavities, Weak Teeth, and Tooth Repair',

  intro:
    'Inlays and onlays are used for moderate tooth damage. Some teeth may need a smaller filling, full crown, root canal, or broader restorative treatment depending on diagnosis.',

  services: [
    {
      title: 'Tooth-Colored Fillings',

      description:
        'Fillings may repair smaller cavities or minor tooth damage when the tooth does not need additional support.',

      href: '/services/restorative-dentistry/tooth-colored-fillings',
    },

    {
      title: 'Dental Crowns',

      description:
        'Crowns may be needed when a tooth requires full coverage protection.',

      href: '/services/restorative-dentistry/dental-crowns',
    },

    {
      title: 'Root Canal Therapy',

      description:
        'Root canal therapy may be needed when decay or infection reaches the inside of the tooth.',

      href: '/services/restorative-dentistry/root-canals',
    },

    {
      title: 'Restorative Dentistry',

      description:
        'Explore restorative treatments for damaged, decayed, infected, weak, worn, or missing teeth.',

      href: '/services/restorative-dentistry',
    },
  ],
},
faq: {
  eyebrow: 'Frequently Asked Questions',

  heading:
    'About Inlays, Onlays, Fillings, Crowns, and Tooth Restoration',

  items: [
    {
      q: 'What are dental inlays and onlays?',
      a: 'Dental inlays and onlays are custom restorations used to repair moderate tooth damage. They are often used when a filling may not provide enough support but a full crown may not be necessary.',
    },

    {
      q: 'What is the difference between an inlay and an onlay?',
      a: 'An inlay repairs damage within the chewing surface of the tooth, usually between the cusps. An onlay covers a larger area and may extend over one or more cusps.',
    },

    {
      q: 'When do I need an inlay or onlay?',
      a: 'An inlay or onlay may be recommended when a cavity or damaged area is too large for a regular filling but the tooth does not need full crown coverage.',
    },

    {
      q: 'Is an onlay the same as a crown?',
      a: 'No. An onlay covers part of the tooth, often including one or more cusps. A crown covers the full visible portion of the tooth.',
    },

    {
      q: 'Are inlays and onlays better than fillings?',
      a: 'They are not automatically better. Fillings may be right for smaller cavities. Inlays and onlays may be better when the tooth needs more support than a filling can provide.',
    },

    {
      q: 'Are inlays and onlays better than crowns?',
      a: 'Inlays and onlays may preserve more tooth structure than crowns in selected cases. Crowns may be better when the tooth needs full coverage protection.',
    },

    {
      q: 'Can an old filling be replaced with an inlay or onlay?',
      a: 'Yes. If an old filling is large, worn, leaking, or weakening the tooth, an inlay or onlay may be considered as a replacement option.',
    },

    {
      q: 'Do inlays and onlays look natural?',
      a: 'Inlays and onlays can be designed to blend with the surrounding tooth depending on the material and tooth location.',
    },

    {
      q: 'How do I know if I need a filling, inlay, onlay, or crown?',
      a: 'A dental exam helps determine how much tooth structure remains and how much support the tooth needs after decay or damage is removed.',
    },

    {
      q: 'Where is Promenade Dental located?',
      a: 'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248.',
    },
  ],
},
cta: {
  title: 'Schedule an Inlay or Onlay Consultation',

highlight: 'for Large Cavities',

  subtitle:
    'Promenade Dental helps patients restore moderately damaged teeth with inlays and onlays planned around tooth preservation, bite comfort, tooth strength, and long-term function.',

  buttonText: 'Book an Inlay or Onlay Consultation',

  buttonHref: '/contact',

  secondaryButtonText: 'Call (480) 802-8188',

  secondaryButtonHref: 'tel:+14808028188',

  image: '/assets/dental-lobby.jpg',
},
}

]


export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SUB_SERVICES.find((s) => s.slug === slug);
}