import { useState } from "react";

export function ContactCard({ c }) {
  const [h, setH] = useState(false);

  return (
    <a
      href={c.href}
      target={c.href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        padding: "clamp(16px, 4vw, 22px) clamp(18px, 4vw, 26px)",
        borderRadius: 18,
        display: "flex",
        alignItems: "center",
        gap: 14,
        textDecoration: "none",
        minWidth: 200,
        background: h ? `${c.color}15` : "rgba(255,255,255,0.03)",
        border: `1px solid ${h ? c.color + "66" : "rgba(255,255,255,0.08)"}`,
        transition: "all 0.35s ease",
        transform: h ? "translateY(-5px)" : "translateY(0)",
        boxShadow: h ? `0 12px 36px ${c.color}22` : "none",
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        style={{
          width: "clamp(36px, 8vw, 44px)",
          height: "clamp(36px, 8vw, 44px)",
          borderRadius: 12,
          flexShrink: 0,
          background: `${c.color}1a`,
          border: `1px solid ${c.color}44`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "clamp(16px, 4vw, 18px)",
          color: c.color,
          fontWeight: 800,
          transition: "all 0.3s",
          boxShadow: h ? `0 4px 16px ${c.color}44` : "none",
        }}
      >
        {c.icon}
      </div>
      <div>
        <div
          style={{
            fontSize: "clamp(9px, 3vw, 10px)",
            color: "#6b7280",
            marginBottom: 3,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {c.label}
        </div>
        <div
          style={{
            fontSize: "clamp(11px, 3.5vw, 13px)",
            color: h ? c.color : "#d1d5db",
            fontWeight: 500,
            transition: "color 0.3s",
            wordBreak: "break-all",
          }}
        >
          {c.value}
        </div>
      </div>
    </a>
  );
}