"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { Search, Sparkles, Filter, Building2, BookOpen, Mail, CheckCircle2, ArrowRight, Check } from "lucide-react";
import { getLiveBlogPosts } from "@/lib/blogService";
import { BUSINESS_ENTITIES } from "@/data/businesses";
import BlogCard from "@/components/blog/BlogCard";
import FeaturedBlogHero from "@/components/blog/FeaturedBlogHero";

export default function BlogListingPage() {
  const [allPosts, setAllPosts] = useState(() => getLiveBlogPosts());
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedEntity, setSelectedEntity] = useState<string>("All");
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  const categories = [
    "All",
    "AI SEO & GEO",
    "Digital Marketing",
    "Conversational AI & SaaS",
    "Enterprise IT Infrastructure",
    "Commercial Real Estate",
    "Global Trade & Logistics",
    "Overseas Higher Education"
  ];

  // Refresh posts on mount to match exact India client time
  useEffect(() => {
    setAllPosts(getLiveBlogPosts());
  }, []);

  // Filter posts
  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      // Category filter
      if (selectedCategory !== "All" && post.category !== selectedCategory) {
        return false;
      }
      // Entity filter
      if (selectedEntity !== "All" && post.targetEntityId !== selectedEntity) {
        return false;
      }
      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = post.title.toLowerCase().includes(q);
        const matchesSummary = post.summary.toLowerCase().includes(q);
        const matchesCity = post.locationImpact.city.toLowerCase().includes(q);
        const matchesKeywords = post.keywords.some((k) => k.toLowerCase().includes(q));
        if (!matchesTitle && !matchesSummary && !matchesCity && !matchesKeywords) {
          return false;
        }
      }
      return true;
    });
  }, [allPosts, searchQuery, selectedCategory, selectedEntity]);

  const featuredPost = allPosts.find((p) => p.isFeatured) || allPosts[0];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmailInput("");
      setSubscribed(false);
    }, 4500);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const companyParam = params.get("company");
      if (companyParam) {
        setSelectedEntity(companyParam);
      }
    }
  }, []);

  return (
    <div className="w-full min-h-screen bg-slate-50/60 text-slate-900 font-sans selection:bg-[var(--color-jv-orange)] selection:text-white">
      {/* 1. Hero Header */}
      <section className="pt-28 pb-12 sm:pt-36 sm:pb-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[var(--color-jv-orange)] text-xs font-black uppercase tracking-wider">
              <Sparkles size={13} />
              <span>JV Group Editorial &amp; Thought Leadership</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-heading font-black text-slate-950 tracking-tight leading-tight">
              Strategic Insights, Market Trends &amp; Industry Analysis
            </h1>

            <p className="text-sm sm:text-lg text-slate-600 leading-relaxed">
              Authoritative industry research, generative search algorithms (GEO), industrial expansion, and commercial strategies across Gujarat, India, and worldwide markets.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-slate-800 font-bold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[var(--color-jv-orange)] animate-pulse" />
                <span>Daily Publications • Released Every Morning at 6:00 AM IST</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="text-slate-500 font-medium">Rank #1 on Google Search &amp; Verified Across ChatGPT, Perplexity &amp; Gemini</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
        {/* Spotlight Hero Article */}
        {featuredPost && selectedCategory === "All" && selectedEntity === "All" && !searchQuery && (
          <FeaturedBlogHero post={featuredPost} />
        )}

        {/* 3. Filter & Search Controls */}
        <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search by topic, keyword, or city (e.g. Ahmedabad, GEO, WhatsApp API, Real Estate)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[var(--color-jv-orange)] focus:bg-white transition-all"
              />
            </div>

            {/* Entity Filter Dropdown */}
            <div className="relative shrink-0">
              <div className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-slate-50 border border-slate-200">
                <Building2 size={16} className="text-[var(--color-jv-orange)]" />
                <span className="text-xs font-bold text-slate-600">Company:</span>
                <select
                  value={selectedEntity}
                  onChange={(e) => setSelectedEntity(e.target.value)}
                  className="bg-transparent text-xs font-black text-slate-900 focus:outline-none cursor-pointer pr-4"
                >
                  <option value="All">All 11 JV Group Companies</option>
                  {BUSINESS_ENTITIES.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.shortName} ({b.name})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar pt-1">
            <span className="text-xs font-bold text-slate-400 flex items-center gap-1 shrink-0 mr-1">
              <Filter size={12} />
              <span>Category:</span>
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-black whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-slate-900 text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 4. Articles Grid */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-heading font-black text-slate-950 flex items-center gap-2">
              <BookOpen size={20} className="text-[var(--color-jv-orange)]" />
              <span>
                {selectedCategory === "All" ? "All Daily Publications" : `${selectedCategory} Articles`}
              </span>
              <span className="text-xs font-bold text-slate-500 bg-slate-200/80 px-2.5 py-0.5 rounded-full">
                {filteredPosts.length}
              </span>
            </h2>

            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                  setSelectedEntity("All");
                }}
                className="text-xs text-[var(--color-jv-orange)] font-bold hover:underline cursor-pointer"
              >
                Reset Filters
              </button>
            )}
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-3">
              <div className="w-12 h-12 rounded-full bg-orange-100 text-[var(--color-jv-orange)] flex items-center justify-center mx-auto">
                <Search size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                No articles matching your criteria
              </h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Try searching for broader keywords like &quot;Ahmedabad&quot;, &quot;SEO&quot;, &quot;WhatsApp&quot;, or reset your category selection.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                  setSelectedEntity("All");
                }}
                className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-[var(--color-jv-orange)] transition-colors cursor-pointer"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </section>

        {/* 5. Daily 6:00 AM Newsletter Subscription Card */}
        <section className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--color-jv-orange)]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 border border-white/15 text-xs font-bold">
              <Mail size={12} />
              <span>Daily 6:00 AM Executive Briefing</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-heading font-black text-white">
              Receive Tomorrow Morning&apos;s AI SEO &amp; GEO Report
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Every morning at 6:00 AM IST, our automated engine synthesizes algorithm shifts, zero-click answer updates, and Gujarat market opportunities directly to your inbox.
            </p>

            {subscribed ? (
              <div className="p-4 rounded-2xl bg-emerald-900/40 border border-emerald-500/40 text-emerald-200 text-xs font-bold flex items-center justify-center gap-2 animate-in fade-in">
                <CheckCircle2 size={16} className="text-emerald-400" />
                <span>You are subscribed! Look out for tomorrow&apos;s 6:00 AM briefing.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="pt-2 flex flex-col sm:flex-row items-center gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter your corporate email address..."
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 text-xs font-medium focus:outline-none focus:border-[var(--color-jv-orange)] focus:bg-white/15 transition-all"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[var(--color-jv-orange)] to-[#c2410c] hover:opacity-95 text-white text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shrink-0 shadow-lg shadow-[var(--color-jv-orange)]/25 cursor-pointer"
                >
                  <span>Subscribe</span>
                  <ArrowRight size={13} />
                </button>
              </form>
            )}

            <p className="text-[11px] text-slate-500">
              Zero spam. Verified commercial intelligence only. Backed by JV Group corporate charter.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
