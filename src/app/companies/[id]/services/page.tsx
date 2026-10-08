"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { 
  ArrowRight, 
  MapPin, 
  MessageSquare, 
  Cpu, 
  Sparkles, 
  Globe2, 
  Search, 
  CheckCircle2, 
  Check, 
  ShieldCheck, 
  Star, 
  Phone,
  BarChart3,
  Layers,
  ArrowUpRight
} from "lucide-react";
import { BUSINESS_ENTITIES, BusinessEntity } from "@/data/businesses";
import { COMPANY_WEBSITES_DATA } from "@/data/companyWebsitesData";
import CompanyPageWrapper from "@/components/company/CompanyPageWrapper";
import ExploreLocalGrowthServices from "../components/ExploreLocalGrowthServices";
import JvServicesGridSection from "@/components/company/JvServicesGridSection";

export default function DynamicServicesPage() {
  const params = useParams();
  const id = (params?.id as string) || "ahmedabad-marketing-solution";
  const entity: BusinessEntity = BUSINESS_ENTITIES.find((e) => e.id === id) || BUSINESS_ENTITIES[0];
  const companyData = COMPANY_WEBSITES_DATA[id] || COMPANY_WEBSITES_DATA["ahmedabad-marketing-solution"];

  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const isAms = id === "ahmedabad-marketing-solution";
  const cleanPhone = entity.phone.replace(/[^0-9]/g, "");

  const categories = companyData?.serviceCategories || [
    { id: "all", label: "All Services" }
  ];

  const services = companyData?.services || [];

  const filteredServices = selectedCategory === "all"
    ? services
    : services.filter((s) => s.category === selectedCategory);

  return (
    <CompanyPageWrapper entity={entity}>
      <div className="w-full py-12 sm:py-16 md:py-20">
        
        {/* 1. Header Hero Banner */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF4ED] border border-[var(--color-jv-orange)]/30 text-[var(--color-jv-orange)] text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles size={13} />
              <span>{entity.categoryLabel} Capabilities</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-[#18191C] tracking-tight leading-tight mb-4">
              Specialized Solutions & Services by {entity.name}.
            </h1>

            <p className="text-[#4E5058] text-base sm:text-lg leading-relaxed">
              Every service delivered by {entity.shortName} is engineered with one objective: <strong>tangible commercial execution, measurable performance, and unyielding quality</strong> backed by the JV Group service standard.
            </p>
          </div>
        </div>

        {/* 2. Specialized Local Growth Grid for AMS (if AMS) */}
        {isAms && (
          <ExploreLocalGrowthServices inquiryTarget="contact-page" className="border-t border-[#E2E8F0] mb-12" />
        )}

        {/* 2.5 Specialized 5-Division Services Spectrum for JV Marketing Solution */}
        {id === "jv-marketing-solution-pvt-ltd" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
            <JvServicesGridSection entityId={id} variant="services-page" className="rounded-3xl border border-[#E2E8F0] shadow-sm" />
          </div>
        )}

        {/* 3. Detailed Service Deliverables & SLA Specifications */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E2E8F0]">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-[var(--color-jv-orange)] uppercase tracking-wider block mb-1">
                Execution Roadmap
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#18191C]">
                Detailed SLA Deliverables & Scopes of Work
              </h2>
              <p className="text-sm text-[#64748B] mt-1">
                Review technical milestones, verified outputs, and execution standards for {entity.shortName}.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? "bg-[var(--color-jv-orange)] text-white shadow-sm"
                      : "bg-[#F8FAFC] text-[#64748B] hover:text-[#18191C] hover:bg-[#E2E8F0] border border-[#E2E8F0]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Service Cards Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 mb-16">
          {filteredServices.map((service, idx) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-white rounded-3xl border border-[#E2E8F0] p-6 sm:p-9 card-shadow-3d transition-all hover:border-[var(--color-jv-orange)]/50"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Meta & Metrics (4 Cols) */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="p-4 rounded-2xl bg-[#FFF4ED] border border-[var(--color-jv-orange)]/20">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white text-[var(--color-jv-orange)] border border-[var(--color-jv-orange)]/30 inline-block mb-3">
                      {service.badge}
                    </span>
                    <span className="block text-[11px] font-bold text-[#64748B] uppercase">
                      Target Performance
                    </span>
                    <span className="block text-2xl font-heading font-black text-[var(--color-jv-orange)] mt-0.5">
                      {service.metric}
                    </span>
                    <div className="mt-3 pt-3 border-t border-[var(--color-jv-orange)]/20 text-xs font-bold text-[#18191C]">
                      <strong>Timeline:</strong> {service.timeline}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs">
                    <span className="font-bold text-[#18191C] block mb-1">Recommended For:</span>
                    <span className="text-[#64748B]">{service.idealFor}</span>
                  </div>
                </div>

                {/* Right Deliverables & CTAs (8 Cols) */}
                <div className="lg:col-span-8 space-y-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-[var(--color-jv-orange)]">0{idx + 1}</span>
                      <span className="text-xs text-[#94A3B8]">•</span>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">{service.category}</span>
                    </div>
                    <h3 className="text-2xl font-heading font-black text-[#18191C]">
                      {service.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#4E5058] mt-1">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-[#18191C] mb-3">
                      Verified Outputs & Scope of Work
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs">
                          <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-[#2B2D31] font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-[#E2E8F0]">
                    <Link
                      href={`/companies/${entity.id}/contact?service=${encodeURIComponent(service.title)}`}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[var(--color-jv-orange)] to-[#c2410c] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md hover:-translate-y-0.5 transition-all"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRight size={14} />
                    </Link>

                    <a
                      href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(
                        `Hello ${entity.shortName}, I want to inquire about ${service.title}.`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition-all"
                    >
                      <MessageSquare size={14} />
                      <span>WhatsApp Desk</span>
                    </a>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* 4. Bottom Corporate SLA Guarantee Card */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#18191C] text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2 text-[var(--color-jv-orange)] font-bold text-xs uppercase tracking-wider">
                <ShieldCheck size={18} />
                <span>JV Group Institutional SLA</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-black text-white">
                Backed by Unified Corporate Governance.
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                All services from {entity.name} adhere to documented Service Level Agreements, transparent milestones, and executive escalation channels within the JV Group ecosystem.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href={`/companies/${entity.id}/contact`}
                className="px-6 py-3.5 rounded-xl bg-[var(--color-jv-orange)] hover:bg-[#d04a12] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-colors"
              >
                Request Custom Scope
              </Link>
            </div>
          </div>
        </div>

      </div>
    </CompanyPageWrapper>
  );
}
