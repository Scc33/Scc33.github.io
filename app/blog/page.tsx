import Link from "next/link";
import type { Metadata } from "next";
import { getPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing — Sean Coughlin",
  description: "Posts by Sean Coughlin on software, engineering, and ideas."
};

export default function Blog() {
  const posts = getPosts();

  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <nav className="mb-10 text-sm">
        <Link href="/">[home]</Link>
      </nav>
      <h1 className="text-3xl font-bold mb-8">Writing</h1>
      {posts.length === 0 ? (
        <p className="opacity-50">No posts yet.</p>
      ) : (
        <ul className="space-y-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <span className="opacity-50 tabular-nums text-sm">
                {post.date}
              </span>
              <span className="mx-2 opacity-30">|</span>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
