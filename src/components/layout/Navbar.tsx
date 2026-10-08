"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  ChevronDown, 
  Menu, 
  X, 
  Search, 
  Building2, 
  Layers, 
  ArrowUpRight,
  Phone,
  Globe2,
  Sparkles
} from "lucide-react";
import { BUSINESS_ENTITIES, JV_GROUP_META } from "@/data/businesses";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [businessDropdownOpen, setBusinessDropdownOpen] = useState(false);
  const [phoneDropdownOpen, setPhoneDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let prev = false;
    const handleScroll = () => {
      const isPast = window.scrollY > 20;
      if (isPast !== prev) {
        prev = isPast;
        setIsScrolled(isPast);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setBusinessDropdownOpen(false);
      }
      if (phoneRef.current && !phoneRef.current.contains(event.target as Node)) {
        setPhoneDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // If on ANY company's dedicated sub-website or any of its subpages, let it render ONLY its own dedicated standalone header
  // Placed AFTER all hooks to strictly adhere to React's Rules of Hooks
  if (pathname?.startsWith("/companies/")) {
    return null;
  }

  const filteredBusinesses = BUSINESS_ENTITIES.filter(
    (b) =>
      b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.positioning.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-[0_4px_25px_rgba(43,45,49,0.06)] py-1.5"
          : "bg-white/95 backdrop-blur-sm border-b border-[#E2E8F0]/80 py-2 sm:py-2.5"
      }`}
    >
      {/* Top Utility Strip (Ultra-Clean, Never Overflows on Any Laptop Screen) */}
      <div className="hidden lg:flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-1 mb-1 border-b border-[#F1F5F9] text-[11px] text-[#64748B]">
        <div className="flex items-center gap-2.5">
          <span className="flex items-center gap-1.5 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-jv-orange)] animate-pulse" />
            <strong className="text-[#18191C]">JV Group Ecosystem</strong>
          </span>
          <span className="text-[#CBD5E1]">•</span>
          <span>Global B2B: USA • UK • Canada • India</span>
          <span className="text-[#CBD5E1]">•</span>
          <span className="font-semibold text-[#18191C]">jvgroupco.in</span>
        </div>

        <div className="flex items-center gap-3 font-semibold shrink-0">
          <Link
            href="/ai-seo"
            className="group px-2.5 py-0.5 rounded-full bg-[#FFF4ED] hover:bg-[var(--color-jv-orange)] text-[var(--color-jv-orange)] hover:text-white border border-[var(--color-jv-orange)]/30 transition-all flex items-center gap-1.5 text-[10px] font-bold shadow-2xs"
          >
            <Sparkles size={11} className="text-[var(--color-jv-orange)] group-hover:text-white transition-colors" />
            <span>AI SEO / GEO</span>
            <span className="text-[8px] font-black uppercase px-1 py-0.2 rounded bg-[var(--color-jv-orange)] text-white group-hover:bg-white group-hover:text-[var(--color-jv-orange)] transition-colors">
              AI
            </span>
          </Link>
          <span className="text-[#CBD5E1]">|</span>
          <a
            href="tel:+447344556070"
            className="hover:text-[var(--color-jv-orange)] transition-colors flex items-center gap-1.5"
          >
            <Globe2 size={12} className="text-[var(--color-jv-orange)]" />
            <span>Global: +44 7344556070</span>
          </a>
          <span className="text-[#CBD5E1]">|</span>
          <a
            href="tel:+919909700606"
            className="hover:text-[var(--color-jv-orange)] transition-colors flex items-center gap-1.5"
          >
            <Phone size={12} className="text-[var(--color-jv-orange)]" />
            <span>India: +91 99097 00606</span>
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2 xl:gap-4">
        
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-[#E2E8F0] shadow-sm p-1 flex items-center justify-center overflow-hidden group-hover:border-[var(--color-jv-orange)] transition-colors shrink-0">
            <Image
              src="/jv-logo.jpg"
              alt="JV Group Logo"
              width={36}
              height={36}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black text-base sm:text-lg tracking-tight text-[#18191C] group-hover:text-[var(--color-jv-orange)] transition-colors leading-none">
              JV GROUP
            </span>
            <span className="text-[8px] sm:text-[9px] tracking-[0.14em] uppercase text-[#64748B] font-bold mt-1">
              Leadership With Trust
            </span>
          </div>
        </Link>

        {/* Desktop Single-Line Navigation (Comfortably fits on 100% zoom laptops) */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5">
          
          <Link
            href="/"
            className="px-2.5 xl:px-3 py-1.5 rounded-lg text-xs font-bold text-[#2B2D31] hover:text-[var(--color-jv-orange)] hover:bg-[#FFF4ED] transition-all whitespace-nowrap"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="px-2.5 xl:px-3 py-1.5 rounded-lg text-xs font-bold text-[#2B2D31] hover:text-[var(--color-jv-orange)] hover:bg-[#FFF4ED] transition-all whitespace-nowrap"
          >
            About Us
          </Link>

          {/* Mega Dropdown: Our Entities */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setBusinessDropdownOpen(!businessDropdownOpen)}
              onMouseEnter={() => setBusinessDropdownOpen(true)}
              className={`px-2.5 xl:px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                businessDropdownOpen
                  ? "text-[var(--color-jv-orange)] bg-[#FFF4ED]"
                  : "text-[#2B2D31] hover:text-[var(--color-jv-orange)] hover:bg-[#FFF4ED]"
              }`}
            >
              <span>Our Entities</span>
              <span className="px-1.5 py-0.2 text-[9px] font-black rounded-full bg-[var(--color-jv-orange)] text-white">
                9+
              </span>
              <ChevronDown
                size={12}
                className={`transition-transform duration-200 ${
                  businessDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Mega Dropdown Panel */}
            {businessDropdownOpen && (
              <div
                onMouseLeave={() => setBusinessDropdownOpen(false)}
                className="absolute top-full left-0 xl:left-1/2 xl:-translate-x-1/2 w-[720px] xl:w-[820px] mt-2 bg-white border border-[#E2E8F0] rounded-2xl shadow-[0_25px_60px_rgba(43,45,49,0.18)] p-5 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
              >
                {/* Header & Search */}
                <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[#E2E8F0]">
                  <div>
                    <h4 className="text-sm font-black text-[#18191C] flex items-center gap-2">
                      <Building2 size={16} className="text-[var(--color-jv-orange)]" />
                      JV Group Operating Businesses
                    </h4>
                    <p className="text-xs text-[#64748B]">
                      Dedicated Business Units under Unified Umbrella
                    </p>
                  </div>
                  <div className="relative w-60">
                    <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
                    <input
                      type="text"
                      placeholder="Search entity, service..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg pl-8 pr-3 py-1.5 text-xs text-[#18191C] placeholder-[#94A3B8] focus:outline-none focus:border-[var(--color-jv-orange)]"
                    />
                  </div>
                </div>

                {/* Businesses Grid */}
                <div className="grid grid-cols-2 gap-2.5 max-h-[340px] overflow-y-auto pr-1">
                  {filteredBusinesses.map((item) => (
                    <Link
                      key={item.id}
                      href={`/companies/${item.id}`}
                      onClick={() => setBusinessDropdownOpen(false)}
                      className="group flex flex-col p-2.5 rounded-xl bg-[#F8FAFC] hover:bg-[#FFF4ED] border border-[#E2E8F0] hover:border-[var(--color-jv-orange)]/40 transition-all"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2 min-w-0">
                          {item.logo ? (
                            <div className="relative w-8 h-5 bg-white rounded border border-[#E2E8F0] shrink-0 overflow-hidden">
                              <Image
                                src={item.logo}
                                alt={item.name}
                                fill
                                className="object-contain p-0.5"
                              />
                            </div>
                          ) : (
                            <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: item.accentColor }} />
                          )}
                          <span className="text-xs font-black text-[#18191C] group-hover:text-[var(--color-jv-orange)] transition-colors truncate">
                            {item.name}
                          </span>
                        </div>
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-white text-[#475569] border border-[#E2E8F0] whitespace-nowrap shrink-0">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#64748B] line-clamp-1 mt-1">
                        {item.domain}
                      </p>
                    </Link>
                  ))}
                </div>

                {/* Footer link to directory */}
                <div className="mt-3.5 pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-xs">
                  <Link
                    href="/ecosystem"
                    onClick={() => setBusinessDropdownOpen(false)}
                    className="font-bold text-[#64748B] hover:text-[var(--color-jv-orange)] transition-colors"
                  >
                    View Strategic Roadmap & Architecture →
                  </Link>
                  <Link
                    href="/#businesses"
                    onClick={() => setBusinessDropdownOpen(false)}
                    className="font-bold text-[var(--color-jv-orange)] hover:underline flex items-center gap-1"
                  >
                    <span>Full Ecosystem Directory</span>
                    <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/ecosystem"
            className="px-2.5 xl:px-3 py-1.5 rounded-lg text-xs font-bold text-[#2B2D31] hover:text-[var(--color-jv-orange)] hover:bg-[#FFF4ED] transition-all whitespace-nowrap"
          >
            Ecosystem
          </Link>

          <Link
            href="/services"
            className="px-2.5 xl:px-3 py-1.5 rounded-lg text-xs font-bold text-[#2B2D31] hover:text-[var(--color-jv-orange)] hover:bg-[#FFF4ED] transition-all whitespace-nowrap"
          >
            Services
          </Link>


          <Link
            href="/global"
            className="px-2.5 xl:px-3 py-1.5 rounded-lg text-xs font-bold text-[#2B2D31] hover:text-[var(--color-jv-orange)] hover:bg-[#FFF4ED] transition-all flex items-center gap-1 whitespace-nowrap"
          >
            <span>Global B2B</span>
            <span className="text-[8px] font-black uppercase px-1 py-0.2 rounded bg-[#FFF4ED] text-[var(--color-jv-orange)] border border-[var(--color-jv-orange)]/25">
              USA/UK
            </span>
          </Link>

          <Link
            href="/contact"
            className="px-2.5 xl:px-3 py-1.5 rounded-lg text-xs font-bold text-[#2B2D31] hover:text-[var(--color-jv-orange)] hover:bg-[#FFF4ED] transition-all whitespace-nowrap"
          >
            Contact
          </Link>
        </nav>

        {/* Right Action Area (Clean & Always Inside Display on 100% Zoom) */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-2.5 shrink-0">
          
          {/* Quick Phone Hotline Button */}
          <div className="relative" ref={phoneRef}>
            <button
              type="button"
              onClick={() => setPhoneDropdownOpen(!phoneDropdownOpen)}
              className="px-2.5 xl:px-3 py-2 rounded-xl bg-[#F8FAFC] hover:bg-[#FFF4ED] text-[#18191C] hover:text-[var(--color-jv-orange)] text-xs font-bold border border-[#E2E8F0] flex items-center gap-1.5 transition-all whitespace-nowrap cursor-pointer"
            >
              <Phone size={12} className="text-[var(--color-jv-orange)]" />
              <span className="hidden xl:inline">+91 99097 00606</span>
              <ChevronDown size={11} className="text-[#64748B]" />
            </button>

            {/* Quick Hotline Dropdown */}
            {phoneDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-64 bg-white border border-[#E2E8F0] rounded-2xl p-3 shadow-xl z-50 text-xs animate-in fade-in slide-in-from-top-1 duration-150">
                <span className="block text-[10px] uppercase font-bold text-[#64748B] mb-2 px-1">
                  Direct Inquiries Hotlines:
                </span>
                
                <a
                  href="tel:+919909700606"
                  className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#FFF4ED] transition-colors"
                >
                  <Phone size={14} className="text-[var(--color-jv-orange)] mt-0.5" />
                  <div>
                    <span className="block font-bold text-[#18191C]">+91 99097 00606</span>
                    <span className="text-[10px] text-[#64748B]">India Head Office Desk</span>
                  </div>
                </a>

                <a
                  href="tel:+447344556070"
                  className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#FFF4ED] transition-colors"
                >
                  <Globe2 size={14} className="text-[var(--color-jv-orange)] mt-0.5" />
                  <div>
                    <span className="block font-bold text-[#18191C]">+44 7344556070</span>
                    <span className="text-[10px] text-[#64748B]">Global B2B (USA, UK, Canada)</span>
                  </div>
                </a>
              </div>
            )}
          </div>

          {/* Primary CTA Button */}
          <Link
            href="/contact"
            className="px-3.5 xl:px-5 py-2.5 rounded-xl bg-gradient-to-r from-[var(--color-jv-orange)] to-[#c2410c] text-white text-xs font-bold tracking-wide uppercase hover:shadow-[0_4px_18px_rgba(243,99,35,0.4)] hover:-translate-y-0.5 transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Partner With JV</span>
            <ArrowUpRight size={13} />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#2B2D31] hover:text-[var(--color-jv-orange)] focus:outline-none cursor-pointer"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-white z-40 p-6 flex flex-col justify-between overflow-y-auto border-t border-[#E2E8F0]">
          <div className="flex flex-col gap-3.5">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold text-[#18191C] hover:text-[var(--color-jv-orange)]"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold text-[#18191C] hover:text-[var(--color-jv-orange)]"
            >
              About Us (Legacy & Leadership)
            </Link>
            <Link
              href="/ecosystem"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold text-[#18191C] hover:text-[var(--color-jv-orange)]"
            >
              Ecosystem Strategy & Hierarchy
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold text-[#18191C] hover:text-[var(--color-jv-orange)]"
            >
              All Services Catalog
            </Link>
            <Link
              href="/ai-seo"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold text-[#18191C] hover:text-[var(--color-jv-orange)] flex items-center justify-between"
            >
              <span>AI SEO & GEO Intelligence</span>
              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-[var(--color-jv-orange)] text-white">
                AI Search
              </span>
            </Link>
            <Link
              href="/global"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold text-[#18191C] hover:text-[var(--color-jv-orange)] flex items-center justify-between"
            >
              <span>Global B2B Expansion</span>
              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-[#FFF4ED] text-[var(--color-jv-orange)]">
                USA/UK/CA
              </span>
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold text-[#18191C] hover:text-[var(--color-jv-orange)]"
            >
              Contact Directory
            </Link>

            <div className="pt-4 border-t border-[#E2E8F0] space-y-2">
              <span className="text-[10px] uppercase font-bold text-[#64748B] block">
                Official Hotlines:
              </span>
              <a
                href="tel:+919909700606"
                className="flex items-center gap-2 text-sm font-bold text-[#18191C] hover:text-[var(--color-jv-orange)]"
              >
                <Phone size={14} className="text-[var(--color-jv-orange)]" />
                <span>India: +91 99097 00606</span>
              </a>
              <a
                href="tel:+447344556070"
                className="flex items-center gap-2 text-sm font-bold text-[#18191C] hover:text-[var(--color-jv-orange)]"
              >
                <Globe2 size={14} className="text-[var(--color-jv-orange)]" />
                <span>Global: +44 7344556070</span>
              </a>
            </div>
          </div>

          <div className="pt-6">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[var(--color-jv-orange)] to-[#c2410c] text-white text-center font-bold text-xs uppercase tracking-wider block shadow-md"
            >
              Partner With JV Group
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
