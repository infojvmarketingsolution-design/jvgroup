"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  MapPin, 
  Globe2, 
  Cpu, 
  ArrowRight, 
  ExternalLink,
  ShieldCheck,
  Search,
  Zap,
  Layers
} from "lucide-react";
import { BusinessEntity } from "@/data/businesses";
import { ENTITY_HERO_SHOWCASE_DATA, HeroServiceImageItem, EntityGeoIntelligence } from "@/data/entityHeroShowcaseData";
import Tilt3DCard from "@/components/3d/Tilt3DCard";

interface Props {
  entity: BusinessEntity;
  variant?: "hero" | "full";
  showSearchTags?: boolean;
}

export default function HeroServiceShowcase({
  entity,
  variant = "full",
  showSearchTags = true,
}: Props) {
  const showcase = ENTITY_HERO_SHOWCASE_DATA[entity.id];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const services: HeroServiceImageItem[] = showcase?.serviceImages || [];
  const geo: EntityGeoIntelligence | undefined = showcase?.geo;

  // Auto-cycle through the 5 service images every 5 seconds (paused when user hovers or interacts)
  useEffect(() => {
    if (services.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [services.length, isPaused]);

  if (!showcase || services.length === 0) {
    return null;
  }

  const activeService = services[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  };

  // Schema.org Structured Data for AI & Search Engine Spiders
  const schemaJsonLd = {
    "@context": "https://schema.org",
    "@type": geo?.schemaType || "ProfessionalService",
    "name": entity.name,
    "alternateName": entity.shortName,
    "url": `https://jvgroupco.in/companies/${entity.id}`,
    "telephone": entity.phone,
    "description": entity.overview,
    "parentOrganization": {
      "@type": "Organization",
      "name": "JV Group",
      "url": "https://jvgroupco.in"
    },
    "areaServed": geo?.targetCountries?.map((country) => ({
      "@type": "Country",
      "name": country
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${entity.name} Core Service Capabilities`,
      "itemListElement": services.map((s, idx) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": s.title,
          "description": s.description,
          "image": s.imageUrl,
          "keywords": s.seoKeyword
        },
        "position": idx + 1
      }))
    },
    "keywords": geo?.targetKeywords?.join(", ")
  };

  return (
    <div className={`w-full ${variant === "full" ? "mt-6 pt-4 border-t border-[#E2E8F0]/80" : ""}`}>
      
      {/* Schema.org JSON-LD Script Injection for AI Crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />

      {/* 1. Verified Core Capabilities Status Bar (Cleaned, no long GEO pill) */}
      <div className="mb-3 p-3 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex flex-wrap items-center justify-between gap-2.5">
        
        {/* Left AI & Delivery Status Badges */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF4ED] border border-[var(--color-jv-orange)]/30 text-[var(--color-jv-orange)] text-xs font-black uppercase tracking-wider shadow-2xs">
            <Cpu size={13} className="text-[var(--color-jv-orange)] shrink-0" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>AI SEO / GEO Verified</span>
          </span>

          <span className="text-[11px] font-semibold text-[#64748B] hidden sm:inline">
            5 Core Enterprise Verticals
          </span>
        </div>

        {/* Right Switcher / Slide Counter */}
        <div className="flex items-center gap-2 text-xs font-bold text-[#475569]">
          <span className="text-[var(--color-jv-orange)]">Capability 0{activeIndex + 1}</span>
          <span className="text-[#94A3B8]">/</span>
          <span>0{services.length}</span>

          <div className="flex items-center gap-1 ml-1.5">
            <button
              onClick={handlePrev}
              className="w-7 h-7 rounded-lg bg-[#F8FAFC] hover:bg-[var(--color-jv-orange)] hover:text-white text-[#1E293B] border border-[#CBD5E1] flex items-center justify-center transition-all cursor-pointer shadow-2xs"
              aria-label="Previous Capability"
            >
              <ChevronLeft size={14} />
            </button>
            <button
              onClick={handleNext}
              className="w-7 h-7 rounded-lg bg-[#F8FAFC] hover:bg-[var(--color-jv-orange)] hover:text-white text-[#1E293B] border border-[#CBD5E1] flex items-center justify-center transition-all cursor-pointer shadow-2xs"
              aria-label="Next Capability"
            >
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

      </div>

      {/* 2. Redesigned Visual Spotlight Card (3D Tilt Card + Zero Text Overlap) */}
      <Tilt3DCard 
        maxTilt={4}
        scale={1.01}
        glare={true}
        className="rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-xl group bg-white"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        {/* Top: Cinematic Visual Showcase */}
        <div className="relative w-full h-[220px] sm:h-[260px] overflow-hidden bg-[#0A0E1A]">
          <Image
            src={activeService.imageUrl}
            alt={`${entity.name} - ${activeService.title}`}
            fill
            className="object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
            priority={activeIndex === 0}
            sizes="(max-width: 768px) 100vw, 750px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A] via-black/35 to-black/20" />
          {/* Laser scanning line */}
          <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-jv-orange)] to-transparent opacity-60 animate-[scanline_3.5s_ease-in-out_infinite] pointer-events-none" />

          {/* Floating Category & Metric Badges */}
          <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 z-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[var(--color-jv-orange)] text-white text-[10px] sm:text-[11px] font-black uppercase tracking-wider shadow-md">
                {activeService.tag}
              </span>
              <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-amber-300 border border-amber-300/30 text-[10px] sm:text-[11px] font-bold shadow-sm">
                {activeService.badge}
              </span>
            </div>

            <div className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-slate-200 text-[11px] font-semibold border border-white/20 hidden sm:flex items-center gap-1.5 shadow-sm">
              <Sparkles size={12} className="text-amber-400" />
              <span>SEO: {activeService.seoKeyword}</span>
            </div>
          </div>

          {/* Bottom Micro Indicator on Image */}
          <div className="absolute bottom-3 left-3.5 right-3.5 z-10 flex items-center justify-between text-white text-xs">
            <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-wider text-amber-300 bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-white/10">
              CAPABILITY 0{activeIndex + 1} OF 05
            </span>
            <span className="text-[10px] sm:text-[11px] text-white/90 font-medium hidden sm:inline bg-black/50 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-white/10">
              {entity.shortName} Execution Standard
            </span>
          </div>
        </div>

        {/* Bottom: Dedicated High-Contrast Details Drawer (100% Collision-Proof) */}
        <div className="p-4 sm:p-5 bg-gradient-to-b from-white via-white to-[#FFFDFB] border-t border-[#E2E8F0] space-y-3">
          
          <div>
            <h3 className="text-base sm:text-lg lg:text-xl font-heading font-black text-[#0F172A] leading-snug">
              {activeService.title}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-[#475569] leading-relaxed line-clamp-2">
              {activeService.description}
            </p>
          </div>

          {/* Deliverables Checklist Pills */}
          {activeService.deliverables && (
            <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
              {activeService.deliverables.map((del, dIdx) => (
                <span 
                  key={dIdx}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F8FAFC] border border-[#CBD5E1] text-[11px] text-[#334155] font-semibold shadow-2xs"
                >
                  <CheckCircle2 size={12} className="text-emerald-500 shrink-0" />
                  <span>{del}</span>
                </span>
              ))}
            </div>
          )}

          {/* Direct Service Action Desk */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-[#E2E8F0]">
            <div className="flex items-center gap-2">
              <Link
                href={`/companies/${entity.id}/contact`}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[var(--color-jv-orange)] to-[#ea580c] hover:opacity-95 text-white font-extrabold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-[var(--color-jv-orange)]/30 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span>Inquire for this Service</span>
                <ArrowRight size={13} />
              </Link>

              <a
                href={`tel:${entity.phone}`}
                className="px-3.5 py-2 rounded-xl bg-[#F8FAFC] hover:bg-[#FFF4ED] text-[#1E293B] hover:text-[var(--color-jv-orange)] font-bold text-xs uppercase tracking-wider border border-[#CBD5E1] flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <span>Call Desk</span>
              </a>
            </div>

            <span className="text-[11px] text-[#64748B] font-semibold hidden md:inline">
              100% Backed by JV Group SLA
            </span>
          </div>

        </div>

      </Tilt3DCard>

      {/* 3. 5-Service Interactive Filmstrip Selector Strip */}
      <div className="mt-3.5">
        <div className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider mb-2 flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <Layers size={13} className="text-[var(--color-jv-orange)]" />
            <span>Select Any of the 5 Core Services Below (Click to View)</span>
          </span>
          <span className="text-xs text-[var(--color-jv-orange)] font-extrabold hidden sm:inline">
            Interactive Visual Showcase
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-2.5">
          {services.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`relative p-2 rounded-2xl border text-left transition-all cursor-pointer group/btn overflow-hidden ${
                  isActive 
                    ? "bg-white border-[var(--color-jv-orange)] ring-2 ring-[var(--color-jv-orange)]/30 shadow-md scale-[1.02]" 
                    : "bg-[#F8FAFC] hover:bg-white border-[#E2E8F0] hover:border-[#CBD5E1]"
                }`}
              >
                {/* Active Top Progress Bar */}
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-jv-orange)] to-amber-500" />
                )}

                {/* Micro Thumbnail */}
                <div className="relative w-full h-14 sm:h-16 rounded-xl overflow-hidden mb-2 bg-slate-100 border border-black/5">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover group-hover/btn:scale-110 transition-transform duration-300"
                    sizes="120px"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover/btn:bg-transparent transition-colors" />
                  
                  <span className="absolute top-1 left-1 px-1.5 py-0.5 rounded-md bg-black/70 text-white font-mono text-[9px] font-bold">
                    0{idx + 1}
                  </span>
                </div>

                {/* Thumbnail Metadata */}
                <div>
                  <span className={`block text-[10px] font-black uppercase tracking-wider truncate ${
                    isActive ? "text-[var(--color-jv-orange)]" : "text-[#64748B]"
                  }`}>
                    {item.tag}
                  </span>
                  <h4 className="text-xs font-bold text-[#0F172A] leading-snug line-clamp-2 mt-0.5">
                    {item.title}
                  </h4>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Semantic AI SEO High-Intent Search Query Tags Bar */}
      {showSearchTags && geo && geo.targetKeywords && geo.targetKeywords.length > 0 && (
        <div className="mt-4 pt-3 border-t border-[#E2E8F0] flex flex-wrap items-center gap-1.5 text-xs">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#64748B] flex items-center gap-1 mr-1">
            <Search size={12} className="text-[var(--color-jv-orange)]" />
            <span>Search Intent Tags:</span>
          </span>
          {geo.targetKeywords.map((kw, kIdx) => (
            <span
              key={kIdx}
              className="px-2.5 py-1 rounded-lg bg-[#F8FAFC] hover:bg-[#FFF4ED] text-[#334155] hover:text-[var(--color-jv-orange)] border border-[#E2E8F0] text-[11px] font-semibold transition-colors shadow-2xs"
            >
              #{kw}
            </span>
          ))}
        </div>
      )}

    </div>
  );
}

export function HeroSearchIntentTags({ entity }: { entity: BusinessEntity }) {
  const showcase = ENTITY_HERO_SHOWCASE_DATA[entity.id];
  const geo = showcase?.geo;

  if (!geo || !geo.targetKeywords || geo.targetKeywords.length === 0) return null;

  return (
    <div className="mt-5 pt-3.5 border-t border-[#E2E8F0] flex flex-wrap items-center gap-1.5 text-xs">
      <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#64748B] flex items-center gap-1 mr-1">
        <Search size={12} className="text-[var(--color-jv-orange)]" />
        <span>Search Intent Tags:</span>
      </span>
      {geo.targetKeywords.map((kw, kIdx) => (
        <span
          key={kIdx}
          className="px-2.5 py-1 rounded-lg bg-white hover:bg-[#FFF4ED] text-[#334155] hover:text-[var(--color-jv-orange)] border border-[#E2E8F0] text-[11px] font-semibold transition-colors shadow-2xs"
        >
          #{kw}
        </span>
      ))}
    </div>
  );
}
