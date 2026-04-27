import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Reviews & Testimonials | Bru-Hart Industries',
  description:
    'Bru-Hart review and testimonial hub for contractors, manufacturers, local buyers, and project teams as customer proof is collected.',
  robots: {
    index: false,
    follow: false,
  },
};

const proofSlots = [
  {
    title: 'Contractor Testimonials',
    description:
      'Quotes from fence contractors, gate fabricators, and installers who buy from Bru-Hart or rely on Bru-Hart for product judgment, sourcing, and component support.',
  },
  {
    title: 'Manufacturer Feedback',
    description:
      'Approved comments from manufacturer partners that speak to Bru-Hart relationships, product knowledge, and field credibility.',
  },
  {
    title: 'Local Buyer Reviews',
    description:
      'Future feedback from Branford and North Florida landowners, farms, and local businesses buying fence, gates, and materials.',
  },
  {
    title: 'Project-Specific Proof',
    description:
      'Short review blocks tied to real case studies, product categories, and before/after project photos.',
  },
];

export default function ReviewsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/70">
              Public Proof
            </p>
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Bru-Hart reviews, testimonials, and customer proof
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-white/80">
              This hub is built to collect the proof Bru-Hart expects to earn quickly: contractor feedback, local customer reviews, manufacturer comments, and project-specific testimonials.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="mb-5 text-3xl font-bold text-foreground">
              The review structure is ready before the public proof library is full.
            </h2>
            <p className="text-lg leading-8 text-foreground-muted">
              This page is intentionally kept out of search indexes until real testimonials, ratings, photos, and customer stories are approved for publication.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {proofSlots.map((slot) => (
              <article key={slot.title} className="rounded-lg border border-border bg-white p-7">
                <h2 className="mb-3 text-xl font-bold text-foreground">{slot.title}</h2>
                <p className="leading-7 text-foreground-muted">{slot.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-alt py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-foreground">
              What to collect now
            </h2>
            <div className="divide-y divide-border rounded-lg border border-border bg-white">
              {[
                ['Testimonials', '20 short quotes from contractors, customers, and manufacturers.'],
                ['Photos', 'Project, product, yard, delivery, material, and before/after photos.'],
                ['Context', 'Who the buyer was, what they needed, what Bru-Hart supplied, and what changed.'],
                ['Boundary', 'Bru-Hart does not install. Reviews should reflect materials, components, sourcing, technical support, or installer recommendations.'],
                ['Permission', 'Approval to publish the quote, company name, photo, or anonymized story.'],
              ].map(([label, value]) => (
                <div key={label} className="grid gap-2 p-5 sm:grid-cols-[160px_1fr]">
                  <dt className="text-sm font-semibold uppercase tracking-wider text-foreground">{label}</dt>
                  <dd className="text-foreground-muted">{value}</dd>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg bg-foreground p-7 text-white">
            <h2 className="mb-6 text-3xl font-bold">Why this matters</h2>
            <ul className="space-y-4">
              {[
                'A known fence-industry reputation becomes more powerful when it is visible and linkable.',
                'Reviews can support product pages, manufacturer pages, local pages, and case studies.',
                'Competitors can copy page count; they cannot copy real customer proof and decades of relationships.',
              ].map((item) => (
                <li key={item} className="flex gap-3 leading-7 text-white/80">
                  <span className="mt-2.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-light" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-white">Turn a customer story into proof.</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
            Send Bru-Hart the project, product, quote, or relationship story. The site is ready to turn real proof into useful sales and SEO assets.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/case-studies" className="inline-flex items-center justify-center rounded-lg bg-white px-7 py-3 text-base font-semibold text-primary transition-colors hover:bg-gray-100">
              View Case Study Structure
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-lg border border-white/30 px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10">
              Contact Bru-Hart
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
