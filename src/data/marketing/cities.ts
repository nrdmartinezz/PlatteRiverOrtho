import type { MarketingPageData } from './types';

const cities: { name: string; slug: string; blurb: string; title: string; description: string }[] =
  [
    {
      name: 'Ashland',
      slug: 'ashland-nebraska-orthodontist-platte-river-orthodontics',
      blurb:
        'Ashland families are a short drive from a full orthodontic office in Gretna. The clinic is open Monday through Thursday, 8am to 5pm, and calls are answered those days from 7am to 7pm.',
      title: 'Ashland NE Orthodontist | Platte River Orthodontics',
      description:
        'Orthodontist for Ashland, NE. Platte River Orthodontics sees Ashland families at its Gretna office for Invisalign and braces. Call 402-322-8838.',
    },
    {
      name: 'Greenwood',
      slug: 'greenwood-nebraska-orthodontist-platte-river-orthodontics',
      blurb:
        'Greenwood neighbors do not need a downtown commute for braces, Invisalign, or an early checkup. The Gretna office is close, and the first visit is complimentary.',
      title: 'Greenwood NE Orthodontist | Platte River Orthodontics',
      description:
        'Orthodontist for Greenwood, NE. Platte River Orthodontics sees Greenwood families at its Gretna office for Invisalign and braces. Call 402-322-8838.',
    },
    {
      name: 'La Vista',
      slug: 'lavista-nebraska-orthodontist-platte-river-orthodontics',
      blurb:
        'La Vista patients come south to Gretna for board-certified care, digital scanning, and a schedule that works around school and work.',
      title: 'La Vista NE Orthodontist | Platte River Orthodontics',
      description:
        'Orthodontist for La Vista, NE. Platte River Orthodontics sees La Vista families at its Gretna office for Invisalign and braces. Call 402-322-8838.',
    },
    {
      name: 'Louisville',
      slug: 'louisville-nebraska-orthodontist-platte-river-orthodontics',
      blurb:
        'Louisville families are welcome at our Gretna office for the same custom braces, clear aligners, and early treatment we provide close to home.',
      title: 'Louisville NE Orthodontist | Platte River Orthodontics',
      description:
        'Orthodontist for Louisville, NE. Platte River Orthodontics sees Louisville families at its Gretna office for Invisalign and braces. Call 402-322-8838.',
    },
    {
      name: 'Millard',
      slug: 'millard-nebraska-orthodontist-platte-river-orthodontics',
      blurb:
        'Millard is an easy trip to Standing Stone Drive. Monday through Thursday clinic hours, and a phone line answered those days from 7am to 7pm, make a multi-year treatment realistic.',
      title: 'Millard NE Orthodontist | Platte River Orthodontics',
      description:
        'Orthodontist for Millard, NE. Platte River Orthodontics sees Millard families at its Gretna office for Invisalign and braces. Call 402-322-8838.',
    },
    {
      name: 'Omaha',
      slug: 'omaha-nebraska-orthodontist-platte-river-orthodontics',
      blurb:
        'Omaha families come south to the Gretna office for board-certified braces and Invisalign. The clinic is open Monday through Thursday, 8am to 5pm, and the first visit is complimentary.',
      title: 'Omaha NE Orthodontist | Platte River Orthodontics',
      description:
        'Orthodontist for Omaha, NE. Platte River Orthodontics sees Omaha families at its Gretna office for Invisalign and braces. Call 402-322-8838.',
    },
    {
      name: 'Plattsmouth',
      slug: 'plattsmouth-nebraska-orthodontist-platte-river-orthodontics',
      blurb:
        'Plattsmouth patients head north to Gretna for specialist orthodontic care, including surgical cases and early growth guidance.',
      title: 'Plattsmouth NE Orthodontist | Platte River Orthodontics',
      description:
        'Orthodontist for Plattsmouth, NE. Platte River Orthodontics sees Plattsmouth families at its Gretna office for Invisalign and braces. Call 402-322-8838.',
    },
    {
      name: 'Springfield',
      slug: 'springfield-nebraska-orthodontist-platte-river-orthodontics',
      blurb:
        'Springfield families use Platte River Orthodontics as their nearby smile team, from a child’s first checkup to adult Invisalign.',
      title: 'Springfield NE Orthodontist | Platte River Orthodontics',
      description:
        'Orthodontist for Springfield, NE. Platte River Orthodontics sees Springfield families at its Gretna office for Invisalign and braces. Call 402-322-8838.',
    },
    {
      name: 'Syracuse',
      slug: 'syracuse-nebraska-orthodontist-platte-river-orthodontics',
      blurb:
        'Syracuse patients are seen at our Gretna location. Remote monitoring can cut down on some of the longer drives once treatment is underway.',
      title: 'Syracuse NE Orthodontist | Platte River Orthodontics',
      description:
        'Orthodontist for Syracuse, NE. Platte River Orthodontics sees Syracuse families at its Gretna office for Invisalign and braces. Call 402-322-8838.',
    },
  ];

