import type { Metadata } from 'next';
import Link from 'next/link';
import { tier1ContentPackets, tier1PacketTotals } from '@/content/tier1ContentPackets';

export const metadata: Metadata = {
  title: 'Tier 1 Content Packet System | Bru-Hart',
  description:
    'Internal Bru-Hart review system for collecting the photos, specs, testimonials, Dana notes, product truth, and case-study assets needed to upgrade Tier 1 SEO pages.',
  robots: {
    index: false,
    follow: false,
  },
};

const packetSteps = [
  'Open each linked page with Dana and compare the page to the asset checklist below it.',
  'Mark each item as available, easy to get, hard to get, not allowed, or needs manufacturer/customer approval.',
  'Collect the first sprint assets before polishing copy; real proof matters more than another rewrite.',
  'Replace placeholders on the page only when the photo, PDF, quote, or story is approved for public use.',
];

const meetingAgenda = [
  {
    step: 'Align on the goal',
    outcome: 'Agree that Bru-Hart is building expert, proof-backed search assets, not just more pages.',
  },
  {
    step: 'Review the Tier 1 standard',
    outcome: 'Confirm what makes a page ready for search, sales, and RFQs.',
  },
  {
    step: 'Walk the first 11 packets',
    outcome: 'Decide which pages get photos, PDFs, product truth, testimonials, Dana notes, and case-study support first.',
  },
  {
    step: 'Capture owner judgment',
    outcome: 'Record the product mistakes, sourcing realities, and hard-problem stories competitors cannot copy.',
  },
  {
    step: 'Assign the first sprint',
    outcome: 'Leave with owners for photos, spec sheets, product lists, testimonials, and approval decisions.',
  },
];

const meetingDecisions = [
  'Which products/categories Bru-Hart will publicly say it stocks, sources, special-orders, or quotes only.',
  'Which manufacturer names, logos, product documents, and relationship language are approved for public use.',
  'Which claims need guardrails, especially crash rated vs crash tested, safety language, and competitor/customer stories.',
  'Which three PDFs/checklists should be created first.',
  'Which customers, contractors, fabricators, landowners, or manufacturers can provide testimonials quickly.',
  'Which stories can be public, anonymized, internal-only, or not used.',
];

const reviewStatuses = ['Available', 'Easy to get', 'Hard to get', 'Not allowed', 'Needs approval'];

const foundationReady = [
  {
    label: 'URL architecture',
    value: 'The priority national, local, product, industry, custom-fabrication, resource, proof, and manufacturer paths exist.',
  },
  {
    label: 'Page modules',
    value: 'Tier 1 pages now support decision matrices, RFQ checklists, availability notes, downloads, proof assets, and source references.',
  },
  {
    label: 'Internal linking',
    value: 'The pages route buyers between products, resources, expert sourcing, local/ag, custom fabrication, reviews, and case studies.',
  },
  {
    label: 'Claim guardrails',
    value: 'The structure separates crash rated from crash tested language and gives manufacturer/relationship claims a place to be reviewed.',
  },
  {
    label: 'Review workflow',
    value: 'This page turns every missing asset into a specific ask instead of leaving the team with a vague request for better content.',
  },
];

const tier1Standard = [
  'Real photos or diagrams tied to the product, use case, local market, or problem being solved.',
  'A buyer-facing download, spec sheet, worksheet, sell sheet, or checklist where the category warrants it.',
  'Dana-level expert guidance: what to choose, what to avoid, and what information changes the recommendation.',
  'Product truth: stocked, sourced, special-order, quote-only, import/domestic, manufacturer options, and availability notes.',
  'At least one proof asset: testimonial, case study, owner note, project photo, manufacturer document, or approved field story.',
  'Clean claim boundaries for crash ratings, manufacturer relationships, safety language, and any sensitive competitor/customer story.',
];

const readinessLevels = [
  {
    level: 'Foundation Ready',
    meaning: 'The URL exists, the page has the right structure, and the placeholders make the missing proof obvious.',
    action: 'Use the page in review and start collecting assets.',
  },
  {
    level: 'Asset Ready',
    meaning: 'Photos, product truth, Dana notes, downloads, and proof have been collected and approved.',
    action: 'Replace placeholders with real page content.',
  },
  {
    level: 'Tier 1 Ready',
    meaning: 'The page is useful enough to stand against strong competitor URLs and support qualified RFQs.',
    action: 'Let it index, monitor Search Console, and deepen based on impressions and sales feedback.',
  },
];

