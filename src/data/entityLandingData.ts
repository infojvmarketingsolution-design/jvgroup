export interface EntityLandingStat {
  value: string;
  label: string;
  detail: string;
}

export interface EntityWhyChoose {
  title: string;
  description: string;
  badge: string;
}

export interface EntityProcessStep {
  step: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface EntityFAQ {
  question: string;
  answer: string;
}

export interface EntitySpecialFeature {
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  items: {
    title: string;
    description: string;
    tag: string;
    metrics?: string;
    url?: string;
  }[];
}

export interface EntityLandingData {
  tagline: string;
  heroHeadline: string;
  heroSubtitle: string;
  stats: EntityLandingStat[];
  valuePillars: {
    title: string;
    description: string;
    icon: string;
  }[];
  whyChooseUs: EntityWhyChoose[];
  processSteps: EntityProcessStep[];
  targetIndustries: {
    name: string;
    desc: string;
  }[];
  specialFeature: EntitySpecialFeature;
  faqs: EntityFAQ[];
  directDesk: {
    phone: string;
    phoneLabel: string;
    email: string;
    workingHours: string;
    officeLocation: string;
    whatsappNumber: string;
  };
}

export type LandingData = EntityLandingData;

export const ENTITY_LANDING_DATA: Record<string, EntityLandingData> = {
  // 1. Ahmedabad Marketing Solution
  "ahmedabad-marketing-solution": {
    tagline: "Regional SME Marketing & Local Dominance Partner",
    heroHeadline: "Accelerate Local Sales, Brand Trust & Regional Footfall.",
    heroSubtitle:
      "Ahmedabad Marketing Solution (AMS) is JV Group's specialized regional growth powerhouse. We empower manufacturers, retail brands, healthcare providers, and local service enterprises across Ahmedabad and Gujarat with hyper-targeted digital marketing, Google Maps supremacy, and high-impact branding.",
    stats: [
      { value: "500+", label: "Regional Businesses", detail: "Empowered across Gujarat" },
      { value: "Top 3", label: "Google Maps Ranking", detail: "Local Search Dominance" },
      { value: "3.8x", label: "Average Lead Influx", detail: "Within 60-90 Days" },
      { value: "100%", label: "Transparent Reporting", detail: "Verified In-Person & Remote" }
    ],
    valuePillars: [
      {
        title: "Hyper-Local SEO & Maps Dominance",
        description: "Capture nearby buyers searching for your exact services with Google Business Profile optimization and high-intent local keywords.",
        icon: "MapPin"
      },
      {
        title: "Bilingual Creative Campaigns",
        description: "Engage regional audiences authentically with high-converting creative messaging in Gujarati, Hindi, and English across Meta & Instagram.",
        icon: "Sparkles"
      },
      {
        title: "Complete Digital Foundation",
        description: "Domain registration, corporate webmail, fast web hosting, and SSL certificates ensuring your business is credible from day one.",
        icon: "Globe"
      },
      {
        title: "Direct ROI Ad Management",
        description: "Cost-efficient Google and Meta advertising specifically budgeted for local SMEs with zero wasted spend.",
        icon: "TrendingUp"
      }
    ],
    whyChooseUs: [
      {
        title: "Deep Rooted in Ahmedabad & Gujarat",
        description: "We understand the local consumer psyche, regional trading dynamics, and specific business corridors across Gujarat.",
        badge: "Local Expertise"
      },
      {
        title: "SME-Friendly Predictable Packages",
        description: "Transparent pricing without hidden retainers, tailored specifically for small and growing enterprises.",
        badge: "Budget Clarity"
      },
      {
        title: "JV Group Umbrella Support",
        description: "Backed by the technical infrastructure, servers, and multi-sector resources of the larger JV Group ecosystem.",
        badge: "Group Stability"
      },
      {
        title: "Omnichannel Execution",
        description: "From print collaterals and storefront branding to live digital campaigns and lead follow-up systems.",
        badge: "Complete Scope"
      }
    ],
    processSteps: [
      {
        step: "01",
        title: "Local Market & Competitor Audit",
        description: "We analyze your regional competitors, local search footprint, customer demographics, and immediate sales gaps.",
        deliverable: "Diagnostic Growth Blueprint"
      },
      {
        step: "02",
        title: "Digital Foundation & Identity Setup",
        description: "We configure your Google Business Profile, corporate webmail, verified domain, and local social media assets.",
        deliverable: "Active Digital Footprint"
      },
      {
        step: "03",
        title: "Hyper-Targeted Campaign Launch",
        description: "Deploying targeted local ads, regional social content, and customer review generation workflows to drive calls and walk-ins.",
        deliverable: "Live Customer Acquisition"
      },
      {
        step: "04",
        title: "Review & Scaling Review",
        description: "Bi-weekly reporting analyzing incoming calls, store visits, customer inquiries, and adjusting ad spend for higher profitability.",
        deliverable: "Monthly Performance Dashboard"
      }
    ],
    targetIndustries: [
      { name: "Manufacturing & Fabrication", desc: "Industrial units, machinery fabricators, and parts distributors across GIDC belts." },
      { name: "Retail & Multi-Outlet Showrooms", desc: "Jewelry, apparel, furniture, and consumer electronics retail stores." },
      { name: "Healthcare & Specialized Clinics", desc: "Dental clinics, diagnostic labs, hospitals, and wellness centers." },
      { name: "Real Estate & Architecture", desc: "Local building contractors, interior designers, and local property agents." },
      { name: "Hospitality & Dining", desc: "Restaurants, banquet halls, event venues, and catering businesses." },
      { name: "Professional Corporate Services", desc: "Tax consultants, legal advisors, logistics agents, and coaching academies." }
    ],
    specialFeature: {
      title: "Regional SME Growth Suite",
      subtitle: "The All-in-One Engine for Gujarat Enterprises",
      badge: "Flagship Package",
      description: "Designed specifically to solve the core challenges of regional business owners: getting noticed locally, generating phone calls, and building brand credibility.",
      items: [
        {
          title: "Google Maps & Local 3-Pack Supremacy",
          description: "Dominating local search results when customers search for 'near me' services across Ahmedabad and nearby towns.",
          tag: "Local SEO",
          metrics: "Rank in Top 3"
        },
        {
          title: "Bilingual Social Media Creative Hub",
          description: "Graphic design, reels, and product showcases in Gujarati, Hindi, and English tailored for WhatsApp and Instagram shares.",
          tag: "Creative Media",
          metrics: "Weekly Content"
        },
        {
          title: "WhatsApp Direct Customer Connect",
          description: "Click-to-WhatsApp ad funnels that direct inquiring customers directly into your sales executive's WhatsApp chat.",
          tag: "Lead Funnels",
          metrics: "Instant Enquiries"
        },
        {
          title: "Business Email & High-Speed Hosting",
          description: "Official @yourbrand.com email IDs and fast local server hosting ensuring maximum security and zero downtime.",
          tag: "Infrastructure",
          metrics: "99.9% Uptime"
        }
      ]
    },
    faqs: [
      {
        question: "How quickly can my business start receiving calls and leads?",
        answer: "Local Google Maps optimization and targeted click-to-call ad campaigns typically start generating qualified customer inquiries within 7 to 14 days of activation."
      },
      {
        question: "Do you design content in regional languages like Gujarati?",
        answer: "Yes. We specialize in bilingual and trilingual campaigns (Gujarati, Hindi, and English) ensuring your message resonates deeply with local cultural context."
      },
      {
        question: "Can we combine AMS marketing with website development from Ekato Tech?",
        answer: "Absolutely. As a JV Group entity, we offer unified project contracting where Ekato Tech builds your custom portal while AMS handles the marketing and local customer acquisition under a single invoice."
      },
      {
        question: "What is your engagement and billing structure for SMEs?",
        answer: "We offer flexible monthly retainers and transparent milestones tailored to the scale of your business, ensuring you see measurable returns on your marketing investment every month."
      }
    ],
    directDesk: {
      phone: "+91 99097 00606",
      phoneLabel: "Domestic India Desk",
      email: "info@jvgroupco.in",
      workingHours: "Monday – Saturday: 9:30 AM – 7:00 PM IST",
      officeLocation: "B/201, Vitthal A Square, Motera Stadium Road, Motera, Ahmedabad 380005",
      whatsappNumber: "919909700606"
    }
  },

  // 2. J.V Marketing Solution Private Limited (India)
  "jv-marketing-solution-pvt-ltd": {
    tagline: "Rank #1 on Google & AI Platforms | Best AI SEO & Generative Engine Optimization (GEO)",
    heroHeadline: "Rank #1 on Google & AI Engines. Scale Enterprise Pipeline with AI SEO & GEO.",
    heroSubtitle:
      "J.V Marketing Solution Private Limited (JV Marketing Pvt Ltd) is the premier AI SEO, Generative Engine Optimization (GEO), and B2B performance marketing company under JV Group, founded by Akash Chavda. We engineer top rankings on Google and authoritative citations across ChatGPT, Google AI Overviews, Perplexity, and Gemini for enterprises in the USA, UK, Canada, and India.",
    stats: [
      { value: "Rank #1", label: "Google & AI Search Targets", detail: "Traditional & Generative Engine SEO" },
      { value: "4.2x", label: "Average Enterprise ROAS", detail: "Predictive AI Bidding Models" },
      { value: "99.8%", label: "Attribution Precision", detail: "Server-Side Meta CAPI & GA4" },
      { value: "Global", label: "US, UK & India Coverage", detail: "Timezone-Aligned Delivery" }
    ],
    valuePillars: [
      {
        title: "AI SEO & Generative Engine Optimization (GEO)",
        description: "Transform your brand into the definitive, verified answer cited by ChatGPT Search, Google AI Overviews, Perplexity, and Gemini.",
        icon: "Cpu"
      },
      {
        title: "Google #1 Ranking & Programmatic Search Domination",
        description: "Dominate Google Page 1 with programmatic search architectures, high-intent landing engines, and algorithmic conversion rate optimization.",
        icon: "Target"
      },
      {
        title: "Marketing + Custom Software Automation",
        description: "Connecting ad platforms directly to your custom CRMs, WhatsApp Cloud APIs, and ERP systems via proprietary webhook pipelines.",
        icon: "Layers"
      },
      {
        title: "Lossless Server-Side Attribution (CAPI) & Dashboards",
        description: "Complete visibility into multi-touch customer journeys, first-party cookie resilience, Customer Acquisition Cost (CAC), and LTV.",
        icon: "BarChart3"
      }
    ],
    whyChooseUs: [
      {
        title: "Proprietary Tech + Agency Synergy",
        description: "Unlike traditional agencies that only run ads, we integrate software automation, in-house SaaS, and custom data pipelines.",
        badge: "Tech Driven"
      },
      {
        title: "Western Market Experience (USA/UK/CA)",
        description: "Proven experience navigating North American and European B2B buyer behavior, compliance standards, and ad networks.",
        badge: "Global Footprint"
      },
      {
        title: "Enterprise Revenue Focus",
        description: "We optimize for closed-won enterprise revenue and pipeline quality rather than meaningless vanity impressions.",
        badge: "Commercial Impact"
      },
      {
        title: "Dedicated Account Directors",
        description: "Direct access to senior growth strategists and media buyers who provide proactive strategic guidance.",
        badge: "White-Glove Support"
      }
    ],
    processSteps: [
      {
        step: "01",
        title: "Full-Funnel Growth Diagnostic",
        description: "We audit your historical ad performance, sales funnel leaks, unit economics, and competitive search territory.",
        deliverable: "Growth Architecture Roadmap"
      },
      {
        step: "02",
        title: "Infrastructure & Tracking Setup",
        description: "Configuring server-side tracking (CAPI), multi-touch attribution, CRM webhook pipelines, and conversion tracking.",
        deliverable: "Verified Tracking Ecosystem"
      },
      {
        step: "03",
        title: "Creative & Algorithmic Campaign Launch",
        description: "Deploying high-converting ad creative angles, intent-driven landing pages, and AI-optimized bidding campaigns.",
        deliverable: "Active Live Campaigns"
      },
      {
        step: "04",
        title: "Continuous CRO & Pipeline Scaling",
        description: "Weekly A/B testing of ad creatives, copy hooks, and funnel steps, scaling winning campaigns profitably.",
        deliverable: "Executive Growth Reports"
      }
    ],
    targetIndustries: [
      { name: "B2B SaaS & Tech Startups", desc: "Customer acquisition engines for software platforms in USA, UK, and India." },
      { name: "Industrial & Manufacturing Exporters", desc: "Generating high-ticket overseas B2B distribution and bulk purchase inquiries." },
      { name: "E-Commerce Conglomerates", desc: "Scaling Direct-to-Consumer and omnichannel retail with high-ROAS paid media." },
      { name: "Financial & Fintech Institutions", desc: "Compliance-adherent lead generation for wealth management and fintech apps." },
      { name: "Higher Education & Global Academies", desc: "Recruiting domestic and international students across undergraduate and master programs." },
      { name: "Logistics & Supply Chain Operators", desc: "Connecting enterprise shippers with third-party logistics and freight solutions." }
    ],
    specialFeature: {
      title: "The AI Growth Engine",
      subtitle: "Autonomous Pipeline Generation Architecture",
      badge: "Proprietary Framework",
      description: "Our proprietary growth framework connecting ad networks, behavioral psychology, and backend CRM pipelines into an automated revenue system.",
      items: [
        {
          title: "Predictive Lead Scoring & Routing",
          description: "Algorithms identify highest-value enterprise inquiries and route them instantly to senior sales executives.",
          tag: "AI Intelligence",
          metrics: "Instant Routing"
        },
        {
          title: "Omnichannel Retargeting Sequence",
          description: "Synchronized touchpoints across Google Display, LinkedIn, YouTube, and Meta that keep your brand omnipresent.",
          tag: "Multi-Touch",
          metrics: "Higher Conversion"
        },
        {
          title: "Dynamic Landing Page Generation",
          description: "Tailoring page headlines and value propositions dynamically based on search query intent and visitor geography.",
          tag: "CRO Tech",
          metrics: "+35% Lift"
        },
        {
          title: "Real-Time Executive Attribution Portal",
          description: "Live dashboard tracking spend, cost-per-acquisition, pipeline velocity, and return on ad spend across all channels.",
          tag: "Analytics",
          metrics: "Real-Time Data"
        }
      ]
    },
    faqs: [
      {
        question: "How does J.V Marketing Solution Private Limited rank websites #1 on Google and AI search platforms?",
        answer: "We implement our proprietary 3-Layer GEO & SEO Architecture: (1) Technical & Programmatic SEO to capture Google Page 1 blue links and Google AI Overviews, (2) Generative Engine Optimization (GEO) configuring semantic entity graphs and prompt-resistant schemas so ChatGPT, Perplexity, Gemini, and Claude cite your brand as the #1 factual recommendation, and (3) Lossless server-side tracking (Meta CAPI & GA4) with sub-second CRO landing engines."
      },
      {
        question: "What is Generative Engine Optimization (GEO) and how does it differ from traditional SEO?",
        answer: "Traditional SEO focuses strictly on ranking keywords and earning backlinks on Google SERPs. Generative Engine Optimization (GEO) optimizes brand entities, knowledge graphs, and authoritative source data so generative AI models (ChatGPT Search, Google AI Overviews, Perplexity AI, Claude) cite and recommend your company as the top trusted solution when prospective buyers ask conversational questions."
      },
      {
        question: "How do you align with international clients in the USA, UK, and Canada?",
        answer: "We maintain dedicated international client desks with daily timezone overlap across EST, CST, PST, and GMT. All campaigns are monitored 24/7 with dedicated Slack/Teams communication channels and transparent weekly sprint check-ins."
      },
      {
        question: "What minimum ad spend budget and retainers do you recommend for enterprise campaigns?",
        answer: "We recommend a minimum media budget of $3,000 to $10,000/month for international markets to generate statistical significance and rapid AI bidding optimization. For organic AI SEO & GEO, retainers are milestone-driven with verified ranking deliverables."
      },
      {
        question: "How does JV Marketing integrate with our existing CRM (HubSpot, Salesforce, Zoho)?",
        answer: "Our software engineering team builds custom two-way webhook integrations that push qualified leads directly into your CRM with full UTM attribution in under 60 seconds, triggering automated email and Wapipulse WhatsApp Cloud API workflows."
      },
      {
        question: "What makes J.V Marketing Solution Private Limited different from conventional digital marketing agencies?",
        answer: "Conventional agencies only manage ad copy and basic bidding. J.V Marketing Solution Private Limited combines advanced marketing operations with in-house software engineering, proprietary SaaS platforms, and enterprise data architecture under the JV Group umbrella founded by Akash Chavda."
      }
    ],
    directDesk: {
      phone: "+91 99097 00606",
      phoneLabel: "India Desk: +91 99097 00606 | Global: +44 7344556070",
      email: "info@jvgroupco.in",
      workingHours: "24/7 Global B2B Operations (EST / GMT / IST Overlap)",
      officeLocation: "International B2B Desk — UK, USA & Corporate Hub India",
      whatsappNumber: "919909700606"
    }
  },

  // 3. J.V Marketing Solutions Limited (Global)
  "jv-marketing-solutions-ltd-global": {
    tagline: "Global Corporate Brand Uniting Marketing, Software & IT Infrastructure",
    heroHeadline: "Integrated Enterprise IT, Mobile Engineering & Multi-Network Advertising.",
    heroSubtitle:
      "J.V Marketing Solutions Limited (Global) is the global contracting vehicle of JV Group, built specifically for enterprise clients across London, New York, Toronto, and global commercial hubs. We unify mission-critical IT infrastructure, custom mobile and web applications, and multi-network ad buying across Meta, Instagram, Google, LinkedIn, TikTok, and Snapchat.",
    stats: [
      { value: "6+", label: "Ad Networks Managed", detail: "Meta, Google, LinkedIn, TikTok, Snap" },
      { value: "99.99%", label: "Infrastructure Uptime", detail: "Cloud Architecture SLA" },
      { value: "Global", label: "Corporate Contracting", detail: "Consolidated Master Agreements" },
      { value: "3", label: "Continents Served", detail: "North America, Europe, Asia" }
    ],
    valuePillars: [
      {
        title: "Multi-Network Paid Advertising",
        description: "Omni-platform advertising campaigns across Meta, Instagram, Google Search, LinkedIn B2B, TikTok, and Snapchat with localized creative.",
        icon: "Megaphone"
      },
      {
        title: "Enterprise Software & Mobile Apps",
        description: "High-performance web applications, iOS/Android mobile apps, and custom business platforms developed to stringent global security standards.",
        icon: "Smartphone"
      },
      {
        title: "Global IT Infrastructure Management",
        description: "Cloud architecture, continuous DevOps, high-availability server setups, and 24/7 proactive infrastructure monitoring.",
        icon: "Server"
      },
      {
        title: "International Market Expansion",
        description: "End-to-end guidance for enterprises entering North American, European, and emerging Asian trade corridors.",
        icon: "Globe2"
      }
    ],
    whyChooseUs: [
      {
        title: "Unified Multi-Disciplinary Delivery",
        description: "Procure digital marketing, software development, and cloud hosting under a single international enterprise agreement.",
        badge: "All-in-One"
      },
      {
        title: "Global Compliance & Data Governance",
        description: "Full compliance with GDPR (UK/Europe), CCPA (USA), and international data privacy and security benchmarks.",
        badge: "Enterprise Trust"
      },
      {
        title: "Multi-Currency & Consolidated Invoicing",
        description: "Flexible enterprise billing in USD, GBP, EUR, and INR with transparent Master Services Agreement (MSA) terms.",
        badge: "Flexible Terms"
      },
      {
        title: "Cross-Timezone Collaboration",
        description: "Dedicated account leadership bridging UK (GMT), North American (EST/PST), and Indian (IST) operating hours seamlessly.",
        badge: "Always Active"
      }
    ],
    processSteps: [
      {
        step: "01",
        title: "Global Strategic Architecture",
        description: "We review your corporate footprint, target international markets, tech stack requirements, and multi-channel acquisition objectives.",
        deliverable: "Global Enterprise Master Plan"
      },
      {
        step: "02",
        title: "Engineering & Multi-Channel Deployment",
        description: "Parallel execution: our cloud engineers deploy resilient IT infrastructure while our media team configures multi-network ad funnels.",
        deliverable: "Synchronized Infrastructure & Ads"
      },
      {
        step: "03",
        title: "Localized Campaign Activation",
        description: "Launching tailored campaigns across Google, LinkedIn, Meta, TikTok, and Snapchat designed specifically for target country demographics.",
        deliverable: "Live International Operations"
      },
      {
        step: "04",
        title: "Governance & Continuous Evolution",
        description: "Monthly board-level reporting, SLA uptime audits, security health assessments, and strategic budget scaling.",
        deliverable: "Executive Governance Reports"
      }
    ],
    targetIndustries: [
      { name: "Multinational Enterprises", desc: "Global conglomerates requiring synchronized IT infrastructure and multi-country advertising." },
      { name: "Fintech & Financial Services", desc: "Regulated institutions requiring strict data governance and precision high-net-worth targeting." },
      { name: "Cross-Border E-Commerce", desc: "Brands scaling across UK, USA, Canada, and Europe with multi-currency funnels." },
      { name: "Enterprise Software & Cloud Platforms", desc: "B2B SaaS companies demanding high-availability infrastructure and international pipeline growth." },
      { name: "HealthTech & Telemedicine", desc: "HIPAA/GDPR-compliant health platforms scaling digital reach across North America and Europe." },
      { name: "Global Logistics & Freight Forwarders", desc: "International logistics networks needing digital booking portals and global ad presence." }
    ],
    specialFeature: {
      title: "The Multi-Network Ad & Cloud Matrix",
      subtitle: "Uniting Technology and International Reach",
      badge: "Enterprise Matrix",
      description: "Our integrated framework connecting high-volume social and search ad networks directly into secure enterprise cloud architecture.",
      items: [
        {
          title: "LinkedIn B2B Account-Based Marketing",
          description: "Precision targeting of C-suite executives, VP-level decision-makers, and enterprise procurement heads.",
          tag: "B2B Social",
          metrics: "Target Accounts"
        },
        {
          title: "TikTok & Snapchat Trend Creative",
          description: "High-engagement, short-form viral video creative driving younger demographic conversions across US & UK markets.",
          tag: "Viral Ad Channels",
          metrics: "High Engagement"
        },
        {
          title: "Google Search & Performance Max",
          description: "Dominating commercial intent queries across North America and Europe with automated bidding strategies.",
          tag: "Intent Search",
          metrics: "Max Conversion"
        },
        {
          title: "Multi-Cloud High-Availability Hosting",
          description: "Resilient cloud clusters across AWS, Azure, and Google Cloud ensuring your applications handle millions of global visitors.",
          tag: "Cloud Resilience",
          metrics: "99.99% Uptime"
        }
      ]
    },
    faqs: [
      {
        question: "Can our company execute a single contract covering both IT management and advertising?",
        answer: "Yes. J.V Marketing Solutions Limited (Global) was established specifically to provide consolidated Master Services Agreements (MSAs), eliminating the friction of managing separate vendors for software, cloud hosting, and marketing."
      },
      {
        question: "What currencies do you accept for international enterprise contracts?",
        answer: "We support seamless corporate billing and invoicing in USD, GBP, EUR, CAD, and INR with full tax compliance across jurisdictions."
      },
      {
        question: "How do you guarantee data privacy for our European and North American customers?",
        answer: "We strictly adhere to GDPR, UK Data Protection Act, and CCPA standards. All server architectures are configured with end-to-end encryption, role-based access, and audited log trails."
      },
      {
        question: "What is the primary contact method for international enterprise accounts?",
        answer: "International clients have access to our direct London hotline (+44 7344556070), direct executive email (info@jvgroupco.in), and private dedicated Slack/Teams communication channels."
      }
    ],
    directDesk: {
      phone: "+44 7344556070",
      phoneLabel: "Global Office: +44 7344556070",
      email: "info@jvgroupco.in",
      workingHours: "24/7 International Desk (US, UK, Canada & Global Overlap)",
      officeLocation: "2 Earlham Street, London, WC2H 9RY, United Kingdom",
      whatsappNumber: "447344556070"
    }
  },

  // 4. Ekato Tech
  "ekato-tech": {
    tagline: "Software & Technology Development Powerhouse",
    heroHeadline: "Full-Stack Software Engineering & 4 In-House Enterprise Platforms.",
    heroSubtitle:
      "Ekato Tech is the software engineering heartbeat of JV Group. We build high-performance web platforms, mobile applications, bespoke ERP systems, and workflow automation tools. Beyond custom client development, we own and operate 4 proprietary SaaS platforms: Education CRM, WhatsApp API Platform (Wapipulse), Helpdesk SaaS (Ticket4service), and Enterprise ERP.",
    stats: [
      { value: "4", label: "In-House SaaS Platforms", detail: "Built & Actively Maintained" },
      { value: "100+", label: "Digital Products Built", detail: "Web, Mobile & Enterprise ERP" },
      { value: "99.9%", label: "Production Uptime", detail: "Cloud Architecture SLA" },
      { value: "Global", label: "Clients in USA, UK & India", detail: "Full Modern Tech Stacks" }
    ],
    valuePillars: [
      {
        title: "Full-Stack Web & Mobile Architecture",
        description: "Bespoke digital platforms engineered with Next.js, React, Node.js, Python, Flutter, and cloud-native microservices.",
        icon: "Code2"
      },
      {
        title: "4 Proprietary In-House SaaS Assets",
        description: "Proven intellectual property including Wapipulse (WhatsApp API), Ticket4service (Helpdesk), Education CRM, and Enterprise ERP.",
        icon: "Sparkles"
      },
      {
        title: "Bespoke Enterprise ERP Engineering",
        description: "Tailor-made ERP systems integrating inventory, multi-warehouse logistics, billing, payroll, and real-time operations.",
        icon: "Cpu"
      },
      {
        title: "Official Meta WhatsApp Cloud API",
        description: "Automated customer support bots, transactional notifications, CRM webhooks, and broadcast marketing engines.",
        icon: "MessageSquare"
      }
    ],
    whyChooseUs: [
      {
        title: "Real Product Creators, Not Just Agencies",
        description: "We don't just build client code—we design, ship, and scale our own commercial SaaS platforms, giving our engineers real-world product empathy.",
        badge: "Product Mindset"
      },
      {
        title: "Complete Intellectual Property Ownership",
        description: "You receive clean, documented source code, enterprise architectural diagrams, and full commercial ownership of your custom software.",
        badge: "100% IP Transfer"
      },
      {
        title: "Rigorous Code Quality & DevOps",
        description: "Automated CI/CD pipelines, containerized Docker/Kubernetes deployments, unit test coverage, and strict security audits.",
        badge: "Production Grade"
      },
      {
        title: "Post-Launch SLA Maintenance",
        description: "Proactive bug fixes, server maintenance, performance tuning, and 24/7 incident response backed by JV Group IT infrastructure.",
        badge: "Guaranteed SLA"
      }
    ],
    processSteps: [
      {
        step: "01",
        title: "Technical Discovery & Product Architecture",
        description: "We define user journeys, database schemas, API specifications, tech stack selection, and milestone roadmaps.",
        deliverable: "Product Requirements Document (PRD) & Wireframes"
      },
      {
        step: "02",
        title: "UI/UX Prototyping & Sprint Planning",
        description: "Interactive Figma design prototypes followed by bi-weekly Agile engineering sprints with continuous client previews.",
        deliverable: "Clickable UI Prototypes & Sprint Backlog"
      },
      {
        step: "03",
        title: "Full-Stack Development & Testing",
        description: "Frontend and backend engineering, API integrations, automated unit tests, and cross-device performance benchmarks.",
        deliverable: "Staging Environment & Test Reports"
      },
      {
        step: "04",
        title: "Cloud Deployment & Production Handover",
        description: "Zero-downtime production deployment, SSL and DNS provisioning, full code repository handover, and training sessions.",
        deliverable: "Live Platform & Complete Source Code"
      }
    ],
    targetIndustries: [
      { name: "EdTech & University Systems", desc: "Custom learning management systems, admission CRMs, and campus portals." },
      { name: "Logistics & Freight Tech", desc: "Fleet tracking, container booking portals, and warehouse inventory ERPs." },
      { name: "Healthcare & MedTech", desc: "HIPAA-compliant patient portals, doctor appointment engines, and EHR systems." },
      { name: "Real Estate & PropTech", desc: "Property listing portals, CRM lead routing, and virtual property touring platforms." },
      { name: "Fintech & Payment Gateways", desc: "Secure transaction processing, multi-currency wallets, and compliance dashboards." },
      { name: "E-Commerce & D2C Marketplaces", desc: "Custom headless storefronts, inventory sync, and multi-vendor marketplaces." }
    ],
    specialFeature: {
      title: "4 In-House Proprietary SaaS Platforms",
      subtitle: "Battle-Tested Software Powering Real Businesses",
      badge: "Proprietary SaaS",
      description: "Ekato Tech has developed and operates 4 distinct software products serving thousands of businesses and students daily.",
      items: [
        {
          title: "1. CRM (Education)",
          description: "End-to-end student lifecycle management CRM for colleges, universities, and overseas visa consultancies to manage leads, counselor follow-ups, and admissions.",
          tag: "EdTech In-House",
          metrics: "Admissions CRM"
        },
        {
          title: "2. WhatsApp API Platform (Wapipulse.com)",
          description: "Multi-tenant conversational SaaS enabling companies to broadcast official Meta WhatsApp campaigns, build automated chatbots, and sync CRM webhooks.",
          tag: "Conversational SaaS",
          metrics: "Live at wapipulse.com",
          url: "https://wapipulse.com"
        },
        {
          title: "3. Ticket Management System (Ticket4service.com)",
          description: "Enterprise helpdesk software featuring multi-channel ticket intake, SLA countdown timers, automated engineer assignment, and satisfaction ratings.",
          tag: "Helpdesk SaaS",
          metrics: "Live at ticket4service.com",
          url: "https://ticket4service.com"
        },
        {
          title: "4. Enterprise ERP",
          description: "Unified Enterprise Resource Planning solution integrating inventory tracking, accounts, billing, warehouse logistics, and employee administration.",
          tag: "Operations ERP",
          metrics: "Enterprise Suite"
        }
      ]
    },
    faqs: [
      {
        question: "Can we license your in-house products (like Wapipulse or Ticket4service) for our own business?",
        answer: "Yes! All 4 of our in-house products are available for enterprise deployment, white-label licensing, or direct subscription with custom API integrations for your existing stack."
      },
      {
        question: "What technology stacks does Ekato Tech specialize in?",
        answer: "Our core engineering stacks include React, Next.js, Vue, Node.js, Python (Django/FastAPI), PHP (Laravel), Flutter, React Native, PostgreSQL, MongoDB, Redis, Docker, and AWS/GCP cloud environments."
      },
      {
        question: "Do you provide full source code ownership upon project completion?",
        answer: "Yes. For custom software projects, 100% intellectual property, repository access, and source code rights are transferred directly to your organization upon project completion."
      },
      {
        question: "How do you handle post-deployment maintenance and updates?",
        answer: "We offer dedicated Annual Maintenance Contracts (AMC) and SLA-backed support packages providing continuous monitoring, automated security patches, bug fixes, and feature additions."
      }
    ],
    directDesk: {
      phone: "+91 99097 00606",
      phoneLabel: "Tech Lab Desk: +91 99097 00606 | Global: +44 7344556070",
      email: "info@jvgroupco.in",
      workingHours: "Monday – Saturday: 9:30 AM – 7:30 PM IST (24/7 NOC Active)",
      officeLocation: "Corporate Tech Lab, Ahmedabad & Gandhinagar Corridor, Gujarat, India",
      whatsappNumber: "919909700606"
    }
  },

  // 5. J.V Infinity (Import Export - Freight & Logistics)
  "jv-infinity-import-export": {
    tagline: "End-to-End International Cargo, Multimodal Freight & Supply Chain Partner",
    heroHeadline: "Connecting Global Trade Corridors by Ocean, Air & Land.",
    heroSubtitle:
      "J.V Infinity (Import Export - Freight & Logistics) is the physical supply chain backbone of JV Group. We facilitate seamless international trade for manufacturing exporters, importers, and commercial distributors through scheduled air cargo, ocean container shipping (FCL/LCL), customs clearance brokerage, and bonded warehousing across major global ports.",
    stats: [
      { value: "100+", label: "Global Ports & Airports", detail: "Connected Across 50+ Countries" },
      { value: "FCL / LCL", label: "Full Container & Less", detail: "Flexible Ocean Freight" },
      { value: "100%", label: "Customs Compliance", detail: "HS Codes & DGFT Clearance" },
      { value: "Global", label: "US, UK, UAE, EU Routes", detail: "Multimodal Cargo Network" }
    ],
    valuePillars: [
      {
        title: "Ocean Freight Logistics (FCL & LCL)",
        description: "Full Container Load (20ft, 40ft, High Cube) and Less-than-Container Load consolidations connecting Indian ports to North America, Europe, UAE, and Asia.",
        icon: "Ship"
      },
      {
        title: "Expedited & Scheduled Air Freight",
        description: "Time-critical air cargo services with direct airline space allocations, airport-to-airport transit, and door-to-door express delivery.",
        icon: "Plane"
      },
      {
        title: "Customs Brokerage & Statutory Clearance",
        description: "Seamless navigation of customs tariffs, HS code classification, port terminal formalities, and export incentive documentation.",
        icon: "FileCheck"
      },
      {
        title: "Inland Haulage & Warehousing",
        description: "Secure palletized storage, pick-and-pack fulfillment, and multi-axle trailer transport connecting dry ports (ICDs) to maritime gateways.",
        icon: "Truck"
      }
    ],
    whyChooseUs: [
      {
        title: "Direct Carrier Contracts",
        description: "Strong partnerships with premier shipping lines and global air freight carriers give our clients competitive freight rates and priority space allocation.",
        badge: "Competitive Rates"
      },
      {
        title: "Zero-Hassle Port Clearance",
        description: "Our licensed customs brokerage team prevents costly port demurrage and container detention with proactive documentation filing.",
        badge: "Fast Clearance"
      },
      {
        title: "Comprehensive Marine Cargo Insurance",
        description: "Every shipment is protected by institutional marine cargo insurance covering transit risks from factory floor to overseas destination.",
        badge: "Safe Transit"
      },
      {
        title: "JV Group Integrated Logistics",
        description: "We can package freight logistics alongside digital export marketing (AMS / JV Marketing) and export software systems under one corporate umbrella.",
        badge: "Integrated Ecosystem"
      }
    ],
    processSteps: [
      {
        step: "01",
        title: "Cargo Assessment & Route Optimization",
        description: "We analyze your cargo dimensions, weight, HS code classification, destination port, and delivery urgency to select the best shipping mode.",
        deliverable: "Competitive Freight Quotation"
      },
      {
        step: "02",
        title: "Export Documentation & Booking",
        description: "Securing shipping line booking, container positioning at factory, generating Bill of Lading / Airway Bill, and customs documentation.",
        deliverable: "Shipping Order & Container Placement"
      },
      {
        step: "03",
        title: "Port Handling & Customs Clearance",
        description: "Managing port gate-in, terminal container handling, customs inspection, and export clearance through ICEGATE.",
        deliverable: "Customs Out of Charge & Vessel Loading"
      },
      {
        step: "04",
        title: "Ocean/Air Transit & Final Delivery",
        description: "Continuous milestone tracking during transit until vessel berthing, destination port clearance, and last-mile trailer delivery to receiver.",
        deliverable: "Proof of Delivery (POD) Confirmation"
      }
    ],
    targetIndustries: [
      { name: "Engineering & Machinery Exporters", desc: "Heavy industrial machinery, tooling equipment, and metal fabrications." },
      { name: "Textiles, Garments & Home Furnishings", desc: "High-volume containerized apparel and fabric shipments to Europe and USA." },
      { name: "Agro-Commodities & Food Products", desc: "Spices, grains, pulses, and temperature-sensitive food cargo." },
      { name: "Ceramics & Building Materials", desc: "Heavy tiles, sanitaryware, and construction stone container logistics." },
      { name: "Chemicals & Allied Products", desc: "Hazchem and non-hazardous industrial chemicals with strict compliance." },
      { name: "Retail & Consumer Goods Importers", desc: "Consolidated LCL shipments for electronics, lifestyle products, and hardware." }
    ],
    specialFeature: {
      title: "Global Multimodal Freight Corridors",
      subtitle: "Ocean, Air & Road Solutions Engineered for Reliability",
      badge: "Logistics Hub",
      description: "Our integrated logistics network handles complex international shipments across major global trade routes.",
      items: [
        {
          title: "USA & Canada Maritime Trade Lanes",
          description: "Regular sailings connecting Indian ports (Mundra, Nhava Sheva) to New York, Savannah, Houston, Los Angeles, and Montreal.",
          tag: "North America",
          metrics: "Direct Sailings"
        },
        {
          title: "UK & European Gateway Corridors",
          description: "Dedicated sea and air freight connections to Felixstowe, Southampton, Rotterdam, Hamburg, and Frankfurt.",
          tag: "Europe / UK",
          metrics: "Weekly Departures"
        },
        {
          title: "Middle East & Gulf Express (UAE, Saudi)",
          description: "Rapid short-sea container transit and daily air cargo flights connecting to Jebel Ali, Dammam, and Riyadh.",
          tag: "Gulf Cooperation",
          metrics: "3-5 Days Sea Transit"
        },
        {
          title: "Cold Chain & Temperature Controlled Cargo",
          description: "Reefer container solutions maintaining exact temperature logs for pharmaceuticals, perishables, and specialty goods.",
          tag: "Reefer Logistics",
          metrics: "Active Cold Chain"
        }
      ]
    },
    faqs: [
      {
        question: "What is the difference between FCL and LCL, and how do I know which one to choose?",
        answer: "FCL (Full Container Load) reserves an entire 20ft or 40ft container exclusively for your goods, ideal for shipments over 15 cubic meters. LCL (Less-than-Container Load) consolidates your cargo with other shippers, making it cost-effective for smaller consignments."
      },
      {
        question: "Do you handle customs documentation and clearance at both origin and destination ports?",
        answer: "Yes. Our licensed customs brokerage handles origin port clearances in India (Mundra, Hazira, Nhava Sheva, Pipavav) and coordinates with global overseas clearing agents for seamless destination delivery."
      },
      {
        question: "Can JV Infinity assist with Letter of Credit (LC) documentation compliance?",
        answer: "Yes. Our export documentation team reviews Bills of Lading, Certificates of Origin, Packing Lists, and Commercial Invoices to ensure strict compliance with your bank's Letter of Credit terms."
      },
      {
        question: "What tracking visibility do you provide during ocean and air transit?",
        answer: "We provide milestone tracking reports from container gate-in, vessel departure, transshipment points, port arrival, customs discharge, and final inland delivery."
      }
    ],
    directDesk: {
      phone: "+91 99097 00606",
      phoneLabel: "Freight & Logistics Desk: +91 99097 00606 | Global: +44 7344556070",
      email: "info@jvgroupco.in",
      workingHours: "Monday – Saturday: 9:00 AM – 7:30 PM IST (24/7 Cargo Operations)",
      officeLocation: "Logistics Hub — Ahmedabad & Major Port Liaisons (Mundra & Nhava Sheva)",
      whatsappNumber: "919909700606"
    }
  },

  // 6. J.V Real Estate
  "jv-real-estate": {
    tagline: "Premier Regional Property Acquisition, Commercial Leasing & Land Clearances",
    heroHeadline: "Prime Real Estate, Commercial Corporate Hubs & Statutory Land Clearances.",
    heroSubtitle:
      "J.V Real Estate is the land and physical infrastructure pillar of JV Group. Operating across Gujarat's most lucrative commercial zones—Ahmedabad, Gandhinagar, and the GIFT City corridor—we facilitate high-value corporate office leasing, strategic land acquisitions, residential investments, and statutory Non-Agricultural (NA/NOC) government clearances.",
    stats: [
      { value: "100%", label: "Verified Clear Titles", detail: "Airtight Legal Due Diligence" },
      { value: "S.G. Highway", label: "GIFT City Corridor", detail: "Prime Commercial Focus" },
      { value: "NA / NOC", label: "Government Approvals", detail: "AUDA & GUDA Sanctioning" },
      { value: "₹500Cr+", label: "Transaction Value Advised", detail: "Commercial, Land & Residential" }
    ],
    valuePillars: [
      {
        title: "Commercial Spaces & Corporate Offices",
        description: "Scouting and securing prestigious Grade-A office floors, corporate headquarters, and retail showrooms along S.G. Highway, Sindhu Bhavan, and GIFT City.",
        icon: "Building2"
      },
      {
        title: "Strategic Land Banking & Acquisition",
        description: "Identifying clear-title agricultural and commercial land parcels for warehousing hubs, industrial factories, and residential township projects.",
        icon: "Map"
      },
      {
        title: "Statutory NA & NOC Regulatory Clearances",
        description: "Comprehensive liaison with revenue authorities, AUDA, and GUDA for Non-Agricultural (NA) conversions, Town Planning approvals, and fire/environmental NOCs.",
        icon: "ShieldAlert"
      },
      {
        title: "Premium Luxury Residential Advisory",
        description: "Curated portfolio of high-end penthouses, luxury villas, and prime residential apartments for corporate executives and NRI investors.",
        icon: "Home"
      }
    ],
    whyChooseUs: [
      {
        title: "100% Legal Title Due Diligence",
        description: "Every property and land parcel undergoes rigorous 30-year title verification, revenue record inspection, and litigation clearance by senior legal advocates.",
        badge: "Zero Litigation"
      },
      {
        title: "Direct Owner & Developer Relationships",
        description: "No multi-layered broker circles. We deal directly with land owners and reputable corporate developers for transparent pricing.",
        badge: "Direct Access"
      },
      {
        title: "GIFT City & S.G. Highway Market Dominance",
        description: "In-depth intelligence on upcoming infrastructure projects, metro connectivity corridors, and zoning developments across Ahmedabad & Gandhinagar.",
        badge: "Local Authority"
      },
      {
        title: "Corporate Group Trust",
        description: "Operating under the corporate governance and financial strength of the multi-sector JV Group umbrella.",
        badge: "Corporate Standards"
      }
    ],
    processSteps: [
      {
        step: "01",
        title: "Requirement Profiling & Site Scouting",
        description: "We analyze your space parameters, budget, preferred corridor (S.G. Highway, Sindhu Bhavan, GIFT City), and commercial zoning requirements.",
        deliverable: "Curated Shortlist of Prime Properties"
      },
      {
        step: "02",
        title: "Legal Search & Title Verification",
        description: "Our legal panel conducts search reports in sub-registrar offices, inspecting 7/12 extracts, AUDA/GUDA zoning, and encumbrance certificates.",
        deliverable: "Legal Due Diligence Title Report"
      },
      {
        step: "03",
        title: "Commercial Negotiation & Term Structuring",
        description: "Facilitating transparent commercial negotiations, lease agreements, lock-in clauses, and milestone-linked payment schedules.",
        deliverable: "Draft Sale / Lease Agreement"
      },
      {
        step: "04",
        title: "Registration & Government Formalities",
        description: "Executing formal sale deed or lease registration at the Sub-Registrar office, stamp duty payment, and possession handover.",
        deliverable: "Registered Deed & Physical Handover"
      }
    ],
    targetIndustries: [
      { name: "IT, Tech & BPO Companies", desc: "Grade-A furnished office floors and IT park leasing with high-density power and fiber." },
      { name: "Industrial & Manufacturing Plants", desc: "Industrial land plots along Sanand, Changodar, and Dholera corridors." },
      { name: "Logistics & Warehousing Operators", desc: "Large land parcels near major highways for multimodal fulfillment centers." },
      { name: "Corporate Retailers & Showrooms", desc: "High-footfall corner retail locations for automotive, lifestyle, and luxury brands." },
      { name: "Real Estate Developers", desc: "Joint-venture land banks and outright land parcels for residential developments." },
      { name: "NRI & High-Net-Worth Investors", desc: "High-yield commercial properties, pre-leased offices, and luxury farmhouses." }
    ],
    specialFeature: {
      title: "Gujarat High-Growth Property Corridors",
      subtitle: "Strategic Real Estate Across Ahmedabad & Gandhinagar",
      badge: "Corridor Focus",
      description: "Our core geographical focus centers around the highest appreciating corporate corridors in Western India.",
      items: [
        {
          title: "S.G. Highway Commercial Corridor",
          description: "Ahmedabad's undisputed business spine housing multinational corporate headquarters, five-star hotels, and tech parks.",
          tag: "Corporate Spine",
          metrics: "Grade-A Offices"
        },
        {
          title: "Sindhu Bhavan Road (SBR) & Extension",
          description: "The ultra-premium commercial and retail hub of Ahmedabad featuring luxury dining, flagship showrooms, and high-end offices.",
          tag: "Luxury Commercial",
          metrics: "High Footfall"
        },
        {
          title: "GIFT City & Gandhinagar Belt",
          description: "India's premier international financial services centre offering tax incentives, smart city infrastructure, and global connectivity.",
          tag: "Financial Hub",
          metrics: "Global Standard"
        },
        {
          title: "Sanand & Changodar Industrial Belts",
          description: "Automobile hubs and heavy manufacturing industrial estates with excellent highway logistics and power connectivity.",
          tag: "Industrial Land",
          metrics: "Manufacturing Plots"
        }
      ]
    },
    faqs: [
      {
        question: "What due diligence do you perform before recommending a land parcel?",
        answer: "We perform complete 30-year title searches, verify revenue records (7/12, 8A, 6 Number entry), check AUDA/GUDA zoning, verify road widening lines, and confirm clear title with no encumbrances or pending litigations."
      },
      {
        question: "How do you help companies with Non-Agricultural (NA) and NOC approvals?",
        answer: "We manage the entire administrative lifecycle: drafting applications, revenue department liaison, environmental and fire department NOCs, AUDA/GUDA town planning sanctions, and obtaining the final NA order."
      },
      {
        question: "Can J.V Real Estate help our enterprise find pre-leased commercial offices with steady rental yields?",
        answer: "Yes. We maintain a curated portfolio of pre-leased commercial office spaces occupied by multinational tenants generating consistent 7% to 9% annual rental yields."
      },
      {
        question: "Do you assist NRI clients who want to purchase property in Ahmedabad without traveling?",
        answer: "Yes. We offer complete remote transaction support for NRIs including Power of Attorney (POA) drafting, virtual site walk-throughs, digital title verification, and remote registration assistance."
      }
    ],
    directDesk: {
      phone: "+91 99097 00606",
      phoneLabel: "Property & Land Desk: +91 99097 00606",
      email: "info@jvgroupco.in",
      workingHours: "Monday – Saturday: 10:00 AM – 7:30 PM IST",
      officeLocation: "S.G. Highway & Sindhu Bhavan Corridor, Ahmedabad, Gujarat, India",
      whatsappNumber: "919909700606"
    }
  },

  // 7. J.V IT Infrastructure Management
  "jv-it-infrastructure-management": {
    tagline: "Mission-Critical Enterprise IT, Cloud Engineering & 24/7 Managed NOC",
    heroHeadline: "Unbreakable IT Infrastructure, Zero-Downtime Clouds & Enterprise Security.",
    heroSubtitle:
      "J.V IT Infrastructure Management is the mission-critical technical backbone of JV Group. We design, deploy, and maintain high-availability corporate networks, hybrid cloud environments (AWS, Azure, GCP), zero-trust cybersecurity defenses, and proactive 24/7 Network Operations Centers (NOC) that guarantee 99.99% operational uptime for modern businesses.",
    stats: [
      { value: "99.99%", label: "System Uptime SLA", detail: "Mission-Critical Systems" },
      { value: "24/7/365", label: "Managed NOC Operations", detail: "Continuous Threat & Server Monitoring" },
      { value: "<15 Min", label: "Critical Incident Response", detail: "Certified Systems Engineers" },
      { value: "Zero Loss", label: "Disaster Recovery SLA", detail: "Automated Offsite Backups" }
    ],
    valuePillars: [
      {
        title: "Hybrid Cloud & High-Availability Servers",
        description: "Provisioning and managing Linux/Windows server clusters across AWS, Azure, Google Cloud, and private on-premise data centers.",
        icon: "Cloud"
      },
      {
        title: "Enterprise Networking & SD-WAN",
        description: "Structured high-speed fiber cabling, enterprise Cisco/Ubiquiti switches, multi-gigabit Wi-Fi 6 campuses, and secure site-to-site VPN tunnels.",
        icon: "Network"
      },
      {
        title: "Zero-Trust Cybersecurity & Firewalls",
        description: "Fortinet, Sophos, and Palo Alto next-gen firewalls, endpoint detection and response (EDR), intrusion prevention, and regular vulnerability audits.",
        icon: "ShieldCheck"
      },
      {
        title: "Proactive IT Maintenance (AMC) & Helpdesk",
        description: "SLA-backed annual maintenance contracts ensuring hardware health checks, preventive servicing, rapid spares replacement, and remote user support.",
        icon: "Wrench"
      }
    ],
    whyChooseUs: [
      {
        title: "Certified Systems Engineering Team",
        description: "Our engineers hold industry certifications from Cisco (CCNA/CCNP), Microsoft Azure, AWS Solutions Architect, and Red Hat Enterprise Linux.",
        badge: "Certified Experts"
      },
      {
        title: "Always-On 24/7 NOC Monitoring",
        description: "Our Network Operations Center monitors your CPU utilization, network latency, disk space, and security threats every second of every day.",
        badge: "24/7 NOC"
      },
      {
        title: "Guaranteed SLA Contracts",
        description: "Legally binding Service Level Agreements (SLAs) with strict response times, uptime commitments, and financial penalty clauses.",
        badge: "Ironclad SLA"
      },
      {
        title: "Integrated Group Tech Ecosystem",
        description: "We work directly alongside Ekato Tech (software engineers) and JV Marketing, ensuring your applications and websites perform with zero latency.",
        badge: "Ecosystem Advantage"
      }
    ],
    processSteps: [
      {
        step: "01",
        title: "Comprehensive Infrastructure Audit",
        description: "We scan your current network topology, server health, firewall configurations, licensing, and disaster recovery gaps.",
        deliverable: "IT Security & Infrastructure Audit Report"
      },
      {
        step: "02",
        title: "Architecture Design & Hardening Plan",
        description: "Architecting a resilient high-availability infrastructure blueprint with redundancy at power, server, switch, and ISP levels.",
        deliverable: "Target IT Architecture & Migration Plan"
      },
      {
        step: "03",
        title: "Deployment & Zero-Downtime Migration",
        description: "Deploying hardware, installing structured cabling, provisioning cloud servers, and migrating live workloads without interrupting business.",
        deliverable: "Fully Operational Hardened Environment"
      },
      {
        step: "04",
        title: "24/7 NOC Monitoring & Continuous AMC",
        description: "Connecting your infrastructure to our 24/7 monitoring dashboard, performing daily automated backups, and conducting preventive health checks.",
        deliverable: "Monthly SLA Uptime & Security Reports"
      }
    ],
    targetIndustries: [
      { name: "Manufacturing Plants & Factories", desc: "High-density plant Wi-Fi, industrial IoT networks, and ERP server reliability." },
      { name: "Corporate Headquarters & BFSI", desc: "Zero-trust network security, redundant internet failovers, and biometric access." },
      { name: "Hospitals & Healthcare Facilities", desc: "Uninterruptible server power, electronic medical record (EMR) server uptime, and IP surveillance." },
      { name: "Educational Campuses & Universities", desc: "Campus-wide Wi-Fi 6, lab workstation maintenance, and bandwidth traffic shaping." },
      { name: "Software Development Companies", desc: "Private Git servers, CI/CD runners, staging clusters, and secure developer VPNs." },
      { name: "Logistics Hubs & Warehouses", desc: "Rugged barcode scanner Wi-Fi coverage, CCTV coverage, and weighing bridge integrations." }
    ],
    specialFeature: {
      title: "24/7 Managed NOC & Security Operations",
      subtitle: "Defending Enterprise Operations Around the Clock",
      badge: "NOC Capabilities",
      description: "Our centralized Network Operations Center uses automated synthetic probes and threat intelligence to prevent downtime before it occurs.",
      items: [
        {
          title: "Real-Time Telemetry & Metric Alarms",
          description: "Instant SMS, WhatsApp, and call alerts triggered whenever server memory exceeds 85% or an interface drops a packet.",
          tag: "Telemetry",
          metrics: "Sub-Second Alerts"
        },
        {
          title: "Automated Off-Site Cloud Backups",
          description: "Immutable, encrypted snapshots stored across geographic cloud regions ensuring ransomware can never destroy corporate data.",
          tag: "Data Protection",
          metrics: "Zero Data Loss"
        },
        {
          title: "Next-Gen Firewall Threat Filtering",
          description: "Deep packet inspection, SSL decryption, geo-IP blocking, and AI malware detection at the gateway.",
          tag: "Cyber Defense",
          metrics: "Threat Neutralization"
        },
        {
          title: "Preventive Hardware Servicing (AMC)",
          description: "Scheduled thermal paste reapplication, fan dust cleaning, power supply voltage testing, and firmware updates.",
          tag: "Hardware AMC",
          metrics: "Extended Lifetime"
        }
      ]
    },
    faqs: [
      {
        question: "What is included in an Enterprise IT Annual Maintenance Contract (AMC)?",
        answer: "Our AMC covers comprehensive preventive hardware maintenance, 24/7 remote helpdesk, guaranteed on-site engineer dispatch for critical failures, software patch management, backup verification, and network performance tuning."
      },
      {
        question: "How do you guarantee zero downtime during cloud server migrations?",
        answer: "We configure parallel cloud staging environments, replicate databases using live transaction logging, perform dry-run cutovers outside business hours, and switch DNS records seamlessly with zero user interruption."
      },
      {
        question: "Can you manage our physical office security alongside our IT servers?",
        answer: "Yes. We provide complete physical and digital security integration: high-definition IP CCTV camera surveillance, cloud NVR recording, biometric fingerprint/facial attendance machines, and access control turnstiles."
      },
      {
        question: "What is your critical incident SLA response time?",
        answer: "For severity-1 critical incidents (complete network or server outage), our certified NOC engineers respond within 15 minutes remotely, with on-site dispatch within 1 to 2 hours in metropolitan operating areas."
      }
    ],
    directDesk: {
      phone: "+91 99097 00606",
      phoneLabel: "IT Operations: +91 99097 00606 | Global: +44 7344556070",
      email: "info@jvgroupco.in",
      workingHours: "24/7/365 NOC Operations (Always Active)",
      officeLocation: "Enterprise NOC & Server Lab, Ahmedabad & Gandhinagar, Gujarat, India",
      whatsappNumber: "919909700606"
    }
  },

  // 8. J.V OVERSEAS
  "jv-overseas": {
    tagline: "Premier Global Education, Master's Programs & International Work Mobility Partner",
    heroHeadline: "Secure Your Master's Degree & Work Visa Across Tier-1 Global Destinations.",
    heroSubtitle:
      "J.V OVERSEAS is the international mobility gateway of JV Group. We guide ambitious students and working professionals across India toward high-value Master's degrees, official post-study work permits, skilled worker visas, and global corporate careers across the United Kingdom, United States, Canada, Australia, New Zealand, and Europe.",
    stats: [
      { value: "98%+", label: "Visa Approval Rate", detail: "Across Tier-1 Embassies" },
      { value: "500+", label: "Partner Universities", detail: "UK, USA, Canada, Australia, EU" },
      { value: "Tier-1", label: "Destination Focus", detail: "UK, USA, Canada, Australia, NZ, EU" },
      { value: "End-to-End", label: "Pre-to-Post Landing", detail: "Admissions, SOP, Forex & Flights" }
    ],
    valuePillars: [
      {
        title: "Master's Program Admissions (Primary Focus)",
        description: "Strategic university shortlisting, direct university application filing, compelling SOP and LOR crafting, and merit scholarship acquisition.",
        icon: "GraduationCap"
      },
      {
        title: "Work Visas & Post-Study Work Permits",
        description: "Official guidance navigating UK Graduate Route (PSW), Canada PGWP & Express Entry, Australian Temporary Graduate (485), and skilled migrant pathways.",
        icon: "Briefcase"
      },
      {
        title: "Financial Dossier & Visa Documentation",
        description: "Airtight financial proof preparation, education loan sanctioning with leading banks, blocked accounts (GIC), and mock embassy interview training.",
        icon: "FileText"
      },
      {
        title: "Visitor Visas & Complete Travel Logistics",
        description: "Tourist and family visitor visas, corporate business visas, discounted student international air tickets, forex currency cards, and verified accommodation.",
        icon: "PlaneTakeoff"
      }
    ],
    whyChooseUs: [
      {
        title: "Unbiased, Career-First Counseling",
        description: "We don't push random colleges. We match your academic background, budget, and long-term residency/career goals with high-ranking institutions.",
        badge: "Career Focused"
      },
      {
        title: "Direct University Liaisons",
        description: "Direct ties with official admissions representatives across the UK, USA, Canada, and Europe for accelerated offer letter turnaround.",
        badge: "Fast Offers"
      },
      {
        title: "Transparent, Zero-Hidden-Charge Policy",
        description: "Complete transparency regarding university tuition fees, embassy charges, and medical insurance with no unexpected surprises.",
        badge: "100% Honest"
      },
      {
        title: "Post-Landing Alumni Support",
        description: "Airport pick-up coordination, international SIM cards, banking setup, and an active alumni network in London, Toronto, and Sydney.",
        badge: "On-Ground Support"
      }
    ],
    processSteps: [
      {
        step: "01",
        title: "Profile Assessment & University Shortlisting",
        description: "We evaluate your GPA, academic history, English proficiency (IELTS/PTE/Duolingo), and budget to curate target institutions.",
        deliverable: "Personalized University Matrix"
      },
      {
        step: "02",
        title: "Application Filing & SOP/LOR Crafting",
        description: "Drafting high-impact Statement of Purpose (SOP), Letters of Recommendation, and submitting official applications.",
        deliverable: "Confirmed University Offer Letters"
      },
      {
        step: "03",
        title: "Financial Sanction & Embassy Visa Dossier",
        description: "Structuring education loan documentation, blocked accounts (GIC), genuine temporary entrant (GTE) statements, and visa filing.",
        deliverable: "Official Embassy Visa Approval"
      },
      {
        step: "04",
        title: "Pre-Departure Briefing & Travel Setup",
        description: "Securing discounted student airfare, foreign exchange currency cards, health insurance, and verified accommodation near campus.",
        deliverable: "Flight Ticket & Welcome Departure Kit"
      }
    ],
    targetIndustries: [
      { name: "Graduating University Students", desc: "Engineering, management, commerce, and science graduates pursuing overseas Master's degrees." },
      { name: "IT & Tech Professionals", desc: "Software engineers and data scientists seeking global STEM Master's degrees and work mobility." },
      { name: "Experienced Working Executives", desc: "Professionals seeking global MBAs, executive master programs, and skilled work permits." },
      { name: "Families & Visitors", desc: "Parents visiting students abroad, tourist travelers, and business conference attendees." },
      { name: "Medical & Healthcare Graduates", desc: "Doctors, nurses, and allied healthcare professionals pursuing international pathways." },
      { name: "Corporate Executives Traveling on Business", desc: "Hassle-free business visas for trade expos and corporate overseas meetings." }
    ],
    specialFeature: {
      title: "Tier-1 Destination Matrix",
      subtitle: "Top Global Countries for Higher Education & Work Visas",
      badge: "Global Destinations",
      description: "Our dedicated country desks specialize in the world's most sought-after higher education and career destinations.",
      items: [
        {
          title: "United Kingdom (UK)",
          description: "1-year accelerated Master's degrees, 2-year Post-Study Work Visa (Graduate Route), top Russell Group universities, and no strict cap on work hours during breaks.",
          tag: "UK Desk",
          metrics: "1-Yr Masters + 2-Yr PSW"
        },
        {
          title: "United States (USA)",
          description: "World-class Ivy League and public research universities, 3-year STEM OPT work authorization, and generous research assistantships (RA/TA).",
          tag: "USA Desk",
          metrics: "3-Yr STEM OPT"
        },
        {
          title: "Canada",
          description: "Co-op programs, up to 3-year Post-Graduation Work Permits (PGWP), clear Express Entry permanent residency pathways, and welcoming multicultural cities.",
          tag: "Canada Desk",
          metrics: "Up to 3-Yr PGWP"
        },
        {
          title: "Australia & New Zealand",
          description: "High standard of living, high minimum wage, generous post-study work rights, and high demand for engineering and healthcare professionals.",
          tag: "Oceania Desk",
          metrics: "Generous Work Rights"
        }
      ]
    },
    faqs: [
      {
        question: "Can I apply for a Master's degree abroad if I have an education gap or backlogs?",
        answer: "Yes. Many reputable universities across the UK, USA, Canada, and Europe accept reasonable study gaps when accompanied by valid work experience certificates or justifiable reasons. Our counselors help frame your profile effectively."
      },
      {
        question: "Do you assist with education loan sanctioning without collateral?",
        answer: "Yes. We partner with nationalized banks and NBFCs (including HDFC Credila, Avanse, and Prodigy Finance) to assist qualified students in securing non-collateral education loans at competitive interest rates."
      },
      {
        question: "What English tests are accepted, and can I get a waiver?",
        answer: "Universities accept IELTS Academic, PTE Academic, TOEFL, and Duolingo. Several UK universities also offer English test waivers if you scored 70%+ in your 12th standard English CBSE/State board exams."
      },
      {
        question: "Do you assist with post-study work permits after I complete my degree?",
        answer: "Yes. J.V OVERSEAS provides comprehensive guidance on applying for your post-study work visa (e.g. UK Graduate Route, Canada PGWP, Australia 485) as well as transitioning to employer-sponsored skilled worker visas."
      }
    ],
    directDesk: {
      phone: "+91 99097 00606",
      phoneLabel: "Visa Counseling Desk: +91 99097 00606",
      email: "info@jvgroupco.in",
      workingHours: "Monday – Saturday: 10:00 AM – 7:00 PM IST",
      officeLocation: "Corporate Overseas Center, Ahmedabad & Gandhinagar Corridor, Gujarat, India",
      whatsappNumber: "919909700606"
    }
  },

  // 9. Campus Dekho
  "campus-dekho": {
    tagline: "India's Next-Generation College Discovery & Admission Guidance Platform",
    heroHeadline: "Discover Verified Colleges, Compare Courses & Secure Direct Admissions.",
    heroSubtitle:
      "Campus Dekho (campusdekho.in) is JV Group's dedicated EdTech discovery marketplace. Addressing the confusion faced by millions of Indian high-school and graduate students annually, Campus Dekho provides transparent college comparison tools, verified fee structures, entrance exam cut-off analytics, and direct admission counseling matching students to accredited institutions.",
    stats: [
      { value: "1,500+", label: "Accredited Colleges Listed", detail: "Engineering, MBA, Medical, Law" },
      { value: "10,000+", label: "Verified Courses", detail: "Detailed Fee & Placement Data" },
      { value: "100%", label: "Free Student Counseling", detail: "Unbiased Guidance for Students" },
      { value: "Pan-India", label: "National Coverage", detail: "State & Central Universities" }
    ],
    valuePillars: [
      {
        title: "Intelligent College Comparison Engine",
        description: "Compare colleges side-by-side on NIRF rankings, verified tuition fees, hostel amenities, faculty ratings, and real campus placement statistics.",
        icon: "Search"
      },
      {
        title: "1-on-1 Personalized Admission Counseling",
        description: "Certified educational advisors helping students and parents navigate entrance cut-offs, management quotas, and scholarship opportunities.",
        icon: "UserCheck"
      },
      {
        title: "Entrance Exam Trackers & Cut-Offs",
        description: "Up-to-date notifications and cut-off score predictions for JEE Main/Advanced, NEET, CAT, MAT, CUET, and state CET examinations.",
        icon: "Calendar"
      },
      {
        title: "Institutional Partner Showcases",
        description: "Helping colleges and universities reach qualified prospective students through targeted digital spotlights, webinars, and verified lead management.",
        icon: "GraduationCap"
      }
    ],
    whyChooseUs: [
      {
        title: "Verified, Transparent Placement Data",
        description: "No inflated marketing claims. We publish verified median placement packages, top recruiters, and real alumni reviews.",
        badge: "Verified Data"
      },
      {
        title: "100% Free Counseling for Students & Parents",
        description: "Students never pay a single rupee for college discovery and personalized guidance on the platform.",
        badge: "Free for Students"
      },
      {
        title: "Direct Synergies with J.V OVERSEAS",
        description: "Students interested in international master's programs or foreign semester exchanges get seamless, priority transitions to J.V Overseas.",
        badge: "Global Pathways"
      },
      {
        title: "Live Portal at campusdekho.in",
        description: "A production-ready digital portal actively helping thousands of students make informed career decisions every month.",
        badge: "Active Portal"
      }
    ],
    processSteps: [
      {
        step: "01",
        title: "Search & Filter Top Colleges",
        description: "Use smart filters to search by state, course (B.Tech, MBA, MBBS, BBA), entrance exam score, fee budget, and placement rating.",
        deliverable: "Curated College Comparison List"
      },
      {
        step: "02",
        title: "Connect with a Dedicated Counselor",
        description: "Request a free consultation with our educational experts who match your rank and aspirations with realistic college options.",
        deliverable: "Personalized Career Advisory Session"
      },
      {
        step: "03",
        title: "Direct Application & Document Verification",
        description: "Submit college application forms directly through Campus Dekho with automated document checks and fee waiver eligibility.",
        deliverable: "Application Submission Receipt"
      },
      {
        step: "04",
        title: "Admission Confirmation & Seat Allotment",
        description: "Counselors guide you through round-wise seat counseling, document verification at the campus, and final fee payment.",
        deliverable: "Confirmed College Admission"
      }
    ],
    targetIndustries: [
      { name: "Class 12th Board Students", desc: "Students exploring engineering, medical, law, architecture, and commerce degree programs." },
      { name: "College Graduates Seeking Post-Graduation", desc: "Graduates preparing for MBA, M.Tech, MCA, and specialized postgraduate diplomas." },
      { name: "Parents & Guardians", desc: "Parents seeking verified tuition fee breakdowns, safety ratings, and hostel amenities." },
      { name: "Competitive Exam Aspirants", desc: "Aspirants tracking ranks and cut-offs for JEE, NEET, CAT, CMAT, and CUET." },
      { name: "Colleges & Private Universities", desc: "Academic institutions looking to increase admissions of high-caliber students." },
      { name: "Vocational & Polytechnic Institutes", desc: "Diploma and skill-training institutions seeking regional candidate outreach." }
    ],
    specialFeature: {
      title: "The Campus Dekho Discovery Toolkit",
      subtitle: "Features Built to Empower Every Student and Parent",
      badge: "Platform Highlights",
      description: "Our EdTech platform simplifies the daunting admission journey with intelligent decision tools.",
      items: [
        {
          title: "Side-by-Side College Comparison Tool",
          description: "Compare up to 4 colleges simultaneously across fee structures, average placement CTC, campus acreage, and faculty credentials.",
          tag: "Compare Tool",
          metrics: "Side-by-Side"
        },
        {
          title: "Cut-Off Predictor & College Predictor",
          description: "Input your percentile or marks in JEE, NEET, CAT, or 12th boards to see your probability of admission into top colleges.",
          tag: "AI Predictor",
          metrics: "Instant Cut-Offs"
        },
        {
          title: "Verified Student & Alumni Reviews",
          description: "Unfiltered reviews from current students rating campus life, faculty teaching quality, mess food, and placement drives.",
          tag: "Authentic Reviews",
          metrics: "Real Voices"
        },
        {
          title: "Scholarship & Education Loan Finder",
          description: "Discover government and institutional merit scholarships to reduce your tuition fees, with direct education loan assistance.",
          tag: "Financial Support",
          metrics: "Fee Reductions"
        }
      ]
    },
    faqs: [
      {
        question: "Is Campus Dekho free to use for students and parents?",
        answer: "Yes, 100%! All search tools, college comparisons, cut-off calculators, and 1-on-1 counseling calls with our advisors are completely free of charge for students and parents."
      },
      {
        question: "How accurate is the fee and placement data on Campus Dekho?",
        answer: "We verify tuition fees, hostel charges, and placement figures directly against official university gazettes, NIRF submissions, and audited college annual reports to ensure maximum accuracy."
      },
      {
        question: "Can colleges and universities partner with Campus Dekho to feature their campus?",
        answer: "Yes! Accredited colleges and private universities can partner with Campus Dekho to publish verified institution profiles, host virtual admission webinars, and receive verified student application inquiries."
      },
      {
        question: "What if a student also wants to explore studying abroad?",
        answer: "Campus Dekho has direct integration with sister company J.V OVERSEAS. Students who want to compare Indian degrees with overseas universities in the UK, USA, or Canada receive priority counseling with J.V Overseas."
      }
    ],
    directDesk: {
      phone: "+91 99097 00606",
      phoneLabel: "Platform Desk: +91 99097 00606",
      email: "info@jvgroupco.in",
      workingHours: "Monday – Saturday: 9:30 AM – 7:00 PM IST",
      officeLocation: "Campus Dekho Headquarters — Ahmedabad & Gandhinagar, Gujarat, India",
      whatsappNumber: "919909700606"
    }
  },

  // 10. WapiPulse.com (WhatsApp API Solutions)
  "wapipulse": {
    tagline: "Official Meta WhatsApp Business Cloud API & Conversational AI Platform",
    heroHeadline: "Scale Broadcasts, Deploy 24/7 AI Chatbots & Unify Support on Official WhatsApp API.",
    heroSubtitle:
      "WapiPulse.com is JV Group's flagship conversational SaaS platform engineered by Ekato Tech directly on Meta's official WhatsApp Cloud API infrastructure. Unlock 98% open rates, instant AI chatbot auto-replies, multi-agent shared team inboxes, and seamless two-way CRM webhooks with zero risk of phone number bans.",
    stats: [
      { value: "98%", label: "Average Open Rate", detail: "Dominating Email (20%) & SMS (10%)" },
      { value: "Official", label: "Meta Cloud API Partner", detail: "Zero Phone Ban Risk" },
      { value: "< 2 Sec", label: "AI Response Velocity", detail: "24/7 Instant Automated Replies" },
      { value: "45%+", label: "Interactive Campaign CTR", detail: "Buttons, Catalogs & Media Links" }
    ],
    valuePillars: [
      {
        title: "Official Meta WhatsApp Cloud API",
        description: "Direct enterprise connectivity to Meta's Cloud API infrastructure with high message throughput, guaranteed number security, and green tick verification support.",
        icon: "MessageSquare"
      },
      {
        title: "High-Volume Targeted Broadcasts",
        description: "Schedule personalized promotional broadcasts with images, videos, catalogs, and interactive CTA buttons to unlimited opted-in subscribers.",
        icon: "Megaphone"
      },
      {
        title: "24/7 Visual AI Chatbots & Workflows",
        description: "Build no-code conversational workflows or integrate ChatGPT/LLM bots to answer FAQs, qualify sales leads, and book meetings automatically.",
        icon: "Cpu"
      },
      {
        title: "Multi-Agent Shared Team Inbox",
        description: "Empower your entire sales and customer care staff to reply from a single verified WhatsApp number with role permissions and smart routing.",
        icon: "UserCheck"
      }
    ],
    whyChooseUs: [
      {
        title: "100% Official Meta Cloud API Compliance",
        description: "Unlike unauthorized third-party scrapers that cause sudden phone bans, WapiPulse runs strictly on official Meta infrastructure.",
        badge: "Zero Ban Risk"
      },
      {
        title: "Native E-Commerce & CRM Webhooks",
        description: "Seamless two-way integration with Shopify, WooCommerce, HubSpot, Salesforce, Zoho, Google Sheets, and custom RESTful APIs.",
        badge: "Native Sync"
      },
      {
        title: "High-Throughput Tiered Message Engine",
        description: "Capable of dispatching tens of thousands of WhatsApp messages per minute without rate-limiting delays or queue bottlenecks.",
        badge: "High Throughput"
      },
      {
        title: "Backed by JV Group Enterprise SLA",
        description: "Developed and managed by Ekato Tech with 24/7 technical monitoring, dedicated engineering support, and consolidated group billing.",
        badge: "Group Backed"
      }
    ],
    processSteps: [
      {
        step: "01",
        title: "Sign Up & Meta Cloud Onboarding",
        description: "Register your company on wapipulse.com and link your Meta Business Manager account with your official phone number in under 5 minutes.",
        deliverable: "Active WapiPulse Portal & Meta Cloud Link"
      },
      {
        step: "02",
        title: "Template Approval & Contact Import",
        description: "Submit custom rich-media WhatsApp message templates for rapid Meta approval and upload your customer contact database with custom tags.",
        deliverable: "Approved Templates & Segmented Audiences"
      },
      {
        step: "03",
        title: "Configure AI Chatbots & Workflows",
        description: "Build interactive drag-and-drop conversational bots or connect ChatGPT to auto-respond to customer inquiries 24/7.",
        deliverable: "Automated 24/7 Conversational Bot Engine"
      },
      {
        step: "04",
        title: "Launch Campaigns & Shared Inbox",
        description: "Dispatch scheduled broadcast campaigns, monitor live delivery metrics, and collaborate with your team in the multi-agent shared inbox.",
        deliverable: "Live Campaign Analytics & Agent Collaboration"
      }
    ],
    targetIndustries: [
      { name: "E-Commerce & D2C Brands", desc: "Automated abandoned cart recovery, order confirmation, shipping tracking, and re-order campaigns." },
      { name: "Real Estate Agencies & Developers", desc: "Instant property brochure sharing, virtual walk-through links, and automated site visit scheduling." },
      { name: "Overseas Education & Universities", desc: "Course counseling follow-ups, scholarship alerts, webinar invitations, and visa document guidance." },
      { name: "Healthcare Clinics & Diagnostics", desc: "Automated appointment reminders, doctor consultation scheduling, and secure digital test report delivery." },
      { name: "BFSI & Financial Advisory", desc: "KYC reminder alerts, policy renewal broadcasts, payment link sharing, and personalized loan inquiries." },
      { name: "Marketing Agencies & B2B Firms", desc: "Click-to-WhatsApp ad lead capture, high-converting broadcast newsletters, and client account management." }
    ],
    specialFeature: {
      title: "Enterprise Conversational Revenue Engine",
      subtitle: "Why WapiPulse Outperforms Traditional Marketing & Support Channels",
      badge: "Platform Highlights",
      description: "Engineered to deliver industry-leading engagement rates while keeping your business phone number completely protected under Meta's guidelines.",
      items: [
        {
          title: "98% Open Rate Broadcast Marketing",
          description: "Cut through overcrowded email inboxes. Send interactive WhatsApp campaigns with buttons, quick replies, videos, and PDFs with 98% open rates.",
          tag: "Broadcast Engine",
          metrics: "98% Open Rate"
        },
        {
          title: "Multi-Agent Shared Team Inbox",
          description: "Multiple staff members can chat with customers simultaneously from the same number, assign chats to specific agents, and leave private internal notes.",
          tag: "Shared Inbox",
          metrics: "Unlimited Agents"
        },
        {
          title: "Automated E-Commerce Workflows",
          description: "Trigger automated WhatsApp messages when a customer abandons a checkout cart, places an order, or requests a Cash on Delivery (COD) verification.",
          tag: "E-Commerce",
          metrics: "3x Cart Recovery"
        },
        {
          title: "Official Green Tick Verification",
          description: "We provide step-by-step guidance and technical assistance to help eligible brands secure the prestigious Meta WhatsApp Green Tick checkmark.",
          tag: "Brand Authority",
          metrics: "Official Badge"
        }
      ]
    },
    faqs: [
      {
        question: "What is WapiPulse.com?",
        answer: "WapiPulse.com is an enterprise-grade WhatsApp Business Cloud API and Conversational AI automation SaaS platform built and operated by JV Group (Ekato Tech). Built directly on Meta's official WhatsApp Cloud API, WapiPulse allows businesses to broadcast mass promotional campaigns, deploy 24/7 intelligent AI chatbots, manage multi-agent customer support inboxes, and integrate real-time transactional WhatsApp notifications with any website, CRM, or ERP."
      },
      {
        question: "Why should businesses use WapiPulse? (Why use this?)",
        answer: "Traditional marketing channels suffer from low engagement—emails average only 20% open rates and SMS is expensive with zero rich-media capabilities. Furthermore, using personal WhatsApp Web for business risks immediate phone number bans. WapiPulse solves these challenges by providing: (1) 98% message open rates and 45%+ click-through rates; (2) 100% official Meta compliance with zero phone ban risk; (3) 24/7 automated AI chatbot support with sub-second response times; (4) A unified team inbox where 10+ agents can reply from the same verified company number; and (5) Proven 3x increase in sales conversion rates with automated abandoned cart recovery."
      },
      {
        question: "Which companies, industries, and people use WapiPulse?",
        answer: "WapiPulse is used by thousands of business owners, marketing directors, customer service teams, and enterprise brands across: (1) E-Commerce & D2C Brands (abandoned cart recovery, order updates, COD confirmation); (2) Real Estate Agencies (brochure delivery, site visit bookings); (3) Educational Consultancies & Colleges (admission counseling, webinar alerts); (4) Healthcare Clinics & Labs (appointment scheduling, PDF report delivery); (5) BFSI & FinTech (KYC reminders, policy renewals); and (6) Digital Marketing Agencies running high-volume Click-to-WhatsApp ad campaigns for corporate clients."
      },
      {
        question: "How do you use WapiPulse? (Step-by-step guide)",
        answer: "Using WapiPulse is simple and intuitive: (1) Sign Up: Register at wapipulse.com; (2) Link WhatsApp Number: Complete the fast 5-minute embedded Meta Business verification to connect your official phone number; (3) Submit Templates: Create custom message templates with images, documents, and interactive CTA buttons for Meta approval; (4) Upload Contacts & Segment: Import customer contact lists and segment them with custom tags; (5) Launch Broadcasts or Set Up Bots: Schedule targeted campaigns or configure drag-and-drop conversational bots for 24/7 automated replies; and (6) Team Collaboration: Support and sales agents log into the shared inbox to handle customer conversations with quick canned responses."
      },
      {
        question: "How can you buy WapiPulse? (Pricing & onboarding)",
        answer: "WapiPulse offers transparent and flexible SaaS subscription plans: (1) Starter Plan: Ideal for growing small businesses needing broadcast campaigns and basic chatbot automation; (2) Growth & Scale Plans: Designed for medium enterprises requiring multi-agent inboxes, CRM integrations, and advanced chatbot workflows; (3) Custom Enterprise Contracts: Tailored for corporate conglomerates requiring dedicated account managers, custom webhook development, high-throughput Meta message tiers, and consolidated billing under JV Group. You can subscribe directly on wapipulse.com using credit card, UPI, or corporate bank wire. Alternatively, contact the JV Group executive desk at +91 99097 00606 or +44 7344556070 for instant activation and dedicated onboarding support."
      },
      {
        question: "Which countries use WapiPulse?",
        answer: "WapiPulse is deployed globally and works in every country where WhatsApp is actively used. Primary active regions include: (1) India & South Asia (dominant consumer and retail communication channel); (2) United Arab Emirates (UAE) & Middle East (Dubai, Abu Dhabi, Saudi Arabia, Qatar, Kuwait); (3) United Kingdom (UK) & European Union (UK, Germany, Spain, Italy, Netherlands); (4) North America (United States and Canada for cross-border and multicultural outreach); and (5) Southeast Asia & Latin America (Singapore, Malaysia, Indonesia, Brazil, Mexico). The platform supports multi-currency billing, multi-language message templates, and international country codes (+1, +44, +91, +971, etc.)."
      },
      {
        question: "Does WapiPulse support the official WhatsApp Green Tick badge?",
        answer: "Yes! WapiPulse assists qualified commercial brands in applying for Meta's official verified Green Tick checkmark beside their business name. Our team assists with Meta Business Manager verification, brand press release guidelines, and direct official application submission."
      },
      {
        question: "Can WapiPulse integrate with our existing website, CRM, or ERP?",
        answer: "Absolutely. WapiPulse features ready-to-use plugins for Shopify and WooCommerce, as well as robust two-way webhooks and RESTful APIs that connect seamlessly to HubSpot, Salesforce, Zoho, Google Sheets, LeadSquared, and custom enterprise databases."
      },
      {
        question: "Is there any risk of phone number blocking or bans with WapiPulse?",
        answer: "No. Because WapiPulse operates strictly on Meta's official Cloud API infrastructure (unlike unofficial scrapers or unauthorized third-party chrome extensions that get banned), your phone number is 100% compliant, officially registered, and protected by Meta's enterprise infrastructure."
      }
    ],
    directDesk: {
      phone: "+91 99097 00606",
      phoneLabel: "WhatsApp Platform Desk: +91 99097 00606 | Global: +44 7344556070",
      email: "info@jvgroupco.in",
      workingHours: "Monday – Saturday: 9:30 AM – 7:30 PM IST (24/7 Platform Uptime)",
      officeLocation: "Corporate Tech Lab, Ahmedabad & Gandhinagar Corridor, Gujarat, India",
      whatsappNumber: "919909700606"
    }
  },

  // 11. Ticket4service.com
  "ticket4service": {
    tagline: "Enterprise Omnichannel Helpdesk, Incident Operations & Support Ticketing Platform",
    heroHeadline: "Resolve Incidents Faster, Enforce Strict SLAs & Unify Support Across Channels.",
    heroSubtitle:
      "Ticket4service.com is JV Group's proprietary enterprise service ticketing and incident management SaaS platform developed by Ekato Tech. Consolidate customer queries from support emails, web forms, client portals, and WhatsApp into actionable tickets with automated SLA timers, smart department routing, and executive analytics.",
    stats: [
      { value: "99.9%", label: "SLA Resolution Rate", detail: "Automated Escalation Timers" },
      { value: "60%+", label: "Support Productivity Gain", detail: "Canned Macros & Auto Triage" },
      { value: "Omnichannel", label: "Email, Web, WhatsApp, API", detail: "Single Unified Team Inbox" },
      { value: "Zero", label: "Lost Customer Tickets", detail: "End-to-End Audit Trail" }
    ],
    valuePillars: [
      {
        title: "Omnichannel Ticket Aggregation",
        description: "Consolidate customer requests from support emails, embeddable web widgets, WhatsApp API, and REST webhooks into one collaborative queue.",
        icon: "Layers"
      },
      {
        title: "Automated SLA Timers & Escalations",
        description: "Enforce strict multi-tier Service Level Agreements with automated timers that alert managers before deadlines breach.",
        icon: "Clock"
      },
      {
        title: "Smart Triage & Agent Routing",
        description: "Automatically route incoming tickets to the correct department (IT, Billing, Support, Sales) and assign agents based on workload and skill.",
        icon: "Network"
      },
      {
        title: "Self-Service Knowledge Base & CSAT",
        description: "Empower customers with instant self-service articles while gathering automated 1-click star satisfaction ratings upon ticket resolution.",
        icon: "BarChart3"
      }
    ],
    whyChooseUs: [
      {
        title: "Eliminate Lost Customer Emails",
        description: "Every email sent to your support address is automatically converted into a structured ticket with full audit history and status tracking.",
        badge: "Zero Lost Queries"
      },
      {
        title: "Ironclad SLA Breach Prevention",
        description: "Configurable SLA timers count down in real-time, sending automated notifications to team leads before response deadlines expire.",
        badge: "SLA Guaranteed"
      },
      {
        title: "Unified WhatsApp & Helpdesk Bridge",
        description: "Native bi-directional bridge with WapiPulse allowing support teams to receive and reply to WhatsApp queries directly within Ticket4service.",
        badge: "WhatsApp Bridge"
      },
      {
        title: "Enterprise Security & Role-Based Access",
        description: "Bank-grade 256-bit encryption, role-based access control (RBAC), daily offsite backups, and strict compliance with GDPR standards.",
        badge: "Bank-Grade Security"
      }
    ],
    processSteps: [
      {
        step: "01",
        title: "Account Setup & Channel Connection",
        description: "Register your company on ticket4service.com, configure support email forwarding (e.g. support@yourcompany.com), and embed the web ticket widget.",
        deliverable: "Active Helpdesk Portal & Connected Inboxes"
      },
      {
        step: "02",
        title: "Department & SLA Policy Configuration",
        description: "Set up departments (IT Support, Billing, Customer Care), invite agents, and configure SLA response targets by priority level.",
        deliverable: "Configured Routing Rules & SLA Policies"
      },
      {
        step: "03",
        title: "Smart Triage & Agent Collaboration",
        description: "Agents manage incoming tickets with rich-text formatting, file attachments, private internal team notes, and 1-click canned macro responses.",
        deliverable: "Accelerated Incident Resolution Workflow"
      },
      {
        step: "04",
        title: "Resolution, CSAT Survey & Analytics",
        description: "Tickets are closed with automated customer satisfaction star surveys, while executives review live response time and agent performance dashboards.",
        deliverable: "CSAT Feedback & Executive Performance Reports"
      }
    ],
    targetIndustries: [
      { name: "IT Managed Service Providers (MSPs)", desc: "Bug tracking, server downtime incidents, software patch management, and SLA-backed maintenance contracts." },
      { name: "Manufacturing & Industrial Equipment", desc: "Field service ticketing, machinery warranty claims, spare parts dispatch, and technician coordination." },
      { name: "Corporate HR, Admin & Internal IT", desc: "Employee onboarding requests, hardware provisioning, payroll questions, and corporate facility tickets." },
      { name: "E-Commerce & Retail Customer Care", desc: "Order disputes, delivery delay complaints, refund processing, and defective product replacement requests." },
      { name: "Healthcare & Hospital Administration", desc: "Medical equipment maintenance logging, IT helpdesk support, and patient feedback management." },
      { name: "Financial Services & FinTech", desc: "Account issue escalation, transaction dispute investigations, and strict regulatory audit trails." }
    ],
    specialFeature: {
      title: "Incident Lifecycle & SLA Command Center",
      subtitle: "Enterprise Controls Built for Fast Resolution and Full Accountability",
      badge: "Command Center",
      description: "Designed to provide total transparency into every customer interaction while drastically reducing resolution times.",
      items: [
        {
          title: "Multi-Tier SLA Timer Engine",
          description: "Define distinct First Response and Resolution time limits for Low, Medium, High, and Urgent severity tickets with business hour calculations.",
          tag: "SLA Engine",
          metrics: "Sub-Minute Precision"
        },
        {
          title: "Bi-Directional WhatsApp Integration",
          description: "Connect WhatsApp API directly into Ticket4service: incoming WhatsApp messages create tickets, and agent replies go straight back to WhatsApp.",
          tag: "WhatsApp Bridge",
          metrics: "Instant 2-Way Sync"
        },
        {
          title: "Macro Canned Responses & Shortcuts",
          description: "Empower support representatives to resolve recurring questions in one click with pre-formatted rich responses, dynamic placeholders, and attachments.",
          tag: "Productivity",
          metrics: "60% Faster Replies"
        },
        {
          title: "Real-Time Executive CSAT Scorecards",
          description: "Track team performance with automated Customer Satisfaction (CSAT) surveys, First Response Time (FRT) graphs, and SLA compliance percentages.",
          tag: "Analytics",
          metrics: "Live CSAT Metrics"
        }
      ]
    },
    faqs: [
      {
        question: "What is Ticket4service.com?",
        answer: "Ticket4service.com is an enterprise-grade omnichannel helpdesk, service ticket lifecycle management, and incident resolution SaaS platform engineered and operated by JV Group (Ekato Tech). Designed for corporate IT departments, software providers, MSPs, e-commerce retailers, and customer support organizations, Ticket4service unifies customer inquiries from email, web portals, WhatsApp, and APIs into a structured, accountable ticketing pipeline."
      },
      {
        question: "Why should businesses use Ticket4service? (Why use this?)",
        answer: "Without a modern ticketing system, customer requests get lost in crowded email inboxes, response deadlines are missed, and managers lack visibility into agent performance. Ticket4service solves this by: (1) Ensuring zero lost queries with automated conversion of emails, web forms, and messages into trackable tickets; (2) Enforcing strict SLA (Service Level Agreement) deadlines with automated managerial escalation before breaches happen; (3) Boosting support team productivity by over 60% with canned macro responses, duplicate detection, and collaborative internal notes; (4) Providing real-time executive analytics on First Response Time (FRT), Mean Time to Resolution (MTTR), and Customer Satisfaction (CSAT); and (5) Offering a branded self-service knowledge base so customers can solve common issues independently."
      },
      {
        question: "Which companies, industries, and people use Ticket4service?",
        answer: "Ticket4service is actively used by: (1) IT Managed Service Providers (MSPs) & Software Companies (tracking bug reports, server incidents, software patches, and Annual Maintenance Contracts); (2) Manufacturing & Industrial Machinery Firms (field service requests, equipment warranty claims, spare parts dispatch); (3) Corporate HR, Admin & Internal IT Departments (employee hardware requests, software provisioning, payroll queries, facility tickets); (4) E-Commerce & Retail Brands (refund requests, order tracking inquiries, defective product returns); (5) Healthcare Facilities & Hospitals (biomedical equipment maintenance, IT desk support, patient service inquiries); and (6) Support Team Leads, Customer Success Directors, and Chief Operations Officers seeking full accountability."
      },
      {
        question: "How do you use Ticket4service? (Step-by-step guide)",
        answer: "Getting started with Ticket4service takes under 15 minutes: (1) Sign Up & Account Setup: Register your company at ticket4service.com; (2) Connect Channels: Forward your existing support emails (e.g. support@yourcompany.com) to Ticket4service, embed our clean ticket submission widget on your website, or link your WhatsApp API; (3) Configure Departments & SLAs: Set up departments (Technical Support, Billing, Sales, Hardware) and define resolution SLA target timers based on priority (Urgent, High, Medium, Low); (4) Agent Collaboration & Resolution: Agents manage their queues, use canned macros for rapid answers, assign tickets to colleagues, and add private internal notes; (5) Customer Feedback & Knowledge Base: When tickets resolve, customers automatically receive satisfaction star surveys, and frequent resolutions can be published directly to your self-service Help Center; and (6) Executive Dashboard Review: Review live graphs of open tickets, average response times, agent rankings, and SLA compliance percentages."
      },
      {
        question: "How can you buy Ticket4service? (Pricing & deployment)",
        answer: "Ticket4service offers flexible pricing models suited for both agile teams and global enterprises: (1) Standard Cloud SaaS: Pay-as-you-grow per-agent monthly or annual subscriptions with instant activation online at ticket4service.com; (2) Enterprise Custom SLA Package: Includes dedicated technical onboarding, custom webhook and ERP integrations, single sign-on (SSO), and designated account manager support; (3) Private Cloud / On-Premise Deployment: Available for government, healthcare, or corporate entities requiring private data sovereignty. You can subscribe directly on ticket4service.com or contact the JV Group commercial desk at +91 99097 00606 or +44 7344556070 to request a custom quote, live executive demo, or invoice billing."
      },
      {
        question: "Which countries use Ticket4service?",
        answer: "Ticket4service is architected for global operations and is actively deployed across: (1) United States (USA) & Canada (widely used by MSPs, tech startups, and remote customer support centers); (2) United Kingdom (UK) & Europe (corporate IT operations and enterprise B2B service companies); (3) India & South Asia (fast-growing tech companies, manufacturing enterprises, and commercial service agencies); (4) United Arab Emirates (UAE) & Middle East (trading conglomerates, retail chains, and IT facilities); and (5) Australia & Singapore (cross-border digital businesses operating 24/7 follow-the-sun support desks). The system supports multi-timezone business hours, international date/time formatting, and multi-currency billing."
      },
      {
        question: "Can Ticket4service integrate directly with WapiPulse?",
        answer: "Yes! Because both platforms are built within the JV Group technology ecosystem, you can seamlessly connect WapiPulse and Ticket4service. When a customer messages your company on WhatsApp, an automated support ticket can be opened in Ticket4service with complete message history, and agent replies in Ticket4service are instantly sent back to the customer on WhatsApp."
      },
      {
        question: "Can Ticket4service handle multi-brand and multi-department setups?",
        answer: "Yes. You can manage multiple sub-brands, business units, or departments within a single unified administrative console, each with its own support email address, custom forms, distinct SLAs, and assigned staff members."
      },
      {
        question: "How does Ticket4service secure our company and customer data?",
        answer: "Ticket4service enforces bank-grade security protocols: 256-bit SSL encryption in transit, AES-256 encryption at rest, role-based access control (RBAC), daily automated geo-replicated backups, and strict compliance with GDPR and privacy standards."
      }
    ],
    directDesk: {
      phone: "+91 99097 00606",
      phoneLabel: "Helpdesk Platform Desk: +91 99097 00606 | Global: +44 7344556070",
      email: "info@jvgroupco.in",
      workingHours: "Monday – Saturday: 9:30 AM – 7:30 PM IST (24/7 Operations Desk)",
      officeLocation: "Corporate Tech Lab, Ahmedabad & Gandhinagar Corridor, Gujarat, India",
      whatsappNumber: "919909700606"
    }
  }
};

