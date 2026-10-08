import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageSquare, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { NativeAd } from "@/types/blog";

interface Props {
  ad: NativeAd;
}

export default function NativeAdBanner({ ad }: Props) {
  const whatsappUrl = `https://wa.me/${ad.whatsappNumber || "916354070709"}?text=${encodeURIComponent(
    `Hello ${ad.targetCompanyName}, I am inquiring after reading your featured spotlight in the JV Group Daily Blog.`
  )}`;

  return (
    <div className="my-10 relative overflow-hidden rounded-3xl border-2 border-slate-200/90 bg-gradient-to-br from-slate-50 via-white to-orange-50/30 p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 group">
      {/* Top Banner Tag */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-200/80">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-900 text-white shadow-xs">
            <Sparkles size={11} className="text-amber-400" />
            <span>Sponsored Ecosystem Partner</span>
          </span>
          <span className="text-[11px] font-bold text-slate-500 hidden sm:inline">
            • {ad.badge}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] text-slate-600 font-bold">
          <ShieldCheck size={14} className="text-emerald-600" />
          <span>Verified JV Group Business Unit</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Left Logo / Thumbnail */}
        <div className="md:col-span-3 flex md:flex-col items-center justify-center gap-3">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white p-2 border border-slate-200 shadow-sm flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
            <Image
              src={ad.image}
              alt={ad.title}
              width={100}
              height={100}
              className="object-contain max-h-full max-w-full"
            />
          </div>
          <span className="text-xs font-black text-slate-900 text-center block md:mt-1">
            {ad.targetCompanyName}
          </span>
        </div>

        {/* Center Pitch */}
        <div className="md:col-span-6 space-y-2.5">
          <h4 className="text-lg sm:text-xl font-heading font-black text-slate-950 leading-snug group-hover:text-[var(--color-jv-orange)] transition-colors">
            {ad.title}
          </h4>
          <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">
            {ad.tagline}
          </p>
          <p className="text-xs text-slate-600 leading-relaxed">
            {ad.description}
          </p>

          {/* Highlights */}
          {ad.highlights && ad.highlights.length > 0 && (
            <div className="pt-2 space-y-1">
              {ad.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-jv-orange)] shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right CTA Actions */}
        <div className="md:col-span-3 flex flex-col gap-2.5 pt-2 md:pt-0 border-t md:border-t-0 md:border-l border-slate-200 md:pl-5">
          <Link
            href={ad.ctaUrl}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[var(--color-jv-orange)] to-[#c2410c] hover:opacity-95 text-white text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md shadow-[var(--color-jv-orange)]/25 hover:-translate-y-0.5 transition-all text-center"
          >
            <span>{ad.ctaText}</span>
            <ArrowRight size={13} />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-all text-center"
            title="Chat directly on WhatsApp"
          >
            <MessageSquare size={14} />
            <span>WhatsApp Desk</span>
          </a>

          {ad.phone && (
            <a
              href={`tel:${ad.phone}`}
              className="w-full py-2 px-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200 flex items-center justify-center gap-1.5 transition-all text-center truncate"
              title={`Call Hotline: ${ad.phone}`}
            >
              <Phone size={12} className="text-[var(--color-jv-orange)] shrink-0" />
              <span className="truncate">{ad.phone}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
