"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={cn(center ? "text-center" : "", className)}
    >
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-600">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl font-bold text-gray-900 md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-500 md:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
