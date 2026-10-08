import { BUSINESS_ENTITIES, BusinessEntity } from "./businesses";

export interface CompanyPackage {
  name: string;
  tagline: string;
  price: string;
  period: string;
  badge: string;
  highlight: boolean;
  features: string[];
}

export interface CompanyCaseStudy {
  sector: string;
  title: string;
  challenge: string;
  strategy: string;
  deliverables: string[];
  results: {
    metric1: string;
    label1: string;
    metric2: string;
    label2: string;
    metric3: string;
    label3: string;
  };
  quote: string;
  category?: "geo" | "google-seo" | "local-seo" | "meta-capi" | "all";
  primaryRank?: string;
  targetKeywords?: string[];
  clientIndustry?: string;
  region?: string;
  timeline?: string;
  techStack?: string[];
  verifiedSeal?: string;
  clientRole?: string;
}

export interface CompanyServiceItem {
  id: string;
  category: string;
  title: string;
  badge: string;
  tagline: string;
  timeline: string;
  product: string;
  deliverables: string[];
  idealFor: string;
  metric: string;
}

export interface InteractiveToolOption {
  label: string;
  value: string;
  detail: string;
  metric: string;
  extra?: string;
}

export interface CompanyInteractiveTool {
  type: string;
  title: string;
  subtitle: string;
  options: InteractiveToolOption[];
}

export interface CompanyWebsiteDetails {
  id: string;
  packages: CompanyPackage[];
  caseStudies: CompanyCaseStudy[];
  serviceCategories: { id: string; label: string }[];
  services: CompanyServiceItem[];
  interactiveTool: CompanyInteractiveTool;
  customNavLinks?: { label: string; href: string }[];
  highlightCorridors?: { name: string; areas: string; focus: string }[];
}

