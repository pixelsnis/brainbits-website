import type { MetadataRoute } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/seo/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description:
      "An AI-native notes app for iOS. Capture ideas instantly and get answers from your notes.",
    start_url: SITE_URL,
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/webp",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/webp",
      },
    ],
  };
}
