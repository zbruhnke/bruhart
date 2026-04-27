# Bru-Hart Agent Rules

These rules apply to every AI agent, coding assistant, content generator, and reviewer working in this repository.

## Non-Negotiable Business Boundary

Bru-Hart is a materials, components, sourcing, fabrication, and technical-support company. Bru-Hart does **not** install fences, gates, gate operators, access-control systems, bollards, barriers, agricultural fence, or anything else it sells.

Do not write or generate copy that suggests Bru-Hart performs field labor, installation services, contractor work, maintenance services, or turnkey installation.

## Required Language

Use this framing when field work or installation context matters:

- Bru-Hart supplies materials and components.
- Bru-Hart provides technical support, product guidance, sourcing help, documentation support, RFQ guidance, and clear expert advice.
- Bru-Hart can recommend experienced installers when a project needs field labor.
- Installation is handled by the customer, contractor, or a separate installer.
- Bru-Hart can help customers and installers choose the right products before work starts and troubleshoot product-fit questions after purchase.

## Forbidden Language

Do not use these claims for Bru-Hart:

- "we install"
- "Bru-Hart installs"
- "installation services"
- "our installers"
- "our installation team"
- "installed by Bru-Hart"
- "full-service fence company"
- "turnkey installation"
- "turnkey solution"
- "end-to-end perimeter/security solution"
- "design and install"
- "maintenance services" unless clearly limited to product support, replacement parts, or technical guidance

## Safe Alternatives

| Avoid | Use Instead |
| --- | --- |
| Installation services | Technical support and installer recommendations |
| We install gates/fences | We supply gate/fence materials and components |
| Turnkey solution | Complete material package or product package |
| Our installers | Your installer, your contractor, or a recommended installer |
| End-to-end security solution | Product selection, sourcing, documentation, and technical support |
| Maintenance services | Replacement-part guidance, troubleshooting support, or product support |

## Verification

Before committing content or template changes, run:

```bash
npm run content:guardrails
```

Before pushing deployable changes, run:

```bash
npm run build
```

The build includes rendered HTML guardrails so Sanity or generated page content cannot reintroduce installation-service language.
