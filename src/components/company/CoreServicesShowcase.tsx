"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Layers,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Megaphone,
  Smartphone,
  Code2,
  Server,
  Globe2,
  TrendingUp,
  MapPin,
  Check,
  X,
  Sparkles,
  Info,
  Workflow,
  Ship,
  Plane,
  Building2,
  GraduationCap,
} from "lucide-react";
import type { BusinessEntity, CoreServiceItem } from "@/data/businesses";

interface CoreServicesShowcaseProps {
  entity: BusinessEntity;
}

export default function CoreServicesShowcase({ entity }: CoreServicesShowcaseProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [modalServiceIndex, setModalServiceIndex] = useState<number | null>(null);

  // Helper to pick contextual icons for services
  const getServiceIcon = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes("ad") || n.includes("marketing") || n.includes("media") || n.includes("campaign")) {
      return <Megaphone size={20} className="text-[var(--color-jv-orange)]" />;
    }
    if (n.includes("software") || n.includes("mobile") || n.includes("app") || n.includes("ios") || n.includes("android")) {
      return <Smartphone size={20} className="text-[var(--color-jv-orange)]" />;
    }
    if (n.includes("infrastructure") || n.includes("cloud") || n.includes("server") || n.includes("it solution") || n.includes("devops")) {
      return <Server size={20} className="text-[var(--color-jv-orange)]" />;
    }
    if (n.includes("growth") || n.includes("consulting") || n.includes("expansion") || n.includes("international") || n.includes("global")) {
      return <Globe2 size={20} className="text-[var(--color-jv-orange)]" />;
    }
    if (n.includes("freight") || n.includes("shipping") || n.includes("cargo") || n.includes("customs")) {
      return <Ship size={20} className="text-[var(--color-jv-orange)]" />;
    }
    if (n.includes("property") || n.includes("real estate") || n.includes("infra")) {
      return <Building2 size={20} className="text-[var(--color-jv-orange)]" />;
    }
    if (n.includes("education") || n.includes("overseas") || n.includes("visa") || n.includes("college")) {
      return <GraduationCap size={20} className="text-[var(--color-jv-orange)]" />;
    }
    if (n.includes("web") || n.includes("frontend") || n.includes("code")) {
      return <Code2 size={20} className="text-[var(--color-jv-orange)]" />;
    }
    return <Sparkles size={20} className="text-[var(--color-jv-orange)]" />;
  };

  // Helper to assign a tailored enterprise badge
  const getServiceBadge = (name: string, index: number) => {
    const n = name.toLowerCase();
    if (n.includes("ad") || n.includes("media")) return "Omni-Network Media";
    if (n.includes("software") || n.includes("mobile")) return "Engineering & Apps";
    if (n.includes("infrastructure") || n.includes("cloud")) return "Enterprise Cloud & NOC";
    if (n.includes("growth") || n.includes("consulting")) return "Strategic Advisory";
    if (n.includes("seo") || n.includes("local")) return "Search Supremacy";
    return `Tier 0${index + 1} Enterprise`;
  };

  const services = entity.detailedServices || [];

  // Filtered services
  const filteredServices =
    selectedFilter === "all"
      ? services
      : services.filter((_, idx) => `service-${idx}` === selectedFilter);

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#FFFDFB] to-slate-50/70 border-b border-slate-200/90 relative overflow-hidden">
      {/* Decorative Lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-50/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-50/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-[var(--color-jv-orange)] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <Layers size={13} className="text-[var(--color-jv-orange)]" />
              <span>Capabilities &amp; Deliverables</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight leading-[1.15]">
              Core Services &amp; Solution Catalog
            </h2>

            <p className="text-sm sm:text-base text-slate-600 mt-2.5 leading-relaxed font-normal">
              Comprehensive technical scope, delivery models, and tangible outputs delivered by {entity.shortName || entity.name}.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 self-start md:self-auto shrink-0">
            <div className="hidden lg:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs">
              <ShieldCheck size={15} className="text-emerald-600" />
              <span>Full SLA &amp; Umbrella Guarantee</span>
            </div>

            <Link
              href={`/companies/${entity.id}/services`}
              className="px-5 py-2.5 rounded-xl bg-[var(--color-jv-orange)] hover:bg-[#ea580c] text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm hover:shadow-md cursor-pointer"
            >
              <span>Explore All {services.length} Services</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* Quick Filter Pill Bar */}
        {services.length > 2 && (
          <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 max-w-full scrollbar-none border-b border-slate-200/60">
            <button
              type="button"
              onClick={() => setSelectedFilter("all")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                selectedFilter === "all"
                  ? "bg-slate-900 text-white shadow-2xs"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              <Sparkles size={12} className={selectedFilter === "all" ? "text-amber-300" : "text-slate-400"} />
              <span>All Services ({services.length})</span>
            </button>

            {services.map((service, sIdx) => {
              const isSelected = selectedFilter === `service-${sIdx}`;
              return (
                <button
                  key={sIdx}
                  type="button"
                  onClick={() => setSelectedFilter(isSelected ? "all" : `service-${sIdx}`)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-[var(--color-jv-orange)] text-white shadow-2xs"
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  <span className={`text-[10px] font-mono px-1 rounded ${isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"}`}>
                    0{sIdx + 1}
                  </span>
                  <span>{service.name}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* 2x2 Clean Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8">
          {filteredServices.map((service, index) => {
            const actualIndex = services.findIndex((s) => s.name === service.name);
            const displayIndex = actualIndex >= 0 ? actualIndex : index;
            const badgeText = getServiceBadge(service.name, displayIndex);

            return (
              <div
                key={displayIndex}
                className="group relative bg-white border border-slate-200 hover:border-orange-300 rounded-3xl p-7 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Subtle Amber Highlight Bar */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[var(--color-jv-orange)] via-amber-400 to-[#ea580c] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Header inside Card */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-orange-50 border border-orange-200/70 flex items-center justify-center text-[var(--color-jv-orange)] shadow-2xs group-hover:scale-105 transition-transform duration-300">
                        {getServiceIcon(service.name)}
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400">
                        0{displayIndex + 1}
                      </span>
                    </div>

                    <span className="text-[11px] font-bold tracking-wide uppercase px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {badgeText}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-heading font-black text-slate-900 group-hover:text-[var(--color-jv-orange)] transition-colors mb-2.5 leading-snug">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Verified Deliverables Box (NO Truncation) */}
                  <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70 mb-6 space-y-2.5">
                    <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      <span>Verified Deliverables:</span>
                      <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md text-[10px] font-semibold flex items-center gap-1 border border-emerald-200/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Included Scope
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.features.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-start gap-2 text-xs font-semibold text-slate-800 leading-snug"
                        >
                          <CheckCircle2
                            size={14}
                            className="text-emerald-600 shrink-0 mt-0.5"
                          />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: SLA & Inquire Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                    <ShieldCheck size={14} className="text-emerald-600 shrink-0" />
                    <span>Full SLA Support</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setModalServiceIndex(displayIndex)}
                      className="text-xs font-bold text-slate-600 hover:text-slate-900 py-1 px-2.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                      Scope Specs
                    </button>

                    <Link
                      href={`/companies/${entity.id}/contact?service=${encodeURIComponent(service.name)}`}
                      className="px-3.5 py-1.5 rounded-xl bg-[var(--color-jv-orange)] hover:bg-[#ea580c] text-white text-xs font-bold transition-all flex items-center gap-1 shadow-2xs hover:shadow-sm"
                    >
                      <span>Inquire</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Quick Service Scope Modal */}
      {modalServiceIndex !== null && services[modalServiceIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setModalServiceIndex(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-jv-orange)] bg-orange-50 px-2.5 py-1 rounded-lg border border-orange-200/60">
                  {getServiceBadge(services[modalServiceIndex].name, modalServiceIndex)}
                </span>
                <span className="text-xs font-mono font-bold text-slate-400">
                  Service 0{modalServiceIndex + 1}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-heading font-black text-slate-900 mt-2">
                {services[modalServiceIndex].name}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {services[modalServiceIndex].description}
              </p>

              {/* Scope Checklist */}
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Verified Deliverables &amp; Technical Capabilities:
                </h4>
                <div className="space-y-2.5">
                  {services[modalServiceIndex].features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-800"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-emerald-600 shrink-0 mt-0.5"
                      />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery Assurance */}
              <div className="mt-6 p-3.5 rounded-2xl bg-orange-50/70 border border-orange-200/60 flex items-center justify-between text-xs text-orange-950">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-emerald-600 shrink-0" />
                  <span className="font-semibold">Turnkey SLA Guarantee • Zero Outsourcing</span>
                </div>
                <span className="font-bold">24-48h Kickoff</span>
              </div>

              {/* CTA Bar */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setModalServiceIndex(null)}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Close
                </button>
                <Link
                  href={`/companies/${entity.id}/contact?service=${encodeURIComponent(services[modalServiceIndex].name)}`}
                  className="px-5 py-2.5 rounded-xl bg-[var(--color-jv-orange)] hover:bg-[#ea580c] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all"
                >
                  <span>Request Custom Proposal</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
