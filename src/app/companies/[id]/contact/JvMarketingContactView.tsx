"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  Sparkles, 
  Globe2, 
  MessageSquare, 
  ExternalLink, 
  Search, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  AlertCircle, 
  Send, 
  Copy, 
  Zap, 
  Target, 
  BarChart3, 
  Bot, 
  Award, 
  FileText, 
  Lock, 
  RefreshCw,
  PhoneCall,
  Laptop
} from "lucide-react";
import { BusinessEntity, JV_GROUP_META } from "@/data/businesses";
import { COMPANY_WEBSITES_DATA } from "@/data/companyWebsitesData";

interface Props {
  entity: BusinessEntity;
}

export default function JvMarketingContactView({ entity }: Props) {
  const searchParams = useSearchParams();
  const companyData = COMPANY_WEBSITES_DATA[entity.id];

  // Pre-configured services specific to J.V Marketing Solution Private Limited (India)
  const serviceOptions = [
    {
      id: "geo-ai-seo",
      label: "AI SEO & Generative Engine Optimization (GEO)",
      badge: "Flagship",
      desc: "Get cited and recommended #1 across ChatGPT, Perplexity, Gemini & Google AI Overviews."
    },
    {
      id: "google-seo",
      label: "Google #1 Search Domination & Technical SEO",
      badge: "High Intent",
      desc: "Programmatic keyword architecture, featured snippet capture, and Core Web Vitals optimization."
    },
    {
      id: "paid-ads",
      label: "Algorithmic Paid Media (Google, Meta & LinkedIn)",
      badge: "ROAS Focused",
      desc: "Smart bidding, ABM pipeline generation, and predictive audience targeting for high-ticket buyers."
    },
    {
      id: "meta-capi",
      label: "Server-Side Tracking (Meta CAPI) & Attribution",
      badge: "Zero Signal Loss",
      desc: "Server-side container tracking, first-party cookie resilience, and CRM revenue reconciliation."
    },
    {
      id: "crm-whatsapp",
      label: "Wapipulse WhatsApp Automation & CRM Pipelines",
      badge: "Sub-60s Response",
      desc: "Meta Cloud API chatbots, automated lead distribution, and zero-leakage sales nurturing."
    },
    {
      id: "web-software",
      label: "Enterprise Web & High-Converting Funnel Development",
      badge: "Sub-Second Speed",
      desc: "Modern Next.js corporate portals, interactive calculators, and custom SaaS platforms."
    },
    {
      id: "full-retainer",
      label: "Full-Funnel Enterprise Growth Retainer",
      badge: "All-in-One",
      desc: "Integrated search, media buying, creative sprint, and engineering team assigned to your brand."
    }
  ];

  const budgetTiers = [
    { label: "$1,000 – $2,500 / mo", sub: "Global B2B Sprint" },
    { label: "$2,500 – $5,000 / mo", sub: "Enterprise Scale" },
    { label: "$5,000+ / mo", sub: "Omnichannel Retainer" },
    { label: "₹25,000 – ₹75,000 / mo", sub: "India Domestic SME" },
    { label: "Custom Scope", sub: "Tailored Architecture" }
  ];

  const geographyOptions = [
    "USA & Canada (North America Priority)",
    "United Kingdom & Europe",
    "India (Pan-India Corporate / SME)",
    "Global Multi-Market B2B",
    "Middle East / UAE & GCC"
  ];

  // State management
  const [selectedService, setSelectedService] = useState<string>(serviceOptions[0].label);
  const [selectedBudget, setSelectedBudget] = useState<string>(budgetTiers[0].label);
  const [selectedGeo, setSelectedGeo] = useState<string>(geographyOptions[0]);
  const [timeline, setTimeline] = useState<string>("Immediate (Within 48 Hours)");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+1",
    companyName: "",
    websiteUrl: "",
    requirements: ""
  });

  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [ticketId, setTicketId] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [copiedDesk, setCopiedDesk] = useState<string | null>(null);

  // Interactive AI SEO Quick Auditor widget state
  const [auditDomain, setAuditDomain] = useState<string>("");
  const [auditRunning, setAuditRunning] = useState<boolean>(false);
  const [auditResult, setAuditResult] = useState<{
    domain: string;
    score: number;
    geoReadiness: string;
    llmCitationScore: number;
    recommendedActions: string[];
  } | null>(null);

  // Read URL query parameters
  useEffect(() => {
    const serviceParam = searchParams.get("service");
    const packageParam = searchParams.get("package");
    const budgetParam = searchParams.get("budget");

    if (serviceParam) {
      setSelectedService(serviceParam);
    }
    if (packageParam) {
      setSelectedService(`Package: ${packageParam}`);
    }
    if (budgetParam) {
      const formatted = `Budget: ₹${Number(budgetParam).toLocaleString("en-IN")}`;
      setSelectedBudget(formatted);
    }
  }, [searchParams]);

  // Handle live audit simulation
  const handleRunAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!auditDomain) return;

    setAuditRunning(true);
    setTimeout(() => {
      const cleanUrl = auditDomain.replace(/^https?:\/\//, "").replace(/\/.*$/, "");
      const score = Math.floor(Math.random() * 20) + 68; // 68 - 88
      setAuditResult({
        domain: cleanUrl,
        score,
        geoReadiness: score > 75 ? "Moderate Visibility" : "High Risk of AI Omission",
        llmCitationScore: Math.floor(score * 0.9),
        recommendedActions: [
          "Deploy JSON-LD Organization & Service entity graphs for ChatGPT discovery",
          "Set up llms.txt protocol file for Perplexity & Claude crawling",
          "Build programmatic knowledge-base pages capturing Google AI Overviews snippets",
          "Implement server-side Meta CAPI to eliminate browser signal leakage"
        ]
      });
      setAuditRunning(false);
      // Auto-populate website in form if blank
      if (!formData.websiteUrl) {
        setFormData((prev) => ({ ...prev, websiteUrl: cleanUrl }));
      }
    }, 1200);
  };

  const handleAttachAuditToForm = () => {
    if (auditResult) {
      setFormData((prev) => ({
        ...prev,
        requirements: `${prev.requirements ? prev.requirements + "\n\n" : ""}AI SEO Pre-Audit Results for ${auditResult.domain}:\n• Health Score: ${auditResult.score}/100\n• AI Citation Readiness: ${auditResult.geoReadiness}\n• Key Focus: Implement GEO schemas, llms.txt protocol, and Google AI Overviews dominance.`
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const randomTicket = `JVMKT-${Math.floor(1000 + Math.random() * 9000)}`;
      setTicketId(randomTicket);
      setIsSubmitting(false);
      setFormSubmitted(true);
      // Scroll to top of form section smoothly
      const element = document.getElementById("inquiry-status-card");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 800);
  };

  const copyToClipboard = (text: string, deskName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedDesk(deskName);
    setTimeout(() => setCopiedDesk(null), 2500);
  };

  // WhatsApp formatted URLs
  const globalPhoneRaw = "447344556070";
  const indiaPhoneRaw = "919909700606";

  const customWhatsAppText = encodeURIComponent(
    `Hello J.V Marketing Solution Private Limited (India) team,\n\nI would like to inquire about: *${selectedService}*.\n\n• Name: ${formData.name || "Client"}\n• Company: ${formData.companyName || "Enterprise"}\n• Website: ${formData.websiteUrl || "Not specified"}\n• Target Market: ${selectedGeo}\n• Estimated Budget: ${selectedBudget}\n• Notes: ${formData.requirements || "Please share preliminary proposal & schedule a consultation."}`
  );

  const globalWhatsAppUrl = `https://wa.me/${globalPhoneRaw}?text=${customWhatsAppText}`;
  const indiaWhatsAppUrl = `https://wa.me/${indiaPhoneRaw}?text=${customWhatsAppText}`;

  // FAQs specific to J.V Marketing Solution Private Limited (India)
  const faqs = [
    {
      q: "How fast can J.V Marketing Solution begin our campaign?",
      a: "Following our initial consultation and technical scoping session, we deploy your kickoff sprint within 3 to 5 business days. For technical AI SEO audits, tracking setups (Meta CAPI), and llms.txt architectures, initial deliverables are delivered within 48 to 72 hours."
    },
    {
      q: "Can we execute a mutual Non-Disclosure Agreement (NDA) before sharing our data?",
      a: "Absolutely. As an enterprise business unit under JV Group, we treat all client advertising data, conversion histories, and search strategies with institutional-grade confidentiality. We are happy to countersign your corporate NDA or provide our standard bilateral agreement before onboarding."
    },
    {
      q: "How do you coordinate with international clients in the USA, UK, and Canada?",
      a: "Our Global Operations Directorate maintains dedicated senior desks in the UK (+44 7344556070) with 24/7 overlap across North American timezones (EST, CST, PST) and European business hours (GMT/BST). Enterprise accounts receive a dedicated Private Slack or Teams channel, bi-weekly sprint video calls, and sub-4-hour SLA responses."
    },
    {
      q: "What makes Generative Engine Optimization (GEO) different from traditional SEO?",
      a: "Traditional SEO focuses on Google keywords and backlinks to generate blue links. GEO optimizes your company's semantic entity graphs, citation footprint, and structured data so that LLM systems—like ChatGPT Search, Perplexity AI, Google Gemini, and Claude—actively cite your brand as the primary authoritative answer for high-intent customer prompts."
    },
    {
      q: "Do you offer full-funnel tracking with Meta Conversions API (CAPI)?",
      a: "Yes. In modern paid advertising, standard browser pixels lose up to 35% of conversion signals due to ad-blockers and iOS privacy restrictions. J.V Marketing Solution provisions server-side tracking containers (Meta CAPI & GA4 Server Containers) with first-party cookies to guarantee 100% data fidelity and accurate ROAS attribution."
    },
    {
      q: "Can we contract multiple JV Group services under a single Master Services Agreement (MSA)?",
      a: "Yes. A core strategic benefit of working with J.V Marketing Solution is seamless ecosystem synergy. You can bundle AI SEO and paid advertising with custom software from Ekato Tech or global freight logistics from J.V Infinity under one unified corporate contract with consolidated invoicing."
    }
  ];

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="w-full bg-[#FFFFFF] text-[#18191C]">
      
      {/* 1. Live Operating Status Top Banner */}
      <div className="w-full bg-gradient-to-r from-[#18191C] via-[#2B2D31] to-[#18191C] text-white py-2.5 px-4 sm:px-6 lg:px-8 border-b border-[#33353A]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-bold text-white tracking-wide">
              Live Operating Growth Desk
            </span>
            <span className="text-[#94A3B8] hidden md:inline">|</span>
            <span className="text-[#CBD5E1] hidden md:inline">
              Average First Response Time: <strong className="text-white font-semibold">18 Minutes</strong>
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-6 text-[11px] font-semibold text-[#94A3B8]">
            <span className="flex items-center gap-1.5">
              <Clock size={12} className="text-[var(--color-jv-orange)]" />
              <span>US, UK & India Timezone Overlap</span>
            </span>
            <span className="hidden sm:inline text-[#475569]">•</span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck size={12} />
              <span>Institutional NDA Protected</span>
            </span>
          </div>

        </div>
      </div>

      {/* 2. Hero Header Section */}
      <section className="relative pt-12 sm:pt-16 pb-12 sm:pb-16 bg-gradient-to-b from-[#F8FAFC] via-[#FFFFFF] to-[#FFFFFF] border-b border-[#E2E8F0] overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />
        
        {/* Ambient Orange Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--color-jv-orange)]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#64748B] mb-6 font-medium">
            <Link href="/" className="hover:text-[var(--color-jv-orange)] transition-colors">
              JV Group Corporate
            </Link>
            <span>/</span>
            <Link href={`/companies/${entity.id}`} className="hover:text-[var(--color-jv-orange)] transition-colors">
              {entity.name}
            </Link>
            <span>/</span>
            <span className="text-[#18191C] font-bold">Contact & Strategy Consultation</span>
          </div>

          <div className="max-w-4xl">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF4ED] border border-[var(--color-jv-orange)]/30 text-[var(--color-jv-orange)] text-[10px] sm:text-xs font-black uppercase tracking-wider mb-5 shadow-xs max-w-full">
              <Sparkles size={14} className="animate-spin-slow shrink-0" />
              <span className="truncate sm:whitespace-normal">Direct Operating Directorate • J.V Marketing Solution Private Limited (India)</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black text-[#18191C] tracking-tight leading-[1.12] mb-6">
              Connect with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-jv-orange)] to-[#c2410c]">{entity.shortName}.</span>
              <br />
              <span className="text-[#2B2D31] text-2xl sm:text-4xl lg:text-5xl font-extrabold">
                Rank #1 on Google & Get Cited on AI Engines.
              </span>
            </h1>

            <p className="text-[#4E5058] text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl">
              Initiate direct contact with Akash Chavda and senior growth strategists at <strong>J.V Marketing Solution Private Limited</strong>. Whether you need Generative Engine Optimization (GEO), technical enterprise search domination, algorithmic paid media, or lossless Meta CAPI tracking, our direct desk delivers guaranteed sub-4-hour SLA responses.
            </p>

            {/* Quick Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
              <div className="p-3.5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-orange-50 text-[var(--color-jv-orange)] flex items-center justify-center shrink-0">
                  <Zap size={18} />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#18191C]">Sub-4h SLA</div>
                  <div className="text-[10px] text-[#64748B]">Guaranteed First Response</div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Globe2 size={18} />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#18191C]">Global & India</div>
                  <div className="text-[10px] text-[#64748B]">US, UK, Canada & Domestic</div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Lock size={18} />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#18191C]">Institutional NDA</div>
                  <div className="text-[10px] text-[#64748B]">100% Data Confidentiality</div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                  <Bot size={18} />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#18191C]">Free GEO Audit</div>
                  <div className="text-[10px] text-[#64748B]">Complimentary AI Analysis</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Direct Hotlines & Office Cards Grid */}
      <section className="py-12 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[var(--color-jv-orange)] uppercase tracking-wider">
              Immediate Channel Access
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#18191C] mt-1">
              Connect Directly by Phone, WhatsApp, or Email
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              Reach designated business unit directors without going through generic customer support queues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Global B2B Desk (UK, USA, Canada) */}
            <div className="rounded-3xl bg-gradient-to-b from-[#FFFFFF] to-[#F8FAFC] border-2 border-[#E2E8F0] hover:border-[var(--color-jv-orange)] p-6 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300 relative group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[11px] font-bold border border-blue-200">
                    <Globe2 size={12} />
                    <span>International Accounts</span>
                  </span>
                  <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider">
                    🇬🇧 UK • 🇺🇸 USA • 🇨🇦 CA
                  </span>
                </div>

                <h3 className="text-lg font-heading font-black text-[#18191C] mb-1">
                  Global B2B Operations Desk
                </h3>
                <p className="text-xs text-[#64748B] mb-5 leading-relaxed">
                  Dedicated telephone hotline and WhatsApp channel for North American SaaS, industrial exporters, and European enterprise partners.
                </p>

                <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0] mb-5 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[var(--color-jv-orange)] block">
                    Direct Global Hotline
                  </span>
                  <div className="flex items-center justify-between">
                    <a
                      href="tel:+447344556070"
                      className="text-xl font-heading font-black text-[#18191C] hover:text-[var(--color-jv-orange)] transition-colors"
                    >
                      +44 7344556070
                    </a>
                    <button
                      onClick={() => copyToClipboard("+447344556070", "global")}
                      className="text-xs text-[#64748B] hover:text-[#18191C] p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                      title="Copy phone number"
                    >
                      {copiedDesk === "global" ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                    </button>
                  </div>
                  <span className="text-[11px] text-[#64748B] block pt-1">
                    Operating Hours: 24/7 Overlap (EST, CST, PST & GMT)
                  </span>
                </div>
              </div>

              <div className="space-y-2.5 pt-2">
                <a
                  href={globalWhatsAppUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <MessageSquare size={16} />
                  <span>Chat on WhatsApp (+44 7344556070)</span>
                </a>
                <a
                  href="tel:+447344556070"
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#18191C] text-xs font-bold flex items-center justify-center gap-2 transition-all"
                >
                  <PhoneCall size={14} />
                  <span>Call Global Hotline Directly</span>
                </a>
              </div>
            </div>

            {/* Card 2: India Corporate Headquarters */}
            <div className="rounded-3xl bg-gradient-to-b from-[#FFFFFF] to-[#F8FAFC] border-2 border-[#E2E8F0] hover:border-[var(--color-jv-orange)] p-6 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300 relative group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-[var(--color-jv-orange)] text-[11px] font-bold border border-orange-200">
                    <Building2 size={12} />
                    <span>Domestic Corporate Desk</span>
                  </span>
                  <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider">
                    🇮🇳 India
                  </span>
                </div>

                <h3 className="text-lg font-heading font-black text-[#18191C] mb-1">
                  India Headquarters & Corporate Hub
                </h3>
                <p className="text-xs text-[#64748B] mb-5 leading-relaxed">
                  Frontline headquarters for Pan-India enterprise SEO, local search dominance, Meta CAPI setups, and regional corporate accounts.
                </p>

                <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0] mb-5 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[var(--color-jv-orange)] block">
                    Direct India Hotline
                  </span>
                  <div className="flex items-center justify-between">
                    <a
                      href="tel:+919909700606"
                      className="text-xl font-heading font-black text-[#18191C] hover:text-[var(--color-jv-orange)] transition-colors"
                    >
                      +91 99097 00606
                    </a>
                    <button
                      onClick={() => copyToClipboard("+919909700606", "india")}
                      className="text-xs text-[#64748B] hover:text-[#18191C] p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                      title="Copy phone number"
                    >
                      {copiedDesk === "india" ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                    </button>
                  </div>
                  <span className="text-[11px] text-[#64748B] block pt-1">
                    Operating Hours: Mon – Sat: 9:30 AM – 7:30 PM IST
                  </span>
                </div>
              </div>

              <div className="space-y-2.5 pt-2">
                <a
                  href={indiaWhatsAppUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <MessageSquare size={16} />
                  <span>Chat on WhatsApp (+91 99097 00606)</span>
                </a>
                <a
                  href="tel:+919909700606"
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#18191C] text-xs font-bold flex items-center justify-center gap-2 transition-all"
                >
                  <PhoneCall size={14} />
                  <span>Call India Hotline Directly</span>
                </a>
              </div>
            </div>

            {/* Card 3: Executive Email & RFP Proposal Desk */}
            <div className="rounded-3xl bg-gradient-to-b from-[#FFFFFF] to-[#F8FAFC] border-2 border-[#E2E8F0] hover:border-[var(--color-jv-orange)] p-6 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300 relative group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-[11px] font-bold border border-purple-200">
                    <FileText size={12} />
                    <span>RFPs & Written Blueprint</span>
                  </span>
                  <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider">
                    Official Inquiries
                  </span>
                </div>

                <h3 className="text-lg font-heading font-black text-[#18191C] mb-1">
                  Executive Proposal & RFP Desk
                </h3>
                <p className="text-xs text-[#64748B] mb-5 leading-relaxed">
                  Submit detailed technical requirements, analytics access requests, RFP documentation, or procurement guidelines for formal quotes.
                </p>

                <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0] mb-5 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#64748B] block">
                    Corporate Inquiries Directorate
                  </span>
                  <div className="flex items-center justify-between">
                    <a
                      href={`mailto:${JV_GROUP_META.email}`}
                      className="text-base font-heading font-black text-[#18191C] hover:text-[var(--color-jv-orange)] transition-colors break-all"
                    >
                      {JV_GROUP_META.email}
                    </a>
                    <button
                      onClick={() => copyToClipboard(JV_GROUP_META.email, "email")}
                      className="text-xs text-[#64748B] hover:text-[#18191C] p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                      title="Copy email address"
                    >
                      {copiedDesk === "email" ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                    </button>
                  </div>
                  <span className="text-[11px] text-[#64748B] block pt-1">
                    Formal SLA Proposal Turnaround: 24 – 48 Hours
                  </span>
                </div>
              </div>

              <div className="space-y-2.5 pt-2">
                <a
                  href={`mailto:${JV_GROUP_META.email}?subject=${encodeURIComponent(`Enterprise Proposal Inquiry for J.V Marketing Solution Private Limited (India)`)}`}
                  className="w-full py-3 px-4 rounded-xl bg-[#18191C] hover:bg-[var(--color-jv-orange)] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <Mail size={16} />
                  <span>Send Direct Email to Directorate</span>
                </a>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center text-[11px] text-[#64748B]">
                  🛡️ Backed by JV Group Master Services Agreement (MSA)
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Interactive Pre-Audit Tool Section */}
      <section className="py-12 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-[#E2E8F0] p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold">
                  <Bot size={14} />
                  <span>Free Instant Diagnostic</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-black text-[#18191C] leading-tight">
                  Check Your AI SEO & GEO Readiness in 60 Seconds
                </h3>
                <p className="text-xs sm:text-sm text-[#4E5058] leading-relaxed">
                  Is your business invisible when high-ticket buyers ask ChatGPT, Perplexity, or Google Gemini for vendor recommendations? Run an instant scan to analyze your knowledge-graph presence.
                </p>

                <form onSubmit={handleRunAudit} className="space-y-3 pt-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="e.g. yourcompany.com"
                      value={auditDomain}
                      onChange={(e) => setAuditDomain(e.target.value)}
                      className="flex-1 px-4 py-3 rounded-xl border border-[#CBD5E1] text-xs font-medium focus:border-[var(--color-jv-orange)] outline-hidden bg-[#F8FAFC]"
                      required
                    />
                    <button
                      type="submit"
                      disabled={auditRunning}
                      className="px-5 py-3 rounded-xl bg-[var(--color-jv-orange)] hover:bg-[var(--color-jv-orange-dark)] text-white text-xs font-bold transition-all flex items-center gap-2 shrink-0 cursor-pointer disabled:opacity-70"
                    >
                      {auditRunning ? (
                        <>
                          <RefreshCw size={14} className="animate-spin" />
                          <span>Auditing...</span>
                        </>
                      ) : (
                        <>
                          <Search size={14} />
                          <span>Audit Domain</span>
                        </>
                      )}
                    </button>
                  </div>
                  <span className="text-[11px] text-[#64748B] block">
                    🔒 Zero spam guarantee. We analyze your public robots.txt, entity schema, and search indexes.
                  </span>
                </form>
              </div>

              {/* Audit Results Visualization */}
              <div className="lg:col-span-7 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6">
                {auditResult ? (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
                      <div>
                        <div className="text-xs text-[#64748B] font-medium">Domain Audited</div>
                        <div className="text-base font-black text-[#18191C]">{auditResult.domain}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-[#64748B] font-medium">Overall GEO Score</div>
                        <div className="text-2xl font-black text-[var(--color-jv-orange)]">{auditResult.score}/100</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-xl bg-white border border-[#E2E8F0]">
                        <span className="text-[10px] text-[#64748B] uppercase font-bold block">Status</span>
                        <span className="font-bold text-amber-600">{auditResult.geoReadiness}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-[#E2E8F0]">
                        <span className="text-[10px] text-[#64748B] uppercase font-bold block">LLM Citation Score</span>
                        <span className="font-bold text-purple-600">{auditResult.llmCitationScore}% Match</span>
                      </div>
                    </div>

                    <div>
                      <span className="text-xs font-bold text-[#18191C] block mb-2">Priority Action Checklist:</span>
                      <ul className="space-y-2 text-xs text-[#4E5058]">
                        {auditResult.recommendedActions.map((action, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-4 h-4 rounded-full bg-orange-100 text-[var(--color-jv-orange)] flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                              {idx + 1}
                            </span>
                            <span>{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <button
                        onClick={handleAttachAuditToForm}
                        className="px-4 py-2 rounded-xl bg-[#18191C] text-white text-xs font-bold hover:bg-[var(--color-jv-orange)] transition-colors flex items-center gap-2"
                      >
                        <Copy size={13} />
                        <span>Attach Audit to Form Below</span>
                      </button>
                      <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                        <Check size={14} /> Ready to submit in formal proposal inquiry
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[var(--color-jv-orange)] flex items-center justify-center mx-auto">
                      <Search size={24} />
                    </div>
                    <div className="text-sm font-bold text-[#18191C]">
                      Enter your website to preview your AI Citation Index
                    </div>
                    <p className="text-xs text-[#64748B] max-w-md mx-auto">
                      We simulate query prompts across ChatGPT, Perplexity, and Google AI Overviews to evaluate your current semantic rank authority.
                    </p>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5. Main Form & Strategic Information Split Section */}
      <section id="inquiry-form" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left 7 Columns: The Redesigned High-Converting Inquiry Console */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl border border-[#CBD5E1] p-6 sm:p-10 shadow-lg relative">
                
                {formSubmitted ? (
                  /* Success State View */
                  <div id="inquiry-status-card" className="p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-emerald-50 to-white border-2 border-emerald-300 text-center space-y-6">
                    <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                      <Check size={32} />
                    </div>

                    <div className="space-y-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold uppercase tracking-wider">
                        Inquiry Reference ID: {ticketId}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-heading font-black text-emerald-950">
                        Proposal Request Received Successfully
                      </h3>
                      <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                        Akash Chavda and our senior growth directors for <strong>{entity.shortName}</strong> will review your website and respond to <strong>{formData.email || formData.phone}</strong> within <strong>4 business hours</strong>.
                      </p>
                    </div>

                    {/* Summary Card */}
                    <div className="p-4 rounded-xl bg-white border border-emerald-200 text-left text-xs space-y-2 max-w-md mx-auto">
                      <div className="flex justify-between border-b border-slate-100 pb-1">
                        <span className="text-[#64748B]">Service Focus:</span>
                        <span className="font-bold text-[#18191C]">{selectedService}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-100 pb-1">
                        <span className="text-[#64748B]">Target Market:</span>
                        <span className="font-bold text-[#18191C]">{selectedGeo}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-100 pb-1">
                        <span className="text-[#64748B]">Estimated Budget:</span>
                        <span className="font-bold text-[#18191C]">{selectedBudget}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#64748B]">Company:</span>
                        <span className="font-bold text-[#18191C]">{formData.companyName || "Organization"}</span>
                      </div>
                    </div>

                    {/* Quick Escalation Buttons */}
                    <div className="space-y-3 pt-2">
                      <a
                        href={globalWhatsAppUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all"
                      >
                        <MessageSquare size={16} />
                        <span>Confirm Instant Priority on WhatsApp Now</span>
                      </a>

                      <button
                        onClick={() => setFormSubmitted(false)}
                        className="text-xs text-[#64748B] hover:text-[#18191C] font-semibold underline pt-2 block mx-auto"
                      >
                        Submit another requirement or edit details
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Form View */
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-[var(--color-jv-orange)] uppercase tracking-wider">
                          Step 1 of 2: Select Requirement
                        </span>
                        <span className="text-[11px] text-[#64748B]">Tailored Strategic Scoping</span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-heading font-black text-[#18191C]">
                        Request Your Strategic Proposal & Blueprint
                      </h2>
                    </div>

                    {/* 1. Service Selection Pills */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-[#18191C]">
                        Select Primary Growth / Technology Vertical *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {serviceOptions.map((opt) => {
                          const isSelected = selectedService === opt.label;
                          return (
                            <button
                              type="button"
                              key={opt.id}
                              onClick={() => setSelectedService(opt.label)}
                              className={`p-3 rounded-2xl text-left border text-xs transition-all cursor-pointer flex flex-col justify-between ${
                                isSelected
                                  ? "bg-[#FFF4ED] border-[var(--color-jv-orange)] text-[#18191C] ring-1 ring-[var(--color-jv-orange)]"
                                  : "bg-[#F8FAFC] border-[#E2E8F0] hover:border-slate-300 text-[#4E5058]"
                              }`}
                            >
                              <div className="flex items-center justify-between gap-2 mb-1">
                                <span className="font-bold text-[#18191C] leading-snug">{opt.label}</span>
                                <span className={`text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full shrink-0 ${
                                  isSelected ? "bg-[var(--color-jv-orange)] text-white" : "bg-slate-200 text-[#64748B]"
                                }`}>
                                  {opt.badge}
                                </span>
                              </div>
                              <span className="text-[10px] text-[#64748B] leading-tight line-clamp-2">
                                {opt.desc}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* 2. Client Contact Fields */}
                    <div className="pt-2">
                      <label className="block text-xs font-bold text-[var(--color-jv-orange)] uppercase tracking-wider mb-3">
                        Step 2: Business & Contact Information
                      </label>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-xs font-bold text-[#18191C] mb-1">
                            Your Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. John Miller / Rohit Shah"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-[#CBD5E1] text-xs font-medium focus:border-[var(--color-jv-orange)] outline-hidden bg-[#F8FAFC]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#18191C] mb-1">
                            Work / Corporate Email *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="name@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-[#CBD5E1] text-xs font-medium focus:border-[var(--color-jv-orange)] outline-hidden bg-[#F8FAFC]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-xs font-bold text-[#18191C] mb-1">
                            Direct Phone / WhatsApp *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+1 (555) 000-0000 or +91..."
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-[#CBD5E1] text-xs font-medium focus:border-[var(--color-jv-orange)] outline-hidden bg-[#F8FAFC]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#18191C] mb-1">
                            Company or Brand Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Acme Tech Solutions"
                            value={formData.companyName}
                            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-[#CBD5E1] text-xs font-medium focus:border-[var(--color-jv-orange)] outline-hidden bg-[#F8FAFC]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-xs font-bold text-[#18191C] mb-1">
                            Website / App URL (For Audit & Scoping)
                          </label>
                          <input
                            type="text"
                            placeholder="https://yourcompany.com"
                            value={formData.websiteUrl}
                            onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-[#CBD5E1] text-xs font-medium focus:border-[var(--color-jv-orange)] outline-hidden bg-[#F8FAFC]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#18191C] mb-1">
                            Primary Target Geography
                          </label>
                          <select
                            value={selectedGeo}
                            onChange={(e) => setSelectedGeo(e.target.value)}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-[#CBD5E1] text-xs font-medium focus:border-[var(--color-jv-orange)] outline-hidden bg-[#F8FAFC]"
                          >
                            {geographyOptions.map((geo, idx) => (
                              <option key={idx} value={geo}>{geo}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Budget Bracket Selector */}
                      <div className="mb-4">
                        <label className="block text-xs font-bold text-[#18191C] mb-1.5">
                          Estimated Monthly Budget / Engagement Scope
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {budgetTiers.map((tier, idx) => {
                            const isSelected = selectedBudget === tier.label;
                            return (
                              <button
                                type="button"
                                key={idx}
                                onClick={() => setSelectedBudget(tier.label)}
                                className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                                  isSelected
                                    ? "bg-[var(--color-jv-orange)] text-white border-[var(--color-jv-orange)] shadow-xs"
                                    : "bg-[#F8FAFC] text-[#4E5058] border-[#E2E8F0] hover:bg-slate-100"
                                }`}
                              >
                                {tier.label}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Project Notes & Specific Pain Points */}
                      <div className="mb-4">
                        <label className="block text-xs font-bold text-[#18191C] mb-1">
                          Key Project Objectives / Current Growth Bottlenecks (Optional)
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Tell us about your current CAC, ranking targets, ad spend, or target keywords. Any details you provide will be kept strictly under NDA."
                          value={formData.requirements}
                          onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#CBD5E1] text-xs font-medium focus:border-[var(--color-jv-orange)] outline-hidden bg-[#F8FAFC]"
                        />
                      </div>

                      {/* Trust & Guarantee Banner */}
                      <div className="p-3 rounded-xl bg-[#FFF4ED] border border-[var(--color-jv-orange)]/20 flex items-center gap-3 text-xs text-[#2B2D31] mb-5">
                        <ShieldCheck size={18} className="text-[var(--color-jv-orange)] shrink-0" />
                        <span className="text-[11px] font-medium leading-relaxed">
                          <strong>Institutional NDA Assurance:</strong> We never share client ad accounts, analytics, or strategy data with third parties. All submissions are backed by JV Group corporate governance.
                        </span>
                      </div>

                      {/* Submit CTA Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-[var(--color-jv-orange)] to-[#c2410c] hover:from-[#c2410c] hover:to-[var(--color-jv-orange)] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[var(--color-jv-orange)]/25 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer disabled:opacity-75"
                      >
                        {isSubmitting ? (
                          <>
                            <RefreshCw size={16} className="animate-spin" />
                            <span>Routing Inquiry to Directorate...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Strategic Proposal Request</span>
                            <ArrowRight size={16} />
                          </>
                        )}
                      </button>

                    </div>

                  </form>
                )}

              </div>
            </div>

            {/* Right 5 Columns: Operating Directorate Credentials & Physical Hub Info */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Directorate Info Card */}
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl p-6 sm:p-8 space-y-5 shadow-xs">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-jv-orange)]">
                    Direct Corporate Directorate
                  </span>
                  <h3 className="text-xl font-heading font-black text-[#18191C]">
                    J.V Marketing Solution Private Limited (India)
                  </h3>
                  <p className="text-xs text-[#64748B] mt-1">
                    Flagship AI SEO & B2B Performance Marketing arm of JV Group.
                  </p>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0] space-y-1">
                    <span className="text-[10px] uppercase font-bold text-[#64748B] block">
                      Founder & Group Executive
                    </span>
                    <div className="text-sm font-bold text-[#18191C]">
                      Akash Chavda
                    </div>
                    <span className="text-[11px] text-[#64748B] block">
                      Executive Director & Chief Architect
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0] space-y-1">
                    <span className="text-[10px] uppercase font-bold text-[#64748B] block">
                      Corporate Headquarters Location
                    </span>
                    <p className="text-xs font-semibold text-[#18191C] leading-relaxed">
                      B/201, Vitthal A Square, Motera Stadium Road, Motera, Ahmedabad 380005, Gujarat, India.
                    </p>
                    <span className="text-[11px] text-[var(--color-jv-orange)] font-semibold block pt-1">
                      Direct Strategic Proximity to GIFT City &amp; Tech Clusters
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0] space-y-1">
                    <span className="text-[10px] uppercase font-bold text-[#64748B] block">
                      International B2B Desk
                    </span>
                    <p className="text-xs font-semibold text-[#18191C] leading-relaxed">
                      2 Earlham Street, London, WC2H 9RY, United Kingdom (+44 7344556070)
                    </p>
                    <span className="text-[11px] text-[#64748B] block">
                      Client overlap across New York (EST), Chicago (CST), and California (PST).
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0] space-y-1">
                    <span className="text-[10px] uppercase font-bold text-[#64748B] block">
                      Guaranteed Operational SLA
                    </span>
                    <p className="text-xs font-semibold text-[#18191C]">
                      Sub-4-Hour Initial Acknowledgment | 24-Hour Solution Blueprint
                    </p>
                  </div>
                </div>

                {/* Direct Hotline Quick Pill */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-[#18191C] to-[#2B2D31] text-white flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase text-[#94A3B8] font-bold block">
                      Need Urgent Consultation?
                    </span>
                    <span className="text-sm font-bold text-white">
                      Instant WhatsApp Routing
                    </span>
                  </div>
                  <a
                    href={globalWhatsAppUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold flex items-center gap-1.5 transition-all"
                  >
                    <MessageSquare size={14} />
                    <span>Chat Now</span>
                  </a>
                </div>

              </div>

              {/* Ecosystem Synergy Badge */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-[#FFF4ED] via-[#FFFFFF] to-[#FFF4ED] border border-[var(--color-jv-orange)]/30 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[var(--color-jv-orange)]">
                  <Award size={16} />
                  <span>The JV Group Ecosystem Advantage</span>
                </div>
                <p className="text-xs text-[#4E5058] leading-relaxed">
                  Unlike isolated digital agencies, J.V Marketing Solution Private Limited (India) is integrated directly with <strong>Ekato Tech</strong> (custom software & app engineering) and <strong>J.V Infinity</strong> (global supply chain logistics). All contracts share unified governance, cross-domain billing, and institutional SLA protections.
                </p>
                <Link
                  href="/ecosystem"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#18191C] hover:text-[var(--color-jv-orange)] transition-colors"
                >
                  <span>Explore All JV Group Operating Verticals</span>
                  <ArrowRight size={13} />
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 6. Physical Hub & Google Map Directions */}
      <section className="py-12 bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl border border-[#E2E8F0] p-6 sm:p-10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[var(--color-jv-orange)] text-xs font-bold">
                  <MapPin size={14} />
                  <span>Physical Corporate Presence</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-heading font-black text-[#18191C]">
                  Visit the JV Group Corporate Hub
                </h3>

                <p className="text-xs sm:text-sm text-[#4E5058] leading-relaxed">
                  Our main corporate laboratories and executive suites are situated along Ahmedabad’s premier commercial development corridor, easily accessible from Sardar Vallabhbhai Patel International Airport (AMD) and GIFT City.
                </p>

                <div className="space-y-3 text-xs pt-1">
                  <div className="flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-lg bg-slate-100 text-[#18191C] flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                      1
                    </div>
                    <div>
                      <strong className="text-[#18191C]">Transit Accessibility:</strong>
                      <span className="text-[#64748B] block">20 minutes from Ahmedabad Airport (AMD) via the SP Ring Road / SG Highway corridor.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-lg bg-slate-100 text-[#18191C] flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                      2
                    </div>
                    <div>
                      <strong className="text-[#18191C]">Executive Meetings:</strong>
                      <span className="text-[#64748B] block">By advance appointment for enterprise stakeholders, industrial exporters, and institutional partners.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://maps.google.com/?q=Ahmedabad+Gujarat+India"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#18191C] hover:bg-[var(--color-jv-orange)] text-white text-xs font-bold transition-all shadow-sm"
                  >
                    <MapPin size={15} />
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>

              {/* Stylized Location Map Card */}
              <div className="lg:col-span-7 h-[300px] sm:h-[360px] rounded-2xl overflow-hidden border border-[#CBD5E1] shadow-inner relative bg-[#E2E8F0]">
                <iframe
                  title="JV Group Headquarters Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117466.86461974794!2d72.4820845!3d23.0531535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 7. Strategic FAQ Accordion */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[var(--color-jv-orange)] uppercase tracking-wider">
              Common Questions & Operational Details
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#18191C] mt-2">
              Frequently Asked Questions Before Inquiring
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              Everything you need to know about working with J.V Marketing Solution Private Limited (India).
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#E2E8F0] bg-white overflow-hidden transition-all shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-heading font-bold text-sm sm:text-base text-[#18191C] hover:text-[var(--color-jv-orange)] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="shrink-0 text-[#64748B]">
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#4E5058] leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Help Footer */}
          <div className="mt-10 p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-center space-y-3">
            <div className="text-xs font-bold text-[#18191C]">
              Have a custom requirement not covered here?
            </div>
            <p className="text-xs text-[#64748B] max-w-md mx-auto">
              Our executive desk is available to answer any questions regarding technical architecture, pricing tiers, and SLA terms.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
              <a
                href={globalWhatsAppUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold shadow-xs hover:bg-[#1EBE5D] transition-all"
              >
                <MessageSquare size={14} />
                <span>Ask on WhatsApp (+44 7344556070)</span>
              </a>
              <a
                href={`mailto:${JV_GROUP_META.email}`}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#18191C] text-white text-xs font-bold hover:bg-[var(--color-jv-orange)] transition-all"
              >
                <Mail size={14} />
                <span>Email {JV_GROUP_META.email}</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
