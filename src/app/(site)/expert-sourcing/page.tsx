import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Expert Fence & Gate Sourcing | Bru-Hart Industries',
  description:
    'Expert fence, gate, access-control, hardware, and special-order sourcing for contractors and buyers who need the job done right the first time.',
};

const situations = [
  'The quote is not hard, but the product decision is.',
  'The lowest bid leaves too many compatibility, lead-time, or field-performance questions open.',
  'The gate, operator, hardware, access control, and safety devices need to work as a package.',
  'The customer needs a special-order, imported, domestic, rated, or manufacturer-specific option and needs to know which path is real.',
  'A contractor needs a second set of experienced eyes before buying the wrong thing.',
];

const capabilities = [
  {
    title: 'Product judgment before pricing',
    body: 'Bru-Hart can help clarify what actually fits the job before the buyer locks into a price-only product path.',
    href: '/resources/choosing-best-product-for-the-job',
  },
  {
    title: 'Hard-to-source fence and gate products',
    body: 'Special sizes, unusual components, replacement hardware, specific manufacturers, and imported or domestic product requirements should be handled deliberately.',
    href: '/resources/hard-to-source-fence-gate-products',
  },
  {
    title: 'Complex gate package support',
    body: 'The gate is only one part of the package. Weight, opening, cycle count, operator, hinges, latches, safety devices, controls, and field conditions all matter.',
    href: '/resources/complex-gate-package-rfq-guide',
  },
  {
    title: 'Spec and low-bid rescue',
    body: 'When a spec is vague or a low-bid package looks incomplete, Bru-Hart can help identify what needs to be clarified before procurement.',
    href: '/resources/fixing-bad-fence-gate-specifications',
  },
  {
    title: 'Value engineering without cheap substitutions',
    body: 'The goal is not to make the job worse for less money. The goal is to protect function, reliability, documentation, and field performance.',
    href: '/resources/fence-gate-value-engineering',
  },
  {
    title: 'Manufacturer-aware sourcing',
    body: 'Some brands speak for themselves. Bru-Hart still evaluates the fit, availability, support path, documentation, and role in the full package.',
    href: '/manufacturers',
  },
];

const rfqInputs = [
  ['Use case', 'What the fence, gate, barrier, operator, or hardware has to do every day.'],
  ['Failure point', 'What cannot go wrong: access, containment, security, cycle count, safety, lead time, or compatibility.'],
  ['Constraints', 'Opening size, backspace, grade, wind exposure, animal pressure, traffic flow, power, and existing products.'],
  ['Preference', 'Manufacturer, domestic/imported requirement, finish, rating documentation, stocked material, or special-order path.'],
  ['Proof', 'Photos, drawings, site notes, model numbers, old parts, existing gates, or bid/spec documents.'],
];

const expertDownloads = [
  {
    title: 'Hard-to-Source Product Intake Sheet',
    description:
      'Manufacturer, model, dimensions, finish, existing photos, acceptable substitutions, deadline, and domestic/imported requirements.',
    status: 'Needs PDF/spec sheet',
  },
  {
    title: 'Complex Gate Package RFQ Checklist',
    description:
      'Opening, gate weight, operator, hardware, safety devices, access control, rating language, drawings, and photos.',
    status: 'Needs PDF/spec sheet',
  },
  {
    title: 'Value Engineering Without Cheap Substitutions',
    description:
      'A buyer-facing guide for reducing cost without creating callbacks, weak points, or documentation problems.',
    status: 'Needs owner review',
  },
];

const expertProofAssets = [
  {
    title: 'Dana Field Notes',
    description:
      'Short approved owner notes explaining what buyers usually miss on gates, hardware, pipe/tube, operators, and special-order parts.',
    status: 'Needs owner input',
  },
  {
    title: 'Hard-Problem Stories',
    description:
      'Anonymized or approved examples where Bru-Hart helped a contractor, distributor, fabricator, or owner avoid the wrong product path.',
    status: 'Proof needed',
  },
  {
    title: 'Product Sourcing Photos',
    description:
      'Real photos of unusual parts, replacement hardware, manufacturer packaging, BH Track, gate trucks, pipe/tube, and specialty materials.',
    status: 'Needs photos',
  },
];

