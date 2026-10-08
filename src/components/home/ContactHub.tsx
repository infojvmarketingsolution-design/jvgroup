"use client";

import { useState } from "react";
import { 
  Building2, 
  Mail, 
  MapPin, 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  Globe2, 
  Clock, 
  ShieldCheck 
} from "lucide-react";
import { BUSINESS_ENTITIES, JV_GROUP_META } from "@/data/businesses";
import SeasonalAtmosphere from "@/components/common/SeasonalAtmosphere";
import { useSeason } from "@/context/SeasonContext";

export default function ContactHub() {
  const { getSectionSeason } = useSeason();
  const sectionSeason = getSectionSeason(7);
  const [selectedEntity, setSelectedEntity] = useState<string>("general");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    inquiryType: "partnership",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="relative w-full py-28 bg-[#F8FAFC] text-[#18191C] overflow-hidden border-t border-[#E2E8F0]">
      <div className="absolute inset-0 white-grid-bg opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(243,99,35,0.06)_0%,transparent_70%)] pointer-events-none" />

      {/* 8th Section Dynamic Next Season Animation */}
      <SeasonalAtmosphere season={sectionSeason} sectionIndex={7} totalSections={8} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--color-jv-orange)]/30 bg-[#FFF4ED] mb-4">
            <Building2 size={14} className="text-[var(--color-jv-orange)]" />
            <span className="text-[var(--color-jv-orange)] text-xs font-bold tracking-[0.2em] uppercase">
              Corporate Headquarters & Inquiries
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#18191C] tracking-tight leading-tight mb-4">
            ENGAGE WITH JV GROUP. <br />
            <span className="text-shimmer-orange">
              BUILDING ENDURING ENTERPRISE.
            </span>
          </h2>
          <p className="text-[#4E5058] text-sm sm:text-base leading-relaxed">
            Connect with our executive leadership, initiate enterprise vendor discussions, or route inquiries directly to any of our 10 specialized business entities.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Info Column on Clean White Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white border border-[#E2E8F0] rounded-3xl p-7 sm:p-8 card-shadow-3d">
              <h3 className="text-xl font-bold text-[#18191C] mb-6 flex items-center gap-2">
                <Globe2 size={20} className="text-[var(--color-jv-orange)]" />
                Corporate Offices & Operations
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF4ED] border border-[var(--color-jv-orange)]/30 flex items-center justify-center text-[var(--color-jv-orange)] shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#18191C]">Central Headquarters</h4>
                    <p className="text-xs text-[#64748B] leading-relaxed mt-0.5">
                      JV Group Corporate Hub, S.G. Highway, Ahmedabad & Gandhinagar, Gujarat, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF4ED] border border-[var(--color-jv-orange)]/30 flex items-center justify-center text-[var(--color-jv-orange)] shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#18191C]">Direct Executive Comm Link</h4>
                    <p className="text-xs text-[#64748B] mt-0.5">
                      contact@jvgroupco.in • jvgroupco.in
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF4ED] border border-[var(--color-jv-orange)]/30 flex items-center justify-center text-[var(--color-jv-orange)] shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#18191C]">Official Hotlines</h4>
                    <p className="text-xs text-[#64748B] mt-0.5">
                      India: +91 99097 00606 | Global (USA/UK/CA): +44 7344556070
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF4ED] border border-[var(--color-jv-orange)]/30 flex items-center justify-center text-[var(--color-jv-orange)] shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#18191C]">Operational Hours</h4>
                    <p className="text-xs text-[#64748B] mt-0.5">
                      Monday – Saturday: 9:30 AM – 7:00 PM IST (24/7 Global IT Support)
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex items-center gap-3 text-xs text-[#64748B]">
                <ShieldCheck size={16} className="text-[var(--color-jv-orange)] shrink-0" />
                <span>Strict corporate confidentiality & institutional NDA compliance guaranteed.</span>
              </div>
            </div>

            {/* Quick Links Card */}
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 card-shadow-3d">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#2B2D31] mb-3">
                Looking for Flagship Portals?
              </h4>
              <div className="flex flex-wrap gap-2 text-xs">
                <a
                  href="https://wapipulse.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#F8FAFC] hover:bg-[#FFF4ED] text-[#2B2D31] hover:text-[var(--color-jv-orange)] border border-[#E2E8F0] transition-all font-semibold"
                >
                  Wapipulse.com →
                </a>
                <a
                  href="https://ticket4service.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#F8FAFC] hover:bg-[#FFF4ED] text-[#2B2D31] hover:text-[var(--color-jv-orange)] border border-[#E2E8F0] transition-all font-semibold"
                >
                  Ticket4service.com →
                </a>
                <a
                  href="https://campusdekho.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#F8FAFC] hover:bg-[#FFF4ED] text-[#2B2D31] hover:text-[var(--color-jv-orange)] border border-[#E2E8F0] transition-all font-semibold"
                >
                  Campus Dekho →
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Column on Clean White Card */}
          <div className="lg:col-span-7 bg-white border border-[#E2E8F0] rounded-3xl p-7 sm:p-10 card-shadow-3d">
            <div className="mb-6">
              <h3 className="text-2xl font-heading font-black text-[#18191C]">
                Submit an Enterprise Inquiry
              </h3>
              <p className="text-xs text-[#64748B] mt-1">
                Direct your message to the appropriate JV Group business or executive department.
              </p>
            </div>

            {formSubmitted ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-[#FFF4ED] border border-[var(--color-jv-orange)]/40 flex items-center justify-center text-[var(--color-jv-orange)] mx-auto mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="text-xl font-bold text-[#18191C] mb-2">
                  Inquiry Received with Highest Priority
                </h4>
                <p className="text-xs text-[#64748B] max-w-md mx-auto mb-6">
                  Thank you for reaching out to JV Group. Our corporate governance team and designated business liaisons will review your communication and respond within 24 business hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#2B2D31] text-xs font-bold"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Business Entity Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2B2D31] mb-2">
                    Direct Inquiry To JV Entity / Vertical:
                  </label>
                  <select
                    value={selectedEntity}
                    onChange={(e) => setSelectedEntity(e.target.value)}
                    className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-xs text-[#18191C] focus:outline-none focus:border-[var(--color-jv-orange)] transition-colors"
                  >
                    <option value="general">JV Group Corporate Headquarters (General / Investor Relations)</option>
                    {BUSINESS_ENTITIES.map((b) => (
                      <option key={b.id} value={b.id}>
                        {b.name} — [{b.categoryLabel}]
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2B2D31] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Mehta"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-xs text-[#18191C] placeholder-[#94A3B8] focus:outline-none focus:border-[var(--color-jv-orange)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2B2D31] mb-2">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rajesh@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-xs text-[#18191C] placeholder-[#94A3B8] focus:outline-none focus:border-[var(--color-jv-orange)] transition-colors"
                    />
                  </div>
                </div>

                {/* Phone & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2B2D31] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-xs text-[#18191C] placeholder-[#94A3B8] focus:outline-none focus:border-[var(--color-jv-orange)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2B2D31] mb-2">
                      Organization / Enterprise
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Mehta Enterprises"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-xs text-[#18191C] placeholder-[#94A3B8] focus:outline-none focus:border-[var(--color-jv-orange)] transition-colors"
                    />
                  </div>
                </div>

                {/* Inquiry Nature */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2B2D31] mb-2">
                    Inquiry Nature
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: "partnership", label: "Partnership" },
                      { id: "services", label: "Client Project" },
                      { id: "saas_demo", label: "SaaS Demo" },
                      { id: "careers", label: "Careers / PR" }
                    ].map((type) => (
                      <button
                        type="button"
                        key={type.id}
                        onClick={() => setFormData({ ...formData, inquiryType: type.id })}
                        className={`py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                          formData.inquiryType === type.id
                            ? "bg-[var(--color-jv-orange)] text-white shadow"
                            : "bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0] hover:text-[#18191C]"
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2B2D31] mb-2">
                    Message / Project Scope *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details regarding your requirement, objective, or intended collaboration..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-xs text-[#18191C] placeholder-[#94A3B8] focus:outline-none focus:border-[var(--color-jv-orange)] transition-colors resize-none"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[var(--color-jv-orange)] to-[#c2410c] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:shadow-[0_10px_25px_rgba(243,99,35,0.4)] transition-all"
                >
                  <span>Transmit Enterprise Inquiry</span>
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
