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
const banner = document.getElementById("banner");
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

const hasSpeech = "speechSynthesis" in window;

// ---- helpers ----
const artFor = (item) => (item.n ? countArt(item.n) : ART[item.art]);
const rand = (n) => Math.floor(Math.random() * n);
function shuffled(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = rand(i + 1); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

// ---- voice: always use "Samantha" when available ----
function getVoice() {
  if (!hasSpeech) return null;
  const voices = speechSynthesis.getVoices() || [];
  return voices.find((v) => /samantha/i.test(v.name)) || null;
}

// ---- audio (Web Speech): say the letter, pause 1s, then the word ----
function speak(item, onDone) {
  const done = typeof onDone === "function" ? onDone : () => {};
  if (muted || !hasSpeech) { advanceTimer = setTimeout(done, SILENT_VIEW); return; }
  const voice = getVoice();
  const mkU = (text) => {
    const u = new SpeechSynthesisUtterance(text);
    if (voice) { u.voice = voice; u.lang = voice.lang; } else { u.lang = "ta-IN"; }
    u.rate = 0.65;
    return u;
  };
  try { speechSynthesis.cancel(); } catch (e) {}

  if (activeSet === "numbers") {
    const u = mkU(item.w); u.onend = u.onerror = done; speechSynthesis.speak(u); return;
  }
  const u1 = mkU(item.l);
  u1.onerror = done;
  u1.onend = () => {
    advanceTimer = setTimeout(() => {       // 1s break, slide stays put
      const u2 = mkU(item.w); u2.onend = u2.onerror = done; speechSynthesis.speak(u2);
    }, GAP);
  };
  speechSynthesis.speak(u1);
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

// ---- quiz mode ----
function newQuizRound() {
  clearTimeout(advanceTimer);
  const targetI = rand(letters.length);
  const target = letters[targetI];
  const pool = letters.map((_, i) => i).filter((i) => i !== targetI);
  const distract = shuffled(pool).slice(0, 2);
  const choiceItems = shuffled([targetI, ...distract]).map((i) => letters[i]);
  stage.innerHTML = `
    <div class="quiz">
      <div class="quiz-q">இது எது? <span class="quiz-target" lang="ta">${target.l}</span></div>
      <div class="quiz-choices">
        ${choiceItems.map((c) => `<button class="choice" data-correct="${c === target ? 1 : 0}">${artFor(c)}</button>`).join("")}
      </div>
    </div>`;
  stage.querySelectorAll(".choice").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (btn.dataset.correct === "1") {
        btn.classList.add("right");
        addStar();
        setTimeout(newQuizRound, 1100);
      } else {
        btn.classList.add("wrong");
        setTimeout(() => btn.classList.remove("wrong"), 500);
      }
    });
  });
  speak(target);
}

// ---- stars ----
function addStar() { stars++; localStorage.setItem("stars", stars); renderStars(); }
function renderStars() { starsEl.textContent = `⭐ ${stars}`; }

// ---- play / pause ----
function setPlaying(on) {
  playing = on;
  playBtn.textContent = on ? "⏸" : "▶";
  clearTimeout(advanceTimer);
  if (hasSpeech) { try { speechSynthesis.cancel(); } catch (e) {} }
  if (on && !quizMode) render();
}

function switchSet(name) {
  activeSet = name;
  letters = SETS[name];
  tabs.forEach((t) => t.classList.toggle("active", t.dataset.set === name));
  buildOrder(); buildStrip();
  if (quizMode) newQuizRound(); else render();
}

function setQuiz(on) {
  quizMode = on;
  document.body.classList.toggle("quiz", on);
  quizBtn.classList.toggle("on", on);
  clearTimeout(advanceTimer);
  if (hasSpeech) { try { speechSynthesis.cancel(); } catch (e) {} }
  if (on) newQuizRound(); else render();
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
  if (muted && hasSpeech) { try { speechSynthesis.cancel(); } catch (e) {} }
}
function applyRoman() {
  document.body.classList.toggle("show-roman", showRoman);
  romanBtn.classList.toggle("on", showRoman);
}

// ---- audio-availability banner ----
function checkVoice() {
  if (!hasSpeech || localStorage.getItem("voiceBannerOff") === "1") return;
  const voices = speechSynthesis.getVoices() || [];
  if (voices.length === 0) return; // not loaded yet; onvoiceschanged will re-fire
  banner.hidden = !!getVoice(); // hide when the Samantha voice is available
}

// ---- events ----
tabs.forEach((t) => t.addEventListener("click", () => switchSet(t.dataset.set)));
playBtn.addEventListener("click", () => setPlaying(!playing));
document.getElementById("next").addEventListener("click", () => (quizMode ? newQuizRound() : go(1)));
document.getElementById("prev").addEventListener("click", () => (quizMode ? newQuizRound() : go(-1)));
soundBtn.addEventListener("click", () => { muted = !muted; localStorage.setItem("muted", muted ? "1" : "0"); applySound(); if (!quizMode) render(); });
romanBtn.addEventListener("click", () => { showRoman = !showRoman; localStorage.setItem("roman", showRoman ? "1" : "0"); applyRoman(); });
quizBtn.addEventListener("click", () => setQuiz(!quizMode));
shuffleBtn.addEventListener("click", () => setMode("shuffle"));
repeatBtn.addEventListener("click", () => setMode("repeat"));
document.getElementById("banner-close").addEventListener("click", () => { banner.hidden = true; localStorage.setItem("voiceBannerOff", "1"); });

// tap the letter to replay; tap elsewhere on the card to advance (learn mode only)
stage.addEventListener("click", (e) => {
  if (quizMode) return;
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
    if (hasSpeech) { try { speechSynthesis.cancel(); } catch (e) {} }
  } else if (started && playing && !quizMode) {
    render();
  }
});

// ---- splash / audio unlock ----
function startApp() {
  if (started) return;
  started = true;
  splash.classList.add("gone");
  setTimeout(() => splash.remove(), 400);
  if (hasSpeech) { try { speechSynthesis.resume(); } catch (e) {} } // unlock on gesture
  if (quizMode) newQuizRound(); else { playing = true; render(); }
}
splash.addEventListener("click", startApp);

// ---- init ----
applySound();
applyRoman();
renderStars();
buildOrder();
buildStrip();
render(false, true);          // show first card quietly behind the splash
if (hasSpeech) { checkVoice(); speechSynthesis.onvoiceschanged = checkVoice; }

// ---- PWA service worker ----
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
}
