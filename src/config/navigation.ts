/**
 * One nav tree, rendered two ways. `Header` reads it for the simple desktop
 * nav today; `MegaMenu` and `MobileNav` read the same tree in Phase 4, so the
 * upgrade is additive rather than a rewrite.
 */

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
    { label: 'Home', href: '/' },
    { label: 'About Dr. Carter', href: '/#meet-dr-carter' },
    {
      label: 'Services',
      href: '/#services',
      panel: {
        kind: 'mega',
        columns: [
          {
            heading: 'Treatments',
            links: [
              {
                label: 'Invisalign® Clear Aligners',
                href: '/contact/',
                description: 'Nearly invisible trays, custom-planned for a discreet smile.',
                icon: 'lucide:sparkles',
              },
              {
                label: 'Fully Custom Braces',
                href: '/contact/',
                description: '3D-designed braces that are more efficient and comfortable.',
                icon: 'lucide:smile',
              },
              {
                label: 'Corrective Jaw Surgery',
                href: '/contact/',
                description: 'Surgical orthodontics for bite, airway, and facial balance.',
                icon: 'lucide:scan',
              },
              {
                label: 'MARPE Treatment',
                href: '/services/marpe/',
                description: 'Skeletal expansion for older teens and adults.',
                icon: 'lucide:activity',
              },
            ],
          },
        ],
        featured: {
          title: 'Not sure where to start?',
          body: 'Your first visit is complimentary. We will walk through the right treatment together.',
          href: '/contact/',
          cta: 'Book a free consult',
        },
      },
    },
    { label: 'Testimonials', href: '/#testimonials' },
    { label: 'Contact', href: '/contact/' },
  ],

  cta: { label: 'Book Your Free Consult', href: '/contact/' },
  portal: { label: 'Patient Portal', href: '' },

  footer: [
    {
      heading: 'Quick Links',
      links: [
        { label: 'About Dr. Carter', href: '/#meet-dr-carter' },
        { label: 'Services', href: '/#services' },
        { label: 'Patient Testimonials', href: '/#testimonials' },
        { label: 'Contact Us', href: '/contact/' },
        { label: 'MARPE Treatment', href: '/services/marpe/' },
      ],
    },
    {
      heading: 'Contact & Hours',
      links: [
        { label: 'Book a Consult', href: '/contact/' },
        { label: 'Call 402-322-8838', href: 'tel:+14023228838' },
        { label: 'smile@platteriverortho.com', href: 'mailto:smile@platteriverortho.com' },
      ],
    },
  ],

  legal: [
    { label: 'Privacy Policy', href: '/privacy/' },
    { label: 'Terms of Service', href: '/terms/' },
  ],
};
