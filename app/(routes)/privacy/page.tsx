"use client";

import Footer from "@/app/components/landing/Footer";
import Navbar from "@/app/components/landing/Navbar";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

export default function PrivacyPage() {
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isMd = useMediaQuery({ query: "(min-width: 768px)" });

  return (
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
          <h1 className="text-h1">Privacy</h1>
          <p className="text-body">
            Your personal memory store is exactly that - <i>yours</i>. None of
            your data is accessed without your explicit action.
          </p>
          <p className="text-body text-label-secondary">
            Last updated on 16 October 2025.
          </p>
        </div>

        <Divider />

        <ContentSection title="Your Data & How It's Used">
          <p>
            In order to ensure the core functionality of Brainbits works
            as-expected, any notes and recordings made are uploaded to, and
            processed by, our servers.
          </p>
          <p>
            Recordings are automatically transcribed, and any text content in a
            stored note (referred to as "Bit" from now), including
            transcriptions, is used to:
          </p>
          <ul className="gap-3 flex flex-col list-decimal list-inside">
            <li>
              Perform sentiment analysis on the content for categorization
              purposes;
            </li>
            <li>
              Generate memories for the AI agent to reference for future
              answers; and
            </li>
            <li>
              Create any other entities, such as reminders or tasks, based on
              your Bit's content.
            </li>
          </ul>
          <p>
            Generated memories based on your Bits are only used to provide
            context to the AI agent when answering your questions. They are
            never used for marketing, advertising, or any other purpose.
          </p>
        </ContentSection>

        <Divider />

        <ContentSection title="Third-Party Services">
          <p>
            We use third-party services to help us provide our services, such as
            transcriptions, AI processing, and cloud storage. These services may
            have access to your data as necessary to perform their functions,
            but they are not permitted to use it for any other purpose.
          </p>
          <p>
            Your data is never sold to third parties, and we do not share it
            with advertisers or marketers.
          </p>
        </ContentSection>

        <Divider />

        <ContentSection title="Analytics">
          <p>
            We collect basic event-based analytics to help us improve our
            services. This includes information about how you use the app, such
            as the features you access. This data is only used for internal
            purposes and is not shared with third parties or for marketing.
          </p>
        </ContentSection>

        <Divider />

        <ContentSection title="Open Book Policy">
          <p>
            Trust is intrinsically tied to transparency. If you have any
            questions, we'd be happy to answer them.
          </p>
          <p>
            Please reach out to us via{" "}
            <a
              className="text-body text-blue-500"
              href="mailto:privacy@usebrainbits.com"
            >
              privacy@usebrainbits.com
            </a>{" "}
            and we'll get back to you as soon as possible.
          </p>
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
