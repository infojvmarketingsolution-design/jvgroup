"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  ArrowLeft, 
  ArrowRight, 
  Phone, 
  MessageSquare, 
  Sparkles, 
  Menu, 
  X,
  Calculator,
  Compass,
  FileCheck2,
  Cpu,
  MapPin,
  Mail
} from "lucide-react";

export default function AmsHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Prevent background scroll when mobile navigation is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Home", href: "/companies/ahmedabad-marketing-solution" },
    { label: "Services", href: "/companies/ahmedabad-marketing-solution/services" },
    { label: "AI SEO / GEO", href: "/companies/ahmedabad-marketing-solution/ai-seo" },
    { label: "ROI Calculator", href: "/companies/ahmedabad-marketing-solution/roi-calculator" },
    { label: "Packages", href: "/companies/ahmedabad-marketing-solution/packages" },
    { label: "Case Studies", href: "/companies/ahmedabad-marketing-solution/case-studies" },
    { label: "Contact", href: "/companies/ahmedabad-marketing-solution/contact" }
  ];

  const isActive = (href: string) => {
    if (href === "/companies/ahmedabad-marketing-solution") {
      return pathname === href || pathname === `${href}/`;
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* 1. Top Utility Status Strip */}
      <div className="w-full bg-[#18191C] text-[#E2E8F0] py-2 px-4 sm:px-6 lg:px-8 text-xs border-b border-[#2B2D31] relative z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          
          {/* Left: Back to JV Group Portal Button */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-nowrap shrink-0">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-[var(--color-jv-orange)] text-white font-bold text-xs transition-all border border-white/15 hover:border-[var(--color-jv-orange)] shadow-xs shrink-0 whitespace-nowrap"
            >
              <ArrowLeft size={12} />
              <span className="hidden sm:inline">Back to JV Group Portal</span>
              <span className="sm:hidden">Portal</span>
            </Link>

            <span className="text-[#475569] hidden sm:inline">|</span>
            <div className="hidden sm:flex items-center gap-1.5 text-[#94A3B8] whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-jv-orange)] animate-pulse shrink-0" />
              <strong className="text-white">Ahmedabad Marketing Solution</strong>
              <span className="text-[#64748B] hidden md:inline">• Official Business Unit</span>
            </div>
          </div>

          {/* Right: Direct Desk Contact Desk */}
          <div className="flex items-center gap-2.5 sm:gap-4 text-xs whitespace-nowrap shrink-0">
            <span className="hidden md:inline-flex items-center gap-1 text-[#94A3B8]">
              <MapPin size={11} className="text-[var(--color-jv-orange)]" />
              <span>S.G. Highway, Ahmedabad</span>
            </span>
            <span className="text-[#475569] hidden md:inline">|</span>
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="tel:+919909700606"
                className="text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors font-bold"
                title="Call Domestic Hotline: +91 99097 00606"
              >
                <Phone size={12} />
                <span>+91 99097 00606</span>
              </a>
              <span className="text-[#475569]">|</span>
              <a
                href="tel:+916354070709"
                className="text-[var(--color-jv-orange)] hover:underline flex items-center gap-1.5 transition-colors font-extrabold"
                title="Call & WhatsApp: +91 63540 70709"
              >
                <Phone size={12} />
                <span>+91 63540 70709</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* 2. Main Sticky Navigation Header */}
      <header className="sticky top-0 z-30 w-full bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-22 gap-2 lg:gap-3 xl:gap-4">
            
            {/* Prominent Brand Logo */}
            <Link 
              href="/companies/ahmedabad-marketing-solution" 
              className="flex items-center shrink-0 group focus:outline-hidden py-1"
            >
              <div className="relative w-36 sm:w-48 lg:w-52 h-12 sm:h-16 flex items-center justify-start transition-transform group-hover:scale-[1.02]">
                <Image
                  src="/logos/ahmedabad-marketing-solution.jpg"
                  alt="Ahmedabad Marketing Solution - JV Group"
                  fill
                  sizes="(max-width: 768px) 200px, 240px"
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Menu (ALL 7 Items Always Visible at 100% Zoom) */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 text-xs xl:text-[13px] font-bold text-[#334155]">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-2.5 xl:px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
                      active
                        ? "bg-[#FFF4ED] text-[var(--color-jv-orange)] font-extrabold shadow-2xs"
                        : "text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC]"
                    }`}
                  >
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Hub (Full Details ALWAYS Shown at 100% Zoom) */}
            <div className="hidden lg:flex items-center gap-1.5 xl:gap-2.5 shrink-0">
              {/* Direct Call with Full Phone Number */}
              <a
                href="tel:+919909700606"
                aria-label="Call +91 99097 00606"
                className="px-2.5 xl:px-3 py-2 rounded-xl bg-[#F8FAFC] hover:bg-[#FFF4ED] text-[#18191C] hover:text-[var(--color-jv-orange)] text-[11.5px] xl:text-xs font-bold border border-[#CBD5E1] flex items-center gap-1.5 transition-all whitespace-nowrap shadow-2xs cursor-pointer"
                title="Call Domestic Desk: +91 99097 00606"
              >
                <Phone size={13} className="text-[var(--color-jv-orange)] shrink-0" />
                <span>+91 99097 00606</span>
              </a>

              {/* Direct WhatsApp Action */}
              <a
                href="https://wa.me/916354070709?text=Hello%20Ahmedabad%20Marketing%20Solution,%20I%20want%20to%20discuss%20local%20marketing%20for%20my%20business%20in%20Ahmedabad."
                target="_blank"
                rel="noreferrer"
                aria-label="Chat on WhatsApp"
                className="p-2 xl:p-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xs transition-all cursor-pointer shrink-0"
                title="WhatsApp Direct Inquiries (+91 63540 70709)"
              >
                <MessageSquare size={15} />
              </a>

              {/* Primary High-Converting CTA Button */}
              <Link
                href="/companies/ahmedabad-marketing-solution/contact"
                className="px-3 xl:px-4 py-2 xl:py-2.5 rounded-xl bg-gradient-to-r from-[var(--color-jv-orange)] to-[#c2410c] hover:opacity-95 text-white font-extrabold text-[11px] xl:text-xs uppercase tracking-wider shadow-md shadow-[var(--color-jv-orange)]/25 hover:-translate-y-0.5 transition-all whitespace-nowrap flex items-center gap-1.5"
              >
                <span>Get Free Quote</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* Mobile Menu Hamburger (< 1024px) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#18191C] hover:text-[var(--color-jv-orange)] border border-[#E2E8F0] rounded-xl transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#E2E8F0] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-bold flex items-center justify-between ${
                      active
                        ? "bg-[#FFF4ED] text-[var(--color-jv-orange)] font-extrabold"
                        : "text-[#2B2D31] hover:bg-[#F8FAFC]"
                    }`}
                  >
                    <span className="text-sm font-bold">{link.label}</span>
                  </Link>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-[#E2E8F0] flex flex-col gap-2.5">
              <a 
                href="tel:+919909700606" 
                className="flex items-center gap-2 text-xs font-bold text-[#18191C] p-2.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1]"
              >
                <Phone size={14} className="text-[var(--color-jv-orange)]" />
                <span>Domestic Hotline: +91 99097 00606</span>
              </a>
              <a 
                href="tel:+916354070709" 
                className="flex items-center gap-2 text-xs font-bold text-[#18191C] p-2.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1]"
              >
                <Phone size={14} className="text-[var(--color-jv-orange)]" />
                <span>Call &amp; WhatsApp: +91 63540 70709</span>
              </a>
              <a 
                href="mailto:info@ahmedabadmarketingsolution.com" 
                className="flex items-center gap-2 text-xs font-bold text-[#18191C] p-2.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] truncate"
              >
                <Mail size={14} className="text-[var(--color-jv-orange)]" />
                <span className="truncate">info@ahmedabadmarketingsolution.com</span>
              </a>
              <Link
                href="/companies/ahmedabad-marketing-solution/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[var(--color-jv-orange)] to-[#c2410c] text-white text-center font-bold text-xs uppercase tracking-wider block shadow-md"
              >
                Get Free Strategy Proposal
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
