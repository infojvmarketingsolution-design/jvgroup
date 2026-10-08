"use client";

import React from "react";

// ==========================================
// 14 Precise Red Outline Line-Art SVG Icons
// Matching the visual design in the reference
// ==========================================

function SocialMediaIcon({ className = "w-11 h-11 text-[#E53935]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="6" y="8" width="28" height="20" rx="3" />
      <path d="M14 28v6 M26 28v6 M10 34h20" />
      <circle cx="16" cy="17" r="3.5" />
      <path d="M11 25c0-2.2 2.2-3.5 5-3.5s5 1.3 5 3.5" />
      <path d="M30 14h6a2 2 0 0 1 2 2v5l4 3v-12a2 2 0 0 0-2-2h-8" />
      <path d="M38 12a3 3 0 0 1 3 3" />
      <circle cx="36" cy="22" r="1.5" />
    </svg>
  );
}

function WebsiteDevelopmentIcon({ className = "w-11 h-11 text-[#E53935]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="4" y="6" width="40" height="27" rx="3.5" />
      <path d="M17 33v6 M31 33v6 M11 39h26" />
      <path d="M15 16l-5 4 5 4" />
      <path d="M33 16l5 4-5 4" />
      <path d="M26 13l-4 13" />
    </svg>
  );
}

function GoogleSeoIcon({ className = "w-11 h-11 text-[#E53935]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="5" y="8" width="38" height="26" rx="3.5" />
      <path d="M17 34v6 M31 34v6 M12 40h24" />
      <rect x="12" y="13" width="24" height="12" rx="2" />
      <text x="24" y="22" textAnchor="middle" fill="currentColor" stroke="none" fontSize="8" fontWeight="900" letterSpacing="0.8">SEO</text>
      <circle cx="32" cy="27" r="4.5" />
      <path d="M35.5 30.5l4 4" />
    </svg>
  );
}

