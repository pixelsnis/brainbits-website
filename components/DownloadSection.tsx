import Image from "next/image";

function DownloadButton() {
  return (
    <a
      href="#"
      className="relative flex items-center justify-center rounded-full px-6 py-2.5"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-black from-50% to-[#666] to-[127.27%]"
      />
      <span className="text-button relative text-white">Download Brainbits</span>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_-2px_4px_0px_rgba(255,255,255,0.25),inset_2px_1px_4px_0px_rgba(255,255,255,0.25)]"
      />
    </a>
  );
}

export default function DownloadSection() {
  return (
    <section className="relative isolate flex min-h-[640px] w-full flex-col items-center justify-center gap-8 overflow-hidden bg-white md:min-h-[740px] lg:min-h-[560px]">
      {/* Grid — mirrors content layout so it stays centered on the icon, behind everything */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 flex flex-col items-center justify-center gap-8"
      >
        <div className="flex flex-col items-center gap-4 px-4">
          <div className="relative size-[100px]">
            <div className="absolute top-1/2 left-1/2 size-[796px] -translate-x-1/2 -translate-y-1/2 -scale-y-100 mask-[radial-gradient(ellipse_at_center,black_20%,transparent_70%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] md:size-[1280px]">
              <div className="relative size-full">
                <Image
                  src="/images/decals/App Grid.svg"
                  alt=""
                  fill
                  className="object-contain"
                  sizes="(max-width: 767px) 796px, 1280px"
                />
              </div>
            </div>
          </div>
          <h2 className="text-h2-cta invisible text-center" aria-hidden>
            Catch Your Lighting in
            <br />
            This Bottle.
          </h2>
        </div>
        <div
          className="invisible flex flex-col items-center gap-3 px-4"
          aria-hidden
        >
          <DownloadButton />
          <p className="text-caption text-center text-[#aaa]">
            iOS 26.0 and above. For iPhone only.
          </p>
        </div>
      </div>

      <div className="relative z-10 flex w-full flex-col items-center gap-4 px-4">
        <Image
          src="/images/App Icon.webp"
          alt="Brainbits app icon"
          width={100}
          height={100}
          className="size-[100px] object-cover"
          priority
        />
        <h2 className="text-h2-cta text-center text-black">
          Catch Your Lighting in
          <br />
          This Bottle.
        </h2>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-3 px-4">
        <DownloadButton />
        <p className="text-caption text-center text-[#aaa]">
          iOS 26.0 and above. For iPhone only.
        </p>
      </div>
    </section>
  );
}
