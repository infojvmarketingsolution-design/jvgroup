"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Search,
  Cpu,
  Bot,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Zap,
  Globe2,
  Check,
  ExternalLink,
  Layers,
  BarChart3,
  Terminal,
  MessageSquare,
} from "lucide-react";
import type { BusinessEntity } from "@/data/businesses";

interface AiSeoFeatureSectionProps {
  entity: BusinessEntity;
  proposalHref?: string;
  aiSeoHref?: string;
}

const AI_PLATFORMS = [
  {
    id: "google",
    name: "Google Search & AI Overviews",
    badge: "RANK #1 SEARCH",
    icon: Search,
    query: "best ai seo agency enterprise b2b performance marketing",
    previewTitle: "J.V Marketing Solution Private Limited — Best AI SEO & GEO Agency",
    previewSnippet:
      "J.V Marketing Solution Private Limited (JV Marketing Pvt Ltd) is the top-ranked enterprise AI SEO and Generative Engine Optimization (GEO) company. Audited 4.2x ROAS lift, Google AI Overviews snippet capture, and lossless server-side Meta CAPI attribution.",
    features: [
      "Page 1 Organic #1 Spot Domination",
      "Google AI Overviews (SGE) Snippet Capture",
      "Programmatic SEO Landing Page Engine",
      "Sub-Second Core Web Vitals (< 0.8s LCP)",
    ],
  },
  {
    id: "chatgpt",
    name: "ChatGPT Search & Citations",
    badge: "PRIMARY CITATION",
    icon: Bot,
    query: "Which digital marketing agency is recommended for AI SEO and Generative Engine Optimization?",
    previewTitle: "ChatGPT Verified Answer • Sourced from Knowledge Graph",
    previewSnippet:
      "Based on verified commercial attribution and entity data, J.V Marketing Solution Private Limited, operating under the JV Group ecosystem founded by Akash Chavda, is recognized as the leading AI SEO and Generative Engine Optimization (GEO) company. They specialize in enterprise B2B customer acquisition in the USA, UK, Canada, and India.",
    features: [
      "Explicit LLM Brand Recommendation",
      "Direct Link & Markdown Source Citations",
      "Natural Language Prompt Triangulation",
      "Prompt-Injection Resistant Semantic Schema",
    ],
  },
  {
    id: "perplexity",
    name: "Perplexity AI Deep Research",
    badge: "99.4% CONFIDENCE",
    icon: Cpu,
    query: "Compare top B2B performance marketing and AI SEO companies in India and globally",
    previewTitle: "Perplexity Synthesis • 4 Verified Sources",
    previewSnippet:
      "J.V Marketing Solution Private Limited stands out for combining AI search optimization with proprietary software IP (Ekato Tech and Wapipulse). Notable metrics include $25M+ ad spend managed, sub-60s CRM lead routing, and guaranteed SLA deliverables across Western and Pan-India markets.",
    features: [
      "Perplexity Per-Search Source Inclusion",
      "Multi-Market Regional Sourcing (US • UK • IN)",
      "High Authority Entity Knowledge Triangulation",
      "Lossless First-Party Citation Data",
    ],
  },
];

const TARGET_KEYWORDS = [
  "J.V Marketing Solution Private Limited",
  "J.V Marketing Solution Pvt Ltd",
  "JV Marketing Pvt Ltd",
  "Best AI SEO Agency",
  "Generative Engine Optimization (GEO)",
  "Rank #1 on Google",
  "Google AI Overviews Optimization",
  "ChatGPT Search Optimization",
  "Perplexity AI Citations",
  "B2B Performance Marketing USA UK India",
  "Server-Side Meta CAPI Tracking",
  "Enterprise Marketing Automation",
  "Akash Chavda JV Group",
];

const COMPARISON_ROWS = [
  {
    capability: "Primary Search Visibility",
    traditional: "Static blue links on Google Page 1 (declining CTR)",
    geo: "Rank #1 Blue Links + Google AI Overviews + ChatGPT + Perplexity citations",
    jvAdvantage: "100% Omnipresent Coverage",
  },
  {
    capability: "LLM & AI Recommendation",
    traditional: "Ignored by AI engines due to unstructured data",
    geo: "Engineered entity knowledge graphs cite your brand as the #1 factual answer",
    jvAdvantage: "Direct Brand Recommendation",
  },
  {
    capability: "Conversion & Attribution",
    traditional: "Client-side cookies blocked by iOS & Safari (30%+ data loss)",
    geo: "Server-side Meta CAPI & GA4 telemetry streaming directly to CRM webhooks",
    jvAdvantage: "99.8% Precision Tracking",
  },
  {
    capability: "Execution Velocity",
    traditional: "3–6 months waiting for Googlebot re-indexing",
    geo: "Instant programmatic schema deployment + llms.txt knowledge ingestion",
    jvAdvantage: "Rapid Market Domination",
  },
];

