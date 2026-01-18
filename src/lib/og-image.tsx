import { ReactElement } from 'react';

// Font loading for OG images - Inter Black for bold text
export async function getOGFonts() {
  const interBlack = await fetch(
    'https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuBWYAZ9hjp-Ek-_0ew.woff'
  ).then((res) => res.arrayBuffer());

  const inter = await fetch(
    'https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZ9hjp-Ek-_0ew.woff'
  ).then((res) => res.arrayBuffer());

  return [
    {
      name: 'Inter',
      data: interBlack,
      weight: 900 as const,
      style: 'normal' as const,
    },
    {
      name: 'Inter',
      data: inter,
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
 * Uses Satori-native text rendering + SVG for the arrow
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
      {/* Arrow with text overlay */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        {/* Left line */}
        <div
          style={{
            width: '36px',
            height: '4px',
            backgroundColor: 'white',
          }}
        />

        {/* Text */}
        <span
          style={{
            fontSize: '44px',
            fontFamily: 'Inter',
            fontWeight: 900,
            color: 'white',
            letterSpacing: '3px',
            margin: '0 12px',
          }}
        >
          BRU-HART
        </span>

        {/* Right line + arrow head using SVG */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`data:image/svg+xml,${encodeURIComponent('<svg viewBox="0 0 50 20" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="10" x2="35" y2="10" stroke="#ffffff" stroke-width="4"/><polygon points="50,10 36,3 36,17" fill="#ffffff"/></svg>')}`}
          alt=""
          width={50}
          height={20}
        />
      </div>

      {/* INDUSTRIES subtitle */}
      <span
        style={{
          fontSize: '14px',
          fontFamily: 'Inter',
          fontWeight: 400,
          color: 'white',
          letterSpacing: '8px',
          marginTop: '4px',
          marginLeft: '40px',
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
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '60px',
        fontFamily: 'Inter',
        backgroundImage: backgroundImage
          ? `linear-gradient(135deg, rgba(15, 39, 68, 0.85) 0%, rgba(30, 58, 95, 0.8) 50%, rgba(45, 74, 111, 0.75) 100%), url(${backgroundImage})`
          : 'linear-gradient(135deg, #0f2744 0%, #1e3a5f 50%, #2d4a6f 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
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
            <span style={{ fontSize: '28px', fontWeight: 700, color: 'white' }}>40+</span>
            <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)' }}>Years</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '28px', fontWeight: 700, color: 'white' }}>500+</span>
            <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)' }}>Projects</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '28px', fontWeight: 700, color: 'white' }}>100%</span>
            <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)' }}>Certified</span>
          </div>
        </div>
      </div>
    </div>
  );
}
