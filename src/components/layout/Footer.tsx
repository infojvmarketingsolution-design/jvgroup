"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Building2, Globe2, Mail, MapPin, Phone, ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";
import { BUSINESS_ENTITIES, JV_GROUP_META } from "@/data/businesses";
import SeasonalIndicator from "@/components/common/SeasonalIndicator";

export default function Footer() {
  const pathname = usePathname();

  // If on ANY company's dedicated sub-website or any of its subpages, let it render ONLY its own dedicated standalone footer
  if (pathname?.startsWith("/companies/")) {
    return null;
  }
  const marketingBusinesses = BUSINESS_ENTITIES.filter((b) => b.category === "marketing");
  const techLogisticsBusinesses = BUSINESS_ENTITIES.filter(
    (b) => b.category === "tech" || b.category === "logistics"
  );
  const otherBusinesses = BUSINESS_ENTITIES.filter(
    (b) => b.category === "realestate" || b.category === "itinfrastructure" || b.category === "education"
  );

  return (
    <footer className="bg-white text-[#18191C] border-t border-[#E2E8F0] pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Brand & Global Outreach Strip */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-12 mb-12 border-b border-[#E2E8F0] gap-6">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-xl bg-white border border-[#E2E8F0] shadow-sm p-1 flex items-center justify-center overflow-hidden">
              <Image
                src="/jv-logo.jpg"
                alt="JV Group Logo"
                width={44}
                height={44}
                className="object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-black text-2xl tracking-tight text-[#18191C]">
                  JV GROUP
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-[#FFF4ED] text-[var(--color-jv-orange)] border border-[var(--color-jv-orange)]/30">
                  Global Ecosystem
                </span>
              </div>
              <p className="text-xs text-[#64748B] tracking-wider uppercase font-semibold">
                Leadership With Trust • Multi-Industry Ecosystem
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-4">
            <Link
              href="/ecosystem"
              className="px-5 py-2.5 rounded-full bg-[#F8FAFC] hover:bg-[#F1F5F9] text-[#2B2D31] text-xs font-bold border border-[#E2E8F0] transition-colors w-full sm:w-auto text-center"
            >
              Ecosystem Strategy
            </Link>
            <Link
              href="/global"
              className="px-5 py-2.5 rounded-full bg-[#FFF4ED] text-[var(--color-jv-orange)] hover:bg-[var(--color-jv-orange)] hover:text-white border border-[var(--color-jv-orange)]/30 text-xs font-bold transition-all w-full sm:w-auto text-center"
            >
              Global B2B (USA, UK, Canada)
            </Link>
            <Link
              href="/#contact"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[var(--color-jv-orange)] to-[#c2410c] text-white text-xs font-bold transition-all shadow-md hover:-translate-y-0.5 w-full sm:w-auto text-center"
            >
              Partner With Us
            </Link>
          </div>
        </div>

        {/* Directory Grid (Responsive Across Mobile, Tablet, Laptop, Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 mb-16">
          
          {/* Column 1: Marketing & Media */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--color-jv-orange)] mb-4">
              Marketing & Media
            </h4>
            <ul className="space-y-3">
              {marketingBusinesses.map((b) => (
                <li key={b.id}>
                  <Link
                    href={`/companies/${b.id}`}
                    className="text-xs text-[#475569] hover:text-[var(--color-jv-orange)] transition-colors block"
                  >
                    <span className="font-bold text-[#18191C] block hover:text-[var(--color-jv-orange)]">
                      {b.name}
                    </span>
                    <span className="text-[10px] text-[#94A3B8]">{b.domain}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Tech & Logistics */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#2B2D31] mb-4">
              Technology & Logistics
            </h4>
            <ul className="space-y-3">
              {techLogisticsBusinesses.map((b) => (
                <li key={b.id}>
                  <Link
                    href={`/companies/${b.id}`}
                    className="text-xs text-[#475569] hover:text-[var(--color-jv-orange)] transition-colors block"
                  >
                    <span className="font-bold text-[#18191C] block hover:text-[var(--color-jv-orange)]">
                      {b.name}
                    </span>
                    <span className="text-[10px] text-[#94A3B8]">{b.domain}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Real Estate, IT & Education */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C2410C] mb-4">
              Real Estate, IT & Education
            </h4>
            <ul className="space-y-3">
              {otherBusinesses.map((b) => (
                <li key={b.id}>
                  <Link
                    href={`/companies/${b.id}`}
                    className="text-xs text-[#475569] hover:text-[var(--color-jv-orange)] transition-colors block"
                  >
                    <span className="font-bold text-[#18191C] block hover:text-[var(--color-jv-orange)]">
                      {b.name}
                    </span>
                    <span className="text-[10px] text-[#94A3B8]">{b.domain}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Dynamic Portals */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#64748B] mb-4">
              Ecosystem Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#475569]">
              <li>
                <Link href="/about" className="hover:text-[var(--color-jv-orange)] transition-colors font-bold text-[#18191C]">
                  About Us (Legacy & Values)
                </Link>
              </li>
              <li>
                <Link href="/ecosystem" className="hover:text-[var(--color-jv-orange)] transition-colors">
                  Strategic Content Architecture
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[var(--color-jv-orange)] transition-colors">
                  Services Directory Catalog
                </Link>
              </li>
              <li>
                <Link href="/ai-seo" className="hover:text-[var(--color-jv-orange)] transition-colors font-bold text-[var(--color-jv-orange)]">
                  AI SEO & GEO Intelligence Hub
                </Link>
              </li>
              <li>
                <Link href="/global" className="hover:text-[var(--color-jv-orange)] transition-colors">
                  USA, UK, Canada Global Hub
                </Link>
              </li>
              <li>
                <a href="https://campusdekho.in" target="_blank" rel="noreferrer" className="hover:text-[var(--color-jv-orange)] transition-colors flex items-center gap-1">
                  <span>Campus Dekho (campusdekho.in)</span>
                  <ArrowUpRight size={11} />
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[var(--color-jv-orange)] transition-colors">
                  Direct Inquiries & RFPs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Official Contact Hotlines */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#64748B] mb-4">
              Official Contact Desk
            </h4>
            <div className="space-y-3 text-xs text-[#475569]">
              <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <span className="block text-[10px] font-bold uppercase text-[var(--color-jv-orange)] mb-0.5">
                  Global Brand (USA / UK / Canada):
                </span>
                <a href="tel:+447344556070" className="font-bold text-[#18191C] hover:text-[var(--color-jv-orange)] flex items-center gap-1">
                  <Phone size={12} className="text-[var(--color-jv-orange)]" />
                  <span>+44 7344556070</span>
                </a>
              </div>

              <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <span className="block text-[10px] font-bold uppercase text-[#64748B] mb-0.5">
                  India Head Office Desk:
                </span>
                <a href="tel:+919909700606" className="font-bold text-[#18191C] hover:text-[var(--color-jv-orange)] flex items-center gap-1">
                  <Phone size={12} className="text-[var(--color-jv-orange)]" />
                  <span>+91 99097 00606</span>
                </a>
              </div>

              <div className="flex items-center gap-2 pt-1 text-xs">
                <Globe2 size={13} className="text-[var(--color-jv-orange)]" />
                <span>Portal: <strong>jvgroupco.in</strong></span>
              </div>
            </div>
          </div>

        </div>

        {/* Live Seasonal Atmosphere & System Engine Strip (Fixed in Footer) */}
        <div className="py-6 border-t border-[#E2E8F0] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--color-jv-orange)] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#18191C]">
                Atmosphere Engine:
              </span>
            </div>
            <SeasonalIndicator />
          </div>

          <div className="flex items-center gap-2 text-xs text-[#64748B]">
            <span>Weather Season Rotation active across all 8 ecosystem zones</span>
          </div>
        </div>

        {/* Bottom Rights & Management Credit */}
        <div className="pt-6 border-t border-[#E2E8F0] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>
            © {new Date().getFullYear()} All copyright reserved JV Group (jvgroupco.in). A diversified multi-sector business ecosystem operating across Technology, Marketing, Freight Logistics, IT Infrastructure, Real Estate, and Global Education.
          </p>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#64748B] shrink-0">
            <span>Developed & Managed by</span>
            <span className="text-[var(--color-jv-orange)] font-black">J.V Group</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
