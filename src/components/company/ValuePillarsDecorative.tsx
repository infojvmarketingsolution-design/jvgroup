"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Cpu,
  Target,
  Layers,
  BarChart3,
  Megaphone,
  Smartphone,
  Code2,
  Ship,
  Plane,
  Building2,
  Map,
  Cloud,
  Network,
  GraduationCap,
  Briefcase,
  Search,
  UserCheck,
  MessageSquare,
  Clock,
  ShieldCheck,
  FileCheck,
  Truck,
  Server,
  TrendingUp,
  Globe2,
  Zap,
  CheckCircle2,
  MapPin,
  Globe,
  ShieldAlert,
  Home,
  Wrench,
  FileText,
  PlaneTakeoff,
  Calendar,
  ChevronRight,
  Info,
  X,
  ExternalLink,
  Activity,
  Workflow,
  Check,
} from "lucide-react";
import type { BusinessEntity } from "@/data/businesses";

interface ValuePillarItem {
  title: string;
  description: string;
  icon: string;
}

interface ValuePillarsDecorativeProps {
  entity: BusinessEntity;
  pillars: ValuePillarItem[];
  title?: string;
  subtitle?: string;
  proposalHref?: string;
}

interface PillarExtra {
  category: string;
  deliverables: string[];
  benchmark: string;
  metricLabel: string;
  flywheelRole: string;
}

