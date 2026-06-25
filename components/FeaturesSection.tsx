import {
  FeatureCard,
  FeatureCardBody,
  FeatureCardDescription,
  FeatureCardThumbnail,
  FeatureCardTitle,
} from "@/components/FeatureCard";

export default function FeaturesSection() {
  return (
    <section className="flex w-full justify-center md:px-8">
      <div className="flex w-full max-w-[840px] flex-col gap-16 md:gap-4">
        <FeatureCard layout="hl">
          <FeatureCardThumbnail src="" />
          <FeatureCardBody>
            <FeatureCardTitle>
              Capture thoughts
              <br />
              before they&apos;re gone.
            </FeatureCardTitle>
            <FeatureCardDescription>
              Speak it, type it, dump it — Brainbits saves instantly. No lag, no
              spinner between you and the thought. Note now, think later.
            </FeatureCardDescription>
          </FeatureCardBody>
        </FeatureCard>

        <FeatureCard layout="hr">
          <FeatureCardThumbnail src="" />
          <FeatureCardBody>
            <FeatureCardTitle>
              Read your notes,
              <br />
              without reading your notes.
            </FeatureCardTitle>
            <FeatureCardDescription>
              Name a topic, and Brainbits keeps a running doc of everything
              you&apos;ve captured about it. Come back later — it&apos;s already
              organized.
            </FeatureCardDescription>
          </FeatureCardBody>
        </FeatureCard>

        <FeatureCard layout="hl">
          <FeatureCardThumbnail src="" />
          <FeatureCardBody>
            <FeatureCardTitle>
              Get instant answers
              <br />
              from everything you&apos;ve captured.
            </FeatureCardTitle>
            <FeatureCardDescription>
              No searching, no scrolling. Just ask a question and get a direct
              answer drawn from your own notes — whenever you need it.
            </FeatureCardDescription>
          </FeatureCardBody>
        </FeatureCard>
      </div>
    </section>
  );
}
