"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, ArrowRight, Clock, Calendar, MapPin, Sparkles } from "lucide-react";
import { BusinessEntity } from "@/data/businesses";
import { INITIAL_BLOG_POSTS } from "@/data/blogPosts";
import { BlogPost } from "@/types/blog";

interface Props {
  entity: BusinessEntity;
}

export default function CompanyBlogSection({ entity }: Props) {
  // Find posts directly associated with this entity or fallback to top ecosystem posts
  const directMatches = INITIAL_BLOG_POSTS.filter(
    (post) =>
      post.targetEntityId === entity.id ||
      post.targetEntityName.toLowerCase().includes(entity.shortName.toLowerCase()) ||
      post.targetEntityName.toLowerCase().includes(entity.id.toLowerCase())
  );

  const otherPosts = INITIAL_BLOG_POSTS.filter(
    (post) => !directMatches.some((m) => m.id === post.id)
  );

  // Combine to have up to 3 relevant posts
  const displayPosts: BlogPost[] = [...directMatches, ...otherPosts].slice(0, 3);

  if (displayPosts.length === 0) return null;

  return (
    <section className="py-20 bg-slate-50 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[var(--color-jv-orange)] text-xs font-black uppercase tracking-wider mb-3">
              <Sparkles size={13} />
              <span>{entity.shortName} Insights &amp; Publications</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight">
              Latest Industry Analysis &amp; Research
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
              Authoritative market research, search trends, and tactical analysis published daily by the leadership of {entity.shortName} and the JV Group Editorial Board.
            </p>
          </div>

          <Link
            href={`/blog?company=${entity.id}`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-orange-50 border border-slate-200 hover:border-orange-200 text-slate-900 hover:text-[var(--color-jv-orange)] text-xs font-bold transition-all shadow-xs shrink-0"
          >
            <BookOpen size={14} className="text-[var(--color-jv-orange)]" />
            <span>Explore All Blog Publications</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayPosts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-orange-300 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="relative aspect-16/9 w-full bg-slate-900 overflow-hidden">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider text-white shadow-sm"
                    style={{ backgroundColor: post.categoryColor || "#F36323" }}
                  >
                    {post.category}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white/90 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={12} className="text-amber-300" />
                    <span>{post.publishDateFormatted}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={12} className="text-amber-300" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                    <MapPin size={12} className="text-[var(--color-jv-orange)] shrink-0" />
                    <span className="truncate">{post.locationImpact.city}, {post.locationImpact.state}</span>
                  </div>

                  <h3 className="font-heading font-black text-lg text-slate-950 group-hover:text-[var(--color-jv-orange)] transition-colors line-clamp-2 leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {post.summary}
                  </p>
                </div>

                {/* Footer Link */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-400">
                    {post.publishTimeFormatted}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-black text-[var(--color-jv-orange)] group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Article</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
