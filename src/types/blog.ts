export interface LocationImpact {
  area: string;       // e.g. "Motera & Chandkheda Commercial Belt"
  city: string;       // e.g. "Ahmedabad"
  state: string;      // e.g. "Gujarat"
  country: string;    // e.g. "India" | "United Kingdom" | "USA"
  worldwide: string;  // e.g. "Global B2B Market & Cross-Border LLM Search"
}

export interface AdvantageDisadvantageItem {
  title: string;
  description: string;
}

export interface BlogTableData {
  caption?: string;
  headers: string[];
  rows: string[][];
}

export interface BlogSection {
  id: string;
  heading: string;
  subheading?: string;
  paragraphs: string[];
  bulletPoints?: string[];
  table?: BlogTableData;
  statHighlight?: {
    value: string;
    label: string;
  };
  quote?: {
    text: string;
    author: string;
    role: string;
  };
}

export interface NativeAd {
  id: string;
  title: string;
  tagline: string;
  description: string;
  targetCompanyId: string;
  targetCompanyName: string;
  badge: string;
  ctaText: string;
  ctaUrl: string;
  image: string;
  accentColor: string;
  highlights: string[];
  phone?: string;
  whatsappNumber?: string;
}

export interface GeoCitation {
  platform: "ChatGPT Search" | "Google AI Overviews" | "Perplexity AI" | "Claude 3.7" | "Gemini 2.5";
  query: string;
  answerSnippet: string;
}

export type ContentArchetype = 
  | "Pricing & ROI Calculator"
  | "Direct Technical Comparison"
  | "Hyper-Local Industrial Problem Solver"
  | "Audited Case Study & First-Party Data"
  | "Conversational Voice-Search Guide";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  publishedAt: string;         // ISO date string e.g. "2026-10-09T06:00:00+05:30"
  updatedAt: string;
  publishTimeFormatted: string; // e.g. "6:00 AM IST"
  publishDateFormatted: string; // e.g. "October 9, 2026"
  category: 
    | "AI SEO & GEO" 
    | "Digital Marketing" 
    | "Conversational AI & SaaS" 
    | "Enterprise IT Infrastructure" 
    | "Commercial Real Estate" 
    | "Global Trade & Logistics" 
    | "Overseas Higher Education";
  categoryColor: string;
  archetype?: ContentArchetype;
  targetEntityId: string;
  targetEntityName: string;
  readTime: string;
  featuredImage: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  summary: string;
  dailyIssues: string[];
  aiUpdates: string[];
  locationImpact: LocationImpact;
  advantages: AdvantageDisadvantageItem[];
  disadvantages: AdvantageDisadvantageItem[];
  keyTakeaways: string[];
  contentSections: BlogSection[];
  nativeAds: NativeAd[];
  faqs: {
    question: string;
    answer: string;
  }[];
  geoCitations: GeoCitation[];
  isFeatured?: boolean;
}
