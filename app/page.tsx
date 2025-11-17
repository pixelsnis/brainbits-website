"use client";

import Image from "next/image";
import styles from "./home.module.css";
import clsx from "clsx";
import FeatureSection from "../components/landing/FeatureSection";
import BottomDownloadSection from "../components/landing/BottomDownloadSection";
import Navbar from "../components/landing/Navbar";
import HeroBackground from "../components/landing/HeroBackground";
import { BlurIn } from "@/components/animation/BlurIn";
import Magnet from "@/components/Magnet";
import { useMediaQuery } from "react-responsive";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-16 lg:gap-[5.625rem] items-center justify-center bg-white">
      <Hero />

      {/* Feature List */}
      <BlurIn className="w-full items-center justify-center flex" delay={0.2}>
        <FeatureSection
          title={
            <>
              Save thoughts in a blink.
              <br className="md:hidden" />
              Never organize them.
            </>
          }
          subheadline="Just type it in, or speak your mind."
          imageUrl="/images/section-1.webp"
          imageAlt="A user capturing that they put their keys in the bag using Brainbits."
        />
      </BlurIn>

      <BlurIn className="w-full items-center justify-center flex" delay={0.5}>
        <FeatureSection
          title="Ask at any time."
          subheadline="Recall anything using smart computer magic.*"
          footnote="*Yes, it uses AI. Now please give us a $10M seed."
          imageUrl="/images/section-2.webp"
          imageAlt="A user asking Brainbits where they kept their keys and getting an instant answer."
        />
      </BlurIn>

      {/* Bottom Section */}
      <BottomDownloadSection />
    </div>
  );
}

function Hero() {
  const isSm = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="w-full relative">
      {/* Background */}
      <HeroBackground usesGridOverlay={true} />

      {/* Content */}
      <div className="w-full flex flex-col items-center justify-center relative">
        {!isSm && <Navbar />}

        <div className="w-full md:max-w-[28rem] flex flex-col gap-4 items-center justify-center mt-16 lg:mt-[12svh] px-4 md:px-0">
          <BlurIn whileInView={false} delay={0.1}>
            <h1 className="text-h1 text-center">
              Your <i>Personal</i>
              <br />
              Memory Store.
            </h1>
          </BlurIn>

          <BlurIn whileInView={false} delay={0.5}>
            <p className="text-center">
              Brainbits is a self-organizing, intelligent note store for all the
              little things you want to remember.
            </p>
          </BlurIn>

          {/* CTA */}
          <BlurIn delay={0.7}>
            <div className="flex flex-col gap-3 items-center justify-center">
              <Magnet padding={500} disabled={false} magnetStrength={75}>
                <button
                  className={clsx(styles.heroCtaButton, "text-button")}
                  onClick={(e) => {
                    e.preventDefault();
                    // Redirect to early access page in a new tab
                    const link =
                      "https://aneeshhegde.notion.site/28735e141c2580fea17cdd77fc14cfd3?pvs=105";

                    window.open(link, "_blank");
                  }}
                >
                  Get early access
                </button>
              </Magnet>

              <p className="text-footnote text-label-secondary  ">
                For iOS 26 and above
              </p>
            </div>
          </BlurIn>
        </div>

        {/* Product Screenshots */}
        {isSm && (
          <div className="relative w-full">
            <Image
              src="/images/mobile-hero-screenshot.webp"
              alt="Two screens of the Brainbits iOS app showing quick note capture and AI-powered quick recall."
              height={0}
              width={0}
              sizes="100vw"
              style={{ height: "auto", width: "100%" }}
            />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/70 to-transparent"></div>
          </div>
        )}

        {!isSm && (
          <BlurIn className="w-full max-w-[1020px] relative">
            <Image
              src="/images/desktop-hero-screenshot.webp"
              alt="Two screens of the Brainbits iOS app showing quick note capture and AI-powered quick recall."
              height={0}
              width={0}
              sizes="100vw"
              style={{ height: "auto", width: "100%", maxWidth: "1020px" }}
            />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/70 to-transparent"></div>
          </BlurIn>
        )}
      </div>
    </div>
  );
}
