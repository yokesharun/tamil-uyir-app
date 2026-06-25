// ---- Tamil letters & numbers for kids — app logic (art lives in art.js) ----

const SETS = {
  uyir: [
    { l: "அ", w: "அம்மா", m: "Mother", r: "a", art: "amma" },
    { l: "ஆ", w: "ஆடு", m: "Goat", r: "aa", art: "goat" },
    { l: "இ", w: "இலை", m: "Leaf", r: "i", art: "leaf" },
    { l: "ஈ", w: "ஈ", m: "Fly", r: "ii", art: "fly" },
    { l: "உ", w: "உரல்", m: "Mortar", r: "u", art: "mortar" },
    { l: "ஊ", w: "ஊஞ்சல்", m: "Swing", r: "uu", art: "swing" },
    { l: "எ", w: "எலி", m: "Mouse", r: "e", art: "mouse" },
    { l: "ஏ", w: "ஏணி", m: "Ladder", r: "ee", art: "ladder" },
    { l: "ஐ", w: "ஐஸ்", m: "Ice", r: "ai", art: "ice" },
    { l: "ஒ", w: "ஒட்டகம்", m: "Camel", r: "o", art: "camel" },
    { l: "ஓ", w: "ஓடம்", m: "Boat", r: "oo", art: "boat" },
    { l: "ஔ", w: "ஔவியம்", m: "Painting", r: "au", art: "palette" },
  ],
  mey: [
    { l: "க்", w: "காகம்", m: "Crow", r: "k", art: "crow" },
    { l: "ங்", w: "தங்கம்", m: "Gold", r: "ng", art: "gold" },
    { l: "ச்", w: "சங்கு", m: "Conch", r: "ch", art: "shell" },
    { l: "ஞ்", w: "ஞாயிறு", m: "Sun", r: "nj", art: "sun" },
    { l: "ட்", w: "பட்டம்", m: "Kite", r: "d", art: "kite" },
    { l: "ண்", w: "மண்", m: "Soil", r: "n", art: "soil" },
    { l: "த்", w: "தேங்காய்", m: "Coconut", r: "th", art: "coconut" },
    { l: "ந்", w: "நண்டு", m: "Crab", r: "n", art: "crab" },
    { l: "ப்", w: "பந்து", m: "Ball", r: "p", art: "ball" },
    { l: "ம்", w: "மரம்", m: "Tree", r: "m", art: "tree" },
    { l: "ய்", w: "யானை", m: "Elephant", r: "y", art: "elephant" },
    { l: "ர்", w: "ரயில்", m: "Train", r: "r", art: "train" },
    { l: "ல்", w: "லட்டு", m: "Laddu", r: "l", art: "sweet" },
    { l: "வ்", w: "வண்டி", m: "Car", r: "v", art: "car" },
    { l: "ழ்", w: "மழை", m: "Rain", r: "zh", art: "rain" },
    { l: "ள்", w: "வாள்", m: "Sword", r: "l", art: "sword" },
    { l: "ற்", w: "ஆறு", m: "River", r: "r", art: "river" },
    { l: "ன்", w: "மீன்", m: "Fish", r: "n", art: "fish" },
  ],
  numbers: [
    { l: "௧", w: "ஒன்று", m: "One", r: "ondru", n: 1 },
    { l: "௨", w: "இரண்டு", m: "Two", r: "irandu", n: 2 },
    { l: "௩", w: "மூன்று", m: "Three", r: "moondru", n: 3 },
    { l: "௪", w: "நான்கு", m: "Four", r: "naangu", n: 4 },
    { l: "௫", w: "ஐந்து", m: "Five", r: "aindhu", n: 5 },
    { l: "௬", w: "ஆறு", m: "Six", r: "aaru", n: 6 },
    { l: "௭", w: "ஏழு", m: "Seven", r: "ezhu", n: 7 },
    { l: "௮", w: "எட்டு", m: "Eight", r: "ettu", n: 8 },
    { l: "௯", w: "ஒன்பது", m: "Nine", r: "onbadhu", n: 9 },
    { l: "௰", w: "பத்து", m: "Ten", r: "paththu", n: 10 },
  ],
  uyirmey_ka: [
    { l: "க", w: "கதவு", m: "Door", r: "ka", art: "door" },
    { l: "கா", w: "காகம்", m: "Crow", r: "kaa", art: "crow" },
    { l: "கி", w: "கிளி", m: "Parrot", r: "ki", art: "parrot" },
    { l: "கீ", w: "கீரை", m: "Greens", r: "kii", art: "leaf" },
    { l: "கு", w: "குதிரை", m: "Horse", r: "ku", art: "horse" },
    { l: "கூ", w: "கூடை", m: "Basket", r: "kuu", art: "basket" },
    { l: "கெ", w: "கெண்டை", m: "Fish", r: "ke", art: "fish" },
    { l: "கே", w: "கேடயம்", m: "Shield", r: "kee", art: "sword" },
    { l: "கை", w: "கை", m: "Hand", r: "kai", art: "hand" },
    { l: "கொ", w: "கொடி", m: "Flag", r: "ko", art: "flag" },
    { l: "கோ", w: "கோழி", m: "Hen", r: "koo", art: "hen" },
    { l: "கௌ", w: "கௌவை", m: "Sound", r: "kau", art: "shell" },
  ],
};

