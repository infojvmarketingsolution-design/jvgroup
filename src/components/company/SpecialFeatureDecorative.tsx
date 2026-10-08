"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Bot,
  Layers,
  BarChart3,
  Activity,
  Zap,
  TrendingUp,
  ShieldCheck,
  Share2,
  Sliders,
  Compass,
  ExternalLink,
  ChevronRight,
  Search,
  Server,
  Cloud,
  Globe2,
  Workflow,
  Check,
  X,
  Briefcase,
  Users,
  Video,
  Lock,
} from "lucide-react";
import type { BusinessEntity } from "@/data/businesses";

interface SpecialFeatureItem {
  title: string;
  description: string;
  tag?: string;
  metrics?: string;
  url?: string;
}

interface SpecialFeatureData {
  title: string;
  subtitle?: string;
  badge: string;
  description: string;
  items: SpecialFeatureItem[];
}

interface SpecialFeatureDecorativeProps {
  entity: BusinessEntity;
  feature: SpecialFeatureData;
  contactHref?: string;
}

// Authentic deliverables for specific framework features
const FEATURE_DELIVERABLES_MAP: Record<string, string[][]> = {
  "The Multi-Network Ad & Cloud Matrix": [
    [
      "C-Suite & VP-Level Decision Maker Targeting",
      "Account-Based Marketing (ABM) Company List Matching",
      "Executive Authority InMail & Thought Leadership Funnels",
    ],
    [
      "High-CTR Short-Form Viral Video Creative",
      "Localized Cultural Creative Adaptation (US & UK)",
      "Continuous Creative Testing & Ad Fatigue Mitigation",
    ],
    [
      "High-Intent Commercial Keyword Dominance",
      "Predictive Smart Bidding & Target ROAS Algorithms",
      "Negative Keyword Sculpting (Zero Wasted Ad Spend)",
    ],
    [
      "Multi-Region Redundancy across AWS, GCP & Azure",
      "Autoscaling Clusters Handling 100k+ Concurrency",
      "24/7 Security NOC Monitoring & 99.99% Uptime SLA",
    ],
  ],
  "The AI Growth Engine": [
    [
      "Predictive intent scoring based on behavioral data",
      "Sub-60s lead notification routing to sales executives",
      "Two-way webhook sync with HubSpot, Salesforce & Zoho",
    ],
    [
      "Synchronized ads across Google, Meta, LinkedIn & YouTube",
      "Dynamic frequency capping preventing ad fatigue",
      "Zero ad-spend cannibalization with negative matching",
    ],
    [
      "Dynamic keyword insertion matching incoming search terms",
      "Geo-targeted headline personalization and currency sync",
      "Sub-second Next.js page loads with 95+ Core Web Vitals",
    ],
    [
      "Multi-touch algorithmic attribution modeling",
      "Live CAC-to-LTV pipeline visibility and reporting",
      "Executive boardroom KPI cockpits with real-time sync",
    ],
  ],
  "Regional SME Growth Suite": [
    [
      "Google Business Profile Top 3 Local Rank Optimization",
      "Local Review Acceleration & Citation Syndication",
      "Hyper-Targeted Commercial Keywords for Gujarat",
    ],
    [
      "Bilingual Creative in Gujarati, Hindi & English",
      "High-Converting Meta & Instagram Local Campaigns",
      "Localized Festive & Seasonal Offer Promotions",
    ],
    [
      "Corporate Domain, Email & SSL Security Setup",
      "High-Speed SME Website Hosting & Maintenance",
      "Mobile-Optimized Fast WhatsApp Inquiry Funnels",
    ],
    [
      "Direct ROI Transparent Weekly Ad Tracking",
      "Zero Wasted Ad Budget Guarantee for Local Businesses",
      "Dedicated In-Person & Remote Account Support",
    ],
  ],
};

