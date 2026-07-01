import DownloadSection from "@/components/home/DownloadSection";
import FAQ from "@/components/home/FAQ";
import FeaturesSection from "@/components/home/FeaturesSection";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ProductHighlightsSection from "@/components/home/ProductHighlightsSection";
import ImageLoadGate from "@/components/providers/ImageLoadGate";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { FaqStructuredData } from "@/app/structured-data";
import { HOME_CSS_BACKGROUNDS } from "@/lib/images";
import type { Metadata } from "next";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  SITE_URL,
} from "@/lib/seo/site";

export const metadata: Metadata = {
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: SITE_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
};

export default function Home() {
  return (
    <ImageLoadGate cssBackgrounds={HOME_CSS_BACKGROUNDS}>
      <SmoothScroll>
        <FaqStructuredData />
        <main className="flex-1 overflow-x-hidden">
          <Hero />
          <div className="flex flex-col gap-16">
            <ProductHighlightsSection />
            <FeaturesSection />
          </div>
          <hr className="w-full border-0 border-t border-[#eee]" />
          <DownloadSection />
          <hr className="w-full border-0 border-t border-[#eee]" />
          <FAQ />
          <hr className="w-full border-0 border-t border-[#eee]" />
        </main>
        <Footer />
      </SmoothScroll>
    </ImageLoadGate>
  );
}
