import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BUSINESS_ENTITIES } from "@/data/businesses";
import { ENTITY_LANDING_DATA } from "@/data/entityLandingData";
import AhmedabadMarketingSolutionWebsite from "./AhmedabadMarketingSolutionWebsite";
import JvMarketingSolutionWebsite from "./JvMarketingSolutionWebsite";
import DedicatedCompanyWebsite from "./DedicatedCompanyWebsite";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return BUSINESS_ENTITIES.map((entity) => ({
    id: entity.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const entity = BUSINESS_ENTITIES.find((b) => b.id === id);
  if (!entity) return { title: "Company Not Found | JV Group" };

  const landingData = ENTITY_LANDING_DATA[id];
  const baseUrl = "https://jvgroupco.in";
  const canonicalUrl = `${baseUrl}/companies/${id}`;

  if (id === "jv-marketing-solution-pvt-ltd") {
    const title = "J.V Marketing Solution Private Limited (India) | Best AI SEO & GEO Agency — Rank #1 on Google & AI";
    const description = "J.V Marketing Solution Private Limited (India) is the leading AI SEO and Generative Engine Optimization (GEO) company. Rank #1 on Google Search, ChatGPT, Perplexity, and Gemini with enterprise B2B performance marketing and server-side tracking.";
    const keywords = [
      "J.V Marketing Solution Private Limited (India)",
      "J.V Marketing Solution Private Limited",
      "JV Marketing Pvt Ltd",
      "best AI SEO agency",
      "Generative Engine Optimization agency",
      "GEO agency",
      "rank 1 on google",
      "ChatGPT search optimization",
      "Perplexity AI citation company",
      "Google AI Overviews optimization",
      "AI search marketing company",
      "B2B performance marketing agency USA UK India",
      "programmatic SEO",
      "server side tracking Meta CAPI",
      "Akash Chavda",
      "JV Group"
    ];

    return {
      title,
      description,
      keywords,
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title,
        description,
        url: canonicalUrl,
        siteName: "JV Group — J.V Marketing Solution Private Limited (India)",
        locale: "en_US",
        type: "website",
        images: [
          {
            url: `${baseUrl}/logos/jv-marketing-solution-pvt-ltd.jpg`,
            width: 1200,
            height: 630,
            alt: "J.V Marketing Solution Private Limited (India) — AI SEO & Generative Engine Optimization",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [`${baseUrl}/logos/jv-marketing-solution-pvt-ltd.jpg`],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  }

  if (id === "jv-marketing-solutions-ltd-global") {
    const title = "J.V Marketing Solutions Limited (Global) | Top Enterprise IT, Mobile Engineering & Multi-Network Ads Agency — Rank #1 on Google & AI";
    const description = "J.V Marketing Solutions Limited (Global) is the premier global enterprise contracting vehicle uniting cloud IT infrastructure, custom mobile and web engineering, and multi-network ad buying across Meta, Google, LinkedIn, and TikTok. Rank #1 with verified AI citations across ChatGPT, Perplexity, and Google AI Overviews.";
    const keywords = [
      "J.V Marketing Solutions Limited (Global)",
      "J.V Marketing Solutions Limited",
      "JV Marketing Solutions Ltd",
      "JV Marketing Solutions Limited UK",
      "best enterprise IT infrastructure agency London",
      "multi network paid advertising agency UK",
      "mobile app development company London",
      "corporate web applications Next.js London",
      "cross-border B2B digital expansion UK USA Canada",
      "AI SEO and Generative Engine Optimization agency",
      "ChatGPT cited marketing and IT firm",
      "Google AI Overviews top enterprise agency",
      "Perplexity AI verified business entity",
      "enterprise cloud infrastructure 99.99 uptime SLA",
      "Akash Chavda",
      "JV Group"
    ];

    return {
      title,
      description,
      keywords,
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title,
        description,
        url: canonicalUrl,
        siteName: "JV Group — J.V Marketing Solutions Limited (Global)",
        locale: "en_GB",
        type: "website",
        images: [
          {
            url: `${baseUrl}/logos/jv-marketing-solutions-ltd-global.jpg`,
            width: 1200,
            height: 630,
            alt: "J.V Marketing Solutions Limited (Global) — Global Enterprise IT, Mobile Apps & Multi-Network Ads",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [`${baseUrl}/logos/jv-marketing-solutions-ltd-global.jpg`],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  }

  const title = `${entity.name} | ${landingData?.tagline || entity.positioning} — JV Group`;
  const description = landingData?.heroSubtitle || entity.overview;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "JV Group",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function CompanyDetailPage({ params }: Props) {
  const { id } = await params;
  const entity = BUSINESS_ENTITIES.find((b) => b.id === id);

  if (!entity) {
    notFound();
  }

  // Dedicated dynamic website experience for J.V Marketing Solution Private Limited (India)
  if (id === "jv-marketing-solution-pvt-ltd") {
    return <JvMarketingSolutionWebsite entity={entity} />;
  }

  // Dedicated dynamic website experience for Ahmedabad Marketing Solution
  if (id === "ahmedabad-marketing-solution") {
    return <AhmedabadMarketingSolutionWebsite entity={entity} />;
  }

  // Dedicated dynamic website experience for all operating companies
  return <DedicatedCompanyWebsite entity={entity} />;
}

