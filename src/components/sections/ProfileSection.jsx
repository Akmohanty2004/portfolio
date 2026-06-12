import { useState } from "react";

export function ProfileSection({ isDayMode }) {
  const [hover, setHover] = useState(false);

  const styles = {
    borderGradient: isDayMode
      ? "linear-gradient(135deg, #eab308, #f59e0b, #f97316, #eab308)"
      : "linear-gradient(135deg, #4f46e5, #7c3aed)",
    shadow: isDayMode
      ? "0 25px 45px rgba(234,179,8,0.2), inset 0 0 20px rgba(234,179,8,0.1)"
      : "0 10px 30px rgba(0,0,0,0.3)",
    textGradient: isDayMode
      ? "linear-gradient(135deg, #1e293b, #eab308, #f59e0b)"
      : "linear-gradient(135deg, #fff, #a78bfa, #f472b6)",
    statusBg: isDayMode
      ? "rgba(234,179,8,0.15)"
      : "rgba(167,139,250,0.1)",
    statusBorder: isDayMode
      ? "1px solid rgba(234,179,8,0.4)"
      : "1px solid rgba(167,139,250,0.35)",
    statusText: isDayMode ? "#d97706" : "#c4b5fd",
  };

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 32,
        width: "100%",
      }}
    >
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          position: "relative",
          width: "clamp(140px, 25vw, 200px)",
          height: "clamp(160px, 28vw, 220px)",
          cursor: "pointer",
          transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
          transform: hover ? "scale(1.02) translateY(-5px)" : "scale(1) translateY(0)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: -3,
            background: hover ? styles.borderGradient : (isDayMode ? "linear-gradient(135deg, #eab308, #f59e0b)" : "linear-gradient(135deg, #4f46e5, #7c3aed)"),
            backgroundSize: hover ? "300% 300%" : "100%",
            borderRadius: "40% 60% 45% 55% / 50% 45% 55% 50%",
            opacity: 0.9,
            animation: hover ? "gradientShift 2s ease infinite" : "none",
            transition: "all 0.3s ease",
            filter: hover ? "blur(2px)" : "none",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "40% 60% 45% 55% / 50% 45% 55% 50%",
            overflow: "hidden",
            background: isDayMode ? "#fff" : "#030010",
            boxShadow: styles.shadow,
            transition: "box-shadow 0.4s ease",
          }}
        >
          <img
            src="https://assets.unlayer.com/projects/0/1781066867183-Picture1.jpg"
            alt="Ashis Kumar Mohanty"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 20%",
              transition: "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
              transform: hover ? "scale(1.08)" : "scale(1)",
            }}
          />

          {hover && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: isDayMode
                  ? "linear-gradient(135deg, rgba(234,179,8,0.15), rgba(245,158,11,0.1))"
                  : "linear-gradient(135deg, rgba(167,139,250,0.15), rgba(34,211,238,0.1))",
                pointerEvents: "none",
              }}
            />
          )}
        </div>

        {/* Floating Particles - Day mode colors adjusted */}
        <div
          style={{
            position: "absolute",
            top: -10,
            left: -10,
            width: 20,
            height: 20,
            borderRadius: "60% 40% 30% 70%",
            background: isDayMode ? "#eab308" : "#a78bfa",
            opacity: hover ? 0.8 : 0.4,
            transition: "all 0.3s ease",
            animation: "floatParticle1 4s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -8,
            right: -12,
            width: 16,
            height: 16,
            borderRadius: "30% 70% 70% 30%",
            background: isDayMode ? "#f97316" : "#f472b6",
            opacity: hover ? 0.8 : 0.4,
            transition: "all 0.3s ease",
            animation: "floatParticle2 3.5s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: -15,
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: isDayMode ? "#10b981" : "#22d3ee",
            opacity: hover ? 0.9 : 0.5,
            transition: "all 0.3s ease",
            animation: "floatParticle3 3s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "30%",
            left: -12,
            width: 14,
            height: 14,
            borderRadius: "40% 60% 60% 40%",
            background: isDayMode ? "#3b82f6" : "#60a5fa",
            opacity: hover ? 0.7 : 0.4,
            transition: "all 0.3s ease",
            animation: "floatParticle4 4.5s ease-in-out infinite",
          }}
        />
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "clamp(20px, 5vw, 28px)",
          transition: "all 0.3s ease",
          transform: hover ? "translateY(-3px)" : "translateY(0)",
        }}
      >
        <h3
          style={{
           fontSize: "clamp(24px, 6vw, 34px)",
fontWeight: 900,
color :isDayMode ?  "#ff8c00e3" : "#1511f3e3",
backgroundSize: "400% 400%",
WebkitBackgroundClip: "text",
letterSpacing: "-0.04em",
marginBottom: "10px",
animation: "gradientFlow 8s linear infinite",
filter: "drop-shadow(0 0 12px rgba(15, 98, 222, 0.71))",
          }}
        >
          Ashis Kumar Mohanty
        </h3>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 22px",
            borderRadius: 50,
            background: styles.statusBg,
            border: styles.statusBorder,
            transition: "all 0.3s ease",
            backdropFilter: "blur(8px)",
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: isDayMode ? "#10b981" : "#22d3ee",
              display: "inline-block",
              animation: "pulse 1.5s ease-in-out infinite",
            }}
          />
          <span
            style={{
              fontSize: "clamp(11px, 3.5vw, 13px)",
              color: styles.statusText,
              letterSpacing: "0.08em",
              fontWeight: 600,
            }}
          >
            Full Stack Developer
          </span>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: isDayMode ? "#ef4444" : "#f472b6",
              display: "inline-block",
              animation: "pulse 1.5s ease-in-out infinite 0.75s",
            }}
          />
        </div>
      </div>
    </div>
  );
}