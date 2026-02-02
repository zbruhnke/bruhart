import { ReactElement } from 'react';
import { readFile } from 'fs/promises';
import { join } from 'path';

// Get the base URL for images - works on Vercel and locally
export function getBaseUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return 'https://www.bruhart.com';
}

// Get production URL for fetching images in edge functions
function getProductionUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bruhart.com';
}

// Fetch image and convert to base64 data URL for OG images
export async function getOGBackgroundImage(imagePath: string): Promise<string | null> {
  try {
    const url = `${getProductionUrl()}${imagePath}`;
    const response = await fetch(url);
    if (!response.ok) return null;
    const buffer = await response.arrayBuffer();
    const base64 = Buffer.from(buffer).toString('base64');
    const contentType = response.headers.get('content-type') || 'image/jpeg';
    return `data:${contentType};base64,${base64}`;
  } catch {
    return null;
  }
}

// Font loading for OG images - local TTF files
export async function getOGFonts() {
  const fontsDir = join(process.cwd(), 'src/fonts');

  const [barlowExtraBold, barlowMedium, interBold, interRegular] = await Promise.all([
    readFile(join(fontsDir, 'Barlow-ExtraBold.ttf')),
    readFile(join(fontsDir, 'Barlow-Medium.ttf')),
    readFile(join(fontsDir, 'Inter-Bold.ttf')),
    readFile(join(fontsDir, 'Inter-Regular.ttf')),
  ]);

  return [
    {
      name: 'Barlow',
      data: barlowExtraBold,
      weight: 800 as const,
      style: 'normal' as const,
    },
    {
      name: 'Barlow',
      data: barlowMedium,
      weight: 500 as const,
      style: 'normal' as const,
    },
    {
      name: 'Inter',
      data: interBold,
      weight: 700 as const,
      style: 'normal' as const,
    },
    {
      name: 'Inter',
      data: interRegular,
      weight: 400 as const,
      style: 'normal' as const,
    },
  ];
}

/**
 * Arrow SVG - just the lines and arrow head, no text
 * This renders reliably in Satori since it has no font dependencies
 */
const ARROW_SVG = `<svg viewBox="0 0 180 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <line x1="0" y1="10" x2="18" y2="10" stroke="#ffffff" stroke-width="3"/>
  <line x1="162" y1="10" x2="172" y2="10" stroke="#ffffff" stroke-width="3"/>
  <polygon points="180,10 168,4 168,16" fill="#ffffff"/>
</svg>`;

const ARROW_SVG_BASE64 = Buffer.from(ARROW_SVG).toString('base64');
const ARROW_DATA_URL = `data:image/svg+xml;base64,${ARROW_SVG_BASE64}`;

/**
 * OG-compatible logo that matches Logo.tsx design
 * Structure: BRU-HART on top, arrow below, INDUSTRIES at bottom
 */
export function OGLogo(): ReactElement {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      {/* BRU-HART Text - top, closer to arrow */}
      <span
        style={{
          fontSize: '44px',
          fontFamily: 'Barlow, sans-serif',
          fontWeight: 800,
          color: 'white',
        }}
      >
        BRU-HART
      </span>

      {/* Arrow with chevron tails and arrowhead */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`data:image/svg+xml,${encodeURIComponent('<svg viewBox="0 0 220 16" fill="none" xmlns="http://www.w3.org/2000/svg"><polyline points="0,2 8,8 0,14" stroke="#ffffff" stroke-width="3" fill="none"/><polyline points="10,2 18,8 10,14" stroke="#ffffff" stroke-width="3" fill="none"/><line x1="20" y1="8" x2="206" y2="8" stroke="#ffffff" stroke-width="3"/><polygon points="220,8 206,2 206,14" fill="#ffffff"/></svg>')}`}
        alt=""
        width={220}
        height={16}
        style={{ marginTop: '2px' }}
      />

      {/* INDUSTRIES subtitle - bottom, closer to arrow */}
      <span
        style={{
          fontSize: '13px',
          fontFamily: 'Barlow, sans-serif',
          fontWeight: 500,
          color: 'white',
          letterSpacing: '7px',
          marginTop: '2px',
        }}
      >
        INDUSTRIES
      </span>
    </div>
  );
}

interface OGImageLayoutProps {
  title: string;
  subtitle?: string;
  badge?: string;
  backgroundImage?: string;
}

export function OGImageLayout({ title, subtitle, badge, backgroundImage }: OGImageLayoutProps): ReactElement {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        fontFamily: 'Inter',
        backgroundColor: '#362347',
        position: 'relative',
      }}
    >
      {/* Background Image */}
      {backgroundImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={backgroundImage}
          alt=""
          width={1200}
          height={630}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      )}
      {/* Blue Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(54, 35, 71, 0.85) 0%, rgba(78, 50, 104, 0.80) 50%, rgba(101, 65, 128, 0.75) 100%)',
        }}
      />
      {/* Content wrapper - above background */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px',
          height: '100%',
          width: '100%',
        }}
      >
      {/* Logo */}
      <OGLogo />

      {/* Main Content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* Badge */}
        {badge && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              padding: '8px 16px',
              borderRadius: '20px',
              alignSelf: 'flex-start',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                backgroundColor: '#f59e0b',
                borderRadius: '50%',
              }}
            />
            <span style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '18px' }}>
              {badge}
            </span>
          </div>
        )}

        {/* Title */}
        <span
          style={{
            fontSize: '56px',
            fontWeight: 700,
            color: 'white',
            lineHeight: 1.1,
            maxWidth: '900px',
          }}
        >
          {title}
        </span>

        {/* Subtitle */}
        {subtitle && (
          <span
            style={{
              fontSize: '24px',
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: 1.4,
              maxWidth: '800px',
            }}
          >
            {subtitle}
          </span>
        )}
      </div>

      {/* Bottom bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.6)' }}>
          bruhart.com
        </span>
        <div style={{ display: 'flex', gap: '40px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '28px', fontWeight: 700, color: 'white' }}>45+</span>
            <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)' }}>Years</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '28px', fontWeight: 700, color: 'white' }}>50</span>
            <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)' }}>States</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '28px', fontWeight: 700, color: 'white' }}>1M+</span>
            <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)' }}>Cycles</span>
          </div>
        </div>
      </div>
      </div>{/* End content wrapper */}
    </div>
  );
}
