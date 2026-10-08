"use client";

import React, { useState, useEffect } from "react";
import { 
  Sun, 
  Snowflake, 
  CloudRain, 
  Flower2, 
  Wind, 
  CloudSnow, 
  Sparkles,
  Compass,
  SlidersHorizontal,
  MapPin,
  RefreshCw,
  Check,
  ChevronRight
} from "lucide-react";
import { useSeason, SeasonType, SEASON_CYCLE } from "@/context/SeasonContext";

const SEASON_DISPLAY: Record<
  SeasonType, 
  { name: string; icon: any; color: string; desc: string }
> = {
  summer: {
    name: "Summer",
    icon: Sun,
    color: "#F36323",
    desc: "Solar Radiance & Warmth",
  },
  monsoon: {
    name: "Monsoon (Rainy)",
    icon: CloudRain,
    color: "#0284C7",
    desc: "Torrential Showers & Ripples",
  },
  autumn: {
    name: "Autumn (Fall)",
    icon: Wind,
    color: "#D97706",
    desc: "Golden & Crimson Foliage",
  },
  "pre-winter": {
    name: "Pre-Winter",
    icon: Sparkles,
    color: "#7C3AED",
    desc: "Twilight Chill & Frost",
  },
  winter: {
    name: "Winter",
    icon: Snowflake,
    color: "#0369A1",
    desc: "Glacial Frost & Ice Shimmer",
  },
  snow: {
    name: "Snow",
    icon: CloudSnow,
    color: "#2563EB",
    desc: "High-Contrast Crystalline Flakes",
  },
  spring: {
    name: "Spring",
    icon: Flower2,
    color: "#DB2777",
    desc: "Sakura Blossom & Floral Drift",
  },
};

const SECTION_IDS = [
  { id: "hero", title: "1st: Hero Header" },
  { id: "solutions", title: "2nd: Solution Builder" },
  { id: "businesses", title: "3rd: Directory" },
  { id: "about", title: "4th: Purpose & Heritage" },
  { id: "ecosystem", title: "5th: Synergy" },
  { id: "worldwide-services", title: "6th: Global Services" },
  { id: "newsroom", title: "7th: Newsroom" },
  { id: "contact", title: "8th: Contact Finale" },
];

