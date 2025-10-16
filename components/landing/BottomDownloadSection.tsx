import clsx from "clsx";
import styles from "./styles.module.css";
import Image from "next/image";
import Footer from "./Footer";
import Magnet from "../Magnet";
import { BlurIn } from "../animation/BlurIn";
import { useMediaQuery } from "react-responsive";
import MobileFooter from "../misc/MobileFooter";

export default function BottomDownloadSection() {
  const isLg = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <div className="w-full gap-0 h-[720px] relative">
      {/* Background */}
      <div className="w-full h-full absolute left-0 top-0 z-0">
        <Image
          src="/images/footer-bg.webp"
          alt="Background"
          height={0}
          width={0}
          sizes="100vw"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      <div className="w-full h-full items-center justify-start md:justify-between pt-8 lg:pt-36 absolute left-0 top-0 z-10">
        <BlurIn delay={0.3}>
          {/* Content */}
          <div className="flex flex-col gap-6 items-center justify-center">
            <Image
              height={1024}
              width={1024}
              src="/images/app-icon.webp"
              alt="App icon"
              className="w-16 h-16"
            />
            <div className="flex flex-col gap-3">
              <h2 className="text-h2 text-center">Try Brainbits for free.</h2>
              <p className="text-body text-center">
                Your first 50 memories are on the house.
              </p>
            </div>

            {/* CTA */}
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
          </div>
        </BlurIn>
      </div>

      {isLg && (
        <div className="w-full bottom-0 items-center justify-center flex absolute p-4 z-20">
          <Footer />
        </div>
      )}

      {!isLg && (
        <div className="w-full bottom-0 items-center justify-center flex absolute">
          <MobileFooter withBackground={false} />
        </div>
      )}
    </div>
  );
}
