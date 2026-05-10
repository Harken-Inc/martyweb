// Generate og-image.png for martinwells.com (1200x630)
// Run: node scripts/generate-martinwells-og.js
const { createCanvas, loadImage, registerFont } = require('canvas');
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
  const grad = ctx.createRadialGradient(W * 0.75, H * 0.5, 60, W * 0.75, H * 0.5, 700);
  grad.addColorStop(0, 'rgba(224, 138, 60, 0.18)');
  grad.addColorStop(1, 'rgba(224, 138, 60, 0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // Book cover on right
  const coverPath = path.join(__dirname, '../public/projects/martinwells/alpha-book-cover.jpg');
  const cover = await loadImage(coverPath);
  const coverH = 500;
  const coverW = (cover.width / cover.height) * coverH;
  const coverX = W - coverW - 80;
  const coverY = (H - coverH) / 2;
  ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
  ctx.shadowBlur = 30;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 12;
  ctx.drawImage(cover, coverX, coverY, coverW, coverH);
  ctx.shadowColor = 'transparent';
  ctx.shadowBlur = 0;

  // Left text block
  ctx.fillStyle = '#e08a3c';
  ctx.font = '600 18px "Helvetica Neue", Helvetica, Arial, sans-serif';
  ctx.fillText('MARTIN WELLS', 80, 200);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 56px Georgia, "Times New Roman", serif';
  wrapText(ctx, 'AI strategy for PE-backed companies.', 80, 260, 540, 64);

  ctx.fillStyle = 'rgba(255,255,255,0.75)';
  ctx.font = '400 22px "Helvetica Neue", Helvetica, Arial, sans-serif';
  wrapText(ctx, 'Author of AI Alpha. Three operator exits. AI Readiness Assessments.', 80, 470, 520, 32);

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
