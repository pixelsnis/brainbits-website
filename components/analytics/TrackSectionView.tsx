"use client";

import { trackSectionView } from "@/lib/analytics";
import { useEffect, useRef } from "react";

export default function TrackSectionView({ name }: { name: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !fired.current) {
            fired.current = true;
            trackSectionView(name);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [name]);

  return (
    <span ref={ref} aria-hidden className="pointer-events-none absolute" />
  );
}
