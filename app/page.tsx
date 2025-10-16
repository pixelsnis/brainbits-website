"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./home.module.css";
import clsx from "clsx";
import FeatureSection from "../components/landing/FeatureSection";
import BottomDownloadSection from "../components/landing/BottomDownloadSection";
import Navbar from "../components/landing/Navbar";
import BlurText from "@/components/BlurText";
import { BlurIn } from "@/components/animation/BlurIn";
import Magnet from "@/components/Magnet";

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
      <BlurIn className="w-full items-center justify-center flex" delay={0.2}>
        <FeatureSection
          title="Save thoughts in a blink. Never organize them."
          subheadline="Just type it in, or speak your mind."
          imageUrl="/images/section-1.webp"
        />
      </BlurIn>

      <BlurIn className="w-full items-center justify-center flex" delay={0.5}>
        <FeatureSection
          title="Ask at any time."
          subheadline="Recall anything using smart computer magic.*"
          footnote="*Yes, it uses AI. Now please give us a $10M seed."
          imageUrl="/images/section-2.webp"
        />
      </BlurIn>

      {/* Bottom Section */}
      <BottomDownloadSection showFooter={!isMobile} />
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
    <div className="w-full relative">
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
        {!isPortrait && <Navbar />}

        <div className="w-full md:max-w-[28rem] flex flex-col gap-4 items-center justify-center mt-16 lg:mt-[12svh] px-4 md:px-0">
          {isPortrait && (
            <BlurIn whileInView={false}>
              <img
                src="/logo.svg"
                alt="Logo"
                className="h-8 w-8 object-contain"
              />
            </BlurIn>
          )}

          {!isMobile && (
            <BlurText
              text="Your Personal Memory Store."
              className="text-h1 text-center"
              direction="bottom"
              easing={"easeOut"}
              stepDuration={0.6}
              delay={80}
            />
          )}

          {isMobile && (
            <BlurIn whileInView={false}>
              <h1 className="text-h1 text-center">
                Your <i>Personal</i>
                <br />
                Memory Store.
              </h1>
            </BlurIn>
          )}

          <BlurIn delay={0.5}>
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
                    // Redirect to App Store in a new tab
                    const link =
                      "https://apps.apple.com/us/app/brainbits-personal-memory/id6753618169";

                    window.open(link, "_blank");
                  }}
                >
                  Get it on the App Store
                </button>
              </Magnet>

              <p className="text-footnote text-label-secondary  ">
                For iOS 26 and above
              </p>
            </div>
          </BlurIn>
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
          <BlurIn className="w-full max-w-[960px]">
            <Image
              src="/images/desktop-hero-screenshot.webp"
              alt="Product Screenshot"
              height={0}
              width={0}
              sizes="100vw"
              style={{ height: "auto", width: "100%", maxWidth: "960px" }}
            />
          </BlurIn>
        )}
      </div>
    </div>
  );
}
