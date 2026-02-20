"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
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
        <Image
          src="/images/Logo.svg"
          alt="Brainbits logo"
          width={31}
          height={28}
          priority
        />
      </div>
      <a
        href="/download"
        className="bg-black text-white h-full flex items-center justify-center px-[24px] rounded-full shrink-0 font-display font-medium text-[20px] leading-[1.2] tracking-[-0.5px] hover:bg-neutral-800 transition-colors"
      >
        Download
      </a>
    </nav>
  );
}
