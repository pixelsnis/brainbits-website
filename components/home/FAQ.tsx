"use client";

import TrackSectionView from "@/components/analytics/TrackSectionView";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS, FAQ_LAST_UPDATED } from "@/lib/content/faq";
import { fadeUp } from "@/lib/motion";
import { motion } from "motion/react";

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative flex w-full max-w-full justify-center px-4 pt-8 pb-8 md:px-8"
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
        <p className="text-body text-black/50">Last updated {FAQ_LAST_UPDATED}</p>
      </motion.div>
    </section>
  );
}
