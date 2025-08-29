"use client";
import { useEffect, useState } from "react";
import CountUp from "./counter";

export default function ViewBadge({ start = 47 }) {
  const [count, setCount] = useState(start);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let aborted = false;
    // Get current count, then increment once per visit
    fetch("/api/view", { cache: "no-store" })
      .then((r) => r.json())
      .then((data) => {
        if (aborted) return;
        const serverCount = Number.isFinite(data?.count) ? data.count : start;
        setCount(serverCount);
        setReady(true);
        // increment in background
        return fetch("/api/view", { method: "POST" }).then((r) => r.json());
      })
      .then((data) => {
        if (aborted || !data) return;
        const next = Number.isFinite(data?.count) ? data.count : undefined;
        if (typeof next === "number") setCount(next);
      })
      .catch(() => setReady(true));

    return () => {
      aborted = true;
    };
  }, [start]);

  return (
    <div
      aria-label="Site views"
      title="Site views"
      style={{
        position: "fixed",
        right: 12,
        bottom: 12,
        zIndex: 10,
        background: "rgba(0,0,0,0.7)",
        color: "#fff",
        border: "1px solid rgba(255,255,255,0.2)",
        borderRadius: 9999,
        padding: "8px 12px",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        backdropFilter: "blur(4px)",
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
      }}
    >
      <span style={{ opacity: 0.85, fontSize: 12 }}>Views</span>
      <CountUp to={count} from={start} duration={1} startWhen={ready} className="view-badge-count" />
    </div>
  );
}
