import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPost, getPosts } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPost(slug);
    return {
      title: `${post.title} — Sean Coughlin`,
      description: post.description
    };
  } catch {
    return { title: "Post not found — Sean Coughlin" };
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  let post;
  try {
    post = getPost(slug);
  } catch {
    notFound();
  }

  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <nav className="mb-10 text-sm space-x-3">
        <Link href="/">[home]</Link>
        <Link href="/blog">[writing]</Link>
      </nav>
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="opacity-50 mb-10 text-sm tabular-nums">{post.date}</p>
      <div className="prose">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>
    </main>
  );
}
