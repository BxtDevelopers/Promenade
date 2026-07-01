
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
  export interface Sub_ServiceData {
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
maintenance?:{
  eyebrow: string;
    heading: string;
    body: string;
    cards:{
      title:string;
      body:string;
    }[]
}
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
    href: '#contact',
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
    href: '/contact-us',
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

      href: '#contact',
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

      href: '#contact',
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

      href: '#contact',
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
    href: '#contact',
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
    href: '#contact',
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
    href: '#contact',
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

      href: '/services/cosmetic-dentistry/veneers',
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

      href: '#contact',
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
  buttonHref: '/contact-us',

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
      href: '#contact',
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
    href: '/contact-us',
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

  href: '#contact',
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

  href: '#contact',
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

  href: '#contact',
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
href: '#contact',
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
href: '#contact',
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
    href: '#contact',
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

      href: '#contact',
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
  buttonHref: '/contact-us',

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
      href: '/contact-us',
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
    href: '#contact',
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

      href: '#contact',
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

      href: '#contact',
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

      href: '#contact',
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
    href: '#contact',
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
    href: '#contact',
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

      href: '/services/cosmetic-dentistry/veneers',
    },

    {
      title: 'Smile Makeover',

      description:
        'A smile makeover may combine bonding, veneers, whitening, crowns, or other treatments into one planned result.',

      href: '#contact',
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
  buttonHref: '#contact',

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
      href: '#contact',
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
    href: '/contact-us',
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

      href: '#contact',
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

      href: '#contact',
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

      href: '#contact',
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
    href: '#contact',
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
    href: '#contact',
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

      href: '/services/restorative-dentistry/root-canals',
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
  buttonHref: '/contact-us',

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
    href: '#contact',
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
    href: '/contact-us',
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

      href: '#contact',
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

      href: '#contact',
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

      href: '#contact',
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
    href: '#contact',
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
    href: '#contact',
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

      href: '/services/restorative-dentistry/root-canals',
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
  buttonHref: '/contact-us',

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
      href: '#contact',
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
    href: '/contact-us',
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

      href: '#contact',
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

      href: '#contact',
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

      href: '#contact',
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
    href: '#contact',
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
    href: '#contact',
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

      href: '/services/restorative-dentistry/dentures',
    },

    {
      title: 'Dental Implants',

      description:
        'Dental implants may replace missing teeth or support a bridge when oral health and bone support are suitable.',

      href: '/services/dental-implants',
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
  buttonHref: '/contact-us',

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
      href: '#contact',
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
    href: '/contact-us',
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

      href: '#contact',
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

      href: '#contact',
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

      href: '#contact',
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
    href: '#contact',
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
    href: '#contact',
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
    href: '#contact',
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
  buttonHref: '/contact-us',

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
      href: '#contact',
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
    href: '/contact-us',
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
    href: '/contact-us',
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

      href: '#contact',
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

      href: '#contact',
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

      href: '#contact',
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

      href: '#contact',
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
    href: '#contact',
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
    href: '#contact',
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
    href: '#contact',
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

      href: '/services/dental-implants',
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
buttonHref: '/contact-us',

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
      href: '#contact',
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
    href: '/contact-us',
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
    href: '/contact-us',
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

      href: '#contact',
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

      href: '#contact',
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

      href: '#contact',
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

      href: '#contact',
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
    href: '#contact',
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
    href: '#contact',
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

      href: '/services/dental-implants',
    },

    {
      title: 'Implant-Supported Dentures',

      description:
        'Implant-supported dentures may improve stability for patients who want more support than traditional removable dentures.',

      href: '/services/dental-implants',
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

  buttonHref: '/contact-us',

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
      href: '#contact',
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
    href: '/contact-us',
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
    href: '/contact-us',
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

      href: '#contact',
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

      href: '#contact',
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

      href: '#contact',
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
    href: '#contact',
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
    href: '#contact',
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

  buttonHref: '/contact-us',

  secondaryButtonText: 'Call (480) 802-8188',

  secondaryButtonHref: 'tel:+14808028188',

  image: '/assets/dental-lobby.jpg',
},
},
{
  serviceSlug: 'dental-implants',
slug: 'single-tooth-implant',

name: 'Single Tooth Implant',

metaTitle:
  'Single Tooth Implant in Chandler, AZ | Promenade Dental',

metaDescription:
  'Single tooth implant in Chandler AZ for replacing one missing tooth with a stable implant-supported crown. Visit Promenade Dental near Fulton Ranch.',

hero: {
  eyebrow: 'One Missing Tooth Replacement in Fulton Ranch',

  title: 'Single Tooth Implant for',

  highlight:
    'Replacing One Missing Tooth in Chandler',

  description:
    'Promenade Dental helps patients explore single tooth implant treatment for replacing one missing tooth with an implant-supported crown planned around bone support, gum health, bite comfort, tooth position, and natural-looking function.',

  image: '/assets/h-dental-implants.jpg',

  trustPoints: [
    'Replacement for one missing tooth',
    'Implant-supported crown planning',
    'Does not rely on neighboring teeth like a traditional bridge',
    'Planned around bone and gum health',
    'Located in Fulton Ranch',
    'New Patients Welcome',
  ],

  primaryCTA: {
    label: 'Book a Single Tooth Implant Consultation',
    href: '#contact',
  },

  secondaryCTA: {
    label: 'Call (480) 802-8188',
    href: 'tel:+14808028188',
  },
},
overview: {
  eyebrow: 'Single Tooth Implant',

  heading:
    'Single Tooth Implant for One Missing Tooth, Chewing Gaps, and Smile Imbalance',

  body:
    'One missing tooth can change more than the way your smile looks. It can affect chewing comfort, create pressure on nearby teeth, allow teeth to shift, and leave an open space that becomes more noticeable over time.\n\nA single tooth implant is designed to replace one missing tooth without depending on neighboring teeth for support in the same way a traditional dental bridge does. At Promenade Dental, Dr. Shriya evaluates the missing tooth area, bone support, gum health, bite pressure, nearby teeth, and replacement goals before discussing whether a single implant is suitable.',

  features: [
    'Designed to replace one missing tooth',
    'Does not rely on neighboring teeth for support',
    'Planned around bone support and gum health',
    'Focused on chewing comfort and smile function',
  ],

  image: '/assets/service-single-tooth-implant.jpg',

  cta: {
    label: 'Start Your Missing Tooth Evaluation',
    href: '/contact-us',
  },
},
whyItMatters: {
  eyebrow: 'Single Tooth Implant Evaluation',

  heading:
    'Single Tooth Implant Evaluation for Bone Support, Gum Health, Bite Pressure, and Tooth Position',

  description:
    'A single tooth implant needs the right foundation. Before implant treatment is recommended, Dr. Shriya evaluates whether the missing tooth area has enough bone support, healthy gums, stable nearby teeth, and bite conditions that can support an implant crown.\n\nThe evaluation also helps compare a single implant with other replacement options such as a dental bridge or partial denture.',

  items: [
    {
      title: 'Bone Support in the Missing Tooth Area',

      body:
        'The implant needs adequate bone support for stability. If bone support is limited, additional planning may be needed.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M18 12 v20 M24 12 v20 M14 30 h14',
      ],
    },

    {
      title: 'Gum Health Around the Implant Site',

      body:
        'Healthy gums help support healing, implant maintenance, and long-term stability.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 22 q10 -10 20 0 M18 28 h12',
      ],
    },

    {
      title: 'Bite Pressure and Tooth Position',

      body:
        'The implant crown must be planned around chewing forces, tooth spacing, and how the upper and lower teeth meet.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 30 h20 M18 14 v12 M24 14 v12 M16 22 h10',
      ],
    },
  ],

  cta: {
    label: 'Find Out If a Single Tooth Implant Is Right for You',
    href: '/contact-us',
  },
},
features: {
  eyebrow: 'Why Choose a Single Tooth Implant',

  heading:
  'Single Tooth Implant Treatment for Tooth Replacement and Function',

  body:
    'A single tooth implant can support a replacement crown in the missing tooth space. When suitable, it can help restore chewing support and smile appearance without preparing neighboring teeth for a traditional bridge.',

  features: [
    {
      title: 'Replaces One Missing Tooth',

      body:
        'A single implant is used to support one replacement tooth in a specific missing tooth space.',
    },

    {
      title: 'Supports an Implant Crown',

      body:
        'The implant acts as support for a crown designed to restore the visible tooth shape and chewing surface.',
    },

    {
      title: 'Helps Protect Neighboring Teeth',

      body:
        'A single implant can replace one tooth without using nearby teeth as bridge supports in selected cases.',
    },
  ],
},
servicesGrid: {
  eyebrow: 'Single Tooth Implant Treatment Situations',

  heading:
  'Single Tooth Implant Options for Front and Back Teeth',

  intro:
    'Single tooth implant planning depends on where the missing tooth is located, how visible the area is when smiling, and how much chewing pressure the replacement tooth needs to handle.',

  services: [
    {
      title: 'Single Implant for a Missing Front Tooth',

      description:
        'A front tooth implant is planned around gum shape, smile line, tooth color, tooth size, and natural appearance.',

      bestFor: [
        'Missing front tooth',
        'Visible smile gap',
        'Natural-looking crown planning',
        'Cosmetic tooth replacement',
      ],

      cta: 'Ask About Front Tooth Implant Options',

      href: '#contact',
    },

    {
      title: 'Single Implant for a Missing Back Tooth',

      description:
        'A back tooth implant is planned around chewing pressure, bite contact, crown strength, and long-term function.',

      bestFor: [
        'Missing molar',
        'Missing premolar',
        'Chewing support',
        'Back tooth replacement',
      ],

      cta: 'Ask About Back Tooth Implant Options',

      href: '#contact',
    },

    {
      title: 'Single Implant After Tooth Extraction',

      description:
        'A single tooth implant may be considered after a tooth is removed, depending on healing, bone support, gum health, and the condition of the extraction site.',

      bestFor: [
        'Tooth extraction planning',
        'Non-restorable tooth replacement',
        'Missing tooth prevention',
        'Future implant planning',
      ],

      cta: 'Ask About Implant Planning After Extraction',

      href: '#contact',
    },
  ],
},
suitability: {
  eyebrow: 'Single Tooth Implant Assessment',

  heading:
    'Single Tooth Implant Treatment for Patients With One Missing Tooth and Suitable Bone Support',

  body:
    'A single tooth implant may be suitable when one tooth is missing and the patient has the oral health needed to support implant treatment. Suitability depends on bone support, gum health, bite pressure, medical history, oral hygiene, and the condition of nearby teeth.\n\nAt Promenade Dental, Dr. Shriya explains whether a single implant, dental bridge, partial denture, or another replacement option may fit your needs.',

  goodFit: {
    title: 'A Single Tooth Implant May Be Right If',

    items: [
      'You are missing one tooth',
      'You want a stable replacement option',
      'You want to avoid support from neighboring teeth when possible',
      'You have suitable gum and bone support',
      'You want an implant-supported crown',
    ],
  },

  alternative: {
    title: 'Another Option May Be Better If',

    items: [
      'Bone support is limited without additional treatment',
      'Gum disease needs treatment first',
      'Medical factors may affect healing',
      'You prefer a non-implant replacement option',
      'A bridge or partial denture is more practical for your situation',
    ],
  },

  cta: {
    label: 'Schedule a Single Tooth Implant Evaluation',
    href: '#contact',
  },
},
comparison: {
  eyebrow: 'Single Tooth Implant vs Dental Bridge vs Partial Denture',

  heading:
    'Single Tooth Implant, Dental Bridge, or Partial Denture for Replacing One Missing Tooth',

  body:
    'One missing tooth can be replaced in different ways. A single implant supports an implant crown. A traditional bridge may use nearby teeth for support. A partial denture is removable and may replace one or more missing teeth.',

  matches: [
    {
      title: 'Single Tooth Implant for Independent Replacement',

      body:
        'A single implant may replace one missing tooth without relying on neighboring teeth for support in the same way as a traditional bridge.',
    },

    {
      title: 'Dental Bridge for Fixed Tooth Replacement',

      body:
        'A bridge may replace one missing tooth with a fixed restoration supported by neighboring teeth or implants.',
    },

    {
      title: 'Partial Denture for Removable Replacement',

      body:
        'A partial denture may replace a missing tooth with a removable appliance, especially when multiple teeth are missing or removable treatment is preferred.',
    },
  ],
},
process: {
  eyebrow: 'Single Tooth Implant Process',

  heading:
  'Single Tooth Implant Planning for Crown Fit and Bite Comfort',

  subtitle:
    'A single tooth implant is planned around the missing tooth space and the final crown. The goal is to create a replacement that fits the bite, supports chewing, and looks natural in the smile.',

  steps: [
    {
      title: 'Missing Tooth and Implant Site Evaluation',

      body:
        'Dr. Shriya evaluates the missing tooth area, gums, bone support, nearby teeth, bite, and X-rays when needed.',
    },

    {
      title: 'Replacement Option Review',

      body:
        'You receive a clear explanation of whether a single implant, bridge, partial denture, or another option may be suitable.',
    },

    {
      title: 'Implant and Crown Planning',

      body:
        'The implant and final crown are planned around tooth position, bite pressure, gum support, and appearance.',
    },

    {
      title: 'Restoration and Maintenance Planning',

      body:
        'After the implant restoration is complete, ongoing cleaning, gum monitoring, and routine visits help maintain long-term function.',
    },
  ],

  cta: {
    label: 'Book a Single Tooth Implant Consultation',
    href: '#contact',
  },
},
educationSection: {
  eyebrow: 'Implant Crown Planning',

  heading:
    'Implant Crown Planning for Tooth Shape, Bite Contact, Gum Line, and Smile Appearance',

  body:
    'The implant crown is the visible replacement tooth attached to the implant. Its design matters because it must fit the space, contact nearby teeth properly, meet the opposing tooth comfortably, and blend with the smile.',

  supportingText:
    'For front teeth, crown planning often focuses more on gum shape, shade, and smile appearance. For back teeth, the crown must handle stronger chewing forces and bite pressure.',

  image:
    '/assets/single-tooth-implant.webp',

  imageAlt:
    'Single tooth implant crown designed for proper bite function, tooth shape, gum support, and natural smile appearance',

  cta: {
    label: 'Ask About Implant Crown Planning',
    href: '#contact',
  },
},
maintenance: {
  eyebrow: 'Single Tooth Implant Maintenance',

  heading:
    'Single Tooth Implant Care for Healthy Gums, Stable Bite, and Long-Term Function',

  body:
    'A single tooth implant needs regular care to protect the surrounding gums, implant crown, and bite. Daily cleaning and routine dental visits help support long-term stability.',

  cards: [
    {
      title: 'Clean Around the Implant Crown',

      body:
        'Plaque can collect around the implant crown and gumline, so daily cleaning is important.',
    },

    {
      title: 'Keep Gums Healthy',

      body:
        'Healthy gum tissue helps support implant maintenance and reduces inflammation risk.',
    },

    {
      title: 'Monitor Bite Pressure',

      body:
        'Grinding, clenching, or a high bite can place extra stress on the implant crown and surrounding teeth.',
    },

    {
      title: 'Attend Routine Dental Visits',

      body:
        'Regular visits help monitor the implant crown, gum health, bite comfort, and surrounding teeth.',
    },
  ],
},
benefits: {
  eyebrow: 'Why Choose Promenade Dental',

  heading:
  'Dentist-Led Single Tooth Implant Planning and Replacement',

  description:
    'Replacing one missing tooth requires more than filling the gap. The implant, crown, gum tissue, bite, and nearby teeth must work together for comfort, function, and appearance.',

  items: [
    {
      title: 'Complete Missing Tooth Evaluation',

      body:
        'Dr. Shriya evaluates the missing tooth area, bone support, gums, bite, nearby teeth, and X-rays when needed.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6',
      ],
    },

    {
      title: 'Implant and Crown Planning Together',

      body:
        'Treatment planning considers both the implant foundation and the final visible crown.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 24 h20 M18 18 h12 M18 30 h12 M24 14 v20',
      ],
    },

    {
      title: 'Alternatives Explained Clearly',

      body:
        'Patients are guided through single implants, dental bridges, partial dentures, and other tooth replacement options.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M12 22 q12 -10 24 0 M18 28 h12 M24 16 v20',
      ],
    },

    {
      title: 'Restorative and Preventive Care in One Office',

      body:
        'Promenade Dental can connect implant care with crowns, bridges, extractions, cleanings, and long-term oral health monitoring.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M15 18 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0 M25 22 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0 M12 32 q7-6 14 0 M23 32 q5-5 10 0',
      ],
    },
  ],
},
localArea: {
  eyebrow: 'Single Tooth Implants Near Fulton Ranch',

  heading:
    'Single Tooth Implants Near Fulton Ranch and Chandler 85248',

  body:
    'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248. Our office serves patients from Fulton Ranch, Ocotillo, Sun Lakes, South Chandler, and nearby communities.\n\nIf you are looking for a single tooth implant, tooth implant, implant crown, replacement for one missing tooth, or dental implants near Chandler 85248, Promenade Dental offers single implant consultations based on bone support, gum health, bite function, tooth position, and long-term replacement goals.',

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
  eyebrow: 'Related Dental Implant Services',

  heading:
    'Related Implant and Restorative Services for Missing Tooth Replacement',

  intro:
    'A single tooth implant is one option for replacing one missing tooth. Some patients may need tooth extraction, a bridge, a crown, or broader dental implant planning depending on the situation.',

  services: [
    {
      title: 'Dental Implants',

      description:
        'Explore implant options for replacing one tooth, several teeth, or supporting dentures.',

      href: '/services/dental-implants',
    },

    {
      title: 'Dental Bridges',

      description:
        'A dental bridge may replace one missing tooth with a fixed restoration supported by nearby teeth or implants.',

      href: '/services/restorative-dentistry/dental-bridges',
    },

    {
      title: 'Tooth Extractions',

      description:
        'Extraction planning may include a future replacement option if the tooth cannot be saved.',

      href: '/services/restorative-dentistry/tooth-extractions',
    },

    {
      title: 'Dental Crowns',

      description:
        'An implant crown restores the visible tooth portion after the implant foundation is ready.',

      href: '/services/restorative-dentistry/dental-crowns',
    },
  ],
},
faq: {
  eyebrow: 'Frequently Asked Questions',

  heading:
  'Single Tooth Implant Questions About Treatment and Suitability',

  items: [
    {
      q: 'What is a single tooth implant?',
      a: 'A single tooth implant is a tooth replacement option used to replace one missing tooth with an implant-supported crown.',
    },

    {
      q: 'When should I consider a single tooth implant?',
      a: 'A single tooth implant may be considered when one tooth is missing and the area has suitable bone support, gum health, and bite conditions.',
    },

    {
      q: 'Is a single tooth implant better than a bridge?',
      a: 'A single implant and dental bridge replace missing teeth differently. An implant does not rely on neighboring teeth in the same way a traditional bridge does, but suitability depends on bone support, gum health, medical history, bite, and treatment goals.',
    },

    {
      q: 'Can I get an implant after a tooth extraction?',
      a: 'A single tooth implant may be possible after extraction depending on healing, bone support, gum health, and the condition of the extraction site.',
    },

    {
      q: 'What is an implant crown?',
      a: 'An implant crown is the visible replacement tooth attached to the implant. It is designed to restore tooth shape, chewing surface, and appearance.',
    },

    {
      q: 'Can a single tooth implant replace a front tooth?',
      a: 'Yes, a single implant may replace a missing front tooth when the area is suitable. Front tooth planning also considers gum line, tooth shade, smile line, and appearance.',
    },

    {
      q: 'Can a single tooth implant replace a molar?',
      a: 'Yes, a single implant may replace a missing molar when bone support, gum health, and bite conditions are suitable.',
    },

    {
      q: 'What happens if I do not replace one missing tooth?',
      a: 'Nearby teeth may shift, chewing pressure may change, and the missing tooth space may affect bite support and smile appearance over time.',
    },

    {
      q: 'How do I know if I have enough bone for an implant?',
      a: 'A dental implant consultation helps evaluate bone support using an exam and imaging when needed.',
    },

    {
      q: 'Where is Promenade Dental located?',
      a: 'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248.',
    },
  ],
},
cta: {
  title: 'Schedule an Implant Consultation',

highlight: 'for One Missing Tooth',

  subtitle:
    'Promenade Dental helps patients explore single tooth implant treatment with planning based on bone support, gum health, tooth position, implant crown design, bite function, and long-term oral health.',

  buttonText: 'Book a Single Tooth Implant Consultation',

  buttonHref: '/contact-us',

  secondaryButtonText: 'Call (480) 802-8188',

  secondaryButtonHref: 'tel:+14808028188',

  image: '/assets/dental-lobby.jpg',
},
},
{
  serviceSlug: 'dental-implants',

  slug: 'implant-supported-bridge',

  name: 'Implant-Supported Bridge',

  metaTitle:
    'Implant-Supported Bridge in Chandler, AZ | Promenade Dental',

  metaDescription:
    'Implant-supported bridges in Chandler AZ for replacing several missing teeth with fixed implant-supported tooth replacement. Visit Promenade Dental near Fulton Ranch.',

  hero: {
    eyebrow: 'Fixed Implant Tooth Replacement in Fulton Ranch',

    title: 'Implant-Supported Bridges for',

    highlight:
      'Replacing Several Missing Teeth in Chandler',

    description:
      'Promenade Dental helps patients explore implant-supported bridges for replacing multiple missing teeth with a fixed restoration planned around bone support, gum health, bite function, smile appearance, and long-term stability.',

    image: '/assets/h-dental-bridge.jpg',

    trustPoints: [
      'Fixed replacement for multiple missing teeth',
      'Supported by dental implants',
      'Alternative to traditional bridges or removable partials in selected cases',
      'Planned around bone, gums, and bite',
      'Located in Fulton Ranch',
      'New Patients Welcome',
    ],

    primaryCTA: {
      label: 'Book an Implant Bridge Consultation',
      href: '#contact',
    },

    secondaryCTA: {
      label: 'Call (480) 802-8188',
      href: 'tel:+14808028188',
    },
  },
  overview: {
  eyebrow: 'Implant-Supported Bridge',

  heading:
    'Implant-Supported Bridges for Multiple Missing Teeth, Chewing Difficulty, and Smile Gaps',

  body:
    'Several missing teeth in one area can make chewing uncomfortable, change bite balance, leave visible spaces, and place extra pressure on the remaining teeth. A removable partial denture may help some patients, but others may want a more stable fixed replacement option.\n\nAn implant-supported bridge replaces multiple missing teeth using dental implants for support. Instead of relying only on natural teeth, the bridge is supported by implants placed in the jaw when bone support, gum health, and healing conditions are suitable.',

  features: [
    'Designed to replace multiple missing teeth',
    'Supported by dental implants rather than only natural teeth',
    'Planned around bone support and gum health',
    'Focused on chewing function and smile stability',
  ],

  image: '/assets/service-implant-supported-bridge.jpg',

  cta: {
    label: 'Start Your Implant Bridge Evaluation',
    href: '/contact-us',
  },
},
whyItMatters: {
  eyebrow: 'Implant Bridge Evaluation',

  heading:
    'Implant Bridge Evaluation for Missing Teeth, Bone Support, Gum Health, and Bite Pressure',

  description:
    'An implant-supported bridge needs a strong foundation. Before treatment is recommended, Dr. Shriya evaluates the number and position of missing teeth, available bone support, gum health, bite pressure, medical history, oral hygiene, nearby teeth, and long-term replacement goals.\n\nThe evaluation helps determine whether an implant-supported bridge, traditional bridge, partial denture, implant-supported denture, or another replacement option may be the best fit.',

  items: [
    {
      title: 'Number and Location of Missing Teeth',

      body:
        'The missing tooth pattern helps determine whether a bridge can be supported by implants and how the final restoration should be planned.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M18 12 v20 M24 12 v20 M14 30 h14',
      ],
    },

    {
      title: 'Bone and Gum Support',

      body:
        'Dental implants need suitable bone and gum conditions for support, healing, and long-term maintenance.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 22 q10 -10 20 0 M18 28 h12',
      ],
    },

    {
      title: 'Bite and Chewing Forces',

      body:
        'An implant bridge must be planned around chewing pressure, bite balance, and how the replacement teeth will function every day.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 30 h20 M18 14 v12 M24 14 v12 M16 22 h10',
      ],
    },
  ],

  cta: {
    label: 'Find Out If an Implant Bridge Is Right for You',
    href: '/contact-us',
  },
},
features: {
  eyebrow: 'Why Choose an Implant-Supported Bridge',

 heading:
  'Implant-Supported Bridges for Fixed Tooth Replacement',

  body:
    'An implant-supported bridge can replace several missing teeth with a fixed restoration supported by dental implants. For suitable patients, this can reduce the need to use natural neighboring teeth as the main support for the bridge.',

  features: [
    {
      title: 'Replaces Multiple Missing Teeth',

      body:
        'An implant-supported bridge can fill a larger missing tooth space with a fixed restoration.',
    },

    {
      title: 'Uses Dental Implants for Support',

      body:
        'Implants act as support points for the bridge instead of relying only on natural teeth.',
    },

    {
      title: 'Helps Restore Chewing and Smile Function',

      body:
        'A fixed implant bridge can support chewing comfort, speech, smile appearance, and tooth replacement stability.',
    },
  ],
},
servicesGrid: {
  eyebrow: 'Implant-Supported Bridge Treatment Situations',

  heading:
    'Implant-Supported Bridge Options for Side Teeth, Back Teeth, and Larger Missing Tooth Spaces',

  intro:
    'Implant-supported bridge planning depends on where teeth are missing, how much chewing pressure the area receives, how visible the space is, and whether the mouth has enough support for dental implants.',

  services: [
    {
      title: 'Implant Bridge for Several Missing Teeth',

      description:
        'An implant-supported bridge may replace several missing teeth in one area with a fixed restoration supported by implants.',

      bestFor: [
        'Several missing teeth',
        'Fixed tooth replacement',
        'Larger smile gaps',
        'Stable replacement planning',
      ],

      cta: 'Ask About Replacing Several Missing Teeth',

      href: '#contact',
    },

    {
      title: 'Implant Bridge for Missing Back Teeth',

      description:
        'Back teeth handle heavy chewing forces, so implant bridge planning must consider bite pressure, crown strength, and long-term function.',

      bestFor: [
        'Missing molars',
        'Missing premolars',
        'Chewing difficulty',
        'Posterior tooth replacement',
      ],

      cta: 'Ask About Back Tooth Implant Bridges',

      href: '#contact',
    },

    {
      title: 'Implant Bridge as an Alternative to a Removable Partial',

      description:
        'For suitable patients, an implant-supported bridge may offer a fixed replacement option instead of a removable partial denture.',

      bestFor: [
        'Patients wanting fixed replacement',
        'Partial denture alternatives',
        'Improved stability',
        'Multiple missing teeth',
      ],

      cta: 'Ask About Fixed Replacement Options',

      href: '#contact',
    },
  ],
},
suitability: {
  eyebrow: 'Implant-Supported Bridge Assessment',

  heading:
    'Implant-Supported Bridges for Patients With Several Missing Teeth and Suitable Bone Support',

  body:
    'An implant-supported bridge may be suitable when several teeth are missing in one area and the patient wants a fixed replacement supported by implants. Suitability depends on bone support, gum health, bite pressure, medical history, oral hygiene, and the condition of nearby teeth.\n\nAt Promenade Dental, Dr. Shriya explains whether an implant-supported bridge, traditional bridge, partial denture, implant-supported denture, or another option may fit your needs.',

  goodFit: {
    title: 'An Implant Bridge May Be Right If',

    items: [
      'You are missing several teeth in one area',
      'You want a fixed replacement option',
      'You want support from implants rather than only natural teeth',
      'You have suitable gum and bone support',
      'You want to improve chewing stability and smile appearance',
    ],
  },

  alternative: {
    title: 'Another Option May Be Better If',

    items: [
      'Bone support is limited without additional treatment',
      'Gum disease needs treatment first',
      'Medical factors may affect healing',
      'You prefer a removable partial denture',
      'A traditional bridge or implant-supported denture is more practical',
    ],
  },

  cta: {
    label: 'Schedule an Implant Bridge Suitability Evaluation',
    href: '#contact',
  },
},
comparison: {
  eyebrow: 'Implant-Supported Bridge vs Traditional Bridge vs Partial Denture',

  heading:
    'Implant-Supported Bridges, Traditional Bridges, and Partial Dentures for Multiple Missing Teeth',

  body:
    'Several missing teeth can be replaced in different ways. An implant-supported bridge uses dental implants for support. A traditional bridge may use natural teeth for support. A partial denture is removable and may replace multiple missing teeth in different areas of the mouth.',

  matches: [
    {
      title: 'Implant-Supported Bridge for Fixed Implant Support',

      body:
        'An implant bridge may be recommended when several missing teeth can be replaced with a fixed restoration supported by implants.',
    },

    {
      title: 'Traditional Bridge for Fixed Tooth-Supported Replacement',

      body:
        'A traditional bridge may be recommended when neighboring teeth can support the replacement and implant treatment is not preferred or suitable.',
    },

    {
      title: 'Partial Denture for Removable Tooth Replacement',

      body:
        'A partial denture may be recommended when multiple teeth are missing, especially in different areas, or when removable treatment is preferred.',
    },
  ],
},
process: {  
  eyebrow: 'Implant-Supported Bridge Process',

  heading:
  'Implant Bridge Planning for Fit, Comfort, and Function',
  subtitle:
    'An implant-supported bridge is planned around both the implants and the final bridge. The implants must support the bridge properly, and the bridge must fit the bite, gums, smile, and chewing needs.',

  steps: [
    {
      title: 'Missing Teeth and Implant Site Evaluation',

      body:
        'Dr. Shriya evaluates missing tooth spaces, gums, bone support, bite pressure, nearby teeth, and X-rays when needed.',
    },

    {
      title: 'Replacement Option Review',

      body:
        'You receive a clear explanation of whether an implant-supported bridge, traditional bridge, partial denture, or another option may be suitable.',
    },

    {
      title: 'Implant and Bridge Planning',

      body:
        'The implant positions and final bridge design are planned around chewing support, smile appearance, bridge span, and long-term stability.',
    },

    {
      title: 'Restoration and Maintenance Planning',

      body:
        'After the implant bridge is complete, ongoing cleaning, gum monitoring, bite checks, and routine visits help maintain function.',
    },
  ],

  cta: {
    label: 'Book an Implant Bridge Consultation',
    href: '#contact',
  },
},
educationSection: {
  eyebrow: 'Fixed Implant Bridge Planning',

  heading:
    'Fixed Implant Bridge Planning for Tooth Shape, Gum Fit, Chewing Pressure, and Smile Appearance',

  body:
    'The final implant bridge must do more than fill a gap. It needs to fit the gum area, contact the bite correctly, support chewing, and look natural in the smile. For visible areas, tooth shape, shade, gum line, and smile balance are especially important.',

  supportingText:
    'For back teeth, strength and chewing support are major planning factors. Promenade Dental plans implant-supported bridges with attention to the final restoration, not only the implant foundation.',

  image:
    '/assets/implant-Supported.png',

  imageAlt:
    'Implant-supported bridge planned for proper gum fit, chewing function, bite comfort, tooth shape, and natural smile appearance',

  cta: {
    label: 'Ask About Fixed Implant Bridge Planning',
    href: '#contact',
  },
},
maintenance: {
  eyebrow: 'Implant-Supported Bridge Maintenance',

  heading:
    'Implant-Supported Bridge Care for Healthy Gums, Clean Implant Areas, and Long-Term Stability',

  body:
    'An implant-supported bridge needs daily cleaning and regular dental monitoring. Even though the bridge is not a natural tooth, the gums, implant areas, and surrounding teeth still need careful maintenance.',

  cards: [
    {
      title: 'Clean Under and Around the Bridge',

      body:
        'Special floss, brushes, or cleaning tools may be recommended to clean around and under the implant bridge.',
    },

    {
      title: 'Keep Implant Gums Healthy',

      body:
        'Healthy gum tissue helps support implant maintenance and reduces inflammation risk around the implant areas.',
    },

    {
      title: 'Monitor Bite Pressure',

      body:
        'Grinding, clenching, or uneven bite contact can place stress on the implant bridge and surrounding teeth.',
    },

    {
      title: 'Attend Routine Dental Visits',

      body:
        'Regular visits help monitor the bridge, implant areas, gum health, bite comfort, and oral hygiene.',
    },
  ],
},
benefits: {
  eyebrow: 'Why Choose Promenade Dental',

  heading:
    'Dentist-Led Implant Bridge Planning for Multiple Missing Teeth, Chewing Support, and Fixed Replacement',

  description:
    'Replacing several missing teeth with an implant-supported bridge requires careful planning. The implants, bridge design, gums, bite, and surrounding teeth must work together for comfort, function, and long-term maintenance.',

  items: [
    {
      title: 'Complete Missing Teeth Evaluation',

      body:
        'Dr. Shriya evaluates the missing tooth pattern, bone support, gums, bite, nearby teeth, and X-rays when needed.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6',
      ],
    },

    {
      title: 'Implant and Bridge Planning Together',

      body:
        'Treatment planning considers both the implant support and the final fixed bridge.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 24 h20 M18 18 h12 M18 30 h12 M24 14 v20',
      ],
    },

    {
      title: 'Alternatives Explained Clearly',

      body:
        'Patients are guided through implant-supported bridges, traditional bridges, partial dentures, and implant-supported denture options.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M12 22 q12 -10 24 0 M18 28 h12 M24 16 v20',
      ],
    },

    {
      title: 'Restorative and Preventive Care in One Office',

      body:
        'Promenade Dental can connect implant bridge planning with dental implants, crowns, bridges, extractions, cleanings, and long-term oral health monitoring.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M15 18 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0 M25 22 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0 M12 32 q7-6 14 0 M23 32 q5-5 10 0',
      ],
    },
  ],
},
localArea: {
  eyebrow: 'Implant-Supported Bridges Near Fulton Ranch',

  heading:
    'Implant-Supported Bridges Near Fulton Ranch and Chandler 85248',

  body:
    'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248. Our office serves patients from Fulton Ranch, Ocotillo, Sun Lakes, South Chandler, and nearby communities.\n\nIf you are looking for an implant-supported bridge, dental implant bridge, fixed implant bridge, multiple missing tooth replacement, or dental implants near Chandler 85248, Promenade Dental offers implant bridge consultations based on bone support, gum health, bite function, tooth replacement needs, and long-term stability.',

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
  eyebrow: 'Related Dental Implant Services',

  heading:
    'Related Implant and Restorative Services for Multiple Missing Teeth',

  intro:
    'An implant-supported bridge is one option for replacing several missing teeth. Some patients may need a single implant, implant-supported denture, traditional bridge, or broader dental implant planning.',

  services: [
    {
      title: 'Dental Implants',

      description:
        'Explore implant options for replacing one tooth, several teeth, or supporting dentures.',

      href: '/services/dental-implants',
    },

    {
      title: 'Single Tooth Implant',

      description:
        'A single tooth implant may replace one missing tooth with an implant-supported crown.',

      href: '/services/dental-implants/single-tooth-implant',
    },

    {
      title: 'Implant-Supported Dentures',

      description:
        'Implant-supported dentures may improve stability for patients replacing many or all teeth.',

      href: '/services/dental-implants/implant-supported-dentures',
    },

    {
      title: 'Dental Bridges',

      description:
        'Traditional dental bridges may replace missing teeth with support from neighboring teeth or implants.',

      href: '/services/restorative-dentistry/dental-bridges',
    },
  ],
},
faq: {
  eyebrow: 'Frequently Asked Questions',

  heading:
    'Implant Bridge Questions About Multiple Missing Teeth, Fixed Replacement, Dentures, and Care',

  items: [
    {
      q: 'What is an implant-supported bridge?',
      a: 'An implant-supported bridge is a fixed tooth replacement that uses dental implants to support a bridge replacing several missing teeth.',
    },

    {
      q: 'When should I consider an implant-supported bridge?',
      a: 'An implant-supported bridge may be considered when several teeth are missing in one area and the patient wants a fixed replacement supported by dental implants.',
    },

    {
      q: 'How is an implant bridge different from a traditional bridge?',
      a: 'A traditional bridge may use neighboring natural teeth for support. An implant-supported bridge uses dental implants as support points for the bridge.',
    },

    {
      q: 'Can an implant bridge replace several missing teeth?',
      a: 'Yes. Implant-supported bridges are commonly considered for replacing multiple missing teeth in one area, depending on bone support, gum health, and bite conditions.',
    },

    {
      q: 'Is an implant bridge removable?',
      a: 'Many implant-supported bridges are fixed in place. The exact design depends on the treatment plan and replacement needs.',
    },

    {
      q: 'Is an implant bridge better than a partial denture?',
      a: 'An implant bridge and partial denture serve different needs. An implant bridge is fixed and implant-supported, while a partial denture is removable. The better option depends on oral health, bone support, budget, comfort goals, and treatment preference.',
    },

    {
      q: 'Do I need enough bone for an implant bridge?',
      a: 'Yes. Dental implants need suitable bone support. A consultation and imaging can help determine whether the area can support implants.',
    },

    {
      q: 'How do I clean an implant-supported bridge?',
      a: 'Cleaning may require special floss, brushes, or tools to clean under and around the bridge. The dental team can show you the correct method.',
    },

    {
      q: 'Can I get an implant bridge after extractions?',
      a: 'An implant-supported bridge may be considered after extractions depending on healing, bone support, gum health, and replacement planning.',
    },

    {
      q: 'Where is Promenade Dental located?',
      a: 'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248.',
    },
  ],
},
cta: {
  title: 'Schedule an Implant Consultation',

highlight: 'for Several Missing Teeth',

  subtitle:
    'Promenade Dental helps patients explore implant-supported bridges for fixed replacement of multiple missing teeth, with planning based on bone support, gum health, bite function, bridge design, and long-term oral health.',

  buttonText: 'Book an Implant Bridge Consultation',

  buttonHref: '/contact-us',

  secondaryButtonText: 'Call (480) 802-8188',

  secondaryButtonHref: 'tel:+14808028188',

  image: '/assets/dental-lobby.jpg',
},
},

