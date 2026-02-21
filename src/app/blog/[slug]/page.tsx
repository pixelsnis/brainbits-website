import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Navbar } from "@/components/Navbar";
import { MobileBlogNav } from "@/components/blog/MobileBlogNav";
import { Footer } from "@/components/Footer";
import { notFound } from "next/navigation";
import Image from "next/image";
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

const mdxComponents = {
  img: ({ src, alt, ...props }: any) => {
    return (
      <div className="relative w-full h-[300px] md:h-[400px] my-[24px] rounded-[16px] md:rounded-[24px] overflow-hidden bg-[#eee]">
        <Image
          src={src as string}
          alt={alt || "Blog image"}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 720px"
          {...props}
        />
      </div>
    );
  },
  h2: ({ children, ...props }: any) => (
    <h2
      className="font-display font-bold text-[32px] md:text-[40px] text-[#222] leading-[1] tracking-[-0.8px] mt-[48px] mb-[16px]"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: any) => (
    <h3
      className="font-display font-bold text-[24px] md:text-[28px] text-[#222] leading-[1.1] tracking-[-0.4px] mt-[32px] mb-[12px]"
      {...props}
    >
      {children}
    </h3>
  ),
  p: ({ children, ...props }: any) => (
    <p
      className="font-sans font-normal text-[#222] text-[16px] leading-[1.5] mb-[16px]"
      {...props}
    >
      {children}
    </p>
  ),
  a: ({ children, href, ...props }: any) => (
    <a
      href={href}
      className="font-sans font-medium text-black underline decoration-[#aaa] underline-offset-4 hover:decoration-black transition-colors"
      {...props}
    >
      {children}
    </a>
  ),
  ul: ({ children, ...props }: any) => (
    <ul
      className="list-disc list-outside ml-[24px] mb-[16px] space-y-[8px]"
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: any) => (
    <ol
      className="list-decimal list-outside ml-[24px] mb-[16px] space-y-[8px]"
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ children, ...props }: any) => (
    <li
      className="font-sans font-normal text-[#222] text-[16px] leading-[1.5]"
      {...props}
    >
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }: any) => (
    <blockquote
      className="border-l-[4px] border-[#222] pl-[16px] my-[24px] italic"
      {...props}
    >
      {children}
    </blockquote>
  ),
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const result = getPostBySlug(slug);
  if (!result) notFound();

  const { frontmatter, content } = result;

  const formattedDate = new Date(frontmatter.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <>
      <div className="bg-white md:bg-background min-h-screen md:h-screen md:overflow-hidden flex flex-col md:p-[8px] md:gap-[8px]">
        {/* Desktop/Tablet Navigation */}
        <div className="hidden md:block shrink-0">
          <Navbar />
        </div>

        {/* Mobile Navigation */}
        <MobileBlogNav />

        {/* Content Wrapper */}
        <div className="bg-white flex flex-col items-center flex-1 w-full md:overflow-y-auto md:rounded-[48px] lg:rounded-[64px] md:p-[24px] lg:p-[42px]">
          {/* Article Container max-width 720px */}
          <article className="flex flex-col gap-[24px] w-full max-w-[720px] pt-[24px]">
            {/* Header Info */}
            <div className="flex flex-col gap-[16px] px-[16px] md:px-0 w-full">
              <p className="font-sans font-medium text-[#222] text-[16px] tracking-[8px] uppercase">
                {frontmatter.category}
              </p>
              <h1 className="font-display font-bold text-[48px] md:text-[64px] text-[#222] leading-[1] tracking-[-1.2px] md:tracking-[-1.6px] uppercase">
                {frontmatter.title}
              </h1>
              <p className="font-sans font-medium text-[#222] text-[16px] leading-[1.3]">
                {frontmatter.description}
              </p>
              <div className="flex gap-[8px] items-center">
                <p className="font-sans font-medium text-[#aaa] text-[16px] leading-[1.3]">
                  by Aneesh Hegde
                </p>
                <div className="w-[4px] h-[4px] rounded-full bg-[#aaa] shrink-0" />
                {/* Note: I'll replace that image dot with a simple CSS dot to avoid the localhost asset issue */}
                <p className="font-sans font-medium text-[#aaa] text-[16px] leading-[1.3]">
                  {formattedDate}
                </p>
              </div>
            </div>

            {/* Hero Image */}
            <div className="w-full h-[300px] relative shrink-0 md:rounded-[24px] overflow-hidden bg-[#eee]">
              <Image
                src={frontmatter.imageUrl}
                alt={frontmatter.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 720px"
                priority
              />
            </div>

            {/* MDX Body */}
            <div className="px-[16px] md:px-0 w-full">
              <div className="prose prose-neutral max-w-none font-sans text-black text-[16px] font-normal leading-[1.3]">
                <MDXRemote source={content} components={mdxComponents} />
              </div>
            </div>
          </article>
        </div>
      </div>
      <div className="px-[8px] pb-[8px]">
        <Footer />
      </div>
    </>
  );
}