const whyAssetsMatter = [
  {
    label: 'Photos',
    value: 'They prove Bru-Hart touches real products, real components, real local material, and real gate/fence problems.',
  },
  {
    label: 'PDFs / specs',
    value: 'They make the page useful like a serious distributor or manufacturer page, not just another marketing page.',
  },
  {
    label: 'Dana notes',
    value: 'They turn private industry reputation into public expertise Google and buyers can actually see.',
  },
  {
    label: 'Testimonials',
    value: 'They make the known reputation credible to people who do not already know Dana.',
  },
  {
    label: 'Case studies',
    value: 'They show the difference between selling a product and solving the expensive problem behind the product request.',
  },
  {
    label: 'Product truth',
    value: 'It prevents weak pages and weak sales conversations by clarifying what is stocked, sourced, special-order, quote-only, imported, domestic, or manufacturer-specific.',
  },
];

const competitorReviewNote =
  'These are competitor/reference pages and search lanes to study. They are not rank-tracking claims unless verified separately in Google Search Console, Ahrefs, Semrush, or a live SERP audit.';

const industryComparisons = [
  {
    industry: 'Legal, insurance, finance, national SaaS',
    difficulty: 'Much harder',
    reason:
      'These markets are extremely mature, expensive, link-heavy, and crowded with content teams. Fence supply is competitive, but the content bar is usually lower.',
  },
  {
    industry: 'Local home services',
    difficulty: 'Similar locally',
    reason:
      'Local fence installation SERPs can be crowded with map packs, reviews, directories, ads, and service-area pages. Bru-Hart should compete locally where it has real product/service proof.',
  },
  {
    industry: 'B2B industrial supply',
    difficulty: 'Comparable and winnable',
    reason:
      'Industrial supply SERPs often reward useful product pages, specs, PDFs, and quote guidance. Many pages are functional but not deeply expert.',
  },
  {
    industry: 'Wholesale fence distribution',
    difficulty: 'Competitive but underdeveloped',
    reason:
      'Large players have authority and scale, but many URLs still behave like catalogs. Bru-Hart can compete by being more useful per URL.',
  },
  {
    industry: 'High-security gates and barriers',
    difficulty: 'Niche and authority-driven',
    reason:
      'The search volume is narrower, but the RFQ value is high. Winners tend to have product specificity, rating documentation, photos, and spec support.',
  },
  {
    industry: 'Local agricultural fence supply',
    difficulty: 'Lower to moderate',
    reason:
      'Local and regional farm-fence content is often less sophisticated. Real local photos, product lists, reviews, and practical guidance can move the needle faster.',
  },
];

const keywordOpportunityTiers = [
  {
    tier: 'Low-Hanging Fruit',
    examples: [
      'BH Track',
      'enclosed aluminum gate track',
      'CNC gate trucks',
      'complex gate package RFQ',
      'hard-to-source fence gate products',
      'Branford agricultural fencing',
      'North Florida farm fence supplies',
    ],
    why:
      'These are specific, high-intent, and less likely to be owned by huge national pages. Some are unique to Bru-Hart or tied to local proof.',
    contentNeeded:
      'Product photos, sell sheets, RFQ checklists, Dana notes, local/product proof, and exact order inputs.',
  },
  {
    tier: 'Winnable Mid-Tier',
    examples: [
      'fence pipe and tube',
      'gate frame tubing',
      'chain link fence supplies',
      'farm fence supplies',
      'commercial gate hardware',
      'cantilever gate track',
      'data center security gates',
    ],
    why:
      'Competitors exist, but many pages are thin, catalog-like, or manufacturer-specific. Bru-Hart can win subtopics and long-tail variants first.',
    contentNeeded:
      'Decision matrices, spec tables, downloads, product truth, internal links, testimonials, and case-study snippets.',
  },
  {
    tier: 'Hard But Worth Pursuing',
    examples: [
      'crash rated gates',
      'crash rated barriers',
      'security gates',
      'perimeter security fencing',
      'gate operators',
      'agricultural fencing',
      'wholesale fence supply',
    ],
    why:
      'These lanes include large distributors, manufacturers, strong domains, and broad intent. Bru-Hart should target them with deep Tier 1 pages and supporting clusters.',
    contentNeeded:
      'Manufacturer documentation, source/spec references, original diagrams, proof assets, comparison resources, and multiple supporting pages.',
  },
  {
    tier: 'Very Hard Head Terms',
    examples: [
      'fence',
      'gates',
      'fence company',
      'local fence installer searches',
      'chain link fence',
      'high security fence',
      'fence supply',
    ],
    why:
      'These terms are broad, mixed-intent, and often dominated by directories, map packs, national distributors, manufacturers, and high-authority sites.',
    contentNeeded:
      'Do not lead with these. Build topical authority underneath them first, then earn visibility through clusters, internal links, proof, and long-tail wins.',
  },
];

