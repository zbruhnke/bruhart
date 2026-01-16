import { ImageResponse } from 'next/og';
import { OGImageLayout, getOGFonts } from '@/lib/og-image';

export const runtime = 'edge';

export const alt = 'About Bru-Hart - 40+ Years Protecting Critical Infrastructure';
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
        badge="About Us"
        title="Protecting Critical Infrastructure for Over 40 Years"
        subtitle="Industry-leading expertise in high-security gate systems and perimeter protection."
      />
    ),
    {
      ...size,
      fonts,
    }
  );
}
