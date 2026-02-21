"use client";

import { ReactLenis } from "lenis/react";
import { BlogCard } from "./BlogCard";
import type { PostGroup } from "@/lib/blog";

interface BlogListProps {
  groups: PostGroup[];
}

export function BlogList({ groups }: BlogListProps) {
  return (
    <div
      data-lenis-prevent
      className="bg-white flex-1 h-full rounded-[48px] lg:rounded-[64px] overflow-hidden"
    >
      <ReactLenis
        options={{ lerp: 0.15, duration: 1.2 }}
        className="h-full overflow-y-scroll"
      >
        <div className="flex flex-col gap-[36px] p-[24px] md:p-[36px]">
          {groups.length === 0 ? (
            <p className="font-sans text-[#aaa] text-[16px]">
              No posts yet. Check back soon.
            </p>
          ) : (
            groups.map((group) => (
              <div
                key={group.label}
                className="flex flex-col gap-[24px] w-full"
              >
                <h2 className="font-display font-medium text-[24px] md:text-[36px] text-black tracking-[-0.6px] md:tracking-[-0.9px]">
                  {group.label}
                </h2>
                <div className="flex flex-col gap-[24px] w-full">
                  {group.posts.map((post) => (
                    <BlogCard
                      key={post.slug}
                      category={post.category}
                      title={post.title}
                      description={post.description}
                      date={post.date}
                      imageUrl={post.imageUrl}
                      href={`/blog/${post.slug}`}
                    />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </ReactLenis>
    </div>
  );
}
