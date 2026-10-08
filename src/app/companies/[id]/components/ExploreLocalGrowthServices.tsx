"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Cpu,
  MessageSquare,
  Megaphone,
  Code2,
  Sparkles,
  Layers,
  Building2,
  Target,
  CheckCircle2,
  ShieldCheck,
  Server,
  Lock,
  BarChart3,
  Globe2,
  Search,
  Clock,
  ArrowRight
} from "lucide-react";

export interface LocalGrowthServiceItem {
  id: string;
  category: "seo-maps" | "paid-ads" | "ai-seo" | "development" | "operations" | "marketing";
  name: string;
  tag: string;
  summary: string;
  chips: string[];
  product: string;
  aiSeoData: string;
  features: string[];
  deliverable: string;
  badge: string;
  icon: any;
  iconColor: string;
}

export const LOCAL_GROWTH_SERVICES: LocalGrowthServiceItem[] = [
  {
    id: "maps",
    category: "seo-maps",
    name: "Google Profile Listing (Business Account) & Maps 3-Pack",
    tag: "Highest Inbound Footfall for Ahmedabad Stores & Clinics",
    summary: "Dominate Google Maps top 3 rankings when high-intent local customers search 'near me' across Ahmedabad pin codes.",
    chips: ["📍 Pin Code Geo-Grid", "⭐ 5-Star QR Reviews", "🛡️ 60-Day Top 3 SLA"],
    product: "Wapipulse Review Funnel & JV Maps Geotag Engine",
    aiSeoData: "Google Maps Knowledge Graph & Local AI Overviews 'Near Me' Citations",
    features: [
      "Complete Google Business Profile (GBP) audit, categorization & 100% verification",
      "Geotagged high-resolution photo uploads with EXIF coordinate data",
      "Automated QR code review collection system generating 5-star customer feedback",
      "Local citation building across 50+ verified Gujarat & India directories",
      "Weekly bilingual GBP promotional updates in Gujarati & English"
    ],
    deliverable: "Top-3 Ranking in 30-45 Days",
    badge: "High Intent",
    icon: MapPin,
    iconColor: "text-amber-600 bg-amber-50 border-amber-200"
  },
  {
    id: "google-seo",
    category: "seo-maps",
    name: "Google SEO & Generative AI Search (GEO)",
    tag: "Google AI Overviews, Gemini, Perplexity & ChatGPT",
    summary: "Future-proof ranking engine designed to get your business cited as the #1 authority in AI answers and traditional Google search.",
    chips: ["🤖 Google AI Overviews", "⚡ 98/100 Core Vitals", "🌐 Entity Schema"],
    product: "JV Proprietary AI Visibility Audit Tool & Schema Engine",
    aiSeoData: "JSON-LD LocalBusiness Entity Graph, Perplexity LLM Citations & Answer Extraction",
    features: [
      "Semantic Entity & JSON-LD schema architecture engineered for LLM answer engines",
      "Sub-second Core Web Vitals optimization achieving 98+ mobile page performance",
      "Conversational Q&A extract formatting for ChatGPT, Gemini & Perplexity citation",
      "Local commercial search authority mapping client entities across Western India",
      "Technical crawl hygiene preventing indexation leaks and duplicate entity conflicts"
    ],
    deliverable: "AI Citations & 98/100 Vitals",
    badge: "Next-Gen AI",
    icon: Cpu,
    iconColor: "text-purple-600 bg-purple-50 border-purple-200"
  },
  {
    id: "ad-run",
    category: "paid-ads",
    name: "Ad Run :- Meta & Google Performance Ads",
    tag: "Immediate Phone Calls & Verified Inbound Inquiries",
    summary: "Laser-targeted paid ad campaigns on Meta (Instagram & Facebook) and Google Search routing ready-to-buy customers directly into WhatsApp chats.",
    chips: ["💬 Direct WhatsApp API", "⚡ <60s Lead Alert", "🎯 Gujarat Meta Reels"],
    product: "Wapipulse Click-to-WhatsApp Campaign Automation & Meta Pixel Bridge",
    aiSeoData: "Target Commercial Search Intent & AI-Powered Dynamic Ad Retargeting",
    features: [
      "Hyper-local pin-code targeting across Ahmedabad & Gandhinagar (3km-15km radius)",
      "Click-to-WhatsApp direct message funnels routing buyers to your sales team",
      "High-converting video reels, carousel promotions, and festive Gujarati offers",
      "100% direct client ad billing transparency with zero agency markup on media spend",
      "Daily negative keyword hygiene eliminating wasted budget on irrelevant traffic"
    ],
    deliverable: "Qualified Daily Phone Calls",
    badge: "Instant Leads",
    icon: MessageSquare,
    iconColor: "text-emerald-600 bg-emerald-50 border-emerald-200"
  },
  {
    id: "social-media",
    category: "marketing",
    name: "Social Media Management & Bilingual Content Studio",
    tag: "Bilingual Growth (Gujarati + Hindi + English)",
    summary: "Culturally authentic brand storytelling, high-performing video reels, and community engagement tailored for affluent Gujarat consumers.",
    chips: ["🗣️ Gujarati + Hindi", "🎨 Festive Campaigns", "📱 Instagram Reels"],
    product: "Wapipulse Social Lead Broadcaster & JV Creative Studio",
    aiSeoData: "Social Entity Signals & Brand Mention Indexing for Search AI Engines",
    features: [
      "Weekly high-engagement social media content calendar in Gujarati & English",
      "Festive promotional campaigns (Diwali, Uttarayan, Navratri, New Year)",
      "Short-form video reel scripting, editing, and voiceover production",
      "Social media grid management with engaging weekly posts and DM handling",
      "Storefront signage, brochures, catalog design, and print collaterals"
    ],
    deliverable: "High Brand Recall in Gujarat",
    badge: "Brand Growth",
    icon: Megaphone,
    iconColor: "text-rose-600 bg-rose-50 border-rose-200"
  },
  {
    id: "website-dev",
    category: "development",
    name: "Website Development & Next.js Platforms",
    tag: "Sub-Second Speed & Mobile Conversion Engine",
    summary: "Custom high-performance corporate websites and ecommerce platforms built with Next.js, Tailwind CSS, and headless architecture.",
    chips: ["⚡ Next.js Turbopack", "📱 Mobile First", "🔒 Free SSL Security"],
    product: "Ekato Tech Web Framework & JV Cloud Hosting",
    aiSeoData: "Automated Semantic HTML5, Schema.org Hierarchy & 100/100 PageSpeed SEO",
    features: [
      "Custom responsive Next.js frontend with sub-second page loads across 4G/5G",
      "Integrated lead capture forms connected directly to WhatsApp and email alerts",
      "On-page SEO optimization with automated XML sitemaps and OpenGraph tags",
      "Enterprise SSL certificate, HTTP/3 protocol, and cloud DDoS protection",
      "Seamless integration with custom web development by sister firm Ekato Tech"
    ],
    deliverable: "Live Site in 10-14 Days",
    badge: "High Speed",
    icon: Code2,
    iconColor: "text-blue-600 bg-blue-50 border-blue-200"
  },
  {
    id: "qr-code",
    category: "marketing",
    name: "Qr Code Generation & Contactless Funnels",
    tag: "Turn Footfall into Instant Inquiries & 5-Star Reviews",
    summary: "Custom branded dynamic QR code infrastructure with real-time scan analytics and automated WhatsApp chat starters.",
    chips: ["📲 Dynamic QR Engine", "📊 Scan Analytics", "⭐ Review Funnel"],
    product: "Wapipulse Dynamic QR Generator & Automated WhatsApp Bot",
    aiSeoData: "Direct Google Review Velocity Signal Boosting Local Map Rankings",
    features: [
      "Custom vector QR codes with your company logo and branded colors",
      "Dynamic redirect destinations that can be updated anytime without reprinting",
      "Automated Google Review trigger routing happy customers to leave 5 stars",
      "Direct Click-to-WhatsApp pre-filled product inquiry generation",
      "Real-time scan volume, device type, and location analytics dashboards"
    ],
    deliverable: "Instant Deployment in 24 Hours",
    badge: "Automated Leads",
    icon: Sparkles,
    iconColor: "text-cyan-600 bg-cyan-50 border-cyan-200"
  },
  {
    id: "software-dev",
    category: "development",
    name: "Software Development & Custom SaaS Engineering",
    tag: "Scalable Cloud Architecture Built for Growth",
    summary: "Bespoke enterprise software, web applications, and customer portals engineered by sister unit Ekato Tech.",
    chips: ["💻 Full-Stack SaaS", "⚙️ REST & GraphQL APIs", "🛡️ Scalable Database"],
    product: "Ekato Tech Enterprise Core & Wapipulse API Suite",
    aiSeoData: "PWA Architecture, Dynamic Microdata & AI-Ready Headless APIs",
    features: [
      "Bespoke SaaS platform architecture with multi-tenant role-based access",
      "Modern relational and NoSQL databases with automated automated backups",
      "Third-party payment gateway, SMS, and WhatsApp API integrations",
      "Comprehensive automated test suites ensuring zero regression bugs",
      "Dedicated source code ownership and technical architecture documentation"
    ],
    deliverable: "Milestone-Driven Sprints",
    badge: "Engineering",
    icon: Layers,
    iconColor: "text-indigo-600 bg-indigo-50 border-indigo-200"
  },
  {
    id: "enterprise-solutions",
    category: "development",
    name: "Enterprise Solutions & ERP / CRM Automation",
    tag: "Streamline Operations & Eliminate Human Bottlenecks",
    summary: "End-to-end ERP, CRM, and inventory automation systems tailored for Gujarat manufacturers, distributors, and traders.",
    chips: ["🏢 Custom ERP / CRM", "🔄 Workflow Automation", "📈 Real-Time KPIs"],
    product: "JV Group Enterprise CRM & Ticket4service Backend",
    aiSeoData: "Internal Knowledge Graph & AI-Driven Operations Copilot",
    features: [
      "Custom lead tracking and multi-stage deal pipelines with WhatsApp alerts",
      "Inventory tracking, purchase orders, and GST billing integration",
      "Customer lifecycle management and automated payment reminder workflows",
      "Executive KPI dashboards with daily operational analytics summaries",
      "On-premise or cloud hosting deployment with strict data isolation"
    ],
    deliverable: "Custom Enterprise Rollout",
    badge: "Enterprise SLA",
    icon: Building2,
    iconColor: "text-emerald-700 bg-emerald-50 border-emerald-300"
  },
  {
    id: "ui-ux",
    category: "marketing",
    name: "UI/UX Design & High-Conversion Experience",
    tag: "Intuitive Interfaces That Turn Visitors into Buyers",
    summary: "World-class Figma design systems, wireframing, and interactive clickable prototypes prioritizing conversion rate optimization.",
    chips: ["🎨 Figma Design System", "🧪 User Testing", "⚡ CRO Optimization"],
    product: "JV UI Design Kit & Mobile Component Library",
    aiSeoData: "Accessible Semantic Layout & Core Web Vitals Cumulative Layout Shift (CLS = 0)",
    features: [
      "Comprehensive user persona research and competitive visual benchmark audits",
      "Figma component design systems with responsive mobile and desktop variants",
      "Interactive clickable prototypes for user testing and stakeholder alignment",
      "Conversion Rate Optimization (CRO) audits of existing websites and apps",
      "Pixel-perfect developer handoff specs with Tailwind CSS color tokens"
    ],
    deliverable: "Complete Design Kit in 7 Days",
    badge: "Creative UX",
    icon: Target,
    iconColor: "text-pink-600 bg-pink-50 border-pink-200"
  },
  {
    id: "assurance-testing",
    category: "operations",
    name: "Assurance and Testing (QA & Security Audits)",
    tag: "Zero-Defect Software & Flawless System Execution",
    summary: "Rigorous functional, performance, and cross-browser testing identifying defects before they impact commercial users.",
    chips: ["🧪 Automated QA", "📱 Cross-Device Testing", "🛡️ Vulnerability Audit"],
    product: "Ticket4service QA Suite & Automated Test Engine",
    aiSeoData: "Crawl Error Elimination & Search Engine Bot Render Verification",
    features: [
      "Automated end-to-end user journey testing across mobile and desktop devices",
      "Stress testing simulating 10,000+ concurrent visitors during ad campaigns",
      "Cross-browser verification on Chrome, Safari, Firefox, Edge, and iOS WebKit",
      "Security vulnerability audits identifying OWASP top-10 weaknesses",
      "Detailed defect logs with reproducible steps and immediate patch verification"
    ],
    deliverable: "99.9% Bug-Free Release SLA",
    badge: "Quality SLA",
    icon: CheckCircle2,
    iconColor: "text-teal-600 bg-teal-50 border-teal-200"
  },
  {
    id: "maintenance-support",
    category: "operations",
    name: "Maintenance and Support & 24/7 SLA Helpdesk",
    tag: "Uninterrupted Digital Operations & Instant Bug Fixes",
    summary: "Proactive website monitoring, patch management, and dedicated Ahmedabad helpdesk support for complete peace of mind.",
    chips: ["⏱️ <15 Min SLA", "🛡️ Daily Cloud Backups", "🔧 Routine Patching"],
    product: "Ticket4service SLA Helpdesk & JV Support Portal",
    aiSeoData: "Zero Search Downtime & Immediate 404/500 Crawl Recovery",
    features: [
      "24/7 server uptime monitoring with sub-minute alert dispatch",
      "Guaranteed 15-minute emergency response SLA for mission-critical issues",
      "Automated daily cloud backups with one-click full disaster recovery",
      "Routine security patch updates, plugin audits, and database optimization",
      "Dedicated WhatsApp priority desk with direct engineer communication"
    ],
    deliverable: "99.9% Guaranteed Uptime SLA",
    badge: "24/7 Support",
    icon: ShieldCheck,
    iconColor: "text-blue-700 bg-blue-50 border-blue-300"
  },
  {
    id: "devops-services",
    category: "operations",
    name: "DevOps Services & Cloud CI/CD Automation",
    tag: "High Availability, Automated Releases & Scalable Cloud",
    summary: "Containerized deployments, automated CI/CD pipelines, and cloud infrastructure management across AWS, Azure, and JV Servers.",
    chips: ["🐳 Docker / Kubernetes", "🚀 Automated CI/CD", "☁️ Multi-Cloud SLA"],
    product: "JV Cloud Infrastructure & Containerized Microservices",
    aiSeoData: "Global CDN Edge Caching for 15ms Time to First Byte (TTFB)",
    features: [
      "Automated GitHub Actions and GitLab CI/CD zero-downtime deployment pipelines",
      "Docker containerization and Kubernetes orchestration for auto-scaling",
      "Cloud infrastructure as code (Terraform) with disaster redundancy",
      "Global Cloudflare CDN and edge caching reducing TTFB below 20ms",
      "Cost optimization reducing redundant cloud compute and bandwidth bills"
    ],
    deliverable: "Zero-Downtime Deployment",
    badge: "Cloud Ops",
    icon: Server,
    iconColor: "text-violet-600 bg-violet-50 border-violet-200"
  },
  {
    id: "security-solutions",
    category: "operations",
    name: "Security Solutions & Enterprise Cyber Shield",
    tag: "Protect Business Data, Customer Transactions & IP 24/7",
    summary: "Comprehensive digital security architecture, DDoS shielding, web application firewalls, and compliance audits.",
    chips: ["🔒 WAF DDoS Shield", "🛡️ SSL Encryption", "🔐 Access Control"],
    product: "JV Security Shield & Enterprise Firewall",
    aiSeoData: "HTTPS Security Trust Signal & Malware-Free Search Status",
    features: [
      "Enterprise Web Application Firewall (WAF) blocking malicious bot attacks",
      "Hardware and cloud DDoS mitigation with automated traffic scrubbing",
      "End-to-end TLS 1.3 encryption and automated certificate renewals",
      "Database encryption at rest and in transit adhering to data privacy standards",
      "Quarterly penetration testing and employee security hygiene audits"
    ],
    deliverable: "24/7 Active Defense Shield",
    badge: "Protected",
    icon: Lock,
    iconColor: "text-red-600 bg-red-50 border-red-200"
  },
  {
    id: "big-data",
    category: "ai-seo",
    name: "Big Data Analytics & Customer Intelligence Hub",
    tag: "Turn Raw Commercial Data into Actionable Profit Insights",
    summary: "Consolidate multi-channel customer data, sales funnels, and marketing performance into executive real-time dashboards.",
    chips: ["📊 PowerBI / Looker", "🧠 Predictive AI", "📈 Customer LTV"],
    product: "JV Commercial Intelligence Dashboard & GA4 BigQuery Bridge",
    aiSeoData: "AI Search Visibility Share & Competitor Attribution Analytics",
    features: [
      "Unified analytics dashboard pulling data from Meta Ads, Google Ads, and CRM",
      "Customer Lifetime Value (LTV) and Cost Per Acquisition (CPA) cohort analysis",
      "Predictive demand forecasting based on regional Gujarat seasonal trends",
      "Google Analytics 4 server-side tracking bypassing ad-blocker data loss",
      "Weekly executive automated email summaries with high-impact insights"
    ],
    deliverable: "Live Executive Dashboard",
    badge: "Smart Data",
    icon: BarChart3,
    iconColor: "text-amber-700 bg-amber-50 border-amber-300"
  },
  {
    id: "hosting-web",
    category: "operations",
    name: "High-Speed Business Hosting, Domains & Corporate Email",
    tag: "Reliable Digital Backbone Powered by JV Group Servers",
    summary: "Fast, secure local hosting infrastructure powered by JV Group servers, complete with professional @yourbrand.com webmail.",
    chips: ["⚡ SSD 99.9% SLA", "🔒 Corporate Webmail", "🛡️ Daily Backups"],
    product: "JV Group Enterprise NVMe Hosting Platform",
    aiSeoData: "Sub-Second Hosting Speed Boosting Search Engine Crawl Budget",
    features: [
      "Domain registration (.com, .in, .co.in, .org) with DNS management",
      "High-speed SSD web hosting with 99.9% uptime SLA",
      "Professional corporate webmail accounts configured on mobile/Outlook",
      "Free SSL encryption certificates and automated daily backups",
      "Seamless integration with custom web development by sister firm Ekato Tech"
    ],
    deliverable: "Zero Downtime Web Presence",
    badge: "Enterprise SLA",
    icon: Globe2,
    iconColor: "text-blue-600 bg-blue-50 border-blue-200"
  },
  {
    id: "google-ads",
    category: "paid-ads",
    name: "Google Search Ads & Commercial Intent Capture",
    tag: "Direct Inbound Buyers Ready to Purchase",
    summary: "Appear at the very top of Google Search when buyers type exact commercial requirements across Gujarat.",
    chips: ["🎯 High Intent Keywords", "📞 Call-Only Mobile Ads", "🚫 Negative Keywords"],
    product: "Google Ads Enterprise Console & Call Tracking API",
    aiSeoData: "Search Intent Extraction Synergizing with Organic AI SEO Rankings",
    features: [
      "Search campaign architecture targeting exact phrase and exact-match keywords",
      "Negative keyword filtering eliminating wasted budget on irrelevant searches",
      "Call-only ads allowing mobile searchers to call your desk with one tap",
      "Competitor keyword targeting in your specific industrial or commercial category",
      "Conversion tracking measuring cost-per-lead and return on ad spend"
    ],
    deliverable: "Commercial Search Dominance",
    badge: "High Conversion",
    icon: Search,
    iconColor: "text-orange-600 bg-orange-50 border-orange-200"
  }
];

