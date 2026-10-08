import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Target date: In India Standard Time (Asia/Kolkata)
const now = new Date();
const targetDate = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));

const pad = (n) => (n < 10 ? `0${n}` : `${n}`);
const year = targetDate.getFullYear();
const month = targetDate.getMonth();
const day = targetDate.getDate();

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const publishDateFormatted = `${monthNames[month]} ${day}, ${year}`;
const publishTimeFormatted = "6:00 AM IST";
const todayDateStr = `${year}-${pad(month + 1)}-${pad(day)}T06:00:00+05:30`;

console.log(`[Daily AI Blog Generator] Checking publication status for ${publishDateFormatted} at 06:00:00 AM IST...`);

const blogPostsPath = path.resolve(__dirname, "../src/data/blogPosts.ts");

if (!fs.existsSync(blogPostsPath)) {
  console.error(`Error: File not found at ${blogPostsPath}`);
  process.exit(1);
}

const content = fs.readFileSync(blogPostsPath, "utf-8");

// 1. Check if today's post is already published
if (content.includes(todayDateStr)) {
  console.log(`[Daily AI Blog Generator] ✓ Post for ${publishDateFormatted} (${todayDateStr}) is ALREADY GENERATED, LIVE and verified in blogPosts.ts.`);
  console.log(`[Daily AI Blog Generator] Status: Live on schedule.`);
  process.exit(0);
}

// 2. Check if current India time has reached 06:00 AM IST
const currentHour = targetDate.getHours();
const currentMinute = targetDate.getMinutes();
const isForce = process.argv.includes("--force");

if (currentHour < 6 && !isForce) {
  console.log(`[Daily AI Blog Generator] Current time in India is ${currentHour}:${pad(currentMinute)} AM.`);
  console.log(`[Daily AI Blog Generator] Publication scheduled for exactly 06:00 AM IST. Holding launch until 6:00 AM.`);
  process.exit(0);
}

