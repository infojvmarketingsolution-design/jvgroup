"use client";

import { Newspaper, ArrowUpRight, Calendar, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";
import SeasonalAtmosphere from "@/components/common/SeasonalAtmosphere";
import { useSeason } from "@/context/SeasonContext";

export default function Newsroom() {
  const { getSectionSeason } = useSeason();
  const sectionSeason = getSectionSeason(6);
  const newsItems = [
    {
      company: "Wapipulse.com",
      title: "Wapipulse Deploys Enterprise WhatsApp Cloud API Engine v3.0 with Advanced AI Workflow Automation",
      date: "October 2026",
      category: "Product Innovation",
      summary:
        "The flagship conversational SaaS platform introduced real-time multi-agent load balancing, generative chatbot handlers, and frictionless payment notifications for enterprise brands.",
      badge: "SaaS Milestone"
    },
    {
      company: "Campus Dekho",
      title: "Campus Dekho Surpasses 250,000 Guided Students Across 15,000+ Higher Education Institutions",
      date: "September 2026",
      category: "EdTech Growth",
      summary:
        "With new admissions counseling algorithms and comprehensive cut-off databases, Campus Dekho solidifies its position as one of India's fastest-growing academic discovery platforms.",
      badge: "Platform Scale"
    },
    {
      company: "Ekato Tech",
      title: "Ekato Tech Announces Global Enterprise AI Engineering Practice for Scalable Operations",
      date: "August 2026",
      category: "Enterprise Software",
      summary:
        "Expanding software engineering capabilities across 12 countries, Ekato Tech enables corporate clients to modernize legacy monoliths with high-throughput cloud microservices.",
      badge: "Global Tech"
    },
    {
      company: "J.V Marketing Services Limited",
      title: "J.V Marketing Services Limited Awarded Nationwide Institutional Communications Mandates",
      date: "July 2026",
      category: "Institutional Media",
      summary:
        "Strengthening national media buying networks, the public limited marketing arm successfully executed integrated campaigns reaching over 50 million citizens nationwide.",
      badge: "National Reach"
    },
    {
      company: "Ticket4service.com",
      title: "Ticket4service.com Unveils Smart SLA Management & Omnichannel Incident Resolution Suite",
      date: "June 2026",
      category: "Customer Experience",
      summary:
        "Enhancing customer support efficiency by 45%, the updated platform provides enterprise IT and client service departments with automated ticket dispatching and CSAT metrics.",
      badge: "Service SaaS"
    },
    {
      company: "J.V Overseas",
      title: "J.V Overseas Expands Global University Partnerships to 200+ Accredited Institutions",
      date: "May 2026",
      category: "Global Mobility",
      summary:
        "Establishing direct admission liaisons across the UK, Canada, Australia, and the EU, J.V Overseas achieves a landmark 98.4% student visa approval success rate.",
      badge: "International Expansion"
    }
  ];

  return (
    <section id="newsroom" className="relative w-full py-28 bg-white text-[#18191C] overflow-hidden border-t border-[#E2E8F0]">
      <div className="absolute inset-0 white-grid-bg opacity-50 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(243,99,35,0.06)_0%,transparent_70%)] pointer-events-none" />

      {/* 7th Section Dynamic Next Season Animation */}
      <SeasonalAtmosphere season={sectionSeason} sectionIndex={6} totalSections={8} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#E2E8F0] gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--color-jv-orange)]/30 bg-[#FFF4ED] mb-4">
              <Newspaper size={14} className="text-[var(--color-jv-orange)]" />
              <span className="text-[var(--color-jv-orange)] text-xs font-bold tracking-widest uppercase">
                Conglomerate Newsroom & Press
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#18191C] tracking-tight leading-tight">
              LATEST INSIGHTS & <br />
              <span className="text-shimmer-orange">
                ENTERPRISE ANNOUNCEMENTS.
              </span>
            </h2>
          </div>

          <Link
            href="#contact"
            className="text-xs font-bold text-[var(--color-jv-orange)] hover:underline flex items-center gap-1.5 self-start md:self-end"
          >
            <span>Media & Corporate PR Contacts</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <article
              key={index}
              className="group flex flex-col justify-between rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[var(--color-jv-orange)] p-6 sm:p-7 card-shadow-3d hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1.5"
            >
              <div>
                {/* Meta */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#FFF4ED] text-[var(--color-jv-orange)] border border-[var(--color-jv-orange)]/30">
                    {item.company}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#64748B]">
                    <Calendar size={12} />
                    <span>{item.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-[#18191C] group-hover:text-[var(--color-jv-orange)] transition-colors leading-snug mb-3">
                  {item.title}
                </h3>

                {/* Summary */}
                <p className="text-xs text-[#4E5058] leading-relaxed mb-6">
                  {item.summary}
                </p>
              </div>

              {/* Tag & Action */}
              <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                <span className="text-[11px] text-[#64748B] flex items-center gap-1">
                  <Tag size={11} />
                  {item.category}
                </span>
                <span className="text-xs font-bold text-[#2B2D31] group-hover:text-[var(--color-jv-orange)] flex items-center gap-1 transition-colors">
                  Read Release
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
