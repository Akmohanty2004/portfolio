import { useState, useEffect, useRef, useCallback } from "react";

/* ═══════════════════════════════════════════════════════════
   INLINE SVG ICONS — zero external dependency (FULLY FIXED)
═══════════════════════════════════════════════════════════ */
const SVG = {
  HTML5:`<svg viewBox="0 0 32 32"><path d="M5.902 27.201L3.655 2h24.69l-2.25 25.2L16 30z" fill="#e44d26"/><path d="M16 27.858l8.17-2.265 1.922-21.532H16z" fill="#f16529"/><path d="M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.759 9.347H16zm0 8.562l-.014.004-3.442-.929-.22-2.465H9.221l.433 4.852 6.332 1.758z" fill="#ebebeb"/><path d="M16 13.407v3.091h3.806l-.358 4.009-3.448.93v3.216l6.337-1.755.726-8.137.076-.832zm0-6.256v3.091h7.466l.215-2.261.074-.83z" fill="#fff"/></svg>`,
  CSS3:`<svg viewBox="0 0 32 32"><path d="M5.902 27.201L3.655 2h24.69l-2.25 25.2L16 30z" fill="#1572b6"/><path d="M16 27.858l8.17-2.265 1.922-21.532H16z" fill="#33a9dc"/><path d="M16 13.191h4.09l.282-3.165H16V6.935H23.75l-.759 9.347H16zm0 8.778l-.014.004-3.442-.929-.22-2.465H9.221l.433 4.852 6.332 1.758z" fill="#ebebeb"/><path d="M16 13.191v3.091h-3.806l.358 4.009 3.448.929v3.216l-6.337-1.755-.726-8.137-.076-.832zm0 8.778v-3.216l3.228.871.22 2.465z" fill="#fff"/></svg>`,
  JS:`<svg viewBox="0 0 32 32"><path d="M2 2h28v28H2z" fill="#f0db4f"/><path d="M20.809 23.875a2.866 2.866 0 002.6 1.6c1.09 0 1.787-.545 1.787-1.3 0-.9-.716-1.222-1.916-1.747l-.658-.282c-1.9-.809-3.16-1.822-3.16-3.964 0-1.973 1.5-3.476 3.853-3.476a3.889 3.889 0 013.742 2.107l-2.048 1.315a1.789 1.789 0 00-1.694-1.128 1.149 1.149 0 00-1.262 1.128c0 .789.487 1.109 1.615 1.6l.658.282c2.236.957 3.5 1.934 3.5 4.124 0 2.363-1.857 3.664-4.353 3.664a5.038 5.038 0 01-4.772-2.691zm-9.295.228c.413.733.789 1.353 1.693 1.353.864 0 1.41-.338 1.41-1.653v-8.947h2.52v8.984c0 2.724-1.598 3.964-3.927 3.964a4.085 4.085 0 01-3.964-2.447z" fill="#323330"/></svg>`,
  TS:`<svg viewBox="0 0 32 32"><path d="M2 2h28v28H2z" fill="#3178c6"/><path d="M14.988 22.859v2.516a6.558 6.558 0 001.7.482 11.717 11.717 0 001.989.164 9.638 9.638 0 001.931-.186 4.8 4.8 0 001.585-.6 3.065 3.065 0 001.079-1.087 3.225 3.225 0 00.4-1.666 3.19 3.19 0 00-.233-1.265 2.978 2.978 0 00-.668-.967 5.2 5.2 0 00-1.052-.775 12.081 12.081 0 00-1.381-.642q-.562-.219-.984-.416a3.78 3.78 0 01-.7-.4 1.567 1.567 0 01-.42-.45 1.07 1.07 0 01-.14-.546 1 1 0 01.14-.526 1.222 1.222 0 01.4-.4 2.014 2.014 0 01.628-.255 3.716 3.716 0 01.82-.085 5.087 5.087 0 01.713.051 5.86 5.86 0 01.706.154 5.2 5.2 0 01.665.258 3.6 3.6 0 01.563.361v-2.361a8.109 8.109 0 00-1.394-.379 9.485 9.485 0 00-1.723-.141 9.384 9.384 0 00-1.9.187 4.816 4.816 0 00-1.572.593 3.017 3.017 0 00-1.073 1.063 3.075 3.075 0 00-.394 1.607 3.133 3.133 0 00.749 2.145 5.756 5.756 0 002.255 1.44q.589.232 1.075.45a5.028 5.028 0 01.8.441 1.867 1.867 0 01.5.514 1.186 1.186 0 01.171.645 1.076 1.076 0 01-.156.573 1.3 1.3 0 01-.449.427 2.344 2.344 0 01-.7.266 4.379 4.379 0 01-.906.088 5.064 5.064 0 01-1.748-.317 5.28 5.28 0 01-1.539-.895zm-4.5-7.709h3.75v-2.16H5.003v2.16h3.737v10.822h2.748z" fill="#fff"/></svg>`,
  PY:`<svg viewBox="0 0 32 32"><path d="M15.885 2.1c-7.1 0-6.651 3.07-6.651 3.07v3.19h6.752v1H6.545S2 8.8 2 15.993s4.013 6.912 4.013 6.912H8.33v-3.361s-.13-4.013 3.9-4.013h6.762s3.772.06 3.772-3.652V5.8s.572-3.7-6.879-3.7zm-3.741 2.137a1.214 1.214 0 11-1.214 1.214 1.214 0 011.214-1.214z" fill="#387eb8"/><path d="M16.085 29.9c7.1 0 6.651-3.07 6.651-3.07v-3.19h-6.752v-1h9.441S30 23.2 30 16.007s-4.013-6.912-4.013-6.912H23.67v3.361s.13 4.013-3.9 4.013h-6.762s-3.772-.06-3.772 3.652v6.079S8.664 29.9 16.085 29.9zm3.741-2.137a1.214 1.214 0 111.214-1.214 1.214 1.214 0 01-1.214 1.214z" fill="#ffc331"/></svg>`,
  JAVA:`<svg viewBox="0 0 32 32"><path d="M11.914 22.754s-1.12.65.8.87a16.986 16.986 0 005.177-.211 9.39 9.39 0 001.412.694c-5.02 2.152-11.367-.125-7.389-1.353zm-.681-2.966s-1.257.93.662 1.129a23.578 23.578 0 006.873-.33 3.1 3.1 0 001.056.649c-6.085 1.779-12.861.14-8.591-1.448z" fill="#ea2d2e"/><path d="M16.674 14.81c1.24 1.427-.325 2.712-.325 2.712s3.149-1.625 1.7-3.658c-1.351-1.9-2.387-2.845 3.22-6.1 0 0-8.8 2.2-4.595 7.046z" fill="#f58220"/><path d="M22.664 25.1s.828.683-.912 1.209c-3.308 1.005-13.77 1.308-16.677.04-1.044-.455.914-1.085 1.528-1.218a3.968 3.968 0 011.017-.114c-1.17-.823-7.558 1.618-3.244 2.318C15.136 29.242 24.821 26.477 22.664 25.1zm-10.2-7.426s-5.36 1.274-1.9 1.737a39.979 39.979 0 005.364-.058c1.677-.142 3.362-.445 3.362-.445s-.591.252-1.019.543c-4.11 1.082-12.046.579-9.759-.525 1.93-.924 3.952-.252 3.952-.252zm7.271 4.062c4.178-2.172 2.247-4.259.9-3.979a3.092 3.092 0 00-.476.133 1.307 1.307 0 01.223-.342c1.66-1.85 4.66.48 2.671 3.024a1.558 1.558 0 01-.318.164z" fill="#ea2d2e"/><path d="M17.453 2s3.065 3.062-2.907 7.769c-4.785 3.777-1.091 5.929 0 8.389-2.791-2.517-4.839-4.73-3.462-6.79C13.099 8.343 18.684 6.875 17.453 2z" fill="#f58220"/><path d="M12.1 29.963c4.008.257 10.163-.142 10.306-2.045 0 0-.28 1.72-4.1 3.09a15.818 15.818 0 01-9.986-.337s.508.42 3.78 1.292z" fill="#ea2d2e"/></svg>`,
  REACT:`<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="3" fill="#61dafb"/><ellipse cx="16" cy="16" rx="14" ry="5.5" fill="none" stroke="#61dafb" stroke-width="1.5"/><ellipse cx="16" cy="16" rx="14" ry="5.5" fill="none" stroke="#61dafb" stroke-width="1.5" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="14" ry="5.5" fill="none" stroke="#61dafb" stroke-width="1.5" transform="rotate(120 16 16)"/></svg>`,
  TW:`<svg viewBox="0 0 32 32"><path d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9Q11.1 10.9 9 13.7zM2 22.1q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1z" fill="#38bdf8"/></svg>`,
  BS:`<svg viewBox="0 0 32 32"><rect width="32" height="32" rx="4" fill="#563d7c"/><path d="M10 8h7.5a5 5 0 013.5 8.5A5.5 5.5 0 0117 27H10zm4 4v5h3a2.5 2.5 0 000-5zm0 9v5.5h3.5a2.75 2.75 0 000-5.5z" fill="#fff"/></svg>`,
  NODE:`<svg viewBox="0 0 32 32"><path d="M16 3l12 6.9v13.8L16 30 4 23.7V9.9z" fill="#3c873a"/><path d="M16 7l8 4.6v9.2L16 25l-8-4.2v-9.2z" fill="#3c873a" opacity=".4"/><path d="M13 19.5c0 1.7 1 2.5 2.5 2.5s2.5-.8 2.5-2.5v-7h-2v7c0 .3-.2.5-.5.5s-.5-.2-.5-.5V19h-2z" fill="#fff"/></svg>`,
  EXPRESS:`<svg viewBox="0 0 32 32"><path d="M2.4 15.4l.98-4.57C5.58 5.97 11.52 3.45 16.73 5.99c3.175 1.53 4.676 4.198 4.923 7.63.107 1.5.013 3.012.013 4.57H3.233c-.169 4.04 2.322 6.438 6.435 6.199 1.812-.105 3.358-.7 4.633-2.008.44-.454.815-.552 1.382-.3l-1.898 2.388c-2.863 2.222-7.765 2.22-10.67-.004C.704 22.573.08 20.043.306 15.427zm1.976-.886h15.21c-.09-3.942-2.635-6.62-6.897-6.622-4.502-.004-7.814 2.947-8.313 6.622zM20.809 23.875a2.866 2.866 0 002.6 1.6c1.09 0 1.787-.545 1.787-1.3 0-.9-.716-1.222-1.916-1.747l-.658-.282c-1.9-.809-3.16-1.822-3.16-3.964 0-1.973 1.5-3.476 3.853-3.476a3.889 3.889 0 013.742 2.107l-2.048 1.315a1.789 1.789 0 00-1.694-1.128 1.149 1.149 0 00-1.262 1.128c0 .789.487 1.109 1.615 1.6l.658.282c2.236.957 3.5 1.934 3.5 4.124 0 2.363-1.857 3.664-4.353 3.664a5.038 5.038 0 01-4.772-2.691z" fill="#aaa"/></svg>`,
  MYSQL:`<svg viewBox="0 0 32 32"><path d="M2 16c0-3.86 3.14-7 7-7h14c3.86 0 7 3.14 7 7s-3.14 7-7 7H9c-3.86 0-7-3.14-7-7z" fill="#00758f" opacity=".15"/><path d="M5 10h3v12H5zm4.5 0h3l4 8 4-8h3v12h-3v-7l-3 6h-2l-3-6v7h-3z" fill="#00758f"/><path d="M25.5 16c0 2.5-2 4.5-4.5 4.5S16.5 18.5 16.5 16s2-4.5 4.5-4.5 4.5 2 4.5 4.5z" fill="#f29111" opacity=".8"/></svg>`,
  MONGO:`<svg viewBox="0 0 32 32"><path d="M16 2c-1.2 2-2 3.5-2 6 0 3 1.5 5 2 6.5C16.5 13 18 11 18 8c0-2.5-.8-4-2-6z" fill="#599636"/><path d="M16 14.5v15.5c3.5-1 6-5 6-10s-2.5-9-6-5.5z" fill="#6cac48"/><path d="M16 14.5v15.5c-3.5-1-6-5-6-10s2.5-9 6-5.5z" fill="#599636"/></svg>`,
  DOCKER:`<svg viewBox="0 0 32 32"><rect x="2" y="14" width="5" height="4" rx="1" fill="#099cec"/><rect x="8" y="14" width="5" height="4" rx="1" fill="#099cec"/><rect x="14" y="14" width="5" height="4" rx="1" fill="#099cec"/><rect x="8" y="9" width="5" height="4" rx="1" fill="#099cec"/><rect x="14" y="9" width="5" height="4" rx="1" fill="#099cec"/><rect x="14" y="4" width="5" height="4" rx="1" fill="#099cec"/><rect x="20" y="9" width="5" height="4" rx="1" fill="#099cec"/><path d="M29 16.5c-.5-1-2-1.5-3.5-1.5-.5-2-2-3.5-4-4l-.7.7c1.5.8 2 2 2.2 3.3H2.5A14 14 0 002 18c0 4 3 7.5 7 8.5 3 .8 7 .5 10-1.5 2-1.5 3.5-3.5 4-6 1.5-.1 3-1 3.5-2.5z" fill="#099cec"/></svg>`,
  GH:`<svg viewBox="0 0 32 32"><path fill-rule="evenodd" d="M16 2a14 14 0 00-4.43 27.28c.7.13.95-.3.95-.67v-2.33c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 00-1.55-2.04c-1.27-.86.1-.85.1-.85a2.94 2.94 0 012.14 1.44 2.98 2.98 0 004.08 1.16 2.99 2.99 0 01.89-1.87c-3.1-.35-6.37-1.55-6.37-6.9a5.4 5.4 0 011.44-3.75 5.01 5.01 0 01.14-3.7s1.17-.37 3.85 1.43a13.27 13.27 0 017 0c2.67-1.8 3.84-1.43 3.84-1.43a5.01 5.01 0 01.14 3.7 5.39 5.39 0 011.44 3.75c0 5.37-3.27 6.55-6.38 6.89a3.35 3.35 0 01.95 2.59v3.84c0 .46.25.8.96.67A14 14 0 0016 2z" fill="#fff"/></svg>`,
  AWS:`<svg viewBox="0 0 32 32"><path d="M9 20.3c-1.5.8-2.5 1.2-3.7 1.2-2.3 0-3.8-1.6-3.8-3.9 0-2.8 2-4.6 5.2-4.6.8 0 1.5.1 2.3.4v2c-.7-.4-1.4-.6-2.1-.6-1.8 0-2.9 1-2.9 2.7 0 1.5.9 2.4 2.4 2.4.5 0 1-.1 1.6-.4v-1.3H6.5V17H9v3.3zm4.7 1v-7h2.2v7h-2.2zm5.8 0l-2.8-7h2.4l1.7 4.9 1.7-4.9H25l-2.8 7h-2.7zm9.5-3.3c0 2.1-1.5 3.5-3.8 3.5-.7 0-1.4-.1-1.9-.3v-1.9c.5.3 1.1.5 1.7.5 1.1 0 1.7-.6 1.7-1.8 0-1.1-.6-1.7-1.6-1.7-.4 0-.9.1-1.3.3v-1.9c.4-.2 1-.3 1.5-.3 2.2 0 3.7 1.4 3.7 3.6z" fill="#f90"/><path d="M16 26c-5.5 0-10.2-2.7-13-6.8.6.3 1.2.4 1.9.4 2.6 0 5-1.7 5-1.7s1.7 1.1 4.1 1.1c2.3 0 4.2-1.1 4.2-1.1s2.4 1.7 5 1.7c.7 0 1.3-.1 1.9-.4C22.2 23.3 19.5 26 16 26z" fill="#f90"/></svg>`,
};

