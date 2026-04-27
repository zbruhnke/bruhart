import Link from 'next/link';

const problemTypes = [
  {
    title: 'Hard-to-source products',
    body: 'When the obvious catalog path is not enough, Bru-Hart can help identify options, substitutions, lead times, and manufacturers worth calling.',
    href: '/resources/hard-to-source-fence-gate-products',
  },
  {
    title: 'Complex gate packages',
    body: 'Wide openings, high cycle counts, operators, safety devices, access control, hardware, and field constraints need to be solved together.',
    href: '/resources/complex-gate-package-rfq-guide',
  },
  {
    title: 'Specs that need fixing',
    body: 'Some jobs are hard because the spec, product list, or low-bid package is incomplete. Bru-Hart can help ask the right questions before the mistake is bought.',
    href: '/resources/fixing-bad-fence-gate-specifications',
  },
];

export default function ExpertSourcing() {
  return (
    <section className="relative overflow-hidden bg-foreground py-20 text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-20 top-12 h-72 w-72 rounded-full bg-accent-light blur-3xl" />
        <div className="absolute -right-24 bottom-4 h-80 w-80 rounded-full bg-primary-light blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent-light">
              Expert Sourcing
            </p>
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Not the cheapest call. The right call when the job has to work.
            </h2>
            <p className="mb-8 text-lg leading-8 text-white/75">
              If the whole decision is a commodity price sheet, Bru-Hart may not be the low number. If the job needs product judgment, manufacturer context, custom components, special-order sourcing, or a gate package that cannot fail in the field, Bru-Hart is the right first call.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/expert-sourcing"
                className="inline-flex items-center justify-center rounded-lg bg-white px-7 py-3 text-base font-semibold text-primary transition-colors hover:bg-gray-100"
              >
                See Expert Sourcing
              </Link>
              <Link
                href="/resources/ask-a-fence-expert"
                className="inline-flex items-center justify-center rounded-lg border border-white/30 px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                Ask a Fence Expert
              </Link>
            </div>
          </div>

          <div className="grid gap-5">
            {problemTypes.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10"
              >
                <h3 className="mb-3 text-xl font-bold text-white group-hover:text-accent-light">
                  {item.title}
                </h3>
                <p className="leading-7 text-white/70">{item.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