// ---- DOM ----
const stage = document.getElementById("stage");
const stripBox = document.getElementById("strip");
const playBtn = document.getElementById("play");
const soundBtn = document.getElementById("sound");
const romanBtn = document.getElementById("roman");
const quizBtn = document.getElementById("quiz");
const shuffleBtn = document.getElementById("shuffle");
const repeatBtn = document.getElementById("repeat");
const starsEl = document.getElementById("stars");
const splash = document.getElementById("splash");
const tabs = [...document.querySelectorAll(".tab")];

// ---- state ----
let activeSet = "uyir";
let letters = SETS[activeSet];
let order = [];           // playback order (indices into `letters`)
let pos = 0;              // position within `order`
let idx = 0;              // current index into `letters`  (idx === order[pos])
let playing = true;
let advanceTimer = null;
let mode = "sequence";    // sequence | shuffle | repeat
let quizMode = false;
let started = false;      // becomes true after the splash tap (audio unlock)
let stars = +(localStorage.getItem("stars") || 0);

const GAP = 1000;          // pause between speaking the letter and the word
const LINGER = 2000;       // wait after the word before moving on
const SILENT_VIEW = 4500;  // viewing time per card when audio is muted/unavailable
let muted = localStorage.getItem("muted") === "1";
let showRoman = localStorage.getItem("roman") !== "0";

