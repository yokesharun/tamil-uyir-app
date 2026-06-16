// ---- Tamil letters & numbers for kids — app logic (art lives in art.js) ----

const SETS = {
  uyir: [
    { l: "அ", w: "அணில்", m: "Squirrel", r: "a", art: "squirrel" },
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
};

// ---- DOM ----
const stage = document.getElementById("stage");
const stripBox = document.getElementById("strip");
const playBtn = document.getElementById("play");
const soundBtn = document.getElementById("sound");
const romanBtn = document.getElementById("roman");
const tabs = [...document.querySelectorAll(".tab")];

// ---- state ----
let activeSet = "uyir";
let letters = SETS[activeSet];
let idx = 0;
let playing = true;
let timer = null;
const DELAY = 5000;
let muted = localStorage.getItem("muted") === "1";
let showRoman = localStorage.getItem("roman") !== "0"; // on by default

// ---- audio (Web Speech) ----
function speak(item) {
  if (muted || !("speechSynthesis" in window)) return;
  const u = new SpeechSynthesisUtterance();
  u.lang = "ta-IN";
  u.rate = 0.85;
  u.text = activeSet === "numbers" ? item.w : `${item.l}. ${item.w}`;
  try { speechSynthesis.cancel(); speechSynthesis.speak(u); } catch (e) {}
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
      idx = i; render(); if (playing) startTimer();
    });
    stripBox.appendChild(b);
  });
}

// ---- render a card ----
function render(celebrate) {
  const item = letters[idx];
  const art = activeSet === "numbers" ? countArt(item.n) : ART[item.art];
  stage.innerHTML = `
    <div class="card">
      <div class="letter-panel">
        <div class="letter" lang="ta">${item.l}</div>
        ${activeSet === "numbers" ? `<div class="numeral">${item.n}</div>` : ""}
      </div>
      <div class="detail-panel">
        ${art}
        <div class="word" lang="ta">${item.w}</div>
        <div class="meaning">${item.m}</div>
        <div class="roman">${item.r}</div>
      </div>
      <div class="sparkles">${"<span></span>".repeat(6)}</div>
      ${celebrate ? '<div class="cheer">🎉</div>' : ""}
    </div>`;
  const chips = [...stripBox.children];
  chips.forEach((c, i) => c.classList.toggle("active", i === idx));
  if (chips[idx]) chips[idx].scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
  speak(item);
}

function go(step) {
  const prev = idx;
  idx = (idx + step + letters.length) % letters.length;
  // celebrate when the slideshow loops back to the start
  render(step > 0 && idx === 0 && prev === letters.length - 1);
}

function startTimer() { clearInterval(timer); timer = setInterval(() => go(1), DELAY); }

function setPlaying(on) {
  playing = on;
  playBtn.textContent = on ? "⏸" : "▶";
  if (on) startTimer(); else clearInterval(timer);
}

function switchSet(name) {
  if (name === activeSet) return;
  activeSet = name;
  letters = SETS[name];
  idx = 0;
  tabs.forEach((t) => t.classList.toggle("active", t.dataset.set === name));
  buildStrip(); render(); if (playing) startTimer();
}

// ---- toggles ----
function applySound() {
  soundBtn.textContent = muted ? "🔇" : "🔊";
  soundBtn.setAttribute("aria-label", muted ? "Unmute" : "Mute");
  if (muted && "speechSynthesis" in window) speechSynthesis.cancel();
}
function applyRoman() {
  document.body.classList.toggle("show-roman", showRoman);
  romanBtn.classList.toggle("on", showRoman);
}

// ---- events ----
tabs.forEach((t) => t.addEventListener("click", () => switchSet(t.dataset.set)));
playBtn.addEventListener("click", () => setPlaying(!playing));
document.getElementById("next").addEventListener("click", () => { go(1); if (playing) startTimer(); });
document.getElementById("prev").addEventListener("click", () => { go(-1); if (playing) startTimer(); });
soundBtn.addEventListener("click", () => { muted = !muted; localStorage.setItem("muted", muted ? "1" : "0"); applySound(); if (!muted) speak(letters[idx]); });
romanBtn.addEventListener("click", () => { showRoman = !showRoman; localStorage.setItem("roman", showRoman ? "1" : "0"); applyRoman(); });

// tap the letter to replay sound; tap elsewhere on the card to advance
stage.addEventListener("click", (e) => {
  if (e.target.closest(".letter-panel")) { speak(letters[idx]); return; }
  go(1); if (playing) startTimer();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") { go(1); if (playing) startTimer(); }
  if (e.key === "ArrowLeft") { go(-1); if (playing) startTimer(); }
  if (e.key === " ") { e.preventDefault(); setPlaying(!playing); }
});

// ---- init ----
applySound();
applyRoman();
buildStrip();
render();
setPlaying(true);

// ---- PWA service worker ----
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
}
