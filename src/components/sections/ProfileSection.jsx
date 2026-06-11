import { useState } from "react";

export function ProfileSection() {
  const [hover, setHover] = useState(false);

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
            background: hover
              ? "linear-gradient(135deg, #a78bfa, #f472b6, #22d3ee, #a78bfa)"
              : "linear-gradient(135deg, #4f46e5, #7c3aed)",
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
            background: "#030010",
            boxShadow: hover
              ? "0 25px 45px rgba(167,139,250,0.3), inset 0 0 20px rgba(167,139,250,0.1)"
              : "0 10px 30px rgba(0,0,0,0.3)",
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
                background: "linear-gradient(135deg, rgba(167,139,250,0.15), rgba(34,211,238,0.1))",
                pointerEvents: "none",
              }}
            />
          )}
        </div>

        <div
          style={{
            position: "absolute",
            top: -10,
            left: -10,
            width: 20,
            height: 20,
            borderRadius: "60% 40% 30% 70%",
            background: hover ? "#a78bfa" : "rgba(167,139,250,0.5)",
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
            background: hover ? "#f472b6" : "rgba(244,114,182,0.5)",
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
            background: hover ? "#22d3ee" : "rgba(34,211,238,0.5)",
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
            background: hover ? "#60a5fa" : "rgba(96,165,250,0.5)",
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
            fontSize: "clamp(20px, 5.5vw, 26px)",
            fontWeight: 800,
            background: "linear-gradient(135deg, #fff, #a78bfa, #f472b6)",
            backgroundSize: "200% 200%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: 10,
            letterSpacing: "-0.02em",
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
            background: "rgba(167,139,250,0.1)",
            border: "1px solid rgba(167,139,250,0.35)",
            transition: "all 0.3s ease",
            backdropFilter: "blur(8px)",
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#22d3ee",
              display: "inline-block",
              animation: "pulse 1.5s ease-in-out infinite",
            }}
          />
          <span
            style={{
              fontSize: "clamp(11px, 3.5vw, 13px)",
              color: "#c4b5fd",
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
              background: "#f472b6",
              display: "inline-block",
              animation: "pulse 1.5s ease-in-out infinite 0.75s",
            }}
          />
        </div>
      </div>
    </div>
  );
}