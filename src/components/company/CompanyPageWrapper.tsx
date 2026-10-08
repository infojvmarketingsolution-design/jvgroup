"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BusinessEntity } from "@/data/businesses";
import CompanyHeader from "./CompanyHeader";
import CompanyFooter from "./CompanyFooter";

interface Props {
  entity: BusinessEntity;
  children: React.ReactNode;
}

export default function CompanyPageWrapper({ entity, children }: Props) {
  return (
    <div className="w-full min-h-screen bg-white text-[#18191C] flex flex-col font-sans selection:bg-[var(--color-jv-orange)] selection:text-white">
      {/* 1. Dedicated Company Navigation Header */}
      <CompanyHeader entity={entity} />

      {/* 2. Main Page Body Content */}
      <main className="flex-1 w-full">
        {children}
      </main>

      {/* 3. Left-Side Floating "Back to JV Group Portal" Pill */}
      <div className="fixed bottom-6 left-4 sm:left-6 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#18191C]/90 hover:bg-[var(--color-jv-orange)] text-white text-xs font-bold shadow-xl backdrop-blur-md border border-white/15 transition-all hover:scale-105 active:scale-95 group"
          title="Return to JV Group Corporate Portal"
        >
          <ArrowLeft size={14} className="text-[var(--color-jv-orange)] group-hover:text-white transition-colors" />
          <span className="hidden sm:inline">Back to JV Group Portal</span>
          <span className="sm:hidden">JV Group</span>
        </Link>
      </div>

      {/* 4. Dedicated Company Footer */}
      <CompanyFooter entity={entity} />
    </div>
  );
}
