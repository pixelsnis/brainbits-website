import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Navbar } from "@/components/Navbar";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const result = getPostBySlug(slug);
  if (!result) return {};
  return {
    title: `${result.frontmatter.title} — Brainbits Blog`,
    description: result.frontmatter.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const result = getPostBySlug(slug);
  if (!result) notFound();

  const { frontmatter, content } = result;

  const formattedDate = new Date(frontmatter.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-background p-[8px] flex flex-col gap-[8px] min-h-screen">
      <Navbar />
      <article className="bg-white rounded-[48px] lg:rounded-[64px] px-[24px] py-[48px] md:px-[64px] md:py-[64px] max-w-[800px] w-full mx-auto flex flex-col gap-[32px]">
        {/* Back link */}
        <Link
          href="/blog"
          className="font-sans text-[#aaa] text-[14px] hover:text-black transition-colors self-start"
        >
          ← Blog
        </Link>

        {/* Header */}
        <div className="flex flex-col gap-[16px]">
          <p className="font-sans font-semibold text-[#aaa] text-[12px] tracking-[6px] uppercase">
            {frontmatter.category}
          </p>
          <h1 className="font-display font-medium text-[32px] md:text-[48px] text-black leading-[1.2] tracking-[-1px]">
            {frontmatter.title}
          </h1>
          <p className="font-sans text-[#aaa] text-[16px]">{formattedDate}</p>
        </div>

        {/* MDX body */}
        <div className="prose prose-neutral max-w-none font-sans text-[16px] leading-[1.7]">
          <MDXRemote source={content} />
        </div>
      </article>
    </div>
  );
}