export const cityPages: MarketingPageData[] = cities.map((city) => ({
  slug: city.slug,
  title: city.title,
  description: city.description,
  breadcrumbs: [
    { name: 'Home', href: '/' },
    { name: `${city.name}, NE`, href: `/${city.slug}/` },
  ],
  serviceName: `Orthodontist serving ${city.name}, NE`,
  image: 'exterior',
  eyebrow: `Serving ${city.name}, NE`,
  heroTitle: `Your ${city.name}`,
  heroAccent: 'Orthodontist in Gretna',
  heroBody: city.blurb,
  features: [
    {
      title: 'One office, the full range of care',
      image: 'officeInterior',
      body: `We see ${city.name} patients at 11844 Standing Stone Dr, Suite 100 in Gretna. Dr. Carter offers KLOwen custom braces, Invisalign, early treatment, retainers, whitening, and surgical orthodontic coordination.`,
    },
  ],
  benefits: {
    title: `Why ${city.name} families make the drive`,
    items: [
      {
        icon: 'lucide:map-pin',
        title: 'Close to home',
        body: `Gretna sits within an easy drive of ${city.name}, with parking at the office.`,
      },
      {
        icon: 'lucide:clock',
        title: 'Hours that fit',
        body: 'Clinic hours are Monday–Thursday, 8:00 am–5:00 pm. The office is closed Friday, Saturday, and Sunday. Calls are answered Monday–Thursday, 7am–7pm.',
      },
      {
        icon: 'lucide:badge-check',
        title: 'A specialist',
        body: 'Board-certified orthodontic care, not a general dental add-on.',
      },
      {
        icon: 'lucide:calendar',
        title: 'A complimentary first visit',
        body: 'The consultation is complimentary, with a clear conversation about cost.',
      },
    ],
  },
  faqs: [
    {
      question: `Is there a Platte River Orthodontics office in ${city.name}?`,
      answer: `Platte River Orthodontics is the orthodontist for ${city.name} families. Visits are at the Gretna office, 11844 Standing Stone Dr, Suite 100, Gretna, NE 68028.`,
    },
    {
      question: 'Do you offer Invisalign?',
      answer:
        'Yes. Dr. Carter offers Invisalign clear aligners, including options for children, teens, and adults. The consultation shows whether aligners fit your case.',
    },
    {
      question: 'What braces are available for children?',
      answer:
        'Kids can be treated with KLOwen custom braces or Wild Smiles brackets shaped like hearts, stars, sports, and favorite characters. Early treatment is also available when growth should be guided first.',
    },
    {
      question: 'Do I need a referral to schedule?',
      answer: `No. ${city.name} families can request a complimentary consultation directly. A dentist’s referral is welcome when they want to send records.`,
    },
    {
      question: 'What are the hours, and will insurance help with the cost?',
      answer:
        'The clinic is open Monday–Thursday, 8:00 am–5:00 pm. Friday, Saturday, and Sunday are closed. Calls are answered Monday–Thursday, 7am–7pm. The complimentary consultation includes a cost breakdown. We work with most major insurance plans and offer flexible payment and financing options.',
    },
  ],
  related: [
    { label: 'Request a Consultation', href: '/request-appointment/' },
    { label: 'Contact us', href: '/contact-us/' },
  ],
}));
