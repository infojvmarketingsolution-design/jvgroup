"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  TrendingUp,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Globe2,
  Phone,
  MessageSquare,
  Zap,
  DollarSign,
  Layers,
  Cpu,
  Lock,
  ChevronRight,
  Sliders,
  Award,
} from "lucide-react";

interface SimulatorMarketConfig {
  id: string;
  flag: string;
  regionCode: string;
  title: string;
  spendLabel: string;
  monthlySpendNum: number;
  currency: string;
  market: string;
  pipelineMin: number;
  pipelineMax: number;
  pipelineFormatted: string;
  annualizedPipeline: string;
  cac: string;
  mqls: string;
  roas: string;
  roasMultiplier: number;
  paybackPeriod: string;
  channels: Array<{
    name: string;
    type: string;
    status: string;
  }>;
  actionPrompt: string;
}

const SIMULATOR_DATA: SimulatorMarketConfig[] = [
  {
    id: "usa-saas",
    flag: "🇺🇸",
    regionCode: "USA / GLOBAL",
    title: "USA B2B SaaS & Tech",
    spendLabel: "$5,000 / mo",
    monthlySpendNum: 5000,
    currency: "$",
    market: "North American Enterprise Tech & High-Ticket B2B",
    pipelineMin: 42000,
    pipelineMax: 65000,
    pipelineFormatted: "$42,000 – $65,000 / mo",
    annualizedPipeline: "$504,000 – $780,000 Run-Rate",
    cac: "$138 Avg CAC (67% Cut)",
    mqls: "35 – 48 Enterprise MQLs / mo",
    roas: "4.2x Pipeline Multiplier",
    roasMultiplier: 4.2,
    paybackPeriod: "45 – 60 Days",
    channels: [
      { name: "Google High-Intent Search & P-Max", type: "Search Engine", status: "Predictive Bidding" },
      { name: "LinkedIn B2B ABM Targeting", type: "Account-Based", status: "Decision-Maker Filter" },
      { name: "Next.js CRO Funnels & Calculators", type: "Conversion UX", status: "Sub-Second Speed" },
      { name: "Bi-Directional HubSpot / Salesforce Sync", type: "CRM Automation", status: "< 60s Lead Sync" },
    ],
    actionPrompt: "I want to deploy the USA B2B SaaS growth model ($5k/mo spend).",
  },
  {
    id: "uk-export",
    flag: "🇬🇧",
    regionCode: "UK / EUROPE",
    title: "UK Industrial & Export",
    spendLabel: "£4,000 / mo",
    monthlySpendNum: 4000,
    currency: "£",
    market: "UK & European Wholesale & B2B Distribution",
    pipelineMin: 38000,
    pipelineMax: 55000,
    pipelineFormatted: "£38,000 – £55,000 / mo",
    annualizedPipeline: "£456,000 – £660,000 Run-Rate",
    cac: "£142 Cost / B2B RFP",
    mqls: "28 – 36 High-Ticket RFPs / mo",
    roas: "5.8x Campaign ROAS",
    roasMultiplier: 5.8,
    paybackPeriod: "30 – 45 Days",
    channels: [
      { name: "Multi-Language Google Ads (UK/EU)", type: "International Search", status: "Bilingual Copy" },
      { name: "Technical Catalog Request Engine", type: "Lead Funnel", status: "Instant Specs" },
      { name: "WhatsApp Direct Engineer Access", type: "Instant Messaging", status: "Zero Friction" },
      { name: "Closed-Loop Closed-Won Attribution", type: "BI Reporting", status: "Server-Side CAPI" },
    ],
    actionPrompt: "I want to deploy the UK Industrial Exporter growth model (£4k/mo spend).",
  },
  {
    id: "india-corp",
    flag: "🇮🇳",
    regionCode: "PAN-INDIA",
    title: "Pan-India Corporate B2B",
    spendLabel: "₹3,00,000 / mo",
    monthlySpendNum: 300000,
    currency: "₹",
    market: "Domestic High-Value Enterprise & Corporate Services",
    pipelineMin: 2500000,
    pipelineMax: 4000000,
    pipelineFormatted: "₹25,00,000 – ₹40,00,000 / mo",
    annualizedPipeline: "₹3.0 Cr – ₹4.8 Cr Run-Rate",
    cac: "₹85 Cost / Commercial Inquiry",
    mqls: "180+ Commercial Inquiries / mo",
    roas: "4.6x Blended ROAS",
    roasMultiplier: 4.6,
    paybackPeriod: "20 – 35 Days",
    channels: [
      { name: "Google Performance Max & Search", type: "Paid Media", status: "High Commercial Intent" },
      { name: "Meta High-LTV Audience Exclusion", type: "Social Ads", status: "Verified Profiles" },
      { name: "Wapipulse Webhook CRM Dispatch", type: "WhatsApp API", status: "Instant Rep Routing" },
      { name: "Zoho CRM Multi-Stage Drip Workflows", type: "Lead Nurturing", status: "Automated Triggers" },
    ],
    actionPrompt: "I want to deploy the Pan-India Corporate growth model (₹3L/mo spend).",
  },
  {
    id: "cross-border-ecom",
    flag: "🌐",
    regionCode: "CROSS-BORDER",
    title: "Cross-Border E-Commerce",
    spendLabel: "$8,000 / mo",
    monthlySpendNum: 8000,
    currency: "$",
    market: "Multi-Country Omnichannel Retail (US, UK, CA, UAE)",
    pipelineMin: 48000,
    pipelineMax: 72000,
    pipelineFormatted: "$48,000 – $72,000 / mo",
    annualizedPipeline: "$576,000 – $864,000 Run-Rate",
    cac: "$22 Cost / New Acquired Buyer",
    mqls: "1,200+ Attributed Orders / mo",
    roas: "5.4x Blended ROAS",
    roasMultiplier: 5.4,
    paybackPeriod: "Instant (14 Days)",
    channels: [
      { name: "Meta & Instagram Dynamic Creative", type: "Paid Social", status: "Algorithmic Hooks" },
      { name: "Google Shopping & High-Intent Search", type: "Search Engine", status: "Feed Optimization" },
      { name: "Shopify Headless Checkout Sync", type: "E-Commerce", status: "Zero Cart Lag" },
      { name: "Automated WhatsApp Cart Recovery", type: "Retention", status: "42% Recovery Rate" },
    ],
    actionPrompt: "I want to deploy the Cross-Border E-Commerce growth model ($8k/mo spend).",
  },
];

