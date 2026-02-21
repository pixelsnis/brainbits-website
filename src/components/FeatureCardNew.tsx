import React from "react";
import Image from "next/image";

type FeatureCardNewProps = {
  pre: string;
  title: React.ReactNode;
  description: string;
  image: string;
  className?: string;
};

export function FeatureCardNew({
  pre,
  title,
  description,
  image,
  className = "",
}: FeatureCardNewProps) {
  return (
    <div
      className={`flex flex-col gap-0 items-stretch justify-start h-[600px] bg-white rounded-[64px] sm:rounded-[48px] overflow-hidden ${className}`}
    >
      <div className="px-[36px] py-[36px] sm:px-[24px] flex flex-col gap-[10px] items-center text-center">
        <p className="font-sans font-semibold text-[12px] leading-normal tracking-[6px] text-[#aaa] uppercase">
          {pre}
        </p>

        <p className="font-display font-medium text-[32px] leading-[1.2] tracking-[-0.8px] sm:text-[24px] sm:tracking-0 text-black">
          {title}
        </p>

        <div className="font-sans font-medium text-[16px] leading-normal text-[#aaa]">
          {description}
        </div>
      </div>

      <Image
        src={image}
        alt="Feature screenshot"
        width={500}
        height={500}
        className="w-full h-full object-contain"
      />
    </div>
  );
}
