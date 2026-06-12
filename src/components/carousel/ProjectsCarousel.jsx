import { useState } from "react";
import { ProjectCard } from "../cards/ProjectCard";
import { NavBtn } from "../ui/NavBtn";
import { PROJECTS } from "../../constants/projects";

export function ProjectsCarousel({ isDayMode }) {
  const [curr, setCurr] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const total = PROJECTS.length;

  const prev = () => setCurr((c) => (c - 1 + total) % total);
  const next = () => setCurr((c) => (c + 1) % total);

  const onDragStart = (e) => {
    setDragging(true);
    setStartX(e.clientX || e.touches?.[0]?.clientX || 0);
  };
  const onDragEnd = (e) => {
    if (!dragging) return;
    setDragging(false);
    const x = e.clientX || e.changedTouches?.[0]?.clientX || 0;
    if (startX - x > 50) next();
    else if (x - startX > 50) prev();
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        onMouseDown={onDragStart}
        onMouseUp={onDragEnd}
        onTouchStart={onDragStart}
        onTouchEnd={onDragEnd}
        style={{ overflow: "hidden", borderRadius: 24 }}
      >
        <div
          style={{
            display: "flex",
            transform: `translateX(calc(-${curr * 100}%))`,
            transition: "transform 0.6s cubic-bezier(.77,0,.18,1)",
          }}
        >
          {PROJECTS.map((p, i) => (
            <div key={i} style={{ minWidth: "100%", padding: "0 4px" }}>
              <ProjectCard proj={p} idx={i} isDayMode={isDayMode} />
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          marginTop: 24,
        }}
      >
        <NavBtn onClick={prev} dir="left" isDayMode={isDayMode} />
        <div style={{ display: "flex", gap: 8 }}>
          {PROJECTS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurr(i)}
              style={{
                width: i === curr ? 32 : 8,
                height: 8,
                borderRadius: 4,
                border: "none",
                cursor: "pointer",
                background:
                  i === curr
                    ? isDayMode
                      ? `linear-gradient(90deg,${PROJECTS[i].color},${PROJECTS[(i + 1) % total].color})`
                      : `linear-gradient(90deg,${PROJECTS[i].color},${PROJECTS[(i + 1) % total].color})`
                    : isDayMode
                      ? "rgba(0,0,0,0.2)"
                      : "rgba(255,255,255,0.15)",
                transition: "all 0.4s cubic-bezier(.34,1.56,.64,1)",
                padding: 0,
              }}
            />
          ))}
        </div>
        <NavBtn onClick={next} dir="right" isDayMode={isDayMode} />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 12,
          marginTop: 28,
        }}
      >
        {PROJECTS.map((p, i) => (
          <button
            key={i}
            onClick={() => setCurr(i)}
            style={{
              borderRadius: 14,
              overflow: "hidden",
              border: "none",
              cursor: "pointer",
              outline: i === curr ? `2px solid ${p.color}` : "2px solid transparent",
              opacity: i === curr ? 1 : 0.45,
              transform: i === curr ? "scale(1.05)" : "scale(1)",
              transition: "all 0.35s ease",
              padding: 0,
              position: "relative",
              height: 72,
            }}
          >
            {p.hasSnake && i === curr ? (
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: isDayMode ? "#fef9c3" : "#050014",
                  fontSize: 22,
                }}
              >
                🐍
              </div>
            ) : (
              <img src={p.images[0]} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            )}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `linear-gradient(to top,${p.color}88,transparent)`,
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}