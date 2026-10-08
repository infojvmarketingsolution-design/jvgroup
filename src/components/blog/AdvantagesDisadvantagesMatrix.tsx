import React from "react";
import { CheckCircle2, AlertTriangle, Scale } from "lucide-react";
import { AdvantageDisadvantageItem } from "@/types/blog";

interface Props {
  advantages: AdvantageDisadvantageItem[];
  disadvantages: AdvantageDisadvantageItem[];
  topicTitle?: string;
}

export default function AdvantagesDisadvantagesMatrix({
  advantages,
  disadvantages,
  topicTitle
}: Props) {
  return (
    <div className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-xl border border-slate-800">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
        <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-[var(--color-jv-orange)]">
          <Scale size={20} />
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-heading font-black text-white">
            Strategic Trade-Offs: Advantages vs. Disadvantages
          </h3>
          <p className="text-xs text-slate-400">
            Unbiased empirical breakdown for decision makers {topicTitle ? `regarding ${topicTitle}` : ""}
          </p>
        </div>
      </div>

      {/* Grid: 2 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Column 1: Advantages */}
        <div className="rounded-2xl bg-emerald-950/30 border border-emerald-500/30 p-5 sm:p-6 space-y-4">
          <div className="flex items-center gap-2 text-emerald-400 font-heading font-black text-sm uppercase tracking-wider pb-2 border-b border-emerald-500/20">
            <CheckCircle2 size={16} />
            <span>Key Advantages &amp; ROI Drivers</span>
          </div>

          <div className="space-y-3.5">
            {advantages.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 font-black text-xs mt-0.5">✓</span>
                  <h4 className="text-xs sm:text-sm font-bold text-emerald-200">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pl-4">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Disadvantages & Considerations */}
        <div className="rounded-2xl bg-amber-950/25 border border-amber-500/30 p-5 sm:p-6 space-y-4">
          <div className="flex items-center gap-2 text-amber-400 font-heading font-black text-sm uppercase tracking-wider pb-2 border-b border-amber-500/20">
            <AlertTriangle size={16} />
            <span>Disadvantages &amp; Trade-Offs</span>
          </div>

          <div className="space-y-3.5">
            {disadvantages.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-start gap-2">
                  <span className="text-amber-400 font-black text-xs mt-0.5">⚠</span>
                  <h4 className="text-xs sm:text-sm font-bold text-amber-200">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pl-4">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
