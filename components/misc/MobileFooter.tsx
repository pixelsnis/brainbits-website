import Image from "next/image";
import Link from "next/link";

export default function MobileFooter({
  withBackground = true,
}: {
  withBackground?: boolean;
}) {
  return (
    <div className="w-full h-[30vh] relative">
      {withBackground && (
        <>
          <Image
            src="/images/footer-bg.webp"
            alt="Footer BG"
            height={0}
            width={0}
            sizes="100vw"
            className="w-full h-full object-cover absolute left-0 top-0 z-0 object-bottom"
          />

          <div className="w-full h-full bg-gradient-to-b from-white to-transparent absolute left-0 top-0 z-1" />
        </>
      )}

      <div className="w-full h-full absolute left-0 bottom-0 flex flex-col items-start justify-end gap-4 p-4 pb-8 z-2">
        <img src="/logo.svg" className="w-8 h-8" />

        <div className="w-full flex flex-row gap-4 items-start justify-start">
          <div className="flex flex-1 flex-col items-start justify-start font-mono gap-2">
            <p className="font-semibold">Brainbits</p>
            <p className="text-black/50 text-footnote">
              Copyright Aneesh Hegde 2025-26. All rights reserved.
            </p>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-2 font-mono">
            <p className="font-semibold">Links</p>

            <Link href="/" className="text-black/50">
              Home
            </Link>

            <Link
              href="https://apps.apple.com/us/app/brainbits-personal-memory/id6753618169"
              className="text-black/50"
            >
              Download
            </Link>

            <Link href="/privacy" className="text-black/50">
              Privacy
            </Link>

            <Link href="/terms" className="text-black/50">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
