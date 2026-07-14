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
  servicesGrid? :{
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
testimonialsSection?:{
  eyebrow: string;
    heading: string;
    testimonials:{
      quote:string;
      name:string;
      context:string;
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
    href: '#contact',
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
    href: '/home03#new-patients',
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
            href: '/services/family-dentistry/dental-exams-cleanings',
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
            href: '/services/family-dentistry/childrens-dentistry',
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
            href: '/services/family-dentistry/gum-disease-treatment',
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
            href: '/services/family-dentistry/night-guards-teeth-grinding',
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
          href: '#contact',
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
      maintenance: {
  eyebrow: 'Protecting Long-Term Oral Health',

  heading: 'How to Maintain a Healthy Smile Between Dental Visits',

  body:
    'Family dentistry works best when professional dental care is combined with healthy daily habits. Consistent oral hygiene, regular checkups, and early attention to small concerns can help reduce the risk of cavities, gum disease, tooth wear, and unexpected dental problems.',

  cards: [
    {
      title: 'Brush and Floss Every Day',

      body:
        'Brushing twice daily and flossing regularly helps remove plaque, reduce cavity risk, and support healthy gums between dental appointments.',
    },

    {
      title: 'Keep Up With Routine Checkups',

      body:
        'Regular dental exams and cleanings allow your dentist to monitor changes, remove tartar buildup, and identify potential problems before they become more serious.',
    },

    {
      title: 'Pay Attention to Early Warning Signs',

      body:
        'Bleeding gums, tooth sensitivity, persistent bad breath, jaw soreness, or changes in your teeth should be evaluated early to help prevent larger dental concerns.',
    },

    {
      title: 'Protect Your Teeth From Wear and Damage',

      body:
        'If you grind your teeth, play contact sports, or have a history of chipped teeth, protective appliances such as custom night guards or mouthguards can help preserve your smile.',
    },
  ],
},
      benefits: {
  eyebrow: 'Why Choose Promenade Dental',

  heading:
    'Why Families Choose Promenade Dental for Preventive Care',

  description:
    'Families choose Promenade Dental because the care is personal, clear, and focused on long-term oral health. Patients are given time to ask questions, understand recommendations, and build lasting relationships with their dental team.',

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
      title: 'Comfort-Focused Patient Care',

      body:
        'Our team works to create a welcoming environment where children, teens, adults, and seniors feel comfortable during dental visits.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M24 12 q-8 8 -8 16 q0 10 8 16 q8-6 8-16 q0-8-8-16',
      ],
    },

    {
      title: 'Clear and Honest Recommendations',

      body:
        'Findings and treatment options are explained in straightforward language so patients can make informed decisions without pressure.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6',
      ],
    },

    {
      title: 'Prevention Before Bigger Treatment',

      body:
        'The goal is to identify concerns early and help prevent cavities, gum disease, dental emergencies, and more complex treatment needs.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M24 12 L24 30 M14 22 L34 22',
      ],
    },

    {
      title: 'One Office for the Whole Family',

      body:
        'Promenade Dental provides preventive, cosmetic, restorative, implant, and emergency care, making it easier for families to receive care in one location.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M15 18 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0 M25 22 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0 M12 32 q7-6 14 0 M23 32 q5-5 10 0',
      ],
    },

    {
      title: 'Convenient Chandler Location',

      body:
        'Located in Fulton Ranch, Promenade Dental serves Chandler, Ocotillo, Sun Lakes, South Chandler, and surrounding communities.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M18 14 a8 8 0 1 1 0.1 0 M18 22 v12 M12 34 h12',
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
      testimonialsSection: {
  eyebrow: 'Patient Stories',
  heading: 'Trusted by Chandler Families',
  testimonials: [
    {
      quote: 'Finding a dentist the whole family likes is tough, but Promenade Dental made it easy. My kids actually look forward to their cleanings, and I love that we all see the same dentist every time.',
      name: 'Jessica T.',
      context: 'Mother of two',
    },
    {
      quote: 'I hadn’t been to the dentist in over five years due to anxiety. Dr. Shriya never judged me. She took the time to explain everything on my X-rays and gave me a clear, manageable plan.',
      name: 'Michael R.',
      context: 'New Patient',
    },
    {
      quote: 'I was having terrible morning headaches and didn’t realize it was from grinding my teeth. Dr. Shriya caught the wear early and got me a custom night guard. It has completely changed my mornings.',
      name: 'Amanda L.',
      context: 'Chandler Resident',
    },
    {
      quote: 'What I appreciate most is the honesty. They tell you exactly what needs to be fixed now and what can just be monitored. I never feel like I am being pressured into unnecessary or expensive treatments.',
      name: 'Robert B.',
      context: 'Ocotillo Resident',
    },
    {
      quote: 'As I’ve gotten older, keeping my gums and teeth healthy has become a big priority. The team here is incredibly thorough, gentle, and respectful. It is the best preventive care I have ever received.',
      name: 'Susan M.',
      context: 'Senior Patient',
    },
    {
      quote: 'Having a reliable practice right here in Fulton Ranch is so convenient. From the front desk to the dental chair, the experience is calm and professional. You are a person here, not just a chart number.',
      name: 'James D.',
      context: 'Fulton Ranch Resident',
    }
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
      buttonHref: '/contact-us',
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
            href: '#contact',
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
      symptomsSection: {
  eyebrow: 'Common Smile Concerns',

  heading: 'Signs You May Benefit From Cosmetic Dentistry',

  body:
    'Many patients seek cosmetic dentistry because they are unhappy with the appearance of their teeth or smile. Some concerns are primarily cosmetic, while others may also involve tooth wear, old dental work, or oral health factors that should be evaluated before treatment.',

  symptoms: [
    {
      title: 'Stained or Discolored Teeth',

      body:
        'Teeth may appear yellow, dull, darkened, or stained from aging, coffee, tea, wine, tobacco, medications, or other factors.',
    },

    {
      title: 'Chipped or Worn Teeth',

      body:
        'Small chips, uneven edges, and worn enamel can affect both appearance and confidence when smiling.',
    },

    {
      title: 'Gaps Between Teeth',

      body:
        'Spacing between teeth may affect smile symmetry and can sometimes be improved with cosmetic treatment.',
    },

    {
      title: 'Uneven Tooth Shape or Size',

      body:
        'Teeth that appear too short, small, irregular, or disproportionate may impact overall smile balance.',
    },

    {
      title: 'Old or Mismatched Dental Work',

      body:
        'Older fillings, crowns, or bonding may no longer match surrounding teeth and can affect smile appearance.',
    },

    {
      title: 'A Smile You Feel Self-Conscious About',

      body:
        'Many patients simply feel their smile does not reflect how they want to look or feel in social and professional settings.',
    },
  ],
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
          href: '#contact',
          },
          },
maintenance: {
  eyebrow: 'Protecting Your Smile Investment',

  heading: 'How to Maintain Cosmetic Dentistry Results',

  body:
    'Cosmetic dental treatments can provide long-lasting improvements when supported by good oral hygiene, regular dental visits, and healthy habits. Maintaining your results helps protect both the appearance and health of your smile.',

  cards: [
    {
      title: 'Brush and Floss Consistently',

      body:
        'Daily brushing and flossing help maintain healthy teeth and gums while protecting cosmetic dental work.',
    },

    {
      title: 'Limit Staining Foods and Drinks',

      body:
        'Coffee, tea, red wine, tobacco, and other staining substances may affect the brightness of your smile over time.',
    },

    {
      title: 'Attend Regular Dental Visits',

      body:
        'Routine exams and cleanings help monitor your teeth, gums, and cosmetic restorations while addressing concerns early.',
    },

    {
      title: 'Protect Teeth From Grinding',

      body:
        'Patients who grind or clench their teeth may benefit from a custom night guard to help protect veneers, bonding, crowns, and natural teeth.',
    },
  ],
},
          benefits: {
  eyebrow: 'Why Choose Promenade Dental',

  heading:
    'Why Patients Choose Promenade Dental for Cosmetic Dentistry',

  description:
    'Cosmetic dentistry is personal. Patients want to feel confident that treatment recommendations are honest, their concerns are understood, and their smile goals are approached with care and attention to detail.',

  items: [
    {
      title: 'Personalized Cosmetic Treatment Planning',

      body:
        'Dr. Shriya evaluates your teeth, gums, bite, facial balance, and smile goals before recommending cosmetic treatment options.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M18 16 h12 a6 6 0 0 1 0 12 h-12 a6 6 0 0 1 0 -12 z',
      ],
    },

    {
      title: 'Conservative and Honest Recommendations',

      body:
        'Treatment recommendations focus on achieving your goals while preserving healthy tooth structure and avoiding unnecessary procedures whenever possible.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M24 12 L24 30 M14 22 L34 22',
      ],
    },

    {
      title: 'Natural-Looking Smile Enhancements',

      body:
        'The goal is to improve tooth color, shape, symmetry, and balance while maintaining results that look natural and comfortable.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 24 q10 -10 20 0 q-2 10 -10 14 q-8 -4 -10 -14',
      ],
    },

    {
      title: 'Comfort-Focused Patient Experience',

      body:
        'Our team works to create a welcoming environment where patients feel informed, respected, and comfortable throughout the cosmetic treatment process.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M24 12 q-8 8 -8 16 q0 10 8 16 q8-6 8-16 q0-8-8-16',
      ],
    },

    {
      title: 'Comprehensive Dental Care in One Office',

      body:
        'Promenade Dental provides cosmetic, preventive, restorative, implant, and emergency dental services, allowing treatment to fit into your overall oral health plan.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M15 18 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0 M25 22 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0 M12 32 q7-6 14 0 M23 32 q5-5 10 0',
      ],
    },

    {
      title: 'Convenient Chandler Location',

      body:
        'Located in Fulton Ranch, Promenade Dental serves patients from Chandler, Ocotillo, Sun Lakes, South Chandler, and surrounding communities.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M18 14 a8 8 0 1 1 0.1 0 M18 22 v12 M12 34 h12',
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
        href: '/services/family-dentistry',
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
        testimonialsSection: {
  eyebrow: 'Patient Stories',

  heading: 'Trusted by Chandler Patients for Cosmetic Dentistry',

  testimonials: [
    {
      quote:
        'I spent years hiding my smile because of staining and uneven teeth. Dr. Shriya explained my options clearly and helped me choose the right treatment. The results look natural and exactly what I wanted.',
      name: 'Amanda R.',
      context: 'Cosmetic Dentistry Patient',
    },

    {
      quote:
        'The team took time to understand what bothered me about my smile rather than pushing unnecessary treatment. My teeth look brighter and more balanced, but still look like me.',
      name: 'Michael T.',
      context: 'Chandler Resident',
    },

    {
      quote:
        'I was nervous about cosmetic dentistry because I did not want an artificial look. Dr. Shriya focused on subtle improvements, and the final result exceeded my expectations.',
      name: 'Jennifer K.',
      context: 'Smile Makeover Patient',
    },

    {
      quote:
        'My chipped front tooth always bothered me in photos. The cosmetic bonding looks seamless, and most people cannot tell anything was ever repaired.',
      name: 'David L.',
      context: 'Dental Bonding Patient',
    },

    {
      quote:
        'Professional whitening made a huge difference in my confidence. The process was comfortable, and the results were much better than anything I had tried at home.',
      name: 'Sarah M.',
      context: 'Teeth Whitening Patient',
    },

    {
      quote:
        'From the consultation to the final result, everything felt personalized and thoughtful. I appreciated the focus on both appearance and long-term oral health.',
      name: 'Robert P.',
      context: 'Fulton Ranch Resident',
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
  buttonHref: '/contact-us',

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
          href: '#contact',
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
          href: '#contact',
        },
      },
      maintenance: {
  eyebrow: 'Protecting Your Restored Teeth',

  heading: 'How to Maintain Restorative Dental Work',

  body:
    'Restorative treatments can help repair damaged teeth and restore function, but long-term success depends on daily care, routine dental visits, and healthy habits. Maintaining restored teeth helps protect both your dental work and your overall oral health.',

  cards: [
    {
      title: 'Brush and Floss Every Day',

      body:
        'Good oral hygiene helps reduce plaque buildup around fillings, crowns, bridges, and natural teeth while lowering the risk of future decay and gum disease.',
    },

    {
      title: 'Attend Regular Dental Exams',

      body:
        'Routine dental visits allow your dentist to monitor restorations, evaluate gum health, and identify problems before they become larger concerns.',
    },

    {
      title: 'Avoid Habits That Damage Teeth',

      body:
        'Chewing ice, biting hard objects, and using teeth as tools can increase the risk of damaging both restorations and natural teeth.',
    },

    {
      title: 'Protect Teeth From Grinding',

      body:
        'Patients who grind or clench their teeth may benefit from a custom night guard to help protect crowns, bridges, fillings, and natural tooth structure.',
    },
  ],
},
      benefits: {
  eyebrow: 'Why Choose Promenade Dental',

  heading:
    'Personalized Restorative Care Focused on Long-Term Oral Health',

  description:
    'Restorative dentistry often involves important decisions about saving, protecting, or replacing teeth. Promenade Dental combines thorough diagnosis, conservative treatment planning, and patient-focused care to help patients make confident decisions about their oral health.',

  items: [
    {
      title: 'See the Same Dentist Throughout Your Care',

      body:
        'Dr. Shriya personally evaluates your dental concerns, explains treatment options, and oversees your care from diagnosis through restoration whenever possible.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6',
      ],
    },

    {
      title: 'Conservative and Honest Recommendations',

      body:
        'Treatment recommendations are based on your specific needs, with a focus on preserving healthy tooth structure and avoiding unnecessary procedures whenever possible.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M24 12 L24 30 M14 22 L34 22',
      ],
    },

    {
      title: 'Comfort-Focused and Personalized Care',

      body:
        'Our team works to create a welcoming environment where patients feel informed, respected, and comfortable throughout treatment planning and restorative procedures.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M24 12 q-8 8 -8 16 q0 10 8 16 q8-6 8-16 q0-8-8-16',
      ],
    },

    {
      title: 'Comprehensive Dental Care in One Office',

      body:
        'Promenade Dental can connect restorative treatment with preventive, cosmetic, implant, and emergency dental services when additional care is needed.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M15 18 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0 M25 22 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0 M12 32 q7-6 14 0 M23 32 q5-5 10 0',
      ],
    },

    {
      title: 'Convenient Chandler Location',

      body:
        'Located in Fulton Ranch, Promenade Dental serves patients from Chandler, Ocotillo, Sun Lakes, South Chandler, and surrounding communities.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M18 14 a8 8 0 1 1 0.1 0 M18 22 v12 M12 34 h12',
      ],
    },

    {
      title: 'Most Major PPO Insurance Plans Accepted',

      body:
        'Our team helps patients understand insurance benefits, treatment options, and financial considerations so they can make informed decisions about care.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 18 h20 v12 h-20 z M18 24 h12 M20 14 v8',
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
            href: '/services/family-dentistry',
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
      testimonialsSection: {
  eyebrow: 'Patient Stories',

  heading:
    'Trusted by Chandler Patients for Restorative Dentistry',

  testimonials: [
    {
      quote:
        'I came in with a cracked tooth and expected the worst. Dr. Shriya explained everything clearly and restored the tooth comfortably.',
      name: 'Mark R.',
      context: 'Dental Crown Patient',
    },

    {
      quote:
        'After years of avoiding treatment, I finally addressed several damaged teeth. The process was much easier than I expected.',
      name: 'Susan T.',
      context: 'Restorative Dentistry Patient',
    },

    {
      quote:
        'My root canal was explained clearly, and the team made me feel comfortable throughout the entire visit.',
      name: 'Jennifer K.',
      context: 'Root Canal Patient',
    },

    {
      quote:
        'The bridge restored my ability to chew comfortably again. I appreciate how thorough the treatment planning was.',
      name: 'David L.',
      context: 'Dental Bridge Patient',
    },

    {
      quote:
        'Everyone took time to explain my options without pressure. I felt informed and confident about my treatment.',
      name: 'Amanda P.',
      context: 'Chandler Resident',
    },

    {
      quote:
        'From diagnosis through treatment, everything was professional, organized, and focused on long-term results.',
      name: 'Michael S.',
      context: 'Fulton Ranch Patient',
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
        buttonHref: '/contact-us',

        secondaryButtonText: 'Call (480) 802-8188',
        secondaryButtonHref: 'tel:+14808028188',

        image: '/assets/dental-lobby.jpg',
      },
  },


   {
  slug: 'emergency-dentistry',
  name: 'Emergency Dentistry',

  metaTitle: 'Emergency Dentist in Chandler, AZ | Promenade Dental',

  metaDescription:
    'Emergency dentist in Chandler AZ for tooth pain, broken teeth, chipped teeth, knocked-out teeth, swelling, infection, and urgent dental problems near Fulton Ranch.',

  hero: {
    eyebrow: 'Urgent Dental Care in Fulton Ranch',

    title: 'Emergency Dental Care for Tooth Pain, Broken Teeth,',
    highlight: 'Swelling, or Knocked-Out Teeth in Chandler',

    description:
      'Promenade Dental helps patients evaluate urgent dental problems such as severe tooth pain, broken or chipped teeth, swelling, infection symptoms, loose dental work, and knocked-out teeth with care planned around diagnosis, comfort, and the right next treatment.',

    image: '/assets/h-emergency-dental.webp',

    trustPoints: [
      'Urgent Dental Evaluations',
      'Tooth Pain and Swelling Concerns',
      'Broken, Chipped, or Knocked-Out Teeth',
      'Restorative and Emergency Care in One Office',
      'Located in Fulton Ranch',
      'New Patients Welcome',
    ],

    primaryCTA: {
      label: 'Call (480) 802-8188',
      href: 'tel:+14808028188',
    },

    secondaryCTA: {
      label: 'Request an Emergency Visit',
      href: '#contact',
    },
  },
  overview: {
  eyebrow: 'Emergency Dental Care',

  heading:
    'Emergency Dental Care for Pain, Infection, Broken Teeth, and Dental Injuries',

  body:
    'Dental emergencies can happen suddenly or develop over time. A toothache may become severe, a crown may loosen, a tooth may break while eating, or swelling may appear near the gums or jaw. These problems should be evaluated promptly because the cause may involve decay, infection, trauma, cracks, gum disease, or damaged dental work. At Promenade Dental, Dr. Shriya evaluates the source of the emergency and explains whether the tooth may need a filling, crown, root canal therapy, extraction, replacement planning, or another appropriate treatment.',

  features: [
    'Evaluation of severe tooth pain',
    'Assessment of swelling and infection symptoms',
    'Care for broken, chipped, or injured teeth',
    'Treatment planning based on the cause of the emergency',
  ],

  image: '/assets/service-emergency-dentist.jpg',

  cta: {
    label: 'Call for Emergency Dental Help',
    href: 'tel:+14808028188',
  },
},
symptomsSection: {
  eyebrow: 'When to Seek Emergency Dental Care',

  heading:
    'Emergency Dental Care for Pain, Swelling, Injuries, and Broken Teeth',

  body:
    'Dental emergencies often begin with symptoms that become difficult to ignore. Severe pain, swelling, trauma, or sudden damage to a tooth can indicate conditions that may worsen without evaluation. Early diagnosis helps determine the cause and the most appropriate next step.',

  symptoms: [
    {
      title: 'Severe Tooth Pain',
      body:
        'Persistent or throbbing tooth pain may be caused by deep decay, infection, cracks, nerve inflammation, or pressure within the tooth.',
    },

    {
      title: 'Swelling in the Gums, Jaw, or Face',
      body:
        'Swelling can indicate infection, inflammation, trauma, or an abscess that may require prompt dental evaluation.',
    },

    {
      title: 'Broken or Chipped Tooth',
      body:
        'A fractured tooth can expose sensitive areas of the tooth and increase the risk of further damage or infection.',
    },

    {
      title: 'Knocked-Out or Loose Tooth',
      body:
        'A tooth that has been displaced or knocked out following trauma should be evaluated as soon as possible.',
    },

    {
      title: 'Lost Filling or Loose Crown',
      body:
        'Damaged dental restorations can expose the underlying tooth and lead to sensitivity, discomfort, or additional fracture risk.',
    },

    {
      title: 'Bleeding or Injury After Trauma',
      body:
        'Bleeding around the teeth, gums, or mouth following an accident may indicate injury that requires professional assessment.',
    },
  ],
},
whyItMatters: {
  eyebrow: 'Emergency Dental Evaluation',

  heading:
    'Emergency Dental Evaluation for Tooth Pain, Swelling, Trauma, Cracks, and Infection Symptoms',

  description:
    'Emergency dental care starts with diagnosis because the same symptom can have different causes. Tooth pain may result from decay, infection, cracks, bite pressure, gum inflammation, or sinus-related pressure. A broken tooth may require a filling, crown, root canal therapy, or extraction depending on the extent of damage. Dr. Shriya evaluates the tooth, gums, bite, symptoms, dental history, swelling, trauma, and X-rays when needed before recommending treatment.',

  items: [
    {
      title: 'Pain and Symptom Location',
      body:
        'The location, timing, and intensity of pain help identify whether the issue may involve the tooth nerve, gum tissue, bite, or surrounding structures.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M16 14 q8 6 0 12 q-8 6 0 12 q8 -4 12 -12 q4 -8 -12 -12',
      ],
    },

    {
      title: 'Tooth Damage and Existing Dental Work',
      body:
        'Broken teeth, loose crowns, lost fillings, and cracked restorations need evaluation to help prevent further damage or infection.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M18 14 l8 8 l-4 6 l4 10 l-8 -6 l-8 6 l4 -10 l-4 -6 z',
      ],
    },

    {
      title: 'Swelling and Infection Signs',
      body:
        'Swelling, pus, fever, or spreading discomfort may indicate infection and should be evaluated as soon as possible.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M24 14 q10 6 8 16 q-2 10 -12 10 q-10 0 -12 -10 q-2 -10 8 -16',
      ],
    },
  ],

  cta: {
    label: 'Schedule an Emergency Dental Evaluation',
    href: '/contact',
  },
},
process: {
  eyebrow: 'Emergency Dental Visit Process',

  heading:
  'Emergency Dental Visits for Diagnosis, Treatment, and Follow-Up',

  subtitle:
    'An emergency dental visit is designed to identify the source of the problem and determine the safest next step. Some emergencies can be treated the same day depending on diagnosis, scheduling, and the treatment needed. Other cases may require stabilization, medication, follow-up treatment, or referral when the condition is more complex.',

  steps: [
    {
      title: 'Urgent Symptom Review',

      body:
        'The dental team reviews your pain, swelling, injury, broken tooth, loose restoration, or other emergency concern.',
    },

    {
      title: 'Dental Exam and X-Rays When Needed',

      body:
        'Dr. Shriya evaluates the tooth, gums, bite, dental restorations, trauma, and imaging when needed to better understand the cause of the problem.',
    },

    {
      title: 'Diagnosis and Treatment Options',

      body:
        'You receive a clear explanation of what is causing the emergency and which treatment options may be appropriate for your situation.',
    },

    {
      title: 'Same-Day Care or Follow-Up Plan',

      body:
        'When possible, treatment may begin during the emergency visit. If additional care is needed, a follow-up treatment plan is created.',
    },
  ],

  cta: {
    label: 'Request an Emergency Dental Visit',
    href: '#contact',
  },
},
maintenance: {
  eyebrow: 'Preventing Future Dental Emergencies',

  heading: 'How to Reduce the Risk of Dental Emergencies',

  body:
    'While some dental emergencies occur unexpectedly, many urgent dental problems develop from untreated decay, worn restorations, or unnoticed damage. Regular dental care and healthy habits can help reduce the likelihood of future emergencies.',

  cards: [
    {
      title: 'Attend Routine Dental Exams',

      body:
        'Regular checkups allow potential problems such as cavities, cracks, and failing dental work to be identified before they become urgent concerns.',
    },

    {
      title: 'Address Symptoms Early',

      body:
        'Tooth sensitivity, occasional discomfort, or minor damage should be evaluated before the condition progresses into severe pain or infection.',
    },

    {
      title: 'Protect Teeth During Sports',

      body:
        'Custom mouthguards may help reduce the risk of dental injuries during contact sports and recreational activities.',
    },

    {
      title: 'Avoid Habits That Increase Tooth Damage',

      body:
        'Chewing ice, biting hard objects, grinding teeth, and using teeth as tools can increase the risk of fractures and emergency dental problems.',
    },
  ],
},
benefits: {
  eyebrow: 'Why Choose Promenade Dental',

  heading:
    'Dentist-Led Emergency Dental Care for Pain, Injuries, and Urgent Dental Problems',

  description:
    'Dental emergencies often happen unexpectedly and can create stress, discomfort, and uncertainty. Promenade Dental focuses on identifying the cause of the problem, explaining treatment options clearly, and helping patients move forward with confidence.',

  items: [
    {
      title: 'Diagnosis Before Treatment',

      body:
        'Dr. Shriya evaluates symptoms, tooth structure, gums, bite, trauma, restorations, and X-rays when needed before recommending treatment.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6',
      ],
    },

    {
      title: 'Conservative Treatment Recommendations',

      body:
        'Whenever possible, treatment planning focuses on protecting healthy teeth and avoiding unnecessary procedures while addressing the underlying problem.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M24 12 L24 30 M14 22 L34 22',
      ],
    },

    {
      title: 'Comfort-Focused Patient Care',

      body:
        'Our team works to create a welcoming environment where patients feel informed, respected, and comfortable during emergency dental visits.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M24 12 q-8 8 -8 16 q0 10 8 16 q8-6 8-16 q0-8-8-16',
      ],
    },

    {
      title: 'Emergency and Restorative Care in One Office',

      body:
        'Promenade Dental can connect emergency treatment with fillings, crowns, root canals, extractions, tooth replacement, and ongoing dental care when needed.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 24 h20 M18 18 h12 M18 30 h12 M24 14 v20',
      ],
    },

    {
      title: 'Convenient Care Near Fulton Ranch',

      body:
        'Located in Chandler 85248, Promenade Dental serves patients from Fulton Ranch, Ocotillo, Sun Lakes, South Chandler, and nearby communities.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M18 14 a8 8 0 1 1 0.1 0 M18 22 v12 M12 34 h12',
      ],
    },

    {
      title: 'Most Major PPO Insurance Plans Accepted',

      body:
        'Our team helps patients understand insurance benefits, treatment options, and financial considerations so they can make informed decisions about care.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 18 h20 v12 h-20 z M18 24 h12 M20 14 v8',
      ],
    },
  ],
},
localArea: {
  eyebrow: 'Local Emergency Dentistry',

  heading:
    'Emergency Dentist Near Fulton Ranch and Chandler 85248',

  body:
    'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248. Our office serves patients from Fulton Ranch, Ocotillo, Sun Lakes, South Chandler, and nearby communities.\n\nIf you are experiencing severe tooth pain, swelling, a broken tooth, a knocked-out tooth, dental trauma, or another urgent dental concern near Chandler 85248, Promenade Dental provides emergency dental evaluations focused on diagnosis, relief, and the most appropriate next step for treatment.',

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
  eyebrow: 'Explore Related Emergency Care',

  heading:
  'Related Care for Toothaches, Broken Teeth, and Urgent Treatment',

  intro:
    'Emergency dental problems often connect with restorative treatment. The right page depends on the symptom, the condition of the tooth, and whether repair, infection treatment, or tooth replacement is needed.',

  services: [
    {
      title: 'Toothache & Dental Pain Relief',

      description:
        'Evaluation and treatment planning for tooth pain, sensitivity, pressure, swelling, and possible infection.',

      href: '/services/emergency-dentistry/toothache-relief',
    },

    {
      title: 'Broken or Chipped Tooth',

      description:
        'Care for chipped, cracked, fractured, or broken teeth that may need repair, protection, or restorative treatment.',

      href: '/services/emergency-dentistry/broken-chipped-tooth',
    },

    {
      title: 'Knocked-Out Tooth',

      description:
        'Urgent guidance for adult teeth that have been knocked out because of injury, sports accidents, or dental trauma.',

      href: '/services/emergency-dentistry/knocked-out-tooth',
    },

    {
      title: 'Root Canal Therapy',

      description:
        'Root canal therapy may be recommended when tooth pain is caused by infection or inflammation inside the tooth and the tooth can still be saved.',

      href: '/services/restorative-dentistry/root-canals',
    },
  ],
},
testimonialsSection: {
  eyebrow: 'Patient Stories',

  heading:
    'Trusted by Chandler Patients for Emergency Dental Care',

  testimonials: [
    {
      quote:
        'I woke up with severe tooth pain and was able to get evaluated quickly. Dr. Shriya explained the cause and helped me feel comfortable throughout the visit.',
      name: 'Michael R.',
      context: 'Emergency Dental Patient',
    },

    {
      quote:
        'After breaking a tooth during dinner, I was worried about losing it. The team got me in quickly and clearly explained my treatment options.',
      name: 'Jennifer T.',
      context: 'Broken Tooth Patient',
    },

    {
      quote:
        'Everyone was calm, professional, and reassuring when I came in with swelling and pain. I appreciated how thoroughly everything was explained.',
      name: 'David K.',
      context: 'Emergency Evaluation Patient',
    },

    {
      quote:
        'My crown came loose unexpectedly, and I was concerned about damaging the tooth. The office helped me schedule an appointment quickly and made the process easy.',
      name: 'Susan M.',
      context: 'Restorative Emergency Patient',
    },

    {
      quote:
        'The team took my dental injury seriously and helped me understand exactly what was happening and what to expect next.',
      name: 'Amanda P.',
      context: 'Dental Trauma Patient',
    },

    {
      quote:
        'From the phone call to the treatment visit, everything was organized, professional, and focused on solving the problem as quickly as possible.',
      name: 'Mark L.',
      context: 'Chandler Resident',
    },
  ],
},
faq: {
  eyebrow: 'Frequently Asked Questions',

  heading:
  'Emergency Dental FAQs for Pain, Swelling, and Injuries',

  items: [
    {
      q: 'What is considered a dental emergency?',
      a: 'A dental emergency may include severe tooth pain, swelling, infection signs, a broken tooth, a knocked-out tooth, a loose permanent tooth, dental trauma, or uncontrolled bleeding after injury.',
    },

    {
      q: 'Should I call for severe tooth pain?',
      a: 'Yes. Severe tooth pain should be evaluated because it may involve deep decay, infection, cracks, gum problems, or bite-related damage.',
    },

    {
      q: 'What should I do for a broken tooth?',
      a: 'Call the dental office and avoid chewing on the broken tooth. A broken tooth may need bonding, a filling, crown, root canal therapy, or extraction depending on the extent of the damage.',
    },

    {
      q: 'What should I do if a tooth is knocked out?',
      a: 'Call the dental office immediately for guidance. A knocked-out adult tooth is time-sensitive and needs urgent evaluation.',
    },

    {
      q: 'Is swelling a dental emergency?',
      a: 'Swelling can be a sign of infection and should be evaluated promptly, especially if it involves the face, jaw, fever, pus, or worsening pain.',
    },

    {
      q: 'Can emergency dental care save my tooth?',
      a: 'Sometimes. Depending on the diagnosis, a painful or damaged tooth may be saved with a filling, crown, root canal therapy, or another restorative treatment.',
    },

    {
      q: 'Will I need a root canal for tooth pain?',
      a: 'Not always. Tooth pain can have several causes. Root canal therapy may be recommended if the inside of the tooth is inflamed or infected.',
    },

    {
      q: 'Can a lost filling or loose crown wait?',
      a: 'A lost filling or loose crown should be checked soon because the tooth may be exposed to sensitivity, decay, fracture risk, or bite-related problems.',
    },

    {
      q: 'Do you treat chipped teeth?',
      a: 'Yes. Promenade Dental evaluates chipped teeth and recommends treatment based on the size, location, sensitivity, and condition of the remaining tooth structure.',
    },

    {
      q: 'Where is Promenade Dental located?',
      a: 'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248.',
    },
  ],
},
cta: {
  title: 'Call for Emergency Dental Care',
highlight: 'and Prompt Evaluation',

  subtitle:
    'Promenade Dental helps patients evaluate urgent dental problems with emergency care focused on diagnosis, comfort, tooth repair, infection treatment, and the right next step.',

  buttonText: 'Request an Emergency Visit',
  buttonHref: '/contact',

  secondaryButtonText: 'Call (480) 802-8188',
  secondaryButtonHref: 'tel:+14808028188',

  image: '/assets/dental-lobby.jpg',
},
},

