import fs from "fs";
import path from "path";
import matter from "gray-matter";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface PostFrontmatter {
  title: string;
  description: string;
  /** ISO 8601 date string, e.g. "2025-02-20" */
  date: string;
  category: string;
  /** Must be a path rooted at /public, e.g. "/images/blog/my-post.jpg" */
  imageUrl: string;
  published: boolean;
}

export interface Post extends PostFrontmatter {
  /** File name without extension, used as the URL segment */
  slug: string;
}

export interface PostGroup {
  /** "This Month" | "February '25" | etc. */
  label: string;
  posts: Post[];
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

function formatMonthLabel(date: Date, now: Date): string {
  const isSameMonth =
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth();

  if (isSameMonth) return "This Month";

  const month = date.toLocaleString("en-US", { month: "long" });
  const year = String(date.getFullYear()).slice(-2);
  return `${month} '${year}`;
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/** Returns all published posts sorted newest-first. */
export function getAllPosts(): Post[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const posts: Post[] = files
    .map((filename) => {
      const slug = filename.replace(/\.mdx?$/, "");
      const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), "utf-8");
      const { data } = matter(raw);
      return { slug, ...(data as PostFrontmatter) };
    })
    .filter((p) => p.published);

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

/** Returns frontmatter + raw MDX content for a single post. Returns null if not found. */
export function getPostBySlug(
  slug: string,
): { frontmatter: PostFrontmatter; content: string } | null {
  const mdxPath = path.join(CONTENT_DIR, `${slug}.mdx`);
  const mdPath = path.join(CONTENT_DIR, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath)
    ? mdxPath
    : fs.existsSync(mdPath)
      ? mdPath
      : null;

  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { frontmatter: data as PostFrontmatter, content };
}

/** Groups posts by calendar month. Current month is labelled "This Month". */
export function groupPostsByMonth(posts: Post[]): PostGroup[] {
  const now = new Date();
  const groups: Map<string, PostGroup> = new Map();

  for (const post of posts) {
    const date = new Date(post.date);
    // Key by year-month so same-month posts bucket together
    const key = `${date.getFullYear()}-${String(date.getMonth()).padStart(2, "0")}`;
    const label = formatMonthLabel(date, now);

    if (!groups.has(key)) {
      groups.set(key, { label, posts: [] });
    }
    groups.get(key)!.posts.push(post);
  }

  return Array.from(groups.values());
}
