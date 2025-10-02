"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  duration?: number;
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  duration = 0.7,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  const directions = {
    up: { y: shouldReduceMotion ? 0 : 50 },
    down: { y: shouldReduceMotion ? 0 : -50 },
    left: { x: shouldReduceMotion ? 0 : 50 },
    right: { x: shouldReduceMotion ? 0 : -50 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: shouldReduceMotion ? 1 : 0,
        ...directions[direction],
      }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
