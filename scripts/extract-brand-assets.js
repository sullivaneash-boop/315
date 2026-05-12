const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const SRC = path.join(__dirname, "..", "public/assets/brand/doodle-sheet.png");
const OUT = path.join(__dirname, "..", "public/assets/brand/marks");

// Calibrated from pixel density analysis of the 1024x1024 sheet.
// Content bounds: x=52-971, y=66-783.
// Format: [name, left, top, width, height, type]
const regions = [
  // Row 1 (y ~60-200): Stars + crack
  ["star-01",       55,  50, 165, 170, "black"],
  ["star-02",      275,  50, 165, 170, "black"],
  ["star-red-01",  465,  50, 155, 170, "red"],
  ["crack-01",     720,  50, 140, 170, "black"],

  // Row 2 (y ~220-400): Stars + cracks
  ["star-03",       55, 220, 155, 185, "red"],
  ["star-04",      255, 220, 165, 185, "black"],
  ["star-05",      455, 215, 155, 185, "black"],
  ["crack-02",     680, 210, 290, 200, "black"],

  // Row 3 (y ~420-520): Arrows
  ["arrow-01",      45, 420, 175, 110, "black"],
  ["arrow-02",     245, 420, 175, 110, "red"],
  ["arrow-03",     425, 420, 250, 110, "black"],
  ["arrow-red-01", 700, 420, 175, 110, "red"],

  // Row 4 (y ~560-680): 315 tags + corners + tallies
  ["tag-315-01",    55, 565, 155, 120, "black"],
  ["tag-315-02",   265, 565, 155, 120, "black"],
  ["tag-315-03",   465, 565, 185, 120, "black"],
  ["corner-01",    685, 560, 65,  120, "black"],
  ["corner-red-01",830, 560, 65,  120, "red"],

  // Row 5 (y ~690-790): Tally marks
  ["tally-01",      75, 695, 115, 100, "black"],
  ["tally-red-01", 275, 695, 120, 100, "red"],
  ["tally-02",     485, 695, 120, 100, "black"],

  // Row 5 extended: Tape + teddy (at bottom)
  ["teddy-01",     835, 685, 140, 120, "black"],
];

async function extractMark(name, left, top, width, height, type) {
  try {
    const { data, info } = await sharp(SRC)
      .extract({ left, top, width, height })
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    const pixels = Buffer.from(data);
    const { width: w, height: h, channels } = info;

    for (let i = 0; i < w * h; i++) {
      const off = i * channels;
      const r = pixels[off], g = pixels[off + 1], b = pixels[off + 2];
      const brightness = 0.299 * r + 0.587 * g + 0.114 * b;

      if (type === "red") {
        const isRed = r > 90 && r > g * 1.5 && r > b * 1.5;
        const isDark = brightness < 130;
        if (!isDark && !isRed) {
          pixels[off + 3] = 0;
        } else if (isRed) {
          pixels[off + 3] = Math.min(255, 180 + Math.round((255 - brightness) * 0.3));
        } else {
          pixels[off + 3] = Math.min(255, Math.round((160 - Math.min(brightness, 160)) * (255 / 160)));
        }
      } else {
        if (brightness > 155) {
          pixels[off + 3] = 0;
        } else if (brightness > 90) {
          pixels[off + 3] = Math.round((155 - brightness) * (255 / 65));
        } else {
          pixels[off + 3] = 255;
        }
      }
    }

    const outPath = path.join(OUT, `${name}.png`);
    await sharp(pixels, { raw: { width: w, height: h, channels } })
      .png({ compressionLevel: 9 })
      .toFile(outPath);

    const stat = fs.statSync(outPath);
    console.log(`  ✓ ${name}.png  (${w}x${h}, ${(stat.size / 1024).toFixed(1)}KB)`);
  } catch (err) {
    console.error(`  ✗ ${name}: ${err.message}`);
  }
}

async function main() {
  if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });
  console.log("Extracting marks from doodle sheet...\n");
  for (const args of regions) await extractMark(...args);
  console.log("\nDone.");
}

main();
