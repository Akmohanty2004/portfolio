import { useEffect, useState } from "react";

export function Typewriter({ words }) {
  const [idx, setIdx] = useState(0);
  const [txt, setTxt] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[idx % words.length];
    const to = setTimeout(() => {
      if (!del) {
        setTxt(word.slice(0, txt.length + 1));
        if (txt.length + 1 === word.length) setTimeout(() => setDel(true), 1600);
      } else {
        setTxt(word.slice(0, txt.length - 1));
        if (txt.length - 1 === 0) {
          setDel(false);
          setIdx((i) => i + 1);
        }
      }
    }, del ? 55 : 80);
    return () => clearTimeout(to);
  }, [txt, del, idx, words]);

  return (
    <span style={{ color: "#a78bfa" }}>
      {txt}
      <span style={{ animation: "blink 1s step-end infinite", color: "#c4b5fd" }}>|</span>
    </span>
  );
}