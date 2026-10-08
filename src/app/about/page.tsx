import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  HeartHandshake, 
  Users, 
  Sparkles, 
  Globe2, 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Compass, 
  TrendingUp, 
  Layers,
  ArrowUpRight
} from "lucide-react";
import { BUSINESS_ENTITIES, JV_GROUP_META } from "@/data/businesses";
import SeasonalAtmosphere from "@/components/common/SeasonalAtmosphere";

export const metadata: Metadata = {
  title: "About Us | Legacy, Values & Leadership — JV Group",
  description:
    "Learn about JV Group, inspired by Jashodaben Vitthalbhai Chavda (Aajol). Led by Akash Chavda, a diversified conglomerate spanning Technology, Marketing, Freight, IT Infrastructure, Real Estate, and Global Education.",
};

export default function AboutPage() {
  const foundationPillars = [
    {
      title: "Family Inspiration",
      description: "Rooted in ancestral trust, familial responsibility, and deep respect for ethical lineage.",
      icon: Users,
    },
    {
      title: "Ethical Values",
      description: "Unyielding integrity, absolute corporate transparency, and compliance in every contract.",
      icon: ShieldCheck,
    },
    {
      title: "Enduring Vision",
      description: "Engineered not for short-term speculation, but for sustainable multi-generational impact.",
      icon: Compass,
    },
    {
      title: "Sustainable Growth",
      description: "Disciplined expansion across core industries that compound institutional value over decades.",
      icon: TrendingUp,
    },
  ];

  const coreValues = [
    { label: "People", sublabel: "Our Strength", icon: Users, color: "#F36323" },
    { label: "Innovation", sublabel: "Our Approach", icon: Sparkles, color: "#C2410C" },
    { label: "Trust", sublabel: "Our Foundation", icon: ShieldCheck, color: "#18191C" },
    { label: "Impact", sublabel: "Our Goal", icon: Target, color: "#F36323" },
  ];

  const verifiedCredentials = [
    "MBA (Marketing) - Oakbrook",
    "Govt. Certified Expert",
    "European Academic Certification",
  ];

  const publicLeadership = [
    "Govt. IT Transformation Lead",
    "Vibrant Gujarat Contributor",
    "Infrastructure Specialist",
  ];

  return (
    <div className="w-full min-h-screen bg-white text-[#18191C] pt-24 sm:pt-28 pb-20 overflow-hidden">
      
      {/* Breadcrumb Bar */}
      <div className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-[#64748B]">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-[var(--color-jv-orange)] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="font-bold text-[#18191C]">About Us</span>
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-jv-orange)]">
            Legacy • Values • Leadership
          </span>
        </div>
      </div>

      {/* Hero Header Section */}
      <section className="relative py-16 sm:py-24 bg-white border-b border-[#E2E8F0] overflow-hidden">
        <div className="absolute inset-0 white-grid-bg opacity-50 pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] orange-radial-glow pointer-events-none z-0" />
        <SeasonalAtmosphere season="summer" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--color-jv-orange)]/30 bg-[#FFF4ED] mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--color-jv-orange)] animate-pulse" />
              <span className="text-[var(--color-jv-orange)] text-xs font-bold tracking-[0.2em] uppercase">
                The Heritage of JV Group
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-black text-[#18191C] tracking-tight leading-[1.1] mb-6">
              A Name Rooted in <br />
              <span className="text-shimmer-orange">Legacy and Values.</span>
            </h1>

            <p className="text-[#4E5058] text-base sm:text-lg font-sans leading-relaxed mb-8">
              JV Group is a diversified multi-sector global business ecosystem uniting Technology, Marketing, Freight Logistics, IT Infrastructure, Real Estate, and Global Education. We operate with an unwavering commitment to trust, corporate governance, and cross-border enterprise excellence across India, the USA, the UK, and Canada.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl">
              <div className="p-3 sm:p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <span className="block text-2xl sm:text-3xl font-heading font-black text-[#18191C]">9</span>
                <span className="text-[10px] font-bold uppercase text-[#64748B] tracking-wider">Operating Entities</span>
              </div>
              <div className="p-3 sm:p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <span className="block text-2xl sm:text-3xl font-heading font-black text-[var(--color-jv-orange)]">200+</span>
                <span className="text-[10px] font-bold uppercase text-[#64748B] tracking-wider">Clients & Partners</span>
              </div>
              <div className="p-3 sm:p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <span className="block text-2xl sm:text-3xl font-heading font-black text-[#18191C]">4</span>
                <span className="text-[10px] font-bold uppercase text-[#64748B] tracking-wider">Key Nations</span>
              </div>
              <div className="p-3 sm:p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <span className="block text-2xl sm:text-3xl font-heading font-black text-[var(--color-jv-orange)]">1</span>
                <span className="text-[10px] font-bold uppercase text-[#64748B] tracking-wider">Trusted Umbrella</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Meaning Behind J.V Group Section */}
      <section className="relative py-20 sm:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0] overflow-hidden">
        <SeasonalAtmosphere season="spring" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E2E8F0] bg-white mb-4">
                <HeartHandshake size={14} className="text-[var(--color-jv-orange)]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                  Foundational Heritage
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#18191C] tracking-tight leading-tight mb-4">
                The Meaning Behind <br />
                <span className="text-[var(--color-jv-orange)]">J.V GROUP</span>
              </h2>

              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm mb-6">
                <span className="text-xs font-black uppercase tracking-wider text-[#64748B] block mb-1">
                  J.V Represents:
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#18191C] mb-2">
                  Jashodaben Vitthalbhai Chavda <span className="text-[var(--color-jv-orange)]">(Aajol)</span>
                </h3>
                <p className="text-sm text-[#4E5058] leading-relaxed">
                  A foundation of family inspiration, ethical values, and enduring vision guiding the group’s journey of growth. This legacy is the compass that guides every partnership, transaction, and innovation we deliver across the globe.
                </p>
              </div>

              {/* 4 Foundation Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {foundationPillars.map((p, idx) => {
                  const Icon = p.icon;
                  return (
                    <div key={idx} className="p-4 rounded-xl bg-white border border-[#E2E8F0] hover:border-[var(--color-jv-orange)]/50 transition-colors">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-[#FFF4ED] flex items-center justify-center text-[var(--color-jv-orange)] shrink-0">
                          <Icon size={16} />
                        </div>
                        <h4 className="text-sm font-black text-[#18191C]">{p.title}</h4>
                      </div>
                      <p className="text-xs text-[#64748B] leading-relaxed">{p.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Meaning Poster Graphic Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-2xl bg-[#18191C] group">
                <div className="relative aspect-[819/1024] w-full">
                  <Image
                    src="/images/about/jv-meaning-legacy.jpg"
                    alt="The Meaning Behind J.V Group - Jashodaben Vitthalbhai Chavda"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 4 Core Group Values Bar */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8F0] card-shadow-3d">
            <div className="text-center mb-6">
              <span className="text-[11px] font-black uppercase tracking-widest text-[#64748B]">
                Operating Values Guiding Every Subsidiary
              </span>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {coreValues.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div key={i} className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[var(--color-jv-orange)] shrink-0 shadow-xs">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-base font-black text-[#18191C] leading-tight">{v.label}</h4>
                      <p className="text-xs font-bold text-[#64748B]">{v.sublabel}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative py-20 sm:py-24 bg-white border-b border-[#E2E8F0] overflow-hidden">
        <SeasonalAtmosphere season="monsoon" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--color-jv-orange)]/30 bg-[#FFF4ED] mb-3">
              <Target size={14} className="text-[var(--color-jv-orange)]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-jv-orange)]">
                Purpose & Aspiration
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-black text-[#18191C] tracking-tight">
              Our Mission & Vision
            </h2>
            <p className="text-sm sm:text-base font-semibold text-[var(--color-jv-orange)] mt-2">
              Driven by purpose. Built for global leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
            
            {/* Mission Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#18191C] to-[#2B2D31] text-white border border-[#383A40] shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--color-jv-orange)]/10 rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-[var(--color-jv-orange)] mb-6">
                  <Target size={28} />
                </div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[var(--color-jv-orange)] block mb-2">
                  Corporate Mission
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-black text-white mb-4">
                  Delivering Integrated Multi-Industry Solutions
                </h3>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed font-sans">
                  "To deliver reliable, technology-driven and growth focused business solutions across multiple industries under one strong and integrated group structure."
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-xs text-white/60">
                <CheckCircle2 size={14} className="text-[var(--color-jv-orange)]" />
                <span>Multi-sector execution across Technology, Marketing & Trade</span>
              </div>
            </div>

            {/* Vision Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white to-[#FFF4ED] border-2 border-[var(--color-jv-orange)]/40 shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-[var(--color-jv-orange)]/10 rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-jv-orange)] text-white flex items-center justify-center mb-6 shadow-md shadow-[var(--color-jv-orange)]/30">
                  <Eye size={28} />
                </div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[var(--color-jv-orange)] block mb-2">
                  Enduring Vision
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-black text-[#18191C] mb-4">
                  A Globally Trusted Enterprise Ecosystem
                </h3>
                <p className="text-sm sm:text-base text-[#4E5058] leading-relaxed font-sans">
                  "To become a globally trusted multi-industry business ecosystem serving international markets with excellence, integrity and unified enterprise capability."
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex items-center gap-2 text-xs text-[#64748B]">
                <CheckCircle2 size={14} className="text-[var(--color-jv-orange)]" />
                <span>Global institutional trust spanning USA, UK, Canada & India</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Leadership Profile: Akash Chavda Section */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-5xl mx-auto bg-white border border-[#E2E8F0] rounded-3xl p-8 sm:p-12 card-shadow-3d">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              
              {/* Leader Photo & Signature */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-3xl overflow-hidden border-2 border-[#E2E8F0] shadow-xl bg-white mb-4">
                  <Image
                    src="/images/about/akash-chavda-portrait.jpg"
                    alt="Akash Chavda - Architect of Growth"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>

                <div className="w-full max-w-[320px] p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-center shadow-xs">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#64748B] block mb-1">
                    Executive Signature
                  </span>
                  <span className="font-serif italic text-2xl font-bold text-[#18191C]">
                    Akash Chavda
                  </span>
                  <div className="w-16 h-0.5 bg-[var(--color-jv-orange)] mx-auto mt-1" />
                </div>
              </div>

              {/* Leader Biography & Verified Credentials */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--color-jv-orange)]/30 bg-[#FFF4ED] mb-3">
                  <Award size={14} className="text-[var(--color-jv-orange)]" />
                  <span className="text-[11px] font-black uppercase tracking-widest text-[var(--color-jv-orange)]">
                    The Architect of Growth
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#18191C] tracking-tight leading-tight mb-4">
                  Leading <br />
                  <span className="text-[var(--color-jv-orange)]">Across Borders.</span>
                </h2>

                <p className="text-[#4E5058] text-sm sm:text-base leading-relaxed mb-6">
                  <strong>Akash Chavda</strong> is the driving force behind the J.V Group's global expansion. As a <strong>GTU-Endorsed Professor</strong> and an <strong>MBA in Marketing</strong>, his leadership is rooted in both academic excellence and real-world high-performance engineering.
                </p>

                {/* Verified Credentials & Public Leadership Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#E2E8F0]">
                  
                  {/* Column 1: Credentials */}
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-[#18191C] mb-3 flex items-center gap-1.5">
                      <span className="w-1.5 h-3 bg-[var(--color-jv-orange)] rounded-xs" />
                      Verified Credentials
                    </h4>
                    <ul className="space-y-2">
                      {verifiedCredentials.map((c, i) => (
                        <li key={i} className="text-xs text-[#4E5058] flex items-center gap-2">
                          <CheckCircle2 size={13} className="text-[var(--color-jv-orange)] shrink-0" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 2: Public Leadership */}
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-[#18191C] mb-3 flex items-center gap-1.5">
                      <span className="w-1.5 h-3 bg-[#18191C] rounded-xs" />
                      Public Leadership
                    </h4>
                    <ul className="space-y-2">
                      {publicLeadership.map((l, i) => (
                        <li key={i} className="text-xs text-[#4E5058] flex items-center gap-2">
                          <CheckCircle2 size={13} className="text-[#18191C] shrink-0" />
                          <span>{l}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="tel:+919909700606"
                    className="px-5 py-2.5 rounded-xl bg-[var(--color-jv-orange)] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-sm"
                  >
                    <Phone size={13} />
                    <span>Direct Desk: +91 99097 00606</span>
                  </a>
                  <a
                    href="tel:+447344556070"
                    className="px-5 py-2.5 rounded-xl bg-white hover:bg-[#FFF4ED] text-[#18191C] hover:text-[var(--color-jv-orange)] font-bold text-xs uppercase tracking-wider border border-[#E2E8F0] flex items-center gap-2 transition-all"
                  >
                    <Globe2 size={13} className="text-[var(--color-jv-orange)]" />
                    <span>Global B2B: +44 7344556070</span>
                  </a>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 9 Operating Conglomerate Entities Section */}
      <section className="relative py-20 sm:py-24 bg-white border-b border-[#E2E8F0] overflow-hidden">
        <SeasonalAtmosphere season="snow" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#E2E8F0] gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--color-jv-orange)]/30 bg-[#FFF4ED] mb-3">
                <Building2 size={14} className="text-[var(--color-jv-orange)]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-jv-orange)]">
                  Operating Architecture
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#18191C]">
                All 9 Registered Subsidiaries
              </h2>
              <p className="text-xs text-[#64748B] mt-1">
                Each company operates independently within its sector while unlocking unified cross-industry synergy.
              </p>
            </div>

            <Link
              href="/#businesses"
              className="text-xs font-bold text-[var(--color-jv-orange)] hover:underline flex items-center gap-1.5"
            >
              <span>Explore Interactive Directory</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BUSINESS_ENTITIES.map((entity) => (
              <Link
                key={entity.id}
                href={`/companies/${entity.id}`}
                className="group rounded-3xl bg-white border border-[#E2E8F0] hover:border-[var(--color-jv-orange)] card-shadow-3d hover:card-shadow-hover transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Top Full-Bleed Branded Logo Showcase Stage (Big, Bold, Prominent on Pure White) */}
                  <div className="bg-white border-b border-[#F1F5F9] px-6 pt-5 pb-4 min-h-[220px] flex flex-col justify-between">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-[#FFF7ED] text-[var(--color-jv-orange)] border border-[var(--color-jv-orange)]/30 shadow-2xs flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-jv-orange)] animate-pulse" />
                        <span>{entity.badge}</span>
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#64748B] shadow-2xs truncate max-w-[150px]">
                        {entity.categoryLabel}
                      </span>
                    </div>

                    <div className="relative w-full h-36 sm:h-40 flex items-center justify-center my-2">
                      {entity.logo ? (
                        <div className="relative w-full h-full max-w-[280px] flex items-center justify-center">
                          <Image
                            src={entity.logo}
                            alt={`${entity.name} logo`}
                            fill
                            className="object-contain group-hover:scale-108 transition-transform duration-300 drop-shadow-sm"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 rounded-2xl bg-white border border-[var(--color-jv-orange)]/30 flex items-center justify-center text-[var(--color-jv-orange)] shadow-xs">
                          <Building2 size={32} />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-heading font-black text-[#0F172A] group-hover:text-[var(--color-jv-orange)] transition-colors mb-2">
                      {entity.name}
                    </h3>

                    <p className="text-xs font-bold text-[var(--color-jv-orange)] mb-3 flex items-center gap-1.5">
                      <Globe2 size={12} />
                      <span>{entity.domain}</span>
                    </p>

                    <p className="text-xs text-[#475569] line-clamp-3 leading-relaxed mb-4">
                      {entity.overview}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0 flex items-center justify-between text-xs font-bold text-[var(--color-jv-orange)]">
                  <span>Explore Entity Profile</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Featured Business Growth Posters */}
      <section className="relative py-20 sm:py-24 bg-[#F8FAFC] overflow-hidden">
        <SeasonalAtmosphere season="autumn" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-[var(--color-jv-orange)] block mb-2">
              Strategic Commercial Footprint
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#18191C]">
              Empowering Businesses Across India & Abroad
            </h2>
            <p className="text-xs text-[#64748B] mt-2">
              From regional Gujarat SMEs to multinational North American enterprises, JV Group drives measurable commercial impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Poster 1: AMS */}
            <div className="rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-xl bg-white group">
              <div className="relative aspect-[424/568] w-full">
                <Image
                  src="/images/about/ams-poster.png"
                  alt="Ahmedabad Marketing Solution - Helping Local Businesses Grow Beyond Boundaries"
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-300"
                />
              </div>
              <div className="p-6 bg-white border-t border-[#E2E8F0]">
                <h3 className="text-base font-black text-[#18191C] mb-1">
                  Ahmedabad Marketing Solution
                </h3>
                <p className="text-xs text-[#64748B] mb-3">
                  Regional Marketing & Business Growth Partner for SMEs across Gujarat & India.
                </p>
                <Link
                  href="/companies/ahmedabad-marketing-solution"
                  className="text-xs font-bold text-[var(--color-jv-orange)] hover:underline inline-flex items-center gap-1"
                >
                  <span>Explore AMS Services</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* Poster 2: J.V Marketing Solution Private Limited (India) */}
            <div className="rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-xl bg-white group">
              <div className="relative aspect-[430/574] w-full">
                <Image
                  src="/images/about/jv-marketing-poster.png"
                  alt="J.V Marketing Solution Private Limited - Strategic Marketing for Bigger Possibilities"
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-300"
                />
              </div>
              <div className="p-6 bg-white border-t border-[#E2E8F0]">
                <h3 className="text-base font-black text-[#18191C] mb-1">
                  J.V Marketing Solution Private Limited (India)
                </h3>
                <p className="text-xs text-[#64748B] mb-3">
                  Strategic Marketing & Enterprise Growth Company for North America, UK & India.
                </p>
                <Link
                  href="/companies/jv-marketing-solution-pvt-ltd"
                  className="text-xs font-bold text-[var(--color-jv-orange)] hover:underline inline-flex items-center gap-1"
                >
                  <span>Explore J.V Marketing Services</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Bottom Global Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-[#18191C] via-[#2B2D31] to-[#18191C] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-[var(--color-jv-orange)] block mb-3">
            Unified Enterprise Cooperation
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white mb-6">
            Partner with JV Group Today.
          </h2>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-8">
            Whether expanding your brand into North American markets, deploying custom enterprise software, shipping cargo overseas, or securing international visas — JV Group delivers multi-industry excellence under one trusted umbrella.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="tel:+447344556070"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[var(--color-jv-orange)] to-[#c2410c] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[var(--color-jv-orange)]/30 hover:-translate-y-0.5 transition-all text-center"
            >
              <Globe2 size={15} />
              <span>Global B2B Desk: +44 7344556070</span>
            </a>

            <a
              href="tel:+919909700606"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 flex items-center justify-center gap-2 transition-all text-center"
            >
              <Phone size={15} className="text-[var(--color-jv-orange)]" />
              <span>India Head Office: +91 99097 00606</span>
            </a>

            <Link
              href="/#contact"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-[#FFF4ED] text-[#18191C] hover:text-[var(--color-jv-orange)] font-bold text-xs uppercase tracking-wider transition-all text-center"
            >
              <span>Submit Direct Inquiry</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
