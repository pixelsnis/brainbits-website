import DownloadSection from "@/components/DownloadSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductHighlightsSection from "@/components/ProductHighlightsSection";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="flex-1 overflow-x-hidden">
        <Hero />
        <div className="flex flex-col gap-16">
          <ProductHighlightsSection />
          <FeaturesSection />
        </div>
        <DownloadSection />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
