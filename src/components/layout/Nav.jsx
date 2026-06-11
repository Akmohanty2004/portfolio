import { useState, useEffect } from "react";

function NLink({ label, onClick }) {
  const [h, setH] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "4px 2px",
        color: h ? "#a78bfa" : "#d1d5db",
        fontSize: "clamp(13px, 3.5vw, 14px)",
        fontWeight: 500,
        borderBottom: h ? "1.5px solid #a78bfa" : "1.5px solid transparent",
        transition: "all 0.2s",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </button>
  );
}

export function Nav() {
  const [scroll, setScroll] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = ["About", "Skills", "Projects", "Contact"];

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const go = (id) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        height: "auto",
        minHeight: 64,
        padding: "12px 6%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        background: scroll ? "rgba(5,0,20,0.95)" : "rgba(5,0,20,0.8)",
        backdropFilter: "blur(20px)",
        borderBottom: scroll ? "1px solid rgba(167,139,250,0.15)" : "1px solid rgba(167,139,250,0.08)",
        transition: "all 0.4s ease",
        boxSizing: "border-box",
      }}
    >
      <div
        onClick={() => go("hero")}
        style={{
          fontWeight: 900,
          fontSize: "clamp(20px, 5vw, 24px)",
          letterSpacing: "0.06em",
          color: "#fff",
          cursor: "pointer",
          whiteSpace: "nowrap",
        }}
      >
        <span
          style={{
            background: "linear-gradient(135deg,#a78bfa,#60a5fa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          A
        </span>
        KM
      </div>

      <div
        style={{
          display: mobileMenuOpen ? "none" : "flex",
          gap: "clamp(16px, 4vw, 28px)",
          alignItems: "center",
          flexWrap: "wrap",
        }}
        className="desktop-nav"
      >
        {navItems.map((l) => (
          <NLink key={l} label={l} onClick={() => go(l.toLowerCase())} />
        ))}
      </div>

      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <a
          href="https://drive.google.com/uc?export=download&id=1N3ZwkjHuXfv_DIbEfxw4b8pTW-C8yZ1O"
          download
          style={{
            padding: "8px 18px",
            borderRadius: 50,
            background: "linear-gradient(135deg,#10b981,#059669)",
            color: "#fff",
            fontSize: "clamp(11px, 3vw, 13px)",
            fontWeight: 700,
            textDecoration: "none",
            transition: "all 0.25s",
            letterSpacing: "0.04em",
            boxShadow: "0 4px 12px #10b98155",
            whiteSpace: "nowrap",
            display: mobileMenuOpen ? "none" : "inline-block",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 6px 20px #10b98188";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 12px #10b98155";
          }}
        >
          📄 Resume
        </a>

        <a
          href="mailto:ashiskumarmohanty738@gmail.com?subject=Hiring%20Opportunity%20for%20Ashis%20Kumar%20Mohanty&body=Hi%20Ashis%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20potential%20opportunity%20with%20you.%0A%0APlease%20let%20me%20know%20your%20availability.%0A%0ARegards"
          style={{
            padding: "8px 18px",
            borderRadius: 50,
            background: "linear-gradient(135deg,#7c3aed,#4f46e5)",
            color: "#fff",
            fontSize: "clamp(11px, 3vw, 13px)",
            fontWeight: 700,
            textDecoration: "none",
            transition: "all 0.25s",
            letterSpacing: "0.04em",
            boxShadow: "0 4px 12px #7c3aed55",
            whiteSpace: "nowrap",
            display: mobileMenuOpen ? "none" : "inline-block",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 6px 20px #7c3aed88";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 12px #7c3aed55";
          }}
        >
          ✉ Hire Me
        </a>
      </div>

      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        style={{
          display: "none",
          background: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(167,139,250,0.3)",
          borderRadius: 8,
          padding: "8px 12px",
          cursor: "pointer",
          color: "#fff",
          fontSize: 20,
        }}
        className="mobile-menu-btn"
      >
        {mobileMenuOpen ? "✕" : "☰"}
      </button>

      {mobileMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "rgba(5,0,20,0.98)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(167,139,250,0.2)",
            padding: "16px 6%",
            display: "flex",
            flexDirection: "column",
            gap: 16,
            zIndex: 199,
          }}
        >
          {navItems.map((l) => (
            <button
              key={l}
              onClick={() => go(l.toLowerCase())}
              style={{
                background: "none",
                border: "none",
                color: "#d1d5db",
                fontSize: 16,
                fontWeight: 500,
                padding: "10px 0",
                textAlign: "left",
                cursor: "pointer",
                borderBottom: "1px solid rgba(167,139,250,0.1)",
              }}
            >
              {l}
            </button>
          ))}
          <a
            href="https://drive.google.com/uc?export=download&id=1N3ZwkjHuXfv_DIbEfxw4b8pTW-C8yZ1O"
            download
            style={{
              padding: "10px 20px",
              borderRadius: 50,
              background: "linear-gradient(135deg,#10b981,#059669)",
              color: "#fff",
              fontSize: 14,
              fontWeight: 700,
              textDecoration: "none",
              textAlign: "center",
              marginTop: 8,
            }}
          >
            📄 Download Resume
          </a>
          <a
            href="mailto:ashiskumarmohanty738@gmail.com"
            style={{
              padding: "10px 20px",
              borderRadius: 50,
              background: "linear-gradient(135deg,#7c3aed,#4f46e5)",
              color: "#fff",
              fontSize: 14,
              fontWeight: 700,
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            ✉ Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}