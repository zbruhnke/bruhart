/**
 * Generate a standalone SVG logo with text converted to paths
 * This ensures the logo looks correct without requiring fonts to be installed
 *
 * Usage: node scripts/generate-logo-svg.js
 */

const opentype = require('opentype.js');
const fs = require('fs');
const path = require('path');
const https = require('https');

// Font URLs - using TTF format (opentype.js doesn't support woff2)
// These are direct download links for Barlow fonts
const BARLOW_800_URL = 'https://github.com/jpt/barlow/raw/main/fonts/ttf/Barlow-ExtraBold.ttf';
const BARLOW_500_URL = 'https://github.com/jpt/barlow/raw/main/fonts/ttf/Barlow-Medium.ttf';

// Logo configuration
const CONFIG = {
  viewBox: '0 0 180 50',
  bruhart: {
    text: 'BRU-HART',
    x: 90,
    y: 21,
    fontSize: 20,
    fontWeight: 800,
  },
  industries: {
    text: 'INDUSTRIES',
    x: 90,
    y: 40,
    fontSize: 9,
    fontWeight: 500,
    letterSpacing: 5,
  },
  arrow: {
    chevron1: '4,22 10,28 4,34',
    chevron2: '12,22 18,28 12,34',
    lineStart: 20,
    lineEnd: 168,
    lineY: 28,
    arrowHead: '180,28 168,22 168,34',
    strokeWidth: 2,
  },
};

// Download font file (handles redirects)
function downloadFont(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : require('http');
    protocol.get(url, (response) => {
      // Handle redirects
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return downloadFont(response.headers.location).then(resolve).catch(reject);
      }
      const chunks = [];
      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', () => resolve(Buffer.concat(chunks)));
      response.on('error', reject);
    }).on('error', reject);
  });
}

// Convert text to SVG path
function textToPath(font, text, x, y, fontSize, letterSpacing = 0) {
  const scale = fontSize / font.unitsPerEm;

  // Calculate total width for centering
  let totalWidth = 0;
  for (let i = 0; i < text.length; i++) {
    const glyph = font.charToGlyph(text[i]);
    totalWidth += glyph.advanceWidth * scale;
    if (i < text.length - 1) {
      totalWidth += letterSpacing;
    }
  }

  // Start position (centered)
  let currentX = x - totalWidth / 2;
  const paths = [];

  for (let i = 0; i < text.length; i++) {
    const glyph = font.charToGlyph(text[i]);
    const glyphPath = glyph.getPath(currentX, y, fontSize);
    paths.push(glyphPath.toSVG());
    currentX += glyph.advanceWidth * scale + letterSpacing;
  }

  return paths.join('');
}

// Generate SVG content
function generateSVG(bruhartPath, industriesPath, fillColor = '#1a1a1a') {
  return `<svg viewBox="${CONFIG.viewBox}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- BRU-HART text as paths -->
  <g fill="${fillColor}">
    ${bruhartPath}
  </g>

  <!-- First chevron tail -->
  <polyline
    points="${CONFIG.arrow.chevron1}"
    stroke="${fillColor}"
    stroke-width="${CONFIG.arrow.strokeWidth}"
    fill="none"
  />

  <!-- Second chevron tail -->
  <polyline
    points="${CONFIG.arrow.chevron2}"
    stroke="${fillColor}"
    stroke-width="${CONFIG.arrow.strokeWidth}"
    fill="none"
  />

  <!-- Arrow line -->
  <line
    x1="${CONFIG.arrow.lineStart}"
    y1="${CONFIG.arrow.lineY}"
    x2="${CONFIG.arrow.lineEnd}"
    y2="${CONFIG.arrow.lineY}"
    stroke="${fillColor}"
    stroke-width="${CONFIG.arrow.strokeWidth}"
  />

  <!-- Arrow head -->
  <polygon
    points="${CONFIG.arrow.arrowHead}"
    fill="${fillColor}"
  />

  <!-- INDUSTRIES text as paths -->
  <g fill="${fillColor}">
    ${industriesPath}
  </g>
</svg>`;
}

async function main() {
  console.log('Downloading fonts...');

  try {
    // Download fonts
    const [barlow800Buffer, barlow500Buffer] = await Promise.all([
      downloadFont(BARLOW_800_URL),
      downloadFont(BARLOW_500_URL),
    ]);

    console.log('Parsing fonts...');

    // Parse fonts
    const barlow800 = opentype.parse(barlow800Buffer.buffer);
    const barlow500 = opentype.parse(barlow500Buffer.buffer);

    console.log('Converting text to paths...');

    // Convert text to paths
    const bruhartPath = textToPath(
      barlow800,
      CONFIG.bruhart.text,
      CONFIG.bruhart.x,
      CONFIG.bruhart.y,
      CONFIG.bruhart.fontSize
    );

    const industriesPath = textToPath(
      barlow500,
      CONFIG.industries.text,
      CONFIG.industries.x,
      CONFIG.industries.y,
      CONFIG.industries.fontSize,
      CONFIG.industries.letterSpacing
    );

    // Generate SVG files
    const darkSVG = generateSVG(bruhartPath, industriesPath, '#1a1a1a');
    const whiteSVG = generateSVG(bruhartPath, industriesPath, '#ffffff');
    const primarySVG = generateSVG(bruhartPath, industriesPath, '#1e3a5f');

    // Output directory
    const outputDir = path.join(__dirname, '..', 'public', 'images');

    // Write files
    fs.writeFileSync(path.join(outputDir, 'bruhart-logo-dark.svg'), darkSVG);
    fs.writeFileSync(path.join(outputDir, 'bruhart-logo-white.svg'), whiteSVG);
    fs.writeFileSync(path.join(outputDir, 'bruhart-logo-primary.svg'), primarySVG);

    console.log('Generated logo files:');
    console.log('  - public/images/bruhart-logo-dark.svg');
    console.log('  - public/images/bruhart-logo-white.svg');
    console.log('  - public/images/bruhart-logo-primary.svg');
    console.log('Done!');

  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();
