import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brainbits — The Notes App for Your Biggest Ideas",
  description:
    "The notes app built for founders, solopreneurs, and side hustlers. Capture ideas instantly, find them later. Auto-organizing, offline-first, zero friction.",
  openGraph: {
    title: "Brainbits — The Notes App for Your Biggest Ideas",
    description:
      "The notes app built for founders, solopreneurs, and side hustlers. Capture ideas instantly, find them later. Auto-organizing, offline-first, zero friction.",
    url: "https://usebrainbits.com",
    siteName: "Brainbits",
    images: ["https://usebrainbits.com/og/opengraph.webp"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brainbits — The Notes App for Your Biggest Ideas",
    description:
      "The notes app built for founders, solopreneurs, and side hustlers. Capture ideas instantly, find them later. Auto-organizing, offline-first, zero friction.",
    images: ["https://usebrainbits.com/og/opengraph.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${interTight.variable} antialiased`}>
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
