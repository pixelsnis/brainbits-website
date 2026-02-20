import { Navbar } from "@/components/Navbar";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogList } from "@/components/blog/BlogList";

export const metadata = {
  title: "Blog — Brainbits",
  description: "Bits of the brain behind Brainbits",
};

export default function BlogPage() {
  return (
    // Root is locked to viewport height. overflow-hidden stops page-level scroll.
    <div className="bg-background h-dvh flex flex-col p-[8px] gap-[8px] overflow-hidden">
      {/* Navbar is shrink-0 — it never shrinks, always takes its 54px */}
      <div className="shrink-0">
        <Navbar />
      </div>

      {/* Content row fills the rest. min-h-0 is critical — prevents flex from
          letting children exceed the parent height (flex default is min-height:auto) */}
      <div className="flex flex-col lg:flex-row gap-[8px] flex-1 min-h-0">
        <BlogHero />
        <BlogList />
      </div>
    </div>
  );
}
