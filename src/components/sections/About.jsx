import { Reveal } from "../ui/Reveal";
import { Tag } from "../ui/Tag";
import { JourneyCard } from "../cards/JourneyCard";
import { secHead } from "../../constants/constants";

export function About({ isDayMode }) {
  const journeyItems = [
    {
      period: "2025 – 2026",
      title: "Software Engineer Intern",
      place: "ASP OL MEDIA PVT. LTD, Nagpur",
      desc: "Email marketing tools (SMTP, BIRD, UNLAYER) — designed & tested templates for international clients.",
      color: isDayMode ? "#eab308" : "#a78bfa",
      icon: "💼",
    },
    {
      period: "2025",
      title: "Scientific Calculator",
      place: "Techzex Pvt. Ltd",
      desc: "The central aim of the project was to test the hypothesis that providing a calculator would improve students' performance in those parts of the undergraduate first-year that relied on formal reasoning skills.",
      color: isDayMode ? "#f59e0b" : "#22d3ee",
      icon: "📱",
    },
    {
      period: "2024",
      title: "Object Detection Model",
      place: "CTTC, Bhubaneswar",
      desc: "Created a model to detect objects by collecting data. Collected 200 photos of one object, total 5 different types of objects. Used webcam for better visualization and proper lighting.",
      color: isDayMode ? "#f97316" : "#f472b6",
      icon: "👁️",
    },
    {
      period: "2022 – 2026",
      title: "B.Tech – Computer Science Eng.",
      place: "Gandhi Institute for Technology, Bhubaneswar",
      desc: "CGPA 8.18 · DSA, DBMS, OS, Networking, and modern full-stack web development.",
      color: isDayMode ? "#3b82f6" : "#60a5fa",
      icon: "🎓",
    },
  ];

  return (
    <section id="about" style={{ padding: "clamp(60px, 10vw, 100px) 6%", position: "relative", zIndex: 1 }}>
      <Reveal>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <Tag isDayMode={isDayMode}>✦ About Me ✦</Tag>
          <h2
  style={{
    color: isDayMode ? "#ffaa00e3" : "#1511f3e3",
   fontSize:40, fontWeight:"bolder"}}
>
  My Journey
</h2>
          
        </div>
      </Reveal>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: 22,
          maxWidth: 1000,
          margin: "0 auto",
        }}
      >
        {journeyItems.map((item, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <JourneyCard item={item} isDayMode={isDayMode} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}