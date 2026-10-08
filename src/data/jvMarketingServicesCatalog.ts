export interface JvServiceItem {
  id: string;
  name: string;
  subLabel?: string;
  iconName: string;
  description: string;
  deliverables: string[];
  timeline: string;
  idealFor: string;
  metric: string;
}

export interface JvServiceCluster {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  badge: string;
  accentColor: string;
  accentBg: string;
  accentBorder: string;
  iconBg: string;
  services: JvServiceItem[];
}

export const JV_MARKETING_SERVICES_CLUSTERS: JvServiceCluster[] = [
  {
    id: "digital-marketing",
    title: "DIGITAL MARKETING",
    subtitle: "Data-driven audience capture, search dominance, and omnichannel paid media engines.",
    iconName: "Megaphone",
    badge: "Growth Engine",
    accentColor: "#FF5E14",
    accentBg: "#FFF4ED",
    accentBorder: "rgba(255, 94, 20, 0.3)",
    iconBg: "bg-gradient-to-br from-orange-500 to-amber-500 text-white",
    services: [
      {
        id: "seo-services",
        name: "SEO Services",
        subLabel: "Organic Search Ranking",
        iconName: "Search",
        description: "Technical SEO audits, on-page architecture optimization, semantic schema markup, and strategic high-authority backlink acquisition for long-term organic dominance.",
        deliverables: [
          "Technical enterprise SEO crawl & Core Web Vitals remediation",
          "High-intent commercial keyword mapping & competitive gap audit",
          "Structured data schema implementation (Organization, Service, FAQ)",
          "Tier-1 digital PR & high-authority institutional backlink building"
        ],
        timeline: "Ongoing 3-6 month sprints",
        idealFor: "B2B brands, corporate enterprises, multi-location companies, e-commerce stores",
        metric: "+280% High-Intent Organic Traffic"
      },
      {
        id: "ai-seo",
        name: "AI SEO",
        subLabel: "GEO & Generative Engine Optimization",
        iconName: "Bot",
        description: "Next-generation optimization targeting AI search engines including Google AI Overviews, OpenAI Search / ChatGPT, Perplexity AI, and Microsoft Copilot.",
        deliverables: [
          "Entity-first Knowledge Graph optimization & LLM citation building",
          "Direct conversational answer card structuring & semantic clarity",
          "Brand presence indexing across leading AI training corpuses",
          "Continuous AI search engine citation and sentiment monitoring"
        ],
        timeline: "45-day initial indexing sprint",
        idealFor: "Modern enterprises needing to appear when buyers ask ChatGPT or Google AI for solutions",
        metric: "LLM Search Ready & Cited"
      },
      {
        id: "lead-generation",
        name: "Lead Generation",
        subLabel: "B2B Pipeline Influx",
        iconName: "Users",
        description: "Engineered multi-channel lead acquisition systems that attract, qualify, and route high-value business leads directly to your sales executives.",
        deliverables: [
          "Multi-touch qualification workflows & friction-free form funnels",
          "Account-Based Marketing (ABM) lists & cold/warm retargeting triggers",
          "Lead scoring matrix based on budget, authority, need, and timeline",
          "Instant routing to sales reps via WhatsApp, SMS, and CRM webhooks"
        ],
        timeline: "Live in 7 business days",
        idealFor: "B2B service providers, industrial manufacturers, real estate, consultants",
        metric: "Sub-60s Inbound Lead Routing"
      },
      {
        id: "content-marketing",
        name: "Content Marketing",
        subLabel: "Authority & Thought Leadership",
        iconName: "FileEdit",
        description: "Strategic thought leadership content, in-depth whitepapers, case study teardowns, and executive editorial calendars designed to establish undisputed domain authority.",
        deliverables: [
          "Quarterly content strategy aligned with buyer search intent",
          "High-conversion blog posts, whitepapers, and downloadable guides",
          "Video scripting, infographics, and visual knowledge summaries",
          "Content distribution across social channels, newsletters, and syndicates"
        ],
        timeline: "Monthly publication sprints",
        idealFor: "Brands seeking to build lasting brand equity, organic inbound trust, and market authority",
        metric: "3.5x Buyer Engagement Lift"
      },
      {
        id: "social-media",
        name: "Social Media",
        subLabel: "Brand Growth & Engagement",
        iconName: "Hash",
        description: "Full-service social media management, brand persona development, high-engagement creative production, and active community nurturing across LinkedIn, Instagram, and YouTube.",
        deliverables: [
          "Platform-specific content strategies (LinkedIn B2B + Instagram Visuals)",
          "Monthly creative calendar with reels, carousels, and stat infographics",
          "Community management, proactive commentary, and direct message handling",
          "Monthly engagement analytics and audience growth reporting"
        ],
        timeline: "Monthly continuous retainers",
        idealFor: "Companies seeking active, prestigious, and highly engaging social channels",
        metric: "5x Monthly Social Reach"
      },
      {
        id: "paid-ads",
        name: "Paid Ads",
        subLabel: "Google, Meta & LinkedIn Ads",
        iconName: "Megaphone",
        description: "Algorithmic paid media buying with predictive bidding, server-side Conversions API (CAPI), and dynamic audience exclusion to maximize enterprise return on ad spend.",
        deliverables: [
          "High-intent Google Search, Performance Max, and YouTube campaigns",
          "Meta (Facebook & Instagram) ads with algorithmic creative testing",
          "LinkedIn B2B precision targeting by job title, company size, and industry",
          "Weekly ROAS attribution reporting and budget allocation optimization"
        ],
        timeline: "Live in 5 business days",
        idealFor: "Enterprises allocating media budgets that require strict ROAS accountability",
        metric: "4.2x Average Enterprise ROAS"
      }
    ]
  },
  {
    id: "website-dev",
    title: "WEBSITE DEVELOPMENT",
    subtitle: "High-performance web architecture, corporate portals, and conversion-optimized digital hubs.",
    iconName: "Monitor",
    badge: "Web Infrastructure",
    accentColor: "#2563EB",
    accentBg: "#EFF6FF",
    accentBorder: "rgba(37, 99, 235, 0.3)",
    iconBg: "bg-gradient-to-br from-blue-600 to-indigo-600 text-white",
    services: [
      {
        id: "business-website",
        name: "Business Website",
        subLabel: "Corporate Digital Hubs",
        iconName: "Briefcase",
        description: "High-performance corporate websites custom-coded with Next.js, React, and Tailwind CSS. Built to stringent enterprise standards for security, speed, and brand credibility.",
        deliverables: [
          "Custom UI/UX interface aligned with corporate brand guidelines",
          "Sub-second load times with 95+ Google Core Web Vitals score",
          "Responsive mobile, tablet, and desktop pixel-perfection",
          "Content Management System (CMS) integration for effortless updates"
        ],
        timeline: "2 to 4 weeks depending on scope",
        idealFor: "Corporate entities, mid-market enterprises, institutions, established businesses",
        metric: "< 1.0s Server Response Velocity"
      },
      {
        id: "ecommerce",
        name: "E-commerce",
        subLabel: "Scalable Online Stores",
        iconName: "ShoppingCart",
        description: "Full-stack e-commerce stores built on Shopify, WooCommerce, or headless Next.js platforms, engineered for seamless checkout velocity, catalog scale, and maximum average order value.",
        deliverables: [
          "Multi-currency, international payment gateway integrations",
          "Real-time inventory sync and ERP warehouse connectors",
          "Abandoned cart automated recovery sequences via WhatsApp & Email",
          "Mobile-first frictionless 1-click checkout optimization"
        ],
        timeline: "3 to 6 weeks",
        idealFor: "Direct-to-consumer brands, B2B wholesale portals, multi-sku retailers",
        metric: "+42% Higher Checkout Conversion"
      },
      {
        id: "landing-pages",
        name: "Landing Pages",
        subLabel: "Conversion-Centric Architecture",
        iconName: "Laptop",
        description: "Ultra-fast, targeted landing pages engineered specifically to maximize conversion rates for paid advertising campaigns and product launches.",
        deliverables: [
          "Psychology-driven visual layout with clear value propositions",
          "A/B testing architecture with dynamic ad keyword insertion",
          "Instant lead capture forms integrated with CRM webhooks",
          "Heatmap tracking and user session drop-off auditing"
        ],
        timeline: "5 to 7 business days",
        idealFor: "Companies running Google Ads or Meta Ads seeking lower cost-per-lead",
        metric: "+68% Baseline Conversion Lift"
      },
      {
        id: "redesign",
        name: "Redesign",
        subLabel: "UI/UX & Platform Modernization",
        iconName: "PenTool",
        description: "Revitalize outdated websites into sleek, modern, fast, and high-converting platforms without losing existing SEO equity or historical search rankings.",
        deliverables: [
          "Complete UI/UX audit and competitor visual benchmarking",
          "Comprehensive SEO redirect mapping (301) to safeguard rankings",
          "Modern typography, glassmorphism, 3D accents, and responsive layout",
          "Core Web Vitals overhaul and modern codebase migration"
        ],
        timeline: "2 to 4 weeks",
        idealFor: "Businesses whose websites look outdated, load slowly, or fail to convert visitors",
        metric: "100% Retained Organic SEO Equity"
      },
      {
        id: "maintenance",
        name: "Maintenance",
        subLabel: "24/7 Security & Performance SLA",
        iconName: "Wrench",
        description: "Comprehensive ongoing technical maintenance, daily cloud backups, zero-day security patching, uptime monitoring, and priority technical support retainers.",
        deliverables: [
          "24/7 automated uptime and SSL certificate monitoring",
          "Daily cloud database backups and disaster recovery protocols",
          "Monthly Core Web Vitals checks and code performance optimization",
          "Dedicated technical hours for content updates, bug fixes, and feature additions"
        ],
        timeline: "Ongoing monthly retainers",
        idealFor: "Enterprises requiring 99.9% uptime, strict data security, and hassle-free tech management",
        metric: "99.9% Guaranteed Uptime SLA"
      }
    ]
  },
  {
    id: "software-app",
    title: "SOFTWARE & APP DEV",
    subtitle: "Custom SaaS platforms, bespoke business logic, mobile apps, and enterprise API ecosystems.",
    iconName: "Code2",
    badge: "Cloud & Code",
    accentColor: "#8B5CF6",
    accentBg: "#F5F3FF",
    accentBorder: "rgba(139, 92, 246, 0.3)",
    iconBg: "bg-gradient-to-br from-purple-600 to-indigo-600 text-white",
    services: [
      {
        id: "custom-software",
        name: "Custom Software",
        subLabel: "Bespoke Enterprise Systems",
        iconName: "Layers",
        description: "Tailor-made software systems engineered to solve unique operational bottlenecks, replace fragmented spreadsheets, and automate core internal business processes.",
        deliverables: [
          "Bespoke system architecture design and technical specification",
          "Scalable microservices backend with Node.js, Python, or Go",
          "Role-based access control (RBAC), multi-tier permissions, and audit logs",
          "Complete source code ownership and technical documentation"
        ],
        timeline: "6 to 12 weeks",
        idealFor: "Established companies needing custom tools that off-the-shelf software cannot provide",
        metric: "100% Proprietary IP Ownership"
      },
      {
        id: "crm-systems",
        name: "CRM Systems",
        subLabel: "Tailored Sales Pipelines",
        iconName: "Database",
        description: "Custom Customer Relationship Management systems built around your specific sales cycles, pipeline stages, rep commissions, and client intake workflows.",
        deliverables: [
          "Visual drag-and-drop lead and deal pipeline management",
          "Automated follow-up reminders, task assignments, and call logging",
          "Real-time WhatsApp, email, and phone integration directly within contact cards",
          "Executive sales velocity and deal-close probability forecasting"
        ],
        timeline: "3 to 6 weeks",
        idealFor: "Sales organizations, real estate firms, consulting practices, service agencies",
        metric: "Zero Dropped Inquiries"
      },
      {
        id: "mobile-apps",
        name: "Mobile Apps",
        subLabel: "iOS & Android Cross-Platform",
        iconName: "Smartphone",
        description: "High-performance mobile applications engineered with Flutter and React Native for smooth 60fps animations, native hardware access, and simultaneous iOS and Android deployments.",
        deliverables: [
          "Single codebase for simultaneous iOS and Android store publishing",
          "Push notifications, offline data caching, and biometric authentication",
          "Secure cloud API integration and instant database synchronization",
          "Full submission management for Apple App Store and Google Play Store"
        ],
        timeline: "6 to 10 weeks",
        idealFor: "SaaS platforms, consumer startups, field operations teams, logistics companies",
        metric: "99.9% Crash-Free Session Rate"
      },
      {
        id: "saas-platforms",
        name: "SaaS Platforms",
        subLabel: "Multi-Tenant Cloud Products",
        iconName: "Cloud",
        description: "End-to-end development of Software-as-a-Service products featuring multi-tenant database partitioning, automated subscription billing, user tiers, and developer APIs.",
        deliverables: [
          "Multi-tenant database schema and isolated client data sandboxing",
          "Stripe / Razorpay automated subscription billing and invoice generation",
          "User onboarding flows, usage metering, and team invitation features",
          "Scalable cloud deployment on AWS, Google Cloud, or Cloudflare"
        ],
        timeline: "8 to 16 weeks",
        idealFor: "Tech founders, businesses turning internal tools into subscription software",
        metric: "Scale-Ready for 100k+ Users"
      },
      {
        id: "api-integration",
        name: "API Integration",
        subLabel: "Middleware & Webhook Pipelines",
        iconName: "Plug",
        description: "Seamless bi-directional integrations connecting third-party platforms, ERPs, accounting software, payment gateways, and WhatsApp Cloud APIs without manual double-entry.",
        deliverables: [
          "Robust RESTful and GraphQL API connector development",
          "High-throughput webhook listeners with retry queues and error alerting",
          "Data sanitization and format translation between legacy and modern APIs",
          "Bank-grade API encryption and OAuth2 authentication standards"
        ],
        timeline: "1 to 3 weeks",
        idealFor: "Enterprises with siloed software systems that need to communicate automatically",
        metric: "Sub-Second Data Synchronization"
      }
    ]
  },
  {
    id: "design-branding",
    title: "DESIGN & BRANDING",
    subtitle: "High-impact brand identity, strategic logo suites, graphic kits, and executive corporate collateral.",
    iconName: "Palette",
    badge: "Brand Identity",
    accentColor: "#10B981",
    accentBg: "#ECFDF5",
    accentBorder: "rgba(16, 185, 129, 0.3)",
    iconBg: "bg-gradient-to-br from-emerald-600 to-teal-600 text-white",
    services: [
      {
        id: "logo-design",
        name: "Logo Design",
        subLabel: "Distinctive Visual Trademarks",
        iconName: "PenTool",
        description: "Memorable, timeless, and strategically designed logo marks crafted to embody your corporate values, command industry respect, and remain versatile across all media.",
        deliverables: [
          "Multiple creative concepts based on industry positioning research",
          "Complete vector asset export package (SVG, EPS, PDF, high-res PNG)",
          "Monochrome, inverted, and responsive logo variations",
          "Full intellectual property and commercial copyright transfer"
        ],
        timeline: "7 to 10 business days",
        idealFor: "New startups, corporate rebrands, expanding subsidiaries",
        metric: "100% Vector Precision & Scalability"
      },
      {
        id: "brand-identity",
        name: "Brand Identity",
        subLabel: "Comprehensive Style Guides",
        iconName: "Fingerprint",
        description: "Complete visual identity systems including curated color palettes, typography hierarchy, imagery style, icon guidelines, and corporate brand bible.",
        deliverables: [
          "Comprehensive Brand Style Guide document (30+ pages)",
          "Primary and secondary color palette with digital and print color codes",
          "Corporate typography pairing and web font licensing guidelines",
          "Brand tone-of-voice and correct vs. incorrect application rules"
        ],
        timeline: "2 to 3 weeks",
        idealFor: "Enterprises needing consistent, unified brand presentation across all touchpoints",
        metric: "Institutional Brand Consistency"
      },
      {
        id: "graphics-kit",
        name: "Graphics Kit",
        subLabel: "Marketing Asset Library",
        iconName: "Gem",
        description: "A comprehensive digital asset library containing reusable social media post templates, slide decks, infographic templates, and advertising graphics.",
        deliverables: [
          "Editable Figma / Canva templates for Instagram, LinkedIn, and Facebook",
          "Executive pitch deck and sales proposal presentation templates",
          "Custom icon set and brand illustration components",
          "Email newsletter header and signature templates"
        ],
        timeline: "7 to 14 business days",
        idealFor: "In-house marketing teams that need ready-to-use, polished creative assets",
        metric: "50+ Multi-Format Reusable Assets"
      },
      {
        id: "banners",
        name: "Banners",
        subLabel: "High-CTR Display & Social Creatives",
        iconName: "Image",
        description: "Eye-catching digital advertising banners, website hero graphics, display network ads, and trade show roll-up banners designed to command instant visual attention.",
        deliverables: [
          "Google Display Network ad packages in all standard IAB formats",
          "High-CTR Meta and LinkedIn sponsored post banner variations",
          "High-resolution vector files for physical trade show roll-up banners",
          "Multiple promotional angles formatted for split-testing"
        ],
        timeline: "3 to 5 business days",
        idealFor: "Active advertisers and event exhibitors seeking professional visual impact",
        metric: "3x Higher Display Click-Through"
      },
      {
        id: "visiting-cards",
        name: "Visiting Cards",
        subLabel: "Executive Stationery & Print",
        iconName: "CreditCard",
        description: "Luxury business cards and corporate stationery designed for unforgettable first impressions. Formatted with print-ready bleed margins and luxury finish specifications.",
        deliverables: [
          "Premium business card design with QR code linking to digital vCard",
          "Corporate letterhead, envelope, and invoice template suite",
          "Special finish specifications (Spot UV, Gold Foil, Embossing)",
          "Print-ready CMYK 300 DPI vector PDF exports"
        ],
        timeline: "3 to 5 business days",
        idealFor: "Founders, executives, sales leaders, and corporate teams",
        metric: "Luxury Print-Ready Standards"
      }
    ]
  },
  {
    id: "ai-solutions",
    title: "AI SOLUTIONS",
    subtitle: "Custom AI agents, intelligent workflow automation, and predictive machine learning models.",
    iconName: "Brain",
    badge: "Next-Gen AI",
    accentColor: "#EA580C",
    accentBg: "#FFF7ED",
    accentBorder: "rgba(234, 88, 12, 0.3)",
    iconBg: "bg-gradient-to-br from-[#852E0B] via-[#C2410C] to-[#EA580C] text-white",
    services: [
      {
        id: "automation",
        name: "Automation",
        subLabel: "Intelligent Robotic Process Automation",
        iconName: "Bot",
        description: "Eliminate repetitive manual tasks by automating data entry, cross-system sync, document generation, and customer handoffs using intelligent workflow pipelines.",
        deliverables: [
          "End-to-end operational workflow mapping and bottleneck identification",
          "Zapier / Make / n8n / custom Python automated pipeline deployment",
          "Automated PDF invoice generation and multi-channel notification dispatch",
          "Error-handling alert triggers with automatic retry protocols"
        ],
        timeline: "1 to 3 weeks",
        idealFor: "Businesses losing valuable employee hours to manual data entry and routine admin",
        metric: "80% Reduction in Admin Overhead"
      },
      {
        id: "ai-chatbots",
        name: "AI Chatbots",
        subLabel: "24/7 Intelligent Conversational Agents",
        iconName: "MessageSquare",
        description: "Smart conversational AI assistants trained on your proprietary company documentation, capable of answering complex inquiries, scheduling demos, and qualifying buyers 24/7.",
        deliverables: [
          "Custom RAG (Retrieval-Augmented Generation) knowledge base indexing",
          "WhatsApp Cloud API, Website widget, and Slack bot integrations",
          "Human escalation triggers when complex high-ticket inquiries arise",
          "Multi-lingual conversation capability across English, Hindi, and Gujarati"
        ],
        timeline: "2 to 3 weeks",
        idealFor: "Enterprises seeking instant 24/7 lead qualification without expanding support headcount",
        metric: "Instant 24/7 Customer Engagement"
      },
      {
        id: "ai-marketing",
        name: "AI Marketing",
        subLabel: "Predictive Ad & Audience Optimization",
        iconName: "Zap",
        description: "Harness artificial intelligence to generate high-performing ad variations, predict customer churn, identify top-converting audiences, and optimize bids in real-time.",
        deliverables: [
          "AI-driven predictive audience segmentation and lookalike modeling",
          "Algorithmic ad copy and headline generation with automated testing",
          "Dynamic creative optimization adjusting visual elements to buyer intent",
          "Real-time bid adjustments based on historical conversion likelihood"
        ],
        timeline: "Ongoing algorithmic execution",
        idealFor: "Brands spending significantly on digital ads wanting maximum ROAS efficiency",
        metric: "+40% Marketing Efficiency Gain"
      },
      {
        id: "business-ai",
        name: "Business AI",
        subLabel: "Custom Enterprise AI Integration",
        iconName: "Network",
        description: "Strategic implementation of private, secure Large Language Models (LLMs) and computer vision systems tailored directly into your core business operations.",
        deliverables: [
          "Private, enterprise-grade LLM deployment ensuring full data privacy",
          "Document parsing and data extraction from contracts, invoices, and receipts",
          "Executive decision-intelligence dashboards summarizing complex data",
          "Staff training and operational change management for AI adoption"
        ],
        timeline: "4 to 8 weeks",
        idealFor: "Forward-thinking enterprises looking to build defensible competitive advantages with AI",
        metric: "Zero Data Leakage • SOC2 Standard"
      }
    ]
  }
];
