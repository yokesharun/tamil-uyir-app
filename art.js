// ---- Pastel kawaii SVG art (separated from app logic) ----
// Each art string is wrapped in a <g> carrying a per-art animation class.

const P = {
  brown: "#e6c9a8", brown2: "#d8b48c", green: "#bfe6c8", green2: "#a5d6b4",
  pink: "#ffd0e0", pink2: "#ffb8d2", blue: "#cfe6ff", blue2: "#aed3f5",
  yellow: "#fff0b8", orange: "#ffd9b3", grey: "#d8d8e2", grey2: "#c2c2d2",
  dark: "#8a7e92", cheek: "#ffc2cf", lilac: "#ddccf5", red: "#ffb3b3",
};

const svg = (inner, anim = "") =>
  `<svg class="art" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><g class="${anim}">${inner}</g></svg>`;

const eyes = (cx1, cx2, cy) =>
  `<g class="blink"><circle cx="${cx1}" cy="${cy}" r="4" fill="${P.dark}"/><circle cx="${cx2}" cy="${cy}" r="4" fill="${P.dark}"/></g>`;

// counting art: draws n pastel balloons in tidy rows (used by the numbers set)
function countArt(n) {
  const colors = [P.pink2, P.blue2, P.green2, P.yellow, P.lilac, P.orange];
  const rows = n <= 5 ? 1 : 2;
  let items = "";
  let k = 0;
  for (let r = 0; r < rows; r++) {
    const inRow = rows === 1 ? n : (r === 0 ? Math.ceil(n / 2) : n - Math.ceil(n / 2));
    const y = rows === 1 ? 100 : (r === 0 ? 70 : 140);
    const gap = 200 / (inRow + 1);
    for (let c = 0; c < inRow; c++) {
      const x = gap * (c + 1);
      const col = colors[k % colors.length];
      items += `<g class="bob" style="animation-delay:${(k * 0.12).toFixed(2)}s">
        <circle cx="${x}" cy="${y}" r="22" fill="${col}"/>
        <ellipse cx="${x - 7}" cy="${y - 8}" rx="5" ry="7" fill="#fff" opacity=".5"/>
        <path d="M${x} ${y + 22} q4 10 -2 22" stroke="${P.grey2}" stroke-width="2" fill="none"/>
      </g>`;
      k++;
    }
  }
  return `<svg class="art" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">${items}</svg>`;
}

