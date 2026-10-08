"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Globe2,
  Clock,
  TrendingUp,
  Target,
  Award,
  ChevronRight,
  Phone,
  CheckCircle2,
  X,
  FileCheck,
  Zap,
} from "lucide-react";
import type { BusinessEntity } from "@/data/businesses";

interface PackageFeature {
  name: string;
  tagline: string;
  price: string;
  period: string;
  badge: string;
  highlight: boolean;
  features: string[];
}

interface RetainersPricingDecorativeProps {
  entity: BusinessEntity;
  packages: PackageFeature[];
  title?: string;
  subtitle?: string;
  badge?: string;
  compareHref?: string;
}

// Predefined explicit pricing mapping for USA and India
const CURRENCY_PRICING_MAP: Record<
  string,
  {
    usaPrice: string;
    indiaPrice: string;
    usaPeriod: string;
    indiaPeriod: string;
    targetMetric: string;
    idealFor: string;
    tierSubtitle: string;
  }
> = {
  "Global Brand Launchpad": {
    usaPrice: "$4,000",
    indiaPrice: "₹3,20,000",
    usaPeriod: "/ month",
    indiaPeriod: "/ month + GST",
    targetMetric: "Target: $35k–$50k Pipeline / mo • Market Entry",
    idealFor: "International Market Entry (USA, UK, Canada)",
    tierSubtitle: "MARKET ENTRY ARCHITECTURE",
  },
  "Omni-Network & Mobile Acceleration": {
    usaPrice: "$8,500",
    indiaPrice: "₹6,80,000",
    usaPeriod: "/ month",
    indiaPeriod: "/ month + GST",
    targetMetric: "Target: $80k–$120k Pipeline / mo • 4.5x Avg ROAS",
    idealFor: "Rapid-Scaling Enterprises Requiring Dual Tech + Ad Power",
    tierSubtitle: "⭐ ENTERPRISE CHOICE • MOST POPULAR",
  },
  "Multinational Enterprise MSA": {
    usaPrice: "$15,000",
    indiaPrice: "₹12,00,000",
    usaPeriod: "/ month",
    indiaPeriod: "/ month + GST",
    targetMetric: "Target: $250k+ Pipeline Velocity • Multi-Entity SLA",
    idealFor: "Global Conglomerates, Exporters & Multi-Country Teams",
    tierSubtitle: "CONSOLIDATED MULTI-SECTOR MSA",
  },
  "Global B2B Growth Sprint": {
    usaPrice: "$999",
    indiaPrice: "₹79,000",
    usaPeriod: "/ month",
    indiaPeriod: "/ month + GST",
    targetMetric: "Target: $25k–$45k Pipeline / mo • 25-35 MQLs",
    idealFor: "Mid-Market B2B Brands expanding in North America or India",
    tierSubtitle: "HIGH-VELOCITY SPRINT MODEL",
  },
  "Full-Funnel Performance Retainer": {
    usaPrice: "$1,999",
    indiaPrice: "₹1,59,000",
    usaPeriod: "/ month",
    indiaPeriod: "/ month + GST",
    targetMetric: "Target: $55k–$95k Pipeline / mo • 4.2x Avg ROAS",
    idealFor: "Rapid-Scaling Enterprises requiring omnichannel dominance",
    tierSubtitle: "⭐ ENTERPRISE CHOICE • MOST POPULAR",
  },
  "Autonomous Revenue Engine": {
    usaPrice: "$4,999",
    indiaPrice: "₹3,99,000",
    usaPeriod: "/ month",
    indiaPeriod: "/ month + GST",
    targetMetric: "Target: $120k+ Pipeline Velocity • Boardroom Direct",
    idealFor: "Global Conglomerates, Exporters & Multi-Country Teams",
    tierSubtitle: "INSTITUTIONAL SCALE & BESPOKE AI",
  },
  "Starter Local Growth": {
    usaPrice: "$150",
    indiaPrice: "₹12,000",
    usaPeriod: "/ month",
    indiaPeriod: "/ month + GST",
    targetMetric: "Target: Top 3 Google Maps Rank • 3.2x Local Calls",
    idealFor: "Single-Outlet Retailers, Clinics & Local Service Firms",
    tierSubtitle: "LOCAL SEARCH FOUNDATION",
  },
  "Pro Business Acceleration": {
    usaPrice: "$300",
    indiaPrice: "₹25,000",
    usaPeriod: "/ month",
    indiaPeriod: "/ month + GST",
    targetMetric: "Target: 4.5x Lead Influx • Omnichannel Local Reach",
    idealFor: "Regional Showrooms, Factories & Healthcare Providers",
    tierSubtitle: "⭐ MOST POPULAR • SME CHOICE",
  },
  "Enterprise Regional Dominance": {
    usaPrice: "$600",
    indiaPrice: "₹50,000",
    usaPeriod: "/ month",
    indiaPeriod: "/ month + GST",
    targetMetric: "Target: Total Category Supremacy across Gujarat",
    idealFor: "Large Regional Manufacturers & Multi-Branch Chains",
    tierSubtitle: "CATEGORY SUPREMACY RETROFIT",
  },
};

