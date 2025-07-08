import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata = {
  title: "Sean Coughlin | Software Engineer",
  description:
    "Sean is a full-stack developer with 3 years of experience. He is experienced in web and app development.",
  icons: [{ url: "/s.webp", sizes: "any" }],
  authors: [{ name: "Sean Coughlin", url: "https://seancoughlin.me" }],
  metadataBase: new URL("https://seancoughlin.com"),
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "Sean Coughlin | Software Engineer",
    description:
      "Sean is a full-stack developer with 3 years of experience. He is experienced in web and app development.",
    url: "https://seancoughlin.me",
    siteName: "Next.js",
    images: [
      {
        url: "https://nextjs.org/profile.jpeg",
        alt: "Profile picture of Sean Coughlin"
      },
      {
        url: "https://nextjs.org/s.webp",
        alt: "Fancy S favicon"
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth!">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        {/* Skip to main content link for screen readers */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>

        <div
          className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"
          aria-hidden="true"
        ></div>
        <div
          className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"
          aria-hidden="true"
        ></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            <main id="main-content" role="main">
              {children}
            </main>
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
      <GoogleAnalytics gaId="G-XJSB0P6X9K" />
      <Analytics />
    </html>
  );
}