const SKILLS = [
  { name:"HTML5",      color:"#E34F26", svg:SVG.HTML5 },
  { name:"CSS3",       color:"#1572B6", svg:SVG.CSS3  },
  { name:"JavaScript", color:"#F7DF1E", svg:SVG.JS    },
  { name:"TypeScript", color:"#3178C6", svg:SVG.TS    },
  { name:"Python",     color:"#3776AB", svg:SVG.PY    },
  { name:"Java",       color:"#ED8B00", svg:SVG.JAVA  },
  { name:"React",      color:"#61DAFB", svg:SVG.REACT },
  { name:"Tailwind",   color:"#06B6D4", svg:SVG.TW   },
  { name:"Bootstrap",  color:"#7952B3", svg:SVG.BS   },
  { name:"Node.js",    color:"#339933", svg:SVG.NODE  },
  { name:"Express",    color:"#aaa",    svg:SVG.EXPRESS},
  { name:"MySQL",      color:"#4479A1", svg:SVG.MYSQL },
  { name:"MongoDB",    color:"#47A248", svg:SVG.MONGO },
  { name:"Docker",     color:"#2496ED", svg:SVG.DOCKER},
  { name:"GitHub",     color:"#e2e8f0", svg:SVG.GH   },
  { name:"AWS",        color:"#FF9900", svg:SVG.AWS   },
];

/* ═══════════════════════════════════════════════════════════
   PROJECTS
═══════════════════════════════════════════════════════════ */
const PROJECTS = [
  {
    title:"Snake Game Simulation",
    tech:"Java · Swing · NetBeans",
    color:"#a855f7",
    glow:"#a855f733",
    desc:"A classic Snake game built with Java Swing featuring smooth controls, collision detection, dynamic score tracking, and increasing difficulty levels with responsive retro graphics.",
    hasSnake: true,
    images:[
        "https://assets.unlayer.com/projects/0/1781035141222-55ff7ad7-b255-468f-a917-ff6c1e963cc8.png",
        "https://miro.medium.com/0*i7T-_4joOwUrIcKT.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB2fKjqxaNgi5DGyY40dAGXmaJRHxd3F_arA&s"
    ],
  },
  {
    title:"Real Estate Management System",
    tech:"PHP · XAMPP · MySQL",
    color:"#6366f1",
    glow:"#6366f133",
    desc:"Property listing, client records, and transaction management with automated tracking, inquiry handling, contract management, and secure data storage with comprehensive reporting.",
    images:[
      "https://codeastro.com/wp-content/uploads/2022/07/CodeAstro-Thumbnail_Real-Estate-Management-System-PHP.jpg",
      "https://media.geeksforgeeks.org/wp-content/uploads/20240104004612/Screenshot-2567-01-01-at-102608-(1).jpg",
      "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1704993432/catalog/1743314164673363968/alsx9fhbgxl6gytikdui.jpg",
    ],
  },
  {
    title:"Waste Management System",
    tech:"React · Mongodb · Express · Node ",
    color:"#22d3ee",
    glow:"#22d3ee33",
    desc:"A fully responsive waste management platform built with MERN stack. Features smooth section navigation, interactive UI components, and clean content organization optimized for readability.",
    images:[
      "https://assets.unlayer.com/projects/0/1781036074405-Screenshot%202026-05-15%20010813.png",
      "https://assets.unlayer.com/projects/0/1781036272130-Screenshot%202026-05-15%20011439.png",
      "https://assets.unlayer.com/projects/0/1781036312765-Screenshot%202026-05-15%20011208.png",
      "https://assets.unlayer.com/projects/0/1781036385079-Screenshot%202026-05-15%20011254.png",
      "https://assets.unlayer.com/projects/0/1781036139109-Screenshot%202026-05-15%20010949.png",
      "https://assets.unlayer.com/projects/0/1781036195544-Screenshot%202026-05-15%20011626.png",
    ],
  },
  {
    title:"Object Detection Model",
    tech:"Python · OpenCV · ML · Webcam",
    color:"#f472b6",
    glow:"#f472b633",
    desc:"Real-time object detection model trained on 200+ images across 5 object classes. Uses webcam for live visualization with optimized lighting and fast inference pipeline.",
    images:[
      "https://assets.unlayer.com/projects/0/1781035513576-Picture1.png",
      "https://assets.unlayer.com/projects/0/1781035573288-Picture2.png",
      "https://upload.wikimedia.org/wikipedia/commons/3/38/Detected-with-YOLO--Schreibtisch-mit-Objekten.jpg",
    ],
  },
];