// ---- helpers ----
const artFor = (item) => (item.n ? countArt(item.n) : ART[item.art]);
const rand = (n) => Math.floor(Math.random() * n);
function shuffled(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = rand(i + 1); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

// ---- audio: pre-recorded Tamil clips (Vani), played with one reusable element ----
// Each item carries item.audio = "audio/<set>-<i>"; clips are -l.m4a (letter) and -w.m4a (word).
const player = new Audio();
player.preload = "auto";

// Play one clip; resolve when it ends, errors, or times out (so the slideshow never stalls).
function playClip(src) {
  return new Promise((resolve) => {
    let done = false;
    const finish = () => { if (done) return; done = true; clearTimeout(guard); resolve(); };
    const guard = setTimeout(finish, 4000);
    player.onended = finish;
    player.onerror = finish;
    try { player.pause(); player.currentTime = 0; player.src = src; player.play().catch(finish); }
    catch (e) { finish(); }
  });
}

// say the letter, pause ~1s, then the word; calls onDone() when finished.
function speak(item, onDone) {
  const done = typeof onDone === "function" ? onDone : () => {};
  if (muted || !item || !item.audio) { advanceTimer = setTimeout(done, SILENT_VIEW); return; }
  if (item.n) { playClip(item.audio + "-w.m4a").then(done); return; }   // numbers: word only
  playClip(item.audio + "-l.m4a").then(() => {
    advanceTimer = setTimeout(() => {                                   // 1s break, slide stays put
      playClip(item.audio + "-w.m4a").then(done);
    }, GAP);
  });
}

function stopAudio() {
  try { player.pause(); player.onended = null; player.onerror = null; } catch (e) {}
}

// ---- order ----
function buildOrder() {
  const seq = letters.map((_, i) => i);
  order = mode === "shuffle" ? shuffled(seq) : seq;
  pos = 0;
  idx = order[0];
}

// ---- strip ----
function buildStrip() {
  stripBox.innerHTML = "";
  letters.forEach((item, i) => {
    const b = document.createElement("button");
    b.className = "chip";
    b.textContent = item.l;
    b.setAttribute("lang", "ta");
    b.setAttribute("aria-label", item.w);
    b.addEventListener("click", (e) => {
      e.stopPropagation();
      clearTimeout(advanceTimer);
      idx = i; pos = Math.max(0, order.indexOf(i)); render();
    });
    stripBox.appendChild(b);
  });
}

// ---- learn-mode render ----
function render(celebrate, silent) {
  if (contentMode && contentMode.items) return;
  const item = letters[idx];
  stage.innerHTML = `
    <div class="card">
      <div class="letter-panel">
        <div class="letter" lang="ta">${item.l}</div>
        ${item.n ? `<div class="numeral">${item.n}</div>` : ""}
      </div>
      <div class="detail-panel">
        ${artFor(item)}
        <div class="word" lang="ta">${item.w}</div>
        <div class="meaning">${item.m}</div>
        <div class="roman">${item.r}</div>
        <button class="say" aria-label="Say it again">🔊 மீண்டும்</button>
      </div>
      <div class="sparkles">${"<span></span>".repeat(6)}</div>
      ${celebrate ? '<div class="cheer">🎉</div>' : ""}
    </div>`;
  const chips = [...stripBox.children];
  chips.forEach((c, i) => c.classList.toggle("active", i === idx));
  if (chips[idx]) chips[idx].scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });

  stage.querySelector(".say").addEventListener("click", (e) => { e.stopPropagation(); speak(item); });

  clearTimeout(advanceTimer);
  if (silent) return;                       // shown without audio/auto-advance (e.g. behind splash)
  speak(item, () => { if (playing && !quizMode) advanceTimer = setTimeout(() => go(1), LINGER); });
}

function go(step) {
  clearTimeout(advanceTimer);
  if (mode === "repeat") { render(); return; }   // stay on the same card
  const prevPos = pos;
  pos = (pos + step + order.length) % order.length;
  idx = order[pos];
  render(step > 0 && pos === 0 && prevPos === order.length - 1);
}

// ---- games (always on the 12 vowels) ----
const GAME_SET = SETS.uyir;
let gameMode = null;        // 'find' | 'listen' | 'trace' | null
let gameQueue = [];
let served = 0;
let traceRAF = null, ctx = null, drawing = false, drewSomething = false;

function refillQueue() { gameQueue = shuffled(GAME_SET.map((_, i) => i)); served = 0; }
function nextIndex() { if (!gameQueue.length) refillQueue(); return gameQueue.shift(); }

function gameToolbar() { return `<div class="game-toolbar"><button class="game-back">← விளையாட்டு</button></div>`; }
function bindToolbar() {
  const b = stage.querySelector(".game-back");
  if (b) b.addEventListener("click", (e) => { e.stopPropagation(); openGames(); });
}

function openGames() {
  gameMode = null; quizMode = true;
  document.body.classList.add("quiz"); quizBtn.classList.add("on");
  clearTimeout(advanceTimer); stopAudio(); stopTrace();
  stage.innerHTML = `
    <div class="games">
      <div class="games-title">விளையாட்டு 🎮</div>
      <div class="games-grid">
        <button class="game-pick" data-game="find">🔎<span>எழுத்தை கண்டுபிடி</span><em>Find the Letter</em></button>
        <button class="game-pick" data-game="listen">👂<span>கேட்டு தட்டு</span><em>Listen &amp; Tap</em></button>
        <button class="game-pick" data-game="trace">✏️<span>எழுது</span><em>Trace</em></button>
      </div>
      <button class="game-back2">← திரும்பு</button>
    </div>`;
  stage.querySelectorAll(".game-pick").forEach((b) =>
    b.addEventListener("click", (e) => { e.stopPropagation(); startGame(b.dataset.game); }));
  stage.querySelector(".game-back2").addEventListener("click", (e) => { e.stopPropagation(); exitGames(); });
}

