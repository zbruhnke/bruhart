import satori from 'satori';
import sharp from 'sharp';
import { readFile, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');

// Load fonts from /tmp (pre-downloaded)
async function getFonts() {
  console.log('Loading fonts...');

  const barlowExtraBold = await readFile('/tmp/fonts/Barlow-ExtraBold.ttf');
  const barlowMedium = await readFile('/tmp/fonts/Barlow-Medium.ttf');

  return [
    { name: 'Barlow', data: barlowExtraBold, weight: 800, style: 'normal' },
    { name: 'Barlow', data: barlowMedium, weight: 500, style: 'normal' },
    // Use Barlow for body text too since Inter is problematic
    { name: 'Inter', data: barlowMedium, weight: 700, style: 'normal' },
    { name: 'Inter', data: barlowMedium, weight: 400, style: 'normal' },
  ];
}

// Load and encode background image
async function getBackgroundImageDataUrl() {
  const imagePath = join(rootDir, 'public', 'images', 'bruhart_work', 'IMG_1287.jpeg');
  const imageBuffer = await readFile(imagePath);
  return `data:image/jpeg;base64,${imageBuffer.toString('base64')}`;
}

// Load logo SVG
async function getLogoDataUrl() {
  const logoPath = join(rootDir, 'public', 'images', 'bruhart-logo-white.svg');
  const logoSvg = await readFile(logoPath, 'utf-8');
  return `data:image/svg+xml,${encodeURIComponent(logoSvg)}`;
}

// The OG image component as a plain object (satori uses this format)
async function createOgImage() {
  const backgroundImage = await getBackgroundImageDataUrl();
  const logoDataUrl = await getLogoDataUrl();

  return {
  type: 'div',
  props: {
    style: {
      height: '100%',
      width: '100%',
      display: 'flex',
      fontFamily: 'Inter',
      backgroundColor: '#362347',
      position: 'relative',
    },
    children: [
      // Background image
      {
        type: 'img',
        props: {
          src: backgroundImage,
          width: 1200,
          height: 630,
          style: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          },
        },
      },
      // Purple gradient overlay
      {
        type: 'div',
        props: {
          style: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, rgba(54, 35, 71, 0.85) 0%, rgba(78, 50, 104, 0.80) 50%, rgba(101, 65, 128, 0.75) 100%)',
          },
        },
      },
      // Content wrapper
      {
        type: 'div',
        props: {
          style: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '60px',
            height: '100%',
            width: '100%',
          },
          children: [
            // Logo - using the actual SVG logo
            {
              type: 'img',
              props: {
                src: logoDataUrl,
                width: 280,
                height: 78,
              },
            },
            // Main content
            {
              type: 'div',
              props: {
                style: {
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                },
                children: [
                  // Title
                  {
                    type: 'span',
                    props: {
                      style: {
                        fontSize: '56px',
                        fontWeight: 700,
                        color: 'white',
                        lineHeight: 1.1,
                        maxWidth: '900px',
                      },
                      children: 'High-Security Gate Systems & Critical Infrastructure Protection',
                    },
                  },
                  // Subtitle
                  {
                    type: 'span',
                    props: {
                      style: {
                        fontSize: '24px',
                        color: 'rgba(255, 255, 255, 0.8)',
                        lineHeight: 1.4,
                        maxWidth: '800px',
                      },
                      children: 'Industry-leading crash-rated gates, barrier systems, and operators.',
                    },
                  },
                ],
              },
            },
            // Bottom bar
            {
              type: 'div',
              props: {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                },
                children: [
                  // URL
                  {
                    type: 'span',
                    props: {
                      style: {
                        fontSize: '18px',
                        color: 'rgba(255, 255, 255, 0.6)',
                      },
                      children: 'bruhart.com',
                    },
                  },
                  // Stats
                  {
                    type: 'div',
                    props: {
                      style: {
                        display: 'flex',
                        gap: '40px',
                      },
                      children: [
                        {
                          type: 'div',
                          props: {
                            style: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
                            children: [
                              { type: 'span', props: { style: { fontSize: '28px', fontWeight: 700, color: 'white' }, children: '45+' } },
                              { type: 'span', props: { style: { fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)' }, children: 'Years' } },
                            ],
                          },
                        },
                        {
                          type: 'div',
                          props: {
                            style: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
                            children: [
                              { type: 'span', props: { style: { fontSize: '28px', fontWeight: 700, color: 'white' }, children: '50' } },
                              { type: 'span', props: { style: { fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)' }, children: 'States' } },
                            ],
                          },
                        },
                        {
                          type: 'div',
                          props: {
                            style: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
                            children: [
                              { type: 'span', props: { style: { fontSize: '28px', fontWeight: 700, color: 'white' }, children: '1M+' } },
                              { type: 'span', props: { style: { fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)' }, children: 'Cycles' } },
                            ],
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  },
};
}

async function generateOGImage() {
  console.log('Generating OG image...');

  const fonts = await getFonts();
  const ogImage = await createOgImage();

  // Generate SVG with satori
  const svg = await satori(ogImage, {
    width: 1200,
    height: 630,
    fonts,
  });

  // Convert SVG to JPEG with sharp (smaller file size for photos)
  const jpeg = await sharp(Buffer.from(svg))
    .jpeg({ quality: 85 })
    .toBuffer();

  // Save to public folder
  const outputPath = join(rootDir, 'public', 'og-image.jpg');
  await writeFile(outputPath, jpeg);

  console.log(`OG image saved to ${outputPath}`);
}

generateOGImage().catch(console.error);
