"use server";

import { cookies } from "next/headers";
import PostHogClient from "@/lib/posthog";

export async function trackEvent(
  eventName: string,
  properties: Record<string, any> = {},
) {
  try {
    const cookieStore = await cookies();
    const distinctId = cookieStore.get("ph_distinct_id")?.value;

    if (!distinctId) {
      console.warn("PostHog tracking failed: missing distinctId cookie");
      return;
    }

    const posthog = PostHogClient();

    // Process UTM parameters if url provided
    let utmProperties: Record<string, any> = {};
    if (properties.url) {
      try {
        const urlObj = new URL(
          properties.url,
          process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
        );
        const searchParams = urlObj.searchParams;

        const params = [
          "utm_source",
          "utm_medium",
          "utm_campaign",
          "utm_term",
          "utm_content",
        ];

        for (const param of params) {
          const val = searchParams.get(param);
          if (val) {
            utmProperties[param] = val;
            // Standard PostHog properties often use $set for initial UTM values, but direct properties are fine
            utmProperties[`$${param}`] = val;
          }
        }
      } catch (e) {
        // Invalid URL, ignore
      }
    }

    const mergedProperties = {
      ...properties,
      ...utmProperties,
      platform: "web",
      $current_url: properties.url,
    };

    posthog.capture({
      distinctId: distinctId,
      event: `website:${eventName}`,
      properties: mergedProperties,
    });

    // Make sure events are sent before Server Action exits, if needed.
    // Usually not strictly necessary on serverless if flushAt: 1, but safe.
    await posthog.shutdown();
  } catch (error) {
    console.error("Error tracking PostHog event via server action:", error);
  }
}
