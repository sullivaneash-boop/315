const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const BASE = path.join(process.cwd(), "public/assets/brand");
const OUT = path.join(BASE, "clean");

function ensureDir(d) { fs.mkdirSync(d, { recursive: true }); }

async function cleanDivider(src, dest) {
  const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const px = Buffer.from(data);
  const { width: w, height: h, channels: ch } = info;
  for (let i = 0; i < w * h; i++) {
    const o = i * ch;
    const r = px[o], g = px[o+1], b = px[o+2];
    const bright = 0.299*r + 0.587*g + 0.114*b;
    if (bright < 35) { px[o+3] = 0; }
    else if (bright < 55) { px[o+3] = Math.round((bright - 35) * (255/20)); }
  }
  await sharp(px, { raw: { width: w, height: h, channels: ch } }).png({ compressionLevel: 9 }).toFile(dest);
}

async function cleanBooking(src, dest) {
  const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const px = Buffer.from(data);
  const { width: w, height: h, channels: ch } = info;
  for (let i = 0; i < w * h; i++) {
    const o = i * ch;
    const r = px[o], g = px[o+1], b = px[o+2];
    const bright = 0.299*r + 0.587*g + 0.114*b;
    // Only remove pure-black border pixels; keep the dark card interior
    if (r < 18 && g < 18 && b < 18) { px[o+3] = 0; }
    else if (bright < 25) { px[o+3] = Math.round((bright - 18) * (255/7)); }
  }
  await sharp(px, { raw: { width: w, height: h, channels: ch } }).png({ compressionLevel: 9 }).toFile(dest);
}

async function main() {
  ensureDir(path.join(OUT, "dividers"));
  ensureDir(path.join(OUT, "marks"));
  ensureDir(path.join(OUT, "booking"));

  console.log("=== Dividers (near-black -> transparent) ===");
  const divSrc = path.join(BASE, "dividers");
  for (const f of fs.readdirSync(divSrc).filter(x => x.endsWith(".png") && !x.includes("clean"))) {
    const name = f.replace(".png", "-clean.png");
    const dest = path.join(OUT, "dividers", name);
    await cleanDivider(path.join(divSrc, f), dest);
    const sz = (fs.statSync(dest).size / 1024).toFixed(1);
    console.log(`  ✓ ${name} (${sz}KB)`);
  }

  console.log("\n=== Marks (already have alpha, copying) ===");
  const marksSrc = path.join(BASE, "marks");
  for (const f of fs.readdirSync(marksSrc).filter(x => x.endsWith(".png"))) {
    const name = f.replace(".png", "-clean.png");
    const dest = path.join(OUT, "marks", name);
    fs.copyFileSync(path.join(marksSrc, f), dest);
    console.log(`  ✓ ${name}`);
  }

  console.log("\n=== Booking graphic (black border -> transparent) ===");
  const bookSrc = path.join(BASE, "booking-graphic.png");
  if (fs.existsSync(bookSrc)) {
    const dest = path.join(OUT, "booking", "booking-graphic-clean.png");
    await cleanBooking(bookSrc, dest);
    const sz = (fs.statSync(dest).size / 1024).toFixed(1);
    console.log(`  ✓ booking-graphic-clean.png (${sz}KB)`);
  }

  console.log("\nDone. All clean assets in public/assets/brand/clean/");
}

main().catch(e => { console.error(e); process.exit(1); });
