import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function PrivacyPage() {
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
            Privacy
          </h1>
          <p className="font-sans text-[18px] text-[#666] leading-[1.5]">
            Your personal memory store is exactly that - <i>yours</i>. None of
            your data is accessed without your explicit action.
          </p>
          <p className="font-sans text-[14px] text-[#aaa]">
            Last updated on 26 January 2026.
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
            stored note, including transcriptions, is used to:
          </p>
          <ul className="gap-[12px] flex flex-col list-decimal list-inside pl-[8px]">
            <li>
              Summarize the content for better organization and retrieval;
            </li>
            <li>
              Generate memories for the AI agent to reference for future
              answers; and
            </li>
            <li>
              Create any other entities, such as reminders, tasks, or Super
              Pages, based on your note's content.
            </li>
          </ul>
          <p>
            Generated memories based on your notes are only used to provide
            context to the AI agent when answering your questions. They are
            never used for marketing, advertising, or any other purpose.
          </p>
        </ContentSection>

        <Divider />

        <ContentSection title="Super Pages">
          <p>
            Super Pages are user-defined pages that update based on your notes.
            Your data is used for this purely for the purpose of generating new
            notes and is processed by the server.
          </p>
          <p>
            Super Pages are not analyzed outside of the scope of creating and
            updating their content. They are not used for any marketing
            purposes, and the content of a Super Page is never disclosed to
            anyone.
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
              className="text-black underline underline-offset-4 hover:text-neutral-600 transition-colors"
              href="mailto:privacy@usebrainbits.com"
            >
              privacy@usebrainbits.com
            </a>{" "}
            and we'll get back to you as soon as possible.
          </p>
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