{
  slug: 'sleep-apnea-snoring-solutions',
  name: 'Sleep Apnea & Snoring',

  metaTitle:
    'Sleep Apnea & Snoring Solutions in Chandler, AZ | Promenade Dental',

  metaDescription:
    'Sleep apnea and snoring solutions in Chandler AZ. Promenade Dental provides sleep and airway screenings, oral appliance therapy, and collaborative care for patients with obstructive sleep apnea and sleep-related breathing concerns.',

  hero: {
    eyebrow: 'Sleep & Airway Care in Fulton Ranch',

    title: 'Sleep Apnea and Snoring Solutions for',
    highlight: 'Better Sleep and Better Breathing in Chandler',

    description:
      'Promenade Dental helps identify signs of obstructive sleep apnea and sleep-related breathing concerns through screening, airway evaluation, and oral appliance therapy for appropriate patients. Our goal is to help patients sleep more comfortably, breathe more effectively, and improve overall quality of life.',

    image: '/assets/h-sleep-apnea.webp',

    trustPoints: [
      'Sleep & Airway Screenings',
      'Oral Appliance Therapy',
      'Snoring Evaluations',
      'Collaboration With Medical Providers',
      'Located in Fulton Ranch',
      'New Patients Welcome',
    ],

    primaryCTA: {
      label: 'Call (480) 802-8188',
      href: 'tel:+14808028188',
    },

    secondaryCTA: {
      label: 'Schedule a Sleep Screening',
      href: '#contact',
    },
  },

  overview: {
    eyebrow: 'Sleep Apnea & Snoring Solutions',

    heading:
      'Sleep Apnea and Snoring Solutions for Better Sleep, Energy, and Overall Health',

    body:
      'Sleep-related breathing disorders can affect far more than your nightly rest. Snoring, interrupted breathing, poor sleep quality, and daytime fatigue may be signs of obstructive sleep apnea. Promenade Dental helps screen patients for sleep-related breathing concerns through oral and airway evaluations and works collaboratively with qualified medical providers when additional testing is needed. For appropriate patients, oral appliance therapy may provide a comfortable treatment option that supports a more open airway during sleep.',

    features: [
      'Sleep and airway screenings',
      'Evaluation of snoring and fatigue concerns',
      'Collaboration with medical providers',
      'Custom oral appliance therapy',
    ],

    image: '/assets/service-sleep-apnea.jpg',

    cta: {
      label: 'Schedule a Sleep Screening',
      href: '/contact',
    },
  },

  symptomsSection: {
    eyebrow: 'Signs of Sleep-Related Breathing Problems',

    heading:
      'Common Symptoms Associated With Sleep Apnea and Snoring',

    body:
      'Many people live with sleep-related breathing problems for years without realizing that their symptoms may be connected. Persistent fatigue, loud snoring, poor-quality sleep, and difficulty concentrating can all indicate the need for further evaluation.',

    symptoms: [
      {
        title: 'Loud or Frequent Snoring',

        body:
          'Persistent snoring may occur when airflow is partially restricted during sleep and can be associated with sleep-related breathing disorders.',
      },

      {
        title: 'Daytime Fatigue',

        body:
          'Interrupted sleep may prevent the body from achieving restorative rest, leading to ongoing tiredness during the day.',
      },

      {
        title: 'Morning Headaches',

        body:
          'Some individuals with sleep-related breathing concerns report waking with headaches or feeling unrested despite a full night of sleep.',
      },

      {
        title: 'Dry Mouth Upon Waking',

        body:
          'Mouth breathing during sleep may contribute to dryness, discomfort, and waking with a dry mouth.',
      },

      {
        title: 'Difficulty Concentrating',

        body:
          'Poor sleep quality can affect focus, memory, concentration, and overall daily performance.',
      },

      {
        title: 'Interrupted or Restless Sleep',

        body:
          'Frequent awakenings, restless sleep, or waking up feeling unrefreshed may indicate an underlying sleep-related breathing concern.',
      },
    ],
  },

  whyItMatters: {
    eyebrow: 'Why Sleep Health Matters',

    heading:
      'Sleep Apnea Screening Helps Identify Problems That Affect More Than Sleep',

    description:
      'Sleep is essential for physical health, mental well-being, and daily performance. Obstructive sleep apnea has been associated with concerns involving cardiovascular health, blood pressure, mood, concentration, and daytime alertness. Early screening helps patients understand whether additional evaluation may be beneficial.',

    items: [
      {
        title: 'Restorative Sleep and Energy',

        body:
          'Healthy breathing during sleep helps support deeper, more restorative sleep that promotes daily energy and overall wellness.',

        paths: [
          'M6 38 A18 18 0 0 1 42 38',
          'M16 20 q8 -10 16 0 q-8 10 -16 0',
        ],
      },

      {
        title: 'Focus, Mood, and Productivity',

        body:
          'Sleep quality can influence concentration, memory, emotional well-being, and performance throughout the day.',

        paths: [
          'M6 38 A18 18 0 0 1 42 38',
          'M24 14 v16 M16 22 h16',
        ],
      },

      {
        title: 'Overall Health Considerations',

        body:
          'Sleep-related breathing disorders may be associated with broader health concerns, making appropriate evaluation important for long-term wellness.',

        paths: [
          'M6 38 A18 18 0 0 1 42 38',
          'M24 12 q-8 8 -8 16 q0 8 8 16 q8-8 8-16 q0-8-8-16',
        ],
      },
    ],

    cta: {
      label: 'Learn About Sleep Screenings',
      href: '/contact',
    },
  },

  process: {
    eyebrow: 'Sleep & Airway Evaluation Process',

    heading:
      'Sleep Apnea Screening, Evaluation, and Oral Appliance Therapy',

    subtitle:
      'Our process focuses on identifying possible sleep-related breathing concerns, collaborating with medical providers when appropriate, and providing oral appliance therapy for suitable patients.',

    steps: [
      {
        title: 'Symptom and Health Review',

        body:
          'We discuss symptoms such as snoring, fatigue, poor sleep quality, and other factors that may indicate a sleep-related breathing concern.',
      },

      {
        title: 'Oral and Airway Evaluation',

        body:
          'Dr. Shriya evaluates the teeth, jaws, tongue, soft tissues, and airway-related structures to identify findings that may warrant further assessment.',
      },

      {
        title: 'Medical Collaboration and Testing',

        body:
          'When sleep apnea is suspected, patients may be referred to a qualified medical provider for appropriate testing and diagnosis.',
      },

      {
        title: 'Oral Appliance Therapy',

        body:
          'For appropriate patients, a custom oral appliance may be provided to help support a more open airway during sleep.',
      },

      {
        title: 'Follow-Up and Adjustments',

        body:
          'Regular follow-up appointments help monitor comfort, appliance fit, and treatment effectiveness over time.',
      },
    ],

    cta: {
      label: 'Schedule a Sleep Consultation',
      href: '#contact',
    },
  },

  maintenance: {
    eyebrow: 'Supporting Long-Term Sleep Health',

    heading:
      'Healthy Habits and Ongoing Care for Better Sleep',

    body:
      'Successful sleep apnea management often involves ongoing monitoring, regular follow-up, and consistent use of recommended treatment. Small adjustments can make a meaningful difference in comfort and long-term results.',

    cards: [
      {
        title: 'Attend Follow-Up Visits',

        body:
          'Regular evaluations allow appliance fit, comfort, and treatment progress to be reviewed over time.',
      },

      {
        title: 'Wear the Appliance Consistently',

        body:
          'Consistent use of an oral appliance helps support treatment effectiveness and long-term comfort.',
      },

      {
        title: 'Monitor Changes in Symptoms',

        body:
          'Changes in snoring, sleep quality, fatigue, or comfort should be discussed during follow-up visits.',
      },

      {
        title: 'Maintain Collaborative Care',

        body:
          'Ongoing communication between dental and medical providers helps support comprehensive patient care.',
      },
    ],
  },

  benefits: {
    eyebrow: 'Why Choose Promenade Dental',

    heading:
      'Dentist-Led Sleep Apnea Screening and Oral Appliance Therapy',

    description:
      'Promenade Dental helps patients better understand sleep-related breathing concerns through airway-focused evaluations, medical collaboration, and personalized oral appliance therapy when appropriate.',

    items: [
      {
        title: 'Comprehensive Airway Evaluations',

        body:
          'Dr. Shriya evaluates oral and airway-related structures that may contribute to sleep-related breathing concerns.',

        paths: [
          'M6 38 A18 18 0 0 1 42 38',
          'M18 14 h12 v20 h-12 z',
        ],
      },

      {
        title: 'Collaboration With Medical Providers',

        body:
          'Sleep apnea diagnosis requires medical evaluation, and our office works closely with qualified providers when testing is needed.',

        paths: [
          'M6 38 A18 18 0 0 1 42 38',
          'M14 22 h20 M24 14 v16',
        ],
      },

      {
        title: 'Custom Oral Appliance Therapy',

        body:
          'Each appliance is designed specifically for the patient to support comfort and treatment effectiveness.',

        paths: [
          'M6 38 A18 18 0 0 1 42 38',
          'M16 18 h16 v12 h-16 z',
        ],
      },

      {
        title: 'Comfortable Alternative for Appropriate Patients',

        body:
          'Oral appliance therapy may provide a quiet, travel-friendly treatment option for suitable candidates.',

        paths: [
          'M6 38 A18 18 0 0 1 42 38',
          'M24 12 q-8 8 -8 16 q0 8 8 16 q8-8 8-16 q0-8-8-16',
        ],
      },

      {
        title: 'Ongoing Monitoring and Adjustments',

        body:
          'Treatment success is supported through follow-up care and personalized appliance adjustments.',

        paths: [
          'M6 38 A18 18 0 0 1 42 38',
          'M18 14 a8 8 0 1 1 0.1 0',
        ],
      },

      {
        title: 'Convenient Care Near Fulton Ranch',

        body:
          'Located in Chandler 85248, Promenade Dental serves patients from Fulton Ranch, Ocotillo, Sun Lakes, South Chandler, and nearby communities.',

        paths: [
          'M6 38 A18 18 0 0 1 42 38',
          'M18 14 a8 8 0 1 1 0.1 0 M18 22 v12',
        ],
      },
    ],
  },
  localArea: {
  eyebrow: 'Local Sleep & Airway Care',

  heading:
    'Sleep Apnea and Snoring Solutions Near Fulton Ranch and Chandler 85248',

  body:
    'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248. Our office serves patients from Fulton Ranch, Ocotillo, Sun Lakes, South Chandler, and nearby communities.\n\nIf snoring, daytime fatigue, poor sleep quality, or suspected sleep apnea is affecting your daily life, Promenade Dental provides sleep and airway screenings, oral appliance therapy, and collaborative care focused on helping patients achieve better sleep and overall wellness.',

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
  eyebrow: 'Explore Related Services',

  heading:
    'Related Services for Oral Health, Airway Evaluations, and Long-Term Wellness',

  intro:
    'Sleep-related breathing concerns often connect with overall oral health, airway function, and preventive care. Depending on your needs, additional dental services may support your long-term health and comfort.',

  services: [
    {
      title: 'Family Dentistry',

      description:
        'Routine dental exams and preventive care that support long-term oral health and early identification of potential concerns.',

      href: '/services/family-dentistry',
    },

    {
      title: 'Preventive Dentistry',

      description:
        'Professional cleanings, exams, and preventive services designed to help maintain healthy teeth and gums.',

      href: '/services/preventive-dentistry',
    },

    {
      title: 'TMJ & Jaw Pain Treatment',

      description:
        'Evaluation of jaw discomfort, bite concerns, muscle tension, and other conditions that may affect oral function and comfort.',

      href: '/services/tmj-treatment',
    },

    {
      title: 'Comprehensive Dental Exams',

      description:
        'Detailed evaluations of the teeth, gums, bite, and oral structures to support overall dental health.',

      href: '/services/family-dentistry/dental-exams',
    },
  ],
},

testimonialsSection: {
  eyebrow: 'Patient Stories',

  heading:
    'Trusted by Chandler Patients for Sleep & Airway Care',

  testimonials: [
    {
      quote:
        'I had struggled with loud snoring and poor sleep for years. The screening process was thorough, and I appreciated how clearly everything was explained.',
      name: 'Robert M.',
      context: 'Sleep Screening Patient',
    },

    {
      quote:
        'Dr. Shriya took the time to discuss my symptoms and explain the next steps. I felt informed and comfortable throughout the process.',
      name: 'Melissa T.',
      context: 'Airway Evaluation Patient',
    },

    {
      quote:
        'The oral appliance was much easier to travel with than I expected. The team made sure it fit comfortably and answered all my questions.',
      name: 'David K.',
      context: 'Oral Appliance Therapy Patient',
    },

    {
      quote:
        'I originally came in because of fatigue and snoring. The office helped me understand the connection between sleep and overall health.',
      name: 'Jennifer P.',
      context: 'Sleep Health Patient',
    },

    {
      quote:
        'Everyone was professional, welcoming, and focused on finding the right solution for my situation.',
      name: 'Michael R.',
      context: 'Chandler Resident',
    },

    {
      quote:
        'The follow-up appointments were helpful, and the team made adjustments to improve comfort and effectiveness.',
      name: 'Sarah L.',
      context: 'Follow-Up Care Patient',
    },
  ],
},

faq: {
  eyebrow: 'Frequently Asked Questions',

  heading:
    'Sleep Apnea and Snoring FAQs',

  items: [
    {
      q: 'What is obstructive sleep apnea?',
      a: 'Obstructive sleep apnea is a sleep-related breathing disorder in which the airway repeatedly narrows or becomes blocked during sleep, leading to interruptions in normal breathing.',
    },

    {
      q: 'Is snoring always a sign of sleep apnea?',
      a: 'Not always. While snoring can occur without sleep apnea, persistent or loud snoring may be associated with sleep-related breathing disorders and should be evaluated when accompanied by other symptoms.',
    },

    {
      q: 'How can a dentist help with sleep apnea?',
      a: 'Dentists can screen for signs of sleep-related breathing disorders, evaluate oral and airway structures, collaborate with medical providers, and provide oral appliance therapy for appropriate patients.',
    },

    {
      q: 'Can a dentist diagnose sleep apnea?',
      a: 'No. Sleep apnea requires diagnosis by a qualified medical provider through appropriate testing. Dentists help identify possible signs and coordinate care when further evaluation is needed.',
    },

    {
      q: 'What is oral appliance therapy?',
      a: 'Oral appliance therapy uses a custom-made device worn during sleep to help support the jaw and maintain a more open airway for appropriate patients.',
    },

    {
      q: 'Is oral appliance therapy comfortable?',
      a: 'Many patients find oral appliances comfortable and easy to use. Appliances are custom-made and adjusted to support both comfort and effectiveness.',
    },

    {
      q: 'Can oral appliances help reduce snoring?',
      a: 'For some patients, oral appliance therapy may help reduce snoring by supporting a more open airway during sleep.',
    },

    {
      q: 'Do I need a sleep study before treatment?',
      a: 'If sleep apnea is suspected, patients are typically referred to a qualified medical provider for testing and diagnosis before treatment recommendations are finalized.',
    },

    {
      q: 'How often will my appliance need adjustments?',
      a: 'Adjustment schedules vary by patient. Follow-up visits allow the appliance to be evaluated and modified as needed for comfort and effectiveness.',
    },

    {
      q: 'Where is Promenade Dental located?',
      a: 'Promenade Dental is located at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248, serving Fulton Ranch, Ocotillo, Sun Lakes, South Chandler, and surrounding communities.',
    },
  ],
},

cta: {
  title: 'Schedule a Sleep & Airway Screening',
  highlight: 'for Snoring, Fatigue, or Sleep Concerns',

  subtitle:
    'Promenade Dental helps patients evaluate sleep-related breathing concerns through airway-focused screenings, oral appliance therapy, and collaboration with qualified medical providers. If poor sleep, snoring, or daytime fatigue is affecting your quality of life, our team is here to help you take the next step.',

  buttonText: 'Request a Sleep Screening',
  buttonHref: '/contact',

  secondaryButtonText: 'Call (480) 802-8188',
  secondaryButtonHref: 'tel:+14808028188',

  image: '/assets/dental-lobby.jpg',
},
}
  
  ];
  
  
  export function getServiceBySlug(slug: string): ServiceData | undefined {
    return SERVICES.find((s) => s.slug === slug);
  }