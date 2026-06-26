"use client";

import CTA from "@/components/CTA";
import Navbar from "@/components/Navbar";
import { EASE, fadeUp, staggerContainer } from "@/lib/motion";
import Image from "next/image";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative isolate flex h-[1139px] w-full max-w-full flex-col items-center bg-white md:h-[1400px] lg:h-[1450px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[url('/images/decals/Background%20Tile.jpg')] bg-repeat opacity-20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 58%)",
        }}
      />

      <div className="relative z-10 flex w-full max-w-full shrink-0 flex-col items-center md:gap-16">
        <div className="hidden w-full md:block">
          <Navbar />
        </div>

        <motion.div
          variants={staggerContainer(0.18)}
          initial="hidden"
          animate="show"
          className="flex w-full max-w-full flex-col items-center gap-6 px-4 pt-[90px] md:gap-6 md:px-8 md:pt-0 lg:max-w-[752px] lg:px-0"
        >
          <motion.div variants={fadeUp} className="md:hidden">
            <Image
              src="/images/icons/brainbits.png"
              alt="Brainbits"
              width={35}
              height={32}
              className="h-8 w-[35px] shrink-0"
              priority
            />
          </motion.div>

          <div className="flex flex-col gap-4 text-center">
            <h1 className="text-black">
              <motion.span variants={fadeUp} className="block">
                The Notes App for
              </motion.span>
              <motion.span variants={fadeUp} className="block">
                your Biggest Ideas.
              </motion.span>
            </h1>
            <motion.div
              variants={fadeUp}
              className="text-body-lg text-black"
            >
              <p className="md:hidden">
                Brainbits is a notes app for your biggest ideas and smallest
                details. Designed to keep you moving, not organizing.
              </p>
              <p className="hidden md:block">
                Brainbits is a notes app for your biggest ideas and smallest
                details.
              </p>
              <p className="hidden md:block">
                Designed to keep you moving, not organizing.
              </p>
            </motion.div>
          </div>

          <motion.div variants={fadeUp}>
            <CTA />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.15, ease: EASE, delay: 0.7 }}
        className="relative z-10 mt-auto min-h-px w-full max-w-full flex-1 lg:aspect-[1910/2018] lg:max-w-[970px] lg:flex-none"
      >
        <Image
          src="/images/Hero Product Screenshot.webp"
          alt="Brainbits app on iPhone surrounded by floral illustrations"
          fill
          className="object-cover"
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 834px, 970px"
          priority
        />
      </motion.div>
    </section>
  );
}
