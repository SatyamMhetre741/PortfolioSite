import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function SiteFooter() {
  return (
    <footer id="footer" style={{ position: "relative", zIndex: 1, background: "#000" }}>
      <div
        style={{
          padding: "2rem 1rem 4.5rem 1rem",
          color: "#ffffff",
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
            background: "rgba(255,255,255,0.06)",
            borderRadius: 16,
            padding: 24,
            boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "center" }}>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
              <a href="https://github.com/SatyamMhetre741" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                <FaGithub aria-hidden="true" /> GitHub
              </a>
              <a href="www.linkedin.com/in/satyam-mhetre-947471297" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                <FaLinkedin aria-hidden="true" /> LinkedIn
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                <FaTwitter aria-hidden="true" /> Twitter
              </a>
              <a href="https://www.instagram.com/_s.a.t.y.a.m_m_/" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                <FaInstagram aria-hidden="true" /> Instagram
              </a>
            </div>
            <p style={{ margin: 0, color: "#e5e5e5" }}>
              Special thanks to {" "}
              <a href="https://reactbits.dev" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none" }}>React Bits</a>
              {" "}for inspiration that helped make this site possible.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
