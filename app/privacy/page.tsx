import {
  LegalDocument,
  LegalDocumentHeader,
  LegalDocumentIntro,
  LegalDocumentList,
  LegalDocumentListItem,
  LegalDocumentParagraph,
  LegalDocumentSection,
  LegalDocumentSectionBody,
  LegalDocumentSectionTitle,
  LegalDocumentTitle,
  LegalDocumentUpdated,
} from "@/components/legal/LegalDocument";
import LegalPage from "@/components/legal/LegalPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Brainbits handles your data, AI processing, and analytics. Your content is never used for marketing or sold to third parties.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <LegalPage>
      <LegalDocument>
        <LegalDocumentHeader>
          <LegalDocumentTitle>Privacy Policy</LegalDocumentTitle>
          <LegalDocumentUpdated>Last updated June 27, 2026</LegalDocumentUpdated>
          <LegalDocumentIntro>
            <p>
              Trust is intrinsically tied to transparency. This policy
              explains how Brainbits handles your data and what we do — and
              don&apos;t do — with it.
            </p>
          </LegalDocumentIntro>
        </LegalDocumentHeader>

        <LegalDocumentSection id="your-content">
          <LegalDocumentSectionTitle>Your Content</LegalDocumentSectionTitle>
          <LegalDocumentSectionBody>
            <LegalDocumentParagraph>
              Brainbits stores the content that you produce. This data is never
              analysed or processed outside the scope of the functionality of
              the product.
            </LegalDocumentParagraph>
            <LegalDocumentParagraph>
              Your content is never used for marketing or analytics purposes and
              is never shared with any third party.
            </LegalDocumentParagraph>
          </LegalDocumentSectionBody>
        </LegalDocumentSection>

        <LegalDocumentSection id="ai-features">
          <LegalDocumentSectionTitle>AI Features</LegalDocumentSectionTitle>
          <LegalDocumentSectionBody>
            <LegalDocumentParagraph>
              When you use AI features in Brainbits, your content is only
              processed ephemerally — it is handled in the moment to deliver the
              feature and is not retained for other purposes.
            </LegalDocumentParagraph>
            <LegalDocumentParagraph>
              We do not use user content for the training of AI models. All of
              our AI providers operate under a zero data retention (ZDR) policy.
            </LegalDocumentParagraph>
          </LegalDocumentSectionBody>
        </LegalDocumentSection>

        <LegalDocumentSection id="analytics">
          <LegalDocumentSectionTitle>Analytics</LegalDocumentSectionTitle>
          <LegalDocumentSectionBody>
            <LegalDocumentParagraph>
              We collect basic event-based analytics to help us improve our
              services. This includes information about how you use the app,
              such as the features you access.
            </LegalDocumentParagraph>
            <LegalDocumentList>
              <LegalDocumentListItem>
                This data is only used for internal purposes.
              </LegalDocumentListItem>
              <LegalDocumentListItem>
                It is not shared with third parties.
              </LegalDocumentListItem>
              <LegalDocumentListItem>
                It is not used for marketing.
              </LegalDocumentListItem>
            </LegalDocumentList>
          </LegalDocumentSectionBody>
        </LegalDocumentSection>

        <LegalDocumentSection id="contact">
          <LegalDocumentSectionTitle>Contact</LegalDocumentSectionTitle>
          <LegalDocumentSectionBody>
            <LegalDocumentParagraph>
              If you have any questions, we&apos;d be happy to answer them.
              Please reach out to us at{" "}
              <a
                href="mailto:privacy@usebrainbits.com"
                className="underline hover:opacity-80"
              >
                privacy@usebrainbits.com
              </a>{" "}
              and we&apos;ll get back to you as soon as possible.
            </LegalDocumentParagraph>
          </LegalDocumentSectionBody>
        </LegalDocumentSection>
      </LegalDocument>
    </LegalPage>
  );
}