export const SERVICE_CATEGORIES = [
  { id: "all", label: `All Services (${LOCAL_GROWTH_SERVICES.length})`, icon: Sparkles },
  { id: "seo-maps", label: "Google Maps & SEO", icon: MapPin },
  { id: "paid-ads", label: "Meta & Google Ads", icon: MessageSquare },
  { id: "ai-seo", label: "AI SEO & Analytics", icon: Cpu },
  { id: "development", label: "Web & Software", icon: Code2 },
  { id: "operations", label: "DevOps & Cloud SLA", icon: ShieldCheck },
  { id: "marketing", label: "Branding & QR Funnels", icon: Megaphone }
];

interface ExploreLocalGrowthServicesProps {
  onSelectService?: (serviceName: string) => void;
  inquiryTarget?: "quote-form" | "contact-page";
  className?: string;
  id?: string;
}

export default function ExploreLocalGrowthServices({
  onSelectService,
  inquiryTarget = "contact-page",
  className = "",
  id = "services-explorer"
}: ExploreLocalGrowthServicesProps) {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredServices = activeTab === "all"
    ? LOCAL_GROWTH_SERVICES
    : LOCAL_GROWTH_SERVICES.filter(s => s.category === activeTab);

  return (
    <section id={id} className={`py-16 sm:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0] ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-jv-orange)]/10 text-[var(--color-jv-orange)] border border-[var(--color-jv-orange)]/25 text-xs font-black uppercase tracking-wider mb-2.5">
              <Sparkles size={13} className="text-[var(--color-jv-orange)]" />
              <span>Proven Local Growth Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#0F172A] tracking-tight">
              Explore Our Local <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-jv-orange)] to-[#ea580c]">Growth Services</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] font-semibold mt-1.5 max-w-2xl">
              Inspect end-to-end deliverables, timelines, and verifiable workflows engineered for Ahmedabad businesses.
            </p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white rounded-2xl border border-[#CBD5E1] shadow-xs self-start lg:self-auto">
            {SERVICE_CATEGORIES.map((tab) => {
              const TabIcon = tab.icon;
              const isTabActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-2 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${
                    isTabActive
                      ? "bg-[var(--color-jv-orange)] text-white shadow-md shadow-[var(--color-jv-orange)]/25"
                      : "text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC]"
                  }`}
                >
                  <TabIcon size={13} className={isTabActive ? "text-white" : "text-[#94A3B8]"} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Filtered Services Grid (16 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, sIdx) => {
            const ServiceIcon = service.icon || Target;
            return (
              <div
                key={service.id || sIdx}
                className="bg-white border border-[#CBD5E1] hover:border-[var(--color-jv-orange)] rounded-3xl p-6 sm:p-7 card-shadow-3d hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative group overflow-hidden"
              >
                {/* Subtle Top Gradient Line on Hover */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[var(--color-jv-orange)] via-amber-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Top Status & Category Row */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 shadow-2xs ${service.iconColor}`}>
                        <ServiceIcon size={18} />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#FFF4ED] text-[var(--color-jv-orange)] border border-[var(--color-jv-orange)]/20">
                        {service.badge}
                      </span>
                    </div>
                    
                    <span className="font-mono text-xs font-black text-[#94A3B8] bg-[#F1F5F9] px-2.5 py-1 rounded-lg">
                      {sIdx + 1 < 10 ? `0${sIdx + 1}` : sIdx + 1}
                    </span>
                  </div>

                  {/* Service Name */}
                  <h3 className="text-lg sm:text-xl font-heading font-black text-[#0F172A] group-hover:text-[var(--color-jv-orange)] transition-colors leading-snug mb-1.5">
                    {service.name}
                  </h3>

                  {/* Tagline / Target Audience */}
                  <span className="inline-block text-xs font-black text-[var(--color-jv-orange)] mb-2.5">
                    {service.tag}
                  </span>

                  {/* Summary */}
                  <p className="text-xs text-[#64748B] font-medium leading-relaxed mb-4">
                    {service.summary}
                  </p>

                  {/* Feature Chips */}
                  {service.chips && (
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {service.chips.map((chip, cIdx) => (
                        <span
                          key={cIdx}
                          className="text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0]"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Relevant Product & SaaS Integration */}
                  {service.product && (
                    <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-amber-50/80 border border-amber-200/90 mb-3 text-xs">
                      <div className="w-6 h-6 rounded-lg bg-[var(--color-jv-orange)] text-white flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                        <Sparkles size={12} />
                      </div>
                      <div className="leading-tight">
                        <span className="text-[10px] uppercase font-black text-amber-900 tracking-wider block mb-0.5">
                          Relevant Product / Platform:
                        </span>
                        <span className="font-extrabold text-[#0F172A] text-xs">
                          {service.product}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* SEO & AI SEO / GEO Capability Data */}
                  {service.aiSeoData && (
                    <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-purple-50/80 border border-purple-200/90 mb-4 text-xs">
                      <div className="w-6 h-6 rounded-lg bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                        <Cpu size={12} />
                      </div>
                      <div className="leading-tight">
                        <span className="text-[10px] uppercase font-black text-purple-900 tracking-wider block mb-0.5">
                          SEO & AI SEO / GEO Relevant Data:
                        </span>
                        <span className="font-extrabold text-[#0F172A] text-xs">
                          {service.aiSeoData}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* What You Receive (Deliverables Panel) */}
                  <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-4 mb-5">
                    <span className="block text-[10px] uppercase font-black tracking-wider text-[#64748B] mb-2.5 flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-[var(--color-jv-orange)]" />
                      <span>Included Deliverables (SLA):</span>
                    </span>
                    <div className="space-y-2">
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-[#1E293B] font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-jv-orange)] shrink-0 mt-1.5" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] font-extrabold text-[#475569] flex items-center gap-1.5 bg-[#F1F5F9] px-2.5 py-1 rounded-lg">
                    <Clock size={12} className="text-[var(--color-jv-orange)] shrink-0" />
                    <span>{service.deliverable}</span>
                  </span>

                  <div className="flex items-center gap-2">
                    <a
                      href={`https://wa.me/919909700606?text=${encodeURIComponent(
                        `Hello AMS, I am inquiring about ${service.name} (${service.tag}). Please share details and pricing proposal.`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366] text-[#128C7E] hover:text-white border border-[#25D366]/30 transition-all"
                      title="Chat on WhatsApp"
                    >
                      <MessageSquare size={13} />
                    </a>

                    {inquiryTarget === "quote-form" ? (
                      <a
                        href="#quote-form"
                        onClick={() => {
                          if (onSelectService) {
                            onSelectService(service.name);
                          }
                          const quoteEl = document.getElementById("quote-form");
                          if (quoteEl) {
                            quoteEl.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                        className="px-3.5 py-1.5 rounded-xl bg-[var(--color-jv-orange)] hover:bg-[#c2410c] text-white text-xs font-black uppercase tracking-wider flex items-center gap-1 transition-all shadow-xs cursor-pointer"
                      >
                        <span>Inquire</span>
                        <ArrowRight size={12} />
                      </a>
                    ) : (
                      <Link
                        href={`/companies/ahmedabad-marketing-solution/contact?service=${encodeURIComponent(service.name)}`}
                        className="px-3.5 py-1.5 rounded-xl bg-[var(--color-jv-orange)] hover:bg-[#c2410c] text-white text-xs font-black uppercase tracking-wider flex items-center gap-1 transition-all shadow-xs"
                      >
                        <span>Inquire</span>
                        <ArrowRight size={12} />
                      </Link>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