// Helper function for rounded rectangle
if (!CanvasRenderingContext2D.prototype.roundRect) {
  CanvasRenderingContext2D.prototype.roundRect = function(x, y, w, h, r) {
    if (w < 2 * r) r = w / 2;
    if (h < 2 * r) r = h / 2;
    this.moveTo(x+r, y);
    this.lineTo(x+w-r, y);
    this.quadraticCurveTo(x+w, y, x+w, y+r);
    this.lineTo(x+w, y+h-r);
    this.quadraticCurveTo(x+w, y+h, x+w-r, y+h);
    this.lineTo(x+r, y+h);
    this.quadraticCurveTo(x, y+h, x, y+h-r);
    this.lineTo(x, y+r);
    this.quadraticCurveTo(x, y, x+r, y);
    return this;
  };
}

/* ═══════════════════════════════════════════════════════════
   SNAKE GAME ANIMATION COMPONENT
═══════════════════════════════════════════════════════════ */
function SnakePreview() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const c = canvasRef.current; if(!c) return;
    const ctx = c.getContext("2d");
    const W = c.width = 320, H = c.height = 220, CELL = 20;
    let snake = [{x:8,y:5},{x:7,y:5},{x:6,y:5},{x:5,y:5}];
    let dir = {x:1,y:0}, food = {x:12,y:7};
    let score = 0, frame = 0, id;
    const rFood = () => food = {x:Math.floor(Math.random()*14+1), y:Math.floor(Math.random()*9+1)};
    const tick = () => {
      frame++;
      if(frame % 8 !== 0){id=requestAnimationFrame(tick);return;}
      const head = {x:(snake[0].x+dir.x+14)%14, y:(snake[0].y+dir.y+9)%9};
      const ate = head.x===food.x && head.y===food.y;
      snake = [head, ...snake.slice(0, ate? undefined : -1)];
      if(ate){score++; rFood();}
      const dx = food.x-snake[0].x, dy = food.y-snake[0].y;
      if(Math.abs(dx)>Math.abs(dy)) dir = {x:dx>0?1:-1,y:0};
      else dir = {x:0,y:dy>0?1:-1};
      ctx.fillStyle="#050014"; ctx.fillRect(0,0,W,H);
      ctx.fillStyle="rgba(167,139,250,0.08)";
      for(let x=0;x<14;x++) for(let y=0;y<9;y++) ctx.fillRect(x*CELL+9,y*CELL+5,2,2);
      const pulse = 0.7+0.3*Math.sin(Date.now()/300);
      ctx.shadowBlur=12*pulse; ctx.shadowColor="#f472b6";
      ctx.fillStyle="#f472b6";
      ctx.beginPath(); ctx.arc(food.x*CELL+CELL/2+9,food.y*CELL+CELL/2+5,5*pulse,0,Math.PI*2); ctx.fill();
      ctx.shadowBlur=0;
      snake.forEach((s,i)=>{
        const t=i/snake.length;
        const r=Math.round(34+t*(168-34)), g=Math.round(211+t*(85-211)), b=Math.round(238+t*(247-238));
        ctx.fillStyle=`rgb(${r},${g},${b})`;
        ctx.shadowBlur= i===0?16:0; ctx.shadowColor="#22d3ee";
        ctx.beginPath();
        ctx.roundRect(s.x*CELL+2+9,s.y*CELL+2+5,CELL-4,CELL-4,i===0?6:4);
        ctx.fill(); ctx.shadowBlur=0;
      });
      ctx.fillStyle="#a78bfa"; ctx.font="bold 13px monospace";
      ctx.fillText(`SCORE: ${score}`,8,16);
      id=requestAnimationFrame(tick);
    };
    id=requestAnimationFrame(tick);
    return ()=>cancelAnimationFrame(id);
  },[]);
  return <canvas ref={canvasRef} style={{width:"100%",borderRadius:12,display:"block"}}/>;
}

