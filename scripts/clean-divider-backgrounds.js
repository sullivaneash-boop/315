const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = path.join(process.cwd(), "public/assets/brand/dividers");
const outputDir = path.join(process.cwd(), "public/assets/brand/dividers/clean");

fs.mkdirSync(outputDir, { recursive: true });

const files = fs
  .readdirSync(inputDir)
  .filter((f) => f.endsWith(".png") && !f.includes("-clean"));

async function cleanDivider(file) {
  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(outputDir, file.replace(".png", "-clean.png"));

  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixels = Buffer.from(data);
  const { width, height, channels } = info;

  for (let i = 0; i < width * height; i++) {
    const off = i * channels;
    const r = pixels[off];
    const g = pixels[off + 1];
    const b = pixels[off + 2];
    const brightness = 0.299 * r + 0.587 * g + 0.114 * b;

    if (brightness < 28) {
      pixels[off + 3] = 0;
    } else if (brightness < 50) {
      pixels[off + 3] = Math.round((brightness - 28) * (255 / 22));
    }
  }

  await sharp(pixels, {
    raw: { width, height, channels },
  })
    .png({ compressionLevel: 9 })
    .toFile(outputPath);

  const stat = fs.statSync(outputPath);
  console.log(`  ✓ ${file} -> ${path.basename(outputPath)} (${(stat.size / 1024).toFixed(1)}KB)`);
}

async function main() {
  console.log("Cleaning divider backgrounds...\n");
  for (const f of files) await cleanDivider(f);
  console.log("\nDone.");
}

main();
