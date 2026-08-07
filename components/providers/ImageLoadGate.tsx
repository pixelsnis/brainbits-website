"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const DOM_SETTLE_MS = 100;
const IMAGE_LOAD_TIMEOUT_MS = 15_000;

type ImageLoadGateProps = {
  cssBackgrounds?: readonly string[];
  children: ReactNode;
};

function preloadImage(src: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = src;
  });
}

function parseSrcset(srcset: string): string[] {
  return srcset
    .split(",")
    .map((part) => part.trim().split(/\s+/)[0])
    .filter(Boolean);
}

function collectImageUrls(container: HTMLElement): string[] {
  const urls = new Set<string>();

  container.querySelectorAll("img").forEach((img) => {
    const src = img.getAttribute("src");
    if (src) {
      urls.add(src);
    }

    const srcset = img.getAttribute("srcset");
    if (srcset) {
      parseSrcset(srcset).forEach((url) => urls.add(url));
    }
  });

  return [...urls];
}

function waitForDomSettle(container: HTMLElement): Promise<void> {
  return new Promise((resolve) => {
    let settleId: ReturnType<typeof setTimeout>;
    let timeoutId: ReturnType<typeof setTimeout>;

    const finish = () => {
      observer.disconnect();
      clearTimeout(settleId);
      clearTimeout(timeoutId);
      resolve();
    };

    const scheduleSettle = () => {
      clearTimeout(settleId);
      settleId = setTimeout(finish, DOM_SETTLE_MS);
    };

    const observer = new MutationObserver(scheduleSettle);
    observer.observe(container, { childList: true, subtree: true });

    scheduleSettle();
    timeoutId = setTimeout(finish, IMAGE_LOAD_TIMEOUT_MS);
  });
}

export default function ImageLoadGate({
  cssBackgrounds = [],
  children,
}: ImageLoadGateProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) {
      return;
    }

    let cancelled = false;

    async function load(container: HTMLElement) {
      await waitForDomSettle(container);

      const urls = collectImageUrls(container);
      await Promise.all([
        ...cssBackgrounds.map(preloadImage),
        ...urls.map(preloadImage),
      ]);

      if (!cancelled) {
        setReady(true);
      }
    }

    void load(el);

    return () => {
      cancelled = true;
    };
  }, [cssBackgrounds]);

  return (
    <>
      {!ready && (
        <div className="fixed inset-0 z-50 bg-white" aria-busy="true" />
      )}
      <div ref={containerRef}>
        {ready ? <div key="ready">{children}</div> : children}
      </div>
    </>
  );
}
