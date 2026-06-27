"use client";

import { trackAppStoreClick, trackNavLinkClick } from "@/lib/analytics";
import { EASE } from "@/lib/motion";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { APP_STORE_URL } from "@/lib/constants/links";

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
      className="relative z-20 w-full shrink-0 p-6"
    >
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
          <motion.span
            whileHover={{ y: -1 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <Link
              href="#features"
              className="hover:opacity-80"
              onClick={() =>
                trackNavLinkClick({
                  linkText: "Features",
                  location: "navbar",
                  target: "internal",
                })
              }
            >
              Features
            </Link>
          </motion.span>
          <span className="text-[rgba(47,40,34,0.5)]">API</span>
          <motion.span
            whileHover={{ y: -1 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <a
              href={APP_STORE_URL}
              className="font-medium hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackAppStoreClick("navbar", "Download")}
            >
              Download
            </a>
          </motion.span>
        </div>
      </nav>
    </motion.header>
  );
}
