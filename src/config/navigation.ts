/**
 * One nav tree, rendered by MegaMenu and MobileNav.
 */
import { formattedPhone, site } from './site';

export interface NavLink {
  label: string;
  href: string;
  description?: string;
  /** astro-icon name, e.g. 'lucide:wrench'. */
  icon?: string;
}

export interface MegaColumn {
  heading?: string;
  /** Landing page for the group label. On mobile, only that text navigates. */
  href?: string;
  links: NavLink[];
}

export interface MegaIntro {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  body: string;
}

export interface MegaSupport {
  text: string;
  cta: string;
  href: string;
}

export interface MegaCard {
  kind: 'card';
  eyebrow: string;
  title: string;
  body: string;
  href: string;
  cta: string;
  note?: string;
}

export interface MegaMedia {
  kind: 'media';
  title: string;
  body: string;
  href: string;
  cta: string;
}

export interface MegaOffice {
  kind: 'office';
  eyebrow: string;
}

export interface MegaPanel {
  kind: 'mega';
  variant: 'about' | 'treatments' | 'resources';
  intro?: MegaIntro;
  columns: MegaColumn[];
  feature?: MegaCard | MegaMedia | MegaOffice;
  support?: MegaSupport;
}

export interface LinkListPanel {
  kind: 'links';
  links: NavLink[];
}

export interface NavItem {
  label: string;
  /** Present when the top-level item is itself a destination. */
  href?: string;
  panel?: MegaPanel | LinkListPanel;
}

export interface NavigationConfig {
  primary: NavItem[];
  /** Right-hand call to action in the header. */
  cta?: { label: string; href: string };
  /** External patient login — leave href blank until the portal URL is set. */
  portal?: { label: string; href: string };
  footer: { heading: string; links: NavLink[] }[];
  legal: NavLink[];
}

const consultationFeature: MegaCard = {
  kind: 'card',
  eyebrow: "Let's find your fit",
  title: 'A thoughtful plan starts with a conversation.',
  body: 'Talk through your goals and treatment options at a complimentary consultation.',
  href: '/request-appointment/',
  cta: 'Request a Consultation',
  note: 'For children, teens, and adults.',
};

const consultationSupport: MegaSupport = {
  text: 'Personalized treatment for children, teens, and adults.',
  cta: 'Request a Consultation',
  href: '/request-appointment/',
};

