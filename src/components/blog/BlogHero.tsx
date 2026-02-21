import React from "react";

export function BlogHero() {
  return (
    // On mobile: a fixed 360px tall card
    // On desktop: h-full fills the flex row's height (which is bounded by min-h-0 + flex-1 on the parent)
    <div
      className="bg-white flex flex-col justify-end lg:justify-center overflow-hidden gap-[16px]
        rounded-[48px] lg:rounded-[64px]
        h-[360px] lg:h-full
        px-[24px] py-[32px] lg:p-[42px]
        w-full lg:flex-[1.1] shrink-0"
    >
      <h1 className="font-display font-medium leading-[1.3] text-[#aaa] text-[24px] lg:text-[32px] tracking-[-0.6px] lg:tracking-[-0.8px]">
        Bits of the brain behind Brainbits
      </h1>

      <p className="font-display font-medium leading-[1.3] text-black text-[24px] lg:text-[32px] tracking-[-0.6px] lg:tracking-[-0.8px]">
        Follow along as I build a notes app you'll actually enjoy using.
      </p>

      <div className="flex gap-[8px] items-center">
        <span className="font-display font-medium leading-[1.3] text-black text-[24px] lg:text-[32px] tracking-[-0.6px] lg:tracking-[-0.8px]">
          by
        </span>
        <div className="flex gap-[8px] items-center">
          <img
            src="https://github.com/pixelsnis.png"
            alt="@pixelsnis avatar"
            className="w-[32px] h-[32px] lg:w-[42px] lg:h-[42px] rounded-full object-cover shrink-0"
          />
          <a
            href="https://threads.net/pixelsnis"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display font-medium leading-[1.3] text-[#222] text-[24px] lg:text-[32px] tracking-[-0.6px] lg:tracking-[-0.8px] hover:underline underline-offset-4"
          >
            @pixelsnis
          </a>
        </div>
      </div>
    </div>
  );
}
