"use client";

import { useEffect, useState } from "react";

export function BrainbitsPlug() {
  const [href, setHref] = useState("https://usebrainbits.com");

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.search) {
      setHref(`https://usebrainbits.com${window.location.search}`);
    }
  }, []);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center gap-[16px] bg-white border-[0.5px] border-black/10 hover:border-black/20 hover:shadow-sm transition-all rounded-[40px] p-[32px] sm:p-[40px] my-[40px] no-underline w-full"
    >
      {/* Logo */}
      <img
        src="/images/Brainbits.webp"
        alt="Brainbits Logo"
        className="w-[64px] h-[64px] shrink-0 object-contain rounded-2xl"
      />

      {/* Copy */}
      <div className="flex flex-col gap-[8px] items-center text-center max-w-[450px]">
        <p className="font-sans font-semibold text-[#111] text-[22px] sm:text-[24px] leading-tight m-0">
          Built with Brainbits
        </p>
        <p className="font-sans font-normal text-[#666] text-[15px] sm:text-[16px] leading-[1.5] m-0">
          Brainbits is the notes app I use to capture and organise every idea
          behind articles like this one.
        </p>
      </div>

      {/* Button */}
      <div className="bg-[#0088ff] group-hover:bg-[#0077ee] transition-colors flex items-center justify-center px-[20px] py-[12px] mt-[4px] rounded-[100px]">
        <span className="font-medium text-[16px] text-white tracking-[-0.4px] leading-[1.2]">
          Try it for free
        </span>
      </div>
    </a>
  );
}
