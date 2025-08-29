"use client";
import { useEffect } from "react";
import Hyperspeed from "./components/road";
import FuzzyText from "./components/fuzzy-text";
import CardNav from './components/card-nav'
import TextPressure from './components/pressure-text';
import TargetCursor from "./components/target-cursor";
import TiltedCard from './components/title-card';
import LogoLoop from './components/logo-loop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Home() {
  // Hide default cursor globally
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
  /* Cursor will be hidden by TargetCursor when needed */
  html { scroll-behavior: smooth; scroll-padding-top: 88px; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // (reverted) removed view counter side-effect

  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
  { label: "Overview", ariaLabel: "About section", href: "#about" },
  { label: "Contact", ariaLabel: "Go to contact", href: "#contact" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
  { label: "Featured", ariaLabel: "Featured Projects", href: "#projects" },
  { label: "Case Studies", ariaLabel: "Project Case Studies", href: "#projects" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
  { label: "Email", ariaLabel: "Email us", href: "#contact" },
  { label: "Twitter", ariaLabel: "Twitter", href: "#contact" },
  { label: "LinkedIn", ariaLabel: "LinkedIn", href: "#contact" }
      ]
    }
  ];

    const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  ];

  // Alternative with image sources
  const imageLogos = [
    { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
    { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
    { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
  ];


  // Brand name to show instead of logo
  const brandName = "Satyam Mhetre";


  return (
  <main style={{ position: "relative", minHeight: "100vh", width: "100%" }}>
  {/* (reverted) removed corner view counter */}
  <CardNav
  brandText={brandName}
        logoAlt="Company Logo"
        items={items}
  baseColor="#ffffff"
  menuColor="#000000"
  buttonBgColor="#111111"
  buttonTextColor="#ffffff"
        ease="power3.out"
    ctaHref="#about"
    ctaLabel="Get Started"
      />

      {/* Custom cursor */}
      <TargetCursor spinDuration={3} hideDefaultCursor={true} />

  {/* Hyperspeed background */}
  <Hyperspeed
          effectOptions={{
            distortion: "turbulentDistortion",
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xffffff,
              brokenLines: 0xffffff,
              leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
              rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
              sticks: 0x03b3c3,
            },
          }}
        />

  {/* Hero */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          padding: "1rem",
          color: "white",
          textAlign: "center",
          fontFamily: '"Oswald", "Anton", "Impact", sans-serif',
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
            backdropFilter: "blur(4px)",
            borderRadius: "24px",
            padding: "1.5rem",
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            border: "none",
            maxWidth: "min(92vw, 1000px)",
            margin: "0 auto",
          }}
        >
          {/* Heading with constrained size to prevent overflow */}
          <div style={{ maxWidth: "100%" }}>
            <FuzzyText
              fontSize={"clamp(1.25rem, 6vw, 4rem)"}
              fontWeight={800}
              baseIntensity={0.05}
              hoverIntensity={0.05}
              enableHover
            >
              lost on a never ending road.
            </FuzzyText>
          </div>

          {/* Subheading with same effect, smaller size, not italic */}
          <FuzzyText
            fontSize={"clamp(1rem, 4.5vw, 2rem)"}
            fontWeight={700}
            baseIntensity={0.08}
            hoverIntensity={0.06}
            enableHover
          >
            Welcome to my portfolio
          </FuzzyText>
      <TextPressure
        text="Welcome to my portfolio!"
        flex={false}
        alpha={false}
        stroke={false}
        width={true}
        weight={true}
        italic={true}
        textColor="#ffffff"
        strokeColor="#ff0000"
        minFontSize={36}
      />
    </div>

  {/* Close hero container */}
  </div>


      {/* About Section (scroll target) */}
      <section id="about" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            minHeight: "100vh",
            display: "grid",
            placeItems: "center",
            padding: "clamp(2rem, 4vw, 4rem) 1rem",
            color: "#eaeaea",
          }}
        >
          <div
            style={{
              width: "min(96vw, 1100px)",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
              backdropFilter: "blur(10px)",
              borderRadius: 24,
              padding: "clamp(1.5rem, 3vw, 2.5rem)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
              border: "1px solid rgba(255,255,255,0.12)",
              scrollMarginTop: 96,
            }}
            className="cursor-target"
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 24,
                alignItems: "center",
              }}
            >
              <div style={{ textAlign: "left" }}>
                <h2 style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)", margin: 0, letterSpacing: "0.3px" }}>About Me</h2>
                <p style={{ marginTop: 14, lineHeight: 1.8, color: "#d8d8d8", fontSize: "clamp(1rem, 1.4vw, 1.125rem)" }}>
                  I create interactive web experiences that blend animation, performance,
                  and crisp UI. I enjoy building immersive visuals and thoughtful
                  micro‑interactions that feel fast and alive.
                </p>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }}>
                  {["React", "Next.js", "Three.js", "GSAP", "UX"].map((pill) => (
                    <span key={pill} style={{ padding: "8px 12px", borderRadius: 9999, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", fontSize: 13, color: "#eaeaea" }}>{pill}</span>
                  ))}
                </div>
              </div>
              <div style={{ display: "grid", gap: 12 }}>
                {[{ n: "30+", l: "UI experiments" }, { n: "10+", l: "Projects delivered" }, { n: "3+", l: "Years learning" }].map((s, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "baseline", gap: 12, background: "rgba(0,0,0,0.35)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "14px 16px" }}>
                    <div style={{ fontSize: "clamp(1.4rem, 4vw, 2.2rem)", fontWeight: 700, color: "#fff" }}>{s.n}</div>
                    <div style={{ color: "#cfcfcf", fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)" }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <TiltedCard
        imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
        altText="Kendrick Lamar - GNX Album Cover"
        captionText="Kendrick Lamar - GNX"
        containerHeight="300px"
        containerWidth="300px"
        imageHeight="300px"
        imageWidth="300px"
        rotateAmplitude={12}
        scaleOnHover={1.2}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
        overlayContent={
          <p className="tilted-card-demo-text">
            Kendrick Lamar - GNX
          </p>
        }
      />
      </section>

      {/* Footer */}
      <footer id="footer" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            padding: "2rem 1rem 3rem 1rem",
            color: "#eaeaea",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="cursor-target"
            style={{
              width: "min(96vw, 780px)",
              textAlign: "center",
              background: "rgba(0,0,0,0.35)",
              backdropFilter: "blur(4px)",
              borderRadius: 16,
              padding: 24,
              boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "center" }}>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <FaGithub aria-hidden="true" /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <FaLinkedin aria-hidden="true" /> LinkedIn
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <FaTwitter aria-hidden="true" /> Twitter
                </a>
                <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <FaInstagram aria-hidden="true" /> Instagram
                </a>
              </div>
              <p style={{ margin: 0, color: "#cfcfcf" }}>
                Special thanks to {" "}
                <a href="https://reactbits.dev" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none" }}>React Bits</a>
                {" "}for inspiration that helped make this site possible.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Projects Section */}
      <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
      <section id="projects" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            minHeight: "100vh",
            display: "grid",
            placeItems: "center",
            padding: "clamp(2rem, 4vw, 4rem) 1rem",
            color: "#eaeaea",
          }}
        >
          <div style={{ width: "min(96vw, 1150px)", marginBottom: 16 }}>
            <h2 style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)", margin: 0 }}>Projects</h2>
            <p style={{ marginTop: 10, color: "#cfcfcf", maxWidth: 820 }}>
              A selection of interactive builds and visuals. Replace these tiles with your real work.
            </p>
          </div>
          <div
            style={{
              width: "min(96vw, 1150px)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {[1, 2, 3, 4, 5, 6].map((i) => {
              const accents = ["#03b3c3", "#d856bf", "#6750a2", "#0e5ea5", "#c247ac", "#324555"];
              const accent = accents[(i - 1) % accents.length];
              return (
                <div
                  key={i}
                  style={{
                    position: "relative",
                    background: `linear-gradient(140deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))`,
                    border: `1px solid rgba(255,255,255,0.12)`,
                    borderRadius: 18,
                    padding: 18,
                    boxShadow: "0 14px 40px rgba(0,0,0,0.45)",
                    minHeight: 220,
                    overflow: "hidden",
                  }}
                  className="cursor-target"
                >
                  <div style={{ position: "absolute", inset: 0, background: `radial-gradient(600px 160px at 0% 0%, ${accent}22, transparent)` }} />
                  <h3 style={{ margin: 0, fontSize: "clamp(1.1rem, 2vw, 1.5rem)", color: "#fff", position: "relative" }}>Project {i}</h3>
                  <p style={{ marginTop: 8, color: "#c9c9c9", position: "relative" }}>
                    A short description goes here. Replace with your actual project.
                  </p>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10, position: "relative" }}>
                    {["React", "WebGL", "Animation"].map((t) => (
                      <span key={t} style={{ fontSize: 12, padding: "6px 10px", borderRadius: 9999, background: "rgba(0,0,0,0.35)", border: "1px solid rgba(255,255,255,0.12)" }}>{t}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            minHeight: "60vh",
            padding: "3rem 1rem",
            color: "#eaeaea",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "min(96vw, 780px)",
              textAlign: "center",
              background: "rgba(0,0,0,0.35)",
              backdropFilter: "blur(4px)",
              borderRadius: 16,
              padding: 24,
              boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
            }}
            className="cursor-target"
          >
            <h2 style={{ margin: 0, fontSize: "clamp(1.25rem, 4vw, 2rem)" }}>Contact</h2>
            <p style={{ marginTop: 12, color: "#cfcfcf" }}>
              Want to collaborate or say hi? Drop a line at
              <span style={{ color: "#fff" }}> your@email.com</span>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
