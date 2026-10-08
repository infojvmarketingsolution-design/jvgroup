"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  MessageSquare,
  Sparkles,
  Building2,
  Mail,
  User,
  Phone,
  Layers,
  DollarSign,
  Clock,
  Lock,
  ChevronDown,
  Globe2,
} from "lucide-react";
import { BUSINESS_ENTITIES } from "@/data/businesses";

interface Props {
  defaultEntity: string;
  entityName: string;
  coreServices?: string[];
  phone?: string;
  whatsappNumber?: string;
}

// Preset budget options for enterprise buyers
const BUDGET_OPTIONS = [
  { id: "tier1", label: "< $5,000 / mo", sub: "Pilot / Audit Sprint" },
  { id: "tier2", label: "$5,000 – $15,000 / mo", sub: "Growth Retainer" },
  { id: "tier3", label: "$15,000 – $30,000 / mo", sub: "Scaled Expansion" },
  { id: "tier4", label: "$30,000+ / mo", sub: "Enterprise Conglomerate" },
];

// Quick scope chips to pre-fill intent
const QUICK_SCOPE_TAGS = [
  "Full-Funnel Growth Diagnostic",
  "High-ROAS Paid Media (Google/Meta/LinkedIn)",
  "Server-Side CAPI & CRM Webhooks",
  "CRO & High-Converting Landing Pages",
  "Omnichannel B2B Expansion",
];

