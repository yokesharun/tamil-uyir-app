# தமிழ் — Tamil Letters & Numbers for Kids 🌸

A simple, colorful, **kawaii** web app that helps young children learn Tamil:

- **உயிர் எழுத்துக்கள்** — the 12 vowels
- **மெய் எழுத்துக்கள்** — the 18 consonants
- **எண்கள்** — numbers 1–10 (Tamil digit + Arabic numeral + counting pictures)
- **உயிர்மெய் (க)** — the க-family combined letters (க கா கி … கௌ) as a demo set

Each card shows a big letter/number, a cute hand-drawn pastel picture, the example word,
and an optional romanization — in an auto-playing slideshow a toddler can just watch.

## Features
- 🌸 **Tap-to-start splash** — the first tap unlocks audio (needed on mobile) and begins.
- 🎞️ **Auto-pilot slideshow** — speaks the letter, pauses ~1s, speaks the word, then moves
  on. The slide never changes mid-speech. Tap / arrows / space to control.
- 🔊 **Pronunciation** — plays **pre-recorded Tamil audio clips** (rendered with macOS's
  "Vani" `ta_IN` voice) via a normal HTML5 `<audio>` element, so it sounds the same and
  works on **every device** (Mac/Windows/iPhone/Android) and offline — no device voice
  needed. Tap the big letter or the **🔊 மீண்டும்** button to replay; 🔊 mutes (remembered).
- 🎮 **Quiz game** — "find the letter": hear a letter, tap the matching picture out of 3.
  Correct answers earn ⭐ stars (saved between visits).
- 🔀 **Shuffle** and 🔂 **repeat-one** play modes.
- 🔤 **Romanization toggle** — show/hide roman text (`a`, `k`, `ondru`…) with **ABC**.
- 🟪 **Letter strip** — every letter/number in a row that highlights the current one and
  scrolls / jumps on tap.
- ✨ **Animations** — gentle per-picture motion plus a sparkle celebration on each card.
- 🧸 **Pastel kawaii** look, fully **responsive** (phone portrait stacks; landscape/tablet
  uses a two-panel card).
- 📲 **Installable PWA** — works fully offline after the first visit.
- ♿ Honors `prefers-reduced-motion`; pauses audio when the tab is hidden.

## Files
| File | Purpose |
|------|---------|
| `index.html` | Menu tabs, mode buttons, card stage, letter strip, splash |
| `styles.css` | Pastel theme, layout, responsive rules, animations, quiz/splash |
| `app.js` | The 4 sets, slideshow + audio logic, quiz, stars, toggles, SW registration |
| `art.js` | All inline SVG drawings + the `countArt()` helper |
| `audio/*.m4a` | Pre-recorded Tamil pronunciation clips (letter + word per item) |
| `tools/gen-audio.mjs` | Regenerates the `audio/` clips (macOS only) |
| `manifest.json`, `sw.js`, `icon.svg` | PWA install + offline support |

No build step, no frameworks. The only "build" is regenerating audio after changing
letters/words (macOS, has the Vani voice):

```bash
node tools/gen-audio.mjs   # re-renders all clips into audio/
```

## Run locally
Open `index.html` in a browser, or serve it (needed for the service worker / audio):

```bash
cd tamil-uyir-app
python3 -m http.server 8000
# open http://localhost:8000
```

> **Note on caching:** the app registers a service worker, so after editing files do a
> hard refresh (Cmd/Ctrl+Shift+R) — or bump the `?v=` query in `index.html` + the
> `CACHE` name in `sw.js` — to pick up changes.

## Deploy to GitHub Pages
The repo is at `yokesharun/tamil-uyir-app`. To publish:

```bash
cd tamil-uyir-app
git add -A
git commit -m "Update app"
git push origin main
```

Then enable Pages once under **Settings → Pages → Source: main / root**.
Live at `https://yokesharun.github.io/tamil-uyir-app/`.