function exitGames() {
  gameMode = null; quizMode = false;
  document.body.classList.remove("quiz"); quizBtn.classList.remove("on");
  clearTimeout(advanceTimer); stopAudio(); stopTrace();
  render();
}

function startGame(kind) { gameMode = kind; refillQueue(); kind === "trace" ? traceRound() : quizRound(); }

function roundComplete() {
  stage.innerHTML = `<div class="quiz done">
    <div class="cheer-big">🎉</div>
    <div class="quiz-q">அருமை! எல்லாம் முடிந்தது</div>
    <button class="again">↻ மீண்டும்</button>${gameToolbar()}</div>`;
  stage.querySelector(".again").addEventListener("click", (e) => {
    e.stopPropagation(); refillQueue(); gameMode === "trace" ? traceRound() : quizRound();
  });
  bindToolbar();
}

function wireChoices(onCorrect) {
  stage.querySelectorAll(".choice").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (btn.dataset.ok === "1") { btn.classList.add("right"); onCorrect(); }
      else { btn.classList.add("wrong"); setTimeout(() => btn.classList.remove("wrong"), 500); }
    }));
}

// Find the Letter + Listen & Tap
function quizRound() {
  clearTimeout(advanceTimer); stopAudio();
  if (served >= GAME_SET.length) { roundComplete(); return; }
  const targetI = nextIndex(); served++;
  const target = GAME_SET[targetI];
  const distract = shuffled(GAME_SET.map((_, k) => k).filter((k) => k !== targetI)).slice(0, 2);
  const choices = shuffled([targetI, ...distract]);

  if (gameMode === "find") {
    stage.innerHTML = `<div class="quiz">
      <div class="quiz-q">இது எது? <span class="quiz-target" lang="ta">${target.l}</span></div>
      <div class="quiz-choices">
        ${choices.map((k) => `<button class="choice" data-ok="${k === targetI ? 1 : 0}">${artFor(GAME_SET[k])}</button>`).join("")}
      </div>${gameToolbar()}</div>`;
  } else {
    stage.innerHTML = `<div class="quiz">
      <div class="quiz-q">கேட்டு தட்டு <button class="mini-say" aria-label="play">🔊</button></div>
      <div class="quiz-choices letters">
        ${choices.map((k) => `<button class="choice letter-choice" data-ok="${k === targetI ? 1 : 0}" lang="ta">${GAME_SET[k].l}</button>`).join("")}
      </div>${gameToolbar()}</div>`;
    stage.querySelector(".mini-say").addEventListener("click", (e) => { e.stopPropagation(); speak(target); });
  }
  wireChoices(() => { addStar(); setTimeout(quizRound, 1000); });
  bindToolbar();
  speak(target);
}

// Guided stroke-order tracing
function stopTrace() { if (traceRAF) cancelAnimationFrame(traceRAF); traceRAF = null; drawing = false; }

