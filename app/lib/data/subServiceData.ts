
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
  testimonialsSection?:{
  eyebrow: string;
    heading: string;
    testimonials:{
      quote:string;
      name:string;
      context:string;
    }[]

}
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
  serviceSlug: 'family-dentistry',
  slug: 'dental-exams-cleanings',
  name: 'Dental Exams & Cleanings',
  metaTitle: 'Dental Exams & Cleanings in Chandler, AZ | Promenade Dental',
  metaDescription:
    'Dental exams and cleanings in Chandler AZ for cavity prevention, gum health, plaque removal, and routine checkups. Visit Promenade Dental near Fulton Ranch.',

  hero: {
    eyebrow: 'Preventive Dental Care in Fulton Ranch',
    title: 'Dental Exams and Cleanings for',
    highlight: 'Cavity Prevention, Gum Health, and Routine Oral Care in Chandler',
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
    heading: "Most Dental Problems Don't Hurt — Until They Do",
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
    note: 'Routine preventive visits help detect oral health concerns early and support long-term dental health for both adults and children.',
  },

  whyItMatters: {
    eyebrow: 'Comprehensive Dental Examination',
    heading: 'Dental Exam for Cavities, Gum Health, Bite Changes, Tooth Wear, and Existing Dental Work',
    description:
      'A dental exam is more than a quick look at the teeth. It helps evaluate the condition of your mouth as a whole, including the teeth, gums, bite, jaw function, restorations, and areas that may need monitoring.\n\nDr. Shriya checks for cavities, gum inflammation, tooth wear, cracked teeth, loose fillings, crown issues, bite-related stress, and other changes that may affect long-term oral health.',
    items: [
      {
        title: 'Cavity Detection',
        body: 'Dental exams help identify early decay before it becomes tooth pain, infection, or larger restorative treatment.',
        paths: ['M12 12 h24 v24 h-24 z', 'M18 18 h12'],
      },
      {
        title: 'Gum Health Evaluation',
        body: 'The gums are checked for inflammation, bleeding, recession, pocketing, or signs that gum disease treatment may be needed.',
        paths: ['M12 30 C18 18 30 18 36 30', 'M16 34 h16'],
      },
      {
        title: 'Existing Dental Work Check',
        body: 'Fillings, crowns, bridges, dentures, and implant restorations are monitored for wear, damage, fit, and long-term function.',
        paths: ['M16 16 h16 v16 h-16 z', 'M20 24 h8'],
      },
    ],
    cta: {
      label: 'Book a Dental Exam',
      href: '#contact',
    },
  },

  features: {
    eyebrow: 'Professional Dental Cleanings',
    heading: 'Professional Teeth Cleanings for Plaque, Tartar, Stains, and Gum Health Support',
    body:
      'Even with good brushing and flossing, plaque can harden into tartar in areas that are difficult to clean at home. Professional dental cleanings help remove buildup from the teeth and gumline while supporting fresher breath, cleaner teeth, and healthier gums.',
    features: [
      {
        title: 'Removes Plaque and Tartar',
        body: 'Professional cleanings remove buildup that cannot always be cleared with home brushing alone.',
      },
      {
        title: 'Supports Healthier Gums',
        body: 'Cleanings help reduce plaque around the gumline, supporting healthier gums and lowering the risk of inflammation.',
      },
      {
        title: 'Helps Keep Teeth Feeling Cleaner',
        body: 'A professional cleaning polishes the teeth and removes surface buildup that can affect how the teeth look and feel.',
      },
    ],
    cta: {
      label: 'Schedule a Professional Cleaning',
      href: '#contact',
    },
  },

  servicesGrid: {
    eyebrow: 'Preventive Dental Services',
    heading: 'Dental Checkup Services for Preventive Oral Care',
    intro:
      'A routine dental visit may include several preventive steps depending on the patient’s age, oral health, symptoms, risk factors, and dental history.',
    services: [
      {
        title: 'Tooth and Cavity Evaluation',
        description: 'Dr. Shriya checks for cavities, enamel changes, cracks, worn areas, broken fillings, and signs of tooth damage.',
        bestFor: ['Early decay', 'Tooth sensitivity', 'Routine checkups', 'Preventive monitoring'],
        cta: 'Ask About a Cavity Check',
        href: '#contact',
      },
      {
        title: 'Gum Health Evaluation',
        description: 'The gums are evaluated for inflammation, bleeding, recession, pocket depth, and signs of periodontal problems.',
        bestFor: ['Bleeding gums', 'Gum sensitivity', 'Bad breath', 'Gum disease prevention'],
        cta: 'Ask About Gum Health',
        href: '#contact',
      },
      {
        title: 'Professional Teeth Cleaning',
        description: 'Plaque and tartar are removed from the teeth and gumline, followed by polishing when appropriate.',
        bestFor: ['Routine cleaning', 'Tartar buildup', 'Plaque control', 'Fresher-feeling teeth'],
        cta: 'Book a Teeth Cleaning',
        href: '#contact',
      },
      {
        title: 'Dental X-Rays When Needed',
        description: 'X-rays may be recommended to check areas that cannot be fully seen during a visual exam, including between teeth, below old restorations, and around tooth roots.',
        bestFor: ['Hidden cavities', 'Root concerns', 'Bone support', 'Infection signs'],
        cta: 'Ask About Dental X-Rays',
        href: '#contact',
      },
      {
        title: 'Oral Health Screening',
        description: 'The mouth is checked for changes in the soft tissues, gums, tongue, cheeks, and other visible oral structures.',
        bestFor: ['Routine monitoring', 'Tissue changes', 'Preventive dental care', 'Oral health assessment'],
        cta: 'Schedule a Checkup',
        href: '#contact',
      },
      {
        title: 'Personalized Prevention Plan',
        description: 'Patients receive guidance based on cavity risk, gum health, brushing habits, flossing habits, diet, sensitivity, and dental history.',
        bestFor: ['Cavity prevention', 'Gum health support', 'Home care improvement', 'Long-term oral health'],
        cta: 'Build a Prevention Plan',
        href: '#contact',
      },
    ],
  },

  solutionsGrid: {
    eyebrow: 'Who Benefits From Preventive Dental Care',
    heading: 'Preventive Dental Care for Adults and Children',
    body:
      'Dental exams and cleanings are important for patients at different stages of life. The purpose may change depending on age, gum health, cavity risk, existing dental work, and treatment history.',
    cards: [
      {
        title: 'Adults Maintaining Oral Health',
        subtitle: 'Routine Preventive Care',
        body: 'Routine exams help adults monitor cavities, gum health, existing dental work, tooth wear, and bite-related changes before larger problems develop.',
        image: '/assets/adult-dental-exam.jpg',
      },
      {
        title: 'Children Learning Preventive Habits',
        subtitle: 'Growing Smiles',
        body: 'Cleanings and exams help children become comfortable with dental visits while monitoring tooth development, oral hygiene, and cavity risk.',
        image: '/assets/child-dental-cleaning.jpg',
      },
      {
        title: 'Patients With Crowns, Fillings, Bridges, or Implants',
        subtitle: 'Monitoring Existing Dental Work',
        body: 'Existing restorations benefit from regular evaluation to check their fit, wear, surrounding gum health, and overall function.',
        image: '/assets/dental-restoration-check.jpg',
      },
      {
        title: 'Patients With Gum Sensitivity or Bleeding',
        subtitle: 'Gum Health Support',
        body: 'Patients experiencing bleeding gums, bad breath, or gum tenderness can benefit from regular evaluations and preventive care to monitor gum health.',
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
    heading: 'Dental Cleaning Schedule Based on Cavity Risk, Gum Health, and Oral Care Needs',
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
    heading: 'What to Expect During Your Dental Exam and Cleaning',
    subtitle:
      'A preventive dental visit is designed to clean the teeth, evaluate oral health, identify early concerns, and help patients understand what needs attention now or later.',
    steps: [
      {
        title: 'Oral Health Review',
        body: 'The dental team reviews your dental history, symptoms, home care habits, tooth sensitivity, gum concerns, and previous dental treatment.',
      },
      {
        title: 'Dental Exam',
        body: 'Dr. Shriya evaluates the teeth, gums, bite, existing dental work, and any areas that may need monitoring or additional evaluation.',
      },
      {
        title: 'Professional Cleaning',
        body: 'Plaque and tartar are removed from the teeth and along the gumline, followed by polishing when appropriate.',
      },
      {
        title: 'Prevention and Follow-Up Plan',
        body: 'You receive personalized guidance on home care, cavity prevention, gum health, recommended follow-up visits, and any treatment that may be beneficial.',
      },
    ],
    cta: {
      label: 'Book a Dental Exam and Cleaning',
      href: '#contact',
    },
  },

  educationSection: {
    eyebrow: 'Preventive Dental Care',
    heading: 'Dental Checkups for Finding Small Problems Before They Become Tooth Pain or Emergencies',
    body:
      'Routine dental visits can help detect cavities, gum inflammation, cracked teeth, loose fillings, and worn dental work before symptoms become severe. When small problems are found early, treatment may be simpler than waiting until the tooth hurts or breaks.',
    supportingText:
      'If an issue is found during your exam, Promenade Dental can connect preventive care with restorative treatments such as fillings, crowns, gum disease treatment, night guards, or root canal evaluation when needed.',
    image: '/assets/dental-exams.jpg',
    imageAlt: 'Routine dental exam and professional cleaning focused on early cavity detection, gum health evaluation, and preventive oral care',
    cta: {
      label: 'Schedule a Preventive Checkup',
      href: '#contact',
    },
  },

  patientTypesSection: {
    eyebrow: 'Who We Help',
    heading: 'Routine Cleanings Tailored to Your Specific Needs',
    intro:
      'Dental checkups aren’t one-size-fits-all. At Promenade Dental, your cleaning and exam are personalized based on your current oral health, dental history, and comfort level.',
    items: [
      {
        title: 'Patients with Healthy Smiles',
        description: 'If you maintain excellent home care, your visit will focus on polishing, maintaining your healthy baseline, and confirming that no hidden cavities are developing.',
      },
      {
        title: 'Patients Prone to Tartar or Cavities',
        description: 'For patients who naturally build tartar quickly or have a higher risk of decay, exams help catch these issues before they escalate, combined with targeted brushing advice.',
      },
      {
        title: 'Patients with Restored Teeth',
        description: 'If you have fillings, crowns, or implants, routine checkups ensure that your dental work remains strong, functional, and properly sealed against bacteria.',
      },
      {
        title: 'Patients Overdue for Care',
        description: 'If it’s been years since your last cleaning, we provide a judgment-free environment to get your oral health back on track at a comfortable pace.',
      },
    ],
  },

  symptomsSection: {
    eyebrow: 'When to Schedule a Cleaning',
    heading: 'Signs You Should Not Skip Your Dental Checkup',
    body:
      'Even if you don’t feel active tooth pain, your mouth may be showing early warning signs that a professional cleaning and examination are needed.',
    symptoms: [
      {
        title: 'Fuzzy-Feeling Teeth',
        body: 'If your teeth feel rough or fuzzy even after brushing, it indicates a buildup of plaque or tartar that requires a professional cleaning.',
      },
      {
        title: 'Bleeding While Flossing',
        body: 'Gums that are tender, swollen, or bleed easily when you brush or floss are common signs of early gum inflammation (gingivitis).',
      },
      {
        title: 'Persistent Bad Breath',
        body: 'Bad breath that keeps returning despite good oral hygiene can be tied to hidden plaque buildup or early decay.',
      },
      {
        title: 'New Tooth Sensitivity',
        body: 'A sudden twinge when eating sweet, cold, or hot foods can mean enamel wear or a developing cavity that should be checked.',
      },
      {
        title: 'Discolored Spots on Teeth',
        body: 'New white, brown, or black spots on the chewing surfaces of your teeth can be early indicators of decay.',
      },
      {
        title: 'More Than 6 Months Since Your Last Visit',
        body: 'Staying consistent with a routine 6-month cleaning schedule is the easiest way to prevent unexpected dental problems.',
      },
    ],
  },

  maintenance: {
    eyebrow: 'Ongoing Oral Maintenance',
    heading: 'Protecting Your Smile Between Cleanings',
    body:
      'A professional cleaning resets your oral health, but consistent home maintenance is what keeps plaque and tartar away between your visits. Dr. Shriya and her team provide customized advice to help you maintain your smile.',
    cards: [
      {
        title: 'Brushing Technique',
        body: 'We recommend using a soft-bristled brush or electric toothbrush twice a day, focusing on the gumline where plaque tends to hide.',
      },
      {
        title: 'Daily Flossing',
        body: 'Flossing removes the food particles and bacteria lodged between teeth that a toothbrush simply cannot reach.',
      },
      {
        title: 'Fluoride and Mouthwash',
        body: 'Depending on your cavity risk, we may suggest a specific fluoride toothpaste or an antimicrobial mouthwash to further protect your enamel.',
      },
      {
        title: 'Dietary Habits',
        body: 'Limiting sugary snacks, acidic drinks, and staying hydrated with plenty of water goes a long way in preventing decay and enamel erosion.',
      },
    ],
  },

  benefits: {
  eyebrow: 'Why Choose Promenade Dental',

  heading:
    'Personalized Dental Exams and Cleanings for Long-Term Oral Health',

  description:
    'Regular dental visits are about more than cleaning teeth. Promenade Dental focuses on building lasting relationships with patients, providing clear guidance, and helping families stay proactive about their oral health through every stage of life.',

  items: [
    {
      title: 'See the Same Dentist Every Visit',

      body:
        'Dr. Shriya personally evaluates your oral health, helping create continuity of care and a better understanding of changes over time.',

      paths: [
        'M8 38 A18 18 0 0 1 40 38',
        'M16 14 h16 v20 h-16 z M20 20 h8 M20 26 h8',
      ],
    },

    {
      title: 'Comfort-Focused Preventive Care',

      body:
        'Our team works to create a welcoming environment where patients of all ages feel comfortable during routine dental visits and preventive care.',

      paths: [
        'M10 30 h28',
        'M16 18 C20 12 28 12 32 18 M18 30 h12',
      ],
    },

    {
      title: 'Clear and Honest Guidance',

      body:
        'Findings, recommendations, and treatment options are explained in straightforward language so patients can make informed decisions about their oral health.',

      paths: [
        'M12 34 A10 10 0 1 1 36 34',
        'M18 18 h12 M24 14 v20',
      ],
    },

    {
      title: 'Preventive, Restorative, and Family Care in One Office',

      body:
        'Promenade Dental provides preventive, restorative, cosmetic, implant, and emergency dental services, making it easier to manage care for the whole family.',

      paths: [
        'M12 14 h24 v20 h-24 z',
        'M18 20 h12 M24 14 v20',
      ],
    },

    {
      title: 'Convenient Chandler Location',

      body:
        'Located in Fulton Ranch, Promenade Dental serves patients from Chandler, Ocotillo, Sun Lakes, South Chandler, and nearby communities.',

      paths: [
        'M18 14 a8 8 0 1 1 0.1 0 M18 22 v12 M12 34 h12',
      ],
    },

    {
      title: 'Most Major PPO Insurance Plans Accepted',

      body:
        'Our team helps patients understand insurance benefits and treatment options so they can make confident decisions about their dental care.',

      paths: [
        'M14 18 h20 v12 h-20 z M18 24 h12 M20 14 v8',
      ],
    },
  ],
},

  testimonialsSection: {
    eyebrow: 'Patient Stories',
    heading: 'Trusted by Chandler for Routine Cleanings',
    testimonials: [
      {
        quote: 'My teeth have never felt cleaner! The hygienist was extremely gentle, and Dr. Shriya took the time to explain my X-rays so I actually understood them. Best exam I have ever had.',
        name: 'Sarah K.',
        context: 'Routine Care Patient',
      },
      {
        quote: 'I used to dread going in for cleanings because of my sensitive gums, but the team here made sure I was comfortable the entire time. Highly recommend them for regular checkups.',
        name: 'David W.',
        context: 'Chandler Resident',
      },
      {
        quote: 'They are incredibly thorough without being pushy. They cleaned my teeth perfectly and just told me what to keep an eye on, rather than trying to upsell me on treatments I didn’t need.',
        name: 'Emily T.',
        context: 'Fulton Ranch Resident',
      },
      {
        quote: 'I hadn’t had a cleaning in a few years and was pretty nervous. The staff at Promenade Dental was completely judgment-free. They got my teeth looking great again in just one visit.',
        name: 'Mark L.',
        context: 'New Patient',
      },
      {
        quote: 'I brought both of my kids in for their six-month exams and the whole team was fantastic. They made the cleanings fun and stress-free for the kids, which is a huge relief as a parent.',
        name: 'Jessica M.',
        context: 'Mother of two',
      },
      {
        quote: 'Scheduling my exam was so easy, and I didn’t have to wait in the lobby at all. The cleaning was efficient but thorough, and Dr. Shriya answered all my questions perfectly. A very well-run practice.',
        name: 'Robert G.',
        context: 'Ocotillo Resident',
      },
    ],
  },

  localArea: {
    eyebrow: 'Dental Exams and Cleanings Near Fulton Ranch',
    heading: 'Dental Exams and Cleanings Near Fulton Ranch and Chandler 85248',
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
    heading: 'Related Services for Preventive Dentistry and Family Care',
    intro:
      'Dental exams and cleanings are the foundation of preventive care. Depending on the exam findings, patients may also benefit from related family and preventive services.',
    services: [
      {
        title: 'Family & Preventive Dentistry',
        description: 'Explore preventive dental care for adults, children, families, gum health, cavities, and long-term oral health.',
        href: '/services/family-dentistry',
      },
      {
        title: 'Children’s Dentistry',
        description: 'Dental visits for children help monitor tooth development, cavity risk, healthy hygiene habits, and comfort with dental care.',
        href: '/services/family-dentistry/childrens-dentistry',
      },
      {
        title: 'Gum Disease Treatment',
        description: 'Gum treatment may be recommended when bleeding, inflammation, pocketing, or periodontal concerns are identified during an exam.',
        href: '/services/family-dentistry/gum-disease-treatment',
      },
      {
        title: 'Night Guards & Teeth Grinding',
        description: 'Custom night guards may help protect teeth from grinding, clenching, tooth wear, and bite-related damage.',
        href: '/services/family-dentistry/night-guards-teeth-grinding',
      },
    ],
  },

  faq: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'Dental Exam and Cleaning Questions About Preventive Care',
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
symptomsSection: {
  eyebrow: "Signs Your Child May Need Dental Care",

  heading:
    "Common Signs a Child Should See a Dentist",

  body:
    "Many childhood dental problems begin with small changes that parents may notice at home. Routine dental visits help identify concerns early and provide guidance before problems become more serious.",

  symptoms: [
    {
      title: "Tooth Pain or Sensitivity",
      body:
        "Pain while eating, drinking, or brushing may indicate cavities, enamel wear, infection, or another dental concern."
    },

    {
      title: "White, Brown, or Dark Spots on Teeth",
      body:
        "Changes in tooth color may be early signs of tooth decay or enamel weakening."
    },

    {
      title: "Bleeding or Swollen Gums",
      body:
        "Inflamed gums may develop when plaque accumulates around the gumline and should be evaluated during a dental visit."
    },

    {
      title: "Difficulty Chewing",
      body:
        "Pain while chewing can sometimes indicate cavities, cracked teeth, bite concerns, or developing dental problems."
    },

    {
      title: "Persistent Bad Breath",
      body:
        "Ongoing bad breath may be related to plaque buildup, cavities, oral hygiene challenges, or gum inflammation."
    },

    {
      title: "Broken, Chipped, or Injured Teeth",
      body:
        "Dental injuries should be evaluated to determine whether treatment or monitoring is needed."
    }
  ]
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
maintenance: {
  eyebrow: "Healthy Habits Between Visits",

  heading:
    "Helping Children Maintain Healthy Smiles at Home",

  body:
    "Professional dental visits are important, but daily habits at home play a major role in preventing cavities and supporting healthy tooth development. Families receive practical guidance based on the child's age, oral health needs, and stage of growth.",

  cards: [
    {
      title: "Twice-Daily Brushing",
      body:
        "Children should brush their teeth twice daily using age-appropriate fluoride toothpaste and proper brushing techniques."
    },

    {
      title: "Daily Flossing",
      body:
        "Flossing helps remove food particles and plaque between teeth where a toothbrush cannot reach."
    },

    {
      title: "Healthy Food and Drink Choices",
      body:
        "Limiting sugary snacks and beverages can help reduce cavity risk and support stronger teeth."
    },

    {
      title: "Consistent Preventive Visits",
      body:
        "Routine exams and cleanings allow the dental team to monitor development, identify concerns early, and reinforce healthy habits."
    }
  ]
},
benefits: {
  eyebrow: 'Why Choose Promenade Dental',

  heading:
    "Family-Focused Children's Dentistry Designed Around Comfort and Trust",

  description:
    "Children's dental care should support both the child and the parent. Promenade Dental focuses on creating positive dental experiences, providing clear guidance, and helping families build healthy habits that support long-term oral health.",

  items: [
    {
      title: 'Comfort-Focused Dental Visits',

      body:
        'The team helps children feel more comfortable with dental care through calm communication, patience, and age-appropriate explanations.',

      paths: [
        'M12 34 A10 10 0 1 1 36 34',
        'M18 18 h12 M24 14 v20',
      ],
    },

    {
      title: 'Clear Guidance for Parents',

      body:
        'Families receive practical explanations about oral health, tooth development, home care habits, diet, and treatment recommendations in language that is easy to understand.',

      paths: [
        'M10 30 h28',
        'M16 18 C20 12 28 12 32 18 M18 30 h12',
      ],
    },

    {
      title: 'See the Same Dentist as Your Family Grows',

      body:
        'Dr. Shriya provides continuity of care by getting to know your child’s dental history, growth, habits, and oral health needs over time.',

      paths: [
        'M8 38 A18 18 0 0 1 40 38',
        'M16 14 h16 v20 h-16 z M20 20 h8 M20 26 h8',
      ],
    },

    {
      title: 'Conservative and Honest Recommendations',

      body:
        'Treatment recommendations focus on what is necessary for your child’s oral health, helping parents make informed decisions with confidence.',

      paths: [
        'M24 12 L24 30 M14 22 L34 22',
      ],
    },

    {
      title: 'Family Dental Care in One Office',

      body:
        'Promenade Dental provides preventive, restorative, cosmetic, implant, and emergency dentistry, making it easier for families to receive care in one location.',

      paths: [
        'M12 14 h24 v20 h-24 z',
        'M18 20 h12 M24 14 v20',
      ],
    },

    {
      title: 'Convenient Chandler Location',

      body:
        'Located in Fulton Ranch, Promenade Dental serves families from Chandler, Ocotillo, Sun Lakes, South Chandler, and surrounding communities.',

      paths: [
        'M18 14 a8 8 0 1 1 0.1 0 M18 22 v12 M12 34 h12',
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
testimonialsSection: {
  eyebrow: "Patient Stories",

  heading: "Trusted by Families Across Chandler",

  testimonials: [
    {
      quote:
        "My daughter was extremely nervous before her first visit, but the entire team made her feel comfortable and relaxed. Dr. Shriya explained everything in a way she could understand, and now she actually looks forward to coming back.",
      name: "Amanda R.",
      context: "Parent of Young Patient",
    },

    {
      quote:
        "We recently moved to Chandler and were looking for a family dentist for our children. The staff was welcoming, the office was great with kids, and the visit was smooth from start to finish. We couldn't be happier.",
      name: "Michael T.",
      context: "Father of Two",
    },

    {
      quote:
        "My son had a cavity that we were worried about, and Dr. Shriya took the time to explain the situation clearly without making him feel scared. The treatment was gentle, and he left with a smile on his face.",
      name: "Jessica P.",
      context: "Chandler Parent",
    },

    {
      quote:
        "The team is amazing with children. They were patient, kind, and made my daughter feel like she was the most important person in the room. It was the best dental experience we've had as a family.",
      name: "Sarah L.",
      context: "Mother of Three",
    },

    {
      quote:
        "Scheduling appointments for multiple kids can be challenging, but Promenade Dental made everything simple. The visits were efficient, thorough, and stress-free, which every parent can appreciate.",
      name: "Robert K.",
      context: "Fulton Ranch Parent",
    },

    {
      quote:
        "My child chipped a tooth during a sports activity, and the office was able to see us quickly. Everyone was calm, reassuring, and professional. They turned a stressful situation into a positive experience.",
      name: "Emily W.",
      context: "Parent of Teen Patient",
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
    'Personalized Gum Disease Care Focused on Long-Term Oral Health',

  description:
    'Gum disease can affect gum health, tooth support, and long-term oral health. Promenade Dental focuses on clear communication, conservative treatment planning, and ongoing support to help patients understand their condition and protect their smiles.',

  items: [
    {
      title: 'Comprehensive Evaluation by Dr. Shriya',

      body:
        'Dr. Shriya personally evaluates gum measurements, bleeding, recession, tooth support, symptoms, and imaging when needed before recommending treatment.',

      paths: [
        'M8 38 A18 18 0 0 1 40 38',
        'M16 14 h16 v20 h-16 z M20 20 h8 M20 26 h8',
      ],
    },

    {
      title: 'Clear and Honest Treatment Recommendations',

      body:
        'Patients receive straightforward explanations about routine cleanings, deep cleanings, periodontal maintenance, and home care recommendations without unnecessary treatment.',

      paths: [
        'M10 30 h28',
        'M16 18 C20 12 28 12 32 18 M18 30 h12',
      ],
    },

    {
      title: 'Comfort-Focused Patient Experience',

      body:
        'Our team works to create a welcoming environment where patients feel informed, respected, and comfortable throughout gum disease treatment and maintenance visits.',

      paths: [
        'M12 34 A10 10 0 1 1 36 34',
        'M18 18 h12 M24 14 v20',
      ],
    },

    {
      title: 'Long-Term Prevention and Maintenance Support',

      body:
        'Gum health often requires ongoing monitoring and maintenance. Promenade Dental helps patients build practical habits that support healthier gums over time.',

      paths: [
        'M24 12 L24 30 M14 22 L34 22',
      ],
    },

    {
      title: 'Comprehensive Dental Care in One Office',

      body:
        'Promenade Dental can connect gum disease treatment with preventive, restorative, implant, cosmetic, and emergency dental services when additional care is needed.',

      paths: [
        'M12 14 h24 v20 h-24 z',
        'M18 20 h12 M24 14 v20',
      ],
    },

    {
      title: 'Convenient Chandler Location',

      body:
        'Located in Fulton Ranch, Promenade Dental serves patients from Chandler, Ocotillo, Sun Lakes, South Chandler, and surrounding communities.',

      paths: [
        'M18 14 a8 8 0 1 1 0.1 0 M18 22 v12 M12 34 h12',
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
testimonialsSection: {
  eyebrow: 'Patient Stories',

  heading: 'Trusted by Chandler Patients for Gum Health Care',

  testimonials: [
    {
      quote:
        'I had bleeding gums for months and assumed it was normal. Dr. Shriya explained what was happening and created a treatment plan that was easy to follow. Within a few weeks, my gums felt much healthier.',
      name: 'Michael R.',
      context: 'Periodontal Care Patient',
    },

    {
      quote:
        'The team was extremely thorough during my gum evaluation. They showed me exactly where the problem areas were and explained the difference between a regular cleaning and deep cleaning without making me feel pressured.',
      name: 'Jennifer T.',
      context: 'Chandler Resident',
    },

    {
      quote:
        'I was embarrassed because it had been years since my last dental visit, but everyone was professional and supportive. They helped me get my gum health back on track without judgment.',
      name: 'David K.',
      context: 'New Patient',
    },

    {
      quote:
        'My gums would bleed every time I brushed, and I constantly dealt with bad breath. After treatment and following their recommendations, both problems improved significantly.',
      name: 'Amanda L.',
      context: 'Periodontal Maintenance Patient',
    },

    {
      quote:
        'Dr. Shriya took the time to explain my pocket measurements and X-rays so I could actually understand what was happening with my gums. I appreciated the honesty and attention to detail.',
      name: 'Robert S.',
      context: 'Fulton Ranch Resident',
    },

    {
      quote:
        'The deep cleaning procedure was much easier than I expected. The team checked on me throughout the appointment and made sure I was comfortable from start to finish.',
      name: 'Karen M.',
      context: 'Scaling & Root Planing Patient',
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

  heading:
    'Personalized Night Guard Care for Grinding, Clenching, and Tooth Protection',

  description:
    'Teeth grinding and clenching can place ongoing pressure on teeth, restorations, and jaw joints. Promenade Dental focuses on identifying the signs of bruxism, explaining treatment options clearly, and providing comfortable solutions designed around your individual needs.',

  items: [
    {
      title: 'Comprehensive Evaluation by Dr. Shriya',

      body:
        'Dr. Shriya evaluates tooth wear, bite pressure, jaw symptoms, restorations, enamel damage, and other signs of grinding before recommending treatment.',

      paths: [
        'M8 38 A18 18 0 0 1 40 38',
        'M16 14 h16 v20 h-16 z M20 20 h8 M20 26 h8',
      ],
    },

    {
      title: 'Comfort-Focused Custom Night Guards',

      body:
        'Custom night guards are designed from dental records to provide a more precise fit, improved comfort, and better long-term wear than over-the-counter alternatives.',

      paths: [
        'M10 30 h28',
        'M16 18 C20 12 28 12 32 18 M18 30 h12',
      ],
    },

    {
      title: 'Clear and Honest Treatment Recommendations',

      body:
        'Patients receive straightforward explanations about grinding, clenching, tooth wear, and whether a custom night guard is appropriate for their situation.',

      paths: [
        'M24 12 L24 30 M14 22 L34 22',
      ],
    },

    {
      title: 'Protection for Teeth and Dental Work',

      body:
        'Night guard planning considers natural teeth, crowns, veneers, fillings, bridges, implants, and other restorations that may be affected by grinding forces.',

      paths: [
        'M12 34 A10 10 0 1 1 36 34',
        'M18 18 h12 M24 14 v20',
      ],
    },

    {
      title: 'Comprehensive Dental Care in One Office',

      body:
        'Promenade Dental can connect night guard care with preventive, restorative, cosmetic, implant, and emergency dental services when additional treatment is needed.',

      paths: [
        'M12 14 h24 v20 h-24 z',
        'M18 20 h12 M24 14 v20',
      ],
    },

    {
      title: 'Convenient Chandler Location',

      body:
        'Located in Fulton Ranch, Promenade Dental serves patients from Chandler, Ocotillo, Sun Lakes, South Chandler, and surrounding communities.',

      paths: [
        'M18 14 a8 8 0 1 1 0.1 0 M18 22 v12 M12 34 h12',
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
testimonialsSection: {
  eyebrow: 'Patient Stories',

  heading: 'Trusted by Chandler Patients for Teeth Grinding Protection',

  testimonials: [
    {
      quote:
        'I had no idea I was grinding my teeth until Dr. Shriya pointed out the wear on my enamel. My custom night guard fits comfortably, and I no longer wake up with sore teeth and jaw tension.',
      name: 'David R.',
      context: 'Night Guard Patient',
    },

    {
      quote:
        'For years I dealt with morning headaches and thought they were stress-related. After getting a custom night guard, the headaches became much less frequent and my jaw feels far more relaxed.',
      name: 'Jennifer M.',
      context: 'Chandler Resident',
    },

    {
      quote:
        'I invested in cosmetic dental work and wanted to protect it. Dr. Shriya recommended a night guard because of my clenching habits, and the process was simple from start to finish.',
      name: 'Amanda T.',
      context: 'Cosmetic Dentistry Patient',
    },

    {
      quote:
        'The custom night guard is much more comfortable than the over-the-counter guard I tried before. It fits securely and is easy to wear every night.',
      name: 'Michael K.',
      context: 'Fulton Ranch Resident',
    },

    {
      quote:
        'I had started noticing small chips in my teeth and sensitivity when drinking cold beverages. The evaluation helped identify grinding as the cause, and the night guard has given me peace of mind.',
      name: 'Sarah W.',
      context: 'Preventive Care Patient',
    },

    {
      quote:
        'Dr. Shriya explained exactly how grinding was affecting my teeth and existing crowns. The night guard feels great, and I appreciate knowing I am protecting my dental work long-term.',
      name: 'Robert L.',
      context: 'Restorative Dentistry Patient',
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
},


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
symptomsSection: {
  eyebrow: 'Common Whitening Concerns',

  heading: 'Signs You May Benefit From Professional Teeth Whitening',

  body:
    'Many patients seek teeth whitening because their smile no longer looks as bright as it once did. Discoloration can develop gradually from food, beverages, aging, tobacco use, and everyday habits. A whitening consultation helps determine whether professional whitening is the right option for your goals.',

  symptoms: [
    {
      title: 'Yellow Teeth',

      body:
        'Natural aging, enamel changes, and lifestyle habits can make teeth appear more yellow over time.',
    },

    {
      title: 'Coffee or Tea Stains',

      body:
        'Dark beverages can leave stains on enamel that may make teeth appear darker or less vibrant.',
    },

    {
      title: 'Dull-Looking Smile',

      body:
        'Even healthy teeth can lose brightness and appear less youthful because of gradual discoloration.',
    },

    {
      title: 'Uneven Tooth Color',

      body:
        'Some teeth may appear darker or more stained than others, creating an inconsistent smile appearance.',
    },

    {
      title: 'Staining From Tobacco Use',

      body:
        'Smoking and tobacco products can contribute to stubborn tooth discoloration that often builds over time.',
    },

    {
      title: 'Special Event Preparation',

      body:
        'Many patients consider whitening before weddings, professional events, photos, vacations, or important celebrations.',
    },
  ],
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
    'Professional Teeth Whitening Planned Around Your Smile Goals',

  description:
    'Teeth whitening is not one-size-fits-all. Promenade Dental focuses on understanding your goals, evaluating your oral health, and recommending whitening options that support both appearance and long-term dental health.',

  items: [
    {
      title: 'Personalized Whitening Recommendations',

      body:
        'Dr. Shriya evaluates tooth color, enamel condition, sensitivity, existing dental work, and smile goals before recommending whitening treatment.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6',
      ],
    },

    {
      title: 'Realistic and Honest Expectations',

      body:
        'Patients receive clear guidance about what whitening can improve, potential limitations, and when other cosmetic treatments may be more appropriate.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M24 12 L24 30 M14 22 L34 22',
      ],
    },

    {
      title: 'Comfort-Focused Cosmetic Care',

      body:
        'Our team works to create a comfortable experience while helping patients understand sensitivity concerns, treatment options, and expected outcomes.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M24 12 q-8 8 -8 16 q0 10 8 16 q8-6 8-16 q0-8-8-16',
      ],
    },

    {
      title: 'ZOOM Whitening Available When Appropriate',

      body:
        'ZOOM whitening may be recommended for patients seeking a faster whitening option when their oral health and treatment goals make them suitable candidates.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 24 h20 M18 18 h12 M18 30 h12 M24 14 v20',
      ],
    },

    {
      title: 'Comprehensive Cosmetic Dentistry in One Office',

      body:
        'If whitening alone is not the best solution, Promenade Dental can discuss bonding, veneers, smile makeovers, and other cosmetic treatment options.',

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
        'M18 14 a8 8 0 1 1 0.1 0 M18 22 v12 M12 34 h12',
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
      title: 'Sleep Apnea Treatment',
      description:
        'Custom oral appliances can reposition your jaw to keep airways open, offering a comfortable alternative to CPAP for mild to moderate sleep apnea.',
      href: '/services/sleep-apnea-snoring-solutions',
    },
  ],
},
testimonialsSection: {
  eyebrow: 'Patient Stories',

  heading: 'Trusted by Chandler Patients for Professional Teeth Whitening',

  testimonials: [
    {
      quote:
        'My teeth had become noticeably yellow from years of coffee drinking. Dr. Shriya explained my options clearly and helped me achieve a brighter smile that still looks natural.',
      name: 'Amanda R.',
      context: 'Teeth Whitening Patient',
    },

    {
      quote:
        'I wanted whitening before my wedding and appreciated how honest the consultation was. The results looked great in photos and exceeded my expectations.',
      name: 'Sarah K.',
      context: 'Bride-to-Be',
    },

    {
      quote:
        'The whitening process was much more comfortable than I expected. The team explained everything clearly and helped me understand what results were realistic.',
      name: 'Michael T.',
      context: 'Chandler Resident',
    },

    {
      quote:
        'I had tried store-bought whitening products before without much success. Professional whitening made a noticeable difference and gave me more confidence in my smile.',
      name: 'Jennifer L.',
      context: 'Cosmetic Dentistry Patient',
    },

    {
      quote:
        'I appreciated that Dr. Shriya evaluated my existing dental work before recommending whitening. It felt personalized rather than a one-size-fits-all treatment.',
      name: 'Robert P.',
      context: 'Fulton Ranch Resident',
    },

    {
      quote:
        'The whitening consultation helped me understand why some stains would improve and what other cosmetic options existed. I felt informed and never pressured.',
      name: 'David M.',
      context: 'New Patient',
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
symptomsSection: {
  eyebrow: 'Common Veneer Concerns',

  heading: 'Smile Concerns That May Lead Patients to Consider Veneers',

  body:
    'Many patients explore porcelain veneers because they are unhappy with the appearance of one or more visible teeth. Veneers may be considered when concerns involve tooth color, shape, size, spacing, symmetry, or a combination of cosmetic issues that cannot be fully addressed with whitening alone.',

  symptoms: [
    {
      title: 'Permanently Stained Teeth',

      body:
        'Some discoloration does not respond predictably to whitening and may continue to affect the appearance of the smile.',
    },

    {
      title: 'Chipped or Worn Front Teeth',

      body:
        'Small chips, worn edges, and uneven tooth surfaces can make the smile look older or less balanced.',
    },

    {
      title: 'Small or Short Teeth',

      body:
        'Teeth that appear undersized or disproportionate compared to surrounding teeth may affect smile symmetry.',
    },

    {
      title: 'Minor Gaps Between Teeth',

      body:
        'Small spaces between visible teeth can sometimes be improved through veneer treatment planning.',
    },

    {
      title: 'Uneven Tooth Shape',

      body:
        'Teeth that appear irregular, asymmetrical, or mismatched may affect overall smile harmony.',
    },

    {
      title: 'Multiple Cosmetic Concerns at Once',

      body:
        'Patients often seek veneers when they want to improve color, shape, size, and spacing together rather than addressing each issue separately.',
    },
  ],
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
    'Personalized Veneer Planning for Natural-Looking Smile Transformations',

  description:
    'Porcelain veneers are a significant cosmetic investment. Promenade Dental focuses on understanding your goals, providing honest guidance, and creating treatment plans designed to support both smile aesthetics and long-term oral health.',

  items: [
    {
      title: 'Personalized Smile Design Consultation',

      body:
        'Dr. Shriya evaluates your teeth, gums, bite, facial aesthetics, and cosmetic goals before recommending veneers or alternative treatment options.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6',
      ],
    },

    {
      title: 'Honest and Conservative Recommendations',

      body:
        'Not every cosmetic concern requires veneers. Patients receive clear guidance about whether veneers, whitening, bonding, crowns, or another option may be the most appropriate choice.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M24 12 L24 30 M14 22 L34 22',
      ],
    },

    {
      title: 'Natural-Looking Cosmetic Results',

      body:
        'Veneer planning considers tooth color, shape, proportions, smile balance, and facial features to create results that look attractive without appearing artificial.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 24 h20 M18 18 h12 M18 30 h12 M24 14 v20',
      ],
    },

    {
      title: 'Comfort-Focused Cosmetic Care',

      body:
        'Our team works to create a welcoming environment where patients feel informed, respected, and confident throughout the veneer process.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M24 12 q-8 8 -8 16 q0 10 8 16 q8-6 8-16 q0-8-8-16',
      ],
    },

    {
      title: 'Comprehensive Cosmetic and Restorative Care',

      body:
        'Promenade Dental provides cosmetic, restorative, preventive, implant, and family dental care, allowing veneer treatment to fit into your overall oral health plan.',

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
        'M18 14 a8 8 0 1 1 0.1 0 M18 22 v12 M12 34 h12',
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
      title: 'Sleep Apnea Treatment',
      description:
        'Custom oral appliances can reposition your jaw to keep airways open, offering a comfortable alternative to CPAP for mild to moderate sleep apnea.',
      href: '/services/sleep-apnea-snoring-solutions',
    },
  ],
},
testimonialsSection: {
  eyebrow: 'Patient Stories',

  heading: 'Trusted by Chandler Patients for Porcelain Veneers',

  testimonials: [
    {
      quote:
        'I always felt self-conscious about my chipped front teeth and uneven smile. Dr. Shriya explained every option and helped me choose veneers that look completely natural.',
      name: 'Amanda R.',
      context: 'Porcelain Veneers Patient',
    },

    {
      quote:
        'My teeth were healthy, but years of staining and wear made me unhappy with my smile. Veneers helped me achieve the balanced, confident look I wanted without looking artificial.',
      name: 'Michael T.',
      context: 'Cosmetic Dentistry Patient',
    },

    {
      quote:
        'The consultation process was extremely thorough. I appreciated how much attention was given to tooth shape, color, and overall smile design before treatment.',
      name: 'Jennifer K.',
      context: 'Chandler Resident',
    },

    {
      quote:
        'I was worried veneers would look too white or unnatural. The final result looks like a better version of my own smile, which is exactly what I hoped for.',
      name: 'Sarah M.',
      context: 'Veneers Patient',
    },

    {
      quote:
        'My front teeth had small gaps and uneven edges that always bothered me in photos. Veneers made a huge difference in my confidence and appearance.',
      name: 'David P.',
      context: 'Smile Enhancement Patient',
    },

    {
      quote:
        'Dr. Shriya took the time to explain whether veneers were truly the right option for me. I never felt pressured, and the final result exceeded my expectations.',
      name: 'Robert L.',
      context: 'Fulton Ranch Resident',
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
symptomsSection: {
  eyebrow: 'Common Filling Concerns',

  heading:
    'Signs That May Indicate You Need a Tooth-Colored Filling',

  body:
    'Many cavities develop without causing pain in the early stages. As decay progresses, the tooth may become sensitive, develop visible damage, or feel uncomfortable while eating. Tooth-colored fillings are commonly recommended when decay or minor tooth damage can be repaired before more extensive treatment becomes necessary.',

  symptoms: [
    {
      title: 'Sensitivity to Cold or Sweets',

      body:
        'A cavity may cause discomfort when eating cold foods, drinking cold beverages, or consuming sugary foods.',
    },

    {
      title: 'Pain While Chewing',

      body:
        'Discomfort when biting or chewing may indicate that decay has weakened part of the tooth.',
    },

    {
      title: 'Visible Dark Spots or Small Holes',

      body:
        'Brown, black, or white spots and small pits in the tooth can be early signs of dental decay.',
    },

    {
      title: 'Food Frequently Gets Stuck',

      body:
        'Food repeatedly catching in the same area may indicate a cavity or damaged tooth surface that requires evaluation.',
    },

    {
      title: 'Old Filling That Feels Loose or Damaged',

      body:
        'Existing fillings can wear down, crack, or separate from the tooth over time, allowing new decay to develop underneath.',
    },

    {
      title: 'Minor Chips or Small Areas of Tooth Damage',

      body:
        'Small fractures or localized tooth damage may sometimes be restored with tooth-colored filling material when enough healthy tooth structure remains.',
    },
  ],
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
    'Personalized Cavity Treatment Focused on Long-Term Tooth Health',

  description:
    'Treating a cavity is about more than placing a filling. Promenade Dental focuses on understanding the condition of the tooth, explaining treatment options clearly, and helping patients make informed decisions that support long-term oral health.',

  items: [
    {
      title: 'Comprehensive Evaluation by Dr. Shriya',

      body:
        'Dr. Shriya evaluates the tooth, symptoms, bite, existing dental work, and X-rays when needed before recommending treatment.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6',
      ],
    },

    {
      title: 'Conservative and Honest Recommendations',

      body:
        'Whenever possible, treatment focuses on preserving healthy tooth structure and addressing problems before they become more complex.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M24 12 L24 30 M14 22 L34 22',
      ],
    },

    {
      title: 'Natural-Looking Tooth-Colored Fillings',

      body:
        'Composite filling materials are selected to blend naturally with your smile while restoring strength and function to the tooth.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 24 h20 M18 18 h12 M18 30 h12 M24 14 v20',
      ],
    },

    {
      title: 'Comfort-Focused Patient Care',

      body:
        'Our team works to create a welcoming environment where patients feel informed, respected, and comfortable throughout treatment.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M24 12 q-8 8 -8 16 q0 10 8 16 q8-6 8-16 q0-8-8-16',
      ],
    },

    {
      title: 'Comprehensive Dental Care in One Office',

      body:
        'Promenade Dental can connect filling treatment with preventive care, crowns, inlays, onlays, root canal therapy, and other restorative services when needed.',

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
        'M18 14 a8 8 0 1 1 0.1 0 M18 22 v12 M12 34 h12',
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
testimonialsSection: {
  eyebrow: 'Patient Stories',

  heading:
    'Trusted by Chandler Patients for Tooth-Colored Fillings',

  testimonials: [
    {
      quote:
        'I expected to need a much larger procedure, but Dr. Shriya found the cavity early and repaired it with a filling that blends perfectly with my tooth.',
      name: 'Emily R.',
      context: 'Tooth-Colored Filling Patient',
    },

    {
      quote:
        'My tooth was sensitive whenever I drank something cold. After the filling, the sensitivity disappeared and the tooth looks completely natural.',
      name: 'Daniel M.',
      context: 'Restorative Dentistry Patient',
    },

    {
      quote:
        'The entire appointment was comfortable, and I appreciate how clearly every step of the treatment was explained before we started.',
      name: 'Jennifer S.',
      context: 'Chandler Resident',
    },

    {
      quote:
        'One of my old fillings had started to crack. It was replaced with a tooth-colored filling that feels much smoother and looks like my natural tooth.',
      name: 'Michael T.',
      context: 'Replacement Filling Patient',
    },

    {
      quote:
        'I was worried people would notice the filling because it was on a front tooth. You honestly cannot tell which tooth was treated.',
      name: 'Sarah L.',
      context: 'Composite Filling Patient',
    },

    {
      quote:
        'Everyone at Promenade Dental made the experience easy. They caught my cavity before it became a bigger problem, and the repair was quick and comfortable.',
      name: 'Robert K.',
      context: 'Fulton Ranch Resident',
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
symptomsSection: {
  eyebrow: 'Common Crown Concerns',

  heading:
    'Signs That a Damaged or Weakened Tooth May Need a Dental Crown',

  body:
    'Not every damaged tooth requires a dental crown, but certain symptoms can indicate that a tooth no longer has enough strength for a filling alone. Crowns are commonly recommended when a tooth has become weakened by decay, fractures, large fillings, root canal treatment, or years of chewing pressure.',

  symptoms: [
    {
      title: 'Cracked or Fractured Tooth',

      body:
        'Visible cracks or fractures can weaken the tooth and increase the risk of further damage during normal chewing.',
    },

    {
      title: 'Pain When Biting or Chewing',

      body:
        'Discomfort while biting down may indicate a cracked tooth, weakened tooth structure, or a restoration that no longer provides adequate support.',
    },

    {
      title: 'Large or Failing Filling',

      body:
        'A tooth with a large filling may lose strength over time and eventually require the additional protection of a dental crown.',
    },

    {
      title: 'Tooth After Root Canal Treatment',

      body:
        'Root canal-treated teeth, particularly back teeth, may become more susceptible to fracture and often require full-coverage protection.',
    },

    {
      title: 'Broken or Worn Tooth',

      body:
        'A tooth that has lost significant structure from wear, fractures, or previous dental treatment may benefit from a crown to restore strength and function.',
    },

    {
      title: 'Loose or Damaged Existing Crown',

      body:
        'An older crown that feels loose, chipped, or damaged should be evaluated to protect the tooth underneath from decay or further injury.',
    },
  ],
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
    'Personalized Crown Treatment Focused on Strength, Comfort, and Long-Term Oral Health',

  description:
    'A dental crown is often recommended when a tooth needs more protection than a filling can provide. Promenade Dental focuses on careful diagnosis, honest treatment recommendations, and restorative care designed to support both function and appearance.',

  items: [
    {
      title: 'Comprehensive Evaluation by Dr. Shriya',

      body:
        'Dr. Shriya evaluates the tooth, symptoms, existing restorations, bite, gum health, and X-rays when needed before recommending treatment.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6',
      ],
    },

    {
      title: 'Conservative and Honest Recommendations',

      body:
        'Patients receive clear guidance on whether a crown is appropriate or if another treatment option may better support the tooth and long-term oral health.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M24 12 L24 30 M14 22 L34 22',
      ],
    },

    {
      title: 'Function and Appearance Planned Together',

      body:
        'Crown treatment considers chewing comfort, bite balance, tooth shape, and smile appearance to create a restoration that feels and looks natural.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M12 22 q12 -10 24 0 M18 28 h12 M24 16 v20',
      ],
    },

    {
      title: 'Comfort-Focused Patient Experience',

      body:
        'Our team works to provide a welcoming environment where patients feel informed, comfortable, and confident throughout the treatment process.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M24 12 q-8 8 -8 16 q0 10 8 16 q8-6 8-16 q0-8-8-16',
      ],
    },

    {
      title: 'Comprehensive Dental Care in One Office',

      body:
        'Promenade Dental can connect crown treatment with preventive care, fillings, root canals, implants, bridges, and other restorative services when needed.',

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
        'M18 14 a8 8 0 1 1 0.1 0 M18 22 v12 M12 34 h12',
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
testimonialsSection: {
  eyebrow: 'Patient Stories',

  heading:
    'Trusted by Chandler Patients for Dental Crown Treatment',

  testimonials: [
    {
      quote:
        'I cracked one of my back teeth while eating and thought it would need to be removed. Dr. Shriya explained everything clearly, and my crown feels just like my natural tooth.',
      name: 'Mark R.',
      context: 'Dental Crown Patient',
    },

    {
      quote:
        'After my root canal, I was nervous about restoring the tooth. The crown fits comfortably, and I can chew normally again without worrying about it.',
      name: 'Lisa T.',
      context: 'Root Canal & Crown Patient',
    },

    {
      quote:
        'My old crown had become loose after many years. The replacement looks better, feels stronger, and the entire process was much easier than I expected.',
      name: 'Jennifer H.',
      context: 'Crown Replacement Patient',
    },

    {
      quote:
        'I appreciated that Dr. Shriya first explained why a filling would not be enough before recommending a crown. I felt confident making the right decision for my tooth.',
      name: 'David M.',
      context: 'Restorative Dentistry Patient',
    },

    {
      quote:
        'The damaged tooth had been bothering me every time I chewed. Since getting the crown, I can eat comfortably again and the tooth looks completely natural.',
      name: 'Sarah K.',
      context: 'Dental Crown Patient',
    },

    {
      quote:
        'From the consultation to the final crown placement, everyone at Promenade Dental made the experience comfortable and professional. The crown blends perfectly with my smile.',
      name: 'Robert L.',
      context: 'Fulton Ranch Resident',
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
symptomsSection: {
  eyebrow: 'Common Missing Tooth Concerns',

  heading:
    'Signs That Missing Teeth May Need a Dental Bridge Evaluation',

  body:
    'Losing one or more teeth can affect everyday activities like chewing, speaking, and smiling. Over time, the empty space may also allow nearby teeth to shift and change how your bite functions. A dental bridge may be considered when a fixed tooth replacement can help restore function, appearance, and support for the surrounding teeth.',

  symptoms: [
    {
      title: 'One or More Missing Teeth',

      body:
        'A visible gap left by a missing tooth can affect both smile appearance and the ability to chew comfortably.',
    },

    {
      title: 'Difficulty Chewing Certain Foods',

      body:
        'Missing teeth may reduce biting strength and make it harder to chew evenly on both sides of the mouth.',
    },

    {
      title: 'Teeth Beginning to Shift',

      body:
        'Nearby teeth can gradually move toward an empty space, which may affect alignment and bite over time.',
    },

    {
      title: 'Changes in the Way Your Bite Feels',

      body:
        'The loss of a tooth may change how your upper and lower teeth come together when biting or chewing.',
    },

    {
      title: 'Concern About Smile Appearance',

      body:
        'Many patients seek treatment because a missing tooth affects their confidence while smiling, talking, or laughing.',
    },

    {
      title: 'Wanting a Fixed Alternative to a Removable Denture',

      body:
        'Some patients prefer a replacement option that remains securely in place rather than a removable appliance.',
    },
  ],
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
    'Personalized Missing Tooth Solutions Focused on Comfort, Function, and Long-Term Oral Health',

  description:
    'Replacing a missing tooth is an important decision that can affect chewing, appearance, and long-term oral health. Promenade Dental focuses on understanding your needs, explaining options clearly, and helping you choose the treatment that best fits your goals.',

  items: [
    {
      title: 'Comprehensive Evaluation by Dr. Shriya',

      body:
        'Dr. Shriya evaluates the missing tooth area, neighboring teeth, gums, bite, bone support, and X-rays when needed before recommending treatment.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6',
      ],
    },

    {
      title: 'Clear Guidance on Replacement Options',

      body:
        'Patients receive straightforward explanations about dental bridges, implants, implant-supported restorations, and partial dentures so they can make informed decisions.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 24 h20 M18 18 h12 M18 30 h12 M24 14 v20',
      ],
    },

    {
      title: 'Honest and Personalized Treatment Planning',

      body:
        'Treatment recommendations are based on your oral health, goals, budget considerations, and long-term dental needs rather than a one-size-fits-all approach.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M24 12 L24 30 M14 22 L34 22',
      ],
    },

    {
      title: 'Comfort-Focused Patient Experience',

      body:
        'Our team works to create a welcoming environment where patients feel informed, comfortable, and confident throughout treatment.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M24 12 q-8 8 -8 16 q0 10 8 16 q8-6 8-16 q0-8-8-16',
      ],
    },

    {
      title: 'Comprehensive Restorative Care in One Office',

      body:
        'Promenade Dental can connect bridge treatment with crowns, implants, dentures, preventive care, and other restorative services when needed.',

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
        'M18 14 a8 8 0 1 1 0.1 0 M18 22 v12 M12 34 h12',
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
testimonialsSection: {
  eyebrow: 'Patient Stories',

  heading:
    'Trusted by Chandler Patients for Dental Bridge Treatment',

  testimonials: [
    {
      quote:
        'After losing one of my back teeth, chewing became uncomfortable. My bridge feels secure, and I can finally eat normally again.',
      name: 'Michael R.',
      context: 'Dental Bridge Patient',
    },

    {
      quote:
        'I was embarrassed by the gap in my smile after losing a front tooth. My bridge looks so natural that most people cannot tell it is a replacement.',
      name: 'Amanda T.',
      context: 'Missing Tooth Replacement Patient',
    },

    {
      quote:
        'Dr. Shriya carefully explained the differences between a bridge, implant, and partial denture before helping me choose the option that fit my needs.',
      name: 'David L.',
      context: 'Restorative Dentistry Patient',
    },

    {
      quote:
        'The entire process was much smoother than I expected. My bridge feels comfortable, and my bite feels balanced again.',
      name: 'Jennifer K.',
      context: 'Dental Bridge Patient',
    },

    {
      quote:
        'I appreciated how much attention was given to making the bridge match my natural teeth. The result blends beautifully with my smile.',
      name: 'Sarah M.',
      context: 'Smile Restoration Patient',
    },

    {
      quote:
        'Everyone at Promenade Dental made me feel comfortable throughout treatment. Replacing my missing tooth has made eating and smiling much easier.',
      name: 'Robert H.',
      context: 'Fulton Ranch Resident',
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
symptomsSection: {
  eyebrow: 'Common Root Canal Concerns',

  heading:
    'Signs That a Tooth May Need a Root Canal Evaluation',

  body:
    'Not every toothache requires root canal therapy, but certain symptoms may indicate that the inner pulp of the tooth has become inflamed or infected. A dental evaluation helps determine whether the tooth can be treated with a filling, requires root canal therapy, or needs another form of restorative care.',

  symptoms: [
    {
      title: 'Severe or Persistent Tooth Pain',

      body:
        'Continuous tooth pain or pain that does not improve may indicate inflammation or infection inside the tooth.',
    },

    {
      title: 'Lingering Sensitivity to Hot or Cold',

      body:
        'Sensitivity that continues long after eating or drinking something hot or cold may be a sign that the tooth nerve has been affected.',
    },

    {
      title: 'Pain When Biting or Chewing',

      body:
        'Discomfort while chewing or biting down can occur when infection or inflammation affects the inner portion of the tooth.',
    },

    {
      title: 'Swollen or Tender Gums',

      body:
        'Swelling, tenderness, or a small pimple-like bump on the gums near a tooth may indicate a dental infection that requires prompt evaluation.',
    },

    {
      title: 'Deep Cavity or Tooth Damage',

      body:
        'Untreated decay, a large crack, or previous dental trauma can allow bacteria to reach the pulp inside the tooth.',
    },

    {
      title: 'Tooth That Has Darkened in Color',

      body:
        'A tooth that becomes noticeably darker than the surrounding teeth may indicate changes inside the tooth that should be examined by a dentist.',
    },
  ],
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
    'Compassionate Root Canal Care Focused on Relief and Tooth Preservation',

  description:
    'Needing a root canal can feel overwhelming, especially when you are already dealing with pain or infection. Promenade Dental focuses on clear diagnosis, honest recommendations, and treatment designed to relieve discomfort while protecting long-term oral health whenever possible.',

  items: [
    {
      title: 'Comprehensive Evaluation by Dr. Shriya',

      body:
        'Dr. Shriya evaluates symptoms, tooth structure, X-rays, gum health, and bite conditions before recommending root canal therapy or alternative treatment options.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6',
      ],
    },

    {
      title: 'Tooth Preservation Whenever Possible',

      body:
        'When a tooth can be predictably restored, treatment focuses on saving the natural tooth and helping patients avoid unnecessary extraction.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M20 18 q4 -6 8 0 q4 6 0 12 q-4 6 -8 0 q-4 -6 0 -12',
      ],
    },

    {
      title: 'Comfort-Focused Patient Care',

      body:
        'Our team understands that many patients feel anxious about root canal treatment and works to provide a calm, supportive, and comfortable experience.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M24 12 q-8 8 -8 16 q0 10 8 16 q8-6 8-16 q0-8-8-16',
      ],
    },

    {
      title: 'Honest and Conservative Recommendations',

      body:
        'Patients receive clear explanations about the condition of the tooth, expected outcomes, and whether root canal therapy is the most appropriate option.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M24 12 L24 30 M14 22 L34 22',
      ],
    },

    {
      title: 'Restoration Planning After Treatment',

      body:
        'Promenade Dental helps patients understand whether a filling, crown, or additional restorative treatment may be recommended after root canal therapy.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M16 16 h16 v8 h-16 z M18 24 h12 v10 h-12 z',
      ],
    },

    {
      title: 'Emergency and Restorative Care in One Office',

      body:
        'Promenade Dental can connect root canal therapy with emergency dental care, crowns, fillings, tooth replacement options, and ongoing preventive care when needed.',

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
testimonialsSection: {
  eyebrow: 'Patient Stories',

  heading:
    'Trusted by Chandler Patients for Root Canal Therapy',

  testimonials: [
    {
      quote:
        'I had been dealing with constant tooth pain for days. After my root canal, the pain was gone, and I was able to keep my natural tooth.',
      name: 'Jennifer R.',
      context: 'Root Canal Therapy Patient',
    },

    {
      quote:
        'Dr. Shriya explained every step of the treatment before we started. The procedure was much more comfortable than I expected.',
      name: 'Michael T.',
      context: 'Restorative Dentistry Patient',
    },

    {
      quote:
        'I thought my tooth would have to be removed, but the root canal saved it. After the final crown was placed, it feels completely normal again.',
      name: 'David K.',
      context: 'Root Canal & Crown Patient',
    },

    {
      quote:
        'Everyone at Promenade Dental was caring and professional. They helped me understand the cause of my tooth infection and treated it quickly.',
      name: 'Amanda S.',
      context: 'Tooth Infection Patient',
    },

    {
      quote:
        'The lingering sensitivity I had for months disappeared after treatment. I can finally eat and drink comfortably again.',
      name: 'Robert M.',
      context: 'Endodontic Treatment Patient',
    },

    {
      quote:
        'From the initial evaluation to the final restoration, the entire experience was smooth. I appreciated how focused the team was on saving my tooth whenever possible.',
      name: 'Lisa H.',
      context: 'Fulton Ranch Resident',
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
symptomsSection: {
  eyebrow: 'Common Extraction Concerns',

  heading:
    'Signs That a Tooth May Need an Extraction Evaluation',

  body:
    'The goal is always to preserve a natural tooth whenever possible. However, some symptoms may indicate that a tooth is too damaged, infected, or unstable to be restored predictably. A dental evaluation helps determine whether the tooth can be treated with a filling, crown, or root canal, or whether extraction is the healthier long-term option.',

  symptoms: [
    {
      title: 'Severe Tooth Pain That Does Not Improve',

      body:
        'Persistent pain may indicate extensive decay, infection, or structural damage that requires prompt dental evaluation.',
    },

    {
      title: 'Broken or Severely Cracked Tooth',

      body:
        'A tooth with extensive fractures or damage below the gum line may not have enough healthy structure to support restoration.',
    },

    {
      title: 'Swelling or Signs of Tooth Infection',

      body:
        'Swollen gums, facial swelling, drainage, or a dental abscess may indicate an infection that requires immediate assessment.',
    },

    {
      title: 'Loose Tooth',

      body:
        'A tooth that feels loose because of advanced gum disease, bone loss, or trauma should be evaluated to determine whether it can be saved.',
    },

    {
      title: 'Large Areas of Tooth Decay',

      body:
        'Extensive decay that destroys most of the tooth may leave too little healthy structure for a predictable restoration.',
    },

    {
      title: 'Repeated Problems With the Same Tooth',

      body:
        'A tooth that continues to develop infection, fractures, or restoration failure may require evaluation to determine the most appropriate long-term treatment.',
    },
  ],
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
    'Compassionate Tooth Extraction Care Focused on Comfort and Long-Term Oral Health',

  description:
    'Needing a tooth removed can feel stressful, especially when you are dealing with pain, infection, or uncertainty about your options. Promenade Dental focuses on clear diagnosis, conservative treatment recommendations, and comfortable care designed around your long-term oral health goals.',

  items: [
    {
      title: 'Comprehensive Evaluation by Dr. Shriya',

      body:
        'Dr. Shriya evaluates the tooth, symptoms, X-rays, gum health, bone support, and restoration options before recommending extraction.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6',
      ],
    },

    {
      title: 'Conservative and Honest Recommendations',

      body:
        'Whenever possible, fillings, crowns, root canal therapy, or other restorative treatments are considered before tooth removal is recommended.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 24 h20 M18 18 h12 M18 30 h12 M24 14 v20',
      ],
    },

    {
      title: 'Comfort-Focused Patient Care',

      body:
        'Our team works to create a calm and supportive environment while helping patients feel informed and comfortable throughout treatment.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M24 12 q-8 8 -8 16 q0 10 8 16 q8-6 8-16 q0-8-8-16',
      ],
    },

    {
      title: 'Clear Planning After Extraction',

      body:
        'Patients receive guidance about healing, recovery expectations, and replacement options when restoring the missing tooth may be beneficial.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M12 22 q12 -10 24 0 M18 28 h12 M24 16 v20',
      ],
    },

    {
      title: 'Tooth Replacement Options Explained Clearly',

      body:
        'Dental implants, bridges, partial dentures, and other replacement options can be discussed based on your oral health needs and goals.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 24 h20 M18 18 h12 M18 30 h12 M24 14 v20',
      ],
    },

    {
      title: 'Emergency and Restorative Care in One Office',

      body:
        'Promenade Dental can connect extractions with emergency treatment, implants, dentures, restorative dentistry, and ongoing preventive care when needed.',

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
testimonialsSection: {
  eyebrow: 'Patient Stories',

  heading:
    'Trusted by Chandler Patients for Tooth Extraction Care',

  testimonials: [
    {
      quote:
        'I was nervous about having my tooth removed, but Dr. Shriya explained everything clearly and made the procedure much easier than I expected.',
      name: 'Jessica R.',
      context: 'Tooth Extraction Patient',
    },

    {
      quote:
        'I had been dealing with constant pain for weeks. After the extraction, I finally felt relief and appreciated that replacement options were explained before treatment.',
      name: 'Michael T.',
      context: 'Restorative Dentistry Patient',
    },

    {
      quote:
        'The team first checked whether my tooth could be saved before recommending extraction. I appreciated their honest and conservative approach.',
      name: 'David H.',
      context: 'Extraction Evaluation Patient',
    },

    {
      quote:
        'Everyone made me feel comfortable from start to finish. The healing instructions were easy to follow, and my recovery went smoothly.',
      name: 'Amanda K.',
      context: 'Tooth Removal Patient',
    },

    {
      quote:
        'After my extraction, we discussed replacing the tooth with an implant. I liked having a clear long-term treatment plan instead of just removing the tooth.',
      name: 'Robert M.',
      context: 'Tooth Replacement Patient',
    },

    {
      quote:
        'The staff was professional and caring throughout the entire visit. I felt informed about every step, from the evaluation through the healing process.',
      name: 'Lisa S.',
      context: 'Fulton Ranch Resident',
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
symptomsSection: {
  eyebrow: 'Common Denture Concerns',

  heading:
    'Signs You May Benefit From a Denture or Partial Denture Evaluation',

  body:
    'Missing multiple teeth can affect more than your smile. Difficulty chewing, changes in speech, shifting teeth, and loss of facial support may all indicate that it is time to discuss tooth replacement options. A denture evaluation helps determine whether full dentures, partial dentures, implant-supported dentures, or another restorative solution is the most appropriate choice.',

  symptoms: [
    {
      title: 'Multiple Missing Teeth',

      body:
        'Replacing several missing teeth may help restore chewing function, smile appearance, and overall oral function.',
    },

    {
      title: 'Difficulty Chewing Food',

      body:
        'Missing teeth can make it harder to chew comfortably and may limit the foods you enjoy eating.',
    },

    {
      title: 'Visible Gaps in Your Smile',

      body:
        'Several missing teeth can affect confidence while smiling or speaking and may change facial appearance over time.',
    },

    {
      title: 'Loose or Shifting Remaining Teeth',

      body:
        'When teeth are missing, the remaining teeth may gradually shift, affecting bite alignment and long-term stability.',
    },

    {
      title: 'Changes in Speech',

      body:
        'Missing teeth can make certain words more difficult to pronounce and may affect everyday communication.',
    },

    {
      title: 'Current Dentures No Longer Fit Comfortably',

      body:
        'Loose dentures, sore spots, or changes in fit may indicate that an adjustment, reline, replacement, or alternative treatment should be considered.',
    },
  ],
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
    'Personalized Denture Solutions Focused on Comfort, Function, and Confidence',

  description:
    'Replacing multiple missing teeth can affect eating, speaking, appearance, and everyday comfort. Promenade Dental focuses on understanding your goals, explaining treatment options clearly, and helping you choose the solution that best supports your long-term oral health and quality of life.',

  items: [
    {
      title: 'Comprehensive Evaluation by Dr. Shriya',

      body:
        'Dr. Shriya evaluates missing teeth, remaining teeth, gum health, bite, jaw support, and X-rays when needed before recommending treatment.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6',
      ],
    },

    {
      title: 'Clear Guidance on Tooth Replacement Options',

      body:
        'Patients receive straightforward explanations about full dentures, partial dentures, bridges, implants, and implant-supported dentures so they can make informed decisions.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 24 h20 M18 18 h12 M18 30 h12 M24 14 v20',
      ],
    },

    {
      title: 'Comfort and Function Planned Together',

      body:
        'Denture treatment is designed around chewing ability, speech, appliance stability, smile appearance, and overall day-to-day comfort.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M12 22 q12 -10 24 0 M18 28 h12 M24 16 v20',
      ],
    },

    {
      title: 'Honest and Personalized Recommendations',

      body:
        'Treatment recommendations are based on your oral health, goals, lifestyle, and long-term needs rather than a one-size-fits-all approach.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M24 12 L24 30 M14 22 L34 22',
      ],
    },

    {
      title: 'Comfort-Focused Patient Experience',

      body:
        'Our team works to provide a welcoming environment where patients feel respected, informed, and supported throughout treatment.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M24 12 q-8 8 -8 16 q0 10 8 16 q8-6 8-16 q0-8-8-16',
      ],
    },

    {
      title: 'Comprehensive Restorative Care in One Office',

      body:
        'Promenade Dental can connect denture treatment with extractions, implants, bridges, crowns, preventive care, and long-term oral health maintenance when needed.',

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
testimonialsSection: {
  eyebrow: 'Patient Stories',

  heading:
    'Trusted by Chandler Patients for Dentures and Tooth Replacement',

  testimonials: [
    {
      quote:
        'After losing several teeth, I struggled to eat comfortably. My new partial denture fits well and has made everyday meals much easier.',
      name: 'Susan R.',
      context: 'Partial Denture Patient',
    },

    {
      quote:
        'Dr. Shriya explained every replacement option before recommending dentures. I appreciated having all of my choices clearly explained.',
      name: 'Michael T.',
      context: 'Restorative Dentistry Patient',
    },

    {
      quote:
        'My dentures look natural, and I feel much more confident smiling again. The entire process was comfortable from start to finish.',
      name: 'Linda H.',
      context: 'Full Denture Patient',
    },

    {
      quote:
        'The adjustments after my dentures were delivered made a big difference. The team was patient and made sure everything fit comfortably.',
      name: 'Robert K.',
      context: 'Denture Adjustment Patient',
    },

    {
      quote:
        'I wasn’t sure whether I needed dentures or implants. The consultation helped me understand which option fit my needs and budget.',
      name: 'Jennifer M.',
      context: 'Tooth Replacement Consultation',
    },

    {
      quote:
        'Everyone at Promenade Dental was friendly and professional. They focused on finding the right long-term solution instead of rushing treatment.',
      name: 'David S.',
      context: 'Fulton Ranch Resident',
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
symptomsSection: {
  eyebrow: 'Common Tooth Restoration Concerns',

  heading:
    'Signs You May Benefit From an Inlay or Onlay Evaluation',

  body:
    'Some teeth need more support than a standard filling can provide, but may not require a full dental crown. Larger cavities, worn fillings, moderate tooth damage, and discomfort when chewing may all indicate that a tooth should be evaluated. An examination helps determine whether an inlay, onlay, filling, crown, or another restorative treatment is the most appropriate option.',

  symptoms: [
    {
      title: 'Large Cavities',

      body:
        'A cavity that removes a significant amount of tooth structure may require more support than a traditional filling.',
    },

    {
      title: 'Old or Failing Fillings',

      body:
        'Large fillings that become worn, cracked, or leaking may leave the remaining tooth weaker over time.',
    },

    {
      title: 'Moderate Tooth Damage',

      body:
        'A tooth with moderate damage may benefit from a restoration that strengthens the remaining tooth without requiring full crown coverage.',
    },

    {
      title: 'Pain When Chewing',

      body:
        'Discomfort while biting or chewing may indicate damage, decay, or a weakened tooth that should be evaluated.',
    },

    {
      title: 'Small Tooth Cracks or Worn Cusps',

      body:
        'Minor fractures or weakened chewing surfaces may increase the risk of additional tooth damage if left untreated.',
    },

    {
      title: 'A Filling No Longer Feels Secure',

      body:
        'Changes in how a filling feels, sensitivity around the tooth, or visible wear may indicate that a different restoration should be considered.',
    },
  ],
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
    'Conservative Restorative Care Focused on Preserving Natural Tooth Structure',

  description:
    'Inlays and onlays are often chosen when a tooth needs more support than a filling but may not require a full crown. Promenade Dental focuses on careful diagnosis, conservative treatment planning, and restorative solutions that support long-term oral health.',

  items: [
    {
      title: 'Comprehensive Evaluation by Dr. Shriya',

      body:
        'Dr. Shriya evaluates decay, cracks, existing restorations, bite pressure, symptoms, and X-rays when needed before recommending treatment.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6',
      ],
    },

    {
      title: 'Conservative and Honest Recommendations',

      body:
        'When appropriate, treatment focuses on preserving healthy tooth structure and avoiding more extensive treatment than necessary.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 24 h20 M18 18 h12 M18 30 h12 M24 14 v20',
      ],
    },

    {
      title: 'Function and Comfort Planned Together',

      body:
        'Treatment planning considers chewing comfort, bite balance, tooth strength, and long-term stability to help restorations feel natural and function properly.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M12 22 q12 -10 24 0 M18 28 h12 M24 16 v20',
      ],
    },

    {
      title: 'Clear Explanations and Treatment Options',

      body:
        'Patients receive straightforward guidance about whether a filling, inlay, onlay, crown, root canal, or another treatment may be the most appropriate choice.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M24 12 L24 30 M14 22 L34 22',
      ],
    },

    {
      title: 'Comfort-Focused Patient Experience',

      body:
        'Our team works to provide a welcoming environment where patients feel informed, respected, and comfortable throughout treatment.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M24 12 q-8 8 -8 16 q0 10 8 16 q8-6 8-16 q0-8-8-16',
      ],
    },

    {
      title: 'Comprehensive Restorative Care in One Office',

      body:
        'Promenade Dental can connect inlay and onlay treatment with fillings, crowns, root canals, preventive care, and other restorative services when needed.',

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
testimonialsSection: {
  eyebrow: 'Patient Stories',

  heading:
    'Trusted by Chandler Patients for Conservative Tooth Restoration',

  testimonials: [
    {
      quote:
        'I was relieved to learn I did not need a crown. My inlay feels completely natural, and the tooth is comfortable again.',
      name: 'Karen L.',
      context: 'Inlay Patient',
    },

    {
      quote:
        'Dr. Shriya explained why an onlay would protect my tooth better than another filling. Everything was explained clearly before treatment.',
      name: 'Daniel R.',
      context: 'Restorative Dentistry Patient',
    },

    {
      quote:
        'My old filling had started breaking down. The new restoration fits perfectly, and chewing feels normal again.',
      name: 'Melissa T.',
      context: 'Onlay Patient',
    },

    {
      quote:
        'The entire appointment was comfortable, and my bite felt right immediately after the restoration was placed.',
      name: 'James P.',
      context: 'Tooth Restoration Patient',
    },

    {
      quote:
        'I appreciated having all of my treatment options explained before deciding between a filling, onlay, and crown.',
      name: 'Emily S.',
      context: 'Restorative Consultation',
    },

    {
      quote:
        'Everyone at Promenade Dental was professional and focused on preserving as much of my natural tooth as possible.',
      name: 'Robert M.',
      context: 'Fulton Ranch Resident',
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
symptomsSection: {
  eyebrow: 'Common Tooth Pain Concerns',

  heading:
    'Signs You Should Schedule a Tooth Pain Evaluation',

  body:
    'Tooth pain can range from mild sensitivity to severe discomfort that interferes with eating, sleeping, or daily activities. While some symptoms appear suddenly, others develop gradually as decay, infection, cracks, gum problems, or bite issues progress. A dental evaluation helps identify the source of the pain and determine the most appropriate treatment.',

  symptoms: [
    {
      title: 'Persistent Toothache',

      body:
        'Pain that continues for more than a short period may indicate decay, infection, nerve irritation, or structural damage inside the tooth.',
    },

    {
      title: 'Sensitivity to Hot, Cold, or Sweets',

      body:
        'Lingering sensitivity may be caused by cavities, exposed roots, worn enamel, cracks, or inflammation inside the tooth.',
    },

    {
      title: 'Pain When Biting or Chewing',

      body:
        'Discomfort during chewing can be associated with cracked teeth, infection, damaged restorations, or bite-related problems.',
    },

    {
      title: 'Swelling Around a Tooth or Gums',

      body:
        'Swelling may indicate infection, inflammation, or an abscess that should be evaluated promptly.',
    },

    {
      title: 'Pain Around an Old Filling or Crown',

      body:
        'A loose, worn, or damaged restoration may expose the tooth to sensitivity, bacteria, or additional structural damage.',
    },

    {
      title: 'Throbbing Pain or Pain That Wakes You Up',

      body:
        'More intense pain patterns may suggest deeper decay, infection, or irritation involving the tooth nerve.',
    },
  ],
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
maintenance: {
  eyebrow: 'Preventing Future Tooth Pain',

  heading:
    'Daily Habits That Help Reduce Toothaches and Dental Problems',

  body:
    'Many causes of tooth pain develop gradually over time. Regular dental care, healthy oral hygiene habits, and early treatment of small problems can help reduce the risk of cavities, infection, cracked teeth, and other conditions that lead to dental discomfort.',

  cards: [
    {
      title: 'Brush and Floss Consistently',

      body:
        'Daily plaque removal helps lower the risk of cavities, gum disease, and other conditions that commonly cause tooth pain.',
    },

    {
      title: 'Schedule Routine Dental Exams',

      body:
        'Regular checkups help identify decay, worn restorations, cracks, and gum concerns before they become painful.',
    },

    {
      title: 'Address Sensitivity Early',

      body:
        'Mild sensitivity or occasional discomfort may be an early sign of a problem that is easier to treat before it worsens.',
    },

    {
      title: 'Protect Teeth From Grinding and Damage',

      body:
        'Managing grinding, clenching, and habits such as chewing ice can help reduce unnecessary stress on teeth and restorations.',
    },
  ],
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
benefits: {
  eyebrow: 'Why Choose Promenade Dental',

  heading:
    'Compassionate Toothache Care Focused on Relief and Diagnosis',

  description:
    'Tooth pain can be stressful, especially when the cause is unclear. Promenade Dental focuses on helping patients feel comfortable, understand what is causing the pain, and receive treatment recommendations based on diagnosis rather than assumptions.',

  items: [
    {
      title: 'Comprehensive Evaluation by Dr. Shriya',

      body:
        'Dr. Shriya evaluates symptoms, teeth, gums, bite, restorations, and X-rays when needed to identify the source of discomfort before recommending treatment.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6',
      ],
    },

    {
      title: 'Gentle and Comfort-Focused Care',

      body:
        'Patients experiencing dental pain are treated with patience, clear communication, and a focus on comfort throughout the visit.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M24 12 q-8 8 -8 16 q0 10 8 16 q8-6 8-16 q0-8-8-16',
      ],
    },

    {
      title: 'Honest Treatment Recommendations',

      body:
        'Treatment is based on the actual cause of the toothache. Patients receive clear explanations about available options and what is most appropriate for their situation.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M24 12 L24 30 M14 22 L34 22',
      ],
    },

    {
      title: 'Tooth-Saving Solutions Considered First',

      body:
        'When possible, treatment focuses on preserving the natural tooth through restorative care before extraction is considered.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M12 22 q12 -10 24 0 M18 28 h12 M24 16 v20',
      ],
    },

    {
      title: 'Emergency Appointments Available',

      body:
        'Prompt evaluation helps patients address tooth pain sooner and understand the next steps for relief and treatment.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M18 14 a8 8 0 1 1 0.1 0 M18 22 v12 M12 34 h12',
      ],
    },

    {
      title: 'Comprehensive Dental Care in One Office',

      body:
        'Promenade Dental can connect toothache treatment with fillings, crowns, root canals, gum care, emergency dentistry, and long-term preventive care when needed.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M15 18 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0 M25 22 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0 M12 32 q7-6 14 0 M23 32 q5-5 10 0',
      ],
    },
  ],
},
localArea: {
  eyebrow: 'Local Toothache Relief',

  heading:
    'Toothache Relief Near Fulton Ranch and Chandler 85248',

  body:
    'Promenade Dental is located in Fulton Ranch at 4905 S. Alma School Rd, Suite 1, Chandler, AZ 85248. Our office serves patients from Fulton Ranch, Ocotillo, Sun Lakes, South Chandler, and nearby communities.\n\nIf you are experiencing tooth pain, sensitivity, swelling, chewing discomfort, possible infection, or a dental emergency near Chandler 85248, Promenade Dental provides tooth pain evaluations focused on diagnosis, relief, and long-term oral health.',

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
testimonialsSection: {
  eyebrow: 'Patient Stories',

  heading:
    'Trusted by Chandler Patients for Tooth Pain Evaluation and Relief',

  testimonials: [
    {
      quote:
        'I had severe tooth pain that kept getting worse. Dr. Shriya identified the cause quickly and explained all of my treatment options clearly.',
      name: 'Michael T.',
      context: 'Tooth Pain Patient',
    },

    {
      quote:
        'Everyone was professional, reassuring, and focused on finding the source of my pain instead of rushing into treatment.',
      name: 'Jennifer R.',
      context: 'Emergency Dental Patient',
    },

    {
      quote:
        'I thought I would lose the tooth, but after a thorough evaluation I was able to get the treatment needed to save it.',
      name: 'David L.',
      context: 'Restorative Dentistry Patient',
    },

    {
      quote:
        'The office got me in quickly when my toothache became severe. The entire process was organized and comfortable.',
      name: 'Amanda P.',
      context: 'Chandler Resident',
    },

    {
      quote:
        'Dr. Shriya took the time to explain why my tooth was hurting and what the next steps would be. I felt informed throughout the visit.',
      name: 'Robert K.',
      context: 'Dental Pain Evaluation Patient',
    },

    {
      quote:
        'From the initial phone call through treatment, the team was helpful, professional, and genuinely concerned about relieving my discomfort.',
      name: 'Karen S.',
      context: 'Fulton Ranch Patient',
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
symptomsSection: {
  eyebrow: 'Signs of Tooth Damage',

  heading:
    'Symptoms That May Indicate a Broken, Chipped, or Cracked Tooth',

  body:
    'Not every broken tooth looks severe. Some cracks are difficult to see but can still cause pain, sensitivity, or chewing discomfort. Even a small chip can expose vulnerable tooth structure or create conditions that allow damage to worsen over time. A dental evaluation helps determine the extent of the injury and the most appropriate repair option.',

  symptoms: [
    {
      title: 'Visible Chip or Missing Tooth Structure',

      body:
        'A piece of the tooth may break away due to trauma, biting pressure, decay, or weakening around an old restoration.',
    },

    {
      title: 'Pain When Biting or Chewing',

      body:
        'Pain during chewing may indicate a crack, fracture, bite imbalance, or deeper damage affecting the tooth structure.',
    },

    {
      title: 'Sensitivity to Hot, Cold, or Sweets',

      body:
        'A broken area can expose inner tooth layers that react more strongly to temperature changes and certain foods.',
    },

    {
      title: 'Sharp or Rough Tooth Edges',

      body:
        'Damaged tooth surfaces may irritate the tongue, cheeks, or lips and often indicate structural loss that should be evaluated.',
    },

    {
      title: 'Crack Lines or Tooth Discoloration',

      body:
        'Visible crack lines or darkening around a damaged tooth may suggest deeper structural changes or underlying injury.',
    },

    {
      title: 'Pain That Develops After an Injury',

      body:
        'Some teeth become symptomatic hours or days after a fall, sports injury, or impact to the mouth.',
    },
  ],
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
maintenance: {
  eyebrow: 'Protecting Repaired Teeth',

  heading:
    'How to Reduce the Risk of Future Chips, Cracks, and Tooth Fractures',

  body:
    'While accidents cannot always be prevented, many broken teeth are associated with grinding, untreated decay, weakened restorations, and excessive bite pressure. Ongoing dental care and protective habits can help reduce the likelihood of future damage.',

  cards: [
    {
      title: 'Treat Small Problems Before They Grow',

      body:
        'Small cavities, worn fillings, and minor cracks may become larger fractures if left untreated for long periods.',
    },

    {
      title: 'Protect Teeth From Grinding and Clenching',

      body:
        'Excessive grinding and clenching can weaken teeth and increase the risk of cracks, fractures, and restoration failure.',
    },

    {
      title: 'Avoid Using Teeth as Tools',

      body:
        'Opening packages, chewing ice, or biting hard objects can place unnecessary stress on teeth and existing dental work.',
    },

    {
      title: 'Attend Regular Dental Checkups',

      body:
        'Routine examinations help identify weakened teeth, damaged restorations, and developing cracks before larger repairs become necessary.',
    },
  ],
},
benefits: {
  eyebrow: 'Why Choose Promenade Dental',

  heading:
    'Compassionate Broken Tooth Care Focused on Repair and Long-Term Protection',

  description:
    'A broken tooth can be painful, stressful, and difficult to evaluate on your own. Promenade Dental focuses on identifying the extent of the damage, explaining treatment options clearly, and helping patients protect their long-term oral health.',

  items: [
    {
      title: 'Comprehensive Evaluation by Dr. Shriya',

      body:
        'Dr. Shriya evaluates tooth structure, cracks, symptoms, bite pressure, restorations, gums, and X-rays when needed before recommending treatment.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6',
      ],
    },

    {
      title: 'Gentle and Comfort-Focused Care',

      body:
        'Patients with dental injuries receive compassionate care, clear communication, and treatment focused on comfort throughout the visit.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M24 12 q-8 8 -8 16 q0 10 8 16 q8-6 8-16 q0-8-8-16',
      ],
    },

    {
      title: 'Honest Treatment Recommendations',

      body:
        'Patients receive straightforward guidance about whether the tooth may benefit from bonding, a filling, a crown, root canal therapy, or another treatment option.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M24 12 L24 30 M14 22 L34 22',
      ],
    },

    {
      title: 'Tooth-Saving Solutions Considered First',

      body:
        'When possible, treatment focuses on repairing and protecting the natural tooth before extraction is considered.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M12 22 q12 -10 24 0 M18 28 h12 M24 16 v20',
      ],
    },

    {
      title: 'Prompt Emergency Appointments Available',

      body:
        'Broken teeth can worsen if treatment is delayed. Prompt evaluation helps patients understand their options and reduce the risk of further damage.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M18 14 a8 8 0 1 1 0.1 0 M18 22 v12 M12 34 h12',
      ],
    },

    {
      title: 'Comprehensive Dental Care in One Office',

      body:
        'Promenade Dental can connect broken tooth treatment with restorative, cosmetic, emergency, implant, and preventive services when needed.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M15 18 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0 M25 22 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0 M12 32 q7-6 14 0 M23 32 q5-5 10 0',
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
testimonialsSection: {
  eyebrow: 'Patient Stories',

  heading:
    'Trusted by Chandler Patients for Broken and Chipped Tooth Care',

  testimonials: [
    {
      quote:
        'I chipped a front tooth unexpectedly and was worried about how it looked. Dr. Shriya explained my options clearly and restored it beautifully.',
      name: 'Jennifer R.',
      context: 'Chipped Tooth Patient',
    },

    {
      quote:
        'After breaking a tooth while eating, I was able to get an evaluation quickly. The team made the entire process straightforward and comfortable.',
      name: 'Michael T.',
      context: 'Broken Tooth Patient',
    },

    {
      quote:
        'I thought my cracked tooth would need to be removed, but Dr. Shriya carefully reviewed my options and helped save the tooth.',
      name: 'David K.',
      context: 'Restorative Dentistry Patient',
    },

    {
      quote:
        'Everyone was professional, reassuring, and focused on finding the right solution instead of rushing treatment.',
      name: 'Amanda P.',
      context: 'Emergency Dental Patient',
    },

    {
      quote:
        'The office explained exactly why the tooth broke and what could be done to protect it long term. I felt informed throughout the process.',
      name: 'Robert L.',
      context: 'Crown Treatment Patient',
    },

    {
      quote:
        'From scheduling to treatment, the experience was smooth and organized. My broken tooth feels comfortable again.',
      name: 'Karen S.',
      context: 'Fulton Ranch Patient',
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
symptomsSection: {
  eyebrow: 'Signs of Dental Trauma',

  heading:
    'Symptoms That May Accompany a Knocked-Out Tooth Injury',

  body:
    'A knocked-out tooth often occurs alongside other dental injuries. Even when the missing tooth is the primary concern, nearby teeth, gums, bone, and bite alignment may also be affected. A dental evaluation helps identify damage that may not be immediately visible after the injury.',

  symptoms: [
    {
      title: 'Missing Adult Tooth',

      body:
        'A tooth that has been completely displaced from its socket requires immediate dental guidance and evaluation.',
    },

    {
      title: 'Bleeding From the Tooth Socket',

      body:
        'Bleeding is common after a tooth is knocked out and may indicate injury to the surrounding tissues and socket.',
    },

    {
      title: 'Pain or Throbbing in the Injury Area',

      body:
        'Discomfort may come from damage to the tooth socket, gums, surrounding teeth, or supporting structures.',
    },

    {
      title: 'Loose or Shifted Nearby Teeth',

      body:
        'Dental trauma can affect neighboring teeth even when they appear intact at first glance.',
    },

    {
      title: 'Swelling of the Gums or Face',

      body:
        'Soft tissue injury and inflammation may develop following impact or trauma to the mouth.',
    },

    {
      title: 'Difficulty Biting or Closing the Teeth Together',

      body:
        'Changes in bite alignment may indicate injury involving surrounding teeth, bone, or jaw structures.',
    },
  ],
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
maintenance: {
  eyebrow: 'Protecting Teeth From Future Injuries',

  heading:
    'Ways to Reduce the Risk of Dental Trauma and Tooth Loss',

  body:
    'While accidents cannot always be prevented, certain habits and protective measures may help reduce the risk of dental injuries that lead to knocked-out teeth, fractures, and trauma-related complications.',

  cards: [
    {
      title: 'Wear a Sports Mouthguard',

      body:
        'Custom or properly fitted mouthguards can help reduce the risk of tooth injuries during contact sports and recreational activities.',
    },

    {
      title: 'Address Bite and Grinding Issues',

      body:
        'Heavy bite pressure and teeth grinding can weaken teeth and make them more vulnerable to injury or fracture.',
    },

    {
      title: 'Treat Existing Dental Problems Early',

      body:
        'Teeth weakened by decay, large fillings, or untreated cracks may be more susceptible to trauma-related damage.',
    },

    {
      title: 'Attend Regular Dental Examinations',

      body:
        'Routine evaluations help identify conditions that may increase the risk of tooth loss or injury over time.',
    },
  ],
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
benefits: {
  eyebrow: 'Why Choose Promenade Dental',

  heading:
    'Compassionate Emergency Care for Knocked-Out Teeth and Dental Trauma',

  description:
    'A knocked-out tooth can be overwhelming and time-sensitive. Promenade Dental focuses on helping patients receive prompt guidance, clear answers, and personalized treatment recommendations during dental emergencies.',

  items: [
    {
      title: 'Urgent Evaluation by Dr. Shriya',

      body:
        'Dr. Shriya evaluates the injured area, tooth socket, gums, nearby teeth, bite, symptoms, and imaging when needed to determine the most appropriate next step.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6',
      ],
    },

    {
      title: 'Clear Guidance During a Stressful Situation',

      body:
        'Patients receive straightforward instructions, honest explanations, and support in understanding their treatment and replacement options.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M24 12 L24 30 M14 22 L34 22',
      ],
    },

    {
      title: 'Tooth-Saving Solutions Considered First',

      body:
        'When circumstances allow, treatment planning focuses on preserving the natural tooth before replacement options are considered.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M12 22 q12 -10 24 0 M18 28 h12 M24 16 v20',
      ],
    },

    {
      title: 'Comfort-Focused Emergency Care',

      body:
        'Dental injuries can be painful and unexpected. Our team works to provide compassionate care in a calm and welcoming environment.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M24 12 q-8 8 -8 16 q0 10 8 16 q8-6 8-16 q0-8-8-16',
      ],
    },

    {
      title: 'Replacement Options Explained Clearly',

      body:
        'If the tooth cannot be saved, patients receive guidance about dental implants, bridges, partial dentures, and other restorative solutions.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M14 24 h20 M18 18 h12 M18 30 h12 M24 14 v20',
      ],
    },

    {
      title: 'Comprehensive Dental Care in One Office',

      body:
        'Promenade Dental can connect emergency treatment with restorative, implant, cosmetic, and preventive care to support long-term oral health.',

      paths: [
        'M6 38 A18 18 0 0 1 42 38',
        'M15 18 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0 M25 22 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0 M12 32 q7-6 14 0 M23 32 q5-5 10 0',
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
testimonialsSection: {
  eyebrow: 'Patient Stories',

  heading:
    'Trusted by Chandler Patients for Dental Trauma and Emergency Care',

  testimonials: [
    {
      quote:
        'When my tooth was knocked out during a sports injury, the team provided immediate guidance and helped me understand exactly what to do before arriving.',
      name: 'Michael R.',
      context: 'Dental Trauma Patient',
    },

    {
      quote:
        'Everyone stayed calm, explained the situation clearly, and focused on evaluating the entire injury instead of just the missing tooth.',
      name: 'Jennifer T.',
      context: 'Emergency Dental Patient',
    },

    {
      quote:
        'Dr. Shriya carefully checked the surrounding teeth and explained my treatment options in a way that was easy to understand.',
      name: 'David K.',
      context: 'Tooth Injury Patient',
    },

    {
      quote:
        'The office was professional, reassuring, and responsive during a stressful dental emergency.',
      name: 'Amanda P.',
      context: 'Chandler Resident',
    },

    {
      quote:
        'I appreciated how thoroughly the injury was evaluated and how clearly the next steps were explained.',
      name: 'Robert L.',
      context: 'Emergency Dentistry Patient',
    },

    {
      quote:
        'From the initial phone call through treatment planning, the entire team was helpful and organized.',
      name: 'Karen S.',
      context: 'Fulton Ranch Patient',
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
]


export function getServiceBySlug(slug: string): Sub_ServiceData | undefined {
  return SUB_SERVICES.find((s) => s.slug === slug);
}