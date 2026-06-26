"use client";

import {
  ProductHighlight,
  ProductHighlightBody,
  ProductHighlightDescription,
  ProductHighlightDivider,
  ProductHighlightIcon,
  ProductHighlightTitle,
} from "@/components/ProductHighlight";
import { EASE, fadeUp, staggerContainer } from "@/lib/motion";
import { motion } from "motion/react";

export default function ProductHighlightsSection() {
  return (
    <section className="w-full max-w-full">
      <div
        data-lenis-prevent-horizontal
        className={[
          "overflow-x-auto",
          "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          "lg:overflow-visible",
        ].join(" ")}
      >
        <motion.div
          variants={staggerContainer(0.18)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className={[
            "flex w-max items-start gap-8 px-8",
            "lg:mx-auto lg:w-full lg:max-w-[1100px] lg:justify-center",
          ].join(" ")}
        >
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <ProductHighlight>
              <ProductHighlightIcon
                src="/images/icons/speedometer.svg"
                alt=""
              />
              <ProductHighlightBody>
                <ProductHighlightTitle>
                  Local-First &amp; Blazing Fast
                </ProductHighlightTitle>
                <ProductHighlightDescription>
                  No more spinners. Brainbits saves locally first, then syncs
                  and processes notes entirely in the background.
                </ProductHighlightDescription>
              </ProductHighlightBody>
            </ProductHighlight>
          </motion.div>

          <motion.div variants={fadeUp} className="self-stretch">
            <ProductHighlightDivider />
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <ProductHighlight>
              <ProductHighlightIcon src="/images/icons/sparkle.svg" alt="" />
              <ProductHighlightBody>
                <ProductHighlightTitle>
                  AI That Stays Out of Your Way
                </ProductHighlightTitle>
                <ProductHighlightDescription>
                  Every AI feature is built to work in the background. By the
                  time you need something, it&apos;s already been taken care of.
                </ProductHighlightDescription>
              </ProductHighlightBody>
            </ProductHighlight>
          </motion.div>

          <motion.div variants={fadeUp} className="self-stretch">
            <ProductHighlightDivider />
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <ProductHighlight>
              <ProductHighlightIcon src="/images/icons/swift.svg" alt="" />
              <ProductHighlightBody>
                <ProductHighlightTitle>
                  Native &amp; Lightweight
                </ProductHighlightTitle>
                <ProductHighlightDescription>
                  Under 25 MB. Zero bloat. It feels like it belongs on your
                  phone because it was built just for it.
                </ProductHighlightDescription>
              </ProductHighlightBody>
            </ProductHighlight>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
