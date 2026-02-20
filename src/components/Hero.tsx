import Image from "next/image";
import { AnimatedSquig1, AnimatedSquig2 } from "./AnimatedSquigs";

export function Hero() {
  return (
    <div
      className="bg-white overflow-hidden
      flex flex-col justify-center
      rounded-[48px] md:rounded-[64px]
      h-[640px] md:h-auto lg:flex-1
      px-[24px] pt-[36px] pb-[64px] md:p-[36px] lg:p-[42px]
      w-full shrink-0"
    >
      <div className="flex flex-col w-full gap-[24px] h-full md:h-auto justify-center">
        {/* Logo -> shown only on mobile */}
        <Image
          src="/images/Logo.svg"
          alt="Brainbits"
          width={31}
          height={28}
          className="shrink-0 md:hidden self-center"
        />

        {/* Headings */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left w-full">
          <p className="font-display font-medium leading-[1.3] tracking-[-0.8px] text-[#aaa] text-[24px] md:text-[32px]">
            Notion is too much.
          </p>
          <p className="font-display font-medium leading-[1.3] tracking-[-0.8px] text-[#aaa] text-[24px] md:text-[32px]">
            Apple Notes is too little.
          </p>
          <h1 className="font-display font-medium italic leading-[1.3] tracking-[-0.8px] text-black text-[32px]">
            Meet the second brain that works for{" "}
            <span className="relative inline-block">
              you.
              <span className="absolute -left-[7.5%] top-full -mt-[5px] w-[115%] pointer-events-none">
                <AnimatedSquig1 className="w-full" aria-hidden="true" />
              </span>
            </span>
          </h1>
        </div>

        {/* Paragraphs -> hidden on mobile */}
        <div className="hidden md:flex flex-col gap-[24px]">
          <p className="font-sans font-normal text-[16px] leading-normal text-[#aaa]">
            Notion, Obsidian, Anytype, whatever–they&apos;re all great for heavy
            work, but overkill for a passing thought.
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

        {/* Button container */}
        <div className="w-full md:w-auto mt-[16px] md:mt-0 flex">
          <a
            href="/download"
            className="flex items-center justify-center bg-black text-white transition-colors
            font-display font-medium text-[20px] leading-[1.2] tracking-[-0.5px]
            h-[54px] w-full md:w-auto md:inline-flex md:px-[24px]
            rounded-[36px] md:rounded-[16px] hover:bg-neutral-800"
          >
            Get Brainbits for iOS
          </a>
        </div>
      </div>
    </div>
  );
}
