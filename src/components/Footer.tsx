"use client";

import TextPressure from "./TextPressure";
import { trackEvent } from "@/actions/tracking";

export function Footer() {
  return (
    <footer className="bg-black rounded-[48px] md:rounded-[64px] overflow-hidden flex flex-col justify-end p-[36px] md:px-[36px] md:py-[36px] h-[560px]">
      {/* Mobile footer shows "Brainbits", tablet+ shows full text */}
      <p className="font-display font-medium text-white leading-[1.1] tracking-[-0.8px] mb-[16px] text-[32px] md:hidden">
        Brainbits
      </p>
      {/* Tablet footer shows static Braiiiiinbits */}
      <p className="font-display font-medium text-white leading-[1.1] tracking-[-3px] mb-[16px] text-[64px] hidden md:block lg:hidden">
        Braaaaaaaaaaaainbits!
      </p>
      {/* Desktop footer shows interactive TextPressure */}
      <div className="hidden lg:flex mb-[16px] w-full relative justify-start items-center">
        <TextPressure
          text="Braaaaaaaaaaaainbits!"
          flex={true}
          alpha={false}
          stroke={false}
          width={false}
          weight={true}
          italic={false}
          textColor="white"
        />
      </div>
      <div className="flex flex-col gap-[16px]">
        <p className="font-display font-medium text-[16px] leading-[1.2] text-white">
          Note now, think later.
        </p>
        <div className="flex gap-0">
          <div className="flex flex-col gap-[12px] flex-1">
            <p className="font-display font-medium text-[16px] leading-[1.2] text-[#666]">
              Links
            </p>
            <a
              href="/privacy"
              onClick={() =>
                trackEvent("footer_link_clicked", { link_name: "privacy" })
              }
              className="font-display font-medium text-[16px] leading-[1.2] text-white hover:text-neutral-300 transition-colors"
            >
              Privacy
            </a>
            <a
              href="/terms"
              onClick={() =>
                trackEvent("footer_link_clicked", { link_name: "terms" })
              }
              className="font-display font-medium text-[16px] leading-[1.2] text-white hover:text-neutral-300 transition-colors"
            >
              Terms of Use
            </a>
            <a
              href="mailto:aneesh@usebrainbits.com"
              onClick={() =>
                trackEvent("footer_link_clicked", { link_name: "contact" })
              }
              className="font-display font-medium text-[16px] leading-[1.2] text-white hover:text-neutral-300 transition-colors"
            >
              Contact
            </a>
          </div>
          <div className="flex flex-col gap-[12px] flex-1">
            <p className="font-display font-medium text-[16px] leading-[1.2] text-[#666]">
              Connect
            </p>
            <a
              href="/blog"
              onClick={() =>
                trackEvent("footer_link_clicked", { link_name: "blog" })
              }
              className="font-display font-medium text-[16px] leading-[1.2] text-white hover:text-neutral-300 transition-colors"
            >
              Blog
            </a>
            <a
              href="https://threads.net/pixelsnis"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent("footer_link_clicked", { link_name: "threads" })
              }
              className="font-display font-medium text-[16px] leading-[1.2] text-white hover:text-neutral-300 transition-colors"
            >
              Threads
            </a>
            <a
              href="https://instagram.com/pixelsnis"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent("footer_link_clicked", { link_name: "instagram" })
              }
              className="font-display font-medium text-[16px] leading-[1.2] text-white hover:text-neutral-300 transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
