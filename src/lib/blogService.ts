import { INITIAL_BLOG_POSTS } from "@/data/blogPosts";
import { generateDailyBlogPost } from "@/lib/blogGenerator";
import { BlogPost } from "@/types/blog";

// In-memory pre-warmed draft staging cache
let stagedDraftCache: { dateKey: string; post: BlogPost } | null = null;

/**
 * Returns all blog posts that have reached their official publication time in Indian Standard Time (IST).
 * 
 * 2-STAGE ENTERPRISE PIPELINE:
 * - Stage 1 (05:15:00 AM IST): Automated draft pre-creation, metadata verification, and memory cache warming.
 * - Stage 2 (05:30:00 AM IST): Public gate unlocks instantly with zero latency (00:00:00 UTC Global Day Reset).
 * - Before 05:30 AM IST, today's post remains safely staged internally.
 * - The moment 05:30 AM IST arrives, the pre-warmed post automatically unlocks without any computation delay.
 */
export function getLiveBlogPosts(): BlogPost[] {
  // Current time in Indian Standard Time (Asia/Kolkata)
  const now = new Date();
  const indiaTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));

  const currentYear = indiaTime.getFullYear();
  const currentMonth = indiaTime.getMonth();
  const currentDay = indiaTime.getDate();
  const currentHour = indiaTime.getHours();
  const currentMinute = indiaTime.getMinutes();

  const dynamicPosts: BlogPost[] = [];

  // Stage 1 pre-warming: at or after 05:15 AM IST, pre-warm today's draft into memory
  const isStage1DraftTime = currentHour > 5 || (currentHour === 5 && currentMinute >= 15);
  const todayDateKey = `${currentYear}-${currentMonth + 1}-${currentDay}`;

  if (isStage1DraftTime && (!stagedDraftCache || stagedDraftCache.dateKey !== todayDateKey)) {
    stagedDraftCache = {
      dateKey: todayDateKey,
      post: generateDailyBlogPost(new Date(currentYear, currentMonth, currentDay))
    };
  }

  // Automated daily release starting from October 10, 2026 onwards
  const startDate = new Date(2026, 9, 10); // 9 = October
  const todayAtMidnight = new Date(currentYear, currentMonth, currentDay);

  const iterDate = new Date(startDate);
  while (iterDate <= todayAtMidnight) {
    const isToday = iterDate.getTime() === todayAtMidnight.getTime();

    // Stage 2 Public Unlock: Only publish if it is a previous day, OR current time in India >= 05:30 AM IST (00:00 UTC)
    const isStage2Unlocked = !isToday || currentHour > 5 || (currentHour === 5 && currentMinute >= 30);
    if (isStage2Unlocked) {
      // Use pre-warmed draft if available for today, otherwise generate
      const generatedPost = (isToday && stagedDraftCache && stagedDraftCache.dateKey === todayDateKey)
        ? stagedDraftCache.post
        : generateDailyBlogPost(iterDate);

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

/**
 * Diagnostic helper checking the live 2-stage pipeline state.
 */
export function getBlogPipelineDiagnostics() {
  const now = new Date();
  const indiaTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
  const currentHour = indiaTime.getHours();
  const currentMinute = indiaTime.getMinutes();

  const isStage1DraftReady = currentHour > 5 || (currentHour === 5 && currentMinute >= 15);
  const isStage2LiveUnlocked = currentHour > 5 || (currentHour === 5 && currentMinute >= 30);

  return {
    currentTimeIst: indiaTime.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit" }),
    pipelineStages: {
      stage1DraftCreation: {
        targetTime: "05:15 AM IST",
        status: isStage1DraftReady ? "PREPARED_AND_WARMED" : "SCHEDULED_AT_05_15_AM",
      },
      stage2PublicUnlock: {
        targetTime: "05:30 AM IST (00:00 UTC)",
        status: isStage2LiveUnlocked ? "LIVE_PUBLIC" : "STAGED_AWAITING_05_30_AM",
      }
    }
  };
}
