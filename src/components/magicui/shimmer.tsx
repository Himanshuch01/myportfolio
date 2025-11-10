"use client";

import { motion } from "framer-motion";

interface ShimmerProps {
  className?: string;
}

export function Shimmer({ className = "" }: ShimmerProps) {
  return (
    <motion.div
      className={`absolute inset-0 -z-10 ${className}`}
      style={{
        background:
          "linear-gradient(110deg, transparent 40%, rgba(255, 255, 255, 0.1) 50%, transparent 60%)",
        backgroundSize: "200% 100%",
      }}
      animate={{
        backgroundPosition: ["200% 0", "-200% 0"],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}
