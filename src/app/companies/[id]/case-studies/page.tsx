import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BUSINESS_ENTITIES } from "@/data/businesses";
import { COMPANY_WEBSITES_DATA } from "@/data/companyWebsitesData";
import CaseStudiesClient from "./CaseStudiesClient";

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
  if (!entity) return { title: "Case Studies | JV Group" };

  const baseUrl = "https://jvgroupco.in";
  const canonicalUrl = `${baseUrl}/companies/${id}/case-studies`;

  if (id === "jv-marketing-solution-pvt-ltd") {
    const title = "Case Studies: AI SEO, GEO & Google Rank #1 Results | J.V Marketing Solution Private Limited";
    const description = "Verified case studies from J.V Marketing Solution Private Limited. Documented proof of Google Rank #1, ChatGPT Search citations, Perplexity AI recommendations, and 4.6x organic pipeline growth across North America, UK, and India.";
    const keywords = [
      "AI SEO Case Studies",
      "Generative Engine Optimization GEO Case Study",
      "Google Rank 1 Case Study",
      "ChatGPT AI Citations Agency Results",
      "Perplexity AI SEO Proof",
      "J.V Marketing Solution Private Limited Case Studies",
      "J.V Marketing Solution Pvt Ltd",
      "JV Marketing Pvt Ltd Results",
      "B2B Enterprise Lead Generation Case Study",
      "Server Side Tracking Meta CAPI",
      "Google Map Pack 1 Case Study",
      "Programmatic SEO Case Studies India USA UK",
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
        siteName: "J.V Marketing Solution Private Limited",
        locale: "en_US",
        type: "article",
        images: [
          {
            url: "/images/og-case-studies.jpg",
            width: 1200,
            height: 630,
            alt: "J.V Marketing Solution Private Limited — AI SEO & Google Rank #1 Case Studies",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: ["/images/og-case-studies.jpg"],
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

  // Fallback for other entities
  return {
    title: `Case Studies & Verified Results | ${entity.name}`,
    description: `Real metrics and verified case studies from ${entity.name}. Commercial outcomes across ${entity.marketFocus}.`,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function DynamicCaseStudiesPage({ params }: Props) {
  const { id } = await params;
  const entity = BUSINESS_ENTITIES.find((b) => b.id === id);
  if (!entity) notFound();

  const companyData = COMPANY_WEBSITES_DATA[id] || COMPANY_WEBSITES_DATA["jv-marketing-solution-pvt-ltd"];
  const caseStudies = companyData?.caseStudies || [];

  const canonicalUrl = `https://jvgroupco.in/companies/${id}/case-studies`;

  // Schema.org JSON-LD structured data graph
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${canonicalUrl}#collection`,
        "url": canonicalUrl,
        "name": `Case Studies & SEO Rank #1 Verification | ${entity.name}`,
        "description": `Verified case studies demonstrating Google Rank #1 and Generative Engine Optimization (GEO) citations delivered by ${entity.name}.`,
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://jvgroupco.in/#website",
          "url": "https://jvgroupco.in",
          "name": "JV Group"
        },
        "about": [
          {
            "@type": "Thing",
            "name": "Generative Engine Optimization (GEO)"
          },
          {
            "@type": "Thing",
            "name": "Search Engine Optimization (SEO)"
          },
          {
            "@type": "Thing",
            "name": "AI Search Citations"
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": `${canonicalUrl}#itemlist`,
        "name": `${entity.name} Verified Case Studies`,
        "itemListElement": caseStudies.map((cs, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "item": {
            "@type": "CreativeWork",
            "name": cs.title,
            "description": cs.challenge,
            "genre": cs.sector,
            "author": {
              "@type": "Organization",
              "name": entity.name,
              "url": `https://jvgroupco.in/companies/${entity.id}`
            },
            "review": {
              "@type": "Review",
              "reviewBody": cs.quote,
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": cs.clientRole || "Enterprise Client Executive"
              }
            }
          }
        }))
      },
      {
        "@type": ["Organization", "Corporation"],
        "@id": `https://jvgroupco.in/companies/${entity.id}#organization`,
        "name": entity.name,
        "legalName": entity.name,
        "alternateName": ["JV Marketing Pvt Ltd", "J.V Marketing Solution Pvt Ltd"],
        "url": `https://jvgroupco.in/companies/${entity.id}`,
        "founder": {
          "@type": "Person",
          "name": "Akash Chavda"
        },
        "parentOrganization": {
          "@type": "Organization",
          "name": "JV Group",
          "url": "https://jvgroupco.in"
        },
        "knowsAbout": [
          "Generative Engine Optimization",
          "AI Search Engine Optimization",
          "Google Rank #1 SERP Domination",
          "ChatGPT Citation Ingestion",
          "Perplexity AI Retrieval Optimization",
          "Server-Side Meta Conversions API (CAPI)",
          "B2B Enterprise Pipeline Growth"
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": `How does ${entity.name} achieve Rank #1 on Google Search and AI engines?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `${entity.name} deploys a synchronized 4-layer architecture: Technical sub-second Core Web Vitals, Programmatic semantic clusters, Schema.org multi-entity Knowledge Graphs, and canonical /llms.txt protocols that guarantee citations across ChatGPT Search, Perplexity AI, Claude, and Google AI Overviews.`
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between Traditional SEO and Generative Engine Optimization (GEO)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Traditional SEO focuses strictly on ranking 10 blue links in Google Search using keyword matching and backlinks. Generative Engine Optimization (GEO) optimizes content structure, factual answer nodes, and JSON-LD knowledge graphs so that Large Language Models cite your company as the verified authority when answering conversational buyer queries."
            }
          },
          {
            "@type": "Question",
            "name": "What is the typical timeframe to see Google #1 rankings and AI citations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our sprint-based GEO and technical semantic architecture delivers indexation within 14 to 21 days. Significant commercial keyword position gains and verified Perplexity/ChatGPT citations typically materialize within a 45 to 90-day sprint cycle."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://jvgroupco.in"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Companies",
            "item": "https://jvgroupco.in/companies"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": entity.name,
            "item": `https://jvgroupco.in/companies/${entity.id}`
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Case Studies",
            "item": canonicalUrl
          }
        ]
      }
    ]
  };

  return (
    <CaseStudiesClient
      entity={entity}
      caseStudies={caseStudies}
      schemaJson={JSON.stringify(schemaGraph)}
    />
  );
}