export default function DynamicInquiryForm({
  defaultEntity,
  entityName,
  coreServices = [],
  phone = "+44 7344556070",
  whatsappNumber = "447344556070",
}: Props) {
  const [selectedEntityId, setSelectedEntityId] = useState(defaultEntity);
  const [selectedService, setSelectedService] = useState<string>(
    "Comprehensive Strategic Scope / Growth Audit"
  );
  const [marketType, setMarketType] = useState<"india" | "global">("global");
  const [selectedBudget, setSelectedBudget] = useState<string>("$5,000 – $15,000 / mo");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectScope: "",
  });

  const selectedEntity = BUSINESS_ENTITIES.find((b) => b.id === selectedEntityId);
  const activeServices = selectedEntity?.coreServices || coreServices;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleAppendScopeTag = (tag: string) => {
    setFormData((prev) => {
      const current = prev.projectScope.trim();
      if (!current) return { ...prev, projectScope: tag };
      if (current.includes(tag)) return prev;
      return { ...prev, projectScope: `${current}, ${tag}` };
    });
  };

  const activeWhatsapp = (
    selectedEntity?.whatsappPhone ||
    selectedEntity?.phone ||
    whatsappNumber
  ).replace(/[^0-9]/g, "");

  const whatsappMessage = encodeURIComponent(
    `Hello ${selectedEntity?.shortName || entityName},\nI am inquiring via jvgroupco.in regarding ${selectedService}.\nName: ${formData.name || "Client"}\nCompany: ${formData.company || "Not specified"}\nBudget: ${selectedBudget}\nScope: ${formData.projectScope || "Please share growth proposal."}`
  );

  return (
    <div className="relative bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-3xl p-6 sm:p-10 card-shadow-3d shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden">
      {/* Top Accent Gradient Bar */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[var(--color-jv-orange)] via-amber-400 to-[var(--color-jv-orange)]" />

      {/* Form Sub-Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-7 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF4ED] border border-[var(--color-jv-orange)]/30 text-[var(--color-jv-orange)] text-[11px] font-mono font-black uppercase tracking-wider mb-2">
            <Sparkles size={12} className="text-[var(--color-jv-orange)]" />
            <span>Dedicated RFP Portal</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping ml-0.5" />
          </div>
          <h3 className="text-xl sm:text-2xl font-heading font-black text-slate-900 tracking-tight">
            Direct Proposal &amp; Consultation Desk
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Routes with highest priority directly to designated directors for{" "}
            <strong className="text-slate-800 font-semibold">
              {selectedEntity?.name || entityName}
            </strong>
          </p>
        </div>

        {/* Market Selector Tabs */}
        <div className="flex items-center p-1 bg-slate-100/90 rounded-2xl border border-slate-200/80 self-start sm:self-auto shrink-0 shadow-inner">
          <button
            type="button"
            onClick={() => setMarketType("global")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              marketType === "global"
                ? "bg-[var(--color-jv-orange)] text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Globe2 size={13} />
            <span>Global B2B (USA/UK/CA)</span>
          </button>
          <button
            type="button"
            onClick={() => setMarketType("india")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              marketType === "india"
                ? "bg-[var(--color-jv-orange)] text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <span>🇮🇳</span>
            <span>India Domestic</span>
          </button>
        </div>
      </div>

      {isSubmitted ? (
        <div className="py-12 sm:py-16 text-center max-w-xl mx-auto">
          <div className="w-20 h-20 rounded-full bg-[#FFF4ED] border-2 border-[var(--color-jv-orange)]/40 flex items-center justify-center text-[var(--color-jv-orange)] mx-auto mb-5 shadow-lg shadow-orange-500/10">
            <CheckCircle2 size={40} className="text-[var(--color-jv-orange)]" />
          </div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-600 mb-1 block">
            Transmission Verified • Ref #RFP-{Math.floor(100000 + Math.random() * 900000)}
          </span>
          <h4 className="text-2xl sm:text-3xl font-heading font-black text-slate-900 mb-3">
            Inquiry Successfully Transmitted
          </h4>
          <p className="text-sm text-slate-600 mb-6 leading-relaxed">
            Thank you, <strong className="text-slate-900">{formData.name || "valued partner"}</strong>. Your RFP for{" "}
            <strong className="text-slate-900">{selectedEntity?.name || entityName}</strong> has been logged with highest executive priority.
          </p>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs text-slate-600 space-y-2 mb-8">
            <div className="flex justify-between border-b border-slate-200/60 pb-2">
              <span className="font-bold text-slate-500 uppercase tracking-wider font-mono">Entity:</span>
              <span className="font-bold text-slate-900">{selectedEntity?.name}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200/60 pb-2">
              <span className="font-bold text-slate-500 uppercase tracking-wider font-mono">Target Scope:</span>
              <span className="font-bold text-slate-900">{selectedService}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200/60 pb-2">
              <span className="font-bold text-slate-500 uppercase tracking-wider font-mono">Selected Budget:</span>
              <span className="font-bold text-slate-900">{selectedBudget}</span>
            </div>
            <div className="flex justify-between pt-1">
              <span className="font-bold text-slate-500 uppercase tracking-wider font-mono">SLA Turnaround:</span>
              <span className="text-[var(--color-jv-orange)] font-extrabold">Within 4 Business Hours</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all cursor-pointer"
            >
              Submit Another Inquiry
            </button>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <MessageSquare size={16} />
              <span>Continue via WhatsApp Desk</span>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Entity & Core Service Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Building2 size={13} className="text-[var(--color-jv-orange)]" />
                <span>Target JV Group Entity:</span>
              </label>
              <div className="relative">
                <select
                  value={selectedEntityId}
                  onChange={(e) => setSelectedEntityId(e.target.value)}
                  className="w-full appearance-none bg-slate-50 border border-slate-200/90 rounded-xl px-4 py-3 text-xs sm:text-sm font-semibold text-slate-900 focus:bg-white focus:outline-none focus:border-[var(--color-jv-orange)] focus:ring-2 focus:ring-[var(--color-jv-orange)]/15 cursor-pointer pr-10 transition-all"
                >
                  {BUSINESS_ENTITIES.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.name}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Layers size={13} className="text-[var(--color-jv-orange)]" />
                <span>Target Core Service / Scope:</span>
              </label>
              <div className="relative">
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full appearance-none bg-slate-50 border border-slate-200/90 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[var(--color-jv-orange)] focus:ring-2 focus:ring-[var(--color-jv-orange)]/15 cursor-pointer pr-10 transition-all"
                >
                  <option value="Comprehensive Strategic Scope / Growth Audit">
                    Comprehensive Strategic Scope / Full Audit
                  </option>
                  {activeServices.map((srv, idx) => (
                    <option key={idx} value={srv}>
                      {srv}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                />
              </div>
            </div>
          </div>

          {/* Contact Details (Name & Email) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                <User size={13} className="text-[var(--color-jv-orange)]" />
                <span>Full Name *</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Robert Smith / Rajesh Patel"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200/90 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[var(--color-jv-orange)] focus:ring-2 focus:ring-[var(--color-jv-orange)]/15 transition-all"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Mail size={13} className="text-[var(--color-jv-orange)]" />
                <span>Corporate Email *</span>
              </label>
              <input
                type="email"
                required
                placeholder="e.g. director@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200/90 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[var(--color-jv-orange)] focus:ring-2 focus:ring-[var(--color-jv-orange)]/15 transition-all"
              />
            </div>
          </div>

          {/* Phone Number & Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Phone size={13} className="text-[var(--color-jv-orange)]" />
                <span>Phone Number (with Country Code) *</span>
              </label>
              <input
                type="tel"
                required
                placeholder={marketType === "global" ? "+1 (555) 234-5678" : "+91 99097 00606"}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200/90 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[var(--color-jv-orange)] focus:ring-2 focus:ring-[var(--color-jv-orange)]/15 transition-all"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Building2 size={13} className="text-[var(--color-jv-orange)]" />
                <span>Company / Enterprise Organization</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Apex Global Industries Ltd"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200/90 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[var(--color-jv-orange)] focus:ring-2 focus:ring-[var(--color-jv-orange)]/15 transition-all"
              />
            </div>
          </div>

          {/* Interactive Monthly Media / Engagement Budget Selector */}
          <div>
            <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <DollarSign size={13} className="text-[var(--color-jv-orange)]" />
                Target Budget Range:
              </span>
              <span className="text-[10px] font-mono font-bold text-[var(--color-jv-orange)]">
                Selected: {selectedBudget}
              </span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {BUDGET_OPTIONS.map((tier) => {
                const isSelected = selectedBudget === tier.label;
                return (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setSelectedBudget(tier.label)}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#FFF4ED] border-[var(--color-jv-orange)] shadow-xs ring-1 ring-[var(--color-jv-orange)]/30"
                        : "bg-slate-50/80 border-slate-200/80 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <div
                      className={`text-xs font-bold leading-tight ${
                        isSelected ? "text-[var(--color-jv-orange)]" : "text-slate-800"
                      }`}
                    >
                      {tier.label}
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium mt-0.5 truncate">
                      {tier.sub}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Project Scope & Quick Chips */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
              <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700">
                Detailed Scope, Deliverables &amp; Objectives *
              </label>
              <span className="text-[10px] text-slate-400 font-mono">
                Click chips below to auto-insert objectives
              </span>
            </div>

            {/* Quick Scope Chips */}
            <div className="flex flex-wrap gap-1.5 mb-2.5">
              {QUICK_SCOPE_TAGS.map((tag, tIdx) => (
                <button
                  key={tIdx}
                  type="button"
                  onClick={() => handleAppendScopeTag(tag)}
                  className="text-[10px] font-medium px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-orange-50 hover:text-[var(--color-jv-orange)] hover:border-orange-200 border border-slate-200 text-slate-600 transition-colors cursor-pointer"
                >
                  + {tag}
                </button>
              ))}
            </div>

            <textarea
              rows={3}
              required
              placeholder={`Outline your technical requirements, goals, or growth roadblocks for ${selectedEntity?.shortName || entityName}...`}
              value={formData.projectScope}
              onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200/90 rounded-2xl px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[var(--color-jv-orange)] focus:ring-2 focus:ring-[var(--color-jv-orange)]/15 transition-all resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              className="w-full sm:flex-1 py-4 px-6 rounded-2xl bg-gradient-to-r from-[var(--color-jv-orange)] via-[#ea580c] to-[#c2410c] hover:from-[#ea580c] hover:to-[#9a3412] text-white text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[var(--color-jv-orange)]/25 hover:-translate-y-0.5 transition-all cursor-pointer group"
            >
              <span>Transmit RFP to {selectedEntity?.shortName || entityName}</span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>

            <a
              href={`https://wa.me/${activeWhatsapp}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all whitespace-nowrap cursor-pointer"
            >
              <MessageSquare size={16} />
              <span>Quick WhatsApp Desk</span>
            </a>
          </div>

          {/* Assurance Trust Badges Footer */}
          <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-center sm:justify-between gap-3 text-[11px] text-slate-500">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-[var(--color-jv-orange)]" />
              <span>Commercial confidentiality protected by JV Group enterprise charter.</span>
            </span>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1 text-slate-600 font-mono">
                <Clock size={12} className="text-slate-400" /> &lt; 4h SLA
              </span>
              <span className="flex items-center gap-1 text-slate-600 font-mono">
                <Lock size={12} className="text-emerald-600" /> Mutual NDA
              </span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
