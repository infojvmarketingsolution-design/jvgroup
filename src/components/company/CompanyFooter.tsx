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
  ArrowUp,
  Sparkles
} from "lucide-react";
import { BusinessEntity, JV_GROUP_META } from "@/data/businesses";
import { COMPANY_WEBSITES_DATA } from "@/data/companyWebsitesData";

interface Props {
  entity: BusinessEntity;
}

export default function CompanyFooter({ entity }: Props) {
  const companyData = COMPANY_WEBSITES_DATA[entity.id];

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
            <Link href={`/companies/${entity.id}`} className="inline-block">
              <div className="w-56 sm:w-64 h-20 sm:h-24 bg-white rounded-2xl p-2 relative shadow-sm border border-[#CBD5E1] flex items-center justify-center">
                {entity.logo ? (
                  <Image
                    src={entity.logo}
                    alt={`${entity.name} logo`}
                    fill
                    sizes="(max-width: 640px) 224px, 256px"
                    className="object-contain p-1"
                    priority
                  />
                ) : (
                  <div className="flex items-center gap-2">
                    <Sparkles size={18} className="text-[var(--color-jv-orange)]" />
                    <span className="font-heading font-black text-sm text-[#18191C]">{entity.shortName}</span>
                  </div>
                )}
              </div>
            </Link>

            <p className="text-xs text-[#64748B] leading-relaxed font-medium">
              {entity.overview}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-white border border-[#CBD5E1] text-[11px] font-bold text-[#475569] shadow-2xs">
              <ShieldCheck size={14} className="text-[var(--color-jv-orange)]" />
              <span>Dedicated Operating Unit of JV Group</span>
            </div>
          </div>

          {/* Col 2: Services / Capabilities (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[var(--color-jv-orange)]">
              Solutions & Services
            </h4>
            <ul className="space-y-2 text-xs text-[#64748B] font-medium">
              {entity.coreServices.slice(0, 6).map((service, idx) => (
                <li key={idx}>
                  <Link 
                    href={`/companies/${entity.id}/services`} 
                    className="hover:text-[var(--color-jv-orange)] transition-colors truncate block"
                  >
                    {service}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href={`/companies/${entity.id}/packages`} 
                  className="hover:text-[var(--color-jv-orange)] transition-colors font-bold text-[var(--color-jv-orange)]"
                >
                  View Packages & Solutions →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company Navigation / Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#0F172A]">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-[#64748B] font-medium">
              <li>
                <Link href={`/companies/${entity.id}`} className="hover:text-[var(--color-jv-orange)] transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link 
                  href={`/companies/${entity.id}/${entity.id === 'jv-marketing-solution-pvt-ltd' ? 'why-jv-marketing' : 'why-us'}`} 
                  className="hover:text-[var(--color-jv-orange)] transition-colors"
                >
                  {entity.id === 'jv-marketing-solution-pvt-ltd' ? 'Why JV Marketing' : 'Why Us'}
                </Link>
              </li>
              <li>
                <Link href={`/companies/${entity.id}/services`} className="hover:text-[var(--color-jv-orange)] transition-colors">
                  Services Catalog
                </Link>
              </li>
              <li>
                <Link href={`/companies/${entity.id}/packages`} className="hover:text-[var(--color-jv-orange)] transition-colors">
                  Packages & Pricing
                </Link>
              </li>
              <li>
                <Link href={`/companies/${entity.id}/case-studies`} className="hover:text-[var(--color-jv-orange)] transition-colors">
                  Case Studies
                </Link>
              </li>
              {companyData?.customNavLinks?.map((cLink, cIdx) => (
                <li key={cIdx}>
                  <Link href={cLink.href} className="hover:text-[var(--color-jv-orange)] transition-colors">
                    {cLink.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={`/companies/${entity.id}/contact`} className="hover:text-[var(--color-jv-orange)] transition-colors">
                  Contact Desk
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
                <div>
                  <span className="block text-[10px] uppercase font-bold text-[#94A3B8]">
                    {entity.phoneLabel || "Direct Hotline"}:
                  </span>
                  <a href={`tel:${entity.phone}`} className="font-heading font-black text-sm text-[#0F172A] hover:text-[var(--color-jv-orange)] transition-colors">
                    {entity.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail size={14} className="text-[var(--color-jv-orange)] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] uppercase font-bold text-[#94A3B8]">
                    Corporate Email:
                  </span>
                  <a href={`mailto:${JV_GROUP_META.email}`} className="font-bold text-xs text-[#0F172A] hover:text-[var(--color-jv-orange)] transition-colors">
                    {JV_GROUP_META.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-[#64748B]">
                <MapPin size={14} className="text-[var(--color-jv-orange)] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {JV_GROUP_META.address}
                </span>
              </div>

              <div className="flex items-center gap-2.5 text-[#64748B]">
                <Clock size={14} className="text-[var(--color-jv-orange)] shrink-0" />
                <span>Monday – Saturday: 9:30 AM – 7:30 PM IST</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p className="font-medium text-center sm:text-left">
            © {new Date().getFullYear()} {entity.name}. All rights reserved. A dedicated business unit of JV Group (<a href="https://jvgroupco.in" target="_blank" rel="noreferrer" className="hover:underline text-[var(--color-jv-orange)]">jvgroupco.in</a>).
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/" className="hover:text-[#0F172A] transition-colors flex items-center gap-1 font-bold text-[var(--color-jv-orange)]">
              <span>JV Group Portal</span>
              <ArrowUpRight size={12} />
            </Link>
            <Link href="/ecosystem" className="hover:text-[#0F172A] transition-colors">
              All Businesses
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
