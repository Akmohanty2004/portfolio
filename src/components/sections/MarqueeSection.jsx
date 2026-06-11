import { Reveal } from "../ui/Reveal";
import { Tag } from "../ui/Tag";
import { SvgIcon } from "../ui/SvgIcon";
import { SKILLS } from "../../constants/skills";

export function MarqueeSection() {
  return (
    <div
      style={{
        position: "relative",
        padding: "60px 0",
        overflow: "hidden",
        zIndex: 1,
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          opacity: 0.3,
        }}
      >
        <source src="https://spaceportfolio.netlify.app/videos/skills-bg.webm" type="video/webm" />
      </video>

      <div style={{ position: "relative", zIndex: 1 }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 28, padding: "0 16px" }}>
            <Tag>✦ Modern Tech Stack ✦</Tag>
            <h2
              style={{
                fontSize: "clamp(1.2rem, 5vw, 2rem)",
                fontWeight: 800,
                color: "#e2e8f0",
                marginTop: 8,
              }}
            >
              Making apps with modern technologies.
            </h2>
            <p style={{ fontStyle: "italic", color: "#7c3aed", fontSize: 13, marginTop: 5, opacity: 0.8 }}>
              Never miss a task, deadline, or idea.
            </p>
          </div>
        </Reveal>
        <div style={{ overflow: "hidden" }}>
          <div style={{ display: "flex", gap: 14, width: "max-content", animation: "marquee 28s linear infinite" }}>
            {[...SKILLS, ...SKILLS].map((ic, i) => (
              <div
                key={i}
                title={ic.name}
                style={{
                  flexShrink: 0,
                  width: 64,
                  height: 64,
                  padding: 10,
                  borderRadius: 14,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SvgIcon svg={ic.svg} size={38} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}