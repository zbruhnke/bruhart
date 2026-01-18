import { ImageResponse } from 'next/og';
import { OGImageLayout, getOGFonts, getOGBackgroundImage } from '@/lib/og-image';

export const runtime = 'edge';
export const revalidate = 0;

export const alt = 'About Bru-Hart - 40+ Years Protecting Critical Infrastructure';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  const fonts = await getOGFonts();
  const backgroundImage = await getOGBackgroundImage('/images/bruhart_work/IMG_1287.jpeg');

  return new ImageResponse(
    (
      <OGImageLayout
        badge="About Us"
        title="40+ Years of Expertise. A New Standard in Security."
        subtitle="Industry-leading expertise in high-security gate systems and perimeter protection."
        backgroundImage={backgroundImage || undefined}
      />
    ),
    {
      ...size,
      fonts,
    }
  );
}