{
  serviceSlug: 'dental-implants',

  slug: 'implant-supported-dentures',

  name: 'Implant-Supported Dentures',

  metaTitle:
    'Implant-Supported Dentures in Chandler, AZ | Promenade Dental',

  metaDescription:
    'Implant-supported dentures in Chandler AZ for loose dentures, full arch tooth replacement, and improved denture stability. Visit Promenade Dental near Fulton Ranch.',

  hero: {
    eyebrow: 'Implant Denture Options in Fulton Ranch',

    title: 'Implant-Supported Dentures for',

    highlight:
      'Loose Dentures, Multiple Missing Teeth, and Full Arch Tooth Replacement in Chandler',

    description:
      'Promenade Dental helps patients explore implant-supported dentures for improved denture stability, chewing support, comfort, and full arch tooth replacement planning based on gum health, bone support, bite function, and long-term oral health.',

    image: '/assets/h-implants-dentures.webp',

    trustPoints: [
      'Implant support for dentures',
      'Options for loose denture concerns',
      'Full arch tooth replacement planning',
      'Based on bone and gum health',
      'Located in Fulton Ranch',
      'New Patients Welcome',
    ],

    primaryCTA: {
      label: 'Book an Implant Denture Consultation',
      href: '#contact',
    },

    secondaryCTA: {
      label: 'Call (480) 802-8188',
      href: 'tel:+14808028188',
    },
  },
  overview: {
  eyebrow: 'Implant-Supported Dentures',

  heading:
    'Implant-Supported Dentures for Loose Dentures, Chewing Difficulty, and Unstable Tooth Replacement',

  body:
    'Traditional dentures can help replace missing teeth, but some patients struggle with movement, sore spots, chewing limitations, speech changes, or reduced confidence when the denture feels unstable.\n\nImplant-supported dentures use dental implants to help support or retain a denture. For suitable patients, this can improve stability compared with traditional removable dentures. At Promenade Dental, Dr. Shriya evaluates the gums, bone support, bite, denture fit, medical history, oral hygiene, and replacement goals before discussing implant denture options.',

  features: [
    'Designed to improve denture stability',
    'Supported or retained by dental implants',
    'Evaluated around bone support and gum health',
    'Focused on chewing comfort and function',
  ],

  image: '/assets/service-implant-supported-dentures.jpg',

  cta: {
    label: 'Start Your Implant Denture Evaluation',
    href: '/contact-us',
  },
},
whyItMatters: {
  eyebrow: 'Implant Denture Evaluation',

  heading:
    'Implant Denture Evaluation for Bone Support, Gum Health, Denture Fit, and Full Arch Replacement Needs',

  description:
    'Implant-supported dentures require proper planning because the implants, gums, jaw support, bite, and denture design all need to work together. Before recommending treatment, Dr. Shriya evaluates the number of missing teeth, current denture concerns, bone support, gum health, jaw shape, medical history, and oral hygiene.\n\nThe consultation helps determine whether a traditional denture, partial denture, implant-supported denture, implant-supported bridge, or another replacement option may be more suitable.',

  items: [
    {
      title: 'Bone Support for Implants',

      body:
        'Dental implants need suitable bone support. If bone support is limited, additional treatment planning may be required.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M18 12 v20 M24 12 v20 M14 30 h14',
      ],
    },

    {
      title: 'Gum and Jaw Health',

      body:
        'Healthy gums and stable jaw support help improve denture fit, implant maintenance, and long-term comfort.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 22 q10 -10 20 0 M18 28 h12',
      ],
    },

    {
      title: 'Existing Denture Problems',

      body:
        'Loose fit, sore spots, movement while eating, speech changes, or difficulty chewing may help guide the treatment plan.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 30 h20 M18 14 v12 M24 14 v12 M16 22 h10',
      ],
    },
  ],

  cta: {
    label: 'Find Out If Implant Dentures Are Right for You',
    href: '/contact-us',
  },
},
features: {
  eyebrow: 'Why Choose Implant-Supported Dentures',

  heading: 'Implant-Supported Dentures for Stability and Comfort',

  body:
    'Implant-supported dentures are designed to improve how a denture is supported or retained in the mouth. For suitable patients, this can make tooth replacement feel more stable during daily activities like eating, speaking, and smiling.',

  features: [
    {
      title: 'Helps Reduce Denture Movement',

      body:
        'Implants can help support or retain the denture, which may reduce movement compared with a traditional removable denture.',
    },

    {
      title: 'Supports Chewing Function',

      body:
        'Improved denture stability may help patients chew more comfortably than with an unstable denture.',
    },

    {
      title: 'Improves Confidence With Tooth Replacement',

      body:
        'A more stable denture can help patients feel more comfortable while speaking, smiling, and eating.',
    },
  ],
},
servicesGrid: {
  eyebrow: 'Implant Denture Treatment Options',

  heading:
  'Implant Denture Options for Full Arch Replacement',

  intro:
    'Implant-supported dentures can be planned in different ways depending on the patient’s oral health, bone support, treatment goals, and whether the appliance is designed to be removable or more fixed in function.',

  services: [
    {
      title: 'Implant-Retained Dentures',

      description:
        'Implant-retained dentures attach to dental implants for added retention while still being removable for cleaning in many cases.',

      bestFor: [
        'Loose denture concerns',
        'Improved retention',
        'Removable appliance preference',
        'Full arch tooth replacement',
      ],

      cta: 'Ask About Implant-Retained Dentures',

      href: '#contact',
    },

    {
      title: 'Implant-Supported Full Dentures',

      description:
        'Implant-supported full dentures use dental implants to help support replacement teeth for an upper arch, lower arch, or both arches.',

      bestFor: [
        'Complete tooth loss',
        'Full arch replacement',
        'Improved denture support',
        'Multiple missing teeth',
      ],

      cta: 'Ask About Full Arch Implant Dentures',

      href: '#contact',
    },

    {
      title: 'Lower Implant Dentures',

      description:
        'Lower dentures often move more than upper dentures. Dental implants may help improve lower denture retention when suitable.',

      bestFor: [
        'Loose lower dentures',
        'Difficulty chewing',
        'Lower arch tooth loss',
        'Denture movement',
      ],

      cta: 'Ask About Lower Implant Dentures',

      href: '#contact',
    },

    {
      title: 'Implant Denture Planning After Extractions',

      description:
        'If remaining teeth need removal, implant denture planning may be discussed before extractions so replacement options are considered early.',

      bestFor: [
        'Planned extractions',
        'Full arch transition',
        'Failing teeth',
        'Future implant denture planning',
      ],

      cta: 'Ask About Denture Planning After Extractions',

      href: '#contact',
    },
  ],
},
suitability: {
  eyebrow: 'Implant-Supported Denture Assessment',

  heading:
    'Implant-Supported Dentures for Patients With Multiple Missing Teeth and Suitable Bone Support',

  body:
    'Implant-supported dentures may be suitable for patients who are missing many or all teeth and want better denture support than a traditional removable appliance can provide. Suitability depends on bone support, gum health, healing ability, oral hygiene, bite pressure, medical history, and treatment goals.\n\nAt Promenade Dental, Dr. Shriya helps patients understand whether implant-supported dentures, traditional dentures, partial dentures, implant-supported bridges, or other implant options may fit their needs.',

  goodFit: {
    title: 'Implant Dentures May Be Right If',

    items: [
      'You are missing many or all teeth',
      'Your denture feels loose or unstable',
      'You want improved denture support',
      'You have suitable bone and gum health',
      'You want full arch tooth replacement planning',
    ],
  },

  alternative: {
    title: 'Another Option May Be Better If',

    items: [
      'Bone support is limited without additional treatment',
      'Gum disease needs treatment first',
      'Medical factors may affect implant healing',
      'You prefer traditional removable dentures',
      'An implant-supported bridge or individual implants may be more suitable',
    ],
  },

  cta: {
    label: 'Schedule an Implant Denture Suitability Evaluation',
    href: '#contact',
  },
},
comparison: {
  eyebrow:
    'Implant-Supported Dentures vs Traditional Dentures vs Implant Bridges',

  heading:
    'Implant-Supported Dentures, Traditional Dentures, and Implant Bridges for Missing Teeth',

  body:
    'Patients with multiple missing teeth may have more than one replacement option. Traditional dentures are removable and rest on the gums. Implant-supported dentures use implants to improve retention or support. Implant bridges are fixed restorations used for selected missing tooth patterns.',

  matches: [
    {
      title: 'Traditional Dentures for Removable Tooth Replacement',

      body:
        'Traditional dentures replace many or all teeth with a removable appliance that rests on the gums.',
    },

    {
      title: 'Implant-Supported Dentures for Improved Stability',

      body:
        'Implant-supported dentures use dental implants to help retain or support the denture for selected patients.',
    },

    {
      title: 'Implant-Supported Bridges for Fixed Replacement',

      body:
        'Implant-supported bridges may replace several missing teeth with a fixed restoration supported by implants.',
    },
  ],
},
process: {
  eyebrow: 'Implant Denture Planning Process',

  heading:
  'Implant Denture Planning for Fit, Comfort, and Stability',

  subtitle:
    'Implant-supported denture treatment is planned around both the implants and the denture design. The goal is to improve support and function while making sure the appliance can be cleaned, maintained, and monitored over time.',

  steps: [
    {
      title: 'Missing Teeth and Denture Evaluation',

      body:
        'Dr. Shriya evaluates missing teeth, existing dentures, gums, bone support, jaw shape, bite, and X-rays when needed.',
    },

    {
      title: 'Implant Suitability Review',

      body:
        'You receive a clear explanation of whether dental implants are suitable and whether additional treatment may be needed first.',
    },

    {
      title: 'Denture and Implant Planning',

      body:
        'The implant positions and denture design are planned around stability, chewing support, comfort, speech, and appearance.',
    },

    {
      title: 'Maintenance and Follow-Up Planning',

      body:
        'After treatment, routine visits help monitor denture fit, implant areas, gum health, bite comfort, and cleaning.',
    },
  ],

  cta: {
    label: 'Book an Implant Denture Consultation',
    href: '#contact',
  },
},
educationSection: {
  eyebrow: 'Loose Denture Solutions',

  heading:
    'Implant-Supported Denture Planning for Patients With Loose Lower Dentures or Denture Movement',

  body:
    'Loose dentures can make eating and speaking frustrating. Lower dentures are often more difficult to stabilize because the tongue, floor of the mouth, and jaw movement can affect the fit.',

  supportingText:
    'For suitable patients, dental implants may help improve denture retention and reduce movement. Dr. Shriya evaluates the denture, gums, jaw support, bone availability, and bite before recommending whether implant-supported dentures may help.',

  image:
    '/assets/implant-dentures.webp',

  imageAlt:
    'Implant-supported denture planning for loose lower dentures, improved denture retention, chewing comfort, and reduced denture movement',

  cta: {
    label: 'Ask About Loose Denture Solutions',
    href: '#contact',
  },
},
maintenance: {
  eyebrow: 'Implant-Supported Denture Maintenance',

  heading:
    'Implant-Supported Denture Care for Clean Implants, Healthy Gums, and Better Long-Term Fit',

  body:
    'Implant-supported dentures need daily cleaning and ongoing dental monitoring. The appliance, implants, gums, bite, and oral tissues must be checked regularly to support long-term comfort and function.',

  cards: [
    {
      title: 'Clean Around Implant Attachments',

      body:
        'Plaque can collect around implant attachments, so daily cleaning is important.',
    },

    {
      title: 'Remove and Clean the Denture as Directed',

      body:
        'Many implant-retained dentures are removable and must be cleaned properly outside the mouth.',
    },

    {
      title: 'Watch for Sore Spots or Looseness',

      body:
        'Changes in comfort, fit, or stability should be checked so adjustments can be made.',
    },

    {
      title: 'Attend Routine Maintenance Visits',

      body:
        'Regular visits help monitor implant health, gum tissue, denture attachments, bite comfort, and oral hygiene.',
    },
  ],
},
benefits: {
  eyebrow: 'Why Choose Promenade Dental',

  heading:
  'Dentist-Led Implant Denture Planning for Stability and Comfort',

  description:
    'Implant-supported dentures require planning beyond the appliance itself. The implants, gums, jaw support, bite, denture fit, and maintenance needs all affect the final result.',

  items: [
    {
      title: 'Complete Denture and Implant Evaluation',

      body:
        'Dr. Shriya evaluates missing teeth, existing dentures, gums, bone support, jaw shape, bite, and X-rays when needed.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6',
      ],
    },

    {
      title: 'Options Explained Clearly',

      body:
        'Patients are guided through traditional dentures, implant-retained dentures, implant-supported dentures, implant bridges, and other tooth replacement options.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 24 h20 M18 18 h12 M18 30 h12 M24 14 v20',
      ],
    },

    {
      title: 'Fit and Function Considered Together',

      body:
        'Planning considers stability, chewing comfort, speech, appearance, cleaning access, and long-term maintenance.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M12 22 q12 -10 24 0 M18 28 h12 M24 16 v20',
      ],
    },

    {
      title: 'Restorative and Preventive Care in One Office',

      body:
        'Promenade Dental can connect implant denture planning with extractions, dentures, dental implants, bridges, cleanings, and ongoing oral health monitoring.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M15 18 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0 M25 22 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0 M12 32 q7-6 14 0 M23 32 q5-5 10 0',
      ],
    },
  ],
},
localArea: {
  eyebrow: 'Implant-Supported Dentures Near Fulton Ranch',

  heading:
    'Implant-Supported Dentures Near Fulton Ranch and Chandler 85248',

  body:
    'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248. Our office serves patients from Fulton Ranch, Ocotillo, Sun Lakes, South Chandler, and nearby communities.\n\nIf you are looking for implant-supported dentures, implant dentures, implant-retained dentures, snap-in dentures, loose denture solutions, or dental implants near Chandler 85248, Promenade Dental offers implant denture consultations based on bone support, gum health, denture fit, bite function, and long-term replacement goals.',

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
  eyebrow: 'Related Dental Implant Services',

  heading:
  'Related Services for Full Arch Tooth Replacement',

  intro:
    'Implant-supported dentures are one option for replacing many or all missing teeth. Some patients may also need traditional dentures, implant-supported bridges, extractions, or broader implant planning.',

  services: [
    {
      title: 'Dental Implants',

      description:
        'Explore implant options for replacing one tooth, several teeth, or supporting dentures.',

      href: '/services/dental-implants',
    },

    {
      title: 'Dentures & Partials',

      description:
        'Traditional dentures and partial dentures may replace several or all missing teeth with removable appliances.',

      href: '/services/restorative-dentistry/dentures',
    },

    {
      title: 'Implant-Supported Bridge',

      description:
        'An implant-supported bridge may replace several missing teeth with a fixed implant-supported restoration.',

      href: '/services/dental-implants/implant-supported-bridge',
    },

    {
      title: 'Tooth Extractions',

      description:
        'Extractions may be needed before denture or implant denture planning if remaining teeth cannot be restored.',

      href: '/services/oral-surgery/tooth-extractions',
    },
  ],
},
faq: {
  eyebrow: 'Frequently Asked Questions',

  heading:
  'Implant Denture Questions About Treatment and Care',

  items: [
    {
      q: 'What are implant-supported dentures?',
      a: 'Implant-supported dentures are dentures that use dental implants for added support or retention. They may help improve stability compared with traditional removable dentures for suitable patients.',
    },

    {
      q: 'Who should consider implant-supported dentures?',
      a: 'Patients who are missing many or all teeth, have loose denture concerns, or want improved denture stability may consider implant-supported dentures if bone support, gum health, and medical factors are suitable.',
    },

    {
      q: 'Are implant-supported dentures removable?',
      a: 'Some implant-supported dentures are removable for cleaning, while other designs may be more fixed. The right design depends on oral health, implant planning, cleaning access, and treatment goals.',
    },

    {
      q: 'Are implant-supported dentures better than regular dentures?',
      a: 'Implant-supported dentures may offer better retention or support than traditional dentures for suitable patients. Traditional dentures may still be the better option for some patients depending on health, anatomy, budget, or preference.',
    },

    {
      q: 'Can implants help with loose lower dentures?',
      a: 'Dental implants may help improve lower denture retention when bone support and oral health are suitable. A consultation is needed to confirm whether this is an option.',
    },

    {
      q: 'Do I need enough bone for implant dentures?',
      a: 'Yes. Dental implants need suitable bone support. If bone support is limited, additional planning or alternative treatment options may be discussed.',
    },

    {
      q: 'Can I get implant-supported dentures after extractions?',
      a: 'Implant-supported dentures may be considered after extractions depending on healing, bone support, gum health, and the overall treatment plan.',
    },

    {
      q: 'How do I clean implant-supported dentures?',
      a: 'Cleaning depends on the denture design. Many require cleaning around implant attachments and removing the denture for cleaning as directed by the dental team.',
    },

    {
      q: 'What is the difference between implant dentures and implant bridges?',
      a: 'Implant dentures are often used for full arch replacement and may be removable depending on the design. Implant bridges are fixed restorations used to replace selected missing tooth spaces.',
    },

    {
      q: 'Where is Promenade Dental located?',
      a: 'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248.',
    },
  ],
},
cta: {
 title: 'Implant Denture Consultation',

highlight: 'for Stability and Comfort',

  subtitle:
    'Promenade Dental helps patients explore implant-supported dentures with planning based on denture stability, bone support, gum health, bite comfort, cleaning needs, and long-term oral health.',

  buttonText: 'Book an Implant Denture Consultation',

  buttonHref: '/contact-us',

  secondaryButtonText: 'Call (480) 802-8188',

  secondaryButtonHref: 'tel:+14808028188',

  image: '/assets/dental-lobby.jpg',
},
},
{
serviceSlug: 'emergency-dentistry',

slug: 'toothache-relief',

name: 'Toothache & Dental Pain Relief',

metaTitle:
'Toothache Relief in Chandler, AZ | Promenade Dental',

metaDescription:
'Toothache relief in Chandler AZ for severe tooth pain, sensitivity, chewing pain, swelling, and possible infection. Visit Promenade Dental near Fulton Ranch.',

hero: {
eyebrow: 'Tooth Pain Evaluation in Fulton Ranch',

title: 'Toothache Relief for',

highlight:
  'Severe Tooth Pain, Sensitivity, Swelling, or Pain When Chewing in Chandler',

description:
  'Promenade Dental helps patients evaluate toothaches and dental pain caused by cavities, infection, cracks, gum problems, bite pressure, loose dental work, or dental trauma with care planned around diagnosis, comfort, and the right next treatment.',

image: '/assets/h-tooth-ache.jpg',

trustPoints: [
  'Evaluation for severe tooth pain',
  'Diagnosis for sensitivity and chewing pain',
  'Treatment options for decay, cracks, and infection',
  'Emergency and restorative care in one office',
  'Located in Fulton Ranch',
  'New Patients Welcome',
],

primaryCTA: {
  label: 'Request a Tooth Pain Visit',
  href: '#contact',
},

secondaryCTA: {
  label: 'Call (480) 802-8188',
  href: 'tel:+14808028188',
},

},
overview: {
eyebrow: 'Toothache & Dental Pain Evaluation',

heading:
'Toothache Relief for Pain Caused by Cavities, Infection, Cracks, or Bite Pressure',

body:
'A toothache is a symptom, not a diagnosis. The pain may come from a cavity, deep decay, tooth infection, cracked tooth, worn filling, loose crown, gum inflammation, grinding, bite pressure, or dental injury. Some toothaches feel sharp and sudden. Others become dull, throbbing, or constant over time.\n\nAt Promenade Dental, Dr. Shriya evaluates the source of the pain before recommending treatment. The goal is to understand whether the tooth can be repaired, needs infection treatment, requires stronger protection, or should be removed if it cannot be saved.',

features: [
'Evaluation of tooth pain and sensitivity',
'Diagnosis of cavities, cracks, and infection',
'Assessment of bite pressure and dental restorations',
'Treatment planning focused on relieving pain and saving teeth',
],

image: '/assets/service-toothache-relief.jpg',

cta: {
label: 'Schedule a Tooth Pain Evaluation',
href: '/contact-us',
},
},
whyItMatters: {
eyebrow: 'Tooth Pain Evaluation',

heading:
'Tooth Pain Evaluation for Deep Decay, Infection, Sensitivity, Cracks, and Gum Inflammation',

description:
'Different types of tooth pain can point to different problems. Pain when chewing may suggest a crack, bite issue, infection, or damaged restoration. Lingering sensitivity may suggest deeper nerve irritation. Swelling may indicate infection. A sharp edge or broken tooth may need urgent repair.\n\nDr. Shriya evaluates your symptoms, tooth structure, gums, bite, dental history, existing restorations, and X-rays when needed to identify the cause of the pain.',

items: [
{
title: 'Pain Pattern and Triggers',

  body:
    'Cold, heat, sweets, chewing, pressure, or spontaneous pain can help identify what may be causing the toothache.',

  paths: [
    'M24 12 C18 18 14 24 24 38',
    'M24 12 C30 18 34 24 24 38',
  ],
},

{
  title: 'Tooth and Restoration Condition',

  body:
    'Cavities, cracks, old fillings, loose crowns, and broken restorations can expose the tooth to sensitivity or infection.',

  paths: [
    'M12 12 h20 v20 h-20 z',
    'M18 18 h8 M18 24 h8',
  ],
},

{
  title: 'Gum and Infection Signs',

  body:
    'Swelling, gum bumps, pus, tenderness, or fever may suggest infection that needs prompt evaluation.',

  paths: [
    'M12 20 h24',
    'M16 28 h16',
  ],
},

],

cta: {
label: 'Find the Cause of Your Tooth Pain',
href: '/contact-us',
},
},
servicesGrid: {
eyebrow: 'Common Causes of Tooth Pain',

heading:
'Dental Pain Causes That Need Diagnosis Before Treatment',

intro:
'Tooth pain can come from several conditions. The same symptom may need different treatment depending on the cause, tooth condition, and severity.',

services: [
{
title: 'Tooth Pain From Cavities or Deep Decay',

  description:
    'A small cavity may cause sensitivity. Deep decay may cause stronger pain, lingering sensitivity, or infection inside the tooth.',

  bestFor: [
    'Cold sensitivity',
    'Sweet sensitivity',
    'Deep cavities',
    'Decay-related tooth pain',
  ],

  cta: 'Ask About Cavity Treatment',

  href: '#contact',
},

{
  title: 'Tooth Pain From Infection or Abscess',

  description:
    'Throbbing pain, swelling, pressure, pus, or a gum bump may point to infection involving the inside of the tooth or surrounding tissues.',

  bestFor: [
    'Tooth infections',
    'Dental abscesses',
    'Swelling and pressure',
    'Severe tooth pain',
  ],

  cta: 'Ask About Infection Treatment',

  href: '#contact',
},

{
  title: 'Tooth Pain From Cracks or Fractures',

  description:
    'A cracked tooth may hurt when chewing or releasing bite pressure. Some cracks are difficult to see without dental evaluation.',

  bestFor: [
    'Chewing discomfort',
    'Cracked teeth',
    'Bite-related pain',
    'Fracture concerns',
  ],

  cta: 'Ask About Cracked Tooth Care',

  href: '#contact',
},

{
  title: 'Pain From Gum Inflammation or Periodontal Problems',

  description:
    'Gum infection, inflammation, recession, or bone loss may cause soreness, sensitivity, loose teeth, or pressure discomfort.',

  bestFor: [
    'Gum tenderness',
    'Periodontal disease',
    'Tooth sensitivity',
    'Loose teeth',
  ],

  cta: 'Ask About Gum Treatment',

  href: '#contact',
},

{
  title: 'Pain From Lost Fillings or Loose Crowns',

  description:
    'When a filling or crown loosens, the tooth may become sensitive to air, cold, chewing, or bacteria entering around the restoration.',

  bestFor: [
    'Lost fillings',
    'Loose crowns',
    'Damaged restorations',
    'Restoration-related sensitivity',
  ],

  cta: 'Ask About Dental Work Repair',

  href: '#contact',
},

{
  title: 'Pain From Grinding, Clenching, or Bite Pressure',

  description:
    'Heavy bite pressure can make teeth sore, cracked, sensitive, or painful when chewing.',

  bestFor: [
    'Teeth grinding',
    'Jaw clenching',
    'Bite-related pain',
    'Chewing discomfort',
  ],

  cta: 'Ask About Bite Pressure Evaluation',

  href: '#contact',
},

],
},
warningSection: {
eyebrow: 'Toothache Warning Signs',

heading:
'Toothache Warning Signs That Should Be Evaluated Promptly',

body:
'Some toothaches should not be ignored. Pain that is severe, worsening, or combined with swelling may indicate infection or tooth damage that needs urgent dental evaluation.',

cta: {
subtext: 'Need Prompt Tooth Pain Relief?',
phoneNumber: '(480) 802-8188',
phoneLink: 'tel:+14808028188',
buttonText: 'Call for a Tooth Pain Evaluation',
},

gridHeading:
'Common Reasons Patients Seek Care for Tooth Pain and Dental Discomfort',

warnings: [
'Severe or throbbing tooth pain',
'Swelling in the gums, jaw, or face',
'Pain that wakes you up at night',
'Pain when biting or chewing',
'A gum bump, pus, or bad taste',
'Fever with dental pain',
'A broken tooth with pain',
'A loose crown or filling with sensitivity',
'Lingering sensitivity to hot or cold',
'Pressure or tenderness around a tooth',
'Sudden worsening of tooth discomfort',
'Tooth pain that interferes with daily activities',
],
},
solutionsGrid: {
eyebrow: 'Toothache Treatment Options',

heading:
'Toothache Treatment Options for Pain, Infection, and Cracks',

body:
'The right treatment depends on the diagnosis. Toothache relief may require a simple filling, a crown, root canal therapy, extraction, gum treatment, or repair of old dental work.',

cards: [
{
title: 'Tooth-Colored Fillings',

  subtitle: 'Treatment for Smaller Cavities',

  body:
    'A filling may repair a cavity when decay is limited and the tooth remains strong enough for a smaller restoration.',

  image: '/assets/tooth-colored-fillings.jpg',
},

{
  title: 'Dental Crowns',

  subtitle: 'Protection for Cracked or Weak Teeth',

  body:
    'A crown may protect a tooth that is cracked, broken, heavily filled, or too weak for a filling.',

  image: '/assets/dental-crowns.jpg',
},

{
  title: 'Root Canal Therapy',

  subtitle: 'Treatment for Infected Teeth',

  body:
    'Root canal therapy may be needed when infection or inflammation reaches the inside of the tooth and the tooth can still be saved.',

  image: '/assets/root-canal.webp',
},

{
  title: 'Tooth Extraction',

  subtitle: 'Care for Non-Restorable Teeth',

  body:
    'Extraction may be recommended when a painful tooth is too damaged, infected, loose, or cracked to be restored predictably.',

  image: '/assets/tooth-extraction.png',
},

],

cta: {
label: 'Discuss Toothache Treatment Options',
href: '#contact',
},
},
process: {
eyebrow: 'Tooth Pain Visit Process',

heading:
'Tooth Pain Visit Process for Diagnosis and Treatment',

subtitle:
'A tooth pain visit is designed to find the cause of the pain and determine the next step. Some problems can be treated during the visit depending on diagnosis and scheduling. Others may require stabilization, follow-up treatment, or additional restorative planning.',

steps: [
{
title: 'Symptom Review',

  body:
    'The dental team reviews where the pain is, how long it has been present, what triggers it, and whether swelling or injury is involved.',
},

{
  title: 'Tooth Exam and X-Rays When Needed',

  body:
    'Dr. Shriya evaluates the tooth, gums, bite, existing restorations, cracks, and imaging when needed.',
},

{
  title: 'Diagnosis and Treatment Options',

  body:
    'You receive a clear explanation of what may be causing the pain and what treatment options may be appropriate.',
},

{
  title: 'Same-Day Care or Follow-Up Plan',

  body:
    'When possible, treatment may begin during the visit. If additional care is needed, a follow-up plan is created.',
},

],

cta: {
label: 'Request a Tooth Pain Visit',
href: '#contact',
},
},
educationSection: {
eyebrow: 'Tooth Pain and Root Canal Therapy',

heading:
'Root Canal Therapy for Tooth Pain Caused by Infection or Inflamed Tooth Nerves',

body:
'A toothache does not always mean a root canal is needed. But when deep decay, infection, or inflammation affects the inside of the tooth, root canal therapy may be recommended to treat the source of the pain and preserve the tooth when possible.',

supportingText:
'Dr. Shriya evaluates whether root canal therapy is needed or whether the tooth can be treated with a filling, crown, gum care, bite adjustment, or another option.',

image:
'/assets/root-canal-therapy.webp',

imageAlt:
'Root canal therapy for tooth pain caused by infection, inflamed tooth nerves, deep decay, and tooth preservation treatment',

cta: {
label: 'Learn About Root Canal Therapy',
href: '/services/restorative-dentistry/root-canals',
},
},
educationSection2: {
eyebrow: 'Tooth Pain and Emergency Dental Care',

heading:
'Emergency Dental Care for Severe Toothache, Swelling, or Dental Pain That Gets Worse',

bodyParagraphs: [
'If tooth pain is severe, worsening, or connected with swelling, it should be evaluated promptly. Dental infections and deep tooth damage can become more difficult to treat if delayed.',

'Calling Promenade Dental can help you explain your symptoms and find out what appointment options are available. Early evaluation may help identify whether the problem involves decay, infection, a cracked tooth, damaged dental work, gum concerns, or another source of pain.',
],

image:
'/assets/emergency-dentistry.webp',

imageAlt:
'Emergency dental care for severe toothache, swelling, worsening dental pain, infection concerns, and urgent evaluation needs',

cta: {
label: 'Call (480) 802-8188',
href: 'tel:+14808028188',
},
},
benefits: {
eyebrow: 'Why Choose Promenade Dental',

heading:
'Dentist-Led Toothache Care for Diagnosis and Treatment',

description:
'Tooth pain can have many causes, so treatment should be based on diagnosis. Promenade Dental focuses on identifying the source of the pain and recommending the most appropriate next step.',

items: [
{
title: 'Diagnosis Before Treatment',

  body:
    'Dr. Shriya evaluates symptoms, tooth structure, gums, bite, restorations, and X-rays when needed.',

  paths: [
    'M6 38 A18 18 0 0 1 42 38',
    'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6',
  ],
},

{
  title: 'Emergency and Restorative Care Connected',

  body:
    'Tooth pain care can connect to fillings, crowns, root canal therapy, extractions, gum treatment, or emergency dental care when needed.',

  paths: [
    'M6 38 A18 18 0 0 1 42 38',
    'M14 24 h20 M18 18 h12 M18 30 h12 M24 14 v20',
  ],
},

{
  title: 'Tooth-Saving Options Considered',

  body:
    'When possible, treatment planning considers whether the painful tooth can be repaired or saved before removal is considered.',

  paths: [
    'M6 38 A18 18 0 0 1 42 38',
    'M12 22 q12 -10 24 0 M18 28 h12 M24 16 v20',
  ],
},

{
  title: 'Local Dental Care Near Fulton Ranch',

  body:
    'Promenade Dental serves patients from Fulton Ranch, Ocotillo, Sun Lakes, South Chandler, and Chandler 85248.',

  paths: [
    'M6 38 A18 18 0 0 1 42 38',
    'M18 14 a8 8 0 1 1 0.1 0 M18 22 v12 M12 34 h12',
  ],
},

],
},
relatedServices: {
eyebrow: 'Related Emergency and Restorative Services',

heading:
'Related Services for Tooth Pain and Dental Emergencies',

intro:
'Toothache treatment often connects with restorative and emergency dentistry. The right next page depends on what is causing the pain and whether the tooth needs repair, infection treatment, protection, or removal.',

services: [
{
title: 'Emergency Dentist',

  description:
    'Emergency dental care for severe tooth pain, swelling, broken teeth, knocked-out teeth, and urgent dental problems.',

  href: '/services/emergency-dentistry',
},

{
  title: 'Root Canal Therapy',

  description:
    'Root canal therapy may be needed when tooth pain is caused by infection or inflammation inside the tooth.',

  href: '/services/restorative-dentistry/root-canals',
},

{
  title: 'Tooth-Colored Fillings',

  description:
    'Fillings may treat smaller cavities or minor areas of decay that cause sensitivity or discomfort.',

  href: '/services/restorative-dentistry/tooth-colored-fillings',
},

{
  title: 'Dental Crowns',

  description:
    'Crowns may protect cracked, weak, broken, or heavily filled teeth that cause pain when chewing.',

  href: '/services/restorative-dentistry/dental-crowns',
},

],
},
faq: {
eyebrow: 'Frequently Asked Questions',

heading:
'Toothache Questions About Pain, Infection, and Treatment',

items: [
{
q: 'What causes a toothache?',
a: 'A toothache may be caused by cavities, deep decay, infection, cracks, gum inflammation, bite pressure, grinding, loose dental work, or dental trauma.',
},

{
  q: 'When should I see a dentist for tooth pain?',
  a: 'You should schedule an evaluation if tooth pain is severe, lasts more than a short time, worsens, wakes you up, causes pain when chewing, or comes with swelling.',
},

{
  q: 'Is tooth pain always a sign of infection?',
  a: 'No. Tooth pain can come from cavities, cracks, sensitivity, gum problems, or bite pressure. Infection is one possible cause and needs dental evaluation.',
},

{
  q: 'Do I need a root canal for tooth pain?',
  a: 'Not always. Root canal therapy may be needed when the inside of the tooth is infected or inflamed. Smaller cavities or cracks may need different treatment.',
},

{
  q: 'Can a cavity cause severe tooth pain?',
  a: 'Yes. A cavity can cause severe pain if it becomes deep enough to irritate or infect the inside of the tooth.',
},

{
  q: 'Why does my tooth hurt when I chew?',
  a: 'Pain when chewing may be caused by a cracked tooth, deep cavity, infection, high filling, loose crown, gum problem, or bite pressure.',
},

{
  q: 'Is swelling with tooth pain serious?',
  a: 'Swelling may indicate infection and should be evaluated promptly, especially if it involves the face, jaw, fever, pus, or worsening discomfort.',
},

{
  q: 'Can tooth pain go away on its own?',
  a: 'Tooth pain may come and go, but the underlying cause can remain. A dental evaluation helps determine whether treatment is needed.',
},

{
  q: 'What treatment gives toothache relief?',
  a: 'Treatment depends on the cause. Options may include a filling, crown, root canal therapy, extraction, gum treatment, bite adjustment, or repair of damaged dental work.',
},

{
  q: 'Where is Promenade Dental located?',
  a: 'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248.',
},

],
},
cta: {
title: 'Call Promenade Dental',
highlight: 'for Tooth Pain Evaluation and Relief',

subtitle:
'Promenade Dental helps patients evaluate tooth pain with emergency and restorative care focused on diagnosis, comfort, tooth repair, infection treatment, and the right step.',

buttonText: 'Request a Tooth Pain Visit',

buttonHref: '/contact-us',

secondaryButtonText: 'Call (480) 802-8188',

secondaryButtonHref: 'tel:+14808028188',

image: '/assets/dental-lobby.jpg',
},

},
{
  serviceSlug: 'emergency-dentistry',

  slug: 'broken-chipped-tooth',

  name: 'Broken or Chipped Tooth',

  metaTitle:
    'Broken or Chipped Tooth Dentist in Chandler, AZ | Promenade Dental',

  metaDescription:
    'Broken or chipped tooth care in Chandler AZ for cracked, fractured, painful, or sharp teeth. Visit Promenade Dental near Fulton Ranch for urgent tooth repair.',

  hero: {
    eyebrow: 'Urgent Tooth Repair in Fulton Ranch',

    title: 'Broken or Chipped Tooth Care for',

    highlight:
      'Cracked, Fractured, Sharp, or Painful Teeth in Chandler',

    description:
      'Promenade Dental helps patients evaluate broken, chipped, cracked, or fractured teeth with care planned around diagnosis, pain relief, tooth repair, bite comfort, and whether the tooth can be restored.',

    image: '/assets/h-broken-chipped-tooth.webp',

    trustPoints: [
      'Care for chipped, broken, and cracked teeth',
      'Treatment for sharp edges and tooth pain',
      'Bonding, fillings, crowns, or root canals when needed',
      'Emergency and restorative care in one office',
      'Located in Fulton Ranch',
      'New Patients Welcome',
    ],

    primaryCTA: {
      label: 'Request a Broken Tooth Visit',
      href: '#contact',
    },

    secondaryCTA: {
      label: 'Call (480) 802-8188',
      href: 'tel:+14808028188',
    },
  },
  overview: {
eyebrow: 'Broken or Chipped Tooth Treatment',

heading:
'Broken or Chipped Tooth Treatment for Pain and Tooth Damage',

body:
'A chipped or broken tooth may seem minor at first, but the damage can expose sensitive tooth layers, create sharp edges, affect chewing, or allow cracks to spread deeper. Some chips are cosmetic. Others involve tooth structure, old fillings, dental crowns, or the nerve inside the tooth.\n\nAt Promenade Dental, Dr. Shriya evaluates the depth of the damage, symptoms, bite pressure, tooth stability, and X-rays when needed before recommending the right repair option.',

features: [
'Evaluation of chipped, broken, and cracked teeth',
'Assessment of tooth structure and damage depth',
'Diagnosis based on symptoms, bite, and X-rays',
'Treatment planning focused on tooth preservation',
],

image: '/assets/service-broken-chipped-tooth.jpg',

cta: {
label: 'Schedule a Broken Tooth Evaluation',
href: '/contact-us',
},
},
whyItMatters: {
eyebrow: 'Broken Tooth Evaluation',

heading:
'Broken Tooth Evaluation for Enamel Chips, Cracks, Fractures, Sensitivity, and Bite Pain',

description:
'Not every broken tooth needs the same treatment. A small chip may be repaired with bonding or smoothing. A larger broken area may need a filling, crown, or onlay. If the crack reaches the inside of the tooth, root canal therapy may be needed. If the tooth is too damaged to restore predictably, extraction may be recommended.\n\nDr. Shriya checks the tooth structure, pain level, crack depth, gum line, existing dental work, bite contact, and whether the tooth can still be protected.',

items: [
{
title: 'Size and Depth of the Break',

  body:
    'The depth of the chip, crack, or fracture helps determine whether cosmetic bonding, a filling, crown, root canal, or extraction may be needed.',

  paths: [
    'M12 12 h20 v20 h-20 z',
    'M18 18 h8 M18 24 h8',
  ],
},

{
  title: 'Pain and Sensitivity',

  body:
    'Pain, cold sensitivity, chewing discomfort, or throbbing can suggest deeper damage or nerve involvement.',

  paths: [
    'M24 12 C18 18 14 24 24 38',
    'M24 12 C30 18 34 24 24 38',
  ],
},

{
  title: 'Bite Pressure and Tooth Stability',

  body:
    'A damaged tooth may continue to break if bite pressure, grinding, or weak tooth structure is not addressed.',

  paths: [
    'M12 20 h24',
    'M16 28 h16',
  ],
},

],

cta: {
label: 'Find Out How the Tooth Can Be Repaired',
href: '/contact-us',
},
},
warningSection: {
eyebrow: 'Broken Tooth Warning Signs',

heading:
'Signs a Broken or Chipped Tooth May Need Prompt Dental Attention',

body:
'Some chipped teeth cause little discomfort, while others can expose sensitive tooth structure, create sharp edges, affect chewing, or develop deeper cracks over time. An evaluation can help determine whether the tooth needs simple repair or more extensive treatment to protect long-term function and comfort.',

cta: {
subtext: 'Need Prompt Tooth Repair?',
phoneNumber: '(480) 802-8188',
phoneLink: 'tel:+14808028188',
buttonText: 'Call for a Broken Tooth Evaluation',
},

gridHeading:
'Common Reasons Patients Seek Care for a Broken or Chipped Tooth',

warnings: [
'A piece of the tooth has broken off',
'Sharp edges are cutting the tongue, cheek, or lip',
'Pain when biting or chewing',
'Sensitivity to cold, hot, or sweet foods',
'A visible crack or fracture line in the tooth',
'A broken filling or damaged dental crown',
'Pain that developed after a tooth chipped',
'A tooth injury caused by a fall, accident, or sports impact',
'A cracked tooth that feels unstable',
'Food getting trapped in the damaged area',
'Swelling or discomfort around the affected tooth',
'A previously repaired tooth that has broken again',
],
},
servicesGrid: {
eyebrow: 'Broken Tooth Treatment Options',

heading:
'Broken or Chipped Tooth Care for Cracks, Damage, and Injuries',

intro:
'Tooth damage can happen from biting hard food, grinding, trauma, old restorations, large cavities, weakened enamel, or accidents. The right treatment depends on the extent of the damage and whether the tooth is painful or stable.',

services: [
{
title: 'Small Chipped Tooth',

  description:
    'A small chip may affect appearance, create rough edges, or cause mild sensitivity. Treatment may involve smoothing, bonding, or tooth-colored repair.',

  bestFor: [
    'Minor enamel chips',
    'Rough tooth edges',
    'Cosmetic concerns',
    'Mild tooth sensitivity',
  ],

  cta: 'Ask About Chipped Tooth Repair',

  href: '#contact',
},

{
  title: 'Broken Tooth With Pain',

  description:
    'Pain after a tooth breaks may suggest deeper damage, exposed dentin, cracks, infection, or nerve involvement.',

  bestFor: [
    'Tooth pain after breakage',
    'Sensitive teeth',
    'Possible nerve involvement',
    'Urgent dental evaluation',
  ],

  cta: 'Ask About Painful Broken Teeth',

  href: '#contact',
},

{
  title: 'Cracked Tooth or Fracture Line',

  description:
    'A cracked tooth may hurt when chewing or releasing bite pressure. Some cracks are difficult to detect and require careful examination.',

  bestFor: [
    'Chewing discomfort',
    'Visible tooth cracks',
    'Fracture line concerns',
    'Bite-related pain',
  ],

  cta: 'Ask About Cracked Tooth Treatment',

  href: '#contact',
},

{
  title: 'Broken Filling or Crown',

  description:
    'When a filling or crown breaks, the tooth underneath may become sensitive or vulnerable to decay and additional fracture.',

  bestFor: [
    'Lost fillings',
    'Broken crowns',
    'Damaged dental work',
    'Tooth protection needs',
  ],

  cta: 'Ask About Repairing Dental Work',

  href: '#contact',
},

{
  title: 'Broken Tooth From Injury or Accident',

  description:
    'Falls, sports injuries, or impact trauma can chip, loosen, crack, or displace teeth even when pain is not immediate.',

  bestFor: [
    'Sports injuries',
    'Falls and accidents',
    'Trauma-related tooth damage',
    'Emergency dental evaluation',
  ],

  cta: 'Ask About Injury-Related Tooth Repair',

  href: '#contact',
},

{
  title: 'Sharp or Rough Tooth Edge',

  description:
    'A sharp tooth edge can irritate the tongue, cheek, or lip and may indicate a larger fracture that needs evaluation.',

  bestFor: [
    'Sharp tooth edges',
    'Tongue or cheek irritation',
    'Minor tooth fractures',
    'Comfort-focused repairs',
  ],

  cta: 'Ask About Smoothing or Repair Options',

  href: '#contact',
},

],
},
solutionsGrid: {
eyebrow: 'Broken Tooth Repair Options',

heading:
'Broken or Chipped Tooth Repair Options for Fractures and Damage',

body:
'Treatment depends on how much tooth structure is missing, whether the tooth hurts, and whether the crack or fracture affects the inner tooth. Promenade Dental connects emergency evaluation with restorative repair when needed.',

cards: [
{
title: 'Bonding for Small Chips',

  subtitle: 'Conservative Cosmetic Repair',

  body:
    'Cosmetic dental bonding may repair small chips, rough edges, or minor shape concerns when the tooth structure is stable.',

  image: '/assets/dental-bonding.jpg',
},

{
  title: 'Tooth-Colored Fillings',

  subtitle: 'Repair for Limited Damage',

  body:
    'A tooth-colored filling may repair a small broken area or cavity-related chip when enough healthy tooth remains.',

  image: '/assets/tooth-colored-fillings.jpg',
},

{
  title: 'Inlays or Onlays',

  subtitle: 'Support for Moderate Damage',

  body:
    'An inlay or onlay may be considered when a tooth needs more support than a filling but may not require a full crown.',

  image: '/assets/inlay-onlay.jpg',
},

{
  title: 'Dental Crowns',

  subtitle: 'Protection for Broken Teeth',

  body:
    'A dental crown may protect a tooth that is cracked, weakened, broken, or too damaged for a filling.',

  image: '/assets/dental-crowns.jpg',
},

{
  title: 'Root Canal or Extraction',

  subtitle: 'Treatment for Deep Fractures',

  body:
    'Root canal therapy may be needed if the inner tooth is involved. Extraction may be recommended if the tooth cannot be predictably restored.',

  image: '/assets/root-canal.webp',
},

],

cta: {
label: 'Discuss Broken Tooth Repair Options',
href: '#contact',
},
},
process: {
eyebrow: 'Broken Tooth Visit Process',

heading:
'Broken Tooth Visit Process for Diagnosis and Repair',

subtitle:
'A broken tooth visit is designed to determine how deep the damage goes and what treatment can protect the tooth. Some repairs may be completed during the visit depending on diagnosis and scheduling. Other cases may require staged treatment or follow-up.',

steps: [
{
title: 'Damage and Symptom Review',

  body:
    'The dental team reviews how the tooth broke, whether there is pain, and whether the tooth is sharp, loose, sensitive, or bleeding.',
},

{
  title: 'Tooth Exam and X-Rays When Needed',

  body:
    'Dr. Shriya evaluates the damaged tooth, gums, bite, cracks, existing restorations, and imaging when needed.',
},

{
  title: 'Repair Option Recommendation',

  body:
    'You receive a clear explanation of whether bonding, filling, crown, root canal therapy, extraction, or another option may be needed.',
},

{
  title: 'Treatment and Bite Comfort Check',

  body:
    'When treatment is completed or started, the repaired tooth is checked for comfort, bite contact, and follow-up needs.',
},

],

cta: {
label: 'Request a Broken Tooth Visit',
href: 'contact',
},
},
educationSection: {
eyebrow: 'Broken Teeth and Root Canal Therapy',

heading:
'Root Canal Therapy for Broken Teeth With Deep Cracks, Nerve Pain, or Infection Risk',

body:
'A broken tooth does not always need root canal therapy. But if the fracture or decay reaches the inner tooth tissue, or if symptoms suggest infection or nerve inflammation, root canal therapy may be recommended before the tooth is restored with a crown.',

supportingText:
'Dr. Shriya evaluates the tooth to determine whether it can be repaired with a smaller restoration or whether deeper treatment is needed.',

image:
'/assets/root-canal-therapy.webp',

imageAlt:
'Root canal therapy for broken teeth with deep cracks, nerve pain, infection risk, and crown restoration planning',

cta: {
label: 'Learn About Root Canal Therapy',
href: '/services/restorative-dentistry/root-canals',
},
},
educationSection2: {
eyebrow: 'Broken Teeth and Dental Crowns',

heading:
'Dental Crowns for Broken, Cracked, or Weak Teeth That Need Stronger Protection',

bodyParagraphs: [
'A crown may be recommended when a tooth has lost too much structure for a filling or bonding. Crowns help cover and protect the remaining tooth while restoring the shape needed for chewing and bite support.',

'For teeth that broke because of large fillings, deep cavities, grinding, or cracks, crown treatment may help reduce the risk of further fracture when the tooth can still be restored.',

],

image:
'/assets/dental-crown-broken.jpg',

imageAlt:
'Dental crown treatment for broken, cracked, weakened, or damaged teeth requiring long-term protection and chewing support',

cta: {
label: 'Learn About Dental Crowns',
href: '/services/restorative-dentistry/dental-crowns',
},
},
benefits: {
eyebrow: 'Why Choose Promenade Dental',

heading:
'Dentist-Led Broken Tooth Care for Diagnosis and Repair',

description:
'Broken tooth treatment should be based on the depth of damage, not just the visible chip. Promenade Dental focuses on identifying whether the tooth needs minor repair, stronger protection, infection treatment, or removal.',

items: [
{
title: 'Diagnosis Before Repair',

  body:
    'Dr. Shriya evaluates the tooth structure, cracks, symptoms, bite, restorations, gums, and X-rays when needed.',

  paths: [
    'M6 38 A18 18 0 0 1 42 38',
    'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6',
  ],
},

{
  title: 'Emergency and Restorative Care Connected',

  body:
    'Broken tooth care can connect to bonding, fillings, crowns, inlays, onlays, root canal therapy, extractions, and replacement planning.',

  paths: [
    'M6 38 A18 18 0 0 1 42 38',
    'M14 24 h20 M18 18 h12 M18 30 h12 M24 14 v20',
  ],
},

{
  title: 'Tooth-Saving Options Considered',

  body:
    'When possible, treatment planning considers whether the tooth can be repaired and protected before extraction is recommended.',

  paths: [
    'M6 38 A18 18 0 0 1 42 38',
    'M12 22 q12 -10 24 0 M18 28 h12 M24 16 v20',
  ],
},

{
  title: 'Local Care Near Fulton Ranch',

  body:
    'Promenade Dental serves patients from Fulton Ranch, Ocotillo, Sun Lakes, South Chandler, and Chandler 85248.',

  paths: [
    'M6 38 A18 18 0 0 1 42 38',
    'M18 14 a8 8 0 1 1 0.1 0 M18 22 v12 M12 34 h12',
  ],
},

],
},
localArea: {
eyebrow: 'Broken Tooth Care Near Fulton Ranch',

heading:
'Broken or Chipped Tooth Dentist Near Fulton Ranch and Chandler 85248',

body:
'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248. Our office serves patients from Fulton Ranch, Ocotillo, Sun Lakes, South Chandler, and nearby communities.\n\nIf you are looking for broken tooth repair, chipped tooth repair, cracked tooth evaluation, emergency dental care, dental bonding, dental crowns, or urgent tooth repair near Chandler 85248, Promenade Dental offers broken tooth evaluations based on diagnosis, comfort, tooth strength, and the right repair option.',

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
eyebrow: 'Related Emergency and Restorative Services',

heading:
'Related Services for Chipped, Cracked, and Painful Teeth',

intro:
'A broken or chipped tooth may need cosmetic, restorative, or emergency treatment depending on the damage. These related services help patients understand the possible next step.',

services: [
{
title: 'Emergency Dentist',

  description:
    'Emergency dental care for tooth pain, swelling, broken teeth, chipped teeth, knocked-out teeth, and urgent dental problems.',

  href: '/services/emergency-dentistry',
},

{
  title: 'Cosmetic Dental Bonding',

  description:
    'Bonding may repair small chips, rough edges, and minor cosmetic tooth damage.',

  href: '/services/cosmetic-dentistry/dental-bonding',
},

{
  title: 'Dental Crowns',

  description:
    'Crowns may protect broken, cracked, weak, or heavily damaged teeth that need stronger coverage.',

  href: '/services/restorative-dentistry/dental-crowns',
},

{
  title: 'Toothache & Dental Pain Relief',

  description:
    'Pain after a tooth breaks should be evaluated to identify cracks, infection, nerve irritation, or bite-related damage.',

  href: '/services/emergency-dentistry/toothache-relief',
},

],
},
faq: {
eyebrow: 'Frequently Asked Questions',

heading:
'Broken or Chipped Tooth Questions About Repair and Pain',

items: [
{
q: 'Is a chipped tooth a dental emergency?',
a: 'A small chip without pain may not be urgent, but a chipped tooth should be evaluated if it is painful, sharp, sensitive, bleeding, loose, or caused by injury.',
},

{
  q: 'What should I do if my tooth breaks?',
  a: 'Call the dental office, avoid chewing on the broken tooth, and keep the area clean. If there is pain, swelling, bleeding, or a large break, request urgent evaluation.',
},

{
  q: 'Can a broken tooth be repaired?',
  a: 'Many broken teeth can be repaired with bonding, fillings, crowns, inlays, onlays, or root canal therapy depending on the damage. Some teeth may need extraction if they cannot be restored.',
},

{
  q: 'Why does my broken tooth hurt?',
  a: 'Pain may come from exposed dentin, a deep crack, decay, infection, nerve irritation, or bite pressure on the damaged tooth.',
},

{
  q: 'Do I need a crown for a broken tooth?',
  a: 'A crown may be needed when the tooth has lost too much structure for bonding or a filling, or when the tooth is cracked or weakened.',
},

{
  q: 'Do I need a root canal for a broken tooth?',
  a: 'Not always. Root canal therapy may be needed if the crack, fracture, or decay reaches the inner tooth tissue or causes infection or nerve inflammation.',
},

{
  q: 'Can bonding fix a chipped tooth?',
  a: 'Bonding may repair small chips, rough edges, or minor cosmetic damage when the tooth is otherwise stable.',
},

{
  q: 'What if the broken tooth has a sharp edge?',
  a: 'A sharp edge can irritate the tongue, cheek, or lip. The tooth should be evaluated and may need smoothing, bonding, filling, or another repair.',
},

{
  q: 'Can a broken tooth get worse if I wait?',
  a: 'Yes. A broken tooth can become more sensitive, crack further, collect bacteria, or develop deeper damage if left untreated.',
},

{
  q: 'Where is Promenade Dental located?',
  a: 'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248.',
},

],
},
cta: {
 title: 'Call Promenade Dental',

highlight: 'for a Broken or Chipped Tooth',

  subtitle:
    'Promenade Dental helps patients evaluate and repair broken or chipped teeth with emergency and restorative care focused on diagnosis, comfort, tooth protection, and the right next treatment.',

  buttonText: 'Request a Broken Tooth Visit',

  buttonHref: '/contact-us',

  secondaryButtonText: 'Call (480) 802-8188',

  secondaryButtonHref: 'tel:+14808028188',

  image: '/assets/dental-lobby.jpg',
},

},
{
  serviceSlug: 'emergency-dentistry',

  slug: 'knocked-out-tooth',

  name: 'Knocked-Out Tooth',

  metaTitle:
    'Knocked-Out Tooth Dentist in Chandler, AZ | Promenade Dental',

  metaDescription:
    'Knocked-out tooth emergency care in Chandler AZ for adult tooth injuries, dental trauma, and urgent tooth loss. Call Promenade Dental near Fulton Ranch.',

  hero: {
    eyebrow: 'Dental Trauma Care in Fulton Ranch',

    title: 'Knocked-Out Tooth Emergency Care for',

    highlight:
      'Adult Tooth Injuries and Dental Trauma in Chandler',

    description:
      'A knocked-out adult tooth needs urgent dental guidance. Promenade Dental helps patients evaluate dental trauma, tooth loss, injury-related pain, bleeding, and replacement needs with emergency care planned around diagnosis, comfort, and the right next step.',

    image: '/assets/h-knocked-out.jpg',

    trustPoints: [
      'Urgent evaluation for knocked-out teeth',
      'Dental trauma and tooth injury care',
      'Guidance for adult tooth loss',
      'Replacement options discussed when needed',
      'Located in Fulton Ranch',
      'New Patients Welcome',
    ],

    primaryCTA: {
      label: 'Request an Emergency Visit',
      href: '#contact',
    },

    secondaryCTA: {
      label: 'Call (480) 802-8188',
      href: 'tel:+14808028188',
    },
  },
  immediateGuidance: {
  eyebrow: 'Dental Trauma Emergency',

  heading:
    'Call a Dentist Immediately if an Adult Tooth Is Knocked Out',

  bodyMain:
    'A knocked-out adult tooth is time-sensitive. Call Promenade Dental as soon as possible for instructions. Do not wait to see if the area improves on its own.',

  handlingInstructions:
    'If the tooth is available, handle it carefully by the crown portion, not the root. Keep it moist and bring it with you if you are coming to the dental office. The dental team can guide you based on the injury, tooth condition, bleeding, pain, and appointment availability.',

  cta: {
    label: 'Call Now',
    phoneDisplay: '(480) 802-8188',
    phoneLink: 'tel:+14808028188',
  },

  medicalWarning:
    'If the injury involves heavy bleeding, facial trauma, loss of consciousness, difficulty breathing, or a suspected jaw fracture, seek emergency medical care immediately.',
},
  overview: {
  eyebrow: 'Knocked-Out Tooth Emergency Care',

  heading:
    'Call a Dentist Immediately if an Adult Tooth Is Knocked Out',

  body:
    'A knocked-out adult tooth is time-sensitive. Call Promenade Dental as soon as possible for guidance. Do not wait to see if the area improves on its own.\n\nIf the tooth is available, handle it carefully by the crown portion rather than the root. Keep it moist and bring it with you to your appointment. The dental team will guide you based on the injury, tooth condition, bleeding, pain, and appointment availability.',

  features: [
    'Immediate guidance for knocked-out adult teeth',
    'Instructions for handling and transporting the tooth',
    'Evaluation of dental trauma and tooth condition',
    'Treatment planning based on the injury and diagnosis',
  ],

  image: '/assets/service-knocked-out-tooth.jpg',

  cta: {
    label: 'Call (480) 802-8188',
    href: 'tel:+14808028188',
  },

  note:
    'If the injury involves heavy bleeding, facial trauma, loss of consciousness, difficulty breathing, or a suspected jaw fracture, seek emergency medical care immediately.',
},
whyItMatters: {
  eyebrow: 'Knocked-Out Tooth Evaluation',

  heading:
    'Knocked-Out Tooth Evaluation for Tooth Loss, Gum Injury, Bone Trauma, and Nearby Tooth Damage',

  description:
    'A knocked-out tooth can affect more than one tooth. Nearby teeth may be loose, cracked, shifted, or injured even if they look normal. The gums and bone around the missing tooth may also need evaluation.\n\nDr. Shriya checks the injured area, bleeding, tooth socket, gum tissue, neighboring teeth, bite alignment, and imaging when needed. The treatment plan depends on the type of tooth, how long it has been out, how it was stored, the condition of the root, the condition of the socket, and whether other injuries are present.',

  items: [
    {
      title: 'Tooth Type and Injury Timing',

      body:
        'An adult tooth injury is handled differently from a baby tooth injury. Timing and how the tooth has been handled can influence the available treatment options.',

      paths: [
        'M12 12 h20 v20 h-20 z',
        'M18 18 h8 M18 24 h8',
      ],
    },

    {
      title: 'Tooth Socket and Gum Condition',

      body:
        'The tooth socket and surrounding gum tissue are examined for bleeding, debris, tissue damage, and healing needs before treatment is planned.',

      paths: [
        'M24 12 C18 18 14 24 24 38',
        'M24 12 C30 18 34 24 24 38',
      ],
    },

    {
      title: 'Nearby Teeth and Bite Alignment',

      body:
        'Dental trauma can loosen, crack, or shift neighboring teeth, so the bite and the entire injury area are evaluated for additional damage.',

      paths: [
        'M12 20 h24',
        'M16 28 h16',
      ],
    },
  ],

  cta: {
    label: 'Schedule an Emergency Tooth Injury Evaluation',
    href: '/contact-us',
  },
},
features: {
  eyebrow: 'Knocked-Out Tooth First Steps',

  heading:
    'Steps to Take After an Adult Tooth Is Knocked Out',

  body:
    'A knocked-out tooth needs urgent dental guidance. These steps can help protect the tooth and injury area while you contact the dental office.',

  features: [
    {
      title: 'Call the Dental Office Immediately',

      body:
        'Call Promenade Dental at (480) 802-8188 and explain that an adult tooth was knocked out.',
    },

    {
      title: 'Handle the Tooth Carefully',

      body:
        'If you have the tooth, hold it by the crown portion. Avoid touching or scrubbing the root.',
    },

    {
      title: 'Keep the Tooth Moist',

      body:
        'Do not let the tooth dry out. The dental team can guide you on the best way to keep it moist based on your situation.',
    },

    {
      title: 'Avoid Chewing on the Injured Area',

      body:
        'Do not bite or chew with the injured area until a dentist evaluates the tooth, gums, and surrounding tissues.',
    },

    {
      title: 'Bring the Tooth to the Visit',

      body:
        'If the tooth is available, bring it with you so the dentist can evaluate its condition.',
    },
  ],

  cta: {
    label: 'Call for Knocked-Out Tooth Guidance',
    href: 'tel:+14808028188',
  },
},
comparisonSection: {
  eyebrow: 'Adult vs Baby Tooth Injuries',

  heading:
    'Knocked-Out Adult Teeth and Baby Teeth Need Different Dental Guidance',

  bodyParagraphs: [
    'A knocked-out adult tooth is usually handled as a time-sensitive dental emergency. A knocked-out baby tooth is different because placing it back may damage the developing adult tooth underneath.',

    'If you are not sure whether the tooth is a baby tooth or adult tooth, call Promenade Dental for guidance. The age of the patient, tooth location, and dental development can help determine the right next step.',
  ],

  adultTooth: {
    title: 'Adult Tooth Injury',

    body:
      'Adult tooth injuries may require urgent dental evaluation to assess whether the tooth, socket, nearby teeth, and gums can be treated.',
  },

  babyTooth: {
    title: 'Baby Tooth Injury',

    body:
      'Baby tooth injuries should still be evaluated, but the approach is different because of the developing permanent tooth.',
  },

  cta: {
    label: 'Call for Tooth Injury Guidance',
    href: 'tel:+14808028188',
  },
},
solutionsGrid: {
  eyebrow: 'Knocked-Out Tooth Treatment Options',

  heading:
    'Knocked-Out Tooth Treatment Options for Healing and Replacement',

  body:
    'Treatment depends on the tooth type, injury timing, tooth condition, gum and bone injury, and whether the tooth can be saved. Some cases may involve attempted repositioning or stabilization. Other cases may need healing care and replacement planning.',

  cards: [
    {
      title: 'Tooth Repositioning Evaluation',

      subtitle: 'Assessment for Tooth Repositioning',

      body:
        'If an adult tooth is available and the situation is suitable, the dentist can evaluate whether repositioning may be possible.',

      image: '/assets/dental-repost.webp',
    },

    {
      title: 'Stabilization of Injured Teeth',

      subtitle: 'Support for Dental Trauma',

      body:
        'Nearby loose or displaced teeth may need stabilization depending on the injury and the findings during the dental evaluation.',

      image: '/assets/injury-teeth.webp',
    },

    {
      title: 'Root Canal or Follow-Up Care',

      subtitle: 'Ongoing Healing and Monitoring',

      body:
        'A knocked-out or severely injured adult tooth may require follow-up care, including root canal evaluation, depending on the extent of the injury.',

      image: '/assets/root-canal.webp',
    },

    {
      title: 'Tooth Replacement Planning',

      subtitle: 'Options When a Tooth Cannot Be Saved',

      body:
        'If the tooth cannot be saved, replacement options such as a dental implant, bridge, or partial denture may be discussed.',

      image: '/assets/tooth-replacement.jpg',
    },
  ],

  cta: {
    label: 'Discuss Knocked-Out Tooth Treatment Options',
    href: '#contact',
  },
},
process: {
  eyebrow: 'Knocked-Out Tooth Visit Process',

  heading: 'Knocked-Out Tooth Emergency Visit Process',

  subtitle:
    'A knocked-out tooth visit is designed to evaluate the injury quickly and determine the safest next step. The visit may include tooth evaluation, socket assessment, X-rays when needed, stabilization, medication discussion, referral if complex, or replacement planning if the tooth cannot be saved.',

  steps: [
    {
      title: 'Injury and Timing Review',

      body:
        'The dental team reviews when the tooth was knocked out, how the injury happened, and how the tooth was handled or stored.',
    },

    {
      title: 'Tooth, Gum, and Socket Evaluation',

      body:
        'Dr. Shriya evaluates the missing tooth area, bleeding, gum tissue, socket condition, and the tooth if it is available.',
    },

    {
      title: 'Nearby Teeth and Bite Check',

      body:
        'The surrounding teeth are checked for looseness, cracks, shifting, bite changes, and trauma-related damage.',
    },

    {
      title: 'Treatment or Replacement Plan',

      body:
        'You receive a clear explanation of whether the tooth can be treated, whether stabilization is needed, or whether replacement planning should begin.',
    },
  ],

  cta: {
    label: 'Request a Knocked-Out Tooth Visit',
    href: '#contact',
  },
},
replacementOptions: {
  eyebrow: 'Tooth Replacement Options',

  heading:
    'Replacement Options if a Knocked-Out Tooth Cannot Be Saved',

  body:
    'If a knocked-out tooth cannot be saved, replacing the missing tooth may help restore chewing support, smile appearance, and tooth position. The best replacement option depends on the location of the missing tooth, bone support, gum health, age, bite, and treatment goals.',

  cards: [
    {
      title: 'Dental Implant',

      body:
        'A dental implant may replace the missing tooth with an implant-supported crown when bone support, gum health, and healing are suitable.',
    },

    {
      title: 'Dental Bridge',

      body:
        'A dental bridge may replace the missing tooth with a fixed restoration supported by nearby teeth or implants when appropriate.',
    },

    {
      title: 'Partial Denture',

      body:
        'A partial denture may replace the missing tooth with a removable appliance, especially when multiple teeth are missing or removable treatment is preferred.',
    },
  ],

  cta: {
    label: 'Discuss Tooth Replacement Options',
    href: '#contact',
  },
},
educationSection: {
  eyebrow: 'Dental Trauma and Medical Emergencies',

  heading:
    'Dental Trauma With Facial Injury, Heavy Bleeding, or Jaw Pain May Need Medical Emergency Care',

  body:
    'Some mouth injuries involve more than teeth. If the injury includes heavy bleeding, facial cuts, loss of consciousness, trouble breathing, severe swelling, suspected jaw fracture, or head injury symptoms, seek emergency medical care immediately.',

  supportingText:
    'After medical stabilization, dental evaluation may still be needed for teeth, gums, bite, and replacement planning.',

  image:
    '/assets/dental-trauma.jpg',

  imageAlt:
    'Emergency evaluation for dental trauma with facial injury, heavy bleeding, jaw pain, and medical emergency symptoms',

  cta: {
    label: 'Call 911 or Seek Emergency Medical Care',
    href: 'tel:911',
  },
},
benefits: {
  eyebrow: 'Why Choose Promenade Dental',

 heading:
  'Dentist-Led Care for Knocked-Out Teeth and Dental Trauma',

  description:
    'A knocked-out tooth needs fast guidance and careful evaluation. Promenade Dental focuses on diagnosing the full injury area, checking whether the tooth or nearby teeth can be treated, and explaining replacement options if needed.',

  items: [
    {
      title: 'Urgent Dental Trauma Evaluation',

      body:
        'Dr. Shriya evaluates the missing tooth area, gums, socket, nearby teeth, bite, symptoms, and imaging when needed.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6',
      ],
    },

    {
      title: 'Adult and Baby Tooth Guidance',

      body:
        'The dental team helps patients understand why adult and baby tooth injuries are handled differently.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 24 h20 M18 18 h12 M18 30 h12 M24 14 v20',
      ],
    },

    {
      title: 'Tooth-Saving Evaluation When Possible',

      body:
        'When appropriate, the tooth and socket are evaluated for possible treatment based on timing, condition, and injury factors.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M12 22 q12 -10 24 0 M18 28 h12 M24 16 v20',
      ],
    },

    {
      title: 'Replacement Planning if Needed',

      body:
        'If the tooth cannot be saved, Promenade Dental can discuss bridges, implants, partial dentures, and restorative options.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M18 14 a8 8 0 1 1 0.1 0 M18 22 v12 M12 34 h12',
      ],
    },
  ],
},
localArea: {
  eyebrow: 'Knocked-Out Tooth Care Near Fulton Ranch',

  heading:
    'Knocked-Out Tooth Dentist Near Fulton Ranch and Chandler 85248',

  body:
    'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248. Our office serves patients from Fulton Ranch, Ocotillo, Sun Lakes, South Chandler, and nearby communities.\n\nIf you are looking for a knocked-out tooth dentist, dental trauma care, emergency dentist, adult tooth injury care, or urgent dental care near Chandler 85248, Promenade Dental offers emergency evaluations based on diagnosis, comfort, injury assessment, and tooth replacement needs when appropriate.',

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
  eyebrow: 'Related Emergency and Restorative Services',

  heading:
  'Related Services for Dental Trauma and Tooth Loss',

  intro:
    'A knocked-out tooth may connect with emergency dentistry, tooth replacement, root canal evaluation, or restorative care depending on the injury.',

  services: [
    {
      title: 'Emergency Dentist',

      description:
        'Emergency dental care for tooth pain, swelling, broken teeth, chipped teeth, knocked-out teeth, and urgent dental problems.',

      href: '/services/emergency-dentistry',
    },

    {
      title: 'Broken or Chipped Tooth',

      description:
        'Dental trauma may also cause cracked, chipped, fractured, or painful teeth that need repair.',

      href: '/services/emergency-dentistry/broken-chipped-tooth',
    },

    {
      title: 'Dental Implants',

      description:
        'Dental implants may replace a missing tooth when the knocked-out tooth cannot be saved and the patient is suitable.',

      href: '/services/dental-implants',
    },

    {
      title: 'Dental Bridges',

      description:
        'A dental bridge may replace a missing tooth with a fixed restoration supported by nearby teeth or implants.',

      href: '/services/restorative-dentistry/dental-bridges',
    },
  ],
},
faq: {
  eyebrow: 'Frequently Asked Questions',

 heading:
  'Knocked-Out Tooth Questions and Answers',

  items: [
    {
      q: 'Is a knocked-out tooth a dental emergency?',
      a: 'Yes. A knocked-out adult tooth is a dental emergency and should be handled with urgent dental guidance.',
    },

    {
      q: 'What should I do first if an adult tooth is knocked out?',
      a: 'Call the dental office immediately. If you have the tooth, handle it by the crown, avoid touching the root, keep it moist, and bring it with you.',
    },

    {
      q: 'Can a knocked-out tooth be saved?',
      a: 'Sometimes, depending on the type of tooth, how long it has been out, how it was stored, the condition of the root and socket, and whether other injuries are present.',
    },

    {
      q: 'Should I put a knocked-out baby tooth back in?',
      a: 'A knocked-out baby tooth is handled differently from an adult tooth. Do not assume it should be placed back. Call the dental office for guidance.',
    },

    {
      q: 'What if I cannot find the knocked-out tooth?',
      a: 'Still call for an emergency evaluation. The dentist can check the socket, nearby teeth, gums, bite, and discuss replacement options if needed.',
    },

    {
      q: 'What if nearby teeth feel loose after the injury?',
      a: 'Nearby teeth should be evaluated because trauma can loosen, crack, or shift teeth even if they were not knocked out.',
    },

    {
      q: 'Will I need a root canal after a knocked-out tooth?',
      a: 'A severely injured adult tooth may need root canal evaluation depending on the case. Dr. Shriya will explain follow-up needs after diagnosis.',
    },

    {
      q: 'What replacement options are available if the tooth cannot be saved?',
      a: 'Replacement options may include a dental implant, dental bridge, or partial denture depending on tooth location, bone support, gum health, bite, and treatment goals.',
    },

    {
      q: 'When should I go to the emergency room instead of the dentist?',
      a: 'Seek emergency medical care for heavy bleeding, facial trauma, head injury symptoms, difficulty breathing, suspected jaw fracture, or loss of consciousness.',
    },

    {
      q: 'Where is Promenade Dental located?',
      a: 'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248.',
    },
  ],
},
cta: {
  title: 'Call Promenade Dental',

highlight: 'for a Knocked-Out Tooth Emergency',

  subtitle:
    'Promenade Dental helps patients evaluate knocked-out teeth, tooth injuries, nearby tooth trauma, gum damage, pain, bleeding, and replacement needs with emergency dental care focused on diagnosis, comfort, and the right next step.',

  buttonText: 'Request an Emergency Visit',

  buttonHref: '/contact-us',

  secondaryButtonText: 'Call (480) 802-8188',

  secondaryButtonHref: 'tel:+14808028188',

  image: '/assets/dental-lobby.jpg',
},
},

