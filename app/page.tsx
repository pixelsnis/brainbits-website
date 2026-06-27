import DownloadSection from "@/components/home/DownloadSection";
import FAQ from "@/components/home/FAQ";
import FeaturesSection from "@/components/home/FeaturesSection";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ProductHighlightsSection from "@/components/home/ProductHighlightsSection";
import SmoothScroll from "@/components/providers/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
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
  );
}
