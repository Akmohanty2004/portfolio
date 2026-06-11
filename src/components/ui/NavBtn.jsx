import { useState } from "react";

export function NavBtn({ onClick, dir }) {
  const [hov, setHov] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: 44,
        height: 44,
        borderRadius: "50%",
        border: "none",
        cursor: "pointer",
        background: hov
          ? "linear-gradient(135deg,#7c3aed,#4f46e5)"
          : "rgba(255,255,255,0.08)",
        color: "#fff",
        fontSize: 18,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease",
        boxShadow: hov ? "0 4px 20px #7c3aed66" : "none",
      }}
    >
      {dir === "left" ? "‹" : "›"}
    </button>
  );
}