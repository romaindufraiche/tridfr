import { useEffect, useRef, useState } from "react";

type Point = { x: number; y: number };

/** Traînée très discrète qui suit la souris (desktop, désactivée si prefers-reduced-motion). */
export function CursorGlow() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const trail: Point[] = [];
    const target: Point = { x: -100, y: -100 };
    let current: Point | null = null;

    const move = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };
    window.addEventListener("mousemove", move, { passive: true });

    let raf = 0;
    const draw = () => {
      if (!current) current = { x: target.x, y: target.y };
      current = {
        x: current.x + (target.x - current.x) * 0.22,
        y: current.y + (target.y - current.y) * 0.22,
      };
      trail.push({ ...current });
      if (trail.length > 16) trail.shift();

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (let i = 1; i < trail.length; i++) {
        const a = trail[i - 1];
        const b = trail[i];
        if (!a || !b) continue;
        const t = i / trail.length;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(22, 143, 82, ${0.1 * t})`;
        ctx.lineWidth = 5 * t;
        ctx.lineCap = "round";
        ctx.stroke();
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", move);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-50 hidden lg:block"
    />
  );
}
