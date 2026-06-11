import { useEffect, useRef } from "react";

export function SnakePreview() {
  const canvasRef = useRef(null);

  // Helper function for rounded rectangle
  const roundRect = (ctx, x, y, w, h, r) => {
    if (w < 2 * r) r = w / 2;
    if (h < 2 * r) r = h / 2;
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    return ctx;
  };

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    const W = (c.width = 320);
    const H = (c.height = 220);
    const CELL = 20;
    let snake = [
      { x: 8, y: 5 },
      { x: 7, y: 5 },
      { x: 6, y: 5 },
      { x: 5, y: 5 },
    ];
    let dir = { x: 1, y: 0 };
    let food = { x: 12, y: 7 };
    let score = 0;
    let frame = 0;
    let id;

    const rFood = () =>
      (food = {
        x: Math.floor(Math.random() * 14 + 1),
        y: Math.floor(Math.random() * 9 + 1),
      });

    const tick = () => {
      frame++;
      if (frame % 8 !== 0) {
        id = requestAnimationFrame(tick);
        return;
      }
      const head = {
        x: (snake[0].x + dir.x + 14) % 14,
        y: (snake[0].y + dir.y + 9) % 9,
      };
      const ate = head.x === food.x && head.y === food.y;
      snake = [head, ...snake.slice(0, ate ? undefined : -1)];
      if (ate) {
        score++;
        rFood();
      }
      const dx = food.x - snake[0].x,
        dy = food.y - snake[0].y;
      if (Math.abs(dx) > Math.abs(dy)) dir = { x: dx > 0 ? 1 : -1, y: 0 };
      else dir = { x: 0, y: dy > 0 ? 1 : -1 };

      ctx.fillStyle = "#050014";
      ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = "rgba(167,139,250,0.08)";
      for (let x = 0; x < 14; x++)
        for (let y = 0; y < 9; y++)
          ctx.fillRect(x * CELL + 9, y * CELL + 5, 2, 2);

      const pulse = 0.7 + 0.3 * Math.sin(Date.now() / 300);
      ctx.shadowBlur = 12 * pulse;
      ctx.shadowColor = "#f472b6";
      ctx.fillStyle = "#f472b6";
      ctx.beginPath();
      ctx.arc(
        food.x * CELL + CELL / 2 + 9,
        food.y * CELL + CELL / 2 + 5,
        5 * pulse,
        0,
        Math.PI * 2
      );
      ctx.fill();
      ctx.shadowBlur = 0;

      snake.forEach((s, i) => {
        const t = i / snake.length;
        const r = Math.round(34 + t * (168 - 34)),
          g = Math.round(211 + t * (85 - 211)),
          b = Math.round(238 + t * (247 - 238));
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.shadowBlur = i === 0 ? 16 : 0;
        ctx.shadowColor = "#22d3ee";
        ctx.beginPath();
        roundRect(
          ctx,
          s.x * CELL + 2 + 9,
          s.y * CELL + 2 + 5,
          CELL - 4,
          CELL - 4,
          i === 0 ? 6 : 4
        );
        ctx.fill();
        ctx.shadowBlur = 0;
      });
      ctx.fillStyle = "#a78bfa";
      ctx.font = "bold 13px monospace";
      ctx.fillText(`SCORE: ${score}`, 8, 16);
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, []);

  return <canvas ref={canvasRef} style={{ width: "100%", borderRadius: 12, display: "block" }} />;
}