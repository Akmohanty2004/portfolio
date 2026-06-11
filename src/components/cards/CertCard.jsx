import { useState } from "react";

export function CertCard({ cert }) {
  const [h, setH] = useState(false);

  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        padding: "clamp(18px, 4vw, 22px) clamp(20px, 5vw, 30px)",
        borderRadius: 18,
        textAlign: "center",
        minWidth: 200,
        background: h ? `${cert.color}15` : "rgba(255,255,255,0.03)",
        border: `1px solid ${h ? cert.color + "66" : "rgba(255,255,255,0.08)"}`,
        transition: "all 0.35s ease",
        transform: h ? "translateY(-5px) scale(1.03)" : "translateY(0) scale(1)",
        boxShadow: h ? `0 12px 36px ${cert.color}22` : "none",
        backdropFilter: "blur(4px)",
      }}
    >
      <div style={{ fontSize: 30, marginBottom: 10 }}>{cert.icon}</div>
      <h3
        style={{
          fontSize: "clamp(13px, 4vw, 15px)",
          fontWeight: 700,
          color: "#e2e8f0",
          marginBottom: 6,
        }}
      >
        {cert.title}
      </h3>
      <p style={{ fontSize: "clamp(10px, 3vw, 12px)", color: cert.color, fontWeight: 500 }}>
        {cert.issuer}
      </p>
    </div>
  );
}