"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function MotionSection({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  onDark = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  onDark?: boolean;
}) {
  return (
    <div className="mx-auto mb-8 max-w-2xl px-1 text-center sm:mb-12">
      {eyebrow && (
        <p
          className={
            onDark
              ? "mb-2 text-xs font-semibold uppercase tracking-wider text-accent sm:text-sm"
              : "mb-2 text-xs font-semibold uppercase tracking-wider text-primary sm:text-sm"
          }
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={
          onDark
            ? "text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl"
            : "text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl"
        }
      >
        {title}
      </h2>
      {description && (
        <p
          className={
            onDark
              ? "mt-3 text-sm text-primary-foreground/85 sm:mt-4 sm:text-base"
              : "mt-3 text-sm text-muted-foreground sm:mt-4 sm:text-base"
          }
        >
          {description}
        </p>
      )}
    </div>
  );
}
