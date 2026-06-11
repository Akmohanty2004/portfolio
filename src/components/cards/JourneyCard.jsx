import { useState } from "react";

export function JourneyCard({ item }) {
  const [h, setH] = useState(false);

  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        padding: "clamp(20px, 5vw, 28px)",
        borderRadius: 20,
        background: h ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.03)",
        border: `1px solid ${h ? item.color + "66" : "rgba(255,255,255,0.08)"}`,
        transition: "all 0.35s ease",
        transform: h ? "translateY(-5px)" : "translateY(0)",
        boxShadow: h ? `0 14px 44px ${item.color}22` : "none",
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 14,
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        <div style={{ fontSize: 28 }}>{item.icon}</div>
        <span
          style={{
            fontSize: 11,
            padding: "4px 12px",
            borderRadius: 99,
            background: `${item.color}1a`,
            border: `1px solid ${item.color}44`,
            color: item.color,
            letterSpacing: "0.06em",
          }}
        >
          {item.period}
        </span>
      </div>
      <h3
        style={{
          fontSize: "clamp(15px, 4vw, 16px)",
          fontWeight: 700,
          color: "#e2e8f0",
          marginBottom: 6,
        }}
      >
        {item.title}
      </h3>
      <p style={{ fontSize: 12, color: item.color, marginBottom: 12, fontWeight: 600 }}>{item.place}</p>
      <p style={{ fontSize: "clamp(12px, 3.5vw, 13px)", color: "#9ca3af", lineHeight: 1.7 }}>
        {item.desc}
      </p>
    </div>
  );
}