import { Reveal } from "../ui/Reveal";
import { Tag } from "../ui/Tag";
import { ProjectsCarousel } from "../carousel/ProjectsCarousel";
import { secHead } from "../../constants/constants";

export function Projects({ isDayMode }) {
  return (
    <section id="projects" style={{ padding: "clamp(60px, 10vw, 100px) 6%", position: "relative", zIndex: 1 }}>
      <Reveal>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <Tag isDayMode={isDayMode}>✦ What I've Built ✦</Tag>
          <h2 style={{ color: isDayMode ? "#e47f14cc" : "#6116eede", marginTop: 12, fontSize:35 }}>My Projects</h2>
          <p style={{ color: isDayMode ? "#64748b" : "#6b7280", marginTop: 12, fontSize: "clamp(13px, 4vw, 15px)" }}>
            Hover over cards for 3D effect · Click to flip through screenshots
          </p>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <ProjectsCarousel isDayMode={isDayMode} />
        </div>
      </Reveal>
      <Reveal delay={0.25}>
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a
            href="https://www.linkedin.com/in/ashis-kumar-mohanty-5340122ab"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              padding: "12px 32px",
              borderRadius: 50,
              border: isDayMode ? "1.5px solid rgba(234,179,8,0.5)" : "1.5px solid rgba(167,139,250,0.45)",
              color: isDayMode ? "#d97706" : "#c4b5fd",
              fontSize: "clamp(12px, 3.5vw, 14px)",
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.3s ease",
              letterSpacing: "0.04em",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = isDayMode ? "rgba(234,179,8,0.15)" : "rgba(124,58,237,0.2)";
              e.target.style.borderColor = isDayMode ? "#eab308" : "#a78bfa";
              e.target.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.borderColor = isDayMode ? "rgba(234,179,8,0.5)" : "rgba(167,139,250,0.45)";
              e.target.style.transform = "translateY(0)";
            }}
          >
            Explore More Projects ↗
          </a>
        </div>
      </Reveal>
    </section>
  );
}