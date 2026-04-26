import { describe, it, expect } from "vitest";
import { getPosts, getPost } from "@/lib/posts";

describe("posts", () => {
  it("returns a sorted array of posts", () => {
    const posts = getPosts();
    expect(Array.isArray(posts)).toBe(true);
    for (let i = 0; i < posts.length - 1; i++) {
      expect(posts[i].date >= posts[i + 1].date).toBe(true);
    }
  });

  it("each post has required fields", () => {
    const posts = getPosts();
    for (const post of posts) {
      expect(typeof post.slug).toBe("string");
      expect(typeof post.title).toBe("string");
      expect(typeof post.date).toBe("string");
      expect(typeof post.description).toBe("string");
    }
  });

  it("getPost returns content for the first post when posts exist", () => {
    const posts = getPosts();
    if (posts.length === 0) return; // no posts yet — skip
    const post = getPost(posts[0].slug);
    expect(post.title).toBeTruthy();
    expect(post.content).toBeTruthy();
  });
});
