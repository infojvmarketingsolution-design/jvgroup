"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sliders,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Zap,
  Globe2,
  Layers,
  Lock,
  FileCheck,
  Building2,
  MapPin,
  Search,
  Code2,
  Smartphone,
  Server,
  MessageSquare,
  Ship,
  Plane,
  GraduationCap,
  Briefcase,
  ChevronRight,
  Sparkles,
  Workflow,
  Check,
} from "lucide-react";
import type { BusinessEntity } from "@/data/businesses";
import type { CompanyInteractiveTool, InteractiveToolOption } from "@/data/companyWebsitesData";

interface InteractiveCapabilityMatrixProps {
  entity: BusinessEntity;
  tool: CompanyInteractiveTool;
  proposalHref?: string;
}

export default function InteractiveCapabilityMatrix({
  entity,
  tool,
  proposalHref = "#proposal-form",
}: InteractiveCapabilityMatrixProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const selectedOption = tool.options[selectedIndex] || tool.options[0];

  // Helper to pick a contextual scenario icon
  const getScenarioIcon = (label: string, type: string) => {
    const l = label.toLowerCase();
    const t = type.toLowerCase();

    if (l.includes("uk") || l.includes("europe") || l.includes("global") || l.includes("international")) {
      return <Globe2 size={20} className="text-[var(--color-jv-orange)]" />;
    }
    if (l.includes("e-commerce") || l.includes("concurrency") || l.includes("retail") || l.includes("spend")) {
      return <TrendingUp size={20} className="text-[var(--color-jv-orange)]" />;
    }
    if (l.includes("fintech") || l.includes("regulated") || l.includes("soc2") || l.includes("security") || l.includes("firewall")) {
      return <ShieldCheck size={20} className="text-[var(--color-jv-orange)]" />;
    }
    if (l.includes("msa") || l.includes("agreement") || l.includes("invoice") || l.includes("corporate")) {
      return <FileCheck size={20} className="text-[var(--color-jv-orange)]" />;
    }
    if (l.includes("pin code") || l.includes("highway") || l.includes("corridor") || l.includes("maps") || t.includes("zone")) {
      return <MapPin size={20} className="text-[var(--color-jv-orange)]" />;
    }
    if (l.includes("whatsapp") || l.includes("message") || l.includes("bot") || l.includes("ticket") || t.includes("whatsapp")) {
      return <MessageSquare size={20} className="text-[var(--color-jv-orange)]" />;
    }
    if (l.includes("ocean") || l.includes("freight") || l.includes("transit") || l.includes("cargo") || t.includes("freight")) {
      return <Ship size={20} className="text-[var(--color-jv-orange)]" />;
    }
    if (l.includes("visa") || l.includes("college") || l.includes("university") || l.includes("study")) {
      return <GraduationCap size={20} className="text-[var(--color-jv-orange)]" />;
    }
    if (l.includes("server") || l.includes("cloud") || l.includes("devops") || l.includes("infra")) {
      return <Server size={20} className="text-[var(--color-jv-orange)]" />;
    }
    if (l.includes("app") || l.includes("software") || l.includes("saas") || l.includes("tech")) {
      return <Code2 size={20} className="text-[var(--color-jv-orange)]" />;
    }
    return <Sparkles size={20} className="text-[var(--color-jv-orange)]" />;
  };

  // Helper to extract feature breakdown tags from detail & extra strings
  const getFeatureTags = (opt: InteractiveToolOption): string[] => {
    const tags: string[] = [];
    if (opt.detail) {
      const parts = opt.detail.split(/[+•|,]/).map((s) => s.trim()).filter((s) => s.length > 0);
      tags.push(...parts);
    }
    if (opt.extra) {
      const extraParts = opt.extra.split(/[+•|,]/).map((s) => s.trim()).filter((s) => s.length > 0);
      tags.push(...extraParts);
    }
    return Array.from(new Set(tags)).slice(0, 4);
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-[#FFFDFB] to-slate-50 border-b border-slate-200/90 relative overflow-hidden">
      {/* Subtle Background Glow Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[var(--color-jv-orange)]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-[var(--color-jv-orange)] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <Sliders size={13} className="text-[var(--color-jv-orange)]" />
              <span>Interactive Capability Preview</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-0.5" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-slate-900 tracking-tight">
              {tool.title}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              {tool.subtitle}
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs">
              <Zap size={14} className="text-[var(--color-jv-orange)]" />
              <span>Live Architecture Matrix</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-50 border border-emerald-200/70 text-xs font-bold text-emerald-800 shadow-2xs">
              <ShieldCheck size={14} className="text-emerald-600" />
              <span>Production SLA Backed</span>
            </div>
          </div>
        </div>

        {/* Master-Detail Interactive Matrix Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Interactive Scenario Cards (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between px-1 text-xs font-bold uppercase tracking-wider text-slate-400">
              <span>Select Enterprise Challenge:</span>
              <span className="font-mono text-[11px] text-slate-500">{selectedIndex + 1} of {tool.options.length} Selected</span>
            </div>

            {tool.options.map((opt, oIdx) => {
              const isSelected = selectedIndex === oIdx;

              return (
                <button
                  key={oIdx}
                  type="button"
                  onClick={() => setSelectedIndex(oIdx)}
                  className={`w-full p-4 rounded-2xl text-left transition-all duration-200 cursor-pointer border flex items-start gap-3.5 relative overflow-hidden group ${
                    isSelected
                      ? "bg-gradient-to-r from-orange-50/90 to-white border-[var(--color-jv-orange)] shadow-md ring-2 ring-[var(--color-jv-orange)]/20 -translate-y-0.5"
                      : "bg-white hover:bg-slate-50/80 border-slate-200 hover:border-slate-300 shadow-2xs"
                  }`}
                >
                  {/* Active Left Indicator Bar */}
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[var(--color-jv-orange)] rounded-r-full" />
                  )}

                  {/* Scenario Icon Pod */}
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border transition-all ${
                      isSelected
                        ? "bg-white border-orange-200 shadow-2xs scale-105"
                        : "bg-slate-50 group-hover:bg-white border-slate-200/70 text-slate-600"
                    }`}
                  >
                    {getScenarioIcon(opt.label, tool.type)}
                  </div>

                  {/* Text Details */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span
                        className={`block font-heading font-black text-sm leading-snug truncate ${
                          isSelected ? "text-slate-900" : "text-slate-800 group-hover:text-slate-900"
                        }`}
                      >
                        {opt.label}
                      </span>
                      {isSelected ? (
                        <span className="w-5 h-5 rounded-full bg-[var(--color-jv-orange)] text-white flex items-center justify-center shrink-0 shadow-2xs">
                          <Check size={12} strokeWidth={3} />
                        </span>
                      ) : (
                        <ChevronRight size={15} className="text-slate-400 group-hover:text-slate-600 shrink-0" />
                      )}
                    </div>

                    <p className="text-xs text-slate-500 line-clamp-1 leading-normal font-normal">
                      {opt.detail}
                    </p>

                    <div className="mt-2.5 flex items-center justify-between gap-2">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-bold ${
                          isSelected
                            ? "bg-orange-100/70 text-orange-900 border border-orange-200"
                            : "bg-slate-100 text-slate-600 border border-slate-200"
                        }`}
                      >
                        {opt.metric}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Live Solution Architecture Blueprint (7 cols on lg) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl relative overflow-hidden">
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[var(--color-jv-orange)] via-amber-400 to-[#ea580c]" />

              {/* Blueprint Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-5 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--color-jv-orange)] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200/70">
                      Solution Blueprint
                    </span>
                    <span className="text-xs font-bold text-slate-400">
                      Scenario 0{selectedIndex + 1}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-heading font-black text-slate-900 mt-2">
                    {selectedOption.label}
                  </h3>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Deployment Ready</span>
                </div>
              </div>

              {/* Highlight Metric Callout Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-orange-50/70 via-white to-amber-50/40 border border-orange-200/80 mb-6 flex items-center justify-between gap-4 shadow-2xs">
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-orange-950/70">
                    Guaranteed Outcome &amp; Benchmark
                  </span>
                  <span className="block text-xl sm:text-2xl font-black text-slate-900 mt-0.5">
                    {selectedOption.metric}
                  </span>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-orange-200 flex items-center justify-center text-[var(--color-jv-orange)] shadow-2xs shrink-0">
                  <TrendingUp size={22} />
                </div>
              </div>

              {/* Integrated Tech & Ad Architecture Scope */}
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                    Integrated Operational Scope:
                  </h4>
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed flex items-start gap-2.5">
                    <Workflow size={17} className="text-[var(--color-jv-orange)] shrink-0 mt-0.5" />
                    <span>{selectedOption.detail}</span>
                  </div>
                </div>

                {/* Specific Deliverables / Extra Breakdown */}
                {selectedOption.extra && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                      Included Deliverables &amp; Safeguards:
                    </h4>
                    <div className="p-3.5 rounded-2xl bg-emerald-50/50 border border-emerald-200/70 text-xs sm:text-sm font-semibold text-emerald-950 leading-relaxed flex items-start gap-2.5">
                      <CheckCircle2 size={17} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>{selectedOption.extra}</span>
                    </div>
                  </div>
                )}

                {/* Extracted Feature Badges */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Key Architectural Pillars Deployed:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {getFeatureTags(selectedOption).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-2xs"
                      >
                        <Check size={12} className="text-emerald-600" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enterprise Governance Guarantees Bar */}
              <div className="p-3.5 rounded-2xl bg-slate-100/70 border border-slate-200/60 mb-6 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={15} className="text-emerald-600" />
                  <span className="font-semibold">Direct Umbrella MSA • Single Point of Contact</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={14} className="text-[var(--color-jv-orange)]" />
                  <span className="font-semibold">24-48h Kickoff Window</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-5 border-t border-slate-100">
                <span className="text-xs text-slate-500 font-medium">
                  Ready to deploy this architecture for your brand?
                </span>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href={`${proposalHref}?challenge=${encodeURIComponent(selectedOption.label)}`}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[var(--color-jv-orange)] hover:bg-[#ea580c] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm hover:shadow-md"
                  >
                    <span>Deploy This Architecture</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
