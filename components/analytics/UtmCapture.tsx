"use client";

import { getStoredUtmParams, parseUtmParams, saveUtmParams, UTM_CHANGE_EVENT } from "@/lib/utm";
import posthog from "posthog-js";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function UtmCapture() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const params = parseUtmParams(searchParams);
    const stored =
      Object.keys(params).length > 0 ? saveUtmParams(params) : getStoredUtmParams();

    if (Object.keys(stored).length > 0) {
      posthog.register(stored);
      if (Object.keys(params).length === 0) {
        window.dispatchEvent(new Event(UTM_CHANGE_EVENT));
      }
    }
  }, [searchParams]);

  return null;
}