function GoogleProfileIcon({ className = "w-11 h-11 text-[#E53935]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="12" y="4" width="24" height="40" rx="4.5" />
      <path d="M20 8h8" />
      <circle cx="24" cy="18" r="4.5" />
      <path d="M16 28c0-3.5 3.5-5 8-5s8 1.5 8 5" />
      <path d="M18 33h12 M18 37h7" />
      <circle cx="24" cy="40.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function QrCodeIcon({ className = "w-11 h-11 text-[#E53935]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 12V6a2 2 0 0 1 2-2h6" />
      <path d="M36 4h6a2 2 0 0 1 2 2v6" />
      <path d="M44 36v6a2 2 0 0 1-2 2h-6" />
      <path d="M12 44H6a2 2 0 0 1-2-2v-6" />
      <rect x="10" y="10" width="10" height="10" rx="1.5" />
      <rect x="13.5" y="13.5" width="3" height="3" fill="currentColor" stroke="none" />
      <rect x="28" y="10" width="10" height="10" rx="1.5" />
      <rect x="31.5" y="13.5" width="3" height="3" fill="currentColor" stroke="none" />
      <rect x="10" y="28" width="10" height="10" rx="1.5" />
      <rect x="13.5" y="31.5" width="3" height="3" fill="currentColor" stroke="none" />
      <path d="M28 28h4v4h-4z M34 32h4v4h-4z M28 35h4v3h-4z M35 28h3v2h-3z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function AdRunIcon({ className = "w-11 h-11 text-[#E53935]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="4" y="6" width="40" height="26" rx="3.5" />
      <path d="M17 32v6 M31 32v6 M10 38h28" />
      <path d="M12 21l8-4v10l-8-4v-2z" />
      <path d="M20 18h4v4h-4z" />
      <path d="M15 22v3" />
      <circle cx="34" cy="19" r="6" />
      <path d="M34 15.5v7 M32.5 17.5h2.5a1.2 1.2 0 0 1 0 2.4h-2a1.2 1.2 0 0 0 0 2.4h3" />
    </svg>
  );
}

function SoftwareDevIcon({ className = "w-11 h-11 text-[#E53935]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="8" y="8" width="32" height="22" rx="2.5" />
      <path d="M4 30h40l-3 6H7l-3-6z" />
      <circle cx="24" cy="19" r="4.5" />
      <path d="M24 11.5v2.5 M24 23.5v2.5 M16.5 19h2.5 M28.5 19h2.5" />
      <path d="M18.7 13.7l1.8 1.8 M27.5 22.5l1.8 1.8 M18.7 24.3l1.8-1.8 M27.5 15.5l1.8-1.8" />
    </svg>
  );
}

function EnterpriseSolutionsIcon({ className = "w-11 h-11 text-[#E53935]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M8 42V15a2 2 0 0 1 2-2h14v29" />
      <path d="M24 7h14a2 2 0 0 1 2 2v33" />
      <path d="M13 18h3 M13 24h3 M13 30h3 M13 36h3" />
      <path d="M30 13h3 M30 19h3 M30 25h3 M30 31h3 M30 37h3" />
      <path d="M4 42h40" />
      <circle cx="24" cy="9.5" r="3" />
      <path d="M24 4.5v2 M20.5 7l1.5 1.5 M27.5 7l-1.5 1.5" />
    </svg>
  );
}

function UiUxDesignIcon({ className = "w-11 h-11 text-[#E53935]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="24" cy="14" r="8" />
      <circle cx="21" cy="14" r="2.5" />
      <circle cx="27" cy="14" r="2.5" />
      <path d="M23.5 14h1" />
      <path d="M33 26l7-7 3 3-7 7-4 1 1-4z" />
      <path d="M10 40c0-6 6-10 14-10 2.8 0 5.2.5 7.2 1.6" />
      <rect x="7" y="31" width="12" height="10" rx="1.5" strokeDasharray="2 1.5" />
    </svg>
  );
}

function AssuranceTestingIcon({ className = "w-11 h-11 text-[#E53935]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="6" y="6" width="36" height="34" rx="4" />
      <path d="M6 14h36" />
      <circle cx="11" cy="10" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="10" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="20" cy="10" r="1.2" fill="currentColor" stroke="none" />
      <path d="M12 21l2.5 2.5 4.5-4.5" />
      <path d="M22 21h14" />
      <path d="M12 29l2.5 2.5 4.5-4.5" />
      <path d="M22 29h14" />
      <path d="M12 36l2.5 2 4-4" />
      <path d="M21 36h11" />
    </svg>
  );
}

function MaintenanceSupportIcon({ className = "w-11 h-11 text-[#E53935]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="20" cy="22" r="7" />
      <path d="M20 12v3 M20 29v3 M10 22h3 M27 22h3 M13 15l2 2 M25 27l2 2 M13 29l2-2 M25 17l2-2" />
      <path d="M37 10l-12 12 4 4 12-12a4 4 0 0 0-4-4z" />
      <path d="M37 13.5l3-3" />
      <circle cx="34" cy="34" r="5" />
      <path d="M34 27v2 M34 39v2 M27 34h2 M39 34h2" />
    </svg>
  );
}

function DevOpsIcon({ className = "w-11 h-11 text-[#E53935]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M14 36H11a7 7 0 0 1-1-13.9 10 10 0 0 1 19.3-3.6A7.5 7.5 0 0 1 37 25a7.5 7.5 0 0 1-3 11h-2" />
      <path d="M18 34c-2.5 0-4-1.5-4-3s1.5-3 4-3 5 6 8 6 4-1.5 4-3-1.5-3-4-3-5 6-8 6z" />
    </svg>
  );
}

function SecuritySolutionsIcon({ className = "w-11 h-11 text-[#E53935]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M24 4L8 10v12c0 11 7 20 16 22 9-2 16-11 16-22V10L24 4z" />
      <rect x="18" y="21" width="12" height="11" rx="2" />
      <path d="M21 21v-4a3 3 0 0 1 6 0v4" />
      <circle cx="24" cy="26" r="1.5" fill="currentColor" stroke="none" />
      <path d="M24 27.5v2" />
    </svg>
  );
}

function BigDataAnalyticsIcon({ className = "w-11 h-11 text-[#E53935]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="4" y="6" width="40" height="27" rx="3.5" />
      <path d="M17 33v6 M31 33v6 M10 39h28" />
      <path d="M10 26v-6 M16 26v-10 M22 26v-14" />
      <path d="M10 22l6-4 6 2 8-8 6 3" />
      <circle cx="36" cy="15" r="2" />
      <circle cx="33" cy="24" r="3.5" />
      <path d="M33 20.5v3.5h3.5" />
    </svg>
  );
}

// ==========================================
// 14 Services - Just Nominal Details
// Exactly matching the 14 cards in user image
// ==========================================

export interface NominalServiceItem {
  id: string;
  title: string;
  description: string;
  product?: string;
  aiSeoData?: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const NOMINAL_SERVICES_LIST: NominalServiceItem[] = [
  // Row 1
  {
    id: "social-media-management",
    title: "Social Media Management",
    description: "We create custom software solutions tailored to your business needs, ensuring seamless functionality and a user-friendly experience. Our expert team delivers innovative and reliable software that helps your business grow.",
    product: "Wapipulse Social Broadcaster & Creative Studio",
    aiSeoData: "Social Entity Signals & Brand Citations",
    icon: SocialMediaIcon
  },
  {
    id: "website-development",
    title: "Website Development",
    description: "We offer customized enterprise solutions to streamline your business operations, enhance efficiency, and drive growth. Our expert team provides tailored strategies and cutting-edge technology to meet your unique needs.",
    product: "Ekato Tech Web Framework & JV Cloud Hosting",
    aiSeoData: "Semantic HTML5, Schema.org & 99/100 Core Vitals",
    icon: WebsiteDevelopmentIcon
  },
  {
    id: "google-seo",
    title: "Google SEO",
    description: "Assurance and Testing services ensure that your software or systems function flawlessly, identifying and fixing issues before they impact users. Our expert team guarantees high-quality, reliable performance through rigorous testing.",
    product: "JV AI Visibility Audit Tool & Schema Engine",
    aiSeoData: "Google AI Overviews & LocalBusiness Entity Graph",
    icon: GoogleSeoIcon
  },
  {
    id: "google-profile-listing",
    title: "Google Profile Listning (Business Account)",
    description: "Our maintenance and support services ensure your website runs smoothly and stays up-to-date. From fixing bugs to implementing updates, we're here to keep everything running effortlessly, so you can focus on your business.",
    product: "Wapipulse 5-Star Review Funnel & Geotag Engine",
    aiSeoData: "Google Maps 3-Pack & AI Knowledge Graph Citations",
    icon: GoogleProfileIcon
  },
  // Row 2
  {
    id: "qr-code-generation",
    title: "Qr Code Generation",
    description: "DevOps services streamline your development and operations by automating processes, enhancing collaboration, and speeding up software delivery. With continuous integration and deployment, we ensure your systems are efficient, scalable, and secure.",
    product: "Wapipulse Dynamic QR Generator & Chatbot",
    aiSeoData: "Review Velocity Signal for Local Maps Rank",
    icon: QrCodeIcon
  },
  {
    id: "ad-run-meta-google",
    title: "Ad Run :- Meta & Google",
    description: "At Security Solutions, we provide reliable and advanced security systems to protect your home and business. With cutting-edge technology and a commitment to safety, we offer peace of mind 24/7.",
    product: "Wapipulse WhatsApp Ads Bridge & Meta Pixel",
    aiSeoData: "Commercial Intent Extraction & Dynamic Retargeting",
    icon: AdRunIcon
  },
  {
    id: "software-development",
    title: "Software Development",
    description: "We create custom software solutions tailored to your business needs, ensuring seamless functionality and a user-friendly experience. Our expert team delivers innovative and reliable software that helps your business grow.",
    product: "Ekato Tech Enterprise Core & Wapipulse API",
    aiSeoData: "PWA Architecture & AI-Ready Headless APIs",
    icon: SoftwareDevIcon
  },
  {
    id: "enterprise-solutions",
    title: "Enterprise Solutions",
    description: "We offer customized enterprise solutions to streamline your business operations, enhance efficiency, and drive growth. Our expert team provides tailored strategies and cutting-edge technology to meet your unique needs.",
    product: "JV Group Enterprise CRM & Ticket4service Backend",
    aiSeoData: "Internal Knowledge Graph & AI Operations Copilot",
    icon: EnterpriseSolutionsIcon
  },
  // Row 3
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "Our UI/UX design services focus on creating intuitive, user-friendly digital experiences that prioritize both functionality and aesthetics. We ensure that every interaction feels seamless, enhancing user satisfaction and engagement.",
    product: "JV UI Design Kit & Figma Component Library",
    aiSeoData: "Cumulative Layout Shift (CLS = 0) & Mobile UX Vitals",
    icon: UiUxDesignIcon
  },
  {
    id: "assurance-and-testing",
    title: "Assurance and Testing",
    description: "Assurance and Testing services ensure that your software or systems function flawlessly, identifying and fixing issues before they impact users. Our expert team guarantees high-quality, reliable performance through rigorous testing.",
    product: "Ticket4service QA Suite & Automated Test Engine",
    aiSeoData: "Crawl Error Elimination & Bot Render Verification",
    icon: AssuranceTestingIcon
  },
  {
    id: "maintenance-and-support",
    title: "Maintenance and Support",
    description: "Our maintenance and support services ensure your website runs smoothly and stays up-to-date. From fixing bugs to implementing updates, we're here to keep everything running effortlessly, so you can focus on your business.",
    product: "Ticket4service SLA Helpdesk & JV Support Portal",
    aiSeoData: "Zero Search Downtime & Immediate 404/500 Recovery",
    icon: MaintenanceSupportIcon
  },
  {
    id: "devops-services",
    title: "DevOps Services",
    description: "DevOps services streamline your development and operations by automating processes, enhancing collaboration, and speeding up software delivery. With continuous integration and deployment, we ensure your systems are efficient, scalable, and secure.",
    product: "JV Cloud Infrastructure & Containerized CI/CD",
    aiSeoData: "Global CDN Edge Caching for 15ms TTFB",
    icon: DevOpsIcon
  },
  // Row 4
  {
    id: "security-solutions",
    title: "Security Solutions",
    description: "At Security Solutions, we provide reliable and advanced security systems to protect your home and business. With cutting-edge technology and a commitment to safety, we offer peace of mind 24/7.",
    product: "JV Security Shield & Enterprise WAF Firewall",
    aiSeoData: "HTTPS Security Trust Signal & Malware-Free Status",
    icon: SecuritySolutionsIcon
  },
  {
    id: "big-data-analytics",
    title: "Big Data Analytics",
    description: "Big Data Analytics helps businesses make smarter decisions by analyzing large sets of data to uncover patterns, trends, and insights. With powerful tools, it turns complex data into valuable information, driving growth and innovation.",
    product: "JV Intelligence Dashboard & GA4 BigQuery Bridge",
    aiSeoData: "AI Search Share & Competitor Attribution Analytics",
    icon: BigDataAnalyticsIcon
  }
];

interface OurProvidedServicesProps {
  onSelectService?: (serviceTitle: string) => void;
  className?: string;
}

export default function OurProvidedServices({
  onSelectService,
  className = ""
}: OurProvidedServicesProps) {

  const handleCardClick = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    } else {
      const quoteEl = document.getElementById("quote-form");
      if (quoteEl) {
        quoteEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="services" className={`py-16 sm:py-24 bg-white border-b border-[#E2E8F0] ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ==========================================
            Top Header Matching the User Screenshot
            "Services" (red)
            "Our Provided Services" (Services in red)
            Nominal Subtitle
           ========================================== */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <span className="text-[#E53935] font-bold text-sm tracking-wide inline-block mb-2">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#0F172A] tracking-tight">
            Our Provided <span className="text-[#E53935]">Services</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] font-normal mt-3.5 leading-relaxed max-w-2xl mx-auto">
            All distant inhabit amongst by. Appetite welcomed interest not. Estimable education for disposing pronounce her. John size good plan sent old roof own. Inquietude saw understood his friendship frequently yet.
          </p>
        </div>

        {/* ==========================================
            14 Services Grid (4 Columns on Desktop)
            With Nominal Details, Relevant Product & AI SEO/GEO Info
           ========================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {NOMINAL_SERVICES_LIST.map((service) => {
            const IconComponent = service.icon;

            return (
              <div
                key={service.id}
                onClick={() => handleCardClick(service.title)}
                className="bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-8 border border-[#E2E8F0]/80 hover:border-[#E53935]/40 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Red Line-Art Icon */}
                  <div className="mb-5">
                    <div className="w-12 h-12 flex items-center justify-start text-[#E53935] group-hover:scale-105 transition-transform duration-200">
                      <IconComponent className="w-11 h-11 text-[#E53935]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-[17px] font-heading font-bold text-[#0F172A] group-hover:text-[#E53935] transition-colors mb-3 leading-snug">
                    {service.title}
                  </h3>

                  {/* Nominal Description */}
                  <p className="text-xs sm:text-[13px] text-[#64748B] font-normal leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Relevant Product & AI SEO/GEO Details */}
                <div className="mt-5 pt-3.5 border-t border-[#F1F5F9] space-y-1.5 text-[11px]">
                  {service.product && (
                    <div className="flex items-start gap-1.5 text-[#0F172A]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-jv-orange)] shrink-0 mt-1.5" />
                      <span className="leading-tight">
                        <strong className="text-amber-800 font-bold">Product:</strong> {service.product}
                      </span>
                    </div>
                  )}
                  {service.aiSeoData && (
                    <div className="flex items-start gap-1.5 text-[#0F172A]">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600 shrink-0 mt-1.5" />
                      <span className="leading-tight">
                        <strong className="text-purple-800 font-bold">AI SEO / GEO:</strong> {service.aiSeoData}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