const ART = {
  // ---- uyir ----
  amma: svg(`<path d="M58 175 Q58 120 100 120 Q142 120 142 175 Z" fill="${P.pink2}"/>
    <circle cx="100" cy="80" r="34" fill="#f6d9c0"/>
    <path d="M66 78 Q60 38 100 36 Q140 38 134 78 Q134 56 100 56 Q66 56 66 78 Z" fill="${P.brown2}"/>
    ${eyes(88,112,80)}
    <path d="M90 92 q10 9 20 0" stroke="${P.dark}" stroke-width="3" fill="none" stroke-linecap="round"/>
    <circle cx="80" cy="88" r="6" fill="${P.cheek}"/><circle cx="120" cy="88" r="6" fill="${P.cheek}"/>
    <circle cx="100" cy="40" r="9" fill="${P.pink}"/>
    <circle cx="135" cy="150" r="16" fill="#f6d9c0"/>
    <path d="M120 150 Q128 134 142 142" stroke="${P.pink2}" stroke-width="10" fill="none" stroke-linecap="round"/>`, "bob"),
  goat: svg(`<ellipse cx="100" cy="135" rx="55" ry="38" fill="#f4eee6"/>
    <rect x="72" y="162" width="10" height="26" rx="5" fill="${P.grey2}"/><rect x="118" y="162" width="10" height="26" rx="5" fill="${P.grey2}"/>
    <circle cx="100" cy="90" r="36" fill="#fbf6ef"/>
    <path d="M70 70 Q55 40 75 48" stroke="${P.brown}" stroke-width="9" fill="none" stroke-linecap="round"/>
    <path d="M130 70 Q145 40 125 48" stroke="${P.brown}" stroke-width="9" fill="none" stroke-linecap="round"/>
    ${eyes(88,112,86)}<ellipse cx="100" cy="106" rx="11" ry="8" fill="${P.pink}"/>
    <circle cx="80" cy="98" r="6" fill="${P.cheek}"/><circle cx="120" cy="98" r="6" fill="${P.cheek}"/>`, "bob"),
  leaf: svg(`<path d="M100 30 Q160 70 100 175 Q40 70 100 30 Z" fill="${P.green2}"/>
    <path d="M100 40 L100 168" stroke="${P.green}" stroke-width="5"/>
    <path d="M100 82 L72 67 M100 102 L74 92 M100 122 L76 115" stroke="${P.green}" stroke-width="3"/>
    <path d="M100 82 L128 67 M100 102 L126 92 M100 122 L124 115" stroke="${P.green}" stroke-width="3"/>`, "wiggle"),
  fly: svg(`<ellipse cx="100" cy="112" rx="22" ry="32" fill="${P.grey2}"/>
    <circle cx="100" cy="74" r="20" fill="${P.grey}"/>
    <circle cx="92" cy="70" r="7" fill="${P.pink2}"/><circle cx="108" cy="70" r="7" fill="${P.pink2}"/>
    <ellipse cx="62" cy="92" rx="32" ry="15" fill="${P.blue}" opacity=".8" transform="rotate(-20 62 92)"/>
    <ellipse cx="138" cy="92" rx="32" ry="15" fill="${P.blue}" opacity=".8" transform="rotate(20 138 92)"/>
    <path d="M95 52 L88 38 M105 52 L112 38" stroke="${P.dark}" stroke-width="3" stroke-linecap="round"/>`, "wiggle"),
  mortar: svg(`<path d="M65 95 Q100 172 135 95 Z" fill="${P.brown2}"/>
    <ellipse cx="100" cy="95" rx="35" ry="12" fill="${P.brown}"/>
    <rect x="95" y="32" width="10" height="66" rx="5" fill="${P.orange}"/>
    <ellipse cx="100" cy="32" rx="9" ry="6" fill="${P.brown}"/>
    <ellipse cx="100" cy="158" rx="42" ry="10" fill="${P.brown}"/>`, "bob"),
  swing: svg(`<rect x="40" y="22" width="120" height="9" rx="4" fill="${P.brown2}"/>
    <line x1="70" y1="31" x2="70" y2="118" stroke="${P.brown}" stroke-width="5"/>
    <line x1="130" y1="31" x2="130" y2="118" stroke="${P.brown}" stroke-width="5"/>
    <rect x="58" y="116" width="84" height="16" rx="7" fill="${P.orange}"/>
    <circle cx="100" cy="96" r="16" fill="${P.yellow}"/>${eyes(96,104,93)}
    <circle cx="89" cy="98" r="4" fill="${P.cheek}"/><circle cx="111" cy="98" r="4" fill="${P.cheek}"/>`, "swing"),
  mouse: svg(`<ellipse cx="100" cy="120" rx="44" ry="34" fill="${P.grey}"/>
    <circle cx="72" cy="82" r="20" fill="${P.grey2}"/><circle cx="128" cy="82" r="20" fill="${P.grey2}"/>
    <circle cx="72" cy="82" r="11" fill="${P.pink}"/><circle cx="128" cy="82" r="11" fill="${P.pink}"/>
    ${eyes(90,110,104)}<circle cx="100" cy="116" r="5" fill="${P.pink2}"/>
    <circle cx="84" cy="114" r="6" fill="${P.cheek}"/><circle cx="116" cy="114" r="6" fill="${P.cheek}"/>
    <path d="M144 130 Q182 140 172 164" stroke="${P.grey2}" stroke-width="6" fill="none" stroke-linecap="round"/>`, "bob"),
  ladder: svg(`<rect x="62" y="22" width="10" height="156" rx="5" fill="${P.orange}"/>
    <rect x="128" y="22" width="10" height="156" rx="5" fill="${P.orange}"/>
    <rect x="62" y="52" width="76" height="9" rx="4" fill="${P.brown2}"/>
    <rect x="62" y="86" width="76" height="9" rx="4" fill="${P.brown2}"/>
    <rect x="62" y="120" width="76" height="9" rx="4" fill="${P.brown2}"/>
    <rect x="62" y="154" width="76" height="9" rx="4" fill="${P.brown2}"/>`, "wiggle"),
  ice: svg(`<rect x="55" y="55" width="90" height="90" rx="16" fill="${P.blue}" stroke="${P.blue2}" stroke-width="4"/>
    <path d="M72 72 L118 118 M118 72 L72 118" stroke="#fff" stroke-width="6" opacity=".7"/>
    <circle cx="133" cy="78" r="7" fill="#fff" opacity=".8"/>
    <path d="M50 152 Q100 166 150 152" stroke="${P.blue2}" stroke-width="4" fill="none"/>`, "pulse"),
  camel: svg(`<ellipse cx="100" cy="125" rx="56" ry="25" fill="${P.brown}"/>
    <path d="M55 125 Q70 82 88 125 Q100 78 118 125" fill="${P.brown2}"/>
    <rect x="62" y="140" width="9" height="32" rx="4" fill="${P.brown2}"/><rect x="128" y="140" width="9" height="32" rx="4" fill="${P.brown2}"/>
    <rect x="82" y="140" width="9" height="32" rx="4" fill="${P.brown2}"/><rect x="110" y="140" width="9" height="32" rx="4" fill="${P.brown2}"/>
    <path d="M150 120 Q170 110 162 82 L150 84 Q150 102 140 118 Z" fill="${P.brown}"/>
    <circle cx="159" cy="90" r="3.5" fill="${P.dark}"/>`, "bob"),
  boat: svg(`<path d="M40 122 L160 122 L140 166 L60 166 Z" fill="${P.pink2}"/>
    <rect x="96" y="42" width="8" height="80" rx="3" fill="${P.brown2}"/>
    <path d="M104 50 L150 108 L104 108 Z" fill="#fff"/>
    <path d="M96 56 L56 108 L96 108 Z" fill="${P.yellow}"/>
    <path d="M22 170 q20 12 40 0 t40 0 t40 0 t40 0" stroke="${P.blue2}" stroke-width="6" fill="none"/>`, "rock"),
  palette: svg(`<path d="M100 35 Q165 35 165 100 Q165 150 110 150 Q120 130 100 128 Q55 128 45 95 Q40 35 100 35 Z" fill="#fdf3e3" stroke="${P.brown}" stroke-width="3"/>
    <circle cx="75" cy="66" r="9" fill="${P.pink2}"/><circle cx="110" cy="58" r="9" fill="${P.blue2}"/>
    <circle cx="135" cy="86" r="9" fill="${P.green2}"/><circle cx="78" cy="100" r="9" fill="${P.yellow}"/>
    <circle cx="118" cy="112" r="9" fill="${P.lilac}"/>`, "wiggle"),

  // ---- mey ----
  crow: svg(`<ellipse cx="100" cy="110" rx="40" ry="32" fill="${P.grey2}"/>
    <circle cx="128" cy="86" r="20" fill="${P.grey2}"/>
    <path d="M146 84 L172 80 L148 94 Z" fill="${P.orange}"/>
    <circle cx="130" cy="82" r="4" fill="${P.dark}"/>
    <path d="M60 108 Q40 118 58 128 Q48 132 64 138" fill="${P.grey}"/>
    <rect x="92" y="140" width="6" height="22" rx="3" fill="${P.orange}"/><rect x="108" y="140" width="6" height="22" rx="3" fill="${P.orange}"/>`, "bob"),
  gold: svg(`<ellipse cx="100" cy="150" rx="56" ry="14" fill="${P.brown}" opacity=".5"/>
    <g><rect x="60" y="118" width="80" height="26" rx="5" fill="${P.yellow}" stroke="#f0d36a" stroke-width="2"/>
    <rect x="70" y="92" width="60" height="26" rx="5" fill="#ffe98a" stroke="#f0d36a" stroke-width="2"/>
    <rect x="80" y="66" width="40" height="26" rx="5" fill="${P.yellow}" stroke="#f0d36a" stroke-width="2"/>
    <text x="100" y="84" font-size="16" text-anchor="middle" fill="#d9a93a">★</text></g>`, "pulse"),
  shell: svg(`<path d="M100 40 Q70 60 70 120 Q70 160 100 160 Q130 160 130 120 Q130 60 100 40 Z" fill="${P.pink}"/>
    <path d="M100 50 L100 155 M85 70 Q85 130 95 155 M115 70 Q115 130 105 155" stroke="${P.pink2}" stroke-width="3" fill="none"/>
    <circle cx="100" cy="44" r="10" fill="${P.pink2}"/>`, "wiggle"),
  sun: svg(`<g class="spin-slow"><g stroke="${P.orange}" stroke-width="7" stroke-linecap="round">
    <line x1="100" y1="30" x2="100" y2="48"/><line x1="100" y1="152" x2="100" y2="170"/>
    <line x1="30" y1="100" x2="48" y2="100"/><line x1="152" y1="100" x2="170" y2="100"/>
    <line x1="50" y1="50" x2="63" y2="63"/><line x1="137" y1="137" x2="150" y2="150"/>
    <line x1="150" y1="50" x2="137" y2="63"/><line x1="63" y1="137" x2="50" y2="150"/></g></g>
    <circle cx="100" cy="100" r="40" fill="${P.yellow}"/>
    ${eyes(90,110,98)}<path d="M90 112 q10 10 20 0" stroke="${P.dark}" stroke-width="3" fill="none" stroke-linecap="round"/>
    <circle cx="82" cy="108" r="6" fill="${P.cheek}"/><circle cx="118" cy="108" r="6" fill="${P.cheek}"/>`, ""),
  kite: svg(`<path d="M100 30 L150 100 L100 150 L50 100 Z" fill="${P.pink2}"/>
    <path d="M100 30 L100 150 M50 100 L150 100" stroke="#fff" stroke-width="3"/>
    <path d="M100 150 q-10 18 6 30 q-18 6 0 22" stroke="${P.lilac}" stroke-width="3" fill="none"/>`, "swing"),
  soil: svg(`<path d="M40 150 Q100 110 160 150 Z" fill="${P.brown2}"/>
    <rect x="38" y="148" width="124" height="16" rx="6" fill="${P.brown}"/>
    <path d="M90 128 q4 -18 9 0 M104 130 q4 -16 9 0" stroke="${P.green2}" stroke-width="4" fill="none" stroke-linecap="round"/>
    <circle cx="80" cy="138" r="3" fill="${P.brown}"/><circle cx="120" cy="140" r="3" fill="${P.brown}"/>`, "bob"),
  coconut: svg(`<circle cx="100" cy="115" r="48" fill="${P.brown2}"/>
    <circle cx="100" cy="115" r="38" fill="${P.brown}"/>
    <circle cx="88" cy="100" r="6" fill="${P.brown2}"/><circle cx="112" cy="100" r="6" fill="${P.brown2}"/><circle cx="100" cy="118" r="6" fill="${P.brown2}"/>
    <path d="M100 67 q-20 -30 -38 -28 M100 67 q20 -30 38 -28 M100 67 q0 -32 0 -34" stroke="${P.green2}" stroke-width="6" fill="none" stroke-linecap="round"/>`, "bob"),
  crab: svg(`<ellipse cx="100" cy="115" rx="42" ry="30" fill="${P.red}"/>
    ${eyes(88,112,104)}<path d="M85 124 q15 10 30 0" stroke="${P.dark}" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M58 108 Q35 100 40 120 Q30 116 36 132" stroke="${P.red}" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M142 108 Q165 100 160 120 Q170 116 164 132" stroke="${P.red}" stroke-width="7" fill="none" stroke-linecap="round"/>
    <line x1="70" y1="142" x2="64" y2="160" stroke="${P.red}" stroke-width="5" stroke-linecap="round"/>
    <line x1="130" y1="142" x2="136" y2="160" stroke="${P.red}" stroke-width="5" stroke-linecap="round"/>`, "wiggle"),
  ball: svg(`<circle cx="100" cy="110" r="48" fill="${P.blue}"/>
    <path d="M100 62 Q130 110 100 158 M100 62 Q70 110 100 158 M54 95 Q100 110 146 95 M54 125 Q100 110 146 125" stroke="${P.pink2}" stroke-width="4" fill="none"/>`, "bob"),
  tree: svg(`<rect x="92" y="120" width="16" height="50" rx="5" fill="${P.brown2}"/>
    <circle cx="100" cy="85" r="38" fill="${P.green2}"/>
    <circle cx="72" cy="100" r="26" fill="${P.green}"/><circle cx="128" cy="100" r="26" fill="${P.green}"/>`, "wiggle"),
  elephant: svg(`<ellipse cx="100" cy="115" rx="50" ry="40" fill="${P.lilac}"/>
    <circle cx="60" cy="95" r="22" fill="${P.lilac}"/><circle cx="140" cy="95" r="22" fill="${P.lilac}"/>
    ${eyes(88,112,108)}<path d="M100 128 Q98 160 112 168" stroke="${P.lilac}" stroke-width="14" fill="none" stroke-linecap="round"/>
    <circle cx="82" cy="120" r="6" fill="${P.cheek}"/><circle cx="118" cy="120" r="6" fill="${P.cheek}"/>`, "bob"),
  train: svg(`<rect x="45" y="80" width="80" height="60" rx="10" fill="${P.pink2}"/>
    <rect x="125" y="100" width="35" height="40" rx="8" fill="${P.blue2}"/>
    <rect x="55" y="92" width="26" height="22" rx="4" fill="${P.blue}"/><rect x="90" y="92" width="26" height="22" rx="4" fill="${P.blue}"/>
    <circle cx="65" cy="150" r="12" fill="${P.dark}"/><circle cx="105" cy="150" r="12" fill="${P.dark}"/><circle cx="145" cy="150" r="10" fill="${P.dark}"/>
    <rect x="60" y="62" width="14" height="20" rx="4" fill="${P.grey2}"/>`, "bob"),
  sweet: svg(`<circle cx="100" cy="112" r="46" fill="${P.yellow}"/>
    <g fill="#ffe07a"><circle cx="82" cy="96" r="9"/><circle cx="108" cy="90" r="9"/><circle cx="120" cy="112" r="9"/>
    <circle cx="100" cy="120" r="9"/><circle cx="78" cy="124" r="9"/><circle cx="118" cy="86" r="7"/></g>
    <circle cx="100" cy="70" r="7" fill="${P.green2}"/>`, "pulse"),
  car: svg(`<rect x="40" y="105" width="120" height="34" rx="12" fill="${P.pink2}"/>
    <path d="M65 105 L80 80 L130 80 L145 105 Z" fill="${P.pink}"/>
    <rect x="88" y="84" width="34" height="18" rx="4" fill="${P.blue}"/>
    <circle cx="72" cy="142" r="14" fill="${P.dark}"/><circle cx="128" cy="142" r="14" fill="${P.dark}"/>
    <circle cx="72" cy="142" r="6" fill="${P.grey}"/><circle cx="128" cy="142" r="6" fill="${P.grey}"/>`, "bob"),
  rain: svg(`<ellipse cx="100" cy="85" rx="50" ry="30" fill="${P.grey}"/>
    <circle cx="70" cy="85" r="22" fill="${P.grey}"/><circle cx="128" cy="85" r="24" fill="${P.grey}"/>
    <g class="bob" stroke="${P.blue2}" stroke-width="6" stroke-linecap="round">
    <line x1="74" y1="125" x2="68" y2="145"/><line x1="100" y1="128" x2="94" y2="150"/><line x1="126" y1="125" x2="120" y2="145"/></g>`, "bob"),
  sword: svg(`<path d="M100 28 L110 42 L104 128 L96 128 L90 42 Z" fill="${P.grey}" stroke="${P.grey2}" stroke-width="2"/>
    <path d="M96 30 L100 28 L104 30 L100 36 Z" fill="${P.blue}"/>
    <rect x="72" y="128" width="56" height="12" rx="5" fill="${P.yellow}"/>
    <rect x="93" y="140" width="14" height="32" rx="5" fill="${P.brown2}"/>
    <circle cx="100" cy="178" r="7" fill="${P.yellow}"/>`, "wiggle"),
  river: svg(`<g class="bob" stroke="${P.blue2}" stroke-width="10" fill="none" stroke-linecap="round">
    <path d="M30 70 q25 -18 50 0 t50 0 t50 0"/>
    <path d="M30 100 q25 -18 50 0 t50 0 t50 0"/>
    <path d="M30 130 q25 -18 50 0 t50 0 t50 0"/></g>
    <circle cx="150" cy="58" r="12" fill="${P.yellow}"/>`, ""),
  fish: svg(`<ellipse cx="92" cy="110" rx="48" ry="32" fill="${P.orange}"/>
    <path d="M140 110 L172 88 L172 132 Z" fill="${P.orange}"/>
    <circle cx="70" cy="102" r="5" fill="${P.dark}"/>
    <circle cx="60" cy="112" r="6" fill="${P.cheek}"/>
    <path d="M92 80 Q100 95 110 82 M92 140 Q100 125 110 138" fill="#ffd9b3"/>
    <path d="M100 95 q14 15 0 30" stroke="#ffd9b3" stroke-width="3" fill="none"/>`, "wiggle"),

  // ---- க-series (uyirmey demo) ----
  door: svg(`<rect x="62" y="34" width="76" height="146" rx="8" fill="${P.brown}"/>
    <rect x="72" y="44" width="56" height="126" rx="6" fill="${P.brown2}"/>
    <rect x="84" y="58" width="32" height="44" rx="4" fill="${P.orange}"/>
    <rect x="84" y="112" width="32" height="44" rx="4" fill="${P.orange}"/>
    <circle cx="124" cy="108" r="5" fill="${P.yellow}"/>`, "wiggle"),
  parrot: svg(`<ellipse cx="98" cy="112" rx="34" ry="44" fill="${P.green2}"/>
    <circle cx="98" cy="74" r="26" fill="${P.green}"/>
    <path d="M120 74 L150 70 Q138 86 120 86 Z" fill="${P.orange}"/>
    <circle cx="104" cy="70" r="5" fill="${P.dark}"/>
    <circle cx="90" cy="84" r="6" fill="${P.cheek}"/>
    <path d="M70 120 Q44 130 64 150 Q52 152 70 162" fill="${P.green}"/>
    <path d="M96 154 Q98 178 90 182 M104 154 Q106 178 114 182" stroke="${P.green2}" stroke-width="6" fill="none" stroke-linecap="round"/>`, "bob"),
  horse: svg(`<ellipse cx="96" cy="120" rx="48" ry="30" fill="${P.brown}"/>
    <rect x="64" y="138" width="9" height="34" rx="4" fill="${P.brown2}"/><rect x="118" y="138" width="9" height="34" rx="4" fill="${P.brown2}"/>
    <rect x="86" y="138" width="9" height="34" rx="4" fill="${P.brown2}"/>
    <path d="M132 116 Q150 64 122 56 L112 70 Q128 84 120 116 Z" fill="${P.brown}"/>
    <path d="M128 60 Q142 64 140 84" stroke="${P.brown2}" stroke-width="7" fill="none" stroke-linecap="round"/>
    <circle cx="135" cy="78" r="3.5" fill="${P.dark}"/>
    <path d="M50 118 Q34 130 44 150" stroke="${P.brown2}" stroke-width="7" fill="none" stroke-linecap="round"/>`, "bob"),
  basket: svg(`<path d="M52 96 L148 96 L138 168 L62 168 Z" fill="${P.brown}"/>
    <path d="M64 96 L72 168 M84 96 L88 168 M116 96 L112 168 M136 96 L128 168" stroke="${P.brown2}" stroke-width="4"/>
    <path d="M52 96 Q100 56 148 96" stroke="${P.brown2}" stroke-width="9" fill="none"/>
    <circle cx="84" cy="86" r="14" fill="${P.red}"/><circle cx="112" cy="86" r="14" fill="${P.orange}"/><circle cx="100" cy="78" r="13" fill="${P.pink2}"/>`, "wiggle"),
  hand: svg(`<rect x="78" y="96" width="44" height="74" rx="18" fill="#f6d9c0"/>
    <rect x="80" y="48" width="9" height="56" rx="4" fill="#f6d9c0"/>
    <rect x="94" y="40" width="9" height="64" rx="4" fill="#f6d9c0"/>
    <rect x="108" y="44" width="9" height="60" rx="4" fill="#f6d9c0"/>
    <rect x="121" y="56" width="9" height="50" rx="4" fill="#f6d9c0"/>
    <path d="M78 110 Q60 104 60 124 Q60 136 78 138 Z" fill="#f6d9c0"/>
    <circle cx="100" cy="135" r="10" fill="${P.cheek}"/>`, "wiggle"),
  flag: svg(`<rect x="60" y="30" width="9" height="150" rx="4" fill="${P.brown2}"/>
    <path d="M69 36 L150 36 L134 60 L150 84 L69 84 Z" fill="${P.pink2}"/>
    <circle cx="100" cy="60" r="10" fill="${P.yellow}"/>`, "swing"),
  hen: svg(`<ellipse cx="100" cy="124" rx="42" ry="34" fill="#fff6ef"/>
    <circle cx="128" cy="92" r="20" fill="#fff6ef"/>
    <path d="M126 72 q6 -14 12 0 q8 -10 10 4 q10 -4 4 10 Z" fill="${P.red}"/>
    <path d="M146 94 L164 90 L148 102 Z" fill="${P.orange}"/>
    <path d="M132 104 q4 8 -4 12" stroke="${P.red}" stroke-width="3" fill="none"/>
    <circle cx="130" cy="88" r="3.5" fill="${P.dark}"/>
    <path d="M60 118 Q40 120 50 140 Q40 142 58 156" fill="#fbeede"/>
    <rect x="88" y="156" width="7" height="16" rx="3" fill="${P.orange}"/><rect x="108" y="156" width="7" height="16" rx="3" fill="${P.orange}"/>`, "bob"),

  // ---- rhymes & stories ----
  heart: svg(`<path d="M100 160 Q40 120 40 80 Q40 50 70 50 Q90 50 100 70 Q110 50 130 50 Q160 50 160 80 Q160 120 100 160 Z" fill="${P.pink2}"/>
    <ellipse cx="80" cy="78" rx="12" ry="8" fill="#fff" opacity=".5"/>`, "pulse"),
  gift: svg(`<rect x="55" y="90" width="90" height="70" rx="8" fill="${P.lilac}"/>
    <rect x="92" y="90" width="16" height="70" fill="${P.pink2}"/>
    <rect x="55" y="80" width="90" height="20" rx="6" fill="${P.pink}"/>
    <path d="M100 80 Q80 50 60 70 M100 80 Q120 50 140 70" stroke="${P.pink2}" stroke-width="5" fill="none" stroke-linecap="round"/>`, "bob"),
  star_big: svg(`<polygon points="100,30 112,72 158,72 122,100 134,142 100,116 66,142 78,100 42,72 88,72" fill="${P.yellow}" stroke="#f0d36a" stroke-width="2"/>
    ${eyes(92,108,90)}<path d="M90 102 q10 8 20 0" stroke="${P.dark}" stroke-width="2.5" fill="none" stroke-linecap="round"/>`, "pulse"),
  book: svg(`<rect x="50" y="50" width="100" height="110" rx="6" fill="${P.blue2}"/>
    <rect x="55" y="55" width="90" height="100" rx="4" fill="#fff"/>
    <rect x="96" y="50" width="8" height="110" fill="${P.blue}"/>
    <line x1="68" y1="80" x2="90" y2="80" stroke="${P.lilac}" stroke-width="3"/><line x1="68" y1="95" x2="90" y2="95" stroke="${P.lilac}" stroke-width="3"/>
    <line x1="110" y1="80" x2="132" y2="80" stroke="${P.lilac}" stroke-width="3"/><line x1="110" y1="95" x2="132" y2="95" stroke="${P.lilac}" stroke-width="3"/>`, "wiggle"),
  share_food: svg(`<ellipse cx="100" cy="130" rx="50" ry="16" fill="${P.brown}"/>
    <ellipse cx="100" cy="124" rx="48" ry="14" fill="${P.orange}"/>
    <circle cx="80" cy="110" r="14" fill="${P.yellow}"/><circle cx="106" cy="108" r="12" fill="${P.pink}"/><circle cx="120" cy="116" r="10" fill="${P.green2}"/>
    <path d="M72 96 Q56 70 80 78 M128 100 Q148 74 124 80" stroke="#f6d9c0" stroke-width="8" fill="none" stroke-linecap="round"/>`, "bob"),
  friends: svg(`<circle cx="70" cy="90" r="24" fill="#f6d9c0"/>
    ${eyes(62,78,86)}
    <circle cx="58" cy="96" r="5" fill="${P.cheek}"/><circle cx="82" cy="96" r="5" fill="${P.cheek}"/>
    <path d="M62 102 q8 8 16 0" stroke="${P.dark}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <circle cx="130" cy="90" r="24" fill="#f6d9c0"/>
    <g class="blink"><circle cx="122" cy="86" r="4" fill="${P.dark}"/><circle cx="138" cy="86" r="4" fill="${P.dark}"/></g>
    <circle cx="118" cy="96" r="5" fill="${P.cheek}"/><circle cx="142" cy="96" r="5" fill="${P.cheek}"/>
    <path d="M122 102 q8 8 16 0" stroke="${P.dark}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M80 140 Q100 120 120 140" stroke="${P.pink2}" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M56 115 Q56 165 70 165 L70 115 Z" fill="${P.pink}"/><path d="M130 115 Q144 115 144 165 L130 165 Z" fill="${P.blue}"/>`, "bob"),
  peacock: svg(`<path d="M100 40 Q40 60 40 120 Q100 90 160 120 Q160 60 100 40 Z" fill="${P.blue2}"/>
    <circle cx="70" cy="80" r="8" fill="${P.green2}"/><circle cx="100" cy="70" r="8" fill="${P.blue}"/><circle cx="130" cy="80" r="8" fill="${P.lilac}"/>
    <circle cx="70" cy="80" r="4" fill="${P.dark}"/><circle cx="100" cy="70" r="4" fill="${P.dark}"/><circle cx="130" cy="80" r="4" fill="${P.dark}"/>
    <ellipse cx="100" cy="135" rx="20" ry="28" fill="${P.blue}"/>
    ${eyes(94,106,128)}<path d="M92 138 q8 6 16 0" stroke="${P.dark}" stroke-width="2" fill="none"/>
    <path d="M100 108 L96 100 L104 100 Z" fill="${P.orange}"/>`, "bob"),
  dancer: svg(`<circle cx="100" cy="60" r="22" fill="#f6d9c0"/>
    ${eyes(92,108,56)}
    <circle cx="84" cy="64" r="5" fill="${P.cheek}"/><circle cx="116" cy="64" r="5" fill="${P.cheek}"/>
    <path d="M92 68 q8 8 16 0" stroke="${P.dark}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M80 82 Q100 76 120 82 L125 140 Q100 150 75 140 Z" fill="${P.pink2}"/>
    <path d="M75 140 L60 170 M125 140 L140 170" stroke="${P.pink2}" stroke-width="8" stroke-linecap="round"/>
    <path d="M80 100 L50 90 M120 100 L150 90" stroke="#f6d9c0" stroke-width="6" stroke-linecap="round"/>`, "swing"),
  baby: svg(`<circle cx="100" cy="80" r="30" fill="#f6d9c0"/>
    ${eyes(90,110,76)}
    <circle cx="80" cy="86" r="6" fill="${P.cheek}"/><circle cx="120" cy="86" r="6" fill="${P.cheek}"/>
    <path d="M92 92 q8 8 16 0" stroke="${P.dark}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M72 105 Q100 100 128 105 L128 160 Q100 168 72 160 Z" fill="${P.yellow}"/>
    <circle cx="100" cy="52" r="5" fill="${P.pink}"/>`, "bob"),
  moon: svg(`<path d="M120 40 Q80 40 65 80 Q50 120 80 150 Q110 180 140 150 Q170 120 155 80 Q145 50 120 40 Z" fill="${P.yellow}"/>
    <circle cx="140" cy="60" r="40" fill="#e8def8"/>
    ${eyes(95,115,95)}
    <circle cx="82" cy="105" r="7" fill="${P.cheek}"/><circle cx="126" cy="105" r="7" fill="${P.cheek}"/>
    <path d="M92 112 q10 8 20 0" stroke="${P.dark}" stroke-width="2.5" fill="none" stroke-linecap="round"/>`, "bob"),
  runner: svg(`<circle cx="100" cy="55" r="20" fill="#f6d9c0"/>
    ${eyes(93,107,52)}
    <path d="M95 62 q5 5 10 0" stroke="${P.dark}" stroke-width="2" fill="none"/>
    <path d="M86 74 Q100 70 114 74 L118 120 Q100 126 82 120 Z" fill="${P.blue2}"/>
    <path d="M82 120 L68 155 M118 120 L135 155" stroke="${P.blue2}" stroke-width="8" stroke-linecap="round"/>
    <path d="M88 90 L60 80 M112 90 L140 100" stroke="#f6d9c0" stroke-width="5" stroke-linecap="round"/>`, "bob"),
  flower: svg(`<g class="spin-slow">${[0,60,120,180,240,300].map(a => `<ellipse cx="100" cy="66" rx="14" ry="22" fill="${P.pink}" transform="rotate(${a} 100 100)"/>`).join("")}</g>
    <circle cx="100" cy="100" r="16" fill="${P.yellow}"/>
    ${eyes(95,105,98)}`, ""),
  garland: svg(`<path d="M30 80 Q65 120 100 80 Q135 120 170 80" stroke="${P.green2}" stroke-width="4" fill="none"/>
    <circle cx="50" cy="95" r="8" fill="${P.pink}"/><circle cx="75" cy="105" r="8" fill="${P.yellow}"/><circle cx="100" cy="95" r="8" fill="${P.pink}"/>
    <circle cx="125" cy="105" r="8" fill="${P.yellow}"/><circle cx="150" cy="95" r="8" fill="${P.pink}"/>
    <path d="M30 120 Q65 160 100 120 Q135 160 170 120" stroke="${P.green2}" stroke-width="4" fill="none"/>
    <circle cx="50" cy="135" r="8" fill="${P.yellow}"/><circle cx="75" cy="145" r="8" fill="${P.pink}"/><circle cx="100" cy="135" r="8" fill="${P.yellow}"/>
    <circle cx="125" cy="145" r="8" fill="${P.pink}"/><circle cx="150" cy="135" r="8" fill="${P.yellow}"/>`, "bob"),
  crow_vadai: svg(`<ellipse cx="90" cy="110" rx="36" ry="28" fill="${P.grey2}"/>
    <circle cx="118" cy="88" r="18" fill="${P.grey2}"/>
    <path d="M134 86 L156 82 L136 94 Z" fill="${P.orange}"/>
    <circle cx="120" cy="84" r="3.5" fill="${P.dark}"/>
    <circle cx="80" cy="150" r="16" fill="${P.brown}" stroke="${P.brown2}" stroke-width="3"/>
    <circle cx="80" cy="150" r="6" fill="#fff6ef"/>`, "bob"),
  crow_tree: svg(`<rect x="92" y="100" width="16" height="80" rx="5" fill="${P.brown2}"/>
    <circle cx="100" cy="70" r="38" fill="${P.green2}"/>
    <ellipse cx="80" cy="62" rx="28" ry="22" fill="${P.green}"/>
    <circle cx="100" cy="48" r="14" fill="${P.grey2}"/>
    <circle cx="108" cy="44" r="3" fill="${P.dark}"/>
    <path d="M112 46 L122 44 L114 50 Z" fill="${P.orange}"/>`, "wiggle"),
  fox: svg(`<ellipse cx="100" cy="125" rx="36" ry="30" fill="${P.orange}"/>
    <circle cx="100" cy="82" r="28" fill="${P.orange}"/>
    <path d="M76 60 L68 30 L88 56 Z" fill="${P.orange}"/><path d="M124 60 L132 30 L112 56 Z" fill="${P.orange}"/>
    <path d="M76 60 L72 38 L86 56 Z" fill="${P.pink}"/><path d="M124 60 L128 38 L114 56 Z" fill="${P.pink}"/>
    ${eyes(90,110,78)}
    <path d="M96 92 L100 98 L104 92" stroke="${P.dark}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <circle cx="82" cy="90" r="6" fill="${P.cheek}"/><circle cx="118" cy="90" r="6" fill="${P.cheek}"/>
    <path d="M64 130 Q50 148 66 158" stroke="${P.orange}" stroke-width="10" fill="none" stroke-linecap="round"/>`, "bob"),
  fox_talk: svg(`<ellipse cx="90" cy="125" rx="34" ry="28" fill="${P.orange}"/>
    <circle cx="90" cy="85" r="26" fill="${P.orange}"/>
    <path d="M68 64 L62 38 L80 60 Z" fill="${P.orange}"/><path d="M112 64 L118 38 L100 60 Z" fill="${P.orange}"/>
    ${eyes(82,98,80)}
    <path d="M86 94 q4 6 8 0" stroke="${P.dark}" stroke-width="2" fill="none"/>
    <rect x="120" y="60" width="56" height="34" rx="10" fill="#fff"/>
    <text x="148" y="82" font-size="14" text-anchor="middle" fill="${P.dark}">🎵 பாடு!</text>`, "wiggle"),
  crow_sing: svg(`<ellipse cx="100" cy="115" rx="38" ry="30" fill="${P.grey2}"/>
    <circle cx="126" cy="88" r="20" fill="${P.grey2}"/>
    <path d="M144 82 L168 76 L146 94 Z" fill="${P.orange}"/>
    <path d="M138 90 L152 96 L140 98 Z" fill="${P.orange}"/>
    <circle cx="128" cy="84" r="4" fill="${P.dark}"/>
    <text x="160" y="70" font-size="20">🎵</text>`, "wiggle"),
  vadai_fall: svg(`<circle cx="100" cy="60" r="16" fill="${P.grey2}"/>
    <circle cx="104" cy="56" r="3" fill="${P.dark}"/>
    <path d="M114 58 L126 56 L116 62 Z" fill="${P.orange}"/>
    <circle cx="100" cy="140" r="20" fill="${P.brown}" stroke="${P.brown2}" stroke-width="3"/>
    <circle cx="100" cy="140" r="8" fill="#fff6ef"/>
    <path d="M100 80 L100 116" stroke="${P.brown2}" stroke-width="3" stroke-dasharray="6 4"/>
    <text x="120" y="120" font-size="16">😱</text>`, "bob"),
  fox_run: svg(`<ellipse cx="100" cy="110" rx="40" ry="30" fill="${P.orange}"/>
    <circle cx="130" cy="82" r="22" fill="${P.orange}"/>
    <path d="M148 80 L168 76 L150 90 Z" fill="${P.orange}"/>
    ${eyes(124,138,78)}
    <circle cx="130" cy="100" r="12" fill="${P.brown}" stroke="${P.brown2}" stroke-width="2"/>
    <circle cx="130" cy="100" r="4" fill="#fff6ef"/>
    <path d="M60 108 Q40 128 56 140" stroke="${P.orange}" stroke-width="10" fill="none" stroke-linecap="round"/>
    <path d="M80 138 L70 166 M120 138 L130 166" stroke="${P.orange}" stroke-width="7" stroke-linecap="round"/>`, "bob"),
  moral_star: svg(`<polygon points="100,26 116,72 166,72 126,104 140,150 100,122 60,150 74,104 34,72 84,72" fill="${P.yellow}" stroke="#f0d36a" stroke-width="3"/>
    ${eyes(90,110,88)}
    <path d="M88 100 q12 12 24 0" stroke="${P.dark}" stroke-width="3" fill="none" stroke-linecap="round"/>
    <circle cx="80" cy="96" r="6" fill="${P.cheek}"/><circle cx="120" cy="96" r="6" fill="${P.cheek}"/>`, "pulse"),
  lion_sleep: svg(`<circle cx="100" cy="90" r="44" fill="${P.orange}"/>
    <circle cx="100" cy="90" r="30" fill="${P.yellow}"/>
    <path d="M82 86 L92 86 M108 86 L118 86" stroke="${P.dark}" stroke-width="3" stroke-linecap="round"/>
    <circle cx="78" cy="94" r="6" fill="${P.cheek}"/><circle cx="122" cy="94" r="6" fill="${P.cheek}"/>
    <ellipse cx="100" cy="100" rx="6" ry="4" fill="${P.pink}"/>
    <path d="M70 140 Q100 160 130 140 Z" fill="${P.yellow}"/>
    <text x="140" y="70" font-size="18">💤</text>`, "bob"),
  lion_catch: svg(`<circle cx="100" cy="80" r="40" fill="${P.orange}"/>
    <circle cx="100" cy="80" r="28" fill="${P.yellow}"/>
    ${eyes(90,110,76)}
    <ellipse cx="100" cy="90" rx="6" ry="4" fill="${P.pink}"/>
    <circle cx="82" cy="84" r="5" fill="${P.cheek}"/><circle cx="118" cy="84" r="5" fill="${P.cheek}"/>
    <ellipse cx="100" cy="148" rx="14" ry="10" fill="${P.grey}"/>
    <circle cx="100" cy="148" r="5" fill="${P.pink}"/>
    <path d="M86 128 Q100 120 114 128 L114 160 Q100 168 86 160 Z" fill="${P.yellow}"/>`, "bob"),
  mouse_beg: svg(`<ellipse cx="100" cy="120" rx="38" ry="30" fill="${P.grey}"/>
    <circle cx="72" cy="86" r="18" fill="${P.grey2}"/><circle cx="128" cy="86" r="18" fill="${P.grey2}"/>
    <circle cx="72" cy="86" r="10" fill="${P.pink}"/><circle cx="128" cy="86" r="10" fill="${P.pink}"/>
    ${eyes(90,110,108)}
    <path d="M80 104 Q80 80 70 76" stroke="#f6d9c0" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M120 104 Q120 80 130 76" stroke="#f6d9c0" stroke-width="5" fill="none" stroke-linecap="round"/>
    <circle cx="100" cy="118" r="4" fill="${P.pink2}"/>
    <text x="100" y="166" font-size="14" text-anchor="middle" fill="${P.dark}">🙏</text>`, "bob"),
  lion_kind: svg(`<circle cx="100" cy="80" r="40" fill="${P.orange}"/>
    <circle cx="100" cy="80" r="28" fill="${P.yellow}"/>
    ${eyes(90,110,74)}
    <path d="M90 90 q10 10 20 0" stroke="${P.dark}" stroke-width="3" fill="none" stroke-linecap="round"/>
    <circle cx="80" cy="86" r="6" fill="${P.cheek}"/><circle cx="120" cy="86" r="6" fill="${P.cheek}"/>
    <ellipse cx="60" cy="140" rx="12" ry="8" fill="${P.grey}"/>
    <circle cx="60" cy="140" r="4" fill="${P.pink}"/>
    <path d="M72 140 Q86 136 96 120" stroke="${P.dark}" stroke-width="2" stroke-dasharray="4 3" fill="none"/>`, "bob"),
  lion_net: svg(`<circle cx="100" cy="80" r="36" fill="${P.orange}"/>
    <circle cx="100" cy="80" r="24" fill="${P.yellow}"/>
    ${eyes(92,108,76)}
    <path d="M92 90 q8 4 16 0" stroke="${P.dark}" stroke-width="2.5" fill="none"/>
    <g stroke="${P.brown2}" stroke-width="3" fill="none">
    <path d="M50 60 L150 60 L150 160 L50 160 Z"/>
    <path d="M50 90 L150 90 M50 120 L150 120 M50 150 L150 150"/>
    <path d="M80 60 L80 160 M110 60 L110 160"/></g>`, "wiggle"),
  mouse_help: svg(`<ellipse cx="80" cy="110" rx="30" ry="24" fill="${P.grey}"/>
    <circle cx="58" cy="88" r="14" fill="${P.grey2}"/><circle cx="102" cy="88" r="14" fill="${P.grey2}"/>
    <circle cx="58" cy="88" r="7" fill="${P.pink}"/><circle cx="102" cy="88" r="7" fill="${P.pink}"/>
    <g class="blink"><circle cx="72" cy="104" r="3.5" fill="${P.dark}"/><circle cx="88" cy="104" r="3.5" fill="${P.dark}"/></g>
    <circle cx="80" cy="112" r="3" fill="${P.pink2}"/>
    <g stroke="${P.brown2}" stroke-width="2" fill="none">
    <path d="M120 70 L170 70 L170 150 L120 150"/>
    <path d="M120 100 L170 100 M120 130 L170 130"/>
    <path d="M140 70 L140 150"/></g>
    <path d="M118 96 L126 104" stroke="${P.red}" stroke-width="4" stroke-linecap="round"/>`, "wiggle"),
};
// NOTE: vowel tracing outlines live in trace-paths.js (TRACE), generated from the real
// Tamil Sangam MN glyphs via tools/gen-trace.mjs.
