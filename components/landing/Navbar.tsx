"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { APP_STORE_URL } from "@/lib/constants";

export default function Navbar() {
  return (
    <div className="w-full flex flex-row justify-between items-center">
      <Link href="/" className="px-6">
        <img src="/logo.svg" alt="Logo" className="h-6 w-6 object-contain" />
      </Link>

      <div className="flex flex-row gap-0 px-3 items-center justify-center">
        <NavbarHref href="/privacy" label="Privacy" />
        <NavbarHref href="/terms" label="Terms" />
        <a
          href={APP_STORE_URL}
          className="text-body px-4 py-3 no-underline text-black font-semibold"
        >
          Download
        </a>
      </div>
    </div>
  );
}

function NavbarHref({ href, label }: { href: string; label: string }) {
  const currentPath = usePathname();
  const selected = currentPath === href;

  return (
    <Link
      href={href}
      className={`text-body px-4 py-3 cursor-pointer ${
        selected ? "font-semibold" : ""
      }`}
    >
      {label}
    </Link>
  );
}
