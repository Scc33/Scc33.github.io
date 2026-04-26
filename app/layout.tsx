import type { Metadata } from "next";
import { Lora } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const lora = Lora({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Sean Coughlin",
  description:
    "Forward Deployed Engineer at Palantir Technologies. Writing about software, engineering, and ideas.",
  icons: [{ url: "/s.webp", sizes: "any" }],
  authors: [{ name: "Sean Coughlin", url: "https://seancoughlin.me" }],
  metadataBase: new URL("https://seancoughlin.me"),
  robots: { index: true, follow: true },
  openGraph: {
    title: "Sean Coughlin",
    description:
      "Forward Deployed Engineer at Palantir Technologies. Writing about software, engineering, and ideas.",
    url: "https://seancoughlin.me",
    siteName: "Sean Coughlin",
    images: [{ url: "/profile.webp", alt: "Sean Coughlin" }],
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
    <html lang="en">
      <body className={`${lora.className} leading-relaxed`}>{children}</body>
      <GoogleAnalytics gaId="G-XJSB0P6X9K" />
      <Analytics />
    </html>
  );
}