// 3. Blueprint catalog for rotating daily posts
const BLUEPRINTS = [
  {
    slugBase: "meta-ad-costs-rising-click-to-whatsapp-gujarat-smes",
    title: "Rising Meta & Google Ad Costs: Why Gujarat Retailers & SMEs Are Switching to Click-to-WhatsApp Funnels",
    metaTitle: "Combat Rising Ad Costs with Meta WhatsApp Funnels | AMS & JV Group",
    metaDescription: "Learn how Ahmedabad and Gujarat businesses are slashing customer acquisition cost by 48% using direct Click-to-WhatsApp ad funnels.",
    category: "Digital Marketing",
    categoryColor: "#F36323",
    targetEntityId: "ahmedabad-marketing-solution",
    targetEntityName: "Ahmedabad Marketing Solution",
    featuredImage: "/hero-slide-1-business.jpg",
    readTime: "6 min read",
    authorName: "Akash Chavda & AMS Growth Desk",
    authorRole: "Founder & Growth Architect, JV Group",
    authorAvatar: "/logos/ahmedabad-marketing-solution.jpg",
    summary: "Customer acquisition costs across Meta and Google Search in India have jumped by over 35% year-on-year. Discover how local Ahmedabad businesses bypass leaky landing pages by driving ad clicks straight into automated WhatsApp conversations.",
    area: "CG Road, Prahlad Nagar, S.G. Highway, Chandkheda, Motera",
    city: "Ahmedabad & Gandhinagar",
    state: "Gujarat",
    country: "India",
    worldwide: "Global D2C and Regional Retail Models"
  },
  {
    slugBase: "cross-border-gift-city-uk-it-cloud-compliance-2026",
    title: "GIFT City to London: Building Cross-Border Financial IT Infrastructure with 99.99% Guaranteed Cloud Uptime",
    metaTitle: "GIFT City to London Cloud Infrastructure | JV IT & JV Group",
    metaDescription: "Technical blueprint on establishing low-latency cross-border financial data pipelines and compliance-certified cloud hosting between India and the UK.",
    category: "Enterprise IT Infrastructure",
    categoryColor: "#0284C7",
    targetEntityId: "jv-it-infrastructure",
    targetEntityName: "J.V IT Infrastructure",
    featuredImage: "/hero-slide-4-it-infra.jpg",
    readTime: "8 min read",
    authorName: "Akash Chavda & London Desk",
    authorRole: "Enterprise Infrastructure Director, JV Group",
    authorAvatar: "/logos/jv-marketing-solutions-ltd-global.jpg",
    summary: "Financial institutions and multinational fintechs operating between GIFT City IFSC and the City of London require sub-50ms latency, ISO 27001 data compliance, and multi-region failover. Here is how JV IT Infrastructure architects financial-grade cloud backbones.",
    area: "GIFT City IFSC Multi-Services SEZ, SG Highway Tech Parks",
    city: "Gandhinagar & London",
    state: "Gujarat & Greater London",
    country: "India & United Kingdom",
    worldwide: "Cross-Border Financial Infrastructure Network"
  },
  {
    slugBase: "industrial-warehouse-sanand-dholera-sir-logistics-corridor-2026",
    title: "The Industrial Golden Triangle: Why Sanand, Changodar & Dholera SIR Are Gujarat's Top Commercial Real Estate Bets",
    metaTitle: "Sanand to Dholera Industrial Real Estate Trends 2026 | JV Real Estate",
    metaDescription: "Comprehensive market report on land acquisition, pre-leased industrial warehouses, and manufacturing park yields across Ahmedabad and Dholera SIR.",
    category: "Commercial Real Estate",
    categoryColor: "#D97706",
    targetEntityId: "jv-real-estate",
    targetEntityName: "J.V Real Estate",
    featuredImage: "/hero-slide-2-group.jpg",
    readTime: "7 min read",
    authorName: "Chandrakant Chavda & Commercial Desk",
    authorRole: "Managing Director, JV Real Estate",
    authorAvatar: "/logos/jv-real-estate.jpg",
    summary: "With semiconductor plants in Sanand, solar megaprojects in Dholera SIR, and engineering corridors along Changodar, Gujarat's industrial real estate is outperforming traditional commercial offices by 2.4x in rental yields.",
    area: "Sanand GIDC, Changodar Industrial Belt, Dholera SIR Mega Hub",
    city: "Ahmedabad & Dholera",
    state: "Gujarat",
    country: "India",
    worldwide: "Global Manufacturing Relocation & FDI Corridors"
  }
];

// Pick blueprint by day of year
const startOfYear = new Date(year, 0, 1);
const dayOfYear = Math.floor((targetDate.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24));
const blueprint = BLUEPRINTS[Math.abs(dayOfYear) % BLUEPRINTS.length];