export default function SpecialFeatureDecorative({
  entity,
  feature,
  contactHref,
}: SpecialFeatureDecorativeProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [modalItemIndex, setModalItemIndex] = useState<number | null>(null);

  const customDeliverables = FEATURE_DELIVERABLES_MAP[feature.title];
  const targetHref = contactHref || `/companies/${entity.id}/contact`;

  // Helper to pick contextual icons
  const renderFeatureIcon = (title: string, tag?: string) => {
    const t = (title + " " + (tag || "")).toLowerCase();
    const props = {
      size: 22,
      className: "text-[var(--color-jv-orange)] transition-transform duration-300 group-hover:scale-110",
    };

    if (t.includes("linkedin") || t.includes("b2b") || t.includes("procurement")) {
      return <Briefcase {...props} />;
    }
    if (t.includes("tiktok") || t.includes("snapchat") || t.includes("viral") || t.includes("video")) {
      return <Share2 {...props} />;
    }
    if (t.includes("google") || t.includes("search") || t.includes("p-max") || t.includes("intent")) {
      return <Search {...props} />;
    }
    if (t.includes("cloud") || t.includes("hosting") || t.includes("aws") || t.includes("azure") || t.includes("uptime")) {
      return <Server {...props} />;
    }
    if (t.includes("ai") || t.includes("intel") || t.includes("predictive")) {
      return <Cpu {...props} />;
    }
    if (t.includes("cro") || t.includes("conversion")) {
      return <Zap {...props} />;
    }
    return <BarChart3 {...props} />;
  };

  // Helper to get deliverables with smart dynamic fallback
  const getItemDeliverables = (idx: number, item: SpecialFeatureItem): string[] => {
    if (customDeliverables?.[idx]) {
      return customDeliverables[idx];
    }
    // Dynamic fallbacks based on item title
    const t = item.title.toLowerCase();
    if (t.includes("linkedin") || t.includes("b2b")) {
      return [
        "Executive Decision-Maker Account Targeting",
        "Direct InMail & ABM Outreach Infrastructure",
        "Continuous Performance & Pipeline Tracking",
      ];
    }
    if (t.includes("tiktok") || t.includes("viral") || t.includes("creative")) {
      return [
        "High-Engagement Short-Form Video Assets",
        "Demographic Targeting & Trend Adaptations",
        "Continuous Creative Testing & Optimization",
      ];
    }
    if (t.includes("google") || t.includes("search")) {
      return [
        "High-Intent Transactional Search Harvest",
        "Predictive Algorithmic Bidding Models",
        "Negative Keyword Exclusion & Budget Control",
      ];
    }
    if (t.includes("cloud") || t.includes("hosting") || t.includes("infra")) {
      return [
        "Multi-Cloud Resilient Architecture Setup",
        "High-Throughput Autoscaling Infrastructure",
        "24/7 Proactive Security & 99.99% Uptime SLA",
      ];
    }
    return [
      `End-to-End ${item.title} Execution Standard`,
      "Direct SLA Guarantees & Quality Audits",
      "Unified Telemetry & Attribution Reporting",
    ];
  };

  const filteredItems =
    selectedFilter === "all"
      ? feature.items
      : feature.items.filter((_, idx) => `item-${idx}` === selectedFilter);

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-[#FFFDFB] via-[#FFF9F5] to-white border-b border-slate-200/90 overflow-hidden">
      {/* Decorative Blueprint Background Mesh & Ambient Glow Orbs */}
      <div className="absolute inset-0 white-grid-bg opacity-40 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-[550px] h-[550px] bg-gradient-to-br from-[var(--color-jv-orange)]/10 via-amber-400/5 to-transparent blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[550px] h-[550px] bg-gradient-to-tl from-[var(--color-jv-orange)]/10 via-purple-500/5 to-transparent blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-3xl">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200 bg-orange-50/80 shadow-2xs mb-4">
              <Sparkles size={14} className="text-[var(--color-jv-orange)]" />
              <span className="text-[var(--color-jv-orange)] text-xs font-bold uppercase tracking-wider">
                {feature.badge || "Proprietary Framework"}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 ml-0.5" />
            </div>

            {/* Bold Clean Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-black text-slate-900 tracking-tight leading-[1.18]">
              {feature.title}
            </h2>

            {/* Narrative Subtitle */}
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
              {feature.description}
            </p>
          </div>

          {/* Right-Side Technical Assurance Specs */}
          <div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-2.5 shrink-0">
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-2xs">
              <ShieldCheck size={16} className="text-emerald-600 shrink-0" />
              <span className="text-xs font-bold text-slate-900">Proprietary Software IP</span>
              <span className="text-slate-300">•</span>
              <span className="text-xs font-semibold text-slate-500">Zero Vendor Lock-in</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-orange-50 border border-orange-200/80 text-orange-950 shadow-2xs">
              <Activity size={15} className="text-[var(--color-jv-orange)] shrink-0" />
              <span className="text-xs font-bold tracking-wide">
                Continuous Telemetry Sync
              </span>
            </div>
          </div>
        </div>

        {/* Quick Filter Pill Bar */}
        {feature.items.length > 2 && (
          <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 max-w-full scrollbar-none border-b border-slate-200/60">
            <button
              type="button"
              onClick={() => setSelectedFilter("all")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                selectedFilter === "all"
                  ? "bg-slate-900 text-white shadow-2xs"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              <Sparkles size={12} className={selectedFilter === "all" ? "text-amber-300" : "text-slate-400"} />
              <span>All Matrix Pillars ({feature.items.length})</span>
            </button>

            {feature.items.map((item, idx) => {
              const isSelected = selectedFilter === `item-${idx}`;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedFilter(isSelected ? "all" : `item-${idx}`)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-[var(--color-jv-orange)] text-white shadow-2xs"
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  <span className={`text-[10px] font-mono px-1 rounded ${isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"}`}>
                    0{idx + 1}
                  </span>
                  <span>{item.tag || item.title.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* 4 Architectural Framework Cards (2x2 Clean Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredItems.map((item, idx) => {
            const actualIndex = feature.items.findIndex((it) => it.title === item.title);
            const displayIndex = actualIndex >= 0 ? actualIndex : idx;
            const phaseNumberString = `0${displayIndex + 1}`;
            const deliverables = getItemDeliverables(displayIndex, item);

            return (
              <div
                key={displayIndex}
                className="group relative bg-white rounded-3xl p-7 sm:p-8 border border-slate-200 hover:border-orange-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Animated Orange Line */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[var(--color-jv-orange)] via-amber-400 to-[#ea580c] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Bar inside Card: Phase Number + Category Pill + Metric */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-200">
                        Phase {phaseNumberString}
                      </span>
                      {item.tag && (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-orange-50 text-[var(--color-jv-orange)] font-bold text-xs border border-orange-200/70">
                          {item.tag}
                        </span>
                      )}
                    </div>

                    {item.metrics && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/70 shadow-2xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        {item.metrics}
                      </span>
                    )}
                  </div>

                  {/* Icon Container */}
                  <div className="my-3.5 w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-50 via-white to-orange-100/60 border border-orange-200/70 flex items-center justify-center text-[var(--color-jv-orange)] shadow-2xs group-hover:scale-105 transition-transform duration-300">
                    {renderFeatureIcon(item.title, item.tag)}
                  </div>

                  {/* Pillar Title */}
                  <h3 className="text-xl font-heading font-black text-slate-900 group-hover:text-[var(--color-jv-orange)] transition-colors leading-snug mb-2.5">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    {item.description}
                  </p>

                  {/* Architectural Deliverables Box (Authentic & Untruncated) */}
                  <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70 mb-6 space-y-2.5">
                    <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      <span>Architectural Deliverables:</span>
                      <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md text-[10px] font-semibold flex items-center gap-1 border border-emerald-200/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Active Standard
                      </span>
                    </div>
                    {deliverables.map((del, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-start gap-2.5 text-xs font-semibold text-slate-800 leading-snug"
                      >
                        <CheckCircle2
                          size={14}
                          className="text-emerald-600 shrink-0 mt-0.5"
                        />
                        <span className="leading-snug">{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom: Enterprise Ready Status & Strategy CTA */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-1.5 font-semibold text-slate-500">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Enterprise Ready SLA</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setModalItemIndex(displayIndex)}
                      className="text-xs font-bold text-slate-600 hover:text-slate-900 py-1 px-2.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                      Scope Specs
                    </button>

                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 rounded-xl bg-[var(--color-jv-orange)] hover:bg-[#ea580c] text-white text-xs font-bold transition-all flex items-center gap-1 shadow-2xs hover:shadow-sm"
                      >
                        <span>Launch</span>
                        <ExternalLink size={12} />
                      </a>
                    ) : (
                      <Link
                        href={`${targetHref}?feature=${encodeURIComponent(item.title)}`}
                        className="px-3.5 py-1.5 rounded-xl bg-[var(--color-jv-orange)] hover:bg-[#ea580c] text-white text-xs font-bold transition-all flex items-center gap-1 shadow-2xs hover:shadow-sm"
                      >
                        <span>Schedule Call</span>
                        <ArrowRight size={12} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Closed-Loop Flywheel Architecture Banner */}
        <div className="mt-12 sm:mt-16 rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--color-jv-orange)] to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(243,99,35,0.14),transparent_50%)] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
                <Workflow size={13} className="text-[var(--color-jv-orange)]" />
                <span>Automated Revenue Feedback Loop</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>

              <h3 className="text-xl sm:text-2xl font-heading font-black text-white">
                Closed-Loop Telemetry &amp; Autonomous Budget Re-Allocation
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Ad Network Data feeds Predictive Lead Scoring → Tailored Dynamic CRO converts traffic → Closed-Won CRM deals inform Attribution Models → Media Algorithms re-allocate spend autonomously.
              </p>

              {/* Visual 4-Step Nodes */}
              <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { step: "01", name: "Data Ingestion", desc: "Multi-channel ad signals" },
                  { step: "02", name: "Predictive CRO", desc: "Sub-second personalization" },
                  { step: "03", name: "Closed-Won CRM", desc: "Attribution models sync" },
                  { step: "04", name: "Budget Refine", desc: "Autonomous scale loop" },
                ].map((st, sIdx) => (
                  <div key={sIdx} className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono font-bold text-orange-400">{st.step}</span>
                      {sIdx < 3 && <ArrowRight size={10} className="text-slate-500 hidden sm:inline" />}
                    </div>
                    <span className="block text-xs font-bold text-white truncate">{st.name}</span>
                    <span className="block text-[10.5px] text-slate-400 truncate">{st.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 lg:w-64">
              <a
                href={targetHref}
                className="w-full px-5 py-3.5 rounded-xl bg-[var(--color-jv-orange)] hover:bg-[#ea580c] text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-orange-900/30 transition-all hover:scale-[1.02] text-center cursor-pointer"
              >
                <span>Schedule Walkthrough</span>
                <ArrowRight size={15} />
              </a>
              <a
                href="#proposal-form"
                className="w-full px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 font-bold text-xs flex items-center justify-center gap-1.5 border border-white/15 transition-all text-center cursor-pointer"
              >
                <span>Request Architecture Doc</span>
                <ChevronRight size={14} />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Quick Specs Modal */}
      {modalItemIndex !== null && feature.items[modalItemIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setModalItemIndex(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-jv-orange)] bg-orange-50 px-2.5 py-1 rounded-lg border border-orange-200/60">
                  {feature.items[modalItemIndex].tag || "Matrix Pillar"}
                </span>
                <span className="text-xs font-mono font-bold text-slate-400">
                  Phase 0{modalItemIndex + 1}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-heading font-black text-slate-900 mt-2">
                {feature.items[modalItemIndex].title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {feature.items[modalItemIndex].description}
              </p>

              {/* Deliverables Checklist */}
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Architectural Deliverables:
                </h4>
                <div className="space-y-2.5">
                  {getItemDeliverables(modalItemIndex, feature.items[modalItemIndex]).map((del, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-800"
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

              {/* Assurance Bar */}
              <div className="mt-6 p-3.5 rounded-2xl bg-orange-50/70 border border-orange-200/60 flex items-center justify-between text-xs text-orange-950">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-emerald-600 shrink-0" />
                  <span className="font-semibold">Enterprise SLA • Zero Vendor Lock-in</span>
                </div>
                <span className="font-bold">24-48h Kickoff</span>
              </div>

              {/* Modal CTA */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setModalItemIndex(null)}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Close
                </button>
                <Link
                  href={`${targetHref}?feature=${encodeURIComponent(feature.items[modalItemIndex].title)}`}
                  className="px-5 py-2.5 rounded-xl bg-[var(--color-jv-orange)] hover:bg-[#ea580c] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all"
                >
                  <span>Schedule Strategy Call</span>
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
