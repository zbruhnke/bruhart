# Bru-Hart Content System Architecture

Date: April 26, 2026

Purpose: answer whether Bru-Hart's eventual SEO content, posts, reviews, case studies, product pages, and proof assets should all live in Sanity, or whether the site will outgrow Sanity as the content footprint approaches several hundred pages.

## Short Answer

Bru-Hart should not outgrow Sanity. Bru-Hart will outgrow unstructured Sanity.

The right model is hybrid:

| Layer | Best Home | Why |
| --- | --- | --- |
| Page templates, routing, sitemap logic, SEO guardrails | Code / Git | These need review, tests, version control, and repeatable structure. |
| Tier 1 SEO page records once the schema is proven | Sanity, with strict fields | Dana/team can update proof, downloads, FAQs, and availability without code edits. |
| Product truth matrices | Sanity structured documents or versioned CSV/JSON import | The business needs to update stocked/sourced/special-order status without rewriting pages. |
| Photos, PDFs, spec sheets, drawings | Sanity asset library | Media needs metadata, approval status, and page mapping. |
| Testimonials, reviews, case studies | Sanity structured content | These are editorial/proof assets that should be reused across many URLs. |
| Programmatic page families | Code-generated from structured data | 300 pages need consistency, internal linking, and quality gates. |
| Blog-style posts / owner field notes | Sanity, if structured by topic and proof status | Useful only if they support product, local, or expert-sourcing clusters. |
| Tier 1 content packets | Code first, then Sanity workflow later | The page-by-page asset checklist needs to be reviewed, tested, and used with Dana before turning it into CMS workflow. |

The mistake would be putting 300 hand-written loose pages into Sanity as rich-text blobs. That would create inconsistent titles, weak internal links, duplicated claims, broken proof status, and slow editorial cleanup.

## Why This Matters For SEO

The competitors Bru-Hart is trying to threaten have structural advantages:

| Competitor Type | Their Advantage | Bru-Hart Counter |
| --- | --- | --- |
| Master Halco / Fence Supply Group | Large category footprint, branch/location scale, downloads, product subpages, manufacturer/category breadth. | Match the useful structure, then add visible expert judgment, RFQ checklists, choose/avoid guidance, photos, and hard-problem stories. |
| Binford / Stephens | Strong wholesale category pages, pipe/tube language, contractor-friendly product lists, local/yard credibility. | Build better per-URL utility with exact sourcing questions, import/domestic guidance, special-order paths, and Dana-level field judgment. |
| TYMETAL / Delta / high-security manufacturers | Product-specific crash-rated pages with ratings, drawings, photos, downloads, and documentation CTAs. | Do not pretend to be the manufacturer. Build the distributor/expert-sourcing page that helps buyers choose the right product path and request the right documentation. |
| Local North Florida fence competitors | Local service relevance, agricultural/farm fence language, photos, neighborhood trust. | Build Branford/North Florida pages with real agricultural product support, local photos, and neighbor/council-facing proof. |

Bru-Hart's advantage is not just "more pages." The advantage is that each important page can become a small sales tool: decision matrix, RFQ checklist, availability truth, photos, downloads, proof, and internal links.

## Recommended Content Model

### 1. `seoPage`

Use for product, industry, resource, service-area, manufacturer, and about/proof pages.

| Field | Purpose |
| --- | --- |
| `title`, `metaDescription`, `slug`, `category` | SEO basics and routing. |
| `primaryIntent` | Commercial, local, informational, specification, manufacturer support, expert sourcing. |
| `buyerType` | Contractor, fabricator, landowner, facility, engineer, security team, local buyer. |
| `hero`, `intro`, `sections`, `faqs` | Structured copy blocks. |
| `decisionMatrix[]` | Choose/avoid guidance that shows expertise. |
| `rfqChecklist[]` | Inputs needed before quoting. |
| `availabilityNotes[]` | Stocked/sourced/special-order/quote-only and lead-time truth. |
| `downloads[]` | PDF/spec sheet/drawing/tool cards. |
| `proofAssets[]` | Photos, testimonials, case studies, owner notes, manufacturer docs. |
| `sourceReferences[]` | Standards, manufacturer pages, safety docs, approved spec references. |
| `relatedLinks[]` | Internal linking control. |
| `claimStatus` | Draft, internally reviewed, owner approved, manufacturer approved, legal/safety review needed. |
| `lastReviewedAt` | Prevents stale claims and stale availability language. |

### 2. `productFamily`

Use for chain link, pipe/tube, agricultural fencing, gate hardware, access control, crash-rated gates, barriers, BH Track, CNC trucks, and similar categories.

| Field | Purpose |
| --- | --- |
| `familyName` | Product family label. |
| `stockStatus` | Stocked, sourced, special-order, quote-only, not currently supported. |
| `manufacturerOptions[]` | Approved brands and relationship language. |
| `originNotes` | Domestic/imported/either/unknown/requirement-specific. |
| `rightFit` | When this product is a good answer. |
| `avoidWhen` | When Bru-Hart should steer the buyer away. |
| `rfqInputs[]` | Measurements/photos/docs needed. |
| `downloadAssets[]` | Spec sheets, drawings, checklists, sell sheets. |
| `proofAssets[]` | Product photos, customer stories, case studies. |

