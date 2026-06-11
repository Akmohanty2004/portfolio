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

export const secHead = {
  fontSize: "clamp(1.6rem, 5vw, 2.8rem)",
  fontWeight: 800,
  marginTop: 10,
  background: "linear-gradient(135deg,#fff 40%,#a78bfa)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};