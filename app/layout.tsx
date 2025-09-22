import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LaunchKit - Next.js SaaS Landing Page",
  description:
    "Production-ready Next.js 15 SaaS landing page built with TypeScript, Tailwind CSS, and modern best practices. Ready for Vercel deployment.",
  keywords: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "SaaS",
    "Landing Page",
    "React",
    "Vercel",
  ],
  authors: [{ name: "LaunchKit Team" }],
  creator: "LaunchKit",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://launchkit.dev",
    title: "LaunchKit - Next.js SaaS Landing Page",
    description:
      "Production-ready Next.js 15 SaaS landing page built with TypeScript, Tailwind CSS, and modern best practices.",
    siteName: "LaunchKit",
  },
  twitter: {
    card: "summary_large_image",
    title: "LaunchKit - Next.js SaaS Landing Page",
    description:
      "Production-ready Next.js 15 SaaS landing page built with TypeScript, Tailwind CSS, and modern best practices.",
    creator: "@launchkit_dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
