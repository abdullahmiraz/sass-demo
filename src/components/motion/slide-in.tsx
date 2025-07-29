import { motion } from "motion/react";
import { ReactNode } from "react";

interface SlideInProps {
  children: ReactNode;
  direction?: "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
}

export function SlideIn({
  children,
  direction = "left",
  delay = 0,
  duration = 0.6,
  className,
}: SlideInProps) {
  const xOffset = direction === "left" ? -50 : 50;

  return (
    <motion.div
      initial={{ opacity: 0, x: xOffset }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
