  // app/lib/serviceData.ts

  export interface ServiceData {
    slug: string;
    name: string;
    hero: {
      eyebrow: string;
      title: string;
      highlight: string;
      description: string;
    };
    overview: {
      eyebrow: string;
      heading: string;
      body: string;
      features: string[];
      image: string;
    };
    process: {
      eyebrow: string;
      heading: string;
      subtitle: string;
      steps: { title: string; body: string }[];
    };
    benefits: {
      eyebrow: string;
      heading: string;
      items: { title: string; body: string; paths: string[] }[];
    };
    gallery: {
      eyebrow: string;
      heading: string;
      images: string[];
    };
    faq: {
      eyebrow: string;
      heading: string;
      items: { q: string; a: string }[];
    };
    stats?: {
      eyebrow: string;
      heading: string;
      items: { value: number; suffix?: string; prefix?: string; label: string }[];
    };
    testimonials?: {
      eyebrow: string;
      heading: string;
      items: { quote: string; name: string; context: string }[];
    };
    comparison?: {
      eyebrow: string;
      heading: string;
      subtitle?: string;
      without: { title: string; points: string[] };
      withUs: { title: string; points: string[] };
    };
    cta: {
      title: string;
      highlight: string;
      subtitle: string;
      buttonText: string;
      buttonHref: string;
    };
  }

