"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowUpRight, 
  ArrowUp 
} from "lucide-react";

export default function AmsFooter() {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#F8FAFC] text-[#0F172A] border-t-2 border-[#E2E8F0] pt-14 pb-24 sm:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-[#E2E8F0]">
          
          {/* Col 1: Brand & Parent Info (4 cols) */}
          <div className="lg:col-span-4 space-y-3.5">
            <Link href="/companies/ahmedabad-marketing-solution" className="inline-block">
              <div className="w-56 sm:w-64 h-20 sm:h-24 bg-white rounded-2xl p-2 relative shadow-sm border border-[#CBD5E1] flex items-center justify-center">
                <Image
                  src="/logos/ahmedabad-marketing-solution.jpg"
                  alt="Ahmedabad Marketing Solution logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            <p className="text-xs text-[#64748B] leading-relaxed font-medium">
              Ahmedabad Marketing Solution (AMS) is the premier regional growth marketing agency in Gujarat, delivering Google Maps supremacy, high-converting WhatsApp funnels, and AI search visibility for ambitious enterprises.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-white border border-[#CBD5E1] text-[11px] font-bold text-[#475569] shadow-2xs">
              <ShieldCheck size={14} className="text-[var(--color-jv-orange)]" />
              <span>An Operating Unit of JV Group</span>
            </div>
          </div>

          {/* Col 2: Growth Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[var(--color-jv-orange)]">
              Growth Services
            </h4>
            <ul className="space-y-2 text-xs text-[#64748B] font-medium">
              <li>
                <Link href="/companies/ahmedabad-marketing-solution/services" className="hover:text-[var(--color-jv-orange)] transition-colors">
                  Google Maps 3-Pack Supremacy
                </Link>
              </li>
              <li>
                <Link href="/companies/ahmedabad-marketing-solution/services" className="hover:text-[var(--color-jv-orange)] transition-colors">
                  Click-to-WhatsApp Performance Ads
                </Link>
              </li>
              <li>
                <Link href="/companies/ahmedabad-marketing-solution/ai-seo" className="hover:text-[var(--color-jv-orange)] transition-colors">
                  AI SEO & Generative Engine (GEO)
                </Link>
              </li>
              <li>
                <Link href="/companies/ahmedabad-marketing-solution/services" className="hover:text-[var(--color-jv-orange)] transition-colors">
                  Bilingual Gujarati & Hindi Creatives
                </Link>
              </li>
              <li>
                <Link href="/companies/ahmedabad-marketing-solution/services" className="hover:text-[var(--color-jv-orange)] transition-colors">
                  Google Search Commercial Intent Ads
                </Link>
              </li>
              <li>
                <Link href="/companies/ahmedabad-marketing-solution/roi-calculator" className="hover:text-[var(--color-jv-orange)] transition-colors">
                  Interactive ROI & Lead Calculator
                </Link>
              </li>
              <li>
                <Link href="/companies/ahmedabad-marketing-solution/packages" className="hover:text-[var(--color-jv-orange)] transition-colors">
                  SME Retainer Packages
                </Link>
              </li>
              <li>
                <Link href="/blog?company=ahmedabad-marketing-solution" className="hover:text-[var(--color-jv-orange)] transition-colors font-bold text-[var(--color-jv-orange)]">
                  Company Blog &amp; Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Ahmedabad Zones (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#0F172A]">
              Service Areas
            </h4>
            <ul className="space-y-2 text-xs text-[#64748B] font-medium">
              <li>
                <Link href="/companies/ahmedabad-marketing-solution#local-zones" className="hover:text-[var(--color-jv-orange)] transition-colors">
                  S.G. Highway Corridor
                </Link>
              </li>
              <li>
                <Link href="/companies/ahmedabad-marketing-solution#local-zones" className="hover:text-[var(--color-jv-orange)] transition-colors">
                  Sindhu Bhavan Road (SBR)
                </Link>
              </li>
              <li>
                <Link href="/companies/ahmedabad-marketing-solution#local-zones" className="hover:text-[var(--color-jv-orange)] transition-colors">
                  Prahlad Nagar & Satellite
                </Link>
              </li>
              <li>
                <Link href="/companies/ahmedabad-marketing-solution#local-zones" className="hover:text-[var(--color-jv-orange)] transition-colors">
                  C.G. Road & Ashram Road
                </Link>
              </li>
              <li>
                <Link href="/companies/ahmedabad-marketing-solution#local-zones" className="hover:text-[var(--color-jv-orange)] transition-colors">
                  Sanand & Changodar GIDC
                </Link>
              </li>
              <li>
                <Link href="/companies/ahmedabad-marketing-solution#local-zones" className="hover:text-[var(--color-jv-orange)] transition-colors">
                  Gandhinagar & GIFT City
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Desk (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[var(--color-jv-orange)]">
              Direct Contact Desk
            </h4>
            
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <Phone size={14} className="text-[var(--color-jv-orange)] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-[#94A3B8]">
                      Direct India Hotline:
                    </span>
                    <a href="tel:+919909700606" className="font-heading font-black text-sm text-[#0F172A] hover:text-[var(--color-jv-orange)] transition-colors">
                      +91 99097 00606
                    </a>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-[#94A3B8]">
                      Call &amp; WhatsApp Desk:
                    </span>
                    <a href="tel:+916354070709" className="font-heading font-black text-xs text-[#0F172A] hover:text-[var(--color-jv-orange)] transition-colors">
                      +91 63540 70709
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail size={14} className="text-[var(--color-jv-orange)] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] uppercase font-bold text-[#94A3B8]">
                    Official Email:
                  </span>
                  <a href="mailto:info@ahmedabadmarketingsolution.com" className="font-bold text-xs text-[#0F172A] hover:text-[var(--color-jv-orange)] transition-colors block break-all">
                    info@ahmedabadmarketingsolution.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-[#64748B]">
                <MapPin size={14} className="text-[var(--color-jv-orange)] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  B/201, Vitthal A Square, Motera Stadium Road, Motera, Ahmedabad 380005
                </span>
              </div>

              <div className="flex items-center gap-2.5 text-[#64748B]">
                <Clock size={14} className="text-[var(--color-jv-orange)] shrink-0" />
                <span>Mon – Sat: 9:30 AM – 7:30 PM IST</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p className="font-medium text-center sm:text-left">
            © {new Date().getFullYear()} Ahmedabad Marketing Solution. All rights reserved. A proud operating company of JV Group (<a href="https://jvgroupco.in" target="_blank" rel="noreferrer" className="hover:underline text-[var(--color-jv-orange)]">jvgroupco.in</a>).
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/" className="hover:text-[#0F172A] transition-colors flex items-center gap-1 font-bold text-[var(--color-jv-orange)]">
              <span>JV Group Portal</span>
              <ArrowUpRight size={12} />
            </Link>
            <Link href="/ecosystem" className="hover:text-[#0F172A] transition-colors">
              Ecosystem Directory
            </Link>
            <Link href="/contact" className="hover:text-[#0F172A] transition-colors">
              Group Directorate
            </Link>
            <a
              href="#top"
              onClick={scrollToTop}
              className="px-2.5 py-1 rounded-lg bg-white hover:bg-[#F1F5F9] text-[#0F172A] font-bold flex items-center gap-1 transition-all border border-[#CBD5E1] text-[11px] cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp size={11} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
