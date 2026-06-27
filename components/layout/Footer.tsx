"use client";

import { trackAppStoreClick, trackNavLinkClick } from "@/lib/analytics";
import { useAppStoreUrl } from "@/hooks/useAppStoreUrl";
import {
  APP_STORE_URL,
  CONTACT_EMAIL,
  INSTAGRAM_URL,
  PRIVACY_URL,
  TERMS_URL,
  THREADS_URL,
} from "@/lib/constants/links";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { isAppStoreUrl } from "@/lib/utm";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const WORDMARK_CLASS =
  "font-serif italic leading-none tracking-[-7.2px] text-[#2f2822] text-[72px] md:tracking-[-15px] md:text-[150px] lg:tracking-[-26px] lg:text-[260px]";

type LinkItem =
  | {
      label: string;
      href: string;
      external?: boolean;
    }
  | {
      label: string;
      comingSoon: true;
    };

function TaglineBlock({ className }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-2 ${className ?? ""}`}>
      <p className="text-label font-medium text-[#2f2822]">Note now, think later.</p>
      <p className="text-body text-[rgba(47,40,34,0.5)]">
        Copyright Aneesh Hegde 2026. All rights reserved.
      </p>
    </div>
  );
}

function LinkColumn({
  title,
  items,
  className,
  location,
  appStoreUrl,
}: {
  title: string;
  items: LinkItem[];
  className?: string;
  location: "footer";
  appStoreUrl: string;
}) {
  return (
    <div className={`flex flex-col gap-3 ${className ?? ""}`}>
      <p className="text-label font-medium text-[rgba(47,40,34,0.5)]">{title}</p>
      {items.map((item) => {
        if ("comingSoon" in item) {
          return (
            <p key={item.label} className="text-label font-medium text-[#2f2822]">
              {item.label}{" "}
              <span className="text-[rgba(47,40,34,0.5)]">Coming Soon</span>
            </p>
          );
        }

        const linkClassName = "text-label font-medium text-[#2f2822] hover:opacity-80";

        if (item.external) {
          const isAppStore = isAppStoreUrl(item.href);

          return (
            <a
              key={item.label}
              href={isAppStore ? appStoreUrl : item.href}
              className={linkClassName}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (isAppStore) {
                  trackAppStoreClick("footer", item.label);
                } else {
                  trackNavLinkClick({
                    linkText: item.label,
                    location,
                    target: "external",
                  });
                }
              }}
            >
              {item.label}
            </a>
          );
        }

        return (
          <Link
            key={item.label}
            href={item.href}
            className={linkClassName}
            onClick={() =>
              trackNavLinkClick({
                linkText: item.label,
                location,
                target: "internal",
              })
            }
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}

export default function Footer() {
  const appStoreUrl = useAppStoreUrl();

  return (
    <footer className="relative flex min-h-[740px] w-full max-w-full flex-col justify-end gap-6 overflow-hidden bg-[#f4f4f2] px-4 pt-4 pb-16 md:min-h-[900px] md:gap-8 md:p-8 lg:min-h-[740px]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/images/footer/mobile.webp"
          alt=""
          fill
          className="object-cover object-top md:hidden"
          sizes="100vw"
        />
        <Image
          src="/images/footer/tablet.webp"
          alt=""
          fill
          className="hidden object-cover object-top md:block lg:hidden"
          sizes="100vw"
        />
        <Image
          src="/images/footer/desktop.webp"
          alt=""
          fill
          className="hidden object-cover object-top lg:block"
          sizes="100vw"
        />
      </div>

      <motion.div
        variants={staggerContainer(0.18)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="relative z-10 flex flex-col gap-6 md:gap-8"
      >
        <motion.div variants={fadeUp} className="md:hidden">
          <p className={WORDMARK_CLASS}>Brainbits</p>
        </motion.div>

        <motion.div variants={fadeUp} className="hidden md:block">
          <p className={WORDMARK_CLASS}>Brainbits</p>
        </motion.div>

        <motion.div variants={fadeUp} className="md:hidden">
          <TaglineBlock />
        </motion.div>

        <motion.nav
          variants={staggerContainer(0)}
          aria-label="Footer"
          className="grid w-full grid-cols-2 gap-4 md:flex md:gap-8 md:px-2"
        >
          <motion.div
            variants={fadeUp}
            className="hidden md:flex md:flex-1"
          >
            <TaglineBlock />
          </motion.div>
          <motion.div variants={fadeUp} className="md:flex-1">
            <LinkColumn
              title="Product"
              location="footer"
              appStoreUrl={appStoreUrl}
              items={[
                { label: "iOS App", href: APP_STORE_URL, external: true },
                { label: "API", comingSoon: true },
              ]}
            />
          </motion.div>
          <motion.div variants={fadeUp} className="md:flex-1">
            <LinkColumn
              title="Links"
              location="footer"
              appStoreUrl={appStoreUrl}
              items={[
                { label: "Privacy", href: PRIVACY_URL },
                { label: "Terms of Use", href: TERMS_URL },
                { label: "Contact", href: CONTACT_EMAIL },
              ]}
            />
          </motion.div>
          <motion.div variants={fadeUp} className="md:flex-1">
            <LinkColumn
              title="Connect"
              location="footer"
              appStoreUrl={appStoreUrl}
              items={[
                { label: "Threads", href: THREADS_URL, external: true },
                { label: "Instagram", href: INSTAGRAM_URL, external: true },
              ]}
            />
          </motion.div>
        </motion.nav>
      </motion.div>
    </footer>
  );
}
