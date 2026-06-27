import posthog from "posthog-js";

export type AppStoreLocation = "hero" | "download_section" | "navbar" | "footer";

export function trackAppStoreClick(
  location: AppStoreLocation,
  buttonText: string,
) {
  posthog.capture("app_store_clicked", { location, button_text: buttonText });
}

export function trackNavLinkClick(args: {
  linkText: string;
  location: "navbar" | "footer";
  target: "internal" | "external";
}) {
  posthog.capture("nav_link_clicked", args);
}

export function trackSectionView(sectionName: string) {
  posthog.capture("section_viewed", { section_name: sectionName });
}
