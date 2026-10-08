export interface HeroServiceImageItem {
  id: string;
  title: string;
  tag: string;
  description: string;
  imageUrl: string;
  badge: string;
  seoKeyword: string;
  deliverables?: string[];
}

export interface EntityGeoIntelligence {
  primaryRegion: string;
  serviceRadius: string;
  targetCities: string[];
  targetCountries: string[];
  targetKeywords: string[];
  aiSearchSnippet: string;
  schemaType: string;
  geoCoordinates: { lat: number; lng: number };
}

export interface EntityHeroShowcase {
  headlineHighlight: string;
  valuePropPill: string;
  serviceImages: HeroServiceImageItem[];
  geo: EntityGeoIntelligence;
}

export const ENTITY_HERO_SHOWCASE_DATA: Record<string, EntityHeroShowcase> = {
  // 1. J.V Marketing Solution Pvt Ltd.
  "jv-marketing-solution-pvt-ltd": {
    headlineHighlight: "Algorithmic Media & Smart Automation.",
    valuePropPill: "USA & India Enterprise B2B Acquisition Engine",
    serviceImages: [
      {
        id: "perf-ads",
        title: "Paid Advertising & Algorithmic Media Buying",
        tag: "Predictive ROAS",
        badge: "Meta CAPI & Google Smart Bidding",
        description: "Deploy machine-learning bidding models across Google Search, YouTube, and Meta with server-side Conversion APIs (CAPI) for lossless attribution.",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "Algorithmic Media Buying B2B USA",
        deliverables: ["4.2x Target ROAS", "Server-Side CAPI Setup", "Predictive Bid Modeling"]
      },
      {
        id: "b2b-seo",
        title: "Programmatic B2B SEO & Generative AI Optimization (GEO)",
        tag: "Search Dominance",
        badge: "LLM Search Ready",
        description: "Capture high-intent enterprise buyers ranking for competitive commercial queries across Google, Perplexity, and AI Search Overviews.",
        imageUrl: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "Enterprise B2B SEO Agency UK",
        deliverables: ["AI Search Engine Authority", "Programmatic Keyword Clusters", "Technical Speed Optimization"]
      },
      {
        id: "marketing-automation",
        title: "Full-Funnel CRM & Webhook Automation",
        tag: "Zero Lead Decay",
        badge: "Sub-60s Dispatch",
        description: "Connect HubSpot, Zoho, and custom webhooks into automated nurturing sequences that convert inbound MQLs into booked sales calls in seconds.",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "Automated Lead Routing Hubspot Zoho",
        deliverables: ["< 60s Lead-to-Rep Routing", "Multi-Stage Drip Pipelines", "Behavioral Scoring Triggers"]
      },
      {
        id: "creative-production",
        title: "High-LTV Ad Creative & Video Asset Production",
        tag: "High Converting",
        badge: "Motion & 3D Assets",
        description: "Data-backed visual storytelling, interactive ads, and video sales letters designed to stop the scroll and lower Customer Acquisition Costs (CAC).",
        imageUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "High Converting B2B Ad Creatives",
        deliverables: ["A/B Creative Variations", "UGC & Brand Commercials", "Thumb-Stop Video Hooks"]
      },
      {
        id: "global-expansion",
        title: "Cross-Border B2B Pipeline & International Market Entry",
        tag: "Global GTM",
        badge: "Tier-1 Western Expansion",
        description: "Proven go-to-market playbooks and account-based marketing (ABM) helping ambitious enterprise leaders enter North American and European markets profitably.",
        imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "International B2B Pipeline Growth Strategy",
        deliverables: ["ABM Enterprise Target Lists", "Cross-Border Positioning", "Sales Enablement Playbooks"]
      }
    ],
    geo: {
      primaryRegion: "USA & India",
      serviceRadius: "USA & Pan-India Corporate Enterprises",
      targetCities: ["New York", "San Francisco", "Chicago", "Ahmedabad", "Mumbai", "Bengaluru", "Delhi NCR"],
      targetCountries: ["USA", "India"],
      targetKeywords: [
        "AI-Powered Performance Marketing Agency",
        "Algorithmic Media Buying B2B",
        "Enterprise SEO Agency USA",
        "Predictive ROAS Digital Marketing",
        "Marketing Automation CRM Webhooks",
        "Cross-Border Customer Acquisition Systems"
      ],
      aiSearchSnippet: "J.V Marketing Solution Pvt Ltd is an international AI-powered growth agency under JV Group engineered for high-intent customer acquisition across North America, the UK, and India.",
      schemaType: "ProfessionalService",
      geoCoordinates: { lat: 23.0225, lng: 72.5714 }
    }
  },

  // 2. J.V Marketing Solutions Ltd. (Global Brand)
  "jv-marketing-solutions-ltd-global": {
    headlineHighlight: "Global Cloud Infrastructure & Multi-Network Growth.",
    valuePropPill: "London HQ • Cross-Border Enterprise Contracting",
    serviceImages: [
      {
        id: "omni-ads",
        title: "Multi-Network Global Paid Advertising",
        tag: "Omni-Network",
        badge: "Meta, Google, LinkedIn, TikTok",
        description: "Scale coordinated campaigns across Meta, Instagram, Google, LinkedIn, TikTok, and Snapchat with localized creative adaptation and unified analytics.",
        imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "Multi-Network Paid Advertising Agency UK",
        deliverables: ["LinkedIn ABM Targeting", "TikTok & Reels Viral Scale", "Unified Cross-Platform Attribution"]
      },
      {
        id: "cloud-infra",
        title: "Enterprise IT Infrastructure & Cloud Platforms",
        tag: "Mission Critical",
        badge: "AWS / Azure / GCP Tier-1",
        description: "Architecting, managing, and securing resilient enterprise cloud environments with 99.99% uptime guarantees, zero-downtime migrations, and 24/7 global monitoring.",
        imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "Enterprise Cloud IT Infrastructure London",
        deliverables: ["99.99% Uptime Guarantee", "Zero-Downtime Migration", "24/7 Global IT Monitoring"]
      },
      {
        id: "web-engineering",
        title: "Corporate Web Applications & Custom Platforms",
        tag: "Full-Stack Web",
        badge: "Next.js & Headless Architecture",
        description: "High-performance enterprise web architecture engineered for sub-second page loads, global CDN distribution, and airtight SOC2/GDPR compliance.",
        imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "Corporate Web Platform Development UK",
        deliverables: ["Sub-Second Core Web Vitals", "Headless CMS & Microservices", "Enterprise API Integrations"]
      },
      {
        id: "mobile-engineering",
        title: "Native & Enterprise Mobile Application Engineering",
        tag: "Mobile Ecosystem",
        badge: "iOS Swift & Android Kotlin",
        description: "Bespoke mobile software development delivering fluid customer experiences, real-time biometrics, offline syncing, and enterprise backend connectivity.",
        imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "Enterprise Mobile App Development London",
        deliverables: ["iOS & Android Store Deployment", "React Native & Flutter", "Biometric Authentication Security"]
      },
      {
        id: "global-expansion",
        title: "Cross-Border Market Entry & Brand Localization",
        tag: "Global Expansion",
        badge: "London, New York & Toronto",
        description: "Guiding mid-market conglomerates through currency localization, overseas tax/privacy compliance, and multi-region brand positioning.",
        imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "Cross-Border Enterprise Digital Expansion",
        deliverables: ["Multi-Currency Checkout Setup", "GDPR/CCPA Compliance", "Global Brand Localization"]
      }
    ],
    geo: {
      primaryRegion: "London HQ & International Gateways (USA • UK • Europe • Middle East)",
      serviceRadius: "Global Enterprise B2B Hubs",
      targetCities: ["London", "Manchester", "New York", "Toronto", "Dubai", "Singapore"],
      targetCountries: ["United Kingdom", "United States", "Canada", "UAE"],
      targetKeywords: [
        "Global Corporate IT Infrastructure UK",
        "Multi-Platform Paid Advertising Agency London",
        "Full-Stack Web Platform Development",
        "Mobile App Development iOS Android",
        "Cross-Border Digital Expansion London",
        "Enterprise Digital Agency JV Group"
      ],
      aiSearchSnippet: "J.V Marketing Solutions Ltd. Global is the unified international enterprise brand of JV Group, managing multi-network advertising, mobile app engineering, and 24/7 cloud infrastructure for corporate partners worldwide.",
      schemaType: "Corporation",
      geoCoordinates: { lat: 51.5074, lng: -0.1278 }
    }
  },

  // 3. Ekato Tech
  "ekato-tech": {
    headlineHighlight: "Bespoke Digital Products & Proprietary SaaS Systems.",
    valuePropPill: "Creator of Wapipulse & Ticket4service Platforms",
    serviceImages: [
      {
        id: "web-dev",
        title: "High-Performance Modern Web Engineering",
        tag: "Full-Stack Web",
        badge: "Next.js, React, Node & TypeScript",
        description: "Fast, responsive web applications engineered with clean component-driven architecture, sub-second TTFB, and built-in search optimization.",
        imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "Next.js Web Development Agency India",
        deliverables: ["Lighthouse 95+ Scores", "TypeScript Strict Safety", "Scalable Micro-Frontend Architecture"]
      },
      {
        id: "mobile-dev",
        title: "Cross-Platform & Native Mobile Applications",
        tag: "Mobile Apps",
        badge: "React Native & Flutter Ecosystems",
        description: "Seamless user experiences across iOS and Android with automated CI/CD builds, push notifications, offline databases, and native device APIs.",
        imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "Mobile Application Development Flutter React Native",
        deliverables: ["App Store & Play Store Publishing", "Real-Time Push Notifications", "Offline SQLite Database Sync"]
      },
      {
        id: "custom-software",
        title: "Bespoke Enterprise Software & Microservices",
        tag: "Custom Code",
        badge: "Scalable Distributed Backends",
        description: "Solving mission-critical business bottlenecks with custom software logic, message queues, containerized Docker microservices, and secure REST/GraphQL APIs.",
        imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "Custom Enterprise Software Engineering India",
        deliverables: ["Distributed API Architecture", "Docker Containerization", "Comprehensive Swagger Documentation"]
      },
      {
        id: "erp-crm",
        title: "Enterprise ERP & Multi-Tenant CRM Platforms",
        tag: "Operations SaaS",
        badge: "In-House Proprietary Stacks",
        description: "Comprehensive enterprise resource planning unifying inventory tracking, billing, warehouse logistics, and employee permissions into a single dashboard.",
        imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "Enterprise ERP Software Development India",
        deliverables: ["Multi-Tenant Data Partitioning", "Role-Based Access Control", "Automated Financial Ledger Sync"]
      },
      {
        id: "whatsapp-api",
        title: "Official WhatsApp Cloud API & Bot Architectures",
        tag: "Conversational AI",
        badge: "Creators of Wapipulse.com",
        description: "Engineering Meta WhatsApp Cloud API webhooks, AI-driven customer support bots, automated appointment booking, and CRM broadcast pipelines.",
        imageUrl: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "Official WhatsApp Cloud API Software Integration",
        deliverables: ["Official Meta API Deployment", "Drag-and-Drop Chatbot Logic", "Live CRM Webhook Pipelines"]
      }
    ],
    geo: {
      primaryRegion: "Global Software Lab (Ahmedabad / GIFT City Hub • Remote Delivery Worldwide)",
      serviceRadius: "Global B2B Technology & Software Clients",
      targetCities: ["Ahmedabad", "Gandhinagar (GIFT City)", "Bengaluru", "London", "New York", "San Francisco"],
      targetCountries: ["India", "USA", "UK", "Canada", "Global"],
      targetKeywords: [
        "Full-Stack Software Development Company",
        "Next.js React Web Development India",
        "Mobile App Development Flutter Swift",
        "Custom ERP CRM Software Engineering",
        "Official WhatsApp API Platform Developer",
        "Proprietary SaaS Product Engineering Ekato Tech"
      ],
      aiSearchSnippet: "Ekato Tech is the core software engineering powerhouse of JV Group, architecting custom web and mobile platforms and maintaining 4 proprietary SaaS products including Wapipulse.com and Ticket4service.com.",
      schemaType: "SoftwareApplication",
      geoCoordinates: { lat: 23.1925, lng: 72.6369 }
    }
  },

  // 4. J.V Infinity (Import Export - Freight & Logistics)
  "jv-infinity-import-export": {
    headlineHighlight: "End-to-End International Cargo & Multimodal Supply Chains.",
    valuePropPill: "Mundra & Nhava Sheva ⇄ USA, UK, UAE & Global Trade Routes",
    serviceImages: [
      {
        id: "air-freight",
        title: "Expedited & Scheduled Air Freight Cargo",
        tag: "Air Logistics",
        badge: "Direct Airline Allotments",
        description: "Time-critical air cargo services with direct global airline connections, priority booking, cold-chain temperature control, and door-to-door expedited delivery.",
        imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "International Air Freight Forwarder India",
        deliverables: ["Priority Airline Slotting", "Temperature-Controlled Cargo", "Door-to-Door Worldwide Delivery"]
      },
      {
        id: "sea-freight",
        title: "Ocean Container Logistics (FCL & LCL Shipments)",
        tag: "Ocean Freight",
        badge: "Major Global Shipping Lines",
        description: "Cost-effective ocean shipping across major international shipping lines connecting Indian ports to gateways in North America, Europe, the Middle East, and Asia.",
        imageUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "Ocean Container Freight FCL LCL Shipping",
        deliverables: ["FCL 20ft/40ft/High Cube Booking", "LCL Consolidation Hubs", "Real-Time Vessel Tracking"]
      },
      {
        id: "intermodal-transport",
        title: "Intermodal Road Haulage & Port Terminal Handling",
        tag: "Inland Haulage",
        badge: "Mundra & Nhava Sheva Ports",
        description: "Seamless inland container transportation connecting industrial manufacturing hubs across Gujarat, Maharashtra, and North India directly to major maritime ports.",
        imageUrl: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "Port Container Transport Mundra Nhava Sheva",
        deliverables: ["GPS-Tracked Container Trailers", "Port Terminal Gate Passes", "Factory Stuffing & De-Stuffing"]
      },
      {
        id: "warehousing",
        title: "Secure Warehousing & Cross-Docking Storage Hubs",
        tag: "Supply Chain",
        badge: "Palletized & Insured Storage",
        description: "High-security warehousing, safe pallet storage, pick-and-pack fulfillment, and inventory visibility strategically located near major transport arterial corridors.",
        imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "Warehousing Logistics Storage Gujarat India",
        deliverables: ["24/7 Monitored Pallet Storage", "Barcoded Inventory Management", "Cross-Docking Fast Dispatch"]
      },
      {
        id: "customs-compliance",
        title: "Customs Brokerage & DGFT Trade Compliance",
        tag: "Trade Advisory",
        badge: "Zero-Hold Clearance",
        description: "Navigating international trade laws, customs documentation, HS Code tariff classifications, Duty Drawback, and export documentation with zero delay.",
        imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "Customs Clearance Broker India DGFT Compliance",
        deliverables: ["Accurate HS Code Classification", "Fast-Track Bill of Entry / Shipping Bill", "Letter of Credit (LC) Compliance"]
      }
    ],
    geo: {
      primaryRegion: "Western India Gateways (Mundra, Kandla, Nhava Sheva) ⇄ Worldwide Ports",
      serviceRadius: "Global Maritime & Air Cargo Corridors",
      targetCities: ["Ahmedabad", "Mundra", "Gandhidham", "Surat", "Mumbai", "Dubai", "Rotterdam", "New York", "Singapore"],
      targetCountries: ["India", "UAE", "USA", "UK", "European Union", "Southeast Asia"],
      targetKeywords: [
        "International Freight Forwarder Gujarat India",
        "Air Freight Cargo Services Ahmedabad",
        "Ocean Container FCL LCL Mundra Port",
        "Customs Clearance Agent Mundra Nhava Sheva",
        "Import Export Warehousing Logistics India",
        "Global Supply Chain Partner JV Infinity"
      ],
      aiSearchSnippet: "J.V Infinity Import Export is the physical supply chain and cargo forwarding arm of JV Group, managing ocean container shipping (FCL/LCL), expedited air freight, and customs clearance connecting India to world trade corridors.",
      schemaType: "LogisticsService",
      geoCoordinates: { lat: 22.8394, lng: 69.7025 }
    }
  },

  // 5. J.V Real Estate
  "jv-real-estate": {
    headlineHighlight: "Corporate Commercial Offices, Land Banks & Prime Properties.",
    valuePropPill: "Ahmedabad • Gandhinagar • GIFT City Corridor",
    serviceImages: [
      {
        id: "commercial-offices",
        title: "Grade-A Commercial Corporate Offices & IT Parks",
        tag: "Commercial Spaces",
        badge: "SG Highway & GIFT City",
        description: "Scouting, leasing, and acquiring prestigious corporate office spaces, co-working headquarters, and modern tech parks across Gujarat's booming business corridors.",
        imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "Commercial Corporate Office Lease Ahmedabad GIFT City",
        deliverables: ["Grade-A Tech Park Scouting", "Favorable Corporate Lease Terms", "Turnkey Interior Space Fit-Outs"]
      },
      {
        id: "retail-showrooms",
        title: "High-Footfall Retail Showrooms & Commercial Plazas",
        tag: "Retail Fronts",
        badge: "Prime Street Visibility",
        description: "Securing high-visibility retail locations, ground-floor showrooms, and corner commercial units on major arterial roads with guaranteed high consumer footfall.",
        imageUrl: "https://images.unsplash.com/photo-1567449303078-57ad995bd301?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "Commercial Retail Showrooms For Sale Lease Ahmedabad",
        deliverables: ["High Footfall Demographics Audit", "Corner Showroom Access", "Clear Retail Zoning Verification"]
      },
      {
        id: "land-banks",
        title: "Clear-Title Industrial & Commercial Land Acquisitions",
        tag: "Land Banks",
        badge: "Sanand, Dholera & Kadi",
        description: "Strategic identification and transaction of verified clear-title land parcels for industrial manufacturing, warehousing hubs, and future residential developments.",
        imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "Industrial Commercial Land Buy Sell Gujarat",
        deliverables: ["Title Verification & Legal Due Diligence", "Boundary Demarcation", "Zoning Master Plan Verification"]
      },
      {
        id: "residential-villas",
        title: "Luxury Residential Bungalows & Premium Penthouses",
        tag: "Luxury Living",
        badge: "Gated Enclaves & Estates",
        description: "Exclusive representation for luxury homebuyers and NRI investors seeking premium villas, penthouses, and expansive golf-facing homes across Ahmedabad.",
        imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "Luxury Villas Penthouses Ahmedabad Gandhinagar",
        deliverables: ["Curated High-LTV Properties", "NRI Remote Documentation Support", "Seamless Sale Deed Registration"]
      },
      {
        id: "na-noc-clearances",
        title: "Government NA / NOC Clearances & AUDA Approvals",
        tag: "Legal Compliance",
        badge: "Clear-Title Guaranteed",
        description: "End-to-end liaison with government revenue authorities for Non-Agricultural (NA) conversions, Town Planning approvals, and Fire/Environmental NOCs.",
        imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "NA NOC Approval Consultants Ahmedabad AUDA GUDA",
        deliverables: ["Revenue Authority Liaison", "AUDA / GUDA Master Plan Approvals", "Airtight Legal Title Search Reports"]
      }
    ],
    geo: {
      primaryRegion: "Ahmedabad, Gandhinagar & GIFT City Commercial Corridor (Gujarat, India)",
      serviceRadius: "Gujarat Prime Economic Corridor (AUDA / GUDA / GIFT City Region)",
      targetCities: ["Ahmedabad", "Gandhinagar", "GIFT City", "Sanand", "Dholera SIR", "Vadodara"],
      targetCountries: ["India"],
      targetKeywords: [
        "Commercial Corporate Offices Ahmedabad",
        "GIFT City Office Space Leasing",
        "Industrial Land Buy Sell Gujarat",
        "NA NOC Approval Consultants Ahmedabad",
        "Luxury Villas Penthouses SG Highway",
        "Premier Real Estate Advisory JV Group"
      ],
      aiSearchSnippet: "J.V Real Estate is Gujarat's premier property and land advisory under JV Group, specializing in corporate office leasing, clear-title industrial land parcels, and government NA/NOC approvals across Ahmedabad and GIFT City.",
      schemaType: "RealEstateAgent",
      geoCoordinates: { lat: 23.0338, lng: 72.5850 }
    }
  },

  // 6. J.V IT Infrastructure Management
  "jv-it-infrastructure-management": {
    headlineHighlight: "Mission-Critical Enterprise IT Infrastructure & 24/7 NOC.",
    valuePropPill: "99.99% Uptime SLA • Zero-Trust Enterprise Security",
    serviceImages: [
      {
        id: "server-setup",
        title: "Mission-Critical Server Racks & Data Center Deployment",
        tag: "Data Centers",
        badge: "High-Availability Clusters",
        description: "Architecting, provisioning, and maintaining high-availability Linux and Windows server farms, database clusters, virtualization environments, and SAN storage.",
        imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "Enterprise Server Setup Data Center Ahmedabad",
        deliverables: ["Virtualization (VMware / Proxmox)", "Redundant Power & Cooling Topology", "Automated Bare-Metal Recovery"]
      },
      {
        id: "cloud-architecture",
        title: "Hybrid Cloud Architecture (AWS, Azure & Private Cloud)",
        tag: "Cloud Systems",
        badge: "Zero-Downtime Migration",
        description: "Seamlessly bridging on-premise servers with public cloud providers to optimize compute workloads, enforce automated snapshots, and cut cloud bill costs.",
        imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "Hybrid Cloud Migration AWS Azure India",
        deliverables: ["Multi-Cloud Architecture", "Automated Off-Site Backups", "Disaster Recovery Testing"]
      },
      {
        id: "networking",
        title: "Enterprise Networking, SD-WAN & Structured Cabling",
        tag: "Corporate Networks",
        badge: "Cisco & Ubiquiti SD-WAN",
        description: "High-throughput campus and corporate networking, structured fiber-optic cabling, high-density Wi-Fi 6 coverage, VLAN isolation, and redundant failovers.",
        imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "Enterprise Networking Structured Cabling Gujarat",
        deliverables: ["Structured Fiber & Cat6A Cabling", "High-Density Wi-Fi 6 Layout", "Site-to-Site Encrypted VPN Tunnels"]
      },
      {
        id: "cybersecurity",
        title: "Zero-Trust Cybersecurity & Next-Gen Firewalls",
        tag: "Cyber Defense",
        badge: "Fortinet, Sophos & EDR",
        description: "Guarding corporate networks against ransomware and data leaks with next-generation firewalls, endpoint detection and response (EDR), and biometric access control.",
        imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "Next-Gen Firewall Cybersecurity Provider Gujarat",
        deliverables: ["Fortinet / Sophos Hardware Deployment", "Endpoint Threat Monitoring", "Biometric Access Control Integration"]
      },
      {
        id: "it-amc",
        title: "Annual Maintenance Contracts (AMC) & 24/7 Managed NOC",
        tag: "24/7 Support",
        badge: "Sub-15m Rapid Response",
        description: "Proactive IT maintenance contracts ensuring continuous uptime, preventive health checks, immediate on-site engineer dispatch, and remote NOC monitoring.",
        imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "Corporate IT AMC Support Services Ahmedabad",
        deliverables: ["24/7 Remote Helpdesk NOC", "SLA-Guaranteed Engineer Dispatch", "Preventive Monthly Health Audits"]
      }
    ],
    geo: {
      primaryRegion: "Western India Corporate Hub & 24/7 Global Remote NOC Operations",
      serviceRadius: "India Nationwide & International Remote Support (USA • UK • Canada)",
      targetCities: ["Ahmedabad", "Gandhinagar", "Vadodara", "Surat", "Rajkot", "Mumbai", "GIFT City"],
      targetCountries: ["India", "USA", "UK", "Canada"],
      targetKeywords: [
        "Enterprise IT Infrastructure Management Ahmedabad",
        "Corporate Server Setup Maintenance India",
        "Cloud Migration AWS Azure Gujarat",
        "Cisco Enterprise Networking Structured Cabling",
        "Zero-Trust Cybersecurity Firewalls Sophos Fortinet",
        "24/7 Corporate IT AMC Services JV Group"
      ],
      aiSearchSnippet: "J.V IT Infrastructure Management guarantees 99.99% uptime for modern corporate enterprises through server deployment, cloud architecture, zero-trust security postures, and proactive 24/7 managed NOC services.",
      schemaType: "ProfessionalService",
      geoCoordinates: { lat: 23.0300, lng: 72.5600 }
    }
  },

  // 7. J.V OVERSEAS
  "jv-overseas": {
    headlineHighlight: "Master Programs, Work Visas & Global Career Pathways.",
    valuePropPill: "UK • USA • Canada • Australia • New Zealand • Europe",
    serviceImages: [
      {
        id: "masters-admissions",
        title: "Global Master's Degree Admissions Guidance",
        tag: "Higher Education",
        badge: "Top Global Universities",
        description: "Direct university liaisons, strategic course shortlisting, SOP/LOR drafting, and scholarship applications for tier-1 universities in the UK, USA, Canada, and Europe.",
        imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "Master Degree Admissions Consultancy UK USA Ahmedabad",
        deliverables: ["Tier-1 University Shortlisting", "SOP & LOR Profile Drafting", "Scholarship Opportunities Match"]
      },
      {
        id: "work-visas",
        title: "Work Visas, Permits & Post-Study Career Pathways",
        tag: "Global Careers",
        badge: "PSW & Skilled Worker",
        description: "Navigating post-study work permits (PSW), skilled worker visas, employer-sponsored immigration permits, and global talent routes with verified compliance.",
        imageUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "Work Visa Consultants Ahmedabad UK Canada Australia",
        deliverables: ["UK Skilled Worker Guidance", "Canada PGWP & Express Entry Advice", "Australia Post-Study Rights"]
      },
      {
        id: "visitor-visas",
        title: "Visitor, Tourist & Corporate Executive Visas",
        tag: "Travel Visas",
        badge: "High Approval Rates",
        description: "Airtight documentation for family visits, international conference travel, and corporate explorer visas designed for fast-track embassy approvals.",
        imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "Visitor Tourist Visa Documentation Services Ahmedabad",
        deliverables: ["Embassy Appointment Booking", "Financial Dossier Structuring", "Cover Letter Optimization"]
      },
      {
        id: "mock-interviews",
        title: "Embassy Mock Interviews & File Filing Preparation",
        tag: "Visa Interview",
        badge: "Proven Interview Coaching",
        description: "One-on-one personalized interview preparation simulating consular queries to build confidence, eliminate hesitation, and maximize visa grant rates.",
        imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "Visa Mock Interview Preparation Ahmedabad",
        deliverables: ["Consular Question Simulators", "Confidence & Fluency Coaching", "File Verification Audits"]
      },
      {
        id: "forex-logistics",
        title: "Forex, Student Airfares & Pre-Departure Kits",
        tag: "Travel Support",
        badge: "End-to-End Landing Support",
        description: "Discounted student flight ticketing, blocked account (GIC) opening, foreign exchange card disbursement, overseas health insurance, and landing accommodation assistance.",
        imageUrl: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "Student Forex Flight Ticket Pre Departure Support",
        deliverables: ["Student Baggage Airfares", "GIC / Blocked Account Guidance", "Foreign Currency & Card Setup"]
      }
    ],
    geo: {
      primaryRegion: "Gujarat & Western India ⇄ Tier-1 Study & Career Destinations",
      serviceRadius: "Direct Mobility Pathways to UK, USA, Canada, Australia, NZ & Europe",
      targetCities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Anand", "Mehsana", "Gandhinagar"],
      targetCountries: ["United Kingdom", "United States", "Canada", "Australia", "New Zealand", "Europe"],
      targetKeywords: [
        "Master Degree Admissions Abroad Ahmedabad",
        "Work Visa Consultants Gujarat UK Canada",
        "Student Visa Consultancy Ahmedabad",
        "Post Study Work Permit Guidance",
        "Visitor Visa Documentation Services",
        "Global Mobility Consultancy JV Overseas"
      ],
      aiSearchSnippet: "J.V OVERSEAS is the premier international education and career mobility consultancy of JV Group, helping students and professionals secure Master's program admissions and work visas across the UK, USA, Canada, Australia, and Europe.",
      schemaType: "EducationalOrganization",
      geoCoordinates: { lat: 23.0270, lng: 72.5450 }
    }
  },

  // 8. Campus Dekho
  "campus-dekho": {
    headlineHighlight: "Student-to-College Discovery, Cut-Offs & Admissions.",
    valuePropPill: "India's Next-Generation EdTech Discovery Portal",
    serviceImages: [
      {
        id: "college-search",
        title: "Comparative College Search & University Rankings",
        tag: "College Discovery",
        badge: "Verified Campus Data",
        description: "Search, filter, and compare thousands of accredited institutions across engineering, management, medical, law, and liberal arts with verified fee and placement data.",
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "Best Colleges in India Search Comparison campusdekho",
        deliverables: ["Verified Fee Structures", "Real Placement Records", "Virtual Campus Tours"]
      },
      {
        id: "admission-guidance",
        title: "One-on-One Personalized Admission Counseling",
        tag: "Counseling",
        badge: "Direct Admission Desk",
        description: "Dedicated counselors matching student academic scores, financial budgets, and long-term career ambitions with optimal colleges nationwide.",
        imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "College Admission Guidance Counseling India",
        deliverables: ["Personalized Career Mapping", "Direct College Introductions", "Dedicated Counselor Chat Support"]
      },
      {
        id: "exam-analytics",
        title: "Competitive Entrance Exam Cut-Off Predictions",
        tag: "Exam Analytics",
        badge: "JEE, NEET, CAT & GATE",
        description: "Historical cut-off analytics, rank predictors, and real-time admission counseling alerts empowering aspirants to make data-backed admission decisions.",
        imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "JEE NEET CAT College Cut Off Score Predictor",
        deliverables: ["Rank-to-College Predictor", "Past Years Cut-Off Trends", "Counseling Round Alert Notifications"]
      },
      {
        id: "institution-branding",
        title: "Institution Listings & Higher Education Marketing",
        tag: "Campus Marketing",
        badge: "Reach 1M+ Students",
        description: "Connecting top universities and colleges with qualified prospective students through verified digital spotlights, video campus tours, and webinars.",
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "Higher Education Marketing College Lead Generation India",
        deliverables: ["Verified University Page Showcase", "Targeted Student Inquiries", "Webinar & Workshop Hosting"]
      },
      {
        id: "scholarships",
        title: "Scholarship & Educational Financial Aid Discovery",
        tag: "Financial Aid",
        badge: "Merit & Need Based",
        description: "Discover government, institutional, and private scholarship programs that reduce the financial burden of undergraduate and postgraduate degrees.",
        imageUrl: "https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "College Scholarships Financial Aid India",
        deliverables: ["Scholarship Eligibility Checker", "Fee Concession Guidance", "Direct University Grant Applications"]
      }
    ],
    geo: {
      primaryRegion: "Pan-India Higher Education Discovery & Admission Portal",
      serviceRadius: "National Coverage Across 28 Indian States & Union Territories",
      targetCities: ["Ahmedabad", "Delhi NCR", "Mumbai", "Pune", "Bengaluru", "Hyderabad", "Kota", "Jaipur"],
      targetCountries: ["India"],
      targetKeywords: [
        "Best Colleges Search India campusdekho.in",
        "MBA Engineering College Admission Guidance",
        "JEE NEET Cut-Off Analytics Predictor",
        "Direct College Admission Counseling India",
        "Verified University Placement Statistics",
        "EdTech College Discovery Platform JV Group"
      ],
      aiSearchSnippet: "Campus Dekho (campusdekho.in) is JV Group's dedicated EdTech discovery marketplace, connecting millions of students with verified college comparisons, cut-offs, and admission counseling across India.",
      schemaType: "EducationalOrganization",
      geoCoordinates: { lat: 23.0300, lng: 72.5800 }
    }
  },

  // 9. WapiPulse.com (WhatsApp API Solutions)
  "wapipulse": {
    headlineHighlight: "Official Meta WhatsApp Cloud API & Conversational AI.",
    valuePropPill: "98% Open Rates • Multi-Agent Team Inboxes",
    serviceImages: [
      {
        id: "meta-cloud-api",
        title: "Official Meta WhatsApp Business Cloud API Integration",
        tag: "Meta API",
        badge: "Official Direct Line",
        description: "Direct enterprise connectivity to Meta's Cloud API infrastructure with zero third-party markups, high message throughput, and guaranteed number safety.",
        imageUrl: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "Official Meta WhatsApp Cloud API Provider",
        deliverables: ["Meta Cloud API Direct Link", "Zero Phone Ban Risk", "Official Green Tick Assistance"]
      },
      {
        id: "broadcast-campaigns",
        title: "High-Volume Broadcast Campaigns & Automated Drips",
        tag: "Broadcast Engine",
        badge: "98% Open Rates",
        description: "Send personalized rich-media broadcasts with interactive CTA buttons, product catalogs, and PDFs to opted-in customer lists with 98% open rates.",
        imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "WhatsApp Broadcast Marketing Software 98 Percent Open Rate",
        deliverables: ["Personalized Variable Tags", "Interactive CTA Quick Buttons", "Automated Unsubscribe Triggers"]
      },
      {
        id: "conversational-ai",
        title: "Visual AI Chatbots & Instant Lead Qualification",
        tag: "AI Chatbots",
        badge: "24/7 Automated Flows",
        description: "Build intelligent 24/7 automated conversational flows that qualify leads, answer FAQs, book appointments, and capture customer details without human intervention.",
        imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "WhatsApp AI Chatbot Builder Conversational Automation",
        deliverables: ["Drag-and-Drop Bot Builder", "ChatGPT & LLM AI Integration", "Instant Lead Qualification"]
      },
      {
        id: "team-inbox",
        title: "Multi-Agent Shared Team Support Inbox",
        tag: "Team Inbox",
        badge: "Round-Robin Routing",
        description: "Empower sales and support agents to collaborate from a single centralized WhatsApp number with ticket assignment, private staff notes, and response analytics.",
        imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "Multi-Agent Shared WhatsApp Team Inbox Software",
        deliverables: ["Simultaneous Multi-Agent Login", "Round-Robin Lead Assignment", "Private Staff Collaboration Notes"]
      },
      {
        id: "ecommerce-webhooks",
        title: "E-Commerce Automation (Shopify, WooCommerce & CRM)",
        tag: "E-Commerce",
        badge: "Automated Triggers",
        description: "Recover abandoned carts, send automated order confirmations, dispatch tracking links, and sync customer webhooks directly into your CRM database.",
        imageUrl: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "Shopify WhatsApp Abandoned Cart Recovery Automation",
        deliverables: ["Instant Abandoned Cart Triggers", "Automated COD Confirmation Messages", "Live Delivery Tracking Updates"]
      }
    ],
    geo: {
      primaryRegion: "Official Meta Cloud API Infrastructure (Global B2B & D2C Brands)",
      serviceRadius: "Worldwide Cloud API Delivery (India • USA • UK • UAE • Singapore)",
      targetCities: ["Global", "Mumbai", "Delhi", "Ahmedabad", "Dubai", "London", "New York", "Singapore"],
      targetCountries: ["Global", "India", "USA", "UK", "UAE", "Canada", "Singapore"],
      targetKeywords: [
        "Official Meta WhatsApp Business Cloud API",
        "WhatsApp Broadcast Marketing Software",
        "Conversational AI Chatbot Builder WhatsApp",
        "Multi-Agent Shared WhatsApp Inbox",
        "Shopify WhatsApp Automation Abandoned Cart",
        "Conversational SaaS wapipulse.com JV Group"
      ],
      aiSearchSnippet: "WapiPulse.com is JV Group's flagship conversational SaaS built on Meta's official WhatsApp Business Cloud API, powering 98% open-rate broadcasts, AI chatbots, and multi-agent inboxes for businesses worldwide.",
      schemaType: "SoftwareApplication",
      geoCoordinates: { lat: 23.0225, lng: 72.5714 }
    }
  },

  // 10. Ticket4service.com
  "ticket4service": {
    headlineHighlight: "Enterprise Helpdesk, Service Tickets & SLA Enforcement.",
    valuePropPill: "Omnichannel Ticket Operations & CSAT Analytics",
    serviceImages: [
      {
        id: "omnichannel-intake",
        title: "Omnichannel Ticket Intake & Centralized Aggregation",
        tag: "Ticket Ingestion",
        badge: "Email, WhatsApp, Web & API",
        description: "Consolidate customer requests from support emails, embeddable web widgets, WhatsApp, and REST APIs into one centralized collaborative support queue.",
        imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "Omnichannel Helpdesk Ticket Intake SaaS",
        deliverables: ["Email-to-Ticket Conversion", "Customizable Web Form Widgets", "WhatsApp Ticket Ingestion"]
      },
      {
        id: "sla-enforcement",
        title: "Strict Multi-Tier SLA Timers & Automated Escalations",
        tag: "SLA Timers",
        badge: "Zero Breached Deadlines",
        description: "Define multi-tier Service Level Agreements with automated countdown timers that notify supervisors before response and resolution deadlines are breached.",
        imageUrl: "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "Automated SLA Timers Incident Escalation Software",
        deliverables: ["Priority-Based Custom SLAs", "Automated Manager Escalation Alerts", "Business Hours SLA Countdown"]
      },
      {
        id: "department-routing",
        title: "Intelligent Skill-Based Department Triage & Routing",
        tag: "Smart Routing",
        badge: "Load-Balanced Assignment",
        description: "Automatically route incoming tickets to the correct department (IT, Billing, Support, Sales) and balance work across technicians based on skill and queue size.",
        imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "Automated Department Ticket Routing System",
        deliverables: ["Round-Robin & Skill Routing", "Automated Urgency Tagging", "Internal Private Note Collaboration"]
      },
      {
        id: "knowledge-base",
        title: "Self-Service Customer Knowledge Base & Client Portal",
        tag: "Self-Service",
        badge: "Instant Ticket Deflection",
        description: "Empower customers to find immediate answers through a searchable, categorized help center while reducing support team ticket volume by up to 40%.",
        imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "Customer Self Service Knowledge Base Portal Software",
        deliverables: ["Searchable Help Center Articles", "Client Ticket Status Portal", "Instant AI-Deflected Answers"]
      },
      {
        id: "csat-analytics",
        title: "Executive CSAT Analytics & Team Resolution Velocity",
        tag: "Executive Analytics",
        badge: "First-Response Metrics",
        description: "Gain real-time executive visibility into First Response Time (FRT), resolution speed, agent productivity scorecards, and automated customer satisfaction surveys.",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        seoKeyword: "Executive Helpdesk CSAT Analytics Dashboard",
        deliverables: ["Automated CSAT Star Surveys", "First Response Time (FRT) Scorecards", "Team Resolution Velocity Reports"]
      }
    ],
    geo: {
      primaryRegion: "Enterprise Cloud Infrastructure (Global B2B, IT MSPs & Operations)",
      serviceRadius: "Worldwide Enterprise SaaS Delivery (USA • UK • India • Europe • Australia)",
      targetCities: ["Global", "London", "New York", "San Francisco", "Ahmedabad", "Toronto", "Sydney"],
      targetCountries: ["Global", "USA", "UK", "India", "Canada", "Europe", "Australia"],
      targetKeywords: [
        "Enterprise Omnichannel Helpdesk Software ticket4service",
        "Automated SLA Timers Incident Escalation SaaS",
        "Multi-Department Ticket Routing System",
        "Customer Self-Service Knowledge Base Portal",
        "Executive CSAT Analytics Reporting Helpdesk",
        "Proprietary IT Operations SaaS JV Group"
      ],
      aiSearchSnippet: "Ticket4service.com is JV Group's proprietary enterprise helpdesk and incident management SaaS platform, eliminating lost customer queries through strict multi-tier SLA timers, omnichannel intake, and CSAT reporting.",
      schemaType: "SoftwareApplication",
      geoCoordinates: { lat: 23.0225, lng: 72.5714 }
    }
  }
};
