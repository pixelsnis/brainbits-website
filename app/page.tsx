import DownloadSection from "@/components/DownloadSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import ProductHighlightsSection from "@/components/ProductHighlightsSection";

export default function Home() {
  return (
    <>
      <main className="flex-1" />
      <ProductHighlightsSection />
      <FeaturesSection />
      <DownloadSection />
      <Footer />
    </>
  );
}
