"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ChevronDown,
  Search,
  MessageSquare,
  Phone,
  Clock,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  ThumbsUp,
  HelpCircle,
  BadgeCheck,
  ExternalLink,
  Zap,
} from "lucide-react";
import type { BusinessEntity } from "@/data/businesses";
import type { EntityFAQ } from "@/data/entityLandingData";

interface FaqSectionDecorativeProps {
  entity: BusinessEntity;
  faqs: EntityFAQ[];
  title?: string;
  subtitle?: string;
  badge?: string;
  contactHref?: string;
}

// Key take-away badges for specific FAQs to provide immediate executive clarity
const FAQ_KEY_HIGHLIGHTS: Record<number, string[]> = {
  0: ["EST, CST, PST & GMT Overlap", "Dedicated 24/7 Slack Desk", "Executive Standups"],
  1: ["$3K - $10K/mo Baseline", "Zero Ad Spend Markups", "Predictive Machine Learning"],
  2: ["Two-Way Webhooks (< 60s)", "HubSpot • Salesforce • Zoho", "Attributed UTM Pipeline"],
  3: ["In-House Engineering IP", "Attributed Revenue Focus", "JV Group Ecosystem"],
};

export default function FaqSectionDecorative({
  entity,
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Direct answers regarding operations, technical delivery, and commercial engagement.",
  badge = "DIRECT ANSWERS",
  contactHref,
}: FaqSectionDecorativeProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [helpfulFeedback, setHelpfulFeedback] = useState<Record<number, boolean>>({});

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const markHelpful = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setHelpfulFeedback((prev) => ({ ...prev, [idx]: true }));
  };

  // Filter FAQs based on search query
  const filteredFaqs = faqs.filter((faq) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      faq.question.toLowerCase().includes(q) ||
      faq.answer.toLowerCase().includes(q)
    );
  });

  const targetContactHref = contactHref || `#proposal-form`;

  return (
    <section
      id="faq-section"
      className="relative py-16 sm:py-24 bg-white border-b border-[#E2E8F0] overflow-hidden"
    >
      {/* Subtle Architectural Grid on Pure White Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Section Title, Search, and Direct Support Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--color-jv-orange)]/35 bg-[#FFF4ED] shadow-xs mb-4">
              <Sparkles size={14} className="text-[var(--color-jv-orange)] animate-spin-slow" />
              <span className="text-[var(--color-jv-orange)] text-xs font-black tracking-widest uppercase font-mono">
                {badge}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping ml-0.5" />
            </div>

            {/* Bold Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-black text-[#0F172A] tracking-tight leading-[1.12]">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-[var(--color-jv-orange)] via-[#ea580c] to-[#c2410c] bg-clip-text text-transparent">
                Questions.
              </span>
            </h2>

            {/* Narrative Subtitle */}
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {subtitle}
            </p>

            {/* Instant Filter Search Bar */}
            <div className="mt-6 relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Search size={16} className="text-slate-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics (e.g. timezone, CRM, budget)..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[var(--color-jv-orange)] focus:bg-white focus:ring-1 focus:ring-[var(--color-jv-orange)]/25 transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Direct Support Desk Card */}
            <div className="mt-8 p-6 rounded-3xl bg-slate-50/80 border border-slate-200/90 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-jv-orange)]/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#FFF4ED] border border-[var(--color-jv-orange)]/30 flex items-center justify-center text-[var(--color-jv-orange)]">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-heading font-black text-slate-900">
                    Can&apos;t find your question?
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Direct access to senior growth leadership
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Speak directly with an enterprise growth director. No junior gatekeepers, just transparent strategic guidance.
              </p>

              <div className="flex flex-col sm:flex-row gap-2.5">
                <a
                  href={`https://wa.me/${entity.phone?.replace(/[^0-9]/g, "") || "447344556070"}?text=Hello%2C%20I%20have%20an%20inquiry%20regarding%20${encodeURIComponent(entity.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span>WhatsApp Desk</span>
                </a>

                <Link
                  href={targetContactHref}
                  className="px-3.5 py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-[var(--color-jv-orange)] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Submit RFP</span>
                  <ArrowRight size={13} />
                </Link>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <Clock size={12} className="text-slate-400" /> Response: &lt; 15 mins
                </span>
                <span className="font-mono text-emerald-600 font-semibold flex items-center gap-1">
                  <ShieldCheck size={12} /> Confidential NDA
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Redesigned Accordion Cards on Pure White */}
          <div className="lg:col-span-7 space-y-4">
            {filteredFaqs.length === 0 ? (
              <div className="p-8 text-center bg-slate-50 border border-slate-200 rounded-2xl">
                <HelpCircle size={28} className="mx-auto text-slate-400 mb-2" />
                <p className="text-sm font-bold text-slate-700">No matching questions found</p>
                <p className="text-xs text-slate-500 mt-1">
                  Try searching with a different term, or reach out to our team directly.
                </p>
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="mt-3 text-xs font-bold text-[var(--color-jv-orange)] hover:underline"
                >
                  Reset Search Filter
                </button>
              </div>
            ) : (
              filteredFaqs.map((faq, index) => {
                const isOpen = openIndex === index;
                const highlights = FAQ_KEY_HIGHLIGHTS[index];
                const isMarked = helpfulFeedback[index];

                return (
                  <div
                    key={index}
                    className={`relative bg-white rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden group cursor-pointer ${
                      isOpen
                        ? "border-[var(--color-jv-orange)] shadow-[0_12px_32px_rgba(243,99,35,0.09)] ring-1 ring-[var(--color-jv-orange)]/25 -translate-y-0.5"
                        : "border-slate-200/90 hover:border-slate-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)]"
                    }`}
                    onClick={() => toggleAccordion(index)}
                  >
                    {/* Left Active Accent Strip */}
                    {isOpen && (
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[var(--color-jv-orange)] via-[#ea580c] to-[var(--color-jv-orange)] rounded-l-2xl" />
                    )}

                    {/* Question Header Button */}
                    <div className="w-full py-5 px-5 sm:px-6 flex items-start justify-between gap-4 text-left">
                      <div className="flex items-start gap-3.5">
                        {/* Question Number Badge */}
                        <span
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl font-mono text-xs font-bold flex items-center justify-center shrink-0 transition-colors mt-0.5 ${
                            isOpen
                              ? "bg-[var(--color-jv-orange)] text-white shadow-xs"
                              : "bg-slate-100 text-slate-700 border border-slate-200 group-hover:bg-[#FFF4ED] group-hover:text-[var(--color-jv-orange)] group-hover:border-[var(--color-jv-orange)]/30"
                          }`}
                        >
                          0{index + 1}
                        </span>

                        {/* Question Title */}
                        <div>
                          <h3
                            className={`font-heading font-black text-sm sm:text-base leading-snug transition-colors ${
                              isOpen
                                ? "text-slate-900"
                                : "text-slate-800 group-hover:text-[var(--color-jv-orange)]"
                            }`}
                          >
                            {faq.question}
                          </h3>
                        </div>
                      </div>

                      {/* Expand / Collapse Circular Icon */}
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isOpen
                            ? "bg-[#FFF4ED] text-[var(--color-jv-orange)] rotate-180"
                            : "bg-slate-100 text-slate-400 group-hover:bg-slate-200/80 group-hover:text-slate-700"
                        }`}
                      >
                        <ChevronDown size={16} />
                      </div>
                    </div>

                    {/* Expandable Answer Panel */}
                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-0 border-t border-slate-100 mt-1">
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-3 font-normal">
                          {faq.answer}
                        </p>

                        {/* Key Highlights Micro-Pills */}
                        {highlights && highlights.length > 0 && (
                          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mr-1 flex items-center gap-1">
                              <BadgeCheck size={12} className="text-[var(--color-jv-orange)]" />
                              Key Highlights:
                            </span>
                            {highlights.map((h, hIdx) => (
                              <span
                                key={hIdx}
                                className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700"
                              >
                                <span className="w-1 h-1 rounded-full bg-emerald-500" />
                                {h}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Helpful Feedback Micro-Row */}
                        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                          <span className="flex items-center gap-1 text-slate-400">
                            <CheckCircle2 size={12} className="text-emerald-500" />
                            Verified Policy & Standard Operating Procedure
                          </span>

                          <button
                            type="button"
                            onClick={(e) => markHelpful(index, e)}
                            className={`flex items-center gap-1.5 px-2 py-1 rounded-lg text-xs transition-colors cursor-pointer ${
                              isMarked
                                ? "text-emerald-600 font-bold bg-emerald-50"
                                : "text-slate-500 hover:text-slate-800 hover:bg-slate-100"
                            }`}
                          >
                            <ThumbsUp size={12} />
                            <span>{isMarked ? "Helpful ✓" : "Helpful?"}</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}

            {/* Bottom Footer Note */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500 px-2">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-600" />
                All contracts include legally binding SLAs & IP exclusivity clauses.
              </span>
              <Link
                href={targetContactHref}
                className="font-bold text-[var(--color-jv-orange)] hover:underline flex items-center gap-1"
              >
                <span>Request Custom SOW / Agreement</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
