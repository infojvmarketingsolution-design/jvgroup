"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Globe2,
  Building2,
  Quote,
  Layers,
  Zap,
  Target,
  BarChart3,
  Award,
  ChevronRight,
  FileText,
  DollarSign,
  Cpu,
  Check,
  ArrowUpRight,
} from "lucide-react";
import type { BusinessEntity } from "@/data/businesses";

interface CaseStudyItem {
  sector: string;
  title: string;
  challenge: string;
  strategy: string;
  deliverables?: string[];
  results: {
    metric1: string;
    label1: string;
    metric2: string;
    label2: string;
    metric3: string;
    label3: string;
  };
  quote: string;
}

interface CaseStudiesDecorativeProps {
  entity: BusinessEntity;
  caseStudies: CaseStudyItem[];
  title?: string;
  subtitle?: string;
  badge?: string;
  viewAllHref?: string;
}

// Fixed metadata matching without substring false-positives
const getCaseStudyMeta = (sector: string, idx: number) => {
  const s = sector.toLowerCase();

  // Check AI SEO / Generative Engine Optimization (GEO) first
  if (s.includes("geo") || s.includes("generative") || s.includes("ai overview") || s.includes("gemini")) {
    return {
      flag: "🤖",
      countryName: "Global AI Engines",
      region: "Global AI Search Ecosystem (ChatGPT, Perplexity, Gemini)",
      category: "Generative Engine Optimization (GEO)",
      accentGradient: "from-purple-600 via-indigo-600 to-blue-600",
      accentColor: "purple",
      badgeBg: "bg-purple-50 text-purple-700 border-purple-200",
      highlightMetric: "#1 in AI Citations",
      clientRole: "CTO & Commercial Director • Global Machinery & Tech",
      timeframe: "45-Day AI Sprint",
    };
  }

  // Check UK first to prevent false matches
  if (s.includes("united kingdom") || s.includes("uk") || s.includes("europe") || s.includes("export")) {
    return {
      flag: "🇬🇧",
      countryName: "United Kingdom",
      region: "UK & European Union",
      category: "Industrial Wholesale & Export",
      accentGradient: "from-emerald-500 via-teal-500 to-cyan-600",
      accentColor: "emerald",
      badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
      highlightMetric: "£2.4M New Orders",
      clientRole: "Managing Director • UK Precision Engineering Exporter",
      timeframe: "60-Day Turnaround",
    };
  }

  // Check North America / USA
  if (s.includes("north america") || s.includes("usa") || s.includes("saas") || s.includes("workforce")) {
    return {
      flag: "🇺🇸",
      countryName: "United States",
      region: "North America (US & CA)",
      category: "Enterprise B2B SaaS",
      accentGradient: "from-blue-600 via-indigo-600 to-violet-600",
      accentColor: "blue",
      badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
      highlightMetric: "4.2x ARR Multiplier",
      clientRole: "VP of Demand Generation • US Workforce Analytics SaaS",
      timeframe: "90-Day Sprint",
    };
  }

  // Check India
  if (s.includes("india") || s.includes("consumer") || s.includes("electronics")) {
    return {
      flag: "🇮🇳",
      countryName: "India",
      region: "Pan-India Corporate Hub",
      category: "High-Growth Consumer Tech",
      accentGradient: "from-[var(--color-jv-orange)] via-[#ea580c] to-[#c2410c]",
      accentColor: "orange",
      badgeBg: "bg-orange-50 text-[var(--color-jv-orange)] border-orange-200",
      highlightMetric: "₹8.2 Cr Revenue",
      clientRole: "Chief Marketing Officer • Smart Electronics Brand",
      timeframe: "45-Day Scale",
    };
  }

  // Default fallback
  const fallbacks = [
    {
      flag: "🇺🇸",
      countryName: "United States",
      region: "North America",
      category: "Enterprise B2B SaaS",
      accentGradient: "from-blue-600 via-indigo-600 to-violet-600",
      accentColor: "blue",
      badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
      highlightMetric: "4.2x Pipeline Lift",
      clientRole: "VP of Growth & Operations",
      timeframe: "90 Days",
    },
    {
      flag: "🇬🇧",
      countryName: "United Kingdom",
      region: "United Kingdom",
      category: "Industrial Export",
      accentGradient: "from-emerald-500 via-teal-500 to-cyan-600",
      accentColor: "emerald",
      badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
      highlightMetric: "£2.4M New Orders",
      clientRole: "Managing Director",
      timeframe: "60 Days",
    },
    {
      flag: "🇮🇳",
      countryName: "India",
      region: "Pan-India",
      category: "Corporate Enterprise",
      accentGradient: "from-[var(--color-jv-orange)] via-[#ea580c] to-[#c2410c]",
      accentColor: "orange",
      badgeBg: "bg-orange-50 text-[var(--color-jv-orange)] border-orange-200",
      highlightMetric: "₹8.2 Cr Revenue",
      clientRole: "Chief Marketing Officer",
      timeframe: "45 Days",
    },
  ];
  return fallbacks[idx % fallbacks.length];
};

