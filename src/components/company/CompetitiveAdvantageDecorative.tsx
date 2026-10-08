"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Globe2,
  TrendingUp,
  Users,
  Layers,
  Zap,
  BarChart3,
  Award,
  ChevronRight,
  Lock,
  Clock,
  Phone,
  Code2,
  Terminal,
  BadgeCheck,
  Check,
  Server,
  DollarSign,
  MessageSquare,
  Briefcase,
  Share2,
  ExternalLink,
  Laptop,
} from "lucide-react";
import type { BusinessEntity } from "@/data/businesses";

interface AdvantageItem {
  title: string;
  description: string;
  badge: string;
}

interface CompetitiveAdvantageDecorativeProps {
  entity: BusinessEntity;
  advantages: AdvantageItem[];
  title?: string;
  subtitle?: string;
  badge?: string;
  contactHref?: string;
}

// In-house proprietary software assets interactive tab data
const TECH_PILLARS = [
  {
    id: "nextjs",
    name: "Next.js 16 Apps",
    label: "Enterprise Web Apps",
    icon: Code2,
    badge: "SUB-SECOND SPEED",
    metric: "95+ Core Web Vitals",
    description: "Custom React 19 & Next.js server-rendered landing engines with programmatic SEO and instant loading times.",
    snippet: "const pipeline = await createEnterpriseFunnel({ speed: '99ms', seo: 'dynamic' });",
  },
  {
    id: "wapipulse",
    name: "Wapipulse WhatsApp",
    label: "Cloud WhatsApp API",
    icon: MessageSquare,
    badge: "INSTANT DISPATCH",
    metric: "< 60s Lead Response",
    description: "Official Meta Cloud API integration for automated B2B WhatsApp nurturing, brochure dispatch, and sales routing.",
    snippet: "await wapipulse.dispatchLeadNotification({ rep: 'Senior Growth Director', sla: '<60s' });",
  },
  {
    id: "webhooks",
    name: "CRM Webhooks",
    label: "Bi-Directional Pipelines",
    icon: Layers,
    badge: "ZERO DATA LOSS",
    metric: "HubSpot • Salesforce • Zoho",
    description: "Automated webhook pipes streaming closed-won deal stages back to ad platforms to optimize algorithmic bidding.",
    snippet: "crm.on('deal_won', (deal) => adNetworks.optimizeBidding({ closedValue: deal.amount }));",
  },
  {
    id: "capi",
    name: "Server CAPI Engine",
    label: "Server-Side Telemetry",
    icon: Server,
    badge: "100% SIGNAL ACCURACY",
    metric: "Zero Cookie Drop",
    description: "Server-to-server Meta Conversions API and Google Server GTAG bypassing ad-blockers and iOS privacy constraints.",
    snippet: "capiEngine.trackPurchase({ value: deal.arr, matchQuality: '9.8/10' });",
  },
];

// Global Footprint regional hubs data
const GLOBAL_HUBS = [
  {
    id: "us",
    flag: "🇺🇸",
    region: "North America",
    jurisdiction: "USA & Canada",
    timezone: "EST & PST Timezones",
    currency: "USD ($) Invoicing",
    compliance: "CCPA & SOC-2 Hygiene",
    highlight: "High-ticket enterprise B2B buyer psychology and aggressive ARR pipeline scaling.",
  },
  {
    id: "uk",
    flag: "🇬🇧",
    region: "UK & Europe",
    jurisdiction: "London Corporate Entity",
    timezone: "GMT / BST Timezone",
    currency: "GBP (£) & EUR (€) Billing",
    compliance: "GDPR Strict Data Privacy",
    highlight: "Direct UK entity contracts, bilateral NDAs, and Pan-European commercial execution.",
  },
  {
    id: "in",
    flag: "🇮🇳",
    region: "Pan-India HQ",
    jurisdiction: "Ahmedabad & Surat Hubs",
    timezone: "IST Timezone (24/7 Delivery)",
    currency: "INR (₹) GST Invoices",
    compliance: "Master Corporate SLA",
    highlight: "24/7 high-velocity engineering, continuous media optimization, and domestic corporate growth.",
  },
];

