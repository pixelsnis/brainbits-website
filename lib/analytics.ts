import { getStoredUtmParams } from "@/lib/utm";
import posthog from "posthog-js";

export type AppStoreLocation = "hero" | "download_section" | "navbar" | "footer";

function withUtmParams<T extends Record<string, unknown>>(properties: T) {
  return { ...properties, ...getStoredUtmParams() };
}

export function trackAppStoreClick(
  location: AppStoreLocation,
  buttonText: string,
) {
  posthog.capture(
    "app_store_clicked",
    withUtmParams({ location, button_text: buttonText }),
  );
}

export function trackNavLinkClick(args: {
  linkText: string;
  location: "navbar" | "footer";
  target: "internal" | "external";
}) {
  posthog.capture("nav_link_clicked", withUtmParams(args));
}

export function trackSectionView(sectionName: string) {
  posthog.capture(
    "section_viewed",
    withUtmParams({ section_name: sectionName }),
  );
}