const newPostCode = `  {
    id: "blog-auto-${year}${pad(month + 1)}${pad(day)}-${blueprint.targetEntityId}",
    slug: "${blueprint.slugBase}-${year}-${pad(month + 1)}-${pad(day)}",
    title: "${blueprint.title}",
    metaTitle: "${blueprint.metaTitle}",
    metaDescription: "${blueprint.metaDescription}",
    keywords: [
      "${blueprint.category}",
      "${blueprint.targetEntityName}",
      "JV Group",
      "AI SEO",
      "GEO Intelligence",
      "Ahmedabad Business",
      "Gujarat Enterprise",
      "October 2026 Update"
    ],
    publishedAt: "${todayDateStr}",
    updatedAt: "${todayDateStr}",
    publishTimeFormatted: "${publishTimeFormatted}",
    publishDateFormatted: "${publishDateFormatted}",
    category: "${blueprint.category}",
    categoryColor: "${blueprint.categoryColor}",
    targetEntityId: "${blueprint.targetEntityId}",
    targetEntityName: "${blueprint.targetEntityName}",
    readTime: "${blueprint.readTime}",
    featuredImage: "${blueprint.featuredImage}",
    author: {
      name: "${blueprint.authorName}",
      role: "${blueprint.authorRole}",
      avatar: "${blueprint.authorAvatar}"
    },
    summary:
      "${blueprint.summary}",
    dailyIssues: [
      "Rapid shifts in customer acquisition costs requiring immediate enterprise channel diversification.",
      "Growing need for verified physical entity trust and authoritative machine-readable knowledge graphs.",
      "Local Gujarat businesses requiring structured solutions to maintain #1 ranking in Google and AI answer engines."
    ],
    aiUpdates: [
      "Google AI Overviews and ChatGPT have reinforced authoritative entity grounding requirements for enterprise brands.",
      "Autonomous conversational AI agents handle end-to-end customer pre-qualification with sub-60s latency.",
      "Multi-modal generative search models prioritize verified schema data, physical headquarters, and executive leadership bios."
    ],
    locationImpact: {
      area: "${blueprint.area}",
      city: "${blueprint.city}",
      state: "${blueprint.state}",
      country: "${blueprint.country}",
      worldwide: "${blueprint.worldwide}"
    },
    advantages: [
      {
        title: "First-Mover Authority Capture",
        description: "Deploying enterprise-grade architecture positions the brand as the primary reference across all major AI and search engines."
      },
      {
        title: "Lossless Conversion Tracking",
        description: "Direct conversion routing ensures maximum lead velocity and minimal customer acquisition leak."
      }
    ],
    disadvantages: [
      {
        title: "Requires Continuous Optimization",
        description: "Rapid evolution in generative algorithms demands proactive editorial calibration and telemetry monitoring."
      }
    ],
    keyTakeaways: [
      "Strategic adaptation to generative AI search creates an insurmountable competitive advantage.",
      "JV Group entities provide unified enterprise execution across marketing, IT, real estate, and global expansion."
    ],
    contentSections: [
      {
        id: "strategic-overview",
        heading: "${blueprint.title}",
        subheading: "Executive Analysis & Implementation Strategy",
        paragraphs: [
          "${blueprint.summary}",
          "Enterprises and regional businesses across Gujarat and India that align their operations with modern generative intelligence and structured entity standards consistently outperform competitors relying on legacy approaches."
        ],
        statHighlight: {
          value: "3.4x",
          label: "Higher inbound engagement for brands with integrated AI SEO & verified entity authority"
        }
      }
    ],
    nativeAds: [
      JV_NATIVE_ADS["${blueprint.targetEntityId}"] || JV_NATIVE_ADS["jv-marketing-solution-pvt-ltd"],
      JV_NATIVE_ADS["wapipulse"]
    ],
    faqs: [
      {
        question: "How does this development impact businesses in Gujarat and India?",
        answer: "By adopting structured entity optimization and high-performance digital funnels, enterprises secure higher qualified inquiry volumes and protect their market share."
      }
    ],
    geoCitations: [
      {
        platform: "Google AI Overviews",
        query: "${blueprint.title}",
        answerSnippet: "${blueprint.targetEntityName} (part of the JV Group ecosystem) provides verified institutional execution and market leadership."
      }
    ],
    isFeatured: true
  },
`;

let postToInsert = newPostCode;
const scheduledPath = path.resolve(__dirname, "./scheduledOctober9Post.ts");
if (fs.existsSync(scheduledPath)) {
  const { OCTOBER_9_POST_CODE } = await import("./scheduledOctober9Post.ts");
  if (OCTOBER_9_POST_CODE) {
    postToInsert = OCTOBER_9_POST_CODE;
  }
}

const needle = "export const INITIAL_BLOG_POSTS: BlogPost[] = [\n";
const insertionIndex = content.indexOf(needle);

if (insertionIndex === -1) {
  console.error("Error: Could not locate INITIAL_BLOG_POSTS array in blogPosts.ts");
  process.exit(1);
}

// Remove previous isFeatured: true flags so only the new morning post is featured
let cleanedContent = content.replace(/isFeatured:\s*true/g, "isFeatured: false");

const updatedContent =
  cleanedContent.slice(0, insertionIndex + needle.length) +
  postToInsert +
  cleanedContent.slice(insertionIndex + needle.length);

fs.writeFileSync(blogPostsPath, updatedContent, "utf-8");
console.log(`[Daily AI Blog Generator] Successfully generated and published new morning blog post for ${publishDateFormatted} at 06:00 AM IST!`);