/* ═══════════════════════════════════════════════════════════
   PROJECT CARD — 3D ROTATION EFFECT
═══════════════════════════════════════════════════════════ */
function ProjectCard({proj, idx}) {
  const [imgIdx, setImgIdx] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const [showSnake, setShowSnake] = useState(proj.hasSnake);
  const [hov, setHov] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef(null);

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
    if(flipping) return;
    if(proj.hasSnake && showSnake){
      setFlipping(true);
      setTimeout(()=>{setShowSnake(false); setImgIdx(0); setFlipping(false);},400);
      return;
    }
    setFlipping(true);
    setTimeout(()=>{
      setImgIdx(i=>(i+1)%proj.images.length);
      setFlipping(false);
    },400);
  };
  const prevImg = () => {
    if(flipping) return;
    setFlipping(true);
    setTimeout(()=>{
      setImgIdx(i=>(i-1+proj.images.length)%proj.images.length);
      setFlipping(false);
    },400);
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={()=>setHov(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{
        borderRadius:24,
        background: hov
          ? `linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`
          : `linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))`,
        border:`1.5px solid ${hov ? proj.color+"88" : "rgba(255,255,255,0.1)"}`,
        transform: hov 
          ? `translateY(-14px) scale(1.02) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)` 
          : "translateY(0) scale(1) perspective(1000px) rotateX(0deg) rotateY(0deg)",
        transition:"transform 0.3s cubic-bezier(.34,1.56,.64,1), background 0.3s",
        boxShadow: hov ? `0 30px 80px ${proj.glow}, 0 0 0 1px ${proj.color}44` : "0 8px 32px rgba(0,0,0,0.4)",
        overflow:"hidden",
        cursor:"pointer",
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        style={{position:"relative", height:350, overflow:"hidden", background:"rgba(5,0,20,0.5)"}}
        onClick={nextImg}
      >
        <div style={{
          position:"absolute",inset:0,
          transform: flipping ? "perspective(800px) rotateY(-90deg)" : "perspective(800px) rotateY(0deg)",
          transformOrigin:"left center",
          transition:"transform 0.4s cubic-bezier(.4,0,.2,1)",
        }}>
          {showSnake ? (
            <div style={{padding:"10px 0 0",background:"#050014",height:"100%"}}>
              <SnakePreview/>
            </div>
          ) : (
            <img
              src={proj.images[imgIdx]}
              alt=""
              style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}
            />
          )}
          <div style={{
            position:"absolute",inset:0,
            background:`linear-gradient(to bottom, transparent 30%, rgba(5,0,30,0.95))`,
          }}/>
        </div>

        <div style={{
          position:"absolute",bottom:10,right:12,
          fontSize:11,color:"rgba(255,255,255,0.5)",
          background:"rgba(0,0,0,0.5)",
          padding:"3px 8px",borderRadius:20,
          backdropFilter:"blur(4px)",
          pointerEvents:"none",
        }}>
          {showSnake ? "▶ click for screenshots" : `${imgIdx+1}/${proj.images.length} · click →`}
        </div>

        {!showSnake && (
          <div style={{position:"absolute",bottom:10,left:"50%",transform:"translateX(-50%)",display:"flex",gap:5}}>
            {proj.images.map((_,i)=>(
              <div key={i} style={{
                width:i===imgIdx?18:6, height:6, borderRadius:3,
                background: i===imgIdx ? proj.color : "rgba(255,255,255,0.3)",
                transition:"all 0.3s ease",
              }}/>
            ))}
          </div>
        )}

        <span style={{
          position:"absolute",top:12,left:12,
          fontSize:10,padding:"4px 10px",borderRadius:20,
          background:`${proj.color}22`,border:`1px solid ${proj.color}55`,
          color:proj.color,letterSpacing:"0.06em",fontWeight:600,
          backdropFilter:"blur(8px)",
        }}>
          {proj.tech}
        </span>

        {!showSnake && (
          <>
            <button onClick={e=>{e.stopPropagation();prevImg();}} style={{
              position:"absolute",left:8,top:"50%",transform:"translateY(-50%)",
              width:28,height:28,borderRadius:"50%",border:"none",
              background:"rgba(0,0,0,0.6)",color:"#fff",cursor:"pointer",
              fontSize:14,display:"flex",alignItems:"center",justifyContent:"center",
              backdropFilter:"blur(4px)",transition:"background 0.2s",
            }}
            onMouseEnter={e=>e.currentTarget.style.background=`${proj.color}88`}
            onMouseLeave={e=>e.currentTarget.style.background="rgba(0,0,0,0.6)"}
            >‹</button>
            <button onClick={e=>{e.stopPropagation();nextImg();}} style={{
              position:"absolute",right:8,top:"50%",transform:"translateY(-50%)",
              width:28,height:28,borderRadius:"50%",border:"none",
              background:"rgba(0,0,0,0.6)",color:"#fff",cursor:"pointer",
              fontSize:14,display:"flex",alignItems:"center",justifyContent:"center",
              backdropFilter:"blur(4px)",transition:"background 0.2s",
            }}
            onMouseEnter={e=>e.currentTarget.style.background=`${proj.color}88`}
            onMouseLeave={e=>e.currentTarget.style.background="rgba(0,0,0,0.6)"}
            >›</button>
          </>
        )}
      </div>

      <div style={{padding:"20px 22px 24px", background:"rgba(5,0,20,0.3)"}}>
        <div style={{display:"flex",alignItems:"flex-start",gap:10,marginBottom:10}}>
          <div style={{
            width:36,height:36,borderRadius:10,
            background:`linear-gradient(135deg,${proj.color}44,${proj.color}22)`,
            border:`1px solid ${proj.color}44`,
            display:"flex",alignItems:"center",justifyContent:"center",
            fontSize:16,flexShrink:0,
          }}>
            {idx===0?"🐍":idx===1?"🏠":idx===2?"🗑️":"👁️"}
          </div>
          <h3 style={{
            fontSize:16,fontWeight:800,margin:0,lineHeight:1.3,
            background:`linear-gradient(135deg,#fff 50%,${proj.color})`,
            WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",
          }}>{proj.title}</h3>
        </div>
        <p style={{fontSize:13,lineHeight:1.7,color:"#9ca3af",margin:0}}>{proj.desc}</p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PROJECTS CAROUSEL
═══════════════════════════════════════════════════════════ */
function ProjectsCarousel() {
  const [curr, setCurr] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const total = PROJECTS.length;

  const prev = () => setCurr(c=>(c-1+total)%total);
  const next = () => setCurr(c=>(c+1)%total);

  const onDragStart = (e) => { setDragging(true); setStartX(e.clientX||e.touches?.[0]?.clientX||0); };
  const onDragEnd   = (e) => {
    if(!dragging) return; setDragging(false);
    const x = e.clientX||e.changedTouches?.[0]?.clientX||0;
    if(startX-x > 50) next();
    else if(x-startX > 50) prev();
  };

  return (
    <div style={{position:"relative"}}>
      <div
        onMouseDown={onDragStart} onMouseUp={onDragEnd}
        onTouchStart={onDragStart} onTouchEnd={onDragEnd}
        style={{overflow:"hidden",borderRadius:24}}
      >
        <div style={{
          display:"flex",
          transform:`translateX(calc(-${curr*100}%))`,
          transition:"transform 0.6s cubic-bezier(.77,0,.18,1)",
        }}>
          {PROJECTS.map((p,i)=>(
            <div key={i} style={{minWidth:"100%",padding:"0 4px"}}>
              <ProjectCard proj={p} idx={i}/>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        display:"flex",alignItems:"center",justifyContent:"center",gap:16,marginTop:24,
      }}>
        <NavBtn onClick={prev} dir="left"/>
        <div style={{display:"flex",gap:8}}>
          {PROJECTS.map((_,i)=>(
            <button key={i} onClick={()=>setCurr(i)} style={{
              width:i===curr?32:8,height:8,borderRadius:4,border:"none",cursor:"pointer",
              background:i===curr
                ? `linear-gradient(90deg,${PROJECTS[i].color},${PROJECTS[(i+1)%total].color})`
                : "rgba(255,255,255,0.15)",
              transition:"all 0.4s cubic-bezier(.34,1.56,.64,1)",
              padding:0,
            }}/>
          ))}
        </div>
        <NavBtn onClick={next} dir="right"/>
      </div>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(4,1fr)",
        gap:12,
        marginTop:28,
      }}>
        {PROJECTS.map((p,i)=>(
          <button key={i} onClick={()=>setCurr(i)} style={{
            borderRadius:14,overflow:"hidden",border:"none",cursor:"pointer",
            outline: i===curr ? `2px solid ${p.color}` : "2px solid transparent",
            opacity: i===curr ? 1 : 0.45,
            transform: i===curr ? "scale(1.05)" : "scale(1)",
            transition:"all 0.35s ease",
            padding:0,position:"relative",height:72,
          }}>
            {p.hasSnake && i===curr ? (
              <div style={{
                height:"100%",display:"flex",alignItems:"center",justifyContent:"center",
                background:"#050014",fontSize:22,
              }}>🐍</div>
            ) : (
              <img src={p.images[0]} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
            )}
            <div style={{
              position:"absolute",inset:0,
              background:`linear-gradient(to top,${p.color}88,transparent)`,
            }}/>
          </button>
        ))}
      </div>
    </div>
  );
}

function NavBtn({onClick, dir}) {
  const [hov,setHov]=useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{
        width:44,height:44,borderRadius:"50%",border:"none",cursor:"pointer",
        background: hov
          ? "linear-gradient(135deg,#7c3aed,#4f46e5)"
          : "rgba(255,255,255,0.08)",
        color:"#fff",fontSize:18,
        display:"flex",alignItems:"center",justifyContent:"center",
        transition:"all 0.3s ease",
        boxShadow: hov ? "0 4px 20px #7c3aed66" : "none",
      }}
    >{dir==="left" ? "‹" : "›"}</button>
  );
}

/* ═══════════════════════════════════════════════════════════
   BLACK HOLE + PLANET CANVAS
═══════════════════════════════════════════════════════════ */
function BlackHoleCanvas() {
  const canvasRef = useRef(null);
  useEffect(()=>{
    const c=canvasRef.current; if(!c) return;
    const ctx=c.getContext("2d");
    let id, t=0;
    const resize=()=>{ c.width=c.offsetWidth; c.height=c.offsetHeight; };
    resize();
    window.addEventListener("resize",resize);

    const planet = { angle:0, orbitA:220, orbitB:60, cx:0, cy:0, r:14, inHole:false, reset:0 };

    const draw=()=>{
      t+=0.008;
      ctx.clearRect(0,0,c.width,c.height);
      const cx=c.width*0.72, cy=c.height*0.38;
      planet.cx=cx; planet.cy=cy;

      const diskR = 90;
      [-1,1].forEach(side=>{
        const g=ctx.createRadialGradient(cx,cy,diskR*0.3,cx,cy,diskR);
        g.addColorStop(0,"rgba(167,139,250,0.35)");
        g.addColorStop(0.4,"rgba(99,102,241,0.18)");
        g.addColorStop(1,"transparent");
        ctx.save();
        ctx.translate(cx,cy);
        ctx.scale(1,0.28);
        ctx.translate(-cx,-cy);
        ctx.beginPath(); ctx.arc(cx,cy,diskR,0,Math.PI*2);
        ctx.fillStyle=g; ctx.fill();
        ctx.restore();
      });

      for(let ring=3;ring>=1;ring--){
        ctx.beginPath();
        ctx.arc(cx,cy,diskR+ring*18,0,Math.PI*2);
        ctx.strokeStyle=`rgba(124,58,237,${0.04*ring})`;
        ctx.lineWidth=ring*10;
        ctx.stroke();
      }

      const pr=ctx.createRadialGradient(cx,cy,60,cx,cy,76);
      pr.addColorStop(0,"rgba(255,200,80,0.5)");
      pr.addColorStop(0.5,"rgba(255,140,0,0.25)");
      pr.addColorStop(1,"transparent");
      ctx.save();
      ctx.translate(cx,cy); ctx.scale(1,0.32); ctx.translate(-cx,-cy);
      ctx.beginPath(); ctx.arc(cx,cy,70,0,Math.PI*2);
      ctx.fillStyle=pr; ctx.fill();
      ctx.restore();

      const bhg=ctx.createRadialGradient(cx,cy,0,cx,cy,60);
      bhg.addColorStop(0,"rgba(0,0,0,1)");
      bhg.addColorStop(0.7,"rgba(5,0,20,0.95)");
      bhg.addColorStop(1,"transparent");
      ctx.beginPath(); ctx.arc(cx,cy,60,0,Math.PI*2);
      ctx.fillStyle=bhg; ctx.fill();

      for(let i=0;i<80;i++){
        const ang=i*0.43+t*0.5;
        const r2=30+i*2.2;
        const stretch=1-Math.min(r2/220,0.85);
        const sx=cx+Math.cos(ang)*r2;
        const sy=cy+Math.sin(ang)*r2*0.28;
        const op=0.08+0.25*stretch*(0.5+0.5*Math.sin(t*3+i));
        ctx.beginPath(); ctx.arc(sx,sy,0.8,0,Math.PI*2);
        ctx.fillStyle=`rgba(200,180,255,${op})`; ctx.fill();
      }

      if(!planet.inHole){
        planet.angle+=0.012;
        const shrink=1-Math.max(0,Math.min(1,(planet.angle-6)/10));
        const r3=planet.orbitA*shrink+62;
        const px=cx+Math.cos(planet.angle)*r3;
        const py=cy+Math.sin(planet.angle)*r3*0.42;
        const ps=planet.r*shrink;

        ctx.shadowBlur=20*shrink; ctx.shadowColor="#22d3ee";
        const pg=ctx.createRadialGradient(px,py,0,px,py,ps*2);
        pg.addColorStop(0,"rgba(34,211,238,0.9)");
        pg.addColorStop(0.5,"rgba(99,102,241,0.7)");
        pg.addColorStop(1,"transparent");
        ctx.beginPath(); ctx.arc(px,py,ps*1.6,0,Math.PI*2);
        ctx.fillStyle=pg; ctx.fill(); ctx.shadowBlur=0;

        const pbg=ctx.createRadialGradient(px-ps*0.3,py-ps*0.3,0,px,py,ps);
        pbg.addColorStop(0,"#7dd3fc");
        pbg.addColorStop(0.5,"#3b82f6");
        pbg.addColorStop(1,"#1e3a8a");
        ctx.beginPath(); ctx.arc(px,py,ps,0,Math.PI*2);
        ctx.fillStyle=pbg; ctx.fill();

        if(shrink>0.4){
          ctx.save();
          ctx.translate(px,py); ctx.scale(1,0.3); ctx.translate(-px,-py);
          ctx.beginPath(); ctx.arc(px,py,ps*1.8,0,Math.PI*2);
          ctx.strokeStyle=`rgba(125,211,252,${0.5*shrink})`; ctx.lineWidth=2; ctx.stroke();
          ctx.restore();
        }

        if(planet.angle>16){ planet.inHole=true; planet.reset=t+2; }
      } else if(t>planet.reset){
        planet.inHole=false; planet.angle=0;
      } else {
        const fl=Math.max(0,1-(t-planet.reset+2)*3);
        if(fl>0){
          ctx.beginPath(); ctx.arc(cx,cy,60*fl,0,Math.PI*2);
          ctx.fillStyle=`rgba(34,211,238,${fl*0.3})`; ctx.fill();
        }
      }

      ctx.save();
      for(let a=0;a<12;a++){
        const ang2=a*(Math.PI/6)+t*0.1;
        const x1=cx+Math.cos(ang2)*72, y1=cy+Math.sin(ang2)*24;
        const x2=cx+Math.cos(ang2)*160, y2=cy+Math.sin(ang2)*55;
        const gl=ctx.createLinearGradient(x1,y1,x2,y2);
        gl.addColorStop(0,"rgba(167,139,250,0.12)");
        gl.addColorStop(1,"transparent");
        ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2);
        ctx.strokeStyle=gl; ctx.lineWidth=1; ctx.stroke();
      }
      ctx.restore();

      id=requestAnimationFrame(draw);
    };
    draw();
    return ()=>{ cancelAnimationFrame(id); window.removeEventListener("resize",resize); };
  },[]);
  return (
    <canvas ref={canvasRef} style={{
      position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",
    }}/>
  );
}

