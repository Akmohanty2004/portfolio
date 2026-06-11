import { SKILLS } from "../../constants/skills";
import { FLOATS } from "../../constants/constants";
import { SvgIcon } from "../ui/SvgIcon";
import { Typewriter } from "../ui/Typewriter";
import { BlackHoleCanvas } from "../layout/BlackHoleCanvas";
import { ProfileSection } from "./ProfileSection";

export function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "80px 6% 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
        <BlackHoleCanvas />
      </div>

      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          filter: "blur(120px)",
          background: "radial-gradient(circle,#7c3aed33,transparent 70%)",
          top: "-20%",
          left: "10%",
          animation: "pulse 9s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          filter: "blur(100px)",
          background: "radial-gradient(circle,#4f46e533,transparent 70%)",
          bottom: "5%",
          left: "-5%",
          animation: "pulse 7s ease-in-out infinite 2s",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 2 }}>
        {FLOATS.map((ic, i) => {
          const sk = SKILLS.find((s) => s.name === ic.k);
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                top: ic.top,
                right: ic.right,
                width: ic.size,
                height: ic.size,
                borderRadius: 16,
                padding: 9,
                background: "rgba(255,255,255,0.055)",
                border: "1px solid rgba(255,255,255,0.13)",
                backdropFilter: "blur(10px)",
                animation: `${ic.anim} ${3.2 + i * 0.35}s ease-in-out infinite`,
                animationDelay: `${ic.d}s`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `0 4px 20px ${sk?.color || "#7c3aed"}33`,
              }}
            >
              {sk && <SvgIcon svg={sk.svg} size={ic.size - 18} />}
            </div>
          );
        })}
      </div>

      <div style={{ position: "relative", zIndex: 3, maxWidth: 680, margin: "0 auto", width: "100%" }}>
        <ProfileSection />

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 18px",
            borderRadius: 99,
            background: "rgba(124,58,237,0.18)",
            border: "1px solid rgba(167,139,250,0.4)",
            fontSize: 11,
            color: "#c4b5fd",
            marginBottom: 26,
            animation: "slideUp 0.9s ease both",
            letterSpacing: "0.08em",
            backdropFilter: "blur(8px)",
            marginTop: 0,
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#a78bfa",
              display: "inline-block",
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
          Full Stack Developer Portfolio
        </div>

        <h1
          style={{
            fontSize: "clamp(2rem,6vw,3.9rem)",
            fontWeight: 900,
            lineHeight: 1.2,
            marginBottom: 22,
            animation: "slideUp 0.9s ease 0.1s both",
            textAlign: "center",
          }}
        >
          Providing the{" "}
          <span
            style={{
              background: "linear-gradient(135deg,#a78bfa,#60a5fa,#f472b6,#a78bfa)",
              backgroundSize: "300% 300%",
              animation: "gradShift 4s ease infinite",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            best
          </span>
          <br />
          <span style={{ display: "inline-block" }}>
            <Typewriter words={["project experience.", "software solutions.", "creative ideas.", "web applications."]} />
          </span>
        </h1>

        <p
          style={{
            fontSize: "clamp(13px, 4vw, 15px)",
            lineHeight: 1.7,
            color: "#94a3b8",
            marginBottom: 38,
            animation: "slideUp 0.9s ease 0.2s both",
            textAlign: "center",
          }}
        >
          I'm <strong style={{ color: "#e2e8f0", fontWeight: 700 }}>Ashis Kumar Mohanty</strong> — B.Tech CSE (2026) &
          Full Stack Engineer. Passionate about building impactful, pixel-perfect web applications.
        </p>

        <div
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
            animation: "slideUp 0.9s ease 0.3s both",
          }}
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              padding: "12px 24px",
              borderRadius: 50,
              border: "none",
              background: "linear-gradient(135deg,#7c3aed,#4f46e5)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "clamp(12px, 3.5vw, 14px)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 6px 24px #7c3aed55",
              letterSpacing: "0.04em",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-3px)";
              e.target.style.boxShadow = "0 12px 36px #7c3aed88";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 6px 24px #7c3aed55";
            }}
          >
            View Projects ↓
          </button>
          <a
            href="mailto:ashiskumarmohanty738@gmail.com?subject=Hiring%20Opportunity&body=Hi%20Ashis%2C%0A%0AI'd%20love%20to%20connect%20regarding%20a%20potential%20opportunity."
            style={{
              padding: "12px 24px",
              borderRadius: 50,
              border: "1.5px solid rgba(167,139,250,0.45)",
              color: "#c4b5fd",
              fontWeight: 600,
              fontSize: "clamp(12px, 3.5vw, 14px)",
              textDecoration: "none",
              transition: "all 0.3s ease",
              letterSpacing: "0.04em",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(124,58,237,0.18)";
              e.currentTarget.style.borderColor = "#a78bfa";
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(167,139,250,0.45)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            ✉ Contact Me
          </a>
        </div>

        <div
          style={{
            display: "flex",
            gap: 28,
            justifyContent: "center",
            marginTop: 44,
            animation: "slideUp 0.9s ease 0.45s both",
            flexWrap: "wrap",
          }}
        >
          {[
            { n: "8.18", l: "CGPA" },
            { n: "10+", l: "Projects" },
            { n: "4+", l: "Internship" },
          ].map((s) => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "clamp(1.5rem, 5vw, 1.8rem)",
                  fontWeight: 900,
                  background: "linear-gradient(135deg,#a78bfa,#60a5fa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {s.n}
              </div>
              <div style={{ fontSize: "clamp(10px, 3vw, 11px)", color: "#6b7280", letterSpacing: "0.08em", marginTop: 2 }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}