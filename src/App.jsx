import { useState, useEffect, useRef, useCallback } from "react";



/* ═══════════════════════════════════════════════════════════

   INLINE SVG ICONS — COMPLETELY REWRITTEN (NO ERRORS)

═══════════════════════════════════════════════════════════ */

const SVG = {

  HTML5: `<svg viewBox="0 0 128 128"><path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.005 112.198-45.019 12.48z"></path><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"></path><path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zM64 88.198l-.061.017-15.327-4.14-.979-10.977H33.816l1.928 21.609 28.193 7.822.063-.017z"></path><path fill="#fff" d="M63.952 52.455v13.897h16.795l-1.587 17.776-15.208 4.102v13.936l27.977-7.747.205-2.298 3.207-35.928.335-3.738zM63.952 24.599v13.886h26.331l.223-2.496.516-5.767.33-3.623z"></path></svg>`,

  CSS3: `<svg viewBox="0 0 128 128"><path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.054 112.771-45.247 12.543z"></path><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"></path><path fill="#EBEBEB" d="M64.001 51.429h-18.59l-1.237-14.039h19.827v-13.8h-34.64l.331 3.743 3.382 38.05h30.927zM64.001 88.038l-.047.012-15.398-4.126-.984-11.123h-13.78l1.937 21.892 28.192 7.799.063-.015z"></path><path fill="#fff" d="M64.001 51.429v13.783h16.844l-1.577 17.711-15.267 4.106v13.804l28.058-7.776.207-2.301 3.215-35.986.335-3.737zM64.001 24.596v13.807h26.475l.222-2.488.516-5.774.33-3.545z"></path></svg>`,

  JS: `<svg viewBox="0 0 128 128"><path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.047 3.617-4.135 6.922-3.358 2.513.563 4.816 2.084 6.187 5.011.523-1.29.994-2.543 1.514-3.793 2.518-6.021 5.192-11.813 7.759-17.589-7.023-2.796-13.584-4.291-20.234-4.291-.114 0-.227.002-.341.006-3.131.112-6.184.748-9.083 1.852-2.638.996-5.105 2.367-7.26 4.065-2.333 1.864-3.871 3.764-4.919 6.036-2.345 5.293-1.977 12.456 1.218 17.749 4.358 6.972 11.673 10.526 20.661 13.841 3.889 1.514 7.869 3.026 9.941 6.103.979 1.442 1.127 2.995.805 4.807-.508 3.146-2.792 4.973-6.099 5.382-4.284.636-8.241-1.189-10.128-4.732-1.137-1.918-1.72-3.996-2.272-6.092-.576.876-1.167 1.742-1.736 2.62-3.051 4.677-6.893 8.512-11.597 11.013-2.738 1.492-6.109 2.771-8.961 2.74-1.159-.012-2.31-.179-3.411-.524-2.619-.801-4.057-2.551-4.169-5.253-.095-1.787.369-3.571 1.155-5.186 2.297-4.173 7.203-6.568 12.733-7.424 3.054-.47 6.141-.447 9.178.144.281.059.562.124.842.189-1.025-2.461-2.111-4.901-3.156-7.354-5.674.471-11.322.087-16.848-.992-5.353-1.046-10.129-3.213-13.875-6.889-5.371-5.699-7.674-12.754-6.537-20.571.88-6.172 3.804-11.443 8.279-15.297 3.883-3.307 8.535-5.443 13.788-6.475 5.397-1.063 10.949-.987 16.411.115 4.745.958 9.145 2.605 13.047 5.163 1.979 1.321 3.727 2.926 5.197 4.792.881 1.132 1.875 2.251 2.522 3.555.206.403.388.815.556 1.233 2.602-5.078 5.249-10.146 7.858-15.231z"></path></svg>`,

  TS: `<svg viewBox="0 0 128 128"><path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path><path fill="#007acc" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.78-.26-6.23 1.73-6.23 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.57-1.61-3.1-4.09-3.1-4.5 0-.2.84-.59 1.45-.9.47-.24 2.13-1.26 2.63-1.58l1.6-1.06 3.6 5.31a12 12 0 009.45 4.86 13.18 13.18 0 009.38-4 7.18 7.18 0 001.89-4.63c0-1.87-.73-3.28-2.32-4.71-1.73-1.52-3.49-2.6-8.21-5.07-5.9-3.09-8.84-5.4-11.54-9a19.12 19.12 0 01-2.86-10.26c.24-5.76 3.49-10.38 8.8-12.5a21 21 0 016.63-1.35 27 27 0 015.74.13zm-39.42 5.8c0 .29-.12 2.44-.27 4.78l-.31 4.27H48.6v39.44c0 28.34-.1 39.66-.37 40.18-.88 1.7-3.15 2.12-6.1 1.13-1.75-.58-2.26-.94-2.26-1.59 0-.2.11-18.21.24-40.05l.27-39.72h-8.41c-6.36 0-8.48-.08-9.1-.36-1.19-.51-1.48-1.42-1.32-4.09l.1-2.22h25.65c14.11 0 25.68.1 25.7.23z"></path></svg>`,

  PY: `<svg viewBox="0 0 128 128"><path fill="#387EB8" d="M63.916 2.1c-7.1 0-6.651 3.07-6.651 3.07v3.19h6.752v1H6.545S2 8.8 2 15.993s4.013 6.912 4.013 6.912H8.33v-3.361s-.13-4.013 3.9-4.013h6.762s3.772.06 3.772-3.652V5.8s.572-3.7-6.879-3.7zm-3.741 2.137a1.214 1.214 0 111.214 1.214 1.214 1.214 0 01-1.214-1.214z"></path><path fill="#FFC331" d="M16.085 29.9c7.1 0 6.651-3.07 6.651-3.07v-3.19h-6.752v-1h9.441S30 23.2 30 16.007s-4.013-6.912-4.013-6.912H23.67v3.361s.13 4.013-3.9 4.013h-6.762s-3.772-.06-3.772 3.652v6.079S8.664 29.9 16.085 29.9zm3.741-2.137a1.214 1.214 0 111.214-1.214 1.214 1.214 0 01-1.214 1.214z"></path></svg>`,

  JAVA: `<svg viewBox="0 0 128 128"><path fill="#EA2D2E" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.472-55.308-.607-36.115-5.969z"></path><path fill="#EA2D2E" d="M44.629 84.455s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"></path><path fill="#F58220" d="M69.44 55.441c6.022 6.927-1.58 13.158-1.58 13.158s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.199z"></path><path fill="#EA2D2E" d="M94.22 102.853s3.526 2.906-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.54 8.034 90.363-3.607 77.896-9.468z"></path><path fill="#EA2D2E" d="M50.106 73.165s-22.855 5.426-8.091 7.395c6.233.832 18.659.641 30.245-.328 9.463-.793 18.969-2.489 18.969-2.489s-3.337 1.427-5.752 3.071c-23.216 6.108-68.052 3.264-55.164-2.985 10.937-5.186 19.793-4.664 19.793-4.664z"></path><path fill="#EA2D2E" d="M97.282 88.735c23.623-12.275 12.703-24.078 5.079-22.489-1.868.389-2.703.729-2.703.729s.695-1.088 2.018-1.558c15.109-5.296 26.731 15.617-4.877 23.888 0 0 .367-.33.483-.57z"></path><path fill="#F58220" d="M75.46 23.243c13.611 12.745-3.617 24.24-3.617 24.24s8.993-4.531 14.733-13.639c5.731-9.09 3.384-17.755-11.116-10.601z"></path><path fill="#EA2D2E" d="M52.355 119.13c22.646 1.438 57.428-.798 58.258-11.528 0 0-1.584 4.061-18.652 7.283-19.241 3.633-42.945 3.207-57.012.878 0 0 2.876 2.379 17.406 3.367z"></path></svg>`,

  REACT: `<svg viewBox="0 0 128 128"><circle cx="64" cy="64" r="11.4" fill="#61DAFB"></circle><path fill="none" stroke="#61DAFB" stroke-width="3" d="M107.3 64c0-12.6-9.4-23.7-24.3-30.4c-9.5-4.2-20.7-6.4-32.2-6.4c-11.5 0-22.7 2.2-32.2 6.4C30.1 40.3 20.7 51.4 20.7 64c0 12.6 9.4 23.7 24.3 30.4c9.5 4.2 20.7 6.4 32.2 6.4c11.5 0 22.7-2.2 32.2-6.4c14.9-6.7 24.3-17.8 24.3-30.4z"></path><path fill="none" stroke="#61DAFB" stroke-width="3" d="M87.5 43.4c-6.2-10.9-14.4-19-23.5-23.5c-9.1-4.5-18.4-5-26.5-1.4c-8.1 3.6-13.9 11.9-17 23.6c-3.1 11.7-2.4 25.4 2 39.7c3.7 12.2 9.9 21.7 17.9 26.8c8 5.1 17 5.5 25.1 1.8c8.1-3.7 14-12.5 17.1-24.7c3.1-12.2 2.4-25.9-1.9-40.3z"></path><path fill="none" stroke="#61DAFB" stroke-width="3" d="M87.5 84.6c6.2-10.9 9.1-22.8 8.4-34.3c-.7-11.5-4.7-21.6-11.4-27.7c-6.7-6.1-15-8.8-23.9-7.8c-8.9 1-17.5 5.7-24.5 13.2c-7 7.5-11.2 17-13 27.6c-1.8 10.6-.7 21.3 3.2 31c3.9 9.7 10.4 17.1 18.6 20.7c8.2 3.6 17 3.5 25.2.2c8.2-3.3 14.6-10.5 18.4-20.1z"></path></svg>`,

  TW: `<svg viewBox="0 0 128 128"><path fill="#38BDF8" d="M64 16c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm0 88c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"></path><path fill="#38BDF8" d="M64 32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm0 56c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24z"></path></svg>`,

  BS: `<svg viewBox="0 0 128 128"><rect width="128" height="128" rx="16" fill="#563D7C"></rect><path fill="#FFF" d="M40 32h30a20 20 0 0114 34 22 22 0 01-14 42H40zm16 16v20h12a10 10 0 000-20zm0 36v22h14a11 11 0 000-22z"></path></svg>`,

  NODE: `<svg viewBox="0 0 128 128"><path fill="#3C873A" d="M64 3l55 31.8v63.6L64 129 9 97.2V33.8L64 2z"></path><path fill="#3C873A" opacity=".4" d="M64 29l33 19v38L64 105 31 86V48l33-19z"></path><path fill="#FFF" d="M52 78c0 6.8 4 10 10 10s10-3.2 10-10V62h-8v16c0 1.2-.8 2-2 2s-2-.8-2-2V78h-8z"></path></svg>`,

  EXPRESS: `<svg viewBox="0 0 128 128"><path fill="#999" d="M9.6 61.6l4-18.3c2.8-12.8 12.9-17.6 21-14.3 8.5 3.9 12.6 10.8 13.2 19.8.3 4.2.1 8.4.1 12.7H12.9c-.5 10.8 6.2 17.2 17.2 16.6 4.8-.3 9-1.9 12.4-5.4 1.2-1.2 2.2-1.5 3.7-.8l-5.1 6.4c-7.7 5.9-20.8 5.9-28.6 0-4.8-3.7-7.2-8.7-6.9-15.1zm8-3.6h40.8c-.3-10.6-7.1-17.8-18.5-17.8-12-.1-20.8 7.9-22.3 17.8z"></path><path fill="#999" d="M84.9 95.5c-2.8-1.8-4.6-4.2-5.4-7.8-1 4.4-3 7.6-7 9.7-7.8 4.1-15.6.8-18.4-6.8-1.9-5.2-1.4-10.5 1.3-15.4 2.9-5.3 7.5-8.1 13.6-8.8 6.6-.8 12.4 1.2 17 5.8 1.2 1.2 2 2.6 3 4.2-7.4-5.2-15.9-4.9-21.8 1-3.3 3.3-4.8 7.4-3.9 12 1 5 4.9 8 9.9 7.5 4.8-.5 8.3-2.9 10.7-7.2z"></path><path fill="#999" d="M127.6 85.5c-1 5.2-3.4 9.2-7.9 11.8-8.2 4.7-17.5 2.9-21.6-4.6-2.3-4.2-2.6-8.7-1.5-13.3 1.3-5.2 4.2-9.2 8.9-11.7 8.2-4.4 17.5-2.2 21.3 4.9 1.9 3.6 2.1 7.5 1.2 11.5h-24.9c-.1 2.9.7 5.5 2.6 7.6 2.8 3.1 6.9 3.8 10.4 2 2.1-1.1 3.3-2.9 3.6-5.2h5.6zm-5.4-8.1c-.2-3.2-2.2-5.4-5.2-5.9-3.7-.6-6.6 1.4-7.6 4.9-.3 1-.5 2-.5 3h13.3z"></path></svg>`,

  MYSQL: `<svg viewBox="0 0 128 128"><path fill="#00758F" d="M8 64c0-15.4 12.6-28 28-28h56c15.4 0 28 12.6 28 28s-12.6 28-28 28H36c-15.4 0-28-12.6-28-28z" opacity=".15"></path><path fill="#00758F" d="M20 40h12v48H20zm18 0h12l16 32 16-32h12v48h-12V68l-12 24-12-24v20H38zM102 40h12v48h-12z"></path><path fill="#F29111" d="M102 64c0 10-8 18-18 18s-18-8-18-18 8-18 18-18 18 8 18 18z" opacity=".8"></path></svg>`,

  MONGO: `<svg viewBox="0 0 128 128"><path fill="#599636" d="M64 8c-4.8 8-8 14-8 24 0 12 6 20 8 26 2-6 8-14 8-26 0-10-3.2-16-8-24z"></path><path fill="#6CAC48" d="M64 58v62c14-4 24-20 24-40s-10-36-24-22z"></path><path fill="#599636" d="M64 58v62c-14-4-24-20-24-40s10-36 24-22z"></path></svg>`,

  DOCKER: `<svg viewBox="0 0 128 128"><rect x="8" y="56" width="20" height="16" rx="4" fill="#099CEC"></rect><rect x="32" y="56" width="20" height="16" rx="4" fill="#099CEC"></rect><rect x="56" y="56" width="20" height="16" rx="4" fill="#099CEC"></rect><rect x="32" y="36" width="20" height="16" rx="4" fill="#099CEC"></rect><rect x="56" y="36" width="20" height="16" rx="4" fill="#099CEC"></rect><rect x="56" y="16" width="20" height="16" rx="4" fill="#099CEC"></rect><rect x="80" y="36" width="20" height="16" rx="4" fill="#099CEC"></rect><path fill="#099CEC" d="M116 66c-2-4-8-6-14-6-2-8-8-14-16-16l-2.8 2.8c6 3.2 8 8 8.8 13.2H10c0 16 12 30 28 34 12 3.2 28 2 40-6 8-6 14-14 16-24 6-.4 12-4 14-10z"></path></svg>`,

  GH: `<svg viewBox="0 0 128 128"><path fillRule="evenodd" clipRule="evenodd" fill="#fff" d="M64 5.2c-32.5 0-58.9 26.4-58.9 58.9 0 26 16.9 48.1 40.3 55.9 2.9.5 4-1.3 4-2.8 0-1.4-.1-6-.1-10.9-14.2 2.6-17.8-3.4-18.9-6.6-.6-1.6-3.3-6.6-5.6-7.9-1.9-1-4.6-3.5-.1-3.6 4.3-.1 7.3 4 8.3 5.6 4.9 8.2 12.7 5.9 15.8 4.5.5-3.5 1.9-5.9 3.5-7.2-12.1-1.4-24.8-6-24.8-26.8 0-5.9 2.1-10.8 5.6-14.6-.6-1.4-2.4-6.9.5-14.3 0 0 4.6-1.5 15 5.5 4.4-1.2 9.1-1.8 13.7-1.8 4.7 0 9.3.6 13.7 1.8 10.4-7 15-5.5 15-5.5 2.9 7.4 1.1 12.9.5 14.3 3.5 3.8 5.6 8.7 5.6 14.6 0 20.8-12.7 25.4-24.8 26.8 2 1.7 3.7 5 3.7 10 0 7.2-.1 13-.1 14.8 0 1.5 1.1 3.3 4 2.8 23.4-7.8 40.3-29.9 40.3-55.9 0-32.5-26.4-58.9-58.9-58.9z"></path></svg>`,

  AWS: `<svg viewBox="0 0 128 128"><path fill="#F90" d="M36 81.2c-6 3.2-10 4.8-14.8 4.8-9.2 0-15.2-6.4-15.2-15.6 0-11.2 8-18.4 20.8-18.4 3.2 0 6 .4 9.2 1.6v8c-2.8-1.6-5.6-2.4-8.4-2.4-7.2 0-11.6 4-11.6 11.2 0 6 3.6 9.6 9.6 9.6 2 0 4-.4 6.4-1.6v-5.2h-6.8V68H36v13.2zm18.8 4V56h8.8v29.2h-8.8zm23.2 0l-11.2-28h9.6l6.8 19.6 6.8-19.6H100l-11.2 28H78zm38-13.2c0 8.4-6 14-15.2 14-2.8 0-5.6-.4-7.6-1.2v-7.6c2 1.2 4.4 2 6.8 2 4.4 0 6.8-2.4 6.8-7.2 0-4.4-2.4-6.8-6.4-6.8-1.6 0-3.6.4-5.2 1.2v-7.6c1.6-.8 4-1.2 6-1.2 8.8 0 14.8 5.6 14.8 14.4z"></path><path fill="#F90" d="M64 104c-22 0-40.8-10.8-52-27.2 2.4 1.2 4.8 1.6 7.6 1.6 10.4 0 20-6.8 20-6.8s6.8 4.4 16.4 4.4c9.2 0 16.8-4.4 16.8-4.4s9.6 6.8 20 6.8c2.8 0 5.2-.4 7.6-1.6-8.8 15.6-26 26-46 26z"></path></svg>`,

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

   PROJECTS with optimized image URLs (using faster CDN)

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

    tech:"React · Mongodb · Express · Node",

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
      "https://assets.unlayer.com/projects/0/1781098169310-0f977463-4d12-4590-9c84-54411dc59f63.jpeg",
      "https://assets.unlayer.com/projects/0/1781098353034-4526e49d-87fc-40fa-9432-82ada3d48471.jpeg",
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

   PROJECT CARD — 3D ROTATION EFFECT with Lazy Loading

═══════════════════════════════════════════════════════════ */

function ProjectCard({proj, idx}) {

  const [imgIdx, setImgIdx] = useState(0);

  const [flipping, setFlipping] = useState(false);

  const [showSnake, setShowSnake] = useState(proj.hasSnake);

  const [hov, setHov] = useState(false);

  const [rotateX, setRotateX] = useState(0);

  const [rotateY, setRotateY] = useState(0);

  const [loadedImages, setLoadedImages] = useState({});

  const cardRef = useRef(null);



  // Preload images for faster loading

  useEffect(() => {

    if (!proj.hasSnake || !showSnake) {

      proj.images.forEach((src, i) => {

        const img = new Image();

        img.src = src;

        img.onload = () => setLoadedImages(prev => ({ ...prev, [i]: true }));

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

            <div style={{width:"100%",height:"100%",position:"relative",background:"#0a0a1a"}}>

              {!loadedImages[imgIdx] && (

                <div style={{

                  position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",

                  background:"rgba(0,0,0,0.5)",color:"#a78bfa",fontSize:14,

                }}>Loading...</div>

              )}

              <img

                src={proj.images[imgIdx]}

                alt=""

                style={{

                  width:"100%",height:"100%",objectFit:"cover",display:"block",

                  opacity: loadedImages[imgIdx] ? 1 : 0,

                  transition:"opacity 0.2s ease",

                }}

                loading="eager"

              />

            </div>

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

      transition:`opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,

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

   RESPONSIVE NAVIGATION BAR

═══════════════════════════════════════════════════════════ */

function Nav() {

  const [scroll, setScroll] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  

  useEffect(() => {

    const handleScroll = () => setScroll(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  

  const go = (id) => {

    setMobileMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  };

  

  return (

    <nav style={{

      position: "fixed",

      top: 0,

      left: 0,

      right: 0,

      zIndex: 200,

      height: "auto",

      minHeight: 64,

      padding: "12px 6%",

      display: "flex",

      alignItems: "center",

      justifyContent: "space-between",

      flexWrap: "wrap",

      background: scroll ? "rgba(5,0,20,0.95)" : "rgba(5,0,20,0.8)",

      backdropFilter: "blur(20px)",

      borderBottom: scroll ? "1px solid rgba(167,139,250,0.15)" : "1px solid rgba(167,139,250,0.08)",

      transition: "all 0.4s ease",

      boxSizing: "border-box",

    }}>

      <div 

        onClick={() => go("hero")} 

        style={{

          fontWeight: 900,

          fontSize: "clamp(20px, 5vw, 24px)",

          letterSpacing: "0.06em",

          color: "#fff",

          cursor: "pointer",

          whiteSpace: "nowrap",

        }}

      >

        <span style={{

          background: "linear-gradient(135deg,#a78bfa,#60a5fa)",

          WebkitBackgroundClip: "text",

          WebkitTextFillColor: "transparent",

        }}>A</span>KM

      </div>

      

      <div style={{

        display: mobileMenuOpen ? "none" : "flex",

        gap: "clamp(16px, 4vw, 28px)",

        alignItems: "center",

        flexWrap: "wrap",

      }} className="desktop-nav">

        {["About", "Skills", "Projects", "Contact"].map(l => (

          <NLink key={l} label={l} onClick={() => go(l.toLowerCase())} />

        ))}

      </div>

      

      <div style={{display:"flex", gap:12, alignItems:"center"}}>

        {/* Resume Download Button */}

        <a

          href="https://drive.google.com/uc?export=download&id=1N3ZwkjHuXfv_DIbEfxw4b8pTW-C8yZ1O"

          download

          style={{

            padding: "8px 18px",

            borderRadius: 50,

            background: "linear-gradient(135deg,#10b981,#059669)",

            color: "#fff",

            fontSize: "clamp(11px, 3vw, 13px)",

            fontWeight: 700,

            textDecoration: "none",

            transition: "all 0.25s",

            letterSpacing: "0.04em",

            boxShadow: "0 4px 12px #10b98155",

            whiteSpace: "nowrap",

            display: mobileMenuOpen ? "none" : "inline-block",

          }}

          onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.boxShadow = "0 6px 20px #10b98188"; }}

          onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 4px 12px #10b98155"; }}

        >

          📄 Resume

        </a>

        

        <a

          href="mailto:ashiskumarmohanty738@gmail.com?subject=Hiring%20Opportunity%20for%20Ashis%20Kumar%20Mohanty&body=Hi%20Ashis%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20potential%20opportunity%20with%20you.%0A%0APlease%20let%20me%20know%20your%20availability.%0A%0ARegards"

          style={{

            padding: "8px 18px",

            borderRadius: 50,

            background: "linear-gradient(135deg,#7c3aed,#4f46e5)",

            color: "#fff",

            fontSize: "clamp(11px, 3vw, 13px)",

            fontWeight: 700,

            textDecoration: "none",

            transition: "all 0.25s",

            letterSpacing: "0.04em",

            boxShadow: "0 4px 12px #7c3aed55",

            whiteSpace: "nowrap",

            display: mobileMenuOpen ? "none" : "inline-block",

          }}

          onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.boxShadow = "0 6px 20px #7c3aed88"; }}

          onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 4px 12px #7c3aed55"; }}

        >

          ✉ Hire Me

        </a>

      </div>

      

      <button

        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}

        style={{

          display: "none",

          background: "rgba(255,255,255,0.1)",

          border: "1px solid rgba(167,139,250,0.3)",

          borderRadius: 8,

          padding: "8px 12px",

          cursor: "pointer",

          color: "#fff",

          fontSize: 20,

        }}

        className="mobile-menu-btn"

      >

        {mobileMenuOpen ? "✕" : "☰"}

      </button>

      

      {mobileMenuOpen && (

        <div style={{

          position: "absolute",

          top: "100%",

          left: 0,

          right: 0,

          background: "rgba(5,0,20,0.98)",

          backdropFilter: "blur(20px)",

          borderBottom: "1px solid rgba(167,139,250,0.2)",

          padding: "16px 6%",

          display: "flex",

          flexDirection: "column",

          gap: 16,

          zIndex: 199,

        }}>

          {["About", "Skills", "Projects", "Contact"].map(l => (

            <button

              key={l}

              onClick={() => go(l.toLowerCase())}

              style={{

                background: "none",

                border: "none",

                color: "#d1d5db",

                fontSize: 16,

                fontWeight: 500,

                padding: "10px 0",

                textAlign: "left",

                cursor: "pointer",

                borderBottom: "1px solid rgba(167,139,250,0.1)",

              }}

            >

              {l}

            </button>

          ))}

          <a

            href="https://drive.google.com/uc?export=download&id=1N3ZwkjHuXfv_DIbEfxw4b8pTW-C8yZ1O"

            download

            style={{

              padding: "10px 20px",

              borderRadius: 50,

              background: "linear-gradient(135deg,#10b981,#059669)",

              color: "#fff",

              fontSize: 14,

              fontWeight: 700,

              textDecoration: "none",

              textAlign: "center",

              marginTop: 8,

            }}

          >

            📄 Download Resume

          </a>

          <a

            href="mailto:ashiskumarmohanty738@gmail.com"

            style={{

              padding: "10px 20px",

              borderRadius: 50,

              background: "linear-gradient(135deg,#7c3aed,#4f46e5)",

              color: "#fff",

              fontSize: 14,

              fontWeight: 700,

              textDecoration: "none",

              textAlign: "center",

            }}

          >

            ✉ Hire Me

          </a>

        </div>

      )}

    </nav>

  );

}



function NLink({ label, onClick }) {

  const [h, setH] = useState(false);

  return (

    <button

      onClick={onClick}

      onMouseEnter={() => setH(true)}

      onMouseLeave={() => setH(false)}

      style={{

        background: "none",

        border: "none",

        cursor: "pointer",

        padding: "4px 2px",

        color: h ? "#a78bfa" : "#d1d5db",

        fontSize: "clamp(13px, 3.5vw, 14px)",

        fontWeight: 500,

        borderBottom: h ? "1.5px solid #a78bfa" : "1.5px solid transparent",

        transition: "all 0.2s",

        whiteSpace: "nowrap",

      }}

    >

      {label}

    </button>

  );

}



/* ═══════════════════════════════════════════════════════════

   UNIQUE PROFILE COMPONENT

═══════════════════════════════════════════════════════════ */

function ProfileSection() {

  const [hover, setHover] = useState(false);

  

  return (

    <div style={{

      position: "relative",

      display: "flex",

      flexDirection: "column",

      alignItems: "center",

      justifyContent: "center",

      marginBottom: 32,

      width: "100%",

    }}>

      <div

        onMouseEnter={() => setHover(true)}

        onMouseLeave={() => setHover(false)}

        style={{

          position: "relative",

          width: "clamp(140px, 25vw, 200px)",

          height: "clamp(160px, 28vw, 220px)",

          cursor: "pointer",

          transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",

          transform: hover ? "scale(1.02) translateY(-5px)" : "scale(1) translateY(0)",

        }}

      >

        <div style={{

          position: "absolute",

          inset: -3,

          background: hover 

            ? "linear-gradient(135deg, #a78bfa, #f472b6, #22d3ee, #a78bfa)"

            : "linear-gradient(135deg, #4f46e5, #7c3aed)",

          backgroundSize: hover ? "300% 300%" : "100%",

          borderRadius: "40% 60% 45% 55% / 50% 45% 55% 50%",

          opacity: 0.9,

          animation: hover ? "gradientShift 2s ease infinite" : "none",

          transition: "all 0.3s ease",

          filter: hover ? "blur(2px)" : "none",

        }} />

        

        <div style={{

          position: "absolute",

          inset: 0,

          borderRadius: "40% 60% 45% 55% / 50% 45% 55% 50%",

          overflow: "hidden",

          background: "#030010",

          boxShadow: hover 

            ? "0 25px 45px rgba(167,139,250,0.3), inset 0 0 20px rgba(167,139,250,0.1)"

            : "0 10px 30px rgba(0,0,0,0.3)",

          transition: "box-shadow 0.4s ease",

        }}>

          <img 

            src="https://assets.unlayer.com/projects/0/1781066867183-Picture1.jpg" 

            alt="Ashis Kumar Mohanty"

            style={{

              width: "100%",

              height: "100%",

              objectFit: "cover",

              objectPosition: "center 20%",

              transition: "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",

              transform: hover ? "scale(1.08)" : "scale(1)",

            }}

          />

          

          {hover && (

            <div style={{

              position: "absolute",

              inset: 0,

              background: "linear-gradient(135deg, rgba(167,139,250,0.15), rgba(34,211,238,0.1))",

              pointerEvents: "none",

            }} />

          )}

        </div>

        

        <div style={{

          position: "absolute",

          top: -10,

          left: -10,

          width: 20,

          height: 20,

          borderRadius: "60% 40% 30% 70%",

          background: hover ? "#a78bfa" : "rgba(167,139,250,0.5)",

          opacity: hover ? 0.8 : 0.4,

          transition: "all 0.3s ease",

          animation: "floatParticle1 4s ease-in-out infinite",

        }} />

        <div style={{

          position: "absolute",

          bottom: -8,

          right: -12,

          width: 16,

          height: 16,

          borderRadius: "30% 70% 70% 30%",

          background: hover ? "#f472b6" : "rgba(244,114,182,0.5)",

          opacity: hover ? 0.8 : 0.4,

          transition: "all 0.3s ease",

          animation: "floatParticle2 3.5s ease-in-out infinite",

        }} />

        <div style={{

          position: "absolute",

          top: "20%",

          right: -15,

          width: 12,

          height: 12,

          borderRadius: "50%",

          background: hover ? "#22d3ee" : "rgba(34,211,238,0.5)",

          opacity: hover ? 0.9 : 0.5,

          transition: "all 0.3s ease",

          animation: "floatParticle3 3s ease-in-out infinite",

        }} />

        <div style={{

          position: "absolute",

          bottom: "30%",

          left: -12,

          width: 14,

          height: 14,

          borderRadius: "40% 60% 60% 40%",

          background: hover ? "#60a5fa" : "rgba(96,165,250,0.5)",

          opacity: hover ? 0.7 : 0.4,

          transition: "all 0.3s ease",

          animation: "floatParticle4 4.5s ease-in-out infinite",

        }} />

      </div>

      

      <div style={{

        textAlign: "center",

        marginTop: "clamp(20px, 5vw, 28px)",

        transition: "all 0.3s ease",

        transform: hover ? "translateY(-3px)" : "translateY(0)",

      }}>

        <h3 style={{

          fontSize: "clamp(20px, 5.5vw, 26px)",

          fontWeight: 800,

          background: "linear-gradient(135deg, #fff, #a78bfa, #f472b6)",

          backgroundSize: "200% 200%",

          WebkitBackgroundClip: "text",

          WebkitTextFillColor: "transparent",

          marginBottom: 10,

          letterSpacing: "-0.02em",

        }}>Ashis Kumar Mohanty</h3>

        

        <div style={{

          display: "inline-flex",

          alignItems: "center",

          gap: 10,

          padding: "8px 22px",

          borderRadius: 50,

          background: "rgba(167,139,250,0.1)",

          border: "1px solid rgba(167,139,250,0.35)",

          transition: "all 0.3s ease",

          backdropFilter: "blur(8px)",

        }}>

          <span style={{

            width: 8,

            height: 8,

            borderRadius: "50%",

            background: "#22d3ee",

            display: "inline-block",

            animation: "pulse 1.5s ease-in-out infinite",

          }} />

          <span style={{

            fontSize: "clamp(11px, 3.5vw, 13px)",

            color: "#c4b5fd",

            letterSpacing: "0.08em",

            fontWeight: 600,

          }}>Full Stack Developer</span>

          <span style={{

            width: 8,

            height: 8,

            borderRadius: "50%",

            background: "#f472b6",

            display: "inline-block",

            animation: "pulse 1.5s ease-in-out infinite 0.75s",

          }} />

        </div>

      </div>

      

      <style>{`

        @keyframes floatParticle1 {

          0%, 100% { transform: translate(0, 0) rotate(0deg); }

          50% { transform: translate(-5px, -8px) rotate(90deg); }

        }

        @keyframes floatParticle2 {

          0%, 100% { transform: translate(0, 0) rotate(0deg); }

          50% { transform: translate(6px, -5px) rotate(-60deg); }

        }

        @keyframes floatParticle3 {

          0%, 100% { transform: translate(0, 0) scale(1); }

          50% { transform: translate(4px, -6px) scale(1.3); }

        }

        @keyframes floatParticle4 {

          0%, 100% { transform: translate(0, 0); }

          50% { transform: translate(-4px, 6px); }

        }

        @keyframes gradientShift {

          0% { background-position: 0% 50%; }

          50% { background-position: 100% 50%; }

          100% { background-position: 0% 50%; }

        }

      `}</style>

    </div>

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

  useEffect(() => {

    const style = document.createElement('style');

    style.textContent = `

      @media (max-width: 768px) {

        .desktop-nav {

          display: none !important;

        }

        .mobile-menu-btn {

          display: flex !important;

        }

      }

    `;

    document.head.appendChild(style);

    return () => document.head.removeChild(style);

  }, []);

  

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

        @media (max-width: 768px) {

          .desktop-nav {

            display: none !important;

          }

          .mobile-menu-btn {

            display: flex !important;

          }

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

          <ProfileSection />



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

            fontSize:"clamp(2rem,6vw,3.9rem)",fontWeight:900,lineHeight:1.2,

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

            fontSize:"clamp(13px, 4vw, 15px)",lineHeight:1.7,color:"#94a3b8",marginBottom:38,

            animation:"slideUp 0.9s ease 0.2s both",textAlign:"center",

          }}>

            I'm <strong style={{color:"#e2e8f0",fontWeight:700}}>Ashis Kumar Mohanty</strong> — B.Tech CSE (2026) & Full Stack Engineer. Passionate about building impactful, pixel-perfect web applications.

          </p>



          <div style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap",animation:"slideUp 0.9s ease 0.3s both"}}>

            <button

              onClick={()=>document.getElementById("projects")?.scrollIntoView({behavior:"smooth"})}

              style={{

                padding:"12px 24px",borderRadius:50,border:"none",

                background:"linear-gradient(135deg,#7c3aed,#4f46e5)",

                color:"#fff",fontWeight:700,fontSize:"clamp(12px, 3.5vw, 14px)",cursor:"pointer",

                transition:"all 0.3s ease",boxShadow:"0 6px 24px #7c3aed55",letterSpacing:"0.04em",

              }}

              onMouseEnter={e=>{e.target.style.transform="translateY(-3px)";e.target.style.boxShadow="0 12px 36px #7c3aed88";}}

              onMouseLeave={e=>{e.target.style.transform="translateY(0)";e.target.style.boxShadow="0 6px 24px #7c3aed55";}}

            >View Projects ↓</button>

            <a

              href="mailto:ashiskumarmohanty738@gmail.com?subject=Hiring%20Opportunity&body=Hi%20Ashis%2C%0A%0AI'd%20love%20to%20connect%20regarding%20a%20potential%20opportunity."

              style={{

                padding:"12px 24px",borderRadius:50,

                border:"1.5px solid rgba(167,139,250,0.45)",

                color:"#c4b5fd",fontWeight:600,fontSize:"clamp(12px, 3.5vw, 14px)",

                textDecoration:"none",transition:"all 0.3s ease",letterSpacing:"0.04em",

                display:"inline-block",

              }}

              onMouseEnter={e=>{e.currentTarget.style.background="rgba(124,58,237,0.18)";e.currentTarget.style.borderColor="#a78bfa";e.currentTarget.style.transform="translateY(-3px)";}}

              onMouseLeave={e=>{e.currentTarget.style.background="transparent";e.currentTarget.style.borderColor="rgba(167,139,250,0.45)";e.currentTarget.style.transform="translateY(0)";}}

            >✉ Contact Me</a>

          </div>



          <div style={{display:"flex",gap:28,justifyContent:"center",marginTop:44,animation:"slideUp 0.9s ease 0.45s both",flexWrap:"wrap"}}>

            {[{n:"8.18",l:"CGPA"},  {n:"10+",l:"Projects"}, {n:"4+",l:"Internship"}].map(s=>(

              <div key={s.l} style={{textAlign:"center"}}>

                <div style={{

                  fontSize:"clamp(1.5rem, 5vw, 1.8rem)",fontWeight:900,

                  background:"linear-gradient(135deg,#a78bfa,#60a5fa)",

                  WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",

                }}>{s.n}</div>

                <div style={{fontSize:"clamp(10px, 3vw, 11px)",color:"#6b7280",letterSpacing:"0.08em",marginTop:2}}>{s.l}</div>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* ══ MARQUEE with Background Video ═══════════════════════ */}

      <div style={{

        position:"relative",

        padding:"60px 0",

        overflow:"hidden",

        zIndex:1,

      }}>

        {/* Background Video */}

        <video

          autoPlay

          loop

          muted

          playsInline

          style={{

            position:"absolute",

            top:0,

            left:0,

            width:"100%",

            height:"100%",

            objectFit:"cover",

            zIndex:0,

            opacity:0.15,

          }}

        >

          <source src="https://spaceportfolio.netlify.app/videos/skills-bg.webm" type="video/webm" />

        </video>

        

        <div style={{position:"relative",zIndex:1}}>

          <Reveal>

            <div style={{textAlign:"center",marginBottom:28, padding:"0 16px"}}>

              <span style={{

                display:"inline-block",fontSize:10,letterSpacing:"0.18em",

                color:"#6366f1",textTransform:"uppercase",marginBottom:8,

                padding:"4px 14px",borderRadius:99,

                background:"rgba(99,102,241,0.12)",border:"1px solid rgba(99,102,241,0.25)",

              }}>✦ Modern Tech Stack ✦</span>

              <h2 style={{

                fontSize:"clamp(1.2rem, 5vw, 2rem)",fontWeight:800,color:"#e2e8f0",marginTop:8,

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

      </div>



      {/* ══ ABOUT / EXPERIENCE ════════════════════════════════ */}

      <section id="about" style={{padding:"clamp(60px, 10vw, 100px) 6%",position:"relative",zIndex:1}}>

        <Reveal>

          <div style={{textAlign:"center",marginBottom:56}}>

            <Tag>✦ About Me ✦</Tag>

            <h2 style={secHead}>My Journey</h2>

          </div>

        </Reveal>

        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:22,maxWidth:1000,margin:"0 auto"}}>

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

        padding:"clamp(60px, 10vw, 100px) 6%",position:"relative",zIndex:1,

        background:"linear-gradient(180deg,transparent,rgba(124,58,237,0.04),transparent)",

      }}>

        <Reveal>

          <div style={{textAlign:"center",marginBottom:56}}>

            <Tag>✦ What I Know ✦</Tag>

            <h2 style={secHead}>My Skills & Technologies</h2>

            <p style={{color:"#6b7280",marginTop:12,fontSize:"clamp(13px, 4vw, 15px)"}}>Tools and technologies I work with every day</p>

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

                display:"flex",alignItems:"center",gap:12,marginBottom:18,flexWrap:"wrap",

              }}>

                <span style={{

                  fontSize:11,fontWeight:700,letterSpacing:"0.14em",

                  color:"#7c3aed",textTransform:"uppercase",

                  padding:"4px 12px",borderRadius:99,

                  background:"rgba(124,58,237,0.12)",border:"1px solid rgba(124,58,237,0.25)",

                }}>{g.group}</span>

                <div style={{flex:1,height:1,background:"linear-gradient(90deg,rgba(124,58,237,0.3),transparent)", minWidth:50}}/>

              </div>

              <div style={{display:"flex",flexWrap:"wrap",gap:12, justifyContent:"center"}}>

                {g.icons.map(ic=><SkillChip key={ic.name} icon={ic}/>)}

              </div>

            </div>

          </Reveal>

        ))}

      </section>



      {/* ══ PROJECTS ═══════════════════════════════════════════ */}

      <section id="projects" style={{padding:"clamp(60px, 10vw, 100px) 6%",position:"relative",zIndex:1}}>

        <Reveal>

          <div style={{textAlign:"center",marginBottom:52}}>

            <Tag>✦ What I've Built ✦</Tag>

            <h2 style={secHead}>My Projects</h2>

            <p style={{color:"#6b7280",marginTop:12,fontSize:"clamp(13px, 4vw, 15px)"}}>Hover over cards for 3D effect · Click to flip through screenshots</p>

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

                display:"inline-block",padding:"12px 32px",borderRadius:50,

                border:"1.5px solid rgba(167,139,250,0.45)",color:"#c4b5fd",

                fontSize:"clamp(12px, 3.5vw, 14px)",fontWeight:600,textDecoration:"none",transition:"all 0.3s ease",letterSpacing:"0.04em",

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

        padding:"clamp(60px, 8vw, 80px) 6%",

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

      <section id="contact" style={{padding:"clamp(60px, 8vw, 80px) 6% 0",position:"relative",zIndex:1}}>

        <Reveal>

          <div style={{textAlign:"center",marginBottom:52}}>

            <Tag>✦ Let's Work Together ✦</Tag>

            <h2 style={secHead}>Connect With Me</h2>

            <p style={{color:"#6b7280",marginTop:12,maxWidth:440,margin:"12px auto 0",lineHeight:1.7, fontSize:"clamp(13px, 4vw, 14px)"}}>

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

          <div style={{fontSize:"clamp(10px, 3vw, 12px)",color:"#4b5563"}}>© 2026 Ashis Kumar Mohanty. All rights reserved.</div>

          <div style={{display:"flex",gap:16, flexWrap:"wrap"}}>

            {["About","Skills","Projects","Contact"].map(l=>(

              <button key={l} onClick={()=>document.getElementById(l.toLowerCase())?.scrollIntoView({behavior:"smooth"})}

                style={{background:"none",border:"none",color:"#6b7280",fontSize:"clamp(10px, 3vw, 12px)",cursor:"pointer",transition:"color 0.2s",padding:0}}

                onMouseEnter={e=>e.target.style.color="#a78bfa"} onMouseLeave={e=>e.target.style.color="#6b7280"}>{l}</button>

            ))}

          </div>

          <div style={{fontSize:"clamp(10px, 3vw, 12px)",color:"#4b5563"}}>Built with React · Made with 💜</div>

        </div>

      </section>

    </div>

  );

}



/* ── Shared style helpers ── */

const secHead = {

  fontSize:"clamp(1.6rem, 5vw, 2.8rem)",fontWeight:800,marginTop:10,

  background:"linear-gradient(135deg,#fff 40%,#a78bfa)",

  WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",

};



function Tag({children}) {

  return (

    <span style={{

      display:"inline-block",fontSize:"clamp(9px, 3vw, 10px)",letterSpacing:"0.18em",

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

      padding:"clamp(20px, 5vw, 28px)",borderRadius:20,

      background:h?"rgba(255,255,255,0.08)":"rgba(255,255,255,0.03)",

      border:`1px solid ${h?item.color+"66":"rgba(255,255,255,0.08)"}`,

      transition:"all 0.35s ease",

      transform:h?"translateY(-5px)":"translateY(0)",

      boxShadow:h?`0 14px 44px ${item.color}22`:"none",

      backdropFilter:"blur(4px)",

    }}>

      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14, flexWrap:"wrap", gap:8}}>

        <div style={{fontSize:28}}>{item.icon}</div>

        <span style={{

          fontSize:11,padding:"4px 12px",borderRadius:99,

          background:`${item.color}1a`,border:`1px solid ${item.color}44`,

          color:item.color,letterSpacing:"0.06em",

        }}>{item.period}</span>

      </div>

      <h3 style={{fontSize:"clamp(15px, 4vw, 16px)",fontWeight:700,color:"#e2e8f0",marginBottom:6}}>{item.title}</h3>

      <p style={{fontSize:12,color:item.color,marginBottom:12,fontWeight:600}}>{item.place}</p>

      <p style={{fontSize:"clamp(12px, 3.5vw, 13px)",color:"#9ca3af",lineHeight:1.7}}>{item.desc}</p>

    </div>

  );

}



function CertCard({cert}) {

  const [h,setH]=useState(false);

  return (

    <div onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{

      padding:"clamp(18px, 4vw, 22px) clamp(20px, 5vw, 30px)",borderRadius:18,textAlign:"center",minWidth:200,

      background:h?`${cert.color}15`:"rgba(255,255,255,0.03)",

      border:`1px solid ${h?cert.color+"66":"rgba(255,255,255,0.08)"}`,

      transition:"all 0.35s ease",

      transform:h?"translateY(-5px) scale(1.03)":"translateY(0) scale(1)",

      boxShadow:h?`0 12px 36px ${cert.color}22`:"none",

      backdropFilter:"blur(4px)",

    }}>

      <div style={{fontSize:30,marginBottom:10}}>{cert.icon}</div>

      <h3 style={{fontSize:"clamp(13px, 4vw, 15px)",fontWeight:700,color:"#e2e8f0",marginBottom:6}}>{cert.title}</h3>

      <p style={{fontSize:"clamp(10px, 3vw, 12px)",color:cert.color,fontWeight:500}}>{cert.issuer}</p>

    </div>

  );

}



function ContactCard({c}) {

  const [h,setH]=useState(false);

  return (

    <a href={c.href} target={c.href.startsWith("http")?"_blank":undefined} rel="noreferrer"

      onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}

      style={{

        padding:"clamp(16px, 4vw, 22px) clamp(18px, 4vw, 26px)",borderRadius:18,

        display:"flex",alignItems:"center",gap:14,

        textDecoration:"none",minWidth:200,

        background:h?`${c.color}15`:"rgba(255,255,255,0.03)",

        border:`1px solid ${h?c.color+"66":"rgba(255,255,255,0.08)"}`,

        transition:"all 0.35s ease",

        transform:h?"translateY(-5px)":"translateY(0)",

        boxShadow:h?`0 12px 36px ${c.color}22`:"none",

        backdropFilter:"blur(4px)",

      }}>

      <div style={{

        width:"clamp(36px, 8vw, 44px)",height:"clamp(36px, 8vw, 44px)",borderRadius:12,flexShrink:0,

        background:`${c.color}1a`,border:`1px solid ${c.color}44`,

        display:"flex",alignItems:"center",justifyContent:"center",

        fontSize:"clamp(16px, 4vw, 18px)",color:c.color,fontWeight:800,

        transition:"all 0.3s",

        boxShadow:h?`0 4px 16px ${c.color}44`:"none",

      }}>{c.icon}</div>

      <div>

        <div style={{fontSize:"clamp(9px, 3vw, 10px)",color:"#6b7280",marginBottom:3,letterSpacing:"0.08em",textTransform:"uppercase"}}>{c.label}</div>

        <div style={{fontSize:"clamp(11px, 3.5vw, 13px)",color:h?c.color:"#d1d5db",fontWeight:500,transition:"color 0.3s",wordBreak:"break-all"}}>{c.value}</div>

      </div>

    </a>

  );

}
