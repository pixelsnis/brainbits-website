"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export function MobileBlogNav() {
  const [homeUrl, setHomeUrl] = useState("/");

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.search) {
      setHomeUrl(`/${window.location.search}`);
    }
  }, []);

  return (
    <div className="flex md:hidden items-center justify-between p-[16px] w-full bg-white z-50 sticky top-0">
      <Link
        href={homeUrl}
        className="flex items-center justify-center transition-opacity hover:opacity-80 shrink-0"
        aria-label="Home"
      >
        <Image
          src="/images/Logo.svg"
          alt="Brainbits logo"
          width={28}
          height={28}
          className="h-[28px] w-auto shrink-0"
          priority
        />
      </Link>
      <a
        href="/download"
        className="bg-black text-white h-[40px] flex items-center justify-center px-[16px] rounded-[100px] shrink-0 font-display font-medium text-[16px] leading-[1.2] tracking-[-0.4px] hover:bg-neutral-800 transition-colors"
      >
        Download
      </a>
    </div>
  );
}
