import React from "react";
import { MapPin, Globe, Compass, Landmark } from "lucide-react";
import { LocationImpact } from "@/types/blog";

interface Props {
  impact: LocationImpact;
}

export default function GeographicImpactBox({ impact }: Props) {
  return (
    <div className="my-8 rounded-2xl bg-gradient-to-r from-slate-50 via-white to-slate-50 border border-slate-200 p-5 sm:p-6 shadow-xs">
      <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-200/80">
        <Compass size={16} className="text-[var(--color-jv-orange)]" />
        <h4 className="text-xs font-black uppercase tracking-wider text-slate-800">
          Geographic Scope &amp; Jurisdictional Impact Analysis
        </h4>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
        {/* 1. Area */}
        <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
          <span className="text-[10px] uppercase font-bold text-slate-400 block flex items-center gap-1">
            <MapPin size={10} className="text-[var(--color-jv-orange)]" />
            <span>Target Area</span>
          </span>
          <p className="text-xs font-black text-slate-900 leading-snug">
            {impact.area}
          </p>
        </div>

        {/* 2. City */}
        <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
          <span className="text-[10px] uppercase font-bold text-slate-400 block flex items-center gap-1">
            <Landmark size={10} className="text-[var(--color-jv-orange)]" />
            <span>Metropolitan City</span>
          </span>
          <p className="text-xs font-black text-slate-900 leading-snug">
            {impact.city}
          </p>
        </div>

        {/* 3. State */}
        <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
          <span className="text-[10px] uppercase font-bold text-slate-400 block flex items-center gap-1">
            <Compass size={10} className="text-[var(--color-jv-orange)]" />
            <span>Regional State</span>
          </span>
          <p className="text-xs font-black text-slate-900 leading-snug">
            {impact.state}
          </p>
        </div>

        {/* 4. Country */}
        <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
          <span className="text-[10px] uppercase font-bold text-slate-400 block flex items-center gap-1">
            <Globe size={10} className="text-[var(--color-jv-orange)]" />
            <span>National Territory</span>
          </span>
          <p className="text-xs font-black text-slate-900 leading-snug">
            {impact.country}
          </p>
        </div>

        {/* 5. Worldwide */}
        <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-orange-50/50 border border-orange-200/60 shadow-2xs space-y-1">
          <span className="text-[10px] uppercase font-black text-[var(--color-jv-orange)] block flex items-center gap-1">
            <Globe size={10} />
            <span>Worldwide Impact</span>
          </span>
          <p className="text-xs font-bold text-slate-900 leading-snug">
            {impact.worldwide}
          </p>
        </div>
      </div>
    </div>
  );
}