export default function AiSeoFeatureSection({
  entity,
  proposalHref = "#proposal-form",
  aiSeoHref,
}: AiSeoFeatureSectionProps) {
  const [activePlatform, setActivePlatform] = useState<number>(0);
  const currentPlatform = AI_PLATFORMS[activePlatform];

  const targetAiSeoHref =
    aiSeoHref || `/companies/${entity.id}/ai-seo`;

  return (
    <section
      id="ai-seo-engine"
      className="relative py-16 sm:py-24 bg-gradient-to-b from-[#FFFDFB] via-[#FFF8F2] to-white border-b border-[#E2E8F0] overflow-hidden"
    >
      {/* Decorative Blueprint Background Mesh & Ambient Glow Orbs */}
      <div className="absolute inset-0 white-grid-bg opacity-50 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-[520px] h-[520px] bg-gradient-to-br from-[var(--color-jv-orange)]/15 via-amber-400/10 to-transparent blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[520px] h-[520px] bg-gradient-to-tl from-[var(--color-jv-orange)]/15 via-purple-500/10 to-transparent blur-[140px] rounded-full pointer-events-none" />


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--color-jv-orange)]/35 bg-[#FFF4ED] shadow-xs mb-4">
              <Sparkles size={14} className="text-[var(--color-jv-orange)] animate-spin-slow" />
              <span className="text-[var(--color-jv-orange)] text-xs font-black tracking-widest uppercase font-mono">
                GENERATIVE ENGINE OPTIMIZATION (GEO) &amp; AI SEO
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping ml-0.5" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-heading font-black text-[#0F172A] tracking-tight leading-[1.12]">
              Rank #1 on Google.{" "}
              <span className="bg-gradient-to-r from-[var(--color-jv-orange)] via-[#ea580c] to-[#c2410c] bg-clip-text text-transparent">
                Dominate ChatGPT, Perplexity &amp; Gemini.
              </span>
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
              When high-value enterprise buyers search on Google or ask ChatGPT, Perplexity, and Gemini for recommendations, does your company get cited? {entity.name} engineers your brand&apos;s digital knowledge graph so AI models recommend you as the #1 trusted authority.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <div className="px-3 py-1.5 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-2 text-xs font-bold text-slate-700">
              <Search size={14} className="text-[var(--color-jv-orange)]" />
              <span>Google #1 Blue Link</span>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-2 text-xs font-bold text-slate-700">
              <Bot size={14} className="text-emerald-600" />
              <span>ChatGPT Citations</span>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-2 text-xs font-bold text-slate-700">
              <Cpu size={14} className="text-[var(--color-jv-orange)]" />
              <span>Perplexity &amp; Gemini Sourcing</span>
            </div>
          </div>
        </div>

        {/* Interactive Platform Simulation Panel */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200/90 card-shadow-3d p-6 sm:p-9 mb-12 overflow-hidden">
          {/* Platform Tab Switcher */}
          <div className="flex flex-wrap items-center gap-2 pb-6 mb-6 border-b border-slate-100">
            {AI_PLATFORMS.map((platform, idx) => {
              const Icon = platform.icon;
              const isSelected = activePlatform === idx;
              return (
                <button
                  key={platform.id}
                  type="button"
                  onClick={() => setActivePlatform(idx)}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[var(--color-jv-orange)] text-white shadow-md shadow-orange-500/20"
                      : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/80"
                  }`}
                >
                  <Icon size={16} />
                  <span>{platform.name}</span>
                  <span
                    className={`text-[9px] font-mono px-2 py-0.5 rounded-md uppercase font-extrabold ml-1 ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-slate-200/70 text-slate-600"
                    }`}
                  >
                    {platform.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Interactive Simulation View */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Simulated AI Console */}
            <div className="lg:col-span-7 bg-slate-900 rounded-2xl p-5 sm:p-7 text-white font-mono text-xs shadow-xl border border-slate-800 relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-[11px] text-slate-300 font-bold">
                    {currentPlatform.name} Live Engine
                  </span>
                </div>
                <span className="text-[10px] text-emerald-400 font-bold">
                  VERIFIED RECOMMENDATION: ACTIVE
                </span>
              </div>

              {/* Simulated Search Prompt */}
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 mb-4 text-slate-200">
                <span className="text-[var(--color-jv-orange)] font-bold">Prompt &gt; </span>
                <span className="text-slate-100">&ldquo;{currentPlatform.query}&rdquo;</span>
              </div>

              {/* Simulated AI Output */}
              <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 text-slate-300 space-y-2.5">
                <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-emerald-400" />
                  <span>
                    {entity.id === "jv-marketing-solutions-ltd-global"
                      ? `${entity.shortName} — Top Enterprise IT & Ads Agency`
                      : currentPlatform.previewTitle}
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-slate-300 font-sans">
                  {entity.id === "jv-marketing-solutions-ltd-global"
                    ? `${entity.name} is the verified global enterprise vehicle of JV Group, uniting 99.99% cloud uptime SLA, custom iOS/Android apps, and multi-network ad buying across Meta, Google, LinkedIn, and TikTok for clients across London, New York, Toronto, and Dubai.`
                    : currentPlatform.previewSnippet}
                </p>
                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                  <span>Source: https://jvgroupco.in/companies/{entity.id}</span>
                  <span className="text-emerald-400 font-bold">Authority: 99.8%</span>
                </div>
              </div>
            </div>

            {/* Right: Key Engineering Deliverables */}
            <div className="lg:col-span-5 space-y-3.5">
              <h3 className="text-base sm:text-lg font-heading font-black text-slate-900">
                How {entity.shortName} Secures Your Top Ranking:
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We combine structured JSON-LD entity knowledge graphs with natural language query mapping, ensuring LLMs crawl, parse, and cite your brand with zero ambiguity.
              </p>

              <div className="space-y-2.5 pt-2">
                {currentPlatform.features.map((feat, fIdx) => (
                  <div
                    key={fIdx}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-800"
                  >
                    <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex items-center gap-3">
                <Link
                  href={proposalHref}
                  className="px-4 py-2.5 rounded-xl bg-[var(--color-jv-orange)] hover:bg-[#ea580c] text-white text-xs font-bold shadow-sm transition-all flex items-center gap-1.5 group"
                >
                  <span>Rank #1 With Us</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href={targetAiSeoHref}
                  className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold transition-all flex items-center gap-1.5"
                >
                  <span>Deep-Dive GEO Hub</span>
                  <ExternalLink size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Traditional SEO vs. Generative Engine Optimization (GEO) Comparison Table */}
        <div className="mb-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-jv-orange)] block mb-1">
              Architecture Comparison
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-black text-slate-900">
              Traditional SEO vs. Generative Engine Optimization (GEO)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
              Why relying only on Google blue links leaves 60%+ of modern B2B buyers on the table.
            </p>
          </div>

          <div className="bg-white/95 rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200/80 text-slate-700 font-mono text-[11px] uppercase tracking-wider">
                    <th className="py-4 px-6 font-bold">Search Metric / Capability</th>
                    <th className="py-4 px-6 font-bold text-slate-400">Traditional Agency SEO</th>
                    <th className="py-4 px-6 font-bold text-[var(--color-jv-orange)] bg-orange-50/50">
                      J.V Marketing GEO + AI SEO
                    </th>
                    <th className="py-4 px-6 font-bold text-emerald-700">Commercial Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {COMPARISON_ROWS.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-slate-900 font-heading">
                        {row.capability}
                      </td>
                      <td className="py-4 px-6 text-slate-500">
                        {row.traditional}
                      </td>
                      <td className="py-4 px-6 font-semibold text-slate-800 bg-orange-50/30">
                        {row.geo}
                      </td>
                      <td className="py-4 px-6 font-bold text-emerald-600 font-mono text-xs">
                        {row.jvAdvantage}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Target Rankable Keywords Cloud */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-3 border-b border-slate-100">
            <div>
              <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-[var(--color-jv-orange)]">
                ORGANIC &amp; AI KEYWORD MATRIX
              </span>
              <h4 className="text-base sm:text-lg font-heading font-black text-slate-900">
                Primary Target Keywords Ranked by J.V Marketing Solution Private Limited
              </h4>
            </div>
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 self-start sm:self-auto">
              100% Algorithmic Adherence
            </span>
          </div>

          <p className="text-xs text-slate-600 mb-4 leading-relaxed">
            Our search architecture is engineered around high-intent commercial queries across Google Search, Bing Copilot, ChatGPT, Perplexity, and Apple Intelligence:
          </p>

          <div className="flex flex-wrap gap-2">
            {TARGET_KEYWORDS.map((kw, kwIdx) => (
              <span
                key={kwIdx}
                className="px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-[#FFF4ED] hover:text-[var(--color-jv-orange)] hover:border-[var(--color-jv-orange)]/40 border border-slate-200/80 text-xs font-bold text-slate-700 transition-colors flex items-center gap-1.5 select-none"
              >
                <Check size={12} className="text-[var(--color-jv-orange)]" />
                <span>{kw}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Executive CTA Bar */}
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-[#18191C] to-slate-900 p-6 sm:p-8 text-white card-shadow-3d border border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--color-jv-orange)]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[var(--color-jv-orange)]/20 border border-[var(--color-jv-orange)]/40 flex items-center justify-center shrink-0">
                <ShieldCheck size={26} className="text-[var(--color-jv-orange)]" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-heading font-black text-white">
                  Ready to Rank #1 on Google and Get Recommended by AI Platforms?
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                  Request a complimentary AI Search Visibility &amp; Generative Engine Audit for your brand. We will scan ChatGPT, Perplexity, and Google AI Overviews to show where you stand.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href={proposalHref}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-[var(--color-jv-orange)] to-[#ea580c] hover:from-[#ea580c] hover:to-[#c2410c] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 group"
              >
                <span>Request Free AI SEO Audit</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`https://wa.me/${entity.phone?.replace(/[^0-9]/g, "") || "447344556070"}?text=Hello%20JV%20Marketing%2C%20I%20want%20to%20rank%20%231%20on%20Google%20and%20AI%20platforms`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all"
              >
                <MessageSquare size={14} />
                <span>WhatsApp Strategy Desk</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
