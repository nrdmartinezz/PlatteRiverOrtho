/**
 * One nav tree, rendered by MegaMenu and MobileNav.
 */
import { site } from './site';

export interface NavLink {
  label: string;
  href: string;
  description?: string;
  /** astro-icon name, e.g. 'lucide:wrench'. */
  icon?: string;
}

export interface MegaColumn {
  heading?: string;
  links: NavLink[];
}

export interface MegaPanel {
  kind: 'mega';
  columns: MegaColumn[];
  featured?: {
    title: string;
    body: string;
    href: string;
    cta: string;
  };
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

export const navigation: NavigationConfig = {
  primary: [
    {
      label: 'About Us',
      panel: {
        kind: 'links',
        links: [
          {
            label: 'Meet Dr. Carter',
            href: '/meet-dr-carter/',
            description: 'The story behind SnaggleTooth and this practice.',
          },
          {
            label: 'Our Why',
            href: '/our-why/',
            description: 'World-class care with a servant’s heart.',
          },
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
            label: 'Why Choose Us',
            href: '/why-choose-us/',
            description: 'Board-certified care, close to home.',
          },
        ],
      },
    },
    {
      label: 'Braces',
      href: '/braces/',
      panel: {
        kind: 'links',
        links: [
          {
            label: 'Braces Overview',
            href: '/braces/',
            description: 'KLOwen fully custom braces.',
          },
          { label: 'Braces for Adults', href: '/braces/braces-for-adults/' },
          { label: 'Braces for Teens', href: '/braces/braces-for-teens/' },
          { label: 'Braces for Kids', href: '/braces/braces-for-kids/' },
          { label: 'Early Treatment', href: '/early-treatment/' },
        ],
      },
    },
    {
      label: 'Invisalign',
      href: '/invisalign/',
      panel: {
        kind: 'links',
        links: [
          { label: 'Invisalign Overview', href: '/invisalign/' },
          { label: 'Invisalign First', href: '/invisalign/invisalign-first/' },
          { label: 'Invisalign Teen', href: '/invisalign/invisalign-teen/' },
          { label: 'Invisalign for Adults', href: '/invisalign/invisalign-for-adults/' },
        ],
      },
    },
    {
      label: 'Other Treatments',
      panel: {
        kind: 'links',
        links: [
          { label: 'Surgical Orthodontics', href: '/surgical-orthodontics/' },
          { label: 'Teeth Whitening', href: '/teeth-whitening/' },
          { label: 'Retainers', href: '/retainers/' },
          { label: 'Airway Aware Treatment', href: '/airway-aware-treatment/' },
          { label: 'MARPE Treatment', href: '/services/marpe/' },
        ],
      },
    },
    {
      label: 'Resources',
      panel: {
        kind: 'links',
        links: [
          { label: 'Happy Tooth Blog', href: '/happy-tooth-blog/' },
          { label: 'Contact Us', href: '/contact-us/' },
          { label: 'Doctor Referral', href: '/doctor-referral/' },
          { label: 'Request an Appointment', href: '/request-appointment/' },
        ],
      },
    },
  ],

  cta: { label: 'Request an Appointment', href: '/request-appointment/' },
  portal: { label: 'Patient Portal', href: site.greyfinch.portal },

  footer: [
    {
      heading: 'Quick Links',
      links: [
        { label: 'Meet Dr. Carter', href: '/meet-dr-carter/' },
        { label: 'Why Choose Us', href: '/why-choose-us/' },
        { label: 'Happy Tooth Blog', href: '/happy-tooth-blog/' },
        { label: 'Contact Us', href: '/contact-us/' },
        { label: 'Doctor Referral', href: '/doctor-referral/' },
        { label: 'Request an Appointment', href: '/request-appointment/' },
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
