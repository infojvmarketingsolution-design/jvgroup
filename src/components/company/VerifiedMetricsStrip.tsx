"use client";

import React from "react";
import {
  Megaphone,
  ShieldCheck,
  Building2,
  Globe2,
  TrendingUp,
  Activity,
  Layers,
  Sparkles,
  Search,
  Award,
  CheckCircle2,
  ArrowUpRight,
  Server,
  Zap,
  Cpu,
  FileCheck,
  Scale,
  Users,
  Compass,
  GraduationCap,
  Ship,
  Plane,
  Briefcase,
  Target,
  Clock,
  MessageSquare,
  Landmark,
} from "lucide-react";
import type { EntityLandingStat } from "@/data/entityLandingData";

export interface VerifiedMetricsStripProps {
  stats: EntityLandingStat[];
  entityName?: string;
  className?: string;
  sectionTitle?: string;
}

// Intelligent icon resolver matching metric keywords or fallback by index
function getMetricIcon(stat: EntityLandingStat, index: number) {
  const combined = `${stat.label} ${stat.detail} ${stat.value}`.toLowerCase();

  if (combined.includes("uptime") || combined.includes("sla") || combined.includes("infrastructure") || combined.includes("server")) {
    return ShieldCheck;
  }
  if (combined.includes("ad network") || combined.includes("meta") || combined.includes("campaign") || combined.includes("roas") || combined.includes("ctr") || combined.includes("marketing")) {
    return Layers;
  }
  if (combined.includes("continent") || combined.includes("global") || combined.includes("worldwide") || combined.includes("ports") || combined.includes("routes")) {
    return Globe2;
  }
  if (combined.includes("contract") || combined.includes("agreement") || combined.includes("corporate") || combined.includes("compliance") || combined.includes("legal") || combined.includes("title")) {
    return FileCheck;
  }
  if (combined.includes("rank") || combined.includes("seo") || combined.includes("google") || combined.includes("search")) {
    return Award;
  }
  if (combined.includes("lead") || combined.includes("influx") || combined.includes("growth") || combined.includes("gain") || combined.includes("rate")) {
    return TrendingUp;
  }
  if (combined.includes("cloud") || combined.includes("saas") || combined.includes("api") || combined.includes("platform") || combined.includes("tech")) {
    return Cpu;
  }
  if (combined.includes("visa") || combined.includes("student") || combined.includes("university") || combined.includes("college")) {
    return GraduationCap;
  }
  if (combined.includes("ship") || combined.includes("cargo") || combined.includes("freight") || combined.includes("ocean")) {
    return Ship;
  }
  if (combined.includes("real estate") || combined.includes("infra") || combined.includes("land") || combined.includes("corridor")) {
    return Landmark;
  }
  if (combined.includes("support") || combined.includes("ticket") || combined.includes("chat") || combined.includes("whatsapp")) {
    return MessageSquare;
  }

  // Fallback by position
  const fallbackIcons = [Layers, ShieldCheck, FileCheck, Globe2];
  return fallbackIcons[index % fallbackIcons.length] || Sparkles;
}

