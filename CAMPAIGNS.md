# Brainbits Campaign Tracking

This guide explains how to use campaign URLs to track where your website visitors are coming from and how effective different marketing efforts are.

## How It Works

The Brainbits website uses a privacy-friendly, server-side tracking system that automatically captures campaign information whenever someone clicks a link to visit the site.

To track a specific marketing effort (like a newsletter, a social media post, or an ad), you simply add special tags—called **UTM parameters**—to the end of the website URL you share.

### Building a Campaign URL

A standard link looks like this:
`https://usebrainbits.com`

A campaign link looks like this:
`https://usebrainbits.com?utm_source=twitter&utm_medium=social&utm_campaign=winter_launch`

When a user clicks that link, the tracking system automatically reads the `utm_source`, `utm_medium`, and `utm_campaign` tags and attaches them to the user's visit in your PostHog analytics dashboard.

## Standard Tracking Tags (UTMs)

Here are the specific tags you can use to organize your marketing data. You can use one, some, or all of them depending on how specific you want to be:

- **`utm_source`** (Required): Where the traffic is coming from.
  - *Examples: `twitter`, `newsletter`, `google`, `producthunt`*
- **`utm_medium`** (Recommended): The type of marketing medium.
  - *Examples: `social`, `email`, `cpc` (cost-per-click/ads), `referral`*
- **`utm_campaign`**: The specific promotion or product launch.
  - *Examples: `winter_launch`, `founder_discount`, `beta_invite`*
- **`utm_term`**: Used mainly for paid search to identify keywords.
  - *Examples: `notes+app`, `second+brain`*
- **`utm_content`**: Used to differentiate similar content or links within the same ad.
  - *Examples: `header_link`, `blue_button`, `video_ad`*

### Examples in Practice

**1. A link in your weekly email newsletter:**
`https://usebrainbits.com?utm_source=newsletter&utm_medium=email&utm_campaign=weekly_update`

**2. A link in a Threads post announcing a new feature:**
`https://usebrainbits.com?utm_source=threads&utm_medium=social&utm_campaign=feature_announcement`

## Viewing Data in PostHog

All of this data is logged automatically in PostHog. When looking at your analytics:

1. Look for the standard `website:pageview` event.
2. Filter or breakdown this event by `utm_source` or `utm_campaign` to see which channels are driving the most traffic.
3. Because the tracking system uses a consistent, anonymous visitor ID (`ph_distinct_id`), you can track if a user from a specific `utm_campaign` eventually clicks the "Download" button on the website later in their session.

## Important Notes

- **Ad-Blocker Resilient**: Because we capture these URLs on our own server, most ad-blockers will not block this data collection.
- **Privacy First**: The campaign tracking does not capture personally identifiable information (PII). It only records the URL parameters and an anonymous visitor ID.
