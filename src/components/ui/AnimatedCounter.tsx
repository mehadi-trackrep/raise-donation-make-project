"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";

interface AnimatedCounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  end,
  prefix = "",
  suffix = "",
  duration = 2000,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const { count, start } = useCountUp(end, duration);
  const startedRef = useRef(false);

  useEffect(() => {
    if (inView && !startedRef.current) {
      startedRef.current = true;
      start();
    }
  }, [inView, start]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toLocaleString("en-GB")}
      {suffix}
    </span>
  );
}
