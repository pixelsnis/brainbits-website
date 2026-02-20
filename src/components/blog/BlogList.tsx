"use client";

import { ReactLenis } from "lenis/react";
import { BlogCard } from "./BlogCard";

export function BlogList() {
  return (
    // data-lenis-prevent tells the ROOT Lenis (from layout.tsx) to back off this area.
    // Without it, root Lenis intercepts wheel events before the local instance can.
    <div
      data-lenis-prevent
      className="bg-white flex-1 h-full rounded-[48px] lg:rounded-[64px] overflow-hidden"
    >
      {/* Local ReactLenis (no `root` prop) = smooth scroll scoped just to this container. */}
      <ReactLenis
        options={{ lerp: 0.15, duration: 1.2 }}
        className="h-full overflow-y-scroll"
      >
        <div className="flex flex-col gap-[36px] p-[24px] md:p-[36px]">
          <div className="flex flex-col gap-[24px] w-full">
            <h2 className="font-display font-medium text-[24px] md:text-[36px] text-black tracking-[-0.6px] md:tracking-[-0.9px]">
              This Month
            </h2>
            <div className="flex flex-col gap-[24px] w-full">
              <BlogCard
                category="CATEGORY"
                title="Title of Article"
                description="Description of the content. This needs to probably have around two lines."
                date="20 Feb 2025"
                href="#"
              />
              <BlogCard
                category="CATEGORY"
                title="Title of Article"
                description="Description of the content. This needs to probably have around two lines."
                date="20 Feb 2025"
                href="#"
              />
            </div>
          </div>

          <div className="flex flex-col gap-[24px] w-full">
            <h2 className="font-display font-medium text-[24px] md:text-[36px] text-black tracking-[-0.6px] md:tracking-[-0.9px]">
              January &lsquo;25
            </h2>
            <div className="flex flex-col gap-[24px] w-full">
              <BlogCard
                category="CATEGORY"
                title="Title of Article"
                description="Description of the content. This needs to probably have around two lines."
                date="20 Feb 2025"
                href="#"
              />
              <BlogCard
                category="CATEGORY"
                title="Title of Article"
                description="Description of the content. This needs to probably have around two lines."
                date="20 Feb 2025"
                href="#"
              />
            </div>
          </div>
        </div>
      </ReactLenis>
    </div>
  );
}
