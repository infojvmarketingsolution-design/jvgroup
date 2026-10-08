"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Building2, 
  Globe2, 
  ShieldCheck, 
  Layers, 
  ArrowUpRight,
  TrendingUp,
  Cpu,
  Boxes,
  Compass,
  Phone,
  CheckCircle2,
  Ship,
  GraduationCap,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { BUSINESS_ENTITIES, JV_GROUP_META } from "@/data/businesses";
import SeasonalAtmosphere from "@/components/common/SeasonalAtmosphere";
import { useSeason } from "@/context/SeasonContext";

// 5 Dedicated Conglomerate Ecosystem Slides (Enterprise Business & Student Higher Ed)
const HERO_SLIDES = [
  {
    id: "b2b-tech",
    category: "b2b" as const,
    categoryBadge: "Enterprise B2B Technology",
    title: "AI Marketing & Enterprise Software",
    subtitle: "In-house SaaS products, WhatsApp API automations & global performance marketing across the USA, UK, Canada.",
    image: "/hero-slide-1-business.jpg",
    stats: "USA • UK • Canada • India",
    targetPill: "For Businesses & Corporates",
    accent: "#F36323",
    entities: [
      { name: "Ekato Tech (ERP / SaaS / WhatsApp)", id: "ekato-tech", icon: Cpu, badge: "In-House SaaS" },
      { name: "J.V Marketing (AI Growth & Global Media)", id: "jv-marketing-solution-pvt-ltd", icon: TrendingUp, badge: "USA/UK/CA B2B" }
    ],
    ctaLabel: "Explore Tech & Marketing",
    ctaLink: "/companies/ekato-tech"
  },
  {
    id: "students-overseas",
    category: "students" as const,
    categoryBadge: "Global Student Admissions",
    title: "Overseas Master Programs & Work Visas",
    subtitle: "Complete visa counseling, master degree enrollments & work permit pathways for UK, USA, Canada & Europe.",
    image: "/hero-slide-2-students.jpg",
    stats: "UK • USA • Canada • Europe",
    targetPill: "For Students & Scholars",
    accent: "#C2410C",
    entities: [
      { name: "J.V OVERSEAS (Master Programs & Visas)", id: "jv-overseas", icon: GraduationCap, badge: "UK / USA / Canada" },
      { name: "Global University Guidance", id: "jv-overseas", icon: Globe2, badge: "100% Visa Advisory" }
    ],
    ctaLabel: "Explore Overseas Visas & Masters",
    ctaLink: "/companies/jv-overseas"
  },
  {
    id: "b2b-logistics",
    category: "b2b" as const,
    categoryBadge: "Global Cargo & Freight Forwarding",
    title: "J.V Infinity Import Export Logistics",
    subtitle: "Multimodal air freight, ocean sea cargo (FCL/LCL), customs clearances & international supply chain management.",
    image: "/hero-slide-3-logistics.jpg",
    stats: "Global Cargo Forwarding",
    targetPill: "For International Trade",
    accent: "#18191C",
    entities: [
      { name: "J.V Infinity (Air Freight & Sea Cargo)", id: "jv-infinity-import-export", icon: Ship, badge: "FCL / LCL Shipping" },
      { name: "Supply Chain & Customs Liaison", id: "jv-infinity-import-export", icon: Boxes, badge: "Import / Export" }
    ],
    ctaLabel: "Explore Freight & Logistics",
    ctaLink: "/companies/jv-infinity-import-export"
  },
  {
    id: "b2b-infra",
    category: "b2b" as const,
    categoryBadge: "Enterprise IT Systems & Facilities",
    title: "IT Infrastructure & Commercial Spaces",
    subtitle: "Mission-critical enterprise servers, cloud cybersecurity & corporate commercial real estate in Ahmedabad & Gandhinagar.",
    image: "/hero-slide-4-it-infra.jpg",
    stats: "24/7 Enterprise IT",
    targetPill: "For Enterprise Facilities",
    accent: "#F36323",
    entities: [
      { name: "J.V IT Infrastructure Management", id: "jv-it-infrastructure-management", icon: ShieldCheck, badge: "Cloud & Networks" },
      { name: "J.V Real Estate (Commercial Spaces)", id: "jv-real-estate", icon: Building2, badge: "Ahmedabad & Gandhinagar" }
    ],
    ctaLabel: "Explore IT Infrastructure & Land",
    ctaLink: "/companies/jv-it-infrastructure-management"
  },
  {
    id: "students-campusdekho",
    category: "students" as const,
    categoryBadge: "Higher Education EdTech Platform",
    title: "Campus Dekho (campusdekho.in)",
    subtitle: "Pan-India student-to-college discovery, counseling & admission platform connecting students to top institutions.",
    image: "/hero-slide-5-campus.jpg",
    stats: "campusdekho.in Portal",
    targetPill: "For Indian Students & Colleges",
    accent: "#C2410C",
    entities: [
      { name: "Campus Dekho Platform", id: "campus-dekho", icon: Compass, badge: "campusdekho.in" },
      { name: "College Admissions Guidance", id: "campus-dekho", icon: CheckCircle2, badge: "India-Wide Discovery" }
    ],
    ctaLabel: "Visit Campus Dekho Portal",
    ctaLink: "/companies/campus-dekho"
  }
];

