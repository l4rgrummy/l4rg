import type { BlogPost } from "./posts";

export function slugifyTag(tag: string): string {
  return tag
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const defaultTags: string[] = [
  "Appointment Setting",
  "IT Support",
  "Sales Development",
  "Go-To-Market",
  "Data Solutions",
  "Industries",
  "Google PPC",
  "Bing Ads",
  "Social Media Marketing",
  "Digital Marketing",
  "Web Development",
  "App Development",
  // Services menu items from header
  "Tech Support Services",
  "LinkedIn Marketing Services",
  "Facebook Marketing Services",
  "Instagram Marketing Services",
  "Tiktok Marketing",
  "Snapchat Marketing",
  "Twitter Marketing",
  "Pinterest Marketing",
  "Reddit Marketing",
  "Web Development Services",
  "App Development Services",
];

export function getAllTags(posts: BlogPost[]): string[] {
  return Array.from(
    new Set([...posts.flatMap((p) => p.tags), ...defaultTags])
  ).sort();
}
