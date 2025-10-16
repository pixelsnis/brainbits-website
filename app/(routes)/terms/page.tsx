"use client";

import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import MobileFooter from "@/components/misc/MobileFooter";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

export default function TermsPage() {
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isMd = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <div className="w-full flex flex-col gap-0">
      <div className="w-full flex flex-col gap-6 md:gap-0 items-stretch justify-start p-4 md:p-0">
        {isMd && <Navbar />}

        {!isMd && (
          <div className="w-full flex flex-col items-center justify-center gap-6">
            <img src="/logo.svg" className="w-7 h-7" />
            <Divider />
          </div>
        )}

        <div className="w-full px-1 md:px-0 md:max-w-[36rem] self-center flex flex-col items-stretch justify-start gap-6">
          <div className="flex flex-col items-start justify-start gap-3">
            <h1 className="text-h1">Terms of Service</h1>
            <p className="text-body">Effective Date: October 16, 2025</p>
            <p className="text-body">
              Welcome to Brainbits, a personal memory store app for iOS. These
              Terms of Service ("Terms") govern your access to and use of
              Brainbits ("Service"), including the iOS app and its features for
              capturing, syncing, and organizing notes. By using the Service,
              you agree to these Terms. If you do not agree, do not use the
              Service.
            </p>
          </div>

          <Divider />

          <ContentSection title="1. Eligibility">
            <p>
              You must be at least 13 years old (or the minimum age required in
              your country) to use the Service. By using it, you represent that
              you meet this requirement and are not barred from using the
              Service under applicable law.
            </p>
          </ContentSection>

          <Divider />

          <ContentSection title="2. Accounts and Security">
            <p>
              To use certain features, you may need to create an account. You
              are responsible for maintaining the confidentiality of your
              account credentials and for all activities under your account.
              Notify us immediately of any unauthorized use.
            </p>
          </ContentSection>

          <Divider />

          <ContentSection title="3. Use of the Service">
            <p>
              Brainbits allows you to capture short text or audio notes
              (referred to as "Bits"). Notes are stored locally on your device
              and can be synced to our servers for processing, including
              transcription of recordings and analysis to help organize your
              memories. You may use the Service for personal, non-commercial
              purposes only.
            </p>
          </ContentSection>

          <Divider />

          <ContentSection title="4. User Content">
            <p>
              You retain ownership of your Bits and any generated memories. By
              submitting content, you grant us a worldwide, non-exclusive,
              royalty-free license to store, process, and transmit it as needed
              to provide the Service, such as for transcription, analysis, and
              responding to your queries. We do not claim ownership of your
              content, and it is never used for marketing, advertising, or any
              other purpose.
            </p>
          </ContentSection>

          <Divider />

          <ContentSection title="5. Prohibited Uses">
            <p>You agree not to:</p>
            <ul className="gap-3 flex flex-col list-disc list-inside">
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
              for transcriptions, AI processing, and cloud storage. These
              services may access your data only as necessary to perform their
              functions, but they are not permitted to use it for any other
              purpose. Your data is never sold to third parties, and we do not
              share it with advertisers or marketers.
            </p>
          </ContentSection>

          <Divider />

          <ContentSection title="7. Privacy">
            <p>
              Your privacy is important. Please review our Privacy Policy at{" "}
              <a
                className="text-body text-blue-500"
                href="https://brainbits.app/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                brainbits.app/privacy
              </a>{" "}
              for details on how we handle your data, including storage,
              processing, and analytics.
            </p>
          </ContentSection>

          <Divider />

          <ContentSection title="8. Termination">
            <p>
              You may stop using the Service anytime. We may terminate or
              suspend access for any reason, including violations, with or
              without notice.
            </p>
          </ContentSection>

          <Divider />

          <ContentSection title="9. Disclaimers and Limitation of Liability">
            <p>
              The Service is provided "as is" without warranties. We disclaim
              all warranties, express or implied. To the fullest extent
              permitted by law, we are not liable for indirect, incidental, or
              consequential damages. Our total liability shall not exceed $100.
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
              regard to conflict of laws principles. Any disputes will be
              resolved exclusively in the courts in Bangalore, India.
            </p>
          </ContentSection>

          <Divider />

          <ContentSection title="Contact Us">
            <p>
              Questions? Email{" "}
              <a
                className="text-body text-blue-500"
                href="mailto:support@brainbits.app"
              >
                support@brainbits.app
              </a>
              .
            </p>
            <p>Thank you for using Brainbits!</p>
          </ContentSection>

          <div className="h-16" />
        </div>

        {!isPortrait && (
          <div className="w-full h-[360px] relative">
            <div className="w-full h-full absolute left-0 top-0 z-0">
              <Image
                src="/images/footer-bg.webp"
                alt="Background"
                height={0}
                width={0}
                sizes="100vw"
                className="w-full h-full object-cover object-bottom"
              />
            </div>

            <div className="w-full h-full bg-gradient-to-b from-white to-transparent absolute left-0 top-0 z-1" />

            <div className="w-full flex p-4 z-2 absolute left-0 bottom-0 items-center justify-center">
              <Footer />
            </div>
          </div>
        )}
      </div>

      {isPortrait && <MobileFooter />}
    </div>
  );
}

function Divider() {
  return <div className="w-full h-[1px] bg-gray-300" />;
}

function ContentSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex flex-col gap-3 items-stretch justify-start">
      <h2 className="text-h2">{title}</h2>
      <div className="text-body flex flex-col gap-3">{children}</div>
    </div>
  );
}
