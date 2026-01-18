import { ImageResponse } from 'next/og';
import { OGImageLayout, getOGFonts } from '@/lib/og-image';

export const runtime = 'edge';

export const alt = 'Bru-Hart Industries - Specialized Security for Critical Sectors';
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
        badge="Industries We Serve"
        title="Specialized Security for Critical Sectors"
        subtitle="Data centers, airports, utilities, government facilities, and more."
        backgroundImage="https://bruhart.com/images/bruhart_work/IMG_1910.jpeg"
      />
    ),
    {
      ...size,
      fonts,
    }
  );
}