function traceRound() {
  clearTimeout(advanceTimer); stopAudio(); stopTrace();
  if (served >= GAME_SET.length) { roundComplete(); return; }
  const targetI = nextIndex(); served++;
  const target = GAME_SET[targetI];
  const d = (typeof TRACE !== "undefined" && TRACE[target.l]) || "";
  stage.innerHTML = `<div class="trace">
    <div class="trace-stage">
      <svg class="trace-guide" viewBox="0 0 200 200" aria-hidden="true">
        <path class="trace-fill" d="${d}" />
        <path class="trace-outline" d="${d}" />
        <circle class="trace-dot" r="7" cx="-20" cy="-20" />
      </svg>
      <canvas class="trace-canvas" width="360" height="360"></canvas>
    </div>
    <div class="trace-bar">
      <button class="tbtn t-hear" aria-label="hear">🔊</button>
      <button class="tbtn t-show" aria-label="show strokes">▶</button>
      <button class="tbtn t-clear" aria-label="clear">🧹</button>
      <button class="tbtn t-next" aria-label="next">➡️</button>
    </div>${gameToolbar()}</div>`;
  setupCanvas();
  animateGuide();
  stage.querySelector(".t-hear").addEventListener("click", (e) => { e.stopPropagation(); speak(target); });
  stage.querySelector(".t-show").addEventListener("click", (e) => { e.stopPropagation(); animateGuide(); });
  stage.querySelector(".t-clear").addEventListener("click", (e) => { e.stopPropagation(); clearCanvas(); });
  stage.querySelector(".t-next").addEventListener("click", (e) => {
    e.stopPropagation(); if (drewSomething) addStar(); stopTrace(); setTimeout(traceRound, 250);
  });
  bindToolbar();
  speak(target);
}

function setupCanvas() {
  const c = stage.querySelector(".trace-canvas");
  if (!c) return;
  ctx = c.getContext("2d");
  drewSomething = false;
  ctx.lineWidth = 16; ctx.lineCap = "round"; ctx.lineJoin = "round"; ctx.strokeStyle = "#ff9ec4";
  const at = (ev) => { const r = c.getBoundingClientRect(); return { x: (ev.clientX - r.left) * c.width / r.width, y: (ev.clientY - r.top) * c.height / r.height }; };
  c.addEventListener("pointerdown", (ev) => { drawing = true; drewSomething = true; const p = at(ev); ctx.beginPath(); ctx.moveTo(p.x, p.y); ev.preventDefault(); });
  c.addEventListener("pointermove", (ev) => { if (!drawing) return; const p = at(ev); ctx.lineTo(p.x, p.y); ctx.stroke(); ev.preventDefault(); });
  c.addEventListener("pointerup", () => { drawing = false; });
  c.addEventListener("pointercancel", () => { drawing = false; });
  c.addEventListener("pointerleave", () => { drawing = false; });
}
function clearCanvas() { const c = stage.querySelector(".trace-canvas"); if (c && ctx) ctx.clearRect(0, 0, c.width, c.height); drewSomething = false; }

function animateGuide() {
  stopTrace();
  const path = stage.querySelector(".trace-outline");
  const dot = stage.querySelector(".trace-dot");
  if (!path || !dot) return;
  const len = path.getTotalLength();
  let t = 0;
  const step = () => {
    const pt = path.getPointAtLength(Math.min(t, len));
    dot.setAttribute("cx", pt.x); dot.setAttribute("cy", pt.y);
    t += Math.max(2, len / 220);            // ~constant duration regardless of glyph size
    if (t >= len + 16) t = 0;               // loop
    traceRAF = requestAnimationFrame(step);
  };
  step();
}

// ---- stars ----
function addStar() { stars++; localStorage.setItem("stars", stars); renderStars(); }
function renderStars() { starsEl.textContent = `⭐ ${stars}`; }

// ---- play / pause ----
function setPlaying(on) {
  playing = on;
  playBtn.textContent = on ? "⏸" : "▶";
  clearTimeout(advanceTimer);
  stopAudio();
  if (on && !quizMode) render();
}

function switchSet(name) {
  if (quizMode) { gameMode = null; quizMode = false; document.body.classList.remove("quiz"); quizBtn.classList.remove("on"); stopTrace(); stopAudio(); }
  activeSet = name;
  letters = SETS[name];
  tabs.forEach((t) => t.classList.toggle("active", t.dataset.set === name));
  buildOrder(); buildStrip();
  render();
}

function setMode(next) {
  mode = mode === next ? "sequence" : next;
  shuffleBtn.classList.toggle("on", mode === "shuffle");
  repeatBtn.classList.toggle("on", mode === "repeat");
  buildOrder();
  if (!quizMode) render();
}

