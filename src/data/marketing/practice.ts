import type { Crumb, MarketingPageData } from './types';

const home: Crumb = { name: 'Home', href: '/' };

function page(
  data: Omit<MarketingPageData, 'breadcrumbs'> & { crumbs: Crumb[] },
): MarketingPageData {
  const { crumbs, ...rest } = data;
  return { ...rest, breadcrumbs: [home, ...crumbs] };
}

export const practicePages: MarketingPageData[] = [
  page({
    slug: 'meet-dr-carter',
    title: 'Meet Dr. Carter',
    description:
      'Meet Dr. Chad B. “SnaggleTooth” Carter, board-certified orthodontist and U.S. Air Force veteran serving Gretna, Nebraska.',
    crumbs: [{ name: 'Meet Dr. Carter', href: '/meet-dr-carter/' }],
    serviceName: 'Meet Dr. Carter',
    image: 'doctor',
    eyebrow: 'Platte River Orthodontics',
    heroTitle: 'Meet Dr. Chad B.',
    heroAccent: '“SnaggleTooth” Carter',
    heroBody:
      'From physics research to rural West Africa, from Air Force Special Operations to the orthodontic classroom, Dr. Carter’s path is anything but ordinary. That background is why families in Gretna trust him with their smiles.',
    features: [
      {
        eyebrow: 'A foundation in science',
        title: 'From physics to purpose',
        body: [
          'Dr. Carter’s journey began in physics research. That training still shapes how he plans treatment: precise, methodical, and grounded in evidence.',
          'Known to friends as SnaggleTooth, he pairs scientific discipline with a servant’s heart. Patients of every age get both the technical care and the human care.',
        ],
        image: 'doctor',
      },
      {
        eyebrow: 'Seven years in West Africa',
        title: 'A life-changing adventure',
        reverse: true,
        background: 'muted',
        image: 'exterior',
        body: [
          'Dr. Carter and his wife Amy spent seven years as volunteers in a rural village on the edge of the Sahara in Burkina Faso. Their partnership with ministries in West Africa has continued for more than two decades.',
          'Living there taught him that healthcare is about meeting people where they are. A smile, he likes to say, is a universal language. He still uses the languages he learned there with patients every week.',
        ],
      },
    ],
    benefits: {
      eyebrow: 'Background',
      title: 'What Dr. Carter brings to every visit',
      items: [
        {
          icon: 'lucide:award',
          title: 'Board-certified specialist',
          body: 'Advanced training in orthodontics and dentofacial orthopedics, plus work as an Associate Professor and international lecturer.',
        },
        {
          icon: 'lucide:shield',
          title: 'U.S. Air Force veteran',
          body: 'Military service, including Special Operations experience, shows up as calm, careful, detail-oriented care.',
        },
        {
          icon: 'lucide:globe',
          title: 'Global service',
          body: 'Seven years volunteering in Burkina Faso, and an ongoing commitment to projects that support orphans, farming, and clean water.',
        },
        {
          icon: 'lucide:users',
          title: 'Craniofacial consultant',
          body: 'Consultant to the Boys Town National Research Hospital Craniofacial Team, caring for complex growth and cleft cases.',
        },
      ],
    },
    faqs: [
      {
        question: 'Is Dr. Carter a board-certified orthodontist?',
        answer:
          'Yes. He is a board-certified orthodontist and dentofacial orthopedist, an Associate Professor, and an international lecturer on craniofacial growth.',
      },
      {
        question: 'Why is he called SnaggleTooth?',
        answer:
          'Friends have called him SnaggleTooth for years. The nickname stuck because it matches the humor he brings into the office.',
      },
    ],
  }),
  page({
    slug: 'our-why',
    title: 'Our Why',
    description:
      'The mission of Platte River Orthodontics: world-class orthodontic care with a servant’s heart in Gretna, Nebraska.',
    crumbs: [{ name: 'Our Why', href: '/our-why/' }],
    image: 'office',
    eyebrow: 'Gretna, Nebraska',
    heroTitle: 'More than straight teeth',
    heroAccent: 'Confident lives',
    heroBody:
      'Our mission is to provide world-class orthodontic care with a servant’s heart — creating confident people who can face the world with joy, not just straighter teeth.',
    features: [
      {
        title: 'A community of confident smiles',
        body: [
          'As Gretna grows, we intend to grow with it. We want every child to have an early orthodontic evaluation, teenagers to reach their smile goals without putting life on hold, and adults to know it is never too late.',
          'We also give back globally, partnering with projects in West Africa that support orphans, sustainable farming, and clean water. Ask us about those partnerships when you visit.',
        ],
        image: 'office',
      },
      {
        eyebrow: 'The foundation',
        title: 'A life of service',
        reverse: true,
        background: 'muted',
        image: 'doctor',
        body: 'Few experiences shaped this practice more than the years Dr. Carter and Amy spent in a rural village in Burkina Faso. It was a complete immersion in another culture and a different understanding of what it means to serve.',
      },
    ],
    benefits: {
      title: 'How the mission shows up',
      items: [
        {
          icon: 'lucide:graduation-cap',
          title: 'Educational leadership',
          body: 'Dr. Carter teaches and lectures so the care in this office stays tied to current research.',
        },
        {
          icon: 'lucide:heart',
          title: 'Care for every age',
          body: 'From infants to adults, including craniofacial and cleft care through his Boys Town consulting work.',
        },
        {
          icon: 'lucide:house',
          title: 'Rooted in Gretna',
          body: 'Choosing Gretna was a commitment to be a neighbor, not just a clinic people drive to.',
        },
        {
          icon: 'lucide:hand-heart',
          title: 'Community support',
          body: 'We support local schools, sports teams, and community organizations.',
        },
      ],
    },
  }),
  page({
    slug: 'why-choose-us',
    title: 'Why Choose Us',
    description:
      'Why families choose Platte River Orthodontics in Gretna for board-certified, technology-forward orthodontic care.',
    crumbs: [{ name: 'Why Choose Us', href: '/why-choose-us/' }],
    image: 'office',
    eyebrow: 'Gretna, Nebraska',
    heroTitle: 'The clear choice',
    heroAccent: 'For your family’s smile',
    heroBody:
      'Choosing an orthodontist affects your confidence, your oral health, and your quality of life for years. We take that decision seriously, and we are honored when families choose us.',
    features: [
      {
        eyebrow: 'Meet the team',
        title: 'Your new ortho family',
        image: 'doctor',
        body: [
          'Dr. Chad “SnaggleTooth” Carter leads the practice with a heart for service and years of experience, from physics research and military service to board-certified orthodontics.',
          'His wife and partner, Amy Carter, keeps the practice centered on family. Boone and Huck, their bird dogs, are the Chief Furry Officer and Head of the Party Planning Committee.',
        ],
      },
      {
        eyebrow: 'Global experience, local heart',
        title: 'What sets us apart',
        reverse: true,
        background: 'muted',
        image: 'exterior',
        body: 'Physics research helps with complex planning. Years in Africa built cultural sensitivity and a habit of meeting people where they are. Military service added precision. Teaching keeps the care current. All of that happens in a Gretna office built for comfort.',
      },
    ],
    benefits: {
      eyebrow: 'Technology',
      title: 'Innovation in service of better care',
      body: 'Every tool in the office was chosen because it makes treatment more comfortable, more accurate, or easier to understand.',
      items: [
        {
          icon: 'lucide:scan',
          title: 'iTero digital scanning',
          body: 'No messy impressions. Accurate 3D models make the first visit more comfortable and the plan more precise.',
        },
        {
          icon: 'lucide:smile',
          title: 'Treatment simulator',
          body: 'See a preview of your smile before treatment starts, using your own scan.',
        },
        {
          icon: 'lucide:cpu',
          title: 'KLOwen custom braces',
          body: 'Brackets designed for each tooth, so treatment is often more efficient and more comfortable.',
        },
        {
          icon: 'lucide:smartphone',
          title: 'Grin remote monitoring',
          body: 'Share progress from home between visits when a trip to the office is not needed.',
        },
      ],
    },
  }),
  page({
    slug: 'technology',
    title: 'Technology',
    description:
      'iTero scanning, Grin remote monitoring, and KLOwen custom braces at Platte River Orthodontics in Gretna.',
    crumbs: [{ name: 'Technology', href: '/technology/' }],
    image: 'office',
    eyebrow: 'Advanced orthodontic technology',
    heroTitle: 'Innovation meets',
    heroAccent: 'Dr. Carter’s expertise',
    heroBody:
      'Dr. Carter pairs the most advanced tools we use with board-certified judgment, teaching experience, and his work on the Boys Town craniofacial team. Technology only matters if it makes your care more precise and more comfortable.',
    features: [
      {
        eyebrow: 'iTero',
        title: 'No more goopy impressions',
        image: 'office',
        body: 'The iTero scanner replaces traditional impressions with a comfortable digital model of your teeth and bite. Dr. Carter can study that model in ways plaster never allowed, and the treatment simulator can show a realistic preview of your result.',
      },
      {
        eyebrow: 'Grin',
        title: 'Monitoring that fits a busy life',
        reverse: true,
        background: 'muted',
        image: 'invisalign',
        body: 'Grin lets Dr. Carter check progress between visits using clinical-quality photos from your phone. It is especially helpful if you travel, live a little farther out, or simply want fewer trips to the office without giving up close supervision.',
      },
    ],
    benefits: {
      eyebrow: 'KLOwen',
      title: 'Braces made for your teeth',
      items: [
        {
          icon: 'lucide:ruler',
          title: 'One bracket, one tooth',
          body: 'Each bracket is designed and manufactured for the tooth it sits on, instead of a one-size-fits-all prescription.',
        },
        {
          icon: 'lucide:timer',
          title: 'Time spent up front',
          body: 'More planning before braces go on often means fewer adjustments and a more efficient treatment.',
        },
        {
          icon: 'lucide:box',
          title: 'Digital planning',
          body: '3D imaging and computer-aided design guide bracket placement and the movements we expect.',
        },
        {
          icon: 'lucide:heart-pulse',
          title: 'Comfort',
          body: 'A custom fit and smoother appliances are easier to live with than traditional braces.',
        },
      ],
    },
  }),
  page({
    slug: 'what-to-expect',
    title: 'What to Expect',
    description:
      'What to expect at Platte River Orthodontics in Gretna, from your complimentary first visit through retention.',
    crumbs: [{ name: 'What to Expect', href: '/what-to-expect/' }],
    image: 'office',
    eyebrow: 'Orthodontics in Gretna, NE',
    heroTitle: 'Your journey to',
    heroAccent: 'A confident smile',
    heroBody:
      'Knowing what happens from the first visit through the end of treatment makes the whole process easier. We want you informed, comfortable, and clear about the plan.',
    steps: {
      eyebrow: 'Your first visit',
      title: 'Building the foundation',
      body: 'The complimentary consultation is thorough and educational. Dr. Carter explains findings in plain language.',
      items: [
        {
          title: 'Schedule the consult',
          body: 'Flexible hours, including early mornings, evenings, and Saturday, so the first visit can fit a family schedule.',
        },
        {
          title: 'Complete evaluation',
          body: 'We look at teeth, bite, facial proportions, growth, jaw function, and airway — not just crowding.',
        },
        {
          title: 'A plan you can understand',
          body: 'You leave knowing the options, the timing, and what treatment would ask of you day to day.',
        },
      ],
    },
    benefits: {
      eyebrow: 'Why families stay',
      title: 'What you can count on',
      background: 'base',
      items: [
        {
          icon: 'lucide:badge-check',
          title: 'Board-certified care',
          body: 'Dr. Carter’s training and teaching background show up as precise, current treatment.',
        },
        {
          icon: 'lucide:dog',
          title: 'A family office',
          body: 'Boone and Huck, the office dogs, are part of a warm visit for kids and nervous patients.',
        },
        {
          icon: 'lucide:scan',
          title: 'Modern records',
          body: 'iTero scanning and custom appliances replace the parts of treatment people used to dread.',
        },
        {
          icon: 'lucide:message-circle',
          title: 'Straight answers',
          body: 'We would rather explain a myth than rush you into a start date.',
        },
      ],
    },
    faqs: [
      {
        question: 'Is orthodontic treatment extremely painful?',
        answer:
          'Modern treatment with custom braces or Invisalign is much more comfortable than many people expect. You may feel pressure for a few days when teeth start to move. Most patients manage that with over-the-counter relief.',
      },
      {
        question: 'Will appointments take over my schedule?',
        answer:
          'Visits are planned around school and work. Remote monitoring can reduce some trips, and our hours run early, late, and on Saturday.',
      },
    ],
    related: [
      { label: 'In-office consultation', href: '/in-office-consultation/' },
      { label: 'Request an appointment', href: '/request-appointment/' },
    ],
  }),
  page({
    slug: 'in-office-consultation',
    title: 'In-Office Consultation',
    description:
      'What happens at your in-office consultation with Dr. Carter at Platte River Orthodontics in Gretna.',
    crumbs: [{ name: 'In-Office Consultation', href: '/in-office-consultation/' }],
    image: 'office',
    eyebrow: 'Gretna, Nebraska',
    heroTitle: 'Your in-office',
    heroAccent: 'Consultation',
    heroBody:
      'This visit is the start of a personal plan, not a sales appointment. Dr. Carter is a board-certified orthodontist, an Associate Professor, and a consultant for the Boys Town craniofacial team.',
    features: [
      {
        title: 'What to bring',
        image: 'office',
        body: 'Bring insurance information so we can talk about benefits and out-of-pocket cost with real numbers. A short list of questions helps us cover everything you care about. Younger patients are welcome to bring a comfort item, and a parent should plan to stay for the visit.',
        bullets: [
          'Insurance card and any referral notes',
          'Questions you do not want to forget',
          'A favorite comfort item for younger kids',
        ],
      },
      {
        eyebrow: 'Cost',
        title: 'A clear conversation about investment',
        reverse: true,
        background: 'muted',
        image: 'exterior',
        body: 'We go over treatment cost, payment options, and insurance in the same visit. The goal is a plan your family can actually use, including flexible payments and financing when that helps.',
      },
    ],
    faqs: [
      {
        question: 'Is the consultation a high-pressure sales visit?',
        answer:
          'No. The visit is educational. You should leave understanding your options and feeling free to decide on your own timeline.',
      },
      {
        question: 'Do I need to be ready to start treatment that day?',
        answer:
          'No. Many families use the consult to learn, then schedule records or a start visit when they are ready.',
      },
    ],
    related: [{ label: 'What to expect', href: '/what-to-expect/' }],
  }),
  page({
    slug: 'contact-us',
    title: 'Contact Us',
    description:
      'Contact Platte River Orthodontics in Gretna, Nebraska. Call 402-322-8838 or send a message.',
    crumbs: [{ name: 'Contact Us', href: '/contact-us/' }],
    image: 'exterior',
    eyebrow: 'Gretna, Nebraska',
    heroTitle: 'Contact us',
    heroAccent: 'We are here to help',
    heroBody:
      'Call, email, or send a note. For a new-patient visit, you can also request a time or use the online scheduler.',
    showContact: true,
    related: [
      { label: 'Request an appointment', href: '/request-appointment/' },
      { label: 'Doctor referral', href: '/doctor-referral/' },
    ],
  }),
  page({
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    description: 'How Platte River Orthodontics collects, uses, and protects personal information.',
    crumbs: [{ name: 'Privacy Policy', href: '/privacy-policy/' }],
    image: 'office',
    eyebrow: 'Last updated July 9, 2025',
    heroTitle: 'Privacy Policy',
    heroBody:
      'Your privacy matters here. This policy explains what we collect, how we use it, and the choices you have. We do not sell your information.',
    legal: [
      {
        heading: 'Who we are',
        paragraphs: [
          'Platte River Orthodontics (“we,” “our,” or “us”) protects personal information when you visit the office, use this website, or communicate with us. The office is at 11844 Standing Stone Dr, Suite 100, Gretna, NE 68028. Call (402) 322-8838 or email smile@platteriverortho.com with privacy questions.',
        ],
      },
      {
        heading: 'Information we collect',
        items: [
          'Name, email, phone number, and mailing address',
          'Date of birth',
          'Insurance and payment information',
          'Health and dental history, appointment, and treatment details',
          'Communication preferences and anything you choose to send us',
        ],
      },
      {
        heading: 'Why we collect it',
        items: [
          'Provide orthodontic care',
          'Schedule and confirm appointments',
          'Process payments and insurance claims',
          'Communicate about your care',
          'Meet legal and regulatory duties',
          'Improve how the practice runs and answer your questions',
        ],
      },
      {
        heading: 'How we use and share it',
        paragraphs: [
          'Information is used to support your care and the operation of the practice: records, insurance claims, reminders, and replies to you. We do not sell, rent, or share personal information with third parties for their marketing.',
          'No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared, sold, or disclosed to third parties.',
          'We may share information with your consent, with insurers to process claims, with vendors who work for us under confidentiality agreements, and when the law requires it.',
        ],
      },
      {
        heading: 'Your choices',
        paragraphs: [
          'You may ask what personal information we hold, ask us to correct it, or request deletion where the law allows. You may withdraw consent for optional communications, including text messages, by following the instructions in those messages or by contacting the office.',
          'We do not knowingly transfer personal data outside the United States. If that ever becomes necessary, we will protect it in line with this policy.',
        ],
      },
    ],
  }),
];
