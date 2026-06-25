#!/usr/bin/env node
// Pre-render Tamil audio clips with the macOS "Vani" (ta_IN) voice.
// Run on macOS:  node tools/gen-audio.mjs
// Produces audio/<set>-<i>-l.m4a (letter) and -w.m4a (word) + audio/silent.m4a.
// Keep these lists in sync with SETS in app.js.

import { execFileSync } from "node:child_process";
import { mkdirSync, rmSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "audio");
const TMP = join(OUT, "_tmp.aiff");
const VOICE = "Vani";

const SETS = {
  uyir: [
    ["அ", "அம்மா"], ["ஆ", "ஆடு"], ["இ", "இலை"], ["ஈ", "ஈ"],
    ["உ", "உரல்"], ["ஊ", "ஊஞ்சல்"], ["எ", "எலி"], ["ஏ", "ஏணி"],
    ["ஐ", "ஐஸ்"], ["ஒ", "ஒட்டகம்"], ["ஓ", "ஓடம்"], ["ஔ", "ஔவியம்"],
  ],
  mey: [
    ["க்", "காகம்"], ["ங்", "தங்கம்"], ["ச்", "சங்கு"], ["ஞ்", "ஞாயிறு"],
    ["ட்", "பட்டம்"], ["ண்", "மண்"], ["த்", "தேங்காய்"], ["ந்", "நண்டு"],
    ["ப்", "பந்து"], ["ம்", "மரம்"], ["ய்", "யானை"], ["ர்", "ரயில்"],
    ["ல்", "லட்டு"], ["வ்", "வண்டி"], ["ழ்", "மழை"], ["ள்", "வாள்"],
    ["ற்", "ஆறு"], ["ன்", "மீன்"],
  ],
  // numbers: speak the word for both clips (digit glyph alone is ambiguous)
  numbers: [
    ["ஒன்று", "ஒன்று"], ["இரண்டு", "இரண்டு"], ["மூன்று", "மூன்று"], ["நான்கு", "நான்கு"],
    ["ஐந்து", "ஐந்து"], ["ஆறு", "ஆறு"], ["ஏழு", "ஏழு"], ["எட்டு", "எட்டு"],
    ["ஒன்பது", "ஒன்பது"], ["பத்து", "பத்து"],
  ],
  uyirmey_ka: [
    ["க", "கதவு"], ["கா", "காகம்"], ["கி", "கிளி"], ["கீ", "கீரை"],
    ["கு", "குதிரை"], ["கூ", "கூடை"], ["கெ", "கெண்டை"], ["கே", "கேடயம்"],
    ["கை", "கை"], ["கொ", "கொடி"], ["கோ", "கோழி"], ["கௌ", "கௌவை"],
  ],
};

function clip(text, outPath) {
  execFileSync("say", ["-v", VOICE, "-o", TMP, text]);
  execFileSync("afconvert", ["-f", "m4af", "-d", "aac", TMP, outPath]);
}

if (existsSync(OUT)) rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

let n = 0;
for (const [set, items] of Object.entries(SETS)) {
  items.forEach(([letter, word], i) => {
    clip(letter, join(OUT, `${set}-${i}-l.m4a`));
    clip(word, join(OUT, `${set}-${i}-w.m4a`));
    n += 2;
  });
}

// ---- rhymes ----
const RHYME_TEXTS = {
  aathichoodi: [
    "அறம் செய விரும்பு", "ஆறுவது சினம்", "இயல்வது கரவேல்", "ஈவது விலக்கேல்",
    "உடையது விளம்பேல்", "ஊக்கமது கைவிடேல்", "எண் எழுத்து இகழேல்",
    "ஏற்பது இகழ்ச்சி", "ஐயமிட்டு உண்", "ஒப்புரவு ஒழுகு",
  ],
  amma_vaa: [
    "அம்மா இங்கே வா வா", "அழகான மயிலே வா", "ஆடி ஆடி வா வா",
    "அன்பான குழந்தையே", "நிலா நிலா ஓடி வா", "நில்லாமல் ஓடி வா",
    "மல்லிகைப் பூ எடுத்து வா", "மாலை கட்டி போடு வா",
  ],
};
const STORY_TEXTS = {
  kakka_vadai: [
    "ஒரு காக்கா ஒரு வடை எடுத்தது", "அது ஒரு மரத்தில் அமர்ந்தது",
    "ஒரு நரி வந்தது", "நரி சொன்னது நீ அழகா பாடு",
    "காக்கா வாயைத் திறந்தது", "வடை கீழே விழுந்தது",
    "நரி வடையை எடுத்து ஓடியது", "புகழ்ச்சியை நம்பாதே",
  ],
  lion_forest: [
    "ஒரு பெரிய சிங்கம் தூங்கியது", "ஒரு சிறிய எலி ஓடியது",
    "சிங்கம் எலியைப் பிடித்தது", "எலி சொன்னது என்னை விடு",
    "சிங்கம் எலியை விட்டது", "ஒரு நாள் சிங்கம் வலையில் மாட்டியது",
    "எலி வலையைக் கடித்தது", "சிறியவரும் உதவுவார்",
  ],
};

for (const [key, lines] of Object.entries(RHYME_TEXTS)) {
  lines.forEach((text, i) => {
    clip(text, join(OUT, `rhyme-${key}-${i}.m4a`));
    n++;
  });
}
for (const [key, lines] of Object.entries(STORY_TEXTS)) {
  lines.forEach((text, i) => {
    clip(text, join(OUT, `story-${key}-${i}.m4a`));
    n++;
  });
}

// tiny silent clip for the iOS unlock tap
execFileSync("say", ["-v", VOICE, "-o", TMP, "[[slnc 200]]"]);
execFileSync("afconvert", ["-f", "m4af", "-d", "aac", TMP, join(OUT, "silent.m4a")]);

rmSync(TMP, { force: true });
console.log(`Generated ${n + 1} clips in ${OUT}`);
