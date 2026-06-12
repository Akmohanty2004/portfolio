import { useState, useEffect } from "react";

export function ThemeToggle({ isDayMode, toggleTheme }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={toggleTheme}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: 44,
        height: 44,
        borderRadius: "50%",
        border: "none",
        cursor: "pointer",
        background: isDayMode 
          ? "linear-gradient(135deg,#fbbf24,#f59e0b)" 
          : "linear-gradient(135deg,#1e293b,#0f172a)",
        color: isDayMode ? "#1e293b" : "#fbbf24",
        fontSize: 22,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease",
        boxShadow: isHovered 
          ? isDayMode 
            ? "0 4px 20px #fbbf24aa" 
            : "0 4px 20px #7c3aed66"
          : "none",
        transform: isHovered ? "scale(1.1)" : "scale(1)",
      }}
    >
      {isDayMode ? "🌙" : "☀️"}
    </button>
  );
}