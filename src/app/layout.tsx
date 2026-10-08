import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LenisProvider from "@/components/layout/LenisProvider";
import { SeasonProvider } from "@/context/SeasonContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jvgroupco.in"),
  title: {
    default: "JV Group | A Multi-Sector Global Business Ecosystem (jvgroupco.in)",
    template: "%s | JV Group",
  },
  description:
    "Official portal of JV Group (jvgroupco.in). A diversified multi-sector global business ecosystem delivering worldwide AI SEO, digital marketing, custom software engineering, international freight logistics, enterprise IT infrastructure, commercial real estate, and overseas education.",
  keywords: [
    "JV Group",
    "jvgroupco.in",
    "Akash Chavda",
    "AI SEO Agency Worldwide",
    "Generative Engine Optimization GEO",
    "Rank #1 on Google and ChatGPT",
    "ChatGPT SEO Agency",
    "Perplexity Search Optimization",
    "Google AI Overviews Ranking",
    "Best Digital Marketing Agency in Ahmedabad",
    "Enterprise Digital Marketing Agency USA UK Canada",
    "Custom Software Development Outsourcing India",
    "Top Next.js and React Web App Development",
    "Ekato Tech",
    "Ahmedabad Marketing Solution",
    "J.V Marketing Solution Pvt Ltd",
    "J.V Marketing Solutions Ltd",
    "J.V Infinity Logistics",
    "Worldwide Ocean Freight Forwarder FCL LCL",
    "Air Cargo Logistics India to USA UK UAE",
    "Global Managed IT Services Provider",
    "J.V IT Infrastructure Management",
    "J.V Real Estate",
    "Commercial Real Estate and Industrial Land Gujarat",
    "J.V OVERSEAS",
    "Study Abroad Consultants UK USA Canada",
    "Overseas Master Degree Admissions and Work Visas",
    "Campus Dekho",
    "Official WhatsApp Business API Platform Wapipulse"
  ],
  authors: [{ name: "Akash Chavda", url: "https://jvgroupco.in/about" }],
  creator: "JV Group Directorate",
  publisher: "J.V Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://jvgroupco.in",
  },
  openGraph: {
    title: "JV Group | A Multi-Sector Global Business Ecosystem (jvgroupco.in)",
    description:
      "A multi-sector global business ecosystem delivering marketing, AI SEO, software technology, freight logistics, real estate, and global education.",
    url: "https://jvgroupco.in",
    siteName: "JV Group",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/jv-hero-ecosystem.jpg",
        width: 1200,
        height: 630,
        alt: "JV Group Global Business Ecosystem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JV Group | Multi-Sector Global Business Ecosystem",
    description:
      "Marketing, Technology, Logistics, Infrastructure, Real Estate & Education. Global B2B in USA, UK, Canada & India.",
    images: ["/jv-hero-ecosystem.jpg"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Comprehensive Entity Schema for Google, ChatGPT, Perplexity, Gemini & Claude Knowledge Graphs
  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Corporation",
        "@id": "https://jvgroupco.in/#corporation",
        name: "JV Group",
        alternateName: ["J.V Group", "JV Group Ecosystem", "jvgroupco.in"],
        url: "https://jvgroupco.in",
        logo: "https://jvgroupco.in/jv-logo.jpg",
        description:
          "JV Group is a diversified multi-sector global business ecosystem delivering marketing, AI SEO, technology engineering, freight logistics, IT infrastructure, real estate, and global education solutions.",
        founder: {
          "@type": "Person",
          name: "Akash Chavda",
          jobTitle: "Founder & Architect of Growth",
          description: "GTU-Endorsed Professor, MBA in Marketing & IT, leading business expansion across India, UK, USA, and Canada.",
          url: "https://jvgroupco.in/about"
        },
        foundingLocation: {
          "@type": "Place",
          name: "Ahmedabad, Gujarat, India"
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Corporate Hub, S.G. Highway corridor",
          addressLocality: "Ahmedabad",
          addressRegion: "Gujarat",
          postalCode: "380054",
          addressCountry: "IN"
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+91-9909700606",
            contactType: "customer service",
            areaServed: ["IN"],
            availableLanguage: ["en", "gu", "hi"]
          },
          {
            "@type": "ContactPoint",
            telephone: "+44-7344556070",
            contactType: "international desk",
            areaServed: ["US", "GB", "CA", "EU"],
            availableLanguage: ["en"]
          }
        ],
        subOrganization: [
          {
            "@type": "Organization",
            name: "Ahmedabad Marketing Solution",
            url: "https://jvgroupco.in/companies/ahmedabad-marketing-solution",
            description: "Frontline regional SME marketing agency in Gujarat delivering local SEO, Google Maps 3-Pack rankings, and bilingual campaigns."
          },
          {
            "@type": "Organization",
            name: "J.V Marketing Solution Pvt Ltd.",
            url: "https://jvgroupco.in/companies/jv-marketing-solution-pvt-ltd",
            description: "AI-powered global performance marketing company serving B2B clients in the USA, UK, Canada, and India."
          },
          {
            "@type": "Organization",
            name: "J.V Marketing Solutions Ltd. (Global Brand)",
            url: "https://jvgroupco.in/companies/jv-marketing-solutions-ltd-global",
            description: "Enterprise IT infrastructure, mobile app engineering, and multi-network ad buying across Meta, Google, LinkedIn, TikTok & Snapchat."
          },
          {
            "@type": "Organization",
            name: "Ekato Tech",
            url: "https://jvgroupco.in/companies/ekato-tech",
            sameAs: "https://ekatotech.com",
            description: "Full-stack software engineering powerhouse developing custom websites, mobile apps, ERPs, and 4 in-house SaaS platforms."
          },
          {
            "@type": "Organization",
            name: "J.V Infinity (Import Export - Freight & Logistics)",
            url: "https://jvgroupco.in/companies/jv-infinity-import-export",
            description: "End-to-end international cargo partner managing air freight, ocean sea freight (FCL/LCL), customs clearance, and warehousing."
          },
          {
            "@type": "Organization",
            name: "J.V Real Estate",
            url: "https://jvgroupco.in/companies/jv-real-estate",
            description: "Corporate office leasing along S.G. Highway, Sindhu Bhavan, and GIFT City, land acquisitions, and statutory NA/NOC approvals."
          },
          {
            "@type": "Organization",
            name: "J.V IT Infrastructure Management",
            url: "https://jvgroupco.in/companies/jv-it-infrastructure-management",
            description: "Enterprise cloud engineering (AWS/Azure/GCP), 24/7 managed NOC, zero-trust network security, and annual maintenance contracts."
          },
          {
            "@type": "Organization",
            name: "J.V OVERSEAS",
            url: "https://jvgroupco.in/companies/jv-overseas",
            description: "International study abroad and work mobility consultancy specializing in Master's degree programs and work visas across UK, USA, Canada, Australia, and Europe."
          },
          {
            "@type": "Organization",
            name: "Campus Dekho",
            url: "https://jvgroupco.in/companies/campus-dekho",
            sameAs: "https://campusdekho.in",
            description: "India's next-generation educational discovery platform connecting students with verified colleges, transparent fees, and admission counseling."
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://jvgroupco.in/#website",
        url: "https://jvgroupco.in",
        name: "JV Group Official Portal",
        publisher: {
          "@id": "https://jvgroupco.in/#corporation"
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://jvgroupco.in/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans text-foreground bg-background">
        <SeasonProvider>
          <LenisProvider>
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </LenisProvider>
        </SeasonProvider>
      </body>
    </html>
  );
}
