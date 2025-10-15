"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./home.module.css";
import clsx from "clsx";
import FeatureSection from "./components/landing/FeatureSection";
import BottomDownloadSection from "./components/landing/BottomDownloadSection";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);

    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  return (
    <div className="w-full flex flex-col gap-16 lg:gap-[5.625rem] items-center justify-center bg-white">
      <Hero isMobile={isMobile} isPortrait={isPortrait} />

      {/* Feature List */}
      <FeatureSection
        title="Save thoughts in a blink. Never organize them."
        subheadline="Just type it in, or speak your mind."
        imageUrl="/images/section-1.webp"
      />

      <FeatureSection
        title="Ask at any time."
        subheadline="Recall anything using smart computer magic.*"
        footnote="*Yes, it uses AI. Now please give us a $10M seed."
        imageUrl="/images/section-2.webp"
      />

      {/* Bottom Section */}
      <BottomDownloadSection />
    </div>
  );
}

function Hero({
  isMobile,
  isPortrait,
}: {
  isMobile: boolean;
  isPortrait: boolean;
}) {
  return (
    <div className="w-full min-h-[90vh] relative">
      {/* Background */}
      <div className="absolute w-full h-full z-0">
        {isMobile && (
          <Image
            src="/images/mobile-hero-bg.webp"
            alt="Hero Background"
            height={0}
            width={0}
            sizes="100vw"
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        )}

        {!isMobile && (
          <Image
            src="/images/desktop-hero-bg.webp"
            alt="Hero Background"
            height={0}
            width={0}
            sizes="100vw"
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        )}
      </div>

      {/* Content */}
      <div className="w-full flex flex-col items-center justify-center relative">
        <div className="w-full md:max-w-[28rem] flex flex-col gap-6 md:gap-4 items-center justify-center mt-16 lg:mt-[12svh] px-4 md:px-0">
          <h1 className="text-h1 text-center">
            Your <i>Personal</i>
            <br />
            Memory Store.
          </h1>

          <p className="text-center">
            Brainbits is a self-organizing, intelligent note store for all the
            little things you want to remember.
          </p>

          {/* CTA */}
          <div className="flex flex-col gap-3 items-center justify-center">
            <button
              className={clsx(styles.heroCtaButton, "text-button")}
              onClick={(e) => {
                e.preventDefault();
                // Redirect to App Store in a new tab
                const link =
                  "https://apps.apple.com/us/app/brainbits-personal-memory/id6753618169";

                window.open(link, "_blank");
              }}
            >
              Get it on the App Store
            </button>

            <p className="text-footnote text-label-secondary  ">
              For iOS 26 and above
            </p>
          </div>
        </div>

        {/* Product Screenshots */}
        {isMobile && (
          <Image
            src="/images/mobile-hero-screenshot.webp"
            alt="Product Screenshot"
            height={0}
            width={0}
            sizes="100vw"
            style={{ height: "auto", width: "100%" }}
          />
        )}

        {!isMobile && (
          <Image
            src="/images/desktop-hero-screenshot.webp"
            alt="Product Screenshot"
            height={0}
            width={0}
            sizes="100vw"
            style={{ height: "auto", width: "100%", maxWidth: "960px" }}
          />
        )}
      </div>
    </div>
  );
}
