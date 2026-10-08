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
  Ship,
  Plane,
  FileCheck,
  Truck,
  TrendingUp,
  HelpCircle,
  Package,
  FileText
} from "lucide-react";
import { BusinessEntity, JV_GROUP_META } from "@/data/businesses";
import { ENTITY_LANDING_DATA } from "@/data/entityLandingData";
import { COMPANY_WEBSITES_DATA } from "@/data/companyWebsitesData";
import CompanyHeader from "@/components/company/CompanyHeader";
import CompanyFooter from "@/components/company/CompanyFooter";
import DynamicInquiryForm from "./DynamicInquiryForm";
import EntityFaqAccordion from "./EntityFaqAccordion";
import HeroServiceShowcase, { HeroSearchIntentTags } from "@/components/company/HeroServiceShowcase";
import JvMarketingSolutionsLtdHero from "@/components/company/JvMarketingSolutionsLtdHero";
import AiSeoFeatureSection from "@/components/company/AiSeoFeatureSection";
import ValuePillarsDecorative from "@/components/company/ValuePillarsDecorative";
import SpecialFeatureDecorative from "@/components/company/SpecialFeatureDecorative";
import RetainersPricingDecorative from "@/components/company/RetainersPricingDecorative";
import CaseStudiesDecorative from "@/components/company/CaseStudiesDecorative";
import CompetitiveAdvantageDecorative from "@/components/company/CompetitiveAdvantageDecorative";
import EngagementProcessDecorative from "@/components/company/EngagementProcessDecorative";
import FaqSectionDecorative from "@/components/company/FaqSectionDecorative";
import VerifiedMetricsStrip from "@/components/company/VerifiedMetricsStrip";
import InteractiveCapabilityMatrix from "@/components/company/InteractiveCapabilityMatrix";
import CoreServicesShowcase from "@/components/company/CoreServicesShowcase";
import { ENTITY_HERO_SHOWCASE_DATA } from "@/data/entityHeroShowcaseData";

interface Props {
  entity: BusinessEntity;
}