export default function Hero() {
  const { getSectionSeason, locationInfo, currentSeason } = useSeason();
  const heroSeason = getSectionSeason(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  // Current active slide & derived active audience
  const currentSlide = HERO_SLIDES[currentSlideIndex];
  const activeAudience = currentSlide.category;

  // Auto-run carousel timer (5 seconds) with pause on user hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Click handler for Previous slide
  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  // Click handler for Next slide
  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  // Click handler for Portal category buttons
  const handleCategoryClick = (category: "b2b" | "students") => {
    // If not currently in this category, switch to the first slide of that category
    if (currentSlide.category !== category) {
      const targetIdx = HERO_SLIDES.findIndex((s) => s.category === category);
      if (targetIdx !== -1) {
        setCurrentSlideIndex(targetIdx);
      }
    }
  };

  // Zero-overhead direct DOM 3D mouse parallax on card only
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    if (cardRef.current) {
      cardRef.current.style.transform = `perspective(1000px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`;
    }
  };

  const handleCardMouseLeave = () => {
    setIsPaused(false);
    if (cardRef.current) {
      cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    }
  };

  return (
    <section 
      id="hero"
      className="relative w-full flex flex-col justify-between pt-20 sm:pt-24 lg:pt-[116px] pb-14 sm:pb-16 overflow-hidden bg-white"
    >
      {/* Background Architectural Patterns & Soft Ambient Lighting (Zero Blur Overhead) */}
      <div className="absolute inset-0 white-grid-bg opacity-70 pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] orange-radial-glow pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-[radial-gradient(circle_at_center,rgba(255,244,237,0.7)_0%,transparent_70%)] pointer-events-none z-0" />

      {/* 1st Section Dynamic Geo/Weather Season Animation */}
      <SeasonalAtmosphere 
        season={heroSeason} 
        sectionIndex={0} 
        totalSections={8}
        isCurrentSeason={true}
        showBadge={false}
        locationLabel={`${locationInfo.region ? locationInfo.region + ', ' : ''}${locationInfo.country}`}
      />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-start">
        
        {/* Hero Grid: Left Typography & Right 5-Slide Auto-Running Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center mb-6">
          
          {/* Left Text: Restructured with Executive Clarity, Balanced Line Breaks & Institutional Credibility */}
          <div className="lg:col-span-6 xl:col-span-6">
            
            {/* Header Typography with Balanced Breaks */}
            <div className="mb-5">
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-3">
                <span className="text-xs font-black tracking-[0.2em] uppercase text-[var(--color-jv-orange)]">
                  Unified Business Ecosystem
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[42px] xl:text-[50px] font-heading font-black text-[#18191C] tracking-tight leading-[1.12]">
                <span className="block text-[#18191C]">
                  Leadership With Trust.
                </span>
                <span className="block text-shimmer-orange mt-1">
                  A Multi-Sector Global Ecosystem.
                </span>
              </h1>
            </div>

            {/* Strategic Mission Paragraph */}
            <p className="text-[#4E5058] text-sm sm:text-base font-sans leading-relaxed max-w-xl mb-6">
              A diversified multi-industry conglomerate operating across Technology, Marketing, Freight Logistics, IT Infrastructure, Real Estate, and Global Education — delivering cross-industry capabilities with strategic B2B expansion across <strong className="text-[#18191C]">the USA, UK, Canada</strong>, and nationwide across India.
            </p>

            {/* 3 Executive Metric Pillars (Tata / Reliance Conglomerate Trust Signals) */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 mb-6 max-w-xl">
              <div className="p-2.5 sm:p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <span className="block text-lg sm:text-xl font-heading font-black text-[#18191C]">8–10</span>
                <span className="text-[10px] font-bold uppercase text-[#64748B] block tracking-wide">Operating Entities</span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <span className="block text-lg sm:text-xl font-heading font-black text-[var(--color-jv-orange)]">4 Nations</span>
                <span className="text-[10px] font-bold uppercase text-[#64748B] block tracking-wide">USA • UK • CA • IN</span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <span className="block text-lg sm:text-xl font-heading font-black text-[#18191C]">1 Umbrella</span>
                <span className="text-[10px] font-bold uppercase text-[#64748B] block tracking-wide">Combined Scale</span>
              </div>
            </div>

            {/* Action CTAs in Brand Colors */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6">
              <Link
                href="/global"
                className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--color-jv-orange)] to-[#c2410c] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(243,99,35,0.3)] hover:shadow-[0_12px_28px_rgba(243,99,35,0.45)] hover:-translate-y-0.5 transition-all whitespace-nowrap cursor-pointer"
              >
                <span>Global B2B (USA/UK/CA)</span>
                <ArrowRight size={14} />
              </Link>

              <Link
                href="/services"
                className="w-full sm:w-auto px-4 sm:px-5 py-3 rounded-xl bg-white hover:bg-[#F8FAFC] text-[#2B2D31] font-bold text-xs uppercase tracking-wider border border-[#E2E8F0] hover:border-[var(--color-jv-orange)]/50 transition-all flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer shadow-2xs"
              >
                <span>Services Catalog</span>
                <Layers size={14} className="text-[var(--color-jv-orange)]" />
              </Link>

              <Link
                href="/ecosystem"
                className="w-full sm:w-auto px-4 sm:px-5 py-3 rounded-xl bg-[#F8FAFC] hover:bg-[#FFF4ED] text-[#2B2D31] hover:text-[var(--color-jv-orange)] font-bold text-xs uppercase tracking-wider border border-[#E2E8F0] hover:border-[var(--color-jv-orange)]/40 transition-all flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer"
              >
                <span>Ecosystem Strategy</span>
                <ArrowUpRight size={13} />
              </Link>
            </div>

            {/* Direct Official Hotline Bar */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#64748B] pt-4 border-t border-[#E2E8F0]">
              <a
                href="tel:+447344556070"
                className="hover:text-[var(--color-jv-orange)] flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Globe2 size={13} className="text-[var(--color-jv-orange)]" />
                <span>Global B2B: <strong className="text-[#18191C]">+44 7344556070</strong></span>
              </a>
              <span className="text-[#CBD5E1] hidden sm:inline">|</span>
              <a
                href="tel:+919909700606"
                className="hover:text-[var(--color-jv-orange)] flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Phone size={13} className="text-[var(--color-jv-orange)]" />
                <span>India Head Office: <strong className="text-[#18191C]">+91 99097 00606</strong></span>
              </a>
            </div>
          </div>

          {/* Right: 5-Slide Auto-Running Conglomerate Carousel & Interactive Ecosystem Portals */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center">
            <div
              ref={cardRef}
              onMouseMove={handleCardMouseMove}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={handleCardMouseLeave}
              className="relative w-full max-w-[540px] rounded-3xl bg-white border border-[#E2E8F0] shadow-xl p-3 sm:p-4 transition-transform duration-200 ease-out preserve-3d"
            >
              {/* Soft Luminous Aura Framing the Conglomerate Hub */}
              <div className="absolute -inset-4 bg-[radial-gradient(ellipse_at_center,rgba(243,99,35,0.08)_0%,transparent_75%)] rounded-[36px] -z-10 pointer-events-none" />

              {/* Floating Prestige Badge 1: Top-Left (Subtle 3D Float) */}
              <div className="hidden sm:flex absolute -top-4 -left-4 z-40 items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#E2E8F0] shadow-md animate-float-3d">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase text-[#18191C] tracking-wider">
                  Global B2B Operations Active
                </span>
              </div>

              {/* Floating Prestige Badge 2: Bottom-Right (Subtle 3D Float) */}
              <div className="hidden sm:flex absolute -bottom-3 -right-3 z-40 items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#E2E8F0] shadow-md animate-float-reverse">
                <ShieldCheck size={13} className="text-[var(--color-jv-orange)]" />
                <span className="text-[10px] font-black uppercase text-[#18191C] tracking-wider">
                  8–10 Unified Verticals
                </span>
              </div>

              {/* Corner Glow */}
              <div className="absolute -top-3 -right-3 w-28 h-28 bg-[var(--color-jv-orange)]/15 rounded-full blur-2xl pointer-events-none" />

              {/* 5-Slide Rotating Image Frame */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-md group">
                {/* 5 Rotating Images with Smooth Opacity Transition */}
                {HERO_SLIDES.map((slide, idx) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      idx === currentSlideIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 540px"
                      className="object-cover object-center"
                      priority={idx === 0}
                    />
                  </div>
                ))}

                {/* Gradient vignette for high readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/35 z-20 pointer-events-none" />

                {/* Top Floating Badge Strip */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-30 pointer-events-auto">
                  <div className="backdrop-blur-md bg-white/95 border border-white/80 shadow-md px-3 py-1 rounded-full flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-jv-orange)] animate-pulse" />
                    <span className="text-[10px] font-black uppercase text-[#18191C] tracking-wide">
                      {currentSlide.categoryBadge}
                    </span>
                  </div>

                  <div className="backdrop-blur-md bg-black/60 border border-white/20 text-white shadow-md px-2.5 py-1 rounded-full flex items-center gap-1.5 text-[10px] font-bold">
                    <span>{currentSlideIndex + 1} / {HERO_SLIDES.length}</span>
                  </div>
                </div>

                {/* Prev / Next Navigation Arrows (Z-40 with Instant Handlers) */}
                <div className="absolute inset-y-0 left-2 right-2 flex items-center justify-between z-40 pointer-events-none">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handlePrevSlide();
                    }}
                    aria-label="Previous Slide"
                    className="pointer-events-auto w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#18191C] backdrop-blur-sm flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95 cursor-pointer border border-[#E2E8F0]"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleNextSlide();
                    }}
                    aria-label="Next Slide"
                    className="pointer-events-auto w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#18191C] backdrop-blur-sm flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95 cursor-pointer border border-[#E2E8F0]"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>

                {/* Bottom Overlay Title, Subtitle & 5 Slide Progress Dots */}
                <div className="absolute bottom-3 left-3 right-3 z-30 pointer-events-auto">
                  <div className="flex items-center justify-between text-white mb-1">
                    <span className="text-xs sm:text-sm font-black drop-shadow-md">
                      {currentSlide.title}
                    </span>
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-[var(--color-jv-orange)] text-white shadow-xs">
                      {currentSlide.stats}
                    </span>
                  </div>
                  <p className="text-[11px] text-white/90 line-clamp-1 drop-shadow-sm mb-2">
                    {currentSlide.subtitle}
                  </p>

                  {/* 5 Slide Indicators (Generous Hit Area & Instant Response) */}
                  <div className="flex items-center gap-1">
                    {HERO_SLIDES.map((slide, idx) => (
                      <button
                        key={slide.id}
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setCurrentSlideIndex(idx);
                        }}
                        className="p-1.5 -m-0.5 cursor-pointer group flex items-center justify-center focus:outline-none"
                        aria-label={`Go to slide ${idx + 1}`}
                      >
                        <span
                          className={`h-2 rounded-full transition-all block ${
                            idx === currentSlideIndex
                              ? "w-8 bg-[var(--color-jv-orange)] shadow-md"
                              : "w-2.5 bg-white/70 group-hover:bg-white group-hover:scale-125"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Ecosystem Portals: Interactive Audience Switcher & Entity Directory */}
              <div className="mt-3.5 pt-3 border-t border-[#E2E8F0]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
                    Ecosystem Portals:
                  </span>
                  <span className="text-[10px] font-extrabold text-[var(--color-jv-orange)] uppercase tracking-wider">
                    Tata & Adani Conglomerate Model
                  </span>
                </div>

                {/* 2 Primary Sector Toggles with Instant Active State */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      handleCategoryClick("b2b");
                    }}
                    className={`py-2 px-3 rounded-xl text-left border transition-all flex items-center gap-2 cursor-pointer ${
                      activeAudience === "b2b"
                        ? "bg-[var(--color-jv-orange)] text-white border-[var(--color-jv-orange)] shadow-sm"
                        : "bg-[#F8FAFC] text-[#2B2D31] border-[#E2E8F0] hover:bg-[#FFF4ED]"
                    }`}
                  >
                    <Building2 size={15} className={activeAudience === "b2b" ? "text-white" : "text-[var(--color-jv-orange)]"} />
                    <div>
                      <span className="text-xs font-black block leading-tight">For Businesses & B2B</span>
                      <span className={`text-[9px] block leading-tight ${activeAudience === "b2b" ? "text-white/80" : "text-[#64748B]"}`}>
                        Marketing, SaaS, Freight & IT
                      </span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      handleCategoryClick("students");
                    }}
                    className={`py-2 px-3 rounded-xl text-left border transition-all flex items-center gap-2 cursor-pointer ${
                      activeAudience === "students"
                        ? "bg-[var(--color-jv-orange)] text-white border-[var(--color-jv-orange)] shadow-sm"
                        : "bg-[#F8FAFC] text-[#2B2D31] border-[#E2E8F0] hover:bg-[#FFF4ED]"
                    }`}
                  >
                    <GraduationCap size={16} className={activeAudience === "students" ? "text-white" : "text-[var(--color-jv-orange)]"} />
                    <div>
                      <span className="text-xs font-black block leading-tight">For Students & Colleges</span>
                      <span className={`text-[9px] block leading-tight ${activeAudience === "students" ? "text-white/80" : "text-[#64748B]"}`}>
                        Master Programs & Work Visas
                      </span>
                    </div>
                  </button>
                </div>

                {/* Active Portal Showcase with Dynamic Live Links */}
                {activeAudience === "b2b" ? (
                  <div className="p-3 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-[#18191C]">
                        Enterprise B2B Infrastructure ({HERO_SLIDES.filter(s => s.category === "b2b").length} Specialized Sectors)
                      </span>
                      <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded bg-white border border-[#E2E8F0] text-[var(--color-jv-orange)]">
                        USA • UK • Canada • India
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] text-[#2B2D31]">
                      <Link href="/companies/ekato-tech" className="flex items-center gap-1.5 p-1.5 rounded-lg bg-white border border-[#E2E8F0] hover:border-[var(--color-jv-orange)] hover:bg-[#FFF4ED] transition-all group">
                        <Cpu size={12} className="text-[var(--color-jv-orange)] shrink-0" />
                        <span className="truncate font-semibold group-hover:text-[var(--color-jv-orange)]">Ekato Tech (ERP/SaaS)</span>
                      </Link>
                      <Link href="/companies/jv-marketing-solution-pvt-ltd" className="flex items-center gap-1.5 p-1.5 rounded-lg bg-white border border-[#E2E8F0] hover:border-[var(--color-jv-orange)] hover:bg-[#FFF4ED] transition-all group">
                        <TrendingUp size={12} className="text-[var(--color-jv-orange)] shrink-0" />
                        <span className="truncate font-semibold group-hover:text-[var(--color-jv-orange)]">J.V Marketing (AI Growth)</span>
                      </Link>
                      <Link href="/companies/jv-infinity-import-export" className="flex items-center gap-1.5 p-1.5 rounded-lg bg-white border border-[#E2E8F0] hover:border-[var(--color-jv-orange)] hover:bg-[#FFF4ED] transition-all group">
                        <Ship size={12} className="text-[var(--color-jv-orange)] shrink-0" />
                        <span className="truncate font-semibold group-hover:text-[var(--color-jv-orange)]">J.V Infinity (Air/Sea Freight)</span>
                      </Link>
                      <Link href="/companies/jv-it-infrastructure-management" className="flex items-center gap-1.5 p-1.5 rounded-lg bg-white border border-[#E2E8F0] hover:border-[var(--color-jv-orange)] hover:bg-[#FFF4ED] transition-all group">
                        <ShieldCheck size={12} className="text-[var(--color-jv-orange)] shrink-0" />
                        <span className="truncate font-semibold group-hover:text-[var(--color-jv-orange)]">Enterprise IT Cloud</span>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="p-3 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-[#18191C]">
                        Global Student Mobility & Higher Ed
                      </span>
                      <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded bg-white border border-[#E2E8F0] text-[var(--color-jv-orange)]">
                        UK • USA • Canada • Australia • Europe
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] text-[#2B2D31]">
                      <Link href="/companies/jv-overseas" className="flex items-center gap-1.5 p-1.5 rounded-lg bg-white border border-[#E2E8F0] hover:border-[var(--color-jv-orange)] hover:bg-[#FFF4ED] transition-all group">
                        <GraduationCap size={12} className="text-[var(--color-jv-orange)] shrink-0" />
                        <span className="truncate font-semibold group-hover:text-[var(--color-jv-orange)]">J.V OVERSEAS (Visas)</span>
                      </Link>
                      <Link href="/companies/campus-dekho" className="flex items-center gap-1.5 p-1.5 rounded-lg bg-white border border-[#E2E8F0] hover:border-[var(--color-jv-orange)] hover:bg-[#FFF4ED] transition-all group">
                        <Compass size={12} className="text-[var(--color-jv-orange)] shrink-0" />
                        <span className="truncate font-semibold group-hover:text-[var(--color-jv-orange)]">Campus Dekho (Portal)</span>
                      </Link>
                      <Link href="/companies/jv-overseas" className="flex items-center gap-1.5 p-1.5 rounded-lg bg-white border border-[#E2E8F0] hover:border-[var(--color-jv-orange)] hover:bg-[#FFF4ED] transition-all group">
                        <CheckCircle2 size={12} className="text-[var(--color-jv-orange)] shrink-0" />
                        <span className="truncate font-semibold group-hover:text-[var(--color-jv-orange)]">Master Programs Abroad</span>
                      </Link>
                      <Link href="/companies/jv-overseas" className="flex items-center gap-1.5 p-1.5 rounded-lg bg-white border border-[#E2E8F0] hover:border-[var(--color-jv-orange)] hover:bg-[#FFF4ED] transition-all group">
                        <CheckCircle2 size={12} className="text-[var(--color-jv-orange)] shrink-0" />
                        <span className="truncate font-semibold group-hover:text-[var(--color-jv-orange)]">Work Permits & Visas</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Infinite Operating Companies Marquee Ticker on Clean White */}
      <div className="relative z-10 w-full mt-4 pt-3.5 border-t border-[#E2E8F0] bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-1.5 flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-[#64748B]">
          <span>Operating Conglomerate Entities ({BUSINESS_ENTITIES.length})</span>
          <span className="text-[var(--color-jv-orange)] font-semibold">Click to View Dynamic Entity Profile</span>
        </div>

        <div className="overflow-hidden whitespace-nowrap flex py-2">
          <div className="animate-marquee flex items-center gap-5">
            {BUSINESS_ENTITIES.concat(BUSINESS_ENTITIES).map((company, idx) => (
              <Link
                key={`${company.id}-${idx}`}
                href={`/companies/${company.id}`}
                className="group flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-[#F8FAFC] hover:bg-[#FFF4ED] border border-[#E2E8F0] hover:border-[var(--color-jv-orange)]/60 transition-all shrink-0 shadow-sm"
              >
                {company.logo ? (
                  <div className="relative w-8 h-5 bg-white rounded border border-[#E2E8F0] shrink-0 overflow-hidden">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      fill
                      className="object-contain p-0.5"
                    />
                  </div>
                ) : (
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: company.accentColor }}
                  />
                )}
                <span className="text-xs font-bold text-[#18191C] group-hover:text-[var(--color-jv-orange)] transition-colors">
                  {company.name}
                </span>
                <span className="text-[9px] text-[#64748B] uppercase font-semibold">
                  [{company.badge}]
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