/* ═══════════════════════════════════════════════════════════
   STAR FIELD
═══════════════════════════════════════════════════════════ */
function StarField() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId;
    let stars = [];
    let lastHeight = 0;

    const initStars = (width, height) => {
      stars = Array.from({ length: 240 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.6 + 0.2,
        speed: Math.random() * 0.35 + 0.04,
        op: Math.random(),
        dir: Math.random() > 0.5 ? 1 : -1,
      }));
    };

    const resizeCanvas = () => {
      const width = window.innerWidth;
      const height = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
        window.innerHeight
      );
      canvas.width = width;
      canvas.height = height;
      if (lastHeight !== height) {
        initStars(width, height);
        lastHeight = height;
      }
    };

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.op += 0.004 * s.dir;
        if (s.op > 1 || s.op < 0) s.dir *= -1;
        s.y += s.speed;
        if (s.y > canvas.height) s.y = 0;
        if (s.y < 0) s.y = canvas.height;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 185, 255, ${s.op})`;
        ctx.fill();
      }
      animationId = requestAnimationFrame(draw);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}

/* ═══════════════════════════════════════════════════════════
   UTILITY COMPONENTS
═══════════════════════════════════════════════════════════ */
function Reveal({children,delay=0}) {
  const ref=useRef(null); const [vis,setVis]=useState(false);
  useEffect(()=>{
    const ob=new IntersectionObserver(([e])=>{if(e.isIntersecting){setVis(true);ob.disconnect();}},{threshold:0.1});
    if(ref.current) ob.observe(ref.current);
    return ()=>ob.disconnect();
  },[]);
  return (
    <div ref={ref} style={{
      opacity:vis?1:0,
      transform:vis?"translateY(0)":"translateY(44px)",
      transition:`opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
    }}>{children}</div>
  );
}

function SvgIcon({svg,size=34}) {
  return (
    <div style={{width:size,height:size,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center"}}
      dangerouslySetInnerHTML={{__html:svg.replace("<svg ",`<svg width="${size}" height="${size}" `)}}/>
  );
}

function hexRgb(h) {
  const r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h);
  return r?`${parseInt(r[1],16)},${parseInt(r[2],16)},${parseInt(r[3],16)}`:"255,255,255";
}

function Typewriter({words}) {
  const [idx,setIdx]=useState(0); const [txt,setTxt]=useState(""); const [del,setDel]=useState(false);
  useEffect(()=>{
    const word=words[idx%words.length];
    const to=setTimeout(()=>{
      if(!del){ setTxt(word.slice(0,txt.length+1)); if(txt.length+1===word.length) setTimeout(()=>setDel(true),1600); }
      else{ setTxt(word.slice(0,txt.length-1)); if(txt.length-1===0){setDel(false);setIdx(i=>i+1);} }
    },del?55:80);
    return ()=>clearTimeout(to);
  },[txt,del,idx,words]);
  return <span style={{color:"#a78bfa"}}>{txt}<span style={{animation:"blink 1s step-end infinite",color:"#c4b5fd"}}>|</span></span>;
}

/* ═══════════════════════════════════════════════════════════
   SKILL CHIP
═══════════════════════════════════════════════════════════ */
function SkillChip({icon}) {
  const [hov,setHov]=useState(false);
  return (
    <div
      onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{
        display:"flex",flexDirection:"column",alignItems:"center",gap:8,
        padding:"14px 16px",borderRadius:16,
        background: hov?`rgba(${hexRgb(icon.color)},0.15)`:"rgba(255,255,255,0.03)",
        border:`1px solid ${hov?icon.color+"77":"rgba(255,255,255,0.07)"}`,
        transform: hov?"translateY(-7px) scale(1.1)":"translateY(0) scale(1)",
        transition:"all 0.35s cubic-bezier(.34,1.56,.64,1)",
        boxShadow: hov?`0 10px 28px ${icon.color}44`:"none",
        cursor:"default",minWidth:72,
      }}
    >
      <SvgIcon svg={icon.svg} size={34}/>
      <span style={{fontSize:10,color:hov?icon.color:"#9ca3af",letterSpacing:"0.05em",whiteSpace:"nowrap",transition:"color 0.3s",fontWeight:600}}>{icon.name}</span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   HEXAGON PROFILE IMAGE COMPONENT
═══════════════════════════════════════════════════════════ */
function HexagonProfile() {
  const [hover, setHover] = useState(false);
  return (
    <div style={{
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: 30,
    }}>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          width: 130,
          height: 130,
          position: "relative",
          cursor: "pointer",
          transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
          transform: hover ? "scale(1.08) rotate(3deg)" : "scale(1) rotate(0deg)",
        }}
      >
        {/* Hexagon shape using SVG */}
        <svg width="130" height="130" viewBox="0 0 130 130" style={{ position: "absolute", top: 0, left: 0, zIndex: 2 }}>
          <defs>
            <clipPath id="hexagonClip">
              <polygon points="65,0 126,32.5 126,97.5 65,130 4,97.5 4,32.5" />
            </clipPath>
            <radialGradient id="hexGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#4f46e5" stopOpacity="0"/>
            </radialGradient>
          </defs>
          <polygon points="65,0 126,32.5 126,97.5 65,130 4,97.5 4,32.5" fill="none" stroke="#a78bfa" strokeWidth="3"/>
        </svg>
        
        {/* Image with hexagon clip */}
        <div style={{
          position: "absolute",
          top: 3,
          left: 3,
          width: 124,
          height: 124,
          clipPath: "polygon(62px 3px, 123px 35.5px, 123px 100.5px, 62px 133px, 7px 100.5px, 7px 35.5px)",
          overflow: "hidden",
          borderRadius: 0,
        }}>
          <img 
            src="https://assets.unlayer.com/projects/0/1781066867183-Picture1.jpg" 
            alt="Ashis Kumar Mohanty"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.4s ease",
              transform: hover ? "scale(1.1)" : "scale(1)",
            }}
          />
        </div>
        
        {/* Glow effect on hover */}
        {hover && (
          <div style={{
            position: "absolute",
            top: -10,
            left: -10,
            width: 150,
            height: 150,
            background: "radial-gradient(circle, rgba(167,139,250,0.4), transparent)",
            borderRadius: "50%",
            zIndex: 1,
            pointerEvents: "none",
            animation: "pulse 1s ease-in-out infinite",
          }}/>
        )}
      </div>
      
      <div style={{
        textAlign: "center",
        marginTop: 15,
        transition: "all 0.3s ease",
        transform: hover ? "translateY(-3px)" : "translateY(0)",
      }}>
        <h3 style={{
          fontSize: 18,
          fontWeight: 700,
          background: "linear-gradient(135deg, #fff, #a78bfa)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: 4,
        }}>Ashis Kumar Mohanty</h3>
        <p style={{
          fontSize: 12,
          color: "#a78bfa",
          letterSpacing: "0.08em",
          display: "inline-block",
          padding: "2px 12px",
          borderRadius: 20,
          background: "rgba(167,139,250,0.12)",
          border: "1px solid rgba(167,139,250,0.3)",
        }}>Full Stack Developer</p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   NAV
