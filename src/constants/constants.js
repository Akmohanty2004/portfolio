export const FLOATS = [
  { k: "React", top: "6%", right: "36%", size: 52, anim: "float1", d: 0 },
  { k: "JavaScript", top: "13%", right: "18%", size: 58, anim: "float2", d: 0.4 },
  { k: "TypeScript", top: "30%", right: "12%", size: 52, anim: "float3", d: 0.8 },
  { k: "Python", top: "50%", right: "20%", size: 48, anim: "float1", d: 1.2 },
  { k: "Node.js", top: "62%", right: "38%", size: 46, anim: "float2", d: 0.6 },
  { k: "MongoDB", top: "75%", right: "15%", size: 44, anim: "float3", d: 1 },
  { k: "Docker", top: "82%", right: "34%", size: 46, anim: "float1", d: 1.4 },
  { k: "GitHub", top: "40%", right: "43%", size: 42, anim: "float2", d: 0.2 },
  { k: "AWS", top: "20%", right: "42%", size: 46, anim: "float3", d: 1.6 },
];

export const hexRgb = (h) => {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h);
  return r ? `${parseInt(r[1], 16)},${parseInt(r[2], 16)},${parseInt(r[3], 16)}` : "255,255,255";
};

export const secHead = (isDayMode) => ({
  fontSize: "clamp(1.6rem, 5vw, 2.8rem)",
  fontWeight: 800,
  marginTop: 10,
  background: isDayMode 
    ? "linear-gradient(135deg,#1e293b 40%,#eab308)" 
    : "linear-gradient(135deg,#fff 40%,#a78bfa)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

export const theme = {
  night: {
    primary: "#7c3aed",
    secondary: "#4f46e5",
    accent: "#a78bfa",
    background: "linear-gradient(160deg,#030010 0%,#080022 40%,#030010 100%)",
    cardBg: "rgba(255,255,255,0.03)",
    cardBorder: "rgba(255,255,255,0.08)",
    text: "#fff",
    textSecondary: "#9ca3af",
    glow: "#7c3aed66",
    buttonGradient: "linear-gradient(135deg,#7c3aed,#4f46e5)",
    skillBg: "rgba(255,255,255,0.03)",
    skillBorder: "rgba(255,255,255,0.07)",
    navbarBg: "rgba(5,0,20,0.95)",
    tagBg: "rgba(99,102,241,0.1)",
    tagBorder: "rgba(99,102,241,0.2)",
    tagColor: "#6366f1",
  },
  day: {
    primary: "#eab308",
    secondary: "#f59e0b",
    accent: "#f97316",
    background: "linear-gradient(135deg,#fef3c7 0%,#fffbeb 30%,#fef9c3 100%)",
    cardBg: "rgba(255,255,255,0.8)",
    cardBorder: "rgba(0,0,0,0.1)",
    text: "#1e293b",
    textSecondary: "#475569",
    glow: "#eab30866",
    buttonGradient: "linear-gradient(135deg,#eab308,#f59e0b)",
    skillBg: "rgba(255,255,255,0.6)",
    skillBorder: "rgba(0,0,0,0.1)",
    navbarBg: "rgba(255,255,255,0.95)",
    tagBg: "rgba(234,179,8,0.15)",
    tagBorder: "rgba(234,179,8,0.3)",
    tagColor: "#d97706",
  },
};