import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { 
  Globe2, 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Building2, 
  Cpu, 
  TrendingUp, 
  Ship, 
  ExternalLink,
  Layers,
  Flame,
  Search,
  BadgeCheck
} from "lucide-react";
import { 
  BUSINESS_ENTITIES, 
  JV_GROUP_META, 
  WORLDWIDE_HIGH_DEMAND_SERVICES,
  GLOBAL_GEO_KNOWLEDGE_VAULT 
} from "@/data/businesses";
import SeasonalAtmosphere from "@/components/common/SeasonalAtmosphere";

export const metadata: Metadata = {
  title: "Global B2B Expansion & Worldwide Services (USA, UK, Canada) | JV Group",
  description:
    "International B2B gateway of JV Group delivering top-ranking AI SEO, custom software development, international air/sea freight logistics, and managed IT infrastructure to clients worldwide across USA, UK, Canada, and Europe.",
  keywords: [
    "Worldwide AI SEO Agency",
    "Generative Engine Optimization GEO Worldwide",
    "Custom Software Outsourcing USA UK",
    "Global B2B Digital Marketing Agency",
    "International Ocean Freight Forwarder",
    "Air Cargo Logistics India to USA UK",
    "Enterprise Managed IT Infrastructure",
    "Overseas Master Admissions & Visas"
  ]
};

