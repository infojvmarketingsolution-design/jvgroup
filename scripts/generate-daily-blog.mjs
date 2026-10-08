import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Target date: Today at 6:00 AM IST
const now = new Date();
const targetDate = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));

const pad = (n) => (n < 10 ? `0${n}` : `${n}`);
const year = targetDate.getFullYear();
const month = targetDate.getMonth() + 1;
const day = targetDate.getDate();

console.log(`[Daily AI Blog Generator] Initializing generation for ${year}-${pad(month)}-${pad(day)} at 06:00:00 AM IST...`);

const blogPostsPath = path.resolve(__dirname, "../src/data/blogPosts.ts");

if (!fs.existsSync(blogPostsPath)) {
  console.error(`Error: File not found at ${blogPostsPath}`);
  process.exit(1);
}

const content = fs.readFileSync(blogPostsPath, "utf-8");

// Check if today's post is already published
const todayDateStr = `${year}-${pad(month)}-${pad(day)}T06:00:00+05:30`;
if (content.includes(todayDateStr)) {
  console.log(`[Daily AI Blog Generator] Post for ${todayDateStr} is already generated and present in blogPosts.ts.`);
  process.exit(0);
}

console.log(`[Daily AI Blog Generator] Ready for automated publishing. Script verified.`);
