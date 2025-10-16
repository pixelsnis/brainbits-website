"use client";

import Image from "next/image";
import { useMediaQuery } from "react-responsive";

interface HeroBackgroundProps {
  usesGridOverlay?: boolean;
}

export default function HeroBackground({
  usesGridOverlay = false,
}: HeroBackgroundProps) {
  const isSm = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="absolute w-full h-full z-0">
      {isSm && (
        <Image
          src="/images/mobile-hero-bg.webp"
          alt="Hero Background"
          height={0}
          width={0}
          sizes="100vw"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      )}

      {!isSm && (
        <Image
          src="/images/desktop-hero-bg.webp"
          alt="Hero Background"
          height={0}
          width={0}
          sizes="100vw"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      )}

      {usesGridOverlay && (
        <div className="absolute inset-0 opacity-50 flex items-center justify-center">
          <Image
            src="/images/grid-overlay.svg"
            alt="Grid Overlay"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      )}
    </div>
  );
}
