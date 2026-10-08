"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Building2, 
  ArrowLeft, 
  ArrowRight, 
  Phone, 
  Globe2, 
  CheckCircle2, 
  Layers, 
  ExternalLink, 
  ShieldCheck, 
  ArrowUpRight,
  Sparkles,
  Server,
  Cpu,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Check,
  Code2,
  Smartphone,
  Megaphone,
  Target,
  BarChart3,
  TrendingUp,
  HelpCircle,
  Package,
  FileText,
  Search,
  RotateCcw,
  Zap,
  Users
} from "lucide-react";
import { BusinessEntity, JV_GROUP_META } from "@/data/businesses";
import { ENTITY_LANDING_DATA } from "@/data/entityLandingData";
import { COMPANY_WEBSITES_DATA } from "@/data/companyWebsitesData";
import CompanyHeader from "@/components/company/CompanyHeader";
import CompanyFooter from "@/components/company/CompanyFooter";
import DynamicInquiryForm from "./DynamicInquiryForm";
import EntityFaqAccordion from "./EntityFaqAccordion";
import HeroServiceShowcase, { HeroSearchIntentTags } from "@/components/company/HeroServiceShowcase";
import ValuePillarsDecorative from "@/components/company/ValuePillarsDecorative";
import JvServicesGridSection from "@/components/company/JvServicesGridSection";
import EnterpriseRevenueSimulator from "@/components/company/EnterpriseRevenueSimulator";
import SpecialFeatureDecorative from "@/components/company/SpecialFeatureDecorative";
import RetainersPricingDecorative from "@/components/company/RetainersPricingDecorative";
import CaseStudiesDecorative from "@/components/company/CaseStudiesDecorative";
import CompetitiveAdvantageDecorative from "@/components/company/CompetitiveAdvantageDecorative";
import EngagementProcessDecorative from "@/components/company/EngagementProcessDecorative";
import FaqSectionDecorative from "@/components/company/FaqSectionDecorative";
import AiSeoFeatureSection from "@/components/company/AiSeoFeatureSection";
import VerifiedMetricsStrip from "@/components/company/VerifiedMetricsStrip";

interface Props {
  entity: BusinessEntity;
}