export const navigation: NavigationConfig = {
  primary: [
    {
      label: 'About Us',
      panel: {
        kind: 'mega',
        variant: 'about',
        intro: {
          eyebrow: 'Get to know the practice',
          title: 'Personal care.',
          titleAccent: 'A welcoming place.',
          body: 'Meet the people and the approach behind your care at Platte River Orthodontics.',
        },
        columns: [
          {
            heading: 'Our practice',
            links: [
              {
                label: 'Meet Dr. Carter',
                href: '/meet-dr-carter/',
                description: 'Board-certified orthodontist, teacher, and Gretna neighbor.',
              },
              {
                label: 'Our Why',
                href: '/our-why/',
                description: 'World-class care with a servant’s heart.',
              },
              {
                label: 'Why Choose Us',
                href: '/why-choose-us/',
                description: 'Board-certified care, close to home.',
              },
            ],
          },
          {
            heading: 'Your visit',
            links: [
              {
                label: 'Technology',
                href: '/technology/',
                description: 'iTero, Grin monitoring, and custom braces.',
              },
              {
                label: 'What to Expect',
                href: '/what-to-expect/',
                description: 'Your first visit through retention.',
              },
              {
                label: 'Our Office',
                href: '/our-office/',
                description: 'The Gretna office, hours, and how to find us.',
              },
            ],
          },
        ],
        feature: { kind: 'office', eyebrow: 'Visit us in Gretna' },
        support: {
          text: 'Thoughtful orthodontic care in Gretna, Nebraska.',
          cta: `Call ${formattedPhone}`,
          href: `tel:${site.business.phoneHref}`,
        },
      },
    },
    {
      label: 'Braces',
      href: '/braces/',
      panel: {
        kind: 'mega',
        variant: 'treatments',
        columns: [
          {
            links: [
              {
                label: 'Braces',
                href: '/braces/',
                description: 'KLOwen fully custom braces.',
              },
              {
                label: 'Braces for Adults',
                href: '/braces/braces-for-adults/',
                description: 'Custom braces that fit adult life.',
              },
              {
                label: 'Braces for Teens',
                href: '/braces/braces-for-teens/',
                description: 'Care that fits school and sports.',
              },
              {
                label: 'Braces for Kids',
                href: '/braces/braces-for-kids/',
                description: 'A gentler start for younger patients.',
              },
              {
                label: 'Early Treatment',
                href: '/early-treatment/',
                description: 'A head start when the timing is right.',
              },
            ],
          },
        ],
        feature: consultationFeature,
        support: consultationSupport,
      },
    },
    {
      label: 'Invisalign',
      href: '/invisalign/',
      panel: {
        kind: 'mega',
        variant: 'treatments',
        columns: [
          {
            links: [
              {
                label: 'Invisalign',
                href: '/invisalign/',
                description: 'Clear, removable aligners for everyday life.',
              },
              {
                label: 'Invisalign First',
                href: '/invisalign/invisalign-first/',
                description: 'Early aligner treatment for growing smiles.',
              },
              {
                label: 'Invisalign Teen',
                href: '/invisalign/invisalign-teen/',
                description: 'A flexible option for busy school schedules.',
              },
              {
                label: 'Invisalign for Adults',
                href: '/invisalign/invisalign-for-adults/',
                description: 'Discreet aligners for refining your smile.',
              },
            ],
          },
        ],
        feature: consultationFeature,
        support: consultationSupport,
      },
    },
    {
      label: 'Other Treatments',
      panel: {
        kind: 'mega',
        variant: 'treatments',
        columns: [
          {
            links: [
              {
                label: 'Surgical Orthodontics',
                href: '/surgical-orthodontics/',
                description: 'Orthodontics paired with jaw surgery when needed.',
              },
              {
                label: 'Teeth Whitening',
                href: '/teeth-whitening/',
                description: 'Brighten your smile after treatment.',
              },
              {
                label: 'Retainers',
                href: '/retainers/',
                description: 'Keep your result once treatment is complete.',
              },
              {
                label: 'Airway Aware Treatment',
                href: '/airway-aware-treatment/',
                description: 'Care that considers breathing and alignment.',
              },
              {
                label: 'MARPE Treatment',
                href: '/services/marpe/',
                description: 'Palatal expansion for teens and adults.',
              },
            ],
          },
        ],
        feature: consultationFeature,
        support: consultationSupport,
      },
    },
    {
      label: 'Resources',
      panel: {
        kind: 'mega',
        variant: 'resources',
        intro: {
          eyebrow: 'Patient resources',
          title: 'A little clarity.',
          titleAccent: 'A confident start.',
          body: 'Everything you need to prepare for your visit and stay informed throughout your care.',
        },
        columns: [
          {
            heading: 'Plan your visit',
            links: [
              {
                label: 'Request a Consultation',
                href: '/request-appointment/',
                description: 'Tell us a time that works and we will follow up.',
              },
              {
                label: 'Contact Us',
                href: '/contact-us/',
                description: 'Reach the Gretna office by phone, email, or the form.',
              },
            ],
          },
          {
            heading: 'Good to know',
            links: [
              {
                label: 'Happy Tooth Blog',
                href: '/happy-tooth-blog/',
                description: 'Practical notes on braces, aligners, and everyday care.',
              },
              {
                label: 'Doctor Referral',
                href: '/doctor-referral/',
                description: 'A simple way for dentists to refer a patient.',
              },
            ],
          },
        ],
        feature: {
          kind: 'media',
          title: 'Start with a conversation.',
          body: 'Visit the Gretna office or request a time that works for you.',
          href: '/in-office-consultation/',
          cta: 'In-office consultation',
        },
        support: {
          text: 'Questions before your visit? Our team is here to help.',
          cta: `Call ${formattedPhone}`,
          href: `tel:${site.business.phoneHref}`,
        },
      },
    },
  ],

  cta: { label: 'Request a Consultation', href: '/request-appointment/' },
  portal: { label: 'Patient Portal', href: site.greyfinch.portal },

  footer: [
    {
      heading: 'Quick Links',
      links: [
        { label: 'Our Gretna Office', href: '/our-office/' },
        { label: 'Meet Dr. Carter', href: '/meet-dr-carter/' },
        { label: 'Why Choose Us', href: '/why-choose-us/' },
        { label: 'Happy Tooth Blog', href: '/happy-tooth-blog/' },
        { label: 'Contact Us', href: '/contact-us/' },
        { label: 'Doctor Referral', href: '/doctor-referral/' },
        { label: 'Request a Consultation', href: '/request-appointment/' },
        { label: 'Patient Portal', href: site.greyfinch.portal },
      ],
    },
    {
      heading: 'Areas We Serve',
      links: [
        {
          label: 'Ashland, NE',
          href: '/ashland-nebraska-orthodontist-platte-river-orthodontics/',
        },
        {
          label: 'Greenwood, NE',
          href: '/greenwood-nebraska-orthodontist-platte-river-orthodontics/',
        },
        {
          label: 'La Vista, NE',
          href: '/lavista-nebraska-orthodontist-platte-river-orthodontics/',
        },
        {
          label: 'Louisville, NE',
          href: '/louisville-nebraska-orthodontist-platte-river-orthodontics/',
        },
        {
          label: 'Millard, NE',
          href: '/millard-nebraska-orthodontist-platte-river-orthodontics/',
        },
        {
          label: 'Plattsmouth, NE',
          href: '/plattsmouth-nebraska-orthodontist-platte-river-orthodontics/',
        },
        {
          label: 'Springfield, NE',
          href: '/springfield-nebraska-orthodontist-platte-river-orthodontics/',
        },
        {
          label: 'Syracuse, NE',
          href: '/syracuse-nebraska-orthodontist-platte-river-orthodontics/',
        },
      ],
    },
  ],

  legal: [{ label: 'Privacy Policy', href: '/privacy-policy/' }],
};
