"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ChevronRight,
  Cpu,
  Rocket,
  TrendingUp,
  Search,
  FileCheck,
  Check,
  Zap,
  BarChart3,
  Layers,
  Calendar,
  Lock,
} from "lucide-react";
import type { BusinessEntity } from "@/data/businesses";
import type { EntityProcessStep } from "@/data/entityLandingData";

interface EngagementProcessDecorativeProps {
  entity: BusinessEntity;
  processSteps: EntityProcessStep[];
  title?: string;
  subtitle?: string;
  badge?: string;
  proposalHref?: string;
  packagesHref?: string;
}

// Stage enrichment details tailored for specific entities with universal fallback
interface StageDetail {
  timeframe: string;
  categoryTag: string;
  checkpoints: string[];
  tools: string[];
  sla: string;
  iconType: "search" | "cpu" | "rocket" | "trending";
}

const ENTITY_STAGE_DETAILS: Record<string, StageDetail[]> = {
  "jv-marketing-solution-pvt-ltd": [
    {
      timeframe: "Days 1–7",
      categoryTag: "DIAGNOSTIC & AUDIT",
      checkpoints: [
        "Forensic ad account, CPA & historical ROAS audit",
        "Full-funnel leakage & customer friction mapping",
        "Unit economics & CAC-to-LTV benchmark model",
      ],
      tools: ["Meta CAPI", "GA4", "Search Console", "Hotjar"],
      sla: "Delivered in 5 Business Days",
      iconType: "search",
    },
    {
      timeframe: "Days 8–14",
      categoryTag: "TRACKING & DATA INFRA",
      checkpoints: [
        "Server-side tracking (Meta CAPI & GA4 server container)",
        "Bi-directional CRM webhook synchronization (< 60s)",
        "Multi-touch revenue attribution tag verification",
      ],
      tools: ["Cloudflare", "HubSpot / Salesforce", "Wapipulse API", "Zapier"],
      sla: "Zero Data-Loss Verification",
      iconType: "cpu",
    },
    {
      timeframe: "Days 15–21",
      categoryTag: "CREATIVE & GO-LIVE",
      checkpoints: [
        "High-intent ad creative angles & conversion hooks",
        "Speed-optimized custom landing page deployment",
        "Algorithmic predictive AI bidding campaigns launch",
      ],
      tools: ["Next.js Engines", "Figma", "Google AI Bidding", "LinkedIn Ads"],
      sla: "Live Market Activation",
      iconType: "rocket",
    },
    {
      timeframe: "Day 22+ Ongoing",
      categoryTag: "CRO & PIPELINE SCALE",
      checkpoints: [
        "Weekly multivariate creative, copy & funnel testing",
        "Systematic ad spend budget ramp on winning ad sets",
        "Executive boardroom telemetry & CAC/LTV dashboards",
      ],
      tools: ["Looker Studio", "Triple Whale", "Executive KPI Deck", "Slack Desk"],
      sla: "Weekly Sprint Delivery",
      iconType: "trending",
    },
  ],
  "jv-marketing-solutions-ltd-global": [
    {
      timeframe: "Days 1–7",
      categoryTag: "GLOBAL AUDIT",
      checkpoints: [
        "Cross-border territory & regulatory advertising audit",
        "Multi-currency CPA & international buyer intent analysis",
        "Multi-region baseline attribution mapping (US • UK • IN)",
      ],
      tools: ["Meta CAPI", "GA4 Global", "SEMrush", "Hotjar"],
      sla: "Delivered in 5 Business Days",
      iconType: "search",
    },
    {
      timeframe: "Days 8–14",
      categoryTag: "INTERNATIONAL INFRA",
      checkpoints: [
        "GDPR & CCPA-compliant server-side event tracking",
        "Global CRM routing with timezone-based lead handoffs",
        "Multi-currency conversion tag & revenue attribution",
      ],
      tools: ["Cloudflare Workers", "Salesforce", "Wapipulse", "GA4"],
      sla: "Global Compliance Certified",
      iconType: "cpu",
    },
    {
      timeframe: "Days 15–21",
      categoryTag: "MARKET ACTIVATION",
      checkpoints: [
        "Localized creative adaptation for US & UK audiences",
        "Geo-targeted landing funnels with local phone proof",
        "Algorithmic media deployment across Search & Social",
      ],
      tools: ["Next.js", "Google Ads", "LinkedIn B2B", "Meta Ads"],
      sla: "Live Multi-Market Activation",
      iconType: "rocket",
    },
    {
      timeframe: "Day 22+ Ongoing",
      categoryTag: "GLOBAL SCALE & CRO",
      checkpoints: [
        "Weekly cross-border multivariate split tests",
        "Dynamic currency ad spend optimization",
        "Boardroom executive growth reporting & CAC control",
      ],
      tools: ["Looker Studio", "Executive Deck", "Dedicated Slack"],
      sla: "Weekly Enterprise Sprints",
      iconType: "trending",
    },
  ],
};