### 3. `manufacturer`

Use for brands Bru-Hart can safely discuss.

| Field | Purpose |
| --- | --- |
| `name`, `slug`, `logoPermission` | Controls brand display. |
| `publicCarryStatus` | Can say publicly, cannot say publicly, needs approval. |
| `supportedProductLines[]` | Specific product lines/categories Bru-Hart supports. |
| `stockStatus` | Stocked, sourced, special-order, quote-only. |
| `relationshipLanguage` | Approved wording only. |
| `forbiddenLanguage` | Avoid unauthorized dealer/representative claims. |
| `manufacturerDocs[]` | Approved links/PDFs/specs. |

### 4. `proofAsset`

Use for reusable proof across many pages.

| Field | Purpose |
| --- | --- |
| `assetType` | Photo, testimonial, case study, owner note, manufacturer doc, drawing, PDF, video. |
| `approvedForUse` | Yes/no/needs approval. |
| `pages[]` | Where this asset should appear. |
| `customerNamePolicy` | Public, anonymized, internal-only. |
| `caption` | SEO-safe caption/context. |
| `claimBoundaries` | What the asset proves and what it does not prove. |

### 5. `caseStudy`

Use for project and problem-solution proof.

| Field | Purpose |
| --- | --- |
| `problem` | What was hard, failing, missing, or risky. |
| `buyerType` | Contractor, fabricator, landowner, facility, distributor, manufacturer, local buyer. |
| `bruHartRole` | Supplied, sourced, advised, fabricated, coordinated, value engineered. |
| `productMix[]` | Products involved. |
| `outcome` | Practical result, not invented metrics. |
| `publicStatus` | Public, anonymized, private/internal. |
| `relatedPages[]` | Internal links to strengthen product/category pages. |

## What Should Stay In Code For Now

Keep these in code until the schema is proven:

| Content | Reason |
| --- | --- |
| Page templates | We need consistent Tier 1 modules across hundreds of pages. |
| Generated sitemap/page architecture | Easier to test, count, review, and branch. |
| SEO guardrails | Prevents old or unsafe language from reappearing. |
| URL families and internal-link logic | Must stay consistent while the footprint grows quickly. |
| Claim normalization | Critical for "crash rated" vs "crash tested" and manufacturer/dealer language. |

This is why the current implementation uses structured content records and page templates first. Once the fields prove themselves, those same fields can become Sanity schemas.

## What Should Move Into Sanity

Move these to Sanity as soon as the business starts collecting them:

| Content | Why Sanity Is The Right Place |
| --- | --- |
| Product photos | Needs approval, captions, alt text, and page mapping. |
| Spec sheets and PDFs | Needs asset management and versioning by product/manufacturer. |
| Testimonials | Needs permission, source, customer name policy, and reusable placement. |
| Case studies | Needs workflow and approval. |
| Owner notes | Dana/team should be able to add raw judgment without code edits. |
| Product availability | Needs operational updates more often than page templates. |
| Manufacturer support language | Needs approval status and relationship boundaries. |

## Workflow Recommendation

| Phase | Timing | Work |
| --- | --- | --- |
| Phase 1 | Now | Keep page architecture and Tier 1 modules in code. Add placeholder cards for exact photos, PDFs, specs, proof, and owner notes. |
| Phase 2 | Next 30 days | Create Sanity schemas for proof assets, downloads, testimonials, case studies, product families, and manufacturer relationship rules. |
| Phase 3 | 30-60 days | Wire Tier 1 pages to pull proof/download/product truth from Sanity while keeping templates and routes in code. |
| Phase 4 | 60-90 days | Move mature page records into Sanity with strict validation, preview, approval status, and last-reviewed dates. |
| Phase 5 | Ongoing | Use Search Console, inquiries, and sales feedback to decide whether to expand, merge, prune, or deepen pages. |

## Governance Rules

1. Do not publish invented testimonials, fake review counts, unapproved manufacturer relationship language, or unsupported ratings.
2. Say "crash rated" only where accurate. Do not say "crash tested" unless exact product-level physical test documentation supports that exact claim.
3. Every Tier 1 page needs a decision matrix, RFQ checklist, downloads/spec placeholders, proof placeholders, availability notes, and internal links.
4. Every manufacturer page needs public-carry status, logo permission, supported product lines, stock/sourcing status, and forbidden language.
5. Every local page needs real local proof or a clear reason to exist. Do not scale thin city pages.
6. Every proof asset needs approval status and a page mapping before it is reused.
7. Every page should have a `lastReviewedAt` date once it is managed in Sanity.

## Bottom Line

Sanity can support a 300-page Bru-Hart content operation if the content is structured. It should become the operating system for proof, photos, PDFs, testimonials, product truth, and owner expertise. It should not become a drawer full of loose rich-text pages.

The site is now moving in the right direction: code controls the SEO architecture and page quality modules, while the future Sanity model should control the real-world assets that make those pages impossible for large distributors to copy.
