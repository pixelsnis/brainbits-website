"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { trackEvent } from "@/actions/tracking";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState(
    "https://apps.apple.com/app/apple-store/id6753618169?pt=124081099&ct=website&mt=8",
  );
  const [homeUrl, setHomeUrl] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    const params = new URLSearchParams(window.location.search);
    const campaign = params.get("utm_campaign") || params.get("utm_source");
    if (campaign) {
      setDownloadUrl(
        `https://apps.apple.com/app/apple-store/id6753618169?pt=124081099&ct=${encodeURIComponent(
          campaign,
        )}&mt=8`,
      );
    }

    if (window.location.search) {
      setHomeUrl(`/${window.location.search}`);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="hidden md:flex gap-[8px] items-center h-[54px] sticky top-[8px] z-50 rounded-full">
      <div
        className={`flex-1 h-full flex items-center px-[18px] rounded-full transition-colors duration-300 border ${
          isScrolled
            ? "border-[#eee] bg-white/80 backdrop-blur-md"
            : "border-transparent bg-white"
        }`}
      >
        <Link href={homeUrl} onClick={() => trackEvent("navbar_logo_clicked")}>
          <Image
            src="/images/Logo.svg"
            alt="Brainbits logo"
            width={31}
            height={28}
            priority
          />
        </Link>
      </div>
      <a
        href={downloadUrl}
        onClick={() => trackEvent("navbar_download_clicked")}
        className="bg-black text-white h-full flex items-center justify-center px-[24px] rounded-full shrink-0 font-display font-medium text-[20px] leading-[1.2] tracking-[-0.5px] hover:bg-neutral-800 transition-colors"
      >
        Download
      </a>
    </nav>
  );
}