export default function Tier1ContentPacketsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-foreground via-primary-dark to-primary py-24 text-white">
        <div className="absolute inset-0 opacity-15">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(135deg, rgba(255,255,255,.16) 25%, transparent 25%, transparent 50%, rgba(255,255,255,.16) 50%, rgba(255,255,255,.16) 75%, transparent 75%, transparent)',
              backgroundSize: '56px 56px',
            }}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/70">
              Internal SEO Asset System
            </p>
            <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
              Tier 1 content packets for building Bru-Hart into a search authority
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-white/80">
              Use this page with Dana to turn broad SEO pages into proof-backed sales assets: photos, specs, PDFs, testimonials, owner notes, product truth, and case studies.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-white/20 bg-white/10 p-5">
                <p className="text-3xl font-bold">{tier1PacketTotals.pages}</p>
                <p className="mt-1 text-sm uppercase tracking-wider text-white/70">Priority Pages</p>
              </div>
              <div className="rounded-lg border border-white/20 bg-white/10 p-5">
                <p className="text-3xl font-bold">{tier1PacketTotals.askGroups}</p>
                <p className="mt-1 text-sm uppercase tracking-wider text-white/70">Asset Groups</p>
              </div>
              <div className="rounded-lg border border-white/20 bg-white/10 p-5">
                <p className="text-3xl font-bold">{tier1PacketTotals.asks}</p>
                <p className="mt-1 text-sm uppercase tracking-wider text-white/70">Specific Asks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              How To Use This With Dana
            </p>
            <h2 className="mb-5 text-3xl font-bold text-foreground">
              The goal is not more copy. The goal is more proof.
            </h2>
            <p className="text-lg leading-8 text-foreground-muted">
              Large distributors can publish broad category pages. Bru-Hart needs pages that show what to choose, what to avoid, what to send before quoting, and why Dana&apos;s judgment changes the outcome.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-white p-6">
            <h2 className="mb-5 text-xl font-bold text-foreground">Review Process</h2>
            <ol className="space-y-4">
              {packetSteps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="pt-1 leading-7 text-foreground-muted">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-background-alt py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Dana Meeting Plan
            </p>
            <h2 className="mb-5 text-3xl font-bold text-foreground">
              Leave the meeting with decisions, not just agreement.
            </h2>
            <p className="text-lg leading-8 text-foreground-muted">
              If we only get one deep session, the goal is to extract the product truth, proof priorities, claim boundaries, and owner judgment needed to turn these pages from scaffolded into Tier 1.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-5 text-xl font-bold text-foreground">Recommended Agenda</h3>
              <div className="space-y-4">
                {meetingAgenda.map((item, index) => (
                  <article key={item.step} className="grid gap-3 rounded-lg bg-background-alt p-4 sm:grid-cols-[44px_1fr]">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <h4 className="mb-1 font-bold text-foreground">{item.step}</h4>
                      <p className="text-sm leading-6 text-foreground-muted">{item.outcome}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-5 text-xl font-bold text-foreground">Decisions We Need</h3>
              <ul className="space-y-4">
                {meetingDecisions.map((decision) => (
                  <li key={decision} className="flex gap-3 text-sm leading-6 text-foreground-muted">
                    <input type="checkbox" className="mt-1 h-4 w-4 flex-shrink-0 rounded border-border text-primary" />
                    <span>{decision}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background-alt py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              What Is Already Ready
            </p>
            <h2 className="mb-5 text-3xl font-bold text-foreground">
              The foundation exists. The missing piece is proof.
            </h2>
            <p className="text-lg leading-8 text-foreground-muted">
              Bru-Hart now has the page system needed to compete at scale. What the pages still need is the real-world material that only the business can provide: product photos, documentation, Dana&apos;s judgment, customer proof, and sourcing truth.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {foundationReady.map((item) => (
              <article key={item.label} className="rounded-lg border border-border bg-white p-5">
                <h3 className="mb-3 text-lg font-bold text-foreground">{item.label}</h3>
                <p className="text-sm leading-6 text-foreground-muted">{item.value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Tier 1 Standard
            </p>
            <h2 className="mb-5 text-3xl font-bold text-foreground">
              A page is not Tier 1 because it exists. It is Tier 1 when it helps a buyer make a better decision.
            </h2>
            <p className="text-lg leading-8 text-foreground-muted">
              This is the standard we should hold every priority page to before treating it as finished for search and sales.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-4">
              {tier1Standard.map((item) => (
                <li key={item} className="flex gap-4">
                  <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-primary" />
                  <span className="leading-7 text-foreground-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-background-alt py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Readiness Levels
            </p>
            <h2 className="text-3xl font-bold text-foreground">
              Use this to separate scaffolded pages from publish-ready Tier 1 pages.
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {readinessLevels.map((item) => (
              <article key={item.level} className="rounded-lg border border-border bg-white p-6">
                <h3 className="mb-3 text-xl font-bold text-foreground">{item.level}</h3>
                <p className="mb-5 leading-7 text-foreground-muted">{item.meaning}</p>
                <p className="rounded-lg bg-background-alt p-4 text-sm font-semibold leading-6 text-primary">
                  {item.action}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Why The Asks Matter
            </p>
            <h2 className="text-3xl font-bold text-foreground">
              These are not busywork requests. They are the difference between a content footprint and an authority asset.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyAssetsMatter.map((item) => (
              <article key={item.label} className="rounded-lg border border-border bg-white p-6">
                <h3 className="mb-3 text-xl font-bold text-foreground">{item.label}</h3>
                <p className="leading-7 text-foreground-muted">{item.value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-alt py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Market Difficulty
            </p>
            <h2 className="mb-5 text-3xl font-bold text-foreground">
              Fence SEO is competitive, but it is not impossible in the way legal, finance, or national SaaS can be.
            </h2>
            <p className="text-lg leading-8 text-foreground-muted">
              This is a qualitative difficulty model until we validate exact volumes, keyword difficulty, and ranking overlap in Ahrefs, Semrush, or live rank tracking. The strategic takeaway is that Bru-Hart should win specific high-intent lanes first, then use those wins to build authority toward broader terms.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industryComparisons.map((item) => (
              <article key={item.industry} className="rounded-lg border border-border bg-white p-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">{item.difficulty}</p>
                <h3 className="mb-3 text-xl font-bold text-foreground">{item.industry}</h3>
                <p className="leading-7 text-foreground-muted">{item.reason}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Keyword Opportunity Tiers
            </p>
            <h2 className="text-3xl font-bold text-foreground">
              Start where specificity, proof, and Dana&apos;s expertise give Bru-Hart an unfair advantage.
            </h2>
          </div>
          <div className="space-y-6">
            {keywordOpportunityTiers.map((tier) => (
              <article key={tier.tier} className="rounded-xl border border-border bg-white p-6">
                <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
                  <div>
                    <h3 className="mb-3 text-2xl font-bold text-foreground">{tier.tier}</h3>
                    <p className="text-sm leading-6 text-foreground-muted">{tier.why}</p>
                  </div>
                  <div>
                    <div className="mb-5 flex flex-wrap gap-2">
                      {tier.examples.map((example) => (
                        <span key={example} className="rounded-full bg-background-alt px-3 py-1 text-xs font-semibold uppercase tracking-wider text-foreground-muted">
                          {example}
                        </span>
                      ))}
                    </div>
                    <div className="rounded-lg bg-background-alt p-4">
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">What It Takes</p>
                      <p className="text-sm leading-6 text-foreground-muted">{tier.contentNeeded}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-alt py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Review Status Key
            </p>
            <h2 className="text-3xl font-bold text-foreground">
              Mark every asset before assigning work.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {reviewStatuses.map((status) => (
              <div key={status} className="rounded-lg border border-border bg-white p-4">
                <label className="flex items-center gap-3 text-sm font-semibold text-foreground">
                  <input type="checkbox" className="h-4 w-4 rounded border-border text-primary" />
                  {status}
                </label>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Tier 1 Packets
            </p>
            <h2 className="text-3xl font-bold text-foreground">
              Go page by page and fill the missing assets.
            </h2>
          </div>

          <div className="space-y-10">
            {tier1ContentPackets.map((packet) => (
              <article key={packet.path} className="overflow-hidden rounded-xl border border-border bg-white shadow-sm">
                <div className="grid gap-8 border-b border-border bg-background-alt p-6 lg:grid-cols-[1fr_320px]">
                  <div>
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                        Priority {packet.priority}
                      </span>
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                        {packet.pageType}
                      </span>
                    </div>
                    <h2 className="mb-3 text-3xl font-bold text-foreground">{packet.title}</h2>
                    <p className="mb-5 text-lg leading-8 text-foreground-muted">{packet.primaryGoal}</p>
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Link
                        href={packet.path}
                        className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                      >
                        Open Page
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-lg border border-border bg-white px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                      >
                        Route To Sales Intake
                      </Link>
                    </div>
                  </div>
                  <div className="rounded-lg border border-border bg-white p-5">
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
                      First Sprint
                    </h3>
                    <ul className="space-y-3">
                      {packet.firstSprint.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-6 text-foreground-muted">
                          <input type="checkbox" className="mt-1 h-4 w-4 flex-shrink-0 rounded border-border text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid gap-8 p-6 lg:grid-cols-3">
                  <div>
                    <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Why It Matters</h3>
                    <p className="leading-7 text-foreground-muted">{packet.whyItMatters}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Competitor Context</h3>
                    <p className="leading-7 text-foreground-muted">{packet.competitorContext}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">What It Does</h3>
                    <p className="mb-3 leading-7 text-foreground-muted">{packet.shortTermImpact}</p>
                    <p className="leading-7 text-foreground-muted">{packet.longTermMoat}</p>
                  </div>
                </div>

                <div className="border-t border-border p-6">
                  <div className="mb-6 max-w-3xl">
                    <h3 className="mb-3 text-2xl font-bold text-foreground">Competitor Pages To Study</h3>
                    <p className="text-sm leading-6 text-foreground-muted">{competitorReviewNote}</p>
                  </div>
                  <div className="grid gap-6 lg:grid-cols-2">
                    {packet.competitorExamples.map((example) => (
                      <article key={example.href} className="rounded-lg border border-border bg-background-alt p-5">
                        <a
                          href={example.href}
                          className="mb-3 block text-lg font-bold text-primary transition-colors hover:text-primary-dark"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {example.label}
                        </a>
                        <div className="mb-4 flex flex-wrap gap-2">
                          {example.searchLanes.map((term) => (
                            <span
                              key={term}
                              className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-foreground-muted"
                            >
                              {term}
                            </span>
                          ))}
                        </div>
                        <div className="grid gap-4">
                          <div>
                            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">Why It Works</p>
                            <p className="text-sm leading-6 text-foreground-muted">{example.whyItWorks}</p>
                          </div>
                          <div>
                            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">Bru-Hart Response</p>
                            <p className="text-sm leading-6 text-foreground-muted">{example.bruhartResponse}</p>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="border-t border-border p-6">
                  <h3 className="mb-6 text-2xl font-bold text-foreground">Asset Checklist</h3>
                  <div className="grid gap-6 lg:grid-cols-2">
                    {packet.askGroups.map((group) => (
                      <div key={group.label} className="rounded-lg border border-border bg-background-alt p-5">
                        <h4 className="mb-2 text-lg font-bold text-foreground">{group.label}</h4>
                        <p className="mb-4 text-sm leading-6 text-foreground-muted">{group.purpose}</p>
                        <ul className="space-y-3">
                          {group.items.map((item) => (
                            <li key={item} className="flex gap-3 text-sm leading-6 text-foreground-muted">
                              <input type="checkbox" className="mt-1 h-4 w-4 flex-shrink-0 rounded border-border text-primary" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-border bg-background-alt p-6">
                  <h3 className="mb-5 text-xl font-bold text-foreground">Questions For Dana</h3>
                  <div className="grid gap-4 md:grid-cols-3">
                    {packet.danaQuestions.map((question) => (
                      <div key={question} className="rounded-lg border border-border bg-white p-4">
                        <p className="text-sm leading-6 text-foreground-muted">{question}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Do not wait for perfect assets before starting.
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-white/80">
            The right cadence is collect, approve, publish, review Search Console, and deepen the pages that start showing qualified impressions or sales traction.
          </p>
          <Link
            href="/expert-sourcing"
            className="inline-flex items-center justify-center rounded-lg bg-white px-7 py-3 text-base font-semibold text-primary transition-colors hover:bg-gray-100"
          >
            Review Expert Sourcing Page
          </Link>
        </div>
      </section>
    </>
  );
}
