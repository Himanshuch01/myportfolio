"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
}

export function GradientText({ children, className = "", animate = true }: GradientTextProps) {
  return (
    <motion.span
      className={`bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent ${className}`}
      animate={
        animate
          ? {
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }
          : undefined
      }
      transition={
        animate
          ? {
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }
          : undefined
      }
      style={{
        backgroundSize: "200% 200%",
      }}
    >
      {children}
    </motion.span>
  );
}
