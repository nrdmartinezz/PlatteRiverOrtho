import { cityPages } from './cities';
import { practicePages } from './practice';
import { treatmentPages } from './treatments';
import type { MarketingPageData } from './types';

export type { MarketingPageData } from './types';

export const marketingPages: MarketingPageData[] = [
  ...practicePages,
  ...treatmentPages,
  ...cityPages,
];

const bySlug = new Map(marketingPages.map((page) => [page.slug, page]));

export function getMarketingPage(slug: string): MarketingPageData | undefined {
  return bySlug.get(slug);
}