export default function JvMarketingSolutionWebsite({ entity }: Props) {
  const landingData = ENTITY_LANDING_DATA[entity.id] || {
    tagline: entity.positioning,
    heroHeadline: entity.name,
    heroSubtitle: entity.overview,
    stats: [
      { value: "$25M+", label: "Client Ad Spend Managed", detail: "Across Global Networks" },
      { value: "4.2x", label: "Average Enterprise ROAS", detail: "Predictive Bidding Models" },
      { value: "< 60s", label: "Lead Response Speed", detail: "Direct CRM Webhook Routing" },
      { value: "Global", label: "US, UK & India Coverage", detail: "Timezone-Aligned Delivery" }
    ],
    valuePillars: [],
    whyChooseUs: [],
    processSteps: [],
    targetIndustries: [],
    specialFeature: { title: "", subtitle: "", badge: "", description: "", items: [] },
    faqs: [],
    directDesk: {
      phone: "+91 99097 00606",
      phoneLabel: "India Desk: +91 99097 00606 | Global: +44 7344556070",
      email: JV_GROUP_META.email,
      workingHours: "24/7 Global B2B Operations",
      officeLocation: "Corporate Hub India & International B2B Desk",
      whatsappNumber: "919909700606"
    }
  };

  const companyExtraData = COMPANY_WEBSITES_DATA[entity.id];

  // Hero Visual Mode: "ads" | "seo" | "maps" | "simulator"
  const [heroVisualTab, setHeroVisualTab] = useState<"ads" | "seo" | "maps" | "simulator">("ads");
  // Hero Interactive Console Mode: "simulator" | "comparison" | "audit"
  const [heroMode, setHeroMode] = useState<"simulator" | "comparison" | "audit">("simulator");
  // Hero Quick Audit State
  const [auditQuery, setAuditQuery] = useState<string>("");
  const [auditLoading, setAuditLoading] = useState<boolean>(false);
  const [auditResult, setAuditResult] = useState<{
    company: string;
    pipelineScore: number;
    recommendedStack: string[];
  } | null>(null);

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = auditQuery.trim() || "My Enterprise Brand";
    setAuditLoading(true);
    setTimeout(() => {
      setAuditResult({
        company: query,
        pipelineScore: 92,
        recommendedStack: [
          "Algorithmic Media: Deploy high-intent Google Search & LinkedIn ABM with predictive bidding",
          "Lossless Attribution: Configure server-side Meta Conversions API (CAPI) and Google Tag Manager",
          "Automated Response: Connect CRM webhooks to Wapipulse engine for sub-60s lead response"
        ]
      });
      setAuditLoading(false);
    }, 450);
  };

  const whatsappDeskUrl = `https://wa.me/447344556070?text=${encodeURIComponent(
    `Hello J.V Marketing Solution Private Limited (India), I want to schedule an enterprise growth consultation.`
  )}`;

  // Multi-Layered Schema.org (JSON-LD) Knowledge Graph for Google & Generative AI Models (ChatGPT, Perplexity, Gemini)
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "Corporation", "ProfessionalService"],
        "@id": "https://jvgroupco.in/companies/jv-marketing-solution-pvt-ltd#organization",
        "name": "J.V Marketing Solution Private Limited (India)",
        "legalName": "J.V Marketing Solution Private Limited (India)",
        "alternateName": [
          "J.V Marketing Solution Pvt. Ltd.",
          "JV Marketing Pvt Ltd",
          "J.V. Marketing Solution",
          "JV Marketing Group"
        ],
        "url": "https://jvgroupco.in/companies/jv-marketing-solution-pvt-ltd",
        "logo": "https://jvgroupco.in/logos/jv-marketing-solution-pvt-ltd.jpg",
        "image": "https://jvgroupco.in/logos/jv-marketing-solution-pvt-ltd.jpg",
        "description":
          "Premier enterprise AI SEO, Generative Engine Optimization (GEO), and performance marketing company. We get businesses ranked #1 on Google Search and cited as the leading authority across ChatGPT, Google AI Overviews, Perplexity, and Gemini.",
        "parentOrganization": {
          "@type": "Organization",
          "name": "JV Group",
          "url": "https://jvgroupco.in"
        },
        "founder": {
          "@type": "Person",
          "name": "Akash Chavda",
          "jobTitle": "Group Founder & Managing Director"
        },
        "telephone": "+44 7344556070",
        "email": "contact@jvgroupco.in",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "JV Corporate Hub, S.G. Highway Commercial Corridor",
          "addressLocality": "Ahmedabad",
          "addressRegion": "Gujarat",
          "postalCode": "382421",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 23.0338,
          "longitude": 72.5126
        },
        "areaServed": [
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "United Kingdom" },
          { "@type": "Country", "name": "Canada" },
          { "@type": "Country", "name": "India" }
        ],
        "knowsAbout": [
          "Generative Engine Optimization (GEO)",
          "AI SEO (Artificial Intelligence Search Engine Optimization)",
          "Google #1 Rank Optimization",
          "Google AI Overviews (SGE) Snippet Capture",
          "ChatGPT Search Engine Recommendation",
          "Perplexity AI Citations & Deep Research",
          "Claude and Gemini Enterprise Citations",
          "Algorithmic Media Buying & B2B Paid Ads",
          "Server-Side Meta Conversions API (CAPI)",
          "Multi-Touch Attribution Modeling",
          "CRM Webhook Pipelines (HubSpot, Salesforce, Zoho)",
          "Wapipulse WhatsApp Cloud API Marketing"
        ],
        "sameAs": [
          "https://jvgroupco.in",
          "https://jvgroupco.in/companies/jv-marketing-solution-pvt-ltd",
          "https://jvgroupco.in/ai-seo"
        ]
      },
      {
        "@type": "Service",
        "@id": "https://jvgroupco.in/companies/jv-marketing-solution-pvt-ltd#service-geo",
        "name": "Generative Engine Optimization (GEO) & AI SEO",
        "serviceType": "Generative Engine Optimization",
        "provider": {
          "@id": "https://jvgroupco.in/companies/jv-marketing-solution-pvt-ltd#organization"
        },
        "description":
          "Advanced AI search optimization ensuring enterprise brands rank #1 on Google and earn authoritative source citations in ChatGPT Search, Google AI Overviews, Perplexity, and Gemini.",
        "areaServed": "Global (USA, UK, Canada, India)",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "AI SEO & GEO Growth Catalog",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Page 1 #1 Rank Optimization" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ChatGPT & Perplexity Source Citation Engineering" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google AI Overviews (SGE) Domination" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Server-Side Meta CAPI & GA4 Lossless Telemetry" } }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://jvgroupco.in/companies/jv-marketing-solution-pvt-ltd#faq",
        "mainEntity": landingData.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://jvgroupco.in/companies/jv-marketing-solution-pvt-ltd#breadcrumbs",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://jvgroupco.in" },
          { "@type": "ListItem", "position": 2, "name": "Companies", "item": "https://jvgroupco.in/companies" },
          { "@type": "ListItem", "position": 3, "name": "J.V Marketing Solution Private Limited", "item": "https://jvgroupco.in/companies/jv-marketing-solution-pvt-ltd" }
        ]
      }
    ]
  };

  return (
    <div id="top" className="w-full min-h-screen bg-white text-[#18191C] flex flex-col font-sans selection:bg-[var(--color-jv-orange)] selection:text-white">
      {/* JSON-LD Schema.org Knowledge Graph for Google & AI Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      
      {/* 1. Dedicated Navigation Header */}
      <CompanyHeader entity={entity} />

      {/* 2. Floating Left-Side Back to JV Group Portal Pill */}
      <div className="fixed bottom-6 left-4 sm:left-6 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#18191C]/90 hover:bg-[var(--color-jv-orange)] text-white text-xs font-bold shadow-xl backdrop-blur-md border border-white/15 transition-all hover:scale-105 active:scale-95 group"
          title="Return to JV Group Corporate Portal"
        >
          <ArrowLeft size={14} className="text-[var(--color-jv-orange)] group-hover:text-white transition-colors" />
          <span className="hidden sm:inline">Back to JV Group Portal</span>
          <span className="sm:hidden">JV Group</span>
        </Link>
      </div>

      {/* 3. Redesigned & Properly Set Hero Section */}
      <section className="relative pt-6 pb-14 sm:pt-8 sm:pb-20 bg-gradient-to-b from-[#FFFDFB] via-[#FFF9F5] to-white border-b border-[#E2E8F0] overflow-hidden">
        {/* Ambient lighting & subtle glowing meshes */}
        <div className="absolute inset-0 white-grid-bg opacity-40 pointer-events-none" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[750px] h-[360px] bg-gradient-to-b from-[var(--color-jv-orange)]/15 via-amber-400/10 to-transparent blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-[var(--color-jv-orange)]/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Column: Bold Value Proposition & Aligned Action Desk (5 Cols) */}
            <div className="lg:col-span-5 space-y-5">
              
              {/* Trust Badges Bar */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFF4ED] border border-[var(--color-jv-orange)]/35 text-[var(--color-jv-orange)] text-xs font-black uppercase tracking-wider shadow-2xs">
                  <Sparkles size={13} className="text-[var(--color-jv-orange)]" />
                  <span>AI-Powered B2B Agency</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-0.5" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-[#F1F5F9] text-[#2B2D31] border border-[#E2E8F0]">
                  Flagship B2B Agency of JV Group
                </span>
                <span className="text-xs text-[#64748B] flex items-center gap-1 font-semibold">
                  <Globe2 size={13} className="text-[var(--color-jv-orange)]" />
                  <span>Priority Markets: <strong>USA • India</strong></span>
                </span>
              </div>

              {/* Bold Main Headline with Dual-Gradient Focus */}
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-heading font-black text-[#0F172A] tracking-tight leading-[1.12]">
                  Scale Enterprise Revenue.
                  <span className="block mt-2 bg-gradient-to-r from-[var(--color-jv-orange)] via-[#ea580c] to-[#c2410c] bg-clip-text text-transparent">
                    Algorithmic Media & Smart Automation.
                  </span>
                </h1>
                <p className="mt-3 text-sm sm:text-base font-bold text-[#1E293B] leading-snug">
                  Full-Funnel Customer Acquisition Systems Connecting Predictive Ad Bidding, Programmatic B2B SEO, and Direct CRM Pipelines.
                </p>
              </div>

              {/* Punchy Narrative Description */}
              <p className="text-[#334155] text-xs sm:text-sm leading-relaxed font-normal">
                J.V Marketing Solution Private Limited (India) is the premier B2B growth agency of the <strong className="text-[#0F172A] font-extrabold">JV Group</strong>. Operating at the intersection of marketing psychology, data science, and proprietary software integrations, we engineer predictable, automated client acquisition engines that help enterprise clients in the <strong className="text-[#0F172A]">United States and India</strong> scale their pipeline profitably.
              </p>

              {/* Social Proof Trust Strip */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <div className="flex -space-x-1.5 overflow-hidden">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-tr from-blue-700 via-indigo-600 to-red-600 text-white text-[10px] font-black border-2 border-white shadow-xs" title="USA Enterprise Clients">US</span>
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-tr from-orange-500 via-amber-400 to-emerald-600 text-slate-900 text-[10px] font-black border-2 border-white shadow-xs" title="India Enterprise Clients">IN</span>
                </div>
                <div className="text-xs">
                  <div className="flex items-center gap-1 text-amber-500 font-bold">
                    <span>★★★★★</span>
                    <span className="text-xs font-black text-[#0F172A] ml-1">4.9/5 Rating</span>
                  </div>
                  <span className="text-[11px] text-[#64748B] font-semibold">
                    Trusted by 200+ Enterprise Brands in USA &amp; India
                  </span>
                </div>
              </div>

              {/* Action Buttons Desk (Clean, Balanced & Perfectly Aligned) */}
              <div className="pt-2 space-y-2.5">
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5">
                  {/* Primary CTA */}
                  <a
                    href="#proposal-form"
                    className="flex-1 px-5 py-3.5 rounded-xl bg-gradient-to-r from-[var(--color-jv-orange)] to-[#c2410c] hover:opacity-95 text-white font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[var(--color-jv-orange)]/25 hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer text-center"
                  >
                    <span>Request Growth Proposal</span>
                    <ArrowRight size={15} />
                  </a>

                  {/* WhatsApp Direct Action */}
                  <a
                    href={whatsappDeskUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-all cursor-pointer shrink-0"
                    title="Instant WhatsApp Consultation"
                  >
                    <MessageSquare size={15} />
                    <span>WhatsApp</span>
                  </a>
                </div>

                {/* Direct Hotlines (India & Global) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    href="tel:+919909700606"
                    className="px-3 py-2.5 rounded-xl bg-[#F8FAFC] hover:bg-[#FFF4ED] text-[#18191C] hover:text-[var(--color-jv-orange)] font-bold text-xs uppercase tracking-wider border border-[#CBD5E1] flex items-center justify-center gap-2 transition-all shadow-2xs"
                    title="Call Domestic Corporate Desk in India"
                  >
                    <Phone size={13} className="text-[var(--color-jv-orange)] shrink-0" />
                    <span>India: +91 99097 00606</span>
                  </a>

                  <a
                    href="tel:+447344556070"
                    className="px-3 py-2.5 rounded-xl bg-[#F8FAFC] hover:bg-[#FFF4ED] text-[#18191C] hover:text-[var(--color-jv-orange)] font-bold text-xs uppercase tracking-wider border border-[#CBD5E1] flex items-center justify-center gap-2 transition-all shadow-2xs"
                    title="Call Global B2B Desk in London / UK"
                  >
                    <Phone size={13} className="text-[var(--color-jv-orange)] shrink-0" />
                    <span>Global: +44 7344556070</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: 5-Service Interactive Growth Showcase Merged Directly into Hero (7 Cols) */}
            <div className="lg:col-span-7">
              <HeroServiceShowcase entity={entity} variant="hero" showSearchTags={false} />
            </div>

          </div>

          {/* Full-Width AI SEO Search Intent Tags across Hero Base */}
          <HeroSearchIntentTags entity={entity} />

        </div>
      </section>

      {/* 3.5. Verified Operational Metrics Strip (Full Width Below Hero) */}
      {landingData.stats && landingData.stats.length > 0 && (
        <VerifiedMetricsStrip
          stats={landingData.stats}
          entityName={entity.name}
          sectionTitle={entity.id === "jv-marketing-solutions-ltd-global" ? "Verified Global Infrastructure & Ad Metrics" : "Verified Operational Benchmarks"}
        />
      )}

      {/* 4. Decorative Value Pillars Section */}
      <ValuePillarsDecorative
        entity={entity}
        pillars={landingData.valuePillars}
        title="The 4 Pillars of J.V Marketing Solution"
        subtitle="Combining data science, artificial intelligence, and proprietary software integrations into an automated revenue system."
        proposalHref="#proposal-form"
      />

      {/* 4.5 Dedicated AI SEO & Generative Engine Optimization (GEO) Engine */}
      <AiSeoFeatureSection
        entity={entity}
        proposalHref="#proposal-form"
        aiSeoHref={`/companies/${entity.id}/ai-seo`}
      />

      {/* 5. Decorative Enterprise Revenue & Pipeline Simulator */}
      <EnterpriseRevenueSimulator entityId={entity.id} />

      {/* 5. 5-Division Core Services Spectrum Showcase */}
      <div id="services">
        <JvServicesGridSection entityId={entity.id} variant="home" />
      </div>

      {/* 6. Specialized Highlight: The AI Growth Engine Framework */}
      {landingData.specialFeature && (
        <SpecialFeatureDecorative
          entity={entity}
          feature={landingData.specialFeature}
          contactHref={`/companies/${entity.id}/contact`}
        />
      )}

      {/* 7. Retainers & Growth Sprints (Decorative with USA & Indian Dual Pricing) */}
      {companyExtraData?.packages && companyExtraData.packages.length > 0 && (
        <RetainersPricingDecorative
          entity={entity}
          packages={companyExtraData.packages}
          title="Retainers & Growth Sprints"
          subtitle="Predictable, milestone-driven commercial retainers tailored for North American, UK, and Pan-India enterprises."
          badge="TRANSPARENT COMMERCIAL DELIVERY"
          compareHref={`/companies/${entity.id}/packages`}
        />
      )}

      {/* 8. Verified Case Studies & Attributed Pipeline (Decorative Redesign) */}
      {companyExtraData?.caseStudies && companyExtraData.caseStudies.length > 0 && (
        <CaseStudiesDecorative
          entity={entity}
          caseStudies={companyExtraData.caseStudies}
          title="Real Case Studies & Attributed Pipeline"
          subtitle="Audited ROI metrics and verified commercial outcomes delivered across North America, the United Kingdom, and Pan-India."
          badge="PROVEN ENTERPRISE RESULTS"
          viewAllHref={`/companies/${entity.id}/case-studies`}
        />
      )}

      {/* 9. Competitive Advantage (Decorative Redesign on Pure White) */}
      {landingData?.whyChooseUs && landingData.whyChooseUs.length > 0 && (
        <CompetitiveAdvantageDecorative
          entity={entity}
          advantages={landingData.whyChooseUs}
          title="Why Global B2B Leaders Partner With J.V Marketing"
          subtitle="Combining specialized high-velocity growth execution with the financial strength, software IP, and engineering power of the JV Group ecosystem."
          badge="COMPETITIVE ADVANTAGE"
          contactHref={`/companies/${entity.id}/contact`}
        />
      )}

      {/* 10. 4-Stage Engagement Process (Redesigned with Case Studies Decorative Background) */}
      {landingData.processSteps && landingData.processSteps.length > 0 && (
        <EngagementProcessDecorative
          entity={entity}
          processSteps={landingData.processSteps}
          title="Our 4-Stage Engagement Process"
          subtitle="From full-funnel growth diagnostic to live campaign activation and boardroom scaling."
          badge="STRUCTURED METHODOLOGY"
          proposalHref="#proposal-form"
          packagesHref={`/companies/${entity.id}/packages`}
        />
      )}

      {/* 11. Frequently Asked Questions (Redesigned with Pure White Background) */}
      {landingData.faqs && landingData.faqs.length > 0 && (
        <FaqSectionDecorative
          entity={entity}
          faqs={landingData.faqs}
          title="Frequently Asked Questions"
          subtitle="Contracting, timezone alignment, and CRM integrations with J.V Marketing Solution."
          badge="DIRECT ANSWERS"
          contactHref="#proposal-form"
        />
      )}

      {/* 12. Dynamic RFP Form (Redesigned with Case Studies Decorative Background & Pure White Form Card) */}
      <section
        id="proposal-form"
        className="relative py-16 sm:py-24 bg-gradient-to-b from-[#FFFDFB] via-[#FFF8F2] to-white border-b border-[#E2E8F0] overflow-hidden"
      >
        {/* Decorative Blueprint Background Mesh & Ambient Glow Orbs (Matching Case Studies) */}
        <div className="absolute inset-0 white-grid-bg opacity-50 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-[var(--color-jv-orange)]/15 via-amber-400/10 to-transparent blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-gradient-to-tl from-[var(--color-jv-orange)]/15 via-purple-500/10 to-transparent blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-amber-500/5 via-[var(--color-jv-orange)]/8 to-transparent blur-[130px] rounded-full pointer-events-none" />


        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--color-jv-orange)]/35 bg-[#FFF4ED] shadow-xs mb-4">
              <Sparkles size={14} className="text-[var(--color-jv-orange)] animate-spin-slow" />
              <span className="text-[var(--color-jv-orange)] text-xs font-black tracking-widest uppercase font-mono">
                DIRECT DESK INQUIRIES
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping ml-0.5" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-heading font-black text-[#0F172A] tracking-tight leading-[1.12]">
              Request an Enterprise{" "}
              <span className="bg-gradient-to-r from-[var(--color-jv-orange)] via-[#ea580c] to-[#c2410c] bg-clip-text text-transparent">
                Growth Proposal.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 mt-3 max-w-xl mx-auto leading-relaxed font-normal">
              Our Senior Growth Directors in London and India review inquiries within 4 business hours.
            </p>

            {/* Quick Header SLA & Security Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mt-5">
              <div className="px-3 py-1 rounded-xl bg-white/90 border border-slate-200/80 shadow-xs flex items-center gap-1.5 text-xs font-bold text-slate-700">
                <Clock size={12} className="text-[var(--color-jv-orange)]" />
                <span>&lt; 4-Hour Response SLA</span>
              </div>
              <div className="px-3 py-1 rounded-xl bg-white/90 border border-slate-200/80 shadow-xs flex items-center gap-1.5 text-xs font-bold text-slate-700">
                <ShieldCheck size={13} className="text-emerald-600" />
                <span>Strict NDA Guaranteed</span>
              </div>
              <div className="px-3 py-1 rounded-xl bg-white/90 border border-slate-200/80 shadow-xs flex items-center gap-1.5 text-xs font-bold text-slate-700">
                <Globe2 size={12} className="text-[var(--color-jv-orange)]" />
                <span>UK, USA &amp; India Client Desks</span>
              </div>
            </div>
          </div>

          <DynamicInquiryForm
            defaultEntity={entity.id}
            entityName={entity.name}
            coreServices={entity.coreServices}
            phone={entity.phone}
            whatsappNumber={landingData.directDesk.whatsappNumber}
          />
        </div>
      </section>

      {/* 13. Dedicated Company Footer */}
      <CompanyFooter entity={entity} />
    </div>
  );
}
