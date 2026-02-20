import Image from "next/image";

export function FeatureCards() {
  return (
    <div className="flex flex-col gap-[8px] md:flex-row lg:flex-col lg:flex-1 lg:h-[calc(100vh-78px)] lg:min-h-[640px]">
      {/* Notes Card */}
      <div className="flex flex-col gap-0 items-stretch justify-start h-[600px] bg-white rounded-[48px] md:rounded-[64px] overflow-hidden lg:h-auto lg:flex-1 lg:relative lg:block md:w-1/2 lg:w-auto">
        {/* Text Section */}
        <div
          className="px-[24px] py-[36px] md:p-[36px] flex flex-col gap-[10px] items-center text-center
          lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2
          lg:items-start lg:justify-center lg:text-left lg:p-[36px]
          shrink-0 z-10 relative"
        >
          <p className="font-sans font-semibold text-[12px] leading-normal tracking-[6px] text-[#aaa] uppercase">
            Notes
          </p>
          <p className="font-display font-medium text-[32px] leading-[1.2] tracking-[-0.8px] md:text-[24px] md:tracking-normal lg:text-[32px] lg:tracking-[-0.8px] text-black">
            Designed to be exceptionally simple.
          </p>
          <div className="font-sans font-medium text-[16px] leading-normal text-[#aaa]">
            <p>No gimmicks. Offline-first.</p>
            <p>Built to feel invisible.</p>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 relative w-full h-[calc(100%-180px)] lg:h-auto lg:absolute lg:right-[8%] lg:top-[12%] lg:w-[260px]">
          <div className="relative w-full h-full lg:h-auto lg:aspect-[270/587]">
            <Image
              src="/images/Notes Mockup.webp"
              alt="Notes feature screenshot"
              fill
              className="object-contain lg:object-top lg:rounded-[22px]"
            />
          </div>
        </div>
      </div>

      {/* Super Pages Card */}
      <div className="flex flex-col gap-0 items-stretch justify-start h-[600px] bg-white rounded-[48px] md:rounded-[64px] overflow-hidden lg:h-auto lg:flex-1 lg:relative lg:block md:w-1/2 lg:w-auto">
        {/* Text Section */}
        <div
          className="px-[24px] py-[36px] md:p-[36px] flex flex-col gap-[10px] items-center text-center
          lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2
          lg:items-start lg:justify-center lg:text-left lg:p-[36px]
          shrink-0 z-10 relative"
        >
          <p className="font-sans font-semibold text-[12px] leading-normal tracking-[6px] text-[#aaa] uppercase">
            Super Pages
          </p>
          <p className="font-display font-medium text-[32px] leading-[1.2] tracking-[-0.8px] md:text-[24px] md:tracking-normal lg:text-[32px] lg:tracking-[-0.8px] text-black">
            Your notes, in perfect structure.
          </p>
          <div className="font-sans font-medium text-[16px] leading-normal text-[#aaa]">
            <p>
              Add a note, and your docs update themselves. No organizing
              required.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 relative w-full h-[calc(100%-180px)] lg:h-auto lg:absolute lg:left-[8%] lg:top-[12%] lg:w-[260px]">
          <div className="relative w-full h-full lg:h-auto lg:aspect-[270/587]">
            <Image
              src="/images/Super Pages Mockup.webp"
              alt="Super Pages feature screenshot"
              fill
              className="object-contain lg:object-top lg:rounded-[22px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
