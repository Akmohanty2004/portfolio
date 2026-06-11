import { Reveal } from "../ui/Reveal";
import { Tag } from "../ui/Tag";
import { CertCard } from "../cards/CertCard";
import { secHead } from "../../constants/constants";

export function Certifications() {
  const certifications = [
    { title: "Industrial 4.0 & IoT", issuer: "NPTEL · IIT Kharagpur", color: "#f472b6", icon: "🏆" },
    { title: "Embedded System Design", issuer: "NPTEL · IIT Kharagpur", color: "#fb923c", icon: "🥇" },
    { title: "Networking Essentials", issuer: "CISCO · GIFT Bhubaneswar", color: "#34d399", icon: "🌐" },
  ];

  return (
    <section
      style={{
        padding: "clamp(60px, 8vw, 80px) 6%",
        background: "linear-gradient(180deg,transparent,rgba(99,102,241,0.05),transparent)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Reveal>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <Tag>✦ Achievements ✦</Tag>
          <h2
            style={{
              ...secHead,
              background: "linear-gradient(135deg,#fff 40%,#f472b6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Certifications
          </h2>
        </div>
      </Reveal>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 20,
          justifyContent: "center",
          maxWidth: 860,
          margin: "0 auto",
        }}
      >
        {certifications.map((c, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <CertCard cert={c} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}