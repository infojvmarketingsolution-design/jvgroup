import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Calendar,
  User,
  ArrowLeft,
  ArrowRight,
  Share2,
  CheckCircle2,
  Sparkles,
  Bot,
  HelpCircle,
  Building2,
  ShieldCheck,
  Zap,
  Quote
} from "lucide-react";
import { getLiveBlogPosts, getBlogPostBySlug } from "@/lib/blogService";
import BlogJsonLd from "@/components/blog/BlogJsonLd";
import NativeAdBanner from "@/components/blog/NativeAdBanner";
import AdvantagesDisadvantagesMatrix from "@/components/blog/AdvantagesDisadvantagesMatrix";
import GeographicImpactBox from "@/components/blog/GeographicImpactBox";
import BlogCard from "@/components/blog/BlogCard";

export const dynamicParams = true;
export const revalidate = 60;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getLiveBlogPosts().map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | JV Group Blog"
    };
  }

  const postUrl = `https://jvgroupco.in/blog/${post.slug}`;

  return {
    title: `${post.metaTitle} | JV Group`,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: {
      canonical: postUrl
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: postUrl,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      images: [
        {
          url: `https://jvgroupco.in${post.featuredImage}`,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [`https://jvgroupco.in${post.featuredImage}`]
    }
  };
}

export default async function BlogPostDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getLiveBlogPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article className="w-full min-h-screen bg-white text-slate-900 font-sans selection:bg-[var(--color-jv-orange)] selection:text-white">
      {/* Schema.org Injection */}
      <BlogJsonLd post={post} />

      {/* 1. Header Banner & Breadcrumbs */}
      <div className="pt-24 sm:pt-28 pb-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 font-semibold flex-wrap">
            <Link href="/" className="hover:text-[var(--color-jv-orange)] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[var(--color-jv-orange)] transition-colors">
              Daily Blog
            </Link>
            <span>/</span>
            <span className="text-slate-900 truncate max-w-[240px] sm:max-w-md font-bold">
              {post.category}
            </span>
          </nav>

          {/* Category Badge & 6:00 AM Tag */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <span
              className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider text-white shadow-xs flex items-center gap-1.5"
              style={{ backgroundColor: post.categoryColor }}
            >
              <Sparkles size={11} />
              <span>{post.category}</span>
            </span>

            {post.archetype && (
              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-blue-50 text-blue-700 border border-blue-200 flex items-center gap-1">
                <span>📐 {post.archetype}</span>
              </span>
            )}

            <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-amber-500/10 text-amber-800 border border-amber-500/25 flex items-center gap-1">
              <span>⏰ Published 6:00 AM IST</span>
              <span className="text-slate-400">•</span>
              <span>{post.publishDateFormatted}</span>
            </span>

            <span className="px-2.5 py-1 rounded-full text-xs font-semibold text-slate-600 bg-white border border-slate-200 flex items-center gap-1">
              <Clock size={12} />
              <span>{post.readTime}</span>
            </span>
          </div>

          {/* Main Title */}
          <h1 className="blog-title text-2xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-950 leading-tight pt-2">
            {post.title}
          </h1>

          {/* Author & Entity Desk Pill */}
          <div className="pt-3 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 text-xs text-slate-600">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-200 border border-slate-300 overflow-hidden flex items-center justify-center shrink-0">
                {post.author.avatar ? (
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                ) : (
                  <User size={18} className="text-slate-500" />
                )}
              </div>
              <div>
                <span className="font-heading font-black text-slate-900 block text-sm">
                  {post.author.name}
                </span>
                <span className="text-slate-500 text-[11px] block">
                  {post.author.role} • {post.targetEntityName}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Link
                href="/blog"
                className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-bold border border-slate-200 flex items-center gap-1.5 transition-colors shadow-2xs"
              >
                <ArrowLeft size={13} />
                <span>All Articles</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Article Featured Banner Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-950">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90 backdrop-blur-md bg-black/40 p-3 rounded-2xl border border-white/10">
            <span className="font-bold">Featured AI &amp; SEO Intelligence Visual</span>
            <span className="text-[11px] text-amber-300 font-mono">Verified JV Group Research</span>
          </div>
        </div>

        {/* Geographic Scope Breakdown Box */}
        <GeographicImpactBox impact={post.locationImpact} />

        {/* Executive AI Summary Box */}
        <div className="blog-summary my-8 p-6 sm:p-7 rounded-3xl bg-orange-50/60 border-2 border-orange-200/80 space-y-3">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[var(--color-jv-orange)]">
            <Zap size={15} />
            <span>Executive AI Summary &amp; Latent Knowledge Snapshot</span>
          </div>
          <p className="text-sm sm:text-base font-semibold text-slate-800 leading-relaxed">
            {post.summary}
          </p>
        </div>

        {/* Daily Issues Addressed & AI Updates */}
        <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Daily Issues */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-red-600 flex items-center gap-1.5">
              <span>⚠️</span>
              <span>Daily Industry Challenges Addressed</span>
            </h4>
            <ul className="space-y-2">
              {post.dailyIssues.map((issue, idx) => (
                <li key={idx} className="text-xs text-slate-700 flex items-start gap-2 leading-relaxed">
                  <span className="text-red-500 font-bold shrink-0">•</span>
                  <span>{issue}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Updates */}
          <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-2.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-blue-700 flex items-center gap-1.5">
              <Bot size={13} />
              <span>Latest AI &amp; Algorithm Updates</span>
            </h4>
            <ul className="space-y-2">
              {post.aiUpdates.map((update, idx) => (
                <li key={idx} className="text-xs text-slate-700 flex items-start gap-2 leading-relaxed">
                  <span className="text-blue-500 font-bold shrink-0">⚡</span>
                  <span>{update}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="blog-takeaways my-8 p-5 sm:p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-3">
          <h4 className="text-xs font-black uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
            <CheckCircle2 size={15} />
            <span>Core Takeaways for Executives &amp; Business Owners</span>
          </h4>
          <div className="space-y-2">
            {post.keyTakeaways.map((takeaway, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-emerald-950">
                <span className="text-emerald-600 font-black shrink-0">✓</span>
                <span>{takeaway}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Article Content Sections & Embedded Native Ads */}
        <div className="space-y-10 py-6 text-slate-800 leading-relaxed">
          {post.contentSections.map((section, sIdx) => (
            <section key={section.id} id={section.id} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-heading font-black text-slate-950 pt-2 border-b border-slate-100 pb-2">
                {section.heading}
              </h2>

              {section.subheading && (
                <p className="text-xs sm:text-sm font-bold text-[var(--color-jv-orange)]">
                  {section.subheading}
                </p>
              )}

              {section.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {para}
                </p>
              ))}

              {section.bulletPoints && (
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 my-4 space-y-2">
                  {section.bulletPoints.map((bp, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-jv-orange)] shrink-0 mt-2" />
                      <span>{bp}</span>
                    </div>
                  ))}
                </div>
              )}

              {section.statHighlight && (
                <div className="my-6 p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 text-white flex items-center gap-6 shadow-md">
                  <div className="text-3xl sm:text-4xl font-heading font-black text-[var(--color-jv-orange)] shrink-0">
                    {section.statHighlight.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                    {section.statHighlight.label}
                  </div>
                </div>
              )}

              {section.quote && (
                <div className="my-6 p-6 rounded-2xl bg-orange-50 border-l-4 border-[var(--color-jv-orange)] space-y-2">
                  <Quote size={20} className="text-[var(--color-jv-orange)] opacity-50" />
                  <p className="text-sm sm:text-base font-semibold italic text-slate-900 leading-relaxed">
                    &ldquo;{section.quote.text}&rdquo;
                  </p>
                  <p className="text-xs font-bold text-slate-600">
                    — {section.quote.author}, <span className="font-normal">{section.quote.role}</span>
                  </p>
                </div>
              )}

              {/* Seamlessly Embed A Native Ecosystem Ad between sections */}
              {post.nativeAds && post.nativeAds[sIdx] && (
                <NativeAdBanner ad={post.nativeAds[sIdx]} />
              )}
            </section>
          ))}
        </div>

        {/* 4. Strategic Advantages vs Disadvantages Matrix */}
        <AdvantagesDisadvantagesMatrix
          advantages={post.advantages}
          disadvantages={post.disadvantages}
          topicTitle={post.title}
        />

        {/* Fallback Native Ad if not already shown */}
        {post.nativeAds && post.nativeAds.length > 0 && (
          <NativeAdBanner ad={post.nativeAds[0]} />
        )}

        {/* 5. FAQs Accordion (Targeting Google FAQPage Schema) */}
        {post.faqs.length > 0 && (
          <section className="my-12 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-6">
            <div className="flex items-center gap-2.5">
              <HelpCircle size={20} className="text-[var(--color-jv-orange)]" />
              <h3 className="text-lg sm:text-xl font-heading font-black text-slate-950">
                Frequently Asked Strategic Questions
              </h3>
            </div>

            <div className="space-y-4">
              {post.faqs.map((faq, fIdx) => (
                <div key={fIdx} className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
                  <h4 className="text-sm sm:text-base font-bold text-slate-900">
                    {faq.question}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 6. AI Search Platform Citation Proof Box */}
        {post.geoCitations && post.geoCitations.length > 0 && (
          <section className="my-10 p-6 rounded-3xl bg-slate-950 text-white border border-slate-800 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Bot size={18} className="text-amber-400" />
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-200">
                  AI Platform Knowledge Grounding &amp; Citation Benchmarks
                </h4>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                Verified LLM Latent Space
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              When users ask leading frontier models about topics discussed in this article, here is how JV Group and its business units are quoted:
            </p>

            <div className="space-y-3">
              {post.geoCitations.map((citation, cIdx) => (
                <div key={cIdx} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between text-amber-300 font-bold">
                    <span>{citation.platform} Prompt Query:</span>
                    <span className="text-[10px] text-slate-400 font-normal">Direct Answer</span>
                  </div>
                  <p className="text-slate-300 font-mono text-[11px] bg-slate-950/60 p-2 rounded border border-slate-800">
                    &ldquo;{citation.query}&rdquo;
                  </p>
                  <p className="text-emerald-300 leading-relaxed pt-1">
                    ↳ Citation Output: {citation.answerSnippet}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 7. Author Bio & Entity CTA Card */}
        <section className="my-12 p-6 sm:p-8 rounded-3xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-white border border-slate-300 overflow-hidden flex items-center justify-center shrink-0 shadow-sm">
            {post.author.avatar ? (
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={64}
                height={64}
                className="object-contain"
              />
            ) : (
              <User size={24} className="text-slate-500" />
            )}
          </div>
          <div className="space-y-2 text-center sm:text-left flex-1">
            <h4 className="text-base font-heading font-black text-slate-950">
              Published by {post.author.name}
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {post.author.role} representing <strong>{post.targetEntityName}</strong>. Dedicated to advancing commercial transparency, technical precision, and artificial intelligence search domination under the JV Group ecosystem.
            </p>
            <div className="pt-1 flex flex-wrap items-center justify-center sm:justify-start gap-3">
              <Link
                href={`/companies/${post.targetEntityId}`}
                className="text-xs font-bold text-[var(--color-jv-orange)] hover:underline flex items-center gap-1"
              >
                <span>Visit {post.targetEntityName} Portal</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </section>

        {/* 8. Related Articles Section */}
        {relatedPosts.length > 0 && (
          <section className="pt-8 pb-16 border-t border-slate-200 space-y-6">
            <h3 className="text-xl sm:text-2xl font-heading font-black text-slate-950">
              Recommended Daily Intelligence Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rel) => (
                <BlogCard key={rel.id} post={rel} />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