// ---- toggles ----
function applySound() {
  soundBtn.textContent = muted ? "🔇" : "🔊";
  soundBtn.setAttribute("aria-label", muted ? "Unmute" : "Mute");
  if (muted) stopAudio();
}
function applyRoman() {
  document.body.classList.toggle("show-roman", showRoman);
  romanBtn.classList.toggle("on", showRoman);
}

// ---- content mode (rhymes & stories) ----
let contentMode = null;   // null | { type: 'rhyme'|'story', key: string, items: [], idx: 0 }

function showContentPicker(type) {
  if (quizMode) { gameMode = null; quizMode = false; document.body.classList.remove("quiz"); quizBtn.classList.remove("on"); stopTrace(); }
  clearTimeout(advanceTimer); stopAudio();
  playing = false; playBtn.textContent = "▶";
  contentMode = { type };
  document.body.classList.add("content-mode");
  tabs.forEach((t) => {
    t.classList.toggle("active", t.dataset.content === type);
    if (t.dataset.content === type) t.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
  });

  const catalog = type === "rhyme" ? RHYMES : STORIES;
  stage.innerHTML = `<div class="content-picker">
    <div class="picker-title">${type === "rhyme" ? "பாடல்கள் 🎵" : "கதைகள் 📖"}</div>
    <div class="picker-grid">
      ${Object.entries(catalog).map(([key, c]) =>
        `<button class="picker-card" data-key="${key}">
          <span class="picker-icon">${c.icon}</span>
          <span class="picker-name" lang="ta">${c.title}</span>
          <span class="picker-en">${c.titleEn}</span>
        </button>`).join("")}
    </div></div>`;
  stripBox.innerHTML = "";
  stage.querySelectorAll(".picker-card").forEach((b) =>
    b.addEventListener("click", (e) => { e.stopPropagation(); startContent(type, b.dataset.key); }));
}

function startContent(type, key) {
  const catalog = type === "rhyme" ? RHYMES : STORIES;
  const data = catalog[key];
  if (!data) return;
  contentMode = { type, key, items: data.items, idx: 0, title: data.title };
  buildContentStrip();
  renderContent();
}

function buildContentStrip() {
  if (!contentMode || !contentMode.items) return;
  stripBox.innerHTML = "";
  contentMode.items.forEach((_, i) => {
    const b = document.createElement("button");
    b.className = "chip";
    b.textContent = i + 1;
    b.addEventListener("click", (e) => {
      e.stopPropagation(); clearTimeout(advanceTimer);
      contentMode.idx = i; renderContent();
    });
    stripBox.appendChild(b);
  });
}

function renderContent() {
  if (!contentMode || !contentMode.items) return;
  const item = contentMode.items[contentMode.idx];
  const artSvg = ART[item.art] || "";
  stage.innerHTML = `<div class="card content-card">
    <div class="content-art">${artSvg}</div>
    <div class="content-text" lang="ta">${item.text}</div>
    <div class="content-en">${item.en}</div>
    <div class="content-nav">
      <button class="ctrl content-prev" ${contentMode.idx === 0 ? "disabled" : ""}>⟨</button>
      <button class="say" aria-label="Say it again">🔊</button>
      <button class="ctrl content-next">${contentMode.idx < contentMode.items.length - 1 ? "⟩" : "✓"}</button>
    </div>
    <button class="content-back">← ${contentMode.type === "rhyme" ? "பாடல்கள்" : "கதைகள்"}</button>
    <div class="sparkles">${"<span></span>".repeat(6)}</div>
  </div>`;

  const chips = [...stripBox.children];
  chips.forEach((c, i) => c.classList.toggle("active", i === contentMode.idx));
  if (chips[contentMode.idx]) chips[contentMode.idx].scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });

  stage.querySelector(".content-prev").addEventListener("click", (e) => { e.stopPropagation(); goContent(-1); });
  stage.querySelector(".content-next").addEventListener("click", (e) => {
    e.stopPropagation();
    if (contentMode.idx >= contentMode.items.length - 1) { showContentPicker(contentMode.type); return; }
    goContent(1);
  });
  stage.querySelector(".say").addEventListener("click", (e) => { e.stopPropagation(); speakContent(item); });
  stage.querySelector(".content-back").addEventListener("click", (e) => { e.stopPropagation(); showContentPicker(contentMode.type); });

  clearTimeout(advanceTimer);
  speakContent(item, () => {
    if (playing && contentMode && contentMode.idx < contentMode.items.length - 1) {
      advanceTimer = setTimeout(() => goContent(1), LINGER);
    }
  });
}

