"use client";

import {
  FeatureCard,
  FeatureCardBody,
  FeatureCardDescription,
  FeatureCardThumbnail,
  FeatureCardTitle,
} from "@/components/home/FeatureCard";
import { EASE, fadeUp } from "@/lib/motion";
import { motion } from "motion/react";

const viewport = { once: true, margin: "-80px" } as const;

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="flex w-full max-w-full justify-center px-0 md:px-8"
    >
      <div className="flex w-full max-w-[840px] flex-col gap-16 md:gap-4">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <FeatureCard layout="hl">
            <FeatureCardThumbnail
              src="/images/cards/Capture%20Note.webp"
              alt="Brainbits quick capture note screen"
            />
            <FeatureCardBody>
              <FeatureCardTitle>
                Capture thoughts
                <br />
                before they&apos;re gone.
              </FeatureCardTitle>
              <FeatureCardDescription>
                Speak it, type it, dump it — Brainbits saves instantly. No lag,
                no spinner between you and the thought. Note now, think later.
              </FeatureCardDescription>
            </FeatureCardBody>
          </FeatureCard>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <FeatureCard layout="hr">
            <FeatureCardThumbnail
              src="/images/cards/New%20Page.webp"
              alt="Brainbits topic page with organized notes"
            />
            <FeatureCardBody>
              <FeatureCardTitle>
                Read your notes,
                <br />
                without reading your notes.
              </FeatureCardTitle>
              <FeatureCardDescription>
                Name a topic, and Brainbits keeps a running doc of everything
                you&apos;ve captured about it. Come back later — it&apos;s
                already organized.
              </FeatureCardDescription>
            </FeatureCardBody>
          </FeatureCard>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <FeatureCard layout="hl">
            <FeatureCardThumbnail
              src="/images/cards/Chat.webp"
              alt="Brainbits chat answering a question from your notes"
            />
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
        </motion.div>
      </div>
    </section>
  );
}
