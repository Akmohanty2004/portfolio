import { useState, useEffect } from "react";
import { StarField } from "./components/layout/StarField";
import { Nav } from "./components/layout/Nav";
import { Hero } from "./components/sections/Hero";
import { MarqueeSection } from "./components/sections/MarqueeSection";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Certifications } from "./components/sections/Certifications";
import { Contact } from "./components/sections/Contact";
import { theme } from "./constants/constants";
import "./styles/globals.css";

export default function App() {
  const [isDayMode, setIsDayMode] = useState(false);

  useEffect(() => {
    // Add roundRect to CanvasRenderingContext2D if not exists
    if (!CanvasRenderingContext2D.prototype.roundRect) {
      CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
        if (w < 2 * r) r = w / 2;
        if (h < 2 * r) r = h / 2;
        this.moveTo(x + r, y);
        this.lineTo(x + w - r, y);
        this.quadraticCurveTo(x + w, y, x + w, y + r);
        this.lineTo(x + w, y + h - r);
        this.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        this.lineTo(x + r, y + h);
        this.quadraticCurveTo(x, y + h, x, y + h - r);
        this.lineTo(x, y + r);
        this.quadraticCurveTo(x, y, x + r, y);
        return this;
      };
    }
  }, []);

  const toggleTheme = () => {
    setIsDayMode(!isDayMode);
  };

  const currentTheme = isDayMode ? theme.day : theme.night;

  return (
    <div
      className={isDayMode ? "day-mode" : "night-mode"}
      style={{
        fontFamily: "'Inter','Segoe UI',sans-serif",
        background: currentTheme.background,
        minHeight: "100vh",
        color: currentTheme.text,
        overflowX: "hidden",
        position: "relative",
      }}
    >
      {!isDayMode && <StarField />}
      {!isDayMode && <div className="matrix-bg"></div>}
      
      <Nav isDayMode={isDayMode} toggleTheme={toggleTheme} />

      <Hero isDayMode={isDayMode} />
      <MarqueeSection isDayMode={isDayMode} />
      <About isDayMode={isDayMode} />
      <Skills isDayMode={isDayMode} />
      <Projects isDayMode={isDayMode} />
      <Certifications isDayMode={isDayMode} />
      <Contact isDayMode={isDayMode} />
    </div>
  );
}