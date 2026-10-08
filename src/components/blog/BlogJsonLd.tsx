import React from "react";
import { BlogPost } from "@/types/blog";

interface Props {
  post: BlogPost;
}

export default function BlogJsonLd({ post }: Props) {
  const postUrl = `https://jvgroupco.in/blog/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${postUrl}#article`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": postUrl
    },
    "headline": post.title,
    "name": post.title,
    "description": post.metaDescription,
    "image": `https://jvgroupco.in${post.featuredImage}`,
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.role,
      "url": "https://jvgroupco.in/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "JV Group",
      "url": "https://jvgroupco.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jvgroupco.in/logos/jv-marketing-solution-pvt-ltd.jpg"
      }
    },
    "keywords": post.keywords.join(", "),
    "articleSection": post.category,
    "inLanguage": "en-US",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".blog-title", ".blog-summary", ".blog-takeaways"]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${postUrl}#faq`,
    "mainEntity": post.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${postUrl}#breadcrumbs`,
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
        "name": "Daily AI & SEO Blog",
        "item": "https://jvgroupco.in/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": postUrl
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {post.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
