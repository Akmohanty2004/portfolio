import { useState } from "react";

export function NavBtn({ onClick, dir, isDayMode }) {
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
          ? isDayMode
            ? "linear-gradient(135deg,#eab308,#f59e0b)"
            : "linear-gradient(135deg,#7c3aed,#4f46e5)"
          : isDayMode
            ? "rgba(0,0,0,0.1)"
            : "rgba(255,255,255,0.08)",
        color: isDayMode ? (hov ? "#fff" : "#1e293b") : "#fff",
        fontSize: 18,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease",
        boxShadow: hov
          ? isDayMode
            ? "0 4px 20px #eab30866"
            : "0 4px 20px #7c3aed66"
          : "none",
      }}
    >
      {dir === "left" ? "‹" : "›"}
    </button>
  );
}