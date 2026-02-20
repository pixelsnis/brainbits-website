import Image from "next/image";

export function FounderQuote() {
  return (
    <div className="bg-white rounded-[48px] md:rounded-[64px] overflow-hidden flex flex-col items-center justify-center gap-[16px] p-[36px] h-[450px] text-center">
      <p className="font-sans font-medium text-[16px] leading-normal text-[#aaa] max-w-[416px]">
        This wasn&apos;t built in a boardroom.
      </p>
      <p className="font-sans font-medium text-[16px] leading-normal text-[#aaa] max-w-[416px]">
        Every idea I ever lost to a cluttered notes app is why this exists. I
        hope it helps you keep yours.
      </p>
      <div className="relative w-[89px] h-[64px] my-[4px]">
        <Image
          src="/images/Logo.svg"
          alt="Signature"
          fill
          className="object-contain"
        />
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
