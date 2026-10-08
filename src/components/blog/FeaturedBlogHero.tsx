import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight, MapPin, Sparkles, User, Calendar } from "lucide-react";
import { BlogPost } from "@/types/blog";

interface Props {
  post: BlogPost;
}

export default function FeaturedBlogHero({ post }: Props) {
  return (
    <div className="relative rounded-3xl overflow-hidden bg-slate-950 text-white border-2 border-slate-800 shadow-2xl group my-8">
      {/* Background Graphic / Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-jv-orange)]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12 relative z-10">
        {/* Left Editorial Content */}
        <div className="lg:col-span-7 space-y-5">
          {/* Top Metadata Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[var(--color-jv-orange)] text-white shadow-md flex items-center gap-1.5">
              <Sparkles size={12} className="text-amber-200" />
              <span>Today&apos;s Featured Publication</span>
            </span>

            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-slate-300 border border-white/15 backdrop-blur-md">
              {post.category}
            </span>

            <span className="px-3 py-1 rounded-full text-xs font-bold text-amber-300 bg-amber-400/10 border border-amber-400/25 flex items-center gap-1">
              <Clock size={11} />
              <span>{post.readTime}</span>
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-white leading-tight hover:text-[var(--color-jv-orange)] transition-colors">
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </h2>

          {/* Excerpt */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            {post.summary}
          </p>

          {/* Location Scope & Author Info */}
          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400 border-t border-slate-800/80">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 overflow-hidden flex items-center justify-center shrink-0">
                {post.author.avatar ? (
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                ) : (
                  <User size={16} className="text-slate-400" />
                )}
              </div>
              <span className="font-bold text-slate-200">{post.author.name}</span>
            </div>

            <span className="text-slate-600 hidden sm:inline">•</span>

            <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <Calendar size={13} className="text-emerald-400" />
              <span>Published: {post.publishDateFormatted} at {post.publishTimeFormatted}</span>
            </div>

            <span className="text-slate-600 hidden sm:inline">•</span>

            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin size={13} className="text-[var(--color-jv-orange)]" />
              <span>{post.locationImpact.city}, {post.locationImpact.state}</span>
            </div>
          </div>

          {/* CTA Actions */}
          <div className="pt-3 flex flex-wrap items-center gap-3">
            <Link
              href={`/blog/${post.slug}`}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[var(--color-jv-orange)] to-[#c2410c] hover:opacity-95 text-white text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-[var(--color-jv-orange)]/30 hover:-translate-y-0.5 transition-all"
            >
              <span>Read Full Analysis</span>
              <ArrowRight size={14} />
            </Link>

            <Link
              href={`/companies/${post.targetEntityId}`}
              className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold border border-white/15 transition-all"
            >
              <span>View Business Desk</span>
            </Link>
          </div>
        </div>

        {/* Right Thematic Media Banner */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700/60 text-xs text-slate-300">
              <div className="flex items-center justify-between">
                <span className="font-bold text-amber-300">AI Search Engine Grounded</span>
                <span className="text-[10px] text-slate-400 font-mono">llms.txt indexed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
