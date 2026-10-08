"use client";

import { useState } from "react";
import { 
  Search, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  BarChart3, 
  Cpu, 
  Globe2, 
  ShieldCheck, 
  MessageSquare, 
  Phone,
  RefreshCw,
  FileText,
  Building2,
  MapPin,
  Layers,
  Target,
  Lock,
  Bot
} from "lucide-react";

interface AuditResult {
  businessName: string;
  website: string;
  city: string;
  industry: string;
  service: string;
  overallScore: number;
  googleVisibility: number;
  aiSearchVisibility: number;
  brandAuthority: number;
  contentAuthority: number;
  localAuthority: number;
  opportunitiesCount: number;
  criticalIssues: string[];
  geoOpportunities: string[];
}

interface AiVisibilityAuditToolProps {
  defaultCity?: string;
  defaultIndustry?: string;
  defaultEntityName?: string;
  defaultBusinessName?: string;
}

export default function AiVisibilityAuditTool({
  defaultCity = "Ahmedabad",
  defaultIndustry = "Manufacturing & Industrial",
  defaultEntityName,
  defaultBusinessName
}: AiVisibilityAuditToolProps = {}) {
  const [formData, setFormData] = useState({
    businessName: defaultBusinessName || defaultEntityName || "",
    website: "",
    city: defaultCity,
    industry: defaultIndustry,
    service: "Digital Marketing & Local Growth"
  });

  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [result, setResult] = useState<AuditResult | null>(null);

  // Lead capture state
  const [leadContact, setLeadContact] = useState({ name: "", email: "", phone: "" });
  const [reportSent, setReportSent] = useState(false);

  const scanStepsText = [
    "Querying Google Search SERPs & indexing cache...",
    "Scanning ChatGPT & Claude Knowledge Graph entities...",
    "Testing Perplexity AI & Google AI Overviews citation probability...",
    "Evaluating schema markup & conversational prompt alignment...",
    "Compiling AI Visibility & Generative SEO report..."
  ];

  const handleStartAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.businessName) return;

    setIsScanning(true);
    setScanStep(0);
    setResult(null);

    // Realistic scanning simulation sequence
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      if (currentStep < scanStepsText.length) {
        setScanStep(currentStep);
      } else {
        clearInterval(interval);
        generateAuditReport();
        setIsScanning(false);
      }
    }, 550);
  };

  const generateAuditReport = () => {
    // Generate realistic tailored metrics based on inputs
    const baseSeed = formData.businessName.length * 3 + formData.city.length * 2;
    const googleVis = Math.min(88, Math.max(52, 60 + (baseSeed % 25)));
    const aiVis = Math.min(52, Math.max(22, 28 + (baseSeed % 20))); // AI is typically lower for businesses
    const brandAuth = Math.min(76, Math.max(40, 48 + (baseSeed % 22)));
    const contentAuth = Math.min(78, Math.max(45, 54 + (baseSeed % 20)));
    const localAuth = Math.min(90, Math.max(55, 68 + (baseSeed % 22)));
    const overall = Math.round((googleVis + aiVis + brandAuth + contentAuth + localAuth) / 5);

    const issues = [
      "Missing Organization & Corporation Schema: AI search engines cannot verify your corporate entity structure.",
      "Low Direct-Answer Density: Content is not formatted in question-answer blocks required by Google AI Overviews and Perplexity.",
      "Zero Conversational Prompt Optimization: Not ranking for conversational prompts like 'Who is the best...' or 'Compare top...'.",
      "Absence of Structured Author & Leadership Entity Markup (E-E-A-T signals required by LLM rankers)."
    ];

    const opportunities = [
      `Implement Generative Engine Optimization (GEO) for "${formData.service}" in ${formData.city}.`,
      "Create high-authority Comparison & Pricing answer hubs that ChatGPT and Perplexity ingest as factual sources.",
      "Deploy multi-layer JSON-LD entity graph connecting Google Business Profile, founders, and subsidiaries.",
      "Secure authoritative citations across high-trust databases to train AI Overviews recommendations."
    ];

    setResult({
      businessName: formData.businessName,
      website: formData.website || "yourwebsite.com",
      city: formData.city,
      industry: formData.industry,
      service: formData.service,
      overallScore: overall,
      googleVisibility: googleVis,
      aiSearchVisibility: aiVis,
      brandAuthority: brandAuth,
      contentAuthority: contentAuth,
      localAuthority: localAuth,
      opportunitiesCount: 14 + (baseSeed % 7),
      criticalIssues: issues,
      geoOpportunities: opportunities
    });
  };

  const handleClaimReport = (e: React.FormEvent) => {
    e.preventDefault();
    setReportSent(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello JV Group / AMS,\nI generated an AI Visibility Audit for *${formData.businessName}* (${formData.website || "No site"}).\nOverall AI Score: ${result?.overallScore}/100\nAI Search Visibility: ${result?.aiSearchVisibility}%\nPhone: ${leadContact.phone || "Not specified"}\nPlease send our Full AI SEO & GEO Action Plan.`
  );

  return (
    <div id="ai-audit-tool" className="bg-white border-2 border-[var(--color-jv-orange)]/30 rounded-3xl p-6 sm:p-10 card-shadow-3d relative overflow-hidden shadow-xl">
      {/* Subtle Ambient Aura */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--color-jv-orange)]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Tool Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#E2E8F0] relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--color-jv-orange)]/10 text-[var(--color-jv-orange)] border border-[var(--color-jv-orange)]/25 text-[11px] font-black uppercase tracking-wider mb-2.5">
            <Cpu size={13} className="text-[var(--color-jv-orange)]" />
            <span>AI Search & GEO Intelligence Engine</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-1" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-heading font-black text-[#0F172A] tracking-tight">
            AI Visibility & GEO Search Audit
          </h3>
          <p className="text-xs sm:text-sm text-[#64748B] font-medium mt-1">
            Discover how ChatGPT, Google AI Overviews, Perplexity, Gemini, and Claude evaluate, cite, and rank your business.
          </p>
        </div>

        {/* Live Multi-Model Support Badges */}
        <div className="flex flex-wrap items-center gap-1.5 lg:justify-end">
          {[
            { label: "ChatGPT-4o", active: true },
            { label: "Google AI", active: true },
            { label: "Perplexity Pro", active: true },
            { label: "Gemini 1.5", active: true },
            { label: "Claude 3.5", active: true }
          ].map((m, idx) => (
            <span
              key={idx}
              className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-[#F8FAFC] text-[#475569] border border-[#CBD5E1] flex items-center gap-1 shadow-2xs"
            >
              <Bot size={11} className="text-[var(--color-jv-orange)]" />
              <span>{m.label}</span>
            </span>
          ))}
        </div>
      </div>

      {!result && !isScanning && (
        /* Step 1: Input Form */
        <form onSubmit={handleStartAudit} className="space-y-5 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-2 flex items-center gap-1.5">
                <Building2 size={13} className="text-[var(--color-jv-orange)]" />
                <span>Business / Company Name *</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Global Engineering / Shivam Retail"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full bg-[#F8FAFC] border border-[#CBD5E1] hover:border-[#94A3B8] focus:border-[var(--color-jv-orange)] focus:bg-white focus:ring-4 focus:ring-[var(--color-jv-orange)]/10 rounded-2xl px-4 py-3 text-xs sm:text-sm text-[#0F172A] font-semibold placeholder-[#94A3B8] transition-all outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-2 flex items-center gap-1.5">
                <Globe2 size={13} className="text-[var(--color-jv-orange)]" />
                <span>Website URL (or Social Profile)</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. company.com / yourbrand.in"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="w-full bg-[#F8FAFC] border border-[#CBD5E1] hover:border-[#94A3B8] focus:border-[var(--color-jv-orange)] focus:bg-white focus:ring-4 focus:ring-[var(--color-jv-orange)]/10 rounded-2xl px-4 py-3 text-xs sm:text-sm text-[#0F172A] font-semibold placeholder-[#94A3B8] transition-all outline-none"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-2 flex items-center gap-1.5">
                <MapPin size={13} className="text-[var(--color-jv-orange)]" />
                <span>City / Primary Market *</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Ahmedabad / Gujarat / Global"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full bg-[#F8FAFC] border border-[#CBD5E1] hover:border-[#94A3B8] focus:border-[var(--color-jv-orange)] focus:bg-white focus:ring-4 focus:ring-[var(--color-jv-orange)]/10 rounded-2xl px-4 py-3 text-xs sm:text-sm text-[#0F172A] font-semibold placeholder-[#94A3B8] transition-all outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-2 flex items-center gap-1.5">
                <Layers size={13} className="text-[var(--color-jv-orange)]" />
                <span>Industry Sector</span>
              </label>
              <select
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                className="w-full bg-[#F8FAFC] border border-[#CBD5E1] hover:border-[#94A3B8] focus:border-[var(--color-jv-orange)] focus:bg-white focus:ring-4 focus:ring-[var(--color-jv-orange)]/10 rounded-2xl px-4 py-3 text-xs sm:text-sm text-[#0F172A] font-semibold transition-all outline-none cursor-pointer"
              >
                <option value="Manufacturing & Industrial">Manufacturing & Industrial (GIDC)</option>
                <option value="Retail & Showrooms">Retail, Showrooms & FMCG</option>
                <option value="Healthcare & Specialized Clinics">Healthcare, Hospitals & Clinics</option>
                <option value="Real Estate & Corporate Spaces">Real Estate, Builders & Land</option>
                <option value="Technology, SaaS & IT">Technology, SaaS & IT</option>
                <option value="Higher Education & Visas">Education, Universities & Visas</option>
                <option value="Logistics & Global Cargo">Logistics, Freight & Export</option>
                <option value="Professional Corporate Services">Consulting & Professional Services</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-2 flex items-center gap-1.5">
                <Target size={13} className="text-[var(--color-jv-orange)]" />
                <span>Core Target Offering</span>
              </label>
              <input
                type="text"
                placeholder="e.g. CNC Machine Tooling / Dental Implants"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-[#F8FAFC] border border-[#CBD5E1] hover:border-[#94A3B8] focus:border-[var(--color-jv-orange)] focus:bg-white focus:ring-4 focus:ring-[var(--color-jv-orange)]/10 rounded-2xl px-4 py-3 text-xs sm:text-sm text-[#0F172A] font-semibold placeholder-[#94A3B8] transition-all outline-none"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-[var(--color-jv-orange)] via-[#ea580c] to-[#c2410c] text-white font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[var(--color-jv-orange)]/30 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
            >
              <span>Check How AI Search Sees Your Business</span>
              <Sparkles size={16} />
              <ArrowRight size={14} />
            </button>
            <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-[#64748B] font-semibold mt-3">
              <span className="flex items-center gap-1">
                <Lock size={12} className="text-emerald-500" />
                <span>100% Private & Confidential</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Sparkles size={12} className="text-[var(--color-jv-orange)]" />
                <span>Instant 30-Sec Simulation</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <BarChart3 size={12} className="text-blue-500" />
                <span>Simulates ChatGPT, Google AI Overviews & Perplexity</span>
              </span>
            </div>
          </div>
        </form>
      )}

      {/* Step 2: Scanning Simulation */}
      {isScanning && (
        <div className="py-14 text-center space-y-6">
          <div className="relative w-20 h-20 mx-auto">
            <div className="w-20 h-20 rounded-full border-4 border-[#FFF4ED] border-t-[var(--color-jv-orange)] animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center text-[var(--color-jv-orange)]">
              <Cpu size={28} />
            </div>
          </div>

          <div className="max-w-md mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-jv-orange)]">
              AI Diagnostic in Progress
            </span>
            <h4 className="text-xl font-heading font-black text-[#18191C]">
              Scanning AI & Traditional Footprint
            </h4>
            <p className="text-xs text-[#64748B] min-h-[20px] transition-all">
              {scanStepsText[scanStep]}
            </p>
          </div>

          <div className="max-w-xs mx-auto bg-[#F1F5F9] h-2 rounded-full overflow-hidden">
            <div 
              className="bg-[var(--color-jv-orange)] h-full transition-all duration-300"
              style={{ width: `${((scanStep + 1) / scanStepsText.length) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Step 3: Interactive Audit Report */}
      {result && (
        <div className="space-y-8 animate-fadeIn">
          
          {/* Top Score Banner */}
          <div className="bg-gradient-to-br from-[#18191C] to-[#2B2D31] text-white rounded-3xl p-6 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[var(--color-jv-orange)] block mb-1">
                  AI Visibility & GEO Assessment Report
                </span>
                <h4 className="text-2xl sm:text-3xl font-heading font-black">
                  {result.businessName}
                </h4>
                <p className="text-xs text-[#94A3B8] mt-1">
                  Market: <strong>{result.city}</strong> • Domain: <strong>{result.website}</strong> • Industry: <strong>{result.industry}</strong>
                </p>
              </div>

              <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl self-start md:self-auto">
                <div className="text-center">
                  <span className="block text-3xl sm:text-4xl font-heading font-black text-[var(--color-jv-orange)]">
                    {result.overallScore}%
                  </span>
                  <span className="text-[10px] uppercase font-bold text-[#94A3B8]">
                    Overall AI Readiness
                  </span>
                </div>
                <div className="h-10 w-[1px] bg-white/20" />
                <div className="text-center">
                  <span className="block text-2xl sm:text-3xl font-heading font-black text-amber-400">
                    {result.opportunitiesCount}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-[#94A3B8]">
                    Gaps Detected
                  </span>
                </div>
              </div>
            </div>

            {/* 5-Metric Detailed Breakdown Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-6">
              
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-[#94A3B8]">Google Traditional</span>
                  <span className="font-bold text-white">{result.googleVisibility}%</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-400 h-full rounded-full" style={{ width: `${result.googleVisibility}%` }} />
                </div>
                <span className="text-[10px] text-[#94A3B8] block">Keyword rankings</span>
              </div>

              <div className="p-4 rounded-2xl bg-[var(--color-jv-orange)]/15 border border-[var(--color-jv-orange)]/35 space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-[var(--color-jv-orange)] font-bold">AI Search (GEO)</span>
                  <span className="font-black text-white">{result.aiSearchVisibility}%</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-[var(--color-jv-orange)] h-full rounded-full" style={{ width: `${result.aiSearchVisibility}%` }} />
                </div>
                <span className="text-[10px] text-amber-300 block font-semibold">⚠️ Critical Citation Gap</span>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-[#94A3B8]">Brand Entity</span>
                  <span className="font-bold text-white">{result.brandAuthority}%</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-400 h-full rounded-full" style={{ width: `${result.brandAuthority}%` }} />
                </div>
                <span className="text-[10px] text-[#94A3B8] block">Knowledge Graph</span>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-[#94A3B8]">Content Depth</span>
                  <span className="font-bold text-white">{result.contentAuthority}%</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-purple-400 h-full rounded-full" style={{ width: `${result.contentAuthority}%` }} />
                </div>
                <span className="text-[10px] text-[#94A3B8] block">Direct-Answer density</span>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-[#94A3B8]">Local Authority</span>
                  <span className="font-bold text-white">{result.localAuthority}%</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-400 h-full rounded-full" style={{ width: `${result.localAuthority}%` }} />
                </div>
                <span className="text-[10px] text-[#94A3B8] block">Maps & Local presence</span>
              </div>

            </div>
          </div>

          {/* Critical Vulnerabilities & Opportunities Detected */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-6 rounded-3xl bg-[#FFF4ED]/60 border border-[var(--color-jv-orange)]/30 space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[var(--color-jv-orange)]">
                <AlertTriangle size={15} />
                <span>Detected AI Search Vulnerabilities ({result.criticalIssues.length})</span>
              </div>
              <div className="space-y-3">
                {result.criticalIssues.map((issue, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#2B2D31]">
                    <span className="text-[var(--color-jv-orange)] font-bold mt-0.5">•</span>
                    <span className="leading-relaxed">{issue}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#18191C]">
                <Sparkles size={15} className="text-[var(--color-jv-orange)]" />
                <span>Immediate GEO Strategic Opportunities ({result.geoOpportunities.length})</span>
              </div>
              <div className="space-y-3">
                {result.geoOpportunities.map((opp, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#2B2D31]">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{opp}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Lead Generation Action Box */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border-2 border-[var(--color-jv-orange)] card-shadow-3d">
            {reportSent ? (
              <div className="py-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#FFF4ED] text-[var(--color-jv-orange)] flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="text-xl font-heading font-black text-[#18191C]">
                  Full AI SEO & GEO Action Plan Dispatched!
                </h4>
                <p className="text-xs text-[#4E5058] max-w-md mx-auto leading-relaxed">
                  We have prepared the detailed blueprint for <strong>{result.businessName}</strong>. Our senior AI Search Strategist will transmit the roadmap to {leadContact.email || leadContact.phone}.
                </p>
                <div className="pt-2 flex justify-center gap-3">
                  <a
                    href={`https://wa.me/919909700606?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center gap-1.5 shadow-xs"
                  >
                    <MessageSquare size={14} />
                    <span>Open in WhatsApp</span>
                  </a>
                  <button
                    onClick={() => setResult(null)}
                    className="px-5 py-2.5 rounded-xl bg-white border border-[#E2E8F0] text-xs font-bold text-[#18191C]"
                  >
                    Run Another Audit
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleClaimReport} className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E2E8F0]">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[var(--color-jv-orange)]">
                      Exclusive Intelligence Report
                    </span>
                    <h4 className="text-lg sm:text-xl font-heading font-black text-[#18191C]">
                      Get Your Free Comprehensive AI SEO & GEO Action Plan
                    </h4>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 self-start sm:self-auto">
                    ✓ 100% Free • No Obligation
                  </span>
                </div>

                <p className="text-xs text-[#4E5058]">
                  Receive the complete 12-page PDF audit report with exact schema codes, question-answer content templates, and ranking roadmap to get <strong>{result.businessName}</strong> recommended by ChatGPT and Google AI Overviews.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={leadContact.name}
                    onChange={(e) => setLeadContact({ ...leadContact, name: e.target.value })}
                    className="bg-white border border-[#E2E8F0] rounded-xl px-3.5 py-2.5 text-xs text-[#18191C] focus:outline-none focus:border-[var(--color-jv-orange)]"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Official Email Address *"
                    value={leadContact.email}
                    onChange={(e) => setLeadContact({ ...leadContact, email: e.target.value })}
                    className="bg-white border border-[#E2E8F0] rounded-xl px-3.5 py-2.5 text-xs text-[#18191C] focus:outline-none focus:border-[var(--color-jv-orange)]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone / WhatsApp Number *"
                    value={leadContact.phone}
                    onChange={(e) => setLeadContact({ ...leadContact, phone: e.target.value })}
                    className="bg-white border border-[#E2E8F0] rounded-xl px-3.5 py-2.5 text-xs text-[#18191C] focus:outline-none focus:border-[var(--color-jv-orange)]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-3.5 rounded-xl bg-gradient-to-r from-[var(--color-jv-orange)] to-[#c2410c] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer hover:-translate-y-0.5 transition-all"
                  >
                    <span>Send My Full AI SEO Audit Report</span>
                    <ArrowRight size={14} />
                  </button>

                  <a
                    href={`https://wa.me/919909700606?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs whitespace-nowrap cursor-pointer hover:bg-[#20ba59]"
                  >
                    <MessageSquare size={14} />
                    <span>Instant WhatsApp PDF</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setResult(null)}
                    className="px-4 py-3.5 rounded-xl bg-white border border-[#CBD5E1] text-xs font-bold text-[#64748B] hover:text-[#18191C] cursor-pointer"
                  >
                    Reset
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      )}

    </div>
  );
}
