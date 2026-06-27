import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [
        `${SITE_URL}/images/Hero%20Product%20Screenshot.webp`,
        `${SITE_URL}/images/cards/Capture%20Note.webp`,
        `${SITE_URL}/images/cards/New%20Page.webp`,
        `${SITE_URL}/images/cards/Chat.webp`,
      ],
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
