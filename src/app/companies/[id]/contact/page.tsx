"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useParams } from "next/navigation";
import Link from "next/link";
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  Sparkles,
  Building2,
  Globe2,
  TrendingUp,
  CheckCircle2,
  Calendar,
  Lock,
  Send,
  Zap,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { BUSINESS_ENTITIES, BusinessEntity, JV_GROUP_META } from "@/data/businesses";
import { ENTITY_LANDING_DATA } from "@/data/entityLandingData";
import { COMPANY_WEBSITES_DATA } from "@/data/companyWebsitesData";
import CompanyPageWrapper from "@/components/company/CompanyPageWrapper";
import JvMarketingContactView from "./JvMarketingContactView";

function DynamicContactContent() {
  const params = useParams();
  const searchParams = useSearchParams();

  const id = (params?.id as string) || "ahmedabad-marketing-solution";
  const entity: BusinessEntity = BUSINESS_ENTITIES.find((e) => e.id === id) || BUSINESS_ENTITIES[0];
  const companyData = COMPANY_WEBSITES_DATA[id];

  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<string>("");
  const [timeline, setTimeline] = useState<string>("immediate");
  const [budgetRange, setBudgetRange] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    companyName: "",
    location: entity.marketFocus || "Global",
    notes: ""
  });

  // Collect all available services and package options
  const allServices = Array.from(
    new Set([
      ...(entity.coreServices || []),
      ...(entity.detailedServices?.map((s) => s.name) || []),
    ])
  );

  const isGlobalEntity = entity.id.includes("global") || entity.primaryCountries.includes("UK") || entity.primaryCountries.includes("USA");

  const budgetOptions = isGlobalEntity
    ? ["$2,500 – $5,000 / mo", "$5,000 – $10,000 / mo", "$10,000 – $25,000 / mo", "$25k+ Enterprise Custom"]
    : ["₹25,000 – ₹75,000 / mo", "₹75,000 – ₹2,00,000 / mo", "₹2,00,000 – ₹5,00,000 / mo", "₹5L+ Enterprise Retainer"];

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    const packageParam = searchParams.get("package");
    const challengeParam = searchParams.get("challenge");
    const featureParam = searchParams.get("feature");
    const budgetParam = searchParams.get("budget");

    if (serviceParam) {
      setSelectedService(serviceParam);
    } else if (packageParam) {
      setSelectedService(`Package: ${packageParam}`);
    } else if (challengeParam) {
      setSelectedService(`Challenge: ${challengeParam}`);
    } else if (featureParam) {
      setSelectedService(`Feature: ${featureParam}`);
    } else if (allServices[0]) {
      setSelectedService(allServices[0]);
    }

    if (budgetParam) {
      setBudgetRange(`₹${Number(budgetParam).toLocaleString("en-IN")}`);
    }
  }, [searchParams, allServices]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const cleanPhone = entity.phone.replace(/[^0-9]/g, "");
  const targetWhatsapp = entity.whatsappNumber || cleanPhone;
  const whatsappDeskUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(
    `Hello ${entity.shortName}, I am submitting an enterprise inquiry regarding ${selectedService || "Services"}.\nName: ${formData.name || "Client"}\nCompany: ${formData.companyName || "Organization"}\nTimeline: ${timeline}\nBudget: ${budgetRange || "To be discussed"}\nNotes: ${formData.notes || "Please share preliminary consultation."}`
  )}`;

  return (
    <div className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-[#FFFDFB] to-slate-50/70">
      
      {/* 1. Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-[var(--color-jv-orange)] text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Sparkles size={14} className="text-[var(--color-jv-orange)]" />
            <span>Direct Operating Desk</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 tracking-tight leading-tight mb-4">
            Connect Directly with {entity.name}.
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            Speak directly with designated business unit officers. We will assess your requirements, prepare a customized operational blueprint, and outline SLA deliverables for your organization.
          </p>
        </div>

        {/* Quick Action Contact Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200/70 text-[var(--color-jv-orange)] flex items-center justify-center shrink-0">
              <Phone size={18} />
            </div>
            <div className="min-w-0">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Direct Hotline
              </span>
              <a
                href={`tel:${entity.phone}`}
                className="text-xs sm:text-sm font-black text-slate-900 hover:text-[var(--color-jv-orange)] transition-colors truncate block"
              >
                {entity.phone}
              </a>
              {entity.additionalPhones?.map((ap, apIdx) => (
                <a
                  key={apIdx}
                  href={`tel:${ap.number}`}
                  className="text-[11px] font-black text-slate-700 hover:text-[var(--color-jv-orange)] transition-colors block truncate"
                  title={ap.label}
                >
                  {ap.number}
                </a>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
              <MessageSquare size={18} />
            </div>
            <div className="min-w-0">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                WhatsApp Business
              </span>
              <a
                href={whatsappDeskUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs sm:text-sm font-black text-slate-900 hover:text-emerald-600 transition-colors truncate block"
              >
                +{targetWhatsapp}
              </a>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shrink-0">
              <Mail size={18} />
            </div>
            <div className="min-w-0">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Official Email
              </span>
              <a
                href={`mailto:${entity.email || JV_GROUP_META.email}`}
                className="text-xs sm:text-sm font-black text-slate-900 hover:text-[var(--color-jv-orange)] transition-colors block break-all sm:break-normal"
              >
                {entity.email || JV_GROUP_META.email}
              </a>
              {entity.supportEmail && (
                <a
                  href={`mailto:${entity.supportEmail}`}
                  className="text-[11px] font-bold text-slate-600 hover:text-[var(--color-jv-orange)] transition-colors block break-all"
                >
                  {entity.supportEmail}
                </a>
              )}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 text-purple-600 flex items-center justify-center shrink-0">
              <Clock size={18} />
            </div>
            <div className="min-w-0">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Response SLA
              </span>
              <span className="text-xs sm:text-sm font-black text-slate-900 block truncate">
                Within 4 Business Hours
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Form & Contact Desk Split Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-lg relative overflow-hidden">
            {/* Top Amber Highlight Bar */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[var(--color-jv-orange)] via-amber-400 to-[#ea580c]" />

            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                  <Check size={32} />
                </div>
                
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                  Reference #JV-{Math.floor(100000 + Math.random() * 900000)}
                </span>

                <h3 className="text-2xl font-heading font-black text-slate-900">
                  Thank You! Your Request Has Been Logged.
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Our designated representative for <strong>{entity.name}</strong> will review your requirements for <strong>{selectedService}</strong> and respond at <strong>{formData.phone || formData.email}</strong> within 4 business hours.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={whatsappDeskUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md transition-all cursor-pointer"
                  >
                    <MessageSquare size={16} />
                    <span>Confirm Directly on WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        companyName: "",
                        location: entity.marketFocus || "Global",
                        notes: ""
                      });
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-black text-slate-900">
                    Submit an Executive Inquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Please provide your project context. All submissions are covered by institutional NDA.
                  </p>
                </div>

                {/* 1. Service / Capability Selector Chips */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                    1. Select Service or Capability Scope *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {allServices.slice(0, 6).map((srv, sIdx) => {
                      const isSelected = selectedService === srv;
                      return (
                        <button
                          key={sIdx}
                          type="button"
                          onClick={() => setSelectedService(srv)}
                          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer text-left border ${
                            isSelected
                              ? "bg-[var(--color-jv-orange)] text-white border-[var(--color-jv-orange)] shadow-2xs"
                              : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/80"
                          }`}
                        >
                          {srv}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Timeline Selector Chips */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                    2. Engagement Timeline *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {[
                      { id: "immediate", label: "⚡ Immediate (< 2 Weeks)" },
                      { id: "30days", label: "🗓️ Within 30 Days" },
                      { id: "rfp", label: "📋 Strategic RFP / Planning" },
                    ].map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setTimeline(t.id)}
                        className={`p-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer text-center ${
                          timeline === t.id
                            ? "bg-slate-900 text-white border-slate-900 shadow-2xs"
                            : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/80"
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Estimated Monthly Budget */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                    3. Estimated Project Budget / Retainer Tier
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {budgetOptions.map((b, bIdx) => (
                      <button
                        key={bIdx}
                        type="button"
                        onClick={() => setBudgetRange(budgetRange === b ? "" : b)}
                        className={`p-2 rounded-xl text-[11px] font-bold border transition-all cursor-pointer text-center ${
                          budgetRange === b
                            ? "bg-orange-50 text-[var(--color-jv-orange)] border-[var(--color-jv-orange)] ring-1 ring-[var(--color-jv-orange)]/30"
                            : "bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200/80"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Contact Details Fields */}
                <div className="pt-2 border-t border-slate-100 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Robert Smith / Rajesh Patel"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:border-[var(--color-jv-orange)] focus:ring-2 focus:ring-orange-500/10 outline-none bg-slate-50/70"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Direct Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+44 7344... / +91 99097..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:border-[var(--color-jv-orange)] focus:ring-2 focus:ring-orange-500/10 outline-none bg-slate-50/70"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Corporate Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="contact@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:border-[var(--color-jv-orange)] focus:ring-2 focus:ring-orange-500/10 outline-none bg-slate-50/70"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Company / Organization Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Apex Global Corp"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:border-[var(--color-jv-orange)] focus:ring-2 focus:ring-orange-500/10 outline-none bg-slate-50/70"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Project Notes &amp; Specific Scope (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder={`Tell us about your requirements for ${entity.shortName}...`}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:border-[var(--color-jv-orange)] focus:ring-2 focus:ring-orange-500/10 outline-none bg-slate-50/70 resize-none"
                    />
                  </div>
                </div>

                {/* Submit Actions */}
                <div className="space-y-3 pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[var(--color-jv-orange)] hover:bg-[#ea580c] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-orange-900/20 hover:shadow-lg transition-all cursor-pointer"
                  >
                    <Send size={14} />
                    <span>Transmit Inquiry to {entity.shortName}</span>
                    <ArrowRight size={14} />
                  </button>

                  <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
                    <div className="flex items-center gap-1.5">
                      <Lock size={12} className="text-emerald-600" />
                      <span>Confidentiality Protected under Institutional NDA</span>
                    </div>
                    <span>Direct Desk: {entity.phone}</span>
                  </div>
                </div>

              </form>
            )}

          </div>

          {/* Right Corporate Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Entity Profile Card */}
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-jv-orange)] bg-orange-50 px-2.5 py-1 rounded-lg border border-orange-200/60">
                  {entity.categoryLabel}
                </span>
                <span className="text-xs font-mono font-bold text-slate-400">
                  {entity.domain}
                </span>
              </div>

              <h2 className="text-xl font-heading font-black text-slate-900 mb-2">
                {entity.name} Direct Desk
              </h2>

              <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
                {entity.overview}
              </p>

              {/* Direct Desk Details */}
              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                  <Phone size={16} className="text-[var(--color-jv-orange)] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="block text-[10px] uppercase font-bold text-slate-400">
                      Telephone Hotline
                    </span>
                    <a
                      href={`tel:${entity.phone}`}
                      className="text-sm font-black text-slate-900 hover:text-[var(--color-jv-orange)] block transition-colors mt-0.5"
                    >
                      {entity.phone}
                    </a>
                    {entity.additionalPhones?.map((ap, apIdx) => (
                      <div key={apIdx} className="pt-1">
                        <span className="block text-[9.5px] uppercase font-bold text-slate-400">
                          {ap.label}
                        </span>
                        {ap.isCall !== false ? (
                          <a
                            href={`tel:${ap.number}`}
                            className="text-xs font-black text-slate-800 hover:text-[var(--color-jv-orange)] block transition-colors"
                          >
                            {ap.number}
                          </a>
                        ) : (
                          <span className="text-xs font-black text-slate-800 block">
                            {ap.number}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-100 flex items-start gap-3">
                  <MessageSquare size={16} className="text-[#25D366] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-emerald-800">
                      Instant WhatsApp Business
                    </span>
                    <a
                      href={whatsappDeskUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-black text-slate-900 hover:text-emerald-700 block transition-colors mt-0.5"
                    >
                      Chat on WhatsApp (+{targetWhatsapp})
                    </a>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                  <Mail size={16} className="text-[var(--color-jv-orange)] shrink-0 mt-0.5" />
                  <div className="space-y-1.5">
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-slate-400">
                        Official Email
                      </span>
                      <a
                        href={`mailto:${entity.email || JV_GROUP_META.email}`}
                        className="text-sm font-black text-slate-900 hover:text-[var(--color-jv-orange)] block transition-colors mt-0.5 break-all"
                      >
                        {entity.email || JV_GROUP_META.email}
                      </a>
                    </div>
                    {entity.supportEmail && (
                      <div>
                        <span className="block text-[10px] uppercase font-bold text-slate-400">
                          Support Email
                        </span>
                        <a
                          href={`mailto:${entity.supportEmail}`}
                          className="text-xs font-black text-slate-800 hover:text-[var(--color-jv-orange)] block transition-colors break-all"
                        >
                          {entity.supportEmail}
                        </a>
                      </div>
                    )}
                    {entity.b2bEmail && (
                      <div>
                        <span className="block text-[10px] uppercase font-bold text-slate-400">
                          B2B Desk Email
                        </span>
                        <a
                          href={`mailto:${entity.b2bEmail}`}
                          className="text-xs font-black text-slate-800 hover:text-[var(--color-jv-orange)] block transition-colors break-all"
                        >
                          {entity.b2bEmail}
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                  <MapPin size={16} className="text-[var(--color-jv-orange)] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-slate-400">
                      Corporate Location
                    </span>
                    <p className="text-xs font-semibold text-slate-800 leading-snug mt-0.5">
                      {JV_GROUP_META.address}
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                  <Clock size={16} className="text-[var(--color-jv-orange)] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-slate-400">
                      Operating Hours
                    </span>
                    <p className="text-xs font-semibold text-slate-800 mt-0.5">
                      Mon–Sat: 9:30 AM – 7:30 PM IST
                    </p>
                    <span className="text-[11px] text-slate-500 block mt-0.5">
                      Global timezone alignment for UK/USA/Canada
                    </span>
                  </div>
                </div>
              </div>

              {/* Umbrella Assurance Pill */}
              <div className="mt-5 p-3.5 rounded-2xl bg-orange-50/70 border border-orange-200/60 flex items-center gap-2.5 text-xs text-orange-950">
                <ShieldCheck size={18} className="text-[var(--color-jv-orange)] shrink-0" />
                <span className="font-semibold text-[11px]">
                  Backed by JV Group Umbrella SLA, unified Master Services Agreement, and corporate governance.
                </span>
              </div>
            </div>

            {/* Direct WhatsApp Instant Consultation Banner */}
            <div className="rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white p-6 shadow-xl border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--color-jv-orange)] to-transparent" />
              
              <div className="relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400 block mb-1">
                  Urgent Commercial Consultation
                </span>
                <h4 className="text-lg font-black text-white mb-2">
                  Prefer Direct WhatsApp Routing?
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4 font-normal">
                  Connect immediately with our designated coordinators for priority routing of RFPs, technical discovery calls, and rate cards.
                </p>
                <a
                  href={whatsappDeskUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <MessageSquare size={15} />
                  <span>Open WhatsApp Direct</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default function DynamicContactPage() {
  const params = useParams();
  const id = (params?.id as string) || "ahmedabad-marketing-solution";
  const entity: BusinessEntity = BUSINESS_ENTITIES.find((e) => e.id === id) || BUSINESS_ENTITIES[0];

  return (
    <CompanyPageWrapper entity={entity}>
      <Suspense fallback={<div className="py-20 text-center text-xs font-bold text-slate-500">Loading contact portal...</div>}>
        {id === "jv-marketing-solution-pvt-ltd" ? (
          <JvMarketingContactView entity={entity} />
        ) : (
          <DynamicContactContent />
        )}
      </Suspense>
    </CompanyPageWrapper>
  );
}
