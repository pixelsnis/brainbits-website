import type { Metadata } from "next";
import { Inter } from "next/font/google";
import local from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interDisplay = local({
  src: [
    {
      path: "../public/fonts/InterDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/InterDisplay-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
  ],
  variable: "--font-inter-display",
});

export const metadata: Metadata = {
  title: "Brainbits - Your Personal Memory Store",
  description:
    "Brainbits is a self-organizing, intelligent note store for all the little things you want to remember. Save thoughts in a blink, never organize them, and recall anything using AI.",
  keywords: [
    "personal memory",
    "note taking",
    "AI notes",
    "iOS app",
    "memory store",
    "intelligent notes",
  ],
  openGraph: {
    title: "Brainbits - Your Personal Memory Store",
    description:
      "Brainbits is a self-organizing, intelligent note store for all the little things you want to remember. Save thoughts in a blink, never organize them, and recall anything using AI.",
    url: "https://usebrainbits.com",
    siteName: "Brainbits",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://assets.usebrainbits.com/Website/og-image.jpg",
        width: 1920,
        height: 981,
        alt: "Brainbits app screenshot: Capturing a quick audio bit on iOS home screen",
      },
    ],
  },
  alternates: {
    canonical: "https://usebrainbits.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brainbits - Your Personal Memory Store",
    description:
      "Brainbits is a self-organizing, intelligent note store for all the little things you want to remember. Save thoughts in a blink, never organize them, and recall anything using AI.",
    images: ["https://assets.usebrainbits.com/Website/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  itunes: {
    appId: "6753618169",
  },
  appLinks: {
    ios: [
      {
        app_name: "Brainbits - Personal Memory",
        app_store_id: "6753618169",
        url: "https://apps.apple.com/us/app/brainbits-personal-memory/id6753618169",
      },
    ],
  },
  metadataBase: new URL("https://usebrainbits.com"),
  applicationName: "Brainbits",
  category: "tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${interDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
