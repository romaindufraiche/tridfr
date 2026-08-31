import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";

import { euro } from "@/lib/tri";

/** Compteur animé pour les montants (€). */
export function Counter({ value, className }: { value: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);
  const from = useRef(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(from.current, value, {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    from.current = value;
    return () => controls.stop();
  }, [value, inView]);

  return (
    <span ref={ref} className={className}>
      {euro(display)}
    </span>
  );
}
