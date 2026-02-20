import Image from "next/image";
import { AnimatedSquig1, AnimatedSquig2 } from "./AnimatedSquigs";

export function Hero() {
  return (
    <>
      {/* MOBILE hero (hidden on md+) */}
      <div
        className="bg-white rounded-[48px] overflow-hidden
        flex flex-col items-center justify-center gap-[24px]
        h-[640px] px-[24px] pt-[36px] pb-[64px]
        md:hidden"
      >
        <Image
          src="/images/Logo.svg"
          alt="Brainbits"
          width={31}
          height={28}
          className="shrink-0"
        />
        <div className="flex flex-col items-center w-full text-center">
          <p className="font-display font-medium text-[24px] leading-[1.3] tracking-[-0.8px] text-[#aaa]">
            Notion is too much.
          </p>
          <p className="font-display font-medium text-[24px] leading-[1.3] tracking-[-0.8px] text-[#aaa]">
            Apple Notes is too little.
          </p>
          <p className="font-display font-medium italic text-[32px] leading-[1.3] tracking-[-0.8px] text-black">
            Meet the second brain that works for{" "}
            <span className="relative inline-block">
              you.
              <span className="absolute -left-[7.5%] top-full -mt-[5px] w-[115%] pointer-events-none">
                <AnimatedSquig1 className="w-full" aria-hidden="true" />
              </span>
            </span>
          </p>
        </div>
        <a
          href="/download"
          className="w-full flex items-center justify-center h-[54px] bg-black text-white rounded-[36px] font-display font-medium text-[20px] leading-[1.2] tracking-[-0.5px]"
        >
          Get Brainbits for iOS
        </a>
      </div>

      {/* TABLET hero (hidden on mobile and desktop) */}
      <div
        className="bg-white rounded-[64px] overflow-hidden
        hidden md:flex flex-col items-start justify-center
        p-[36px] w-full shrink-0
        lg:hidden"
      >
        <div className="flex flex-col gap-[24px] w-full">
          <div className="flex flex-col">
            <p className="font-display font-medium text-[32px] leading-[1.3] tracking-[-0.8px] text-[#aaa]">
              Notion is too much.
            </p>
            <p className="font-display font-medium text-[32px] leading-[1.3] tracking-[-0.8px] text-[#aaa]">
              Apple Notes is too little.
            </p>
            <p className="font-display font-medium italic text-[32px] leading-[1.3] tracking-[-0.8px] text-black">
              Meet the second brain that works for{" "}
              <span className="relative inline-block">
                you.
                <span className="absolute -left-[7.5%] top-full -mt-[5px] w-[115%] pointer-events-none">
                  <AnimatedSquig1 className="w-full" aria-hidden="true" />
                </span>
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-[24px]">
            <p className="font-sans font-normal text-[16px] leading-normal text-[#aaa]">
              Notion, Obsidian, Anytype, whatever–they&apos;re all great for
              heavy work, but overkill for a passing thought.
            </p>
            <p className="font-sans font-normal text-[16px] leading-normal text-[#aaa]">
              Apple Notes and Google Keep have turned into digital shoeboxes.
              Store stuff, forget it ever existed.
            </p>
            <p className="font-sans font-normal text-[16px] leading-normal text-[#aaa]">
              And now, every &ldquo;AI notes&rdquo; app is so busy with
              &ldquo;features&rdquo; that they forget about the workflow that
              really matters:
            </p>
            <p className="font-sans font-medium italic text-[16px] leading-normal text-black">
              Note{" "}
              <span className="relative inline-block">
                now
                <span className="absolute -left-[5%] top-full -mt-[4px] w-[110%] pointer-events-none">
                  <AnimatedSquig2 className="w-full" aria-hidden="true" />
                </span>
              </span>
              , think later.
            </p>
          </div>
          <a
            href="/download"
            className="inline-flex items-center justify-center h-[54px] px-[24px] bg-black text-white rounded-[16px] font-display font-medium text-[20px] leading-[1.2] tracking-[-0.5px] hover:bg-neutral-800 transition-colors self-start"
          >
            Get Brainbits for iOS
          </a>
        </div>
      </div>

      {/* DESKTOP hero (hidden below lg) */}
      <div
        className="bg-white rounded-[64px] overflow-hidden
        hidden lg:flex items-center
        flex-1"
      >
        <div className="p-[42px]">
          <div className="mb-[24px]">
            <p className="font-display font-medium text-[32px] leading-[1.3] tracking-[-0.8px] text-[#aaa]">
              Notion is too much.
            </p>
            <p className="font-display font-medium text-[32px] leading-[1.3] tracking-[-0.8px] text-[#aaa]">
              Apple Notes is too little.
            </p>
            <p className="font-display font-medium italic text-[32px] leading-[1.3] tracking-[-0.8px] text-black">
              Meet the second brain that works for{" "}
              <span className="relative inline-block">
                you.
                <span className="absolute -left-[7.5%] top-full -mt-[5px] w-[115%] pointer-events-none">
                  <AnimatedSquig1 className="w-full" aria-hidden="true" />
                </span>
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-[24px] mb-[24px]">
            <p className="font-sans font-normal text-[16px] leading-normal text-[#aaa]">
              Notion, Obsidian, Anytype, whatever–they&apos;re all great for
              heavy work, but overkill for a passing thought.
            </p>
            <p className="font-sans font-normal text-[16px] leading-normal text-[#aaa]">
              Apple Notes and Google Keep have turned into digital shoeboxes.
              Store stuff, forget it ever existed.
            </p>
            <p className="font-sans font-normal text-[16px] leading-normal text-[#aaa]">
              And now, every &ldquo;AI notes&rdquo; app is so busy with
              &ldquo;features&rdquo; that they forget about the workflow that
              really matters:
            </p>
            <p className="font-sans font-medium italic text-[16px] leading-normal text-black">
              Note{" "}
              <span className="relative inline-block">
                now
                <span className="absolute -left-[5%] top-full -mt-[4px] w-[110%] pointer-events-none">
                  <AnimatedSquig2 className="w-full" aria-hidden="true" />
                </span>
              </span>
              , think later.
            </p>
          </div>
          <a
            href="/download"
            className="inline-flex items-center justify-center h-[54px] px-[24px] bg-black text-white rounded-[16px] font-display font-medium text-[20px] leading-[1.2] tracking-[-0.5px] hover:bg-neutral-800 transition-colors"
          >
            Get Brainbits for iOS
          </a>
        </div>
      </div>
    </>
  );
}