// Enterprise deliverables and benchmark metrics for specific entities
const CUSTOM_PILLAR_EXTRAS: Record<string, PillarExtra[]> = {
  "jv-marketing-solutions-ltd-global": [
    {
      category: "Cross-Border Media",
      deliverables: [
        "North America & Europe B2B Campaigns",
        "High-Ticket B2B Lead Acquisition",
        "Localized Multi-Currency Ad Spend",
      ],
      benchmark: "Pipeline: $10M+",
      metricLabel: "Pipeline Generated",
      flywheelRole: "Drives high-intent global corporate demand across 6+ ad networks.",
    },
    {
      category: "Enterprise Engineering",
      deliverables: [
        "Western Market B2B Web Applications",
        "iOS & Android Enterprise Platforms",
        "SOC2 & Stringent Security Compliance",
      ],
      benchmark: "Retention: 94%",
      metricLabel: "Contract Retention",
      flywheelRole: "Converts visitors with high-speed web apps and custom platforms.",
    },
    {
      category: "Cloud & Automations",
      deliverables: [
        "Cross-Timezone CRM Synchronization",
        "Omnichannel Outreach Infrastructure",
        "GDPR & Data Privacy Compliance",
      ],
      benchmark: "Latency: Real-Time",
      metricLabel: "Data Synchronization",
      flywheelRole: "Automates lead routing and ensures zero downtime across timezones.",
    },
    {
      category: "Global Governance & BI",
      deliverables: [
        "Consolidated Global Revenue BI",
        "Multi-Region Performance Dashboards",
        "Audited Enterprise Governance",
      ],
      benchmark: "SLA: 99.9% Uptime",
      metricLabel: "Guaranteed SLA",
      flywheelRole: "Attributes multi-touch revenue and refines global capital deployment.",
    },
  ],
  "jv-marketing-solution-pvt-ltd": [
    {
      category: "Algorithmic Media",
      deliverables: [
        "Predictive AI Bidding Models",
        "Multi-Platform Budget Allocation",
        "Zero Ad Spend Wastage",
      ],
      benchmark: "ROAS Lift: 4.2x Avg",
      metricLabel: "Return on Ad Spend",
      flywheelRole: "Maximizes ad spend efficiency with algorithmic targeting.",
    },
    {
      category: "Organic Growth & CRO",
      deliverables: [
        "Programmatic SEO & GEO Ready",
        "Conversion-Engine Landing Pages",
        "High-Intent Lead Qualification",
      ],
      benchmark: "Conversion: +68%",
      metricLabel: "Conversion Lift",
      flywheelRole: "Turns organic impressions into qualified sales opportunities.",
    },
    {
      category: "Automation & Data",
      deliverables: [
        "Sub-60s Direct CRM Webhooks",
        "WhatsApp Cloud API Pipelines",
        "ERP & Lead Intake Automation",
      ],
      benchmark: "Speed: < 60s",
      metricLabel: "Lead Routing Speed",
      flywheelRole: "Instantly connects leads to sales reps via automated webhooks.",
    },
    {
      category: "Executive Attribution",
      deliverables: [
        "Multi-Touch Attribution Modeling",
        "Live Executive KPI Dashboards",
        "Granular CAC-to-LTV Visibility",
      ],
      benchmark: "Accuracy: 99.8%",
      metricLabel: "Attribution Clarity",
      flywheelRole: "Provides real-time ROI transparency to reinvest capital smartly.",
    },
  ],
  "web-infotech": [
    {
      category: "Full-Stack Architecture",
      deliverables: [
        "Next.js & React Enterprise Platforms",
        "High-Throughput Cloud APIs",
        "Microservices & Serverless Scalability",
      ],
      benchmark: "Web Vitals: 95+",
      metricLabel: "Speed Benchmark",
      flywheelRole: "Delivers blazingly fast digital storefronts and corporate portals.",
    },
    {
      category: "Proprietary SaaS IP",
      deliverables: [
        "Wapipulse WhatsApp Cloud Suite",
        "Ticket4service Helpdesk Platform",
        "Education CRM & ERP Deployments",
      ],
      benchmark: "Deployments: 500+",
      metricLabel: "Active Deployments",
      flywheelRole: "Powers operations with battle-tested proprietary software.",
    },
    {
      category: "Mobile App Engineering",
      deliverables: [
        "Cross-Platform Flutter & React Native",
        "Native iOS & Android Performance",
        "App Store & Play Store Compliance",
      ],
      benchmark: "Crash-Free: 99.9%",
      metricLabel: "Mobile Stability",
      flywheelRole: "Engages users on mobile devices with intuitive, reliable apps.",
    },
    {
      category: "Enterprise DevOps",
      deliverables: [
        "Automated CI/CD Deployment Pipelines",
        "AWS, GCP & Cloudflare Infrastructure",
        "SOC2 & Zero-Trust Architecture",
      ],
      benchmark: "Deploy: On-Demand",
      metricLabel: "Release Velocity",
      flywheelRole: "Ensures high uptime, automated security, and instant scaling.",
    },
  ],
  "ahmedabad-marketing-solution": [
    {
      category: "Local Search Dominance",
      deliverables: [
        "Google Business Profile Optimization",
        "Local Citation & Reviews Engine",
        "High-Intent Commercial Keyword Targets",
      ],
      benchmark: "Top 3 Maps Rank",
      metricLabel: "Local Search Rank",
      flywheelRole: "Captures local buyers at the exact moment they search.",
    },
    {
      category: "Regional Content & Ads",
      deliverables: [
        "Bilingual Creative in Gujarati & Hindi",
        "High-CTR Meta & Instagram Video Ads",
        "Localized Cultural Campaign Copy",
      ],
      benchmark: "Lead Influx: 3.8x",
      metricLabel: "Lead Growth",
      flywheelRole: "Connects authentically with regional consumer behavior.",
    },
    {
      category: "Digital Business Core",
      deliverables: [
        "Corporate Webmail & Fast Hosting",
        "Conversion-Optimized Landing Pages",
        "SSL & Verified Security Standards",
      ],
      benchmark: "Uptime: 99.9%",
      metricLabel: "Reliability",
      flywheelRole: "Gives small & medium businesses an enterprise-grade web foundation.",
    },
    {
      category: "ROI Direct Management",
      deliverables: [
        "Zero-Waste SME Ad Budgets",
        "Weekly Transparent ROI Reporting",
        "Dedicated Local Account Manager",
      ],
      benchmark: "Spend Waste: 0%",
      metricLabel: "Efficiency",
      flywheelRole: "Guarantees direct commercial returns for local entrepreneurs.",
    },
  ],
};

