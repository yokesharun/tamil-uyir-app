// ---- 12 Tamil vowels (உயிர் எழுத்துக்கள்) with kid-friendly words + pastel kawaii art ----

const svg = (inner) =>
  `<svg class="art" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;

// soft pastel palette used across all drawings
const P = {
  brown: "#e6c9a8", brown2: "#d8b48c", green: "#bfe6c8", green2: "#a5d6b4",
  pink: "#ffd0e0", pink2: "#ffb8d2", blue: "#cfe6ff", blue2: "#aed3f5",
  yellow: "#fff0b8", orange: "#ffd9b3", grey: "#d8d8e2", grey2: "#c2c2d2",
  dark: "#8a7e92", cheek: "#ffc2cf",
};

const eyes = (cx1, cx2, cy) =>
  `<circle cx="${cx1}" cy="${cy}" r="4" fill="${P.dark}"/><circle cx="${cx2}" cy="${cy}" r="4" fill="${P.dark}"/>`;

const ART = {
  squirrel: svg(`<ellipse cx="100" cy="150" rx="55" ry="40" fill="${P.brown2}"/>
    <path d="M150 150 Q195 120 165 60 Q140 80 150 150 Z" fill="${P.brown}"/>
    <circle cx="100" cy="95" r="42" fill="${P.brown}"/>
    <path d="M78 60 L70 42 L90 56 Z" fill="${P.brown2}"/><path d="M122 60 L130 42 L110 56 Z" fill="${P.brown2}"/>
    ${eyes(86,114,90)}<circle cx="100" cy="102" r="4" fill="${P.dark}"/>
    <circle cx="76" cy="102" r="7" fill="${P.cheek}"/><circle cx="124" cy="102" r="7" fill="${P.cheek}"/>`),
  goat: svg(`<ellipse cx="100" cy="135" rx="55" ry="38" fill="#f4eee6"/>
    <rect x="72" y="162" width="10" height="26" rx="5" fill="${P.grey2}"/><rect x="118" y="162" width="10" height="26" rx="5" fill="${P.grey2}"/>
    <circle cx="100" cy="90" r="36" fill="#fbf6ef"/>
    <path d="M70 70 Q55 40 75 48" stroke="${P.brown}" stroke-width="9" fill="none" stroke-linecap="round"/>
    <path d="M130 70 Q145 40 125 48" stroke="${P.brown}" stroke-width="9" fill="none" stroke-linecap="round"/>
    ${eyes(88,112,86)}<ellipse cx="100" cy="106" rx="11" ry="8" fill="${P.pink}"/>
    <circle cx="80" cy="98" r="6" fill="${P.cheek}"/><circle cx="120" cy="98" r="6" fill="${P.cheek}"/>`),
  leaf: svg(`<path d="M100 30 Q160 70 100 175 Q40 70 100 30 Z" fill="${P.green2}"/>
    <path d="M100 40 L100 168" stroke="${P.green}" stroke-width="5"/>
    <path d="M100 82 L72 67 M100 102 L74 92 M100 122 L76 115" stroke="${P.green}" stroke-width="3"/>
    <path d="M100 82 L128 67 M100 102 L126 92 M100 122 L124 115" stroke="${P.green}" stroke-width="3"/>`),
  fly: svg(`<ellipse cx="100" cy="112" rx="22" ry="32" fill="${P.grey2}"/>
    <circle cx="100" cy="74" r="20" fill="${P.grey}"/>
    <circle cx="92" cy="70" r="7" fill="${P.pink2}"/><circle cx="108" cy="70" r="7" fill="${P.pink2}"/>
    <ellipse cx="62" cy="92" rx="32" ry="15" fill="${P.blue}" opacity=".8" transform="rotate(-20 62 92)"/>
    <ellipse cx="138" cy="92" rx="32" ry="15" fill="${P.blue}" opacity=".8" transform="rotate(20 138 92)"/>
    <path d="M95 52 L88 38 M105 52 L112 38" stroke="${P.dark}" stroke-width="3" stroke-linecap="round"/>`),
  mortar: svg(`<path d="M65 95 Q100 172 135 95 Z" fill="${P.brown2}"/>
    <ellipse cx="100" cy="95" rx="35" ry="12" fill="${P.brown}"/>
    <rect x="95" y="32" width="10" height="66" rx="5" fill="${P.orange}"/>
    <ellipse cx="100" cy="32" rx="9" ry="6" fill="${P.brown}"/>
    <ellipse cx="100" cy="158" rx="42" ry="10" fill="${P.brown}"/>`),
  swing: svg(`<rect x="40" y="22" width="120" height="9" rx="4" fill="${P.brown2}"/>
    <line x1="70" y1="31" x2="70" y2="118" stroke="${P.brown}" stroke-width="5"/>
    <line x1="130" y1="31" x2="130" y2="118" stroke="${P.brown}" stroke-width="5"/>
    <rect x="58" y="116" width="84" height="16" rx="7" fill="${P.orange}"/>
    <circle cx="100" cy="96" r="16" fill="${P.yellow}"/>${eyes(96,104,93)}
    <circle cx="89" cy="98" r="4" fill="${P.cheek}"/><circle cx="111" cy="98" r="4" fill="${P.cheek}"/>`),
  mouse: svg(`<ellipse cx="100" cy="120" rx="44" ry="34" fill="${P.grey}"/>
    <circle cx="72" cy="82" r="20" fill="${P.grey2}"/><circle cx="128" cy="82" r="20" fill="${P.grey2}"/>
    <circle cx="72" cy="82" r="11" fill="${P.pink}"/><circle cx="128" cy="82" r="11" fill="${P.pink}"/>
    ${eyes(90,110,104)}<circle cx="100" cy="116" r="5" fill="${P.pink2}"/>
    <circle cx="84" cy="114" r="6" fill="${P.cheek}"/><circle cx="116" cy="114" r="6" fill="${P.cheek}"/>
    <path d="M144 130 Q182 140 172 164" stroke="${P.grey2}" stroke-width="6" fill="none" stroke-linecap="round"/>`),
  ladder: svg(`<rect x="62" y="22" width="10" height="156" rx="5" fill="${P.orange}"/>
    <rect x="128" y="22" width="10" height="156" rx="5" fill="${P.orange}"/>
    <rect x="62" y="52" width="76" height="9" rx="4" fill="${P.brown2}"/>
    <rect x="62" y="86" width="76" height="9" rx="4" fill="${P.brown2}"/>
    <rect x="62" y="120" width="76" height="9" rx="4" fill="${P.brown2}"/>
    <rect x="62" y="154" width="76" height="9" rx="4" fill="${P.brown2}"/>`),
  ice: svg(`<rect x="55" y="55" width="90" height="90" rx="16" fill="${P.blue}" stroke="${P.blue2}" stroke-width="4"/>
    <path d="M72 72 L118 118 M118 72 L72 118" stroke="#fff" stroke-width="6" opacity=".7"/>
    <circle cx="133" cy="78" r="7" fill="#fff" opacity=".8"/>
    <path d="M50 152 Q100 166 150 152" stroke="${P.blue2}" stroke-width="4" fill="none"/>`),
  camel: svg(`<ellipse cx="100" cy="125" rx="56" ry="25" fill="${P.brown}"/>
    <path d="M55 125 Q70 82 88 125 Q100 78 118 125" fill="${P.brown2}"/>
    <rect x="62" y="140" width="9" height="32" rx="4" fill="${P.brown2}"/><rect x="128" y="140" width="9" height="32" rx="4" fill="${P.brown2}"/>
    <rect x="82" y="140" width="9" height="32" rx="4" fill="${P.brown2}"/><rect x="110" y="140" width="9" height="32" rx="4" fill="${P.brown2}"/>
    <path d="M150 120 Q170 110 162 82 L150 84 Q150 102 140 118 Z" fill="${P.brown}"/>
    <circle cx="159" cy="90" r="3.5" fill="${P.dark}"/>`),
  boat: svg(`<path d="M40 122 L160 122 L140 166 L60 166 Z" fill="${P.pink2}"/>
    <rect x="96" y="42" width="8" height="80" rx="3" fill="${P.brown2}"/>
    <path d="M104 50 L150 108 L104 108 Z" fill="#fff"/>
    <path d="M96 56 L56 108 L96 108 Z" fill="${P.yellow}"/>
    <path d="M22 170 q20 12 40 0 t40 0 t40 0 t40 0" stroke="${P.blue2}" stroke-width="6" fill="none"/>`),
  palette: svg(`<path d="M100 35 Q165 35 165 100 Q165 150 110 150 Q120 130 100 128 Q55 128 45 95 Q40 35 100 35 Z" fill="#fdf3e3" stroke="${P.brown}" stroke-width="3"/>
    <circle cx="75" cy="66" r="9" fill="${P.pink2}"/><circle cx="110" cy="58" r="9" fill="${P.blue2}"/>
    <circle cx="135" cy="86" r="9" fill="${P.green2}"/><circle cx="78" cy="100" r="9" fill="${P.yellow}"/>
    <circle cx="118" cy="112" r="9" fill="${P.lilac || '#ddccf5'}"/>`),
};

const LETTERS = [
  { l: "அ", w: "அணில்", m: "Squirrel", art: "squirrel" },
  { l: "ஆ", w: "ஆடு", m: "Goat", art: "goat" },
  { l: "இ", w: "இலை", m: "Leaf", art: "leaf" },
  { l: "ஈ", w: "ஈ", m: "Fly", art: "fly" },
  { l: "உ", w: "உரல்", m: "Mortar", art: "mortar" },
  { l: "ஊ", w: "ஊஞ்சல்", m: "Swing", art: "swing" },
  { l: "எ", w: "எலி", m: "Mouse", art: "mouse" },
  { l: "ஏ", w: "ஏணி", m: "Ladder", art: "ladder" },
  { l: "ஐ", w: "ஐஸ்", m: "Ice", art: "ice" },
  { l: "ஒ", w: "ஒட்டகம்", m: "Camel", art: "camel" },
  { l: "ஓ", w: "ஓடம்", m: "Boat", art: "boat" },
  { l: "ஔ", w: "ஔவியம்", m: "Painting", art: "palette" },
];

// ---- App state ----
const stage = document.getElementById("stage");
const dotsBox = document.getElementById("dots");
const playBtn = document.getElementById("play");
let idx = 0;
let playing = true;
let timer = null;
const DELAY = 3500;

LETTERS.forEach(() => {
  const d = document.createElement("span");
  d.className = "dot";
  dotsBox.appendChild(d);
});
const dots = [...dotsBox.children];

function render() {
  const item = LETTERS[idx];
  stage.innerHTML = `
    <div class="card">
      <div class="letter-panel"><div class="letter">${item.l}</div></div>
      <div class="detail-panel">
        ${ART[item.art]}
        <div class="word">${item.w}</div>
        <div class="meaning">${item.m}</div>
      </div>
    </div>`;
  dots.forEach((d, i) => d.classList.toggle("active", i === idx));
}

function go(step) {
  idx = (idx + step + LETTERS.length) % LETTERS.length;
  render();
}

function startTimer() {
  clearInterval(timer);
  timer = setInterval(() => go(1), DELAY);
}

function setPlaying(on) {
  playing = on;
  playBtn.textContent = on ? "⏸" : "▶";
  if (on) startTimer();
  else clearInterval(timer);
}

playBtn.addEventListener("click", () => setPlaying(!playing));
document.getElementById("next").addEventListener("click", () => { go(1); if (playing) startTimer(); });
document.getElementById("prev").addEventListener("click", () => { go(-1); if (playing) startTimer(); });
stage.addEventListener("click", () => { go(1); if (playing) startTimer(); });

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") { go(1); if (playing) startTimer(); }
  if (e.key === "ArrowLeft") { go(-1); if (playing) startTimer(); }
  if (e.key === " ") { e.preventDefault(); setPlaying(!playing); }
});

render();
setPlaying(true);
