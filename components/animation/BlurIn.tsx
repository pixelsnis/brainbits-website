import { motion } from "motion/react";

export function BlurIn({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ filter: "blur(8px)", opacity: 0, y: 20 }}
      animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
