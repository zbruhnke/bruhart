import { ImageResponse } from 'next/og';
import { OGImageLayout, getOGFonts, getBaseUrl } from '@/lib/og-image';

export const runtime = 'edge';

export const alt = 'Bru-Hart Products - Security Products Built for Critical Infrastructure';
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
        badge="Our Products"
        title="Security Products Built for Critical Infrastructure"
        subtitle="Crash-rated gates, barrier systems, operators, and access control meeting the highest security standards."
        backgroundImage={`${getBaseUrl()}/images/bruhart_work/IMG_1961.jpeg`}
      />
    ),
    {
      ...size,
      fonts,
    }
  );
}