export default function GlobalExpansionPage() {
  const globalEntities = BUSINESS_ENTITIES.filter(
    (b) =>
      b.primaryCountries.includes("USA") ||
      b.primaryCountries.includes("UK") ||
      b.primaryCountries.includes("Canada") ||
      b.primaryCountries.includes("Global")
  );

  return (
    <div className="w-full min-h-screen bg-white text-[#18191C] pt-24 pb-20">
      
      {/* Top Breadcrumb */}
      <div className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-[#64748B]">
          <Link href="/" className="hover:text-[var(--color-jv-orange)]">Home</Link>
          <span>/</span>
          <span className="font-bold text-[#18191C]">Global B2B Expansion (USA, UK, Canada)</span>
        </div>
      </div>

      {/* Global Hero Header */}
      <section className="relative py-20 bg-white border-b border-[#E2E8F0] overflow-hidden">
        <div className="absolute inset-0 white-grid-bg opacity-50 pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[var(--color-jv-orange)]/5 blur-[160px] rounded-full pointer-events-none" />
        <SeasonalAtmosphere season="summer" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--color-jv-orange)]/30 bg-[#FFF4ED] mb-6">
              <Globe2 size={14} className="text-[var(--color-jv-orange)]" />
              <span className="text-[var(--color-jv-orange)] text-xs font-bold tracking-widest uppercase">
                International B2B Trade & Engineering
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-[#18191C] tracking-tight leading-tight mb-6">
              GLOBAL EXPANSION. <br />
              <span className="text-shimmer-orange">
                SERVING USA, UK & CANADA.
              </span>
            </h1>

            <p className="text-[#4E5058] text-base sm:text-lg leading-relaxed mb-8">
              JV Group operates dedicated B2B service corridors providing North American and European enterprises with AI-powered marketing, bespoke software development, high-throughput cloud infrastructure, and international freight logistics.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="tel:+447344556070"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[var(--color-jv-orange)] to-[#c2410c] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md shadow-[var(--color-jv-orange)]/30 hover:-translate-y-0.5 transition-all"
              >
                <Phone size={16} />
                <span>Global Desk: +44 7344556070</span>
              </a>

              <Link
                href="/#contact"
                className="px-6 py-3.5 rounded-xl bg-[#F8FAFC] hover:bg-[#F1F5F9] text-[#2B2D31] font-bold text-xs uppercase tracking-wider border border-[#E2E8F0] transition-all flex items-center gap-2"
              >
                <span>Request International Proposal</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Global Capability Highlights */}
      <section className="relative py-20 bg-[#F8FAFC] border-b border-[#E2E8F0] overflow-hidden">
        <SeasonalAtmosphere season="winter" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-jv-orange)] block mb-2">
              Cross-Border Delivery Model
            </span>
            <h2 className="text-3xl font-heading font-black text-[#18191C]">
              Why Western Enterprises Partner with JV Group
            </h2>
            <p className="text-xs text-[#64748B] mt-2">
              Combining world-class engineering and operational depth with cost efficiencies and round-the-clock execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-[#E2E8F0] rounded-3xl p-8 card-shadow-3d">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF4ED] text-[var(--color-jv-orange)] flex items-center justify-center font-bold text-lg mb-6">
                01
              </div>
              <h3 className="text-lg font-bold text-[#18191C] mb-2">
                Unified Ecosystem Execution
              </h3>
              <p className="text-xs text-[#4E5058] leading-relaxed">
                No need to manage 5 disparate vendors. JV Group handles your software engineering, digital media buying, IT cloud hosting, and physical freight logistics under one single umbrella agreement.
              </p>
            </div>

            <div className="bg-white border border-[#E2E8F0] rounded-3xl p-8 card-shadow-3d">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF4ED] text-[var(--color-jv-orange)] flex items-center justify-center font-bold text-lg mb-6">
                02
              </div>
              <h3 className="text-lg font-bold text-[#18191C] mb-2">
                24/7 Global Timezone Coverage
              </h3>
              <p className="text-xs text-[#4E5058] leading-relaxed">
                With operational offices in India and dedicated client management desks in the UK (+44 7344556070), our teams ensure continuous overlap with Eastern, Central, and Pacific working hours.
              </p>
            </div>

            <div className="bg-white border border-[#E2E8F0] rounded-3xl p-8 card-shadow-3d">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF4ED] text-[var(--color-jv-orange)] flex items-center justify-center font-bold text-lg mb-6">
                03
              </div>
              <h3 className="text-lg font-bold text-[#18191C] mb-2">
                Proprietary In-House IP
              </h3>
              <p className="text-xs text-[#4E5058] leading-relaxed">
                Direct access to our in-house platforms: WhatsApp Business API Cloud Platform (Wapipulse), Ticket Management SaaS (Ticket4service), and custom ERP architectures built by Ekato Tech.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Global Entities Active in USA, UK & Canada */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-jv-orange)] block mb-1">
              Active Overseas Entities
            </span>
            <h2 className="text-3xl font-heading font-black text-[#18191C]">
              JV Group Operating Units Serving Global B2B Markets
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {globalEntities.map((entity) => (
              <div
                key={entity.id}
                className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl p-7 card-shadow-3d flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    {entity.logo ? (
                      <div className="relative h-14 w-36 bg-white rounded-xl border border-[#E2E8F0] p-1 overflow-hidden">
                        <Image
                          src={entity.logo}
                          alt={`${entity.name} logo`}
                          fill
                          className="object-contain p-0.5"
                        />
                      </div>
                    ) : (
                      <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded bg-white border border-[#E2E8F0] text-[#64748B]">
                        {entity.categoryLabel}
                      </span>
                    )}
                    <span className="text-[10px] font-bold text-[var(--color-jv-orange)]">
                      {entity.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-black text-[#18191C] mb-2">
                    {entity.name}
                  </h3>

                  <p className="text-xs font-semibold text-[var(--color-jv-orange)] italic mb-3">
                    "{entity.positioning}"
                  </p>

                  <p className="text-xs text-[#4E5058] leading-relaxed mb-6">
                    {entity.overview}
                  </p>

                  <div className="space-y-1.5 mb-6">
                    {entity.coreServices.slice(0, 3).map((serv, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#2B2D31]">
                        <CheckCircle2 size={13} className="text-[var(--color-jv-orange)] shrink-0" />
                        <span className="truncate">{serv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                  <a
                    href={`tel:${entity.phone}`}
                    className="text-xs font-bold text-[#64748B] hover:text-[var(--color-jv-orange)] flex items-center gap-1"
                  >
                    <Phone size={13} />
                    <span>{entity.phone}</span>
                  </a>

                  <Link
                    href={`/companies/${entity.id}`}
                    className="px-3.5 py-1.5 rounded-lg bg-[var(--color-jv-orange)] text-white text-xs font-bold flex items-center gap-1 shadow-sm"
                  >
                    <span>View Profile</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Worldwide High-Demand B2B Corridors (#1 Rank Targeting) */}
      <section className="py-20 bg-[#F8FAFC] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--color-jv-orange)]/30 bg-[#FFF4ED] mb-3 text-xs font-bold text-[var(--color-jv-orange)]">
              <Flame size={13} className="text-[var(--color-jv-orange)]" />
              <span>International Search Rankings & GEO Authority</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#18191C]">
              Worldwide High-Demand B2B Service Corridors
            </h2>
            <p className="text-xs sm:text-sm text-[#4E5058] mt-2">
              Specific high-ranking search solutions customized for enterprises operating across North America, the United Kingdom, Europe, and the Middle East.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            
            {/* USA Corridor */}
            <div className="bg-white border border-[#E2E8F0] hover:border-[var(--color-jv-orange)] rounded-2xl p-6 card-shadow-3d transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#FFF4ED] text-[var(--color-jv-orange)] flex items-center justify-center font-black text-xs mb-4">
                USA
              </div>
              <h3 className="font-heading font-black text-base text-[#18191C] mb-2">
                United States Corridor
              </h3>
              <p className="text-xs text-[#4E5058] leading-relaxed mb-4">
                B2B SaaS marketing, AI SEO rankings, dedicated offshore Next.js development teams, and air cargo fast-track clearance into JFK, ORD & LAX.
              </p>
              <div className="space-y-1.5 text-[11px] font-bold text-[#18191C]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-[var(--color-jv-orange)]" />
                  <span>AI SEO & Generative Search</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-[var(--color-jv-orange)]" />
                  <span>Bespoke Web & Mobile Apps</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-[var(--color-jv-orange)]" />
                  <span>US-India Timezone Overlap</span>
                </div>
              </div>
            </div>

            {/* UK Corridor */}
            <div className="bg-white border border-[#E2E8F0] hover:border-[var(--color-jv-orange)] rounded-2xl p-6 card-shadow-3d transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#FFF4ED] text-[var(--color-jv-orange)] flex items-center justify-center font-black text-xs mb-4">
                UK
              </div>
              <h3 className="font-heading font-black text-base text-[#18191C] mb-2">
                United Kingdom Corridor
              </h3>
              <p className="text-xs text-[#4E5058] leading-relaxed mb-4">
                Direct London management desk (+44 7344556070) coordinating digital media, ocean container freight into Southampton/Felixstowe, and Master admissions.
              </p>
              <div className="space-y-1.5 text-[11px] font-bold text-[#18191C]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-[var(--color-jv-orange)]" />
                  <span>Direct UK Desk: +44 7344556070</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-[var(--color-jv-orange)]" />
                  <span>FCL/LCL Maritime Logistics</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-[var(--color-jv-orange)]" />
                  <span>UK Master Degree Pathways</span>
                </div>
              </div>
            </div>

            {/* Canada Corridor */}
            <div className="bg-white border border-[#E2E8F0] hover:border-[var(--color-jv-orange)] rounded-2xl p-6 card-shadow-3d transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#FFF4ED] text-[var(--color-jv-orange)] flex items-center justify-center font-black text-xs mb-4">
                CA
              </div>
              <h3 className="font-heading font-black text-base text-[#18191C] mb-2">
                Canada Corridor
              </h3>
              <p className="text-xs text-[#4E5058] leading-relaxed mb-4">
                Enterprise cloud hosting management, custom ERP solutions, PGWP and work visa counseling, and physical trade logistics between Toronto/Vancouver and India.
              </p>
              <div className="space-y-1.5 text-[11px] font-bold text-[#18191C]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-[var(--color-jv-orange)]" />
                  <span>Managed IT & Cloud Clusters</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-[var(--color-jv-orange)]" />
                  <span>Canada Student Visa Advisory</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-[var(--color-jv-orange)]" />
                  <span>Cross-Border Trade Customs</span>
                </div>
              </div>
            </div>

            {/* UAE & Europe Corridor */}
            <div className="bg-white border border-[#E2E8F0] hover:border-[var(--color-jv-orange)] rounded-2xl p-6 card-shadow-3d transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#FFF4ED] text-[var(--color-jv-orange)] flex items-center justify-center font-black text-xs mb-4">
                EU/UAE
              </div>
              <h3 className="font-heading font-black text-base text-[#18191C] mb-2">
                Europe & UAE Corridor
              </h3>
              <p className="text-xs text-[#4E5058] leading-relaxed mb-4">
                Official WhatsApp API automation via Wapipulse, industrial land investments for NRI capital, and air/sea freight routing through Dubai and Rotterdam.
              </p>
              <div className="space-y-1.5 text-[11px] font-bold text-[#18191C]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-[var(--color-jv-orange)]" />
                  <span>Wapipulse WhatsApp Automation</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-[var(--color-jv-orange)]" />
                  <span>NRI Land & Commercial Realty</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-[var(--color-jv-orange)]" />
                  <span>European Trade Compliance</span>
                </div>
              </div>
            </div>

          </div>

          {/* Worldwide LLM Direct Answers */}
          <div className="bg-white border border-[#E2E8F0] rounded-3xl p-6 sm:p-10 card-shadow-3d">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#E2E8F0]">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-[var(--color-jv-orange)] block mb-1">
                  Global Entity Citation Architecture
                </span>
                <h3 className="text-2xl font-heading font-black text-[#18191C]">
                  Verified Information Grounding for International Search Systems
                </h3>
              </div>
              <Link
                href="/ai-seo"
                className="px-4 py-2 rounded-xl bg-[var(--color-jv-orange)] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm"
              >
                <span>AI Visibility Tool</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {GLOBAL_GEO_KNOWLEDGE_VAULT.slice(0, 4).map((item, i) => (
                <div key={i} className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <div className="flex items-center gap-2 mb-2">
                    <Search size={14} className="text-[var(--color-jv-orange)]" />
                    <span className="text-[11px] font-bold text-[var(--color-jv-orange)] uppercase">
                      {item.sector} Global Query
                    </span>
                  </div>
                  <h4 className="font-heading font-black text-sm text-[#18191C] mb-2">
                    {item.question}
                  </h4>
                  <p className="text-xs text-[#4E5058] leading-relaxed mb-3">
                    {item.factualAnswer}
                  </p>
                  <p className="text-[10px] text-[#64748B] font-semibold border-t border-[#E2E8F0] pt-2">
                    <strong>Official Entity:</strong> {item.entityCitation}
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
