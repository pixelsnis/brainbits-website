// Blog has its own layout that does NOT include SmoothScrolling (Lenis).
// ReactLenis with `root` intercepts all wheel events globally, which prevents
// the BlogList's overflow-y-scroll container from ever receiving scroll events.
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
