# உயிர் எழுத்துக்கள் — Tamil Vowels for Kids

A simple, colorful, interactive web app that teaches the 12 Tamil vowels
(uyir ezhuthukkal) to young children. Each letter is shown big and bright with a
hand-drawn picture and an example word.

- **Auto-pilot mode**: starts automatically and cycles through all 12 letters on a loop.
- **Tap / arrows / spacebar**: tap the card or use ⟨ ⟩ to move, ⏸/▶ to pause/play.
- **No audio, no external assets** — pure HTML/CSS/JS, works offline, loads instantly.

## Run locally
Just open `index.html` in a browser, or serve it:

```bash
cd tamil-uyir-app
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy to GitHub Pages

```bash
cd tamil-uyir-app
git init
git add .
git commit -m "Tamil vowels learning app"

# create the repo on GitHub (requires the gh CLI, logged in)
gh repo create tamil-uyir-app --public --source=. --remote=origin --push

# enable GitHub Pages on the main branch (root)
gh api -X POST repos/:owner/tamil-uyir-app/pages \
  -f "source[branch]=main" -f "source[path]=/" 2>/dev/null || \
  echo "Enable Pages manually: Settings -> Pages -> Branch: main / root"
```

Your site will be live at: `https://<your-username>.github.io/tamil-uyir-app/`

(If you don't use the `gh` CLI: create the repo on github.com, push these files, then go
to **Settings → Pages**, set Source to the `main` branch and `/ (root)`, and save.)
