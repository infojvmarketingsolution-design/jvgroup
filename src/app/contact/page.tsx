"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Building2, 
  Mail, 
  MapPin, 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  Globe2, 
  Clock, 
  ShieldCheck, 
  MessageSquare, 
  Send, 
  Layers, 
  ArrowUpRight,
  HelpCircle,
  ExternalLink,
  PhoneCall,
  Sparkles,
  Lock,
  ChevronRight,
  Check,
  TrendingUp,
  Zap,
} from "lucide-react";
import { BUSINESS_ENTITIES, JV_GROUP_META } from "@/data/businesses";
import SeasonalAtmosphere from "@/components/common/SeasonalAtmosphere";

export default function ContactPage() {
  const [selectedEntity, setSelectedEntity] = useState<string>("general");
  const [inquiryType, setInquiryType] = useState<string>("procurement");
  const [budgetTier, setBudgetTier] = useState<string>("enterprise");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const faqs = [
    {
      q: "Can we contract multiple JV Group companies under a single agreement?",
      a: "Yes. JV Group’s primary corporate advantage is unified contracting. You can procure custom software from Ekato Tech, international marketing from J.V Marketing Solutions, and overseas freight logistics from J.V Infinity under one unified Master Services Agreement (MSA) with consolidated invoicing."
    },
    {
      q: "How do international clients in the USA, UK, and Canada communicate with your teams?",
      a: "We maintain dedicated international client management desks (+44 7344556070) with 24/7 overlap across North American (EST, CST, PST) and European timezones, supported by secure client Slack/Teams channels and dedicated account directors."
    },
    {
      q: "Where is the JV Group corporate headquarters located?",
      a: "Our central corporate headquarters is located at B/201, Vitthal A Square, Motera Stadium Road, Motera, Ahmedabad 380005, Gujarat, India, with our International Business Desk located at 2 Earlham Street, London, WC2H 9RY, United Kingdom."
    },
    {
      q: "What is your turnaround time for enterprise RFPs and proposals?",
      a: "Our executive desk acknowledges all commercial inquiries within 4 business hours and delivers comprehensive enterprise technical proposals and solution roadmaps within 24 to 48 hours."
    }
  ];

  const divisions = [
    { id: "general", label: "Executive Directorate", desc: "Corporate Inquiries & Strategic Partnerships" },
    { id: "marketing", label: "Marketing & Paid Media", desc: "Digital Campaigns, SEO & Global Ad Buying" },
    { id: "tech", label: "Technology & Software", desc: "Enterprise SaaS, Web & Mobile Engineering" },
    { id: "logistics", label: "Global Trade & Freight", desc: "Multimodal Ocean & Air Cargo Logistics" },
    { id: "realestate", label: "Commercial Real Estate", desc: "GIFT City & S.G. Highway Properties" },
    { id: "education", label: "Higher Education & Visas", desc: "Student Admissions & Study Abroad Visas" },
  ];

  return (
    <div className="w-full min-h-screen bg-white text-slate-900 pt-24 sm:pt-28 pb-20 overflow-hidden">
      
      {/* Breadcrumb Bar */}
      <div className="bg-slate-50 border-b border-slate-200/80 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-[var(--color-jv-orange)] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="font-bold text-slate-900">Contact Us</span>
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-jv-orange)]">
            Official Executive Desk &amp; Hotlines
          </span>
        </div>
      </div>

      {/* Hero Header Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-[#FFFDFB] to-slate-50/60 border-b border-slate-200/80 overflow-hidden">
        <div className="absolute inset-0 white-grid-bg opacity-40 pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none z-0" />
        <SeasonalAtmosphere season="summer" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200 bg-orange-50/80 mb-5 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[var(--color-jv-orange)] animate-pulse" />
              <span className="text-[var(--color-jv-orange)] text-xs font-bold tracking-wider uppercase">
                Corporate Headquarters &amp; Inquiries
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-black text-slate-900 tracking-tight leading-[1.1] mb-5">
              Connect with <br />
              <span className="bg-gradient-to-r from-[var(--color-jv-orange)] via-[#ea580c] to-[#c2410c] bg-clip-text text-transparent">
                JV Group &amp; Operating Entities.
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-10 font-normal">
              Initiate executive discussions, route requests for proposals (RFPs) to any of our 9 specialized operating entities, or consult with our global trade and technology desks across India, the UK, the USA, and Canada.
            </p>

            {/* Fast Action Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-orange-300 transition-all">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200/70 flex items-center justify-center text-[var(--color-jv-orange)] mb-3 shadow-2xs">
                  <Phone size={18} />
                </div>
                <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider block mb-0.5">
                  India Direct Desk
                </span>
                <a
                  href="tel:+919909700606"
                  className="text-base font-black text-slate-900 hover:text-[var(--color-jv-orange)] transition-colors block"
                >
                  +91 99097 00606
                </a>
                <span className="text-[11px] text-slate-500 mt-1 block">Mon–Sat: 9:30 AM – 7:30 PM IST</span>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-orange-300 transition-all">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200/70 flex items-center justify-center text-[var(--color-jv-orange)] mb-3 shadow-2xs">
                  <Globe2 size={18} />
                </div>
                <span className="text-[10px] font-bold uppercase text-[var(--color-jv-orange)] tracking-wider block mb-0.5">
                  Global B2B Desk (UK/USA/CA)
                </span>
                <a
                  href="tel:+447344556070"
                  className="text-base font-black text-slate-900 hover:text-[var(--color-jv-orange)] transition-colors block"
                >
                  +44 7344556070
                </a>
                <span className="text-[11px] text-slate-500 mt-1 block">24/7 International Client Coverage</span>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-orange-300 transition-all">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200/70 flex items-center justify-center text-[var(--color-jv-orange)] mb-3 shadow-2xs">
                  <Mail size={18} />
                </div>
                <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider block mb-0.5">
                  Corporate Email
                </span>
                <a
                  href="mailto:info@jvgroupco.in"
                  className="text-base font-black text-slate-900 hover:text-[var(--color-jv-orange)] transition-colors block truncate"
                >
                  info@jvgroupco.in
                </a>
                <span className="text-[11px] text-slate-500 mt-1 block">Direct Executive Directorate Link</span>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-orange-300 transition-all">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200/70 flex items-center justify-center text-[var(--color-jv-orange)] mb-3 shadow-2xs">
                  <Mail size={18} />
                </div>
                <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider block mb-0.5">
                  Support Email
                </span>
                <a
                  href="mailto:support@jvgroupco.in"
                  className="text-base font-black text-slate-900 hover:text-[var(--color-jv-orange)] transition-colors block truncate"
                >
                  support@jvgroupco.in
                </a>
                <span className="text-[11px] text-slate-500 mt-1 block">24/7 Global Ecosystem Support</span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Main Interactive Contact Section */}
      <section className="relative py-20 sm:py-24 bg-slate-50/50 border-b border-slate-200/80 overflow-hidden">
        <SeasonalAtmosphere season="winter" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Info Column (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Headquarters Details Card */}
              <div className="bg-white border border-slate-200/90 rounded-3xl p-7 sm:p-8 shadow-sm">
                <h3 className="text-xl font-heading font-black text-slate-900 mb-6 flex items-center gap-2">
                  <Building2 size={20} className="text-[var(--color-jv-orange)]" />
                  <span>Corporate Hub &amp; Locations</span>
                </h3>

                <div className="space-y-6">
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-[var(--color-jv-orange)] shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Central Group Headquarters</h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                        B/201, Vitthal A Square, Motera Stadium Road, Motera, Ahmedabad 380005
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-[var(--color-jv-orange)] shrink-0">
                      <Globe2 size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">International Business Desk</h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                        2 Earlham Street, London, WC2H 9RY, United Kingdom
                      </p>
                      <p className="text-[11px] text-[var(--color-jv-orange)] font-semibold mt-0.5">
                        Hotline: +44 7344556070
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-[var(--color-jv-orange)] shrink-0">
                      <Clock size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Working Schedule</h4>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Monday – Saturday: 9:30 AM – 7:30 PM IST
                      </p>
                      <p className="text-[11px] text-[var(--color-jv-orange)] font-semibold mt-0.5">
                        24/7 Managed NOC &amp; Global Cloud Support
                      </p>
                    </div>
                  </div>

                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-500">
                  <ShieldCheck size={18} className="text-emerald-600 shrink-0" />
                  <span>Strict corporate confidentiality &amp; institutional NDA compliance guaranteed on all submissions.</span>
                </div>
              </div>

              {/* Direct WhatsApp Quick Chat Card */}
              <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white border border-slate-800 rounded-3xl p-7 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--color-jv-orange)] to-transparent" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400 block mb-1">
                  Instant Messaging Desk
                </span>
                <h4 className="text-lg font-black text-white mb-2">
                  Prefer Direct WhatsApp Discussion?
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-5 font-normal">
                  Connect immediately with our corporate coordinators for instant routing of urgent inquiries, RFP scopes, and service catalogs.
                </p>
                <a
                  href="https://wa.me/919909700606?text=Hello%20JV%20Group,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <MessageSquare size={15} />
                  <span>Open WhatsApp Direct (+91 99097 00606)</span>
                </a>
              </div>

              {/* Live Portals */}
              <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Direct Live Subsidiary Portals
                </h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  <a
                    href="https://campusdekho.in"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-orange-50 text-slate-700 hover:text-[var(--color-jv-orange)] border border-slate-200 transition-all font-semibold flex items-center gap-1"
                  >
                    <span>Campus Dekho (campusdekho.in)</span>
                    <ArrowUpRight size={11} />
                  </a>
                  <a
                    href="https://ekatotech.com"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-orange-50 text-slate-700 hover:text-[var(--color-jv-orange)] border border-slate-200 transition-all font-semibold flex items-center gap-1"
                  >
                    <span>Ekato Tech (ekatotech.com)</span>
                    <ArrowUpRight size={11} />
                  </a>
                </div>
              </div>

            </div>

            {/* Right Interactive RFP & Inquiry Form (7 Cols) */}
            <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-3xl p-7 sm:p-10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[var(--color-jv-orange)] via-amber-400 to-[#ea580c]" />

              <div className="mb-8">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-jv-orange)] bg-orange-50 px-2.5 py-0.5 rounded-md border border-orange-200/70">
                    Official Directorate Desk
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                    4-Hour SLA
                  </span>
                </div>
                <h3 className="text-2xl font-heading font-black text-slate-900">
                  Submit an Enterprise Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Route your message directly to the executive directorate or any specific operating entity.
                </p>
              </div>

              {formSubmitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 size={32} />
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                    Inquiry Logged • Reference #JV-{Math.floor(100000 + Math.random() * 900000)}
                  </span>
                  <h4 className="text-2xl font-heading font-black text-slate-900">
                    Inquiry Received with Priority
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.fullName || "Partner"}</strong>. Your message has been logged into the JV Group central desk. An executive coordinator will review your requirements and respond within 4 business hours.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href="https://wa.me/919909700606?text=Hello%20JV%20Group,%20I%20have%20submitted%20an%20inquiry%20via%20your%20website."
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                    >
                      <MessageSquare size={15} />
                      <span>Confirm on WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({
                          fullName: "",
                          email: "",
                          phone: "",
                          organization: "",
                          message: ""
                        });
                      }}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Entity Routing Chips */}
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">
                      1. Target Operating Division *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {divisions.map((div) => {
                        const isSelected = selectedEntity === div.id;
                        return (
                          <button
                            key={div.id}
                            type="button"
                            onClick={() => setSelectedEntity(div.id)}
                            className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
                              isSelected
                                ? "bg-orange-50 border-[var(--color-jv-orange)] ring-1 ring-[var(--color-jv-orange)]/30 text-slate-900 shadow-2xs"
                                : "bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700"
                            }`}
                          >
                            <span className="block font-bold text-xs truncate">{div.label}</span>
                            <span className="block text-[10px] text-slate-500 truncate mt-0.5">{div.desc}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Inquiry Type Tabs */}
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">
                      2. Scope of Engagement *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: "procurement", label: "Procure Services" },
                        { id: "partnership", label: "Partnership" },
                        { id: "global_b2b", label: "Global Trade (USA/UK)" },
                        { id: "visas", label: "Student/Work Visas" }
                      ].map((type) => (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setInquiryType(type.id)}
                          className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer text-center ${
                            inquiryType === type.id
                              ? "bg-slate-900 text-white border-slate-900 shadow-2xs"
                              : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                          }`}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma / John Smith"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-slate-50/70 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[var(--color-jv-orange)] focus:ring-2 focus:ring-orange-500/10 focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50/70 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[var(--color-jv-orange)] focus:ring-2 focus:ring-orange-500/10 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone & Organization Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 99097... / +44 7344..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-50/70 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[var(--color-jv-orange)] focus:ring-2 focus:ring-orange-500/10 focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        placeholder="Company name"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full bg-slate-50/70 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[var(--color-jv-orange)] focus:ring-2 focus:ring-orange-500/10 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Detailed Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Project Scope &amp; Specific Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Outline your inquiry, expected project deliverables, target markets (India, USA, UK, Canada), or specific service requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-50/70 border border-slate-200 rounded-xl p-3.5 text-xs text-slate-900 focus:outline-none focus:border-[var(--color-jv-orange)] focus:ring-2 focus:ring-orange-500/10 focus:bg-white transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="space-y-3 pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-[var(--color-jv-orange)] hover:bg-[#ea580c] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-orange-900/20 hover:shadow-lg transition-all cursor-pointer"
                    >
                      <Send size={14} />
                      <span>Transmit Enterprise Inquiry to JV Group</span>
                      <ArrowRight size={14} />
                    </button>

                    <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
                      <div className="flex items-center gap-1.5">
                        <Lock size={12} className="text-emerald-600" />
                        <span>Encrypted transmission via JV Group SSL</span>
                      </div>
                      <span>Direct Desk: +44 7344556070 | +91 99097 00606</span>
                    </div>
                  </div>

                </form>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* Direct Operating Subsidiaries Contact Grid */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-200/80 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-200 bg-orange-50 mb-3">
                <PhoneCall size={14} className="text-[var(--color-jv-orange)]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-jv-orange)]">
                  Direct Entity Routing
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900">
                Connect Directly with Operating Companies
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Every JV Group subsidiary operates dedicated phone desks and specialist project directors.
              </p>
            </div>

            <Link
              href="/#businesses"
              className="text-xs font-bold text-[var(--color-jv-orange)] hover:underline flex items-center gap-1.5"
            >
              <span>View Full Directory</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BUSINESS_ENTITIES.map((entity) => (
              <div
                key={entity.id}
                className="group p-6 rounded-3xl bg-white border border-slate-200 hover:border-orange-300 shadow-sm hover:shadow-xl transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    {entity.logo ? (
                      <div className="relative h-14 w-36 bg-white rounded-xl border border-slate-200 p-1 overflow-hidden shrink-0">
                        <Image
                          src={entity.logo}
                          alt={`${entity.name} logo`}
                          fill
                          className="object-contain p-0.5"
                        />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[var(--color-jv-orange)]">
                        <Building2 size={18} />
                      </div>
                    )}
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
                      {entity.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-heading font-black text-slate-900 group-hover:text-[var(--color-jv-orange)] transition-colors mb-1">
                    {entity.name}
                  </h3>

                  <p className="text-xs font-semibold text-slate-500 mb-2">
                    {entity.domain}
                  </p>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4 font-normal">
                    {entity.positioning}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <a
                    href={`tel:${entity.phone}`}
                    className="text-xs font-bold text-slate-800 hover:text-[var(--color-jv-orange)] flex items-center gap-1.5 transition-colors"
                  >
                    <Phone size={13} className="text-[var(--color-jv-orange)]" />
                    <span>{entity.phone}</span>
                  </a>

                  <Link
                    href={`/companies/${entity.id}/contact`}
                    className="px-3 py-1.5 rounded-xl bg-orange-50 hover:bg-[var(--color-jv-orange)] text-[var(--color-jv-orange)] hover:text-white text-xs font-bold border border-orange-200 transition-all flex items-center gap-1"
                  >
                    <span>Contact Desk</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Frequently Asked Questions (FAQ) Section */}
      <section className="py-20 sm:py-24 bg-slate-50/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-200 bg-orange-50 mb-3">
              <HelpCircle size={14} className="text-[var(--color-jv-orange)]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-jv-orange)]">
                Enterprise Inquiries FAQ
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Common questions regarding our contracting, global coordination, and multi-industry engagement.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm"
              >
                <h4 className="text-base font-bold text-slate-900 mb-2 flex items-start gap-2.5">
                  <span className="text-[var(--color-jv-orange)] font-black">Q.</span>
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5 font-normal">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