export default function SeasonalIndicator() {
  const { 
    currentSeason, 
    startingSeason, 
    setStartingSeason, 
    isAutoDetect, 
    setIsAutoDetect, 
    locationInfo, 
    getSectionSeason, 
    getNextSeason 
  } = useSeason();

  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const centerPos = window.innerHeight * 0.45;
        let foundIndex = 0;
        let minDistance = Infinity;

        SECTION_IDS.forEach((sec, idx) => {
          const el = document.getElementById(sec.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            const dist = Math.abs(rect.top - centerPos);
            if (rect.top <= centerPos && rect.bottom >= centerPos) {
              foundIndex = idx;
              minDistance = 0;
            } else if (dist < minDistance) {
              minDistance = dist;
              foundIndex = idx;
            }
          }
        });

        setActiveSectionIndex((prev) => (prev !== foundIndex ? foundIndex : prev));
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeSeason = getSectionSeason(activeSectionIndex);
  const activeMeta = SEASON_DISPLAY[activeSeason] || SEASON_DISPLAY.autumn;
  const ActiveIcon = activeMeta.icon;

  const nextSeasonForCurrentSection = getNextSeason(activeSeason);
  const nextMeta = SEASON_DISPLAY[nextSeasonForCurrentSection];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative z-30 flex flex-col items-start select-none">
      {/* Expanded Season Explorer Modal (Opens directly above the footer pill) */}
      {expanded && (
        <div className="absolute bottom-full mb-3 left-0 z-50 p-4 bg-white/95 backdrop-blur-xl border border-[#CBD5E1] shadow-2xl rounded-2xl w-80 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#E2E8F0]">
            <div>
              <div className="flex items-center gap-1.5">
                <Compass size={15} className="text-[var(--color-jv-orange)]" />
                <span className="text-xs font-black uppercase text-[#18191C] tracking-wider">
                  Weather & Season Engine
                </span>
              </div>
              <span className="text-[10px] text-[#64748B] flex items-center gap-1 mt-0.5">
                <MapPin size={10} className="text-[var(--color-jv-orange)]" />
                {locationInfo.region ? `${locationInfo.region}, ` : ""}{locationInfo.country}
              </span>
            </div>
            <button
              onClick={() => setExpanded(false)}
              className="text-[#64748B] hover:text-[#18191C] text-sm font-bold p-1 cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Auto-Detection Status Pill */}
          <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] mb-3 text-xs">
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-bold text-[#18191C] text-[11px]">
                Current Live Season:
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#FFF4ED] text-[var(--color-jv-orange)] border border-[var(--color-jv-orange)]/30 font-black text-[10px] uppercase">
                {SEASON_DISPLAY[currentSeason].name}
              </span>
            </div>
            <p className="text-[10px] text-[#4E5058] leading-tight">
              Rule active: Section 1 displays current weather season ({SEASON_DISPLAY[currentSeason].name}), each following section advances to the next seasonal cycle.
            </p>
          </div>

          {/* Manual Starting Season Switcher */}
          <div className="mb-3">
            <span className="text-[10px] font-black uppercase tracking-wider text-[#64748B] block mb-1.5">
              Choose Section 1 Starting Season:
            </span>
            <div className="grid grid-cols-2 gap-1.5">
              {SEASON_CYCLE.map((seasonKey) => {
                const sMeta = SEASON_DISPLAY[seasonKey];
                const SIcon = sMeta.icon;
                const isSelected = startingSeason === seasonKey;
                return (
                  <button
                    key={seasonKey}
                    onClick={() => {
                      setIsAutoDetect(false);
                      setStartingSeason(seasonKey);
                    }}
                    className={`flex items-center gap-1.5 p-1.5 rounded-lg text-left text-[11px] transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#FFF4ED] border border-[var(--color-jv-orange)] text-[var(--color-jv-orange)] font-bold shadow-xs"
                        : "hover:bg-[#F1F5F9] border border-[#E2E8F0] text-[#18191C]"
                    }`}
                  >
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center text-white shrink-0"
                      style={{ backgroundColor: sMeta.color }}
                    >
                      <SIcon size={10} />
                    </div>
                    <span className="truncate">{sMeta.name}</span>
                    {isSelected && <Check size={12} className="ml-auto" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section-Wise Sequence Progression Map */}
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-[#64748B] block mb-1">
              Active Section Breakdown:
            </span>
            <div className="space-y-1 max-h-44 overflow-y-auto pr-1">
              {SECTION_IDS.map((item, idx) => {
                const secSeason = getSectionSeason(idx);
                const sMeta = SEASON_DISPLAY[secSeason];
                const SIcon = sMeta.icon;
                const isLive = idx === activeSectionIndex;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      setExpanded(false);
                    }}
                    className={`w-full flex items-center justify-between p-1.5 rounded-lg text-left transition-all cursor-pointer ${
                      isLive
                        ? "bg-[#FFF4ED] border border-[var(--color-jv-orange)]"
                        : "hover:bg-[#F8FAFC] border border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="w-5 h-5 rounded-md flex items-center justify-center text-white shrink-0"
                        style={{ backgroundColor: sMeta.color }}
                      >
                        <SIcon size={11} />
                      </div>
                      <span className="text-[11px] font-bold text-[#18191C]">
                        {item.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold" style={{ color: sMeta.color }}>
                      {sMeta.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Floating Main Pill Trigger */}
      <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-md border border-[#CBD5E1] shadow-lg rounded-full p-1 pl-2">
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="flex items-center gap-2 pr-1.5 cursor-pointer group"
          title="Click to inspect weather detection and seasonal order"
        >
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-white transition-transform group-hover:scale-105 shadow-xs"
            style={{ backgroundColor: activeMeta.color }}
          >
            <ActiveIcon size={14} />
          </div>

          <div className="text-left">
            <div className="flex items-center gap-1">
              <span className="text-[9px] font-black uppercase tracking-wider text-[#64748B] block leading-none">
                Section {activeSectionIndex + 1}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xs font-black text-[#18191C] leading-tight">
                {activeMeta.name}
              </span>
              <ChevronRight size={11} className="text-[#94A3B8]" />
              <span className="text-[10px] text-[#64748B] font-bold">
                Next: {nextMeta.name}
              </span>
            </div>
          </div>
        </button>

        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="p-1.5 rounded-full hover:bg-[#F1F5F9] text-[#64748B] hover:text-[#18191C] transition-colors cursor-pointer border-l border-[#E2E8F0]"
          aria-label="Settings"
          title="Adjust Starting Season or Inspect Rule"
        >
          <SlidersHorizontal size={14} />
        </button>
      </div>
    </div>
  );
}
