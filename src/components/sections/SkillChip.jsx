import { useState } from "react";
import { SvgIcon } from "../ui/SvgIcon";
import { hexRgb } from "../../constants/constants";

export function SkillChip({ icon }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        padding: "14px 16px",
        borderRadius: 16,
        background: hov ? `rgba(${hexRgb(icon.color)},0.15)` : "rgba(255,255,255,0.03)",
        border: `1px solid ${hov ? icon.color + "77" : "rgba(255,255,255,0.07)"}`,
        transform: hov ? "translateY(-7px) scale(1.1)" : "translateY(0) scale(1)",
        transition: "all 0.35s cubic-bezier(.34,1.56,.64,1)",
        boxShadow: hov ? `0 10px 28px ${icon.color}44` : "none",
        cursor: "default",
        minWidth: 72,
      }}
    >
      <SvgIcon svg={icon.svg} size={34} />
      <span
        style={{
          fontSize: 10,
          color: hov ? icon.color : "#9ca3af",
          letterSpacing: "0.05em",
          whiteSpace: "nowrap",
          transition: "color 0.3s",
          fontWeight: 600,
        }}
      >
        {icon.name}
      </span>
    </div>
  );
}