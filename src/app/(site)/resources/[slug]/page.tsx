import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SeoLandingPage from '@/components/SeoLandingPage';
import { getLandingPage, getLandingPagesByCategory } from '@/content/seoLandingPages';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getLandingPagesByCategory('resources').map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getLandingPage('resources', slug);

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

export default async function ResourceLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getLandingPage('resources', slug);

  if (!page) {
    notFound();
  }

  return <SeoLandingPage page={page} />;
}
