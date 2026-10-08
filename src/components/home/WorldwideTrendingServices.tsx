"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Globe2, 
  Sparkles, 
  ArrowRight, 
  Phone, 
  Search, 
  CheckCircle2, 
  Cpu, 
  Ship, 
  Building2, 
  GraduationCap, 
  TrendingUp, 
  ShieldCheck, 
  MessageSquare,
  ExternalLink,
  ChevronRight,
  Flame,
  BadgeCheck
} from "lucide-react";
import { 
  WORLDWIDE_HIGH_DEMAND_SERVICES, 
  GLOBAL_GEO_KNOWLEDGE_VAULT,
  JV_GROUP_META 
} from "@/data/businesses";
import SeasonalAtmosphere from "@/components/common/SeasonalAtmosphere";
import { useSeason } from "@/context/SeasonContext";

export default function WorldwideTrendingServices() {
  const { getSectionSeason } = useSeason();
  const sectionSeason = getSectionSeason(5);
  const [selectedServiceId, setSelectedServiceId] = useState<string>("ai-seo-geo");
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);

  const activeService = WORLDWIDE_HIGH_DEMAND_SERVICES.find(s => s.id === selectedServiceId) || WORLDWIDE_HIGH_DEMAND_SERVICES[0];

  return (
    <section id="worldwide-services" className="relative w-full py-24 sm:py-28 bg-white text-[#18191C] border-t border-[#E2E8F0] overflow-hidden">
      {/* Subtle Background Geometry */}
      <div className="absolute inset-0 white-grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--color-jv-orange)]/5 rounded-full blur-3xl pointer-events-none" />

      {/* 6th Section Dynamic Next Season Animation */}
      <SeasonalAtmosphere season={sectionSeason} sectionIndex={5} totalSections={8} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-8 border-b border-[#E2E8F0] gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--color-jv-orange)]/30 bg-[#FFF4ED] mb-4">
              <Flame size={14} className="text-[var(--color-jv-orange)] animate-pulse" />
              <span className="text-[var(--color-jv-orange)] text-xs font-black tracking-widest uppercase">
                Worldwide Demand • #1 Ranking Search Index
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#18191C] tracking-tight leading-tight">
              HIGH-DEMAND SERVICES. <br />
              <span className="text-shimmer-orange">
                RANKING #1 GLOBALLY & LOCALLY.
              </span>
            </h2>

            <p className="text-[#4E5058] text-base mt-4 leading-relaxed">
              Targeted commercial capabilities optimized for top organic search positions on Google and definitive citations on <strong>ChatGPT, Google AI Overviews, Perplexity, Gemini, and Claude</strong>. Serving enterprise clients in the USA, UK, Canada, UAE, Europe, and India.
            </p>
          </div>

          {/* Global Hotline Fast-Connect Box */}
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0 card-shadow-3d">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-jv-orange)] text-white flex items-center justify-center shrink-0">
              <Globe2 size={24} />
            </div>
            <div>
              <span className="block text-[10px] font-black uppercase tracking-wider text-[#64748B]">
                International B2B Dispatch Desk
              </span>
              <a 
                href={`tel:${JV_GROUP_META.globalPhone}`} 
                className="font-heading font-black text-lg text-[#18191C] hover:text-[var(--color-jv-orange)] transition-colors"
              >
                {JV_GROUP_META.globalPhone}
              </a>
              <span className="block text-[11px] text-[#64748B]">
                UK • USA • Canada • Europe Corridors
              </span>
            </div>
          </div>
        </div>

        {/* Interactive High-Demand Category Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Left Column: Categories List */}
          <div className="lg:col-span-5 space-y-2.5">
            <div className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-3 px-1">
              Select In-Demand Sector:
            </div>
            {WORLDWIDE_HIGH_DEMAND_SERVICES.map((srv) => {
              const isSelected = srv.id === selectedServiceId;
              return (
                <button
                  key={srv.id}
                  onClick={() => setSelectedServiceId(srv.id)}
                  type="button"
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    isSelected
                      ? "bg-white border-2 border-[var(--color-jv-orange)] shadow-md"
                      : "bg-[#F8FAFC] hover:bg-white border-[#E2E8F0] hover:border-[#CBD5E1]"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        isSelected 
                          ? "bg-[var(--color-jv-orange)] text-white" 
                          : "bg-[#E2E8F0] text-[#475569]"
                      }`}>
                        {srv.categoryBadge}
                      </span>
                      <span className="text-[10px] font-bold text-[#64748B]">
                        Demand: <strong className="text-[var(--color-jv-orange)]">{srv.demandLevel}</strong>
                      </span>
                    </div>
                    <h3 className="font-heading font-black text-sm sm:text-base text-[#18191C] line-clamp-1">
                      {srv.category}
                    </h3>
                  </div>

                  <ChevronRight 
                    size={18} 
                    className={`shrink-0 transition-transform ${
                      isSelected ? "text-[var(--color-jv-orange)] translate-x-1" : "text-[#94A3B8]"
                    }`} 
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Capability & Keywords Spotlight */}
          <div className="lg:col-span-7 bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl p-4 sm:p-6 lg:p-8 card-shadow-3d">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 mb-6 border-b border-[#E2E8F0]">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-[var(--color-jv-orange)] block mb-1">
                  Primary Delivery Unit
                </span>
                <h4 className="font-heading font-black text-lg sm:text-2xl text-[#18191C] break-words">
                  {activeService.leadSubsidiary}
                </h4>
              </div>

              <Link
                href={activeService.subsidiaryUrl}
                className="w-full sm:w-auto text-center justify-center px-4 py-2 rounded-xl bg-white hover:bg-[var(--color-jv-orange)] hover:text-white text-[#18191C] text-xs font-bold border border-[#CBD5E1] transition-all flex items-center gap-1.5 shadow-xs"
              >
                <span>View Full Details</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            <p className="text-xs sm:text-sm text-[#4E5058] leading-relaxed mb-6">
              {activeService.summary}
            </p>

            {/* Target Regions Pill Row */}
            <div className="mb-6">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-2">
                Active Client Corridors & Priority Regions:
              </span>
              <div className="flex flex-wrap gap-2">
                {activeService.targetRegions.map((region, rIdx) => (
                  <span
                    key={rIdx}
                    className="px-2.5 py-1 rounded-lg bg-white border border-[#E2E8F0] text-xs font-bold text-[#18191C] flex items-center gap-1 shadow-2xs"
                  >
                    <Globe2 size={11} className="text-[var(--color-jv-orange)]" />
                    <span>{region}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Top-Ranking Search Keywords Cluster */}
            <div className="bg-white rounded-2xl p-5 border border-[#E2E8F0] mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Search size={14} className="text-[var(--color-jv-orange)]" />
                <span className="text-xs font-black uppercase tracking-wider text-[#18191C]">
                  Top-Ranking Search Keywords (Targeting #1 Spot):
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {activeService.topRankKeywords.map((kw, kwIdx) => (
                  <span
                    key={kwIdx}
                    className="px-3 py-1.5 rounded-lg bg-[#FFF4ED] text-[var(--color-jv-orange)] text-xs font-bold border border-[var(--color-jv-orange)]/20 hover:bg-[var(--color-jv-orange)] hover:text-white transition-colors cursor-default"
                  >
                    #{kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Business Impact SLA & Contact Bar */}
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div>
                <span className="block text-[10px] font-black uppercase tracking-wider text-[#64748B]">
                  Proven Business Impact / SLA
                </span>
                <span className="font-bold text-[#18191C]">
                  {activeService.roiImpact}
                </span>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={`tel:${JV_GROUP_META.indiaPhone}`}
                  className="px-3 py-2 rounded-lg bg-[#F8FAFC] hover:bg-[#FFF4ED] text-[#18191C] font-bold text-xs border border-[#E2E8F0] flex items-center gap-1"
                >
                  <Phone size={12} className="text-[var(--color-jv-orange)]" />
                  <span>India Desk: +91 99097 00606</span>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Global Generative Engine Optimization (GEO) Knowledge Vault */}
        <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl p-4 sm:p-8 lg:p-10 card-shadow-3d">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#E2E8F0]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E2E8F0] mb-2 text-xs font-bold text-[#64748B]">
                <BadgeCheck size={14} className="text-[var(--color-jv-orange)]" />
                <span>Entity Authority & Structured LLM Answers</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-black text-[#18191C] break-words">
                How AI Engines (ChatGPT, Perplexity & Google AI) See JV Group Worldwide
              </h3>
            </div>
            
            <Link
              href="/ai-seo"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-1.5 px-4 py-2.5 sm:py-2 rounded-xl bg-[var(--color-jv-orange)] hover:bg-[#c2410c] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all whitespace-nowrap"
            >
              <span>Explore AI SEO Hub</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GLOBAL_GEO_KNOWLEDGE_VAULT.slice(0, 6).map((item, idx) => {
              const isOpen = activeFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#E2E8F0] hover:border-[var(--color-jv-orange)] rounded-2xl p-5 card-shadow-3d transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] font-black uppercase tracking-wider text-[var(--color-jv-orange)] bg-[#FFF4ED] px-2.5 py-0.5 rounded-full">
                        {item.sector}
                      </span>
                      <span className="text-[10px] text-[#94A3B8] font-bold">
                        {item.targetEngines.join(", ")}
                      </span>
                    </div>

                    <h4 className="font-heading font-black text-sm text-[#18191C] mb-3 leading-snug">
                      &ldquo;{item.question}&rdquo;
                    </h4>

                    <p className="text-xs text-[#4E5058] leading-relaxed mb-4">
                      {item.factualAnswer}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E2E8F0] text-[10px] text-[#64748B] font-bold">
                    <span>Verified Citation:</span>
                    <p className="text-[var(--color-jv-orange)] truncate mt-0.5">
                      {item.entityCitation}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