// Intelligent badge generator
function getMetricBadge(stat: EntityLandingStat, index: number) {
  const combined = `${stat.label} ${stat.detail} ${stat.value}`.toLowerCase();

  if (combined.includes("99.") || combined.includes("uptime") || combined.includes("sla")) {
    return {
      text: "Verified SLA",
      pulse: true,
      className: "text-emerald-700 bg-emerald-50/90 border-emerald-200/90",
    };
  }
  if (combined.includes("continent") || combined.includes("global") || combined.includes("worldwide") || combined.includes("countries")) {
    return {
      text: "Global Reach",
      pulse: false,
      className: "text-sky-700 bg-sky-50/90 border-sky-200/90",
    };
  }
  if (combined.includes("ad network") || combined.includes("meta") || combined.includes("multi-network")) {
    return {
      text: "Multi-Channel",
      pulse: false,
      className: "text-[var(--color-jv-orange)] bg-[#FFF4ED] border-[var(--color-jv-orange)]/25",
    };
  }
  if (combined.includes("contract") || combined.includes("agreement") || combined.includes("corporate") || combined.includes("enterprise")) {
    return {
      text: "Direct MSA",
      pulse: false,
      className: "text-indigo-700 bg-indigo-50/90 border-indigo-200/90",
    };
  }
  if (combined.includes("rank") || combined.includes("top")) {
    return {
      text: "Industry Top",
      pulse: false,
      className: "text-amber-700 bg-amber-50/90 border-amber-200/90",
    };
  }
  if (combined.includes("roas") || combined.includes("lead") || combined.includes("influx") || combined.includes("gain")) {
    return {
      text: "High Velocity",
      pulse: false,
      className: "text-[var(--color-jv-orange)] bg-[#FFF4ED] border-[var(--color-jv-orange)]/25",
    };
  }

  // Fallback numbering
  return {
    text: `Metric 0${index + 1}`,
    pulse: false,
    className: "text-slate-600 bg-slate-50 border-slate-200/80",
  };
}

// Split numeric value and symbol for heroic typography
function formatStatValue(rawVal: string) {
  const trimmed = rawVal.trim();

  // Handle formats like "6+", "99.99%", "3.8x", "Rank #1", "<15 Min", "?500Cr+", "100%"
  const match = trimmed.match(/^([^0-9]*)([0-9,.]+)(.*)$/);

  if (match) {
    const [, prefix, num, suffix] = match;
    return {
      prefix: prefix.trim(),
      number: num.trim(),
      suffix: suffix.trim(),
    };
  }

  return {
    prefix: "",
    number: trimmed,
    suffix: "",
  };
}

