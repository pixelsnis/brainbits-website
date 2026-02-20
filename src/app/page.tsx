import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeatureCards } from "@/components/FeatureCards";
import { FounderQuote } from "@/components/FounderQuote";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-background p-[8px] flex flex-col gap-[8px]">
      <Navbar />

      {/* ════════════════════════════════════════════════
          HERO: full-width on mobile/tablet, left-col on desktop
          FEATURE CARDS: stacked on mobile, side-by-side on tablet, right-col on desktop
      ════════════════════════════════════════════════ */}

      {/* Outer wrapper: on desktop constrains to viewport height; on mobile/tablet flows naturally */}
      <div
        className="flex flex-col lg:flex-row gap-[8px]"
        style={{ minHeight: "640px" }}
      >
        <Hero />
        <FeatureCards />
      </div>

      <FounderQuote />
      <Footer />
    </div>
  );
}
