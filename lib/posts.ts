import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "content", "posts");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
}

export interface Post extends PostMeta {
  content: string;
}

function getSlugs(): string[] {
  if (!fs.existsSync(postsDir)) return [];
  return fs
    .readdirSync(postsDir)
    .filter((f) => /\.mdx?$/.test(f))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

export function getPost(slug: string): Post {
  const mdPath = path.join(postsDir, `${slug}.md`);
  const mdxPath = path.join(postsDir, `${slug}.mdx`);
  const filePath = fs.existsSync(mdPath) ? mdPath : mdxPath;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    description: String(data.description ?? ""),
    content
  };
}

export function getPosts(): PostMeta[] {
  return getSlugs()
    .map((slug) => {
      const { title, date, description } = getPost(slug);
      return { slug, title, date, description };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}