interface EnterpriseRevenueSimulatorProps {
  entityId?: string;
  className?: string;
}

export default function EnterpriseRevenueSimulator({
  entityId = "jv-marketing-solution-pvt-ltd",
  className = "",
}: EnterpriseRevenueSimulatorProps) {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [spendScale, setSpendScale] = useState<number>(1); // 1 = Standard, 1.5 = Growth, 2 = Aggressive Scale

  const active = SIMULATOR_DATA[selectedIdx];

  // Dynamic calculated figures based on scale multiplier
  const calculatedSpend = Math.round(active.monthlySpendNum * spendScale);
  const calculatedMin = Math.round(active.pipelineMin * spendScale);
  const calculatedMax = Math.round(active.pipelineMax * spendScale);

  const formatCurrency = (val: number) => {
    if (active.currency === "₹") {
      if (val >= 10000000) return `₹${(val / 10000000).toFixed(1)} Cr`;
      if (val >= 100000) return `₹${(val / 100000).toFixed(1)} Lakh`;
      return `₹${val.toLocaleString("en-IN")}`;
    }
    return `${active.currency}${val.toLocaleString("en-US")}`;
  };

  const formattedScaledPipeline = `${formatCurrency(calculatedMin)} – ${formatCurrency(calculatedMax)} / mo`;

  return (
    <section
      id="simulator"
      className={`relative py-16 sm:py-24 bg-white border-b border-[#E2E8F0] overflow-hidden ${className}`}
    >
      {/* Subtle Blueprint Mesh on pure white */}
      <div className="absolute inset-0 white-grid-bg opacity-30 pointer-events-none" />


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--color-jv-orange)]/35 bg-[#FFF4ED] shadow-xs mb-4">
              <Sparkles size={14} className="text-[var(--color-jv-orange)] animate-spin-slow" />
              <span className="text-[var(--color-jv-orange)] text-xs font-black tracking-widest uppercase font-mono">
                ENTERPRISE ROI MODELER
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping ml-0.5" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-black text-[#0F172A] tracking-tight leading-[1.14]">
              Predictive Revenue &amp;{" "}
              <span className="bg-gradient-to-r from-[var(--color-jv-orange)] via-[#ea580c] to-[#c2410c] bg-clip-text text-transparent">
                Pipeline Simulator.
              </span>
            </h2>

            <p className="mt-3 text-sm sm:text-base text-[#475569] leading-relaxed max-w-2xl font-normal">
              Model predicted customer acquisition, qualified sales pipeline influx, and payback velocity across USA, UK, Canada &amp; India before deploying media capital.
            </p>
          </div>

          {/* SLA Performance Assurance Badge */}
          <div className="hidden lg:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm shrink-0">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <Award size={18} />
            </div>
            <div>
              <span className="block text-xs font-black text-[#0F172A]">Guaranteed SLA &amp; Attribution</span>
              <span className="block text-[11px] text-[#64748B]">Backed by JV Group Master Services Agreement</span>
            </div>
          </div>
        </div>

        {/* The Executive Simulator Cockpit Container */}
        <div className="p-6 sm:p-9 lg:p-11 rounded-3xl bg-white border border-[#E2E8F0] shadow-2xl relative overflow-hidden">
          {/* Top Decorative Ambient Gradient Line */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[var(--color-jv-orange)] via-amber-400 to-emerald-500" />

          {/* Step 1: Regional Market Selector (Zero Truncation, Rich Cards) */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[var(--color-jv-orange)] text-white text-xs font-black flex items-center justify-center font-mono">
                  1
                </span>
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#1E293B]">
                  Select Target Regional Market &amp; Model Architecture:
                </span>
              </div>
              <span className="text-xs text-[#64748B] font-semibold hidden sm:inline">
                Click any model to recalibrate forecast
              </span>
            </div>

            {/* 4 Dedicated Un-Truncated Market Architecture Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
              {SIMULATOR_DATA.map((item, idx) => {
                const isSelected = selectedIdx === idx;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedIdx(idx)}
                    className={`p-4 sm:p-5 rounded-2xl text-left border transition-all duration-300 cursor-pointer flex flex-col justify-between group relative ${
                      isSelected
                        ? "bg-[#FFF8F4] border-[var(--color-jv-orange)] shadow-md shadow-[var(--color-jv-orange)]/15 ring-2 ring-[var(--color-jv-orange)]/25 -translate-y-1"
                        : "bg-[#F8FAFC] hover:bg-white border-[#E2E8F0] hover:border-[var(--color-jv-orange)]/50 hover:shadow-xs"
                    }`}
                  >
                    <div>
                      {/* Top Pill with Flag and Spend */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-1.5">
                          <span className="text-base">{item.flag}</span>
                          <span className="text-[10px] font-mono font-black uppercase tracking-wider text-[#64748B]">
                            {item.regionCode}
                          </span>
                        </div>
                        <span
                          className={`text-xs font-mono font-black px-2 py-0.5 rounded-md ${
                            isSelected
                              ? "bg-[var(--color-jv-orange)] text-white"
                              : "bg-white text-[#1E293B] border border-[#E2E8F0]"
                          }`}
                        >
                          {item.spendLabel}
                        </span>
                      </div>

                      {/* Main Title (Fully Visible, Zero Truncation) */}
                      <h4
                        className={`text-sm sm:text-base font-heading font-black leading-snug transition-colors ${
                          isSelected ? "text-[var(--color-jv-orange)]" : "text-[#0F172A] group-hover:text-[#18191C]"
                        }`}
                      >
                        {item.title}
                      </h4>

                      <p className="text-[11px] text-[#64748B] mt-1 line-clamp-2 leading-relaxed">
                        {item.market}
                      </p>
                    </div>

                    <div className="mt-4 pt-2.5 border-t border-[#E2E8F0]/70 flex items-center justify-between text-[11px]">
                      <span className="font-bold text-emerald-600 flex items-center gap-1">
                        <TrendingUp size={12} />
                        <span>{item.roas}</span>
                      </span>
                      <span
                        className={`w-2 h-2 rounded-full ${
                          isSelected ? "bg-[var(--color-jv-orange)] animate-pulse" : "bg-slate-300"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Spend Scale Multiplier Bar */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#FFFDFB] border border-[#FDBA74]/50 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FFF4ED] text-[var(--color-jv-orange)] border border-[var(--color-jv-orange)]/30 flex items-center justify-center shrink-0">
                <Sliders size={18} />
              </div>
              <div>
                <span className="block text-xs font-mono font-black text-[#0F172A] uppercase">
                  Budget Scaling Multiplier
                </span>
                <span className="block text-[11px] text-[#64748B]">
                  Simulate returns across Conservative, Standard, and Aggressive scale tiers
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              {[
                { label: "0.5x Conservative", val: 0.5 },
                { label: "1.0x Baseline", val: 1 },
                { label: "2.0x Scale", val: 2 },
              ].map((tier) => (
                <button
                  key={tier.val}
                  type="button"
                  onClick={() => setSpendScale(tier.val)}
                  className={`flex-1 sm:flex-initial px-3.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                    spendScale === tier.val
                      ? "bg-[var(--color-jv-orange)] text-white shadow-xs"
                      : "bg-white text-[#475569] hover:bg-[#F1F5F9] border border-[#CBD5E1]"
                  }`}
                >
                  {tier.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Forecast Outputs (High-Impact Executive Metrics Console) */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-6 rounded-full bg-[var(--color-jv-orange)] text-white text-xs font-black flex items-center justify-center font-mono">
                2
              </span>
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#1E293B]">
                Projected Return Metrics &amp; Commercial Pipeline Output:
              </span>
            </div>

            {/* 3 Executive Metric Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
              {/* Output 1: Projected Monthly Pipeline */}
              <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-[#FFF8F4] via-white to-[#FFF4ED] border border-[var(--color-jv-orange)]/35 shadow-sm relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--color-jv-orange)]/10 rounded-full blur-2xl pointer-events-none" />
                <div>
                  <span className="text-[11px] font-mono font-black uppercase tracking-wider text-[#64748B] block mb-1">
                    PROJECTED MONTHLY PIPELINE
                  </span>
                  <div className="text-2xl sm:text-3xl lg:text-[32px] font-heading font-black text-[var(--color-jv-orange)] tracking-tight">
                    {formattedScaledPipeline}
                  </div>
                  <span className="block text-xs text-[#1E293B] font-bold mt-1">
                    At {formatCurrency(calculatedSpend)} / mo Monthly Spend
                  </span>
                </div>
                <div className="mt-4 pt-3 border-t border-[var(--color-jv-orange)]/20 flex items-center justify-between text-[11px] text-[#64748B]">
                  <span>Annualized Velocity:</span>
                  <strong className="text-[#0F172A]">{active.annualizedPipeline}</strong>
                </div>
              </div>

              {/* Output 2: Payback Velocity & ROAS */}
              <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-[#F0FDF4] via-white to-[#DCFCE7] border border-emerald-300 shadow-sm relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
                <div>
                  <span className="text-[11px] font-mono font-black uppercase tracking-wider text-emerald-700 block mb-1">
                    EXPECTED PAYBACK VELOCITY
                  </span>
                  <div className="text-2xl sm:text-3xl lg:text-[32px] font-heading font-black text-emerald-600 tracking-tight flex items-center gap-2">
                    <span>{active.roas}</span>
                  </div>
                  <span className="block text-xs text-[#1E293B] font-bold mt-1">
                    Break-Even In: {active.paybackPeriod}
                  </span>
                </div>
                <div className="mt-4 pt-3 border-t border-emerald-200 flex items-center justify-between text-[11px] text-[#64748B]">
                  <span>Capital Efficiency:</span>
                  <strong className="text-emerald-700 font-bold">Top 5% Industry Tier</strong>
                </div>
              </div>

              {/* Output 3: Lead Influx & CAC Efficiency */}
              <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-[#F8FAFC] via-white to-[#F1F5F9] border border-[#CBD5E1] shadow-sm relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                <div>
                  <span className="text-[11px] font-mono font-black uppercase tracking-wider text-[#64748B] block mb-1">
                    ACQUISITION UNIT ECONOMICS
                  </span>
                  <div className="text-xl sm:text-2xl lg:text-[26px] font-heading font-black text-[#0F172A] tracking-tight">
                    {active.mqls}
                  </div>
                  <span className="block text-xs text-[var(--color-jv-orange)] font-bold mt-1">
                    {active.cac}
                  </span>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] text-[#64748B]">
                  <span>Routing Latency:</span>
                  <strong className="text-[#0F172A]">&lt; 60s Lead-to-Rep Sync</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Verified Deliverables & Integrated Ad Channels */}
          <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-[#E2E8F0]">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#0F172A]">
                Deliverables &amp; High-Converting Execution Channels for {active.title}:
              </span>
              <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                All 4 Integrations Active
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {active.channels.map((chan, cIdx) => (
                <div
                  key={cIdx}
                  className="p-3.5 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs hover:border-[var(--color-jv-orange)]/40 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span className="text-xs font-black text-[#0F172A] truncate">
                      {chan.name}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[#64748B] mt-1 pt-1 border-t border-[#F1F5F9]">
                    <span className="text-[10px] uppercase font-semibold text-[#94A3B8]">{chan.type}</span>
                    <span className="font-mono text-[10px] text-[var(--color-jv-orange)] font-bold">{chan.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Execution Bar & Direct Actions */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-6 border-t border-[#E2E8F0]">
            <div className="flex items-center gap-3 text-xs text-[#64748B] text-center lg:text-left">
              <ShieldCheck size={18} className="text-emerald-600 shrink-0 hidden sm:block" />
              <span>
                Backed by <strong>100% JV Group Performance SLA</strong>, enterprise non-disclosure agreements, and dedicated fractional growth directors.
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3 shrink-0 w-full lg:w-auto">
              <a
                href="#proposal-form"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[var(--color-jv-orange)] to-[#c2410c] hover:opacity-95 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[var(--color-jv-orange)]/25 hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span>Request Custom Strategy Deck</span>
                <ArrowRight size={15} />
              </a>

              <a
                href="tel:+919909700606"
                className="px-4 py-3.5 rounded-xl bg-[#F8FAFC] hover:bg-[#FFF4ED] text-[#18191C] hover:text-[var(--color-jv-orange)] font-bold text-xs uppercase tracking-wider border border-[#CBD5E1] flex items-center gap-1.5 transition-all shadow-2xs"
                title="India Corporate Desk"
              >
                <Phone size={13} className="text-[var(--color-jv-orange)]" />
                <span>India: +91 99097 00606</span>
              </a>

              <a
                href="tel:+447344556070"
                className="px-4 py-3.5 rounded-xl bg-[#F8FAFC] hover:bg-[#FFF4ED] text-[#18191C] hover:text-[var(--color-jv-orange)] font-bold text-xs uppercase tracking-wider border border-[#CBD5E1] flex items-center gap-1.5 transition-all shadow-2xs"
                title="Global B2B Desk in London"
              >
                <Phone size={13} className="text-[var(--color-jv-orange)]" />
                <span>Global: +44 7344556070</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
