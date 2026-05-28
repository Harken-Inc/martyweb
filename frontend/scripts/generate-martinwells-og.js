// Generate og-image.png for martinwells.com (1200x630)
// Run: node scripts/generate-martinwells-og.js
const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

async function main() {
  const W = 1200;
  const H = 630;
  const canvas = createCanvas(W, H);
  const ctx = canvas.getContext('2d');

  // Navy background
  ctx.fillStyle = '#0b1e3a';
  ctx.fillRect(0, 0, W, H);

  // Subtle radial highlight
  const grad = ctx.createRadialGradient(W * 0.85, H * 0.3, 60, W * 0.85, H * 0.3, 700);
  grad.addColorStop(0, 'rgba(224, 138, 60, 0.18)');
  grad.addColorStop(1, 'rgba(224, 138, 60, 0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // Eyebrow
  ctx.fillStyle = '#e08a3c';
  ctx.font = '600 22px "Helvetica Neue", Helvetica, Arial, sans-serif';
  ctx.fillText('MARTIN WELLS', 80, 200);

  // Headline
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 72px Georgia, "Times New Roman", serif';
  wrapText(ctx, 'Senior technical leadership, without the full-time hire.', 80, 290, W - 160, 82);

  // Subline
  ctx.fillStyle = 'rgba(255,255,255,0.75)';
  ctx.font = '400 26px "Helvetica Neue", Helvetica, Arial, sans-serif';
  ctx.fillText('Fractional CTO & AI advisor. Three operator exits. 25 years building.', 80, 555);

  // Save
  const outPath = path.join(__dirname, '../public/projects/martinwells/og-image.png');
  fs.writeFileSync(outPath, canvas.toBuffer('image/png'));
  console.log('Wrote', outPath, fs.statSync(outPath).size, 'bytes');
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(' ');
  let line = '';
  for (const w of words) {
    const test = line + w + ' ';
    if (ctx.measureText(test).width > maxWidth && line) {
      ctx.fillText(line.trim(), x, y);
      line = w + ' ';
      y += lineHeight;
    } else {
      line = test;
    }
  }
  ctx.fillText(line.trim(), x, y);
}

main().catch(e => { console.error(e); process.exit(1); });
