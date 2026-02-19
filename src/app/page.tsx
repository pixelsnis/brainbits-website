import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#f0f0f0] p-[8px] flex flex-col gap-[8px]">
      {/* ── NAVBAR ── */}
      <nav className="flex gap-[8px] items-center h-[54px]">
        <div className="bg-white flex-1 h-full flex items-center px-[18px] rounded-full">
          <Image
            src="/images/Logo.svg"
            alt="Brainbits logo"
            width={31}
            height={28}
            priority
          />
        </div>
        <a
          href="#"
          className="bg-black text-white h-full flex items-center justify-center px-[24px] rounded-full shrink-0 font-display font-medium text-[20px] leading-[1.2] tracking-[-0.5px] hover:bg-neutral-800 transition-colors"
        >
          Download
        </a>
      </nav>

      {/* ════════════════════════════════════════════════
          HERO: full-width on mobile/tablet, left-col on desktop
          FEATURE CARDS: stacked on mobile, side-by-side on tablet, right-col on desktop
      ════════════════════════════════════════════════ */}

      {/* Outer wrapper: on desktop constrains to viewport height; on mobile/tablet flows naturally */}
      <div
        className="flex flex-col lg:flex-row gap-[8px]"
        style={{ minHeight: "640px" }}
      >
        {/* ─── HERO CARD ─── */}
        {/*
          Mobile:  full card, text centered, CTA full-width, rounded-[48px]
          Tablet:  same but rounded-[64px], no body copy (Figma shows only headline + CTA)
          Desktop: left half, items-center, rounded-[64px]
        */}
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
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/Squig 1.svg"
                    alt=""
                    aria-hidden="true"
                    className="w-full"
                  />
                </span>
              </span>
            </p>
          </div>
          <a
            href="#"
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
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/Squig 1.svg"
                      alt=""
                      aria-hidden="true"
                      className="w-full"
                    />
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
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/Squig 2.svg"
                      alt=""
                      aria-hidden="true"
                      className="w-full"
                    />
                  </span>
                </span>
                , think later.
              </p>
            </div>
            <a
              href="#"
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
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/Squig 1.svg"
                      alt=""
                      aria-hidden="true"
                      className="w-full"
                    />
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
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/Squig 2.svg"
                      alt=""
                      aria-hidden="true"
                      className="w-full"
                    />
                  </span>
                </span>
                , think later.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center justify-center h-[54px] px-[24px] bg-black text-white rounded-[16px] font-display font-medium text-[20px] leading-[1.2] tracking-[-0.5px] hover:bg-neutral-800 transition-colors"
            >
              Get Brainbits for iOS
            </a>
          </div>
        </div>

        {/* ─── FEATURE CARDS ───
            Mobile:  stacked vertically, each h-[560px], rounded-[48px]
            Tablet:  side-by-side row, each h-[600px], rounded-[64px]
            Desktop: stacked vertically in right col, rounded-[64px], absolute-positioned phone
        */}
        {/* MOBILE + TABLET cards (hidden on desktop) */}
        <div className="flex flex-col gap-[8px] md:flex-row lg:hidden">
          {/* Notes card — fixed height, overflow-clip, phone at bottom */}
          <div
            className="bg-white rounded-[48px] md:rounded-[64px] overflow-hidden flex-1
            h-[560px] md:h-[600px]
            flex flex-col"
          >
            {/* Text — centered on both */}
            <div
              className="flex flex-col gap-[10px] items-center text-center
              px-[24px] py-[36px] md:p-[36px] shrink-0"
            >
              <p className="font-sans font-semibold text-[12px] leading-normal tracking-[6px] text-[#aaa] uppercase w-full">
                Notes
              </p>
              <p className="font-display font-medium text-[24px] md:text-[32px] leading-[1.2] tracking-[-0.8px] text-black w-full">
                Designed to be exceptionally simple.
              </p>
              <div className="font-sans font-medium text-[16px] leading-normal text-[#aaa] w-full">
                <p>No gimmicks. Offline-first.</p>
                <p>Built to feel invisible.</p>
              </div>
            </div>
            <div className="flex-1 flex items-start justify-center overflow-hidden">
              <Image
                src="/images/Notes Mockup.webp"
                alt="Notes feature screenshot"
                width={240}
                height={521}
                className="rounded-[27px] shrink-0"
                style={{
                  width: 240,
                  height: 521,
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
            </div>
          </div>

          {/* Super Pages card */}
          <div
            className="bg-white rounded-[48px] md:rounded-[64px] overflow-hidden flex-1
            h-[560px] md:h-[600px]
            flex flex-col"
          >
            <div
              className="flex flex-col gap-[10px] items-center text-center
              px-[24px] py-[36px] md:p-[36px] shrink-0"
            >
              <p className="font-sans font-semibold text-[12px] leading-normal tracking-[6px] text-[#aaa] uppercase w-full">
                Super Pages
              </p>
              <p className="font-display font-medium text-[24px] md:text-[32px] leading-[1.2] tracking-[-0.8px] text-black w-full">
                Your notes, in perfect structure.
              </p>
              <p className="font-sans font-medium text-[16px] leading-normal text-[#aaa] w-full">
                Add a note, and your docs update themselves. No organizing
                required.
              </p>
            </div>
            <div className="flex-1 flex items-start justify-center overflow-hidden">
              <Image
                src="/images/Super Pages Mockup.webp"
                alt="Super Pages feature screenshot"
                width={240}
                height={521}
                className="rounded-[27px] shrink-0"
                style={{
                  width: 240,
                  height: 521,
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
            </div>
          </div>
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
      </div>

      {/* ── FOUNDER QUOTE ── */}
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

      {/* ── FOOTER ── */}
      <footer className="bg-black rounded-[48px] md:rounded-[64px] overflow-hidden flex flex-col justify-end p-[36px] md:px-[36px] md:py-[36px] h-[560px]">
        {/* Mobile footer shows "Brainbits", tablet+ shows full text */}
        <p className="font-display font-medium text-white leading-[1.1] tracking-[-0.8px] mb-[16px] text-[32px] md:hidden">
          Brainbits
        </p>
        <p className="font-display font-medium text-white leading-[1.1] tracking-[-3px] mb-[16px] text-[64px] lg:text-[120px] hidden md:block">
          Braaaaaaaaaaaainbits!
        </p>
        <div className="flex flex-col gap-[16px]">
          <p className="font-display font-medium text-[16px] leading-[1.2] text-white">
            Note now, think later.
          </p>
          <div className="flex gap-0">
            <div className="flex flex-col gap-[12px] flex-1">
              <p className="font-display font-medium text-[16px] leading-[1.2] text-[#666]">
                Links
              </p>
              <a
                href="#"
                className="font-display font-medium text-[16px] leading-[1.2] text-white hover:text-neutral-300 transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="font-display font-medium text-[16px] leading-[1.2] text-white hover:text-neutral-300 transition-colors"
              >
                Terms of Use
              </a>
              <a
                href="#"
                className="font-display font-medium text-[16px] leading-[1.2] text-white hover:text-neutral-300 transition-colors"
              >
                Contact
              </a>
            </div>
            <div className="flex flex-col gap-[12px] flex-1">
              <p className="font-display font-medium text-[16px] leading-[1.2] text-[#666]">
                Connect
              </p>
              <a
                href="#"
                className="font-display font-medium text-[16px] leading-[1.2] text-white hover:text-neutral-300 transition-colors"
              >
                Blog
              </a>
              <a
                href="#"
                className="font-display font-medium text-[16px] leading-[1.2] text-white hover:text-neutral-300 transition-colors"
              >
                Threads
              </a>
              <a
                href="#"
                className="font-display font-medium text-[16px] leading-[1.2] text-white hover:text-neutral-300 transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
