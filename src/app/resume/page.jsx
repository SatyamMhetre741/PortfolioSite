"use client";
import Image from "next/image";
import { useState } from "react";

export default function ResumePage() {
  const [failed, setFailed] = useState(false);

  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#000", color: "#fff", padding: "2rem 1rem" }}>
      <div style={{ width: "min(96vw, 1200px)", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 16, boxShadow: "0 12px 40px rgba(0,0,0,0.5)", overflow: "hidden" }}>
        <header style={{ padding: "14px 18px", borderBottom: "1px solid rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <h1 style={{ margin: 0, fontSize: "clamp(1.25rem, 3vw, 1.75rem)", letterSpacing: 0.3 }}>Resume</h1>
          <a href="/" style={{ color: "#fff", textDecoration: "none", opacity: 0.9 }}>Back to Home</a>
        </header>
        <div style={{ padding: 16, background: "#111" }}>
          {!failed ? (
            <div style={{ position: "relative", width: "100%", height: "min(1200px, 78vh)", display: "grid", placeItems: "center" }}>
              <Image
                src="/resume.png"
                alt="Resume"
               x1 fill
                sizes="100vw"
                style={{ objectFit: "contain" }}
                onError={() => setFailed(true)}
                priority
              />
            </div>
          ) : (
            <div style={{ padding: "3rem 1rem", textAlign: "center", color: "#eaeaea" }}>
              <p style={{ marginBottom: 10 }}>Add your resume image to <code style={{ background: "rgba(255,255,255,0.08)", padding: "2px 6px", borderRadius: 6 }}>/public/resume.jpg</code>.</p>
              <p style={{ opacity: 0.8 }}>PNG is also supported if you name it <code>resume.png</code> and update the src.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );    
}
