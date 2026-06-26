"use client";

import { ReactLenis } from "lenis/react";
import type { LenisOptions } from "lenis";
import { useEffect, useState } from "react";

export const LENIS_LERP = 0.2;
export const LENIS_WHEEL_MULTIPLIER = 0.94;

const LENIS_OPTIONS: LenisOptions = {
  lerp: LENIS_LERP,
  wheelMultiplier: LENIS_WHEEL_MULTIPLIER,
  smoothWheel: true,
  anchors: true,
  allowNestedScroll: true,
};

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => setEnabled(!mediaQuery.matches);
    update();

    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  if (!enabled) {
    return children;
  }

  return (
    <ReactLenis root options={LENIS_OPTIONS}>
      {children}
    </ReactLenis>
  );
}
