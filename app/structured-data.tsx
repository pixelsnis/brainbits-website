import { FAQ_ITEMS } from "@/lib/content/faq";
import { APP_STORE_URL, INSTAGRAM_URL, THREADS_URL } from "@/lib/constants/links";
import {
  DEFAULT_DESCRIPTION,
  OG_IMAGE_PATH,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo/site";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function GlobalStructuredData() {
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}${OG_IMAGE_PATH}`,
    sameAs: [THREADS_URL, INSTAGRAM_URL],
  };

  const softwareApplication = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    applicationCategory: "ProductivityApplication",
    operatingSystem: "iOS",
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    downloadUrl: APP_STORE_URL,
    image: `${SITE_URL}${OG_IMAGE_PATH}`,
  };

  return (
    <>
      <JsonLd data={website} />
      <JsonLd data={organization} />
      <JsonLd data={softwareApplication} />
    </>
  );
}

export function FaqStructuredData() {
  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return <JsonLd data={faqPage} />;
}
