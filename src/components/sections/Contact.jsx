import { Reveal } from "../ui/Reveal";
import { Tag } from "../ui/Tag";
import { ContactCard } from "../cards/ContactCard";
import { secHead } from "../../constants/constants";

export function Contact({ isDayMode }) {
  const contactItems = [
    {
      icon: "✉",
      label: "Email",
      value: "ashiskumarmohanty738@gmail.com",
      href: "mailto:ashiskumarmohanty738@gmail.com?subject=Hiring%20Opportunity&body=Hi%20Ashis%2C%0A%0AI'd%20love%20to%20discuss%20an%20opportunity%20with%20you.",
      color: isDayMode ? "#eab308" : "#a78bfa",
    },
    { icon: "📞", label: "Phone", value: "+91 99387 76630", href: "tel:+919938776630", color: isDayMode ? "#f59e0b" : "#60a5fa" },
    { icon: "📍", label: "Location", value: "Bhubaneswar, Odisha, India", href: "#", color: isDayMode ? "#10b981" : "#34d399" },
    {
      icon: "in",
      label: "LinkedIn",
      value: "ashis-kumar-mohanty",
      href: "https://www.linkedin.com/in/ashis-kumar-mohanty-5340122ab",
      color: isDayMode ? "#f97316" : "#f472b6",
    },
  ];

  const navItems = ["About", "Skills", "Projects", "Contact"];

  return (
    <section id="contact" style={{ padding: "clamp(60px, 8vw, 80px) 6% 0", position: "relative", zIndex: 1 }}>
      <Reveal>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <Tag isDayMode={isDayMode}>✦ Let's Work Together ✦</Tag>
          <h2 style={{color: isDayMode ? "#ffaa00e3" : "#1511f3e3", fontSize: "40px", fontWeight: "bolder"}}>Connect With Me</h2>
          <p
            style={{
              color: isDayMode ? "#64748b" : "#6b7280",
              marginTop: 12,
              maxWidth: 440,
              margin: "12px auto 0",
              lineHeight: 1.7,
              fontSize: "clamp(13px, 4vw, 14px)",
            }}
          >
            Open to full-time roles, internships & freelance projects. Let's build something amazing.
          </p>
        </div>
      </Reveal>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 18,
          justifyContent: "center",
          maxWidth: 860,
          margin: "0 auto 80px",
        }}
      >
        {contactItems.map((c, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <ContactCard c={c} isDayMode={isDayMode} />
          </Reveal>
        ))}
      </div>

      {/* Cartoon Character at Bottom */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 40,
          marginTop: 20,
        }}
      >
        <img
          src="https://assets.unlayer.com/projects/0/1781279354566-791d2cfc-e3fd-4ec4-99da-4e7b5fc42099.png"
          alt="Cartoon Character"
          style={{
            width: "clamp(120px, 20vw, 180px)",
            height: 300,
            width:300,
            borderRadius: 20,
            transition: "transform 0.3s ease",
            filter: isDayMode ? "none" : "brightness(0.8)",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        />
      </div>

      <div
        style={{
          borderTop: isDayMode ? "1px solid rgba(0,0,0,0.1)" : "1px solid rgba(255,255,255,0.07)",
          padding: "32px 0",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
        }}
      >
        <div style={{ fontSize: "clamp(10px, 3vw, 12px)", color: isDayMode ? "#64748b" : "#4b5563" }}>
          © 2026 Ashis Kumar Mohanty. All rights reserved.
        </div>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          {navItems.map((l) => (
            <button
              key={l}
              onClick={() => document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
              style={{
                background: "none",
                border: "none",
                color: isDayMode ? "#64748b" : "#6b7280",
                fontSize: "clamp(10px, 3vw, 12px)",
                cursor: "pointer",
                transition: "color 0.2s",
                padding: 0,
              }}
              onMouseEnter={(e) => (e.target.style.color = isDayMode ? "#eab308" : "#a78bfa")}
              onMouseLeave={(e) => (e.target.style.color = isDayMode ? "#64748b" : "#6b7280")}
            >
              {l}
            </button>
          ))}
        </div>
        <div style={{ fontSize: "clamp(10px, 3vw, 12px)", color: isDayMode ? "#64748b" : "#4b5563" }}>
          Built with React · Made with 💜
        </div>
      </div>
    </section>
  );
}