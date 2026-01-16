import { ImageResponse } from 'next/og';
import { OGImageLayout, getOGFonts } from '@/lib/og-image';

export const runtime = 'edge';

export const alt = 'Contact Bru-Hart - Get a Quote for Security Solutions';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  const fonts = await getOGFonts();

  return new ImageResponse(
    (
      <OGImageLayout
        badge="Contact Us"
        title="Get in Touch"
        subtitle="Request a quote, get technical support, or discuss your security requirements with our expert team."
      />
    ),
    {
      ...size,
      fonts,
    }
  );
}