function goContent(step) {
  clearTimeout(advanceTimer); stopAudio();
  contentMode.idx = Math.max(0, Math.min(contentMode.items.length - 1, contentMode.idx + step));
  renderContent();
}

function speakContent(item, onDone) {
  const done = typeof onDone === "function" ? onDone : () => {};
  if (muted || !item) { advanceTimer = setTimeout(done, SILENT_VIEW); return; }
  const audioKey = `${contentMode.type === "rhyme" ? "rhyme" : "story"}-${contentMode.key}-${contentMode.idx}`;
  playClip(`audio/${audioKey}.m4a`).then(done);
}

function exitContentMode() {
  contentMode = null;
  document.body.classList.remove("content-mode");
  buildStrip(); render();
}

// ---- events ----
tabs.forEach((t) => {
  t.addEventListener("click", () => {
    if (t.dataset.content) { showContentPicker(t.dataset.content); return; }
    if (contentMode) exitContentMode();
    switchSet(t.dataset.set);
  });
});
playBtn.addEventListener("click", () => setPlaying(!playing));
document.getElementById("next").addEventListener("click", () => { if (!quizMode) go(1); });
document.getElementById("prev").addEventListener("click", () => { if (!quizMode) go(-1); });
soundBtn.addEventListener("click", () => { muted = !muted; localStorage.setItem("muted", muted ? "1" : "0"); applySound(); if (!quizMode) render(); });
romanBtn.addEventListener("click", () => { showRoman = !showRoman; localStorage.setItem("roman", showRoman ? "1" : "0"); applyRoman(); });
quizBtn.addEventListener("click", () => (quizMode ? exitGames() : openGames()));
shuffleBtn.addEventListener("click", () => setMode("shuffle"));
repeatBtn.addEventListener("click", () => setMode("repeat"));

// tap the letter to replay; tap elsewhere on the card to advance (learn mode only)
stage.addEventListener("click", (e) => {
  if (quizMode || (contentMode && contentMode.items)) return;
  if (e.target.closest(".letter-panel")) { speak(letters[idx]); return; }
  if (e.target.closest(".say")) return;
  go(1);
});

document.addEventListener("keydown", (e) => {
  if (quizMode) return;
  if (e.key === "ArrowRight") go(1);
  if (e.key === "ArrowLeft") go(-1);
  if (e.key === " ") { e.preventDefault(); setPlaying(!playing); }
});

// pause everything when the tab is hidden; resume when visible
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    clearTimeout(advanceTimer);
    stopAudio();
  } else if (started && playing && !quizMode && !(contentMode && contentMode.items)) {
    render();
  }
});

// ---- splash / audio unlock ----
function startApp() {
  if (started) return;
  started = true;
  splash.classList.add("gone");
  setTimeout(() => splash.remove(), 400);
  // iOS unlock: play a clip inside the user gesture so later src swaps are allowed
  try { player.src = "audio/silent.m4a"; const p = player.play(); if (p) p.catch(() => {}); } catch (e) {}
  playing = true; render();
}
splash.addEventListener("click", startApp);

// ---- init ----
// attach the audio clip base path to every item (used by speak + quiz)
for (const [setName, items] of Object.entries(SETS)) {
  items.forEach((item, i) => { item.audio = `audio/${setName}-${i}`; });
}
applySound();
applyRoman();
renderStars();
buildOrder();
buildStrip();
render(false, true);          // show first card quietly behind the splash

// ---- PWA service worker ----
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
}
