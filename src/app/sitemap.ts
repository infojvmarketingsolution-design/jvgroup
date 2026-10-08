import { MetadataRoute } from "next";
import { BUSINESS_ENTITIES } from "@/data/businesses";
import { INITIAL_BLOG_POSTS } from "@/data/blogPosts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jvgroupco.in";
  const currentDate = new Date();

  // Core Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/ai-seo`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ecosystem`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/global`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.95,
    },
  ];

  // Dynamic Company & Sub-Website Routes
  const companyRoutes: MetadataRoute.Sitemap = BUSINESS_ENTITIES.map((entity) => {
    let priority = 0.85;
    let changeFrequency: "daily" | "weekly" = "weekly";

    if (entity.id === "jv-marketing-solution-pvt-ltd") {
      priority = 1.0;
      changeFrequency = "daily";
    } else if (entity.id === "ahmedabad-marketing-solution") {
      priority = 0.95;
      changeFrequency = "daily";
    }

    return {
      url: `${baseUrl}/companies/${entity.id}`,
      lastModified: currentDate,
      changeFrequency,
      priority,
    };
  });

  // Dynamic Daily AI & SEO Blog Post Routes
  const blogRoutes: MetadataRoute.Sitemap = INITIAL_BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: "daily",
    priority: 0.90,
  }));

  // Dedicated Enterprise AI SEO & Pillar Routes for J.V Marketing Solution
  const jvMarketingSubRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/companies/jv-marketing-solution-pvt-ltd/ai-seo`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.98,
    },
    {
      url: `${baseUrl}/companies/jv-marketing-solution-pvt-ltd/why-jv-marketing`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.96,
    },
    {
      url: `${baseUrl}/companies/jv-marketing-solution-pvt-ltd/case-studies`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.92,
    },
    {
      url: `${baseUrl}/companies/jv-marketing-solution-pvt-ltd/packages`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.92,
    },
    {
      url: `${baseUrl}/companies/jv-marketing-solution-pvt-ltd/roi-calculator`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.90,
    },
    {
      url: `${baseUrl}/companies/jv-marketing-solution-pvt-ltd/services`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.90,
    },
    {
      url: `${baseUrl}/companies/jv-marketing-solution-pvt-ltd/contact`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.90,
    },
  ];

  return [...staticRoutes, ...companyRoutes, ...blogRoutes, ...jvMarketingSubRoutes];
}
