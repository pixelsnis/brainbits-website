import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="bg-background p-[8px] flex flex-col gap-[8px] min-h-screen">
      <Navbar />

      {/* Mobile Header (Hidden on md+) */}
      <div className="w-full flex md:hidden flex-col items-center justify-center gap-[24px] pt-[32px] pb-[16px]">
        <Link href="/">
          <Image
            src="/images/Logo.svg"
            alt="Brainbits logo"
            width={28}
            height={28}
          />
        </Link>
      </div>

      {/* Main Content Card */}
      <div className="w-full max-w-[640px] self-center flex flex-col items-stretch justify-start gap-[32px] md:gap-[48px] bg-white rounded-[24px] md:rounded-[48px] p-[24px] py-[48px] md:p-[64px] my-[8px] md:my-[32px]">
        <div className="flex flex-col items-start justify-start gap-[16px]">
          <h1 className="font-display font-medium text-[48px] md:text-[64px] leading-[1.1] tracking-[-2px] text-black">
            Terms of Service
          </h1>
          <p className="font-sans text-[18px] text-[#666] leading-[1.5]">
            Effective Date: October 16, 2025
          </p>
          <p className="font-sans text-[16px] text-[#666] leading-[1.6]">
            Welcome to Brainbits, a personal memory store app for iOS. These
            Terms of Service ("Terms") govern your access to and use of
            Brainbits ("Service"), including the iOS app and its features for
            capturing, syncing, and organizing notes. By using the Service, you
            agree to these Terms. If you do not agree, do not use the Service.
          </p>
        </div>

        <Divider />

        <ContentSection title="1. Eligibility">
          <p>
            You must be at least 13 years old (or the minimum age required in
            your country) to use the Service. By using it, you represent that
            you meet this requirement and are not barred from using the Service
            under applicable law.
          </p>
        </ContentSection>

        <Divider />

        <ContentSection title="2. Accounts and Security">
          <p>
            To use certain features, you may need to create an account. You are
            responsible for maintaining the confidentiality of your account
            credentials and for all activities under your account. Notify us
            immediately of any unauthorized use.
          </p>
        </ContentSection>

        <Divider />

        <ContentSection title="3. Use of the Service">
          <p>
            Brainbits allows you to capture short text or audio notes (referred
            to as "Bits"). Notes are stored locally on your device and can be
            synced to our servers for processing, including transcription of
            recordings and analysis to help organize your memories. You may use
            the Service for personal or commercial purposes.
          </p>
        </ContentSection>

        <Divider />

        <ContentSection title="4. User Content">
          <p>
            You retain ownership of your Bits and any generated memories. By
            submitting content, you grant us a worldwide, non-exclusive,
            royalty-free license to store, process, and transmit it as needed to
            provide the Service, such as for transcription, analysis, and
            responding to your queries. We do not claim ownership of your
            content, and it is never used for marketing, advertising, or any
            other purpose.
          </p>
        </ContentSection>

        <Divider />

        <ContentSection title="5. Prohibited Uses">
          <p>You agree not to:</p>
          <ul className="gap-[12px] flex flex-col list-disc list-inside pl-[8px]">
            <li>
              Use the Service for illegal purposes or in violation of laws.
            </li>
            <li>Interfere with the Service or its security.</li>
            <li>Upload harmful code, spam, or abusive content.</li>
            <li>
              Reverse-engineer or attempt to access non-public parts of the
              Service.
            </li>
          </ul>
          <p>We may suspend or terminate accounts for violations.</p>
        </ContentSection>

        <Divider />

        <ContentSection title="6. Third-Party Services">
          <p>
            We use third-party services to help provide our features, such as
            for transcriptions, AI processing, and cloud storage. These services
            may access your data only as necessary to perform their functions,
            but they are not permitted to use it for any other purpose. Your
            data is never sold to third parties, and we do not share it with
            advertisers or marketers.
          </p>
        </ContentSection>

        <Divider />

        <ContentSection title="7. Privacy">
          <p>
            Your privacy is important. Please review our Privacy Policy at{" "}
            <a
              className="text-black underline underline-offset-4 hover:text-neutral-600 transition-colors"
              href="https://usebrainbits.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              usebrainbits.com/privacy
            </a>{" "}
            for details on how we handle your data, including storage,
            processing, and analytics.
          </p>
        </ContentSection>

        <Divider />

        <ContentSection title="8. Termination">
          <p>
            You may stop using the Service anytime. We may terminate or suspend
            access for any reason, including violations, with or without notice.
          </p>
        </ContentSection>

        <Divider />

        <ContentSection title="9. Disclaimers and Limitation of Liability">
          <p>
            The Service is provided "as is" without warranties. We disclaim all
            warranties, express or implied. To the fullest extent permitted by
            law, we take no liability whatsoever for any direct, indirect,
            incidental, consequential, special, or exemplary damages, including
            but not limited to damages for loss of profits, goodwill, use, data,
            or other intangible losses, resulting from your use of the Service.
          </p>
        </ContentSection>

        <Divider />

        <ContentSection title="10. Changes to Terms">
          <p>
            We may update these Terms. Continued use after changes constitutes
            acceptance.
          </p>
        </ContentSection>

        <Divider />

        <ContentSection title="11. Governing Law">
          <p>
            These Terms are governed by the laws of Bangalore, India, without
            regard to conflict of laws principles. Any disputes will be resolved
            exclusively in the courts in Bangalore, India.
          </p>
        </ContentSection>

        <Divider />

        <ContentSection title="Contact Us">
          <p>
            Questions? Email{" "}
            <a
              className="text-black underline underline-offset-4 hover:text-neutral-600 transition-colors"
              href="mailto:support@usebrainbits.com"
            >
              support@usebrainbits.com
            </a>
            .
          </p>
          <p>Thank you for using Brainbits!</p>
        </ContentSection>
      </div>

      <Footer />
    </div>
  );
}

function Divider() {
  return <div className="w-full h-[1px] bg-[#eee]" />;
}

function ContentSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex flex-col gap-[16px] items-stretch justify-start">
      <h2 className="font-display font-medium text-[24px] md:text-[32px] leading-[1.2] tracking-[-1px] text-black">
        {title}
      </h2>
      <div className="font-sans text-[16px] md:text-[18px] text-[#666] leading-[1.6] flex flex-col gap-[16px]">
        {children}
      </div>
    </div>
  );
}
