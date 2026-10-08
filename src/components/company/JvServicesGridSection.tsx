"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Megaphone,
  Monitor,
  Code2,
  Palette,
  Brain,
  Search,
  Bot,
  Users,
  FileEdit,
  Hash,
  Briefcase,
  ShoppingCart,
  Laptop,
  PenTool,
  Wrench,
  Layers,
  Database,
  Smartphone,
  Cloud,
  Plug,
  Fingerprint,
  Gem,
  Image as ImageIcon,
  CreditCard,
  Zap,
  Network,
  MessageSquare,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import {
  JV_MARKETING_SERVICES_CLUSTERS,
  JvServiceCluster,
  JvServiceItem,
} from "@/data/jvMarketingServicesCatalog";

interface JvServicesGridSectionProps {
  entityId?: string;
  variant?: "home" | "services-page";
  className?: string;
}

export default function JvServicesGridSection({
  entityId = "jv-marketing-solution-pvt-ltd",
  variant = "home",
  className = "",
}: JvServicesGridSectionProps) {
  const [activeClusterId, setActiveClusterId] = useState<string>("digital-marketing");
  const [selectedService, setSelectedService] = useState<JvServiceItem | null>(null);

  // Icon renderer helper
  const renderClusterIcon = (iconName: string, size = 22) => {
    switch (iconName) {
      case "Megaphone":
        return <Megaphone size={size} />;
      case "Monitor":
        return <Monitor size={size} />;
      case "Code2":
        return <Code2 size={size} />;
      case "Palette":
        return <Palette size={size} />;
      case "Brain":
        return <Brain size={size} />;
      default:
        return <Sparkles size={size} />;
    }
  };

  const renderServiceIcon = (iconName: string, size = 15) => {
    const props = { size, className: "text-[#64748B] group-hover:text-[var(--color-jv-orange)] transition-colors shrink-0" };
    switch (iconName) {
      case "Search":
        return <Search {...props} />;
      case "Bot":
        return <Bot {...props} />;
      case "Users":
        return <Users {...props} />;
      case "FileEdit":
        return <FileEdit {...props} />;
      case "Hash":
        return <Hash {...props} />;
      case "Briefcase":
        return <Briefcase {...props} />;
      case "ShoppingCart":
        return <ShoppingCart {...props} />;
      case "Laptop":
        return <Laptop {...props} />;
      case "PenTool":
        return <PenTool {...props} />;
      case "Wrench":
        return <Wrench {...props} />;
      case "Layers":
        return <Layers {...props} />;
      case "Database":
        return <Database {...props} />;
      case "Smartphone":
        return <Smartphone {...props} />;
      case "Cloud":
        return <Cloud {...props} />;
      case "Plug":
        return <Plug {...props} />;
      case "Fingerprint":
        return <Fingerprint {...props} />;
      case "Gem":
        return <Gem {...props} />;
      case "Image":
        return <ImageIcon {...props} />;
      case "CreditCard":
        return <CreditCard {...props} />;
      case "Zap":
        return <Zap {...props} />;
      case "Network":
        return <Network {...props} />;
      case "MessageSquare":
        return <MessageSquare {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  const activeCluster =
    JV_MARKETING_SERVICES_CLUSTERS.find((c) => c.id === activeClusterId) ||
    JV_MARKETING_SERVICES_CLUSTERS[0];

  return (
    <section className={`relative py-16 sm:py-24 bg-gradient-to-b from-white via-[#FFFDFB] to-[#FFF9F5] border-b border-[#E2E8F0] overflow-hidden ${className}`}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 white-grid-bg opacity-40 pointer-events-none" />
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-[var(--color-jv-orange)]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--color-jv-orange)]/35 bg-[#FFF4ED] shadow-xs mb-4">
            <Sparkles size={14} className="text-[var(--color-jv-orange)] animate-pulse" />
            <span className="text-[var(--color-jv-orange)] text-xs font-black tracking-widest uppercase font-mono">
              COMPREHENSIVE CAPABILITIES SPECTRUM
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-black text-[#0F172A] tracking-tight leading-[1.14]">
            5 Specialized Service Divisions.{" "}
            <span className="block mt-1 bg-gradient-to-r from-[var(--color-jv-orange)] via-[#ea580c] to-[#c2410c] bg-clip-text text-transparent">
              One Unified Growth Architecture.
            </span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#475569] leading-relaxed font-normal">
            J.V Marketing Solution Private Limited (India) brings together full-funnel digital marketing, modern web engineering, custom software &amp; app development, corporate branding, and enterprise AI automation under one master service framework.
          </p>
        </div>

        {/* 5-Column High-Impact Overview Grid (Matching User Diagram) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 mb-12">
          {JV_MARKETING_SERVICES_CLUSTERS.map((cluster) => {
            const isActive = activeClusterId === cluster.id;
            return (
              <div
                key={cluster.id}
                onClick={() => setActiveClusterId(cluster.id)}
                className={`group relative p-6 rounded-3xl bg-white border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? "border-[var(--color-jv-orange)] shadow-xl shadow-[var(--color-jv-orange)]/15 ring-2 ring-[var(--color-jv-orange)]/20 -translate-y-1.5"
                    : "border-[#E2E8F0] hover:border-[var(--color-jv-orange)]/50 hover:shadow-lg hover:-translate-y-1"
                }`}
              >
                {/* Top Header: Icon + Category Name */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    {/* Rounded Icon Box (Styled exactly to user graphic) */}
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105"
                      style={{
                        backgroundColor: cluster.accentBg,
                        color: cluster.accentColor,
                        border: `1.5px solid ${cluster.accentBorder}`,
                      }}
                    >
                      {renderClusterIcon(cluster.iconName)}
                    </div>

                    <div>
                      <span
                        className="block font-heading font-black text-xs sm:text-[13px] tracking-wider leading-tight"
                        style={{ color: cluster.accentColor }}
                      >
                        {cluster.title}
                      </span>
                      <span className="block text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider mt-0.5">
                        {cluster.services.length} Core Services
                      </span>
                    </div>
                  </div>

                  {/* Sub-Service List (with matching icons) */}
                  <div className="space-y-2.5 pt-2 border-t border-[#F1F5F9]">
                    {cluster.services.map((item) => (
                      <div
                        key={item.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedService(item);
                        }}
                        className="group/item flex items-center gap-2.5 text-xs font-semibold text-[#334155] hover:text-[var(--color-jv-orange)] transition-colors cursor-pointer py-1 px-1.5 rounded-lg hover:bg-[#FFF4ED]/60"
                        title={item.description}
                      >
                        {renderServiceIcon(item.iconName)}
                        <span className="truncate flex-1">{item.name}</span>
                        <ChevronRight
                          size={12}
                          className="text-slate-300 group-hover/item:text-[var(--color-jv-orange)] group-hover/item:translate-x-0.5 transition-all opacity-0 group-hover/item:opacity-100"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Active Pill / Action */}
                <div className="mt-6 pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-[11px]">
                  <span
                    className="font-bold uppercase tracking-wider transition-colors"
                    style={{ color: isActive ? cluster.accentColor : "#94A3B8" }}
                  >
                    {isActive ? "Viewing Division" : "Select Division"}
                  </span>
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: cluster.accentColor }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Division Interactive Detail Showcase */}
        <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-[#E2E8F0] shadow-xl relative overflow-hidden">
          <div
            className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r"
            style={{
              backgroundImage: `linear-gradient(to right, ${activeCluster.accentColor}, #ea580c, #c2410c)`,
            }}
          />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#F1F5F9]">
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md"
                style={{
                  backgroundColor: activeCluster.accentBg,
                  color: activeCluster.accentColor,
                  border: `2px solid ${activeCluster.accentBorder}`,
                }}
              >
                {renderClusterIcon(activeCluster.iconName, 28)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className="text-xs font-mono font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md"
                    style={{
                      backgroundColor: activeCluster.accentBg,
                      color: activeCluster.accentColor,
                    }}
                  >
                    {activeCluster.badge}
                  </span>
                  <span className="text-xs text-[#64748B] font-semibold">
                    {activeCluster.services.length} Specialized Deliverables
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-black text-[#0F172A] mt-1">
                  {activeCluster.title}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href={`/companies/${entityId}/services`}
                className="px-5 py-3 rounded-xl bg-[#FFF4ED] hover:bg-[#FFE8DA] text-[var(--color-jv-orange)] font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 border border-[var(--color-jv-orange)]/30 transition-all shadow-xs"
              >
                <span>View Full Services Page</span>
                <ExternalLink size={14} />
              </Link>
              <Link
                href={`/companies/${entityId}/contact`}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-[var(--color-jv-orange)] to-[#c2410c] text-white font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-[var(--color-jv-orange)]/25 hover:shadow-xl transition-all"
              >
                <span>Request Custom Scope</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Sub-Services Deep-Dive Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            {activeCluster.services.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[var(--color-jv-orange)]/50 hover:bg-white shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center">
                        {renderServiceIcon(item.iconName, 16)}
                      </div>
                      <span className="font-heading font-black text-sm text-[#0F172A]">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white text-[#64748B] border border-[#E2E8F0]">
                      {item.timeline}
                    </span>
                  </div>

                  <p className="text-xs text-[#475569] leading-relaxed line-clamp-3">
                    {item.description}
                  </p>

                  <div className="mt-3.5 space-y-1.5 pt-3 border-t border-[#E2E8F0]/70">
                    {item.deliverables.slice(0, 3).map((del, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-1.5 text-[11px] font-medium text-[#334155]">
                        <CheckCircle2 size={12} className="text-[var(--color-jv-orange)] shrink-0" />
                        <span className="truncate">{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E2E8F0]/70 flex items-center justify-between text-xs">
                  <span className="font-mono font-bold text-[11px] text-[var(--color-jv-orange)] bg-[#FFF4ED] px-2 py-0.5 rounded border border-[var(--color-jv-orange)]/20">
                    {item.metric}
                  </span>
                  <Link
                    href={`/companies/${entityId}/contact?service=${encodeURIComponent(item.name)}`}
                    className="text-[11px] font-bold text-[#64748B] hover:text-[var(--color-jv-orange)] flex items-center gap-1 transition-colors"
                  >
                    <span>Inquire</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for Service Deep-Dive when clicked */}
        {selectedService && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in"
            onClick={() => setSelectedService(null)}
          >
            <div
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-[#E2E8F0] shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#F1F5F9]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF4ED] border border-[var(--color-jv-orange)]/30 flex items-center justify-center text-[var(--color-jv-orange)]">
                    {renderServiceIcon(selectedService.iconName, 20)}
                  </div>
                  <div>
                    <h4 className="text-lg font-heading font-black text-[#0F172A]">
                      {selectedService.name}
                    </h4>
                    <span className="text-xs text-[#64748B] font-semibold">
                      {selectedService.subLabel}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 font-bold flex items-center justify-center cursor-pointer transition-colors"
                >
                  ✕
                </button>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-[#475569] leading-relaxed">
                {selectedService.description}
              </p>

              <div className="mt-4 pt-4 border-t border-[#F1F5F9]">
                <span className="block text-[11px] font-extrabold uppercase tracking-wider text-[#94A3B8] mb-2">
                  Verified Deliverables &amp; Execution Scope:
                </span>
                <div className="space-y-2">
                  {selectedService.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-[#334155] font-medium">
                      <CheckCircle2 size={14} className="text-[var(--color-jv-orange)] shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 p-3.5 rounded-2xl bg-[#FFF4ED] border border-[var(--color-jv-orange)]/25 flex items-center justify-between text-xs">
                <div>
                  <span className="block text-[10px] font-bold text-[#64748B] uppercase">Performance SLA</span>
                  <span className="font-mono font-black text-[var(--color-jv-orange)]">{selectedService.metric}</span>
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-[#64748B] uppercase">Turnaround Time</span>
                  <span className="font-bold text-[#1E293B]">{selectedService.timeline}</span>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider cursor-pointer transition-colors"
                >
                  Close
                </button>
                <Link
                  href={`/companies/${entityId}/contact?service=${encodeURIComponent(selectedService.name)}`}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[var(--color-jv-orange)] to-[#c2410c] text-white font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md shadow-[var(--color-jv-orange)]/25 hover:shadow-lg transition-all"
                >
                  <span>Book This Service</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
