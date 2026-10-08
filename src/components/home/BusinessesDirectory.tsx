"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Building2, 
  ExternalLink, 
  Search, 
  CheckCircle2, 
  Sparkles, 
  ArrowUpRight, 
  X, 
  Globe2, 
  Briefcase, 
  ChevronRight,
  TrendingUp,
  Cpu,
  Layers,
  PhoneCall,
  Phone,
  ArrowRight
} from "lucide-react";
import { BUSINESS_ENTITIES, BusinessEntity, SERVICE_CATEGORIES } from "@/data/businesses";
import SeasonalAtmosphere from "@/components/common/SeasonalAtmosphere";
import { useSeason } from "@/context/SeasonContext";

export default function BusinessesDirectory() {
  const { getSectionSeason } = useSeason();
  const sectionSeason = getSectionSeason(2);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredBusinesses = BUSINESS_ENTITIES.filter((b) => {
    const matchesCategory =
      selectedCategory === "all" ||
      (selectedCategory === "global" && (b.primaryCountries.includes("USA") || b.primaryCountries.includes("UK") || b.primaryCountries.includes("Canada") || b.primaryCountries.includes("Global") || b.primaryCountries.some(c => c.includes("Global")))) ||
      b.category === selectedCategory;
    const matchesSearch =
      b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.positioning.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.coreServices.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      b.primaryCountries.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="businesses" className="relative w-full py-28 bg-[#F8FAFC] text-[#18191C] overflow-hidden border-t border-[#E2E8F0]">
      {/* Background Accent Gradients (Zero GPU Blur Overhead) */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(243,99,35,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(203,213,225,0.25)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 white-grid-bg opacity-60 pointer-events-none" />

      {/* 3rd Section Dynamic Next Season Animation */}
      <SeasonalAtmosphere season={sectionSeason} sectionIndex={2} totalSections={8} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-[#E2E8F0] gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--color-jv-orange)]/30 bg-[#FFF4ED] mb-4">
              <Building2 size={14} className="text-[var(--color-jv-orange)]" />
              <span className="text-[var(--color-jv-orange)] text-xs font-bold tracking-widest uppercase">
                Organizational Business Ecosystem
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#18191C] tracking-tight leading-tight">
              8–10 SPECIALIZED ENTITIES. <br />
              <span className="text-shimmer-orange">
                ONE UNIFIED GLOBAL ECOSYSTEM.
              </span>
            </h2>
            <p className="text-[#4E5058] text-base mt-4 leading-relaxed">
              JV Group operates multiple specialized entities under a combined umbrella structure. Each entity addresses a specific industry domain while collectively forming an integrated service ecosystem.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-3.5 sm:p-5 flex items-center justify-between sm:justify-start gap-3 sm:gap-6 shrink-0 card-shadow-3d">
            <div>
              <span className="text-2xl sm:text-3xl font-black text-[var(--color-jv-orange)]">{BUSINESS_ENTITIES.length}+</span>
              <p className="text-[10px] sm:text-xs text-[#64748B] font-bold uppercase tracking-wider">
                Entities
              </p>
            </div>
            <div className="w-px h-8 sm:h-10 bg-[#E2E8F0]" />
            <div>
              <span className="text-2xl sm:text-3xl font-black text-[#18191C]">6</span>
              <p className="text-[10px] sm:text-xs text-[#64748B] font-bold uppercase tracking-wider">
                Sectors
              </p>
            </div>
            <div className="w-px h-8 sm:h-10 bg-[#E2E8F0]" />
            <div>
              <span className="text-2xl sm:text-3xl font-black text-[var(--color-jv-orange)]">3</span>
              <p className="text-[10px] sm:text-xs text-[#64748B] font-bold uppercase tracking-wider">
                Global Desks
              </p>
            </div>
          </div>
        </div>

        {/* Filter Toolbar: Categories & Search */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none touch-pan-x">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === "all"
                  ? "bg-[var(--color-jv-orange)] text-white shadow-md shadow-[var(--color-jv-orange)]/30"
                  : "bg-white text-[#2B2D31] hover:bg-[#FFF4ED] hover:text-[var(--color-jv-orange)] border border-[#E2E8F0]"
              }`}
            >
              All Operating Entities ({BUSINESS_ENTITIES.length})
            </button>
            <button
              onClick={() => setSelectedCategory("global")}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                selectedCategory === "global"
                  ? "bg-[var(--color-jv-orange)] text-white shadow-md shadow-[var(--color-jv-orange)]/30"
                  : "bg-white text-[#2B2D31] hover:bg-[#FFF4ED] hover:text-[var(--color-jv-orange)] border border-[#E2E8F0]"
              }`}
            >
              <Globe2 size={13} className={selectedCategory === "global" ? "text-white" : "text-[var(--color-jv-orange)]"} />
              <span>Global B2B (USA, UK, CA)</span>
            </button>
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? "bg-[var(--color-jv-orange)] text-white shadow-md shadow-[var(--color-jv-orange)]/30"
                    : "bg-white text-[#2B2D31] hover:bg-[#FFF4ED] hover:text-[var(--color-jv-orange)] border border-[#E2E8F0]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-72 shrink-0">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
            <input
              type="text"
              placeholder="Search entity, domain, or service..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#E2E8F0] rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#18191C] placeholder-[#94A3B8] focus:outline-none focus:border-[var(--color-jv-orange)] card-shadow-3d transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#18191C]"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Business Cards Grid with Instant 120fps Native Composition & 3D Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000">
          {filteredBusinesses.map((business) => (
            <div
              key={business.id}
              id={`business-${business.id}`}
              className="group relative flex flex-col justify-between rounded-3xl bg-white border border-[#E2E8F0] hover:border-[var(--color-jv-orange)] card-shadow-3d hover:card-shadow-hover transition-all duration-200 hover:-translate-y-1.5 overflow-hidden"
            >
              {/* 1. Full-Bleed Branded Logo Showcase Stage (Big, Bold, Prominent Logo on Pure White) */}
              <div className="relative bg-white border-b border-[#F1F5F9] px-6 pt-5 pb-4 flex flex-col justify-between min-h-[220px]">
                {/* Top Floating Badge Strip */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-[#FFF7ED] text-[var(--color-jv-orange)] border border-[var(--color-jv-orange)]/30 text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 shrink-0 shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-jv-orange)] animate-pulse" />
                    <span>{business.badge}</span>
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#64748B] text-[10px] font-bold uppercase tracking-wider shadow-2xs truncate max-w-[160px]">
                    {business.categoryLabel}
                  </span>
                </div>

                {/* Big, Prominent Hero Logo Display */}
                <Link
                  href={`/companies/${business.id}`}
                  className="relative w-full h-36 sm:h-40 my-2 flex items-center justify-center group/logo"
                  title={`View ${business.name} profile`}
                >
                  {business.logo ? (
                    <div className="relative w-full h-full max-w-[300px] flex items-center justify-center">
                      <Image
                        src={business.logo}
                        alt={`${business.name} official logo`}
                        fill
                        className="object-contain group-hover/logo:scale-108 group-hover:scale-108 transition-transform duration-300 drop-shadow-sm"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={false}
                      />
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-16 rounded-2xl bg-white border border-[var(--color-jv-orange)]/30 flex items-center justify-center text-[var(--color-jv-orange)] shadow-xs">
                        <Building2 size={32} />
                      </div>
                      <span className="font-heading font-black text-2xl text-[#18191C]">
                        {business.shortName}
                      </span>
                    </div>
                  )}
                </Link>

                {/* Direct-View Corner Arrow */}
                <Link
                  href={`/companies/${business.id}`}
                  className="absolute bottom-3 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white border border-[#E2E8F0] hover:border-[var(--color-jv-orange)] rounded-lg px-2 py-1 text-[var(--color-jv-orange)] shadow-xs flex items-center gap-1 text-[10px] font-bold"
                  title={`Launch ${business.name} Website`}
                >
                  <span>Website</span>
                  <ArrowUpRight size={12} />
                </Link>
              </div>

              {/* 2. Structured, Easy-to-Scan Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Company Name */}
                  <h3 className="text-xl sm:text-2xl font-heading font-black text-[#0F172A] group-hover:text-[var(--color-jv-orange)] transition-colors mb-2 tracking-tight">
                    <Link href={`/companies/${business.id}`}>
                      {business.name}
                    </Link>
                  </h3>

                  {/* Domain Active Pill */}
                  <div className="flex items-center gap-2 mb-3">
                    <a
                      href={`https://${business.domain}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F8FAFC] hover:bg-[#FFF7ED] text-[#475569] hover:text-[var(--color-jv-orange)] border border-[#E2E8F0] hover:border-[var(--color-jv-orange)]/40 text-xs font-bold transition-all shadow-2xs group/link"
                      title={`Visit ${business.domain}`}
                    >
                      <Globe2 size={12} className="text-[var(--color-jv-orange)]" />
                      <span>{business.domain}</span>
                      <ExternalLink size={11} className="opacity-60 group-hover/link:opacity-100 transition-opacity" />
                    </a>
                  </div>

                  {/* Overview */}
                  <p className="text-xs text-[#475569] leading-relaxed mb-4 line-clamp-3">
                    {business.overview}
                  </p>

                  {/* Core Services / Key Capabilities (Clean 2-Column Box) */}
                  <div className="space-y-1.5 mb-4 bg-[#F8FAFC] rounded-2xl p-4 border border-[#E2E8F0]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#64748B]">
                        Key Capabilities
                      </span>
                      <span className="text-[9px] font-bold text-[var(--color-jv-orange)] uppercase tracking-wider">
                        Core Solutions
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#1E293B]">
                      {business.coreServices.slice(0, 4).map((serv, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <CheckCircle2 size={12} className="text-[var(--color-jv-orange)] shrink-0" />
                          <span className="truncate text-[11px] font-semibold">{serv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Market Focus Strip */}
                  <div className="mb-4 flex items-center justify-between gap-2 py-2 px-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs">
                    <span className="text-[10px] uppercase font-bold text-[#64748B] flex items-center gap-1 shrink-0">
                      <Globe2 size={11} className="text-[var(--color-jv-orange)]" />
                      <span>Market Focus:</span>
                    </span>
                    <span className="font-bold text-[#18191C] text-[11px] truncate text-right">
                      {business.marketFocus}
                    </span>
                  </div>
                </div>

                {/* 3. Card Footer Actions (Dual Action: Call + View Full Profile) */}
                <div className="pt-4 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mt-2">
                  <a
                    href={`tel:${business.phone}`}
                    className="text-xs font-bold text-[#64748B] hover:text-[var(--color-jv-orange)] flex items-center justify-center sm:justify-start gap-1.5 transition-colors py-1 sm:py-0"
                  >
                    <Phone size={13} className="text-[var(--color-jv-orange)]" />
                    <span>{business.phone}</span>
                  </a>

                  <Link
                    href={`/companies/${business.id}`}
                    className="w-full sm:w-auto px-4 py-2.5 sm:py-2 rounded-xl bg-gradient-to-r from-[var(--color-jv-orange)] to-[#c2410c] text-white text-xs font-extrabold flex items-center justify-center gap-1.5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all text-center"
                  >
                    <span>Visit Company Website</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if search returns nothing */}
        {filteredBusinesses.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#E2E8F0] card-shadow-3d">
            <Building2 size={40} className="mx-auto text-[#94A3B8] mb-3" />
            <h3 className="text-lg font-bold text-[#18191C] mb-1">No operating entities found</h3>
            <p className="text-xs text-[#64748B] mb-4">
              Try adjusting your search query or category filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="px-4 py-2 rounded-lg bg-[var(--color-jv-orange)] text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
