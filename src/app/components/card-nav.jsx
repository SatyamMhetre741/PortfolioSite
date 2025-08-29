import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

const CardNav = ({
  logo,
  logoAlt = "Logo",
  brandText,
  items,
  className = "",
  baseColor = "#fff",
  menuColor = "#000",
  buttonBgColor = "#111",
  buttonTextColor = "#fff",
  ctaHref = "#about",
  ctaLabel = "Get Started",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => setIsExpanded((v) => !v);

  return (
    <div
      className={`card-nav-container ${className}`}
      role="navigation"
      style={{ position: "fixed", left: "50%", transform: "translateX(-50%)", width: "min(92vw, 900px)", zIndex: 99, top: 16 }}
    >
      <nav
        className={`card-nav ${isExpanded ? "open" : ""}`}
        style={{ backgroundColor: baseColor, borderRadius: 14, boxShadow: "0 8px 28px rgba(0,0,0,0.25)" }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: 12 }}>
          <div
            className="hamburger-menu"
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? "Close menu" : "Open menu"}
            tabIndex={0}
            style={{ color: menuColor, cursor: "pointer", display: "flex", flexDirection: "column", gap: 6, padding: 6 }}
          >
            <div style={{ width: 28, height: 2, background: "currentColor", transform: isExpanded ? "translateY(4px) rotate(45deg)" : "none", transition: "transform 300ms ease" }} />
            <div style={{ width: 28, height: 2, background: "currentColor", transform: isExpanded ? "-translateY(4px) rotate(-45deg)" : "none", transition: "transform 300ms ease" }} />
          </div>

          <div className="logo-container" style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", display: "flex", alignItems: "center" }}>
            {brandText ? (
              <div
                className="logo"
                style={{ color: menuColor, height: 28, lineHeight: "28px", fontWeight: 600, letterSpacing: 0.2, fontSize: 18 }}
                aria-label={logoAlt}
              >
                {brandText}
              </div>
            ) : (
              <img src={logo} alt={logoAlt} className="logo" style={{ height: 28 }} />
            )}
          </div>

          <a
            href={ctaHref}
            className="card-nav-cta-button"
            style={{ backgroundColor: buttonBgColor, color: buttonTextColor, textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "10px 16px", height: 40, borderRadius: 10, fontWeight: 600 }}
          >
            {ctaLabel}
          </a>
        </div>

        {isExpanded && (
          <div className="card-nav-content" aria-hidden={!isExpanded} style={{ padding: 12, display: "flex", gap: 12, flexWrap: "wrap" }}>
            {(items || []).slice(0, 3).map((item, idx) => (
              <div
                key={`${item.label}-${idx}`}
                className="nav-card"
                style={{ backgroundColor: item.bgColor, color: item.textColor, borderRadius: 12, padding: "12px 16px", minWidth: 220, flex: "1 1 0%" }}
              >
                <div className="nav-card-label" style={{ fontSize: 20, fontWeight: 500 }}>{item.label}</div>
                <div className="nav-card-links" style={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 4 }}>
                  {item.links?.map((lnk, i) => (
                    <a
                      key={`${lnk.label}-${i}`}
                      href={lnk.href}
                      aria-label={lnk.ariaLabel}
                      style={{ display: "inline-flex", alignItems: "center", gap: 6, color: item.textColor, textDecoration: "none", opacity: 0.9 }}
                    >
                      <GoArrowUpRight aria-hidden="true" />
                      {lnk.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default CardNav;