═══════════════════════════════════════════════════════════ */
function Nav() {
  const [scroll,setScroll]=useState(false);
  useEffect(()=>{
    const h=()=>setScroll(window.scrollY>50);
    window.addEventListener("scroll",h);
    return ()=>window.removeEventListener("scroll",h);
  },[]);
  const go=(id)=>document.getElementById(id)?.scrollIntoView({behavior:"smooth"});
  return (
    <nav style={{
      position:"fixed",top:0,left:0,right:0,zIndex:200,
      height:64,padding:"0 6%",
      display:"flex",alignItems:"center",justifyContent:"space-between",
      background: scroll?"rgba(5,0,20,0.88)":"transparent",
      backdropFilter: scroll?"blur(20px)":"none",
      borderBottom: scroll?"1px solid rgba(167,139,250,0.12)":"none",
      transition:"all 0.4s ease",
    }}>
      <div style={{fontWeight:900,fontSize:20,letterSpacing:"0.06em",color:"#fff",cursor:"pointer"}} onClick={()=>go("hero")}>
        <span style={{
          background:"linear-gradient(135deg,#a78bfa,#60a5fa)",
          WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",
        }}>A</span>KM
      </div>
      <div style={{display:"flex",gap:28}}>
        {["About","Skills","Projects","Contact"].map(l=>(
          <NLink key={l} label={l} onClick={()=>go(l.toLowerCase())}/>
        ))}
      </div>
      <a
        href="mailto:ashiskumarmohanty738@gmail.com?subject=Hiring%20Opportunity%20for%20Ashis%20Kumar%20Mohanty&body=Hi%20Ashis%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20potential%20opportunity%20with%20you.%0A%0APlease%20let%20me%20know%20your%20availability.%0A%0ARegards"
        style={{
          padding:"9px 22px",borderRadius:50,
          background:"linear-gradient(135deg,#7c3aed,#4f46e5)",
          color:"#fff",fontSize:13,fontWeight:700,textDecoration:"none",
          transition:"all 0.25s",letterSpacing:"0.04em",
          boxShadow:"0 4px 18px #7c3aed55",
        }}
        onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.06)";e.currentTarget.style.boxShadow="0 8px 32px #7c3aed88";}}
        onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.boxShadow="0 4px 18px #7c3aed55";}}
      >✉ Hire Me</a>
    </nav>
  );
}
function NLink({label,onClick}) {
  const [h,setH]=useState(false);
  return (
    <button onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{
      background:"none",border:"none",cursor:"pointer",padding:"4px 2px",
      color:h?"#a78bfa":"#d1d5db",fontSize:14,fontWeight:500,
      borderBottom:h?"1.5px solid #a78bfa":"1.5px solid transparent",
      transition:"all 0.2s",
    }}>{label}</button>
  );
}

/* ═══════════════════════════════════════════════════════════
   FLOATING HERO ICONS
═══════════════════════════════════════════════════════════ */
const FLOATS = [
  {k:"React",      top:"6%",   right:"36%", size:52, anim:"float1", d:0},
  {k:"JavaScript", top:"13%",  right:"18%", size:58, anim:"float2", d:0.4},
  {k:"TypeScript", top:"30%",  right:"12%", size:52, anim:"float3", d:0.8},
  {k:"Python",     top:"50%",  right:"20%", size:48, anim:"float1", d:1.2},
  {k:"Node.js",    top:"62%",  right:"38%", size:46, anim:"float2", d:0.6},
  {k:"MongoDB",    top:"75%",  right:"15%", size:44, anim:"float3", d:1},
  {k:"Docker",     top:"82%",  right:"34%", size:46, anim:"float1", d:1.4},
  {k:"GitHub",     top:"40%",  right:"43%", size:42, anim:"float2", d:0.2},
  {k:"AWS",        top:"20%",  right:"42%", size:46, anim:"float3", d:1.6},
];

