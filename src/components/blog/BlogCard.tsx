import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight, MapPin, Sparkles, User } from "lucide-react";
import { BlogPost } from "@/types/blog";

interface Props {
  post: BlogPost;
}

export default function BlogCard({ post }: Props) {
  return (
    <article className="group flex flex-col rounded-3xl bg-white border border-slate-200/90 hover:border-[var(--color-jv-orange)] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Top Media Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
        <Image
          src={post.featuredImage}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

        {/* Category Pill */}
        <div className="absolute top-3.5 left-3.5 z-10">
          <span 
            className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider text-white backdrop-blur-md shadow-xs flex items-center gap-1.5"
            style={{ backgroundColor: post.categoryColor || "#F36323" }}
          >
            <Sparkles size={11} />
            <span>{post.category}</span>
          </span>
        </div>

        {/* 6:00 AM Daily Timing Badge */}
        <div className="absolute bottom-3 left-3 z-10">
          <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-amber-300 text-[10.5px] font-black tracking-wide border border-amber-400/30 flex items-center gap-1">
            <span>⏰ 6:00 AM IST</span>
            <span className="text-white/60">•</span>
            <span className="text-white font-medium">{post.publishDateFormatted}</span>
          </span>
        </div>

        {/* Read Time */}
        <div className="absolute top-3.5 right-3.5 z-10">
          <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-[10.5px] font-bold flex items-center gap-1">
            <Clock size={11} />
            <span>{post.readTime}</span>
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between space-y-4">
        <div className="space-y-3">
          {/* Location Badges */}
          <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-bold text-slate-500">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
              <MapPin size={10} className="text-[var(--color-jv-orange)]" />
              <span>{post.locationImpact.city}</span>
            </span>
            <span>•</span>
            <span>{post.locationImpact.state}</span>
            <span>•</span>
            <span className="text-slate-400">{post.locationImpact.country}</span>
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-heading font-black text-slate-950 group-hover:text-[var(--color-jv-orange)] transition-colors leading-snug line-clamp-2">
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </h3>

          {/* Excerpt */}
          <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
            {post.summary}
          </p>
        </div>

        {/* Card Footer */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center shrink-0">
              {post.author.avatar ? (
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              ) : (
                <User size={14} className="text-slate-500" />
              )}
            </div>
            <span className="text-xs font-bold text-slate-700 truncate max-w-[130px] sm:max-w-[160px]">
              {post.author.name}
            </span>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 text-xs font-black text-[var(--color-jv-orange)] group-hover:translate-x-1 transition-transform"
          >
            <span>Read Article</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </article>
  );
}
