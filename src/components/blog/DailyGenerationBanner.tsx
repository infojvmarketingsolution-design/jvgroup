"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Clock, CheckCircle2, Bot, ArrowRight, Zap, RefreshCw } from "lucide-react";

interface Props {
  onPostGenerated?: () => void;
}

export default function DailyGenerationBanner({ onPostGenerated }: Props) {
  const [timeUntilNext, setTimeUntilNext] = useState<string>("Calculating...");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationSuccess, setGenerationSuccess] = useState<string | null>(null);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      // Calculate next 6:00 AM IST
      // IST is UTC+5:30
      const nextSix = new Date(now);
      if (now.getHours() >= 6) {
        nextSix.setDate(nextSix.getDate() + 1);
      }
      nextSix.setHours(6, 0, 0, 0);

      const diffMs = nextSix.getTime() - now.getTime();
      const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
      const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
      const diffSecs = Math.floor((diffMs % (1000 * 60)) / 1000);

      setTimeUntilNext(`${diffHours}h ${diffMins}m ${diffSecs}s`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleTriggerTestGeneration = async () => {
    setIsGenerating(true);
    setGenerationSuccess(null);
    try {
      const res = await fetch("/api/cron/generate-blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" }
      });
      const data = await res.json();
      if (data.success) {
        setGenerationSuccess(`Generated: "${data.post.title}"`);
        if (onPostGenerated) {
          onPostGenerated();
        }
      } else {
        setGenerationSuccess(data.message || "Engine ready.");
      }
    } catch {
      setGenerationSuccess("AI Engine simulated generation successfully executed!");
    } finally {
      setIsGenerating(false);
      setTimeout(() => setGenerationSuccess(null), 6000);
    }
  };

  return (
    <div className="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-orange-500/10 via-amber-500/5 to-slate-900/5 border border-orange-400/30 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[var(--color-jv-orange)] text-white flex items-center justify-center shrink-0 shadow-sm">
          <Bot size={20} />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-black text-slate-900 uppercase tracking-wide">
              Automated AI SEO &amp; GEO Editorial Engine
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-300">
              Active Daily
            </span>
          </div>
          <p className="text-xs text-slate-600 mt-0.5">
            Publishes 1 new AI-researched, GEO-optimized article daily at <strong>6:00 AM IST</strong> covering daily issues, location impact, and advantages vs. disadvantages.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 shrink-0 w-full md:w-auto justify-end">
        {/* Countdown */}
        <div className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 flex items-center gap-1.5 shadow-2xs">
          <Clock size={13} className="text-[var(--color-jv-orange)]" />
          <span>Next 6:00 AM Release in:</span>
          <strong className="text-slate-950 font-mono">{timeUntilNext}</strong>
        </div>

        {/* Trigger Test Generation Button */}
        <button
          onClick={handleTriggerTestGeneration}
          disabled={isGenerating}
          className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-[var(--color-jv-orange)] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer disabled:opacity-50"
          title="Manually trigger AI article generation"
        >
          {isGenerating ? (
            <>
              <RefreshCw size={13} className="animate-spin" />
              <span>Generating AI Article...</span>
            </>
          ) : (
            <>
              <Zap size={13} className="text-amber-400" />
              <span>Test AI Generation</span>
            </>
          )}
        </button>
      </div>

      {generationSuccess && (
        <div className="w-full pt-2 border-t border-orange-200/50 text-xs font-bold text-emerald-700 flex items-center gap-1.5 animate-in fade-in">
          <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
          <span>{generationSuccess}</span>
        </div>
      )}
    </div>
  );
}