export default function CaseStudiesDecorative({
  entity,
  caseStudies,
  title = "Real Case Studies & Attributed Pipeline",
  subtitle = "Audited ROI metrics and verified commercial outcomes delivered across North America, the United Kingdom, and Pan-India.",
  badge = "PROVEN ENTERPRISE RESULTS",
  viewAllHref,
}: CaseStudiesDecorativeProps) {
  // Selected spotlight case study index (default to 0)
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  const activeStudy = caseStudies[selectedIdx] || caseStudies[0];
  const activeMeta = getCaseStudyMeta(activeStudy.sector, selectedIdx);
  const targetViewAllHref = viewAllHref || `/companies/${entity.id}/case-studies`;

  return (
    <section
      id="case-studies"
      className="relative py-16 sm:py-24 bg-gradient-to-b from-[#FFFDFB] via-[#FFF8F2] to-white border-b border-[#E2E8F0] overflow-hidden"
    >
      {/* Decorative Blueprint Background Mesh & Ambient Glow Orbs */}
      <div className="absolute inset-0 white-grid-bg opacity-50 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-[var(--color-jv-orange)]/15 via-amber-400/10 to-transparent blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-gradient-to-tl from-[var(--color-jv-orange)]/15 via-purple-500/10 to-transparent blur-[140px] rounded-full pointer-events-none" />


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--color-jv-orange)]/35 bg-[#FFF4ED] shadow-xs mb-4">
              <Sparkles size={14} className="text-[var(--color-jv-orange)] animate-spin-slow" />
              <span className="text-[var(--color-jv-orange)] text-xs font-black tracking-widest uppercase font-mono">
                {badge}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping ml-0.5" />
            </div>

            {/* Impressive Bold Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-heading font-black text-[#0F172A] tracking-tight leading-[1.12]">
              Real Case Studies &amp;{" "}
              <span className="bg-gradient-to-r from-[var(--color-jv-orange)] via-[#ea580c] to-[#c2410c] bg-clip-text text-transparent">
                Attributed Pipeline.
              </span>
            </h2>

            {/* Narrative Subtitle */}
            <p className="mt-3 text-sm sm:text-base text-[#475569] leading-relaxed max-w-2xl font-normal">
              {subtitle}
            </p>
          </div>

          {/* Quick Action Links */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href={targetViewAllHref}
              className="px-5 py-2.5 rounded-xl bg-white hover:bg-[#FFF4ED] text-[#1E293B] hover:text-[var(--color-jv-orange)] border border-[#CBD5E1] text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs"
            >
              <span>Explore All Case Studies ({caseStudies.length})</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* 1. Market Selection Tabs Bar (3 Markets: USA, UK, India) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 mb-8">
          {caseStudies.map((cs, idx) => {
            const meta = getCaseStudyMeta(cs.sector, idx);
            const isSelected = selectedIdx === idx;

            return (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedIdx(idx)}
                className={`p-4 sm:p-5 rounded-2xl text-left border transition-all duration-300 cursor-pointer flex items-center justify-between group relative ${
                  isSelected
                    ? "bg-white border-[var(--color-jv-orange)] shadow-xl shadow-[var(--color-jv-orange)]/15 ring-2 ring-[var(--color-jv-orange)]/30 -translate-y-1"
                    : "bg-[#F8FAFC] hover:bg-white border-[#E2E8F0] hover:border-slate-300 shadow-2xs hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div
                    className={`w-11 h-11 rounded-xl text-xl flex items-center justify-center shrink-0 border transition-transform duration-300 ${
                      isSelected
                        ? "bg-[#FFF4ED] border-[var(--color-jv-orange)]/30 scale-105"
                        : "bg-white border-[#E2E8F0]"
                    }`}
                  >
                    <span>{meta.flag}</span>
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-black uppercase tracking-wider text-slate-400">
                        {meta.countryName}
                      </span>
                      {isSelected && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-jv-orange)] animate-ping" />
                      )}
                    </div>
                    <h4
                      className={`text-sm sm:text-base font-heading font-black truncate transition-colors ${
                        isSelected ? "text-[#0F172A]" : "text-slate-700 group-hover:text-[#0F172A]"
                      }`}
                    >
                      {cs.title}
                    </h4>
                    <span className="text-xs font-bold text-[var(--color-jv-orange)] block mt-0.5">
                      {meta.highlightMetric}
                    </span>
                  </div>
                </div>

                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    isSelected
                      ? "bg-[var(--color-jv-orange)] text-white shadow-xs"
                      : "bg-slate-200/60 text-slate-500 group-hover:bg-slate-300"
                  }`}
                >
                  <ArrowRight size={14} />
                </div>
              </button>
            );
          })}
        </div>

        {/* 2. Flagship Interactive Case Study Showcase Cockpit */}
        <div className="p-6 sm:p-9 lg:p-11 rounded-3xl bg-white border-2 border-[#E2E8F0] shadow-2xl relative overflow-hidden mb-14">
          {/* Top Radiant Accent Ribbon */}
          <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${activeMeta.accentGradient}`} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left 7 Columns: Narrative Case Story, Challenge & Strategy */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                {/* Market & Category Pill */}
                <div className="flex items-center gap-2.5 mb-3">
                  <span
                    className={`text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border flex items-center gap-1.5 ${activeMeta.badgeBg}`}
                  >
                    <span>{activeMeta.flag}</span>
                    <span>{activeMeta.region}</span>
                  </span>

                  <span className="text-[11px] font-mono font-bold text-slate-400">
                    // SPRINT TIMELINE: {activeMeta.timeframe}
                  </span>
                </div>

                {/* Case Study Headline */}
                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-heading font-black text-[#0F172A] tracking-tight leading-snug mb-4">
                  {activeStudy.title}
                </h3>

                {/* The Strategic Breakdown: Challenge vs Solution */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {/* The Bottleneck Card */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#FFF8F8] border border-rose-200/70 text-xs">
                    <div className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-rose-700 mb-1.5">
                      <Target size={14} />
                      <span>The Operational Bottleneck</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed font-normal">
                      {activeStudy.challenge}
                    </p>
                  </div>

                  {/* The Growth Architecture Card */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#FFFDF9] border border-orange-200/80 text-xs">
                    <div className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-[var(--color-jv-orange)] mb-1.5">
                      <Zap size={14} />
                      <span>The Execution Blueprint</span>
                    </div>
                    <p className="text-slate-800 leading-relaxed font-medium">
                      {activeStudy.strategy}
                    </p>
                  </div>
                </div>

                {/* Deployed Deliverables Badges */}
                {activeStudy.deliverables && activeStudy.deliverables.length > 0 && (
                  <div className="mb-6">
                    <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-2.5">
                      Execution Deliverables Deployed:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeStudy.deliverables.map((deliv, dIdx) => (
                        <div
                          key={dIdx}
                          className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-slate-700 font-medium"
                        >
                          <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                          <span className="truncate">{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Verified Client Testimonial Pod */}
              <div className="p-5 rounded-2xl bg-[#F8FAFC] border-l-4 border-[var(--color-jv-orange)] relative shadow-2xs">
                <Quote size={20} className="text-[var(--color-jv-orange)] opacity-40 mb-1.5" />
                <p className="text-xs sm:text-sm italic text-slate-800 leading-relaxed font-medium">
                  "{activeStudy.quote}"
                </p>
                <div className="mt-3 pt-2.5 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="font-bold text-[#0F172A]">{activeMeta.clientRole}</span>
                  <span className="text-emerald-600 font-bold flex items-center gap-1">
                    <ShieldCheck size={13} />
                    <span>Verified Closed-Won Attribution ✓</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: 3D Audited Performance Cockpit */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white shadow-2xl relative overflow-hidden">
              {/* Background Glow */}
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[var(--color-jv-orange)]/20 blur-[90px] rounded-full pointer-events-none" />

              <div>
                {/* Cockpit Status Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-700 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-[11px] font-mono font-bold text-slate-300 uppercase tracking-wider">
                      Audited Attribution Telemetry
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-black px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    CAPI LIVE
                  </span>
                </div>

                {/* Main Hero KPI Metric */}
                <div className="mb-6 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    {activeStudy.results.label1}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-white tracking-tight">
                      {activeStudy.results.metric1}
                    </span>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-500/30">
                      Primary Target
                    </span>
                  </div>
                </div>

                {/* Secondary Metrics Grid */}
                <div className="grid grid-cols-2 gap-3.5 mb-6">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <span className="text-[11px] text-slate-400 font-medium block">
                      {activeStudy.results.label2}
                    </span>
                    <span className="text-2xl sm:text-3xl font-heading font-black text-[var(--color-jv-orange)] mt-1 block">
                      {activeStudy.results.metric2}
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <span className="text-[11px] text-slate-400 font-medium block">
                      {activeStudy.results.label3}
                    </span>
                    <span className="text-2xl sm:text-3xl font-heading font-black text-emerald-400 mt-1 block">
                      {activeStudy.results.metric3}
                    </span>
                  </div>
                </div>

                {/* Commercial Backing Note */}
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-white text-[11px]">
                    <ShieldCheck size={14} className="text-emerald-400" />
                    <span>JV Group Master Services Agreement</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug">
                    Every commercial engagement includes audited closed-loop CRM reporting with zero unverified vanity metrics.
                  </p>
                </div>
              </div>

              {/* Cockpit CTA Action */}
              <div className="pt-6 mt-6 border-t border-slate-700">
                <Link
                  href={`/companies/${entity.id}/contact?caseStudy=${encodeURIComponent(activeStudy.title)}`}
                  className="w-full h-12 rounded-xl font-black text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 bg-gradient-to-r from-[var(--color-jv-orange)] via-[#ea580c] to-[#c2410c] hover:opacity-95 text-white shadow-xl shadow-[var(--color-jv-orange)]/30 hover:scale-[1.01] transition-all cursor-pointer whitespace-nowrap"
                >
                  <span>REPLICATE THIS STRATEGY</span>
                  <ArrowRight size={14} className="shrink-0" />
                </Link>
              </div>

            </div>
          </div>
        </div>

        {/* 3. Bottom Attributed Aggregate Proof Bar */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold shrink-0">
                <BarChart3 size={20} />
              </div>
              <div>
                <span className="block text-base font-heading font-black text-[#0F172A]">£2.4M+ / $18M+</span>
                <span className="block text-[11px] text-[#64748B] mt-0.5">Total pipeline attributed across international markets</span>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[var(--color-jv-orange)] flex items-center justify-center font-bold shrink-0">
                <TrendingUp size={20} />
              </div>
              <div>
                <span className="block text-base font-heading font-black text-[#0F172A]">4.8x Blended ROAS</span>
                <span className="block text-[11px] text-[#64748B] mt-0.5">Average verified return across media campaigns</span>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold shrink-0">
                <Zap size={20} />
              </div>
              <div>
                <span className="block text-base font-heading font-black text-[#0F172A]">&lt; 60s Lead Dispatch</span>
                <span className="block text-[11px] text-[#64748B] mt-0.5">Sub-minute routing directly into client CRM</span>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold shrink-0">
                <ShieldCheck size={20} />
              </div>
              <div>
                <span className="block text-base font-heading font-black text-[#0F172A]">100% CAPI Tracking</span>
                <span className="block text-[11px] text-[#64748B] mt-0.5">Server-side telemetry preventing signal drop</span>
              </div>
            </div>
          </div>

          {/* Direct Strategy Proposal Hotline */}
          <div className="mt-6 pt-5 border-t border-[#E2E8F0] flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#475569]">
              <span className="font-bold text-[#0F172A]">Looking to scale similar B2B pipeline?</span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span>Review our campaign architectures or speak with an Executive Growth Partner:</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs">
              <Link
                href={targetViewAllHref}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-[#CBD5E1] text-[#1E293B] font-bold hover:text-[var(--color-jv-orange)] transition-colors shadow-2xs"
              >
                <span>Read Full Methodology</span>
                <FileText size={13} />
              </Link>

              <Link
                href={`/companies/${entity.id}/contact`}
                className="px-4 py-2 rounded-xl bg-[var(--color-jv-orange)] hover:bg-[#d04a12] text-white font-bold transition-colors shadow-xs flex items-center gap-1"
              >
                <span>Request Case Study Deck</span>
                <ChevronRight size={13} />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
