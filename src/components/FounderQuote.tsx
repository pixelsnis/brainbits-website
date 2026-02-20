"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function FounderQuote() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div className="bg-white rounded-[48px] md:rounded-[64px] overflow-hidden flex flex-col items-center justify-center gap-[16px] p-[36px] h-[450px] text-center">
      <p className="font-sans font-medium text-[16px] leading-normal text-[#aaa] max-w-[416px]">
        This wasn&apos;t built in a boardroom.
      </p>
      <p className="font-sans font-medium text-[16px] leading-normal text-[#aaa] max-w-[416px]">
        Every idea I ever lost to a cluttered notes app is why this exists. I
        hope it helps you keep yours.
      </p>
      <div className="relative w-[89px] h-[64px] my-[4px]" ref={ref}>
        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 83 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="object-contain"
        >
          <motion.path
            d="M10.6236 40.2385C15.0314 38.7458 24.0265 30.7 24.7437 10.4586C25.7149 24.5649 23.3989 42.1473 34.157 56.3598C46.0542 72.0772 33.6267 66.3551 13.089 55.0165C-12.4617 40.9102 11.296 47.4036 32.5882 43.1493C53.8805 38.895 66.2075 35.3125 72.9313 17.3998C79.6552 -0.51288 51.4149 -14.1713 49.3978 44.4927C49.3978 51.2099 63.0697 36.4319 66.8799 37.7754C70.6901 39.1188 70.4659 47.6273 81 45.3883"
            stroke="black"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
          />
        </motion.svg>
      </div>
      <div className="flex flex-col gap-[8px] text-center">
        <p className="font-sans font-medium text-[12px] leading-[1.2] text-[#aaa]">
          Aneesh Hegde
        </p>
        <p className="font-sans font-medium text-[12px] leading-[1.2] text-[#aaa]">
          Developer of Brainbits
        </p>
      </div>
    </div>
  );
}
