"use client";

import { useState } from "react";
import { ChevronDown, CheckCircle2, BadgeCheck, ThumbsUp } from "lucide-react";
import { EntityFAQ } from "@/data/entityLandingData";

interface Props {
  faqs: EntityFAQ[];
  entityShortName?: string;
}

const FAQ_HIGHLIGHTS: Record<number, string[]> = {
  0: ["EST, CST, PST & GMT Overlap", "24/7 Slack Desk", "Executive Standups"],
  1: ["$3K - $10K/mo Baseline", "Zero Ad Markups", "Predictive AI Bidding"],
  2: ["Sub-60s Webhook Sync", "HubSpot • Salesforce • Zoho", "Attributed UTMs"],
  3: ["In-House Engineering IP", "Attributed ROI", "JV Group Ecosystem"],
};

export default function EntityFaqAccordion({ faqs }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [helpfulFeedback, setHelpfulFeedback] = useState<Record<number, boolean>>({});

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const markHelpful = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setHelpfulFeedback((prev) => ({ ...prev, [idx]: true }));
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const highlights = FAQ_HIGHLIGHTS[index];
        const isMarked = helpfulFeedback[index];

        return (
          <div
            key={index}
            className={`relative bg-white rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden group cursor-pointer ${
              isOpen
                ? "border-[var(--color-jv-orange)] shadow-[0_12px_32px_rgba(243,99,35,0.09)] ring-1 ring-[var(--color-jv-orange)]/25 -translate-y-0.5"
                : "border-slate-200/90 hover:border-slate-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)]"
            }`}
            onClick={() => toggle(index)}
          >
            {/* Left Accent Bar when Open */}
            {isOpen && (
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[var(--color-jv-orange)] via-[#ea580c] to-[var(--color-jv-orange)] rounded-l-2xl" />
            )}

            <div className="w-full py-5 px-5 sm:px-6 flex items-start justify-between gap-4 text-left">
              <div className="flex items-start gap-3.5">
                <span
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl font-mono text-xs font-bold flex items-center justify-center shrink-0 transition-colors mt-0.5 ${
                    isOpen
                      ? "bg-[var(--color-jv-orange)] text-white shadow-xs"
                      : "bg-slate-100 text-slate-700 border border-slate-200 group-hover:bg-[#FFF4ED] group-hover:text-[var(--color-jv-orange)] group-hover:border-[var(--color-jv-orange)]/30"
                  }`}
                >
                  0{index + 1}
                </span>
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

            {isOpen && (
              <div className="px-5 sm:px-6 pb-6 pt-0 border-t border-slate-100 mt-1">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-3 font-normal">
                  {faq.answer}
                </p>

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

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1 text-slate-400">
                    <CheckCircle2 size={12} className="text-emerald-500" />
                    Verified SLA & Operating Procedure
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
      })}
    </div>
  );
}
