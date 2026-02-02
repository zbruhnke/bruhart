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

// Create OG image matching the hero section design
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
        // Purple gradient overlay (matching hero)
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, rgba(54, 35, 71, 0.88) 0%, rgba(78, 50, 104, 0.82) 50%, rgba(101, 65, 128, 0.78) 100%)',
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
              padding: '50px 60px',
              height: '100%',
              width: '100%',
            },
            children: [
              // Top section with logo
              {
                type: 'img',
                props: {
                  src: logoDataUrl,
                  width: 220,
                  height: 61,
                },
              },
              // Main content area
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                  },
                  children: [
                    // Badge
                    {
                      type: 'div',
                      props: {
                        style: {
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          backgroundColor: 'rgba(255, 255, 255, 0.15)',
                          padding: '10px 18px',
                          borderRadius: '24px',
                          alignSelf: 'flex-start',
                        },
                        children: [
                          // Amber dot
                          {
                            type: 'div',
                            props: {
                              style: {
                                width: '10px',
                                height: '10px',
                                backgroundColor: '#f59e0b',
                                borderRadius: '50%',
                              },
                            },
                          },
                          // Badge text
                          {
                            type: 'span',
                            props: {
                              style: {
                                color: 'white',
                                fontSize: '16px',
                                fontWeight: 500,
                              },
                              children: 'Wholesale Fencing & Gate Distributor',
                            },
                          },
                        ],
                      },
                    },
                    // Title with two colors
                    {
                      type: 'div',
                      props: {
                        style: {
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0px',
                        },
                        children: [
                          {
                            type: 'span',
                            props: {
                              style: {
                                fontSize: '52px',
                                fontWeight: 700,
                                color: 'white',
                                lineHeight: 1.15,
                              },
                              children: 'High-Security Gate',
                            },
                          },
                          {
                            type: 'span',
                            props: {
                              style: {
                                fontSize: '52px',
                                fontWeight: 700,
                                color: 'white',
                                lineHeight: 1.15,
                              },
                              children: 'Systems for ',
                            },
                          },
                          {
                            type: 'span',
                            props: {
                              style: {
                                fontSize: '52px',
                                fontWeight: 700,
                                color: '#f59e0b',
                                lineHeight: 1.15,
                              },
                              children: 'Critical Infrastructure',
                            },
                          },
                        ],
                      },
                    },
                    // Subtitle
                    {
                      type: 'span',
                      props: {
                        style: {
                          fontSize: '20px',
                          color: 'rgba(255, 255, 255, 0.85)',
                          lineHeight: 1.5,
                          maxWidth: '700px',
                        },
                        children: 'Industry-leading crash-rated gates, barrier systems, and operators protecting data centers, airports, utilities, and government facilities.',
                      },
                    },
                  ],
                },
              },
              // Bottom stats bar
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                  },
                  children: [
                    // Stats
                    {
                      type: 'div',
                      props: {
                        style: {
                          display: 'flex',
                          gap: '50px',
                        },
                        children: [
                          {
                            type: 'div',
                            props: {
                              style: { display: 'flex', flexDirection: 'column' },
                              children: [
                                { type: 'span', props: { style: { fontSize: '32px', fontWeight: 700, color: 'white' }, children: '45+' } },
                                { type: 'span', props: { style: { fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }, children: 'Years Experience' } },
                              ],
                            },
                          },
                          {
                            type: 'div',
                            props: {
                              style: { display: 'flex', flexDirection: 'column' },
                              children: [
                                { type: 'span', props: { style: { fontSize: '32px', fontWeight: 700, color: 'white' }, children: '50' } },
                                { type: 'span', props: { style: { fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }, children: 'States Served' } },
                              ],
                            },
                          },
                          {
                            type: 'div',
                            props: {
                              style: { display: 'flex', flexDirection: 'column' },
                              children: [
                                { type: 'span', props: { style: { fontSize: '32px', fontWeight: 700, color: 'white' }, children: '1M+' } },
                                { type: 'span', props: { style: { fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }, children: 'Cycles Tested' } },
                              ],
                            },
                          },
                        ],
                      },
                    },
                    // URL
                    {
                      type: 'span',
                      props: {
                        style: {
                          fontSize: '16px',
                          color: 'rgba(255, 255, 255, 0.6)',
                        },
                        children: 'bruhart.com',
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
