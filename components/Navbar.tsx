import Image from "next/image";
import Link from "next/link";
import { APP_STORE_URL } from "@/lib/links";

export default function Navbar() {
  return (
    <header className="relative z-20 w-full shrink-0 p-6">
      <nav
        aria-label="Main"
        className="flex w-full items-start justify-between"
      >
        <Link href="/" className="shrink-0" aria-label="Brainbits home">
          <Image
            src="/images/icons/brainbits.png"
            alt=""
            width={27}
            height={24}
            className="h-6 w-[27px]"
            priority
          />
        </Link>
        <div className="flex items-center gap-8 text-nav text-black">
          <Link href="#features" className="hover:opacity-80">
            Features
          </Link>
          <span className="text-[rgba(47,40,34,0.5)]">API</span>
          <a
            href={APP_STORE_URL}
            className="font-medium hover:opacity-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </a>
        </div>
      </nav>
    </header>
  );
}
