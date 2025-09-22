import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CICSOFT_AI - AI-Powered SaaS Platform",
  description:
    "Revolutionary AI-powered SaaS platform built with Next.js 15, TypeScript, and modern best practices. Experience the future of intelligent software solutions.",
  keywords: [
    "AI",
    "SaaS",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Machine Learning",
    "Artificial Intelligence",
  ],
  authors: [{ name: "CICSOFT_AI Team" }],
  creator: "CICSOFT_AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cicsoft.ai",
    title: "CICSOFT_AI - AI-Powered SaaS Platform",
    description:
      "Revolutionary AI-powered SaaS platform built with Next.js 15, TypeScript, and modern best practices.",
    siteName: "CICSOFT_AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "CICSOFT_AI - AI-Powered SaaS Platform",
    description:
      "Revolutionary AI-powered SaaS platform built with Next.js 15, TypeScript, and modern best practices.",
    creator: "@cicsoft_ai",
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
