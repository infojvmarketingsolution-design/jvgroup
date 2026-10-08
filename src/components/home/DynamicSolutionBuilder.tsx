"use client";

import { useState } from "react";
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Layers, 
  ShieldCheck, 
  Phone, 
  Globe2, 
  Send 
} from "lucide-react";
import { BUSINESS_ENTITIES, JV_GROUP_META } from "@/data/businesses";
import SeasonalAtmosphere from "@/components/common/SeasonalAtmosphere";
import { useSeason } from "@/context/SeasonContext";

const CAPABILITY_OPTIONS = [
  {
    id: "marketing_ai",
    label: "AI Marketing & Performance Ads (Meta, Google, LinkedIn, TikTok)",
    category: "Marketing",
    entityId: "jv-marketing-solution-pvt-ltd",
    entityName: "J.V Marketing Solution Private Limited (India)",
  },
  {
    id: "software_web_mobile",
    label: "Custom Software & Mobile App Development",
    category: "Technology",
    entityId: "ekato-tech",
    entityName: "Ekato Tech",
  },
  {
    id: "wapipulse_saas",
    label: "Official WhatsApp Cloud API & AI Chatbots (Wapipulse.com)",
    category: "Conversational SaaS",
    entityId: "wapipulse",
    entityName: "WapiPulse.com",
  },
  {
    id: "ticket4service_saas",
    label: "Enterprise Omnichannel Helpdesk & Ticketing (Ticket4service.com)",
    category: "Helpdesk SaaS",
    entityId: "ticket4service",
    entityName: "Ticket4service.com",
  },
  {
    id: "inhouse_saas",
    label: "Enterprise ERP & Education CRM Platforms",
    category: "Technology",
    entityId: "ekato-tech",
    entityName: "Ekato Tech (ERP & CRM)",
  },
  {
    id: "logistics_freight",
    label: "International Air & Ocean Freight (FCL/LCL Cargo)",
    category: "Logistics",
    entityId: "jv-infinity-import-export",
    entityName: "J.V Infinity Import Export",
  },
  {
    id: "it_infra_cloud",
    label: "Enterprise Cloud, Networking & Cybersecurity Infrastructure",
    category: "IT Systems",
    entityId: "jv-it-infrastructure-management",
    entityName: "J.V IT Infrastructure Management",
  },
  {
    id: "real_estate_ahmedabad",
    label: "Commercial Space & Land Acquisition (Ahmedabad / Gandhinagar)",
    category: "Real Estate",
    entityId: "jv-real-estate",
    entityName: "J.V Real Estate",
  },
  {
    id: "overseas_visa_education",
    label: "Global Master Program & Work Visa (UK, USA, Canada, Europe)",
    category: "Overseas",
    entityId: "jv-overseas",
    entityName: "J.V OVERSEAS",
  },
  {
    id: "regional_sme_growth",
    label: "Local & Regional SME Marketing / Hosting",
    category: "Marketing",
    entityId: "ahmedabad-marketing-solution",
    entityName: "Ahmedabad Marketing Solution",
  }
];

