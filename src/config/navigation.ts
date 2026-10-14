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

export interface DropdownPanel {
  kind: 'dropdown';
  groups: MegaColumn[];
}

export interface NavItem {
  label: string;
  /** Present when the top-level item is itself a destination. */
  href?: string;
  panel?: MegaPanel | DropdownPanel;
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
        kind: 'dropdown',
        groups: [
          {
            links: [
              { label: 'Meet Dr. Carter', href: '/meet-dr-carter/' },
              { label: 'Why Choose Us', href: '/why-choose-us/' },
              { label: 'Our Story & Mission', href: '/our-why/' },
              { label: 'Our Technology', href: '/technology/' },
            ],
          },
        ],
      },
    },
    {
      label: 'Treatments',
      panel: {
        kind: 'mega',
        columns: [
          {
            heading: 'Braces & Early Treatment',
            links: [
              { label: 'Braces Overview', href: '/braces/' },
              { label: 'Braces for Kids', href: '/braces/braces-for-kids/' },
              { label: 'Braces for Teens', href: '/braces/braces-for-teens/' },
              { label: 'Braces for Adults', href: '/braces/braces-for-adults/' },
              { label: 'Early Treatment', href: '/early-treatment/' },
            ],
          },
          {
            heading: 'Invisalign',
            links: [
              { label: 'Invisalign Overview', href: '/invisalign/' },
              { label: 'Invisalign First — for Kids', href: '/invisalign/invisalign-first/' },
              { label: 'Invisalign Teen', href: '/invisalign/invisalign-teen/' },
              { label: 'Invisalign for Adults', href: '/invisalign/invisalign-for-adults/' },
            ],
          },
          {
            heading: 'Additional Treatments',
            links: [
              { label: 'Surgical Orthodontics', href: '/surgical-orthodontics/' },
              { label: 'Retainers', href: '/retainers/' },
              { label: 'Teeth Whitening', href: '/teeth-whitening/' },
              { label: 'Airway Aware Treatment', href: '/airway-aware-treatment/' },
              { label: 'MARPE Treatment', href: '/services/marpe/' },
            ],
          },
        ],
        featured: {
          title: 'Not sure where to start?',
          body: 'Explore your treatment options.',
          href: '/request-appointment/',
          cta: 'Request Appointment',
        },
      },
    },
    {
      label: 'Patient Resources',
      panel: {
        kind: 'dropdown',
        groups: [
          {
            heading: 'For Patients',
            links: [
              { label: 'Your First Visit / What to Expect', href: '/what-to-expect/' },
              { label: 'Patient Portal', href: site.greyfinch.portal },
              { label: 'Happy Tooth Blog', href: '/happy-tooth-blog/' },
            ],
          },
          {
            heading: 'For Referring Doctors',
            links: [{ label: 'Refer a Patient', href: '/doctor-referral/' }],
          },
        ],
      },
    },
    { label: 'Contact Us', href: '/contact-us/' },
  ],

  cta: { label: 'Request Appointment', href: '/request-appointment/' },
  portal: { label: 'Patient Portal', href: site.greyfinch.portal },

  footer: [
    {
      heading: 'Quick Links',
      links: [
        { label: 'Meet Dr. Carter', href: '/meet-dr-carter/' },
        { label: 'Why Choose Us', href: '/why-choose-us/' },
        { label: 'Happy Tooth Blog', href: '/happy-tooth-blog/' },
        { label: 'Contact Us', href: '/contact-us/' },
        { label: 'Refer a Patient', href: '/doctor-referral/' },
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

  legal: [{ label: 'Privacy Statement', href: '/privacy-policy/' }],
};
