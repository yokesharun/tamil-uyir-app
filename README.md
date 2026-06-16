# தமிழ் — Tamil Letters & Numbers for Kids 🌸

A simple, colorful, **kawaii** web app that helps young children learn Tamil:

- **உயிர் எழுத்துக்கள்** — the 12 vowels
- **மெய் எழுத்துக்கள்** — the 18 consonants
- **எண்கள்** — numbers 1–10 (Tamil digit + Arabic numeral + counting pictures)

Each card shows a big letter/number, a cute hand-drawn pastel picture, the example word,
and an optional romanization — all in an auto-playing slideshow a toddler can just watch.

## Features
- 🎞️ **Auto-pilot slideshow** — advances every 5s and loops; tap / arrows / space to control.
- 🔊 **Pronunciation** — speaks each letter & word via the browser's speech engine
  (Web Speech API, `ta-IN`). Tap the big letter to replay. 🔊 button mutes (remembered).
  *Note: silent on devices that have no Tamil voice installed.*
- 🔤 **Romanization toggle** — show/hide roman text (`a`, `k`, `ondru`…) with the **ABC** button.
- 🟪 **Letter strip** — every letter/number in the set, shown in a row that highlights the
  current one and scrolls/jumps on tap.
- ✨ **Animations** — gentle per-picture motion plus a sparkle celebration on each card.
- 🧸 **Pastel kawaii** look, fully **responsive** (phone portrait stacks, landscape/tablet
  uses a two-panel card).
- 📲 **Installable PWA** — works fully offline after the first visit.
- ♿ Honors `prefers-reduced-motion`.

## Files
| File | Purpose |
|------|---------|
| `index.html` | Markup: menu tabs, card stage, letter strip, controls |
| `styles.css` | Pastel theme, layout, responsive rules, animations |
| `app.js` | Data (the 3 sets), slideshow logic, audio, toggles, SW registration |
| `art.js` | All inline SVG drawings + the `countArt()` helper |
| `manifest.json`, `sw.js`, `icon.svg` | PWA install + offline support |

No build step, no frameworks, no external assets.

## Run locally
Open `index.html` in a browser, or serve it (needed for the service worker / audio):

```bash
cd tamil-uyir-app
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy to GitHub Pages
```bash
cd tamil-uyir-app
git init && git add . && git commit -m "Tamil letters & numbers app for kids"

# create + push the repo (requires the gh CLI, logged in)
gh repo create tamil-kids --public --source=. --remote=origin --push

# enable Pages on the main branch (root)
gh api -X POST repos/:owner/tamil-kids/pages \
  -f "source[branch]=main" -f "source[path]=/" 2>/dev/null || \
  echo "Enable Pages manually: Settings → Pages → Branch: main / root"
```

Live at `https://<your-username>.github.io/tamil-kids/`.

(No `gh`? Create the repo on github.com, push these files, then **Settings → Pages →
Source: main / root**.)
