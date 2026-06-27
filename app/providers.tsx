"use client";

import UtmCapture from "@/components/analytics/UtmCapture";
import { getStoredUtmParams } from "@/lib/utm";
import { PostHogProvider as PHProvider } from "@posthog/react";
import posthog from "posthog-js";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

function PageviewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;
    const qs = searchParams?.toString();
    posthog.capture("$pageview", {
      $current_url: qs ? `${pathname}?${qs}` : pathname,
      ...getStoredUtmParams(),
    });
  }, [pathname, searchParams]);

  return null;
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN as string, {
      ui_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      api_host: process.env.NEXT_PUBLIC_POSTHOG_REVERSE_PROXY,
      defaults: "2026-05-30",
      capture_pageview: false,
      capture_dead_clicks: false,
      loaded: (ph) => {
        if (process.env.NODE_ENV === "development") ph.debug();
      },
    });
  }, []);

  return (
    <PHProvider client={posthog}>
      <Suspense fallback={null}>
        <UtmCapture />
        <PageviewTracker />
      </Suspense>
      {children}
    </PHProvider>
  );
}