export default function VerifiedMetricsStrip({
  stats,
  entityName,
  className = "",
  sectionTitle = "Verified Operational Benchmarks",
}: VerifiedMetricsStripProps) {
  if (!stats || stats.length === 0) return null;

  return (
    <section
      aria-label="Operational Metrics"
      className={`relative py-8 sm:py-10 bg-gradient-to-b from-[#FCFCFE] via-white to-[#F8FAFC] border-b border-[#E2E8F0] overflow-hidden ${className}`}
    >
      {/* Decorative Background Mesh / Subtle Light Glow */}
      <div className="absolute inset-0 white-grid-bg opacity-35 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-28 bg-[var(--color-jv-orange)]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-28 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header / Kicker Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6 sm:mb-8 pb-4 border-b border-slate-200/70">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
              {sectionTitle}
            </span>
            <span className="hidden sm:inline-block text-slate-300">•</span>
            <span className="hidden sm:inline-block text-xs font-medium text-slate-500">
              {entityName ? `${entityName} Verified Performance Standards` : "Enterprise SLA & Multi-Continental Reach"}
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-600 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-2xs self-start sm:self-auto">
            <ShieldCheck size={13} className="text-[var(--color-jv-orange)]" />
            <span>Audited Performance Guarantee</span>
          </div>
        </div>

        {/* 4-Column Responsive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {stats.map((stat, sIdx) => {
            const IconComponent = getMetricIcon(stat, sIdx);
            const badge = getMetricBadge(stat, sIdx);
            const { prefix, number, suffix } = formatStatValue(stat.value);

            // Check if detail has comma-separated items (e.g. "Meta, Google, LinkedIn, TikTok, Snap")
            const detailChips = stat.detail.includes(",")
              ? stat.detail.split(",").map((c) => c.trim()).filter(Boolean)
              : null;

            return (
              <div
                key={sIdx}
                className="group relative bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-200/90 hover:border-[var(--color-jv-orange)]/60 shadow-[0_2px_12px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_36px_rgba(243,99,35,0.12)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Animated Orange Gradient Accent Line on Hover */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[var(--color-jv-orange)] via-amber-400 to-[#ea580c] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-20" />

                {/* Subtle Ambient Hover Glow in Corner */}
                <div className="absolute -top-10 -right-10 w-28 h-28 bg-[var(--color-jv-orange)]/8 rounded-full blur-2xl group-hover:bg-[var(--color-jv-orange)]/18 transition-all duration-500 pointer-events-none" />

                {/* Giant Semi-Transparent Watermark Numeral in Background */}
                <div className="absolute -right-1 -bottom-2 text-6xl sm:text-7xl font-black font-heading text-slate-100/60 group-hover:text-orange-100/60 transition-colors duration-300 select-none pointer-events-none z-0">
                  {String(sIdx + 1).padStart(2, "0")}
                </div>

                {/* Card Top Row: Glowing Icon Pod + Smart Status Badge */}
                <div className="relative z-10 flex items-center justify-between gap-3 mb-4">
                  {/* Glowing 3D-ish Icon Pod */}
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FFF4ED] via-white to-[#FFE9DC] border border-[var(--color-jv-orange)]/25 group-hover:border-[var(--color-jv-orange)] shadow-2xs group-hover:shadow-[0_4px_16px_rgba(243,99,35,0.22)] flex items-center justify-center text-[var(--color-jv-orange)] group-hover:scale-110 transition-all duration-300">
                    <IconComponent size={20} className="transition-transform duration-300 group-hover:rotate-6" />
                  </div>

                  {/* Micro Pill Badge */}
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-wider border shadow-2xs ${badge.className}`}
                  >
                    {badge.pulse && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    )}
                    <span>{badge.text}</span>
                  </span>
                </div>

                {/* Card Center: Heroic Metric Value & Subject Label */}
                <div className="relative z-10">
                  {/* Heroic Metric Number with Styled Suffix/Symbol */}
                  <div className="flex items-baseline gap-1">
                    {prefix && (
                      <span className="text-xl sm:text-2xl font-heading font-black text-slate-600">
                        {prefix}
                      </span>
                    )}
                    <span className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-black tracking-tight text-[#0F172A] leading-none">
                      {number}
                    </span>
                    {suffix && (
                      <span className="text-2xl sm:text-3xl font-heading font-black text-[var(--color-jv-orange)]">
                        {suffix}
                      </span>
                    )}
                  </div>

                  {/* High-Contrast Subject Label */}
                  <div className="mt-2.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-jv-orange)] shrink-0 group-hover:scale-125 transition-transform" />
                    <h3 className="text-xs sm:text-[13px] font-extrabold uppercase tracking-wider text-[var(--color-jv-orange)] group-hover:text-[var(--color-jv-orange-dark)] transition-colors line-clamp-1">
                      {stat.label}
                    </h3>
                  </div>
                </div>

                {/* Card Bottom: Micro Technical Chips or Verified Proof */}
                <div className="relative z-10 mt-4 pt-3 border-t border-slate-100/90">
                  {detailChips && detailChips.length > 0 ? (
                    <div className="flex flex-wrap items-center gap-1.5">
                      {detailChips.map((chip, cIdx) => (
                        <span
                          key={cIdx}
                          className="inline-flex items-center px-2 py-0.5 rounded-md text-[10.5px] font-medium bg-slate-100/90 text-slate-700 border border-slate-200/60 group-hover:bg-[#FFF4ED] group-hover:text-[var(--color-jv-orange-dark)] group-hover:border-[var(--color-jv-orange)]/30 transition-all"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <CheckCircle2
                          size={13}
                          className="text-emerald-500 shrink-0"
                        />
                        <span className="text-[11.5px] font-medium text-slate-600 group-hover:text-slate-800 transition-colors truncate">
                          {stat.detail}
                        </span>
                      </div>
                      <ArrowUpRight
                        size={13}
                        className="text-slate-400 group-hover:text-[var(--color-jv-orange)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
