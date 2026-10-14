import type { Crumb, MarketingPageData } from './types';

const home: Crumb = { name: 'Home', href: '/' };

function page(
  data: Omit<MarketingPageData, 'breadcrumbs'> & { crumbs: Crumb[] },
): MarketingPageData {
  const { crumbs, ...rest } = data;
  return { ...rest, breadcrumbs: [home, ...crumbs] };
}

const bracesCrumb: Crumb = { name: 'Braces', href: '/braces/' };
const invisalignCrumb: Crumb = { name: 'Invisalign', href: '/invisalign/' };

export const treatmentPages: MarketingPageData[] = [
  page({
    slug: 'braces',
    title: 'Braces',
    description:
      'KLOwen fully custom braces at Platte River Orthodontics in Gretna, Nebraska. Precise, comfortable, and efficient.',
    crumbs: [bracesCrumb],
    serviceName: 'Braces',
    image: 'braces',
    eyebrow: 'KLOwen customized braces',
    heroTitle: 'Precision, comfort,',
    heroAccent: 'And a better braces experience',
    heroBody:
      'Dr. Carter is the first orthodontist in the region doing exclusively full customization. KLOwen braces are designed for your teeth, not pulled from a standard kit.',
    features: [
      {
        title: 'Like shoes made for your feet',
        image: 'braces',
        body: 'Custom braces are planned tooth by tooth. Dr. Carter spends more time on that design so you spend less time in treatment. Families often see about 40% fewer visits than they expected from older braces.',
      },
      {
        title: 'How the appliances are made',
        reverse: true,
        background: 'muted',
        image: 'office',
        bullets: [
          'Digital treatment planning maps each movement before anything is bonded',
          'Low-dose 3D imaging shows roots, bone, and the structures around the teeth',
          'Computer-aided manufacturing builds a bracket for the specific tooth it will sit on',
        ],
        body: 'Smaller brackets, smoother surfaces, and a custom fit make modern braces easier to live with than the braces most parents remember.',
      },
    ],
    related: [
      { label: 'Braces for adults', href: '/braces/braces-for-adults/' },
      { label: 'Braces for teens', href: '/braces/braces-for-teens/' },
      { label: 'Braces for kids', href: '/braces/braces-for-kids/' },
    ],
  }),
  page({
    slug: 'braces/braces-for-adults',
    title: 'Braces for Adults',
    description:
      'Adult braces in Gretna with KLOwen custom technology. Discreet, efficient treatment that respects a work schedule.',
    crumbs: [bracesCrumb, { name: 'Braces for Adults', href: '/braces/braces-for-adults/' }],
    serviceName: 'Braces for Adults',
    image: 'braces',
    eyebrow: 'Adult orthodontics',
    heroTitle: 'Invest in the smile',
    heroAccent: 'You have been waiting on',
    heroBody:
      'Adults come in to look more polished at work, to fix a bite that has bothered them for years, or to finally do the treatment they postponed. The plan is built around that life, not a teenager’s school calendar.',
    features: [
      {
        title: 'Precision with a lower profile',
        image: 'braces',
        body: 'Each KLOwen bracket is designed for your tooth, so the appliance can be smaller and less noticeable than traditional braces. Custom planning often shortens treatment, which matters when you are balancing work and family.',
      },
      {
        title: 'Options that fit a professional life',
        reverse: true,
        background: 'muted',
        image: 'office',
        body: 'Clear ceramic brackets are available when you want braces to blend in. Appointments are fewer and more focused because the movements were designed before the braces went on. Invisalign is also here if aligners are the better fit.',
      },
    ],
    related: [
      { label: 'Invisalign for adults', href: '/invisalign/invisalign-for-adults/' },
      { label: 'Braces overview', href: '/braces/' },
    ],
  }),
  page({
    slug: 'braces/braces-for-teens',
    title: 'Braces for Teens',
    description:
      'Teen braces in Gretna using KLOwen custom braces during the years when teeth and jaws respond especially well.',
    crumbs: [bracesCrumb, { name: 'Braces for Teens', href: '/braces/braces-for-teens/' }],
    serviceName: 'Braces for Teens',
    image: 'braces',
    eyebrow: 'Teenage orthodontics',
    heroTitle: 'Confidence through',
    heroAccent: 'The teenage years',
    heroBody:
      'These years are full of games, photos, and figuring out who you are. Braces should help that, not get in the way. Most permanent teeth are in, and the jaws are still growing, which makes this an especially effective time to treat.',
    benefits: {
      title: 'Why teens do well in braces',
      items: [
        {
          icon: 'lucide:sparkles',
          title: 'The right window',
          body: 'Permanent teeth are in, bone is responsive, and growth can still help the bite.',
        },
        {
          icon: 'lucide:timer',
          title: 'Efficient visits',
          body: 'Custom brackets are planned in advance so adjustment visits stay focused.',
        },
        {
          icon: 'lucide:smile',
          title: 'Ready for what is next',
          body: 'Finishing during high school means the smile is set before college, work, or whatever comes after.',
        },
        {
          icon: 'lucide:heart',
          title: 'Someone who explains it',
          body: 'Dr. Carter talks through each step so teens know what is happening, not just what to do.',
        },
      ],
    },
    related: [
      { label: 'Invisalign Teen', href: '/invisalign/invisalign-teen/' },
      { label: 'Braces overview', href: '/braces/' },
    ],
  }),
  page({
    slug: 'braces/braces-for-kids',
    title: 'Braces for Kids',
    description:
      'Wild Smiles designer braces and gentle early care for kids at Platte River Orthodontics in Gretna.',
    crumbs: [bracesCrumb, { name: 'Braces for Kids', href: '/braces/braces-for-kids/' }],
    serviceName: 'Braces for Kids',
    image: 'braces',
    eyebrow: 'Braces for kids',
    heroTitle: 'Express yourself',
    heroAccent: 'With Wild Smiles',
    heroBody:
      'Wild Smiles are real braces with brackets shaped like hearts, stars, sports, and favorite characters. Kids still get careful treatment. They also get to help design how it looks.',
    steps: {
      title: 'The Wild Smiles visit',
      items: [
        {
          title: 'Design the smile',
          body: 'Your child picks shapes and elastic colors with help from the team.',
        },
        {
          title: 'One comfortable start',
          body: 'Dr. Carter places the brackets in a single visit and explains home care in language kids can use.',
        },
        {
          title: 'A partnership',
          body: 'Parents get hygiene and food guidance so the months in braces stay on track.',
        },
      ],
    },
    features: [
      {
        title: 'A foundation, not just straight teeth',
        background: 'muted',
        image: 'doctor',
        body: 'Childhood treatment can use growth to correct habits, make space, and guide the jaws. Dr. Carter’s pediatric experience includes early intervention and more complex growth cases.',
      },
    ],
    related: [
      { label: 'Early treatment', href: '/early-treatment/' },
      { label: 'Invisalign First', href: '/invisalign/invisalign-first/' },
    ],
  }),
  page({
    slug: 'early-treatment',
    title: 'Early Treatment',
    description:
      'Phase I and interceptive orthodontics for growing children at Platte River Orthodontics in Gretna.',
    crumbs: [{ name: 'Early Treatment', href: '/early-treatment/' }],
    serviceName: 'Early Treatment',
    image: 'doctor',
    eyebrow: 'Early orthodontic treatment',
    heroTitle: 'Foundations for',
    heroAccent: 'A lifelong smile',
    heroBody:
      'Early treatment, sometimes called Phase I, addresses problems while children still have a mix of baby and permanent teeth. Growth can do some of the work that would be harder later.',
    features: [
      {
        title: 'Why age 7 is the usual starting point',
        image: 'doctor',
        body: 'The American Association of Orthodontists recommends a first checkup by age 7, when the first permanent molars and incisors are typically in. Some children should be seen sooner if growth, habits, or breathing are a concern. Not every child needs treatment that day. The visit tells us whether to watch, wait, or act.',
      },
    ],
    benefits: {
      title: 'What early care can do',
      items: [
        {
          icon: 'lucide:sprout',
          title: 'Use growth',
          body: 'Guide jaw development while the face is still changing.',
        },
        {
          icon: 'lucide:shield',
          title: 'Prevent bigger problems',
          body: 'Create space, stop harmful habits, and keep small issues from becoming surgical ones.',
        },
        {
          icon: 'lucide:users',
          title: 'Support parents',
          body: 'We explain your role at home so Phase I actually works.',
        },
        {
          icon: 'lucide:wind',
          title: 'Look beyond the teeth',
          body: 'Function, facial balance, and airway are part of the evaluation.',
        },
      ],
    },
    related: [
      { label: 'Airway aware treatment', href: '/airway-aware-treatment/' },
      { label: 'Invisalign First', href: '/invisalign/invisalign-first/' },
      { label: 'Braces for kids', href: '/braces/braces-for-kids/' },
    ],
  }),
  page({
    slug: 'airway-aware-treatment',
    title: 'Airway Aware Treatment',
    description:
      'Airway-aware early orthodontic care in Gretna for children whose bite, growth, or breathing needs attention.',
    crumbs: [{ name: 'Airway Aware Treatment', href: '/airway-aware-treatment/' }],
    serviceName: 'Airway Aware Treatment',
    image: 'doctor',
    eyebrow: 'Early orthodontic treatment',
    heroTitle: 'Smiles that also',
    heroAccent: 'Help kids breathe and grow',
    heroBody:
      'A narrow jaw, chronic mouth breathing, or a bite that is developing off track can affect more than how teeth look. Dr. Carter evaluates growth, function, and airway together, especially in children.',
    features: [
      {
        title: 'Early intervention with the whole child in mind',
        image: 'doctor',
        body: 'Interceptive treatment uses the mixed-dentition years to guide teeth and jaws. Addressing crowding, crossbites, and habits early can make later treatment simpler and support healthier facial growth. If expansion or MARPE is the right tool for an older patient, we will say so plainly.',
      },
    ],
    related: [
      { label: 'Early treatment', href: '/early-treatment/' },
      { label: 'MARPE', href: '/services/marpe/' },
    ],
  }),
  page({
    slug: 'invisalign',
    title: 'Invisalign',
    description:
      'Invisalign clear aligners in Gretna, Nebraska, planned by Dr. Carter with digital scanning and remote monitoring.',
    crumbs: [invisalignCrumb],
    serviceName: 'Invisalign',
    image: 'invisalign',
    eyebrow: 'Clear aligners',
    heroTitle: 'Invisalign treatment',
    heroAccent: 'In Gretna',
    heroBody:
      'Clear aligners only work as well as the plan behind them. Dr. Carter uses his biomechanics background, iTero scanning, and the smile simulator so you can see the goal before the first tray.',
    benefits: {
      title: 'Why patients like this process',
      items: [
        {
          icon: 'lucide:eye-off',
          title: 'Discreet',
          body: 'Nearly invisible trays, with no brackets or wires in the way of work, photos, or sports.',
        },
        {
          icon: 'lucide:scan',
          title: 'A preview first',
          body: 'The smile simulator uses your scan to show a realistic outcome before you commit.',
        },
        {
          icon: 'lucide:smartphone',
          title: 'Grin monitoring',
          body: 'Progress photos from home keep treatment accurate between visits.',
        },
        {
          icon: 'lucide:utensils',
          title: 'Life stays normal',
          body: 'Trays come out to eat, brush, and floss. Wear them as prescribed and they do the work.',
        },
      ],
    },
    features: [
      {
        title: 'The science behind the trays',
        background: 'muted',
        image: 'invisalign',
        body: 'A series of custom aligners moves teeth in small, planned steps. Dr. Carter’s physics training shows up in how those steps are sequenced so the result is stable, not just straight for a photograph.',
      },
    ],
    related: [
      { label: 'Invisalign First', href: '/invisalign/invisalign-first/' },
      { label: 'Invisalign Teen', href: '/invisalign/invisalign-teen/' },
      { label: 'Invisalign for adults', href: '/invisalign/invisalign-for-adults/' },
    ],
  }),
  page({
    slug: 'invisalign/invisalign-first',
    title: 'Invisalign First',
    description:
      'Invisalign First for children ages 6–10 at Platte River Orthodontics in Gretna. Early treatment with clear aligners.',
    crumbs: [invisalignCrumb, { name: 'Invisalign First', href: '/invisalign/invisalign-first/' }],
    serviceName: 'Invisalign First',
    image: 'invisalign',
    eyebrow: 'Invisalign for kids',
    heroTitle: 'Early care',
    heroAccent: 'Without metal appliances',
    heroBody:
      'Invisalign First is built for children about 6 to 10 who still have baby teeth and permanent teeth. The aligners make room for eruption and growth in a way standard teen trays do not.',
    features: [
      {
        title: 'Made for mixed dentition',
        image: 'invisalign',
        body: 'These aligners include features for developing teeth and growing jaws. Dr. Carter’s early-treatment experience is what makes the timing useful. The goal is a healthier foundation, not a finished adult smile in second grade.',
      },
    ],
    related: [
      { label: 'Early treatment', href: '/early-treatment/' },
      { label: 'Braces for kids', href: '/braces/braces-for-kids/' },
    ],
  }),
  page({
    slug: 'invisalign/invisalign-teen',
    title: 'Invisalign Teen',
    description:
      'Invisalign Teen in Gretna: clear, removable aligners for teenagers who want a confident smile without metal braces.',
    crumbs: [invisalignCrumb, { name: 'Invisalign Teen', href: '/invisalign/invisalign-teen/' }],
    serviceName: 'Invisalign Teen',
    image: 'invisalign',
    eyebrow: 'Invisalign for teens',
    heroTitle: 'The clear choice',
    heroAccent: 'For a confident smile',
    heroBody:
      'Invisalign Teen straightens teeth with clear, removable aligners. You can smile in photos, play your sport, and keep a normal routine while treatment is underway.',
    benefits: {
      title: 'What makes teen aligners different',
      items: [
        {
          icon: 'lucide:eye',
          title: 'Hard to notice',
          body: 'The trays are nearly invisible, which matters in classrooms and in pictures.',
        },
        {
          icon: 'lucide:utensils',
          title: 'Out for meals',
          body: 'Remove them to eat the foods braces make difficult, then put them back in.',
        },
        {
          icon: 'lucide:sparkles',
          title: 'Smooth plastic',
          body: 'No brackets rubbing cheeks during band or practice.',
        },
        {
          icon: 'lucide:calendar',
          title: 'Fewer emergencies',
          body: 'There are no wires to poke and no brackets to pop off before a game.',
        },
      ],
    },
    related: [
      { label: 'Braces for teens', href: '/braces/braces-for-teens/' },
      { label: 'Invisalign overview', href: '/invisalign/' },
    ],
  }),
  page({
    slug: 'invisalign/invisalign-for-adults',
    title: 'Invisalign for Adults',
    description:
      'Adult Invisalign in Gretna for professionals who want a discreet way to straighten teeth without brackets and wires.',
    crumbs: [
      invisalignCrumb,
      { name: 'Invisalign for Adults', href: '/invisalign/invisalign-for-adults/' },
    ],
    serviceName: 'Invisalign for Adults',
    image: 'invisalign',
    eyebrow: 'Adult clear aligners',
    heroTitle: 'A clear path',
    heroAccent: 'To the smile you wanted',
    heroBody:
      'If metal braces do not fit your work or social life, Invisalign is the treatment many adults choose. It is discreet, removable, and capable of more than minor crowding when the plan is done carefully.',
    benefits: {
      title: 'Why adults choose aligners',
      items: [
        {
          icon: 'lucide:briefcase',
          title: 'Discreet at work',
          body: 'Most people will not realize you are in treatment.',
        },
        {
          icon: 'lucide:smile',
          title: 'Comfortable',
          body: 'Smooth plastic replaces brackets and wires.',
        },
        {
          icon: 'lucide:check',
          title: 'Effective',
          body: 'From simpler alignment to more complex bites, when the case is planned well.',
        },
        {
          icon: 'lucide:clock',
          title: 'Convenient',
          body: 'Eat, brush, and floss without working around appliances.',
        },
      ],
    },
    features: [
      {
        title: 'It is not too late',
        background: 'muted',
        image: 'office',
        body: 'Adult treatment is about health and confidence, not only appearance. We listen first, then build a plan around your goals and your calendar.',
      },
    ],
    related: [
      { label: 'Braces for adults', href: '/braces/braces-for-adults/' },
      { label: 'Invisalign overview', href: '/invisalign/' },
    ],
  }),
  page({
    slug: 'surgical-orthodontics',
    title: 'Surgical Orthodontics',
    description:
      'Surgical orthodontics and orthognathic care coordinated by Dr. Carter at Platte River Orthodontics in Gretna.',
    crumbs: [{ name: 'Surgical Orthodontics', href: '/surgical-orthodontics/' }],
    serviceName: 'Surgical Orthodontics',
    image: 'jaw',
    eyebrow: 'Surgical orthodontics in Gretna',
    heroTitle: 'When braces alone',
    heroAccent: 'Are not enough',
    heroBody:
      'Orthognathic treatment combines orthodontics with jaw surgery for skeletal differences that tooth movement cannot fix. Dr. Carter coordinates these cases and consults with the Boys Town craniofacial team.',
    steps: {
      title: 'How surgical treatment unfolds',
      items: [
        {
          title: 'Pre-surgical orthodontics',
          body: 'Teeth are aligned so the jaws can be repositioned accurately.',
        },
        {
          title: 'Surgical planning',
          body: 'Dr. Carter coordinates with an oral surgeon on jaw position, function, and facial balance.',
        },
        {
          title: 'Surgery',
          body: 'The surgeon repositions the jaws to correct the skeletal discrepancy.',
        },
        {
          title: 'Finishing orthodontics',
          body: 'After healing, tooth position is refined and retention is planned.',
        },
      ],
    },
    features: [
      {
        title: 'Who this is for',
        image: 'jaw',
        body: 'Underbites, overbites, open bites, facial asymmetry, and some airway concerns can come from jaw position rather than crooked teeth. The evaluation uses 3D imaging and a careful look at chewing, speech, and facial proportions before anyone recommends surgery.',
      },
    ],
    faqs: [
      {
        question: 'Does every bite problem need surgery?',
        answer:
          'No. Many bites are treated with braces or aligners alone. Surgery is reserved for skeletal differences that orthodontics cannot correct by itself.',
      },
    ],
  }),
  page({
    slug: 'teeth-whitening',
    title: 'Teeth Whitening',
    description:
      'Professional teeth whitening at Platte River Orthodontics in Gretna to finish the smile after orthodontic treatment.',
    crumbs: [{ name: 'Teeth Whitening', href: '/teeth-whitening/' }],
    serviceName: 'Teeth Whitening',
    image: 'invisalign',
    eyebrow: 'Professional whitening',
    heroTitle: 'Brighten the smile',
    heroAccent: 'You just straightened',
    heroBody:
      'Aligned teeth are only part of the picture. Professional whitening is a safe way to lift stains that coffee, tea, and time leave behind, with the gums protected and the strength of the gel supervised.',
    features: [
      {
        title: 'Why teeth darken',
        image: 'invisalign',
        body: 'Surface stains come from foods and drinks. Deeper discoloration builds as enamel thins with age and pigment settles in. Professional systems are aimed at those deeper stains, which is why they outperform most store kits.',
      },
      {
        title: 'In-office whitening',
        reverse: true,
        background: 'muted',
        image: 'office',
        body: 'An in-office visit can lighten teeth several shades in a single appointment. It is a good fit before an event, or if you want the process supervised so sensitivity stays in check.',
      },
    ],
  }),
  page({
    slug: 'retainers',
    title: 'Retainers',
    description:
      'Retainers and retention care at Platte River Orthodontics in Gretna, including replacement retainers.',
    crumbs: [{ name: 'Retainers', href: '/retainers/' }],
    serviceName: 'Retainers',
    image: 'braces',
    eyebrow: 'After treatment',
    heroTitle: 'Protect the smile',
    heroAccent: 'You worked for',
    heroBody:
      'Teeth want to drift back toward where they started. Retainers hold the result while bone and ligaments settle, and they keep protecting that result for years after.',
    features: [
      {
        title: 'Why retainers are not optional',
        image: 'braces',
        body: 'Periodontal ligaments and bone keep remodeling after braces or aligners come off. Without retention, the time and cost of treatment can slip away. Dr. Carter designs the retainer plan around your case, including more complex surgical and craniofacial finishes.',
      },
    ],
    benefits: {
      title: 'What retention includes',
      items: [
        {
          icon: 'lucide:book-open',
          title: 'Evidence-based timing',
          body: 'Wear instructions follow what actually keeps teeth stable, not a generic handout.',
        },
        {
          icon: 'lucide:user',
          title: 'A plan for your case',
          body: 'Retention matches how your teeth moved and how likely they are to relapse.',
        },
        {
          icon: 'lucide:search',
          title: 'Follow-up',
          body: 'We check stability and adjust the plan if something starts to shift.',
        },
        {
          icon: 'lucide:refresh-cw',
          title: 'Replacements',
          body: 'Lost or worn retainers can be replaced before teeth have time to move.',
        },
      ],
    },
  }),
];
