import { Reveal } from "../ui/Reveal";
import { Tag } from "../ui/Tag";
import { SkillChip } from "./SkillChip";
import { SKILLS } from "../../constants/skills";
import { secHead } from "../../constants/constants";

export function Skills({ isDayMode }) {
  const skillGroups = [
    { group: "Languages", icons: SKILLS.filter((s) => ["Python", "Java", "JavaScript", "TypeScript"].includes(s.name)) },
    { group: "Front-End", icons: SKILLS.filter((s) => ["HTML5", "CSS3", "React", "Tailwind", "Bootstrap"].includes(s.name)) },
    { group: "Back-End & DB", icons: SKILLS.filter((s) => ["Node.js", "Express", "MySQL", "MongoDB"].includes(s.name)) },
    { group: "Tools & Platforms", icons: SKILLS.filter((s) => ["Docker", "GitHub", "AWS"].includes(s.name)) },
  ];

  return (
    <section
      id="skills"
      style={{
        padding: "clamp(60px, 10vw, 100px) 6%",
        position: "relative",
        zIndex: 1,
        background: isDayMode 
          ? "linear-gradient(180deg,transparent,rgba(234,179,8,0.05),transparent)"
          : "linear-gradient(180deg,transparent,rgba(124,58,237,0.04),transparent)",
      }}
    >
      <Reveal>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <Tag isDayMode={isDayMode}>✦ What I Know ✦</Tag>
<h2 style={{ color: isDayMode ? "#ffaa00e3" : "#1511f3e3", fontSize: "40px", fontWeight: "bolder" }}>
  My Skills & Technologies
</h2>          <p style={{ color: isDayMode ? "#64748b" : "#6b7280", marginTop: 12, fontSize: "clamp(13px, 4vw, 15px)" }}>
            Tools and technologies I work with every day
          </p>
        </div>
      </Reveal>
      {skillGroups.map((g, gi) => (
        <Reveal key={gi} delay={gi * 0.08}>
          <div style={{ marginBottom: 40 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 18,
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  color: isDayMode ? "#d97706" : "#7c3aed",
                  textTransform: "uppercase",
                  padding: "4px 12px",
                  borderRadius: 99,
                  background: isDayMode ? "rgba(234,179,8,0.12)" : "rgba(124,58,237,0.12)",
                  border: isDayMode ? "1px solid rgba(234,179,8,0.25)" : "1px solid rgba(124,58,237,0.25)",
                }}
              >
                {g.group}
              </span>
              <div
                style={{
                  flex: 1,
                  height: 1,
                  background: isDayMode 
                    ? "linear-gradient(90deg,rgba(234,179,8,0.3),transparent)"
                    : "linear-gradient(90deg,rgba(124,58,237,0.3),transparent)",
                  minWidth: 50,
                }}
              />
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
              {g.icons.map((ic) => (
                <SkillChip key={ic.name} icon={ic} isDayMode={isDayMode} />
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  );
}