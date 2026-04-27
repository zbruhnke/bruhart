# Bru-Hart Content Language Guardrails

Date: April 26, 2026

Purpose: make Bru-Hart's supply-only business model explicit for human writers, AI agents, Sanity editors, SEO content generation, and code review.

## Core Rule

Bru-Hart does not install anything it sells.

Bru-Hart sells and supports materials, components, systems, sourcing paths, documentation, product selection, technical guidance, and expert advice. If a project needs field labor, Bru-Hart can recommend experienced installers, but installation is always handled by the customer, contractor, or a separate installer.

## Why This Matters

This is not just wording preference. It protects the business model.

| Risk | Why It Matters |
| --- | --- |
| Wrong customer expectations | A buyer may think Bru-Hart is bidding field labor when Bru-Hart is selling materials and guidance. |
| Local SEO confusion | Local fence installer language could make Google and customers classify Bru-Hart as an installer instead of a supply/materials authority. |
| Liability and scope creep | "We install" language implies responsibility for field conditions, workmanship, scheduling, permits, and site labor. |
| Brand positioning | Bru-Hart's advantage is expert product judgment, hard-to-source materials, quality components, and technical support, not competing as another fence installer. |
| AI drift | AI tools often default to home-service language. The repo needs explicit rules and automated checks to prevent that drift. |

## Approved Positioning

Use these phrases freely:

| Concept | Approved Language |
| --- | --- |
| Business model | Materials and components supplier; wholesale fence and gate distributor; product sourcing partner. |
| Expertise | Technical support; product guidance; expert advice; RFQ guidance; documentation support; application-fit review. |
| Field work | Customer-led work; contractor-led work; installer-led work; separate installer; experienced installer recommendation. |
| Project support | Help choosing the right materials; help coordinating product requirements; help avoiding wrong-fit products. |
| After-sale help | Troubleshooting support; replacement-part guidance; documentation support; product-fit support. |

## Forbidden Positioning

Do not use these phrases for Bru-Hart unless the copy is explicitly saying Bru-Hart does **not** do them:

| Forbidden Claim | Why It Fails |
| --- | --- |
| We install fences/gates/barriers/operators | Directly false. |
| Bru-Hart installation services | Implies field labor offering. |
| Our installers / our installation team | Implies Bru-Hart employs or dispatches installers. |
| Installed by Bru-Hart | Directly false. |
| Full-service fence company | Usually means sales plus installation. |
| Turnkey installation | Implies Bru-Hart handles the whole installed outcome. |
| Turnkey solution | Too easily reads as installed project delivery. |
| End-to-end perimeter/security solution | Too broad; implies design, install, and lifecycle service. |
| We design and install | Directly false. |
| Maintenance services | Implies field service unless narrowed to parts, troubleshooting, or product support. |

## Safe Rewrite Patterns

| If AI Writes | Rewrite To |
| --- | --- |
| Bru-Hart installs agricultural fencing across North Florida. | Bru-Hart supplies agricultural fence materials across North Florida and can recommend experienced installers when field labor is needed. |
| We provide turnkey gate installation. | We supply gate materials, components, documentation support, and technical guidance for customer- or installer-led projects. |
| Our installers handle the full project. | Your contractor or installer handles field work; Bru-Hart helps with product selection, sourcing, and technical support. |
| Contact us for fence installation services. | Contact us for fence materials, components, product guidance, and installer recommendations. |
| We maintain your gate system. | We can help with troubleshooting, replacement parts, and product-support questions. |

## Allowed Mentions Of Installation

The word "installation" is not banned. It is often necessary for technical accuracy. The rule is about who performs the work.

Safe examples:

- Installation is handled by the customer, contractor, or a separate installer.
- Confirm manufacturer installation requirements before ordering.
- Bru-Hart can help your installer understand product fit, documentation, and component requirements.
- Send site photos so Bru-Hart can help identify the right materials before your installer starts work.

Unsafe examples:

- Bru-Hart installation services.
- Our installation team will complete the project.
- We install agricultural fencing in Branford, Florida.
- Bru-Hart handles installation and maintenance.

## AI Prompt Block

Use this block in prompts for SEO, page generation, Sanity content drafting, or agent work:

```text
Critical Bru-Hart business-model rule: Bru-Hart does not install fences, gates, operators, barriers, access-control systems, agricultural fence, or anything else it sells. Never write copy that implies Bru-Hart performs installation, field labor, contractor services, or maintenance services. Position Bru-Hart as a materials/components supplier and technical expert that provides product guidance, sourcing help, RFQ support, documentation support, troubleshooting guidance, and experienced installer recommendations. If installation is mentioned, make it clear that installation is handled by the customer, contractor, or a separate installer.
```

## Review Checklist

Before publishing, confirm:

1. The page does not imply Bru-Hart performs installation labor.
2. CTAs ask for quotes, product guidance, sourcing help, technical support, or installer recommendations, not installation services.
3. Case studies identify Bru-Hart's role as supplier, sourcer, fabricator, advisor, or technical support, not installer.
4. Local pages target materials and product support, not fence installation jobs.
5. Manufacturer/spec language separates product documentation from field installation responsibility.
6. The build passes `npm run content:guardrails` and `npm run build`.