export default function EngagementProcessDecorative({
  entity,
  processSteps,
  title = "Our 4-Stage Engagement Process",
  subtitle = "From full-funnel growth diagnostic to live campaign activation and boardroom scaling.",
  badge = "STRUCTURED METHODOLOGY",
  proposalHref,
  packagesHref,
}: EngagementProcessDecorativeProps) {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);
  const [showDeepDive, setShowDeepDive] = useState<boolean>(false);

  const fallbackStages: StageDetail[] = [
    {
      timeframe: "Days 1–7",
      categoryTag: "AUDIT & DISCOVERY",
      checkpoints: [
        "Comprehensive operational audit and gap identification",
        "Process bottleneck mapping & technical architecture review",
        "Executive milestone & deliverable alignment roadmap",
      ],
      tools: ["Discovery Matrix", "Technical Audit", "Architecture Deck"],
      sla: "Delivered in 5 Business Days",
      iconType: "search",
    },
    {
      timeframe: "Days 8–14",
      categoryTag: "INFRASTRUCTURE & SETUP",
      checkpoints: [
        "Hardened infrastructure deployment and API integrations",
        "SLA monitoring, webhook pipeline & security verification",
        "Staging environment testing and end-to-end dry runs",
      ],
      tools: ["Cloud Engine", "Webhook Pipeline", "Security Gateway"],
      sla: "Zero-Downtime Guarantee",
      iconType: "cpu",
    },
    {
      timeframe: "Days 15–21",
      categoryTag: "DEPLOYMENT & ACTIVATION",
      checkpoints: [
        "Live deployment of verified deliverables and workflows",
        "Real-time telemetric monitoring & conversion validation",
        "Stakeholder training and operational handover",
      ],
      tools: ["Production Stack", "Analytics Engine", "Active Workflows"],
      sla: "Production Activation",
      iconType: "rocket",
    },
    {
      timeframe: "Day 22+ Ongoing",
      categoryTag: "OPTIMIZATION & SCALING",
      checkpoints: [
        "Continuous performance monitoring & weekly optimizations",
        "Iterative scaling of high-performing assets and services",
        "Executive SLA reporting & dedicated account director",
      ],
      tools: ["Executive Dashboard", "SLA Reports", "Dedicated Desk"],
      sla: "Ongoing SLA Warranty",
      iconType: "trending",
    },
  ];

  const enrichedStages = ENTITY_STAGE_DETAILS[entity.id] || fallbackStages;

  const targetProposalHref = proposalHref || `#proposal-form`;
  const targetPackagesHref =
    packagesHref || `/companies/${entity.id}/packages`;

  const getStageIcon = (type: string, idx: number) => {
    switch (type) {
      case "search":
        return <Search className="w-5 h-5 text-[var(--color-jv-orange)]" />;
      case "cpu":
        return <Cpu className="w-5 h-5 text-[var(--color-jv-orange)]" />;
      case "rocket":
        return <Rocket className="w-5 h-5 text-[var(--color-jv-orange)]" />;
      case "trending":
        return <TrendingUp className="w-5 h-5 text-[var(--color-jv-orange)]" />;
      default:
        return idx === 0 ? (
          <Search className="w-5 h-5 text-[var(--color-jv-orange)]" />
        ) : idx === 1 ? (
          <Cpu className="w-5 h-5 text-[var(--color-jv-orange)]" />
        ) : idx === 2 ? (
          <Rocket className="w-5 h-5 text-[var(--color-jv-orange)]" />
        ) : (
          <TrendingUp className="w-5 h-5 text-[var(--color-jv-orange)]" />
        );
    }
  };

  return (
    <section
      id="engagement-process"
      className="relative py-16 sm:py-24 bg-gradient-to-b from-[#FFFDFB] via-[#FFF8F2] to-white border-b border-[#E2E8F0] overflow-hidden"
    >
      {/* Decorative Blueprint Background Mesh & Ambient Glow Orbs (Exact Match to Case Studies) */}
      <div className="absolute inset-0 white-grid-bg opacity-50 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-[var(--color-jv-orange)]/15 via-amber-400/10 to-transparent blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-gradient-to-tl from-[var(--color-jv-orange)]/15 via-purple-500/10 to-transparent blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-amber-500/5 via-[var(--color-jv-orange)]/8 to-transparent blur-[130px] rounded-full pointer-events-none" />


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--color-jv-orange)]/35 bg-[#FFF4ED] shadow-xs mb-4">
              <Sparkles
                size={14}
                className="text-[var(--color-jv-orange)] animate-spin-slow"
              />
              <span className="text-[var(--color-jv-orange)] text-xs font-black tracking-widest uppercase font-mono">
                {badge}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping ml-0.5" />
            </div>

            {/* Impressive Bold Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-heading font-black text-[#0F172A] tracking-tight leading-[1.12]">
              Our 4-Stage{" "}
              <span className="bg-gradient-to-r from-[var(--color-jv-orange)] via-[#ea580c] to-[#c2410c] bg-clip-text text-transparent">
                Engagement Process.
              </span>
            </h2>

            {/* Narrative Subtitle */}
            <p className="mt-3 text-sm sm:text-base text-[#475569] leading-relaxed max-w-2xl font-normal">
              {subtitle}
            </p>
          </div>

          {/* Quick Header Metric Badges */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <div className="px-3 py-1.5 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-2 text-xs font-bold text-slate-700">
              <Clock size={13} className="text-[var(--color-jv-orange)]" />
              <span>30-Day Go-Live Sprint</span>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-2 text-xs font-bold text-slate-700">
              <ShieldCheck size={14} className="text-emerald-600" />
              <span>Milestone SLA Sign-off</span>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-2 text-xs font-bold text-slate-700">
              <BarChart3 size={13} className="text-[var(--color-jv-orange)]" />
              <span>Weekly Boardroom Reports</span>
            </div>
          </div>
        </div>

        {/* Visual Milestone Pipeline Connector Bar (Desktop Flow) */}
        <div className="hidden lg:block mb-8 bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-2xl p-4 shadow-xs">
          <div className="grid grid-cols-4 relative items-center">
            {/* Connecting Track Line */}
            <div className="absolute top-1/2 left-[12%] right-[12%] -translate-y-1/2 h-0.5 bg-gradient-to-r from-[var(--color-jv-orange)]/30 via-[var(--color-jv-orange)]/60 to-[var(--color-jv-orange)]/30 z-0" />

            {processSteps.map((step, idx) => {
              const meta = enrichedStages[idx] || fallbackStages[idx];
              const isSelected = activeStepIdx === idx;

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveStepIdx(idx)}
                  className={`relative z-10 flex items-center justify-center gap-3 px-3 py-2 rounded-xl transition-all duration-300 text-left ${
                    isSelected
                      ? "bg-[#FFF4ED] border border-[var(--color-jv-orange)]/40 shadow-xs"
                      : "hover:bg-slate-50 border border-transparent"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full font-mono text-xs font-black flex items-center justify-center transition-all ${
                      isSelected
                        ? "bg-[var(--color-jv-orange)] text-white shadow-md scale-110"
                        : "bg-white text-slate-600 border border-slate-200"
                    }`}
                  >
                    0{idx + 1}
                  </div>
                  <div>
                    <div className="text-[10px] font-mono font-bold tracking-wider uppercase text-[var(--color-jv-orange)]">
                      {meta?.timeframe || `Phase ${idx + 1}`}
                    </div>
                    <div className="text-xs font-bold text-slate-900 truncate max-w-[170px]">
                      {step.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Redesigned 4-Stage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, idx) => {
            const meta = enrichedStages[idx] || fallbackStages[idx];
            const isSelected = activeStepIdx === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveStepIdx(idx)}
                className={`group relative bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer ${
                  isSelected
                    ? "border-[var(--color-jv-orange)]/70 shadow-[0_20px_45px_rgba(243,99,35,0.14)] -translate-y-2 ring-1 ring-[var(--color-jv-orange)]/25"
                    : "border-slate-200/90 hover:border-[var(--color-jv-orange)]/50 card-shadow-3d hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(243,99,35,0.09)]"
                }`}
              >
                {/* Glowing Top Gradient Edge */}
                <div
                  className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[var(--color-jv-orange)] via-amber-400 to-[var(--color-jv-orange)] transition-opacity duration-300 ${
                    isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                />

                {/* Big Futuristic Background Step Watermark */}
                <span className="absolute -bottom-3 -right-2 text-7xl font-mono font-black text-slate-100/70 group-hover:text-orange-100/50 transition-colors select-none pointer-events-none">
                  0{idx + 1}
                </span>

                <div>
                  {/* Top Card Navigation Row */}
                  <div className="flex items-center justify-between mb-4">
                    {/* Stage Custom Icon */}
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FFF4ED] to-amber-50 border border-[var(--color-jv-orange)]/30 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                      {getStageIcon(meta?.iconType || "", idx)}
                    </div>

                    {/* Phase & Step Pill */}
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200/60 group-hover:bg-[#FFF4ED] group-hover:text-[var(--color-jv-orange)] group-hover:border-[var(--color-jv-orange)]/30 transition-colors">
                        Phase {idx + 1}
                      </span>
                      <span className="w-7 h-7 rounded-lg bg-[#FFF4ED] border border-[var(--color-jv-orange)]/30 text-[var(--color-jv-orange)] font-mono font-black text-xs flex items-center justify-center">
                        {step.step || `0${idx + 1}`}
                      </span>
                    </div>
                  </div>

                  {/* Stage Category & Sprint Window */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-[var(--color-jv-orange)]">
                      {meta?.categoryTag || `PHASE 0${idx + 1}`}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1">
                      <Clock size={11} className="text-slate-400" />
                      {meta?.timeframe || `Sprint ${idx + 1}`}
                    </span>
                  </div>

                  {/* Stage Headline */}
                  <h3 className="text-lg font-heading font-black text-[#0F172A] group-hover:text-[var(--color-jv-orange)] transition-colors mb-2.5 leading-snug">
                    {step.title}
                  </h3>

                  {/* Narrative Body */}
                  <p className="text-xs text-[#475569] leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Execution Checkpoints / Micro-deliverables */}
                  <div className="space-y-2 mb-4 bg-slate-50/70 rounded-2xl p-3 border border-slate-100 group-hover:border-orange-100/60 transition-colors">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-1">
                      <Zap size={11} className="text-[var(--color-jv-orange)]" />
                      Key Milestones
                    </div>
                    {(meta?.checkpoints || [
                      "Forensic audit and baseline data capture",
                      "Operational alignment with executive stakeholders",
                      "Formal deliverable validation and sign-off",
                    ]).map((cp, cIdx) => (
                      <div
                        key={cIdx}
                        className="flex items-start gap-2 text-[11px] text-slate-700 leading-snug"
                      >
                        <CheckCircle2
                          size={13}
                          className="text-emerald-500 shrink-0 mt-0.5"
                        />
                        <span>{cp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Deliverable Highlight Box */}
                <div className="pt-3 border-t border-slate-200/80">
                  <div className="flex items-center justify-between text-[10px] font-mono font-bold tracking-wider uppercase text-slate-500 mb-1.5">
                    <span className="flex items-center gap-1 text-[var(--color-jv-orange)]">
                      <FileCheck size={13} />
                      Deliverable Milestone
                    </span>
                    <span className="text-emerald-600 font-semibold flex items-center gap-0.5">
                      <Check size={11} /> SLA Sign-off
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 group-hover:border-[var(--color-jv-orange)]/40 shadow-2xs transition-colors">
                    <p className="text-xs font-bold text-slate-900 leading-snug">
                      {step.deliverable}
                    </p>
                    <div className="mt-1 text-[10px] text-slate-400 font-mono">
                      {meta?.sla || "Audited & Verified"}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Optional Expandable Deep-Dive Breakdown Panel */}
        <div className="mt-8">
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => setShowDeepDive(!showDeepDive)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200/90 hover:border-[var(--color-jv-orange)]/50 text-xs font-bold text-slate-700 hover:text-[var(--color-jv-orange)] shadow-xs transition-all"
            >
              <Layers size={14} className="text-[var(--color-jv-orange)]" />
              <span>
                {showDeepDive
                  ? "Hide Sprint Architecture Details"
                  : "View Sprint Architecture Details & SLA Matrix"}
              </span>
              <ChevronRight
                size={14}
                className={`transition-transform duration-200 ${
                  showDeepDive ? "rotate-90" : ""
                }`}
              />
            </button>
          </div>

          {showDeepDive && (
            <div className="mt-6 p-6 sm:p-8 rounded-3xl bg-white/95 border border-[var(--color-jv-orange)]/30 card-shadow-3d backdrop-blur-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 mb-6">
                <div>
                  <div className="text-xs font-mono font-bold text-[var(--color-jv-orange)] uppercase tracking-wider mb-1">
                    Operational Blueprint • Phase 0{activeStepIdx + 1} Active Focus
                  </div>
                  <h4 className="text-lg font-heading font-black text-slate-900">
                    {processSteps[activeStepIdx]?.title}
                  </h4>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">
                    {enrichedStages[activeStepIdx]?.sla}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-xs font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                    <Calendar size={14} className="text-[var(--color-jv-orange)]" />
                    Sprint Window & Timing
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Estimated Execution:{" "}
                    <strong className="text-slate-800">
                      {enrichedStages[activeStepIdx]?.timeframe}
                    </strong>
                    . Weekly client sync required: 45–60 minutes for alignment
                    and milestone sign-off.
                  </p>
                </div>

                <div>
                  <div className="text-xs font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                    <Cpu size={14} className="text-[var(--color-jv-orange)]" />
                    Stack & Platforms Utilized
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {(enrichedStages[activeStepIdx]?.tools || []).map(
                      (tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                        >
                          {tool}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                    <Lock size={14} className="text-emerald-600" />
                    Client Guarantee & Security
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    All ad credentials, server tokens, and customer lists remain
                    exclusively under your ownership with ironclad NDA
                    protections.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Executive Assurance Bar */}
        <div className="mt-12 sm:mt-16 rounded-3xl bg-gradient-to-r from-slate-900 via-[#18191C] to-slate-900 p-6 sm:p-8 text-white card-shadow-3d border border-slate-800 relative overflow-hidden">
          {/* Subtle Orange Glow in Dark Box */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--color-jv-orange)]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[var(--color-jv-orange)]/20 border border-[var(--color-jv-orange)]/40 flex items-center justify-center shrink-0">
                <ShieldCheck size={26} className="text-[var(--color-jv-orange)]" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-heading font-black text-white">
                  Zero Blind Spots. Guaranteed Milestone Execution.
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                  Every engagement stage is governed by formal milestone sign-offs,
                  dedicated real-time Slack/WhatsApp bridge communication, and audited
                  attribution reporting.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href={targetProposalHref}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-[var(--color-jv-orange)] to-[#ea580c] hover:from-[#ea580c] hover:to-[#c2410c] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 group"
              >
                <span>Request Phase 1 Discovery Audit</span>
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href={targetPackagesHref}
                className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs sm:text-sm font-semibold transition-all"
              >
                Explore Retainers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
