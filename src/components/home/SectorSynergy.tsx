"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Layers, 
  ArrowRight, 
  Cpu, 
  Megaphone, 
  Server, 
  GraduationCap, 
  Rocket, 
  CheckCircle2, 
  Sparkles,
  RefreshCw
} from "lucide-react";
import SeasonalAtmosphere from "@/components/common/SeasonalAtmosphere";
import { useSeason } from "@/context/SeasonContext";

export default function SectorSynergy() {
  const { getSectionSeason } = useSeason();
  const sectionSeason = getSectionSeason(4);
  const [activeVertical, setActiveVertical] = useState<number>(0);

  const verticals = [
    {
      id: "marketing",
      title: "Digital Marketing & Media Powerhouse",
      icon: Megaphone,
      companies: [
        "Ahmedabad Marketing Service",
        "J.V Marketing Service Private Limited",
        "J.V Marketing Services Limited"
      ],
      role: "Demand Generation & Commercial Dominance",
      description:
        "From local retail and regional MSME market penetration in Western India to multi-crore national media procurement and institutional PR governance, our marketing entities generate unrivaled commercial pipelines.",
      synergyImpact:
        "Feeds direct qualified customer demand into our SaaS platforms and enterprise software clientele.",
      accent: "#F36323"
    },
    {
      id: "software_saas",
      title: "Enterprise Software & Flagship SaaS",
      icon: Cpu,
      companies: [
        "Ekato Tech",
        "Wapipulse.com",
        "Ticket4service.com"
      ],
      role: "Automation, Conversational AI & Cloud Engineering",
      description:
        "Building proprietary SaaS platforms used by thousands of companies daily: Wapipulse.com for WhatsApp Business API automation and Ticket4service.com for customer support operations, engineered by Ekato Tech.",
      synergyImpact:
        "Drives recurring high-margin ARR while providing bespoke digital transformation to corporate partners.",
      accent: "#C2410C"
    },
    {
      id: "infrastructure",
      title: "Mission-Critical IT Infrastructure",
      icon: Server,
      companies: ["J.V IT infrasturcture"],
      role: "High-Availability Cloud, Security & Data Centers",
      description:
        "Providing the rock-solid technological backbone required to power high-throughput applications, enterprise databases, and zero-trust cybersecurity networks with 99.99% verified uptime.",
      synergyImpact:
        "Powers the cloud servers of Wapipulse, Ticket4service, and Ekato Tech with institutional data privacy.",
      accent: "#2B2D31"
    },
    {
      id: "mobility_edtech",
      title: "Global Mobility & Higher EdTech",
      icon: GraduationCap,
      companies: ["J.V Overseas", "Campus Dekho"],
      role: "Empowering Students, Professionals & Global Enterprise",
      description:
        "Campus Dekho revolutionizes domestic college discovery for over 250,000 students, while J.V Overseas acts as the international bridge for overseas degrees, work permits, and cross-border business setup.",
      synergyImpact:
        "Cultivates premier talent pipelines and broadens JV Group's presence across 15+ international countries.",
      accent: "#F36323"
    },
    {
      id: "ventures",
      title: "Venture Incubation & Emerging Tech",
      icon: Rocket,
      companies: ["JV Infinity"],
      role: "Early-Stage Seed Capital & Disruptive Acceleration",
      description:
        "JV Infinity identifies, finances, and accelerates high-growth startups and experimental AI initiatives, leveraging the full ecosystem's infrastructure, marketing, and operational power.",
      synergyImpact:
        "Ensures the conglomerate continually captures new market waves and future-proofs its enterprise valuation.",
      accent: "#C2410C"
    }
  ];

  return (
    <section id="ecosystem" className="relative w-full py-28 bg-[#F8FAFC] text-[#18191C] overflow-hidden border-t border-[#E2E8F0]">
      <div className="absolute inset-0 white-grid-bg opacity-50 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[radial-gradient(circle_at_center,rgba(243,99,35,0.06)_0%,transparent_70%)] pointer-events-none" />

      {/* 5th Section Dynamic Next Season Animation */}
      <SeasonalAtmosphere season={sectionSeason} sectionIndex={4} totalSections={8} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--color-jv-orange)]/30 bg-[#FFF4ED] mb-4">
            <Layers size={14} className="text-[var(--color-jv-orange)]" />
            <span className="text-[var(--color-jv-orange)] text-xs font-bold tracking-[0.2em] uppercase">
              The Conglomerate Multiplier
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#18191C] tracking-tight leading-tight mb-4">
            HOW OUR 10 ENTERPRISES <br />
            <span className="text-shimmer-orange">
              REINFORCE ONE ANOTHER.
            </span>
          </h2>
          <p className="text-[#4E5058] text-sm sm:text-base leading-relaxed">
            The hallmark of a true institutional conglomerate is not merely operating distinct companies, but creating seamless operational synergies where each vertical amplifies the next.
          </p>
        </div>

        {/* Interactive Synergy Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Vertical Navigation Selector */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {verticals.map((vert, index) => {
              const IconComp = vert.icon;
              const isActive = activeVertical === index;
              return (
                <button
                  key={vert.id}
                  onClick={() => setActiveVertical(index)}
                  className={`text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                    isActive
                      ? "bg-white border-[var(--color-jv-orange)] card-shadow-hover -translate-y-0.5"
                      : "bg-white/80 border-[#E2E8F0] hover:border-[#CBD5E1] hover:bg-white"
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isActive
                        ? "bg-[var(--color-jv-orange)] text-white shadow-md shadow-[var(--color-jv-orange)]/30"
                        : "bg-[#F1F5F9] text-[#2B2D31]"
                    }`}
                  >
                    <IconComp size={22} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#64748B] block">
                      Vertical 0{index + 1}
                    </span>
                    <h3 className={`text-sm sm:text-base font-bold ${isActive ? "text-[#18191C]" : "text-[#2B2D31]"}`}>
                      {vert.title}
                    </h3>
                    <p className="text-xs text-[#64748B] mt-1 line-clamp-1">
                      {vert.companies.join(" • ")}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Synergy Showcase on Pure White */}
          <div className="lg:col-span-7 bg-white border border-[#E2E8F0] rounded-3xl p-6 sm:p-10 card-shadow-3d relative overflow-hidden">
            <div
              className="absolute -top-24 -right-24 w-60 h-60 rounded-full blur-3xl opacity-15 pointer-events-none"
              style={{ backgroundColor: verticals[activeVertical].accent }}
            />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: `${verticals[activeVertical].accent}15`,
                    color: verticals[activeVertical].accent,
                    border: `1px solid ${verticals[activeVertical].accent}35`,
                  }}
                >
                  Strategic Vertical Focus
                </span>
                <span className="text-xs text-[#94A3B8] font-mono">
                  0{activeVertical + 1} / 05
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-black text-[#18191C] mb-2">
                {verticals[activeVertical].title}
              </h3>

              <p className="text-sm font-semibold text-[var(--color-jv-orange)] mb-6">
                Role: {verticals[activeVertical].role}
              </p>

              <p className="text-sm text-[#4E5058] leading-relaxed mb-8">
                {verticals[activeVertical].description}
              </p>

              {/* Companies under this vertical */}
              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#64748B] mb-3">
                  Operating Companies in this Cluster:
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {verticals[activeVertical].companies.map((compName, i) => (
                    <div
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-bold text-[#18191C] flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-jv-orange)]" />
                      <span>{compName}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conglomerate Flywheel Synergy Box */}
              <div className="p-5 rounded-2xl bg-[#FFF4ED] border border-[var(--color-jv-orange)]/25 mb-8">
                <div className="flex items-center gap-2 text-xs font-bold text-[var(--color-jv-orange)] uppercase tracking-wider mb-2">
                  <RefreshCw size={14} className="text-[var(--color-jv-orange)]" />
                  <span>Cross-Conglomerate Value Loop</span>
                </div>
                <p className="text-xs text-[#4E5058] leading-relaxed">
                  {verticals[activeVertical].synergyImpact}
                </p>
              </div>

              {/* Bottom Actions */}
              <div className="flex items-center justify-between pt-6 border-t border-[#E2E8F0]">
                <span className="text-xs text-[#64748B]">
                  Ready to collaborate with this vertical?
                </span>
                <Link
                  href="#contact"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[var(--color-jv-orange)] to-[#c2410c] text-white text-xs font-bold transition-all flex items-center gap-2 shadow-sm"
                >
                  <span>Connect With Leadership</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
