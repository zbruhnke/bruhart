import Link from 'next/link';
import type { SeoLandingPage as SeoLandingPageContent } from '@/content/seoLandingPages';
import SupplyOnlyNotice from '@/components/SupplyOnlyNotice';

const publicText = (value: string) =>
  value
    .replace(/\bBru-Hart should\b/g, 'Bru-Hart can')
    .replace(/\bThis page should\b/g, 'This page is designed to')
    .replace(/\bthis page should\b/g, 'this page is designed to')
    .replace(/\bThe page should\b/g, 'This page is designed to')
    .replace(/\bthe page should\b/g, 'this page is designed to')
    .replace(/\bThe service-area page should\b/g, 'This service-area page helps')
    .replace(/\bthe service-area page should\b/g, 'this service-area page helps');

const isPublicDownload = (item: NonNullable<SeoLandingPageContent['downloads']>[number]) =>
  Boolean(item.href) || /available/i.test(item.status);

const privateProofHrefs = new Set(['/reviews', '/case-studies', '/resources/tier-1-content-packets']);

export default function SeoLandingPage({ page }: { page: SeoLandingPageContent }) {
  const publicDownloads = page.downloads?.filter(isPublicDownload) || [];
  const publicRelated = page.related.filter((link) => !privateProofHrefs.has(link.href));

  const hasQualityModules = Boolean(
    page.decisionMatrix?.length ||
      page.rfqChecklist?.length ||
      publicDownloads.length ||
      page.availabilityNotes?.length ||
      page.sourceReferences?.length
  );

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light py-24">
        <div className="absolute inset-0 opacity-15">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(255,255,255,.16) 25%, transparent 25%, transparent 50%, rgba(255,255,255,.16) 50%, rgba(255,255,255,.16) 75%, transparent 75%, transparent)",
              backgroundSize: '56px 56px',
            }}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/70">
              {publicText(page.eyebrow)}
            </p>
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              {publicText(page.heroTitle)}
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-white/80">
              {publicText(page.heroDescription)}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-white px-7 py-3 text-base font-semibold text-primary transition-colors hover:bg-gray-100"
              >
                Request a Quote
              </Link>
              <a
                href="tel:+13183445731"
                className="inline-flex items-center justify-center rounded-lg border border-white/30 px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                Call (318) 344-5731
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
          <div>
            <h2 className="mb-5 text-3xl font-bold text-foreground">
              {publicText(page.introTitle)}
            </h2>
            <p className="text-lg leading-8 text-foreground-muted">
              {publicText(page.intro)}
            </p>
          </div>
          <div className="space-y-6">
            <SupplyOnlyNotice compact />
            <div className="rounded-lg border border-border bg-background-alt p-6">
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                Project Fit
              </h2>
              <ul className="space-y-3">
                {page.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-6 text-foreground-muted">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                    <span>{publicText(highlight)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background-alt py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {page.sections.map((section) => (
              <article key={section.title} className="rounded-lg border border-border bg-white p-7">
                <h2 className="mb-4 text-xl font-bold text-foreground">
                  {publicText(section.title)}
                </h2>
                <p className="mb-5 leading-7 text-foreground-muted">
                  {publicText(section.body)}
                </p>
                <ul className="space-y-3">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-6 text-foreground-muted">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>{publicText(bullet)}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {hasQualityModules && (
        <section className="bg-background py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                Decision Support
              </p>
              <h2 className="text-3xl font-bold text-foreground">
                What to choose, what to avoid, and what to send before quoting
              </h2>
            </div>

            <div className="grid gap-8">
              {page.decisionMatrix && page.decisionMatrix.length > 0 && (
                <div className="overflow-hidden rounded-lg border border-border bg-white">
                  <div className="border-b border-border bg-background-alt px-5 py-4">
                    <h2 className="text-xl font-bold text-foreground">Choose / Avoid Matrix</h2>
                  </div>
                  <div className="divide-y divide-border">
                    {page.decisionMatrix.map((row) => (
                      <article key={row.option} className="grid gap-4 p-5 lg:grid-cols-[190px_1fr_1fr_1fr]">
                        <h3 className="font-semibold text-foreground">{publicText(row.option)}</h3>
                        <div>
                          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">Choose When</p>
                          <p className="text-sm leading-6 text-foreground-muted">{publicText(row.chooseWhen)}</p>
                        </div>
                        <div>
                          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">Avoid When</p>
                          <p className="text-sm leading-6 text-foreground-muted">{publicText(row.avoidWhen)}</p>
                        </div>
                        <div>
                          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">Bru-Hart Note</p>
                          <p className="text-sm leading-6 text-foreground-muted">{publicText(row.notes)}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid gap-8 lg:grid-cols-2">
                {page.rfqChecklist && page.rfqChecklist.length > 0 && (
                  <div className="rounded-lg border border-border bg-white p-6">
                    <h2 className="mb-5 text-xl font-bold text-foreground">RFQ Checklist</h2>
                    <div className="divide-y divide-border">
                      {page.rfqChecklist.map((item) => (
                        <div key={item.label} className="grid gap-2 py-4 sm:grid-cols-[150px_1fr]">
                          <dt className="text-sm font-semibold uppercase tracking-wider text-foreground">{publicText(item.label)}</dt>
                          <dd className="text-sm leading-6 text-foreground-muted">{publicText(item.detail)}</dd>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {page.availabilityNotes && page.availabilityNotes.length > 0 && (
                  <div className="rounded-lg border border-border bg-white p-6">
                    <h2 className="mb-5 text-xl font-bold text-foreground">Availability & Sourcing Truth</h2>
                    <div className="divide-y divide-border">
                      {page.availabilityNotes.map((item) => (
                        <div key={item.label} className="grid gap-2 py-4 sm:grid-cols-[150px_1fr]">
                          <dt className="text-sm font-semibold uppercase tracking-wider text-foreground">{publicText(item.label)}</dt>
                          <dd className="text-sm leading-6 text-foreground-muted">{publicText(item.value)}</dd>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="grid gap-8 lg:grid-cols-3">
                {publicDownloads.length > 0 && (
                  <div className="rounded-lg border border-border bg-white p-6">
                    <h2 className="mb-5 text-xl font-bold text-foreground">Downloads & Tools</h2>
                    <div className="space-y-4">
                      {publicDownloads.map((item) => (
                        <article key={item.label} className="rounded-lg bg-background-alt p-4">
                          <h3 className="mb-2 font-semibold text-foreground">
                            {item.href ? (
                              <Link href={item.href} className="text-primary hover:text-primary-dark">
                                {publicText(item.label)}
                              </Link>
                            ) : (
                              publicText(item.label)
                            )}
                          </h3>
                          <p className="mb-2 text-sm leading-6 text-foreground-muted">{publicText(item.description)}</p>
                          <p className="text-xs font-semibold uppercase tracking-wider text-primary">{publicText(item.status)}</p>
                        </article>
                      ))}
                    </div>
                  </div>
                )}

                {page.sourceReferences && page.sourceReferences.length > 0 && (
                  <div className="rounded-lg border border-border bg-white p-6">
                    <h2 className="mb-5 text-xl font-bold text-foreground">Source & Spec References</h2>
                    <div className="space-y-4">
                      {page.sourceReferences.map((item) => (
                        <article key={item.href} className="rounded-lg bg-background-alt p-4">
                          <a href={item.href} className="mb-2 block font-semibold text-primary hover:text-primary-dark">
                            {publicText(item.label)}
                          </a>
                          <p className="text-sm leading-6 text-foreground-muted">{publicText(item.description)}</p>
                        </article>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-foreground">
              {publicText(page.specTitle)}
            </h2>
            <div className="divide-y divide-border rounded-lg border border-border">
              {page.specs.map((spec) => (
                <div key={spec.label} className="grid gap-2 p-5 sm:grid-cols-[180px_1fr]">
                  <dt className="text-sm font-semibold uppercase tracking-wider text-foreground">
                    {publicText(spec.label)}
                  </dt>
                  <dd className="text-foreground-muted">
                    {publicText(spec.value)}
                  </dd>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-6 text-3xl font-bold text-foreground">
              {publicText(page.proofTitle)}
            </h2>
            <div className="rounded-lg bg-foreground p-7 text-white">
              <ul className="space-y-4">
                {page.proof.map((item) => (
                  <li key={item} className="flex gap-3 leading-7 text-white/80">
                    <span className="mt-2.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-light" />
                    <span>{publicText(item)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background-alt py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
          <div>
            <h2 className="mb-8 text-3xl font-bold text-foreground">
              Common Questions
            </h2>
            <div className="space-y-4">
              {page.faqs.map((faq) => (
                <article key={faq.question} className="rounded-lg border border-border bg-white p-6">
                  <h3 className="mb-3 text-lg font-semibold text-foreground">
                    {publicText(faq.question)}
                  </h3>
                  <p className="leading-7 text-foreground-muted">
                    {publicText(faq.answer)}
                  </p>
                </article>
              ))}
            </div>
          </div>
          <aside>
            <div className="sticky top-28 rounded-lg border border-border bg-white p-6">
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                Related Pages
              </h2>
              <ul className="space-y-3">
                {publicRelated.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm font-medium text-primary hover:text-primary-dark">
                      {publicText(link.label)}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-border pt-6">
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Discuss Your Project
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
