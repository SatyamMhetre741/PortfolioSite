"use client";
import { useEffect, useRef, useState } from "react";
import Hyperspeed from "./components/road";
// import FuzzyText from "./components/fuzzy-text";
import CardNav from './components/card-nav'
import TextPressure from './components/pressure-text';
import TargetCursor from "./components/target-cursor";
import TiltedCard from './components/title-card';
import myPic from "./images/me.jpg";
import LogoLoop from './components/logo-loop';
import VariableProximity from './components/variable-proximity';
import ScrollReveal from './components/scroll-reveal';
import InfiniteMenu from './components/infinite-menu'
import ViewBadge from './components/view-badge';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
// Unused social icons removed from this file

export default function Home() {
  // Hide default cursor globally
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
  /* Cursor will be hidden by TargetCursor when needed */
  html, body { margin: 0; padding: 0; }
  html { scroll-padding-top: 88px; }
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


  const projectslist = [
    { title: 'PortfolioSite', link: 'https://github.com/SatyamMhetre741/PortfolioSite', image: '', description: '' },
    { title: 'chatbot-ollama-mistral', link: 'https://github.com/SatyamMhetre741/chatbot-ollama-mistral', image: '', description: '' },
    { title: 'TextAnalyzer-HuggingFace', link: 'https://github.com/SatyamMhetre741/TextAnalyzer-HuggingFace', image: '', description: '' },
    { title: 'Airbnb-clone', link: 'https://github.com/SatyamMhetre741/Airbnb-clone', image: '', description: '' },
    { title: 'FullStack-Todo', link: 'https://github.com/SatyamMhetre741/FullStack-Todo', image: '', description: '' },
    { title: 'DDOS_Attack_detection', link: 'https://github.com/SatyamMhetre741/DDOS_Attack_detection', image: '', description: '' },
    { title: 'CapHunter', link: 'https://github.com/SatyamMhetre741/CapHunter', image: '', description: '' },
    { title: 'Tic-Tac-Toe', link: 'https://github.com/SatyamMhetre741/Tic-Tac-Toe', image: '', description: '' },
    { title: 'CurrencyConverter', link: 'https://github.com/SatyamMhetre741/CurrencyConverter', image: '', description: '' },
    { title: 'DrFilEz', link: 'https://github.com/SatyamMhetre741/DrFilEz', image: '', description: '' },
  ];

  // Core skills for pills and stat computation (edit to your stack)
  const skills = ["React", "Next.js", "Node", "Express", "MongoDB", "DSA", "ML"];

  // About stats - dynamic and easy to personalize
  const profileStats = [
    { n: String(projectslist.length), l: "Public projects" },
    { n: String(skills.length), l: "Core tools" },
    { n: "3", l: "Years learning" },
  ];


  // Brand name to show instead of logo
  const brandName = "Satyam Mhetre";
  const containerRef = useRef(null);
  const [bgActive, setBgActive] = useState(true);

  // Removed previous white-wrapper observer to avoid side-effects from scroll reveal experiments

  // (simplified) removed projects zoom and gallery effects

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
  ctaHref="/resume"
  ctaLabel="Resume"
      />

      {/* Custom cursor */}
      <TargetCursor spinDuration={3} hideDefaultCursor={true} />

  {/* Views badge */}
  <ViewBadge start={47} />

  {/* Hyperspeed background */}
  <Hyperspeed
          active={bgActive}
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
          alignItems: "flex-start",
          minHeight: "100vh",
          padding: "1rem",
          color: "white",
          textAlign: "left",
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
            width: "80vw",
            alignSelf: "flex-start",
            float: "left",
            margin: 0,
            boxSizing: "border-box",
          }}
        >
          <div
          ref={containerRef}
      style={{position: 'relative'}}
          >
            <VariableProximity
              label={"Traveller on the road of infinite learnings"}
              className={'variable-proximity-demo'}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 800, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff='linear'
              style={{ fontFamily: '"Roboto Flex", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif', fontSize: 'clamp(2rem, 6vw, 5rem)', lineHeight: 1.1, letterSpacing: 0.5 }}
            />
          </div>
          

    </div>

  </div>

  {/* Standalone Welcome section on black background */}
  <section id="welcome" style={{ position: 'relative', zIndex: 1, background: '#000', color: '#fff' }}>
    <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '2rem 1rem' }}>
      <ScrollReveal
        baseOpacity={0.6}
        enableBlur={true}
        baseRotation={5}
        blurStrength={4}
        containerClassName="text-center"
        textClassName="text-[clamp(2.4rem,7vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight"
      >
        {"Welcome to my portfolio!"}
      </ScrollReveal>
    </div>
  </section>

    
      {/* White background wrapper that takes over from here */}
      <div id="content-white" style={{ position: "relative", zIndex: 0, background: "#ffffff", color: "#111111" }}>
      {/* About Section (scroll target) */}
      <section id="about" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            minHeight: "100vh",
            display: "grid",
            placeItems: "center",
            padding: "clamp(2rem, 4vw, 4rem) 1rem",
            color: "#111111",
          }}
        >
          <div
            style={{
              width: "min(96vw, 1100px)",
              background: "#ffffff",
              backdropFilter: "none",
              borderRadius: 24,
              padding: "clamp(1.5rem, 3vw, 2.5rem)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              border: "1px solid #eeeeee",
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
                justifyItems: "center",
              }}
            >
              <div style={{ textAlign: "left" }}>
                <h2 style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)", margin: 0, letterSpacing: "0.3px" }}>About Me</h2>
                <p style={{ marginTop: 14, lineHeight: 1.8, color: "#333333", fontSize: "clamp(1rem, 1.4vw, 1.125rem)" }}>
                  Second-year IT student | Aspiring Full Stack Developer | Exploring AI, Web & Cloud
                </p>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }}>
                  {skills.map((pill) => (
                    <span key={pill} style={{ padding: "8px 12px", borderRadius: 9999, background: "rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.08)", fontSize: 13, color: "#333333" }}>{pill}</span>
                  ))}
                </div>
              </div>
              <div style={{ display: "grid", gap: 12 }}>
                {profileStats.map((s, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "baseline", gap: 12, background: "rgba(0,0,0,0.04)", border: "1px solid rgba(0,0,0,0.08)", borderRadius: 16, padding: "14px 16px" }}>
                    <div style={{ fontSize: "clamp(1.4rem, 4vw, 2.2rem)", fontWeight: 700, color: "#111111" }}>{s.n}</div>
                    <div style={{ color: "#555555", fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)" }}>{s.l}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <TiltedCard
                  imageSrc={myPic?.src || "/images/me.jpg"}
                  altText="Satyam Mhetre"
                  captionText="Satyam Mhetre"
                  containerHeight="320px"
                  containerWidth="320px"
                  imageHeight="320px"
                  imageWidth="320px"
                  rotateAmplitude={12}
                  scaleOnHover={1.12}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                  overlayContent={
                    <p className="tilted-card-demo-text">
                      Satyam Mhetre
                    </p>
                  }
                />
              </div>
            </div>
          </div>
        </div>
        
      </section>

  {/* Footer moved to global layout */}

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

    {/* Projects intro/title (simple) */}
    <section id="projects" style={{ position: 'relative', zIndex: 1, background: '#000' }}>
      <div style={{ minHeight: '100vh', position: 'relative', display: 'grid', placeItems: 'center', color: '#fff' }}>
        <div id="projects-title" style={{ position: 'relative', width: '90vw', height: '400px', margin: '0 auto', whiteSpace: 'nowrap', overflow: 'hidden' }}>
          <TextPressure
            text="Projects"
            flex={true}
            alpha={true}
            stroke={false}
            width={true}
            weight={true}
            italic={false}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={128}
            wordGapEm={1}
          />
        </div>
      </div>
    </section>

    {/* Projects gallery right after the title */}
    <section id="projects-gallery" style={{ position: 'relative', zIndex: 1, background: '#000' }}>
      <div style={{ minHeight: '100vh', position: 'relative' }}>
        <InfiniteMenu items={projectslist} />
      </div>
    </section>

    
      {/* Contact Section */}
      <section id="contact" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            minHeight: "60vh",
            padding: "3rem 1rem",
            color: "#111111",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "min(96vw, 780px)",
              textAlign: "center",
              background: "#ffffff",
              backdropFilter: "none",
              borderRadius: 16,
              padding: 24,
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              border: "1px solid rgba(0,0,0,0.08)",
            }}
            className="cursor-target"
          >
            <h2 style={{ margin: 0, fontSize: "clamp(1.25rem, 4vw, 2rem)" }}>Contact</h2>
            <p style={{ marginTop: 12, color: "#555555" }}>
              Want to collaborate or say hi? Drop a line at
              <span style={{ color: "#111" }}> satyamgmhetre741@gmail.com</span>.
            </p>
          </div>
        </div>
      </section>
      </div>
  {/* Scroll-driven zoom overlay implemented above; discrete overlay removed */}
    </main>
  );
}
