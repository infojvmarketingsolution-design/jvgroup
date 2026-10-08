import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Sparkles, 
  ShieldCheck, 
  Compass, 
  Target,
  Workflow,
  ArrowUpRight
} from "lucide-react";
import { 
  BUSINESS_ENTITIES, 
  STRATEGIC_PHASES, 
  JV_GROUP_META,
  SERVICE_CATEGORIES 
} from "@/data/businesses";
import SeasonalAtmosphere from "@/components/common/SeasonalAtmosphere";

export const metadata: Metadata = {
  title: "Strategic Ecosystem & Content Architecture | JV Group",
  description:
    "Official strategic branding and organizational ecosystem architecture roadmap of JV Group.",
};

export default function EcosystemStrategyPage() {
  return (
    <div className="w-full min-h-screen bg-white text-[#18191C] pt-24 pb-20">
      
      {/* Breadcrumb */}
      <div className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-[#64748B]">
          <Link href="/" className="hover:text-[var(--color-jv-orange)]">Home</Link>
          <span>/</span>
          <span className="font-bold text-[#18191C]">Strategic Business Ecosystem & Architecture</span>
        </div>
      </div>

      {/* Header */}
      <section className="py-20 bg-white border-b border-[#E2E8F0] relative overflow-hidden">
        <div className="absolute inset-0 white-grid-bg opacity-50 pointer-events-none" />
        <SeasonalAtmosphere season="spring" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full bg-[#FFF4ED] text-[var(--color-jv-orange)] border border-[var(--color-jv-orange)]/30">
              Strategic Blueprint
            </span>
            <span className="text-xs text-[#64748B] font-semibold">
              • Enterprise Ecosystem Architecture • Global B2B (USA, UK, Canada, India)
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-[#18191C] tracking-tight leading-tight mb-6">
            THE UNIFIED UMBRELLA. <br />
            <span className="text-shimmer-orange">
              CROSS-INDUSTRY BUSINESS ECOSYSTEM.
            </span>
          </h1>

          <p className="text-[#4E5058] text-base sm:text-lg max-w-3xl leading-relaxed mb-8">
            "{JV_GROUP_META.umbrellaDefinition}" — Built to eliminate digital invisibility, establish international authority in B2B markets (USA, UK, Canada), and provide clients with combined cross-industry execution.
          </p>

          <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] max-w-3xl">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-jv-orange)] mb-2">
              Key Strategic Insight:
            </h4>
            <blockquote className="text-sm font-semibold text-[#18191C] italic">
              "JV Group’s strength is not individual services. Its strength is combined capability across industries. Therefore, our digital strategy communicates multiple business solutions under one unified group."
            </blockquote>
          </div>

        </div>
      </section>

      {/* 4-Level Content Hierarchy Architecture */}
      <section className="relative py-20 bg-[#F8FAFC] border-b border-[#E2E8F0] overflow-hidden">
        <SeasonalAtmosphere season="autumn" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-jv-orange)] block mb-1">
              Brand Hierarchy
            </span>
            <h2 className="text-3xl font-heading font-black text-[#18191C]">
              4-Tier Structured Brand Hierarchy
            </h2>
            <p className="text-xs text-[#64748B] mt-2">
              Preventing customer confusion, eliminating overlap, and building lasting international credibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            <div className="bg-white border-2 border-[var(--color-jv-orange)] rounded-3xl p-7 card-shadow-3d relative">
              <span className="w-8 h-8 rounded-full bg-[var(--color-jv-orange)] text-white text-xs font-black flex items-center justify-center mb-4">
                1
              </span>
              <h3 className="text-lg font-black text-[#18191C] mb-2">
                JV Group
              </h3>
              <p className="text-xs font-bold text-[var(--color-jv-orange)] mb-3">
                Umbrella Brand
              </p>
              <p className="text-xs text-[#4E5058] leading-relaxed">
                The institutional parent establishing trust, governance, international leadership, and global contracts.
              </p>
            </div>

            <div className="bg-white border border-[#E2E8F0] rounded-3xl p-7 card-shadow-3d">
              <span className="w-8 h-8 rounded-full bg-[#2B2D31] text-white text-xs font-black flex items-center justify-center mb-4">
                2
              </span>
              <h3 className="text-lg font-black text-[#18191C] mb-2">
                Individual Companies
              </h3>
              <p className="text-xs font-bold text-[#64748B] mb-3">
                8–10 Specialized Entities
              </p>
              <p className="text-xs text-[#4E5058] leading-relaxed">
                Dedicated business units (Ekato Tech, AMS, JV Marketing, JV Infinity, JV Real Estate, Campus Dekho).
              </p>
            </div>

            <div className="bg-white border border-[#E2E8F0] rounded-3xl p-7 card-shadow-3d">
              <span className="w-8 h-8 rounded-full bg-[#2B2D31] text-white text-xs font-black flex items-center justify-center mb-4">
                3
              </span>
              <h3 className="text-lg font-black text-[#18191C] mb-2">
                Core Services
              </h3>
              <p className="text-xs font-bold text-[#64748B] mb-3">
                Domain Deliverables
              </p>
              <p className="text-xs text-[#4E5058] leading-relaxed">
                Specific offerings: SEO, Web Development, Air Freight, Cloud Hosting, Work Visas, NA/NOC clear titles.
              </p>
            </div>

            <div className="bg-white border border-[#E2E8F0] rounded-3xl p-7 card-shadow-3d">
              <span className="w-8 h-8 rounded-full bg-[#2B2D31] text-white text-xs font-black flex items-center justify-center mb-4">
                4
              </span>
              <h3 className="text-lg font-black text-[#18191C] mb-2">
                Industry Solutions
              </h3>
              <p className="text-xs font-bold text-[#64748B] mb-3">
                Multi-Sector Packages
              </p>
              <p className="text-xs text-[#4E5058] leading-relaxed">
                Combined solutions: Technology + Marketing integration, Freight + Infrastructure, Education CRM.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 3-Phase Digital Launch Roadmap */}
      <section className="py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-jv-orange)] block mb-1">
              Phased Execution
            </span>
            <h2 className="text-3xl font-heading font-black text-[#18191C]">
              Digital Launch Strategy — Phased Approach
            </h2>
            <p className="text-xs text-[#64748B] mt-1">
              Multi-phase institutional rollout structured for scalable global B2B operations.
            </p>
          </div>

          <div className="space-y-8">
            {STRATEGIC_PHASES.map((p, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl p-8 card-shadow-3d grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                <div className="lg:col-span-4">
                  <span className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full bg-[var(--color-jv-orange)] text-white inline-block mb-3">
                    {p.phase}
                  </span>
                  <h3 className="text-2xl font-black text-[#18191C] mb-1">
                    {p.name}
                  </h3>
                  <p className="text-xs font-bold text-[var(--color-jv-orange)] mb-2">
                    Objective: {p.objective}
                  </p>
                  <p className="text-xs text-[#64748B]">
                    Timeline: {p.timeline}
                  </p>
                </div>

                <div className="lg:col-span-8">
                  <p className="text-sm text-[#4E5058] leading-relaxed mb-5">
                    {p.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#E2E8F0]">
                    {p.focusAreas.map((area, aIdx) => (
                      <div key={aIdx} className="flex items-center gap-2 text-xs text-[#2B2D31]">
                        <CheckCircle2 size={14} className="text-[var(--color-jv-orange)] shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-black text-[#18191C] mb-4">
            Partner with the JV Group Ecosystem
          </h2>
          <p className="text-sm text-[#4E5058] leading-relaxed mb-8">
            Discover how our combined cross-industry capabilities in marketing, technology, freight, and infrastructure can scale your business.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[var(--color-jv-orange)] to-[#c2410c] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:-translate-y-0.5 transition-all"
            >
              Initiate Corporate Discussion
            </Link>
            <Link
              href="/global"
              className="px-7 py-3.5 rounded-xl bg-white border border-[#E2E8F0] text-[#18191C] font-bold text-xs uppercase tracking-wider hover:border-[var(--color-jv-orange)] transition-all"
            >
              Explore Global B2B (USA, UK, Canada)
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
