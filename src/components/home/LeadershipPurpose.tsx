"use client";

import { 
  ShieldCheck, 
  Compass, 
  Network, 
  Globe2, 
  Award, 
  HeartHandshake,
  CheckCircle,
  Quote,
  ArrowRight,
  Building2,
  ChevronRight,
  Layers,
  Cpu,
  Sparkles,
  TrendingUp
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { GROUP_STATS, GROUP_PILLARS } from "@/data/businesses";
import SeasonalAtmosphere from "@/components/common/SeasonalAtmosphere";
import { useSeason } from "@/context/SeasonContext";

export default function LeadershipPurpose() {
  const { getSectionSeason } = useSeason();
  const sectionSeason = getSectionSeason(3);
  const iconMap: Record<string, any> = {
    ShieldCheck,
    Compass,
    Network,
    Globe: Globe2,
  };

  return (
    <section id="about" className="relative w-full py-28 bg-white text-[#18191C] overflow-hidden border-t border-[#E2E8F0]">
      {/* Background Ambience (Zero GPU Blur Overhead) */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(243,99,35,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 white-grid-bg opacity-50 pointer-events-none" />

      {/* 4th Section Dynamic Next Season Animation */}
      <SeasonalAtmosphere season={sectionSeason} sectionIndex={3} totalSections={8} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--color-jv-orange)]/30 bg-[#FFF4ED] mb-6">
            <ShieldCheck size={16} className="text-[var(--color-jv-orange)]" />
            <span className="text-[var(--color-jv-orange)] text-xs font-bold tracking-[0.2em] uppercase">
              Corporate Ethos & Philosophy
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-black text-[#18191C] tracking-tight leading-tight mb-6">
            LEADERSHIP WITH TRUST. <br />
            <span className="text-shimmer-orange">
              BUILT FOR GENERATIONS.
            </span>
          </h2>

          <p className="text-[#4E5058] text-base sm:text-lg leading-relaxed">
            Inspired by <strong className="text-[#18191C]">Jashodaben Vitthalbhai Chavda (Aajol)</strong>, JV Group is anchored in unwavering corporate governance, ethical leadership, generational trust, and relentless technological innovation.
          </p>
        </div>

        {/* 4 Pillars Grid on Clean White */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {GROUP_PILLARS.map((pillar, idx) => {
            const IconComponent = iconMap[pillar.icon] || ShieldCheck;
            return (
              <div
                key={idx}
                className="group p-7 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[var(--color-jv-orange)] card-shadow-3d hover:card-shadow-hover transition-all duration-200 hover:-translate-y-1.5"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFF4ED] border border-[var(--color-jv-orange)]/30 flex items-center justify-center text-[var(--color-jv-orange)] mb-6 group-hover:scale-110 group-hover:bg-[var(--color-jv-orange)] group-hover:text-white transition-all shadow-sm">
                  <IconComponent size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#18191C] mb-2 group-hover:text-[var(--color-jv-orange)] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Chairman & Group Leadership Vision Showcase (Redesigned: Executive, Engaging, Easy-to-Use) */}
        <div className="relative rounded-3xl bg-gradient-to-br from-white via-[#FFFBF8] to-[#F8FAFC] border-2 border-[#E2E8F0] hover:border-[var(--color-jv-orange)]/40 p-8 sm:p-12 mb-24 shadow-xl overflow-hidden transition-all duration-300">
          {/* Subtle Ambient Brand Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(243,99,35,0.08)_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[radial-gradient(circle_at_center,rgba(203,213,225,0.2)_0%,transparent_70%)] pointer-events-none" />
          
          {/* Top Executive Header Strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-[#E2E8F0] relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--color-jv-orange)] animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-jv-orange)]">
                Founder's Executive Directive & Vision
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-medium text-[#64748B]">
              <ShieldCheck size={14} className="text-[var(--color-jv-orange)]" />
              <span>Inspired by Jashodaben Vitthalbhai Chavda (Aajol) • Est. Generational Trust</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch relative z-10">
            
            {/* Left Column (7 cols): Executive Statement & Founder Profile */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* Quotation Mark & Heading */}
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF4ED] border border-[var(--color-jv-orange)]/30 flex items-center justify-center text-[var(--color-jv-orange)] shadow-xs">
                    <Quote size={20} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
                    Strategic Philosophy
                  </span>
                </div>

                {/* Elegant, Refined, Balanced Executive Statement (Proper Font Style) */}
                <blockquote className="text-lg sm:text-xl md:text-[22px] font-normal text-[#334155] leading-relaxed tracking-normal mb-8">
                  “JV Group’s strength is not individual services. Its strength is <strong className="font-semibold text-[var(--color-jv-orange)]">combined capability across industries</strong>. We operate as an integrated ecosystem delivering marketing, software, logistics, infrastructure, real estate, and education under one trusted umbrella.”
                </blockquote>
              </div>

              {/* Founder Profile Strip + Direct CTAs */}
              <div className="pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                {/* Founder Info */}
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-white p-1 border border-[#E2E8F0] shadow-sm overflow-hidden shrink-0">
                    <Image
                      src="/images/about/akash-chavda-portrait.jpg"
                      alt="Akash Chavda"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <h4 className="text-base sm:text-lg font-heading font-bold text-[#0F172A]">Akash Chavda</h4>
                      <span className="px-2 py-0.5 rounded-full bg-[#FFF4ED] text-[var(--color-jv-orange)] text-[10px] font-bold border border-[var(--color-jv-orange)]/30">
                        Founder
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-[var(--color-jv-orange)] mb-0.5">
                      The Architect of Growth • GTU-Endorsed Professor & MBA
                    </p>
                    <p className="text-[11px] text-[#64748B] font-normal">
                      Spearheading Multi-Sector Enterprise across USA, UK, Canada & India
                    </p>
                  </div>
                </div>

                {/* Clear Action Button */}
                <Link
                  href="/about"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[var(--color-jv-orange)] to-[#c2410c] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-sm hover:shadow-md transition-all shrink-0 justify-center"
                >
                  <span>Explore Leadership Story</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Right Column (5 cols): Interactive Strategic Ecosystem Navigator */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-white/90 border border-[#E2E8F0] rounded-2xl p-6 sm:p-7 shadow-sm">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#F1F5F9]">
                <div className="flex items-center gap-2">
                  <Layers size={16} className="text-[var(--color-jv-orange)]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
                    Strategic Ecosystem Grid
                  </span>
                </div>
                <span className="text-[10px] font-semibold text-[var(--color-jv-orange)] bg-[#FFF4ED] px-2 py-0.5 rounded-full border border-[var(--color-jv-orange)]/20">
                  10+ Entities
                </span>
              </div>

              {/* 4 Interactive Feature Items */}
              <div className="space-y-3 flex-1 flex flex-col justify-center">
                
                {/* 1. 10+ Operating Entities */}
                <Link
                  href="#businesses"
                  className="group/item flex items-start gap-3 p-3 rounded-xl bg-[#F8FAFC] hover:bg-[#FFF7ED] border border-[#E2E8F0] hover:border-[var(--color-jv-orange)]/40 transition-all cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#E2E8F0] text-[var(--color-jv-orange)] flex items-center justify-center shrink-0 shadow-2xs group-hover/item:scale-105 transition-transform">
                    <Building2 size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h5 className="text-xs font-semibold text-[#0F172A] group-hover/item:text-[var(--color-jv-orange)] transition-colors">
                        10+ Integrated Operating Entities
                      </h5>
                      <ChevronRight size={13} className="text-[#94A3B8] group-hover/item:text-[var(--color-jv-orange)] group-hover/item:translate-x-0.5 transition-all" />
                    </div>
                    <p className="text-[11px] text-[#64748B] font-normal truncate">
                      Tech, SaaS, Marketing, Cargo Freight & Real Estate
                    </p>
                  </div>
                </Link>

                {/* 2. Global B2B Footprint */}
                <Link
                  href="/global"
                  className="group/item flex items-start gap-3 p-3 rounded-xl bg-[#F8FAFC] hover:bg-[#FFF7ED] border border-[#E2E8F0] hover:border-[var(--color-jv-orange)]/40 transition-all cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#E2E8F0] text-[var(--color-jv-orange)] flex items-center justify-center shrink-0 shadow-2xs group-hover/item:scale-105 transition-transform">
                    <Globe2 size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h5 className="text-xs font-semibold text-[#0F172A] group-hover/item:text-[var(--color-jv-orange)] transition-colors">
                        Global B2B Priority Markets
                      </h5>
                      <ChevronRight size={13} className="text-[#94A3B8] group-hover/item:text-[var(--color-jv-orange)] group-hover/item:translate-x-0.5 transition-all" />
                    </div>
                    <p className="text-[11px] text-[#64748B] font-normal truncate">
                      USA, UK, Canada, UAE & Pan-India enterprise delivery
                    </p>
                  </div>
                </Link>

                {/* 3. In-House Software Suite */}
                <Link
                  href="/companies/wapipulse"
                  className="group/item flex items-start gap-3 p-3 rounded-xl bg-[#F8FAFC] hover:bg-[#FFF7ED] border border-[#E2E8F0] hover:border-[var(--color-jv-orange)]/40 transition-all cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#E2E8F0] text-[var(--color-jv-orange)] flex items-center justify-center shrink-0 shadow-2xs group-hover/item:scale-105 transition-transform">
                    <Cpu size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h5 className="text-xs font-semibold text-[#0F172A] group-hover/item:text-[var(--color-jv-orange)] transition-colors">
                        Enterprise SaaS Suite
                      </h5>
                      <ChevronRight size={13} className="text-[#94A3B8] group-hover/item:text-[var(--color-jv-orange)] group-hover/item:translate-x-0.5 transition-all" />
                    </div>
                    <p className="text-[11px] text-[#64748B] font-normal truncate">
                      Wapipulse (WhatsApp Cloud API) & Ticket4service Helpdesk
                    </p>
                  </div>
                </Link>

                {/* 4. Physical Logistics & Cloud */}
                <Link
                  href="/companies/jv-infinity-import-export"
                  className="group/item flex items-start gap-3 p-3 rounded-xl bg-[#F8FAFC] hover:bg-[#FFF7ED] border border-[#E2E8F0] hover:border-[var(--color-jv-orange)]/40 transition-all cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#E2E8F0] text-[var(--color-jv-orange)] flex items-center justify-center shrink-0 shadow-2xs group-hover/item:scale-105 transition-transform">
                    <Network size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h5 className="text-xs font-semibold text-[#0F172A] group-hover/item:text-[var(--color-jv-orange)] transition-colors">
                        Cargo Freight & IT Systems
                      </h5>
                      <ChevronRight size={13} className="text-[#94A3B8] group-hover/item:text-[var(--color-jv-orange)] group-hover/item:translate-x-0.5 transition-all" />
                    </div>
                    <p className="text-[11px] text-[#64748B] font-normal truncate">
                      Air/Ocean customs trade + Tier-3 Cloud Server architecture
                    </p>
                  </div>
                </Link>

              </div>
            </div>

          </div>
        </div>

        {/* Group Impact & Numerical Scale Bar (Eye-Catching, Modern, Proper Typography) */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] border-2 border-[#E2E8F0] p-8 sm:p-12 card-shadow-3d overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-[radial-gradient(ellipse_at_center,rgba(243,99,35,0.08)_0%,transparent_70%)] pointer-events-none" />

          <div className="text-center max-w-2xl mx-auto mb-12 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[10px] font-bold uppercase tracking-wider text-[var(--color-jv-orange)] mb-3 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-jv-orange)] animate-pulse" />
              <span>Verified Scale & Operational Reach</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#0F172A] tracking-tight">
              The Numbers Defining Our Strength
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] font-normal mt-2">
              Cross-border enterprise delivery across high-growth international corridors and proprietary software assets.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 relative z-10">
            {/* 1. Operating Entities */}
            <div className="group relative p-5 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[var(--color-jv-orange)] card-shadow-3d hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center text-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-[#FFF4ED] border border-[var(--color-jv-orange)]/20 text-[var(--color-jv-orange)] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-2xs">
                <Building2 size={20} />
              </div>
              <div className="my-1">
                <span className="text-3xl sm:text-4xl font-heading font-bold text-[#0F172A] tracking-tight">
                  10
                  <span className="text-[var(--color-jv-orange)] text-2xl sm:text-3xl ml-0.5">+</span>
                </span>
              </div>
              <div className="mt-2">
                <span className="text-xs sm:text-[13px] font-bold text-[#1E293B] block">
                  Operating Entities
                </span>
                <span className="text-[10px] text-[#64748B] font-normal block mt-0.5">
                  Multi-Sector Units
                </span>
              </div>
            </div>

            {/* 2. Industry Sectors */}
            <div className="group relative p-5 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[var(--color-jv-orange)] card-shadow-3d hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center text-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-2xs">
                <Layers size={20} />
              </div>
              <div className="my-1">
                <span className="text-3xl sm:text-4xl font-heading font-bold text-[#0F172A] tracking-tight">
                  6
                </span>
              </div>
              <div className="mt-2">
                <span className="text-xs sm:text-[13px] font-bold text-[#1E293B] block">
                  Industry Sectors
                </span>
                <span className="text-[10px] text-[#64748B] font-normal block mt-0.5">
                  Tech, Trade, Realty
                </span>
              </div>
            </div>

            {/* 3. Global Desks / Hubs */}
            <div className="group relative p-5 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[var(--color-jv-orange)] card-shadow-3d hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center text-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-2xs">
                <Globe2 size={20} />
              </div>
              <div className="my-1">
                <span className="text-3xl sm:text-4xl font-heading font-bold text-[#0F172A] tracking-tight">
                  5
                  <span className="text-[var(--color-jv-orange)] text-2xl sm:text-3xl ml-0.5">+</span>
                </span>
              </div>
              <div className="mt-2">
                <span className="text-xs sm:text-[13px] font-bold text-[#1E293B] block">
                  Global Hubs
                </span>
                <span className="text-[10px] text-[#64748B] font-normal block mt-0.5">
                  International Desks
                </span>
              </div>
            </div>

            {/* 4. Priority Markets (Proper Balanced Font Styling) */}
            <div className="group relative p-5 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[var(--color-jv-orange)] card-shadow-3d hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center text-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-2xs">
                <TrendingUp size={20} />
              </div>
              <div className="my-1 flex flex-col items-center justify-center min-h-[40px]">
                <span className="text-lg sm:text-xl font-heading font-bold text-[#0F172A] tracking-tight">
                  USA • UK
                </span>
                <span className="text-[11px] font-semibold text-[var(--color-jv-orange)] tracking-wide">
                  Canada • India
                </span>
              </div>
              <div className="mt-2">
                <span className="text-xs sm:text-[13px] font-bold text-[#1E293B] block">
                  Priority Markets
                </span>
                <span className="text-[10px] text-[#64748B] font-normal block mt-0.5">
                  Tier-1 Corridors
                </span>
              </div>
            </div>

            {/* 5. In-House SaaS Assets */}
            <div className="group relative p-5 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[var(--color-jv-orange)] card-shadow-3d hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center text-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 text-purple-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-2xs">
                <Cpu size={20} />
              </div>
              <div className="my-1">
                <span className="text-3xl sm:text-4xl font-heading font-bold text-[#0F172A] tracking-tight">
                  4
                  <span className="text-[var(--color-jv-orange)] text-2xl sm:text-3xl ml-0.5">+</span>
                </span>
              </div>
              <div className="mt-2">
                <span className="text-xs sm:text-[13px] font-bold text-[#1E293B] block">
                  In-House SaaS
                </span>
                <span className="text-[10px] text-[#64748B] font-normal block mt-0.5">
                  Wapipulse, Ticket4service
                </span>
              </div>
            </div>

            {/* 6. Ecosystem Commitment */}
            <div className="group relative p-5 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[var(--color-jv-orange)] card-shadow-3d hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center text-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 text-[var(--color-jv-orange)] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-2xs">
                <ShieldCheck size={20} />
              </div>
              <div className="my-1">
                <span className="text-3xl sm:text-4xl font-heading font-bold text-[#0F172A] tracking-tight">
                  100
                  <span className="text-[var(--color-jv-orange)] text-2xl sm:text-3xl ml-0.5">%</span>
                </span>
              </div>
              <div className="mt-2">
                <span className="text-xs sm:text-[13px] font-bold text-[#1E293B] block">
                  Commitment
                </span>
                <span className="text-[10px] text-[#64748B] font-normal block mt-0.5">
                  Generational Trust
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
