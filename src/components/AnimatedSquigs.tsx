"use client";

import { motion } from "framer-motion";

export function AnimatedSquig1({ className }: { className?: string }) {
  return (
    <svg
      width="77"
      height="8"
      viewBox="0 0 77 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <motion.path
        d="M71.8163 6.5C87.9698 0.20912 48.5361 0.508529 1.5 3.80379"
        stroke="#FF8D28"
        style={{
          stroke: "#FF8D28",
          // @ts-ignore
          stroke: "color(display-p3 1.0000 0.5529 0.1569)",
        }}
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      />
    </svg>
  );
}

export function AnimatedSquig2({ className }: { className?: string }) {
  return (
    <svg
      width="45"
      height="7"
      viewBox="0 0 45 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <motion.path
        d="M1 1C24 4.00022 58.1 -2.08276 36.5 5.91724"
        stroke="#FF8D28"
        style={{
          stroke: "#FF8D28",
          // @ts-ignore
          stroke: "color(display-p3 1.0000 0.5529 0.1569)",
        }}
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.8 }}
      />
    </svg>
  );
}
