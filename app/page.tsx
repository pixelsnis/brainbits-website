"use client";

import Image from "next/image";
import styles from "./home.module.css";
import clsx from "clsx";
import FeatureSection from "../components/landing/FeatureSection";
import BottomDownloadSection from "../components/landing/BottomDownloadSection";
import Navbar from "../components/landing/Navbar";
import BlurText from "@/components/BlurText";
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
      <BottomDownloadSection />
    </div>
  );
}

function Hero() {
  const isSm = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="w-full relative">
      {/* Background */}
      <div className="absolute w-full h-full z-0">
        {isSm && (
          <Image
            src="/images/mobile-hero-bg.webp"
            alt="Hero Background"
            height={0}
            width={0}
            sizes="100vw"
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        )}

        {!isSm && (
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
        {!isSm && <Navbar />}

        <div className="w-full md:max-w-[28rem] flex flex-col gap-4 items-center justify-center mt-16 lg:mt-[12svh] px-4 md:px-0">
          {isSm && (
            <BlurIn whileInView={false}>
              <img
                src="/logo.svg"
                alt="Logo"
                className="h-8 w-8 object-contain"
              />
            </BlurIn>
          )}

          {!isSm && (
            <BlurText
              text="Your Personal Memory Store."
              className="text-h1 text-center"
              direction="bottom"
              easing={"easeOut"}
              stepDuration={0.6}
              delay={80}
            />
          )}

          {isSm && (
            <BlurIn whileInView={false} delay={0.1}>
              <h1 className="text-h1 text-center">
                Your <i>Personal</i>
                <br />
                Memory Store.
              </h1>
            </BlurIn>
          )}

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
        {isSm && (
          <Image
            src="/images/mobile-hero-screenshot.webp"
            alt="Product Screenshot"
            height={0}
            width={0}
            sizes="100vw"
            style={{ height: "auto", width: "100%" }}
          />
        )}

        {!isSm && (
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
