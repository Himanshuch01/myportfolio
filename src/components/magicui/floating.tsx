"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
}

export function Floating({ children, duration = 3, delay = 0, className = "" }: FloatingProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