export default function ExpertSourcingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-foreground via-primary-dark to-primary py-24 text-white">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-accent-light blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/70">
              Expert Sourcing
            </p>
            <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
              The first call when a fence or gate job cannot be solved by a commodity quote
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-white/80">
              Bru-Hart is built for buyers who need the right answer more than the fastest price sheet: contractors, fabricators, landowners, facilities, and security teams trying to avoid the wrong product, wrong package, or wrong assumption.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <h2 className="mb-5 text-3xl font-bold text-foreground">
              Price matters. But on hard jobs, judgment matters first.
            </h2>
            <p className="text-lg leading-8 text-foreground-muted">
              Binford, Master Halco, Stephens, and other large distributors can be strong price competitors on standard materials. Bru-Hart should win when the buyer needs counsel: what to buy, what not to buy, what can be sourced, what should be special-ordered, and what needs to be clarified before money moves.
            </p>
          </div>
          <div className="divide-y divide-border rounded-lg border border-border bg-white">
            {situations.map((situation) => (
              <div key={situation} className="flex gap-4 p-5">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                <p className="text-foreground-muted">{situation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-alt py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Where Bru-Hart Should Be Hard To Compete With
            </p>
            <h2 className="text-3xl font-bold text-foreground">
              Build the category pages, but make the expertise impossible to miss.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <Link key={item.title} href={item.href} className="group rounded-lg border border-border bg-white p-6 transition-shadow hover:shadow-lg">
                <h3 className="mb-3 text-xl font-bold text-foreground group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="leading-7 text-foreground-muted">{item.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold text-foreground">Send a better RFQ.</h2>
            <p className="text-lg leading-8 text-foreground-muted">
              The fastest way to get expert help is to send the details that change the recommendation. Bru-Hart should train the market to bring the real problem, not just a SKU request.
            </p>
          </div>
          <div className="divide-y divide-border rounded-lg border border-border bg-white">
            {rfqInputs.map(([label, value]) => (
              <div key={label} className="grid gap-2 p-5 sm:grid-cols-[180px_1fr]">
                <dt className="text-sm font-semibold uppercase tracking-wider text-foreground">{label}</dt>
                <dd className="text-foreground-muted">{value}</dd>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-alt py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Proof And Tools To Build
            </p>
            <h2 className="mb-5 text-3xl font-bold text-foreground">
              This is where Dana&apos;s judgment becomes visible, indexable, and useful.
            </h2>
            <p className="text-lg leading-8 text-foreground-muted">
              The page should eventually include the exact artifacts a buyer needs when a standard distributor price sheet is not enough. These placeholders are intentional: they show what Bru-Hart needs to collect and give sales a clean place to put that proof.
            </p>
          </div>
          <div className="grid gap-6">
            <div className="rounded-lg border border-border bg-white p-6">
              <h2 className="mb-5 text-xl font-bold text-foreground">Downloads To Create</h2>
              <div className="space-y-4">
                {expertDownloads.map((item) => (
                  <article key={item.title} className="rounded-lg bg-background-alt p-4">
                    <h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
                    <p className="mb-2 text-sm leading-6 text-foreground-muted">{item.description}</p>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">{item.status}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h2 className="mb-5 text-xl font-bold text-foreground">Proof Assets To Collect</h2>
              <div className="space-y-4">
                {expertProofAssets.map((item) => (
                  <article key={item.title} className="rounded-lg bg-background-alt p-4">
                    <h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
                    <p className="mb-2 text-sm leading-6 text-foreground-muted">{item.description}</p>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">{item.status}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-white">Bring the hard fence or gate problem.</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
            Bru-Hart should be judged by the quality of the answer, not by whether it can beat a commodity price sheet on every standard item.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-lg bg-white px-7 py-3 text-base font-semibold text-primary transition-colors hover:bg-gray-100">
              Request Expert Help
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
