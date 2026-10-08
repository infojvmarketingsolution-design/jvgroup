"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type SeasonType = 
  | "summer" 
  | "monsoon" 
  | "autumn" 
  | "pre-winter" 
  | "winter" 
  | "snow" 
  | "spring";

export const SEASON_CYCLE: SeasonType[] = [
  "summer",
  "monsoon",
  "autumn",
  "pre-winter",
  "winter",
  "snow",
  "spring",
];

export interface GeoLocationInfo {
  country: string;
  countryCode: string;
  region: string; // state
  city: string;
  timeZone: string;
  hemisphere: "northern" | "southern";
}

interface SeasonContextType {
  currentSeason: SeasonType;
  startingSeason: SeasonType;
  setStartingSeason: (season: SeasonType) => void;
  isAutoDetect: boolean;
  setIsAutoDetect: (auto: boolean) => void;
  locationInfo: GeoLocationInfo;
  getSectionSeason: (sectionIndex: number) => SeasonType;
  getNextSeason: (current: SeasonType) => SeasonType;
}

const SeasonContext = createContext<SeasonContextType | undefined>(undefined);

// Helper to determine natural season based on month and hemisphere/country
function calculateSeasonFromDateAndGeo(
  date: Date,
  countryCode: string,
  hemisphere: "northern" | "southern"
): SeasonType {
  const month = date.getMonth(); // 0 = Jan, ..., 9 = Oct, 11 = Dec

  // Special cultural/climate accuracy for India
  if (countryCode === "IN") {
    // India Climate Cycles:
    // May - June: Summer (Grishma)
    // July - Sept: Monsoon (Varsha)
    // Oct - early Nov: Autumn / Post-Monsoon (Sharad)
    // Nov - Dec: Pre-Winter (Hemant)
    // Jan: Winter (Shishir)
    // Feb: Snow / Frost (North)
    // Mar - Apr: Spring (Vasant)
    if (month >= 4 && month <= 5) return "summer";
    if (month >= 6 && month <= 8) return "monsoon";
    if (month === 9) return "autumn"; // October
    if (month === 10) return "pre-winter"; // November
    if (month === 11) return "winter"; // December
    if (month === 0 || month === 1) return "snow"; // January - February
    return "spring"; // March - April
  }

  // Southern Hemisphere (Australia, etc.)
  if (hemisphere === "southern") {
    if (month === 11 || month === 0 || month === 1) return "summer";
    if (month >= 2 && month <= 4) return "autumn";
    if (month >= 5 && month <= 7) return "winter";
    return "spring"; // Aug - Nov
  }

  // Northern Hemisphere (USA, UK, Canada, Europe)
  // Mar - May: Spring
  // Jun - Aug: Summer
  // Sep - Oct: Autumn (October = Autumn / Fall)
  // Nov: Pre-Winter
  // Dec - Jan: Winter
  // Jan - Feb: Snow
  if (month >= 2 && month <= 4) return "spring";
  if (month >= 5 && month <= 7) return "summer";
  if (month >= 8 && month <= 9) return "autumn"; // September - October
  if (month === 10) return "pre-winter"; // November
  if (month === 11) return "winter"; // December
  return "snow"; // January - February
}

export function SeasonProvider({ children }: { children: React.ReactNode }) {
  const [isAutoDetect, setIsAutoDetect] = useState<boolean>(true);
  const [locationInfo, setLocationInfo] = useState<GeoLocationInfo>(() => {
    // Default safe fallback based on standard user timezone
    let tz = "Asia/Kolkata";
    try {
      tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "Asia/Kolkata";
    } catch {
      tz = "Asia/Kolkata";
    }

    const isIndia = tz.includes("Kolkata") || tz.includes("Calcutta");
    const isUS = tz.includes("New_York") || tz.includes("Chicago") || tz.includes("Los_Angeles");
    const isUK = tz.includes("London");
    const isAU = tz.includes("Sydney") || tz.includes("Melbourne");

    return {
      country: isIndia ? "India" : isUS ? "United States" : isUK ? "United Kingdom" : "India",
      countryCode: isIndia ? "IN" : isUS ? "US" : isUK ? "GB" : isAU ? "AU" : "IN",
      region: isIndia ? "Gujarat" : isUS ? "New York" : isUK ? "London" : "Gujarat",
      city: isIndia ? "Ahmedabad" : isUS ? "New York" : "Ahmedabad",
      timeZone: tz,
      hemisphere: isAU ? "southern" : "northern",
    };
  });

  const [startingSeason, setStartingSeason] = useState<SeasonType>(() => {
    const today = new Date();
    return calculateSeasonFromDateAndGeo(today, "IN", "northern"); // Default Autumn for October
  });

  // Client-side detection of exact IP/Location with short timeout
  useEffect(() => {
    let active = true;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);

    const detectGeo = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/", { signal: controller.signal });
        if (!res.ok) throw new Error("Geo fetch failed");
        const data = await res.json();
        if (active && data) {
          const hemisphere = data.latitude < 0 ? "southern" : "northern";
          const newLoc: GeoLocationInfo = {
            country: data.country_name || "India",
            countryCode: data.country_code || "IN",
            region: data.region || "Gujarat",
            city: data.city || "Ahmedabad",
            timeZone: data.timezone || locationInfo.timeZone,
            hemisphere,
          };
          setLocationInfo(newLoc);

          if (isAutoDetect) {
            const detected = calculateSeasonFromDateAndGeo(new Date(), newLoc.countryCode, hemisphere);
            setStartingSeason(detected);
          }
        }
      } catch {
        // Fallback gracefully to Timezone calculations already initialized
      } finally {
        clearTimeout(timeoutId);
      }
    };

    detectGeo();

    return () => {
      active = false;
      controller.abort();
      clearTimeout(timeoutId);
    };
  }, [isAutoDetect]);

  // If auto-detect is enabled, recalculate whenever location changes
  useEffect(() => {
    if (isAutoDetect) {
      const detected = calculateSeasonFromDateAndGeo(
        new Date(),
        locationInfo.countryCode,
        locationInfo.hemisphere
      );
      setStartingSeason(detected);
    }
  }, [isAutoDetect, locationInfo]);

  // Calculate the season for any section index following the strict rule:
  // Section 0 = startingSeason (Current Detected Season)
  // Section 1 = next season in cycle
  // Section 2 = next season in cycle ...
  const getSectionSeason = (sectionIndex: number): SeasonType => {
    const startIndex = SEASON_CYCLE.indexOf(startingSeason);
    const validStartIndex = startIndex >= 0 ? startIndex : 0;
    const targetIndex = (validStartIndex + sectionIndex) % SEASON_CYCLE.length;
    return SEASON_CYCLE[targetIndex];
  };

  const getNextSeason = (current: SeasonType): SeasonType => {
    const idx = SEASON_CYCLE.indexOf(current);
    return SEASON_CYCLE[(idx + 1) % SEASON_CYCLE.length];
  };

  return (
    <SeasonContext.Provider
      value={{
        currentSeason: startingSeason,
        startingSeason,
        setStartingSeason,
        isAutoDetect,
        setIsAutoDetect,
        locationInfo,
        getSectionSeason,
        getNextSeason,
      }}
    >
      {children}
    </SeasonContext.Provider>
  );
}

export function useSeason() {
  const context = useContext(SeasonContext);
  if (!context) {
    throw new Error("useSeason must be used within a SeasonProvider");
  }
  return context;
}
