"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  percent: number;
  className?: string;
  showLabel?: boolean;
  height?: "sm" | "md" | "lg";
  color?: string;
}

const heightClasses = {
  sm: "h-1.5",
  md: "h-2.5",
  lg: "h-3.5",
};

function getColor(percent: number, custom?: string): string {
  if (custom) return custom;
  if (percent >= 85) return "bg-red-500";
  if (percent >= 50) return "bg-amber-500";
  return "bg-emerald-500";
}

export function ProgressBar({
  percent,
  className,
  showLabel = true,
  height = "md",
  color,
}: ProgressBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const barColor = getColor(percent, color);

  return (
    <div className={cn("w-full", className)} ref={ref}>
      <div
        className={cn("relative w-full overflow-hidden rounded-full bg-gray-100", heightClasses[height])}
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <motion.div
          className={cn("h-full rounded-full", barColor)}
          initial={{ width: 0 }}
          animate={inView ? { width: `${percent}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        />
      </div>
      {showLabel && (
        <p className="mt-1 text-right text-xs font-semibold text-gray-500">
          {percent}% funded
        </p>
      )}
    </div>
  );
}
