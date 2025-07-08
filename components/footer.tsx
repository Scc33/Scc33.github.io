export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Sean Coughlin
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React, Next.js (App Router), TypeScript, Tailwind CSS, CSS animations,
        and Vercel hosting.
      </p>
      <p className="text-xs mt-2">
        <a
          href="https://github.com/Scc33/Scc33.github.io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-700 transition-colors underline"
        >
          View source code on GitHub
        </a>
      </p>
    </footer>
  );
}
