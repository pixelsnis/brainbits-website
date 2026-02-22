import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { Navbar } from "@/components/Navbar";
import { MobileBlogNav } from "@/components/blog/MobileBlogNav";
import { Footer } from "@/components/Footer";
import { BrainbitsPlug } from "@/components/blog/BrainbitsPlug";
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

  const url = `https://usebrainbits.com/blog/${slug}`;
  const imageUrl = `https://usebrainbits.com${result.frontmatter.imageUrl}`;
  const pageTitle =
    result.frontmatter.title.length > 50
      ? result.frontmatter.title
      : `${result.frontmatter.title} — Brainbits Blog`;

  return {
    title: pageTitle,
    description: result.frontmatter.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description: result.frontmatter.description,
      url,
      type: "article",
      publishedTime: new Date(result.frontmatter.date).toISOString(),
      authors: ["Aneesh Hegde"],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: result.frontmatter.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: result.frontmatter.description,
      images: [imageUrl],
      creator: "@pixelsnis",
    },
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
  p: ({ children, ...props }: any) => {
    // If any child is a React element (e.g. BrainbitsPlug renders a <div>),
    // render a <div> instead of <p> to avoid invalid DOM nesting.
    const hasBlockChild = Array.isArray(children)
      ? children.some((child: any) => child && typeof child === "object")
      : children && typeof children === "object";

    if (hasBlockChild) {
      return (
        <div
          className="font-sans font-normal text-[#222] text-[16px] leading-[1.5] mb-[16px]"
          {...props}
        >
          {children}
        </div>
      );
    }

    return (
      <p
        className="font-sans font-normal text-[#222] text-[16px] leading-[1.5] mb-[16px]"
        {...props}
      >
        {children}
      </p>
    );
  },
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
  pre: ({ children, ...props }: any) => (
    <pre
      className="overflow-x-auto my-[24px] p-[16px] md:p-[20px] rounded-[16px] md:rounded-[24px] text-[13px] md:text-[14px] leading-[1.6]"
      {...props}
    >
      {children}
    </pre>
  ),
  code: ({ children, ...props }: any) => {
    // If there is no data-language or data-theme, it's likely an inline markdown code snippet natively.
    const isInline = !props["data-language"] && !props["data-theme"];
    return (
      <code
        className={`${
          isInline
            ? "bg-[#f4f4f5] text-[#e11d48] px-[6px] py-[2px] rounded-[6px]"
            : ""
        } font-mono`}
        {...props}
      >
        {children}
      </code>
    );
  },
  BrainbitsPlug,
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

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://usebrainbits.com/blog/${slug}`,
    },
    headline: frontmatter.title,
    description: frontmatter.description,
    image: [`https://usebrainbits.com${frontmatter.imageUrl}`],
    datePublished: new Date(frontmatter.date).toISOString(),
    dateModified: new Date(frontmatter.date).toISOString(),
    author: {
      "@type": "Person",
      name: "Aneesh Hegde",
      url: "https://threads.net/pixelsnis",
    },
    publisher: {
      "@type": "Organization",
      name: "Brainbits",
      logo: {
        "@type": "ImageObject",
        url: "https://usebrainbits.com/images/Brainbits.webp",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="bg-white md:bg-background min-h-screen flex flex-col md:p-[8px] md:gap-[8px]">
        {/* Desktop/Tablet Navigation */}
        <div className="hidden md:block shrink-0 sticky top-[8px] z-50">
          <Navbar />
        </div>

        {/* Mobile Navigation */}
        <MobileBlogNav />

        {/* Content Wrapper */}
        <div className="bg-white flex flex-col items-center flex-1 w-full md:rounded-[48px] lg:rounded-[64px] md:p-[24px] lg:p-[42px]">
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
                <a
                  href="https://threads.net/pixelsnis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans font-medium text-[#aaa] text-[16px] leading-[1.3] hover:text-[#222] transition-colors"
                >
                  by Aneesh Hegde
                </a>
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
            <div className="px-[16px] md:px-0 w-full mb-[64px] md:mb-0">
              <div className="prose prose-neutral max-w-none font-sans text-black text-[16px] font-normal leading-[1.3]">
                <MDXRemote
                  source={content}
                  components={mdxComponents}
                  options={{
                    mdxOptions: {
                      rehypePlugins: [
                        [rehypePrettyCode, { theme: "catppuccin-mocha" }],
                      ],
                    },
                  }}
                />
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
