"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { 
  Cpu, 
  Sparkles, 
  ArrowRight, 
  MessageSquare, 
  Phone, 
  CheckCircle2, 
  Check, 
  ShieldCheck, 
  Search, 
  Code2, 
  Bot, 
  Zap, 
  BarChart3,
  Globe2,
  HelpCircle,
  ChevronDown,
  Layers,
  Terminal,
  ExternalLink
} from "lucide-react";
import AiVisibilityAuditTool from "@/components/seo/AiVisibilityAuditTool";
import AmsPageWrapper from "../components/AmsPageWrapper";
import CompanyPageWrapper from "@/components/company/CompanyPageWrapper";
import { BUSINESS_ENTITIES } from "@/data/businesses";

export default function CompanyAiSeoPage() {
  const params = useParams();
  const id = (params?.id as string) || "jv-marketing-solution-pvt-ltd";
  const entity = BUSINESS_ENTITIES.find((b) => b.id === id) || BUSINESS_ENTITIES[1];

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeSchemaTab, setActiveSchemaTab] = useState<string>("geo");

  // Schema Samples for J.V Marketing Solution Private Limited
  const jvSchemaSamples = {
    geo: `{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Generative Engine Optimization (GEO)",
  "serviceType": "AI Search Engine Optimization & Citations",
  "provider": {
    "@type": ["Organization", "Corporation"],
    "name": "J.V Marketing Solution Private Limited",
    "legalName": "J.V Marketing Solution Private Limited",
    "alternateName": ["JV Marketing Pvt Ltd", "J.V. Marketing Solution"],
    "parentOrganization": {
      "@type": "Organization",
      "name": "JV Group",
      "url": "https://jvgroupco.in"
    },
    "founder": {
      "@type": "Person",
      "name": "Akash Chavda"
    },
    "url": "https://jvgroupco.in/companies/jv-marketing-solution-pvt-ltd"
  },
  "areaServed": ["United States", "United Kingdom", "Canada", "India", "Global"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AI SEO & GEO Deliverables",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": "Google #1 Rank & AI Overviews Snippets" },
      { "@type": "Offer", "itemOffered": "ChatGPT Search Citation Engineering" },
      { "@type": "Offer", "itemOffered": "Perplexity AI Source Grounding" },
      { "@type": "Offer", "itemOffered": "Server-Side Meta CAPI Lossless Telemetry" }
    ]
  }
}`,
    organization: `{
  "@context": "https://schema.org",
  "@type": ["Organization", "Corporation", "ProfessionalService"],
  "name": "J.V Marketing Solution Private Limited",
  "url": "https://jvgroupco.in/companies/jv-marketing-solution-pvt-ltd",
  "logo": "https://jvgroupco.in/logos/jv-marketing-solution-pvt-ltd.jpg",
  "telephone": "+447344556070",
  "email": "info@jvgroupco.in",
  "founder": {
    "@type": "Person",
    "name": "Akash Chavda"
  },
  "knowsAbout": [
    "Generative Engine Optimization (GEO)",
    "AI SEO & Google #1 Search Rankings",
    "ChatGPT & Perplexity Source Grounding",
    "Algorithmic B2B Media Buying",
    "Server-Side Meta CAPI Tracking"
  ]
}`
  };

  const amsSchemaSamples = {
    local: `{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "name": "Ahmedabad Marketing Solution",
  "parentOrganization": {
    "@type": "Organization",
    "name": "JV Group"
  },
  "telephone": "+919909700606",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "B/201, Vitthal A Square, Motera Stadium Road, Motera",
    "addressLocality": "Ahmedabad",
    "addressRegion": "Gujarat",
    "addressCountry": "IN"
  },
  "areaServed": ["Ahmedabad", "Gandhinagar", "Sanand", "Changodar", "Surat", "Vadodara"]
}`,
    geo: `{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Generative Engine Optimization",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Ahmedabad Marketing Solution"
  },
  "areaServed": "Gujarat, India"
}`
  };

  // If Ahmedabad Marketing Solution, render AMS specific view
  if (id === "ahmedabad-marketing-solution") {
    return (
      <AmsPageWrapper>
        <div className="w-full py-12 sm:py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF4ED] border border-[var(--color-jv-orange)]/30 text-[var(--color-jv-orange)] text-xs font-bold uppercase tracking-wider mb-4">
                <Cpu size={14} />
                <span>Generative Engine Optimization (GEO) Hub</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-[#18191C] tracking-tight leading-tight mb-4">
                Rank Beyond Blue Links. Dominate AI Search Engines.
              </h1>
              <p className="text-[#4E5058] text-base sm:text-lg leading-relaxed">
                When high-value clients ask <strong>ChatGPT, Google AI Overviews, Perplexity, or Gemini</strong> for recommendations in Ahmedabad and Gujarat, does your business get cited? We engineer your brand&apos;s digital entity footprint so AI models recommend you as the #1 regional authority.
              </p>
            </div>
          </div>
          <AiVisibilityAuditTool defaultEntityName="Ahmedabad Marketing Solution" />
        </div>
      </AmsPageWrapper>
    );
  }

  // Enterprise J.V Marketing Solution Private Limited AI SEO / GEO Experience
  return (
    <CompanyPageWrapper entity={entity}>
      <div className="w-full py-12 sm:py-16 md:py-20">
        
        {/* 1. Page Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF4ED] border border-[var(--color-jv-orange)]/30 text-[var(--color-jv-orange)] text-xs font-mono font-black uppercase tracking-wider mb-4">
              <Sparkles size={14} className="text-[var(--color-jv-orange)] animate-spin-slow" />
              <span>GENERATIVE ENGINE OPTIMIZATION (GEO) &amp; AI SEO</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping ml-0.5" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-[#18191C] tracking-tight leading-tight mb-4">
              Rank #1 on Google.{" "}
              <span className="bg-gradient-to-r from-[var(--color-jv-orange)] via-[#ea580c] to-[#c2410c] bg-clip-text text-transparent">
                Dominate ChatGPT, Perplexity &amp; Gemini.
              </span>
            </h1>

            <p className="text-[#475569] text-base sm:text-lg leading-relaxed">
              <strong>J.V Marketing Solution Private Limited (JV Marketing Pvt Ltd)</strong> engineers high-intent search rankings that span traditional Google Page 1 blue links and real-time generative AI engine citations. When B2B enterprise buyers ask AI models for recommendations in the USA, UK, Canada, and India, we ensure your company is cited as the definitive #1 solution.
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-6">
              <Link
                href={`/companies/${entity.id}#proposal-form`}
                className="px-6 py-3.5 rounded-xl bg-[var(--color-jv-orange)] hover:bg-[#ea580c] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center gap-2 group"
              >
                <span>Request AI SEO &amp; Rank Audit</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`https://wa.me/${entity.phone?.replace(/[^0-9]/g, "") || "447344556070"}?text=Hello%20JV%20Marketing%2C%20I%20want%20to%20rank%20%231%20on%20Google%20and%20AI%20platforms`}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-xs"
              >
                <MessageSquare size={14} />
                <span>WhatsApp Strategy Desk</span>
              </a>
            </div>
          </div>
        </div>

        {/* 2. Interactive AI Visibility Audit Tool */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <AiVisibilityAuditTool defaultEntityName="J.V Marketing Solution Private Limited" />
        </div>

        {/* 3. The 3-Layer GEO & SEO Architecture */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-jv-orange)] block mb-1">
              PROPRIETARY FRAMEWORK
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-slate-900">
              The 3-Layer Search &amp; AI Citation Architecture
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
              How J.V Marketing Solution Private Limited bridges Google algorithms with modern LLMs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 card-shadow-3d hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[var(--color-jv-orange)] mb-4">
                <Search size={22} />
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
                LAYER 01
              </span>
              <h3 className="text-lg font-heading font-black text-slate-900 mb-2">
                Google Page 1 Domination
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Programmatic search architecture, high-intent landing engines, and Google AI Overviews snippet capture.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 font-medium">
                <li className="flex items-center gap-2"><CheckCircle2 size={13} className="text-emerald-500" /> Rank #1 Organic Blue Links</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={13} className="text-emerald-500" /> Google AI Overviews Capture</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={13} className="text-emerald-500" /> Sub-Second Core Web Vitals</li>
              </ul>
            </div>

            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[var(--color-jv-orange)]/60 card-shadow-3d ring-1 ring-[var(--color-jv-orange)]/20 hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF4ED] border border-[var(--color-jv-orange)]/30 flex items-center justify-center text-[var(--color-jv-orange)] mb-4">
                <Bot size={22} />
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--color-jv-orange)] block mb-1">
                LAYER 02 • THE GEO ENGINE
              </span>
              <h3 className="text-lg font-heading font-black text-slate-900 mb-2">
                LLM Knowledge Graph Citations
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Prompt-resistant semantic schema markup and entity triangulation so ChatGPT, Perplexity, and Gemini quote you as the primary authority.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 font-medium">
                <li className="flex items-center gap-2"><CheckCircle2 size={13} className="text-emerald-500" /> ChatGPT Search Citations</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={13} className="text-emerald-500" /> Perplexity Deep Research Sources</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={13} className="text-emerald-500" /> Canonical llms.txt Integration</li>
              </ul>
            </div>

            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 card-shadow-3d hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[var(--color-jv-orange)] mb-4">
                <Cpu size={22} />
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
                LAYER 03
              </span>
              <h3 className="text-lg font-heading font-black text-slate-900 mb-2">
                Server-Side Telemetry (CAPI)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                First-party data resilience streaming closed-won CRM deal stages directly to ad algorithms and attribution engines.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 font-medium">
                <li className="flex items-center gap-2"><CheckCircle2 size={13} className="text-emerald-500" /> Lossless Meta CAPI &amp; GA4 Server</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={13} className="text-emerald-500" /> Sub-60s CRM Webhook Sync</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={13} className="text-emerald-500" /> 99.8% Verified Attribution</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 4. Interactive JSON-LD Schema Showcase */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-slate-900 rounded-3xl p-6 sm:p-9 text-white card-shadow-3d border border-slate-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-jv-orange)]">
                  CODE ARCHITECTURE
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-black text-white mt-1">
                  Structured Entity Schema Deployed by J.V Marketing
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveSchemaTab("geo")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold cursor-pointer transition-all ${
                    activeSchemaTab === "geo"
                      ? "bg-[var(--color-jv-orange)] text-white shadow-xs"
                      : "bg-slate-800 text-slate-300 hover:text-white"
                  }`}
                >
                  Service (GEO) Schema
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSchemaTab("organization")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold cursor-pointer transition-all ${
                    activeSchemaTab === "organization"
                      ? "bg-[var(--color-jv-orange)] text-white shadow-xs"
                      : "bg-slate-800 text-slate-300 hover:text-white"
                  }`}
                >
                  Organization Graph
                </button>
              </div>
            </div>

            <div className="bg-slate-950 rounded-2xl p-4 sm:p-6 overflow-x-auto border border-slate-800">
              <pre className="font-mono text-xs text-amber-300 leading-relaxed">
                {jvSchemaSamples[activeSchemaTab as keyof typeof jvSchemaSamples]}
              </pre>
            </div>
          </div>
        </div>

        {/* 5. Frequently Asked Questions */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-jv-orange)] block mb-1">
              GEO GUIDANCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-slate-900">
              Frequently Asked Questions About AI SEO &amp; GEO
            </h2>
          </div>

          <div className="space-y-3.5">
            {[
              {
                q: "How does J.V Marketing Solution Private Limited rank websites #1 on Google and AI search platforms?",
                a: "We implement our proprietary 3-Layer GEO & SEO Architecture: (1) Technical & Programmatic SEO to capture Google Page 1 blue links and Google AI Overviews, (2) Generative Engine Optimization (GEO) configuring semantic entity graphs and prompt-resistant schemas so ChatGPT, Perplexity, Gemini, and Claude cite your brand as the #1 factual recommendation, and (3) Lossless server-side tracking (Meta CAPI & GA4) with sub-second CRO landing engines."
              },
              {
                q: "What is Generative Engine Optimization (GEO) and why is it essential for 2026?",
                a: "Generative Engine Optimization (GEO) is the next evolution of search optimization. As B2B buyers transition from traditional Google searches to asking conversational AI assistants (ChatGPT, Google Gemini, Perplexity, Claude), GEO ensures your enterprise is explicitly cited and recommended as the definitive answer."
              },
              {
                q: "Can Generative Engine Optimization (GEO) replace traditional Google SEO?",
                a: "No, they operate synergistically. Modern AI models like Google Gemini and ChatGPT Search use traditional Google and Bing web crawlers as real-time retrieval sources. Ranking on Google SERPs is layer one of being cited by conversational AI engines."
              },
              {
                q: "How quickly can J.V Marketing Solution Private Limited improve our AI citations?",
                a: "Once structured entity schemas, canonical llms.txt files, and authoritative source grounding are deployed, AI platforms with real-time web search (ChatGPT Search, Perplexity, Google AI Overviews) reflect updated entity recommendations within 7 to 21 days."
              }
            ].map((faq, fIdx) => (
              <div
                key={fIdx}
                className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === fIdx ? null : fIdx)}
                  className="w-full p-5 text-left font-bold text-sm text-slate-900 flex items-center justify-between gap-3 cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`text-slate-400 transition-transform duration-200 shrink-0 ${
                      openFaq === fIdx ? "rotate-180 text-[var(--color-jv-orange)]" : ""
                    }`}
                  />
                </button>
                {openFaq === fIdx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-12 text-center">
            <Link
              href={`/companies/${entity.id}#proposal-form`}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-[var(--color-jv-orange)] to-[#c2410c] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <span>Request Full AI SEO &amp; GEO Audit from J.V Marketing</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>
    </CompanyPageWrapper>
  );
}
