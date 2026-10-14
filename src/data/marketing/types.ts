import type { SectionBackground } from '../../components/ui/Section.astro';

export type PageImage = 'office' | 'doctor' | 'braces' | 'invisalign' | 'jaw' | 'exterior';

export interface Crumb {
  name: string;
  href: string;
}

export interface FeatureBlock {
  eyebrow?: string;
  title: string;
  body: string | string[];
  bullets?: string[];
  image?: PageImage;
  reverse?: boolean;
  background?: SectionBackground;
}

export interface BenefitBlock {
  eyebrow?: string;
  title: string;
  body?: string;
  background?: SectionBackground;
  items: { icon: string; title: string; body: string }[];
}

export interface StepBlock {
  eyebrow?: string;
  title: string;
  body?: string;
  background?: SectionBackground;
  items: { title: string; body: string }[];
}

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  items?: string[];
}

export interface MarketingPageData {
  slug: string;
  title: string;
  description: string;
  breadcrumbs: Crumb[];
  serviceName?: string;
  image: PageImage;
  eyebrow: string;
  heroTitle: string;
  heroAccent?: string;
  heroBody: string | string[];
  features?: FeatureBlock[];
  benefits?: BenefitBlock;
  steps?: StepBlock;
  faqs?: { question: string; answer: string }[];
  related?: { label: string; href: string }[];
  showContact?: boolean;
  legal?: LegalSection[];
}
