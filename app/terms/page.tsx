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
import { PRIVACY_URL } from "@/lib/constants/links";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of Service for Brainbits, the intelligent notes app for iOS. Covers eligibility, user content, privacy, and acceptable use.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <LegalPage>
      <LegalDocument>
        <LegalDocumentHeader>
          <LegalDocumentTitle>Terms of Service</LegalDocumentTitle>
          <LegalDocumentUpdated>
            Effective Date: October 16, 2025
          </LegalDocumentUpdated>
          <LegalDocumentIntro>
            <p>
              Welcome to Brainbits, an intelligent notes app for iOS. These
              Terms of Service (&ldquo;Terms&rdquo;) govern your access to and
              use of Brainbits (&ldquo;Service&rdquo;), including the iOS app
              and its features for capturing, syncing, and organizing notes. By
              using the Service, you agree to these Terms. If you do not agree,
              do not use the Service.
            </p>
          </LegalDocumentIntro>
        </LegalDocumentHeader>

        <LegalDocumentSection id="eligibility">
          <LegalDocumentSectionTitle>1. Eligibility</LegalDocumentSectionTitle>
          <LegalDocumentSectionBody>
            <LegalDocumentParagraph>
              You must be at least 13 years old (or the minimum age required in
              your country) to use the Service. By using it, you represent that
              you meet this requirement and are not barred from using the
              Service under applicable law.
            </LegalDocumentParagraph>
          </LegalDocumentSectionBody>
        </LegalDocumentSection>

        <LegalDocumentSection id="accounts-and-security">
          <LegalDocumentSectionTitle>
            2. Accounts and Security
          </LegalDocumentSectionTitle>
          <LegalDocumentSectionBody>
            <LegalDocumentParagraph>
              To use certain features, you may need to create an account. You
              are responsible for maintaining the confidentiality of your
              account credentials and for all activities under your account.
              Notify us immediately of any unauthorized use.
            </LegalDocumentParagraph>
          </LegalDocumentSectionBody>
        </LegalDocumentSection>

        <LegalDocumentSection id="use-of-the-service">
          <LegalDocumentSectionTitle>
            3. Use of the Service
          </LegalDocumentSectionTitle>
          <LegalDocumentSectionBody>
            <LegalDocumentParagraph>
              Brainbits allows you to capture short text or audio notes as user
              content. User content is stored locally on your device and can be
              synced to our servers for processing, including transcription of
              recordings and analysis to help organize your memories. You may
              use the Service for personal or commercial purposes.
            </LegalDocumentParagraph>
          </LegalDocumentSectionBody>
        </LegalDocumentSection>

        <LegalDocumentSection id="user-content">
          <LegalDocumentSectionTitle>4. User Content</LegalDocumentSectionTitle>
          <LegalDocumentSectionBody>
            <LegalDocumentParagraph>
              You retain ownership of your user content. By submitting content,
              you grant us a worldwide, non-exclusive, royalty-free license to
              store, process, and transmit it as needed to provide the Service,
              such as for transcription, analysis, and responding to your
              queries. We do not claim ownership of your content, and it is
              never used for marketing, advertising, or any other purpose.
            </LegalDocumentParagraph>
          </LegalDocumentSectionBody>
        </LegalDocumentSection>

        <LegalDocumentSection id="prohibited-uses">
          <LegalDocumentSectionTitle>
            5. Prohibited Uses
          </LegalDocumentSectionTitle>
          <LegalDocumentSectionBody>
            <LegalDocumentParagraph>You agree not to:</LegalDocumentParagraph>
            <LegalDocumentList>
              <LegalDocumentListItem>
                Use the Service for illegal purposes or in violation of laws.
              </LegalDocumentListItem>
              <LegalDocumentListItem>
                Interfere with the Service or its security.
              </LegalDocumentListItem>
              <LegalDocumentListItem>
                Upload harmful code, spam, or abusive content.
              </LegalDocumentListItem>
              <LegalDocumentListItem>
                Reverse-engineer or attempt to access non-public parts of the
                Service.
              </LegalDocumentListItem>
            </LegalDocumentList>
            <LegalDocumentParagraph>
              We may suspend or terminate accounts for violations.
            </LegalDocumentParagraph>
          </LegalDocumentSectionBody>
        </LegalDocumentSection>

        <LegalDocumentSection id="third-party-services">
          <LegalDocumentSectionTitle>
            6. Third-Party Services
          </LegalDocumentSectionTitle>
          <LegalDocumentSectionBody>
            <LegalDocumentParagraph>
              We use third-party services to help provide our features, such as
              for transcriptions, AI processing, and cloud storage. These
              services may access your data only as necessary to perform their
              functions, but they are not permitted to use it for any other
              purpose. Your data is never sold to third parties, and we do not
              share it with advertisers or marketers.
            </LegalDocumentParagraph>
          </LegalDocumentSectionBody>
        </LegalDocumentSection>

        <LegalDocumentSection id="privacy">
          <LegalDocumentSectionTitle>7. Privacy</LegalDocumentSectionTitle>
          <LegalDocumentSectionBody>
            <LegalDocumentParagraph>
              Your privacy is important. Please review our Privacy Policy at{" "}
              <Link href={PRIVACY_URL} className="underline hover:opacity-80">
                usebrainbits.com/privacy
              </Link>{" "}
              for details on how we handle your data, including storage,
              processing, and analytics.
            </LegalDocumentParagraph>
          </LegalDocumentSectionBody>
        </LegalDocumentSection>

        <LegalDocumentSection id="termination">
          <LegalDocumentSectionTitle>8. Termination</LegalDocumentSectionTitle>
          <LegalDocumentSectionBody>
            <LegalDocumentParagraph>
              You may stop using the Service anytime. We may terminate or
              suspend access for any reason, including violations, with or
              without notice.
            </LegalDocumentParagraph>
          </LegalDocumentSectionBody>
        </LegalDocumentSection>

        <LegalDocumentSection id="disclaimers">
          <LegalDocumentSectionTitle>
            9. Disclaimers and Limitation of Liability
          </LegalDocumentSectionTitle>
          <LegalDocumentSectionBody>
            <LegalDocumentParagraph>
              The Service is provided &ldquo;as is&rdquo; without warranties. We
              disclaim all warranties, express or implied. To the fullest extent
              permitted by law, we take no liability whatsoever for any direct,
              indirect, incidental, consequential, special, or exemplary
              damages, including but not limited to damages for loss of profits,
              goodwill, use, data, or other intangible losses, resulting from
              your use of the Service.
            </LegalDocumentParagraph>
          </LegalDocumentSectionBody>
        </LegalDocumentSection>

        <LegalDocumentSection id="changes-to-terms">
          <LegalDocumentSectionTitle>
            10. Changes to Terms
          </LegalDocumentSectionTitle>
          <LegalDocumentSectionBody>
            <LegalDocumentParagraph>
              We may update these Terms. Continued use after changes constitutes
              acceptance.
            </LegalDocumentParagraph>
          </LegalDocumentSectionBody>
        </LegalDocumentSection>

        <LegalDocumentSection id="governing-law">
          <LegalDocumentSectionTitle>
            11. Governing Law
          </LegalDocumentSectionTitle>
          <LegalDocumentSectionBody>
            <LegalDocumentParagraph>
              These Terms are governed by the laws of Bangalore, India, without
              regard to conflict of laws principles. Any disputes will be
              resolved exclusively in the courts in Bangalore, India.
            </LegalDocumentParagraph>
          </LegalDocumentSectionBody>
        </LegalDocumentSection>

        <LegalDocumentSection id="contact">
          <LegalDocumentSectionTitle>Contact Us</LegalDocumentSectionTitle>
          <LegalDocumentSectionBody>
            <LegalDocumentParagraph>
              Questions? Email{" "}
              <a
                href="mailto:support@usebrainbits.com"
                className="underline hover:opacity-80"
              >
                support@usebrainbits.com
              </a>
              .
            </LegalDocumentParagraph>
            <LegalDocumentParagraph>
              Thank you for using Brainbits!
            </LegalDocumentParagraph>
          </LegalDocumentSectionBody>
        </LegalDocumentSection>
      </LegalDocument>
    </LegalPage>
  );
}