export default function RetainersPricingDecorative({
  entity,
  packages,
  title = "Retainers & Growth Sprints",
  subtitle = "Predictable, milestone-driven commercial retainers tailored for North American, UK, and Pan-India enterprises.",
  badge = "TRANSPARENT COMMERCIAL DELIVERY",
  compareHref,
}: RetainersPricingDecorativeProps) {
  // Currency mode: "usd" for USA, "inr" for India
  const [currencyMode, setCurrencyMode] = useState<"usd" | "inr">("usd");
  const [modalPkgIndex, setModalPkgIndex] = useState<number | null>(null);

  const getPackageMeta = (pkg: PackageFeature, idx: number) => {
    const mapped = CURRENCY_PRICING_MAP[pkg.name];
    if (mapped) {
      return {
        displayPrice: currencyMode === "usd" ? mapped.usaPrice : mapped.indiaPrice,
        displayPeriod: currencyMode === "usd" ? mapped.usaPeriod : mapped.indiaPeriod,
        altNote:
          currencyMode === "usd"
            ? `India Domestic: ${mapped.indiaPrice} / mo`
            : `North America: ${mapped.usaPrice} / mo`,
        usaPrice: mapped.usaPrice,
        indiaPrice: mapped.indiaPrice,
        targetMetric: mapped.targetMetric,
        idealFor: mapped.idealFor,
        tierSubtitle: mapped.tierSubtitle,
      };
    }

    // Dynamic calculation if not specifically in map
    const rawPriceStr = pkg.price.replace(/[^0-9]/g, "");
    const rawPriceNum = parseInt(rawPriceStr, 10) || 2500;

    const tierMetrics = [
      "Target: 3.5x Pipeline Influx • Direct SLA",
      "Target: 4.8x Pipeline Multiplier • Omnichannel",
      "Target: Institutional Run-Rate • Multi-Team SLA",
    ];

    if (pkg.price.includes("₹")) {
      const inr = `₹${rawPriceNum.toLocaleString("en-IN")}`;
      const usdNum = Math.round(rawPriceNum / 83);
      const usd = `$${usdNum.toLocaleString("en-US")}`;
      return {
        displayPrice: currencyMode === "usd" ? usd : inr,
        displayPeriod: pkg.period || "/ month",
        altNote: currencyMode === "usd" ? `India Domestic: ${inr} / mo` : `North America: ${usd} / mo`,
        usaPrice: usd,
        indiaPrice: inr,
        targetMetric: tierMetrics[idx % 3],
        idealFor: `Designed for ${entity.marketFocus}`,
        tierSubtitle: `TIER 0${idx + 1} ENGAGEMENT`,
      };
    } else {
      const usd = `$${rawPriceNum.toLocaleString("en-US")}`;
      const inrNum = Math.round((rawPriceNum * 80) / 1000) * 1000;
      const inr = `₹${inrNum.toLocaleString("en-IN")}`;
      return {
        displayPrice: currencyMode === "usd" ? usd : inr,
        displayPeriod: pkg.period || "/ month",
        altNote: currencyMode === "usd" ? `India Domestic: ${inr} / mo` : `North America: ${usd} / mo`,
        usaPrice: usd,
        indiaPrice: inr,
        targetMetric: tierMetrics[idx % 3],
        idealFor: `Designed for ${entity.marketFocus}`,
        tierSubtitle: `TIER 0${idx + 1} ENGAGEMENT`,
      };
    }
  };

  const targetCompareHref = compareHref || `/companies/${entity.id}/packages`;

  return (
    <section
      id="packages"
      className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-[#FFFDFB] to-slate-50/60 border-b border-slate-200/90 overflow-hidden"
    >
      {/* Background Lighting */}
      <div className="absolute inset-0 white-grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200 bg-orange-50/80 shadow-2xs mb-4">
              <Sparkles size={14} className="text-[var(--color-jv-orange)]" />
              <span className="text-[var(--color-jv-orange)] text-xs font-bold uppercase tracking-wider">
                {badge}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 ml-0.5" />
            </div>

            {/* Bold Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-heading font-black text-slate-900 tracking-tight leading-[1.12]">
              {title}
            </h2>

            {/* Narrative Subtitle */}
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
              {subtitle}
            </p>
          </div>

          {/* Interactive Currency Switcher + Compare Link */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
            {/* Currency Toggle */}
            <div className="p-1 rounded-2xl bg-slate-100 border border-slate-200 shadow-2xs flex items-center gap-1">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider pl-2.5 pr-1 hidden sm:inline">
                Currency:
              </span>
              <button
                type="button"
                onClick={() => setCurrencyMode("usd")}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  currencyMode === "usd"
                    ? "bg-[var(--color-jv-orange)] text-white shadow-sm"
                    : "bg-transparent text-slate-600 hover:text-slate-900"
                }`}
              >
                <span>🇺🇸 USA ($ USD)</span>
              </button>

              <button
                type="button"
                onClick={() => setCurrencyMode("inr")}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  currencyMode === "inr"
                    ? "bg-[var(--color-jv-orange)] text-white shadow-sm"
                    : "bg-transparent text-slate-600 hover:text-slate-900"
                }`}
              >
                <span>🇮🇳 India (₹ INR)</span>
              </button>
            </div>

            <Link
              href={targetCompareHref}
              className="px-4 py-2.5 rounded-xl bg-white hover:bg-orange-50/60 text-slate-800 hover:text-[var(--color-jv-orange)] border border-slate-200 text-xs font-bold transition-all flex items-center gap-1.5 shadow-2xs"
            >
              <span>Compare All Retainers</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* 3 Pricing / Retainer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8 items-stretch mb-14">
          {packages.map((pkg, idx) => {
            const meta = getPackageMeta(pkg, idx);
            const tierNum = `0${idx + 1}`;

            return (
              <div
                key={idx}
                className={`group relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 h-full ${
                  pkg.highlight
                    ? "bg-white border-2 border-[var(--color-jv-orange)] shadow-2xl ring-4 ring-orange-500/10 z-20 hover:-translate-y-1.5"
                    : "bg-white border border-slate-200 hover:border-orange-300 shadow-sm hover:shadow-xl hover:-translate-y-1 z-10"
                }`}
              >
                {/* Top Highlight Ribbon for Center Card */}
                {pkg.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30">
                    <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[var(--color-jv-orange)] to-[#ea580c] text-white text-[11px] font-black uppercase tracking-wider shadow-md flex items-center gap-1.5 whitespace-nowrap">
                      <Sparkles size={13} className="text-amber-200" />
                      <span>MOST POPULAR • ENTERPRISE CHOICE</span>
                    </span>
                  </div>
                )}

                {/* Top Subtle Amber Highlight Bar */}
                <div
                  className={`absolute top-0 inset-x-0 h-1.5 rounded-t-3xl ${
                    pkg.highlight
                      ? "bg-gradient-to-r from-[var(--color-jv-orange)] via-amber-400 to-[#ea580c]"
                      : idx === 0
                      ? "bg-gradient-to-r from-blue-500 to-indigo-600"
                      : "bg-gradient-to-r from-purple-600 to-slate-900"
                  }`}
                />

                <div className="flex-1 flex flex-col">
                  {/* Category Header & Tier Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4 mt-1">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
                        pkg.highlight
                          ? "bg-orange-50 text-[var(--color-jv-orange)] border-orange-200/80"
                          : "bg-slate-100 text-slate-700 border-slate-200"
                      }`}
                    >
                      {pkg.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-200">
                      Tier {tierNum}
                    </span>
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-xl sm:text-2xl font-heading font-black text-slate-900 mb-2 leading-snug">
                    {pkg.name}
                  </h3>

                  {/* Plan Tagline */}
                  <p className="text-xs text-slate-600 mb-3 leading-relaxed min-h-[34px] font-normal">
                    {pkg.tagline}
                  </p>

                  {/* Target Profile Tag */}
                  <div className="mb-5 inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200/80">
                    <Target size={13} className="text-[var(--color-jv-orange)] shrink-0" />
                    <span className="truncate">{meta.idealFor}</span>
                  </div>

                  {/* Clean Executive Pricing Block */}
                  <div
                    className={`p-5 rounded-2xl border mb-5 transition-all ${
                      pkg.highlight
                        ? "bg-orange-50/40 border-orange-200/80 shadow-2xs"
                        : "bg-slate-50/80 border-slate-200/80"
                    }`}
                  >
                    <div className="flex items-baseline justify-between gap-2 flex-wrap mb-2">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-black text-slate-900 tracking-tight">
                          {meta.displayPrice}
                        </span>
                        <span className="text-xs font-bold text-slate-500">
                          {meta.displayPeriod}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                        Zero Agency Markup
                      </span>
                    </div>

                    {/* Clean Currency Equivalency Pill (No redundant duplicated price boxes) */}
                    <div className="pt-2.5 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
                      <span className="font-semibold text-[11px]">{meta.altNote}</span>
                      <span className="text-[10px] font-mono text-slate-400">Fixed Fee</span>
                    </div>
                  </div>

                  {/* Dynamic Tiered Impact Metric Pod */}
                  <div className="mb-6 p-3 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-2.5">
                    <TrendingUp size={15} className="text-emerald-600 shrink-0" />
                    <span className="text-xs font-bold text-slate-800 leading-snug">
                      {meta.targetMetric}
                    </span>
                  </div>

                  {/* Verified Features & SLA Deliverables */}
                  <div className="space-y-3 mb-8">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Included SLA Scope:
                    </span>
                    <ul className="space-y-2.5 text-xs font-medium">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <CheckCircle2
                            size={15}
                            className={`shrink-0 mt-0.5 ${
                              pkg.highlight ? "text-[var(--color-jv-orange)]" : "text-emerald-600"
                            }`}
                          />
                          <span className="leading-snug text-slate-700">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA & Specs Button (Clean, Non-Truncated) */}
                <div className="pt-5 border-t border-slate-100 mt-auto space-y-2">
                  <Link
                    href={`/companies/${entity.id}/contact?package=${encodeURIComponent(
                      `${pkg.name} (${currencyMode === "usd" ? meta.usaPrice : meta.indiaPrice})`
                    )}`}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm ${
                      pkg.highlight
                        ? "bg-[var(--color-jv-orange)] hover:bg-[#ea580c] text-white shadow-orange-900/20 hover:shadow-md"
                        : "bg-slate-900 hover:bg-slate-800 text-white"
                    }`}
                  >
                    <span>Select {pkg.name.split(" ")[0]} Plan</span>
                    <ArrowRight size={14} className="shrink-0" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => setModalPkgIndex(idx)}
                    className="w-full py-2 text-center text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                  >
                    View Complete SLA Specs
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Commercial Assurance Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold shrink-0 border border-emerald-100">
                <ShieldCheck size={20} />
              </div>
              <div>
                <span className="block text-xs font-black text-slate-900">Fixed-Fee Transparency</span>
                <span className="block text-[11px] text-slate-500 mt-0.5">Zero hidden markups or variable surprises</span>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[var(--color-jv-orange)] flex items-center justify-center font-bold shrink-0 border border-orange-100">
                <Globe2 size={20} />
              </div>
              <div>
                <span className="block text-xs font-black text-slate-900">Dual-Region Invoicing</span>
                <span className="block text-[11px] text-slate-500 mt-0.5">Billed in USD ($), GBP (£) or INR (₹)</span>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold shrink-0 border border-blue-100">
                <Clock size={20} />
              </div>
              <div>
                <span className="block text-xs font-black text-slate-900">Weekly Sprint Cadence</span>
                <span className="block text-[11px] text-slate-500 mt-0.5">Direct Slack channel &amp; live ROI dashboards</span>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold shrink-0 border border-purple-100">
                <Award size={20} />
              </div>
              <div>
                <span className="block text-xs font-black text-slate-900">Full IP Ownership</span>
                <span className="block text-[11px] text-slate-500 mt-0.5">100% client ownership of accounts &amp; code</span>
              </div>
            </div>
          </div>

          {/* Direct Partner Hotline Strip */}
          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <span className="font-bold text-slate-900">Need custom enterprise scoping?</span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span>Speak directly with our regional Growth Directors:</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs">
              <a
                href="tel:+919909700606"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 font-bold transition-colors shadow-2xs"
              >
                <span>🇮🇳 India:</span>
                <span className="font-mono text-slate-900">+91 99097 00606</span>
              </a>

              <a
                href="tel:+447344556070"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 font-bold transition-colors shadow-2xs"
              >
                <span>🌐 Global:</span>
                <span className="font-mono text-slate-900">+44 7344556070</span>
              </a>

              <Link
                href={`/companies/${entity.id}/contact`}
                className="px-4 py-2 rounded-xl bg-[var(--color-jv-orange)] hover:bg-[#ea580c] text-white font-bold transition-colors shadow-2xs flex items-center gap-1"
              >
                <span>Request Custom RFP</span>
                <ChevronRight size={13} />
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* Retainer SLA Specs Modal */}
      {modalPkgIndex !== null && packages[modalPkgIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setModalPkgIndex(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-jv-orange)] bg-orange-50 px-2.5 py-1 rounded-lg border border-orange-200/60">
                  {packages[modalPkgIndex].badge}
                </span>
                <span className="text-xs font-mono font-bold text-slate-400">
                  Tier 0{modalPkgIndex + 1}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-heading font-black text-slate-900 mt-2">
                {packages[modalPkgIndex].name}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {packages[modalPkgIndex].tagline}
              </p>

              {/* Price & Target Metric */}
              <div className="mt-5 p-4 rounded-2xl bg-orange-50/60 border border-orange-200/70 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 font-semibold block">Commercial Rate</span>
                  <span className="text-2xl font-heading font-black text-slate-900">
                    {getPackageMeta(packages[modalPkgIndex], modalPkgIndex).displayPrice}
                  </span>
                  <span className="text-xs text-slate-500 font-medium ml-1">
                    {getPackageMeta(packages[modalPkgIndex], modalPkgIndex).displayPeriod}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 block">
                    Zero Hidden Fees
                  </span>
                </div>
              </div>

              {/* SLA Deliverables */}
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Included SLA Scope &amp; Guaranteed Deliverables:
                </h4>
                <div className="space-y-2.5">
                  {packages[modalPkgIndex].features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-800"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-emerald-600 shrink-0 mt-0.5"
                      />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guarantee */}
              <div className="mt-6 p-3.5 rounded-2xl bg-slate-100/80 text-xs text-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-emerald-600 shrink-0" />
                  <span className="font-semibold">Full SLA Support • In-House Delivery</span>
                </div>
                <span className="font-bold text-slate-900">Weekly Sprints</span>
              </div>

              {/* CTA */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setModalPkgIndex(null)}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Close
                </button>
                <Link
                  href={`/companies/${entity.id}/contact?package=${encodeURIComponent(
                    `${packages[modalPkgIndex].name} (${
                      getPackageMeta(packages[modalPkgIndex], modalPkgIndex).displayPrice
                    })`
                  )}`}
                  className="px-5 py-2.5 rounded-xl bg-[var(--color-jv-orange)] hover:bg-[#ea580c] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all"
                >
                  <span>Select This Retainer</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
