"use client";

import { motion } from "framer-motion";

interface BorderBeamProps {
  className?: string;
  duration?: number;
  delay?: number;
}

export function BorderBeam({ className = "", duration = 3, delay = 0 }: BorderBeamProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden rounded-lg ${className}`}>
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.8), transparent)",
        }}
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          delay,
        }}
      />
    </div>
  );
}
