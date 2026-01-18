import { ImageResponse } from 'next/og';
import { OGLogo, getOGFonts, getBaseUrl } from '@/lib/og-image';

export const runtime = 'edge';

export const alt = 'Bru-Hart Industries - High-Security Gate Systems';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  const fonts = await getOGFonts();

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px',
          fontFamily: 'Inter',
          backgroundImage: `linear-gradient(135deg, rgba(15, 39, 68, 0.85) 0%, rgba(30, 58, 95, 0.8) 50%, rgba(45, 74, 111, 0.75) 100%), url(${getBaseUrl()}/images/bruhart_work/IMG_4252.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Logo */}
        <OGLogo />

        {/* Main Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Badge */}
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
              Wholesale Fencing & Gate Distributor
            </span>
          </div>

          {/* Headline */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontSize: '64px',
                fontWeight: 900,
                color: 'white',
                lineHeight: 1.1,
              }}
            >
              High-Security Gate Systems for
            </span>
            <span
              style={{
                fontSize: '64px',
                fontWeight: 900,
                color: '#f59e0b',
                lineHeight: 1.1,
              }}
            >
              Critical Infrastructure
            </span>
          </div>
        </div>

        {/* Bottom stats */}
        <div style={{ display: 'flex', gap: '60px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '36px', fontWeight: 900, color: 'white' }}>500+</span>
            <span style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.6)' }}>Projects Completed</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '36px', fontWeight: 900, color: 'white' }}>40+</span>
            <span style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.6)' }}>Years Experience</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '36px', fontWeight: 900, color: 'white' }}>100%</span>
            <span style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.6)' }}>ASTM Certified</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts,
    }
  );
}
