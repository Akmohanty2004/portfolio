import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

function NLink({ label, onClick, isDayMode }) {
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
        color: h ? (isDayMode ? "#eab308" : "#a78bfa") : (isDayMode ? "#475569" : "#d1d5db"),
        fontSize: "clamp(13px, 3.5vw, 14px)",
        fontWeight: 500,
        borderBottom: h ? (isDayMode ? "1.5px solid #eab308" : "1.5px solid #a78bfa") : "1.5px solid transparent",
        transition: "all 0.2s",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </button>
  );
}

export function Nav({ isDayMode, toggleTheme }) {
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
        background: isDayMode
          ? scroll ? "rgba(159, 217, 126, 0.98)" : "rgb(221, 213, 136)"
          : scroll ? "rgba(5,0,20,0.95)" : "rgba(5,0,20,0.8)",
        backdropFilter: "blur(20px)",
        borderBottom: isDayMode
          ? scroll ? "1px solid rgba(0,0,0,0.1)" : "1px solid rgba(0,0,0,0.05)"
          : scroll ? "1px solid rgba(167,139,250,0.15)" : "1px solid rgba(167,139,250,0.08)",
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
          color: isDayMode ? "#1e293b" : "#fff",
          cursor: "pointer",
          whiteSpace: "nowrap",
        }}
      >
        <span
  style={{
    background:
      "linear-gradient(90deg, #ff0000, #ff7300d5, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8)",
    backgroundSize: "400% 400%",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: "gradientMove 5s ease infinite",
    fontWeight: "bold",
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
          <NLink key={l} label={l} onClick={() => go(l.toLowerCase())} isDayMode={isDayMode} />
        ))}
      </div>

      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        {/* Theme Toggle Button */}
        <ThemeToggle isDayMode={isDayMode} toggleTheme={toggleTheme} />

        <a
          href="https://drive.google.com/uc?export=download&id=1N3ZwkjHuXfv_DIbEfxw4b8pTW-C8yZ1O"
          download
          style={{
            padding: "8px 18px",
            borderRadius: 50,
            background: isDayMode
              ? "linear-gradient(135deg,#eab308,#f59e0b)"
              : "linear-gradient(135deg,#10b981,#059669)",
            color: isDayMode ? "#1e293b" : "#fff",
            fontSize: "clamp(11px, 3vw, 13px)",
            fontWeight: 700,
            textDecoration: "none",
            transition: "all 0.25s",
            letterSpacing: "0.04em",
            boxShadow: isDayMode ? "0 4px 12px #eab30855" : "0 4px 12px #10b98155",
            whiteSpace: "nowrap",
            display: mobileMenuOpen ? "none" : "inline-block",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = isDayMode ? "0 6px 20px #eab30888" : "0 6px 20px #10b98188";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = isDayMode ? "0 4px 12px #eab30855" : "0 4px 12px #10b98155";
          }}
        >
          📄 Resume
        </a>

        <a
          href="mailto:ashiskumarmohanty738@gmail.com?subject=Hiring%20Opportunity%20for%20Ashis%20Kumar%20Mohanty&body=Hi%20Ashis%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20potential%20opportunity%20with%20you.%0A%0APlease%20let%20me%20know%20your%20availability.%0A%0ARegards"
          style={{
            padding: "8px 18px",
            borderRadius: 50,
            background: isDayMode
              ? "linear-gradient(135deg,#f97316,#ea580c)"
              : "linear-gradient(135deg,#7c3aed,#4f46e5)",
            color: isDayMode ? "#fff" : "#fff",
            fontSize: "clamp(11px, 3vw, 13px)",
            fontWeight: 700,
            textDecoration: "none",
            transition: "all 0.25s",
            letterSpacing: "0.04em",
            boxShadow: isDayMode ? "0 4px 12px #f9731655" : "0 4px 12px #7c3aed55",
            whiteSpace: "nowrap",
            display: mobileMenuOpen ? "none" : "inline-block",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = isDayMode ? "0 6px 20px #f9731688" : "0 6px 20px #7c3aed88";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = isDayMode ? "0 4px 12px #f9731655" : "0 4px 12px #7c3aed55";
          }}
        >
          ✉ Hire Me
        </a>
      </div>

      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        style={{
          display: "none",
          background: isDayMode ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)",
          border: isDayMode ? "1px solid rgba(0,0,0,0.2)" : "1px solid rgba(167,139,250,0.3)",
          borderRadius: 8,
          padding: "8px 12px",
          cursor: "pointer",
          color: isDayMode ? "#1e293b" : "#fff",
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
            background: isDayMode ? "rgba(255,255,255,0.98)" : "rgba(5,0,20,0.98)",
            backdropFilter: "blur(20px)",
            borderBottom: isDayMode ? "1px solid rgba(0,0,0,0.1)" : "1px solid rgba(167,139,250,0.2)",
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
                color: isDayMode ? "#475569" : "#d1d5db",
                fontSize: 16,
                fontWeight: 500,
                padding: "10px 0",
                textAlign: "left",
                cursor: "pointer",
                borderBottom: isDayMode ? "1px solid rgba(0,0,0,0.1)" : "1px solid rgba(167,139,250,0.1)",
              }}
            >
              {l}
            </button>
          ))}
          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            <ThemeToggle isDayMode={isDayMode} toggleTheme={toggleTheme} />
            <a
              href="https://drive.google.com/uc?export=download&id=1N3ZwkjHuXfv_DIbEfxw4b8pTW-C8yZ1O"
              download
              style={{
                padding: "10px 20px",
                borderRadius: 50,
                background: isDayMode
                  ? "linear-gradient(135deg,#eab308,#f59e0b)"
                  : "linear-gradient(135deg,#10b981,#059669)",
                color: isDayMode ? "#1e293b" : "#fff",
                fontSize: 14,
                fontWeight: 700,
                textDecoration: "none",
                textAlign: "center",
                flex: 1,
              }}
            >
              📄 Download Resume
            </a>
          </div>
          <a
            href="mailto:ashiskumarmohanty738@gmail.com"
            style={{
              padding: "10px 20px",
              borderRadius: 50,
              background: isDayMode
                ? "linear-gradient(135deg,#f97316,#ea580c)"
                : "linear-gradient(135deg,#7c3aed,#4f46e5)",
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