"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Calculator, 
  Sparkles, 
  ArrowRight, 
  TrendingUp, 
  MessageSquare, 
  Phone, 
  ShieldCheck, 
  BarChart3, 
  MapPin, 
  CheckCircle2 
} from "lucide-react";
import AmsPageWrapper from "../components/AmsPageWrapper";

export default function AmsRoiCalculatorPage() {
  const [budget, setBudget] = useState<number>(35000);
  const [industry, setIndustry] = useState<string>("retail");
  const [zone, setZone] = useState<string>("ahmedabad");

  const industryProfiles: Record<string, { label: string; multiplier: number; chatRatio: number; ticket: string; roi: string }> = {
    retail: { label: "Retail Showrooms & Luxury Goods", multiplier: 1.2, chatRatio: 0.18, ticket: "₹3,500 - ₹25,000", roi: "3.8x - 5.2x" },
    manufacturing: { label: "Industrial & GIDC Engineering", multiplier: 0.8, chatRatio: 0.08, ticket: "₹2,50,000 - ₹25,00,000", roi: "5.5x - 8.5x" },
    healthcare: { label: "Dental & Multispecialty Clinics", multiplier: 1.1, chatRatio: 0.15, ticket: "₹5,000 - ₹50,000", roi: "4.2x - 6.0x" },
    realestate: { label: "Real Estate Brokers & Developers", multiplier: 0.9, chatRatio: 0.07, ticket: "₹50,00,000+", roi: "6.0x - 12.0x" },
    hospitality: { label: "Restaurants, Cafes & Banquet Halls", multiplier: 1.4, chatRatio: 0.22, ticket: "₹1,500 - ₹8,000", roi: "3.5x - 4.8x" },
    services: { label: "Corporate Services (CA / Legal / Tech)", multiplier: 1.0, chatRatio: 0.12, ticket: "₹25,000 - ₹1,50,000", roi: "4.5x - 7.0x" }
  };

  const currentProfile = industryProfiles[industry] || industryProfiles.retail;

  const estimatedImpressions = Math.round((budget / 1000) * 1800 * currentProfile.multiplier);
  const estimatedClicks = Math.round((budget / 1000) * 48 * currentProfile.multiplier);
  const estimatedChats = Math.round(estimatedClicks * currentProfile.chatRatio);
  const costPerChat = Math.round(budget / (estimatedChats || 1));

  return (
    <AmsPageWrapper>
      <div className="w-full py-12 sm:py-16 md:py-20">
      
      {/* 1. Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF4ED] border border-[var(--color-jv-orange)]/30 text-[var(--color-jv-orange)] text-xs font-bold uppercase tracking-wider mb-4">
            <Calculator size={14} />
            <span>Interactive Financial Forecast</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-[#18191C] tracking-tight leading-tight mb-4">
            Interactive Local Marketing ROI & Lead Forecast Calculator.
          </h1>

          <p className="text-[#4E5058] text-base sm:text-lg leading-relaxed">
            Eliminate guesswork. Simulate your anticipated search impressions, website clicks, inbound WhatsApp chats, and revenue return based on historical benchmarks from 500+ Gujarat businesses.
          </p>
        </div>
      </div>

      {/* 2. Interactive Calculator Module */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E2E8F0] p-6 sm:p-8 card-shadow-3d space-y-6">
            
            {/* Control 1: Budget Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-black text-[#18191C]">
                  Monthly Advertising & Growth Budget
                </label>
                <span className="text-2xl font-heading font-black text-[var(--color-jv-orange)]">
                  ₹{budget.toLocaleString("en-IN")}/mo
                </span>
              </div>

              <input
                type="range"
                min={10000}
                max={250000}
                step={5000}
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-3 bg-[#E2E8F0] rounded-lg appearance-none cursor-pointer accent-[var(--color-jv-orange)]"
              />

              <div className="flex justify-between text-[11px] text-[#64748B] font-bold mt-2">
                <span>Starter (₹10,000)</span>
                <span>Pro SME (₹50,000)</span>
                <span>Enterprise (₹2,50,000)</span>
              </div>
            </div>

            {/* Control 2: Industry Sector */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-[#18191C] mb-2">
                Select Your Industry Sector
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {Object.entries(industryProfiles).map(([key, data]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setIndustry(key)}
                    className={`p-3 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer ${
                      industry === key
                        ? "bg-[#FFF4ED] border-[var(--color-jv-orange)] text-[var(--color-jv-orange)] shadow-xs"
                        : "bg-[#F8FAFC] border-[#E2E8F0] text-[#4E5058] hover:text-[#18191C] hover:bg-white"
                    }`}
                  >
                    <span>{data.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Control 3: Geographic Zone */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-[#18191C] mb-2">
                Primary Target Zone in Gujarat
              </label>
              <select
                value={zone}
                onChange={(e) => setZone(e.target.value)}
                className="w-full p-3 rounded-xl border border-[#CBD5E1] text-xs font-bold text-[#18191C] bg-[#F8FAFC] outline-hidden focus:border-[var(--color-jv-orange)]"
              >
                <option value="ahmedabad">West Ahmedabad (S.G. Highway, Bodakdev, Sindhu Bhavan, Prahlad Nagar)</option>
                <option value="gandhinagar">Gandhinagar & GIFT City International Hub</option>
                <option value="gidc">Sanand GIDC, Changodar & Industrial Belts</option>
                <option value="east-ahmedabad">East & South Ahmedabad (Maninagar, Nikol, Odhav, Naroda)</option>
                <option value="surat-vadodara">South Gujarat (Surat, Vadodara, Bharuch)</option>
                <option value="saurashtra">Saurashtra Hub (Rajkot, Morbi, Jamnagar)</option>
              </select>
            </div>

            {/* Direct Ad Spend Transparency Note */}
            <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center gap-2.5 text-xs text-[#64748B]">
              <ShieldCheck size={18} className="text-[var(--color-jv-orange)] shrink-0" />
              <span>100% of media budget is billed directly via client Meta & Google accounts. AMS charges flat transparent retainers with zero ad markup.</span>
            </div>

          </div>

          {/* Results Summary Column (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#18191C] to-[#23252B] rounded-3xl p-6 sm:p-8 text-white card-shadow-3d space-y-6">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-jv-orange)] block mb-1">
                Projected Monthly Outcomes
              </span>
              <h3 className="text-xl font-heading font-black text-white">
                Forecast Summary
              </h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <span className="block text-[11px] text-[#94A3B8]">Est. Local Search Impressions</span>
                  <span className="text-2xl font-heading font-black text-white">
                    {estimatedImpressions.toLocaleString("en-IN")}+
                  </span>
                </div>
                <BarChart3 size={24} className="text-[var(--color-jv-orange)]" />
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <span className="block text-[11px] text-[#94A3B8]">High-Intent Clicks & Views</span>
                  <span className="text-2xl font-heading font-black text-[var(--color-jv-orange)]">
                    {estimatedClicks.toLocaleString("en-IN")}+
                  </span>
                </div>
                <TrendingUp size={24} className="text-emerald-400" />
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <span className="block text-[11px] text-[#94A3B8]">Direct WhatsApp Inquiries</span>
                  <span className="text-2xl font-heading font-black text-emerald-400">
                    {estimatedChats} - {Math.round(estimatedChats * 1.4)} chats
                  </span>
                </div>
                <MessageSquare size={24} className="text-emerald-400" />
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <span className="block text-[10px] text-[#94A3B8]">Avg Cost / Chat</span>
                  <span className="font-heading font-black text-sm text-white">
                    ₹{costPerChat}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <span className="block text-[10px] text-[#94A3B8]">Projected ROI Multiple</span>
                  <span className="font-heading font-black text-sm text-[var(--color-jv-orange)]">
                    {currentProfile.roi}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href={`/companies/ahmedabad-marketing-solution/contact?budget=${budget}&industry=${industry}&zone=${zone}`}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[var(--color-jv-orange)] to-[#c2410c] text-white font-bold text-xs uppercase tracking-wider text-center block shadow-lg hover:-translate-y-0.5 transition-all"
              >
                Lock In This Growth Strategy
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  </AmsPageWrapper>
);
}