export default function CompetitiveAdvantageDecorative({
  entity,
  advantages,
  title = "Why Global B2B Leaders Partner With J.V Marketing",
  subtitle = "Combining specialized high-velocity growth execution with the financial strength, software IP, and engineering power of the JV Group ecosystem.",
  badge = "COMPETITIVE ADVANTAGE",
  contactHref,
}: CompetitiveAdvantageDecorativeProps) {
  const targetContactHref = contactHref || `/companies/${entity.id}/contact`;
  const [activeTechIdx, setActiveTechIdx] = useState(0);
  const [activeHubIdx, setActiveHubIdx] = useState(0);

  const activeTech = TECH_PILLARS[activeTechIdx];
  const activeHub = GLOBAL_HUBS[activeHubIdx];

  return (
    <section
      id="why-us"
      className="relative py-16 sm:py-24 bg-white border-b border-[#E2E8F0] overflow-hidden"
    >
      {/* Precision White Technical Mesh & Grid (Crisp Pure White) */}
      <div className="absolute inset-0 white-grid-bg opacity-30 pointer-events-none" />


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================
            SECTION HEADER: LUXURY BADGE + BOLD CONTRAST HEADLINE
           ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            {/* Top Eyebrow Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[var(--color-jv-orange)]/35 bg-[#FFF4ED] shadow-xs mb-4">
              <Sparkles size={14} className="text-[var(--color-jv-orange)]" />
              <span className="text-[var(--color-jv-orange)] text-xs font-black tracking-widest uppercase font-mono">
                {badge}
              </span>
              <span className="h-2 w-px bg-[var(--color-jv-orange)]/30" />
              <span className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-600">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                VERIFIED MOAT
              </span>
            </div>

            {/* High-Impact Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-heading font-black text-[#0F172A] tracking-tight leading-[1.12]">
              Why Global B2B Leaders Partner With{" "}
              <span className="bg-gradient-to-r from-[var(--color-jv-orange)] via-orange-600 to-amber-600 bg-clip-text text-transparent">
                {entity.shortName}.
              </span>
            </h2>

            {/* Narrative Subtitle */}
            <p className="mt-3.5 text-sm sm:text-base text-[#475569] leading-relaxed max-w-2xl font-normal">
              {subtitle}
            </p>
          </div>

          {/* Right-Side Trust Guarantee Badges (Desktop) */}
          <div className="hidden lg:flex flex-col items-end gap-2.5 shrink-0">
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white border border-[#CBD5E1] shadow-xs">
              <ShieldCheck size={17} className="text-emerald-600 shrink-0" />
              <div className="text-xs">
                <span className="font-extrabold text-[#0F172A]">Zero Subcontracting</span>
                <span className="text-slate-300 mx-1.5">•</span>
                <span className="font-semibold text-[#64748B]">100% In-House Engineers</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white border border-[#E2E8F0] shadow-xs text-xs font-bold text-[#334155]">
              <Globe2 size={16} className="text-[var(--color-jv-orange)] shrink-0" />
              <span>Multi-Currency Invoicing: USD ($), GBP (£), INR (₹)</span>
            </div>
          </div>
        </div>


        {/* ========================================================
            FLAGSHIP BENTO SHOWCASE: ASYMMETRICAL DECORATIVE GRID
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-8 mb-16">
          
          {/* ====================================================
              BENTO 1: HERO CAPABILITY - PROPRIETARY TECH SYNERGY
              (Spans 7 columns on Desktop, Left-Top Hero Position)
             ==================================================== */}
          <div className="lg:col-span-7 group relative rounded-3xl bg-white border-2 border-blue-200/90 hover:border-blue-500 p-7 sm:p-9 flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.18)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            {/* Top Glowing Blue Ribbon */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500" />
            
            {/* Ambient Corner Glow */}
            <div className="absolute -top-24 -right-24 w-52 h-52 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Header: Icon Pod + Badges */}
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="flex items-center gap-3.5">
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform">
                    <Cpu size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-wider block">
                      // ASYMMETRIC ADVANTAGE 01
                    </span>
                    <h3 className="text-xl sm:text-2xl font-heading font-black text-[#0F172A] group-hover:text-blue-600 transition-colors">
                      {advantages[0]?.title || "Proprietary Tech + Agency Synergy"}
                    </h3>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-mono font-black shrink-0">
                  01 // TECH IP
                </span>
              </div>

              {/* Narrative Story */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                Unlike traditional advertising agencies that only buy impressions, we engineer proprietary software automation, custom web applications, and in-house SaaS pipelines that permanently belong to your balance sheet.
              </p>

              {/* Interactive Tech Selector Tabs */}
              <div className="flex flex-wrap gap-2 mb-4">
                {TECH_PILLARS.map((tech, idx) => (
                  <button
                    key={tech.id}
                    type="button"
                    onClick={() => setActiveTechIdx(idx)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 border ${
                      activeTechIdx === idx
                        ? "bg-blue-600 text-white border-blue-600 shadow-sm shadow-blue-600/30 scale-102"
                        : "bg-slate-50 hover:bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <tech.icon size={13} />
                    <span>{tech.name}</span>
                  </button>
                ))}
              </div>

              {/* Active Tech Interactive Live Console Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0F172A] text-white shadow-xl relative overflow-hidden mb-6 border border-slate-800">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-[11px] font-mono text-slate-400 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-bold text-slate-200">{activeTech.label}</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    {activeTech.badge}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-3.5">
                  {activeTech.description}
                </p>

                {/* Live Code Snippet Display */}
                <div className="p-2.5 rounded-xl bg-black/50 border border-white/10 font-mono text-[11px] text-cyan-300 truncate">
                  <code>{activeTech.snippet}</code>
                </div>

                <div className="mt-3.5 flex items-center justify-between text-xs font-semibold text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 size={13} />
                    <span>{activeTech.metric}</span>
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">
                    100% PROPRIETARY IP TRANSFERRED
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Card Action Footer */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-800 bg-blue-50 px-3 py-1.5 rounded-xl border border-blue-200">
                <ShieldCheck size={14} className="text-blue-600" />
                <span>Zero Vendor Lock-In • Full Code Ownership</span>
              </span>

              <Link
                href={`${targetContactHref}?topic=Proprietary+Tech+Synergy`}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider text-white bg-[#0F172A] hover:bg-blue-600 flex items-center justify-center gap-2 shadow-md hover:shadow-blue-500/30 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>DEPLOY TECH SYNERGY</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>


          {/* ====================================================
              BENTO 2: GLOBAL WESTERN MARKET DOMINANCE
              (Spans 5 columns on Desktop, Right-Top Position)
             ==================================================== */}
          <div className="lg:col-span-5 group relative rounded-3xl bg-white border-2 border-emerald-200/90 hover:border-emerald-500 p-7 sm:p-8 flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(16,185,129,0.18)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            {/* Top Glowing Emerald Ribbon */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600" />
            
            {/* Ambient Corner Glow */}
            <div className="absolute -top-24 -right-24 w-52 h-52 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Header: Icon Pod + Badges */}
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="flex items-center gap-3.5">
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white flex items-center justify-center shadow-md shadow-emerald-500/25 group-hover:scale-105 transition-transform">
                    <Globe2 size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-wider block">
                      // ASYMMETRIC ADVANTAGE 02
                    </span>
                    <h3 className="text-xl font-heading font-black text-[#0F172A] group-hover:text-emerald-600 transition-colors">
                      Western Market Dominance
                    </h3>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-mono font-black shrink-0">
                  02 // GLOBAL
                </span>
              </div>

              {/* Narrative Story */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 font-normal">
                Direct cross-border B2B execution across North America, the UK, Europe, and India. Native Western buyer psychology, GDPR &amp; CCPA compliance, and multi-currency billing.
              </p>

              {/* Interactive Regional Hubs Selector */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {GLOBAL_HUBS.map((hub, idx) => (
                  <button
                    key={hub.id}
                    type="button"
                    onClick={() => setActiveHubIdx(idx)}
                    className={`p-2.5 rounded-xl text-center border transition-all cursor-pointer ${
                      activeHubIdx === idx
                        ? "bg-emerald-50 border-emerald-500 ring-2 ring-emerald-500/20 text-[#0F172A]"
                        : "bg-slate-50 hover:bg-white border-slate-200 text-slate-600"
                    }`}
                  >
                    <span className="text-lg block mb-0.5">{hub.flag}</span>
                    <span className="text-[11px] font-black block truncate">{hub.region}</span>
                  </button>
                ))}
              </div>

              {/* Active Hub Detail Card */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-50/70 via-white to-teal-50/40 border border-emerald-200/80 mb-6 shadow-2xs">
                <div className="flex items-center justify-between text-xs font-bold text-emerald-950 mb-2">
                  <span className="flex items-center gap-1.5">
                    <span>{activeHub.flag}</span>
                    <span>{activeHub.jurisdiction}</span>
                  </span>
                  <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    {activeHub.timezone}
                  </span>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed mb-3">
                  {activeHub.highlight}
                </p>

                <div className="grid grid-cols-2 gap-2 text-[10px] font-mono font-bold">
                  <div className="p-2 rounded-lg bg-white border border-slate-200/80 text-slate-700">
                    <span className="text-slate-400 block text-[9px]">BILLING CURRENCY</span>
                    <span>{activeHub.currency}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-slate-200/80 text-slate-700">
                    <span className="text-slate-400 block text-[9px]">LEGAL HYGIENE</span>
                    <span>{activeHub.compliance}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card Action Footer */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1.5 rounded-xl border border-emerald-200">
                Dual-Region Invoicing
              </span>

              <Link
                href={`${targetContactHref}?topic=Western+Market+Experience`}
                className="px-4 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider text-white bg-[#0F172A] hover:bg-emerald-600 flex items-center justify-center gap-2 shadow-md hover:shadow-emerald-500/30 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>GLOBAL PLAYBOOK</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>


          {/* ====================================================
              BENTO 3: COMMERCIAL REVENUE TELEMETRY
              (Spans 6 columns on Desktop, Left-Bottom Position)
             ==================================================== */}
          <div className="lg:col-span-6 group relative rounded-3xl bg-white border-2 border-orange-200/90 hover:border-[var(--color-jv-orange)] p-7 sm:p-8 flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(234,88,12,0.18)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            {/* Top Glowing Orange Ribbon */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[var(--color-jv-orange)] via-amber-500 to-[#c2410c]" />
            
            {/* Ambient Corner Glow */}
            <div className="absolute -top-24 -right-24 w-52 h-52 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Header: Icon Pod + Badges */}
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="flex items-center gap-3.5">
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[var(--color-jv-orange)] to-amber-600 text-white flex items-center justify-center shadow-md shadow-orange-500/25 group-hover:scale-105 transition-transform">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[var(--color-jv-orange)] uppercase tracking-wider block">
                      // ASYMMETRIC ADVANTAGE 03
                    </span>
                    <h3 className="text-xl sm:text-2xl font-heading font-black text-[#0F172A] group-hover:text-[var(--color-jv-orange)] transition-colors">
                      Enterprise Revenue Focus
                    </h3>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-orange-50 text-[var(--color-jv-orange)] border border-orange-200 text-xs font-mono font-black shrink-0">
                  03 // REVENUE
                </span>
              </div>

              {/* Narrative Story */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                We optimize exclusively for closed-won enterprise revenue, SQL pipeline velocity, and Boardroom ROI—never vanity clicks or cheap impressions. Zero markups on ad spend.
              </p>

              {/* 3 Audited Metric Tiles */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="p-3.5 rounded-2xl bg-orange-50/70 border border-orange-200/80 text-center shadow-2xs">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">Pipeline ROI Delta</span>
                  <span className="text-2xl font-heading font-black text-[#0F172A] block">+284%</span>
                  <span className="inline-block mt-1 text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                    ↑ Closed-Won
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-orange-50/70 border border-orange-200/80 text-center shadow-2xs">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">Ad Spend Markup</span>
                  <span className="text-2xl font-heading font-black text-emerald-600 block">0.0%</span>
                  <span className="inline-block mt-1 text-[9px] font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                    Direct Account
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-orange-50/70 border border-orange-200/80 text-center shadow-2xs">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">Blended ROAS</span>
                  <span className="text-2xl font-heading font-black text-[var(--color-jv-orange)] block">4.2x</span>
                  <span className="inline-block mt-1 text-[9px] font-bold text-orange-700 bg-orange-50 px-1.5 py-0.5 rounded">
                    CAPI Verified
                  </span>
                </div>
              </div>

              {/* Checklist */}
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 font-medium mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-[var(--color-jv-orange)] shrink-0" />
                  <span className="text-[11px]">Server-Side Meta CAPI & Google GTAG</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-[var(--color-jv-orange)] shrink-0" />
                  <span className="text-[11px]">Zero Vanity Impression Markups</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-[var(--color-jv-orange)] shrink-0" />
                  <span className="text-[11px]">Closed-Won Boardroom ROI Attribution</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-[var(--color-jv-orange)] shrink-0" />
                  <span className="text-[11px]">Milestone-Backed Revenue SLA</span>
                </div>
              </div>
            </div>

            {/* Bottom Card Action Footer */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
              <span className="text-xs font-bold text-orange-800 bg-orange-50 px-3 py-1.5 rounded-xl border border-orange-200">
                Milestone-Backed Revenue SLA
              </span>

              <Link
                href={`${targetContactHref}?topic=Enterprise+Revenue+Focus`}
                className="px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider text-white bg-[#0F172A] hover:bg-[var(--color-jv-orange)] flex items-center justify-center gap-2 shadow-md hover:shadow-orange-500/30 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>AUDIT REVENUE MODEL</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>


          {/* ====================================================
              BENTO 4: DEDICATED ACCOUNT DIRECTORS (WHITE-GLOVE)
              (Spans 6 columns on Desktop, Right-Bottom Position)
             ==================================================== */}
          <div className="lg:col-span-6 group relative rounded-3xl bg-white border-2 border-purple-200/90 hover:border-purple-500 p-7 sm:p-8 flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(147,51,234,0.18)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            {/* Top Glowing Purple Ribbon */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600" />
            
            {/* Ambient Corner Glow */}
            <div className="absolute -top-24 -right-24 w-52 h-52 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Header: Icon Pod + Badges */}
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="flex items-center gap-3.5">
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-700 text-white flex items-center justify-center shadow-md shadow-purple-500/25 group-hover:scale-105 transition-transform">
                    <Users size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-purple-600 uppercase tracking-wider block">
                      // ASYMMETRIC ADVANTAGE 04
                    </span>
                    <h3 className="text-xl sm:text-2xl font-heading font-black text-[#0F172A] group-hover:text-purple-600 transition-colors">
                      Dedicated Account Directors
                    </h3>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200 text-xs font-mono font-black shrink-0">
                  04 // SQUAD
                </span>
              </div>

              {/* Narrative Story */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                Direct access to senior growth directors and seasoned media strategists with 8+ years experience. Zero junior account managers or ticket queues. Proactive strategic guidance.
              </p>

              {/* Fractional Executive Squad Console */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-50/70 via-white to-indigo-50/40 border border-purple-200/80 mb-6 shadow-2xs space-y-2.5">
                <div className="flex items-center justify-between pb-2 border-b border-purple-100 text-[11px] font-mono font-bold text-purple-950">
                  <span className="flex items-center gap-1.5">
                    <Users size={13} className="text-purple-600" />
                    <span>DEDICATED EXECUTIVE SQUAD POD</span>
                  </span>
                  <span className="text-emerald-600 font-bold flex items-center gap-1 text-[10px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    SQUAD ONLINE
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 font-black text-xs flex items-center justify-center">
                      GD
                    </div>
                    <div>
                      <span className="block text-xs font-black text-[#0F172A]">Senior Growth Director (Lead)</span>
                      <span className="block text-[10px] text-slate-500">8+ years B2B enterprise track record</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                    DIRECT SQUAD
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 font-black text-xs flex items-center justify-center">
                      SL
                    </div>
                    <div>
                      <span className="block text-xs font-black text-[#0F172A]">Private Slack &amp; WhatsApp Desk</span>
                      <span className="block text-[10px] text-slate-500">Real-time daily collaboration without tickets</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    REAL-TIME
                  </span>
                </div>
              </div>

              {/* Checklist */}
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 font-medium mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-purple-600 shrink-0" />
                  <span className="text-[11px]">Sub-4h Priority Response SLA</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-purple-600 shrink-0" />
                  <span className="text-[11px]">Weekly Boardroom Sprint Strategy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-purple-600 shrink-0" />
                  <span className="text-[11px]">Dedicated Lead Media Buyers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-purple-600 shrink-0" />
                  <span className="text-[11px]">Proactive Quarterly Roadmaps</span>
                </div>
              </div>
            </div>

            {/* Bottom Card Action Footer */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
              <span className="text-xs font-bold text-purple-800 bg-purple-50 px-3 py-1.5 rounded-xl border border-purple-200">
                Sub-4h Priority SLA
              </span>

              <Link
                href={`${targetContactHref}?topic=Dedicated+Account+Directors`}
                className="px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider text-white bg-[#0F172A] hover:bg-purple-600 flex items-center justify-center gap-2 shadow-md hover:shadow-purple-500/30 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>CONNECT WITH DIRECTORS</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

        </div>


        {/* ========================================================
            BOTTOM UNIFIED CORPORATE ASSURANCE CONSOLE
            (Pure White, Layered Depth, Enterprise Direct Lines)
           ======================================================== */}
        <div className="relative p-7 sm:p-9 rounded-3xl bg-white border border-slate-200 shadow-[0_12px_45px_-12px_rgba(0,0,0,0.08)] overflow-hidden">
          
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Section Sub-Heading */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-5 border-b border-slate-100">
            <div>
              <span className="text-[11px] font-mono font-black uppercase tracking-wider text-[var(--color-jv-orange)] block">
                INSTITUTIONAL GRADE GOVERNANCE
              </span>
              <h4 className="text-base sm:text-lg font-heading font-black text-[#0F172A] mt-0.5">
                Enterprise Contract Security &amp; Executive Direct Lines
              </h4>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-xl border border-emerald-200 w-fit">
              <BadgeCheck size={16} className="text-emerald-600" />
              <span>JV Group Ecosystem SLA Standard</span>
            </div>
          </div>

          {/* 4 Guarantee Tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-7">
            <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-xs transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold shrink-0">
                <ShieldCheck size={20} />
              </div>
              <div>
                <span className="block text-xs font-black text-[#0F172A]">JV Group Master SLA</span>
                <span className="block text-[11px] text-[#64748B] mt-0.5 leading-snug">
                  Comprehensive corporate contract governance &amp; uptime
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-xs transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shrink-0">
                <Lock size={20} />
              </div>
              <div>
                <span className="block text-xs font-black text-[#0F172A]">Zero Data Leakage</span>
                <span className="block text-[11px] text-[#64748B] mt-0.5 leading-snug">
                  Enterprise NDAs, SOC-2 protocols &amp; private cloud silos
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-xs transition-all">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-[var(--color-jv-orange)] flex items-center justify-center font-bold shrink-0">
                <Globe2 size={20} />
              </div>
              <div>
                <span className="block text-xs font-black text-[#0F172A]">Dual Regional Hubs</span>
                <span className="block text-[11px] text-[#64748B] mt-0.5 leading-snug">
                  London (UK Entity) &amp; Corporate Hub (India Operations)
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-xs transition-all">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold shrink-0">
                <Award size={20} />
              </div>
              <div>
                <span className="block text-xs font-black text-[#0F172A]">100% IP Transferred</span>
                <span className="block text-[11px] text-[#64748B] mt-0.5 leading-snug">
                  Client retains full code, media accounts &amp; data rights
                </span>
              </div>
            </div>
          </div>

          {/* Direct Partner Action Strip */}
          <div className="pt-5 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-xs text-[#475569]">
              <span className="font-extrabold text-[#0F172A]">Direct Executive Access:</span>
              <span className="text-slate-500">
                Speak directly with our Executive Growth Directors in London or India.
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs">
              <a
                href="tel:+919909700806"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-[#1E293B] font-bold hover:text-[var(--color-jv-orange)] hover:border-[var(--color-jv-orange)] transition-colors shadow-2xs"
              >
                <span>🇮🇳 India:</span>
                <span className="font-mono text-[#0F172A]">+91 99097 00806</span>
              </a>

              <a
                href="tel:+447244556070"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-[#1E293B] font-bold hover:text-[var(--color-jv-orange)] hover:border-[var(--color-jv-orange)] transition-colors shadow-2xs"
              >
                <span>🌐 Global:</span>
                <span className="font-mono text-[#0F172A]">+44 7244556070</span>
              </a>

              <Link
                href={targetContactHref}
                className="px-4 py-2.5 rounded-xl bg-[var(--color-jv-orange)] hover:bg-[#d04a12] text-white font-black transition-colors shadow-xs flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>Request Capability Deck &amp; SLA</span>
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