/* ═══════════════════════════════════════════════════════════
   MAIN APP
═══════════════════════════════════════════════════════════ */
export default function App() {
  return (
    <div style={{
      fontFamily:"'Inter','Segoe UI',sans-serif",
      background:"linear-gradient(160deg,#030010 0%,#080022 40%,#030010 100%)",
      minHeight:"100vh",color:"#fff",overflowX:"hidden",position:"relative",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
        html{scroll-behavior:smooth;}
        body{overflow-x:hidden;background:#030010;}
        @keyframes float1{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-18px) rotate(5deg)}}
        @keyframes float2{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-14px) rotate(-6deg)}}
        @keyframes float3{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-22px) rotate(7deg)}}
        @keyframes pulse{0%,100%{opacity:0.6;transform:scale(1)}50%{opacity:1;transform:scale(1.15)}}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
        @keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        @keyframes gradShift{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
        @keyframes slideUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
        @keyframes matrix{0%{background-position:0% 0%}100%{background-position:100% 100%}}
        @keyframes spinRing{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        @keyframes shimmer{0%{opacity:.5}50%{opacity:1}100%{opacity:.5}}
        ::-webkit-scrollbar{width:4px}
        ::-webkit-scrollbar-track{background:#030010}
        ::-webkit-scrollbar-thumb{background:linear-gradient(#7c3aed,#4f46e5);border-radius:4px}
        .matrix-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
          opacity: 0.06;
          background-image: repeating-linear-gradient(0deg, rgba(100, 100, 255, 0.2) 0px, rgba(100, 100, 255, 0.2) 1px, transparent 1px, transparent 2px);
          background-size: 100% 3px;
          animation: matrix 20s linear infinite;
        }
      `}</style>

      <StarField/>
      <div className="matrix-bg"></div>
      <Nav/>

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section id="hero" style={{
        minHeight:"100vh",display:"flex",alignItems:"center",
        padding:"80px 6% 60px",position:"relative",overflow:"hidden",
      }}>
        <div style={{position:"absolute",inset:0,zIndex:1}}>
          <BlackHoleCanvas/>
        </div>

        <div style={{position:"absolute",width:600,height:600,borderRadius:"50%",filter:"blur(120px)",background:"radial-gradient(circle,#7c3aed33,transparent 70%)",top:"-20%",left:"10%",animation:"pulse 9s ease-in-out infinite",pointerEvents:"none"}}/>
        <div style={{position:"absolute",width:400,height:400,borderRadius:"50%",filter:"blur(100px)",background:"radial-gradient(circle,#4f46e533,transparent 70%)",bottom:"5%",left:"-5%",animation:"pulse 7s ease-in-out infinite 2s",pointerEvents:"none"}}/>

        <div style={{position:"absolute",inset:0,pointerEvents:"none",zIndex:2}}>
          {FLOATS.map((ic,i)=>{
            const sk=SKILLS.find(s=>s.name===ic.k);
            return (
              <div key={i} style={{
                position:"absolute",top:ic.top,right:ic.right,
                width:ic.size,height:ic.size,borderRadius:16,padding:9,
                background:"rgba(255,255,255,0.055)",
                border:"1px solid rgba(255,255,255,0.13)",
                backdropFilter:"blur(10px)",
                animation:`${ic.anim} ${3.2+i*0.35}s ease-in-out infinite`,
                animationDelay:`${ic.d}s`,
                display:"flex",alignItems:"center",justifyContent:"center",
                boxShadow:`0 4px 20px ${sk?.color||"#7c3aed"}33`,
              }}>
                {sk && <SvgIcon svg={sk.svg} size={ic.size-18}/>}
              </div>
            );
          })}
        </div>

        <div style={{position:"relative",zIndex:3, maxWidth:680, margin: "0 auto", width: "100%"}}>
          {/* Hexagon Profile Image - Now at the top of hero section */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <HexagonProfile />
          </div>

          <div style={{
            display:"inline-flex",alignItems:"center",gap:8,
            padding:"6px 18px",borderRadius:99,
            background:"rgba(124,58,237,0.18)",
            border:"1px solid rgba(167,139,250,0.4)",
            fontSize:11,color:"#c4b5fd",marginBottom:26,
            animation:"slideUp 0.9s ease both",letterSpacing:"0.08em",
            backdropFilter:"blur(8px)",
            marginTop: 0,
          }}>
            <span style={{width:7,height:7,borderRadius:"50%",background:"#a78bfa",display:"inline-block",animation:"pulse 2s ease-in-out infinite"}}/>
            Full Stack Developer Portfolio
          </div>

          <h1 style={{
            fontSize:"clamp(2.4rem,5vw,3.9rem)",fontWeight:900,lineHeight:1.08,
            marginBottom:22,animation:"slideUp 0.9s ease 0.1s both",textAlign:"center",
          }}>
            Providing the{" "}
            <span style={{
              background:"linear-gradient(135deg,#a78bfa,#60a5fa,#f472b6,#a78bfa)",
              backgroundSize:"300% 300%",animation:"gradShift 4s ease infinite",
              WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",
            }}>best</span>
            <br/>
            <span style={{display:"inline-block"}}>
              <Typewriter words={["project experience.","software solutions.","creative ideas.","web applications."]}/>
            </span>
          </h1>

          <p style={{
            fontSize:15,lineHeight:1.8,color:"#94a3b8",marginBottom:38,
            animation:"slideUp 0.9s ease 0.2s both",textAlign:"center",
          }}>
            I'm <strong style={{color:"#e2e8f0",fontWeight:700}}>Ashis Kumar Mohanty</strong> — B.Tech CSE (2026) & Full Stack Engineer. Passionate about building impactful, pixel-perfect web applications.
          </p>

          <div style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap",animation:"slideUp 0.9s ease 0.3s both"}}>
            <button
              onClick={()=>document.getElementById("projects")?.scrollIntoView({behavior:"smooth"})}
              style={{
                padding:"13px 30px",borderRadius:50,border:"none",
                background:"linear-gradient(135deg,#7c3aed,#4f46e5)",
                color:"#fff",fontWeight:700,fontSize:14,cursor:"pointer",
                transition:"all 0.3s ease",boxShadow:"0 6px 24px #7c3aed55",letterSpacing:"0.04em",
              }}
              onMouseEnter={e=>{e.target.style.transform="translateY(-3px)";e.target.style.boxShadow="0 12px 36px #7c3aed88";}}
              onMouseLeave={e=>{e.target.style.transform="translateY(0)";e.target.style.boxShadow="0 6px 24px #7c3aed55";}}
            >View Projects ↓</button>
            <a
              href="mailto:ashiskumarmohanty738@gmail.com?subject=Hiring%20Opportunity&body=Hi%20Ashis%2C%0A%0AI'd%20love%20to%20connect%20regarding%20a%20potential%20opportunity."
              style={{
                padding:"13px 30px",borderRadius:50,
                border:"1.5px solid rgba(167,139,250,0.45)",
                color:"#c4b5fd",fontWeight:600,fontSize:14,
                textDecoration:"none",transition:"all 0.3s ease",letterSpacing:"0.04em",
                display:"inline-block",
              }}
              onMouseEnter={e=>{e.currentTarget.style.background="rgba(124,58,237,0.18)";e.currentTarget.style.borderColor="#a78bfa";e.currentTarget.style.transform="translateY(-3px)";}}
              onMouseLeave={e=>{e.currentTarget.style.background="transparent";e.currentTarget.style.borderColor="rgba(167,139,250,0.45)";e.currentTarget.style.transform="translateY(0)";}}
            >✉ Contact Me</a>
          </div>

          <div style={{display:"flex",gap:28,justifyContent:"center",marginTop:44,animation:"slideUp 0.9s ease 0.45s both"}}>
            {[{n:"8.18",l:"CGPA"},  {n:"10+",l:"Projects"}, {n:"4+",l:"Internship"}].map(s=>(
              <div key={s.l}>
                <div style={{
                  fontSize:"1.8rem",fontWeight:900,
                  background:"linear-gradient(135deg,#a78bfa,#60a5fa)",
                  WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",
                }}>{s.n}</div>
                <div style={{fontSize:11,color:"#6b7280",letterSpacing:"0.08em",marginTop:2,textAlign:"center"}}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MARQUEE ════════════════════════════════════════════ */}
      <div style={{
        padding:"44px 0",
        background:"linear-gradient(90deg,rgba(124,58,237,0.08),rgba(79,70,229,0.06),rgba(124,58,237,0.08))",
        borderTop:"1px solid rgba(167,139,250,0.1)",
        borderBottom:"1px solid rgba(167,139,250,0.1)",
        overflow:"hidden",position:"relative",zIndex:1,
      }}>
        <Reveal>
          <div style={{textAlign:"center",marginBottom:28}}>
            <span style={{
              display:"inline-block",fontSize:10,letterSpacing:"0.18em",
              color:"#6366f1",textTransform:"uppercase",marginBottom:8,
              padding:"4px 14px",borderRadius:99,
              background:"rgba(99,102,241,0.12)",border:"1px solid rgba(99,102,241,0.25)",
            }}>✦ Modern Tech Stack ✦</span>
            <h2 style={{
              fontSize:"clamp(1.4rem,3vw,2rem)",fontWeight:800,color:"#e2e8f0",marginTop:8,
            }}>Making apps with modern technologies.</h2>
            <p style={{fontStyle:"italic",color:"#7c3aed",fontSize:13,marginTop:5,opacity:0.8}}>Never miss a task, deadline, or idea.</p>
          </div>
        </Reveal>
        <div style={{overflow:"hidden"}}>
          <div style={{display:"flex",gap:14,width:"max-content",animation:"marquee 28s linear infinite"}}>
            {[...SKILLS,...SKILLS].map((ic,i)=>(
              <div key={i} title={ic.name} style={{
                flexShrink:0,width:64,height:64,
                padding:10,borderRadius:14,
                background:"rgba(255,255,255,0.04)",
                border:"1px solid rgba(255,255,255,0.07)",
                display:"flex",alignItems:"center",justifyContent:"center",
              }}>
                <SvgIcon svg={ic.svg} size={38}/>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ ABOUT / EXPERIENCE ════════════════════════════════ */}
      <section id="about" style={{padding:"100px 6%",position:"relative",zIndex:1}}>
        <Reveal>
          <div style={{textAlign:"center",marginBottom:56}}>
            <Tag>✦ About Me ✦</Tag>
            <h2 style={secHead}>My Journey</h2>
          </div>
        </Reveal>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:22,maxWidth:1000,margin:"0 auto"}}>
          {[
            {period:"2025 – 2026",title:"Software Engineer Intern",place:"ASP OL MEDIA PVT. LTD, Nagpur",desc:"Email marketing tools (SMTP, BIRD, UNLAYER) — designed & tested templates for international clients.",color:"#a78bfa",icon:"💼"},
            {period:"2025",title:"Scientific Calculator",place:"Techzex Pvt. Ltd",desc:"The central aim of the project was to test the hypothesis that providing a calculator would improve students' performance in those parts of the undergraduate first-year that relied on formal reasoning skills.",color:"#22d3ee",icon:"📱"},
            {period:"2024",title:"Object Detection Model",place:"CTTC, Bhubaneswar",desc:"Created a model to detect objects by collecting data. Collected 200 photos of one object, total 5 different types of objects. Used webcam for better visualization and proper lighting.",color:"#f472b6",icon:"👁️"},
            {period:"2022 – 2026",title:"B.Tech – Computer Science Eng.",place:"Gandhi Institute for Technology, Bhubaneswar",desc:"CGPA 8.18 · DSA, DBMS, OS, Networking, and modern full-stack web development.",color:"#60a5fa",icon:"🎓"},
          ].map((item,i)=>(
            <Reveal key={i} delay={i*0.1}>
              <JourneyCard item={item}/>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══ SKILLS ════════════════════════════════════════════ */}
      <section id="skills" style={{
        padding:"100px 6%",position:"relative",zIndex:1,
        background:"linear-gradient(180deg,transparent,rgba(124,58,237,0.04),transparent)",
      }}>
        <Reveal>
          <div style={{textAlign:"center",marginBottom:56}}>
            <Tag>✦ What I Know ✦</Tag>
            <h2 style={secHead}>My Skills & Technologies</h2>
            <p style={{color:"#6b7280",marginTop:12,fontSize:15}}>Tools and technologies I work with every day</p>
          </div>
        </Reveal>
        {[
          {group:"Languages",        icons:SKILLS.filter(s=>["Python","Java","JavaScript","TypeScript"].includes(s.name))},
          {group:"Front-End",        icons:SKILLS.filter(s=>["HTML5","CSS3","React","Tailwind","Bootstrap"].includes(s.name))},
          {group:"Back-End & DB",    icons:SKILLS.filter(s=>["Node.js","Express","MySQL","MongoDB"].includes(s.name))},
          {group:"Tools & Platforms",icons:SKILLS.filter(s=>["Docker","GitHub","AWS"].includes(s.name))},
        ].map((g,gi)=>(
          <Reveal key={gi} delay={gi*0.08}>
            <div style={{marginBottom:40}}>
              <div style={{
                display:"flex",alignItems:"center",gap:12,marginBottom:18,
              }}>
                <span style={{
                  fontSize:11,fontWeight:700,letterSpacing:"0.14em",
                  color:"#7c3aed",textTransform:"uppercase",
                  padding:"4px 12px",borderRadius:99,
                  background:"rgba(124,58,237,0.12)",border:"1px solid rgba(124,58,237,0.25)",
                }}>{g.group}</span>
                <div style={{flex:1,height:1,background:"linear-gradient(90deg,rgba(124,58,237,0.3),transparent)"}}/>
              </div>
              <div style={{display:"flex",flexWrap:"wrap",gap:12}}>
                {g.icons.map(ic=><SkillChip key={ic.name} icon={ic}/>)}
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* ══ PROJECTS ═══════════════════════════════════════════ */}
      <section id="projects" style={{padding:"100px 6%",position:"relative",zIndex:1}}>
        <Reveal>
          <div style={{textAlign:"center",marginBottom:52}}>
            <Tag>✦ What I've Built ✦</Tag>
            <h2 style={secHead}>My Projects</h2>
            <p style={{color:"#6b7280",marginTop:12,fontSize:15}}>Hover over cards for 3D effect · Click to flip through screenshots</p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div style={{maxWidth:700,margin:"0 auto"}}>
            <ProjectsCarousel/>
          </div>
        </Reveal>
        <Reveal delay={0.25}>
          <div style={{textAlign:"center",marginTop:48}}>
            <a href="https://www.linkedin.com/in/ashis-kumar-mohanty-5340122ab" target="_blank" rel="noreferrer"
              style={{
                display:"inline-block",padding:"13px 38px",borderRadius:50,
                border:"1.5px solid rgba(167,139,250,0.45)",color:"#c4b5fd",
                fontSize:14,fontWeight:600,textDecoration:"none",transition:"all 0.3s ease",letterSpacing:"0.04em",
              }}
              onMouseEnter={e=>{e.target.style.background="rgba(124,58,237,0.2)";e.target.style.borderColor="#a78bfa";e.target.style.transform="translateY(-3px)";}}
              onMouseLeave={e=>{e.target.style.background="transparent";e.target.style.borderColor="rgba(167,139,250,0.45)";e.target.style.transform="translateY(0)";}}>
              Explore More Projects ↗
            </a>
          </div>
        </Reveal>
      </section>

      {/* ══ CERTIFICATIONS ═════════════════════════════════════ */}
      <section style={{
        padding:"80px 6%",
        background:"linear-gradient(180deg,transparent,rgba(99,102,241,0.05),transparent)",
        position:"relative",zIndex:1,
      }}>
        <Reveal>
          <div style={{textAlign:"center",marginBottom:48}}>
            <Tag>✦ Achievements ✦</Tag>
            <h2 style={{...secHead,background:"linear-gradient(135deg,#fff 40%,#f472b6)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
              Certifications
            </h2>
          </div>
        </Reveal>
        <div style={{display:"flex",flexWrap:"wrap",gap:20,justifyContent:"center",maxWidth:860,margin:"0 auto"}}>
          {[
            {title:"Industrial 4.0 & IoT",issuer:"NPTEL · IIT Kharagpur",color:"#f472b6",icon:"🏆"},
            {title:"Embedded System Design",issuer:"NPTEL · IIT Kharagpur",color:"#fb923c",icon:"🥇"},
            {title:"Networking Essentials",issuer:"CISCO · GIFT Bhubaneswar",color:"#34d399",icon:"🌐"},
          ].map((c,i)=>(
            <Reveal key={i} delay={i*0.1}>
              <CertCard cert={c}/>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══ CONTACT ════════════════════════════════════════════ */}
      <section id="contact" style={{padding:"80px 6% 0",position:"relative",zIndex:1}}>
        <Reveal>
          <div style={{textAlign:"center",marginBottom:52}}>
            <Tag>✦ Let's Work Together ✦</Tag>
            <h2 style={secHead}>Connect With Me</h2>
            <p style={{color:"#6b7280",marginTop:12,maxWidth:440,margin:"12px auto 0",lineHeight:1.7}}>
              Open to full-time roles, internships & freelance projects. Let's build something amazing.
            </p>
          </div>
        </Reveal>
        <div style={{display:"flex",flexWrap:"wrap",gap:18,justifyContent:"center",maxWidth:860,margin:"0 auto 80px"}}>
          {[
            {icon:"✉",label:"Email",value:"ashiskumarmohanty738@gmail.com",href:"mailto:ashiskumarmohanty738@gmail.com?subject=Hiring%20Opportunity&body=Hi%20Ashis%2C%0A%0AI'd%20love%20to%20discuss%20an%20opportunity%20with%20you.",color:"#a78bfa"},
            {icon:"📞",label:"Phone",value:"+91 99387 76630",href:"tel:+919938776630",color:"#60a5fa"},
            {icon:"📍",label:"Location",value:"Bhubaneswar, Odisha, India",href:"#",color:"#34d399"},
            {icon:"in",label:"LinkedIn",value:"ashis-kumar-mohanty",href:"https://www.linkedin.com/in/ashis-kumar-mohanty-5340122ab",color:"#f472b6"},
          ].map((c,i)=>(
            <Reveal key={i} delay={i*0.08}><ContactCard c={c}/></Reveal>
          ))}
        </div>

        <div style={{
          borderTop:"1px solid rgba(255,255,255,0.07)",
          padding:"32px 0",
          display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",gap:16,
        }}>
          <div style={{fontSize:12,color:"#4b5563"}}>© 2024 Ashis Kumar Mohanty. All rights reserved.</div>
          <div style={{display:"flex",gap:20}}>
            {["About","Skills","Projects","Contact"].map(l=>(
              <button key={l} onClick={()=>document.getElementById(l.toLowerCase())?.scrollIntoView({behavior:"smooth"})}
                style={{background:"none",border:"none",color:"#6b7280",fontSize:12,cursor:"pointer",transition:"color 0.2s",padding:0}}
                onMouseEnter={e=>e.target.style.color="#a78bfa"} onMouseLeave={e=>e.target.style.color="#6b7280"}>{l}</button>
            ))}
          </div>
          <div style={{fontSize:12,color:"#4b5563"}}>Built with React · Made with 💜</div>
        </div>
      </section>
    </div>
  );
}

/* ── Shared style helpers ── */
const secHead = {
  fontSize:"clamp(1.9rem,4vw,2.8rem)",fontWeight:800,marginTop:10,
  background:"linear-gradient(135deg,#fff 40%,#a78bfa)",
  WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",
};

function Tag({children}) {
  return (
    <span style={{
      display:"inline-block",fontSize:10,letterSpacing:"0.18em",
      color:"#6366f1",textTransform:"uppercase",marginBottom:10,
      padding:"5px 14px",borderRadius:99,
      background:"rgba(99,102,241,0.1)",border:"1px solid rgba(99,102,241,0.2)",
    }}>{children}</span>
  );
}

function JourneyCard({item}) {
  const [h,setH]=useState(false);
  return (
    <div onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{
      padding:28,borderRadius:20,
      background:h?"rgba(255,255,255,0.08)":"rgba(255,255,255,0.03)",
      border:`1px solid ${h?item.color+"66":"rgba(255,255,255,0.08)"}`,
      transition:"all 0.35s ease",
      transform:h?"translateY(-5px)":"translateY(0)",
      boxShadow:h?`0 14px 44px ${item.color}22`:"none",
      backdropFilter:"blur(4px)",
    }}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14}}>
        <div style={{fontSize:28}}>{item.icon}</div>
        <span style={{
          fontSize:11,padding:"4px 12px",borderRadius:99,
          background:`${item.color}1a`,border:`1px solid ${item.color}44`,
          color:item.color,letterSpacing:"0.06em",
        }}>{item.period}</span>
      </div>
      <h3 style={{fontSize:16,fontWeight:700,color:"#e2e8f0",marginBottom:6}}>{item.title}</h3>
      <p style={{fontSize:12,color:item.color,marginBottom:12,fontWeight:600}}>{item.place}</p>
      <p style={{fontSize:13,color:"#9ca3af",lineHeight:1.7}}>{item.desc}</p>
    </div>
  );
}

function CertCard({cert}) {
  const [h,setH]=useState(false);
  return (
    <div onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{
      padding:"22px 30px",borderRadius:18,textAlign:"center",minWidth:240,
      background:h?`${cert.color}15`:"rgba(255,255,255,0.03)",
      border:`1px solid ${h?cert.color+"66":"rgba(255,255,255,0.08)"}`,
      transition:"all 0.35s ease",
      transform:h?"translateY(-5px) scale(1.03)":"translateY(0) scale(1)",
      boxShadow:h?`0 12px 36px ${cert.color}22`:"none",
      backdropFilter:"blur(4px)",
    }}>
      <div style={{fontSize:30,marginBottom:10}}>{cert.icon}</div>
      <h3 style={{fontSize:15,fontWeight:700,color:"#e2e8f0",marginBottom:6}}>{cert.title}</h3>
      <p style={{fontSize:12,color:cert.color,fontWeight:500}}>{cert.issuer}</p>
    </div>
  );
}

function ContactCard({c}) {
  const [h,setH]=useState(false);
  return (
    <a href={c.href} target={c.href.startsWith("http")?"_blank":undefined} rel="noreferrer"
      onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
      style={{
        padding:"22px 26px",borderRadius:18,
        display:"flex",alignItems:"center",gap:14,
        textDecoration:"none",minWidth:230,
        background:h?`${c.color}15`:"rgba(255,255,255,0.03)",
        border:`1px solid ${h?c.color+"66":"rgba(255,255,255,0.08)"}`,
        transition:"all 0.35s ease",
        transform:h?"translateY(-5px)":"translateY(0)",
        boxShadow:h?`0 12px 36px ${c.color}22`:"none",
        backdropFilter:"blur(4px)",
      }}>
      <div style={{
        width:44,height:44,borderRadius:12,flexShrink:0,
        background:`${c.color}1a`,border:`1px solid ${c.color}44`,
        display:"flex",alignItems:"center",justifyContent:"center",
        fontSize:18,color:c.color,fontWeight:800,
        transition:"all 0.3s",
        boxShadow:h?`0 4px 16px ${c.color}44`:"none",
      }}>{c.icon}</div>
      <div>
        <div style={{fontSize:10,color:"#6b7280",marginBottom:3,letterSpacing:"0.08em",textTransform:"uppercase"}}>{c.label}</div>
        <div style={{fontSize:13,color:h?c.color:"#d1d5db",fontWeight:500,transition:"color 0.3s",wordBreak:"break-all"}}>{c.value}</div>
      </div>
    </a>
  );
}