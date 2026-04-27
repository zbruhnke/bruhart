import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Case Studies & Project Proof | Bru-Hart Industries',
  description:
    'Bru-Hart case study hub for fence, gate, agricultural, access-control, manufacturer, and high-security project proof.',
  robots: {
    index: false,
    follow: false,
  },
};

const caseStudyTypes = [
  'Agricultural fence and farm gate projects',
  'Commercial gate and access-control packages',
  'BH Track and CNC-milled truck component stories',
  'Manufacturer-supported product decisions',
  'Crash-rated gate and barrier specification support',
  'Local North Florida fence material and repair stories',
];

const caseStudyTemplate = [
  ['Problem', 'What was failing, hard to source, unclear, delayed, or risky.'],
  ['Site or buyer', 'Contractor, landowner, fabricator, facility, or project type.'],
  ['Bru-Hart role', 'Supplied, sourced, specified, advised, fabricated, or coordinated.'],
  ['Product mix', 'Fence, gate, wire, posts, hardware, operators, track, trucks, or barriers.'],
  ['Result', 'Faster quote, better fit, fewer callbacks, stronger access, or cleaner install.'],
  ['Proof', 'Photos, testimonial, owner note, manufacturer context, or approved project detail.'],
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/70">
              Project Proof
            </p>
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Case studies that show how Bru-Hart makes better product decisions
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-white/80">
              This hub is built for the project stories Bru-Hart can collect quickly: what the buyer needed, what product path made sense, and why the result worked.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
          <div>
            <h2 className="mb-5 text-3xl font-bold text-foreground">
              The proof library is structured around both sides of the business.
            </h2>
            <p className="mb-8 text-lg leading-8 text-foreground-muted">
              Bru-Hart needs case studies for local agricultural work and national wholesale/security work. That combination is what makes the company harder to categorize and harder to compete against.
            </p>
            <div className="grid gap-5 md:grid-cols-2">
              {caseStudyTypes.map((type) => (
                <article key={type} className="rounded-lg border border-border bg-white p-6">
                  <h2 className="text-lg font-semibold text-foreground">{type}</h2>
                </article>
              ))}
            </div>
          </div>
          <aside className="rounded-lg border border-border bg-background-alt p-6">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              First Targets
            </h2>
            <ul className="space-y-3 text-sm leading-6 text-foreground-muted">
              <li>One BH Track or CNC truck testimonial story.</li>
              <li>One local agricultural fence/material story.</li>
              <li>One commercial gate/access-control story.</li>
              <li>One manufacturer-backed product selection story.</li>
              <li>One high-security specification support story.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="bg-background-alt py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold text-foreground">Case study format</h2>
            <p className="text-lg text-foreground-muted">
              Every story can be useful even if the customer name is anonymized. Specificity matters more than length.
            </p>
          </div>
          <div className="divide-y divide-border rounded-lg border border-border bg-white">
            {caseStudyTemplate.map(([label, value]) => (
              <div key={label} className="grid gap-2 p-5 sm:grid-cols-[170px_1fr]">
                <dt className="text-sm font-semibold uppercase tracking-wider text-foreground">{label}</dt>
                <dd className="text-foreground-muted">{value}</dd>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-white">Build proof while the content footprint grows.</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
            The SEO foundation now has breadth. Case studies give it credibility, conversion power, and defensibility.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/reviews" className="inline-flex items-center justify-center rounded-lg bg-white px-7 py-3 text-base font-semibold text-primary transition-colors hover:bg-gray-100">
              View Reviews Hub
            </Link>
            <Link href="/resources/ask-a-fence-expert" className="inline-flex items-center justify-center rounded-lg border border-white/30 px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10">
              Ask a Fence Expert
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