{
  serviceSlug: 'family-dentistry',

  slug: 'dental-exams-cleanings',

  name: 'Dental Exams & Cleanings',

  metaTitle:
    'Dental Exams & Cleanings in Chandler, AZ | Promenade Dental',

  metaDescription:
    'Dental exams and cleanings in Chandler AZ for cavity prevention, gum health, plaque removal, and routine checkups. Visit Promenade Dental near Fulton Ranch.',

  hero: {
    eyebrow: 'Preventive Dental Care in Fulton Ranch',

    title: 'Dental Exams and Cleanings for',

    highlight:
      'Cavity Prevention, Gum Health, and Routine Oral Care in Chandler',

    description:
      'Promenade Dental helps patients maintain healthier teeth and gums with routine dental exams and professional cleanings focused on cavity detection, plaque removal, gum evaluation, oral health monitoring, and prevention-focused care.',

    image: '/assets/h-dental-exams.jpg',

    trustPoints: [
      'Routine dental checkups',
      'Professional teeth cleanings',
      'Cavity and gum health evaluation',
      'Preventive care for adults and children',
      'Located in Fulton Ranch',
      'New Patients Welcome',
    ],

    primaryCTA: {
      label: 'Book a Dental Cleaning',
      href: '#contact',
    },

    secondaryCTA: {
      label: 'Call (480) 802-8188',
      href: 'tel:+14808028188',
    },
  },
overview: {
  eyebrow: 'Preventive Dental Care',

  heading:
    'Dental Exams and Cleanings for Plaque Buildup, Cavities, Gum Inflammation, and Oral Health Changes',

  body:
    'Many dental problems begin quietly. Cavities, gum inflammation, enamel wear, cracked teeth, and old filling problems may not cause pain in the early stages. Routine dental exams and cleanings help identify these concerns before they become more serious or expensive to treat.\n\nProfessional cleanings remove plaque and tartar that brushing and flossing may miss. Dental exams help Dr. Shriya check the teeth, gums, bite, existing dental work, and signs of oral health changes over time.',

  features: [
    'Routine exams for early cavity detection',
    'Professional plaque and tartar removal',
    'Gum health and bite evaluation',
    'Monitoring of existing dental work and oral health changes',
  ],

  image: '/assets/service-dental-exams-cleanings.jpg',

  cta: {
    label: 'Schedule a Preventive Dental Visit',
    href: '#contact',
  },

  note:
    'Routine preventive visits help detect oral health concerns early and support long-term dental health for both adults and children.',
},
whyItMatters: {
  eyebrow: 'Comprehensive Dental Examination',

  heading:
    'Dental Exam for Cavities, Gum Health, Bite Changes, Tooth Wear, and Existing Dental Work',

  description:
    'A dental exam is more than a quick look at the teeth. It helps evaluate the condition of your mouth as a whole, including the teeth, gums, bite, jaw function, restorations, and areas that may need monitoring.\n\nDr. Shriya checks for cavities, gum inflammation, tooth wear, cracked teeth, loose fillings, crown issues, bite-related stress, and other changes that may affect long-term oral health.',

  items: [
    {
      title: 'Cavity Detection',

      body:
        'Dental exams help identify early decay before it becomes tooth pain, infection, or larger restorative treatment.',

      paths: [
        'M12 12 h24 v24 h-24 z',
        'M18 18 h12',
      ],
    },

    {
      title: 'Gum Health Evaluation',

      body:
        'The gums are checked for inflammation, bleeding, recession, pocketing, or signs that gum disease treatment may be needed.',

      paths: [
        'M12 30 C18 18 30 18 36 30',
        'M16 34 h16',
      ],
    },

    {
      title: 'Existing Dental Work Check',

      body:
        'Fillings, crowns, bridges, dentures, and implant restorations are monitored for wear, damage, fit, and long-term function.',

      paths: [
        'M16 16 h16 v16 h-16 z',
        'M20 24 h8',
      ],
    },
  ],

  cta: {
    label: 'Book a Dental Exam',
    href: '#contact',
  },
},
features: {
  eyebrow: 'Professional Dental Cleanings',

  heading:
    'Professional Teeth Cleanings for Plaque, Tartar, Stains, and Gum Health Support',

  body:
    'Even with good brushing and flossing, plaque can harden into tartar in areas that are difficult to clean at home. Professional dental cleanings help remove buildup from the teeth and gumline while supporting fresher breath, cleaner teeth, and healthier gums.',

  features: [
    {
      title: 'Removes Plaque and Tartar',

      body:
        'Professional cleanings remove buildup that cannot always be cleared with home brushing alone.',
    },

    {
      title: 'Supports Healthier Gums',

      body:
        'Cleanings help reduce plaque around the gumline, supporting healthier gums and lowering the risk of inflammation.',
    },

    {
      title: 'Helps Keep Teeth Feeling Cleaner',

      body:
        'A professional cleaning polishes the teeth and removes surface buildup that can affect how the teeth look and feel.',
    },
  ],

  cta: {
    label: 'Schedule a Professional Cleaning',
    href: '#contact',
  },
},
servicesGrid: {
  eyebrow: 'Preventive Dental Services',

  heading:
    'Dental Checkup Services for Preventive Oral Care',

  intro:
    'A routine dental visit may include several preventive steps depending on the patient’s age, oral health, symptoms, risk factors, and dental history.',

  services: [
    {
      title: 'Tooth and Cavity Evaluation',

      description:
        'Dr. Shriya checks for cavities, enamel changes, cracks, worn areas, broken fillings, and signs of tooth damage.',

      bestFor: [
        'Early decay',
        'Tooth sensitivity',
        'Routine checkups',
        'Preventive monitoring',
      ],

      cta: 'Ask About a Cavity Check',

      href: '#contact',
    },

    {
      title: 'Gum Health Evaluation',

      description:
        'The gums are evaluated for inflammation, bleeding, recession, pocket depth, and signs of periodontal problems.',

      bestFor: [
        'Bleeding gums',
        'Gum sensitivity',
        'Bad breath',
        'Gum disease prevention',
      ],

      cta: 'Ask About Gum Health',

      href: '#contact',
    },

    {
      title: 'Professional Teeth Cleaning',

      description:
        'Plaque and tartar are removed from the teeth and gumline, followed by polishing when appropriate.',

      bestFor: [
        'Routine cleaning',
        'Tartar buildup',
        'Plaque control',
        'Fresher-feeling teeth',
      ],

      cta: 'Book a Teeth Cleaning',

      href: '#contact',
    },

    {
      title: 'Dental X-Rays When Needed',

      description:
        'X-rays may be recommended to check areas that cannot be fully seen during a visual exam, including between teeth, below old restorations, and around tooth roots.',

      bestFor: [
        'Hidden cavities',
        'Root concerns',
        'Bone support',
        'Infection signs',
      ],

      cta: 'Ask About Dental X-Rays',

      href: '#contact',
    },

    {
      title: 'Oral Health Screening',

      description:
        'The mouth is checked for changes in the soft tissues, gums, tongue, cheeks, and other visible oral structures.',

      bestFor: [
        'Routine monitoring',
        'Tissue changes',
        'Preventive dental care',
        'Oral health assessment',
      ],

      cta: 'Schedule a Checkup',

      href: '#contact',
    },

    {
      title: 'Personalized Prevention Plan',

      description:
        'Patients receive guidance based on cavity risk, gum health, brushing habits, flossing habits, diet, sensitivity, and dental history.',

      bestFor: [
        'Cavity prevention',
        'Gum health support',
        'Home care improvement',
        'Long-term oral health',
      ],

      cta: 'Build a Prevention Plan',

      href: '#contact',
    },
  ],
},
solutionsGrid: {
  eyebrow: 'Who Benefits From Preventive Dental Care',

  heading:
    'Preventive Dental Care for Adults and Children',

  body:
    'Dental exams and cleanings are important for patients at different stages of life. The purpose may change depending on age, gum health, cavity risk, existing dental work, and treatment history.',

  cards: [
    {
      title: 'Adults Maintaining Oral Health',

      subtitle: 'Routine Preventive Care',

      body:
        'Routine exams help adults monitor cavities, gum health, existing dental work, tooth wear, and bite-related changes before larger problems develop.',

      image: '/assets/adult-dental-exam.jpg',
    },

    {
      title: 'Children Learning Preventive Habits',

      subtitle: 'Growing Smiles',

      body:
        'Cleanings and exams help children become comfortable with dental visits while monitoring tooth development, oral hygiene, and cavity risk.',

      image: '/assets/child-dental-cleaning.jpg',
    },

    {
      title: 'Patients With Crowns, Fillings, Bridges, or Implants',

      subtitle: 'Monitoring Existing Dental Work',

      body:
        'Existing restorations benefit from regular evaluation to check their fit, wear, surrounding gum health, and overall function.',

      image: '/assets/dental-restoration-check.jpg',
    },

    {
      title: 'Patients With Gum Sensitivity or Bleeding',

      subtitle: 'Gum Health Support',

      body:
        'Patients experiencing bleeding gums, bad breath, or gum tenderness can benefit from regular evaluations and preventive care to monitor gum health.',

      image: '/assets/gum-health-evaluation.jpg',
    },
  ],

  cta: {
    label: 'Schedule Your Preventive Dental Visit',
    href: '#contact',
  },
},
suitability: {
  eyebrow: 'Recommended Preventive Visit Schedule',

  heading:
    'Dental Cleaning Schedule Based on Cavity Risk, Gum Health, and Oral Care Needs',

  body:
    'Many patients benefit from regular dental exams and cleanings, but the right schedule depends on oral health. Some patients may need routine preventive visits. Others may need more frequent maintenance if they have gum disease, heavy tartar buildup, high cavity risk, dry mouth, orthodontic appliances, or extensive dental work.\n\nPromenade Dental can recommend a visit schedule based on your teeth, gums, home care, medical history, and past dental needs.',

  goodFit: {
    title: 'Routine Preventive Visits May Be Enough If',

    items: [
      'Your gums are healthy',
      'You have low cavity risk',
      'Plaque and tartar buildup are controlled',
      'You have no active dental symptoms',
      'Existing dental work is stable',
    ],
  },

  alternative: {
    title: 'More Frequent Visits May Be Needed If',

    items: [
      'You have a history of gum disease',
      'Your gums bleed easily',
      'You build tartar quickly',
      'You have frequent cavities',
      'You have dry mouth or high cavity risk',
      'You have implants, bridges, or extensive restorations',
    ],
  },

  cta: {
    label: 'Ask About Your Cleaning Schedule',
    href: '#contact',
  },
},
process: {
  eyebrow: 'Dental Exam and Cleaning Process',

  heading:
    'What to Expect During Your Dental Exam and Cleaning',

  subtitle:
    'A preventive dental visit is designed to clean the teeth, evaluate oral health, identify early concerns, and help patients understand what needs attention now or later.',

  steps: [
    {
      title: 'Oral Health Review',

      body:
        'The dental team reviews your dental history, symptoms, home care habits, tooth sensitivity, gum concerns, and previous dental treatment.',
    },

    {
      title: 'Dental Exam',

      body:
        'Dr. Shriya evaluates the teeth, gums, bite, existing dental work, and any areas that may need monitoring or additional evaluation.',
    },

    {
      title: 'Professional Cleaning',

      body:
        'Plaque and tartar are removed from the teeth and along the gumline, followed by polishing when appropriate.',
    },

    {
      title: 'Prevention and Follow-Up Plan',

      body:
        'You receive personalized guidance on home care, cavity prevention, gum health, recommended follow-up visits, and any treatment that may be beneficial.',
    },
  ],

  cta: {
    label: 'Book a Dental Exam and Cleaning',
    href: '#contact',
  },
},
educationSection: {
  eyebrow: 'Preventive Dental Care',

  heading:
    'Dental Checkups for Finding Small Problems Before They Become Tooth Pain or Emergencies',

  body:
    'Routine dental visits can help detect cavities, gum inflammation, cracked teeth, loose fillings, and worn dental work before symptoms become severe. When small problems are found early, treatment may be simpler than waiting until the tooth hurts or breaks.',

  supportingText:
    'If an issue is found during your exam, Promenade Dental can connect preventive care with restorative treatments such as fillings, crowns, gum disease treatment, night guards, or root canal evaluation when needed.',

  image: '/assets/dental-exams.jpg',

  imageAlt:
    'Routine dental exam and professional cleaning focused on early cavity detection, gum health evaluation, and preventive oral care',

  cta: {
    label: 'Schedule a Preventive Checkup',
    href: '#contact',
  },
},
benefits: {
  eyebrow: 'Why Choose Promenade Dental',

  heading:
  'Dentist-Led Dental Exams and Cleanings for Family Oral Health',

  description:
    'Preventive dentistry should be practical, consistent, and based on each patient’s oral health needs. Promenade Dental helps patients maintain clean teeth, healthier gums, and clearer awareness of their dental condition over time.',

  items: [
    {
      title: 'Complete Preventive Evaluation',

      body:
        'Dr. Shriya evaluates your teeth, gums, bite, existing restorations, symptoms, and recommends X-rays when needed to monitor your oral health.',

      paths: [
        'M8 38 A18 18 0 0 1 40 38',
        'M16 14 h16 v20 h-16 z M20 20 h8 M20 26 h8',
      ],
    },

    {
      title: 'Professional Cleaning and Plaque Control',

      body:
        'Professional cleanings remove plaque and tartar that daily brushing may miss, supporting healthier gums and long-term oral health.',

      paths: [
        'M10 30 h28',
        'M16 18 C20 12 28 12 32 18 M18 30 h12',
      ],
    },

    {
      title: 'Prevention for Adults and Children',

      body:
        'Preventive dental care is tailored for children, adults, families, and patients with ongoing oral health or restorative needs.',

      paths: [
        'M12 34 A10 10 0 1 1 36 34',
        'M18 18 h12 M24 14 v20',
      ],
    },

    {
      title: 'Restorative Care Connected When Needed',

      body:
        'If a concern is identified during your visit, Promenade Dental can connect you with fillings, crowns, gum care, root canal evaluation, or other restorative treatments.',

      paths: [
        'M12 14 h24 v20 h-24 z',
        'M18 20 h12 M24 14 v20',
      ],
    },
  ],
},
localArea: {
  eyebrow: 'Dental Exams and Cleanings Near Fulton Ranch',

  heading:
    'Dental Exams and Cleanings Near Fulton Ranch and Chandler 85248',

  body:
    'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248. Our office serves patients from Fulton Ranch, Ocotillo, Sun Lakes, South Chandler, and nearby communities.\n\nIf you are looking for dental cleanings, routine dental exams, preventive dentistry, teeth cleanings, cavity checks, or family dental care near Chandler 85248, Promenade Dental offers preventive visits focused on plaque removal, gum health, cavity detection, and long-term oral health.',

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
  eyebrow: 'Related Preventive and Family Services',

  heading:
  'Related Services for Preventive Dentistry and Family Care',

  intro:
    'Dental exams and cleanings are the foundation of preventive care. Depending on the exam findings, patients may also benefit from related family and preventive services.',

  services: [
    {
      title: 'Family & Preventive Dentistry',

      description:
        'Explore preventive dental care for adults, children, families, gum health, cavities, and long-term oral health.',

      href: '/services/family-dentistry',
    },

    {
      title: 'Children’s Dentistry',

      description:
        'Dental visits for children help monitor tooth development, cavity risk, healthy hygiene habits, and comfort with dental care.',

      href: '/services/family-dentistry/childrens-dentistry',
    },

    {
      title: 'Gum Disease Treatment',

      description:
        'Gum treatment may be recommended when bleeding, inflammation, pocketing, or periodontal concerns are identified during an exam.',

      href: '/services/family-dentistry/gum-disease-treatment',
    },

    {
      title: 'Night Guards & Teeth Grinding',

      description:
        'Custom night guards may help protect teeth from grinding, clenching, tooth wear, and bite-related damage.',

      href: '/services/family-dentistry/night-guards-teeth-grinding',
    },
  ],
},
faq: {
  eyebrow: 'Frequently Asked Questions',

  heading:
  'Dental Exam and Cleaning Questions About Preventive Care',

  items: [
    {
      q: 'What happens during a dental exam and cleaning?',
      a: 'A dental exam checks the teeth, gums, bite, existing dental work, and overall oral health. A professional cleaning removes plaque and tartar buildup and may include polishing when appropriate.',
    },

    {
      q: 'Why do I need dental cleanings if I brush and floss?',
      a: 'Brushing and flossing are important, but plaque can harden into tartar that cannot be removed with a toothbrush. Professional cleanings help remove buildup from areas that are difficult to clean at home.',
    },

    {
      q: 'How often should I get a dental cleaning?',
      a: 'The right schedule depends on your gum health, cavity risk, tartar buildup, medical history, and dental needs. Promenade Dental can recommend a cleaning schedule based on your oral health.',
    },

    {
      q: 'Can dental exams find cavities before they hurt?',
      a: 'Yes. Dental exams can identify early cavities before they become painful or require more extensive treatment.',
    },

    {
      q: 'Do dental cleanings help with gum health?',
      a: 'Yes. Cleanings remove plaque and tartar around the gumline, supporting gum health and helping reduce the risk of inflammation.',
    },

    {
      q: 'Will I need dental X-rays?',
      a: 'Dental X-rays may be recommended when needed to evaluate areas that cannot be fully seen during a visual exam, such as between teeth, around tooth roots, or beneath existing dental work.',
    },

    {
      q: 'Are dental cleanings important for children?',
      a: 'Yes. Dental cleanings and exams help monitor tooth development, cavity risk, oral hygiene habits, and a child’s comfort with routine dental care.',
    },

    {
      q: 'Can a cleaning remove stains?',
      a: 'Professional cleanings may remove some surface stains and buildup, but deeper discoloration may require teeth whitening or another cosmetic treatment.',
    },

    {
      q: 'What if the dentist finds a cavity during my exam?',
      a: 'If a cavity is found, Dr. Shriya will explain its size, location, and treatment options. A tooth-colored filling may be recommended for smaller cavities.',
    },

    {
      q: 'Where is Promenade Dental located?',
      a: 'Promenade Dental is located at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248, in the Fulton Ranch area.',
    },
  ],
},
cta: {
 title: 'Schedule a Dental Exam and Cleaning',

highlight: 'for Cavity Prevention and Gum Health',

  subtitle:
    'Promenade Dental helps patients maintain healthier teeth and gums with preventive dental visits focused on professional cleanings, dental exams, cavity detection, gum evaluation, and long-term oral health planning.',

  buttonText: 'Book a Dental Cleaning',

  buttonHref: '/contact-us',

  secondaryButtonText: 'Call (480) 802-8188',

  secondaryButtonHref: 'tel:+14808028188',

  image: '/assets/dental-lobby.jpg',
},

},
{
  serviceSlug: 'family-dentistry',

  slug: 'childrens-dentistry',

  name: "Children's Dentistry",

  metaTitle:
    "Children's Dentist in Chandler, AZ | Promenade Dental",

  metaDescription:
    "Children's dentistry in Chandler AZ for kids' dental exams, cleanings, cavity prevention, oral hygiene guidance, and family dental care near Fulton Ranch.",

  hero: {
    eyebrow: "Kids' Dental Care in Fulton Ranch",

    title: "Children's Dentistry for",

    highlight:
      'Cavity Prevention, Healthy Tooth Development, and Comfortable Dental Visits in Chandler',

    description:
      'Promenade Dental helps children build healthier dental habits with gentle exams, cleanings, cavity checks, preventive guidance, and family-focused dental care planned around comfort, development, and long-term oral health.',

    image: '/assets/h-children-dentistry.webp',

    trustPoints: [
      'Dental care for children and families',
      "Kids' exams and cleanings",
      'Cavity prevention and oral hygiene guidance',
      'Comfort-focused dental visits',
      'Located in Fulton Ranch',
      'New Patients Welcome',
    ],

    primaryCTA: {
      label: 'Book a Child Dental Visit',
      href: '#contact',
    },

    secondaryCTA: {
      label: 'Call (480) 802-8188',
      href: 'tel:+14808028188',
    },
  },
  overview: {
  eyebrow: "Children's Preventive Dental Care",

  heading:
    "Children's Dental Care for Cavities, Plaque Buildup, Tooth Development, and Dental Visit Anxiety",

  body:
    "Children's dental needs change as baby teeth come in, permanent teeth develop, and oral hygiene habits form. Cavities, plaque buildup, tooth sensitivity, brushing difficulties, crowding, thumb habits, grinding, and fear of dental visits can all affect a child's oral health.\n\nPromenade Dental provides children's dentistry focused on prevention, early detection, comfort, and parent guidance. Dr. Shriya helps families understand what is normal, what needs monitoring, and what treatment may be needed if a dental problem is found.",

  features: [
    'Cavity detection and prevention',
    'Gentle dental exams and cleanings',
    'Monitoring tooth development and oral habits',
    'Parent guidance for healthy smiles',
  ],

  image: '/assets/service-childrens-dentistry.jpg',

  cta: {
    label: "Schedule a Kids' Dental Checkup",
    href: '#contact',
  },

  note:
    "Early preventive dental visits help children develop healthy habits, reduce dental anxiety, and support strong teeth through every stage of growth.",
},
whyItMatters: {
  eyebrow: "Comprehensive Children's Dental Exam",

  heading:
    "Child Dental Exams for Cavities, Gum Health, Tooth Development, Bite Changes, and Oral Habits",

  description:
    "A child's dental exam helps monitor tooth development and identify problems early. The visit may include checking baby teeth, permanent teeth, gums, bite development, brushing effectiveness, cavity risk, enamel strength, and oral habits that may affect dental growth.\n\nDr. Shriya also helps parents understand how to support their child's oral care at home, including brushing, flossing, snacks, fluoride exposure, and when to schedule follow-up visits.",

  items: [
    {
      title: 'Cavity Risk Evaluation',

      body:
        'Children can develop cavities quickly, especially around grooves, between teeth, and areas that are difficult to brush.',

      paths: [
        'M12 12 h24 v24 h-24 z',
        'M18 18 h12',
      ],
    },

    {
      title: 'Tooth Development Monitoring',

      body:
        'Dental visits help monitor baby teeth, permanent teeth, eruption patterns, spacing, and bite changes.',

      paths: [
        'M12 30 C18 18 30 18 36 30',
        'M16 34 h16',
      ],
    },

    {
      title: 'Oral Habit Guidance',

      body:
        'Thumb sucking, mouth breathing, grinding, snacking habits, and brushing challenges may need monitoring or parent guidance.',

      paths: [
        'M16 16 h16 v16 h-16 z',
        'M20 24 h8',
      ],
    },
  ],

  cta: {
    label: 'Book a Child Dental Exam',
    href: '#contact',
  },
},
features: {
  eyebrow: "Children's Professional Dental Cleanings",

  heading:
    "Children's Dental Cleanings for Cavity Prevention and Healthy Gums",

  body:
    "Even children who brush regularly may miss areas near the gumline, between teeth, or around back molars. Professional cleanings help remove plaque buildup, polish the teeth, and give children a clearer understanding of how to care for their smile at home.",

  features: [
    {
      title: 'Removes Plaque Buildup',

      body:
        'Professional cleanings help remove plaque from areas children may miss while brushing.',
    },

    {
      title: 'Supports Gum Health',

      body:
        'Cleanings help reduce buildup around the gumline and support healthier gums.',
    },

    {
      title: 'Builds Better Home Habits',

      body:
        'Children can learn age-appropriate brushing and flossing habits during preventive visits.',
    },
  ],

  cta: {
    label: "Schedule a Kids' Dental Cleaning",
    href: '#contact',
  },
},
servicesGrid: {
  eyebrow: "Children's Preventive Dental Services",

  heading: "Children's Dental Services for Exams and Prevention",

  intro:
    "Children's dentistry at Promenade Dental focuses on prevention, comfort, early diagnosis, and helping families make informed decisions about oral health.",

  services: [
    {
      title: "Children's Dental Exams",

      description:
        "A child's dental exam checks teeth, gums, bite development, oral hygiene, cavity risk, and any concerns parents may have.",

      bestFor: [
        'Routine checkups',
        'Tooth development',
        'Cavity detection',
        'Dental growth monitoring',
      ],

      cta: 'Book a Child Dental Exam',

      href: '#contact',
    },

    {
      title: "Children's Teeth Cleanings",

      description:
        'Professional cleanings help remove plaque buildup, polish teeth, and support healthier gums and cavity prevention.',

      bestFor: [
        'Plaque buildup',
        'Routine cleanings',
        'Brushing support',
        'Preventive dental care',
      ],

      cta: "Schedule a Kids' Cleaning",

      href: '#contact',
    },

    {
      title: 'Cavity Prevention for Children',

      description:
        'Preventive care helps identify cavity risk and guide families on brushing, flossing, snacks, fluoride, and routine dental visits.',

      bestFor: [
        'High cavity risk',
        'Frequent snacking',
        'Brushing difficulties',
        'Early enamel concerns',
      ],

      cta: 'Ask About Cavity Prevention',

      href: '#contact',
    },

    {
      title: 'Tooth Growth and Bite Monitoring',

      description:
        'Dental visits help monitor baby teeth, permanent teeth, tooth spacing, eruption timing, and bite changes.',

      bestFor: [
        'Growing children',
        'Mixed dentition',
        'Crowding concerns',
        'Delayed eruption',
      ],

      cta: 'Ask About Tooth Development',

      href: '#contact',
    },

    {
      title: 'Parent Guidance for Brushing and Flossing',

      description:
        'Parents receive practical guidance on brushing routines, flossing support, age-appropriate habits, and cavity prevention at home.',

      bestFor: [
        'Young children',
        'Brushing resistance',
        'Flossing challenges',
        'Family oral care routines',
      ],

      cta: 'Build a Better Home Routine',

      href: '#contact',
    },

    {
      title: 'Urgent Dental Evaluation for Kids',

      description:
        'Children may need urgent care for tooth pain, broken teeth, knocked-out teeth, swelling, or dental injury.',

      bestFor: [
        'Toothache',
        'Chipped tooth',
        'Dental trauma',
        'Swelling',
      ],

      cta: "Call for Kids' Dental Help",

      href: '#contact',
    },
  ],
},
solutionsGrid: {
  eyebrow: "Who Benefits From Children's Dental Care",

  heading: "Children's Dentistry for Every Stage of Growth",

  body:
    "Children's dental care should change as the child grows. A toddler's visit may focus on comfort and parent guidance. A school-age child may need cavity prevention and brushing support. A teen may need monitoring for wisdom teeth, orthodontic concerns, grinding, or sports-related dental risks.",

  cards: [
    {
      title: 'Toddlers and Young Children',

      subtitle: 'Early Dental Visits',

      body:
        'Early visits help children become familiar with the dental office while parents receive guidance on brushing, diet, and tooth development.',

      image: '/assets/toddlers.webp',
    },

    {
      title: 'School-Age Children',

      subtitle: 'Preventive Dental Care',

      body:
        'Dental visits help monitor cavities, plaque, permanent teeth, spacing, brushing habits, and bite development.',

      image: '/assets/school-child.jpg',
    },

    {
      title: 'Teens',

      subtitle: 'Growing Smiles',

      body:
        'Teen dental care may include cavity prevention, gum health, wisdom tooth monitoring, grinding concerns, sports injury prevention, and cosmetic concerns.',

      image: '/assets/teens.jpg',
    },

    {
      title: 'Families With Multiple Children',

      subtitle: 'Family Dental Scheduling',

      body:
        'Family dental scheduling helps parents keep preventive visits consistent for children at different ages and stages.',

      image: '/assets/family-visit.jpg',
    },
  ],

  cta: {
    label: "Schedule a Child's Dental Visit",
    href: '#contact',
  },
},
process: {
  eyebrow: "Children's Dental Visit Process",

  heading:
    "What to Expect During Your Child's Dental Visit",

  subtitle:
    "A child's dental visit is designed to be clear, calm, and age-appropriate. The goal is to check oral health, clean the teeth, build comfort with dental care, and guide parents on prevention.",

  steps: [
    {
      title: 'Friendly Introduction and Health Review',

      body:
        "The team reviews the child's dental history, brushing habits, symptoms, diet, parent concerns, and past dental experiences.",
    },

    {
      title: 'Child Dental Exam',

      body:
        'Dr. Shriya checks teeth, gums, bite development, tooth eruption, cavity risk, and oral habits.',
    },

    {
      title: 'Cleaning and Preventive Guidance',

      body:
        "The child's teeth are cleaned when appropriate, and the family receives practical guidance on brushing, flossing, snacks, and home care.",
    },

    {
      title: 'Follow-Up or Treatment Plan',

      body:
        'If concerns are found, Promenade Dental explains whether monitoring, preventive care, fillings, emergency care, or specialist referral may be needed.',
    },
  ],

  cta: {
    label: "Book a Children's Dental Visit",
    href: '#contact',
  },
},
educationSection: {
  eyebrow: "Children's Cavity Prevention",

  heading:
    'Cavity Prevention for Children With Brushing Challenges, Frequent Snacks, or Early Tooth Decay Risk',

  body:
    "Children are still learning how to clean their teeth properly. Back teeth, grooves, gumline areas, and spaces between teeth can be difficult for them to reach. Frequent snacks, juice, sweets, dry mouth, weak enamel, or inconsistent brushing can increase cavity risk.",

  supportingText:
    'Promenade Dental helps families reduce cavity risk through routine exams, cleanings, parent guidance, brushing instruction, and early treatment when decay is found.',

  image: '/assets/cavity.webp',

  imageAlt:
    'Parent helping a child brush their teeth while learning healthy oral hygiene habits for cavity prevention',

  cta: {
    label: 'Ask About Cavity Prevention for Your Child',
    href: '#contact',
  },
},
educationSection2: {
  eyebrow: "Comfort-Focused Children's Dentistry",

  heading:
    "Comfort-Focused Children's Dentistry for Kids Who Feel Nervous About Dental Visits",

  bodyParagraphs: [
    "Some children feel nervous before a dental visit, especially if they have had pain, previous dental treatment, or unfamiliar experiences. A calm dental environment can help children understand what is happening and feel more comfortable with preventive care.",

    "Promenade Dental focuses on simple explanations, gentle communication, and helping children build a more positive relationship with dental visits over time.",
  ],

  image: "/assets/children-comfort.jpeg",

  imageAlt:
    "Friendly children's dental visit with a calm dental team helping a young patient feel comfortable during preventive care",

  cta: {
    label: "Schedule a Comfortable Kids' Dental Visit",
    href: "#contact",
  },
},
benefits: {
  eyebrow: 'Why Choose Promenade Dental',

  heading: "Family-Focused Children's Dentistry",

  description:
    "Children's dental care should support both the child and the parent. Promenade Dental helps families understand oral health needs at each stage while keeping visits practical, preventive, and comfort-focused.",

  items: [
    {
      title: 'Preventive Care for Growing Smiles',

      body:
        'Dental exams and cleanings help monitor cavities, gum health, tooth development, and brushing habits.',

      paths: [
        'M8 38 A18 18 0 0 1 40 38',
        'M16 14 h16 v20 h-16 z M20 20 h8 M20 26 h8',
      ],
    },

    {
      title: 'Parent Guidance Included',

      body:
        'Families receive practical advice on brushing, flossing, diet, snacking habits, and follow-up care.',

      paths: [
        'M10 30 h28',
        'M16 18 C20 12 28 12 32 18 M18 30 h12',
      ],
    },

    {
      title: 'Comfort-Focused Dental Visits',

      body:
        'The team helps children feel more comfortable with dental care through calm communication and age-appropriate explanations.',

      paths: [
        'M12 34 A10 10 0 1 1 36 34',
        'M18 18 h12 M24 14 v20',
      ],
    },

    {
      title: 'Family Dentistry in One Office',

      body:
        'Promenade Dental provides preventive, restorative, cosmetic, emergency, and family dental care for different ages and needs.',

      paths: [
        'M12 14 h24 v20 h-24 z',
        'M18 20 h12 M24 14 v20',
      ],
    },
  ],
},
localArea: {
  eyebrow: "Children's Dentist Near Fulton Ranch",

  heading:
    "Children's Dentist Near Fulton Ranch and Chandler 85248",

  body:
    "Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248. Our office serves families from Fulton Ranch, Ocotillo, Sun Lakes, South Chandler, and nearby communities.\n\nIf you are looking for a children's dentist, kids' dental cleaning, child dental checkup, cavity prevention for children, or family dentist near Chandler 85248, Promenade Dental offers children's dental care focused on comfort, prevention, tooth development, and parent guidance.",

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
  eyebrow: 'Related Preventive and Family Services',

  heading: "Related Children's and Family Dental Services",

  intro:
    "Children's dentistry connects closely with preventive care, cavity treatment, emergency care, and family dental visits.",

  services: [
    {
      title: 'Family & Preventive Dentistry',

      description:
        'Explore preventive dental care for adults, children, families, gum health, cavities, and long-term oral health.',

      href: '/services/family-dentistry',
    },

    {
      title: 'Dental Exams & Cleanings',

      description:
        'Routine exams and cleanings help monitor cavities, gum health, tooth development, and preventive needs.',

      href: '/services/family-dentistry/dental-exams-cleanings',
    },

    {
      title: 'Tooth-Colored Fillings',

      description:
        'Tooth-colored fillings may repair cavities when decay is found and treatment is needed.',

      href: '/services/restorative-dentistry/tooth-colored-fillings',
    },

    {
      title: 'Emergency Dentist',

      description:
        'Emergency dental care may be needed for children with tooth pain, broken teeth, knocked-out teeth, swelling, or dental injuries.',

      href: '/services/emergency-dentistry',
    },
  ],
},
faq: {
  eyebrow: 'Frequently Asked Questions',

  heading: "Children's Dentistry FAQs",

  items: [
    {
      q: "What does a children's dental visit include?",
      a: "A children's dental visit may include a dental exam, cleaning, cavity check, gum evaluation, tooth development review, oral hygiene guidance, and parent discussion.",
    },

    {
      q: 'When should children start seeing the dentist?',
      a: 'Children should begin dental visits early so the dentist can monitor tooth development, guide parents, and help the child become comfortable with dental care.',
    },

    {
      q: 'How often should kids have dental cleanings?',
      a: "The right schedule depends on the child's cavity risk, gum health, plaque buildup, brushing habits, and dental history. Promenade Dental can recommend a schedule based on the child's needs.",
    },

    {
      q: 'Why do baby teeth matter if they fall out?',
      a: 'Baby teeth help children chew, speak, hold space for permanent teeth, and support dental development. Cavities in baby teeth can still cause pain or infection.',
    },

    {
      q: 'Can children get cavities even if they brush?',
      a: 'Yes. Children may miss areas while brushing, snack frequently, or have grooves in back teeth that trap plaque. Routine exams help identify cavities early.',
    },

    {
      q: 'What if my child is scared of the dentist?',
      a: 'Promenade Dental focuses on calm communication, age-appropriate explanations, and helping children feel more comfortable with dental visits over time.',
    },

    {
      q: 'Do children need dental X-rays?',
      a: 'Dental X-rays may be recommended when needed to check areas not visible during the exam, monitor tooth development, or evaluate dental concerns.',
    },

    {
      q: 'What should I do if my child has a toothache?',
      a: 'Call Promenade Dental for guidance. Tooth pain in children may come from cavities, infection, injury, loose teeth, gum problems, or eruption changes.',
    },

    {
      q: 'Can Promenade Dental treat chipped teeth in children?',
      a: 'Promenade Dental can evaluate chipped or broken teeth in children and recommend the appropriate next step based on the tooth type, injury, pain, and damage.',
    },

    {
      q: 'Where is Promenade Dental located?',
      a: 'Promenade Dental is located at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248, in the Fulton Ranch area.',
    },
  ],
},
cta: {
  title: "Schedule a Children's Checkup",

highlight: "for Growing Healthy Smiles",

  subtitle:
    'Promenade Dental helps children maintain healthier teeth and gums with preventive exams, cleanings, cavity checks, oral hygiene guidance, and family-focused dental care in Chandler.',

  buttonText: 'Book a Child Dental Visit',

  buttonHref: '/contact-us',

  secondaryButtonText: 'Call (480) 802-8188',

  secondaryButtonHref: 'tel:+14808028188',

  image: '/assets/dental-lobby.jpg',
},
},
{
  serviceSlug: 'family-dentistry',

  slug: 'gum-disease-treatment',

  name: 'Gum Disease Treatment',

  metaTitle:
    'Gum Disease Treatment in Chandler, AZ | Promenade Dental',

  metaDescription:
    'Gum disease treatment in Chandler AZ for bleeding gums, gum inflammation, periodontal pockets, plaque buildup, and deep cleaning needs near Fulton Ranch.',

  hero: {
    eyebrow: 'Periodontal Care in Fulton Ranch',

    title: 'Gum Disease Treatment for',

    highlight:
      'Bleeding Gums, Gum Inflammation, and Periodontal Pockets in Chandler',

    description:
      'Promenade Dental helps patients evaluate and manage gum disease with periodontal care focused on bleeding gums, plaque and tartar buildup, gum inflammation, deep cleaning needs, pocket depth, and long-term tooth support.',

    image: '/assets/h-gum-diseases.webp',

    trustPoints: [
      'Evaluation for bleeding gums',
      'Deep cleaning and periodontal care',
      'Gum inflammation and pocket monitoring',
      'Maintenance planning for long-term gum health',
      'Located in Fulton Ranch',
      'New Patients Welcome',
    ],

    primaryCTA: {
      label: 'Book a Gum Health Evaluation',
      href: '#contact',
    },

    secondaryCTA: {
      label: 'Call (480) 802-8188',
      href: 'tel:+14808028188',
    },
  },
  overview: {
  eyebrow: 'Periodontal Care',

  heading:
    'Gum Disease Treatment for Bleeding Gums, Plaque Buildup, Bad Breath, and Loose Tooth Risk',

  body:
    'Bleeding gums are not something to ignore. Gum disease can begin with redness, swelling, tenderness, bleeding when brushing or flossing, persistent bad breath, and plaque buildup around the gumline. If the condition progresses, the gums may pull away from the teeth, creating pockets where bacteria and tartar can collect.\n\nGum disease treatment at Promenade Dental is designed to evaluate the gums, remove buildup where needed, reduce inflammation, monitor pocket depth, and help protect the structures that support the teeth.',

  features: [
    'Evaluation for bleeding gums',
    'Deep cleaning and plaque removal',
    'Periodontal pocket monitoring',
    'Long-term gum health maintenance',
  ],

  image: '/assets/service-gum-disease-treatment.jpg',

  cta: {
    label: 'Schedule a Periodontal Evaluation',
    href: '#contact',
  },

  note:
    'Early treatment can help reduce gum inflammation, protect supporting bone and tissue, and lower the risk of advanced periodontal disease.',
},
whyItMatters: {
  eyebrow: 'Comprehensive Gum Disease Evaluation',

  heading:
    'Gum Disease Evaluation for Bleeding, Pocket Depth, Tartar Buildup, Gum Recession, and Bone Support',

  description:
    'A gum disease evaluation helps determine whether the gums are healthy, inflamed, or showing signs of periodontal disease. Dr. Shriya checks the gum tissue, bleeding points, pocket depth, recession, tartar buildup, tooth mobility, bone support, bite pressure, and X-rays when needed.\n\nThis evaluation helps decide whether a routine cleaning, deep cleaning, periodontal maintenance, or referral to a gum specialist may be appropriate.',

  items: [
    {
      title: 'Gum Bleeding and Inflammation',

      body:
        'Bleeding, swelling, redness, and tenderness can indicate gingivitis or more advanced periodontal concerns.',

      paths: [
        'M12 12 h24 v24 h-24 z',
        'M18 18 h12',
      ],
    },

    {
      title: 'Periodontal Pocket Depth',

      body:
        'Deeper spaces between the gums and teeth may collect plaque and tartar that cannot be removed with regular brushing.',

      paths: [
        'M12 30 C18 18 30 18 36 30',
        'M16 34 h16',
      ],
    },

    {
      title: 'Tooth Support and Mobility',

      body:
        'Advanced gum disease can affect the bone and tissues that hold teeth in place, which may lead to loose teeth if untreated.',

      paths: [
        'M16 16 h16 v16 h-16 z',
        'M20 24 h8',
      ],
    },
  ],

  cta: {
    label: 'Find Out What Your Gums Need',
    href: '#contact',
  },
},
features: {
  eyebrow: 'Understanding Gum Disease',

  heading: 'Treatment for Every Stage of Gum Disease',

  body:
    'Gum disease can range from early inflammation to more advanced damage around the teeth. The treatment plan depends on how much inflammation, pocketing, tartar buildup, and tooth support loss is present.',

  features: [
    {
      title: 'Healthy Gums With Preventive Maintenance',

      body:
        'Healthy gums usually do not bleed easily, feel swollen, or show deep periodontal pockets. Routine cleanings help maintain gum health.',
    },

    {
      title: 'Gingivitis With Bleeding or Swollen Gums',

      body:
        'Gingivitis is early gum inflammation. It may cause red, swollen, or easily bleeding gums and can often improve with professional care and better home hygiene.',
    },

    {
      title: 'Periodontitis With Pocketing or Tooth Support Loss',

      body:
        'Periodontitis involves deeper gum and supporting tissue problems. Treatment may include scaling and root planing, maintenance visits, monitoring, and specialist referral when needed.',
    },
  ],

  cta: {
    label: 'Schedule a Gum Health Evaluation',
    href: '#contact',
  },
},
servicesGrid: {
  eyebrow: 'Periodontal Treatment Options',

  heading:
    'Gum Disease Treatment Options for Healthier Gums',

  intro:
    'Gum treatment depends on diagnosis. Some patients need a routine cleaning and better home care. Others need deep cleaning below the gumline or ongoing periodontal maintenance to control inflammation and monitor gum health.',

  services: [
    {
      title: 'Routine Cleaning for Healthy or Mildly Inflamed Gums',

      description:
        'Routine cleanings help remove plaque and tartar from the teeth and gumline when there are no deeper periodontal pockets requiring advanced cleaning.',

      bestFor: [
        'Preventive care',
        'Mild buildup',
        'Routine maintenance',
        'Healthy gums',
      ],

      cta: 'Book a Dental Cleaning',

      href: '/family-dentistry/dental-exams-cleanings',
    },

    {
      title: 'Scaling and Root Planing for Gum Disease',

      description:
        'Scaling and root planing is a deep cleaning below the gumline used when plaque and tartar collect in periodontal pockets.',

      bestFor: [
        'Gum disease',
        'Deeper pockets',
        'Tartar below the gumline',
        'Bleeding gums',
      ],

      cta: 'Ask About Deep Cleaning',

      href: '/family-dentistry/gum-disease-treatment',
    },

    {
      title: 'Periodontal Maintenance for Ongoing Gum Disease Control',

      description:
        'Periodontal maintenance helps monitor gum health after gum disease treatment and may be scheduled more frequently than routine cleanings.',

      bestFor: [
        'Gum disease history',
        'Recurring inflammation',
        'Deeper pockets',
        'Long-term periodontal care',
      ],

      cta: 'Ask About Gum Maintenance',

      href: '/family-dentistry/gum-disease-treatment',
    },

    {
      title: 'Periodontal Referral for Advanced Gum Disease',

      description:
        'If gum disease is advanced or requires surgical treatment, Promenade Dental may recommend evaluation with a periodontist.',

      bestFor: [
        'Advanced periodontitis',
        'Significant bone loss',
        'Severe pocketing',
        'Complex gum treatment needs',
      ],

      cta: 'Ask About Your Gum Treatment Options',

      href: '/family-dentistry/gum-disease-treatment',
    },
  ],
},
symptomsSection: {
  eyebrow: 'Signs of Gum Disease',

  heading:
    'Gum Disease Symptoms That Should Be Evaluated Early',

  body:
    'Gum disease can be painless in its early stages, making symptoms easy to overlook. Bleeding, swelling, bad breath, gum recession, and loose teeth should be evaluated before the condition becomes more difficult to manage.',

  symptoms: [
    {
      title: 'Bleeding Gums',

      body:
        'Gums that bleed during brushing, flossing, or eating may be inflamed.',
    },

    {
      title: 'Swollen or Tender Gums',

      body:
        'Swelling and tenderness may indicate irritation, plaque buildup, or gum infection.',
    },

    {
      title: 'Persistent Bad Breath',

      body:
        'Bad breath that does not improve may be related to bacteria around the gums or periodontal pockets.',
    },

    {
      title: 'Gum Recession',

      body:
        'Receding gums can expose root surfaces and may be related to gum disease, brushing trauma, bite pressure, or other factors.',
    },

    {
      title: 'Loose Teeth',

      body:
        'Loose teeth may indicate advanced periodontal support loss and should be evaluated promptly.',
    },

    {
      title: 'Pain When Chewing',

      body:
        'Chewing discomfort may occur if gum disease affects tooth support or if infection is present.',
    },
  ],
},
educationSection: {
  eyebrow: 'Scaling and Root Planing',

  heading:
    'Scaling and Root Planing for Plaque and Tartar Below the Gumline',

  body:
    'Scaling and root planing is commonly called a deep cleaning. It is used when plaque and tartar are present below the gumline and regular cleaning is not enough to address periodontal pockets. Scaling removes buildup from tooth and root surfaces, while root planing smooths root surfaces to support gum healing and maintenance.',

  supportingText:
    'At Promenade Dental, deep cleaning recommendations are based on gum measurements, bleeding, tartar buildup, X-rays when needed, and the overall condition of the gums and supporting bone.',

  image: '/assets/gum-tartar.webp',

  imageAlt:
    'Scaling and root planing deep cleaning treatment for plaque and tartar below the gumline to support periodontal health',

  cta: {
    label: 'Ask About Scaling and Root Planing',
    href: '#contact',
  },
},
educationSection2: {
  eyebrow: 'Protecting Long-Term Gum Health',

  heading:
    'Gum Disease Treatment for Protecting Tooth Support, Bone Health, and Long-Term Oral Function',

  bodyParagraphs: [
    'The gums and bone help hold teeth in place. When gum disease progresses, inflammation and bacteria can affect the tissues that support the teeth. Over time, this may contribute to gum recession, pocketing, bone loss, loose teeth, chewing discomfort, and tooth loss.',

    'Treating gum disease early and maintaining regular periodontal care can help reduce the risk of worsening damage and support long-term oral health.',
  ],

  image: '/assets/gum-disease.jpg',

  imageAlt:
    'Diagram showing how healthy gums and bone support teeth and how gum disease can affect tooth stability over time',

  cta: {
    label: 'Protect Your Gum and Tooth Health',
    href: '#contact',
  },
},
process: {
  eyebrow: 'Gum Disease Treatment Process',

  heading:
    'What to Expect During Your Gum Disease Treatment',

  subtitle:
    'Gum disease treatment is planned around the condition of the gums and the level of inflammation or support loss. The goal is to reduce buildup, monitor healing, and create a maintenance plan that supports long-term gum health.',

  steps: [
    {
      title: 'Gum Health Evaluation',

      body:
        'Dr. Shriya evaluates gum tissue, bleeding, pocket depth, tartar buildup, recession, tooth mobility, and X-rays when needed.',
    },

    {
      title: 'Diagnosis and Treatment Recommendation',

      body:
        'You receive a clear explanation of whether you need a routine cleaning, scaling and root planing, periodontal maintenance, or referral.',
    },

    {
      title: 'Gum Treatment or Deep Cleaning',

      body:
        'Treatment may include professional cleaning above and below the gumline depending on diagnosis and pocket depth.',
    },

    {
      title: 'Maintenance and Home Care Plan',

      body:
        'A follow-up schedule and home care recommendations are created based on gum health, inflammation risk, and periodontal history.',
    },
  ],

  cta: {
    label: 'Book a Gum Disease Treatment Visit',
    href: '#contact',
  },
},
maintenance: {
  eyebrow: 'Periodontal Maintenance',

  heading:
    'Periodontal Maintenance for Patients With Gum Disease History, Deep Pockets, or Recurring Bleeding',

  body:
    'After gum disease treatment, maintenance matters. Periodontal maintenance visits help monitor pocket depths, remove buildup, check bleeding, evaluate gum stability, and reduce the risk of disease progression.\n\nSome patients need more frequent maintenance than routine dental cleanings because gum disease can return if plaque and tartar collect again.',

  cards: [
    {
      title: 'Pocket Depth Monitoring',

      body:
        'Gum measurements help track whether periodontal pockets are improving, stable, or worsening.',
    },

    {
      title: 'Plaque and Tartar Removal',

      body:
        'Professional maintenance removes buildup from areas that are difficult to clean at home.',
    },

    {
      title: 'Bleeding and Inflammation Checks',

      body:
        'Bleeding points help show where gum inflammation may still be active.',
    },

    {
      title: 'Home Care Adjustments',

      body:
        'Brushing, flossing, interdental brushes, or other tools may be recommended based on your gum condition.',
    },
  ],
},
benefits: {
  eyebrow: 'Why Choose Promenade Dental',

  heading:
    'Dentist-Led Gum Disease Treatment for Long-Term Gum Health',

  description:
    'Gum disease treatment should be based on measurements, symptoms, buildup, and tooth support. Promenade Dental focuses on evaluating gum health clearly and helping patients understand the difference between routine cleaning, deep cleaning, and periodontal maintenance.',

  items: [
    {
      title: 'Gum Measurements Before Treatment',

      body:
        'Dr. Shriya evaluates pocket depth, bleeding, recession, tartar buildup, tooth mobility, and X-rays when needed.',

      paths: [
        'M8 38 A18 18 0 0 1 40 38',
        'M16 14 h16 v20 h-16 z M20 20 h8 M20 26 h8',
      ],
    },

    {
      title: 'Clear Cleaning Recommendations',

      body:
        'Patients are guided on whether they need a routine cleaning, scaling and root planing, or periodontal maintenance.',

      paths: [
        'M10 30 h28',
        'M16 18 C20 12 28 12 32 18 M18 30 h12',
      ],
    },

    {
      title: 'Long-Term Gum Health Planning',

      body:
        'Gum disease often requires ongoing monitoring, home care, and maintenance to protect tooth support.',

      paths: [
        'M12 34 A10 10 0 1 1 36 34',
        'M18 18 h12 M24 14 v20',
      ],
    },

    {
      title: 'Preventive and Restorative Care Connected',

      body:
        'Promenade Dental can connect gum care with exams, cleanings, fillings, crowns, implants, dentures, and tooth replacement planning when needed.',

      paths: [
        'M12 14 h24 v20 h-24 z',
        'M18 20 h12 M24 14 v20',
      ],
    },
  ],
},
localArea: {
  eyebrow: 'Gum Disease Treatment Near Fulton Ranch',

  heading:
    'Gum Disease Treatment Near Fulton Ranch and Chandler 85248',

  body:
    'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248. Our office serves patients from Fulton Ranch, Ocotillo, Sun Lakes, South Chandler, and nearby communities.\n\nIf you are looking for gum disease treatment, bleeding gums treatment, deep cleaning, scaling and root planing, periodontal maintenance, or a gum disease dentist near Chandler 85248, Promenade Dental offers periodontal evaluations based on gum inflammation, pocket depth, tartar buildup, and long-term tooth support.',

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
  eyebrow: 'Related Preventive and Family Services',

  heading:
    'Related Services for Gum Health and Preventive Care',

  intro:
    'Gum disease treatment connects closely with preventive dentistry, routine cleanings, tooth replacement planning, and care for patients with dental restorations.',

  services: [
    {
      title: 'Family & Preventive Dentistry',

      description:
        'Explore preventive dental care for adults, children, families, gum health, cavities, and long-term oral health.',

      href: '/services/family-dentistry',
    },

    {
      title: 'Dental Exams & Cleanings',

      description:
        'Routine exams and cleanings help monitor plaque, tartar, cavities, gum health, and oral health changes.',

      href: '/services/family-dentistry/dental-exams-cleanings',
    },

    {
      title: 'Dental Implants',

      description:
        'Healthy gums are important for implant planning, implant maintenance, and long-term tooth replacement stability.',

      href: '/services/dental-implants',
    },

    {
      title: 'Dentures & Partials',

      description:
        'Advanced gum disease may affect tooth support and lead to replacement planning when teeth cannot be saved.',

      href: '/services/restorative-dentistry/dentures',
    },
  ],
},
faq: {
  eyebrow: 'Frequently Asked Questions',

  heading: 'FAQs About Gum Disease and Deep Cleaning',

  items: [
    {
      q: 'What is gum disease?',
      a: 'Gum disease is inflammation or infection of the tissues that support the teeth. It can begin as gingivitis and may progress to periodontitis if not treated.',
    },

    {
      q: 'Why do my gums bleed when I brush or floss?',
      a: 'Bleeding gums may be caused by plaque buildup, gum inflammation, gingivitis, periodontal disease, brushing technique, or other oral health factors. A dental evaluation can identify the cause.',
    },

    {
      q: 'What is scaling and root planing?',
      a: 'Scaling and root planing is a deep cleaning below the gumline used to remove plaque and tartar from periodontal pockets and root surfaces.',
    },

    {
      q: 'Is deep cleaning different from a regular cleaning?',
      a: 'Yes. A routine cleaning is used for preventive care when there are no deeper periodontal pockets requiring advanced cleaning. Deep cleaning is used when gum disease creates pockets where buildup collects below the gumline.',
    },

    {
      q: 'Can gum disease be reversed?',
      a: 'Early gingivitis can often improve with professional care and better home hygiene. Periodontitis involves deeper support changes and usually requires ongoing management.',
    },

    {
      q: 'Can gum disease cause loose teeth?',
      a: 'Yes. Advanced gum disease can affect the bone and tissues that hold teeth in place, which may lead to tooth mobility or tooth loss.',
    },

    {
      q: 'How often do I need periodontal maintenance?',
      a: 'The right maintenance schedule depends on your gum measurements, bleeding, buildup, periodontal history, and risk factors. Promenade Dental can recommend a schedule based on your condition.',
    },

    {
      q: 'Does gum disease always hurt?',
      a: 'No. Gum disease can be painless, especially early on. Bleeding, swelling, bad breath, gum recession, or loose teeth may be warning signs.',
    },

    {
      q: 'Can gum disease affect dental implants?',
      a: 'Yes. Healthy gums and good oral hygiene are important for implant maintenance. Gum inflammation around implants should be monitored carefully.',
    },

    {
      q: 'Where is Promenade Dental located?',
      a: 'Promenade Dental is located at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248, in the Fulton Ranch area.',
    },
  ],
},
cta: {
  title: 'Book a Gum Disease Evaluation',

highlight: 'for Long-Term Gum Health',

  subtitle:
    'Promenade Dental helps patients evaluate and manage gum disease with care focused on bleeding gums, periodontal pockets, tartar buildup, deep cleaning, maintenance, and long-term tooth support.',

  buttonText: 'Book a Gum Health Evaluation',

  buttonHref: '/contact-us',

  secondaryButtonText: 'Call (480) 802-8188',

  secondaryButtonHref: 'tel:+14808028188',

  image: '/assets/dental-lobby.jpg',
},
},
{
  serviceSlug: 'family-dentistry',

  slug: 'night-guards-teeth-grinding',

  name: 'Night Guards & Teeth Grinding',

  metaTitle:
    'Night Guards for Teeth Grinding in Chandler, AZ | Promenade Dental',

  metaDescription:
    'Custom night guards in Chandler AZ for teeth grinding, clenching, worn teeth, jaw soreness, cracked teeth, and bite-related tooth protection near Fulton Ranch.',

  hero: {
    eyebrow: 'Custom Night Guards in Fulton Ranch',

    title: 'Night Guards for',

    highlight:
      'Teeth Grinding, Clenching, Worn Teeth, and Jaw Soreness in Chandler',

    description:
      'Promenade Dental helps patients protect their teeth from grinding and clenching with custom night guard evaluations focused on tooth wear, cracked teeth, jaw soreness, bite pressure, morning discomfort, and long-term tooth protection.',

    image: '/assets/h-night-guards.jpg',

    trustPoints: [
      'Custom night guard evaluations',
      'Protection for grinding and clenching',
      'Care for worn, cracked, or sensitive teeth',
      'Bite and jaw comfort assessment',
      'Located in Fulton Ranch',
      'New Patients Welcome',
    ],

    primaryCTA: {
      label: 'Book a Night Guard Consultation',
      href: '#contact',
    },

    secondaryCTA: {
      label: 'Call (480) 802-8188',
      href: 'tel:+14808028188',
    },
  },
  overview: {
  eyebrow: 'Teeth Grinding Protection',

  heading: 'Night Guards for Teeth Grinding, Tooth Wear, and Jaw Pain',

  body:
    'Teeth grinding and clenching can happen during sleep without the patient realizing it. Over time, this pressure can wear down enamel, chip teeth, crack restorations, cause tooth sensitivity, strain the jaw, and contribute to morning headaches or facial soreness.\n\nA custom night guard is designed to place a protective barrier between the upper and lower teeth during sleep. At Promenade Dental, Dr. Shriya evaluates tooth wear, bite pressure, jaw symptoms, cracked teeth, existing dental work, and grinding signs before recommending a night guard.',

  features: [
    'Custom night guard evaluations',
    'Assessment of tooth wear and bite pressure',
    'Protection for cracked teeth and restorations',
    'Jaw comfort and long-term tooth protection',
  ],

  image: '/assets/service-night-guards.jpg',

  cta: {
    label: 'Schedule a Teeth Grinding Evaluation',
    href: '#contact',
  },

  note:
    'Early treatment can help reduce tooth wear, protect dental restorations, ease jaw discomfort, and prevent long-term damage caused by grinding and clenching.',
},
whyItMatters: {
  eyebrow: 'Comprehensive Teeth Grinding Evaluation',

  heading:
    'Teeth Grinding Evaluation for Tooth Wear, Bite Pressure, Jaw Soreness, Sensitivity, and Cracked Teeth',

  description:
    'Grinding and clenching can create different signs in the mouth. Some patients have flat or worn biting edges. Others develop small cracks, chipped enamel, jaw tension, sensitive teeth, broken fillings, or crowns that wear faster than expected.\n\nDr. Shriya evaluates the teeth, bite, jaw muscles, dental restorations, symptoms, and tooth wear patterns to understand whether grinding or clenching may be affecting your oral health.',

  items: [
    {
      title: 'Tooth Wear and Flattened Edges',

      body:
        'Worn enamel, flat biting surfaces, and shortened tooth edges may suggest repeated grinding pressure.',

      paths: [
        'M12 12 h24 v24 h-24 z',
        'M18 18 h12',
      ],
    },

    {
      title: 'Cracked Teeth and Broken Restorations',

      body:
        'Grinding and clenching can increase stress on teeth, fillings, crowns, veneers, and other restorations.',

      paths: [
        'M12 30 C18 18 30 18 36 30',
        'M16 34 h16',
      ],
    },

    {
      title: 'Jaw Soreness and Morning Symptoms',

      body:
        'Jaw tightness, morning soreness, facial discomfort, and headaches may be connected with nighttime clenching or grinding.',

      paths: [
        'M16 16 h16 v16 h-16 z',
        'M20 24 h8',
      ],
    },
  ],

  cta: {
    label: 'Find Out If Grinding Is Damaging Your Teeth',
    href: '#contact',
  },
},
symptomsSection: {
  eyebrow: 'Signs of Teeth Grinding',

  heading: 'Signs and Symptoms of Teeth Grinding',

  body:
    'Many patients do not know they grind their teeth until signs appear. Symptoms may involve the teeth, jaw, face, head, or dental restorations.',

  symptoms: [
    {
      title: 'Worn or Flattened Teeth',

      body:
        'Grinding can wear down the chewing surfaces and edges of the teeth over time.',
    },

    {
      title: 'Chipped or Cracked Teeth',

      body:
        'Repeated pressure can contribute to small chips, cracks, fractures, or broken restorations.',
    },

    {
      title: 'Tooth Sensitivity',

      body:
        'Worn enamel or cracked tooth structure may make teeth more sensitive to cold, sweets, or pressure.',
    },

    {
      title: 'Jaw Pain or Tightness',

      body:
        'Clenching can strain the jaw muscles and create soreness, tightness, or fatigue.',
    },

    {
      title: 'Morning Headaches',

      body:
        'Some patients wake up with headaches or facial soreness related to nighttime clenching.',
    },

    {
      title: 'Broken Fillings or Crowns',

      body:
        'Heavy bite pressure may damage dental restorations or cause them to wear prematurely.',
    },
  ],
},
features: {
  eyebrow: 'Custom Night Guard Benefits',

  heading: 'Custom Night Guards for Grinding and Bite Protection',

  body:
    'A custom night guard is made to fit the patient’s teeth more closely than over-the-counter guards. It helps reduce direct tooth-to-tooth contact during sleep and can protect teeth, restorations, and bite surfaces from excessive grinding pressure.',

  features: [
    {
      title: 'Protects Teeth From Direct Grinding Contact',

      body:
        'A night guard creates a protective layer between the upper and lower teeth while sleeping.',
    },

    {
      title: 'Helps Protect Restorations',

      body:
        'Night guards can help reduce grinding stress on crowns, veneers, fillings, bridges, and implant restorations.',
    },

    {
      title: 'Designed for a More Comfortable Fit',

      body:
        'A custom guard is made from dental impressions or scans so it fits the patient’s mouth more accurately.',
    },
  ],

  cta: {
    label: 'Schedule a Night Guard Consultation',
    href: '#contact',
  },
},
servicesGrid: {
  eyebrow: 'Night Guard Treatment Options',

  heading: 'Night Guard Treatment for Teeth Grinding and Clenching',

  intro:
    'Night guards may be recommended when grinding or clenching creates signs of tooth wear, jaw strain, cracked teeth, or risk to existing dental work.',

  services: [
    {
      title: 'Night Guards for Sleep Grinding',

      description:
        'A night guard can help protect teeth from repeated grinding contact during sleep.',

      bestFor: [
        'Worn teeth',
        'Flattened biting edges',
        'Morning tooth soreness',
        'Enamel wear',
      ],

      cta: 'Ask About Sleep Grinding Protection',

      href: '#contact',
    },

    {
      title: 'Night Guards for Clenching and Jaw Soreness',

      description:
        'A night guard may help reduce the effects of nighttime clenching by creating a protective bite surface.',

      bestFor: [
        'Jaw tightness',
        'Morning soreness',
        'Facial discomfort',
        'Clenching habits',
      ],

      cta: 'Ask About Clenching Protection',

      href: '#contact',
    },

    {
      title: 'Night Guards for Worn or Cracked Teeth',

      description:
        'When teeth show wear, chips, or small cracks, a night guard may help reduce further grinding-related damage.',

      bestFor: [
        'Cracked teeth',
        'Chipped enamel',
        'Tooth sensitivity',
        'Worn edges',
      ],

      cta: 'Ask About Protecting Worn Teeth',

      href: '#contact',
    },

    {
      title:
        'Night Guards for Crowns, Veneers, Fillings, and Implant Restorations',

      description:
        'Patients with restorative or cosmetic dental work may need a night guard if grinding places extra stress on restorations.',

      bestFor: [
        'Crowns',
        'Veneers',
        'Fillings',
        'Bridges and implant restorations',
      ],

      cta: 'Ask About Protecting Dental Work',

      href: '#contact',
    },
  ],
},
suitability: {
  eyebrow: 'Night Guard Comparison',

  heading:
    'Custom Night Guards and Store-Bought Guards for Teeth Grinding Protection',

  body:
    'Store-bought guards may provide a quick temporary option for some people, but they are not designed around a patient’s bite, tooth shape, or dental history. A custom night guard is made to fit the mouth more precisely and can be planned around tooth wear, restorations, jaw symptoms, and bite pressure.',

  goodFit: {
    title: 'Custom Night Guard',

    items: [
      'Made to fit your teeth',
      'Designed around bite and tooth shape',
      'Can protect crowns, veneers, and restorations',
      'More stable fit for many patients',
      'Recommended after dental evaluation',
    ],
  },

  alternative: {
    title: 'Store-Bought Guard',

    items: [
      'Generic shape and fit',
      'May feel bulky or loose',
      'Not customized for bite pressure',
      'May not account for dental restorations',
      'May be used temporarily but should not replace evaluation',
    ],
  },

  cta: {
    label: 'Ask About a Custom Night Guard',
    href: '#contact',
  },
},
process: {
  eyebrow: 'Night Guard Process',

  heading: 'Custom Night Guard Process From Evaluation to Fit',

  subtitle:
    'A night guard should be planned around the patient’s mouth, not selected randomly. Promenade Dental evaluates tooth wear, bite pressure, jaw symptoms, and restoration needs before creating or recommending a guard.',

  steps: [
    {
      title: 'Grinding and Clenching Evaluation',

      body:
        'Dr. Shriya checks tooth wear, cracks, sensitivity, jaw symptoms, restorations, and bite pressure signs.',
    },

    {
      title: 'Night Guard Recommendation',

      body:
        'You receive a clear explanation of whether a night guard may help protect your teeth and restorations.',
    },

    {
      title: 'Impressions or Digital Records',

      body:
        'Records of the teeth are taken so the night guard can be made to fit your mouth.',
    },

    {
      title: 'Guard Fit and Comfort Check',

      body:
        'The night guard is checked for fit, comfort, and bite contact, with follow-up adjustments if needed.',
    },
  ],

  cta: {
    label: 'Book a Custom Night Guard Visit',
    href: '#contact',
  },
},
educationSection: {
  eyebrow: 'Night Guards and Restorative Dentistry',

  heading:
    'Night Guards for Patients With Crowns, Veneers, Fillings, Bridges, or Implant Restorations',

  body:
    'Grinding can place heavy force on dental restorations. Crowns, veneers, fillings, bridges, and implant-supported restorations may be more vulnerable to chips, cracks, or wear when bite pressure is not managed.\n\nIf you have existing dental work and signs of grinding, a custom night guard may be recommended to help protect your investment and reduce stress on the teeth and restorations.',

  supportingText:
    'At Promenade Dental, Dr. Shriya evaluates tooth wear, bite pressure, restoration condition, and grinding patterns to determine whether a night guard may help protect existing dental work.',

  image: '/assets/night-guards.webp',

  imageAlt:
    'Custom night guard used to protect crowns, veneers, fillings, bridges, and implant restorations from grinding and bite pressure',

  cta: {
    label: 'Protect Your Dental Work From Grinding',
    href: '#contact',
  },
},
maintenance: {
  eyebrow: 'Night Guard Maintenance',

  heading:
    'Night Guard Care for Clean Appliance Use, Better Fit, and Long-Term Tooth Protection',

  body:
    'A night guard needs proper cleaning and routine checks. Over time, grinding pressure, dental changes, or appliance wear can affect the guard’s fit and function.',

  cards: [
    {
      title: 'Clean the Guard Daily',

      body:
        'The guard should be cleaned regularly to reduce buildup, odor, and bacteria.',
    },

    {
      title: 'Store It Safely',

      body:
        'Using a proper case helps protect the guard from damage, contamination, or accidental loss.',
    },

    {
      title: 'Bring It to Dental Visits',

      body:
        'The dentist can check the guard for wear, fit, bite marks, and whether adjustments are needed.',
    },

    {
      title: 'Replace When Worn or Damaged',

      body:
        'A cracked, loose, or heavily worn night guard may no longer protect the teeth properly.',
    },
  ],
},
benefits: {
  eyebrow: 'Why Choose Promenade Dental',

  heading: 'Dentist-Led Night Guard Care for Grinding and Clenching',

  description:
    'Grinding and clenching can affect the teeth, jaw, restorations, and long-term oral health. Promenade Dental evaluates the cause and signs of wear before recommending a custom night guard.',

  items: [
    {
      title: 'Bite and Tooth Wear Evaluation',

      body:
        'Dr. Shriya evaluates tooth wear, bite pressure, jaw symptoms, cracks, restorations, and sensitivity.',

      paths: [
        'M8 38 A18 18 0 0 1 40 38',
        'M16 14 h16 v20 h-16 z M20 20 h8 M20 26 h8',
      ],
    },

    {
      title: 'Custom Fit for Better Comfort',

      body:
        'Custom night guards are designed from dental records for a more precise fit than generic options.',

      paths: [
        'M10 30 h28',
        'M16 18 C20 12 28 12 32 18 M18 30 h12',
      ],
    },

    {
      title: 'Protection for Natural Teeth and Restorations',

      body:
        'Night guard planning considers enamel wear, crowns, veneers, fillings, bridges, and implant restorations.',

      paths: [
        'M12 34 A10 10 0 1 1 36 34',
        'M18 18 h12 M24 14 v20',
      ],
    },

    {
      title: 'Preventive and Restorative Care Connected',

      body:
        'Promenade Dental can connect night guard care with exams, cleanings, crowns, bonding, cracked tooth evaluation, and restorative treatment.',

      paths: [
        'M12 14 h24 v20 h-24 z',
        'M18 20 h12 M24 14 v20',
      ],
    },
  ],
},
localArea: {
  eyebrow: 'Custom Night Guards Near Fulton Ranch',

  heading:
    'Custom Night Guards Near Fulton Ranch and Chandler 85248',

  body:
    'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248. Our office serves patients from Fulton Ranch, Ocotillo, Sun Lakes, South Chandler, and nearby communities.\n\nIf you are looking for a night guard dentist, custom night guard, teeth grinding treatment, bruxism evaluation, jaw soreness care, or clenching protection near Chandler 85248, Promenade Dental offers night guard evaluations based on tooth wear, bite pressure, jaw symptoms, and long-term tooth protection.',

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
  eyebrow: 'Related Family, Preventive, and Restorative Services',

  heading: 'Related Services for Tooth Wear and Grinding Protection',

  intro:
    'Teeth grinding can connect with preventive care, restorative treatment, cosmetic concerns, and emergency dental problems. Related services may help repair damage or prevent future issues.',

  services: [
    {
      title: 'Family & Preventive Dentistry',

      description:
        'Preventive dental visits help monitor tooth wear, gum health, bite changes, and early signs of grinding damage.',

      href: '/services/family-dentistry',
    },

    {
      title: 'Dental Exams & Cleanings',

      description:
        'Routine exams help identify worn teeth, cracked enamel, jaw symptoms, and damaged restorations.',

      href: '/services/family-dentistry/dental-exams-cleanings',
    },

    {
      title: 'Dental Crowns',

      description:
        'Crowns may protect teeth that are cracked, worn, broken, or weakened by grinding pressure.',

      href: '/services/restorative-dentistry/dental-crowns',
    },

    {
      title: 'Broken or Chipped Tooth',

      description:
        'Grinding and clenching can contribute to chipped, cracked, or fractured teeth that need evaluation.',

      href: '/services/emergency-dentistry/broken-chipped-tooth',
    },
  ],
},
faq: {
  eyebrow: 'Frequently Asked Questions',

  heading: 'Night Guard Questions About Teeth Grinding and Clenching',

  items: [
    {
      q: 'What is a night guard?',
      a: 'A night guard is a dental appliance worn during sleep to help protect teeth from grinding and clenching pressure.',
    },

    {
      q: 'How do I know if I grind my teeth?',
      a: 'Signs may include worn teeth, chipped enamel, jaw soreness, morning headaches, tooth sensitivity, cracked teeth, or broken dental restorations.',
    },

    {
      q: 'Can a night guard stop teeth grinding?',
      a: 'A night guard does not necessarily stop the habit, but it can help protect the teeth and restorations from direct grinding contact.',
    },

    {
      q: 'Is a custom night guard better than a store-bought guard?',
      a: 'A custom night guard is made to fit your teeth and bite more accurately. Store-bought guards are generic and may not fit comfortably or account for dental restorations.',
    },

    {
      q: 'Can grinding cause cracked teeth?',
      a: 'Yes. Grinding and clenching can place heavy pressure on teeth and may contribute to cracks, chips, tooth wear, and broken restorations.',
    },

    {
      q: 'Can a night guard help with jaw pain?',
      a: 'A night guard may help reduce the effects of nighttime clenching for some patients, but jaw pain can have different causes and should be evaluated.',
    },

    {
      q: 'Do I need a night guard if I have crowns or veneers?',
      a: 'If you grind or clench, a night guard may be recommended to help protect crowns, veneers, fillings, bridges, or implant restorations from excess bite pressure.',
    },

    {
      q: 'How long does a night guard last?',
      a: 'Night guard lifespan varies based on grinding intensity, cleaning habits, fit, and material. A worn or damaged guard should be checked.',
    },

    {
      q: 'Should I bring my night guard to dental visits?',
      a: 'Yes. Bringing your night guard allows the dentist to check its fit, wear pattern, and whether adjustments or replacement are needed.',
    },

    {
      q: 'Where is Promenade Dental located?',
      a: 'Promenade Dental is located at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248, in Fulton Ranch.',
    },
  ],
},
cta: {
  title: 'Schedule a Night Guard Visit',

highlight: 'for Tooth Protection',

  subtitle:
    'Promenade Dental helps patients protect teeth from grinding and clenching with custom night guard evaluations focused on tooth wear, bite pressure, cracked teeth, jaw symptoms, and long-term oral health.',

  buttonText: 'Book a Night Guard Consultation',

  buttonHref: '/contact-us',

  secondaryButtonText: 'Call (480) 802-8188',

  secondaryButtonHref: 'tel:+14808028188',

  image: '/assets/dental-lobby.jpg',
},
}




]


export function getServiceBySlug(slug: string): Sub_ServiceData | undefined {
  return SUB_SERVICES.find((s) => s.slug === slug);
}