export default function DynamicSolutionBuilder() {
  const { getSectionSeason } = useSeason();
  const sectionSeason = getSectionSeason(1);
  const [selectedMarket, setSelectedMarket] = useState<"global" | "india">("global");
  const [selectedCapabilities, setSelectedCapabilities] = useState<string[]>([
    "marketing_ai",
    "software_web_mobile"
  ]);
  const [submitted, setSubmitted] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    company: "",
    phone: ""
  });

  const toggleCapability = (id: string) => {
    if (selectedCapabilities.includes(id)) {
      if (selectedCapabilities.length > 1) {
        setSelectedCapabilities(selectedCapabilities.filter((c) => c !== id));
      }
    } else {
      setSelectedCapabilities([...selectedCapabilities, id]);
    }
  };

  const matchedEntities = Array.from(
    new Set(
      selectedCapabilities
        .map((capId) => {
          const cap = CAPABILITY_OPTIONS.find((c) => c.id === capId);
          return cap ? cap.entityName : null;
        })
        .filter(Boolean)
    )
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="solutions" className="py-24 bg-[#F8FAFC] border-t border-[#E2E8F0] relative overflow-hidden">
      <div className="absolute inset-0 white-grid-bg opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(243,99,35,0.06)_0%,transparent_70%)] pointer-events-none" />

      {/* 2nd Section Dynamic Next Season Animation */}
      <SeasonalAtmosphere season={sectionSeason} sectionIndex={1} totalSections={8} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--color-jv-orange)]/30 bg-[#FFF4ED] mb-4">
            <Sparkles size={14} className="text-[var(--color-jv-orange)]" />
            <span className="text-[var(--color-jv-orange)] text-xs font-bold tracking-widest uppercase">
              Interactive B2B Solution Builder
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#18191C] tracking-tight leading-tight mb-4">
            CONFIGURE YOUR CUSTOM <br />
            <span className="text-shimmer-orange">
              JV ECOSYSTEM PACKAGE.
            </span>
          </h2>

          <p className="text-[#4E5058] text-sm sm:text-base leading-relaxed">
            Select your target geography and required services across marketing, software, logistics, infrastructure, or real estate to dynamically calculate a unified execution plan.
          </p>
        </div>

        {/* Builder Container */}
        <div className="bg-white border border-[#E2E8F0] rounded-3xl p-4 sm:p-8 lg:p-10 card-shadow-3d grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start">
          
          {/* Left: Interactive Configurator */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Market Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#2B2D31] mb-2">
                1. Select Target Operating Market:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedMarket("global")}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    selectedMarket === "global"
                      ? "bg-[#FFF4ED] border-[var(--color-jv-orange)] shadow-sm"
                      : "bg-[#F8FAFC] border-[#E2E8F0] hover:border-[#CBD5E1]"
                  }`}
                >
                  <span className="text-xs font-black text-[#18191C] flex items-center gap-1.5">
                    <span>🇺🇸 🇬🇧 🇨🇦 Global B2B</span>
                  </span>
                  <span className="text-[11px] text-[#64748B] mt-0.5 block">
                    Priority Markets: USA, UK, Canada & Europe
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedMarket("india")}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    selectedMarket === "india"
                      ? "bg-[#FFF4ED] border-[var(--color-jv-orange)] shadow-sm"
                      : "bg-[#F8FAFC] border-[#E2E8F0] hover:border-[#CBD5E1]"
                  }`}
                >
                  <span className="text-xs font-black text-[#18191C] flex items-center gap-1.5">
                    <span>🇮🇳 India Domestic Market</span>
                  </span>
                  <span className="text-[11px] text-[#64748B] mt-0.5 block">
                    Pan-India Regional Enterprises, Real Estate & Visas
                  </span>
                </button>
              </div>
            </div>

            {/* Capability Checklist */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#2B2D31] mb-2">
                2. Select Required Service Capabilities:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {CAPABILITY_OPTIONS.map((cap) => {
                  const isSelected = selectedCapabilities.includes(cap.id);
                  return (
                    <button
                      type="button"
                      key={cap.id}
                      onClick={() => toggleCapability(cap.id)}
                      className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all flex items-start gap-2.5 ${
                        isSelected
                          ? "bg-white border-[var(--color-jv-orange)] text-[#18191C] shadow-sm"
                          : "bg-[#F8FAFC] border-[#E2E8F0] text-[#64748B] hover:text-[#18191C]"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-md mt-0.5 flex items-center justify-center shrink-0 text-white ${
                          isSelected ? "bg-[var(--color-jv-orange)]" : "border border-[#CBD5E1]"
                        }`}
                      >
                        {isSelected && <CheckCircle2 size={12} />}
                      </div>
                      <div>
                        <span className="block leading-snug">{cap.label}</span>
                        <span className="text-[10px] text-[var(--color-jv-orange)] block mt-0.5 font-bold">
                          {cap.entityName}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right: Dynamic Output & Proposal Submission */}
          <div className="lg:col-span-5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 sm:p-7 card-shadow-3d">
            <h3 className="text-lg font-heading font-black text-[#18191C] mb-1">
              Dynamic Proposal Preview
            </h3>
            <p className="text-xs text-[#64748B] mb-5">
              Live configuration calculated based on your inputs:
            </p>

            <div className="space-y-4 mb-6">
              <div className="p-3.5 bg-white rounded-xl border border-[#E2E8F0] text-xs">
                <span className="block text-[10px] uppercase font-bold text-[#64748B] mb-1">
                  Designated Operating Entities ({matchedEntities.length}):
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {matchedEntities.map((ent, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-[#FFF4ED] text-[var(--color-jv-orange)] border border-[var(--color-jv-orange)]/25 font-bold text-[11px]"
                    >
                      {ent}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-3 bg-white rounded-xl border border-[#E2E8F0]">
                  <span className="block text-[10px] uppercase font-bold text-[#64748B]">
                    Market Scope
                  </span>
                  <span className="font-bold text-[#18191C]">
                    {selectedMarket === "global" ? "Global B2B (USA/UK/CA)" : "India Regional"}
                  </span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#E2E8F0]">
                  <span className="block text-[10px] uppercase font-bold text-[#64748B]">
                    Hotline Contact
                  </span>
                  <span className="font-bold text-[var(--color-jv-orange)]">
                    {selectedMarket === "global" ? JV_GROUP_META.globalPhone : JV_GROUP_META.indiaPhone}
                  </span>
                </div>
              </div>
            </div>

            {submitted ? (
              <div className="py-6 text-center bg-white rounded-xl border border-[var(--color-jv-orange)]/30 p-5">
                <CheckCircle2 size={30} className="text-[var(--color-jv-orange)] mx-auto mb-2" />
                <h4 className="text-sm font-black text-[#18191C]">Custom Blueprint Submitted</h4>
                <p className="text-xs text-[#64748B] mt-1">
                  Our group coordinator will contact {contactInfo.email || "you"} with a consolidated multi-entity proposal within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Your Full Name *"
                  value={contactInfo.name}
                  onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                  className="w-full bg-white border border-[#E2E8F0] rounded-xl px-3.5 py-2 text-xs text-[#18191C] placeholder-[#94A3B8] focus:outline-none focus:border-[var(--color-jv-orange)]"
                />

                <input
                  type="email"
                  required
                  placeholder="Official Email Address *"
                  value={contactInfo.email}
                  onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                  className="w-full bg-white border border-[#E2E8F0] rounded-xl px-3.5 py-2 text-xs text-[#18191C] placeholder-[#94A3B8] focus:outline-none focus:border-[var(--color-jv-orange)]"
                />

                <input
                  type="text"
                  placeholder="Company / Enterprise Name"
                  value={contactInfo.company}
                  onChange={(e) => setContactInfo({ ...contactInfo, company: e.target.value })}
                  className="w-full bg-white border border-[#E2E8F0] rounded-xl px-3.5 py-2 text-xs text-[#18191C] placeholder-[#94A3B8] focus:outline-none focus:border-[var(--color-jv-orange)]"
                />

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[var(--color-jv-orange)] to-[#c2410c] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <Send size={13} />
                  <span>Request Custom Ecosystem Blueprint</span>
                </button>
              </form>
            )}

            <div className="pt-3 border-t border-[#E2E8F0] mt-4 flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#64748B]">
              <span className="flex items-center gap-1">
                <ShieldCheck size={13} className="text-[var(--color-jv-orange)]" />
                <span>Consolidated SLA</span>
              </span>
              <span>Global B2B: India • UK • USA • Canada</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
