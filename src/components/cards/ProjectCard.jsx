import { useState, useRef, useEffect } from "react";
import { SnakePreview } from "../snake/SnakePreview";

export function ProjectCard({ proj, idx, isDayMode }) {
  const [imgIdx, setImgIdx] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const [showSnake, setShowSnake] = useState(proj.hasSnake);
  const [hov, setHov] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});
  const cardRef = useRef(null);

  useEffect(() => {
    if (!proj.hasSnake || !showSnake) {
      proj.images.forEach((src, i) => {
        const img = new Image();
        img.src = src;
        img.onload = () => setLoadedImages((prev) => ({ ...prev, [i]: true }));
      });
    }
  }, [proj.images, proj.hasSnake, showSnake]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXVal = ((y - centerY) / centerY) * -10;
    const rotateYVal = ((x - centerX) / centerX) * 10;
    setRotateX(rotateXVal);
    setRotateY(rotateYVal);
  };

  const handleMouseLeave = () => {
    setHov(false);
    setRotateX(0);
    setRotateY(0);
  };

  const nextImg = () => {
    if (flipping) return;
    if (proj.hasSnake && showSnake) {
      setFlipping(true);
      setTimeout(() => {
        setShowSnake(false);
        setImgIdx(0);
        setFlipping(false);
      }, 400);
      return;
    }
    setFlipping(true);
    setTimeout(() => {
      setImgIdx((i) => (i + 1) % proj.images.length);
      setFlipping(false);
    }, 400);
  };

  const prevImg = () => {
    if (flipping) return;
    setFlipping(true);
    setTimeout(() => {
      setImgIdx((i) => (i - 1 + proj.images.length) % proj.images.length);
      setFlipping(false);
    }, 400);
  };

  const iconMap = ["🐍", "🏠", "🗑️", "👁️"];

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{
        borderRadius: 24,
        background: hov
          ? isDayMode
            ? `linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))`
            : `linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`
          : isDayMode
            ? `linear-gradient(145deg, rgba(255,255,255,0.8), rgba(255,255,255,0.6))`
            : `linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))`,
        border: isDayMode
          ? `1.5px solid ${hov ? proj.color + "aa" : "rgba(0,0,0,0.15)"}`
          : `1.5px solid ${hov ? proj.color + "88" : "rgba(255,255,255,0.1)"}`,
        transform: hov
          ? `translateY(-14px) scale(1.02) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
          : "translateY(0) scale(1) perspective(1000px) rotateX(0deg) rotateY(0deg)",
        transition: "transform 0.3s cubic-bezier(.34,1.56,.64,1), background 0.3s",
        boxShadow: hov 
          ? isDayMode
            ? `0 30px 80px rgba(0,0,0,0.15), 0 0 0 1px ${proj.color}66`
            : `0 30px 80px ${proj.glow}, 0 0 0 1px ${proj.color}44`
          : isDayMode
            ? "0 8px 32px rgba(0,0,0,0.1)"
            : "0 8px 32px rgba(0,0,0,0.4)",
        overflow: "hidden",
        cursor: "pointer",
        backdropFilter: isDayMode ? "none" : "blur(4px)",
      }}
    >
      <div
        style={{
          position: "relative",
          height: 350,
          overflow: "hidden",
          background: isDayMode ? "rgba(255,255,255,0.5)" : "rgba(5,0,20,0.5)",
        }}
        onClick={nextImg}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            transform: flipping
              ? "perspective(800px) rotateY(-90deg)"
              : "perspective(800px) rotateY(0deg)",
            transformOrigin: "left center",
            transition: "transform 0.4s cubic-bezier(.4,0,.2,1)",
          }}
        >
          {showSnake ? (
            <div style={{ padding: "10px 0 0", background: "#050014", height: "100%" }}>
              <SnakePreview />
            </div>
          ) : (
            <div style={{ width: "100%", height: "100%", position: "relative", background: isDayMode ? "#fef9c3" : "#0a0a1a" }}>
              {!loadedImages[imgIdx] && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0,0,0,0.5)",
                    color: isDayMode ? "#d97706" : "#a78bfa",
                    fontSize: 14,
                  }}
                >
                  Loading...
                </div>
              )}
              <img
                src={proj.images[imgIdx]}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  opacity: loadedImages[imgIdx] ? 1 : 0,
                  transition: "opacity 0.2s ease",
                }}
                loading="eager"
              />
            </div>
          )}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: isDayMode
                ? `linear-gradient(to bottom, transparent 30%, rgba(255,255,255,0.9))`
                : `linear-gradient(to bottom, transparent 30%, rgba(5,0,30,0.95))`,
            }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 10,
            right: 12,
            fontSize: 11,
            color: isDayMode ? "#475569" : "rgba(255,255,255,0.5)",
            background: isDayMode ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.5)",
            padding: "3px 8px",
            borderRadius: 20,
            backdropFilter: "blur(4px)",
            pointerEvents: "none",
          }}
        >
          {showSnake ? "▶ click for screenshots" : `${imgIdx + 1}/${proj.images.length} · click →`}
        </div>

        {!showSnake && (
          <div
            style={{
              position: "absolute",
              bottom: 10,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: 5,
            }}
          >
            {proj.images.map((_, i) => (
              <div
                key={i}
                style={{
                  width: i === imgIdx ? 18 : 6,
                  height: 6,
                  borderRadius: 3,
                  background: i === imgIdx ? proj.color : (isDayMode ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.3)"),
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>
        )}

        <span
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            fontSize: 10,
            padding: "4px 10px",
            borderRadius: 20,
            background: isDayMode ? `${proj.color}33` : `${proj.color}22`,
            border: `1px solid ${isDayMode ? proj.color + "99" : proj.color + "55"}`,
            color: isDayMode ? proj.color : proj.color,
            letterSpacing: "0.06em",
            fontWeight: 600,
            backdropFilter: "blur(8px)",
          }}
        >
          {proj.tech}
        </span>

        {!showSnake && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImg();
              }}
              style={{
                position: "absolute",
                left: 8,
                top: "50%",
                transform: "translateY(-50%)",
                width: 28,
                height: 28,
                borderRadius: "50%",
                border: "none",
                background: isDayMode ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.6)",
                color: isDayMode ? "#1e293b" : "#fff",
                cursor: "pointer",
                fontSize: 14,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(4px)",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = isDayMode ? proj.color : `${proj.color}88`)}
              onMouseLeave={(e) => (e.currentTarget.style.background = isDayMode ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.6)")}
            >
              ‹
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImg();
              }}
              style={{
                position: "absolute",
                right: 8,
                top: "50%",
                transform: "translateY(-50%)",
                width: 28,
                height: 28,
                borderRadius: "50%",
                border: "none",
                background: isDayMode ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.6)",
                color: isDayMode ? "#1e293b" : "#fff",
                cursor: "pointer",
                fontSize: 14,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(4px)",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = isDayMode ? proj.color : `${proj.color}88`)}
              onMouseLeave={(e) => (e.currentTarget.style.background = isDayMode ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.6)")}
            >
              ›
            </button>
          </>
        )}
      </div>

      <div style={{ padding: "20px 22px 24px", background: isDayMode ? "rgba(255,255,255,0.6)" : "rgba(5,0,20,0.3)" }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: isDayMode ? `linear-gradient(135deg,${proj.color}66,${proj.color}33)` : `linear-gradient(135deg,${proj.color}44,${proj.color}22)`,
              border: `1px solid ${isDayMode ? proj.color + "99" : proj.color + "44"}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
              flexShrink: 0,
            }}
          >
            {iconMap[idx]}
          </div>
          <h3
            style={{
              fontSize: 16,
              fontWeight: 800,
              margin: 0,
              lineHeight: 1.3,
              color: isDayMode ? "#ff8800d5" : "#3c00ffe3",
              WebkitBackgroundClip: "text",
              
            }}
          >
            {proj.title}
          </h3>
        </div>
        <p style={{ fontSize: 13, lineHeight: 1.7, color: isDayMode ? "#475569" : "#9ca3af", margin: 0 }}>
          {proj.desc}
        </p>
      </div>
    </div>
  );
}