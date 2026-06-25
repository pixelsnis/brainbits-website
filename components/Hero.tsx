import CTA from "@/components/CTA";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative isolate flex h-[1139px] w-full flex-col items-center md:h-[1400px] lg:h-[1450px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[url('/images/decals/Background%20Tile.jpg')] bg-repeat opacity-20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 to-white to-[58%]"
      />

      <div className="relative z-10 flex w-full shrink-0 flex-col items-center pt-[90px] md:px-8 md:pt-24">
        <div className="flex flex-col items-center gap-6 px-4 md:px-0 lg:max-w-[752px]">
          <Image
            src="/images/icons/brainbits.png"
            alt="Brainbits"
            width={35}
            height={32}
            className="h-8 w-[35px] shrink-0 md:hidden"
            priority
          />
          <div className="flex flex-col gap-4 text-center">
            <h1 className="text-black">
              <span className="block">The Notes App for</span>
              <span className="block">your Biggest Ideas.</span>
            </h1>
            <div className="text-body-lg text-black">
              <p className="md:hidden">
                Brainbits is a notes app for your biggest ideas and smallest
                details. Designed to keep you moving, not organizing.
              </p>
              <p className="hidden md:block">
                Brainbits is a notes app for your biggest ideas and smallest
                details.
              </p>
              <p className="hidden md:block">
                Designed to keep you moving, not organizing.
              </p>
            </div>
          </div>
          <CTA />
        </div>
      </div>

      <div
        aria-hidden
        className="relative z-10 min-h-px w-full flex-1 lg:aspect-[1910/2018]"
      />
    </section>
  );
}
