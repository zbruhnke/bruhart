import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SeoLandingPage from '@/components/SeoLandingPage';
import { getLandingPage, getLandingPagesByCategory } from '@/content/seoLandingPages';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getLandingPagesByCategory('service-areas').map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getLandingPage('service-areas', slug);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: page.path,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: page.path,
      type: 'website',
    },
  };
}

export default async function ServiceAreaLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getLandingPage('service-areas', slug);

  if (!page) {
    notFound();
  }

  return <SeoLandingPage page={page} />;
}
