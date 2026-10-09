import { INITIAL_BLOG_POSTS } from "@/data/blogPosts";
import { generateDailyBlogPost } from "@/lib/blogGenerator";
import { BlogPost } from "@/types/blog";

/**
 * Returns all blog posts that have reached their official publication time in Indian Standard Time (IST).
 * 
 * ZERO MANUAL CODE PUSHES REQUIRED:
 * - Automatically checks the current time in Asia/Kolkata.
 * - Releases 1 new authoritative AI SEO / GEO post every morning at 06:00:00 AM IST.
 * - Before 06:00 AM IST, the upcoming post is held back.
 * - The moment 06:00 AM IST arrives, the new post automatically unlocks, becomes the lead story,
 *   and all previous posts remain archived chronologically.
 */
export function getLiveBlogPosts(): BlogPost[] {
  // Current time in Indian Standard Time (Asia/Kolkata)
  const now = new Date();
  const indiaTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));

  const currentYear = indiaTime.getFullYear();
  const currentMonth = indiaTime.getMonth();
  const currentDay = indiaTime.getDate();
  const currentHour = indiaTime.getHours();

  const dynamicPosts: BlogPost[] = [];

  // Automated daily release starting from October 10, 2026 onwards
  const startDate = new Date(2026, 9, 10); // 9 = October
  const todayAtMidnight = new Date(currentYear, currentMonth, currentDay);

  const iterDate = new Date(startDate);
  while (iterDate <= todayAtMidnight) {
    const isToday = iterDate.getTime() === todayAtMidnight.getTime();

    // If it is today, only publish if the current time in India is >= 6:00 AM IST
    if (!isToday || currentHour >= 6) {
      const generatedPost = generateDailyBlogPost(iterDate);
      // Avoid duplicate if an exact ID or slug already exists in baseline
      if (!INITIAL_BLOG_POSTS.some((p) => p.slug === generatedPost.slug || p.id === generatedPost.id)) {
        dynamicPosts.push(generatedPost);
      }
    }

    // Step to next calendar day
    iterDate.setDate(iterDate.getDate() + 1);
  }

  // Combine dynamic posts (newest on top) with initial curated foundation posts
  const allPosts = [...dynamicPosts.reverse(), ...INITIAL_BLOG_POSTS];

  // Set the single newest post as featured
  return allPosts.map((post, idx) => ({
    ...post,
    isFeatured: idx === 0,
  }));
}

/**
 * Find a blog post by its URL slug.
 */
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const posts = getLiveBlogPosts();
  return posts.find((p) => p.slug === slug);
}
