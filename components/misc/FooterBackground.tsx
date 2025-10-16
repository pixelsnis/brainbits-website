"use client";

import Image from "next/image";

interface FooterBackgroundProps {
  usesGridOverlay?: boolean;
}

export default function FooterBackground({
  usesGridOverlay = false,
}: FooterBackgroundProps) {
  return (
    <div className="w-full h-full absolute left-0 top-0 z-0">
      <Image
        src="/images/footer-bg.webp"
        alt="Footer Background"
        height={0}
        width={0}
        sizes="100vw"
        className="w-full h-full object-cover object-bottom"
      />

      {usesGridOverlay && (
        <div className="absolute inset-0 opacity-50 flex items-center justify-center overflow-hidden">
          <Image
            src="/images/grid-overlay.svg"
            alt="Grid Overlay"
            fill
            className="w-full h-full object-cover"
            style={{ objectPosition: "center" }}
          />
        </div>
      )}
    </div>
  );
}
