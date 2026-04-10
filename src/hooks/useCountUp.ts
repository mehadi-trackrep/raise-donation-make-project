"use client";

import { useEffect, useRef, useState } from "react";

export function useCountUp(
  end: number,
  duration = 2000,
  startOnMount = false
) {
  const [count, setCount] = useState(startOnMount ? 0 : end);
  const [hasStarted, setHasStarted] = useState(startOnMount);
  const rafRef = useRef<number | null>(null);

  const start = () => setHasStarted(true);

  useEffect(() => {
    if (!hasStarted) return;

    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [hasStarted, end, duration]);

  return { count, start };
}
