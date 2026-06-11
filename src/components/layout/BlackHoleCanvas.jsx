import { useEffect, useRef } from "react";

export function BlackHoleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    let id, t = 0;
    
    const resize = () => {
      c.width = c.offsetWidth;
      c.height = c.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const planet = { angle: 0, orbitA: 220, orbitB: 60, cx: 0, cy: 0, r: 14, inHole: false, reset: 0 };

    const draw = () => {
      t += 0.008;
      ctx.clearRect(0, 0, c.width, c.height);
      const cx = c.width * 0.72, cy = c.height * 0.38;
      planet.cx = cx;
      planet.cy = cy;

      const diskR = 90;
      [-1, 1].forEach((side) => {
        const g = ctx.createRadialGradient(cx, cy, diskR * 0.3, cx, cy, diskR);
        g.addColorStop(0, "rgba(167,139,250,0.35)");
        g.addColorStop(0.4, "rgba(99,102,241,0.18)");
        g.addColorStop(1, "transparent");
        ctx.save();
        ctx.translate(cx, cy);
        ctx.scale(1, 0.28);
        ctx.translate(-cx, -cy);
        ctx.beginPath();
        ctx.arc(cx, cy, diskR, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
        ctx.restore();
      });

      for (let ring = 3; ring >= 1; ring--) {
        ctx.beginPath();
        ctx.arc(cx, cy, diskR + ring * 18, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(124,58,237,${0.04 * ring})`;
        ctx.lineWidth = ring * 10;
        ctx.stroke();
      }

      const pr = ctx.createRadialGradient(cx, cy, 60, cx, cy, 76);
      pr.addColorStop(0, "rgba(255,200,80,0.5)");
      pr.addColorStop(0.5, "rgba(255,140,0,0.25)");
      pr.addColorStop(1, "transparent");
      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(1, 0.32);
      ctx.translate(-cx, -cy);
      ctx.beginPath();
      ctx.arc(cx, cy, 70, 0, Math.PI * 2);
      ctx.fillStyle = pr;
      ctx.fill();
      ctx.restore();

      const bhg = ctx.createRadialGradient(cx, cy, 0, cx, cy, 60);
      bhg.addColorStop(0, "rgba(0,0,0,1)");
      bhg.addColorStop(0.7, "rgba(5,0,20,0.95)");
      bhg.addColorStop(1, "transparent");
      ctx.beginPath();
      ctx.arc(cx, cy, 60, 0, Math.PI * 2);
      ctx.fillStyle = bhg;
      ctx.fill();

      for (let i = 0; i < 80; i++) {
        const ang = i * 0.43 + t * 0.5;
        const r2 = 30 + i * 2.2;
        const stretch = 1 - Math.min(r2 / 220, 0.85);
        const sx = cx + Math.cos(ang) * r2;
        const sy = cy + Math.sin(ang) * r2 * 0.28;
        const op = 0.08 + 0.25 * stretch * (0.5 + 0.5 * Math.sin(t * 3 + i));
        ctx.beginPath();
        ctx.arc(sx, sy, 0.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,180,255,${op})`;
        ctx.fill();
      }

      if (!planet.inHole) {
        planet.angle += 0.012;
        const shrink = 1 - Math.max(0, Math.min(1, (planet.angle - 6) / 10));
        const r3 = planet.orbitA * shrink + 62;
        const px = cx + Math.cos(planet.angle) * r3;
        const py = cy + Math.sin(planet.angle) * r3 * 0.42;
        const ps = planet.r * shrink;

        ctx.shadowBlur = 20 * shrink;
        ctx.shadowColor = "#22d3ee";
        const pg = ctx.createRadialGradient(px, py, 0, px, py, ps * 2);
        pg.addColorStop(0, "rgba(34,211,238,0.9)");
        pg.addColorStop(0.5, "rgba(99,102,241,0.7)");
        pg.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(px, py, ps * 1.6, 0, Math.PI * 2);
        ctx.fillStyle = pg;
        ctx.fill();
        ctx.shadowBlur = 0;

        const pbg = ctx.createRadialGradient(px - ps * 0.3, py - ps * 0.3, 0, px, py, ps);
        pbg.addColorStop(0, "#7dd3fc");
        pbg.addColorStop(0.5, "#3b82f6");
        pbg.addColorStop(1, "#1e3a8a");
        ctx.beginPath();
        ctx.arc(px, py, ps, 0, Math.PI * 2);
        ctx.fillStyle = pbg;
        ctx.fill();

        if (shrink > 0.4) {
          ctx.save();
          ctx.translate(px, py);
          ctx.scale(1, 0.3);
          ctx.translate(-px, -py);
          ctx.beginPath();
          ctx.arc(px, py, ps * 1.8, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(125,211,252,${0.5 * shrink})`;
          ctx.lineWidth = 2;
          ctx.stroke();
          ctx.restore();
        }

        if (planet.angle > 16) {
          planet.inHole = true;
          planet.reset = t + 2;
        }
      } else if (t > planet.reset) {
        planet.inHole = false;
        planet.angle = 0;
      } else {
        const fl = Math.max(0, 1 - (t - planet.reset + 2) * 3);
        if (fl > 0) {
          ctx.beginPath();
          ctx.arc(cx, cy, 60 * fl, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(34,211,238,${fl * 0.3})`;
          ctx.fill();
        }
      }

      ctx.save();
      for (let a = 0; a < 12; a++) {
        const ang2 = a * (Math.PI / 6) + t * 0.1;
        const x1 = cx + Math.cos(ang2) * 72, y1 = cy + Math.sin(ang2) * 24;
        const x2 = cx + Math.cos(ang2) * 160, y2 = cy + Math.sin(ang2) * 55;
        const gl = ctx.createLinearGradient(x1, y1, x2, y2);
        gl.addColorStop(0, "rgba(167,139,250,0.12)");
        gl.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = gl;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      ctx.restore();

      id = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}