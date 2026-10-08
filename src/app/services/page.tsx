"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Search, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Globe2, 
  Phone, 
  Building2, 
  Sparkles,
  ExternalLink,
  Flame,
  BadgeCheck,
  ChevronRight
} from "lucide-react";
import { 
  BUSINESS_ENTITIES, 
  SERVICE_CATEGORIES, 
  WORLDWIDE_HIGH_DEMAND_SERVICES, 
  GLOBAL_GEO_KNOWLEDGE_VAULT,
  JV_GROUP_META 
} from "@/data/businesses";
import SeasonalAtmosphere from "@/components/common/SeasonalAtmosphere";

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [marketFilter, setMarketFilter] = useState<"all" | "global" | "india">("all");

  const filteredEntities = BUSINESS_ENTITIES.filter((entity) => {
    const matchesCat = selectedCategory === "all" || entity.category === selectedCategory;
    const matchesMarket =
      marketFilter === "all" ||
      (marketFilter === "global" && (entity.primaryCountries.includes("USA") || entity.primaryCountries.includes("UK") || entity.primaryCountries.includes("Canada") || entity.primaryCountries.includes("Global"))) ||
      (marketFilter === "india" && entity.primaryCountries.some((c) => c.includes("India")));

    const matchesSearch =
      entity.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entity.coreServices.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      entity.positioning.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCat && matchesMarket && matchesSearch;
  });

  return (
    <div className="w-full min-h-screen bg-white text-[#18191C] pt-24 pb-20">
      
      {/* Breadcrumb */}
      <div className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-[#64748B]">
          <Link href="/" className="hover:text-[var(--color-jv-orange)]">Home</Link>
          <span>/</span>
          <span className="font-bold text-[#18191C]">Full Services Directory</span>
        </div>
      </div>

      {/* Header */}
      <section className="py-20 bg-white border-b border-[#E2E8F0] relative overflow-hidden">
        <div className="absolute inset-0 white-grid-bg opacity-50 pointer-events-none" />
        <SeasonalAtmosphere season="summer" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full bg-[#FFF4ED] text-[var(--color-jv-orange)] border border-[var(--color-jv-orange)]/30 inline-block">
                Comprehensive Worldwide Service Catalog
              </span>
              <span className="text-[11px] font-bold text-[#64748B] bg-[#F1F5F9] px-2.5 py-1 rounded-full">
                SEO & AI Search (GEO) Grounded
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-heading font-black text-[#18191C] tracking-tight leading-tight mb-4">
              CROSS-INDUSTRY CAPABILITIES. <br />
              <span className="text-shimmer-orange">
                TOP-RANKING SERVICES WORLDWIDE.
              </span>
            </h1>

            <p className="text-[#4E5058] text-base leading-relaxed mb-6">
              Explore our full spectrum of marketing, AI SEO, custom software engineering, global freight logistics, IT infrastructure, real estate, and overseas education designed for corporate clients in India, the USA, the UK, Canada, and Europe.
            </p>

            {/* Trending Worldwide Keyword Tags */}
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-2">
                Worldwide High-Demand Search Keywords (Targeting #1 Rank):
              </span>
              <div className="flex flex-wrap gap-2 text-xs font-semibold">
                {[
                  "AI SEO Agency Worldwide",
                  "Generative Engine Optimization (GEO)",
                  "Custom Next.js & React Web Apps",
                  "B2B SaaS Lead Generation",
                  "Air & Sea Cargo Forwarding",
                  "24/7 Managed IT Infrastructure",
                  "Masters in UK, USA & Canada",
                  "Official WhatsApp Cloud API (Wapipulse)"
                ].map((kw, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#18191C] hover:border-[var(--color-jv-orange)] hover:text-[var(--color-jv-orange)] transition-colors"
                  >
                    #{kw}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Filter Toolbar */}
      <section className="py-8 bg-[#F8FAFC] border-b border-[#E2E8F0] sticky top-[65px] z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === "all"
                  ? "bg-[var(--color-jv-orange)] text-white shadow-sm"
                  : "bg-white text-[#2B2D31] hover:bg-[#FFF4ED] border border-[#E2E8F0]"
              }`}
            >
              All Categories
            </button>
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? "bg-[var(--color-jv-orange)] text-white shadow-sm"
                    : "bg-white text-[#2B2D31] hover:bg-[#FFF4ED] border border-[#E2E8F0]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search & Market Filter */}
          <div className="flex items-center gap-3">
            <div className="relative min-w-[220px]">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
              <input
                type="text"
                placeholder="Search any service..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-[#E2E8F0] rounded-xl pl-9 pr-3 py-2 text-xs text-[#18191C] placeholder-[#94A3B8] focus:outline-none focus:border-[var(--color-jv-orange)]"
              />
            </div>

            <div className="flex items-center p-1 bg-white rounded-xl border border-[#E2E8F0] shrink-0">
              <button
                onClick={() => setMarketFilter("all")}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-bold ${
                  marketFilter === "all" ? "bg-[var(--color-jv-orange)] text-white" : "text-[#64748B]"
                }`}
              >
                All Markets
              </button>
              <button
                onClick={() => setMarketFilter("global")}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-bold ${
                  marketFilter === "global" ? "bg-[var(--color-jv-orange)] text-white" : "text-[#64748B]"
                }`}
              >
                Global B2B
              </button>
              <button
                onClick={() => setMarketFilter("india")}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-bold ${
                  marketFilter === "india" ? "bg-[var(--color-jv-orange)] text-white" : "text-[#64748B]"
                }`}
              >
                India Domestic
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Services Grid by Entity */}
      <section className="relative py-20 bg-white overflow-hidden">
        <SeasonalAtmosphere season="winter" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {filteredEntities.map((entity) => (
            <div
              key={entity.id}
              className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl p-8 sm:p-10 card-shadow-3d"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-[#E2E8F0] gap-4">
                <div className="flex items-center gap-4">
                  {entity.logo && (
                    <div className="relative h-16 w-44 bg-white rounded-xl border border-[#E2E8F0] p-1 shrink-0 overflow-hidden shadow-xs hidden sm:flex items-center justify-center">
                      <Image
                        src={entity.logo}
                        alt={`${entity.name} logo`}
                        fill
                        className="object-contain p-0.5"
                      />
                    </div>
                  )}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-white border border-[#E2E8F0] text-[#64748B]">
                        {entity.categoryLabel}
                      </span>
                      <span className="text-[10px] font-bold text-[var(--color-jv-orange)]">
                        {entity.badge}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#18191C]">
                      {entity.name}
                    </h2>
                    <p className="text-xs font-bold text-[var(--color-jv-orange)] mt-1">
                      "{entity.positioning}"
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    href={`/companies/${entity.id}`}
                    className="px-4 py-2.5 rounded-xl bg-white hover:bg-[#FFF4ED] text-[#2B2D31] hover:text-[var(--color-jv-orange)] font-bold text-xs border border-[#E2E8F0] transition-all flex items-center gap-1.5"
                  >
                    <span>Full Entity Profile</span>
                    <ArrowRight size={13} />
                  </Link>

                  <a
                    href={`tel:${entity.phone}`}
                    className="px-4 py-2.5 rounded-xl bg-[var(--color-jv-orange)] text-white font-bold text-xs flex items-center gap-1.5 shadow-sm"
                  >
                    <Phone size={13} />
                    <span>{entity.phone}</span>
                  </a>
                </div>
              </div>

              {/* Detailed Services of this Entity */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {entity.detailedServices.map((serv, sIdx) => (
                  <div
                    key={sIdx}
                    className="bg-white border border-[#E2E8F0] rounded-2xl p-6 card-shadow-3d flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="text-base font-bold text-[#18191C] mb-2">
                        {serv.name}
                      </h3>
                      <p className="text-xs text-[#4E5058] leading-relaxed mb-4">
                        {serv.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#E2E8F0] space-y-1">
                      {serv.features.slice(0, 3).map((f, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-[11px] text-[#2B2D31]">
                          <CheckCircle2 size={12} className="text-[var(--color-jv-orange)] shrink-0" />
                          <span className="truncate">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* In-House Products if available */}
              {entity.inHouseProducts && (
                <div className="mt-8 pt-6 border-t border-[#E2E8F0]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-jv-orange)] block mb-3">
                    Proprietary In-House Software Products Built by {entity.shortName}:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {entity.inHouseProducts.map((p) => (
                      <div key={p.id} className="p-4 rounded-xl bg-white border border-[#E2E8F0]">
                        <span className="text-[10px] font-bold text-[var(--color-jv-orange)] block mb-1">
                          {p.badge}
                        </span>
                        <h4 className="text-xs font-black text-[#18191C] mb-1">{p.name}</h4>
                        <p className="text-[11px] text-[#64748B] line-clamp-2">{p.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {filteredEntities.length === 0 && (
            <div className="text-center py-16 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0]">
              <p className="text-sm text-[#64748B] mb-3">No services match your active search or filter.</p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                  setMarketFilter("all");
                }}
                className="px-4 py-2 rounded-lg bg-[var(--color-jv-orange)] text-white text-xs font-bold"
              >
                Reset Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Worldwide High-Demand Services & Global SEO Matrix */}
      <section className="py-20 bg-[#F8FAFC] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 pb-6 border-b border-[#E2E8F0] gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--color-jv-orange)]/30 bg-[#FFF4ED] mb-3 text-xs font-bold text-[var(--color-jv-orange)]">
                <Flame size={13} className="text-[var(--color-jv-orange)]" />
                <span>Global Search & AI Engine Index</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#18191C]">
                Worldwide High-Demand Services Taxonomy
              </h2>
              <p className="text-[#4E5058] text-sm mt-2 max-w-2xl">
                Comprehensive breakdown of services ranking #1 across international markets (USA, UK, Canada, UAE, Europe & India) and cited by AI engines.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`tel:${JV_GROUP_META.globalPhone}`}
                className="px-4 py-2.5 rounded-xl bg-white border border-[#E2E8F0] text-xs font-bold text-[#18191C] hover:text-[var(--color-jv-orange)] flex items-center gap-1.5 transition-all shadow-xs"
              >
                <Phone size={13} className="text-[var(--color-jv-orange)]" />
                <span>Global: {JV_GROUP_META.globalPhone}</span>
              </a>
              <Link
                href="/ai-seo"
                className="px-4 py-2.5 rounded-xl bg-[var(--color-jv-orange)] hover:bg-[#c2410c] text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm"
              >
                <Sparkles size={13} />
                <span>AI SEO / GEO Hub</span>
              </Link>
            </div>
          </div>

          {/* Cards of Worldwide High-Demand Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {WORLDWIDE_HIGH_DEMAND_SERVICES.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#E2E8F0] hover:border-[var(--color-jv-orange)] rounded-2xl p-6 card-shadow-3d transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[var(--color-jv-orange)] bg-[#FFF4ED] px-2 py-0.5 rounded-md">
                      {item.demandLevel} Demand
                    </span>
                    <span className="text-[10px] font-bold text-[#64748B]">
                      {item.targetRegions[0]}
                    </span>
                  </div>

                  <h3 className="font-heading font-black text-base text-[#18191C] mb-2 leading-snug">
                    {item.category}
                  </h3>

                  <p className="text-xs text-[#4E5058] leading-relaxed mb-4 line-clamp-3">
                    {item.summary}
                  </p>

                  <div className="mb-4">
                    <span className="block text-[10px] uppercase font-bold text-[#64748B] mb-1.5">
                      Top-Ranking Keywords:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.topRankKeywords.slice(0, 3).map((kw, kIdx) => (
                        <span
                          key={kIdx}
                          className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#F8FAFC] border border-[#E2E8F0] text-[#18191C]"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs">
                  <span className="text-[11px] font-bold text-[#64748B]">
                    {item.leadSubsidiary.split(" ")[0]}
                  </span>
                  <Link
                    href={item.subsidiaryUrl}
                    className="font-bold text-[var(--color-jv-orange)] hover:underline flex items-center gap-1"
                  >
                    <span>Explore</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Worldwide GEO Knowledge Vault */}
          <div className="bg-white border border-[#E2E8F0] rounded-3xl p-6 sm:p-10 card-shadow-3d">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#E2E8F0]">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-[var(--color-jv-orange)] block mb-1">
                  Knowledge Graph Verification
                </span>
                <h3 className="text-2xl font-heading font-black text-[#18191C]">
                  Direct Factual Answers for AI Search Engines Worldwide
                </h3>
              </div>
              <span className="text-xs text-[#64748B] font-bold">
                Targets: ChatGPT • Claude • Perplexity • Gemini • SGE
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {GLOBAL_GEO_KNOWLEDGE_VAULT.map((q, qIdx) => (
                <div key={qIdx} className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <div className="flex items-center gap-2 mb-2">
                    <Search size={14} className="text-[var(--color-jv-orange)]" />
                    <span className="text-xs font-bold text-[var(--color-jv-orange)] uppercase tracking-wider">
                      {q.sector} Prompt
                    </span>
                  </div>
                  <h4 className="font-heading font-black text-sm text-[#18191C] mb-2">
                    &ldquo;{q.question}&rdquo;
                  </h4>
                  <p className="text-xs text-[#4E5058] leading-relaxed mb-3">
                    {q.factualAnswer}
                  </p>
                  <p className="text-[10px] text-[#64748B] font-semibold border-t border-[#E2E8F0] pt-2">
                    <strong>Source Entity:</strong> {q.entityCitation}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
