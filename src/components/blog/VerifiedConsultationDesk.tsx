"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  MessageSquare,
  ShieldCheck,
  Building2,
  Share2,
  Check,
  ArrowRight
} from "lucide-react";
import { BlogPost } from "@/types/blog";

interface Props {
  post: BlogPost;
}

export default function VerifiedConsultationDesk({ post }: Props) {
  const [copied, setCopied] = useState(false);

  const articleUrl = typeof window !== "undefined" ? window.location.href : `https://jvgroupco.in/blog/${post.slug}`;
  const whatsappDeskUrl = `https://wa.me/919909700606?text=${encodeURIComponent(
    `Hello JV Group Desk, I am inquiring regarding your article "${post.title}".`
  )}`;

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const shareToWhatsApp = () => {
    if (typeof window !== "undefined") {
      window.open(
        `https://api.whatsapp.com/send?text=${encodeURIComponent(
          `${post.title}\n\nRead full analysis on JV Group: ${window.location.href}`
        )}`,
        "_blank"
      );
    }
  };

  const shareToLinkedIn = () => {
    if (typeof window !== "undefined") {
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
        "_blank"
      );
    }
  };

  const shareToTwitter = () => {
    if (typeof window !== "undefined") {
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(
          window.location.href
        )}`,
        "_blank"
      );
    }
  };

  return (
    <div className="my-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6">
      {/* Top Header Badge */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <ShieldCheck size={18} />
          </div>
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-emerald-400 block">
              Verified Corporate E-E-A-T Authority
            </span>
            <span className="text-[11px] text-slate-400">
              Direct Strategic Advisory Desk • JV Group Conglomerate
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <Building2 size={13} className="text-[var(--color-jv-orange)]" />
          <span>Ahmedabad (HQ) • London (UK Desk)</span>
        </div>
      </div>

      {/* Main Pitch & Hotline Numbers */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-7 space-y-3">
          <h4 className="text-lg sm:text-xl font-heading font-black text-white leading-snug">
            Need Direct Consultation on {post.targetEntityName}?
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Speak directly with JV Group leadership, commercial directors, and technical engineers.
            Zero intermediaries, prompt resolution, and transparent commercial governance.
          </p>

          {/* Hotline Numbers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            <a
              href="tel:+919909700606"
              className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-orange-500/50 flex items-center gap-3 transition-colors group"
            >
              <div className="w-8 h-8 rounded-xl bg-orange-500/10 flex items-center justify-center text-[var(--color-jv-orange)] shrink-0">
                <Phone size={14} />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-semibold block uppercase tracking-wider">
                  India Direct Hotline
                </span>
                <span className="text-xs font-black text-white group-hover:text-[var(--color-jv-orange)] transition-colors">
                  +91 99097 00606
                </span>
              </div>
            </a>

            <a
              href="tel:+916354070709"
              className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-orange-500/50 flex items-center gap-3 transition-colors group"
            >
              <div className="w-8 h-8 rounded-xl bg-orange-500/10 flex items-center justify-center text-[var(--color-jv-orange)] shrink-0">
                <Phone size={14} />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-semibold block uppercase tracking-wider">
                  Digital &amp; Media Desk
                </span>
                <span className="text-xs font-black text-white group-hover:text-[var(--color-jv-orange)] transition-colors">
                  +91 63540 70709
                </span>
              </div>
            </a>

            <a
              href="tel:+447344556070"
              className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-orange-500/50 flex items-center gap-3 transition-colors group sm:col-span-2"
            >
              <div className="w-8 h-8 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                <Phone size={14} />
              </div>
              <div className="flex-1 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 font-semibold block uppercase tracking-wider">
                    United Kingdom &amp; Global Cross-Border Desk
                  </span>
                  <span className="text-xs font-black text-white group-hover:text-blue-400 transition-colors">
                    +44 7344556070
                  </span>
                </div>
                <span className="text-[10px] font-mono text-blue-300 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-500/30">
                  London Office
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="md:col-span-5 flex flex-col gap-3 pt-2 md:pt-0 border-t md:border-t-0 md:border-l border-slate-800 md:pl-6">
          <a
            href={whatsappDeskUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
          >
            <MessageSquare size={16} />
            <span>Chat on WhatsApp Desk</span>
          </a>

          <Link
            href={`/companies/${post.targetEntityId}`}
            className="w-full py-3.5 px-4 rounded-2xl bg-[var(--color-jv-orange)] hover:opacity-95 text-white text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[var(--color-jv-orange)]/25 transition-all text-center"
          >
            <span>Explore {post.targetEntityName}</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Social Share Strip */}
      <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
        <span className="font-semibold text-slate-300">
          Share this strategic publication:
        </span>

        <div className="flex items-center gap-2">
          <button
            onClick={shareToWhatsApp}
            type="button"
            className="p-2 rounded-xl bg-slate-900 hover:bg-[#25D366] text-slate-300 hover:text-white transition-colors"
            title="Share via WhatsApp"
          >
            <MessageSquare size={14} />
          </button>

          <button
            onClick={shareToLinkedIn}
            type="button"
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-[#0077b5] text-slate-300 hover:text-white transition-colors"
            title="Share on LinkedIn"
            aria-label="Share on LinkedIn"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
          </button>

          <button
            onClick={shareToTwitter}
            type="button"
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-[#1da1f2] text-slate-300 hover:text-white transition-colors"
            title="Share on X / Twitter"
            aria-label="Share on X / Twitter"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </button>

          <button
            onClick={handleCopyLink}
            type="button"
            className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 font-bold"
            title="Copy URL"
          >
            {copied ? (
              <>
                <Check size={13} className="text-emerald-400" />
                <span className="text-emerald-400 text-[11px]">Link Copied</span>
              </>
            ) : (
              <>
                <Share2 size={13} />
                <span className="text-[11px]">Copy Link</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