export default function DedicatedCompanyWebsite({ entity }: Props) {
  const showcaseData = ENTITY_HERO_SHOWCASE_DATA[entity.id];
  const flagshipImage = showcaseData?.serviceImages[0];
  const landingData = ENTITY_LANDING_DATA[entity.id] || {
    tagline: entity.positioning,
    heroHeadline: entity.name,
    heroSubtitle: entity.overview,
    stats: [
      { value: "100%", label: "Operational Commitment", detail: "Dedicated Business Unit" },
      { value: "Global", label: "Priority Markets", detail: entity.marketFocus },
      { value: "SLA", label: "Backed Performance", detail: "JV Group Quality Standards" },
      { value: "24/7", label: "Executive Support", detail: "Dedicated Account Officers" }
    ],
    valuePillars: [
      { title: "Enterprise Execution", description: entity.overview, icon: "Sparkles" },
      { title: "Strategic Positioning", description: entity.strategicRole, icon: "Target" },
      { title: "Market Reach", description: entity.clientTargeting, icon: "Globe2" },
      { title: "Quality Assurance", description: "Backed by JV Group governance and SLA.", icon: "ShieldCheck" }
    ],
    whyChooseUs: [
      { title: "Direct Domain Authority", description: entity.fullNarrative, badge: "Authority" },
      { title: "JV Group Stability", description: "Consolidated billing and umbrella SLA backing.", badge: "Group Backed" },
      { title: "Dedicated Team", description: "Direct access to designated account directors.", badge: "Dedicated" },
      { title: "Proven Track Record", description: "Operating with unyielding commercial execution.", badge: "Reliability" }
    ],
    processSteps: [
      { step: "01", title: "Diagnostic Assessment", description: "Comprehensive needs and architecture assessment.", deliverable: "Project Scope" },
      { step: "02", title: "Strategic Blueprint", description: "Engineering the custom solution roadmap.", deliverable: "Action Plan" },
      { step: "03", title: "Production Execution", description: "Dedicated delivery by our specialist team.", deliverable: "Live Deployment" },
      { step: "04", title: "Governance & Review", description: "Continuous SLA maintenance and governance.", deliverable: "Monthly Reports" }
    ],
    targetIndustries: [
      { name: "Enterprise Corporations", desc: "Large-scale corporate business operations." },
      { name: "Small & Mid Enterprises", desc: "Growing regional and national businesses." },
      { name: "Global Trade Networks", desc: "Cross-border trade and commercial entities." },
      { name: "Institutional Partners", desc: "Academic and financial institutions." }
    ],
    specialFeature: {
      title: "Core Operational Competencies",
      subtitle: "Strategic Execution Blueprint",
      badge: "Capabilities",
      description: "Delivering unmatched commercial execution under the JV Group umbrella.",
      items: entity.coreServices.slice(0, 4).map((s) => ({
        title: s,
        description: `Dedicated professional service delivery for ${s}.`,
        tag: "Core Capability"
      }))
    },
    faqs: [
      {
        question: `How does contracting work with ${entity.name}?`,
        answer: `You can engage ${entity.name} directly or through a consolidated Master Services Agreement (MSA) with other JV Group companies.`
      },
      {
        question: "What is your typical project kickoff turnaround time?",
        answer: "Our executive desk acknowledges inquiries within 4 business hours and initiates project onboarding within 24 to 48 hours."
      }
    ],
    directDesk: {
      phone: entity.phone,
      phoneLabel: entity.phoneLabel,
      email: JV_GROUP_META.email,
      workingHours: "Monday – Saturday: 9:30 AM – 7:30 PM IST",
      officeLocation: "Corporate Hub, Ahmedabad & Gandhinagar Corridor, Gujarat, India",
      whatsappNumber: entity.phone.replace(/[^0-9]/g, "")
    }
  };

  const companyExtraData = COMPANY_WEBSITES_DATA[entity.id];

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2": return <Code2 size={20} className="text-[var(--color-jv-orange)]" />;
      case "Sparkles": return <Sparkles size={20} className="text-[var(--color-jv-orange)]" />;
      case "Cpu": return <Cpu size={20} className="text-[var(--color-jv-orange)]" />;
      case "MessageSquare": return <MessageSquare size={20} className="text-[var(--color-jv-orange)]" />;
      case "Globe2": return <Globe2 size={20} className="text-[var(--color-jv-orange)]" />;
      case "TrendingUp": return <TrendingUp size={20} className="text-[var(--color-jv-orange)]" />;
      case "Target": return <Target size={20} className="text-[var(--color-jv-orange)]" />;
      case "Layers": return <Layers size={20} className="text-[var(--color-jv-orange)]" />;
      case "BarChart3": return <BarChart3 size={20} className="text-[var(--color-jv-orange)]" />;
      case "Megaphone": return <Megaphone size={20} className="text-[var(--color-jv-orange)]" />;
      case "Smartphone": return <Smartphone size={20} className="text-[var(--color-jv-orange)]" />;
      case "Server": return <Server size={20} className="text-[var(--color-jv-orange)]" />;
      case "Ship": return <Ship size={20} className="text-[var(--color-jv-orange)]" />;
      case "Plane": return <Plane size={20} className="text-[var(--color-jv-orange)]" />;
      case "FileCheck": return <FileCheck size={20} className="text-[var(--color-jv-orange)]" />;
      case "Truck": return <Truck size={20} className="text-[var(--color-jv-orange)]" />;
      case "Building2": return <Building2 size={20} className="text-[var(--color-jv-orange)]" />;
      default: return <Sparkles size={20} className="text-[var(--color-jv-orange)]" />;
    }
  };

  const cleanPhone = entity.phone.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    `Hello ${entity.shortName}, I am inquiring via your website on jvgroupco.in.`
  )}`;

  return (
    <div id="top" className="w-full min-h-screen bg-white text-[#18191C] flex flex-col font-sans selection:bg-[var(--color-jv-orange)] selection:text-white">
      
      {/* 1. Dedicated Company Navigation Header */}
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

      {/* 3. Hero Section */}
      {entity.id === "jv-marketing-solutions-ltd-global" ? (
        <JvMarketingSolutionsLtdHero
          entity={entity}
          landingData={landingData}
          whatsappUrl={whatsappUrl}
        />
      ) : (
        <section className="relative pt-6 pb-14 sm:pt-10 sm:pb-20 bg-gradient-to-b from-[#FFFDFB] via-[#FFF9F5] to-white border-b border-[#E2E8F0] overflow-hidden">
          <div className="absolute inset-0 white-grid-bg opacity-40 pointer-events-none" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[var(--color-jv-orange)]/15 via-amber-400/10 to-transparent blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Content Area (7 Cols) */}
              <div className="lg:col-span-5 space-y-5">
                
                {/* Trust Badge Pill */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF4ED] border border-[var(--color-jv-orange)]/35 text-[var(--color-jv-orange)] text-xs font-black uppercase tracking-wider">
                    <Sparkles size={13} className="text-[var(--color-jv-orange)]" />
                    <span>{entity.categoryLabel}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-1" />
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#F1F5F9] text-[#2B2D31] border border-[#E2E8F0]">
                    {entity.badge}
                  </span>
                  <span className="text-xs text-[#64748B] flex items-center gap-1">
                    <Globe2 size={13} className="text-[var(--color-jv-orange)]" />
                    <span>Market: <strong>{entity.marketFocus}</strong></span>
                  </span>
                </div>

                {/* Bold Hero Headline */}
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-heading font-black text-[#0F172A] tracking-tight leading-[1.14]">
                    {landingData.heroHeadline}
                  </h1>
                  <p className="mt-3 text-base sm:text-lg font-bold text-[var(--color-jv-orange)] leading-snug">
                    "{landingData.tagline}"
                  </p>
                </div>

                {/* Deep Narrative Description */}
                <p className="text-[#334155] text-sm sm:text-base leading-relaxed font-normal">
                  {landingData.heroSubtitle}
                </p>

                {/* Action Buttons Hub */}
                <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-2">
                  <Link
                    href={`/companies/${entity.id}/contact`}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[var(--color-jv-orange)] to-[#c2410c] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[var(--color-jv-orange)]/30 hover:shadow-xl hover:-translate-y-0.5 transition-all text-center"
                  >
                    <span>Request Proposal / Consultation</span>
                    <ArrowRight size={15} />
                  </Link>

                  <a
                    href={`tel:${entity.phone}`}
                    className="w-full sm:w-auto px-4 sm:px-5 py-3.5 rounded-xl bg-[#F8FAFC] hover:bg-[#FFF4ED] text-[#18191C] hover:text-[var(--color-jv-orange)] font-bold text-xs uppercase tracking-wider border border-[#CBD5E1] flex items-center justify-center gap-2 transition-all text-center"
                  >
                    <Phone size={14} className="text-[var(--color-jv-orange)]" />
                    <span>Call Desk: {entity.phone}</span>
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-4 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-all text-center"
                  >
                    <MessageSquare size={14} />
                    <span>WhatsApp</span>
                  </a>

                  {entity.websiteUrl && (
                    <a
                      href={entity.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-4 py-3.5 rounded-xl bg-white hover:bg-[#F8FAFC] text-[#2B2D31] font-bold text-xs uppercase tracking-wider border border-[#CBD5E1] flex items-center justify-center gap-1.5 transition-all text-center"
                    >
                      <span>Visit Live Portal</span>
                      <ExternalLink size={13} className="text-[var(--color-jv-orange)]" />
                    </a>
                  )}
                </div>

                {/* Trust & Social Proof Strip */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                    <span>★★★★★</span>
                    <span className="text-xs font-black text-[#0F172A] ml-1">Verified Entity</span>
                  </div>
                  <span className="text-slate-300">•</span>
                  <span className="text-xs text-[#64748B] font-semibold">
                    Direct JV Group Subsidiary • Market: {entity.marketFocus}
                  </span>
                </div>

              </div>

              {/* Right Column: 5-Service Interactive Showcase Merged Directly into Hero (7 Cols) */}
              <div className="lg:col-span-7">
                <HeroServiceShowcase entity={entity} variant="hero" showSearchTags={false} />
              </div>

            </div>

            {/* Full-Width AI SEO Search Intent Tags across Hero Base */}
            <HeroSearchIntentTags entity={entity} />

          </div>
        </section>
      )}

      {/* 3.5. Verified Performance Metrics Strip (Full Width Below Hero) */}
      {landingData.stats && landingData.stats.length > 0 && (
        <VerifiedMetricsStrip
          stats={landingData.stats}
          entityName={entity.name}
          sectionTitle="Verified Performance & Operational Metrics"
        />
      )}

      {/* 4. Decorative Value Pillars Section */}
      <ValuePillarsDecorative
        entity={entity}
        pillars={landingData.valuePillars}
        title={`What Drives ${entity.name}`}
        subtitle="Our 4 operational pillars engineered to deliver concrete, measurable enterprise results."
        proposalHref={`/companies/${entity.id}/contact`}
      />

      {/* 4.5 Dedicated AI SEO & Generative Engine Optimization (GEO) Engine */}
      {entity.id === "jv-marketing-solutions-ltd-global" && (
        <AiSeoFeatureSection
          entity={entity}
          proposalHref={`/companies/${entity.id}/contact`}
          aiSeoHref={`/companies/${entity.id}/services`}
        />
      )}
      {/* Interactive Domain Capability Selector / Simulator */}
      {companyExtraData?.interactiveTool && (
        <InteractiveCapabilityMatrix
          entity={entity}
          tool={companyExtraData.interactiveTool}
          proposalHref={`/companies/${entity.id}/contact`}
        />
      )}


      {/* 5. Core Services Catalog Showcase */}
      <CoreServicesShowcase entity={entity} />

      {/* 6. Specialized Highlights & In-House Products */}
      {landingData.specialFeature && (
        <SpecialFeatureDecorative
          entity={entity}
          feature={landingData.specialFeature}
          contactHref={`/companies/${entity.id}/contact`}
        />
      )}

      {/* In-House SaaS Showcase (If Present) */}
      {entity.inHouseProducts && entity.inHouseProducts.length > 0 && (
        <section id="specialized" className="py-14 sm:py-20 bg-white border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-jv-orange)] block mb-1">
                Proprietary Software Assets
              </span>
              <h3 className="text-2xl font-heading font-black text-[#18191C]">
                {entity.inHouseProducts.length} Production SaaS Platforms Built &amp; Maintained by {entity.shortName}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {entity.inHouseProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[var(--color-jv-orange)] card-shadow-3d transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-[#FFF4ED] text-[var(--color-jv-orange)] block w-fit mb-3">
                      {prod.badge}
                    </span>
                    <h4 className="text-base font-heading font-black text-[#18191C] mb-2">
                      {prod.name}
                    </h4>
                    <p className="text-xs text-[#4E5058] line-clamp-4 leading-relaxed mb-4">
                      {prod.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E2E8F0]">
                    {prod.liveUrl ? (
                      <a
                        href={prod.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-bold text-[var(--color-jv-orange)] hover:underline flex items-center gap-1"
                      >
                        <span>Live Site</span>
                        <ExternalLink size={12} />
                      </a>
                    ) : (
                      <span className="text-[11px] font-bold text-[#64748B]">
                        Enterprise On-Prem / Cloud
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. Packages & Retainers Preview Section (Decorative with USA & Indian Dual Pricing) */}
      {companyExtraData?.packages && companyExtraData.packages.length > 0 && (
        <RetainersPricingDecorative
          entity={entity}
          packages={companyExtraData.packages}
          title="Packages & Engagement Models"
          subtitle={`Predictable, SLA-backed retainers and project scopes tailored for ${entity.marketFocus}.`}
          badge="STRUCTURED DELIVERY"
          compareHref={`/companies/${entity.id}/packages`}
        />
      )}

      {/* 8. Proven Case Studies Preview Section (Decorative Redesign) */}
      {companyExtraData?.caseStudies && companyExtraData.caseStudies.length > 0 && (
        <CaseStudiesDecorative
          entity={entity}
          caseStudies={companyExtraData.caseStudies}
          title={`Real Results Delivered by ${entity.shortName}`}
          subtitle={`Tangible performance metrics and attributed pipeline from recent engagements across ${entity.marketFocus}.`}
          badge="PROVEN TRACK RECORD"
          viewAllHref={`/companies/${entity.id}/case-studies`}
        />
      )}

      {/* 9. Why Choose Us / Advantage Section (Decorative Redesign on Pure White) */}
      {landingData?.whyChooseUs && landingData.whyChooseUs.length > 0 && (
        <CompetitiveAdvantageDecorative
          entity={entity}
          advantages={landingData.whyChooseUs}
          title={`Why Leading Clients Partner With ${entity.shortName}`}
          subtitle={`Combining specialized domain execution with the financial strength and governance of the JV Group ecosystem.`}
          badge="COMPETITIVE ADVANTAGE"
          contactHref={`/companies/${entity.id}/contact`}
        />
      )}

      {/* 10. 4-Stage Engagement Workflow (Redesigned with Case Studies Decorative Background) */}
      {landingData.processSteps && landingData.processSteps.length > 0 && (
        <EngagementProcessDecorative
          entity={entity}
          processSteps={landingData.processSteps}
          title="Our 4-Stage Engagement Process"
          subtitle="From diagnostic analysis to production delivery and ongoing SLA maintenance."
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
          subtitle={`Learn how contracting, onboarding, and SLA governance work with ${entity.shortName}.`}
          badge="DIRECT ANSWERS"
          contactHref="#proposal-form"
        />
      )}

      {/* 12. Dynamic RFP Form Section (Redesigned with Case Studies Decorative Background & Pure White Form Card) */}
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
              Request a Commercial Proposal from{" "}
              <span className="bg-gradient-to-r from-[var(--color-jv-orange)] via-[#ea580c] to-[#c2410c] bg-clip-text text-transparent">
                {entity.shortName}.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 mt-3 max-w-xl mx-auto leading-relaxed font-normal">
              Our executive desk reviews inquiries within 4 business hours and coordinates directly with designated leadership.
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
                <span>Executive Turnaround</span>
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
