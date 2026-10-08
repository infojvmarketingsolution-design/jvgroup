"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { 
  Check, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  Phone, 
  MessageSquare,
  HelpCircle
} from "lucide-react";
import { BUSINESS_ENTITIES, BusinessEntity } from "@/data/businesses";
import { COMPANY_WEBSITES_DATA } from "@/data/companyWebsitesData";
import CompanyPageWrapper from "@/components/company/CompanyPageWrapper";
import RetainersPricingDecorative from "@/components/company/RetainersPricingDecorative";

export default function DynamicPackagesPage() {
  const params = useParams();
  const id = (params?.id as string) || "jv-marketing-solution-pvt-ltd";
  const entity: BusinessEntity = BUSINESS_ENTITIES.find((e) => e.id === id) || BUSINESS_ENTITIES[0];
  const companyData = COMPANY_WEBSITES_DATA[id] || COMPANY_WEBSITES_DATA["jv-marketing-solution-pvt-ltd"];

  const packages = companyData?.packages || [];

  return (
    <CompanyPageWrapper entity={entity}>
      <RetainersPricingDecorative
        entity={entity}
        packages={packages}
        title={`Packages & Engagement Models for ${entity.name}`}
        subtitle="Predictable deliverables, milestone-based execution, and zero hidden markups. Every package is tied directly to measurable outputs backed by the JV Group service standard."
        badge="TRANSPARENT COMMERCIAL PACKAGES"
      />
    </CompanyPageWrapper>
  );
}
