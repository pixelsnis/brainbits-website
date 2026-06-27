"use client";

import TrackSectionView from "@/components/analytics/TrackSectionView";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fadeUp } from "@/lib/motion";
import { motion } from "motion/react";

const FAQ_ITEMS = [
  {
    question: "Placeholder question one?",
    answer: "Placeholder answer for the first question.",
  },
  {
    question: "Placeholder question two?",
    answer: "Placeholder answer for the second question.",
  },
  {
    question: "Placeholder question three?",
    answer: "Placeholder answer for the third question.",
  },
] as const;

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative flex w-full max-w-full justify-center px-0 pt-8 pb-8 md:px-8"
    >
      <TrackSectionView name="faq" />
      <motion.div
        className="flex w-full max-w-[840px] flex-col gap-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <h2 className="text-h2-cta text-left text-black">FAQ</h2>
        <Accordion>
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="py-1">
              <AccordionTrigger className="py-3">{item.question}</AccordionTrigger>
              <AccordionContent className="text-body pb-3 text-black/70">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}
