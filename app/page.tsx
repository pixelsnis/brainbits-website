import DownloadSection from "@/components/DownloadSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductHighlightsSection from "@/components/ProductHighlightsSection";

export default function Home() {
  return (
    <>
      <main className="flex-1 overflow-x-hidden">
        <Hero />
        <div className="flex flex-col gap-16">
          <ProductHighlightsSection />
          <FeaturesSection />
        </div>
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}
