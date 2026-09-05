/**
 * Per-project configuration. This and `navigation.ts` are the two files that
 * must be filled in for every new site. Blank optional values ship nothing —
 * an empty analytics ID means that vendor's script is never emitted.
 */

export type SchemaBusinessType =
  | 'LocalBusiness'
  | 'ProfessionalService'
  | 'HomeAndConstructionBusiness'
  | 'Plumber'
  | 'Electrician'
  | 'RoofingContractor'
  | 'GeneralContractor'
  | 'Dentist'
  | 'Physician'
  | 'Attorney'
  | 'AccountingService'
  | 'InsuranceAgency'
  | 'RealEstateAgent';

export interface SiteConfig {
  /** Absolute origin, no trailing slash. Must match `site` in astro.config.mjs. */
  url: string;
  name: string;
  legalName?: string;
  tagline: string;
  description: string;
  locale: string;

  business: {
    schemaType: SchemaBusinessType;
    phone: string;
    /** Digits only, E.164 — used for tel: links. */
    phoneHref: string;
    email: string;
    address: {
      street: string;
      locality: string;
      region: string;
      postalCode: string;
      country: string;
    };
    /** Omit entirely for service-area businesses with no walk-in location. */
    geo?: { latitude: number; longitude: number };
    /** schema.org openingHours strings, e.g. 'Mo-Fr 08:00-17:00'. */
    hours: string[];
    priceRange?: string;
  };

  social: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    x?: string;
    youtube?: string;
    tiktok?: string;
  };

  /** Absolute or site-relative path to the fallback Open Graph image. */
  defaultOgImage: string;

  /** Relative path to the PHP form handler. Blank disables all forms. */
  formEndpoint: string;

  /**
   * Google reCAPTCHA v3 site key (public). Blank skips the widget. The matching
   * secret is configured server-side in ~/private/site-mail.php.
   */
  recaptchaSiteKey: string;

  analytics: {
    ga4: string;
    gtm: string;
    metaPixel: string;
    bingUet: string;
    clarity: string;
  };

  verification: {
    google: string;
    bing: string;
    meta: string;
  };

  /** 'none' is correct for US-only clients. Switch to 'banner' only when required. */
  consent: 'none' | 'banner';
}

export const site: SiteConfig = {
  url: 'https://platteriverorthodontics.com/',
  name: 'Platter River Orthodontics',
  legalName: 'Platter River Orthodontics',
  tagline: 'Your Smile, Our Passion',
  description:
    'Platter River Orthodontics is a leading orthodontic practice dedicated to providing exceptional care for patients of all ages. Our team of experienced orthodontists and staff are committed to helping you achieve a beautiful, healthy smile.',
  locale: 'en-US',

  business: {
    schemaType: 'LocalBusiness',
    phone: '4023228838',
    phoneHref: '+14023228838',
    email: 'smile@platterriverortho.com',
    address: {
      street: '11844 Standing Stone Dr, Suite 100',
      locality: 'Gretna',
      region: 'NE',
      postalCode: '68028',
      country: 'US',
    },
    geo: { latitude: 39.9612, longitude: -82.9988 },
    hours: ['Mo-Fr 07:00-19:00', 'Sa 09:00-15:00'],
    priceRange: '$$',
  },

  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61578598942216',
    instagram: 'https://www.instagram.com/platteriverorthodontics/',
    youtube: 'https://www.youtube.com/@PlatteRiverOrthodonticsGretnaN',
  },

  defaultOgImage: '/og-default.png',

  formEndpoint: '/api/submit.php',
  recaptchaSiteKey: '',

  analytics: {
    ga4: '',
    gtm: '',
    metaPixel: '',
    bingUet: '',
    clarity: '',
  },

  verification: {
    google: '',
    bing: '',
    meta: '',
  },

  consent: 'none',
};

export const formattedAddress = [
  site.business.address.street,
  `${site.business.address.locality}, ${site.business.address.region} ${site.business.address.postalCode}`,
].join(', ');

export const formattedPhone = site.business.phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');

export const topBarMessage = `Now Open in ${site.business.address.locality}, ${site.business.address.region} — ${site.business.address.street}`;

/** No configured ID means the analytics bundle is never mounted at all. */
export const hasAnalytics = Object.values(site.analytics).some(Boolean);
