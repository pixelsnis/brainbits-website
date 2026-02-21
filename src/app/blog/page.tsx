import { Navbar } from "@/components/Navbar";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogList } from "@/components/blog/BlogList";
import { getAllPosts, groupPostsByMonth } from "@/lib/blog";

export const metadata = {
  title: "Blog — Brainbits",
  description: "Bits of the brain behind Brainbits",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const groups = groupPostsByMonth(posts);

  return (
    <div className="bg-background h-dvh flex flex-col p-[8px] gap-[8px] overflow-hidden">
      <div className="shrink-0">
        <Navbar />
      </div>
      <div className="flex flex-col lg:flex-row gap-[8px] flex-1 min-h-0">
        <BlogHero />
        <BlogList groups={groups} />
      </div>
    </div>
  );
}
