"use client";
import { useEffect, useRef } from "react";

// A subtle vertical progress bar with a glow on the right edge of the screen
export default function ScrollGlow({ color = "#8b5cf6" }) {
  const barRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrollTop = h.scrollTop || document.body.scrollTop;
      const scrollHeight = h.scrollHeight - h.clientHeight;
      const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      if (barRef.current) {
        barRef.current.style.transform = `scaleY(${Math.max(0.002, progress)})`;
        barRef.current.style.opacity = progress > 0.01 ? 1 : 0.6;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        top: 0,
        right: 8,
        height: "100vh",
        width: 6,
        zIndex: 9999,
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 4,
          height: "100%",
          transformOrigin: "top",
          borderRadius: 999,
          background:
            `linear-gradient(180deg, ${color} 0%, ${color} 40%, rgba(0,0,0,0) 100%)`,
          boxShadow: `0 0 18px ${color}, 0 0 42px ${color}33`,
          transition: "opacity 120ms ease, transform 60ms linear",
        }}
        ref={barRef}
      />
    </div>
  );
}
