import { ImageResponse } from 'next/og';
import { OGImageLayout, getOGFonts, getOGBackgroundImage } from '@/lib/og-image';

export const runtime = 'edge';
export const revalidate = 0;

export const alt = 'Contact Bru-Hart - Get a Quote for Industries';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  const fonts = await getOGFonts();
  const backgroundImage = await getOGBackgroundImage('/images/bruhart_work/IMG_4252.jpeg');

  return new ImageResponse(
    (
      <OGImageLayout
        badge="Contact Us"
        title="Get in Touch"
        subtitle="Request a quote, get technical support, or discuss your security requirements with our expert team."
        backgroundImage={backgroundImage || undefined}
      />
    ),
    {
      ...size,
      fonts,
    }
  );
}
