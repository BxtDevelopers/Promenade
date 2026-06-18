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


export const SERVICES = [

  // ─────────────────────────────────────────────────────────────────────────
  // 1. GENERAL & FAMILY DENTISTRY
  // ─────────────────────────────────────────────────────────────────────────
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
        'Regular checkups and cleanings are the simplest way to avoid bigger problems down the road. Dr. Verma combines thorough exams with gentle, modern techniques so visits feel quick, comfortable, and genuinely informative — for kids on their first visit and adults who haven\'t been in years.',
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
        { title: 'Welcome & History', body: 'A short, friendly check-in where Dr. Verma personally gets to know you and your dental history — no rushing, no handoffs.' },
        { title: 'Full Exam', body: 'Digital X-rays and a thorough exam to catch issues early, before they become painful or costly.' },
        { title: 'Gentle Cleaning', body: 'A comfortable professional cleaning that leaves your teeth feeling genuinely fresh.' },
        { title: 'Your Plan', body: 'A clear, honest rundown of what Dr. Verma found and what — if anything — needs attention next, explained in plain language.' },
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
          title: 'You Always See Dr. Verma',
          body: 'Every visit, same dentist. Dr. Verma knows your history and remains your primary focus throughout every appointment.',
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
        { q: 'How often should I come in for a checkup?', a: 'Most patients benefit from a checkup and cleaning every six months, though some with gum concerns may be scheduled more frequently. Dr. Verma will advise what cadence makes sense for you.' },
        { q: 'Do you see young children?', a: 'Yes — we welcome patients from their very first tooth through adulthood and tailor each visit to the child\'s comfort level.' },
        { q: 'Will I always see Dr. Verma?', a: 'Absolutely. At Promenade Dental you will always see Dr. Verma — not a rotating associate. She is your primary focus throughout every appointment.' },
        { q: 'What if I haven\'t seen a dentist in years?', a: 'That\'s completely fine. Dr. Verma will start with a relaxed, judgment-free exam and build a plan from there, at your pace.' },
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
        { quote: 'My kids actually look forward to going to the dentist now. Dr. Verma and the whole team are patient and kind, even with my nervous five-year-old.', name: 'Sarah M.', context: 'Patient since 2021' },
        { quote: 'I hadn\'t been to a dentist in years and was dreading it. Dr. Verma never made me feel judged — just helped me get back on track with a clear plan.', name: 'David R.', context: 'New patient' },
        { quote: 'Quick, thorough, and Dr. Verma actually explains what she\'s doing and why. Booking is easy and she always runs on time.', name: 'Priya K.', context: 'Patient since 2019' },
      ],
    },
    comparison: {
      eyebrow: 'The Difference',
      heading: 'Dentistry, done differently.',
      subtitle: 'A few small changes make a big difference in how a visit feels.',
      without: {
        title: 'Typical Dental Visit',
        points: ['Long waits with little communication', 'Rushed exams with no time for questions', 'Surprise costs after treatment', 'A new dentist every visit'],
      },
      withUs: {
        title: 'A Visit With Dr. Verma',
        points: ['Seen close to your appointment time', 'Unhurried exams — questions always welcome', 'Clear pricing explained before treatment', 'Same dentist, every time — she knows your history'],
      },
    },
    cta: {
      title: 'Ready for a checkup',
      highlight: 'that feels easy?',
      subtitle: 'Book a routine visit for yourself or your family — same-week appointments with Dr. Verma are usually available.',
      buttonText: 'Book an Appointment',
      buttonHref: '/contact',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 2. COSMETIC DENTISTRY
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'cosmetic-dentistry',
    name: 'Cosmetic Dentistry',
    hero: {
      eyebrow: 'Cosmetic Dentistry',
      title: 'The smile you\'ve always',
      highlight: 'imagined.',
      description:
        'From subtle touch-ups to complete smile makeovers — Dr. Verma combines clinical precision with a fine-arts eye to craft results that look genuinely natural and feel completely yours.',
    },
    overview: {
      eyebrow: 'Overview',
      heading: 'Artistry meets precision dentistry.',
      body:
        'A beautiful smile is often the first thing people notice — and one of the most powerful boosts to confidence. Dr. Verma\'s background in both dentistry and design means every cosmetic treatment is planned with both health and aesthetics in mind, so your results look as good as they feel.',
      features: [
        'Porcelain veneers & composite bonding',
        'ZOOM! in-office teeth whitening',
        'Smile design & full smile makeovers',
        'Crown & bridge restorations',
      ],
      image: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=1200&q=80',
    },
    process: {
      eyebrow: 'What To Expect',
      heading: 'Your smile, designed together.',
      subtitle: 'Every cosmetic case starts with a conversation — not a sales pitch.',
      steps: [
        { title: 'Smile Consultation', body: 'Dr. Verma listens to what you want, reviews your dental health, and maps out realistic options — no pressure, no upselling.' },
        { title: 'Treatment Planning', body: 'A detailed plan with timeline, costs, and expected outcomes so you know exactly what to expect before committing to anything.' },
        { title: 'Precision Treatment', body: 'Each procedure is performed with meticulous care, using materials matched to your natural tooth shade and anatomy.' },
        { title: 'Final Reveal', body: 'A final check to ensure fit, function, and aesthetics are all exactly right before you leave.' },
      ],
    },
    benefits: {
      eyebrow: 'Why Choose Us',
      heading: 'Cosmetic care with a conscience.',
      items: [
        {
          title: 'Trained Artistic Eye',
          body: 'Dr. Verma\'s design background means your cosmetic work is shaped by proportion and aesthetics, not just clinical protocols.',
          paths: ['M6 38 A18 18 0 0 1 42 38', 'M14 24 Q24 14 34 24 Q24 34 14 24'],
        },
        {
          title: 'Conservative Approach',
          body: 'Dr. Verma recommends only what genuinely improves your smile — preserving as much natural tooth structure as possible.',
          paths: ['M6 38 A18 18 0 0 1 42 38', 'M18 20 l4 4 l8 -8'],
        },
        {
          title: 'Seamless, Natural Results',
          body: 'Every restoration is shade-matched and contoured to blend with your surrounding teeth — no obvious "dental work" look.',
          paths: ['M6 38 A18 18 0 0 1 42 38', 'M16 24 h16 M24 16 v16'],
        },
      ],
    },
    gallery: {
      eyebrow: 'Inside Our Office',
      heading: 'A calm space, built for ease.',
      images: [
        'https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=900&q=80',
        'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=900&q=80',
        'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=900&q=80',
        'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=900&q=80',
      ],
    },
    faq: {
      eyebrow: 'Questions',
      heading: 'Good to know.',
      items: [
        { q: 'How do I know which cosmetic treatment is right for me?', a: 'Dr. Verma will assess your teeth and discuss your goals at a no-obligation consultation, then recommend the most conservative option that achieves the result you want.' },
        { q: 'Are cosmetic procedures covered by insurance?', a: 'Most cosmetic treatments are elective and not covered by insurance. Dr. Verma\'s team will walk you through costs transparently before any treatment begins.' },
        { q: 'How long do veneers or crowns last?', a: 'With proper care, porcelain veneers typically last 10–15 years and crowns 15+ years. Dr. Verma uses high-quality materials and matches every restoration to your bite for longevity.' },
        { q: 'Will my results look natural?', a: 'Yes — Dr. Verma takes great care to shade-match and contour every restoration so it blends naturally. "Done" should never look "dental."' },
      ],
    },
    stats: {
      eyebrow: 'By The Numbers',
      heading: 'Smiles transformed in Chandler.',
      items: [
        { value: 12, suffix: '+', label: 'Years of cosmetic experience' },
        { value: 500, suffix: '+', label: 'Smile makeovers completed' },
        { value: 98, suffix: '%', label: 'Patient satisfaction rate' },
        { value: 1, suffix: ' visit', label: 'ZOOM! whitening turnaround' },
      ],
    },
    testimonials: {
      eyebrow: 'Patient Stories',
      heading: 'Smiles that speak for themselves.',
      items: [
        { quote: 'I\'ve wanted veneers for years but was nervous. Dr. Verma walked me through every step and the result is beyond what I imagined — completely natural looking.', name: 'Jennifer L.', context: 'Veneer patient' },
        { quote: 'The ZOOM! whitening was quick, comfortable, and the difference was dramatic. I was amazed by how much brighter my smile was in just one visit.', name: 'Marcus T.', context: 'Whitening patient' },
        { quote: 'Dr. Verma is both a dentist and an artist. She redesigned my whole smile and I finally feel confident enough to smile in photos.', name: 'Alanna B.', context: 'Smile makeover patient' },
      ],
    },
    comparison: {
      eyebrow: 'The Difference',
      heading: 'Cosmetic dentistry, done with care.',
      subtitle: 'Not all cosmetic dentistry is created equal.',
      without: {
        title: 'Typical Cosmetic Practice',
        points: ['Cookie-cutter results that look overdone', 'Aggressive prep that removes healthy tooth', 'Upfront pressure to commit to treatment', 'One-size pricing with no transparency'],
      },
      withUs: {
        title: 'Cosmetic Care With Dr. Verma',
        points: ['Natural-looking results tailored to your face', 'Conservative prep — healthy structure preserved', 'No-pressure consultation before any commitment', 'Clear, itemized costs explained in advance'],
      },
    },
    cta: {
      title: 'Ready to love',
      highlight: 'your smile?',
      subtitle: 'Book a cosmetic consultation with Dr. Verma — same-week appointments are usually available.',
      buttonText: 'Book a Consultation',
      buttonHref: '/contact',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 3. DENTAL IMPLANTS
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'dental-implants',
    name: 'Dental Implants',
    hero: {
      eyebrow: 'Dental Implants',
      title: 'A permanent tooth that',
      highlight: 'feels like your own.',
      description:
        'Dental implants are the gold standard for replacing a missing tooth — a titanium root and a custom crown that look, feel, and function just like natural teeth for decades to come.',
    },
    overview: {
      eyebrow: 'Overview',
      heading: 'The closest thing to a natural tooth.',
      body:
        'Unlike bridges or dentures, a dental implant replaces the entire tooth — root and all. The titanium post bonds with your jaw over time, preventing bone loss and keeping surrounding teeth stable. Dr. Verma places and restores implants in-house, giving you continuity of care from placement through the final crown.',
      features: [
        'Single-tooth & multiple-tooth implants',
        'Implant-supported crowns & bridges',
        'Implant-supported dentures',
        'Bone preservation after tooth loss',
      ],
      image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1200&q=80',
    },
    process: {
      eyebrow: 'What To Expect',
      heading: 'A clear, step-by-step process.',
      subtitle: 'Implant treatment is a journey — Dr. Verma will guide you through every stage.',
      steps: [
        { title: 'Consultation & Imaging', body: 'A full assessment including X-rays to evaluate bone density and determine whether you\'re a good candidate for implants.' },
        { title: 'Implant Placement', body: 'The titanium post is carefully placed into the jawbone under local anesthesia. Most patients are surprised by how comfortable the procedure is.' },
        { title: 'Healing Period', body: 'Over 3–6 months, the implant fuses with your bone (osseointegration). A temporary restoration keeps your smile intact during this time.' },
        { title: 'Crown Placement', body: 'Once healed, a custom-made porcelain crown is attached — matched to your natural teeth and built to last for decades.' },
      ],
    },
    benefits: {
      eyebrow: 'Why Choose Implants',
      heading: 'Built to last a lifetime.',
      items: [
        {
          title: 'Looks & Feels Natural',
          body: 'Implant-supported crowns are indistinguishable from natural teeth — in feel, function, and appearance.',
          paths: ['M6 38 A18 18 0 0 1 42 38', 'M18 20 l4 4 l8 -8'],
        },
        {
          title: 'Prevents Bone Loss',
          body: 'The implant root stimulates your jawbone just like a natural tooth, preventing the bone resorption that follows tooth loss.',
          paths: ['M6 38 A18 18 0 0 1 42 38', 'M24 12 v20 M14 24 h20'],
        },
        {
          title: 'No Impact on Adjacent Teeth',
          body: 'Unlike a traditional bridge, an implant doesn\'t require grinding down the healthy teeth on either side.',
          paths: ['M6 38 A18 18 0 0 1 42 38', 'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6'],
        },
      ],
    },
    gallery: {
      eyebrow: 'Inside Our Office',
      heading: 'A calm space, built for ease.',
      images: [
        'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=80',
        'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=900&q=80',
        'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=900&q=80',
        'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=900&q=80',
      ],
    },
    faq: {
      eyebrow: 'Questions',
      heading: 'Good to know.',
      items: [
        { q: 'Am I a good candidate for implants?', a: 'Most adults with good general health and adequate bone density are candidates. Dr. Verma will evaluate your bone structure and overall oral health at your consultation.' },
        { q: 'Is the implant procedure painful?', a: 'Most patients report the procedure is more comfortable than expected. Local anesthesia is used throughout, and any post-procedure soreness is typically managed with over-the-counter pain relief.' },
        { q: 'How long do implants last?', a: 'With proper care, implants can last 20–30 years or a lifetime. The crown itself may need replacement after 15+ years due to normal wear.' },
        { q: 'Does insurance cover implants?', a: 'Coverage varies by plan. Some PPO plans cover a portion of the implant or crown. Dr. Verma\'s team will review your specific benefits before treatment.' },
      ],
    },
    stats: {
      eyebrow: 'By The Numbers',
      heading: 'Implants that stand the test of time.',
      items: [
        { value: 95, suffix: '%+', label: '10-year implant success rate' },
        { value: 20, suffix: '+', label: 'Years implants can last with care' },
        { value: 3, suffix: 'M+', label: 'Implants placed in the US each year' },
        { value: 1, suffix: ' office', label: 'Placement & restoration under one roof' },
      ],
    },
    testimonials: {
      eyebrow: 'Patient Stories',
      heading: 'What patients are saying.',
      items: [
        { quote: 'I lost a front tooth and was devastated. Dr. Verma\'s implant looks and feels so natural — I genuinely forget it\'s not my real tooth.', name: 'Robert H.', context: 'Single implant patient' },
        { quote: 'The process took a few months but Dr. Verma explained every step. Worth every bit of the wait — I can eat and smile normally again.', name: 'Carol F.', context: 'Implant patient' },
        { quote: 'Dr. Verma does excellent work at reasonable prices. The implant crown she made is perfect — completely indistinguishable from my other teeth.', name: 'Deborah S.', context: 'Long-term patient' },
      ],
    },
    cta: {
      title: 'Missing a tooth?',
      highlight: 'Let\'s fix that.',
      subtitle: 'Book an implant consultation with Dr. Verma — she\'ll assess your options and walk you through the full process at no pressure.',
      buttonText: 'Book a Consultation',
      buttonHref: '/contact',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 4. CROWNS & BRIDGES
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'crowns-bridges',
    name: 'Crowns & Bridges',
    hero: {
      eyebrow: 'Crowns & Bridges',
      title: 'Restore strength.',
      highlight: 'Reclaim your smile.',
      description:
        'Custom-crafted crowns and bridges that repair damaged teeth and fill gaps — matched precisely to your bite and natural tooth shade so the result is both functional and seamless.',
    },
    overview: {
      eyebrow: 'Overview',
      heading: 'Strong, beautiful, long-lasting restorations.',
      body:
        'A crown completely caps a damaged or weakened tooth, restoring its shape, strength, and appearance. A bridge uses crowns on either side of a gap to anchor a prosthetic tooth in between. Dr. Verma customizes every restoration for fit, function, and aesthetics — so it blends naturally with your smile.',
      features: [
        'Porcelain & ceramic crowns',
        'Implant-supported crowns',
        'Three-unit & multi-unit bridges',
        'Same-day temporaries while your crown is fabricated',
      ],
      image: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=1200&q=80',
    },
    process: {
      eyebrow: 'What To Expect',
      heading: 'Two visits. A lasting result.',
      subtitle: 'Crown and bridge treatment is straightforward — typically completed in two comfortable appointments.',
      steps: [
        { title: 'Exam & Preparation', body: 'Dr. Verma assesses the tooth, removes any decay, and shapes it to receive the crown. Digital impressions are taken — no messy putty.' },
        { title: 'Temporary Crown', body: 'A well-fitting temporary is placed the same day so your tooth is protected and looks normal while your permanent crown is being made.' },
        { title: 'Custom Fabrication', body: 'Your crown or bridge is crafted at a dental lab from high-quality porcelain, matched precisely to your surrounding teeth.' },
        { title: 'Permanent Placement', body: 'At your second visit, Dr. Verma checks the fit and shade before cementing the final restoration into place.' },
      ],
    },
    benefits: {
      eyebrow: 'Why Choose Us',
      heading: 'Restorations that last.',
      items: [
        {
          title: 'Precision Shade Matching',
          body: 'Every crown and bridge is color-matched to blend with your natural teeth — no grey margins, no "fake tooth" look.',
          paths: ['M6 38 A18 18 0 0 1 42 38', 'M14 24 Q24 14 34 24 Q24 34 14 24'],
        },
        {
          title: 'Durable Materials',
          body: 'We use high-strength porcelain and ceramic that resist chipping and staining, giving you a restoration built to handle everyday use.',
          paths: ['M6 38 A18 18 0 0 1 42 38', 'M24 12 v20 M14 24 h20'],
        },
        {
          title: 'Comfortable Two-Visit Process',
          body: 'Most crown and bridge cases wrap up in two appointments, with a same-day temporary so you\'re never without a tooth in between.',
          paths: ['M6 38 A18 18 0 0 1 42 38', 'M18 20 l4 4 l8 -8'],
        },
      ],
    },
    gallery: {
      eyebrow: 'Inside Our Office',
      heading: 'A calm space, built for ease.',
      images: [
        'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=80',
        'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=900&q=80',
        'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=900&q=80',
        'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=900&q=80',
      ],
    },
    faq: {
      eyebrow: 'Questions',
      heading: 'Good to know.',
      items: [
        { q: 'How long does a crown last?', a: 'With proper care, a well-made porcelain crown typically lasts 15 years or more. Avoiding grinding and keeping up with regular cleanings maximizes longevity.' },
        { q: 'Does getting a crown hurt?', a: 'The preparation is done under local anesthesia, so the procedure itself is comfortable. Some sensitivity around the gum line is normal in the days after, but it settles quickly.' },
        { q: 'Can a bridge replace an implant?', a: 'A bridge is a faster, non-surgical option but requires reshaping the teeth on either side of the gap. Dr. Verma will help you weigh the pros and cons of both at your consultation.' },
        { q: 'Will my crown look natural?', a: 'Yes — Dr. Verma takes detailed shade measurements to ensure your crown blends with your surrounding teeth. Most patients tell us no one notices the difference.' },
      ],
    },
    stats: {
      eyebrow: 'By The Numbers',
      heading: 'Restorations Chandler trusts.',
      items: [
        { value: 1000, suffix: '+', label: 'Crowns & bridges placed' },
        { value: 15, suffix: '+', label: 'Years a quality crown can last' },
        { value: 2, suffix: ' visits', label: 'Typical crown completion time' },
        { value: 12, suffix: '+', label: 'Years of restorative experience' },
      ],
    },
    testimonials: {
      eyebrow: 'Patient Stories',
      heading: 'What patients are saying.',
      items: [
        { quote: 'Dr. Verma does excellent work. The crown she made matches my teeth so perfectly — I\'ve had compliments on my smile and no one knows it\'s a crown.', name: 'Joyce F.', context: 'Crown patient' },
        { quote: 'I was nervous about getting a bridge but Dr. Verma walked me through it all. Two appointments, minimal discomfort, and the result is fantastic.', name: 'Roy R.', context: 'Bridge patient' },
        { quote: 'Very gentle and thorough. The crown fit perfectly the first time and I didn\'t need any adjustments. I\'m impressed.', name: 'Sue Z.', context: 'Patient since 2018' },
      ],
    },
    cta: {
      title: 'Damaged tooth?',
      highlight: 'We can fix that.',
      subtitle: 'Book an exam with Dr. Verma — same-week appointments are usually available in Chandler.',
      buttonText: 'Book an Appointment',
      buttonHref: '/contact',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 5. ZOOM! TEETH WHITENING
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'teeth-whitening',
    name: 'ZOOM! Teeth Whitening',
    hero: {
      eyebrow: 'ZOOM! Teeth Whitening',
      title: 'Dramatically whiter teeth.',
      highlight: 'One visit.',
      description:
        'Philips ZOOM! is the gold-standard in-office whitening system — up to 8 shades brighter in a single 90-minute appointment, with results that last.',
    },
    overview: {
      eyebrow: 'Overview',
      heading: 'Professional whitening that actually works.',
      body:
        'Store-bought strips can only do so much. ZOOM! uses a proprietary hydrogen peroxide gel activated by a specially designed LED light to break down deep stains caused by coffee, wine, age, and lifestyle — safely, quickly, and under Dr. Verma\'s supervision for a comfortable experience.',
      features: [
        'Up to 8 shades whiter in one visit',
        'Philips ZOOM! WhiteSpeed LED system',
        'Custom take-home trays included for touch-ups',
        'Safe for enamel when professionally administered',
      ],
      image: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=1200&q=80',
    },
    process: {
      eyebrow: 'What To Expect',
      heading: 'Bright results in 90 minutes.',
      subtitle: 'In-office ZOOM! is one of the most straightforward treatments in dentistry.',
      steps: [
        { title: 'Pre-Treatment Check', body: 'Dr. Verma checks your teeth and gums to ensure you\'re a good candidate and your enamel is healthy enough for whitening.' },
        { title: 'Prep & Protection', body: 'Your gums and lips are carefully covered, leaving only the teeth exposed. Takes just a few minutes.' },
        { title: 'ZOOM! Application', body: 'The whitening gel is applied and activated by the ZOOM! LED light in three 15-minute rounds — most patients watch a show or relax.' },
        { title: 'Take-Home Trays', body: 'Custom-fit whitening trays are provided so you can maintain and boost your results from home on your schedule.' },
      ],
    },
    benefits: {
      eyebrow: 'Why ZOOM!',
      heading: 'The fastest way to a whiter smile.',
      items: [
        {
          title: 'Up to 8 Shades Whiter',
          body: 'ZOOM! consistently outperforms at-home strips and trays, delivering dramatic, even whitening across all visible teeth.',
          paths: ['M6 38 A18 18 0 0 1 42 38', 'M18 20 l4 4 l8 -8'],
        },
        {
          title: 'Done in One Visit',
          body: 'Walk in with stained teeth and leave with a noticeably brighter smile — no waiting weeks for gradual results.',
          paths: ['M6 38 A18 18 0 0 1 42 38', 'M24 12 L24 30 M14 22 L34 22'],
        },
        {
          title: 'Supervised & Safe',
          body: 'Professional-grade whitening under Dr. Verma\'s care means optimal results with protection for your gums and enamel throughout.',
          paths: ['M6 38 A18 18 0 0 1 42 38', 'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6'],
        },
      ],
    },
    gallery: {
      eyebrow: 'Inside Our Office',
      heading: 'A calm space, built for ease.',
      images: [
        'https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=900&q=80',
        'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=900&q=80',
        'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=80',
        'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=900&q=80',
      ],
    },
    faq: {
      eyebrow: 'Questions',
      heading: 'Good to know.',
      items: [
        { q: 'Is ZOOM! whitening safe?', a: 'Yes — when performed under professional supervision. Dr. Verma assesses your enamel and gum health before treatment to ensure you\'re a suitable candidate and that the process is comfortable.' },
        { q: 'How long do the results last?', a: 'Results typically last 12–24 months depending on diet and lifestyle. The custom take-home trays provided make periodic touch-ups easy and affordable.' },
        { q: 'Will it make my teeth sensitive?', a: 'Some patients experience mild, temporary sensitivity during or after treatment. Dr. Verma uses desensitizing gel and the ZOOM! system includes a post-treatment relief formula to minimize this.' },
        { q: 'Does whitening work on crowns or veneers?', a: 'Whitening gel only affects natural tooth enamel, not existing restorations. Dr. Verma will advise if any crowns or veneers need to be updated after whitening to match your new shade.' },
      ],
    },
    stats: {
      eyebrow: 'By The Numbers',
      heading: 'The results speak for themselves.',
      items: [
        { value: 8, suffix: ' shades', label: 'Whiter in a single appointment' },
        { value: 90, suffix: ' min', label: 'Typical treatment time' },
        { value: 24, suffix: ' mo', label: 'How long results can last' },
        { value: 1, suffix: ' visit', label: 'All it takes to transform your smile' },
      ],
    },
    testimonials: {
      eyebrow: 'Patient Stories',
      heading: 'What patients are saying.',
      items: [
        { quote: 'The ZOOM! whitening was so easy and the results were incredible. My teeth are noticeably brighter and I\'ve had multiple people comment on my smile.', name: 'Marcus T.', context: 'Whitening patient' },
        { quote: 'I was skeptical it would work as well as advertised but I\'m converted. Dr. Verma made the process comfortable and the before/after difference is dramatic.', name: 'Lindsey P.', context: 'New patient' },
        { quote: 'Done in one lunch break and my teeth are several shades lighter. Worth every penny — I should have done this years ago.', name: 'Peter L.', context: 'Patient since 2020' },
      ],
    },
    cta: {
      title: 'Ready for a',
      highlight: 'noticeably brighter smile?',
      subtitle: 'ZOOM! appointments are quick to schedule — ask about our current whitening specials when you book.',
      buttonText: 'Book Whitening',
      buttonHref: '/contact',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 6. ROOT CANALS
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'root-canals',
    name: 'Root Canals',
    hero: {
      eyebrow: 'Root Canal Treatment',
      title: 'Save the tooth.',
      highlight: 'End the pain.',
      description:
        'Modern root canal treatment is nothing like its reputation — Dr. Verma performs virtually pain-free procedures that eliminate infection, preserve your natural tooth, and have you feeling better fast.',
    },
    overview: {
      eyebrow: 'Overview',
      heading: 'The procedure that saves teeth.',
      body:
        'When a tooth\'s nerve or pulp becomes infected — from deep decay, a crack, or trauma — a root canal removes the infection at its source. Without treatment, the infection can spread and the tooth may need extraction. Dr. Verma\'s gentle technique and modern anesthesia make the procedure comfortable, and most patients are relieved by how straightforward it is.',
      features: [
        'Removal of infected nerve & pulp',
        'Thorough canal cleaning & shaping',
        'Biocompatible root sealing',
        'Crown placement to protect the restored tooth',
      ],
      image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1200&q=80',
    },
    process: {
      eyebrow: 'What To Expect',
      heading: 'Comfortable, step by step.',
      subtitle: 'Most root canals are completed in one or two visits and are far more comfortable than patients expect.',
      steps: [
        { title: 'Diagnosis & Anesthesia', body: 'X-rays confirm the diagnosis and deep local anesthesia ensures you feel nothing during the procedure. Dr. Verma takes time to make sure you\'re fully numb before starting.' },
        { title: 'Pulp Removal', body: 'The infected pulp and nerve tissue are carefully removed through a small opening in the top of the tooth.' },
        { title: 'Cleaning & Shaping', body: 'The canals are thoroughly cleaned, shaped, and disinfected to eliminate all traces of infection.' },
        { title: 'Sealing & Crown', body: 'The canals are filled and sealed. A crown is typically placed at a follow-up visit to protect and restore the tooth\'s full function.' },
      ],
    },
    benefits: {
      eyebrow: 'Why Treat It',
      heading: 'Save the tooth you have.',
      items: [
        {
          title: 'Eliminates Pain & Infection',
          body: 'A root canal removes the infected tissue causing your pain — most patients feel significant relief within a day or two of treatment.',
          paths: ['M6 38 A18 18 0 0 1 42 38', 'M18 20 l4 4 l8 -8'],
        },
        {
          title: 'Preserves Your Natural Tooth',
          body: 'Keeping your natural tooth prevents bone loss, avoids the cost and complexity of implants, and maintains your bite.',
          paths: ['M6 38 A18 18 0 0 1 42 38', 'M24 12 v20 M14 24 h20'],
        },
        {
          title: 'Stops Infection from Spreading',
          body: 'Left untreated, a dental abscess can spread to the jaw, neck, and beyond. A root canal stops the infection at its source.',
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
        { q: 'Are root canals painful?', a: 'Modern root canals are typically no more uncomfortable than getting a filling. Deep local anesthesia is used throughout, and Dr. Verma won\'t proceed until you\'re fully numb.' },
        { q: 'How long does recovery take?', a: 'Most patients return to normal activities the day after. Mild tenderness around the area can last a few days and is managed with over-the-counter pain relief.' },
        { q: 'Do I need a crown after a root canal?', a: 'Usually yes — the tooth becomes more brittle after the pulp is removed, and a crown protects it from cracking under bite pressure. Dr. Verma will advise based on your specific tooth.' },
        { q: 'What happens if I don\'t get treatment?', a: 'The infection will continue to spread, causing increasing pain and potentially an abscess. Eventually the tooth may need to be extracted, which is more costly and complex to restore.' },
      ],
    },
    stats: {
      eyebrow: 'By The Numbers',
      heading: 'Root canals, done right.',
      items: [
        { value: 15, suffix: 'M+', label: 'Root canals performed in the US each year' },
        { value: 95, suffix: '%', label: 'Success rate with proper restoration' },
        { value: 1, suffix: '–2', label: 'Visits to complete most root canals' },
        { value: 24, suffix: 'hr', label: 'Average time to feel relief after treatment' },
      ],
    },
    testimonials: {
      eyebrow: 'Patient Stories',
      heading: 'What patients are saying.',
      items: [
        { quote: 'I was terrified going in but Dr. Verma and her staff took the time to help me feel comfortable. I barely felt anything and the relief afterward was immediate.', name: 'Peter L.', context: 'Root canal patient' },
        { quote: 'I\'d put off the root canal for months because I was scared. I wish I hadn\'t waited — Dr. Verma was so gentle and it was over before I knew it.', name: 'Carol F.', context: 'Patient since 2020' },
        { quote: 'I drove from out of town because I couldn\'t find anyone I trusted as much. Dr. Verma is thorough, skillful, and genuinely caring.', name: 'Deborah S.', context: 'Long-term patient' },
      ],
    },
    cta: {
      title: 'Tooth pain',
      highlight: 'that won\'t quit?',
      subtitle: 'Don\'t wait — infections don\'t get better on their own. Call us or book online and we\'ll get you seen quickly.',
      buttonText: 'Book an Urgent Appointment',
      buttonHref: '/contact',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 7. VENEERS
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'veneers',
    name: 'Veneers',
    hero: {
      eyebrow: 'Porcelain Veneers',
      title: 'Transform your smile.',
      highlight: 'Keep it natural.',
      description:
        'Ultra-thin porcelain veneers cover the front surface of your teeth to correct chips, stains, gaps, and shape — with results so natural, only you\'ll know they\'re veneers.',
    },
    overview: {
      eyebrow: 'Overview',
      heading: 'The porcelain solution for a perfect smile.',
      body:
        'Veneers are one of the most versatile cosmetic tools in dentistry. A thin shell of porcelain — custom-designed for your face and bonded to the front of each tooth — can address discoloration, chips, minor misalignment, uneven sizing, and unwanted gaps in a single treatment plan. Dr. Verma\'s artistic eye ensures every veneer is shaped and shaded to complement your unique smile.',
      features: [
        'Porcelain & composite veneer options',
        'Custom shade and shape design',
        'Minimal prep — preserves natural tooth structure',
        'Stain-resistant, durable porcelain',
      ],
      image: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=1200&q=80',
    },
    process: {
      eyebrow: 'What To Expect',
      heading: 'Your new smile in a few visits.',
      subtitle: 'Veneer treatment is carefully planned — the design stage is just as important as the placement.',
      steps: [
        { title: 'Smile Design Consultation', body: 'Dr. Verma reviews your goals and assesses your teeth. Photos, shade guides, and mockups help you visualize the result before any prep begins.' },
        { title: 'Minimal Tooth Prep', body: 'A very small amount of enamel is removed from the front surface — typically less than 0.5mm — to ensure the veneers sit flush and look natural.' },
        { title: 'Temporaries Placed', body: 'Temporary veneers are placed while your custom porcelain veneers are crafted at the lab, giving you a preview of your new smile.' },
        { title: 'Final Bonding', body: 'Dr. Verma checks the fit, shade, and bite before permanently bonding your porcelain veneers into place.' },
      ],
    },
    benefits: {
      eyebrow: 'Why Veneers',
      heading: 'One treatment, multiple solutions.',
      items: [
        {
          title: 'Fixes Multiple Issues at Once',
          body: 'Veneers address discoloration, chips, gaps, and minor misalignment simultaneously — without needing separate treatments for each.',
          paths: ['M6 38 A18 18 0 0 1 42 38', 'M18 20 l4 4 l8 -8'],
        },
        {
          title: 'Natural Translucency',
          body: 'Porcelain mimics the light-reflecting properties of natural enamel, so veneers have the same depth and luminosity as real teeth.',
          paths: ['M6 38 A18 18 0 0 1 42 38', 'M14 24 Q24 14 34 24 Q24 34 14 24'],
        },
        {
          title: 'Stain-Resistant Surface',
          body: 'Unlike natural enamel, glazed porcelain resists coffee, wine, and tea staining — keeping your smile bright longer.',
          paths: ['M6 38 A18 18 0 0 1 42 38', 'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6'],
        },
      ],
    },
    gallery: {
      eyebrow: 'Inside Our Office',
      heading: 'A calm space, built for ease.',
      images: [
        'https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=900&q=80',
        'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=900&q=80',
        'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=900&q=80',
        'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=80',
      ],
    },
    faq: {
      eyebrow: 'Questions',
      heading: 'Good to know.',
      items: [
        { q: 'Are veneers permanent?', a: 'Veneers require a small amount of enamel removal, which means the process is irreversible. They\'re not "permanent" in that they\'ll need replacing after 10–15 years, but your teeth will always need veneers from that point on.' },
        { q: 'Do veneers look fake?', a: 'Not when done well. Dr. Verma designs every veneer case individually, paying close attention to shade gradients, translucency, and tooth shape so results look like a better version of your natural smile.' },
        { q: 'Can I whiten my teeth after getting veneers?', a: 'Whitening gel doesn\'t affect porcelain. If you\'re considering veneers, it\'s best to whiten first so Dr. Verma can match your veneer shade to your naturally whitened teeth.' },
        { q: 'How do I care for veneers?', a: 'Exactly like natural teeth — brush, floss, and attend regular checkups. Avoid using your teeth as tools and wear a night guard if you grind your teeth.' },
      ],
    },
    stats: {
      eyebrow: 'By The Numbers',
      heading: 'Beautiful results that last.',
      items: [
        { value: 10, suffix: '–15', label: 'Years a quality veneer lasts' },
        { value: 0.5, suffix: 'mm', label: 'Typical enamel prep thickness' },
        { value: 2, suffix: '–3', label: 'Visits from consult to final placement' },
        { value: 500, suffix: '+', label: 'Cosmetic cases completed by Dr. Verma' },
      ],
    },
    testimonials: {
      eyebrow: 'Patient Stories',
      heading: 'What patients are saying.',
      items: [
        { quote: 'I\'ve wanted veneers for years but was nervous about looking fake. Dr. Verma\'s result is so natural — everyone just thinks I finally have a great smile.', name: 'Jennifer L.', context: 'Veneer patient' },
        { quote: 'Dr. Verma took her time on the design phase and it made all the difference. The shape, the shade — everything is exactly what I had in mind.', name: 'Alanna B.', context: 'Smile makeover patient' },
        { quote: 'Professional, attentive, and genuinely caring. My veneers are beautiful and my confidence has gone through the roof.', name: 'Priya K.', context: 'Patient since 2019' },
      ],
    },
    cta: {
      title: 'Ready to transform',
      highlight: 'your smile?',
      subtitle: 'Book a veneer consultation with Dr. Verma — she\'ll walk you through exactly what\'s possible for your specific teeth.',
      buttonText: 'Book a Consultation',
      buttonHref: '/contact',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 8. NIGHT GUARDS
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'night-guards',
    name: 'Night Guards',
    hero: {
      eyebrow: 'Night Guards & Bruxism',
      title: 'Protect your teeth',
      highlight: 'while you sleep.',
      description:
        'Custom night guards from Dr. Verma shield your teeth from the damage caused by grinding and clenching — relieving jaw pain, headaches, and protecting enamel you can\'t get back.',
    },
    overview: {
      eyebrow: 'Overview',
      heading: 'Stop grinding before it causes lasting damage.',
      body:
        'Bruxism — grinding and clenching your teeth — often happens unconsciously during sleep. Over time it wears down enamel, cracks teeth, strains jaw muscles, and can lead to TMJ disorder and chronic headaches. A custom-fitted night guard from Promenade Dental acts as a cushioned barrier between your upper and lower teeth, absorbing the force before it reaches your enamel.',
      features: [
        'Custom-fitted from dental impressions',
        'Hard, soft, or dual-laminate materials',
        'Relieves jaw pain & morning headaches',
        'Protects existing restorations (crowns, veneers)',
      ],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80',
    },
    process: {
      eyebrow: 'What To Expect',
      heading: 'A perfect fit in two visits.',
      subtitle: 'Custom night guards are far more effective than over-the-counter options — and more comfortable to wear.',
      steps: [
        { title: 'Exam & Assessment', body: 'Dr. Verma checks your teeth for signs of grinding — wear patterns, cracks, or enamel thinning — and discusses your symptoms.' },
        { title: 'Impressions', body: 'Precise impressions of your upper and lower teeth are taken so your guard fits your bite exactly. Digital impressions mean no messy putty.' },
        { title: 'Lab Fabrication', body: 'Your custom night guard is crafted at a dental lab from the material best suited to your grinding severity — soft, hard, or dual-laminate.' },
        { title: 'Fitting & Adjustments', body: 'At your second visit, Dr. Verma ensures the guard fits comfortably and makes any fine adjustments needed for your bite.' },
      ],
    },
    benefits: {
      eyebrow: 'Why Custom Matters',
      heading: 'Better fit. Better protection.',
      items: [
        {
          title: 'Perfectly Matched to Your Bite',
          body: 'A custom guard is fabricated from your exact impressions, distributing force evenly and staying in place throughout the night.',
          paths: ['M6 38 A18 18 0 0 1 42 38', 'M18 20 l4 4 l8 -8'],
        },
        {
          title: 'Relieves Pain at the Source',
          body: 'By cushioning your teeth from grinding forces, a night guard reduces the jaw muscle tension that causes morning headaches and TMJ soreness.',
          paths: ['M6 38 A18 18 0 0 1 42 38', 'M14 24 Q24 14 34 24 Q24 34 14 24'],
        },
        {
          title: 'Protects Enamel & Restorations',
          body: 'Enamel doesn\'t grow back and restorations are expensive. A night guard is one of the most cost-effective preventive investments you can make.',
          paths: ['M6 38 A18 18 0 0 1 42 38', 'M16 14 h16 v20 h-16 z M19 19 h10 M19 24 h10 M19 29 h6'],
        },
      ],
    },
    gallery: {
      eyebrow: 'Inside Our Office',
      heading: 'A calm space, built for ease.',
      images: [
        'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=80',
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80',
        'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=900&q=80',
        'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=900&q=80',
      ],
    },
    faq: {
      eyebrow: 'Questions',
      heading: 'Good to know.',
      items: [
        { q: 'How do I know if I grind my teeth?', a: 'Common signs include worn or chipped enamel, morning jaw soreness or headaches, tooth sensitivity, and a partner mentioning grinding sounds at night. Dr. Verma can identify grinding wear during a routine exam.' },
        { q: 'Can\'t I just buy a guard at the pharmacy?', a: 'Over-the-counter guards are one-size-fits-most and often bulky, making them uncomfortable and ineffective. A custom guard sits flush with your bite and is far more likely to stay in place and actually protect your teeth.' },
        { q: 'How long does a night guard last?', a: 'Most custom night guards last 3–5 years with proper care. Severe grinders may go through them more quickly. Dr. Verma can monitor wear at your regular checkups.' },
        { q: 'Will a night guard cure my jaw pain?', a: 'A night guard addresses the symptoms and prevents further damage, but it doesn\'t treat the underlying cause of bruxism. Dr. Verma can discuss additional options such as stress management or orthodontic evaluation if appropriate.' },
      ],
    },
    stats: {
      eyebrow: 'By The Numbers',
      heading: 'Protection worth investing in.',
      items: [
        { value: 10, suffix: '%', label: 'Of adults grind their teeth regularly' },
        { value: 2, suffix: ' visits', label: 'Typical turnaround for a custom guard' },
        { value: 3, suffix: '–5', label: 'Years a custom guard typically lasts' },
        { value: 1, suffix: ' guard', label: 'Prevents years of expensive enamel damage' },
      ],
    },
    testimonials: {
      eyebrow: 'Patient Stories',
      heading: 'What patients are saying.',
      items: [
        { quote: 'I\'d been waking up with jaw pain every day for years. Dr. Verma\'s night guard changed everything — I can\'t believe I waited so long.', name: 'Marcus T.', context: 'Night guard patient' },
        { quote: 'The custom fit is a total game-changer compared to the pharmacy guard I\'d been using. It actually stays in and I barely notice it.', name: 'Sarah M.', context: 'Patient since 2021' },
        { quote: 'Dr. Verma noticed my grinding wear at a routine cleaning and recommended a guard. Headaches are gone and she potentially saved my teeth from real damage.', name: 'Roy R.', context: 'Patient since 2018' },
      ],
    },
    cta: {
      title: 'Waking up with',
      highlight: 'jaw pain or headaches?',
      subtitle: 'Book an exam with Dr. Verma — she can spot grinding wear and get you fitted for a custom guard quickly.',
      buttonText: 'Book an Appointment',
      buttonHref: '/contact',
    },
  },

];


export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}