export const SERVICES: ServiceData[] = [
  {
    slug: 'general-family-dentistry',
    name: 'General & Family Dentistry',
    hero: {
      eyebrow: 'General & Family Dentistry',
      title: 'Healthy smiles, for',
      highlight: 'every age.',
      description:
        'Comprehensive preventive and restorative care for children, teens, and adults — built around routine checkups, early detection, and a calm, judgment-free experience for the whole family.',
    },
    overview: {
      eyebrow: 'Overview',
      heading: 'The foundation of a lifetime of healthy teeth.',
      body:
        'Regular checkups and cleanings are the simplest way to avoid bigger problems down the road. We combine thorough exams with gentle, modern techniques so visits feel quick, comfortable, and genuinely informative — for kids on their first visit and adults who haven\u2019t been in years.',
      features: [
        'Routine exams & professional cleanings',
        'Digital X-rays with minimal radiation',
        'Cavity detection & tooth-colored fillings',
        'Sealants and fluoride for growing smiles',
      ],
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=80',
    },
    process: {
      eyebrow: 'What To Expect',
      heading: 'A simple, unhurried visit.',
      subtitle: 'No clipboards, no surprises — just a clear path from check-in to a healthier smile.',
      steps: [
        { title: 'Welcome & History', body: 'A short, friendly check-in where we get to know you and your dental history — no rushing.' },
        { title: 'Full Exam', body: 'Digital X-rays and a thorough exam to catch issues early, before they become painful or costly.' },
        { title: 'Gentle Cleaning', body: 'A comfortable professional cleaning that leaves your teeth feeling genuinely fresh.' },
        { title: 'Your Plan', body: 'A clear, honest rundown of what we found and what (if anything) needs attention next.' },
      ],
    },
    benefits: {
      eyebrow: 'Why Choose Us',
      heading: 'Care designed around your comfort.',
      items: [
        {
          title: 'Same-Week Appointments',
          body: 'Flexible scheduling that fits around work and school — most requests seen within days, not weeks.',
          paths: ['M6 38 A18 18 0 0 1 42 38', 'M24 12 L24 30 M14 22 L34 22'],
        },
        {
          title: 'Kid-Friendly Approach',
          body: 'A relaxed, encouraging environment that helps children build positive habits around dental visits early.',
          paths: ['M6 38 A18 18 0 0 1 42 38', 'M17 20 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0 M25 20 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0 M16 28 q8 6 16 0'],
        },
        {
          title: 'Most PPO Plans Accepted',
          body: 'Straightforward insurance handling and transparent pricing, with no hidden fees or upselling.',
          paths: ['M6 38 A18 18 0 0 1 42 38', 'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6'],
        },
      ],
    },
    gallery: {
      eyebrow: 'Inside Our Office',
      heading: 'A calm space, built for ease.',
      images: [
        'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=80',
        'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=900&q=80',
        'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=900&q=80',
        'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=900&q=80',
      ],
    },
    faq: {
      eyebrow: 'Questions',
      heading: 'Good to know.',
      items: [
        { q: 'How often should I come in for a checkup?', a: 'Most patients benefit from a checkup and cleaning every six months, though some with gum concerns may be scheduled more frequently.' },
        { q: 'Do you see young children?', a: 'Yes — we welcome patients from their very first tooth through adulthood, and tailor each visit to the child\u2019s comfort level.' },
        { q: 'What if I haven\u2019t seen a dentist in years?', a: 'That\u2019s completely fine. We\u2019ll start with a relaxed, judgment-free exam and build a plan from there, at your pace.' },
        { q: 'Do you accept my insurance?', a: 'We work with most major PPO plans and will verify your benefits and walk you through costs before any treatment.' },
      ],
    },
    stats: {
      eyebrow: 'By The Numbers',
      heading: 'Trusted by families across Chandler.',
      items: [
        { value: 12, suffix: '+', label: 'Years serving Chandler families' },
        { value: 8000, suffix: '+', label: 'Checkups & cleanings completed' },
        { value: 98, suffix: '%', label: 'Patients who return for follow-up care' },
        { value: 24, suffix: 'hr', label: 'Average response for urgent requests' },
      ],
    },
    testimonials: {
      eyebrow: 'Patient Stories',
      heading: 'What families are saying.',
      items: [
        {
          quote: 'My kids actually look forward to going to the dentist now. The whole team is patient and kind, even with my nervous five-year-old.',
          name: 'Sarah M.',
          context: 'Patient since 2021',
        },
        {
          quote: 'I hadn\u2019t been to a dentist in years and was dreading it. They never made me feel judged \u2014 just helped me get back on track.',
          name: 'David R.',
          context: 'New patient',
        },
        {
          quote: 'Quick, thorough, and they actually explain what they\u2019re doing and why. Booking is easy and they always run on time.',
          name: 'Priya K.',
          context: 'Patient since 2019',
        },
      ],
    },
    comparison: {
      eyebrow: 'The Difference',
      heading: 'Dentistry, done differently.',
      subtitle: 'A few small changes make a big difference in how a visit feels.',
      without: {
        title: 'Typical Dental Visit',
        points: [
          'Long waits with little communication',
          'Rushed exams with no time for questions',
          'Surprise costs after treatment',
          'A new dentist every visit',
        ],
      },
      withUs: {
        title: 'A Visit With Us',
        points: [
          'Seen close to your appointment time',
          'Unhurried exams \u2014 questions always welcome',
          'Clear pricing explained before treatment',
          'A consistent team that knows your history',
        ],
      },
    },
    cta: {
      title: 'Ready for a checkup',
      highlight: 'that feels easy?',
      subtitle: 'Book a routine visit for yourself or your family — same-week appointments are usually available.',
      buttonText: 'Book an Appointment',
      buttonHref: '/contact',
    },
  },
  {
    slug: 'cosmetic-dentistry',
    name: 'Cosmetic Dentistry',
    hero: {
      eyebrow: 'Cosmetic Dentistry',
      title: 'A smile you\u2019ll',
      highlight: 'love sharing.',
      description:
        'From subtle refinements to full smile makeovers, our cosmetic treatments are designed to enhance your natural features — never to look artificial.',
    },
    overview: {
      eyebrow: 'Overview',
      heading: 'Beautiful results, naturally yours.',
      body:
        'Whether you\u2019re after a brighter smile, straighter teeth, or a complete transformation, we take time to understand what you want before recommending anything. Every treatment plan is built around your face, your goals, and a result that still looks like you — just more confident.',
      features: [
        'Custom porcelain & composite veneers',
        'Professional whitening for lasting results',
        'Bonding for chips, gaps, and uneven edges',
        'Full smile design consultations',
      ],
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80',
    },
    process: {
      eyebrow: 'The Process',
      heading: 'From consultation to reveal.',
      subtitle: 'A thoughtful, collaborative path to a smile that fits your face and personality.',
      steps: [
        { title: 'Smile Consultation', body: 'We discuss your goals, examine your smile, and talk through realistic options together.' },
        { title: 'Digital Preview', body: 'See a preview of potential results before committing to any treatment.' },
        { title: 'Treatment', body: 'Precise, comfortable application — whether that\u2019s whitening, veneers, or bonding.' },
        { title: 'The Reveal', body: 'Walk out with a smile you\u2019re excited to show — and simple care guidance to keep it that way.' },
      ],
    },
    benefits: {
      eyebrow: 'Why Choose Us',
      heading: 'Artistry meets dental science.',
      items: [
        {
          title: 'Natural-Looking Veneers',
          body: 'Custom shade-matched and shaped to complement your existing teeth, not replace their character.',
          paths: ['M6 38 A18 18 0 0 1 42 38', 'M24 4 L24 14 M19 9 L29 9 M20.8 5.8 L27.2 12.2 M27.2 5.8 L20.8 12.2'],
        },
        {
          title: 'Lasting Whitening',
          body: 'Professional-grade treatments that go several shades brighter and stay that way far longer than store kits.',
          paths: ['M6 38 A18 18 0 0 1 42 38', 'M24 3 L24 11 M14 7 L17 13 M34 7 L31 13 M8 15 L13 18 M40 15 L35 18'],
        },
        {
          title: 'No-Pressure Planning',
          body: 'Honest recommendations with clear pricing — we\u2019ll never push treatment you don\u2019t want or need.',
          paths: ['M6 38 A18 18 0 0 1 42 38', 'M16 22 L24 30 L34 16'],
        },
      ],
    },
    gallery: {
      eyebrow: 'Smile Transformations',
      heading: 'Real results, real confidence.',
      images: [
        'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=900&q=80',
        'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&q=80',
        'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=80',
        'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=900&q=80',
      ],
    },
    faq: {
      eyebrow: 'Questions',
      heading: 'Good to know.',
      items: [
        { q: 'How long do veneers last?', a: 'With good care, porcelain veneers typically last 10\u201315 years or longer, and we\u2019ll guide you on keeping them looking their best.' },
        { q: 'Is whitening safe for sensitive teeth?', a: 'Yes — we offer formulations designed specifically for sensitive teeth and can adjust treatment strength to your comfort.' },
        { q: 'Can I see results before committing?', a: 'In many cases yes. We can walk through digital previews so you have a clear sense of the outcome before treatment begins.' },
        { q: 'Will cosmetic work look obvious?', a: 'Our goal is always a natural result — shades, shapes, and proportions are matched carefully to your existing smile and face.' },
      ],
    },
    stats: {
      eyebrow: 'By The Numbers',
      heading: 'Smiles transformed, confidence restored.',
      items: [
        { value: 1200, suffix: '+', label: 'Smile makeovers completed' },
        { value: 8, suffix: ' shades', label: 'Average whitening improvement' },
        { value: 96, suffix: '%', label: 'Patients happy with their results' },
        { value: 2, suffix: ' visits', label: 'Average for a full smile refresh' },
      ],
    },
    testimonials: {
      eyebrow: 'Patient Stories',
      heading: 'Confidence, in their own words.',
      items: [
        {
          quote: 'I was nervous about veneers looking fake, but they look completely natural. People just say my smile looks great \u2014 not that I had work done.',
          name: 'Jenna T.',
          context: 'Veneers patient',
        },
        {
          quote: 'The whitening results lasted way longer than the kits I tried at home. Worth every penny for how confident I feel now.',
          name: 'Marcus L.',
          context: 'ZOOM Whitening',
        },
        {
          quote: 'They walked me through a digital preview before we started, so I knew exactly what to expect. Zero surprises, beautiful outcome.',
          name: 'Anita G.',
          context: 'Smile makeover',
        },
      ],
    },
    comparison: {
      eyebrow: 'The Difference',
      heading: 'Cosmetic care, done thoughtfully.',
      subtitle: 'Great cosmetic dentistry should feel collaborative, not like an upsell.',
      without: {
        title: 'Typical Cosmetic Visit',
        points: [
          'One-size-fits-all treatment recommendations',
          'No preview of the final result',
          'Pressure toward the most expensive option',
          'Results that look noticeably "done"',
        ],
      },
      withUs: {
        title: 'A Visit With Us',
        points: [
          'A plan built around your face and goals',
          'Digital previews before any commitment',
          'Honest options across every budget',
          'Results that look naturally yours',
        ],
      },
    },
    cta: {
      title: 'Curious what\u2019s',
      highlight: 'possible for your smile?',
      subtitle: 'Book a no-pressure cosmetic consultation and explore your options at your own pace.',
      buttonText: 'Book a Consultation',
      buttonHref: '/contact',
    },
  },
  {
    slug: 'dental-implants',
    name: 'Implants & Crowns',
    hero: {
      eyebrow: 'Implants & Crowns',
      title: 'Restore what\u2019s',
      highlight: 'missing.',
      description:
        'Durable, natural-feeling solutions for missing or damaged teeth — from single implants to full crowns, designed to blend seamlessly with your smile.',
    },
    overview: {
      eyebrow: 'Overview',
      heading: 'Function and confidence, restored.',
      body:
        'Missing or badly damaged teeth affect more than appearance — they impact chewing, speech, and even the long-term health of surrounding teeth. Our implant and crown solutions are custom-crafted to fit precisely and feel like a natural part of your bite from day one.',
      features: [
        'Single-tooth & multi-tooth implants',
        'Custom porcelain crowns',
        'Bridge solutions for missing teeth',
        'Long-term bone & gum health support',
      ],
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80',
    },
    process: {
      eyebrow: 'The Process',
      heading: 'A carefully staged restoration.',
      subtitle: 'Implants are a journey — we walk through every stage with you, with realistic timelines.',
      steps: [
        { title: 'Evaluation & Planning', body: 'Detailed imaging and a full assessment to determine the right approach for your bite and bone structure.' },
        { title: 'Placement', body: 'The implant post is placed with precision, using a comfortable, well-explained procedure.' },
        { title: 'Healing Period', body: 'Time for the implant to integrate fully — we check in to make sure healing is on track.' },
        { title: 'Custom Crown', body: 'A crown matched to your natural teeth is fitted, completing a restoration that looks and feels like your own.' },
      ],
    },
    benefits: {
      eyebrow: 'Why Choose Us',
      heading: 'Built to last, made to fit.',
      items: [
        {
          title: 'Natural Look & Feel',
          body: 'Crowns are shade-matched and shaped to blend seamlessly with the rest of your smile.',
          paths: ['M6 38 A18 18 0 0 1 42 38', 'M24 12 L24 33 M18 33 L30 33 M20 18 L28 18 M20 23 L28 23'],
        },
        {
          title: 'Built to Last',
          body: 'With proper care, implants and crowns are designed to serve you reliably for decades.',
          paths: ['M6 38 A18 18 0 0 1 42 38', 'M24 8 L34 14 L34 26 L24 32 L14 26 L14 14 Z'],
        },
        {
          title: 'Clear Timelines',
          body: 'We map out every stage upfront, so you always know what\u2019s next and what to expect.',
          paths: ['M6 38 A18 18 0 0 1 42 38', 'M24 12 v8 l6 4 M24 4 a14 14 0 1 0 0.01 0'],
        },
      ],
    },
    gallery: {
      eyebrow: 'Our Work',
      heading: 'Precision, in every detail.',
      images: [
        'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=900&q=80',
        'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=900&q=80',
        'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=900&q=80',
        'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=80',
      ],
    },
    faq: {
      eyebrow: 'Questions',
      heading: 'Good to know.',
      items: [
        { q: 'How long does the implant process take?', a: 'From placement to final crown, the full process often spans a few months to allow proper healing — we\u2019ll give you a clear timeline upfront.' },
        { q: 'Are implants painful?', a: 'The placement procedure is done comfortably with anesthesia, and most patients report only mild soreness during recovery.' },
        { q: 'How long do crowns last?', a: 'A well-maintained crown can last 10\u201315 years or more, depending on material and bite habits.' },
        { q: 'Am I a candidate for implants?', a: 'Most healthy adults are — we\u2019ll assess bone density and overall oral health during your evaluation to confirm the best option.' },
      ],
    },
    stats: {
      eyebrow: 'By The Numbers',
      heading: 'Restorations built to last.',
      items: [
        { value: 600, suffix: '+', label: 'Implants placed to date' },
        { value: 97, suffix: '%', label: 'Implant success rate' },
        { value: 15, suffix: '+ yrs', label: 'Average crown lifespan' },
        { value: 3, suffix: ' stages', label: 'Clear, well-paced treatment plan' },
      ],
    },
    testimonials: {
      eyebrow: 'Patient Stories',
      heading: 'Real restorations, real relief.',
      items: [
        {
          quote: 'I put off getting an implant for years out of fear. The process was so much smoother than I expected, and my new tooth feels completely natural.',
          name: 'Robert H.',
          context: 'Single implant patient',
        },
        {
          quote: 'My crown matches my other teeth perfectly \u2014 you genuinely cannot tell which one it is. I get compliments on my smile now.',
          name: 'Linda C.',
          context: 'Crown patient',
        },
        {
          quote: 'They explained every stage of the implant process so I always knew what was coming next. No anxiety, just a clear plan.',
          name: 'Tom W.',
          context: 'Multi-tooth implant patient',
        },
      ],
    },
    comparison: {
      eyebrow: 'The Difference',
      heading: 'Restorations, planned properly.',
      subtitle: 'Implants and crowns are a long-term investment \u2014 they deserve a careful approach.',
      without: {
        title: 'Typical Implant Experience',
        points: [
          'Vague timelines with little follow-up',
          'Generic crowns that stand out visually',
          'Limited explanation of healing stages',
          'Separate providers for each stage',
        ],
      },
      withUs: {
        title: 'A Plan With Us',
        points: [
          'A clear, staged timeline from day one',
          'Shade-matched crowns built for your smile',
          'Check-ins throughout the healing process',
          'One consistent team start to finish',
        ],
      },
    },
    cta: {
      title: 'Missing a tooth?',
      highlight: 'Let\u2019s fix that.',
      subtitle: 'Schedule an evaluation to explore implant and crown options tailored to your bite.',
      buttonText: 'Schedule an Evaluation',
      buttonHref: '/contact',
    },
  },
  {
    slug: 'root-canal-therapy',
    name: 'Root Canal Therapy',
    hero: {
      eyebrow: 'Root Canal Therapy',
      title: 'Relief that',
      highlight: 'lasts.',
      description:
        'Modern root canal treatment is far more comfortable than its reputation — efficient, gentle, and focused on saving your natural tooth.',
    },
    overview: {
      eyebrow: 'Overview',
      heading: 'Comfortable care for a painful problem.',
      body:
        'When decay or infection reaches the inner pulp of a tooth, a root canal removes the source of pain and protects the tooth from extraction. With modern techniques and anesthesia, most patients are surprised at how manageable the procedure actually is.',
      features: [
        'Same-day emergency appointments',
        'Gentle, modern numbing techniques',
        'Infection removal & tooth preservation',
        'Protective crown placement after treatment',
      ],
      image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1200&q=80',
    },
    process: {
      eyebrow: 'The Process',
      heading: 'Fast relief, step by step.',
      subtitle: 'We move quickly to relieve pain, then carefully to protect the tooth long-term.',
      steps: [
        { title: 'Diagnosis', body: 'Imaging and an exam confirm the source of pain and whether a root canal is the right path.' },
        { title: 'Numbing & Access', body: 'The area is fully numbed before we gently access the infected area — most patients feel little to nothing.' },
        { title: 'Cleaning & Sealing', body: 'Infected tissue is removed, the canal cleaned thoroughly, and sealed to prevent reinfection.' },
        { title: 'Protective Crown', body: 'A crown is placed to restore strength, so the tooth functions normally again.' },
      ],
    },
    benefits: {
      eyebrow: 'Why Choose Us',
      heading: 'Built around your comfort.',
      items: [
        {
          title: 'Same-Day Relief',
          body: 'Severe pain doesn\u2019t wait — we prioritize emergency root canal appointments whenever possible.',
          paths: ['M6 38 A18 18 0 0 1 42 38', 'M24 8 v8 l6 4 M24 4 a14 14 0 1 0 0.01 0'],
        },
        {
          title: 'Modern Comfort Techniques',
          body: 'Updated numbing and instrumentation make the procedure far gentler than older approaches.',
          paths: ['M6 38 A18 18 0 0 1 42 38', 'M16 22 L24 30 L34 16'],
        },
        {
          title: 'Saves Your Natural Tooth',
          body: 'Whenever possible, we prioritize keeping your own tooth rather than moving to extraction.',
          paths: ['M6 38 A18 18 0 0 1 42 38', 'M24 12 L24 33 M18 33 L30 33 M20 18 L28 18 M20 23 L28 23'],
        },
      ],
    },
    gallery: {
      eyebrow: 'Inside Our Office',
      heading: 'Calm, careful, and quick.',
      images: [
        'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=900&q=80',
        'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=900&q=80',
        'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=900&q=80',
        'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&q=80',
      ],
    },
    faq: {
      eyebrow: 'Questions',
      heading: 'Good to know.',
      items: [
        { q: 'Is a root canal painful?', a: 'With modern anesthesia, the procedure itself is typically no more uncomfortable than getting a filling. Some soreness afterward is normal and manageable.' },
        { q: 'How long does treatment take?', a: 'Most root canals are completed in one to two visits, depending on the tooth and extent of infection.' },
        { q: 'Will I need a crown afterward?', a: 'In most cases yes — a crown protects the treated tooth and restores its full chewing strength.' },
        { q: 'What happens if I wait?', a: 'Delaying treatment can allow infection to spread, increasing pain and the risk of losing the tooth altogether.' },
      ],
    },
    stats: {
      eyebrow: 'By The Numbers',
      heading: 'Pain relief, handled quickly.',
      items: [
        { value: 95, suffix: '%', label: 'Treated in a single visit' },
        { value: 30, suffix: ' min', label: 'Average numbing onset' },
        { value: 24, suffix: 'hr', label: 'Emergency response window' },
        { value: 10, suffix: '+ yrs', label: 'Average preserved tooth lifespan' },
      ],
    },
    testimonials: {
      eyebrow: 'Patient Stories',
      heading: 'From pain to relief.',
      items: [
        {
          quote: 'I was in so much pain and they got me in the same day. The procedure itself was completely painless \u2014 nothing like what I feared.',
          name: 'Carlos M.',
          context: 'Emergency root canal',
        },
        {
          quote: 'They explained exactly what was happening at each step, which helped so much with my anxiety. I felt relief almost immediately.',
          name: 'Hannah B.',
          context: 'Root canal patient',
        },
        {
          quote: 'My tooth feels completely normal again. So glad I didn\u2019t need an extraction \u2014 they saved my natural tooth.',
          name: 'James P.',
          context: 'Patient since 2020',
        },
      ],
    },
    comparison: {
      eyebrow: 'The Difference',
      heading: 'Root canals, without the dread.',
      subtitle: 'A painful old reputation doesn\u2019t match modern root canal therapy.',
      without: {
        title: 'The Old Reputation',
        points: [
          'Long waits while in significant pain',
          'Outdated techniques causing real discomfort',
          'Little explanation during the procedure',
          'Tooth often lost anyway',
        ],
      },
      withUs: {
        title: 'Root Canals With Us',
        points: [
          'Same-day appointments for severe pain',
          'Modern numbing for a comfortable visit',
          'Clear explanation at every step',
          'Your natural tooth preserved whenever possible',
        ],
      },
    },
    cta: {
      title: 'In pain?',
      highlight: 'Let\u2019s get you relief.',
      subtitle: 'Same-day emergency appointments are available for severe tooth pain.',
      buttonText: 'Request Emergency Visit',
      buttonHref: '/contact',
    },
  },
  {
    slug: 'zoom-whitening',
    name: 'ZOOM!\u2122 Whitening',
    hero: {
      eyebrow: 'ZOOM!\u2122 Whitening',
      title: 'A brighter smile,',
      highlight: 'in one visit.',
      description:
        'Professional-grade whitening that delivers noticeably brighter results in about an hour — safe, fast, and built to last far longer than store-bought kits.',
    },
    overview: {
      eyebrow: 'Overview',
      heading: 'Visible results, the same day.',
      body:
        'ZOOM!\u2122 whitening uses a professional-strength gel activated by a specialized light to break down stains quickly and evenly across your smile. Unlike take-home kits, results are consistent, controlled, and visible immediately — most patients leave several shades brighter after a single appointment.',
      features: [
        'In-office treatment in about 60 minutes',
        'Even, consistent results across all teeth',
        'Formulated for sensitive teeth on request',
        'Take-home maintenance kit included',
      ],
      image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1200&q=80',
    },
    process: {
      eyebrow: 'The Process',
      heading: 'Bright in under an hour.',
      subtitle: 'A simple, relaxing appointment with results you\u2019ll notice before you leave the chair.',
      steps: [
        { title: 'Shade Check', body: 'We assess your current shade and discuss what results are realistic for your teeth.' },
        { title: 'Protective Prep', body: 'Gums are shielded and a professional-strength whitening gel is applied.' },
        { title: 'Light Activation', body: 'The ZOOM!\u2122 light activates the gel in short cycles to lift stains evenly.' },
        { title: 'Reveal & Care Kit', body: 'See your new shade immediately, and take home a kit to maintain your results.' },
      ],
    },
    benefits: {
      eyebrow: 'Why Choose Us',
      heading: 'Fast, safe, and noticeably brighter.',
      items: [
        {
          title: 'One-Visit Results',
          body: 'No weeks of trays or strips — most patients see a dramatic difference in a single appointment.',
          paths: ['M6 38 A18 18 0 0 1 42 38', 'M24 3 L24 11 M14 7 L17 13 M34 7 L31 13 M8 15 L13 18 M40 15 L35 18'],
        },
        {
          title: 'Sensitivity-Friendly',
          body: 'Formulations and timing can be adjusted for patients with sensitive teeth and gums.',
          paths: ['M6 38 A18 18 0 0 1 42 38', 'M24 12 L24 33 M18 33 L30 33 M20 18 L28 18 M20 23 L28 23'],
        },
        {
          title: 'Results That Last',
          body: 'With the included care kit and simple habits, your brighter smile stays brighter for longer.',
          paths: ['M6 38 A18 18 0 0 1 42 38', 'M16 22 L24 30 L34 16'],
        },
      ],
    },
    gallery: {
      eyebrow: 'Brighter Smiles',
      heading: 'See the difference, instantly.',
      images: [
        'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=900&q=80',
        'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=900&q=80',
        'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=80',
        'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&q=80',
      ],
    },
    faq: {
      eyebrow: 'Questions',
      heading: 'Good to know.',
      items: [
        { q: 'How much brighter will my teeth get?', a: 'Most patients see an improvement of several shades after one session, though results vary depending on starting shade and the cause of staining.' },
        { q: 'Is ZOOM!\u2122 safe for my enamel?', a: 'Yes — it\u2019s a professional, well-studied treatment performed under supervision, with protective measures for your gums throughout.' },
        { q: 'How long do results last?', a: 'With the take-home maintenance kit and mindful habits around staining foods and drinks, results commonly last a year or more.' },
        { q: 'Will it work on crowns or veneers?', a: 'Whitening only affects natural enamel, so existing crowns or veneers won\u2019t change shade — we\u2019ll talk through options if this applies to you.' },
      ],
    },
    stats: {
      eyebrow: 'By The Numbers',
      heading: 'Brighter, in about an hour.',
      items: [
        { value: 60, suffix: ' min', label: 'Average appointment length' },
        { value: 8, suffix: ' shades', label: 'Typical improvement in one visit' },
        { value: 1, suffix: ' visit', label: 'To see dramatic results' },
        { value: 94, suffix: '%', label: 'Patients satisfied with results' },
      ],
    },
    testimonials: {
      eyebrow: 'Patient Stories',
      heading: 'Brighter smiles, real reactions.',
      items: [
        {
          quote: 'I could see the difference immediately in the mirror. My teeth look years younger and it only took about an hour.',
          name: 'Megan F.',
          context: 'ZOOM Whitening patient',
        },
        {
          quote: 'I have sensitive teeth and was worried, but they adjusted everything so it was completely comfortable. Worth it.',
          name: 'Aaron D.',
          context: 'First-time whitening patient',
        },
        {
          quote: 'Tried whitening strips for months with barely any change. One visit here did more than all of that combined.',
          name: 'Renee S.',
          context: 'Patient since 2022',
        },
      ],
    },
    comparison: {
      eyebrow: 'The Difference',
      heading: 'Professional whitening vs. store kits.',
      subtitle: 'Not all whitening is created equal.',
      without: {
        title: 'Store-Bought Kits',
        points: [
          'Weeks of inconsistent, uneven results',
          'One-size-fits-all strength, regardless of sensitivity',
          'No professional guidance or supervision',
          'Results often fade quickly',
        ],
      },
      withUs: {
        title: 'ZOOM!\u2122 With Us',
        points: [
          'Visible results in about an hour',
          'Strength tailored to your comfort level',
          'Performed and monitored by our team',
          'Take-home kit to maintain your results',
        ],
      },
    },
    cta: {
      title: 'Ready for a smile',
      highlight: 'that lights up the room?',
      subtitle: 'Book a ZOOM!\u2122 whitening session and leave with a visibly brighter smile the same day.',
      buttonText: 'Book Your Whitening',
      buttonHref: '/contact',
    },
  },
  {
    slug: 'emergency-dentistry',
    name: 'Emergency Dentistry',
    hero: {
      eyebrow: 'Emergency Dentistry',
      title: 'Urgent care,',
      highlight: 'right when you need it.',
      description:
        'Dental emergencies can\u2019t wait. We offer prompt same-day appointments for severe pain, broken teeth, injuries, and other urgent dental concerns.',
    },
    overview: {
      eyebrow: 'Overview',
      heading: 'Fast relief when it matters most.',
      body:
        'Whether it\u2019s a sudden toothache, a knocked-out tooth, or a broken crown, dental emergencies are stressful — and waiting makes them worse. We keep space in our schedule for urgent cases so you can be seen quickly, get an accurate diagnosis, and start feeling better the same day.',
      features: [
        'Same-day emergency appointments',
        'Pain relief & infection management',
        'Repairs for chipped, cracked, or broken teeth',
        'Re-implantation care for knocked-out teeth',
      ],
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1200&q=80',
    },
    process: {
      eyebrow: 'What To Expect',
      heading: 'Quick to see you, careful with you.',
      subtitle: 'When something goes wrong, here\u2019s how we get you out of pain fast.',
      steps: [
        { title: 'Call Us First', body: 'Tell us what\u2019s happening — we\u2019ll guide you on immediate steps and get you scheduled right away.' },
        { title: 'Same-Day Visit', body: 'We prioritize urgent cases so you\u2019re seen quickly, often the same day you call.' },
        { title: 'Diagnosis & Relief', body: 'A focused exam identifies the issue, and we address pain or bleeding immediately.' },
        { title: 'Treatment Plan', body: 'A clear plan for any follow-up care, with honest guidance on what\u2019s urgent vs. what can wait.' },
      ],
    },
    benefits: {
      eyebrow: 'Why Choose Us',
      heading: 'Calm, capable care under pressure.',
      items: [
        {
          title: 'Same-Day Availability',
          body: 'We hold space in our daily schedule specifically for urgent dental emergencies.',
          paths: ['M6 38 A18 18 0 0 1 42 38', 'M24 8 v8 l6 4 M24 4 a14 14 0 1 0 0.01 0'],
        },
        {
          title: 'Clear Phone Guidance',
          body: 'Call before you arrive — we\u2019ll walk you through what to do in the meantime.',
          paths: ['M6 38 A18 18 0 0 1 42 38', 'M6 8 a2 2 0 0 1 2-2 h2.3 a1 1 0 0 1 1 .8 l.9 3.6 a1 1 0 0 1-.3 1 l-1.4 1.4 a12 12 0 0 0 5.7 5.7 l1.4-1.4 a1 1 0 0 1 1-.3 l3.6.9 a1 1 0 0 1 .8 1 V21 a2 2 0 0 1-2 2 h-1 C13.2 23 3 12.8 3 9 V8z'],
        },
        {
          title: 'Built-In Follow-Up',
          body: 'Once the emergency is handled, we map out any longer-term care so it doesn\u2019t happen again.',
          paths: ['M6 38 A18 18 0 0 1 42 38', 'M16 22 L24 30 L34 16'],
        },
      ],
    },
    gallery: {
      eyebrow: 'Inside Our Office',
      heading: 'Ready when you need us.',
      images: [
        'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=900&q=80',
        'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=900&q=80',
        'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=900&q=80',
        'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=900&q=80',
      ],
    },
    faq: {
      eyebrow: 'Questions',
      heading: 'Good to know.',
      items: [
        { q: 'What counts as a dental emergency?', a: 'Severe tooth pain, a knocked-out or badly broken tooth, uncontrolled bleeding, or a swollen jaw are all reasons to call us right away.' },
        { q: 'What should I do with a knocked-out tooth?', a: 'Handle it by the crown (not the root), rinse gently if dirty, and try to keep it moist — then call us immediately for the best chance of saving it.' },
        { q: 'Can you see me the same day I call?', a: 'In most cases, yes. We keep space in our schedule specifically for urgent cases and will prioritize getting you in quickly.' },
        { q: 'What if it happens outside office hours?', a: 'Call our office line — you\u2019ll get guidance on next steps and, where needed, information on after-hours care.' },
      ],
    },
    stats: {
      eyebrow: 'By The Numbers',
      heading: 'Help, when you need it most.',
      items: [
        { value: 1, suffix: ' call', label: 'Away from same-day care' },
        { value: 92, suffix: '%', label: 'Emergencies seen same day' },
        { value: 15, suffix: ' min', label: 'Average time to pain relief steps' },
        { value: 365, suffix: ' days', label: 'A year we\u2019re reachable by phone' },
      ],
    },
    testimonials: {
      eyebrow: 'Patient Stories',
      heading: 'When it counted most.',
      items: [
        {
          quote: 'My son chipped his tooth at practice and they got us in within the hour. Calm, kind, and fixed it the same day.',
          name: 'Karen V.',
          context: 'Emergency patient',
        },
        {
          quote: 'I called in agony on a Tuesday morning and was sitting in the chair by lunchtime. Can\u2019t thank them enough.',
          name: 'Eric N.',
          context: 'Severe toothache',
        },
        {
          quote: 'They talked me through what to do with my knocked-out tooth over the phone, then saved it once I got there. Incredible.',
          name: 'Sophie A.',
          context: 'Dental injury',
        },
      ],
    },
    comparison: {
      eyebrow: 'The Difference',
      heading: 'Emergencies, handled right.',
      subtitle: 'When something goes wrong, every minute and every detail matters.',
      without: {
        title: 'Typical Emergency Experience',
        points: [
          'Days-long wait for an available appointment',
          'No guidance on what to do in the meantime',
          'Rushed visit focused only on the immediate issue',
          'Little follow-up after the emergency',
        ],
      },
      withUs: {
        title: 'An Emergency With Us',
        points: [
          'Same-day appointments held for urgent cases',
          'Phone guidance the moment you call',
          'Focused care plus a plan for what\u2019s next',
          'Follow-up to prevent it happening again',
        ],
      },
    },
    cta: {
      title: 'Dental emergency?',
      highlight: 'Call us right now.',
      subtitle: 'Same-day appointments are held for urgent cases \u2014 don\u2019t wait through the pain.',
      buttonText: 'Request Emergency Visit',
      buttonHref: '/contact',
    },
  },
  {
    slug: 'clear-aligners',
    name: 'Clear Aligners & Orthodontics',
    hero: {
      eyebrow: 'Clear Aligners & Orthodontics',
      title: 'Straighter teeth,',
      highlight: 'quietly.',
      description:
        'Clear aligner therapy that gently shifts your smile into alignment — virtually invisible, removable, and built around your life and schedule.',
    },
    overview: {
      eyebrow: 'Overview',
      heading: 'A straighter smile, without the metal.',
      body:
        'Crooked or misaligned teeth can affect more than your smile — they impact bite, cleaning, and long-term oral health. Clear aligners gradually and gently move teeth into place using a series of custom, virtually invisible trays, with regular check-ins to keep your treatment on track.',
      features: [
        'Custom-fitted clear aligner series',
        'Virtually invisible, removable trays',
        'Regular progress check-ins',
        'Retainers included after treatment',
      ],
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80',
    },
    process: {
      eyebrow: 'The Process',
      heading: 'A gradual shift, carefully tracked.',
      subtitle: 'From first scan to final smile, here\u2019s how aligner treatment unfolds.',
      steps: [
        { title: 'Digital Scan', body: 'A quick, comfortable digital scan maps your teeth and creates your treatment plan.' },
        { title: 'Your Aligner Series', body: 'A custom set of clear aligners is created, each worn for about two weeks before moving to the next.' },
        { title: 'Progress Check-Ins', body: 'Periodic visits to confirm everything is tracking as planned and make adjustments if needed.' },
        { title: 'Retention', body: 'Once aligned, a custom retainer helps keep your new smile in place long-term.' },
      ],
    },
    benefits: {
      eyebrow: 'Why Choose Us',
      heading: 'Straightening that fits your life.',
      items: [
        {
          title: 'Virtually Invisible',
          body: 'Clear aligners let you straighten your teeth without it being the first thing people notice.',
          paths: ['M6 38 A18 18 0 0 1 42 38', 'M16 22 L24 30 L34 16'],
        },
        {
          title: 'Removable & Flexible',
          body: 'Eat, brush, and floss normally — aligners come out when you need them to.',
          paths: ['M6 38 A18 18 0 0 1 42 38', 'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6'],
        },
        {
          title: 'Tracked Every Step',
          body: 'Regular check-ins mean your progress is monitored and adjusted as needed throughout treatment.',
          paths: ['M6 38 A18 18 0 0 1 42 38', 'M24 12 v8 l6 4 M24 4 a14 14 0 1 0 0.01 0'],
        },
      ],
    },
    gallery: {
      eyebrow: 'Smile Journeys',
      heading: 'Small shifts, big change.',
      images: [
        'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=80',
        'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=900&q=80',
        'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=900&q=80',
        'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&q=80',
      ],
    },
    faq: {
      eyebrow: 'Questions',
      heading: 'Good to know.',
      items: [
        { q: 'How long does aligner treatment take?', a: 'Treatment length varies by case, but many patients complete their series in several months to about a year, with regular check-ins along the way.' },
        { q: 'Do clear aligners hurt?', a: 'You may feel mild pressure for a day or two with each new aligner, which is a sign they\u2019re working \u2014 it\u2019s typically much gentler than traditional braces.' },
        { q: 'How often do I need to wear them?', a: 'For best results, aligners should be worn most of the day and night, removed mainly for eating, drinking, and brushing.' },
        { q: 'Are clear aligners right for everyone?', a: 'They work well for many common alignment issues. During your consultation, we\u2019ll assess your bite and let you know honestly if aligners are the right fit.' },
      ],
    },
    stats: {
      eyebrow: 'By The Numbers',
      heading: 'Straighter smiles, on track.',
      items: [
        { value: 450, suffix: '+', label: 'Aligner journeys completed' },
        { value: 6, suffix: '\u201312 mo', label: 'Typical treatment length' },
        { value: 22, suffix: 'hr', label: 'Recommended daily wear' },
        { value: 95, suffix: '%', label: 'Patients pleased with their results' },
      ],
    },
    testimonials: {
      eyebrow: 'Patient Stories',
      heading: 'Quiet progress, visible results.',
      items: [
        {
          quote: 'Nobody at work even noticed I was wearing aligners until I told them. The check-ins kept me motivated and on track.',
          name: 'Natalie P.',
          context: 'Clear aligner patient',
        },
        {
          quote: 'I was self-conscious about braces as an adult. This felt discreet and easy to fit around my schedule.',
          name: 'Brian K.',
          context: 'Patient since 2023',
        },
        {
          quote: 'My teeth had shifted since my teenage braces. A shorter aligner series fixed it without anyone really noticing.',
          name: 'Diane O.',
          context: 'Orthodontic refresh',
        },
      ],
    },
    comparison: {
      eyebrow: 'The Difference',
      heading: 'Aligners vs. traditional braces.',
      subtitle: 'Both can straighten teeth \u2014 the experience along the way is very different.',
      without: {
        title: 'Traditional Braces',
        points: [
          'Visible metal brackets and wires',
          'Difficult to clean around brackets',
          'Dietary restrictions throughout treatment',
          'Frequent in-office adjustments',
        ],
      },
      withUs: {
        title: 'Clear Aligners With Us',
        points: [
          'Virtually invisible, custom-fit trays',
          'Removable for normal brushing and flossing',
          'No food restrictions \u2014 just remove to eat',
          'Fewer visits, tracked digitally',
        ],
      },
    },
    cta: {
      title: 'Ready to start',
      highlight: 'your smile journey?',
      subtitle: 'Book a consultation and find out if clear aligners are the right fit for you.',
      buttonText: 'Book a Consultation',
      buttonHref: '/contact',
    },
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}