import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPosts();
  const blogEntries = posts.map((post) => ({
    url: `https://seancoughlin.me/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [
    {
      url: "https://seancoughlin.me",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: "https://seancoughlin.me/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8
    },
    ...blogEntries
  ];
}
