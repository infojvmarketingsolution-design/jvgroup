import { NextRequest, NextResponse } from "next/server";
import { generateDailyBlogPost } from "@/lib/blogGenerator";
import { getBlogPipelineDiagnostics } from "@/lib/blogService";

export async function GET(req: NextRequest) {
  try {
    const post = generateDailyBlogPost(new Date());
    const diagnostics = getBlogPipelineDiagnostics();

    return NextResponse.json({
      success: true,
      pipeline: diagnostics,
      message: "2-Stage Pipeline: Stage 1 Draft (05:15 AM IST) & Stage 2 Public Unlock (05:30 AM IST / 00:00 UTC) active.",
      timestamp: new Date().toISOString(),
      post: {
        id: post.id,
        title: post.title,
        slug: post.slug,
        category: post.category,
        publishedAt: post.publishedAt,
        targetEntity: post.targetEntityName
      }
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Failed to generate daily blog" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const targetDate = body?.date ? new Date(body.date) : new Date();
    const post = generateDailyBlogPost(targetDate);

    return NextResponse.json({
      success: true,
      message: "Successfully generated daily AI SEO blog for 5:30 AM IST (00:00 UTC).",
      post
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Failed to generate blog" },
      { status: 500 }
    );
  }
}
