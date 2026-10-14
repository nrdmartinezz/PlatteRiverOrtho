import type { MarketingPageData } from './types';

const cities: { name: string; slug: string; blurb: string }[] = [
  {
    name: 'Ashland',
    slug: 'ashland-nebraska-orthodontist-platte-river-orthodontics',
    blurb:
      'Ashland families are a short drive from a full orthodontic office in Gretna, with early mornings, evenings, and Saturday hours.',
  },
  {
    name: 'Greenwood',
    slug: 'greenwood-nebraska-orthodontist-platte-river-orthodontics',
    blurb:
      'Greenwood neighbors do not need a downtown commute for braces, Invisalign, or an early checkup. The Gretna office is close, and the first visit is complimentary.',
  },
  {
    name: 'La Vista',
    slug: 'lavista-nebraska-orthodontist-platte-river-orthodontics',
    blurb:
      'La Vista patients come south to Gretna for board-certified care, digital scanning, and a schedule that works around school and work.',
  },
  {
    name: 'Louisville',
    slug: 'louisville-nebraska-orthodontist-platte-river-orthodontics',
    blurb:
      'Louisville families are welcome at our Gretna office for the same custom braces, clear aligners, and early treatment we provide close to home.',
  },
  {
    name: 'Millard',
    slug: 'millard-nebraska-orthodontist-platte-river-orthodontics',
    blurb:
      'Millard is an easy trip to Standing Stone Drive. Parents tell us the extended hours are what make a multi-year treatment realistic.',
  },
  {
    name: 'Plattsmouth',
    slug: 'plattsmouth-nebraska-orthodontist-platte-river-orthodontics',
    blurb:
      'Plattsmouth patients head north to Gretna for specialist orthodontic care, including surgical cases and early growth guidance.',
  },
  {
    name: 'Springfield',
    slug: 'springfield-nebraska-orthodontist-platte-river-orthodontics',
    blurb:
      'Springfield families use Platte River Orthodontics as their nearby smile team, from a child’s first checkup to adult Invisalign.',
  },
  {
    name: 'Syracuse',
    slug: 'syracuse-nebraska-orthodontist-platte-river-orthodontics',
    blurb:
      'Syracuse patients are seen at our Gretna location. Remote monitoring can cut down on some of the longer drives once treatment is underway.',
  },
];

export const cityPages: MarketingPageData[] = cities.map((city) => ({
  slug: city.slug,
  title: `${city.name}, NE Orthodontist`,
  description: `Orthodontic care for ${city.name}, Nebraska families at Platte River Orthodontics in Gretna. Braces, Invisalign, and complimentary consultations.`,
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
      image: 'office',
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
        body: 'Monday through Friday 7:00 am–7:00 pm and Saturday 9:00 am–3:00 pm.',
      },
      {
        icon: 'lucide:badge-check',
        title: 'A specialist',
        body: 'Board-certified orthodontic care, not a general dental add-on.',
      },
      {
        icon: 'lucide:calendar',
        title: 'A free first visit',
        body: 'The consultation is complimentary, with a clear conversation about cost.',
      },
    ],
  },
  related: [
    { label: 'Request an appointment', href: '/request-appointment/' },
    { label: 'Contact us', href: '/contact-us/' },
  ],
}));
