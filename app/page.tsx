import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <div className="flex justify-between items-start gap-8 mb-10">
        <div>
          <h1 className="text-4xl font-bold mb-4">Sean Coughlin</h1>
          <nav className="text-base">
            <a
              href="https://linkedin.com/in/sean-m-coughlin"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
            <span className="mx-2 opacity-40">|</span>
            <a
              href="https://github.com/Scc33"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
          </nav>
        </div>
        <Image
          src="/profile.webp"
          alt="Sean Coughlin"
          width={110}
          height={110}
          className="rounded-full shrink-0"
          priority
        />
      </div>

      <div className="mb-10">
        <p>
          I&apos;m a Forward Deployed Engineer at{" "}
          <a
            href="https://palantir.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Palantir Technologies
          </a>{" "}
          in New York. Previously at Capital One and Discover Financial
          Services, building full-stack web applications for financial products.
          I studied Computer Science at the University of Illinois
          Urbana-Champaign.
        </p>
      </div>

      {/* recent writing — hidden until there are real posts
      {recent.length > 0 && (
        <div>
          <p className="mb-3">Some recent writing:</p>
          <ul className="space-y-2 mb-4">
            {recent.map((post) => (
              <li key={post.slug}>
                <span className="opacity-50 tabular-nums text-sm">
                  {post.date}
                </span>
                <span className="mx-2 opacity-30">|</span>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
          <p>
            <Link href="/blog">All posts</Link>.
          </p>
        </div>
      )}
      */}
    </main>
  );
}
