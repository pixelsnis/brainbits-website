import { motion } from "motion/react";

export function BlurIn({
  children,
  className,
  delay = 0,
  whileInView = true,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  whileInView?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ filter: "blur(8px)", opacity: 0, y: 20 }}
      {...(whileInView
        ? {
            whileInView: { filter: "blur(0px)", opacity: 1, y: 0 },
            viewport: { once: true },
          }
        : {
            animate: { filter: "blur(0px)", opacity: 1, y: 0 },
          })}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
