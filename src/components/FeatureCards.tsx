import Image from "next/image";
import { FeatureCardNew } from "./FeatureCardNew";

export function FeatureCards() {
  return (
    <>
      {/* MOBILE + TABLET cards (hidden on desktop) */}
      <div className="flex flex-col gap-[8px] md:flex-row lg:hidden">
        <FeatureCardNew
          pre="Notes"
          title="Designed to be exceptionally simple."
          description="No gimmicks. Offline-first. Built to feel invisible."
          image="/images/Notes Mockup.webp"
        />

        {/* Super Pages card */}
        <FeatureCardNew
          pre="Super Pages"
          title="Your notes, in perfect structure."
          description="Add a note, and your docs update themselves. No organizing required."
          image="/images/Super Pages Mockup.webp"
        />
      </div>

      {/* DESKTOP cards (hidden below lg) — keep exact working code */}
      <div
        className="hidden lg:flex flex-col gap-[8px] flex-1"
        style={{ height: "calc(100vh - 78px)", minHeight: "640px" }}
      >
        {/* Notes card */}
        <div className="bg-white rounded-[64px] overflow-hidden flex-1 relative lg:block">
          <div
            className="flex flex-col gap-[10px] p-[36px] shrink-0 relative z-10
            lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2
            lg:flex lg:flex-col lg:justify-center lg:gap-[10px] lg:p-[36px]"
          >
            <p className="font-sans font-semibold text-[12px] leading-normal tracking-[6px] text-[#aaa] uppercase">
              Notes
            </p>
            <p className="font-display font-medium text-[32px] leading-[1.2] tracking-[-0.8px] text-black">
              Designed to be exceptionally simple.
            </p>
            <div className="font-sans font-medium text-[16px] leading-normal text-[#aaa]">
              <p>No gimmicks. Offline-first.</p>
              <p>Built to feel invisible.</p>
            </div>
          </div>
          <div className="lg:absolute lg:right-[8%] lg:top-[12%] lg:w-[260px]">
            <div
              className="relative w-full"
              style={{ aspectRatio: "270 / 587" }}
            >
              <Image
                src="/images/Notes Mockup.webp"
                alt="Notes feature screenshot"
                fill
                className="object-contain object-top rounded-[22px]"
              />
            </div>
          </div>
        </div>

        {/* Super Pages card */}
        <div className="bg-white rounded-[64px] overflow-hidden flex-1 relative lg:block">
          <div
            className="flex flex-col gap-[10px] p-[36px] shrink-0 relative z-10
            lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2
            lg:flex lg:flex-col lg:justify-center lg:gap-[10px] lg:p-[36px]"
          >
            <p className="font-sans font-semibold text-[12px] leading-normal tracking-[6px] text-[#aaa] uppercase">
              Super Pages
            </p>
            <p className="font-display font-medium text-[32px] leading-[1.2] tracking-[-0.8px] text-black">
              Your notes, in perfect structure.
            </p>
            <p className="font-sans font-medium text-[16px] leading-normal text-[#aaa]">
              Add a note, and your docs update themselves. No organizing
              required.
            </p>
          </div>
          <div className="lg:absolute lg:left-[8%] lg:top-[12%] lg:w-[260px]">
            <div
              className="relative w-full"
              style={{ aspectRatio: "270 / 587" }}
            >
              <Image
                src="/images/Super Pages Mockup.webp"
                alt="Super Pages feature screenshot"
                fill
                className="object-contain object-top rounded-[22px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