export default function ValuePillarsDecorative({
  entity,
  pillars,
  title,
  subtitle,
  proposalHref = "#proposal-form",
}: ValuePillarsDecorativeProps) {
  const [selectedPillarId, setSelectedPillarId] = useState<number | "all">("all");
  const [modalPillarIndex, setModalPillarIndex] = useState<number | null>(null);
  const [hoveredFlywheelIndex, setHoveredFlywheelIndex] = useState<number | null>(null);

  const entityExtras = CUSTOM_PILLAR_EXTRAS[entity.id];

  // Helper to get pillar extras with smart fallbacks
  const getPillarExtra = (pIdx: number, pillar: ValuePillarItem): PillarExtra => {
    if (entityExtras?.[pIdx]) {
      return entityExtras[pIdx];
    }
    // Intelligent fallback based on pillar title
    const shortCat = pillar.title.split("&")[0].split("and")[0].trim();
    return {
      category: shortCat || `Core Pillar 0${pIdx + 1}`,
      deliverables: [
        "End-to-End Enterprise Execution Standard",
        "Guaranteed SLA & Rigorous Quality Audits",
        "Continuous Performance Optimization",
      ],
      benchmark: "Enterprise Verified",
      metricLabel: "Operational Standard",
      flywheelRole: "Operates as a core foundational component of the delivery system.",
    };
  };

  // Helper to parse title and extract optional parenthetical badge
  const parseHeading = (rawTitle?: string) => {
    if (!rawTitle) {
      return {
        main: `The 4 Pillars of ${entity.name}`,
        badge: null,
      };
    }
    const match = rawTitle.match(/^(.*?)\s*\((.*?)\)$/);
    if (match) {
      return {
        main: match[1].trim(),
        badge: match[2].trim(),
      };
    }
    return { main: rawTitle, badge: null };
  };

  const { main: headingTitle, badge: headingBadge } = parseHeading(title);

  const renderIcon = (iconName: string) => {
    const props = {
      size: 24,
      className: "text-[var(--color-jv-orange)] transition-transform duration-300 group-hover:scale-110",
    };
    switch (iconName) {
      case "Cpu":
        return <Cpu {...props} />;
      case "Target":
        return <Target {...props} />;
      case "Layers":
        return <Layers {...props} />;
      case "BarChart3":
        return <BarChart3 {...props} />;
      case "Megaphone":
        return <Megaphone {...props} />;
      case "Smartphone":
        return <Smartphone {...props} />;
      case "Code2":
        return <Code2 {...props} />;
      case "Ship":
        return <Ship {...props} />;
      case "Plane":
      case "PlaneTakeoff":
        return <Plane {...props} />;
      case "Building2":
      case "Home":
        return <Building2 {...props} />;
      case "Map":
      case "MapPin":
        return <MapPin {...props} />;
      case "Cloud":
        return <Cloud {...props} />;
      case "Network":
        return <Network {...props} />;
      case "GraduationCap":
        return <GraduationCap {...props} />;
      case "Briefcase":
        return <Briefcase {...props} />;
      case "Search":
        return <Search {...props} />;
      case "UserCheck":
        return <UserCheck {...props} />;
      case "MessageSquare":
        return <MessageSquare {...props} />;
      case "Clock":
      case "Calendar":
        return <Clock {...props} />;
      case "ShieldCheck":
      case "ShieldAlert":
        return <ShieldCheck {...props} />;
      case "FileCheck":
      case "FileText":
        return <FileCheck {...props} />;
      case "Truck":
        return <Truck {...props} />;
      case "Server":
        return <Server {...props} />;
      case "TrendingUp":
        return <TrendingUp {...props} />;
      case "Globe2":
      case "Globe":
        return <Globe2 {...props} />;
      case "Wrench":
        return <Wrench {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  // Flywheel steps
  const flywheelPillars = pillars.slice(0, 4);

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-[#FFFDFB] via-[#FFF9F5] to-white border-b border-slate-200/90 overflow-hidden">
      {/* Decorative Background Lighting */}
      <div className="absolute inset-0 white-grid-bg opacity-40 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-[550px] h-[550px] bg-gradient-to-br from-[var(--color-jv-orange)]/10 via-amber-400/5 to-transparent blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[550px] h-[550px] bg-gradient-to-tl from-[var(--color-jv-orange)]/10 via-amber-300/5 to-transparent blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Header Block: Clean, Executive, User-Friendly */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-3xl">
            {/* Top Value Proposition Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200 bg-orange-50/80 shadow-2xs mb-4">
              <Sparkles size={14} className="text-[var(--color-jv-orange)]" />
              <span className="text-[var(--color-jv-orange)] text-xs font-bold uppercase tracking-wider">
                Core Value Proposition
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </div>

            {/* Main Headline with Clean Badge */}
            <div className="flex flex-wrap items-baseline gap-2.5">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-black text-slate-900 tracking-tight leading-[1.18]">
                {headingTitle}
              </h2>
              {headingBadge && (
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs sm:text-sm font-bold text-slate-700 tracking-wide">
                  {headingBadge}
                </span>
              )}
            </div>

            {/* Subtitle */}
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
              {subtitle ||
                "Combining data science, artificial intelligence, and proprietary software integrations into an automated revenue system."}
            </p>
          </div>

          {/* Right-Side Trust & Assurance Pills */}
          <div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-2.5 shrink-0">
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-2xs">
              <ShieldCheck size={16} className="text-emerald-600 shrink-0" />
              <span className="text-xs font-bold text-slate-900">100% In-House Delivery</span>
              <span className="text-slate-300">•</span>
              <span className="text-xs font-semibold text-slate-500">Zero Outsourcing</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-orange-50 border border-orange-200/80 text-orange-950 shadow-2xs">
              <Zap size={15} className="text-[var(--color-jv-orange)] shrink-0" />
              <span className="text-xs font-bold tracking-wide">
                Proprietary IP &amp; Automation
              </span>
            </div>
          </div>
        </div>

        {/* 2. Interactive Pillar Switcher / Quick Navigation Tabs */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-8 pb-3 border-b border-slate-200/70">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full scrollbar-none">
            <button
              type="button"
              onClick={() => setSelectedPillarId("all")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                selectedPillarId === "all"
                  ? "bg-slate-900 text-white shadow-sm ring-1 ring-slate-900"
                  : "bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-slate-200"
              }`}
            >
              <Sparkles size={13} className={selectedPillarId === "all" ? "text-amber-300" : "text-slate-400"} />
              <span>All 4 Pillars</span>
            </button>

            {pillars.map((pillar, idx) => {
              const extra = getPillarExtra(idx, pillar);
              const isSelected = selectedPillarId === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedPillarId(isSelected ? "all" : idx)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-[var(--color-jv-orange)] text-white shadow-sm ring-1 ring-[var(--color-jv-orange)]"
                      : "bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-slate-200"
                  }`}
                >
                  <span className={`text-[11px] font-mono px-1 rounded ${isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"}`}>
                    0{idx + 1}
                  </span>
                  <span>{extra.category}</span>
                </button>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs text-slate-500">
            <Info size={13} className="text-slate-400" />
            <span>Click any pillar card to view complete technical scope</span>
          </div>
        </div>

        {/* 3. 4 Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, pIdx) => {
            const extra = getPillarExtra(pIdx, pillar);
            const pillarIndexString = `0${pIdx + 1}`;
            const isTabSelected = selectedPillarId === pIdx;
            const isDimmed = selectedPillarId !== "all" && !isTabSelected;

            return (
              <div
                key={pIdx}
                className={`group relative bg-white rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between ${
                  isTabSelected
                    ? "border-[var(--color-jv-orange)] ring-2 ring-[var(--color-jv-orange)]/25 shadow-xl -translate-y-1 bg-gradient-to-b from-orange-50/30 to-white"
                    : isDimmed
                    ? "border-slate-200/60 opacity-60 hover:opacity-100 hover:border-orange-300 shadow-sm"
                    : "border-slate-200 hover:border-orange-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
                }`}
              >
                {/* Top Subtle Orange Highlight Line */}
                <div
                  className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[var(--color-jv-orange)] via-amber-400 to-[#ea580c] transition-all duration-300 ${
                    isTabSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                />

                {/* Card Top Section */}
                <div>
                  {/* Category Pill + Step Pill */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-orange-50 text-[var(--color-jv-orange)] font-bold text-xs border border-orange-200/70">
                      {extra.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Pillar {pillarIndexString}
                    </span>
                  </div>

                  {/* Icon Container */}
                  <div className="my-3 w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-50 via-white to-orange-100/60 border border-orange-200/70 flex items-center justify-center text-[var(--color-jv-orange)] shadow-2xs group-hover:scale-105 transition-transform duration-300">
                    {renderIcon(pillar.icon)}
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-heading font-black text-slate-900 group-hover:text-[var(--color-jv-orange)] transition-colors leading-snug min-h-[3rem] line-clamp-2">
                    {pillar.title}
                  </h3>

                  {/* Narrative Description */}
                  <p className="mt-2 text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal min-h-[3.6rem]">
                    {pillar.description}
                  </p>

                  {/* Deliverables Checklist (Clean & Readable) */}
                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-2.5">
                    <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      <span>Key Deliverables</span>
                      <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md text-[10px] font-semibold flex items-center gap-1 border border-emerald-200/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Active
                      </span>
                    </div>
                    {extra.deliverables.map((item, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-start gap-2 text-xs font-semibold text-slate-700 leading-snug"
                      >
                        <CheckCircle2
                          size={14}
                          className="text-emerald-600 shrink-0 mt-0.5"
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom Section */}
                <div className="mt-5 pt-4 border-t border-slate-100 space-y-3">
                  {/* Verified Result Callout Box */}
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {extra.metricLabel}
                      </span>
                      <span className="block text-xs font-black text-slate-900 truncate">
                        {extra.benchmark}
                      </span>
                    </div>
                    <div className="w-7 h-7 rounded-lg bg-orange-50 border border-orange-200/60 flex items-center justify-center text-[var(--color-jv-orange)] shrink-0">
                      <TrendingUp size={14} />
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setModalPillarIndex(pIdx)}
                      className="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1 cursor-pointer py-1"
                    >
                      <span>View Scope</span>
                      <ChevronRight size={13} />
                    </button>
                    <a
                      href={proposalHref}
                      className="px-3 py-1.5 rounded-xl bg-[var(--color-jv-orange)] hover:bg-[#ea580c] text-white text-xs font-bold transition-all flex items-center gap-1 shadow-2xs hover:shadow-sm"
                    >
                      <span>Inquire</span>
                      <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4. Unified Flywheel Architecture Banner (Visual, Intuitive & User-Friendly) */}
        <div className="mt-12 sm:mt-16 rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-800 relative overflow-hidden">
          {/* Top orange gradient hairline */}
          <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--color-jv-orange)] to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(243,99,35,0.14),transparent_50%)] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
                <Workflow size={13} className="text-[var(--color-jv-orange)]" />
                <span>Unified Flywheel Architecture</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>

              <h3 className="text-xl sm:text-2xl font-heading font-black text-white">
                How Our 4 Pillars Work Together to Multiply Your Results
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Instead of disjointed vendors, all 4 pillars operate concurrently in a continuous optimization loop — data from media buying feeds application design, automated CRM pipelines sync conversions in real-time, and executive attribution refines ad spend.
              </p>

              {/* Visual 4-Step Interactive Loop */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {flywheelPillars.map((p, idx) => {
                  const extra = getPillarExtra(idx, p);
                  const isHovered = hoveredFlywheelIndex === idx;

                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => setHoveredFlywheelIndex(idx)}
                      onMouseLeave={() => setHoveredFlywheelIndex(null)}
                      className={`p-3 rounded-2xl border transition-all cursor-default ${
                        isHovered
                          ? "bg-white/15 border-[var(--color-jv-orange)] scale-[1.02]"
                          : "bg-white/5 border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-mono font-bold text-orange-400">
                          Step 0{idx + 1}
                        </span>
                        {idx < 3 && (
                          <ArrowRight size={10} className="text-slate-400 hidden sm:inline" />
                        )}
                      </div>
                      <span className="block text-xs font-bold text-white truncate">
                        {extra.category}
                      </span>
                      <span className="block text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                        {extra.benchmark}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Flywheel Active Insight */}
              {hoveredFlywheelIndex !== null && (
                <div className="mt-3 p-3 rounded-xl bg-orange-950/40 border border-orange-500/30 text-xs text-orange-200 flex items-center gap-2">
                  <Activity size={14} className="text-[var(--color-jv-orange)] shrink-0" />
                  <span>
                    <strong>Pillar 0{hoveredFlywheelIndex + 1} Role:</strong>{" "}
                    {getPillarExtra(hoveredFlywheelIndex, flywheelPillars[hoveredFlywheelIndex]).flywheelRole}
                  </span>
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 lg:w-64">
              <a
                href={proposalHref}
                className="w-full px-5 py-3.5 rounded-xl bg-[var(--color-jv-orange)] hover:bg-[#ea580c] text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-orange-900/30 transition-all hover:scale-[1.02] text-center cursor-pointer"
              >
                <span>Book Technical Discovery</span>
                <ArrowRight size={15} />
              </a>
              <Link
                href={`/companies/${entity.id}/services`}
                className="w-full px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 font-bold text-xs flex items-center justify-center gap-1.5 border border-white/15 transition-all text-center cursor-pointer"
              >
                <span>Explore All Services</span>
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* 5. User-Friendly Quick-Scope Details Modal */}
      {modalPillarIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setModalPillarIndex(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>

            {/* Modal Header */}
            {(() => {
              const p = pillars[modalPillarIndex];
              const extra = getPillarExtra(modalPillarIndex, p);
              return (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-jv-orange)] bg-orange-50 px-2.5 py-1 rounded-lg border border-orange-200/60">
                      {extra.category}
                    </span>
                    <span className="text-xs font-bold text-slate-400">
                      Pillar 0{modalPillarIndex + 1}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-heading font-black text-slate-900 mt-2">
                    {p.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {p.description}
                  </p>

                  {/* Benchmark Highlight */}
                  <div className="mt-5 p-4 rounded-2xl bg-orange-50/70 border border-orange-200/80 flex items-center justify-between">
                    <div>
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-orange-950/70">
                        {extra.metricLabel}
                      </span>
                      <span className="block text-base font-black text-orange-950">
                        {extra.benchmark}
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-white border border-orange-200 flex items-center justify-center text-[var(--color-jv-orange)] shadow-2xs">
                      <TrendingUp size={20} />
                    </div>
                  </div>

                  {/* Detailed Deliverables */}
                  <div className="mt-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Included Deliverables &amp; Technical Scope:
                    </h4>
                    <div className="space-y-2.5">
                      {extra.deliverables.map((del, dIdx) => (
                        <div
                          key={dIdx}
                          className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-800"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-emerald-600 shrink-0 mt-0.5"
                          />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Flywheel Synergy Role */}
                  <div className="mt-5 p-3 rounded-xl bg-slate-100/80 text-xs text-slate-600 flex items-center gap-2">
                    <Workflow size={15} className="text-slate-500 shrink-0" />
                    <span>
                      <strong>Synergy Impact:</strong> {extra.flywheelRole}
                    </span>
                  </div>

                  {/* Modal CTA */}
                  <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setModalPillarIndex(null)}
                      className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                      Close
                    </button>
                    <a
                      href={proposalHref}
                      className="px-5 py-2.5 rounded-xl bg-[var(--color-jv-orange)] hover:bg-[#ea580c] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all"
                    >
                      <span>Inquire on This Pillar</span>
                      <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </section>
  );
}
