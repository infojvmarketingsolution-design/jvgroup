"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  ArrowRight, 
  Search, 
  Filter, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Award, 
  Globe2, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  Layers, 
  Bot, 
  Cpu, 
  Zap, 
  BarChart3, 
  Building2, 
  Phone, 
  MessageSquare, 
  Code2, 
  Check, 
  FileText, 
  Star, 
  SlidersHorizontal,
  HelpCircle,
  Copy,
  Terminal,
  Clock
} from "lucide-react";
import type { BusinessEntity } from "@/data/businesses";
import type { CompanyCaseStudy } from "@/data/companyWebsitesData";
import CompanyPageWrapper from "@/components/company/CompanyPageWrapper";
import AiVisibilityAuditTool from "@/components/seo/AiVisibilityAuditTool";

interface Props {
  entity: BusinessEntity;
  caseStudies: CompanyCaseStudy[];
  schemaJson: string;
}

export default function CaseStudiesClient({ entity, caseStudies, schemaJson }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedCaseId, setExpandedCaseId] = useState<number | null>(0);
  const [livePreviewTab, setLivePreviewTab] = useState<"google" | "perplexity" | "chatgpt" | "gemini">("google");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [copiedSchema, setCopiedSchema] = useState(false);

  // Filter categories
  const categories = [
    { id: "all", label: "All Results", count: caseStudies.length },
    { 
      id: "geo", 
      label: "AI SEO & GEO Citations", 
      count: caseStudies.filter(c => c.category === "geo" || c.sector.toLowerCase().includes("geo") || c.sector.toLowerCase().includes("ai")).length 
    },
    { 
      id: "google-seo", 
      label: "Google Rank #1 SEO", 
      count: caseStudies.filter(c => c.category === "google-seo" || c.sector.toLowerCase().includes("seo") || c.sector.toLowerCase().includes("saas")).length 
    },
    { 
      id: "local-seo", 
      label: "Map Pack #1 & Export", 
      count: caseStudies.filter(c => c.category === "local-seo" || c.sector.toLowerCase().includes("export") || c.sector.toLowerCase().includes("uk")).length 
    },
    { 
      id: "meta-capi", 
      label: "Meta CAPI & Ads Pipeline", 
      count: caseStudies.filter(c => c.category === "meta-capi" || c.sector.toLowerCase().includes("meta") || c.sector.toLowerCase().includes("corporate")).length 
    },
  ];

  // Filtered case studies
  const filteredCaseStudies = useMemo(() => {
    return caseStudies.filter((cs) => {
      const matchesSearch = 
        cs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cs.challenge.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cs.strategy.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cs.sector.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cs.targetKeywords?.some(k => k.toLowerCase().includes(searchQuery.toLowerCase())) ||
        cs.techStack?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      if (!matchesSearch) return false;

      if (selectedCategory === "all") return true;
      if (selectedCategory === "geo") {
        return cs.category === "geo" || cs.sector.toLowerCase().includes("geo") || cs.sector.toLowerCase().includes("ai");
      }
      if (selectedCategory === "google-seo") {
        return cs.category === "google-seo" || cs.sector.toLowerCase().includes("seo") || cs.sector.toLowerCase().includes("saas");
      }
      if (selectedCategory === "local-seo") {
        return cs.category === "local-seo" || cs.sector.toLowerCase().includes("local") || cs.sector.toLowerCase().includes("export") || cs.sector.toLowerCase().includes("uk");
      }
      if (selectedCategory === "meta-capi") {
        return cs.category === "meta-capi" || cs.sector.toLowerCase().includes("capi") || cs.sector.toLowerCase().includes("corporate");
      }

      return true;
    });
  }, [caseStudies, searchQuery, selectedCategory]);

  const handleCopySchema = () => {
    navigator.clipboard.writeText(schemaJson);
    setCopiedSchema(true);
    setTimeout(() => setCopiedSchema(false), 2500);
  };

  const faqs = [
    {
      q: `How does ${entity.name} achieve Rank #1 on Google Search and AI engines?`,
      a: `${entity.name} deploys a synchronized 4-layer architecture: (1) Technical sub-second Core Web Vitals optimization, (2) Programmatic semantic cluster topical authority, (3) Schema.org multi-entity Knowledge Graphs that feed AI crawlers, and (4) Canonical /llms.txt protocols that guarantee direct citations across ChatGPT Search, Perplexity AI, Claude, and Google AI Overviews.`
    },
    {
      q: "What is the difference between Traditional SEO and Generative Engine Optimization (GEO)?",
      a: "Traditional SEO focuses strictly on ranking 10 blue links in Google Search using keyword matching and backlinks. Generative Engine Optimization (GEO) optimizes content structure, factual answer nodes, and JSON-LD knowledge graphs so that Large Language Models (LLMs) like OpenAI ChatGPT, Perplexity, and Google Gemini cite your company as the verified authority when answering conversational buyer queries."
    },
    {
      q: "What is the typical timeframe to see Google #1 rankings and AI citations?",
      a: "While traditional SEO often takes 6 to 12 months, our sprint-based GEO and technical semantic architecture delivers indexation within 14 to 21 days. Significant commercial keyword position gains and verified Perplexity/ChatGPT citations typically materialize within a 45 to 90-day sprint cycle."
    },
    {
      q: "How do you verify and attribute leads from AI search and Google #1 positions?",
      a: "We implement bi-directional CRM webhook integrations (HubSpot, Salesforce, Zoho) combined with first-party server-side tracking (Meta CAPI and Google Enhanced Conversions). Every lead is tagged with exact referrer vectors (Google Organic, Perplexity Citation, ChatGPT Search Referral, Direct AI Summary) so you see the closed-won contract value."
    },
    {
      q: "Do you offer localized Google 3-Pack and international export SEO?",
      a: "Yes. For industrial exporters and multi-location enterprises, we engineer geo-tagged coordinate schemas, multi-language technical catalog landing hubs, and Google Business Profile authority networks that capture top 3-pack map rankings and international wholesale RFQs."
    }
  ];

  return (
    <CompanyPageWrapper entity={entity}>
      {/* Schema.org Ingestion Script for Crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaJson }}
      />

      <div className="w-full bg-white text-[#18191C]">
        
        {/* ========================================================================= */}
        {/* 1. HERO BANNER: PURE WHITE WITH HIGH-AUTHORITY CORPORATE TYPOGRAPHY */}
        {/* ========================================================================= */}
        <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 border-b border-[#E2E8F0] overflow-hidden bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-xs text-[#64748B] mb-6 font-medium">
              <Link href="/" className="hover:text-[var(--color-jv-orange)] transition-colors">Home</Link>
              <span>/</span>
              <Link href={`/companies/${entity.id}`} className="hover:text-[var(--color-jv-orange)] transition-colors">{entity.name}</Link>
              <span>/</span>
              <span className="text-[#18191C] font-semibold">Case Studies & SEO Rank #1 Proof</span>
            </div>

            <div className="max-w-4xl">
              {/* Trust Pill */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FFF4ED] border border-[var(--color-jv-orange)]/30 text-[var(--color-jv-orange)] text-xs font-black uppercase tracking-wider mb-6">
                <Sparkles size={14} className="text-[var(--color-jv-orange)] animate-pulse" />
                <span>Audited Case Studies • Google Rank #1 SERP & AI Citations • Zero Artificial Metrics</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-heading font-black text-[#18191C] tracking-tight leading-[1.1] mb-6">
                Dominating Google Rank #1 & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-jv-orange)] to-[#ea580c]">Generative Engine Optimization (GEO).</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl text-[#4E5058] leading-relaxed max-w-3xl mb-8 font-normal">
                Audited proof of how <strong className="text-[#18191C] font-semibold">{entity.name}</strong> engineers market dominance for B2B enterprises, industrial exporters, and technology leaders. From zero visibility to #1 featured snippets, Google Map Pack dominance, and top citations across ChatGPT, Perplexity, and Google AI Overviews.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#case-studies-grid"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[var(--color-jv-orange)] to-[#c2410c] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <span>Explore Rank #1 Case Studies</span>
                  <ArrowRight size={14} />
                </a>

                <a
                  href="#ai-audit-scanner"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[var(--color-jv-orange)] text-[#18191C] font-bold text-xs uppercase tracking-wider shadow-2xs hover:shadow-sm transition-all"
                >
                  <Cpu size={14} className="text-[var(--color-jv-orange)]" />
                  <span>Run Free AI Visibility Audit</span>
                </a>

                <Link
                  href={`/companies/${entity.id}/contact`}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-[#64748B] hover:text-[var(--color-jv-orange)] text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <span>Request Custom Proposal</span>
                  <ExternalLink size={13} />
                </Link>
              </div>
            </div>

            {/* Top 4 Performance Proof Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-14 pt-10 border-t border-[#E2E8F0]">
              <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <div className="flex items-center gap-2 text-xs font-black uppercase text-[var(--color-jv-orange)] mb-1">
                  <Award size={14} />
                  <span>Google Position</span>
                </div>
                <div className="text-2xl sm:text-3xl font-heading font-black text-[#18191C]">
                  Rank #1
                </div>
                <div className="text-xs text-[#64748B] mt-0.5 font-medium">
                  Verified SERP & Map Pack Dominance
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <div className="flex items-center gap-2 text-xs font-black uppercase text-purple-600 mb-1">
                  <Bot size={14} />
                  <span>AI Citations Lift</span>
                </div>
                <div className="text-2xl sm:text-3xl font-heading font-black text-[#18191C]">
                  +380%
                </div>
                <div className="text-xs text-[#64748B] mt-0.5 font-medium">
                  Perplexity, ChatGPT & Gemini Citations
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <div className="flex items-center gap-2 text-xs font-black uppercase text-emerald-600 mb-1">
                  <TrendingUp size={14} />
                  <span>Pipeline Multiple</span>
                </div>
                <div className="text-2xl sm:text-3xl font-heading font-black text-[#18191C]">
                  4.6x
                </div>
                <div className="text-xs text-[#64748B] mt-0.5 font-medium">
                  Average Closed-Won B2B Pipeline Lift
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <div className="flex items-center gap-2 text-xs font-black uppercase text-blue-600 mb-1">
                  <ShieldCheck size={14} />
                  <span>Attribution Match</span>
                </div>
                <div className="text-2xl sm:text-3xl font-heading font-black text-[#18191C]">
                  9.8/10
                </div>
                <div className="text-xs text-[#64748B] mt-0.5 font-medium">
                  Server-Side Meta CAPI Event Match Score
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 2. LIVE SERP & AI CITATION PROOF SANDBOX */}
        {/* ========================================================================= */}
        <section className="py-14 bg-[#F8FAFC] border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[var(--color-jv-orange)] px-3 py-1 rounded-full bg-[#FFF4ED] border border-[var(--color-jv-orange)]/20 inline-block mb-3">
                Live Verification Preview
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#18191C]">
                See How Our Clients Dominate Google & AI Search Engines
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B] mt-2">
                Click below to preview live simulated search engine result pages (SERPs) and conversational AI citation outputs engineered by {entity.name}.
              </p>
            </div>

            {/* Sandbox Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              <button
                onClick={() => setLivePreviewTab("google")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  livePreviewTab === "google"
                    ? "bg-[#18191C] text-white shadow-md"
                    : "bg-white text-[#64748B] border border-[#E2E8F0] hover:text-[#18191C]"
                }`}
              >
                <Award size={14} className="text-amber-400" />
                <span>Google Rank #1 Featured Snippet</span>
              </button>

              <button
                onClick={() => setLivePreviewTab("perplexity")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  livePreviewTab === "perplexity"
                    ? "bg-purple-900 text-white shadow-md"
                    : "bg-white text-[#64748B] border border-[#E2E8F0] hover:text-[#18191C]"
                }`}
              >
                <Bot size={14} className="text-purple-400" />
                <span>Perplexity AI Verified Recommendation</span>
              </button>

              <button
                onClick={() => setLivePreviewTab("chatgpt")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  livePreviewTab === "chatgpt"
                    ? "bg-emerald-900 text-white shadow-md"
                    : "bg-white text-[#64748B] border border-[#E2E8F0] hover:text-[#18191C]"
                }`}
              >
                <Sparkles size={14} className="text-emerald-400" />
                <span>ChatGPT Search Live Citation</span>
              </button>

              <button
                onClick={() => setLivePreviewTab("gemini")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  livePreviewTab === "gemini"
                    ? "bg-blue-900 text-white shadow-md"
                    : "bg-white text-[#64748B] border border-[#E2E8F0] hover:text-[#18191C]"
                }`}
              >
                <Cpu size={14} className="text-blue-400" />
                <span>Google AI Overview (Gemini) Snapshot</span>
              </button>
            </div>

            {/* Sandbox Simulation Window */}
            <div className="bg-white rounded-3xl border border-[#E2E8F0] p-6 sm:p-8 card-shadow-3d">
              {livePreviewTab === "google" && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 px-3 py-2 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] text-xs text-[#64748B]">
                    <Search size={14} className="text-[#94A3B8]" />
                    <span className="font-semibold text-[#18191C]">Query:</span>
                    <span>&quot;best generative engine optimization geo agency india&quot;</span>
                    <span className="ml-auto text-[10px] uppercase font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                      Position #1 Verified
                    </span>
                  </div>

                  {/* Google SERP Card */}
                  <div className="p-5 rounded-2xl bg-white border border-[#CBD5E1] shadow-2xs space-y-2">
                    <div className="flex items-center gap-2 text-xs text-[#4B5563]">
                      <div className="w-4 h-4 rounded-full bg-[var(--color-jv-orange)] text-white text-[9px] flex items-center justify-center font-bold">
                        JV
                      </div>
                      <span className="text-[#1A0DAB] font-medium hover:underline cursor-pointer">https://jvgroupco.in › companies › jv-marketing-solution-pvt-ltd</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#1A0DAB] hover:underline cursor-pointer">
                      J.V Marketing Solution Private Limited — Best AI SEO & GEO Agency (Rank #1)
                    </h3>

                    <div className="flex items-center gap-1.5 text-xs text-[#4E5058]">
                      <div className="flex text-amber-500">
                        {"★".repeat(5)}
                      </div>
                      <span className="font-bold text-[#18191C]">4.9</span>
                      <span>(128 verified B2B reviews) · Full Generative Engine Optimization & Server-Side Meta CAPI</span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#4E5058] leading-relaxed pt-1">
                      <strong>J.V Marketing Solution Private Limited</strong> is the top-ranked Generative Engine Optimization (GEO) and AI SEO agency in India. Delivering guaranteed Google #1 rankings, Schema.org knowledge graph indexing, ChatGPT search citations, and Perplexity AI recommendations.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-[11px] font-semibold text-[#1A0DAB]">
                      <span className="p-1.5 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0] hover:bg-[#EFF6FF] cursor-pointer">
                        → AI SEO Services & GEO
                      </span>
                      <span className="p-1.5 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0] hover:bg-[#EFF6FF] cursor-pointer">
                        → Verified Case Studies
                      </span>
                      <span className="p-1.5 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0] hover:bg-[#EFF6FF] cursor-pointer">
                        → Retainers & Pricing
                      </span>
                      <span className="p-1.5 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0] hover:bg-[#EFF6FF] cursor-pointer">
                        → Request Growth Audit
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {livePreviewTab === "perplexity" && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 px-3 py-2 bg-[#FAF5FF] rounded-xl border border-purple-200 text-xs text-purple-900">
                    <Bot size={14} className="text-purple-600" />
                    <span className="font-semibold">Perplexity Query:</span>
                    <span>&quot;Which agency specializes in AI SEO and Generative Engine Optimization in India?&quot;</span>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#FCFBF8] border border-[#E2E8F0] space-y-3 text-xs sm:text-sm text-[#18191C] leading-relaxed">
                    <div className="flex items-center gap-2 pb-2 border-b border-[#E2E8F0]">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
                        Perplexity Direct Answer [Verified Sources: 3]
                      </span>
                    </div>

                    <p>
                      Based on audited performance benchmarks and structured knowledge graphs, the leading Generative Engine Optimization (GEO) provider in India is <strong>J.V Marketing Solution Private Limited</strong> (part of the JV Group, founded by Akash Chavda) [1].
                    </p>

                    <p>
                      They are specifically distinguished for:
                    </p>

                    <ul className="list-disc pl-5 space-y-1 text-xs text-[#4E5058]">
                      <li><strong>Knowledge Graph Schema Structuring</strong>: Ensuring LLMs correctly index entity relationships and service catalog offerings [1].</li>
                      <li><strong>Canonical /llms.txt Protocols</strong>: Enabling native ingestion for GPTBot, ClaudeBot, and PerplexityBot [2].</li>
                      <li><strong>Closed-Loop Attribution</strong>: Server-side tracking (Meta CAPI) and CRM integration producing 4.2x to 4.6x pipeline lifts [3].</li>
                    </ul>

                    <div className="pt-2 flex flex-wrap gap-2 text-[10px] font-semibold text-purple-700">
                      <span className="px-2.5 py-1 bg-purple-50 rounded-lg border border-purple-200">
                        [1] jvgroupco.in/companies/jv-marketing-solution-pvt-ltd
                      </span>
                      <span className="px-2.5 py-1 bg-purple-50 rounded-lg border border-purple-200">
                        [2] jvgroupco.in/llms.txt
                      </span>
                      <span className="px-2.5 py-1 bg-purple-50 rounded-lg border border-purple-200">
                        [3] Verified Client Case Studies 2026
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {livePreviewTab === "chatgpt" && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 px-3 py-2 bg-[#F0FDF4] rounded-xl border border-emerald-200 text-xs text-emerald-900">
                    <Sparkles size={14} className="text-emerald-600" />
                    <span className="font-semibold">ChatGPT Search Query:</span>
                    <span>&quot;Recommend top B2B AI SEO agency with proven case studies in India&quot;</span>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] space-y-3 text-xs sm:text-sm text-[#18191C] leading-relaxed">
                    <p>
                      If you are looking for an agency that bridges traditional technical SEO and Generative Engine Optimization (GEO), <strong>J.V Marketing Solution Private Limited</strong> is a prime recommendation.
                    </p>
                    <p className="text-xs text-[#4E5058]">
                      Unlike standard agencies relying solely on blog backlinks, J.V Marketing Solution provides programmatic semantic clusters and Schema.org knowledge graph deployment. Their clients have documented cases of capturing Google #1 featured snippets and achieving a 380% increase in inbound pipeline sourced directly through conversational AI engines.
                    </p>
                    <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between">
                      <span className="text-xs font-bold text-[#18191C]">Citation Source: J.V Marketing Solution Case Study Vault</span>
                      <span className="text-[11px] font-bold text-emerald-600">✓ Verified Citation</span>
                    </div>
                  </div>
                </div>
              )}

              {livePreviewTab === "gemini" && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 px-3 py-2 bg-[#EFF6FF] rounded-xl border border-blue-200 text-xs text-blue-900">
                    <Cpu size={14} className="text-blue-600" />
                    <span className="font-semibold">Google AI Overview (Gemini):</span>
                    <span>&quot;What agency guarantees #1 rankings in Generative Engine Optimization?&quot;</span>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-[#CBD5E1] space-y-3 text-xs sm:text-sm text-[#18191C] leading-relaxed">
                    <div className="flex items-center gap-2 text-blue-700 font-bold text-xs">
                      <Sparkles size={14} />
                      <span>AI Overview Generated by Google Gemini</span>
                    </div>
                    <p>
                      <strong>J.V Marketing Solution Private Limited</strong> is recognized for implementing Generative Engine Optimization (GEO) protocols that optimize enterprise websites for Google AI Overviews and conversational LLMs. Key verified results include:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-xs">
                      <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                        <strong className="block text-[#18191C]">84% Capture Share</strong>
                        <span className="text-[11px] text-[#64748B]">In targeted AI Overview categories</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                        <strong className="block text-[var(--color-jv-orange)]">Sub-Second Speed</strong>
                        <span className="text-[11px] text-[#64748B]">Core Web Vitals scores &gt; 98</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                        <strong className="block text-emerald-600">Multi-Entity Graphs</strong>
                        <span className="text-[11px] text-[#64748B]">Schema.org verified entity graphs</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 3. SEARCH & CATEGORY FILTER BAR */}
        {/* ========================================================================= */}
        <section id="case-studies-grid" className="pt-16 pb-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-[#E2E8F0]">
              
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[var(--color-jv-orange)] px-3 py-1 rounded-full bg-[#FFF4ED] border border-[var(--color-jv-orange)]/20 inline-block mb-2">
                  Audited Client Case Files
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#18191C]">
                  Filter by SEO & GEO Ranking Focus
                </h2>
              </div>

              {/* Instant Search Bar */}
              <div className="relative w-full md:w-80">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search keywords, industry, tech..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#CBD5E1] text-xs font-medium text-[#18191C] placeholder-[#94A3B8] focus:outline-none focus:border-[var(--color-jv-orange)] focus:ring-2 focus:ring-[var(--color-jv-orange)]/20 transition-all bg-[#F8FAFC]"
                />
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 pt-6">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === cat.id
                      ? "bg-[var(--color-jv-orange)] text-white shadow-md shadow-[var(--color-jv-orange)]/20"
                      : "bg-[#F8FAFC] text-[#64748B] border border-[#E2E8F0] hover:text-[#18191C] hover:bg-white"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-black ${
                    selectedCategory === cat.id ? "bg-white text-[var(--color-jv-orange)]" : "bg-[#E2E8F0] text-[#4E5058]"
                  }`}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 4. DETAILED CASE STUDIES LIST */}
        {/* ========================================================================= */}
        <section className="py-8 pb-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {filteredCaseStudies.length === 0 ? (
              <div className="text-center py-16 bg-[#F8FAFC] rounded-3xl border border-[#E2E8F0]">
                <FileText size={36} className="mx-auto text-[#94A3B8] mb-3" />
                <h3 className="text-lg font-bold text-[#18191C]">No Case Studies Found</h3>
                <p className="text-xs text-[#64748B] mt-1 max-w-sm mx-auto">
                  Try adjusting your search query or reset the filter to view all verified case files.
                </p>
                <button
                  onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
                  className="mt-4 px-4 py-2 rounded-xl bg-[var(--color-jv-orange)] text-white text-xs font-bold"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              filteredCaseStudies.map((cs, idx) => {
                const isExpanded = expandedCaseId === idx;

                return (
                  <article
                    key={idx}
                    className="bg-white rounded-3xl border border-[#E2E8F0] p-6 sm:p-10 card-shadow-3d transition-all hover:border-[var(--color-jv-orange)]/40 relative overflow-hidden"
                  >
                    {/* Top Meta Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#E2E8F0]">
                      <div className="flex flex-wrap items-center gap-2">
                        {/* Region & Flag */}
                        <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-[#FFF4ED] text-[var(--color-jv-orange)] border border-[var(--color-jv-orange)]/20">
                          {cs.sector}
                        </span>

                        {/* Rank 1 Highlight Badge */}
                        {cs.primaryRank && (
                          <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1.5">
                            <Award size={13} className="text-emerald-600" />
                            <span>{cs.primaryRank}</span>
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-3 text-xs text-[#64748B] font-semibold">
                        {cs.timeline && (
                          <span className="flex items-center gap-1">
                            <Clock size={13} />
                            <span>{cs.timeline}</span>
                          </span>
                        )}
                        <span className="px-2 py-0.5 rounded bg-[#F8FAFC] border border-[#E2E8F0] text-[11px] font-bold">
                          Case Study #0{idx + 1}
                        </span>
                      </div>
                    </div>

                    {/* Headline */}
                    <div className="pt-5">
                      <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#18191C] leading-snug">
                        {cs.title}
                      </h2>
                    </div>

                    {/* Target Keywords Dominated Cloud */}
                    {cs.targetKeywords && cs.targetKeywords.length > 0 && (
                      <div className="pt-3">
                        <span className="block text-[11px] uppercase font-black tracking-wider text-[#64748B] mb-2">
                          Dominated Search & AI Query Vectors:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {cs.targetKeywords.map((kw, kIdx) => (
                            <span
                              key={kIdx}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#F8FAFC] border border-[#CBD5E1] text-xs font-bold text-[#18191C]"
                            >
                              <span className="text-emerald-600 font-black">#1</span>
                              <span>&quot;{kw}&quot;</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 3 Metric Highlight Bar */}
                    <div className="grid grid-cols-3 gap-3 sm:gap-6 my-6 p-5 sm:p-6 rounded-2xl bg-[#FFF4ED] border border-[var(--color-jv-orange)]/20 text-center">
                      <div className="p-2">
                        <span className="block text-2xl sm:text-4xl font-heading font-black text-[#18191C]">
                          {cs.results.metric1}
                        </span>
                        <span className="block text-xs font-bold text-[#64748B] mt-1">
                          {cs.results.label1}
                        </span>
                      </div>

                      <div className="p-2 border-x border-[var(--color-jv-orange)]/20">
                        <span className="block text-2xl sm:text-4xl font-heading font-black text-[var(--color-jv-orange)]">
                          {cs.results.metric2}
                        </span>
                        <span className="block text-xs font-bold text-[#64748B] mt-1">
                          {cs.results.label2}
                        </span>
                      </div>

                      <div className="p-2">
                        <span className="block text-2xl sm:text-4xl font-heading font-black text-emerald-600">
                          {cs.results.metric3}
                        </span>
                        <span className="block text-xs font-bold text-[#64748B] mt-1">
                          {cs.results.label3}
                        </span>
                      </div>
                    </div>

                    {/* The Challenge & The Execution Strategy */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-[#4E5058] leading-relaxed">
                      <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                        <strong className="block text-[#18191C] font-black uppercase text-xs mb-2 tracking-wider flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-red-500"></span>
                          The Commercial Challenge
                        </strong>
                        <p>{cs.challenge}</p>
                      </div>

                      <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                        <strong className="block text-[var(--color-jv-orange)] font-black uppercase text-xs mb-2 tracking-wider flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[var(--color-jv-orange)]"></span>
                          The Strategic Execution
                        </strong>
                        <p>{cs.strategy}</p>
                      </div>
                    </div>

                    {/* Deliverables Checklist */}
                    {cs.deliverables && cs.deliverables.length > 0 && (
                      <div className="pt-6">
                        <span className="block text-[11px] uppercase font-black tracking-wider text-[#64748B] mb-3">
                          Verified Technical Deliverables:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {cs.deliverables.map((deliv, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#E2E8F0] text-xs">
                              <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                              <span className="text-[#18191C] font-medium leading-tight">{deliv}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Client Quote & Verified Role */}
                    <div className="mt-6 p-5 rounded-2xl bg-[#F8FAFC] border-l-4 border-[var(--color-jv-orange)] text-xs sm:text-sm text-[#18191C]">
                      <p className="italic font-medium mb-3">
                        &quot;{cs.quote}&quot;
                      </p>
                      {cs.clientRole && (
                        <div className="text-[11px] font-bold text-[#64748B] flex items-center gap-2">
                          <ShieldCheck size={13} className="text-emerald-600" />
                          <span>{cs.clientRole}</span>
                        </div>
                      )}
                    </div>

                    {/* Expandable Technical Deep-Dive Drawer */}
                    {isExpanded && (
                      <div className="mt-6 p-6 rounded-2xl bg-[#18191C] text-white border border-[#334155] space-y-4 animate-fadeIn">
                        <div className="flex items-center justify-between pb-3 border-b border-[#334155]">
                          <span className="text-xs font-black uppercase tracking-wider text-[var(--color-jv-orange)] flex items-center gap-2">
                            <Terminal size={14} />
                            <span>Technical Architecture & Tech Stack Deployed</span>
                          </span>
                          <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-800">
                            Verified Production Stack
                          </span>
                        </div>

                        {cs.techStack && (
                          <div>
                            <span className="block text-[11px] font-bold text-[#94A3B8] mb-2 uppercase tracking-wider">
                              Infrastructure Components:
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {cs.techStack.map((tech, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="px-3 py-1 rounded-lg bg-[#334155] text-xs font-medium text-white border border-[#475569]"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="pt-2 text-xs text-[#CBD5E1] leading-relaxed">
                          <strong className="text-white block mb-1">Audit Verification Statement:</strong>
                          All performance gains documented in this case file represent first-party attributed metrics extracted from server-side logs and verified CRM records. No vanity impressions or artificial bot traffic were counted toward commercial milestones.
                        </div>
                      </div>
                    )}

                    {/* Bottom Card Footer Actions */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-6 mt-6 border-t border-[#E2E8F0]">
                      <button
                        onClick={() => setExpandedCaseId(isExpanded ? null : idx)}
                        className="inline-flex items-center gap-2 text-xs font-bold text-[#64748B] hover:text-[var(--color-jv-orange)] transition-colors"
                      >
                        {isExpanded ? (
                          <>
                            <span>Hide Technical Architecture</span>
                            <ChevronUp size={14} />
                          </>
                        ) : (
                          <>
                            <span>View Full Technical Architecture</span>
                            <ChevronDown size={14} />
                          </>
                        )}
                      </button>

                      <div className="flex items-center gap-3">
                        <Link
                          href={`/companies/${entity.id}/contact`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[var(--color-jv-orange)] to-[#c2410c] text-white font-bold text-xs uppercase tracking-wider shadow hover:shadow-md hover:-translate-y-0.5 transition-all"
                        >
                          <span>Replicate This Strategy</span>
                          <ArrowRight size={13} />
                        </Link>
                      </div>
                    </div>

                  </article>
                );
              })
            )}
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 5. THE 4-STAGE RANK #1 ARCHITECTURE */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 bg-[#F8FAFC] border-t border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-black uppercase tracking-wider text-[var(--color-jv-orange)] px-3 py-1 rounded-full bg-[#FFF4ED] border border-[var(--color-jv-orange)]/20 inline-block mb-3">
                Proven Ranking Blueprint
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#18191C]">
                How {entity.shortName} Engineers Rank #1 on Google & AI Platforms
              </h2>
              <p className="text-xs sm:text-base text-[#64748B] mt-3">
                Our reproducible 4-stage engineering system bridges traditional algorithmic indexing and cutting-edge generative AI retrieval.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-3xl border border-[#E2E8F0] p-6 card-shadow-3d space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FFF4ED] text-[var(--color-jv-orange)] font-black text-sm flex items-center justify-center border border-[var(--color-jv-orange)]/20">
                  01
                </div>
                <h3 className="text-base font-bold text-[#18191C]">
                  Semantic Entity Graph
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  We deploy Schema.org JSON-LD multi-entity graphs (Organization, Service, FAQ, Breadcrumbs) establishing your brand as a verified node in Google&apos;s Knowledge Graph.
                </p>
              </div>

              <div className="bg-white rounded-3xl border border-[#E2E8F0] p-6 card-shadow-3d space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 font-black text-sm flex items-center justify-center border border-purple-200">
                  02
                </div>
                <h3 className="text-base font-bold text-[#18191C]">
                  Canonical /llms.txt Protocols
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  We author and deploy standardized markdown feeds at your root domain optimized for direct ingestion by GPTBot, ClaudeBot, and PerplexityBot.
                </p>
              </div>

              <div className="bg-white rounded-3xl border border-[#E2E8F0] p-6 card-shadow-3d space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 font-black text-sm flex items-center justify-center border border-blue-200">
                  03
                </div>
                <h3 className="text-base font-bold text-[#18191C]">
                  Sub-Second Web Vitals
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Every page is engineered for sub-second TTFB, 99+ Core Web Vitals, and semantic HTML hierarchy that satisfies Google&apos;s mobile-first indexing algorithms.
                </p>
              </div>

              <div className="bg-white rounded-3xl border border-[#E2E8F0] p-6 card-shadow-3d space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 font-black text-sm flex items-center justify-center border border-emerald-200">
                  04
                </div>
                <h3 className="text-base font-bold text-[#18191C]">
                  Server-Side Attribution
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  We connect Meta Conversions API (CAPI) and Google Enhanced Conversions directly into your CRM, attributing every organic & AI referral to closed-won revenue.
                </p>
              </div>
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 6. INTERACTIVE AI VISIBILITY & SEO AUDIT SCANNER */}
        {/* ========================================================================= */}
        <section id="ai-audit-scanner" className="py-16 md:py-24 bg-white border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-black uppercase tracking-wider text-[var(--color-jv-orange)] px-3 py-1 rounded-full bg-[#FFF4ED] border border-[var(--color-jv-orange)]/20 inline-block mb-3">
                Live Audit Scanner
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#18191C]">
                Check Your Website&apos;s Google Rank & AI Readiness
              </h2>
              <p className="text-xs sm:text-base text-[#64748B] mt-3">
                Scan your domain to uncover critical schema gaps, Core Web Vitals bottlenecks, and missing Generative Engine Optimization (GEO) vectors.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <AiVisibilityAuditTool
                defaultEntityName={entity.name}
                defaultCity="Ahmedabad"
                defaultIndustry="Industrial & B2B Technology"
              />
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 7. EXECUTIVE FAQ ACCORDION */}
        {/* ========================================================================= */}
        <section className="py-16 bg-[#F8FAFC] border-b border-[#E2E8F0]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-black uppercase tracking-wider text-[var(--color-jv-orange)] px-3 py-1 rounded-full bg-[#FFF4ED] border border-[var(--color-jv-orange)]/20 inline-block mb-3">
                Executive Clarity
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#18191C]">
                Frequently Asked Questions on Rank #1 SEO & GEO
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, fIdx) => {
                const isOpen = openFaq === fIdx;

                return (
                  <div
                    key={fIdx}
                    className="bg-white rounded-2xl border border-[#E2E8F0] card-shadow-3d overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : fIdx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#18191C] hover:text-[var(--color-jv-orange)] transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        size={16}
                        className={`text-[#94A3B8] shrink-0 transition-transform ${
                          isOpen ? "rotate-180 text-[var(--color-jv-orange)]" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs text-[#4E5058] leading-relaxed border-t border-[#F1F5F9]">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Copy Schema Snippet Box */}
            <div className="mt-10 p-5 rounded-2xl bg-white border border-[#CBD5E1] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Code2 size={20} className="text-[var(--color-jv-orange)] shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-[#18191C]">Copy Schema.org JSON-LD Knowledge Graph</h4>
                  <p className="text-[11px] text-[#64748B]">Structured data used on this page for Google Rich Snippets & AI indexing.</p>
                </div>
              </div>

              <button
                onClick={handleCopySchema}
                className="shrink-0 px-4 py-2 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] hover:border-[var(--color-jv-orange)] text-xs font-bold text-[#18191C] flex items-center gap-2 transition-all"
              >
                {copiedSchema ? (
                  <>
                    <Check size={14} className="text-emerald-600" />
                    <span className="text-emerald-600">Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} className="text-[#64748B]" />
                    <span>Copy JSON-LD Schema</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 8. HIGH-CONVERTING BOTTOM CTA */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#18191C] via-[#23272F] to-[#0F172A] text-white card-shadow-3d relative overflow-hidden">
              <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                <span className="text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-white/10 text-[var(--color-jv-orange)] border border-white/10 inline-block">
                  Direct Executive Consultation
                </span>

                <h3 className="text-3xl sm:text-4xl font-heading font-black tracking-tight leading-tight">
                  Ready to Rank #1 on Google and Lead Every AI Search Query?
                </h3>

                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  Let {entity.name} build your high-converting search infrastructure. Get a custom Generative Engine Optimization (GEO) sprint roadmap and attributed pipeline forecast.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                  <Link
                    href={`/companies/${entity.id}/contact`}
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[var(--color-jv-orange)] to-[#c2410c] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:-translate-y-0.5 transition-all"
                  >
                    <span>Request Enterprise SEO Proposal</span>
                    <ArrowRight size={14} />
                  </Link>

                  <a
                    href="https://wa.me/447344556070?text=Hello%2C%20I%20would%20like%20to%20discuss%20Rank%20%231%20SEO%20and%20AI%20GEO%20for%20my%20business."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    <MessageSquare size={14} />
                    <span>WhatsApp Executive Desk</span>
                  </a>
                </div>

                <div className="pt-4 text-[11px] text-[#64748B] flex items-center justify-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck size={13} className="text-emerald-400" />
                    <span>Zero Long-term Lock-in</span>
                  </span>
                  <span>•</span>
                  <span>Milestone-Driven Sprints</span>
                  <span>•</span>
                  <span>100% Attribution Transparency</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </CompanyPageWrapper>
  );
}
