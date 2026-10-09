"use client";

import React, { useState } from "react";
import { ListOrdered, ChevronDown, ChevronUp, ArrowRight, Bookmark, Check, Share2 } from "lucide-react";
import { BlogSection } from "@/types/blog";

interface Props {
  sections: BlogSection[];
  hasAdvantages?: boolean;
  hasFaqs?: boolean;
  hasCitations?: boolean;
}

export default function TableOfContents({
  sections,
  hasAdvantages = true,
  hasFaqs = true,
  hasCitations = true
}: Props) {
  const [isOpen, setIsOpen] = useState(true);
  const [copied, setCopied] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      const yOffset = -90; // offset for fixed header
      const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <nav
      aria-label="Table of Contents"
      className="my-8 rounded-3xl bg-slate-50 border-2 border-slate-200/90 overflow-hidden shadow-sm"
    >
      {/* Header Bar */}
      <div className="p-4 sm:p-5 bg-white border-b border-slate-200 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[var(--color-jv-orange)]">
            <ListOrdered size={16} />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-heading font-black text-slate-900">
              Table of Contents &amp; Quick Navigation
            </h3>
            <p className="text-[11px] text-slate-500 font-medium">
              Google SERP Jump Links • Direct Technical Navigation
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyLink}
            type="button"
            className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1 transition-colors"
            title="Copy article link to clipboard"
          >
            {copied ? (
              <>
                <Check size={12} className="text-emerald-600" />
                <span className="text-emerald-700 text-[11px]">Copied!</span>
              </>
            ) : (
              <>
                <Share2 size={12} />
                <span className="text-[11px] hidden sm:inline">Share Link</span>
              </>
            )}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
            aria-label={isOpen ? "Collapse Table of Contents" : "Expand Table of Contents"}
          >
            {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>
      </div>

      {/* Nav List */}
      {isOpen && (
        <div className="p-4 sm:p-6 bg-slate-50/70">
          <ul className="space-y-2.5">
            {sections.map((section, idx) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-white text-slate-700 hover:text-[var(--color-jv-orange)] transition-all border border-transparent hover:border-slate-200 hover:shadow-xs"
                >
                  <span className="text-xs font-black font-mono text-slate-400 group-hover:text-[var(--color-jv-orange)] shrink-0 mt-0.5">
                    {String(idx + 1).padStart(2, "0")}.
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-slate-950 leading-snug">
                    {section.heading}
                  </span>
                  <ArrowRight
                    size={13}
                    className="ml-auto opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-[var(--color-jv-orange)] shrink-0 mt-0.5"
                  />
                </a>
              </li>
            ))}

            {/* Quick Link to Matrix */}
            {hasAdvantages && (
              <li>
                <a
                  href="#comparative-analysis-matrix"
                  onClick={(e) => scrollToSection(e, "comparative-analysis-matrix")}
                  className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-white text-slate-700 hover:text-[var(--color-jv-orange)] transition-all border border-transparent hover:border-slate-200"
                >
                  <span className="text-xs font-black font-mono text-emerald-600 shrink-0 mt-0.5">
                    ✦
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-slate-950 leading-snug">
                    Strategic Trade-Offs: Advantages vs. Disadvantages Matrix
                  </span>
                  <ArrowRight
                    size={13}
                    className="ml-auto opacity-0 group-hover:opacity-100 transition-all text-[var(--color-jv-orange)] shrink-0 mt-0.5"
                  />
                </a>
              </li>
            )}

            {/* Quick Link to FAQs */}
            {hasFaqs && (
              <li>
                <a
                  href="#frequently-asked-questions"
                  onClick={(e) => scrollToSection(e, "frequently-asked-questions")}
                  className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-white text-slate-700 hover:text-[var(--color-jv-orange)] transition-all border border-transparent hover:border-slate-200"
                >
                  <span className="text-xs font-black font-mono text-blue-600 shrink-0 mt-0.5">
                    ❓
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-slate-950 leading-snug">
                    Frequently Asked Strategic Questions &amp; Executive FAQs
                  </span>
                  <ArrowRight
                    size={13}
                    className="ml-auto opacity-0 group-hover:opacity-100 transition-all text-[var(--color-jv-orange)] shrink-0 mt-0.5"
                  />
                </a>
              </li>
            )}

            {/* Quick Link to AI Citations */}
            {hasCitations && (
              <li>
                <a
                  href="#ai-citations-grounding"
                  onClick={(e) => scrollToSection(e, "ai-citations-grounding")}
                  className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-white text-slate-700 hover:text-[var(--color-jv-orange)] transition-all border border-transparent hover:border-slate-200"
                >
                  <span className="text-xs font-black font-mono text-amber-500 shrink-0 mt-0.5">
                    🤖
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-slate-950 leading-snug">
                    AI Platform Grounding &amp; Citation Benchmarks
                  </span>
                  <ArrowRight
                    size={13}
                    className="ml-auto opacity-0 group-hover:opacity-100 transition-all text-[var(--color-jv-orange)] shrink-0 mt-0.5"
                  />
                </a>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