export const COMPANY_WEBSITES_DATA: Record<string, CompanyWebsiteDetails> = {
  // 1. Ahmedabad Marketing Solution
  "ahmedabad-marketing-solution": {
    id: "ahmedabad-marketing-solution",
    serviceCategories: [
      { id: "all", label: "All Services" },
      { id: "local-seo", label: "Google Maps 3-Pack" },
      { id: "paid-ads", label: "WhatsApp & Meta Ads" },
      { id: "ai-seo", label: "AI SEO / GEO" },
      { id: "creative", label: "Bilingual Branding" },
      { id: "tech", label: "Web & Hosting" }
    ],
    packages: [
      {
        name: "Starter Local Growth",
        tagline: "Essential local search presence for single-outlet retail & clinics.",
        price: "₹12,000",
        period: "/ month",
        badge: "Local Starter",
        highlight: false,
        features: [
          "Google Business Profile (GBP) 100% Geotagged",
          "Top 3 Google Maps local rank targeting",
          "15 local citations across Gujarat directories/mo",
          "Automated QR review generation tool",
          "Weekly Google updates & festive posts",
          "Monthly performance & call tracking report",
          "Standard email & phone support"
        ]
      },
      {
        name: "Pro Business Acceleration",
        tagline: "High-volume customer acquisition for showrooms, factories & clinics.",
        price: "₹25,000",
        period: "/ month",
        badge: "⭐ Most Popular",
        highlight: true,
        features: [
          "Everything in Starter Local Growth",
          "Priority Google Maps 3-Pack rank acceleration",
          "Meta & Instagram Click-to-WhatsApp ad funnels",
          "Laser radius targeting across Ahmedabad clusters",
          "Bilingual creative production (Gujarati + Hindi)",
          "Zero ad spend markup (100% direct client billing)",
          "Dedicated Account Growth Manager",
          "Bi-weekly live strategy review calls"
        ]
      },
      {
        name: "Enterprise Regional Dominance",
        tagline: "Total category dominance for large manufacturers, developers & chains.",
        price: "₹50,000",
        period: "/ month",
        badge: "Full Ecosystem",
        highlight: false,
        features: [
          "Everything in Pro Business Acceleration",
          "Multi-channel Google Search PPC & Retargeting",
          "Generative Engine Optimization (AI SEO & GEO)",
          "Schema.org entity mapping for ChatGPT & Gemini",
          "Dedicated cPanel Web Hosting & corporate email",
          "Full video reel & high-end graphic production",
          "Multi-city campaigns (Surat, Vadodara, Rajkot)",
          "JV Group Institutional SLA & executive oversight"
        ]
      }
    ],
    caseStudies: [
      {
        sector: "Sanand GIDC • Precision Manufacturing",
        title: "GIDC Industrial Machinery & Tooling Fabricator",
        challenge: "Reliant solely on offline broker networks and commission agents with zero direct customer inquiries from other states or local manufacturers.",
        strategy: "Deployed targeted B2B Google Search Ads targeting plant managers and purchase heads across Gujarat, Maharashtra & Rajasthan paired with verified technical catalog landing pages.",
        deliverables: [
          "Google Search PPC campaigns for 80+ high-intent industrial terms",
          "Technical catalog PDF download funnel with instant WhatsApp confirmation",
          "Geotagged Google Business Profile for factory facility verification",
          "Zero-click call extensions driving direct telephone inquiries"
        ],
        results: {
          metric1: "₹1.8 Cr",
          label1: "New Pipeline Created",
          metric2: "+420%",
          label2: "Inbound Inquiries",
          metric3: "45 Days",
          label3: "Time to First Deal"
        },
        quote: "AMS eliminated our dependence on commission brokers. Today, purchase managers from Mumbai and Pune call our sales team directly after finding us on Google."
      },
      {
        sector: "S.G. Highway • Luxury Retail",
        title: "Luxury Bridal Apparel & Jewelry Showroom",
        challenge: "High competition from national retail chains on weekends, with low weekday walk-ins despite prime S.G. Highway showroom positioning.",
        strategy: "Crafted hyper-local Instagram reels in native Gujarati & Hindi, geo-fenced festive promotions within 7km, and routed customers to Click-to-WhatsApp catalog previews.",
        deliverables: [
          "Bilingual festive ad creative production (Navratri & Wedding Season)",
          "Click-to-WhatsApp catalog preview with instant appointment booking",
          "Google Maps 3-Pack optimization for 'bridal jewelry near me'",
          "Automated QR review generation tool placed at checkout desk"
        ],
        results: {
          metric1: "3.4x",
          label1: "Walk-in Footfall",
          metric2: "1,850+",
          label2: "WhatsApp Inquiries",
          metric3: "₹18",
          label3: "Average Cost / Chat"
        },
        quote: "Bilingual ads in Gujarati changed the game for us. Customers walk into our showroom holding their phone showing the exact WhatsApp catalog item they liked."
      },
      {
        sector: "Bodakdev & Satellite • Healthcare",
        title: "Multispecialty Dental & Implant Clinic",
        challenge: "Completely invisible on Google Maps when patients searched 'dentist near me' or 'dental implants Bodakdev'.",
        strategy: "Complete Google Business Profile optimization, local citation building across Ahmedabad health directories, and automated patient review collection.",
        deliverables: [
          "100% geotagged GBP setup with doctor credentials and clinic tour photos",
          "QR review funnels generating 350+ genuine 5-star Google reviews",
          "Hyper-local Google Ads radius targeting high-net-worth residential colonies",
          "Direct Click-to-WhatsApp consultation booking button on mobile"
        ],
        results: {
          metric1: "#1 Rank",
          label1: "Google Maps 3-Pack",
          metric2: "+310%",
          label2: "Patient Call Volume",
          metric3: "350+",
          label3: "5-Star Google Reviews"
        },
        quote: "We went from 3 new inquiries a week to 8-12 calls every day. Google Maps is now the single largest driver of new patient walk-ins for our clinic."
      }
    ],
    services: [
      {
        id: "google-maps",
        category: "local-seo",
        title: "Google Maps 3-Pack Supremacy & Local SEO",
        badge: "Highest Inbound Footfall",
        tagline: "Rank in the top 3 on Google Maps when high-intent local customers search 'near me' across Ahmedabad.",
        timeline: "Initial results in 21 days • Full 3-Pack in 60-90 days",
        product: "Wapipulse Review Funnel & JV Maps Geotag Engine",
        deliverables: [
          "Complete Google Business Profile (GBP) audit, categorization & geotagging",
          "Geotagged high-resolution photo uploads with EXIF coordinate data",
          "Local citation building across 50+ verified Gujarat & India directories",
          "Automated QR code review collection system generating 5-star feedback"
        ],
        idealFor: "Retail stores, restaurants, multispecialty clinics, jewelry showrooms, local service centers",
        metric: "+380% Local Call Surge"
      },
      {
        id: "whatsapp-funnels",
        category: "paid-ads",
        title: "Click-to-WhatsApp Funnels & Meta Paid Acquisition",
        badge: "Highest Inbound ROI",
        tagline: "Laser-targeted Instagram & Facebook ads that route ready-to-buy customers directly into WhatsApp chats.",
        timeline: "Live within 3 business days • Daily ad optimization",
        product: "Wapipulse Click-to-WhatsApp Campaign Automation & Meta Pixel Bridge",
        deliverables: [
          "Hyper-local radius geotargeting (3km to 15km around your business)",
          "Pre-filled WhatsApp conversation starter templates with instant response prompts",
          "A/B creative testing with static graphics, carousel cards, and video reels",
          "100% direct ad billing transparency with zero agency markup on media spend"
        ],
        idealFor: "Showrooms, real estate channel partners, dental clinics, luxury fashion, interior decorators",
        metric: "₹14–₹28 / Direct Chat"
      },
      {
        id: "bilingual-branding",
        category: "creative",
        title: "Bilingual Branding & Regional Creative Studio",
        badge: "Deep Local Resonance",
        tagline: "Culturally authentic promotional assets in Gujarati, Hindi, and English that build genuine local trust.",
        timeline: "Ongoing monthly creative calendar",
        product: "Wapipulse Social Lead Broadcaster & JV Creative Studio",
        deliverables: [
          "Social media graphics and video reel scripting in native Gujarati & Hindi",
          "Festival campaigns (Navratri, Diwali, Uttarayan, New Year) with regional offers",
          "Retail promotional collateral: standees, pamphlets, loyalty cards, and banners",
          "WhatsApp Business catalog design with pricing and product spec sheets"
        ],
        idealFor: "Regional retail brands, sweets/farsan manufacturers, ethnic wear, regional FMCG",
        metric: "4.8x Emotional Trust"
      },
      {
        id: "ai-seo",
        category: "ai-seo",
        title: "Generative Engine Optimization (AI SEO & GEO)",
        badge: "Next-Gen AI Search",
        tagline: "Optimize your business so ChatGPT, Google AI Overviews, Perplexity, and Gemini cite you as the #1 authority in Ahmedabad.",
        timeline: "Continuous monthly AI authority building",
        product: "JV Proprietary AI Visibility Audit Tool & Schema Engine",
        deliverables: [
          "Entity architecture & schema.org LocalBusiness structured data implementation",
          "Direct question-and-answer extraction engineering for AI answer bots",
          "Semantic search content clusters matching conversational natural language queries",
          "Core Web Vitals acceleration to ensure sub-second mobile page loads"
        ],
        idealFor: "B2B manufacturers, hospitals, corporate consultants, educational institutions, tech startups",
        metric: "+353% AI Impressions"
      }
    ],
    interactiveTool: {
      type: "zone-simulator",
      title: "Ahmedabad Pin Code Visibility Simulator",
      subtitle: "Select a commercial corridor to preview rank potential and local search volume",
      options: [
        { label: "S.G. Highway (380054)", value: "sg-highway", detail: "Corporate & Tech Corridor", metric: "#1 Rank Target", extra: "1,420 monthly buyer searches" },
        { label: "Navrangpura (380009)", value: "navrangpura", detail: "Commercial CBD & Retail Hub", metric: "#1 Rank Target", extra: "980 monthly buyer searches" },
        { label: "Prahlad Nagar (380015)", value: "prahlad-nagar", detail: "HNW Residential & Trade", metric: "#1 Rank Target", extra: "1,150 monthly buyer searches" },
        { label: "Sindhu Bhavan (380058)", value: "sbr", detail: "High-End Luxury & Dining", metric: "#1 Rank Target", extra: "1,680 monthly buyer searches" },
        { label: "Sanand GIDC (382110)", value: "sanand", detail: "Heavy Engineering & Automobile", metric: "#1 Rank Target", extra: "740 industrial B2B searches" }
      ]
    },
    customNavLinks: [
      { label: "AI SEO / GEO", href: "/companies/ahmedabad-marketing-solution/ai-seo" },
      { label: "ROI Calculator", href: "/companies/ahmedabad-marketing-solution/roi-calculator" }
    ]
  },

  // 2. J.V Marketing Solution Pvt Ltd. (India)
  "jv-marketing-solution-pvt-ltd": {
    id: "jv-marketing-solution-pvt-ltd",
    serviceCategories: [
      { id: "all", label: "All Divisions" },
      { id: "digital-marketing", label: "Digital Marketing" },
      { id: "website-dev", label: "Website Development" },
      { id: "software-app", label: "Software & App Dev" },
      { id: "design-branding", label: "Design & Branding" },
      { id: "ai-solutions", label: "AI Solutions" }
    ],
    customNavLinks: [
      { label: "AI SEO / GEO", href: "/companies/jv-marketing-solution-pvt-ltd/ai-seo" }
    ],
    packages: [
      {
        name: "Global B2B Growth Sprint",
        tagline: "Targeted customer acquisition for mid-market B2B enterprises expanding in North America or India.",
        price: "$999",
        period: "/ month",
        badge: "Sprint Model",
        highlight: false,
        features: [
          "High-intent Google Search & Performance Max management",
          "Conversion Rate Optimization (CRO) audit & landing page engineering",
          "Bi-directional CRM sync (HubSpot, Salesforce, Zoho)",
          "Server-side Meta Conversions API (CAPI) configuration",
          "Lead quality scoring & automated sales team alerts",
          "Weekly sprint reporting with full ROAS attribution",
          "Dedicated Growth Manager & direct Slack channel access"
        ]
      },
      {
        name: "Full-Funnel Performance Retainer",
        tagline: "Enterprise growth engine uniting programmatic ads, SEO, and omnichannel retargeting.",
        price: "$1,999",
        period: "/ month",
        badge: "⭐ Enterprise Preferred",
        highlight: true,
        features: [
          "Everything in Global B2B Growth Sprint",
          "Multi-platform paid media: Google, LinkedIn B2B, Meta & YouTube",
          "Programmatic technical SEO for global search domination",
          "Automated email & WhatsApp lead nurturing workflows",
          "Dynamic creative optimization (A/B testing ad angles)",
          "Dedicated Senior Growth Director with daily Slack access",
          "Executive Boardroom ROI dashboard with live pipeline metrics"
        ]
      },
      {
        name: "Autonomous Revenue Engine",
        tagline: "Custom data pipelines, custom ad algorithms, and white-glove international expansion advisory.",
        price: "$4,999",
        period: "/ month",
        badge: "Institutional Scale",
        highlight: false,
        features: [
          "Everything in Full-Funnel Performance Retainer",
          "Custom API & data warehouse integrations (BigQuery / Snowflake)",
          "Proprietary predictive AI bidding algorithms",
          "Multi-country ad localization (USA, UK, Canada & Europe)",
          "Fractional VP of Growth strategic oversight",
          "SLA-guaranteed MQL-to-SQL pipeline generation",
          "Priority 24/7 incident response & live campaign adjustments"
        ]
      }
    ],
    caseStudies: [
      {
        sector: "Global Markets • Generative Engine Optimization (GEO)",
        title: "Dominate Google AI Overviews, Perplexity & ChatGPT Citations for Global B2B Machinery",
        challenge: "High-ticket industrial buyers stopped clicking traditional blue links and shifted to asking ChatGPT and Perplexity for technical vendor recommendations. The client had zero visibility in AI conversational engines, and competitor solutions were being cited.",
        strategy: "Deployed J.V Semantic Graph & Schema.org Knowledge Graph architecture, deployed the canonical /llms.txt retrieval feed, optimized conversational question-answering entity clusters, and established co-citation vectors across high-authority engineering databases.",
        category: "geo",
        primaryRank: "#1 in AI Citations (ChatGPT & Perplexity)",
        targetKeywords: [
          "Generative Engine Optimization GEO India",
          "AI Search Engine Citations",
          "Enterprise B2B Machinery Supplier",
          "Best Industrial Machinery Manufacturer"
        ],
        clientIndustry: "Heavy Industrial Machinery & Equipment",
        region: "Global (North America, Europe & India)",
        timeline: "45-Day AI Indexing Sprint",
        techStack: [
          "Schema.org JSON-LD Knowledge Graph",
          "Canonical /llms.txt AI Feeds",
          "Perplexity & ChatGPT Retrieval Optimization",
          "Next.js Semantic Architecture"
        ],
        verifiedSeal: "Audited AI Citation Pipeline",
        clientRole: "Chief Technology & Commercial Officer • Industrial Manufacturing Group",
        deliverables: [
          "Multi-entity Schema.org JSON-LD Knowledge Graph (Organization, Corporation, TechArticle)",
          "Canonical /llms.txt crawler ingestion protocol for GPTBot, ClaudeBot, and PerplexityBot",
          "Semantic cluster Q&A optimization capturing 92+ high-intent buyer query vectors",
          "Real-time AI citation monitor and direct LLM referral traffic analytics"
        ],
        results: {
          metric1: "#1 in AI",
          label1: "Perplexity & ChatGPT Citations",
          metric2: "+380%",
          label2: "AI Referral Traffic Growth",
          metric3: "$3.8M",
          label3: "Attributed Inbound Pipeline"
        },
        quote: "J.V Marketing Solution made our brand the direct recommendation across ChatGPT, Perplexity, and Google AI Overviews. When enterprise buyers query AI for machinery suppliers, we are cited as the top verified authority."
      },
      {
        sector: "North America • Enterprise B2B SaaS & Organic SEO",
        title: "Google #1 Search Domination & 4.6x Pipeline Scale for US Workforce SaaS",
        challenge: "Ranking on Page 3 for 28 high-intent commercial keywords. Extreme reliance on $420/demo LinkedIn ads with low lead-to-opportunity velocity and escalating customer acquisition costs.",
        strategy: "Rebuilt technical website architecture for sub-second Core Web Vitals, deployed programmatic semantic cluster content, built interactive ROI calculators, and dominated Google #1 rankings for high-intent search terms.",
        category: "google-seo",
        primaryRank: "Rank #1 on Google for 14 Core Keywords",
        targetKeywords: [
          "Enterprise Workforce Analytics SaaS",
          "B2B Shift Scheduling Platform",
          "Automated Workforce Compliance Software",
          "Enterprise Labor Cost Optimizer"
        ],
        clientIndustry: "Enterprise B2B Human Capital SaaS",
        region: "United States & Canada",
        timeline: "90-Day Organic Domination Sprint",
        techStack: [
          "Sub-second Core Web Vitals (99/100)",
          "Programmatic Semantic Silo Pages",
          "HubSpot Bi-directional CRM Integration",
          "Ekato Tech Interactive Calculator"
        ],
        verifiedSeal: "Verified Google SERP #1 Rank",
        clientRole: "VP of Demand Generation • US Workforce Analytics SaaS",
        deliverables: [
          "Programmatic B2B SEO architecture ranking for 14 #1 Google commercial search queries",
          "Sub-second interactive ROI calculator built by sister entity Ekato Tech",
          "Server-side Meta Conversions API (CAPI) & Google Enhanced Conversions",
          "Multi-touch HubSpot attribution modeling and automated sales team Slack alerts"
        ],
        results: {
          metric1: "Rank #1",
          label1: "Google Position #1 for 14 Terms",
          metric2: "4.6x",
          label2: "Organic ARR Pipeline Lift",
          metric3: "68%",
          label3: "Reduction in Blended CPA"
        },
        quote: "J.V Marketing Solution achieved what three prior agencies failed to do: they took us to Rank #1 on Google for our highest-value commercial terms and quadrupled our organic enterprise pipeline."
      },
      {
        sector: "United Kingdom & Europe • Local 3-Pack & Export SEO",
        title: "Google Map Pack #1 & International Export Acquisition Across UK & Europe",
        challenge: "Heavy dependence on traditional trade fairs resulting in declining order volume, zero predictable digital inquiries, and absence from Google 3-Pack local and regional map results.",
        strategy: "Launched geo-targeted entity authority pages, optimized Google Business Profile for #1 Map Pack positioning, launched multi-language semantic search engines, and integrated WhatsApp RFQ webhooks.",
        category: "local-seo",
        primaryRank: "Google 3-Pack #1 in 18 Industrial Categories",
        targetKeywords: [
          "Precision Engineering Exporter UK",
          "Custom CNC Machining Europe",
          "Industrial Metal Fabricators Birmingham",
          "Wholesale Engineering Components"
        ],
        clientIndustry: "Precision Industrial Engineering & Global Export",
        region: "United Kingdom & European Union",
        timeline: "60-Day Turnaround",
        techStack: [
          "Google 3-Pack Geo-Coordinate Citations",
          "Multi-language Technical Catalog Pages",
          "Wapipulse WhatsApp Webhook Automation",
          "Local Entity Schema Graph"
        ],
        verifiedSeal: "Audited Wholesale RFQ Inbound",
        clientRole: "Managing Director • UK Precision Engineering Exporter",
        deliverables: [
          "Google Map Pack #1 rankings across 18 high-value UK & EU industrial categories",
          "Multi-language Google Search campaigns in English & German with technical spec landing hubs",
          "Automated WhatsApp & Email quote generation engine via Wapipulse",
          "Bi-directional CRM webhook pipeline tracking and monthly closed-won attribution"
        ],
        results: {
          metric1: "£2.4M",
          label1: "New Export Contracts Won",
          metric2: "340+",
          label2: "Qualified Wholesale Inquiries",
          metric3: "5.8x",
          label3: "Average Campaign ROAS"
        },
        quote: "Within 60 days, we had more qualified European procurement inquiries than we generated during the entire previous year of trade exhibitions. J.V Marketing Solution's search execution is flawless."
      },
      {
        sector: "Pan-India Corporate • Server-Side Meta CAPI & Performance",
        title: "Server-Side Meta CAPI Attribution & AI Search Interception for D2C Tech Brand",
        challenge: "Ad fatigue and rising Meta CPMs combined with iOS 14.5+ signal loss causing customer acquisition cost to exceed unit gross margins, with fragmented browser attribution.",
        strategy: "Engineered proprietary First-Party Server-Side Meta Conversions API (CAPI), implemented algorithmic audience exclusions, deployed Click-to-WhatsApp buyer prompts, and intercepted high-intent search queries.",
        category: "meta-capi",
        primaryRank: "100% Deterministic First-Party Tracking",
        targetKeywords: [
          "Smart Consumer Electronics India",
          "Wireless Audio Brand Ahmedabad",
          "Next-Gen Wearables Online",
          "High Performance Gadgets India"
        ],
        clientIndustry: "Consumer Tech & Smart Electronics",
        region: "Pan-India Corporate Hub",
        timeline: "45-Day Scale Sprint",
        techStack: [
          "Server-Side Meta CAPI (9.8 Match)",
          "Wapipulse Click-to-WhatsApp Engine",
          "Dynamic Product Feed Optimization",
          "Algorithmic Budget Rebalancing Scripts"
        ],
        verifiedSeal: "Audited First-Party Data Attribution",
        clientRole: "Chief Marketing Officer • Smart Electronics Brand",
        deliverables: [
          "Proprietary Server-Side Meta Conversions API (CAPI) with 9.8/10 Event Match Quality",
          "Click-to-WhatsApp direct sales assistance via Wapipulse engine",
          "Abandoned cart automated recovery sequences with instant localized incentives",
          "Weekly unit-economics and CAC:LTV automated dashboards"
        ],
        results: {
          metric1: "₹8.2 Cr",
          label1: "Attributed Net Revenue",
          metric2: "5.2x",
          label2: "Blended Return on Ad Spend",
          metric3: "48%",
          label3: "Reduction in Customer Acquisition Cost"
        },
        quote: "J.V Marketing Solution operates with mathematical precision. Their software integrations and server-side tracking gave our executive team real-time visibility into every marketing rupee."
      },
      {
        sector: "Tier-1 Markets • Google AI Overviews & FinTech Knowledge Graph",
        title: "Google AI Overviews (Gemini) #1 Featured Snippet Takeover for Financial Infrastructure",
        challenge: "Google AI Overviews were capturing 65% of organic search clicks in the financial category. Traditional blog posts and landing pages experienced traffic drop-offs as Google answered queries inline.",
        strategy: "Restructured financial documentation into semantic question-answering entity nodes, injected schema microdata and comparison matrices, and optimized entity topical authority for Google Gemini LLM ingestion.",
        category: "geo",
        primaryRank: "84% Google AI Overview Snapshot Capture",
        targetKeywords: [
          "Enterprise B2B Payment Gateway India",
          "Cross-Border Settlement API",
          "Corporate Treasury Automation Platform",
          "Compliant Fintech Payment Rails"
        ],
        clientIndustry: "FinTech & Enterprise Banking Rails",
        region: "Global Tier-1 Financial Hubs",
        timeline: "60-Day Authority Sprint",
        techStack: [
          "Google AI Overview Gemini Optimizer",
          "FinancialProduct & FAQPage JSON-LD",
          "Sub-50ms Global Edge CDN Delivery",
          "Entity Authority Knowledge Graph"
        ],
        verifiedSeal: "Verified Gemini & Google SERP Proof",
        clientRole: "Head of Growth & Commercial Strategy • FinTech Platform",
        deliverables: [
          "84% Google AI Overview snapshot capture rate across primary commercial query clusters",
          "Full JSON-LD FAQPage, Service, and FinancialProduct Schema implementation",
          "Direct entity linking to official regulatory registers and JV Group authority",
          "Enterprise security compliance and sub-50ms TTFB edge CDN routing"
        ],
        results: {
          metric1: "84%",
          label1: "AI Overview Capture Share",
          metric2: "+215%",
          label2: "Organic CTR from AI Summaries",
          metric3: "$4.1M",
          label3: "New Enterprise Contract Pipeline"
        },
        quote: "While other agencies were panicked about AI search killing SEO, J.V Marketing Solution made AI Search our #1 customer acquisition channel."
      }
    ],
    services: [
      // 1. DIGITAL MARKETING
      {
        id: "ai-seo-services",
        category: "digital-marketing",
        title: "SEO Services & Generative Engine Optimization (AI SEO)",
        badge: "Search Dominance",
        tagline: "Rank at the top of Google, ChatGPT Search, Perplexity, and Google AI Overviews with programmatic SEO and semantic indexing.",
        timeline: "45-60 day indexing sprints • Ongoing growth",
        product: "JV Semantic Graph Engine & AI Overview Optimizer",
        deliverables: [
          "Technical enterprise SEO crawl & Core Web Vitals remediation",
          "Programmatic B2B SEO architecture capturing long-tail buyer intent",
          "AI Search Engine Optimization (GEO) for ChatGPT, Perplexity & Copilot",
          "High-authority institutional backlink acquisition & digital PR"
        ],
        idealFor: "B2B brands, exporters, enterprises seeking to capture intent-ready searchers",
        metric: "+280% High-Intent Organic Traffic"
      },
      {
        id: "lead-generation-paid-ads",
        category: "digital-marketing",
        title: "High-Ticket Lead Generation & Paid Media Advertising",
        badge: "Revenue Scaling",
        tagline: "Algorithmic paid media buying with predictive bidding across Google Search, Performance Max, Meta Ads, and LinkedIn B2B.",
        timeline: "Live in 5 business days • Daily optimization",
        product: "Predictive Bidding Engine & Server-Side Conversions API (CAPI)",
        deliverables: [
          "High-intent Google Search, Performance Max & YouTube video ads",
          "Precision LinkedIn B2B targeting by company size, title & industry",
          "Meta Ads with algorithmic creative split-testing & retargeting",
          "Sub-60s lead notification routing directly to sales reps"
        ],
        idealFor: "Corporate sales teams needing a predictable pipeline of qualified buyers",
        metric: "4.2x Average Enterprise ROAS"
      },
      {
        id: "content-social-growth",
        category: "digital-marketing",
        title: "Authority Content Marketing & Social Media Growth",
        badge: "Brand Authority",
        tagline: "High-converting thought leadership content, executive editorial calendars, and omnichannel social media presence.",
        timeline: "Monthly publication sprints",
        product: "Executive Content Studio & Social Distribution Network",
        deliverables: [
          "B2B thought leadership articles, case studies, and whitepapers",
          "LinkedIn and Instagram strategic content calendar with custom reels & carousels",
          "Active community engagement, comment management, and DM triage",
          "Monthly content attribution and buyer engagement analytics"
        ],
        idealFor: "Brands seeking to establish prestigious market authority and buyer trust",
        metric: "3.5x Buyer Engagement Lift"
      },

      // 2. WEBSITE DEVELOPMENT
      {
        id: "business-corporate-websites",
        category: "website-dev",
        title: "Custom Business Websites & Corporate Portals",
        badge: "Sub-Second Velocity",
        tagline: "High-performance enterprise websites built with Next.js, React, and Tailwind CSS with sub-second page loads.",
        timeline: "2 to 4 weeks deployment",
        product: "Next.js Sub-Second Corporate Architecture",
        deliverables: [
          "Bespoke modern UI/UX design matching corporate brand guidelines",
          "Sub-second load times with 95+ Google Core Web Vitals rating",
          "Responsive mobile, tablet, and desktop pixel-perfection",
          "Intuitive CMS integration for effortless client team updates"
        ],
        idealFor: "Enterprises needing an impressive, authoritative, and lightning-fast digital flagship",
        metric: "< 1.0s Global Response Velocity"
      },
      {
        id: "ecommerce-stores",
        category: "website-dev",
        title: "Full-Stack E-Commerce & Retail Platforms",
        badge: "Checkout Velocity",
        tagline: "High-conversion online stores on Shopify, WooCommerce, or headless Next.js engineered for frictionless buying.",
        timeline: "3 to 6 weeks launch",
        product: "Omnichannel Headless Commerce Suite",
        deliverables: [
          "Multi-currency, international payment gateways (Stripe, Razorpay, PayPal)",
          "Real-time ERP warehouse inventory synchronization",
          "Automated WhatsApp & Email abandoned cart recovery sequences",
          "Mobile-first checkout optimization maximizing Average Order Value"
        ],
        idealFor: "Direct-to-consumer brands, B2B wholesale portals, multi-SKU retailers",
        metric: "+42% Higher Checkout Conversion"
      },
      {
        id: "landing-pages-redesign",
        category: "website-dev",
        title: "High-Converting Landing Pages & Website Redesign",
        badge: "Conversion Engine",
        tagline: "Turn ad clicks into booked sales calls with psychology-driven landing pages, or modernize outdated legacy sites.",
        timeline: "5 to 10 business days",
        product: "Conversion-Tuned UI/UX & A/B Testing Framework",
        deliverables: [
          "Psychology-driven landing page layouts with dynamic ad keyword insertion",
          "Comprehensive UI/UX overhaul of outdated legacy corporate websites",
          "301 redirect mapping to protect and retain existing SEO rankings",
          "Friction-free multi-step lead forms connected to CRM webhooks"
        ],
        idealFor: "Companies running paid ads or businesses whose websites look outdated",
        metric: "+68% Baseline Conversion Lift"
      },
      {
        id: "website-maintenance-retainers",
        category: "website-dev",
        title: "24/7 Website Maintenance & Performance Retainers",
        badge: "99.9% Uptime SLA",
        tagline: "Round-the-clock technical maintenance, automated cloud backups, security patching, and on-demand dev hours.",
        timeline: "Ongoing continuous retainers",
        product: "Enterprise Managed Cloud & Web SLA Desk",
        deliverables: [
          "24/7 automated uptime and SSL certificate monitoring",
          "Daily automated cloud backups with instant disaster recovery rollback",
          "Monthly Core Web Vitals performance tune-ups and security patches",
          "Dedicated technical hours for content updates, bug fixes, and improvements"
        ],
        idealFor: "Enterprises requiring zero downtime, ironclad security, and dedicated tech support",
        metric: "99.9% Guaranteed Uptime SLA"
      },

      // 3. SOFTWARE & APP DEV
      {
        id: "custom-software-saas",
        category: "software-app",
        title: "Custom Software & Multi-Tenant SaaS Platforms",
        badge: "Proprietary IP",
        tagline: "Bespoke web applications, internal business software, and subscription SaaS products engineered for high scale.",
        timeline: "6 to 12 weeks agile release",
        product: "Cloud-Native Microservices Architecture",
        deliverables: [
          "Custom system architecture and technical requirement specifications",
          "Scalable microservices backend built with Node.js, Python, or Go",
          "Multi-tenant database partitioning and Stripe/Razorpay subscription billing",
          "Complete source code ownership and comprehensive technical documentation"
        ],
        idealFor: "Businesses requiring custom software that off-the-shelf tools cannot provide",
        metric: "100% Proprietary IP Ownership"
      },
      {
        id: "crm-systems-pipelines",
        category: "software-app",
        title: "Custom Enterprise CRM Systems & Sales Dashboards",
        badge: "Zero Lead Loss",
        tagline: "Tailored sales pipeline management, automated lead triage, rep commissions, and executive KPI forecasting.",
        timeline: "3 to 6 weeks deployment",
        product: "Custom CRM & Lead Intelligence Suite",
        deliverables: [
          "Visual drag-and-drop pipeline stages tailored to your unique sales cycle",
          "Automated follow-up triggers via WhatsApp, SMS, and Email",
          "Sales representative commission tracking and activity heatmaps",
          "Executive sales velocity and deal-close probability forecasting"
        ],
        idealFor: "Corporate sales teams, real estate agencies, B2B exporters, consulting firms",
        metric: "< 60s Lead-to-Rep Routing"
      },
      {
        id: "mobile-app-development",
        category: "software-app",
        title: "Cross-Platform iOS & Android Mobile Applications",
        badge: "Native Performance",
        tagline: "High-performance mobile apps built with Flutter and React Native for buttery-smooth performance on iOS and Android.",
        timeline: "6 to 10 weeks to store release",
        product: "Cross-Platform Mobile App Engine",
        deliverables: [
          "Single unified codebase targeting both Apple App Store and Google Play Store",
          "Push notifications, offline data caching, and biometric face/fingerprint authentication",
          "Sub-second cloud API integration with real-time database sync",
          "End-to-end app store submission and compliance management"
        ],
        idealFor: "SaaS products, consumer startups, field operations teams, logistics services",
        metric: "99.9% Crash-Free Session Rate"
      },
      {
        id: "api-integration-middleware",
        category: "software-app",
        title: "Enterprise API Integration & Cloud Webhook Middleware",
        badge: "Real-Time Sync",
        tagline: "Connect ad platforms, CRMs, WhatsApp APIs, ERPs, and accounting tools with custom two-way automated webhooks.",
        timeline: "Deployment in 72 hours",
        product: "Wapipulse Webhook Gateway & Custom API Connectors",
        deliverables: [
          "Two-way sync with HubSpot, Salesforce, Zoho, SAP, and LeadSquared",
          "Meta WhatsApp Cloud API integration for automated customer messaging",
          "High-throughput webhook listeners with automatic retry queues and error alerts",
          "Bank-grade API encryption and OAuth2 security authentication standards"
        ],
        idealFor: "Enterprises with disconnected software systems requiring seamless automation",
        metric: "Sub-Second Data Synchronization"
      },

      // 4. DESIGN & BRANDING
      {
        id: "logo-brand-identity",
        category: "design-branding",
        title: "Strategic Logo Design & Complete Brand Identity Systems",
        badge: "Visual Excellence",
        tagline: "Memorable logo marks, curated color palettes, typography hierarchy, and comprehensive corporate brand style guides.",
        timeline: "10 to 14 business days",
        product: "Executive Brand Identity Suite",
        deliverables: [
          "Distinctive logo mark concepts backed by industry positioning research",
          "Complete vector asset export package (SVG, EPS, PDF, High-Res PNG)",
          "Comprehensive 30+ page Brand Style Guide and typography rules",
          "Full commercial copyright transfer and intellectual property ownership"
        ],
        idealFor: "New startups, corporate rebrands, expanding corporate subsidiaries",
        metric: "100% Vector Precision & Scalability"
      },
      {
        id: "graphics-kit-banners",
        category: "design-branding",
        title: "Omnichannel Graphics Kits & High-Converting Digital Banners",
        badge: "High-CTR Creative",
        tagline: "Editable marketing asset libraries, Google display ad packages, high-CTR social banners, and pitch deck templates.",
        timeline: "5 to 10 business days",
        product: "Omnichannel Brand Asset Library",
        deliverables: [
          "Editable Figma / Canva templates for Instagram, LinkedIn, and Facebook",
          "Google Display Network ad packages across all standard IAB dimensions",
          "Executive pitch deck and client proposal presentation slide decks",
          "High-resolution vector graphics for trade show roll-up banners"
        ],
        idealFor: "Active corporate marketing teams needing polished, on-demand creative assets",
        metric: "50+ Multi-Format Reusable Assets"
      },
      {
        id: "visiting-cards-stationery",
        category: "design-branding",
        title: "Corporate Stationery, Visiting Cards & Print Collateral",
        badge: "Luxury Print Ready",
        tagline: "Luxury executive business cards, corporate letterheads, branded envelopes, and print-ready vector marketing collateral.",
        timeline: "3 to 5 business days",
        product: "Executive Print & Stationery Suite",
        deliverables: [
          "Premium visiting card designs with digital vCard QR code integration",
          "Corporate letterhead, envelope, and invoice template suite",
          "Luxury print specifications (Spot UV, Gold Foil, Embossing bleed guides)",
          "Print-ready CMYK 300 DPI vector PDF exports"
        ],
        idealFor: "Corporate executives, founders, sales directors, and enterprise representatives",
        metric: "300 DPI Luxury Print Standards"
      },

      // 5. AI SOLUTIONS
      {
        id: "workflow-automation-rpa",
        category: "ai-solutions",
        title: "Intelligent Workflow Automation & RPA Pipelines",
        badge: "Admin Elimination",
        tagline: "Automate repetitive manual operations, cross-platform data routing, document generation, and client handoffs.",
        timeline: "1 to 3 weeks deployment",
        product: "Enterprise RPA & Automated Flow Engine",
        deliverables: [
          "Operational bottleneck audit and workflow automation architecture",
          "Automated multi-step pipelines via custom Python, n8n, and webhooks",
          "Automated PDF invoice generation and instant WhatsApp notification dispatch",
          "Self-healing error-handling alert triggers with automatic retry protocols"
        ],
        idealFor: "Businesses losing employee hours to manual data entry and routine admin tasks",
        metric: "80% Reduction in Admin Overhead"
      },
      {
        id: "conversational-ai-chatbots",
        category: "ai-solutions",
        title: "Custom Conversational AI Chatbots & WhatsApp LLM Agents",
        badge: "24/7 Intelligence",
        tagline: "Intelligent AI assistants trained on your proprietary company data, capable of qualifying leads and booking demos 24/7.",
        timeline: "2 to 3 weeks deployment",
        product: "RAG-Powered Conversational AI Agent",
        deliverables: [
          "Custom RAG (Retrieval-Augmented Generation) knowledge base indexing",
          "Official Meta WhatsApp Cloud API and web chat widget integration",
          "Automated lead qualification and CRM contact creation",
          "Seamless human escalation handover when high-ticket opportunities arise"
        ],
        idealFor: "Enterprises seeking instant 24/7 lead qualification without expanding support headcount",
        metric: "Instant 24/7 Customer Engagement"
      },
      {
        id: "ai-marketing-predictive",
        category: "ai-solutions",
        title: "AI-Powered Marketing Optimization & Predictive Bidding",
        badge: "Predictive ROAS",
        tagline: "Harness machine learning models to predict customer churn, generate winning ad hooks, and shift budgets dynamically.",
        timeline: "Ongoing algorithmic execution",
        product: "Predictive Ad Optimization & AI Bidding Model",
        deliverables: [
          "Predictive audience segmentation and dynamic lookalike modeling",
          "Algorithmic ad copy and headline generation with automated testing",
          "Dynamic creative optimization adjusting visual elements to buyer intent",
          "Real-time bid adjustments based on historical conversion likelihood"
        ],
        idealFor: "Brands spending significantly on digital ads wanting maximum ROAS efficiency",
        metric: "+40% Marketing Efficiency Gain"
      },
      {
        id: "enterprise-business-ai",
        category: "ai-solutions",
        title: "Enterprise Business AI Strategy & Decision Intelligence",
        badge: "Private & Secure",
        tagline: "Private, secure Large Language Models (LLMs) and computer vision systems tailored directly into your core business operations.",
        timeline: "4 to 8 weeks implementation",
        product: "Private Enterprise LLM & Decision Cockpit",
        deliverables: [
          "Private, sandboxed LLM deployment ensuring zero proprietary data leakage",
          "Automated document parsing and data extraction from contracts and invoices",
          "Executive decision-intelligence dashboards summarizing complex data",
          "Staff training and operational change management for AI adoption"
        ],
        idealFor: "Enterprises seeking defensible competitive advantages through private AI systems",
        metric: "Zero Data Leakage • SOC2 Standard"
      }
    ],
    interactiveTool: {
      type: "ad-calculator",
      title: "Enterprise Growth Simulator",
      subtitle: "Simulate projected revenue pipeline based on target market and media investment",
      options: [
        { label: "USA B2B SaaS ($5k/mo Ad Spend)", value: "us-saas", detail: "North American Enterprise Tech", metric: "$42k-$65k Pipeline/mo", extra: "Avg CAC: $140 • 35-48 MQLs" },
        { label: "UK Industrial Exporter (£4k/mo)", value: "uk-export", detail: "European Wholesale & B2B Distribution", metric: "£38k-£55k Pipeline/mo", extra: "Avg ROAS: 4.8x • 28 High-Ticket RFPs" },
        { label: "Pan-India Corporate (₹3L/mo)", value: "india-corp", detail: "Domestic B2B & High-Value Services", metric: "₹25L-₹40L Pipeline/mo", extra: "Avg Cost/Lead: ₹85 • 180+ Calls" },
        { label: "Global E-Commerce ($8k/mo)", value: "global-ecom", detail: "Omnichannel Multi-Country Retail", metric: "$48k-$72k Revenue/mo", extra: "Avg ROAS: 4.5x • 1,200+ Orders" }
      ]
    }
  },

  // 3. J.V Marketing Solutions Ltd. (Global Brand)
  "jv-marketing-solutions-ltd-global": {
    id: "jv-marketing-solutions-ltd-global",
    serviceCategories: [
      { id: "all", label: "All Capabilities" },
      { id: "multi-ad", label: "Multi-Network Ads" },
      { id: "mobile-web", label: "Mobile & Web Apps" },
      { id: "cloud-it", label: "IT Cloud & DevOps" },
      { id: "expansion", label: "Global Advisory" }
    ],
    packages: [
      {
        name: "Global Brand Launchpad",
        tagline: "Comprehensive digital infrastructure and multi-channel ad presence for international market entry.",
        price: "$4,000",
        period: "/ month",
        badge: "Market Entry",
        highlight: false,
        features: [
          "Multi-network ad configuration across Meta, Instagram, Google Search & LinkedIn",
          "International brand localization and tone-of-voice alignment (UK/USA)",
          "Sub-second corporate web portal audit and optimization",
          "GDPR & CCPA compliance verification for digital tracking",
          "Multi-currency conversion tracking in USD, GBP & EUR",
          "Dedicated London and New York timezone account leadership"
        ]
      },
      {
        name: "Omni-Network & Mobile Acceleration",
        tagline: "Unifying mobile application engineering, multi-platform ads, and cloud infrastructure.",
        price: "$8,500",
        period: "/ month",
        badge: "⭐ Global Flagship",
        highlight: true,
        features: [
          "Everything in Global Brand Launchpad",
          "Mobile app install & engagement ads (iOS & Android)",
          "Viral short-form creative production across TikTok & Snapchat",
          "Full cloud infrastructure management (AWS / Azure / GCP) with 99.99% uptime",
          "Continuous DevOps, automated CI/CD pipelines & zero-downtime deployments",
          "Executive Board KPI reports with blended multi-channel attribution"
        ]
      },
      {
        name: "Multinational Enterprise MSA",
        tagline: "Consolidated Master Services Agreement covering corporate software, IT backbone, and global marketing.",
        price: "$15,000+",
        period: "/ month",
        badge: "Corporate MSA",
        highlight: false,
        features: [
          "Everything in Omni-Network & Mobile Acceleration",
          "Custom enterprise software architecture developed with sister entity Ekato Tech",
          "24/7 Managed NOC & mission-critical cyber defense monitoring",
          "Multi-national marketing localization across North America, Europe & Asia",
          "Dedicated full-stack engineering pod + dedicated media buying squad",
          "Custom Master Services Agreement with consolidated single-invoice billing"
        ]
      }
    ],
    caseStudies: [
      {
        sector: "United Kingdom • Fintech & Wealth Platform",
        title: "Omni-Channel Customer Acquisition for London Wealth App",
        challenge: "Strict FCA compliance requirements combined with intense ad competition across London financial corridors.",
        strategy: "Executed compliant B2B LinkedIn and Google Search campaigns paired with high-availability cloud architecture capable of handling 200,000+ simultaneous app sessions.",
        deliverables: [
          "FCA-compliant multi-channel ad copy across Google & LinkedIn",
          "AWS high-availability containerized microservices deployment",
          "Biometric security and zero-downtime database failover",
          "Multi-currency payment gateway and webhook integrations"
        ],
        results: {
          metric1: "15,000+",
          label1: "Verified App Installs",
          metric2: "99.99%",
          label2: "Cloud Infrastructure Uptime",
          metric3: "£3.2M",
          label3: "New Assets Under Management"
        },
        quote: "Having a single global partner handle both our technical cloud infrastructure and our multi-channel advertising gave our board tremendous confidence and execution velocity."
      },
      {
        sector: "United States • Cross-Border E-Commerce",
        title: "Multi-Network Black Friday Scaling for US Lifestyle Brand",
        challenge: "Needed to synchronize TikTok, Instagram Reels, Google Search, and Snapchat campaigns without crashing Magento web servers during holiday surges.",
        strategy: "Migrated server backbone to autoscaling cloud clusters and ran coordinated multi-network creative campaigns with sub-second page load times.",
        deliverables: [
          "Cloudflare Enterprise CDN and Redis cache caching layer",
          "Omni-platform advertising campaigns across Meta, TikTok, and Google",
          "Automated dynamic product ads (DPA) synced with inventory feeds",
          "24/7 technical monitoring during peak promotional periods"
        ],
        results: {
          metric1: "$3.8M",
          label1: "Holiday Gross Sales",
          metric2: "5.4x",
          label2: "Blended Return on Ad Spend",
          metric3: "0.00%",
          label3: "Server Downtime During Spike"
        },
        quote: "JV Marketing Solutions delivered flawless execution. Our store handled over 80,000 concurrent shoppers with sub-second load times while ads scaled aggressively."
      }
    ],
    services: [
      {
        id: "multi-network-ads",
        category: "multi-ad",
        title: "Multi-Network Paid Advertising (Meta, Google, LinkedIn, TikTok, Snap)",
        badge: "Omni-Presence",
        tagline: "Dominating high-converting channels with creative tailored specifically for Western B2B and consumer audiences.",
        timeline: "Active in 7 days",
        product: "Unified Ad Spend Console & Cross-Platform Pixel Engine",
        deliverables: [
          "LinkedIn B2B Account-Based Marketing targeting C-Suite executives",
          "TikTok & Snapchat short-form viral creative for high-velocity engagement",
          "Google Search & Performance Max commercial intent capture",
          "Cross-network sequential retargeting ensuring zero drop-off"
        ],
        idealFor: "Enterprises scaling across UK, USA, Canada, and global consumer markets",
        metric: "6+ Networks Synchronized"
      },
      {
        id: "software-mobile-dev",
        category: "mobile-web",
        title: "Enterprise Software & Mobile Application Development",
        badge: "Production Ready",
        tagline: "Resilient iOS and Android applications paired with high-performance corporate web platforms.",
        timeline: "Milestone sprints (30-90 days)",
        product: "Ekato Tech Engineering Stack & Flutter/React Native Framework",
        deliverables: [
          "Native iOS (Swift) and Android (Kotlin) or cross-platform Flutter development",
          "Enterprise web platforms built on Next.js, React, and Node.js microservices",
          "Enterprise API design, role-based access control, and SSO integration",
          "Comprehensive penetration testing and OWASP compliance"
        ],
        idealFor: "Corporate brands requiring bespoke consumer apps or internal enterprise platforms",
        metric: "Sub-Second Load Speeds"
      },
      {
        id: "it-infrastructure-mgmt",
        category: "cloud-it",
        title: "Global Cloud IT Infrastructure & DevOps Management",
        badge: "99.99% SLA",
        tagline: "Architecting, deploying, and managing mission-critical cloud clusters across AWS, Azure, and GCP.",
        timeline: "Continuous 24/7 Managed NOC",
        product: "JV Group Enterprise Cloud Architecture",
        deliverables: [
          "Zero-downtime cloud migration and containerization (Docker / Kubernetes)",
          "Automated off-site geo-redundant backups with instant disaster recovery",
          "24/7 proactive security monitoring and DDoS mitigation",
          "Continuous DevOps CI/CD pipeline management for engineering teams"
        ],
        idealFor: "Enterprises where even 10 minutes of server downtime equals tens of thousands in lost revenue",
        metric: "99.99% Guaranteed SLA Uptime"
      }
    ],
    interactiveTool: {
      type: "infra-checker",
      title: "Global Enterprise Architecture Matrix",
      subtitle: "Select your corporate challenge to view our integrated tech + ad solution",
      options: [
        { label: "UK / European Market Expansion", value: "uk-expansion", detail: "Omni-Network Paid Media + GDPR Compliance", metric: "Full Launch in 14 Days", extra: "LinkedIn B2B + Google Search + Localized Creatives" },
        { label: "US Cross-Border E-Commerce", value: "us-ecom", detail: "TikTok / Meta Ads + Autoscale Cloud Infrastructure", metric: "Handles 100k+ Concurrency", extra: "Zero downtime during flash sales & Black Friday" },
        { label: "FinTech & Regulated Web Applications", value: "fintech", detail: "FCA/SEC Ad Compliance + ISO/SOC2 Cloud Hosting", metric: "99.99% Uptime Guarantee", extra: "Zero-trust network architecture + Encrypted DB" },
        { label: "Consolidated Group IT & Ad MSA", value: "msa", detail: "Unified Master Services Agreement for All Entities", metric: "Single Monthly Corporate Invoice", extra: "One SLA covering software, cloud & global ads" }
      ]
    }
  },

  // 4. Ekato Tech
  "ekato-tech": {
    id: "ekato-tech",
    serviceCategories: [
      { id: "all", label: "All Engineering" },
      { id: "saas", label: "In-House SaaS" },
      { id: "web-mobile", label: "Web & Mobile" },
      { id: "erp", label: "Enterprise ERP" },
      { id: "whatsapp", label: "WhatsApp API" }
    ],
    packages: [
      {
        name: "Rapid MVP & Web Architecture Sprint",
        tagline: "Turn product concepts into production-grade Next.js web applications in 30 days.",
        price: "₹1,50,000",
        period: "/ project ($2,000 USD)",
        badge: "Startup Launchpad",
        highlight: false,
        features: [
          "Modern high-speed web application built with Next.js, React & Tailwind CSS",
          "Interactive mobile-first UI/UX designed in Figma with full component kit",
          "Headless CMS integration or custom PostgreSQL / MongoDB database",
          "SEO-first semantic code structure with 95+ Core Web Vitals score",
          "Automated CI/CD deployment on Vercel or AWS cloud",
          "100% full source code ownership and Git repository transfer"
        ]
      },
      {
        name: "Custom SaaS & Mobile Product Platform",
        tagline: "End-to-end full-stack digital product engineering for ambitious tech companies.",
        price: "₹3,50,000",
        period: "/ milestone ($4,500 USD)",
        badge: "⭐ Most Popular",
        highlight: true,
        features: [
          "Everything in Rapid MVP Sprint",
          "Cross-platform iOS and Android mobile app built with Flutter or React Native",
          "Multi-tenant backend microservices architecture with Node.js / Python",
          "Authentication, Stripe / Razorpay payment gateways & subscription billing",
          "Real-time WebSocket notifications & official WhatsApp API sync",
          "Comprehensive unit tests, automated staging environments & QA documentation",
          "3 Months post-launch SLA bug warranty & dedicated engineering support"
        ]
      },
      {
        name: "Enterprise ERP & Dedicated Tech Squad",
        tagline: "Custom Enterprise Resource Planning systems and long-term dedicated software pods.",
        price: "₹7,50,000+",
        period: "/ enterprise ($9,500+ USD)",
        badge: "Enterprise Suite",
        highlight: false,
        features: [
          "Complete bespoke ERP tailored to your inventory, billing, warehousing, and payroll",
          "Custom WhatsApp bot workflows & helpdesk ticketing integration",
          "Role-based access control (RBAC), audit trails & institutional compliance",
          "Dedicated squad: Tech Lead, 2 Full-Stack Engineers, UI Designer, QA Engineer",
          "Direct integration with proprietary SaaS products (Wapipulse, Ticket4service)",
          "Annual Maintenance Contract (AMC) with guaranteed 99.9% uptime SLA"
        ]
      }
    ],
    caseStudies: [
      {
        sector: "EdTech & Higher Education • University Systems",
        title: "Proprietary Admission CRM for Overseas Visa & University Group",
        challenge: "Counselors were losing 40% of prospective student leads due to fragmented WhatsApp chats, lost paperwork, and lack of follow-up visibility.",
        strategy: "Built a customized multi-branch Education CRM with automated WhatsApp reminders, document checklist tracking, and student application milestones.",
        deliverables: [
          "Multi-tenant Education CRM supporting 8 branch offices and 85 counselors",
          "Automated WhatsApp document submission notifications via Wapipulse",
          "Lead scoring engine assigning priority students to top counseling directors",
          "Real-time admissions conversion analytics dashboard"
        ],
        results: {
          metric1: "45,000+",
          label1: "Student Applications Processed",
          metric2: "3.2x",
          label2: "Counselor Follow-up Speed",
          metric3: "0%",
          label3: "Lost Inquiries"
        },
        quote: "Ekato Tech transformed how our institutions operate. What used to take days of manual spreadsheet auditing is now visible in real time on our counselor dashboard."
      },
      {
        sector: "SaaS Platforms • Conversational AI",
        title: "Engineering WapiPulse.com on Official Meta WhatsApp Cloud API",
        challenge: "Developing a resilient, multi-tenant enterprise SaaS capable of dispatching millions of WhatsApp broadcasts without latency or number bans.",
        strategy: "Architected a scalable distributed event-driven system with queue-based broadcast engines, drag-and-drop conversational bot builders, and multi-agent shared inboxes.",
        deliverables: [
          "Direct Meta WhatsApp Business Cloud API integration with zero third-party markups",
          "Visual drag-and-drop conversational chatbot flow builder",
          "Multi-agent shared team inbox with round-robin lead distribution",
          "Shopify & WooCommerce e-commerce webhook triggers for abandoned carts"
        ],
        results: {
          metric1: "2M+",
          label1: "Monthly API Messages Dispatched",
          metric2: "99.98%",
          label2: "System Message Delivery Rate",
          metric3: "98%",
          label3: "Average Open Rate for Clients"
        },
        quote: "WapiPulse has become JV Group's flagship commercial SaaS asset, engineered from the ground up by Ekato Tech's dedicated product team."
      },
      {
        sector: "Manufacturing & Distribution • Heavy Machinery",
        title: "Bespoke Enterprise ERP for Multi-Warehouse Equipment Manufacturer",
        challenge: "Severe inventory discrepancies across 6 warehouses, manual handwritten challans, and delayed GST invoice reconciliation.",
        strategy: "Designed and deployed a tailor-made ERP replacing legacy accounting software with real-time barcode inventory tracking, automated dispatch challans, and purchase order approvals.",
        deliverables: [
          "Multi-location inventory tracking with barcode scanner integration",
          "Automated GST billing, payment milestone reminders, and accounting reports",
          "Role-based floor manager mobile interface for dispatch verification",
          "Cloud database backup with automated hourly synchronization"
        ],
        results: {
          metric1: "94%",
          label1: "Reduction in Stock Discrepancies",
          metric2: "18 Days",
          label2: "Reduction in Payment Lag",
          metric3: "100%",
          label3: "Clear-Audit Compliance"
        },
        quote: "Our entire factory and warehouse ecosystem runs on Ekato Tech's custom ERP. We know the exact status and location of every machine part in real time."
      }
    ],
    services: [
      {
        id: "web-dev",
        category: "web-mobile",
        title: "Full-Stack Web Development (Next.js, React, Node.js)",
        badge: "Sub-Second Performance",
        tagline: "High-performance web architecture engineered for modern businesses, e-commerce, and SaaS platforms.",
        timeline: "Sprints from 14 to 45 days",
        product: "Next.js 15+ / React 19 / TypeScript / Tailwind Stack",
        deliverables: [
          "Sub-second page load times with 95+ Core Web Vitals score",
          "Interactive Figma UI design translated cleanly into reusable React components",
          "Secure RESTful & GraphQL API integrations with PostgreSQL / MongoDB",
          "Complete source code repository transfer with CI/CD automation"
        ],
        idealFor: "Startups, mid-market businesses, and corporate brands requiring bespoke web applications",
        metric: "Sub-Second Load Times"
      },
      {
        id: "mobile-dev",
        category: "web-mobile",
        title: "Mobile Application Development (iOS & Android)",
        badge: "Native Performance",
        tagline: "Sleek, intuitive mobile applications engineered with Flutter and React Native with real-time backend synchronization.",
        timeline: "45 to 90 days",
        product: "Flutter & React Native Cross-Platform Engine",
        deliverables: [
          "Native iOS and Android production apps published to App Store & Google Play",
          "Offline data synchronization and biometric (Face ID / Fingerprint) authentication",
          "Push notification infrastructure and real-time user activity feeds",
          "Seamless deep linking and in-app purchase payment gateways"
        ],
        idealFor: "Businesses wanting to connect directly with users via high-converting mobile experiences",
        metric: "4.8★ App Store Quality"
      },
      {
        id: "erp-custom",
        category: "erp",
        title: "Bespoke Enterprise ERP & Workflow Automation",
        badge: "Tailor-Made Operations",
        tagline: "Eliminate operational bottlenecks with ERP systems customized exactly to your workflow, inventory, and accounts.",
        timeline: "60 to 120 days milestone delivery",
        product: "Ekato Enterprise ERP Framework",
        deliverables: [
          "Multi-location inventory tracking, purchase orders, and warehouse logistics",
          "Automated billing, GST compliance, accounts receivable, and payroll modules",
          "Interactive management dashboards with drill-down financial analytics",
          "Role-based permissions ensuring strict internal security and auditability"
        ],
        idealFor: "Manufacturers, distributors, logistics providers, and multi-branch retail operations",
        metric: "100% Operational Fit"
      },
      {
        id: "whatsapp-api",
        category: "whatsapp",
        title: "Official WhatsApp Cloud API & Bot Development",
        badge: "Meta Verified Partner",
        tagline: "Transform customer communication with automated 24/7 AI chatbots, broadcast marketing, and CRM webhooks.",
        timeline: "Activation within 48 hours",
        product: "WapiPulse.com Platform Integration",
        deliverables: [
          "Official Meta WhatsApp Business Cloud API setup with zero ban risk",
          "Interactive conversational chatbot flows answering customer queries 24/7",
          "Automated broadcast campaign scheduling with 98% open rates",
          "Multi-agent collaborative shared inbox with automated lead routing"
        ],
        idealFor: "Any business wanting to automate customer inquiries, bookings, and promotional broadcasts",
        metric: "98% Message Open Rate"
      }
    ],
    interactiveTool: {
      type: "tech-stack",
      title: "Ekato Tech Software Blueprint & SaaS Matrix",
      subtitle: "Explore our 4 proprietary SaaS products and enterprise technology stack",
      options: [
        { label: "1. Wapipulse.com (WhatsApp SaaS)", value: "wapipulse", detail: "Official Meta Cloud API • Live at wapipulse.com", metric: "2M+ Monthly Messages", extra: "Broadcasts, visual AI bots & multi-agent team inbox" },
        { label: "2. Ticket4service.com (Helpdesk SaaS)", value: "ticket4service", detail: "Omnichannel Incident Management • Live at ticket4service.com", metric: "99.9% SLA Compliance", extra: "Email, WhatsApp & web ticket triage with CSAT tracking" },
        { label: "3. CRM (Education Admissions)", value: "crm-edu", detail: "Student Lifecycle & Consultancy Management", metric: "45k+ Applications Handled", extra: "Lead tracking, counselor allocation & university filing" },
        { label: "4. Enterprise Operations ERP", value: "erp-ops", detail: "Bespoke Inventory, Billing & Warehouse Logistics", metric: "94% Discrepancy Reduction", extra: "Multi-branch GST reconciliation & barcode scanner sync" }
      ]
    },
    customNavLinks: [
      { label: "In-House SaaS", href: "/companies/ekato-tech#specialized" }
    ]
  },

  // 5. J.V Infinity (Import Export - Freight & Logistics)
  "jv-infinity-import-export": {
    id: "jv-infinity-import-export",
    serviceCategories: [
      { id: "all", label: "All Logistics" },
      { id: "ocean", label: "Ocean Freight" },
      { id: "air", label: "Air Cargo" },
      { id: "customs", label: "Customs & Clearing" },
      { id: "warehouse", label: "Warehousing" }
    ],
    packages: [
      {
        name: "LCL Consolidated Freight",
        tagline: "Cost-effective Less-than-Container Load shipments for small-batch exporters and traders.",
        price: "Custom",
        period: "per CBM / KG",
        badge: "Consolidated Cargo",
        highlight: false,
        features: [
          "Consolidated ocean & air cargo space on scheduled global departures",
          "Origin dry port (ICD) pick-up and terminal warehouse handling",
          "Standard customs documentation filing via ICEGATE",
          "Real-time container milestone tracking from port to port",
          "Marine cargo transit insurance guidance",
          "Dedicated logistics account officer in Ahmedabad"
        ]
      },
      {
        name: "Dedicated FCL Ocean Container Contract",
        tagline: "Priority container logistics connecting Indian ports to North America, Europe, UAE & Asia.",
        price: "Competitive",
        period: "per TEU / FEU",
        badge: "⭐ Exporters Choice",
        highlight: true,
        features: [
          "Guaranteed space allocation for 20ft, 40ft, and High Cube containers",
          "Direct carrier contracts with premier shipping lines (Maersk, MSC, Hapag-Lloyd, CMA CGM)",
          "Factory container positioning and inland trailer haulage",
          "Fast-track customs clearance at Mundra, Hazira, Nhava Sheva & Pipavav ports",
          "Transparent ocean freight rates with zero unexpected destination surcharges",
          "Door-to-door (DDP / DAP) delivery options to overseas receivers"
        ]
      },
      {
        name: "Enterprise Global Supply Chain & Customs AMC",
        tagline: "Complete multimodal freight management, bonded warehousing, and trade compliance advisory.",
        price: "Corporate Retainer",
        period: "SLA Agreement",
        badge: "Full Supply Chain",
        highlight: false,
        features: [
          "Full-spectrum multimodal cargo logistics (Sea, Air, Road Haulage & Rail ICDs)",
          "Dedicated customs brokerage team preventing port demurrage and container detention",
          "Bonded & general warehousing with palletized storage and pick-and-pack fulfillment",
          "DGFT export-import licensing, Advance Authorization & Duty Drawback advisory",
          "Reefer temperature-controlled container solutions for food and chemical cargo",
          "Executive 24/7 hotline and monthly commercial logistics audits"
        ]
      }
    ],
    caseStudies: [
      {
        sector: "Ceramics & Building Materials • Export to USA",
        title: "Exporting 120 FCL Containers of Ceramic Tiles to Savannah & Houston",
        challenge: "Congested ports, soaring freight costs, and risk of severe container demurrage penalties on large ceramic tile shipments.",
        strategy: "Secured direct carrier contracts with priority container positioning at Mundra port and pre-cleared customs documentation before port gate-in.",
        deliverables: [
          "120 Heavy-duty 20ft container bookings with reinforced pallet securing",
          "Pre-clearance export filing through Mundra Port ICEGATE",
          "Marine cargo transit insurance covering zero breakages",
          "End-to-end inland trailer transit from Morbi factories to port terminal"
        ],
        results: {
          metric1: "120 FCL",
          label1: "Containers Delivered",
          metric2: "₹0",
          label2: "Demurrage / Detention Paid",
          metric3: "24 Days",
          label3: "Port-to-Port Transit Time"
        },
        quote: "JV Infinity gave us complete certainty on freight costs and container availability. Not a single shipment missed vessel cut-off."
      },
      {
        sector: "Pharmaceuticals & Healthcare • Air Cargo to Europe",
        title: "Time-Critical Temperature-Controlled Air Freight to Frankfurt",
        challenge: "High-value active pharmaceutical ingredients requiring strict +2°C to +8°C cold chain maintenance during entire transit.",
        strategy: "Coordinated active reefer air cargo containers with direct airline priority booking and expedited green-channel customs clearance at Ahmedabad international air cargo complex.",
        deliverables: [
          "Reefer container booking with continuous digital temperature data logging",
          "Expedited customs clearance under green-channel pharma compliance",
          "Direct flight connection from Ahmedabad to Frankfurt airport",
          "Cold-room transfer confirmation upon landing in Europe"
        ],
        results: {
          metric1: "36 Hours",
          label1: "Door-to-Airport Transit",
          metric2: "+4.2°C",
          label2: "Stable Temperature Maintained",
          metric3: "100%",
          label3: "Batch Quality Compliance"
        },
        quote: "Temperature excursions mean total batch loss in our industry. JV Infinity executed the air freight with military precision."
      }
    ],
    services: [
      {
        id: "ocean-freight",
        category: "ocean",
        title: "Ocean Freight Logistics (FCL & LCL)",
        badge: "Global Sea Gateways",
        tagline: "Reliable, cost-effective containerized ocean shipping connecting India to global trade gateways.",
        timeline: "Weekly scheduled vessel sailings",
        product: "Direct Shipping Line Booking Alliances",
        deliverables: [
          "FCL (20ft, 40ft, High Cube) and LCL consolidated sea cargo",
          "Port terminal handling and vessel slot reservations with leading shipping lines",
          "Marine insurance coverage protecting cargo against transit risks",
          "Transparent all-inclusive freight rates with zero hidden destination markups"
        ],
        idealFor: "Manufacturers, tile exporters, agro-commodity traders, chemical exporters, and bulk importers",
        metric: "100+ Global Ports Connected"
      },
      {
        id: "air-freight",
        category: "air",
        title: "Expedited & Scheduled Air Freight Cargo",
        badge: "Time-Critical Cargo",
        tagline: "Fast global air cargo services connecting major international airports with priority space allocations.",
        timeline: "24 to 72 hour global transit",
        product: "Direct Global Airline Cargo Network",
        deliverables: [
          "Priority airline booking for urgent commercial samples and high-value cargo",
          "Airport-to-airport and door-to-door express delivery models",
          "Hazardous (DG) cargo and temperature-controlled reefer capabilities",
          "Real-time airway bill (AWB) milestone tracking"
        ],
        idealFor: "Urgent engineering parts, pharmaceutical formulations, perishables, and fashion apparel",
        metric: "24-72h Global Delivery"
      },
      {
        id: "customs-brokerage",
        category: "customs",
        title: "Customs Brokerage & Regulatory Statutory Clearance",
        badge: "Zero Demurrage",
        tagline: "Expert customs classification, tariff assessment, and swift port terminal clearances.",
        timeline: "Same-day or next-day customs clearance",
        product: "ICEGATE Digital Customs Interface",
        deliverables: [
          "Accurate HS Code classification and tariff incentive optimization (RoDTEP/Duty Drawback)",
          "Complete documentation preparation (Bill of Entry / Shipping Bill / Certificate of Origin)",
          "Port authority liaison and terminal cargo inspection handling",
          "DGFT compliance advisory and Advance Authorization tracking"
        ],
        idealFor: "Exporters and importers seeking to eliminate costly container detention and demurrage",
        metric: "100% Statutory Compliance"
      },
      {
        id: "warehousing-haulage",
        category: "warehouse",
        title: "Warehousing, Inland Haulage & Supply Chain Hubs",
        badge: "Secure Storage",
        tagline: "Secure palletized storage, pick-and-pack fulfillment, and multi-axle trailer transport.",
        timeline: "Continuous fulfillment",
        product: "Bonded & General Warehouse Hubs",
        deliverables: [
          "Secure palletized warehouse storage with round-the-clock CCTV surveillance",
          "Multi-axle container trailer haulage connecting factories to ICDs and ports",
          "Pick-and-pack order fulfillment, re-packaging, and container stuffing/de-stuffing",
          "Real-time stock inventory reports and distribution logistics"
        ],
        idealFor: "Traders requiring consolidated inventory storage before export distribution",
        metric: "99.9% Stock Accuracy"
      }
    ],
    interactiveTool: {
      type: "freight-calculator",
      title: "Global Trade Route & Transit Time Explorer",
      subtitle: "Select your international destination route to check transit mode and typical transit days",
      options: [
        { label: "India to USA / Canada (East Coast - NY/Savannah)", value: "in-us-east", detail: "Ocean FCL via Mundra/Nhava Sheva", metric: "24-28 Days Sea", extra: "Air Cargo: 3-4 Days" },
        { label: "India to USA (West Coast - Los Angeles)", value: "in-us-west", detail: "Ocean FCL via Pacific or Trans-Shipment", metric: "30-35 Days Sea", extra: "Air Cargo: 3-4 Days" },
        { label: "India to UK / Europe (Felixstowe / Rotterdam)", value: "in-eu", detail: "Direct Mediterranean & Atlantic Sailings", metric: "20-25 Days Sea", extra: "Air Cargo: 2-3 Days" },
        { label: "India to UAE / Middle East (Jebel Ali / Dammam)", value: "in-gulf", detail: "Rapid Short-Sea Container Express", metric: "3-5 Days Sea", extra: "Air Cargo: 24 Hours" }
      ]
    }
  },

  // 6. J.V Real Estate
  "jv-real-estate": {
    id: "jv-real-estate",
    serviceCategories: [
      { id: "all", label: "All Properties" },
      { id: "commercial", label: "Corporate Offices" },
      { id: "land", label: "Land Banks & Industrial" },
      { id: "retail", label: "Showrooms & Retail" },
      { id: "legal", label: "NA / NOC Clearances" }
    ],
    packages: [
      {
        name: "Corporate Office & Commercial Scouting",
        tagline: "Locating, inspecting, and negotiating Grade-A office spaces across Ahmedabad & GIFT City.",
        price: "Standard",
        period: "Brokerage Advisory",
        badge: "Corporate Spaces",
        highlight: true,
        features: [
          "Scouting prime corporate office floors across SG Highway, SBR & GIFT City",
          "Detailed property due diligence and title verification by legal panel",
          "Floor plan optimization, carpet area verification, and parking slot allotment",
          "Commercial lease agreement negotiation ensuring favorable tenancy terms",
          "Furnished (plug-and-play) and bare-shell corporate options",
          "Dedicated commercial property director assisting from site visit to handover"
        ]
      },
      {
        name: "Industrial & Commercial Land Acquisition",
        tagline: "Strategic sourcing of clear-title land parcels for manufacturing plants, logistics hubs & developers.",
        price: "Tailored",
        period: "Transactional Advisory",
        badge: "Land Bank Sourcing",
        highlight: false,
        features: [
          "Sourcing large clear-title land banks in Sanand, Changodar, Bavla, and Dholera SIR",
          "Rigorous 30-year revenue title search and encumbrance certificate verification",
          "Zoning compliance assessment (Industrial, Commercial, Mixed Use)",
          "Boundary demarcation, government survey sheet verification, and physical inspection",
          "Direct negotiations with landholders eliminating multi-tier broker inflation",
          "End-to-end legal sale deed drafting, stamp duty registration, and mutation entry"
        ]
      },
      {
        name: "Full NA / NOC Regulatory Clearance Suite",
        tagline: "Government approvals, non-agricultural conversion, town planning clearances, and fire NOCs.",
        price: "Project Basis",
        period: "Statutory Processing",
        badge: "Regulatory Clearance",
        highlight: false,
        features: [
          "End-to-end guidance for Non-Agricultural (NA) conversion through Collector Office",
          "AUDA, GUDA, and Town Planning department plan sanctions and layout approvals",
          "Environmental, pollution control board (GPCB), and state fire NOC liaison",
          "Clear-title certification and public notice publication in regional newspapers",
          "Liaison with revenue authorities for Khata entry and 7/12 record updates",
          "Guaranteed legal compliance protecting investors against future litigation"
        ]
      }
    ],
    caseStudies: [
      {
        sector: "Corporate Infrastructure • GIFT City Corridor",
        title: "Acquisition of 22,000 Sq.Ft. Grade-A Corporate Office for Financial Institution",
        challenge: "Client needed a prestigious corporate headquarters with 100% clear legal title, high parking ratios, and zero lease ambiguity.",
        strategy: "Identified premier commercial tower on SG Highway extension, negotiated direct developer terms, and structured a 9-year long-term corporate lease.",
        deliverables: [
          "Comprehensive shortlisting of 6 Grade-A commercial towers",
          "Legal title due diligence by senior high-court property advocate",
          "Negotiated 14% below developer opening lease quote with 6 months fit-out period",
          "Complete registration of commercial lease agreement at sub-registrar office"
        ],
        results: {
          metric1: "22,000 Sq.Ft.",
          label1: "Prime Corporate Area",
          metric2: "₹18 Lakhs",
          label2: "Annual Lease Savings",
          metric3: "30 Days",
          label3: "Scouting to Registration"
        },
        quote: "JV Real Estate operates with unyielding transparency. In a market where brokers make inflated claims, their legal due diligence was immaculate."
      },
      {
        sector: "Industrial Land Bank • Sanand GIDC Belt",
        title: "35-Acre Clear-Title Industrial Land Acquisition for Auto Component Factory",
        challenge: "Fragmented agricultural land parcels owned by multiple family members with pending succession disputes.",
        strategy: "Consolidated all landholders, resolved hereditary partition issues legally, and obtained Non-Agricultural (NA Industrial) conversion in record time.",
        deliverables: [
          "Title resolution for 35 contiguous acres across 4 revenue survey numbers",
          "Complete NA Industrial permission processed through Collector Office",
          "Boundary fencing and official DILR government measurement demarcation",
          "Smooth sale deed execution and revenue mutation entry"
        ],
        results: {
          metric1: "35 Acres",
          label1: "Contiguous Industrial Land",
          metric2: "100%",
          label2: "Clear-Title NA Converted",
          metric3: "₹45 Cr",
          label3: "Total Transaction Volume"
        },
        quote: "Acquiring 35 acres without a single title hitch or boundary dispute was possible only because of JV Real Estate's deep revenue domain mastery."
      }
    ],
    services: [
      {
        id: "corporate-leasing",
        category: "commercial",
        title: "Commercial Spaces & Corporate Office Leasing",
        badge: "Grade-A Workspaces",
        tagline: "Finding, vetting, and securing prestigious office spaces and retail avenues across Ahmedabad's top business corridors.",
        timeline: "Immediate inventory available",
        product: "JV Curated Commercial Registry",
        deliverables: [
          "Grade-A corporate office scouting across SG Highway, SBR, Bodakdev, and GIFT City",
          "Commercial lease negotiations, tenant representation, and lock-in period advisory",
          "Bare-shell and plug-and-play furnished options with modern infrastructure",
          "High-footfall ground-floor retail showrooms for national brands and luxury jewelers"
        ],
        idealFor: "Corporate enterprises, IT software hubs, fintech firms, multinational consulting offices, and retail showrooms",
        metric: "Grade-A Verified Buildings"
      },
      {
        id: "land-acquisition",
        category: "land",
        title: "Land Acquisition & Industrial Land Banks",
        badge: "Clear-Title Land",
        tagline: "Strategic identification and transaction of clear-title land parcels for industrial, residential, and commercial developments.",
        timeline: "Project based (30-90 days)",
        product: "Direct Landholder Sourcing Network",
        deliverables: [
          "Contiguous industrial land bank sourcing in Sanand, Changodar, Bavla, and Dholera",
          "30-year revenue title search, encumbrance verification, and pedhinama scrutiny",
          "Zoning compliance, master plan verification, and government survey measurements",
          "Direct transparent transactions between buyer and seller with zero broker inflation"
        ],
        idealFor: "Manufacturing units, logistics parks, warehouse developers, real estate builders, and institutional investors",
        metric: "100% Legal Due Diligence"
      },
      {
        id: "na-noc-clearances",
        category: "legal",
        title: "NA / NOC Government Regulatory Clearances",
        badge: "Statutory Approvals",
        tagline: "End-to-end guidance for Non-Agricultural conversion, Town Planning approvals, and statutory NOCs.",
        timeline: "30 to 60 days government processing",
        product: "Revenue Department Advisory Cell",
        deliverables: [
          "Non-Agricultural (NA Commercial / NA Industrial / NA Residential) conversion filing",
          "AUDA, GUDA, and Town Planning department layout and development permissions",
          "Environmental, fire department, and pollution board statutory clearances",
          "Sub-registrar sale deed registration and revenue Khata mutation entry"
        ],
        idealFor: "Landowners, corporate developers, and investors requiring government clearance",
        metric: "Airtight Legal Clearances"
      }
    ],
    interactiveTool: {
      type: "property-finder",
      title: "Ahmedabad & GIFT City Property Corridor Explorer",
      subtitle: "Select a key business corridor to view property types and prevailing commercial trends",
      options: [
        { label: "S.G. Highway Commercial Corridor", value: "sgh", detail: "Grade-A Corporate Offices & Retail", metric: "₹45 - ₹75 / sq.ft lease", extra: "Ideal for IT, Finance & Corporate HQ" },
        { label: "Sindhu Bhavan Road (SBR)", value: "sbr", detail: "Ultra-Luxury Corporate & Fine Dining", metric: "₹65 - ₹110 / sq.ft lease", extra: "Prestigious high-net-worth commercial addresses" },
        { label: "GIFT City Financial Centre Corridor", value: "gift", detail: "SEZ & Non-SEZ International Business Towers", metric: "High Appreciation Corridors", extra: "Tax-incentivized global banking & tech zone" },
        { label: "Sanand & Changodar Industrial Belts", value: "sanand-ind", detail: "Industrial Land Banks & Heavy Engineering", metric: "₹8,000 - ₹22,000 / sq.yd land", extra: "Direct highway access & GIDC power infrastructure" }
      ]
    }
  },

  // 7. J.V IT Infrastructure Management
  "jv-it-infrastructure-management": {
    id: "jv-it-infrastructure-management",
    serviceCategories: [
      { id: "all", label: "All Infrastructure" },
      { id: "cloud", label: "Cloud & Servers" },
      { id: "network", label: "Networking" },
      { id: "security", label: "Cybersecurity & CCTV" },
      { id: "amc", label: "Enterprise AMC" }
    ],
    packages: [
      {
        name: "Corporate Network & Office IT Setup",
        tagline: "Structured cabling, enterprise Wi-Fi 6, firewall installation, and workstation deployment.",
        price: "Custom",
        period: "per Office Setup",
        badge: "Turnkey Office IT",
        highlight: false,
        features: [
          "High-speed structured Cat6/Fiber optic cabling and patch panel termination",
          "Enterprise Wi-Fi 6 deployment (Ubiquiti / Cisco) with guest isolation",
          "Next-Gen Hardware Firewall deployment (Fortinet / Sophos) with web filtering",
          "IP PBX intercom and conference room audio-visual installation",
          "Workstation setup, corporate domain join, and endpoint security configuration",
          "Full cable labeling, rack elevation blueprints, and network architecture documentation"
        ]
      },
      {
        name: "Hybrid Cloud & High-Availability Server Management",
        tagline: "24/7 management of cloud clusters, Linux/Windows servers, databases, and automated backups.",
        price: "₹18,000",
        period: "/ month ($250 USD)",
        badge: "⭐ Cloud Operations",
        highlight: true,
        features: [
          "Architecting and monitoring multi-cloud servers across AWS, Azure, and Private Cloud",
          "Proactive 24/7 uptime monitoring with automated 15-minute engineer incident dispatch",
          "Automated daily off-site encrypted cloud backups with disaster recovery testing",
          "Database performance tuning (PostgreSQL, MySQL, MongoDB, Redis)",
          "OS security patch management, SSL certificate renewals, and vulnerability scans",
          "Monthly infrastructure health scorecards and cloud cost optimization recommendations"
        ]
      },
      {
        name: "Mission-Critical Enterprise IT AMC (24/7 SLA)",
        tagline: "Annual Maintenance Contract ensuring zero hardware downtime, on-site engineer visits, and cyber defense.",
        price: "Corporate AMC",
        period: "Annual Contract",
        badge: "Enterprise SLA",
        highlight: false,
        features: [
          "Comprehensive Annual Maintenance Contract (AMC) for servers, networks, and workstations",
          "Guaranteed 15-minute remote response time and rapid on-site engineer dispatch in Ahmedabad",
          "Biometric access control, multi-zone IP CCTV surveillance, and attendance sync",
          "Zero-Trust cybersecurity defense, automated ransomware protection, and email filtering",
          "Loaner standby hardware provision during repairs to ensure zero business downtime",
          "Dedicated Infrastructure Account Director with quarterly IT roadmap reviews"
        ]
      }
    ],
    caseStudies: [
      {
        sector: "Corporate Headquarters • Financial Advisory",
        title: "Zero-Trust Enterprise Network for 450-User Corporate Office",
        challenge: "Frequent Wi-Fi drops, sluggish file transfers, and security vulnerabilities caused by unmanaged consumer networking equipment.",
        strategy: "Replaced legacy routers with enterprise Fortinet firewalls, Ubiquiti high-density Wi-Fi 6 access points, and isolated VLANs for departments.",
        deliverables: [
          "Structured 10Gbps fiber backbone with 48-port Cisco Gigabit PoE switches",
          "High-density Wi-Fi 6 covering 3 corporate floors with seamless roaming",
          "Dual-WAN failover with automated ISP failover preventing internet downtime",
          "Biometric access control integrated with centralized HR payroll database"
        ],
        results: {
          metric1: "99.99%",
          label1: "Network Uptime Maintained",
          metric2: "0 Drops",
          label2: "During Board Video Calls",
          metric3: "100%",
          label3: "Data Security Compliance"
        },
        quote: "Our team experienced zero connectivity issues from day one of deployment. JV IT Infrastructure transformed our workplace reliability."
      },
      {
        sector: "Hospitality & Healthcare • Hospital Network",
        title: "24/7 High-Availability Server Infrastructure for Multispecialty Hospital",
        challenge: "Hospital cannot tolerate even 1 minute of patient record database downtime or medical imaging PACS latency.",
        strategy: "Deployed virtualized dual-node high-availability Proxmox server cluster with automated real-time replication and off-site cloud disaster recovery.",
        deliverables: [
          "Dual-node redundant server cluster with automated instant failover (< 3 seconds)",
          "High-speed NVMe storage arrays serving 80,000+ patient records instantly",
          "Automated hourly encrypted off-site cloud backups",
          "24/7 Managed NOC monitoring server temperature, disk health, and memory"
        ],
        results: {
          metric1: "100%",
          label1: "Uptime Across 12 Months",
          metric2: "< 3 Sec",
          label2: "Automated Failover Time",
          metric3: "0 Bytes",
          label3: "Patient Data Lost"
        },
        quote: "In emergency healthcare, reliable servers save lives. JV IT Infrastructure delivered unbreakable digital architecture backed by a 24/7 monitoring desk."
      }
    ],
    services: [
      {
        id: "server-cloud-mgmt",
        category: "cloud",
        title: "Server & Hybrid Cloud Management (AWS, Azure, Linux)",
        badge: "High Availability",
        tagline: "Architecting, provisioning, and maintaining high-availability Linux/Windows servers, databases, and multi-cloud clusters.",
        timeline: "24/7 Proactive Monitoring",
        product: "JV Managed Cloud Operations Center",
        deliverables: [
          "Multi-cloud server provisioning and workload optimization across AWS and Azure",
          "Virtualization (Proxmox / VMware) maximizing hardware efficiency",
          "Automated off-site encrypted backups with verified disaster recovery runs",
          "Proactive CPU, RAM, and disk utilization monitoring alerting before bottlenecks occur"
        ],
        idealFor: "Software companies, hospitals, manufacturing operations, corporate portals, and institutions",
        metric: "99.99% Uptime Standard"
      },
      {
        id: "network-engineering",
        category: "network",
        title: "Enterprise Networking Solutions (SD-WAN, Fiber, Wi-Fi 6)",
        badge: "Zero Latency",
        tagline: "High-throughput campus and corporate networking with Cisco, Ubiquiti, and enterprise-grade SD-WAN architectures.",
        timeline: "Turnkey deployment",
        product: "Enterprise Cisco & Ubiquiti Hardware",
        deliverables: [
          "Structured Cat6 and fiber optic backbone cabling with certified fluke test reports",
          "High-density Wi-Fi 6 access point deployment with zero-handoff roaming",
          "Dual-WAN and multi-ISP load balancing with automatic instant failover",
          "VLAN segmentation separating guest networks, voice PBX, and corporate data"
        ],
        idealFor: "Corporate offices, industrial plants, universities, and commercial showrooms",
        metric: "Zero-Downtime Failover"
      },
      {
        id: "cybersecurity-cctv",
        category: "security",
        title: "Cybersecurity, Firewalls & IP Surveillance",
        badge: "Zero-Trust Defense",
        tagline: "Zero-trust cyber defenses combined with high-definition IP CCTV surveillance and biometric access control.",
        timeline: "Continuous protection",
        product: "Fortinet / Sophos Next-Gen Security",
        deliverables: [
          "Next-Gen hardware firewall deployment with real-time intrusion prevention (IPS)",
          "Centralized anti-ransomware endpoint protection across all company laptops",
          "Multi-camera IP CCTV surveillance systems with remote mobile app viewing",
          "Biometric fingerprint and facial recognition access control systems"
        ],
        idealFor: "Enterprises storing sensitive customer records, financial institutions, and manufacturing facilities",
        metric: "Zero-Trust Security"
      },
      {
        id: "enterprise-amc",
        category: "amc",
        title: "Enterprise IT Maintenance Contracts (AMC)",
        badge: "Guaranteed SLA",
        tagline: "Proactive annual maintenance contracts ensuring zero hardware downtime and rapid on-site engineer dispatch.",
        timeline: "Annual comprehensive SLA",
        product: "JV SLA Maintenance Contract",
        deliverables: [
          "Guaranteed 15-minute remote helpdesk response and priority on-site dispatch in Gujarat",
          "Preventive bi-monthly hardware cleaning, thermal paste refresh, and fan audits",
          "Standby loaner equipment provided during emergency repairs",
          "Dedicated IT systems engineer assigned as primary corporate contact"
        ],
        idealFor: "Growing businesses seeking professional IT support without the overhead of full-time IT staff",
        metric: "< 15 Min Helpdesk SLA"
      }
    ],
    interactiveTool: {
      type: "infra-checker",
      title: "IT Infrastructure Health & Uptime Diagnostic",
      subtitle: "Select your company's scale to view recommended infrastructure SLA blueprint",
      options: [
        { label: "Growing SME Office (15 - 50 Users)", value: "sme-50", detail: "Dual-WAN Router + Cat6 Cabling + Sophos Firewall", metric: "< 15 Min Helpdesk SLA", extra: "Includes proactive quarterly PC maintenance" },
        { label: "Corporate Headquarters (50 - 250 Users)", value: "corp-250", detail: "Ubiquiti Wi-Fi 6 + Fortinet HA + Proxmox Virtualization", metric: "99.99% Uptime Guarantee", extra: "Dual-ISP automated failover & biometric access" },
        { label: "Industrial Manufacturing Plant (Multi-Acre)", value: "factory", detail: "Industrial Fiber Backbone + Rugged Switches + IP CCTV", metric: "Weatherproof Network", extra: "Covers shop floor, warehouses & admin blocks" },
        { label: "Mission-Critical Cloud Cluster", value: "cloud-cluster", detail: "AWS/Azure Managed Clusters + 24/7 NOC Monitoring", metric: "Zero Data Loss SLA", extra: "Hourly automated off-site backups & failover" }
      ]
    }
  },

  // 8. J.V OVERSEAS
  "jv-overseas": {
    id: "jv-overseas",
    serviceCategories: [
      { id: "all", label: "All Pathways" },
      { id: "master", label: "Master Programs" },
      { id: "work", label: "Work Visas" },
      { id: "visitor", label: "Visitor & Business" },
      { id: "travel", label: "Travel & Forex" }
    ],
    packages: [
      {
        name: "Global Master's Degree Admissions Suite",
        tagline: "End-to-end guidance from university shortlisting and SOP drafting to confirmed offer letter and visa approval.",
        price: "Comprehensive",
        period: "Student Package",
        badge: "⭐ Primary Specialty",
        highlight: true,
        features: [
          "Strategic university shortlisting matching student profile, budget, and career goals",
          "Expert Statement of Purpose (SOP) and Letters of Recommendation (LOR) drafting",
          "Direct university application filing and priority offer letter follow-up",
          "Scholarship assistance and educational loan guidance with top national banks",
          "Airtight student visa dossier preparation and financial documentation verification",
          "Pre-departure orientation, international student accommodation & alumni connections"
        ]
      },
      {
        name: "Post-Study Work Permit & Skilled Work Visa",
        tagline: "Navigating post-study work rights (PSW), skilled worker visas, and global career transitions.",
        price: "Consultation",
        period: "Visa Processing",
        badge: "Work Pathways",
        highlight: false,
        features: [
          "Post-Study Work Permit (PSW / PGWP) applications in UK, Canada & Australia",
          "UK Skilled Worker Visa and employer-sponsored work permit documentation guidance",
          "Point-based system calculations and occupation in-demand list assessments",
          "Complete legal dossier preparation minimizing embassy rejection risks",
          "Mock visa interview sessions with experienced immigration counselors",
          "Guidance on family dependent visas and spouse work rights abroad"
        ]
      },
      {
        name: "VIP Corporate, Visitor & Pre-Departure Suite",
        tagline: "Visitor visas, business exploration permits, discounted student airfares, and international forex.",
        price: "Fast-Track",
        period: "Travel Concierge",
        badge: "Complete Mobility",
        highlight: false,
        features: [
          "Visitor & tourist visa processing for parents attending graduations or family visits",
          "Fast-track business visas for corporate executives attending international conferences",
          "Student discount international flight ticket procurement with extra baggage allowance",
          "Foreign currency exchange (Forex card) and international student SIM card delivery",
          "Mandatory Overseas Student Health Cover (OSHC) & comprehensive travel insurance",
          "Overseas blocked account setup (German Blocked Account / Canada GIC)"
        ]
      }
    ],
    caseStudies: [
      {
        sector: "Study Abroad • United Kingdom",
        title: "120+ Master's Degree Admissions to Russell Group UK Universities",
        challenge: "Students faced confusing visa regulations, strict financial proof requirements, and competitive admission standards.",
        strategy: "Delivered personalized university profile matching, assisted with STEM course selection offering 2-year post-study work visas, and conducted mock visa interviews.",
        deliverables: [
          "Applications to prestigious universities including Manchester, Birmingham, Leeds, and Sheffield",
          "Personalized Statement of Purpose (SOP) refinement highlighting research credentials",
          "Bank loan and financial solvency documentation verification",
          "Full pre-departure briefing in Ahmedabad with flight and accommodation bookings"
        ],
        results: {
          metric1: "98.4%",
          label1: "UK Visa Approval Rate",
          metric2: "£420,000+",
          label2: "Scholarships Secured",
          metric3: "120+",
          label3: "Students Landed in UK"
        },
        quote: "J.V OVERSEAS guided me from my first counseling session in Ahmedabad to getting my student visa in just 14 days without any hassle."
      },
      {
        sector: "Global Career Mobility • Canada",
        title: "Guiding 45 STEM Professionals to Canadian Post-Study Work Pathways",
        challenge: "Stringent Canadian immigration policy updates requiring exact alignment between previous degree and chosen Canadian master's program.",
        strategy: "Selected accredited public universities offering 3-year Post-Graduation Work Permits (PGWP) and guided applicants through airtight financial proof submissions.",
        deliverables: [
          "Strategic selection of Designated Learning Institutions (DLI) with PGWP eligibility",
          "Complete GIC account setup and tuition fee transfer coordination",
          "Detailed Statement of Purpose explaining long-term career rationale to visa officer",
          "Spouse open work permit processing for married candidates"
        ],
        results: {
          metric1: "97.2%",
          label1: "Canada Visa Approval Rate",
          metric2: "45",
          label2: "Successful Candidates",
          metric3: "3 Years",
          label3: "Work Permit Eligibility"
        },
        quote: "Their team understands immigration laws deeply. They helped me pick the right university in Ontario that gave me a full 3-year work permit after graduation."
      }
    ],
    services: [
      {
        id: "masters-admissions",
        category: "master",
        title: "Master's Degree University Admissions (UK, USA, Canada, Australia)",
        badge: "Core Specialty",
        tagline: "University shortlisting, SOP/LOR drafting, scholarship filings, and confirmed offer letters.",
        timeline: "Admissions cycle planning (30-60 days)",
        product: "Direct University Liaison Registry",
        deliverables: [
          "Strategic university shortlisting matching academic profile, career trajectory, and budget",
          "Professional SOP and LOR crafting highlighting research acumen and leadership",
          "Scholarship application submission maximizing tuition fee waivers",
          "Direct coordination with international admissions offices for fast-track offer turnaround"
        ],
        idealFor: "Undergraduate degree holders and working professionals aspiring to study abroad",
        metric: "98% Visa Success Rate"
      },
      {
        id: "work-visas",
        category: "work",
        title: "Work Visas & Post-Study Work Permit Guidance",
        badge: "Career Pathways",
        tagline: "Navigating post-study work permits (PSW), skilled worker visas, and global employer sponsorships.",
        timeline: "Visa processing (15-45 days)",
        product: "Global Mobility Legal Advisory",
        deliverables: [
          "Post-study work permit applications in UK (Graduate Route), Canada (PGWP), and Australia",
          "Skilled worker visa eligibility points calculation and documentation review",
          "Spouse dependent visa and open work permit processing",
          "Comprehensive mock interview preparation for embassy appointment"
        ],
        idealFor: "International graduates and skilled professionals transitioning to global careers",
        metric: "100% Transparent Advice"
      },
      {
        id: "visitor-business-visas",
        category: "visitor",
        title: "Visitor Visas & Business Exploration Permits",
        badge: "High Approval",
        tagline: "High-approval documentation for parent visits, graduation attendance, corporate meetings, and tourism.",
        timeline: "Fast-track processing",
        product: "Embassy Dossier Engine",
        deliverables: [
          "Accurate visa dossier preparation with complete proof of ties to home country",
          "Sponsor letter verification and invitation documentation review",
          "Embassy appointment scheduling and biometric enrollment coordination",
          "Cover letter drafting tailored specifically to country immigration requirements"
        ],
        idealFor: "Parents of students studying abroad, business travelers, and families planning foreign travel",
        metric: "High Visa Approval"
      },
      {
        id: "travel-forex",
        category: "travel",
        title: "Student Flight Ticketing, Forex & Pre-Departure Logistics",
        badge: "Turnkey Travel",
        tagline: "Ticketing, international SIM cards, foreign exchange (Forex), and verified student accommodation.",
        timeline: "Completed before departure",
        product: "JV Travel & Forex Desk",
        deliverables: [
          "Discounted student airfares with extra 40kg+ international baggage allowance",
          "International multi-currency Forex cards and student health insurance (OSHC/travel)",
          "Foreign blocked account opening (German Blocked Account / Canada GIC)",
          "Pre-departure briefing with student buddy networks in destination cities"
        ],
        idealFor: "All students and families traveling abroad for academic or professional pursuits",
        metric: "Complete Pre-Departure Care"
      }
    ],
    interactiveTool: {
      type: "visa-checker",
      title: "Global Destination Pathway Selector",
      subtitle: "Select your dream destination to preview post-study work rights and intake seasons",
      options: [
        { label: "United Kingdom (UK)", value: "uk", detail: "1-Year Master's Degree • 2-Year Post-Study Work Visa (PSW)", metric: "Sept & Jan Intakes", extra: "Russell Group Universities • No GRE required" },
        { label: "Canada", value: "ca", detail: "2-Year Master's / PG Diploma • Up to 3-Year PGWP Work Permit", metric: "Sept, Jan & May Intakes", extra: "Direct pathway to Express Entry / Permanent Residency" },
        { label: "United States (USA)", value: "usa", detail: "STEM Master's Programs • 3-Year OPT Extension", metric: "Fall & Spring Intakes", extra: "World-class Ivy League & State Universities" },
        { label: "Australia & New Zealand", value: "aus", detail: "Top Group of 8 Universities • Post-Study Work Rights", metric: "Feb & July Intakes", extra: "High minimum wage & excellent quality of life" }
      ]
    }
  },

  // 9. Campus Dekho
  "campus-dekho": {
    id: "campus-dekho",
    serviceCategories: [
      { id: "all", label: "All Platform Features" },
      { id: "discovery", label: "College Discovery" },
      { id: "counseling", label: "Admission Counseling" },
      { id: "colleges", label: "Institution Partnerships" }
    ],
    packages: [
      {
        name: "Student College Discovery & Comparison (Free)",
        tagline: "Search, filter, and compare accredited colleges across India with verified data.",
        price: "Free",
        period: "for All Students",
        badge: "Open Platform",
        highlight: false,
        features: [
          "Search over 5,000+ verified engineering, management, medical, law, and arts colleges",
          "Compare verified tuition fees, hostel charges, and official placement statistics",
          "View entrance exam cut-off score predictions (JEE, NEET, CAT, CMAT, GUJCET)",
          "Read genuine student reviews and explore campus facilities virtual tours",
          "Save shortlisted colleges and download detailed brochure PDFs instantly"
        ]
      },
      {
        name: "Direct Admission Counseling (Student Pro)",
        tagline: "Dedicated 1-on-1 counseling with educational experts to guarantee the right college choice.",
        price: "₹1,999",
        period: "per Student Session",
        badge: "⭐ Personalized Guidance",
        highlight: true,
        features: [
          "1-on-1 personalized counseling session with senior academic advisors",
          "Customized college shortlisting based on exact rank, budget, and location preferences",
          "Direct application assistance bypassing confusing third-party admission agents",
          "Information on merit-based and government scholarship opportunities",
          "Dedicated WhatsApp counselor support until final seat allocation is confirmed"
        ]
      },
      {
        name: "Institution Partnership & Featured Listings",
        tagline: "Helping universities and colleges reach qualified prospective students through targeted digital showcases.",
        price: "Institutional",
        period: "Annual Partnership",
        badge: "For Colleges & Universities",
        highlight: false,
        features: [
          "Verified institution profile on campusdekho.in with official badge",
          "Direct student inquiry routing with real-time lead alert dashboard",
          "Featured spotlight in category rankings and regional city search results",
          "Webinar and virtual open house promotion to student aspirant databases",
          "Dedicated institutional account manager and monthly engagement analytics"
        ]
      }
    ],
    caseStudies: [
      {
        sector: "Higher Education Portal • National Reach",
        title: "250,000+ Students Guided to Verified Higher Education Institutions",
        challenge: "Confusing admission processes, unverified broker claims, and hidden college fee structures misleading students across tier-2 and tier-3 towns.",
        strategy: "Built campusdekho.in into an unbiased search and discovery marketplace offering verified fees, verified placement packages, and direct admission counselors.",
        deliverables: [
          "Comprehensive college search engine indexing 5,000+ accredited institutions",
          "Real-time cutoff calculator predicting admission chances based on entrance scores",
          "Direct WhatsApp advisory connecting students with verified campus counselors",
          "Detailed course curricula and placement recruitment partner lists"
        ],
        results: {
          metric1: "250,000+",
          label1: "Annual Student Visitors",
          metric2: "5,000+",
          label2: "Indexed Accredited Colleges",
          metric3: "4.8★",
          label3: "Student Satisfaction Rating"
        },
        quote: "Campus Dekho saved me from paying massive donations to brokers. Their platform showed me exact cutoffs and got me admitted to an accredited engineering college."
      }
    ],
    services: [
      {
        id: "college-search",
        category: "discovery",
        title: "College Discovery & Ranking Analytics Engine",
        badge: "Verified Data",
        tagline: "Search and filter thousands of accredited colleges across engineering, management, medical, law, and arts.",
        timeline: "Instant search access",
        product: "campusdekho.in Search Engine",
        deliverables: [
          "Verified fee structures, hostel charges, and real placement statistics",
          "Cut-off score predictions for JEE, NEET, CAT, CMAT, and GUJCET",
          "Real student reviews and ratings covering faculty and campus infrastructure",
          "Side-by-side college comparison tool comparing placements and faculty"
        ],
        idealFor: "Class 12th students, graduates, and parents seeking transparent college choices",
        metric: "5,000+ Verified Colleges"
      },
      {
        id: "admission-guidance",
        category: "counseling",
        title: "One-on-One Admission Guidance & Counseling",
        badge: "Unbiased Guidance",
        tagline: "Dedicated counselors matching student scores, budgets, and career ambitions with optimal colleges.",
        timeline: "Personalized consultation",
        product: "Campus Dekho Counseling Cell",
        deliverables: [
          "Personalized career mapping and stream selection advisory",
          "Direct application processing ensuring verified seat allocation",
          "Scholarship application guidance reducing family tuition burden",
          "Continuous counselor WhatsApp chat support throughout admission season"
        ],
        idealFor: "Students confused about college choices or entrance cutoff eligibility",
        metric: "100% Unbiased Counseling"
      },
      {
        id: "institution-partnerships",
        category: "colleges",
        title: "Institution Partnership & Admission Showcases",
        badge: "Higher Enrollment",
        tagline: "Helping universities connect with qualified prospective students through digital showcases.",
        timeline: "Annual partnership",
        product: "Campus Dekho Institutional Suite",
        deliverables: [
          "Verified institution profile on campusdekho.in with 360-degree virtual tour",
          "Qualified student lead generation with real-time CRM webhook sync",
          "Featured placement spotlights and digital campus open-day events",
          "Monthly engagement analytics tracking student views and brochure downloads"
        ],
        idealFor: "Universities, engineering colleges, business schools, and specialized medical institutes",
        metric: "+42% Qualified Inquiries"
      }
    ],
    interactiveTool: {
      type: "college-finder",
      title: "Campus Dekho Course & College Matcher",
      subtitle: "Select a stream to preview college counts, entrance exams, and admission guidance",
      options: [
        { label: "Engineering & Technology (B.Tech / M.Tech)", value: "eng", detail: "Computer Science, AI, Mechanical, Civil • JEE & State Exams", metric: "1,800+ Verified Colleges", extra: "Avg Package: ₹4.5L - ₹18L" },
        { label: "Management & Business (MBA / BBA)", value: "mgmt", detail: "Marketing, Finance, HR, Business Analytics • CAT, CMAT, MAT", metric: "1,200+ Verified B-Schools", extra: "Avg Package: ₹6.0L - ₹25L" },
        { label: "Medical & Allied Sciences (MBBS / BDS / B.Pharm)", value: "med", detail: "Medicine, Dental, Pharmacy, Nursing • NEET Cutoffs", metric: "650+ Accredited Institutes", extra: "Strict Regulatory Oversight" },
        { label: "Law, Design & Liberal Arts", value: "arts", detail: "BA-LLB, Fashion Design, Journalism • CLAT & NIFT Exams", metric: "500+ Top Institutes", extra: "Fast Growing Career Streams" }
      ]
    }
  },

  // 10. WapiPulse.com (WhatsApp API Solutions)
  "wapipulse": {
    id: "wapipulse",
    serviceCategories: [
      { id: "all", label: "All SaaS Features" },
      { id: "broadcast", label: "Broadcast Marketing" },
      { id: "chatbot", label: "AI Chatbots" },
      { id: "inbox", label: "Shared Team Inbox" },
      { id: "ecommerce", label: "E-Commerce Automations" }
    ],
    packages: [
      {
        name: "Starter Cloud API",
        tagline: "Official Meta WhatsApp Cloud API connection for growing local businesses.",
        price: "₹1,499",
        period: "/ month ($20 USD)",
        badge: "Starter",
        highlight: false,
        features: [
          "Official Meta WhatsApp Business Cloud API integration (Zero ban risk)",
          "High message throughput with guaranteed delivery",
          "Broadcast campaign scheduler up to 5,000 opted-in contacts/month",
          "Single agent inbox with pre-built quick reply templates",
          "Contact tagging and CSV subscriber list management",
          "Standard email and WhatsApp ticketing support"
        ]
      },
      {
        name: "Business Pro Automation",
        tagline: "Visual drag-and-drop conversational bot builder and multi-agent collaborative inbox.",
        price: "₹3,999",
        period: "/ month ($50 USD)",
        badge: "⭐ Most Popular",
        highlight: true,
        features: [
          "Everything in Starter Cloud API",
          "Unlimited broadcast campaigns to unlimited opted-in subscribers",
          "Visual drag-and-drop conversational chatbot flow builder (24/7 auto-replies)",
          "Multi-agent shared team inbox with up to 5 simultaneous staff logins",
          "Round-robin automated lead assignment to sales team members",
          "Shopify & WooCommerce webhook integration (Abandoned cart recovery)",
          "WhatsApp Green Tick verification application assistance",
          "Priority 24/7 technical hotline and dedicated account onboarding"
        ]
      },
      {
        name: "Enterprise Custom API & Dedicated Pod",
        tagline: "High-volume throughput, custom CRM integration, and dedicated server instance.",
        price: "₹8,999+",
        period: "/ month ($115+ USD)",
        badge: "Enterprise Grade",
        highlight: false,
        features: [
          "Everything in Business Pro Automation",
          "Unlimited agent team seats with department-level role permissions",
          "High-volume message throughput (Up to 100+ messages per second)",
          "Custom two-way webhook integrations with HubSpot, Salesforce & Enterprise ERPs",
          "ChatGPT / LLM AI integration for conversational natural language responses",
          "Custom SLA contract backed by JV Group cloud infrastructure",
          "Dedicated technical account manager with custom engineering support"
        ]
      }
    ],
    caseStudies: [
      {
        sector: "D2C Retail & E-Commerce",
        title: "4.8x Sales Lift with Automated Abandoned Cart WhatsApp Sequences",
        challenge: "Email cart abandonment notifications were generating only 12% open rates, leaving thousands of shoppers unrecovered.",
        strategy: "Deployed WapiPulse automated abandoned cart trigger sending personalized WhatsApp messages with dynamic checkout links within 15 minutes of cart abandonment.",
        deliverables: [
          "Direct Shopify webhook integration with WapiPulse platform",
          "Automated rich-media WhatsApp message featuring cart image and 10% discount code",
          "Interactive quick-reply buttons allowing shoppers to complete order in 1 click",
          "Real-time analytics dashboard tracking recovered revenue"
        ],
        results: {
          metric1: "98.2%",
          label1: "Message Open Rate",
          metric2: "34%",
          label2: "Cart Recovery Rate",
          metric3: "4.8x",
          label3: "Return on Ad Spend Lift"
        },
        quote: "WapiPulse turned our WhatsApp into our most profitable sales channel. The 98% open rates completely destroy email marketing performance."
      },
      {
        sector: "Real Estate & Housing Developers",
        title: "1,200+ Qualified Site Visits Generated via Conversational AI Chatbot",
        challenge: "Sales team was overwhelmed by Meta ad leads, taking hours to qualify budget and location preferences manually.",
        strategy: "Built a 24/7 WapiPulse conversational chatbot that immediately greeted Click-to-WhatsApp ad leads, qualified their 2BHK/3BHK budget, and booked calendar site visits.",
        deliverables: [
          "Interactive drag-and-drop conversational bot workflow",
          "Pre-qualification of buyer budget, timeline, and preferred property location",
          "Automated calendar booking with reminder SMS and WhatsApp alerts",
          "Instant routing of hot qualified buyers to senior sales executives"
        ],
        results: {
          metric1: "1,200+",
          label1: "Site Visits Booked",
          metric2: "< 10s",
          label2: "Average Lead Response Time",
          metric3: "62%",
          label3: "Reduction in Sales Team Overhead"
        },
        quote: "Our leads get answered instantly at 2 AM or on Sunday afternoons. WapiPulse qualifies buyers while our sales team sleeps."
      }
    ],
    services: [
      {
        id: "meta-cloud-api",
        category: "broadcast",
        title: "Official Meta WhatsApp Business Cloud API",
        badge: "Official Meta Link",
        tagline: "Direct enterprise connectivity to Meta's Cloud API infrastructure with zero phone ban risk.",
        timeline: "Instant 24h verification",
        product: "Official Meta Partner Infrastructure",
        deliverables: [
          "Direct Meta Cloud API integration with official business verification",
          "Zero third-party markups on message transmission",
          "Verified business profile displaying brand logo, address, and catalog",
          "Green Tick official verified badge application guidance"
        ],
        idealFor: "Any business communicating with customers via WhatsApp seeking a compliant official solution",
        metric: "100% Ban-Safe Setup"
      },
      {
        id: "broadcast-scheduler",
        category: "broadcast",
        title: "Targeted High-Volume Broadcast Campaigns",
        badge: "98% Open Rate",
        tagline: "Send personalized rich-media broadcasts with buttons, images, catalogs, and PDFs to opted-in subscribers.",
        timeline: "Live campaign scheduling",
        product: "WapiPulse Broadcast Engine",
        deliverables: [
          "Personalized variable tags (e.g. Hi {First_Name}, your order #{Order_ID})",
          "Rich media attachments including videos, brochures, catalogs, and images",
          "Interactive Call-to-Action (CTA) and Quick Reply buttons",
          "Detailed analytics reports: Delivery rate, read rate, and click-through metrics"
        ],
        idealFor: "Retail brands, coaching institutes, real estate builders, and corporate distributors",
        metric: "98% Open Rates"
      },
      {
        id: "visual-chatbots",
        category: "chatbot",
        title: "Visual AI Chatbots & Automated Workflows",
        badge: "24/7 Automation",
        tagline: "Build intelligent automated conversational flows that qualify leads, answer FAQs, and book appointments.",
        timeline: "Drag-and-drop builder",
        product: "WapiPulse Bot Builder",
        deliverables: [
          "No-code visual drag-and-drop flow builder",
          "ChatGPT / LLM natural language processing for intelligent replies",
          "Automated lead qualification capturing email, budget, and requirements",
          "Automated appointment booking and calendar invitations"
        ],
        idealFor: "Customer service departments and sales teams handling high inquiry volumes",
        metric: "< 10s Instant Auto-Reply"
      },
      {
        id: "shared-team-inbox",
        category: "inbox",
        title: "Multi-Agent Shared Team Inbox with Smart Routing",
        badge: "Team Collaboration",
        tagline: "Empower your entire sales and support team to chat from a single verified WhatsApp number.",
        timeline: "Instant team onboarding",
        product: "WapiPulse Multi-Agent Inbox",
        deliverables: [
          "Multiple agents chatting simultaneously from one centralized phone number",
          "Round-robin and skill-based automated lead routing",
          "Private internal team notes invisible to the customer",
          "Agent resolution velocity and customer satisfaction analytics"
        ],
        idealFor: "Sales teams, support desks, and operations squads managing shared customer conversations",
        metric: "Multi-Agent Access"
      }
    ],
    interactiveTool: {
      type: "whatsapp-demo",
      title: "Interactive WhatsApp Cloud API Simulator",
      subtitle: "Click a sample message flow to preview how WapiPulse automates conversational sales",
      options: [
        { label: "1. Instant Lead Qualification Bot", value: "lead-bot", detail: "Greets Meta ad lead, asks budget & location, alerts sales rep", metric: "Response: 8 seconds", extra: "Captures name, phone & qualification tags" },
        { label: "2. Abandoned Cart Recovery (Shopify)", value: "cart-recovery", detail: "Sends photo of left-behind item + 1-click checkout button", metric: "Open Rate: 98%", extra: "34% of abandoned shoppers complete purchase" },
        { label: "3. Festival Broadcast Campaign", value: "festive-broadcast", detail: "Personalized rich-media greeting + festive catalog PDF", metric: "High Engagement", extra: "Scheduled to 10,000+ opted-in VIP clients" },
        { label: "4. Multi-Agent Shared Team Inbox", value: "team-inbox", detail: "Routes customer to available support agent with private notes", metric: "Zero Collisions", extra: "Complete manager visibility into response times" }
      ]
    }
  },

  // 11. Ticket4service.com
  "ticket4service": {
    id: "ticket4service",
    serviceCategories: [
      { id: "all", label: "All Helpdesk Features" },
      { id: "omnichannel", label: "Omnichannel Intake" },
      { id: "sla", label: "SLA Timers & Escalations" },
      { id: "routing", label: "Smart Agent Routing" },
      { id: "analytics", label: "CSAT & Dashboards" }
    ],
    packages: [
      {
        name: "Team Helpdesk Starter",
        tagline: "Omnichannel ticket management for growing IT and customer support teams.",
        price: "₹2,499",
        period: "/ month ($30 USD)",
        badge: "Starter",
        highlight: false,
        features: [
          "Omnichannel ticket intake: Support Email, Web Widget & Client Portal",
          "Up to 3 support agent seats with role permissions",
          "Standard Service Level Agreement (SLA) countdown timers",
          "Canned response macros for repetitive common queries",
          "Ticket status tagging (Open, Pending, Resolved, Closed)",
          "Standard email ticketing support"
        ]
      },
      {
        name: "Business SLA Automation",
        tagline: "WhatsApp ticket intake, automated manager escalations, and customer CSAT surveys.",
        price: "₹5,999",
        period: "/ month ($75 USD)",
        badge: "⭐ Most Popular",
        highlight: true,
        features: [
          "Everything in Team Helpdesk Starter",
          "Official WhatsApp ticket integration via WapiPulse connection",
          "Multi-tier SLA deadline timers with automated manager escalations before breach",
          "Skill-based agent routing and department queues (IT, Billing, Support, Sales)",
          "Customer self-service knowledge base & help center portal",
          "Automated post-resolution CSAT 5-star customer feedback surveys",
          "Weekly team resolution velocity and First Response Time (FRT) analytics"
        ]
      },
      {
        name: "Enterprise Multi-Department Incident Suite",
        tagline: "Unlimited queues, custom REST API webhooks, and executive resolution velocity scorecards.",
        price: "₹12,999+",
        period: "/ month ($160+ USD)",
        badge: "Enterprise Suite",
        highlight: false,
        features: [
          "Everything in Business SLA Automation",
          "Unlimited support departments and custom incident categories",
          "Custom RESTful webhook ingestion integrating with custom enterprise ERPs",
          "Private internal team collaboration notes and ticket merge/split tools",
          "Executive boardroom CSAT scorecards & compliance audit trails",
          "Dedicated technical onboarding specialist and custom SLA contract",
          "24/7 Priority hotline backed by JV Group IT infrastructure"
        ]
      }
    ],
    caseStudies: [
      {
        sector: "IT Managed Service Provider (MSP) • Corporate Support",
        title: "Achieved 99.8% SLA Resolution Compliance Across 85 Corporate Clients",
        challenge: "Support emails were getting lost in Outlook inboxes, resulting in missed contract deadlines and client frustration.",
        strategy: "Consolidated all support emails into Ticket4service with automated priority timers, tiered escalation alerts, and client self-service tracking portals.",
        deliverables: [
          "Unified omnichannel intake converting incoming emails into trackable tickets",
          "Multi-tier SLA countdown timers customized per client contract priority",
          "Automated manager SMS alerts 15 minutes before an SLA deadline breach",
          "Customer satisfaction (CSAT) rating surveys sent upon ticket resolution"
        ],
        results: {
          metric1: "99.8%",
          label1: "SLA Compliance Rate",
          metric2: "18 Mins",
          label2: "Average First Response Time",
          metric3: "4.9★",
          label3: "Client CSAT Rating"
        },
        quote: "Ticket4service ended missed deadlines completely. Our engineers know exactly which ticket has highest urgency, and our clients have full visibility."
      },
      {
        sector: "Manufacturing & Distribution • Field Service Operations",
        title: "Cutting Machine Maintenance Incident Lag by 62% for Factory Equipment",
        challenge: "Machine breakdown complaints reported from factory floors across Gujarat were stuck in manual phone calls and delayed paperwork.",
        strategy: "Implemented WhatsApp-to-Ticket integration allowing plant operators to send machine photos to WhatsApp, automatically spawning priority engineering tickets.",
        deliverables: [
          "WhatsApp ticket intake with image attachment support",
          "Automated routing to regional field service engineers based on geographical territory",
          "Mobile-friendly engineer resolution sign-off portal",
          "Historical breakdown analytics identifying recurring machine part failures"
        ],
        results: {
          metric1: "62%",
          label1: "Faster Machine Repair",
          metric2: "0 Lost",
          label2: "Breakdown Complaints",
          metric3: "100%",
          label3: "Field Engineer Accountability"
        },
        quote: "Our factory operators simply snap a photo on WhatsApp, and Ticket4service routes it to the designated field engineer within seconds."
      }
    ],
    services: [
      {
        id: "omnichannel-intake",
        category: "omnichannel",
        title: "Omnichannel Ticket Intake (Email, Web, WhatsApp, API)",
        badge: "Single Queue",
        tagline: "Consolidate customer requests from support emails, web forms, WhatsApp, and REST APIs into one centralized collaborative queue.",
        timeline: "Setup in 24 hours",
        product: "Ticket4service Omnichannel Gateway",
        deliverables: [
          "Email-to-ticket conversion preserving full email threading and attachments",
          "Customizable embeddable web form widgets for client websites",
          "Official WhatsApp ticket integration via WapiPulse API bridge",
          "RESTful webhook ingestion for custom ERPs and application incident logging"
        ],
        idealFor: "IT MSPs, SaaS companies, corporate operations, customer support teams, and field service networks",
        metric: "100% Request Capture"
      },
      {
        id: "sla-escalation",
        category: "sla",
        title: "Strict SLA Enforcement & Automated Escalations",
        badge: "Zero Breach Risk",
        tagline: "Define multi-tier Service Level Agreements with automated countdown timers that alert managers before deadlines breach.",
        timeline: "Configured to your contracts",
        product: "Ticket4service SLA Engine",
        deliverables: [
          "Custom SLA resolution deadlines based on ticket priority (Urgent, High, Medium, Low)",
          "Automated manager escalation alerts sent via email and WhatsApp before breach",
          "Business hours versus 24/7 calendar SLA calculation engine",
          "Breach risk indicators highlighted on active support agent dashboards"
        ],
        idealFor: "Service providers with contractual SLA obligations and enterprise clients",
        metric: "99.9% SLA Compliance"
      },
      {
        id: "smart-triage",
        category: "routing",
        title: "Smart Triage & Automated Agent Assignment",
        badge: "Intelligent Routing",
        tagline: "Automatically route tickets to the correct department and assign engineers based on workload and expertise.",
        timeline: "Real-time auto-assignment",
        product: "Ticket4service Routing Algorithm",
        deliverables: [
          "Round-robin and workload-balancing automated ticket assignment",
          "Department-based triage queues (IT Infrastructure, Software, Billing, Operations)",
          "Keyword tagging and automated priority assignment",
          "Private internal collaborative notes visible only to team members"
        ],
        idealFor: "Multi-department corporations and busy support teams managing hundreds of tickets daily",
        metric: "Instant Lead Triage"
      },
      {
        id: "csat-analytics",
        category: "analytics",
        title: "Executive Resolution Analytics & CSAT Surveys",
        badge: "Customer Delight",
        tagline: "Empower customers with instant self-service answers while providing executives with First Response Time and CSAT reports.",
        timeline: "Real-time reporting",
        product: "Ticket4service Executive Dashboard",
        deliverables: [
          "Searchable public or private customer self-service knowledge base",
          "Automated post-resolution 5-star CSAT customer satisfaction surveys",
          "Agent resolution velocity and productivity scorecards",
          "Department bottleneck analytics highlighting recurring customer pain points"
        ],
        idealFor: "Executives and support directors focused on customer retention and team efficiency",
        metric: "Real-Time CSAT Scorecards"
      }
    ],
    interactiveTool: {
      type: "helpdesk-sla",
      title: "Ticket4service Omnichannel SLA Demo",
      subtitle: "Click an incident channel to preview automated triage and resolution countdown timers",
      options: [
        { label: "1. Critical Server Down (Urgent SLA: 15 Mins)", value: "server-sla", detail: "Auto-routes to Senior SysAdmin • Escalates to Director if unassigned in 5m", metric: "Target: < 15 Mins", extra: "Automated SMS & WhatsApp alerts dispatched" },
        { label: "2. WhatsApp Customer Support Query", value: "whatsapp-ticket", detail: "Spawns ticket from WhatsApp chat • Preserves full conversational history", metric: "Instant Ingestion", extra: "Agent replies directly back to customer WhatsApp" },
        { label: "3. Enterprise Billing Inquiry (Medium SLA)", value: "billing-ticket", detail: "Auto-routes to Finance team with invoice attachments", metric: "Target: 4 Business Hours", extra: "Automated client receipt confirmation" },
        { label: "4. Automated CSAT Star Survey", value: "csat-survey", detail: "Sent upon ticket close • Tracks agent performance metrics", metric: "CSAT: 4.9★ Standard", extra: "Immediate alert if customer rates below 3 stars" }
      ]
    }
  }
};
