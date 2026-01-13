const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

async function generateOGImage() {
  const width = 1200;
  const height = 630;

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Background gradient (dark theme matching the site)
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#0a0a0f');
  gradient.addColorStop(1, '#0f1419');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Add subtle grid pattern
  ctx.strokeStyle = 'rgba(0, 191, 255, 0.05)';
  ctx.lineWidth = 1;
  for (let x = 0; x < width; x += 40) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let y = 0; y < height; y += 40) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }

  // Load and draw logo
  try {
    const logoPath = path.join(__dirname, '../public/projects/cakewalk/cakewalk-white.png');
    const logo = await loadImage(logoPath);
    const logoSize = 60;
    ctx.drawImage(logo, 80, 80, logoSize, logoSize);

    // Brand name next to logo
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 32px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('Cakewalk', 155, 122);

    // AEO badge
    ctx.fillStyle = 'rgba(0, 191, 255, 0.2)';
    ctx.fillRect(290, 98, 50, 28);
    ctx.fillStyle = '#00bfff';
    ctx.font = '16px monospace';
    ctx.fillText('AEO', 300, 118);
  } catch (e) {
    // Logo not found, continue without it
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 32px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('Cakewalk AEO', 80, 120);
  }

  // Main headline
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 72px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillText('Traffic to Your Site.', 80, 280);

  // Gradient text effect for second line
  const gradientText = ctx.createLinearGradient(80, 340, 700, 380);
  gradientText.addColorStop(0, '#00bfff');
  gradientText.addColorStop(1, '#6366f1');
  ctx.fillStyle = gradientText;
  ctx.font = 'bold 72px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillText('On Autopilot.', 80, 370);

  // Subheadline
  ctx.fillStyle = '#9ca3af';
  ctx.font = '28px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillText('The AI agent that gets your content cited by', 80, 460);
  ctx.fillText('ChatGPT, Perplexity, and Gemini.', 80, 498);

  // Bottom accent line
  const accentGradient = ctx.createLinearGradient(0, height - 4, width, height - 4);
  accentGradient.addColorStop(0, '#00bfff');
  accentGradient.addColorStop(0.5, '#6366f1');
  accentGradient.addColorStop(1, '#00bfff');
  ctx.fillStyle = accentGradient;
  ctx.fillRect(0, height - 4, width, 4);

  // Save the image
  const outputPath = path.join(__dirname, '../public/projects/cakewalk/og-image.png');
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(outputPath, buffer);

  console.log(`OG image saved to: ${outputPath}`);
}

generateOGImage().catch(console.error);
