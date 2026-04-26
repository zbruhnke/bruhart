export type PacketAskGroup = {
  label: string;
  purpose: string;
  items: string[];
};

export type CompetitorExample = {
  label: string;
  href: string;
  searchLanes: string[];
  whyItWorks: string;
  bruhartResponse: string;
};

export type Tier1ContentPacket = {
  priority: number;
  title: string;
  path: string;
  pageType: string;
  primaryGoal: string;
  whyItMatters: string;
  competitorContext: string;
  competitorExamples: CompetitorExample[];
  shortTermImpact: string;
  longTermMoat: string;
  askGroups: PacketAskGroup[];
  danaQuestions: string[];
  firstSprint: string[];
};

export const tier1ContentPackets: Tier1ContentPacket[] = [
  {
    priority: 1,
    title: 'Expert Sourcing',
    path: '/expert-sourcing',
    pageType: 'Positioning / Sales Intake',
    primaryGoal: 'Make Bru-Hart the first call when a fence or gate job cannot be solved by a commodity quote.',
    whyItMatters:
      'This page turns Dana\'s reputation into a clear sales position: Bru-Hart helps buyers avoid wrong products, incomplete packages, sourcing dead ends, and expensive assumptions.',
    competitorContext:
      'Master Halco, Binford, Stephens, and Fence Supply Group have scale. Bru-Hart needs this page to show the expert judgment those larger distributor pages often do not surface.',
    competitorExamples: [
      {
        label: 'Master Halco Product Architecture',
        href: 'https://www.masterhalco.com/chainlink/product-information',
        searchLanes: ['wholesale fence distributor', 'chain link fence supplies', 'fence product information'],
        whyItWorks:
          'The page is part of a deep category system with product navigation, downloads, specifications, warranties, drawings, and application education.',
        bruhartResponse:
          'Match the usefulness of the category system, then add expert sourcing, choose/avoid guidance, and hard-problem intake that a large catalog page does not show.',
      },
      {
        label: 'Fence Supply Group Locations / Network',
        href: 'https://fencingsupplygroup.com/locations-map/',
        searchLanes: ['fence supply near me', 'fence supply locations', 'wholesale fence supply'],
        whyItWorks:
          'The network signals scale, local access, and multiple supply points, which helps buyers believe they can get material quickly.',
        bruhartResponse:
          'Do not pretend Bru-Hart has their footprint. Use national sourcing plus Dana-level problem solving, then build local North Florida proof where local trust matters.',
      },
    ],
    shortTermImpact: 'Gives sales a page to send hard inquiries immediately and improves conversion quality.',
    longTermMoat: 'Creates the central proof hub for the expertise competitors cannot copy quickly.',
    askGroups: [
      {
        label: 'Photos',
        purpose: 'Show real product range and hard-sourcing credibility.',
        items: [
          'Unusual gate hardware, latches, hinges, trucks, rollers, guides, operators, and replacement parts.',
          'BH Track, CNC trucks, pipe/tube, manufacturer packaging, and specialty items on shelves or in the yard.',
          'Before/after or problem photos from hard-to-source jobs, approved for public or anonymized use.',
        ],
      },
      {
        label: 'PDFs / Tools',
        purpose: 'Give buyers a concrete way to send better quote requests.',
        items: [
          'Hard-to-Source Product Intake Sheet.',
          'Complex Gate Package RFQ Checklist.',
          'Value Engineering Without Cheap Substitutions guide.',
        ],
      },
      {
        label: 'Testimonials',
        purpose: 'Make the known reputation visible to new buyers.',
        items: [
          'Five contractor or fabricator quotes about Dana/Bru-Hart solving hard product questions.',
          'Two manufacturer or partner comments if approved.',
          'Two local buyer comments once the agricultural supply push starts.',
        ],
      },
      {
        label: 'Dana Notes',
        purpose: 'Capture the judgment that makes the page hard to copy.',
        items: [
          'Top 10 product mistakes buyers make.',
          'Top 10 calls where a normal price sheet is not enough.',
          'When imported product is the best answer and when domestic material matters.',
        ],
      },
      {
        label: 'Case Studies',
        purpose: 'Turn private expertise into public proof without naming sensitive parties.',
        items: [
          'Three anonymized hard-problem stories.',
          'One story where Bru-Hart found a product others could not source.',
          'One story where better advice prevented a callback or wrong purchase.',
        ],
      },
    ],
    danaQuestions: [
      'What kind of call makes you think, "most suppliers will get this wrong"?',
      'What product categories should Bru-Hart be known for finding when others cannot?',
      'What is the safest public way to describe competitors or large distributors calling when a job gets difficult?',
    ],
    firstSprint: [
      'Record a 20-minute expert-sourcing interview.',
      'Collect 15 photos of hard-to-source products or unusual components.',
      'Draft the Hard-to-Source Product Intake Sheet.',
    ],
  },
  {
    priority: 2,
    title: 'Crash Rated Gates',
    path: '/products/crash-rated-gates',
    pageType: 'National Product / Spec Support',
    primaryGoal: 'Rank for high-intent crash-rated gate searches while keeping claim language accurate.',
    whyItMatters:
      'This is a high-value national RFQ lane where buyers need rating language, documentation, gate type selection, access control, and field-fit help before pricing.',
    competitorContext:
      'TYMETAL, Delta Scientific, FDC, Sloan, Ameristar, and large distributors show product/rating depth. Bru-Hart should win as the expert selection and sourcing layer.',
    competitorExamples: [
      {
        label: 'TYMETAL TCG-12 Crash Rated Cantilever Slide Gate',
        href: 'https://www.tymetal.com/commercial-crash-rated-barriers/crash-gates/tcg-12-cantilever-slide-gate-u-s-dos-k12/',
        searchLanes: ['crash rated gates', 'K12 crash rated gate', 'ASTM F2656 gate'],
        whyItWorks:
          'It gives a specific product, rating language, clear-opening notes, photos, downloadable brochure/CAD/PDF resources, and feature details.',
        bruhartResponse:
          'Bru-Hart should not copy manufacturer claims. It should become the expert selection layer: what rating language means, what to send before quoting, and when a gate is or is not the right barrier.',
      },
      {
        label: 'FDC Crash-Rated Gates',
        href: 'https://www.fdc.com/crash-rated-gates/',
        searchLanes: ['crash rated gates', 'anti ram gates', 'gate crash rating'],
        whyItWorks:
          'It educates buyers on rating concepts, gate types, and where crash-rated gates are used.',
        bruhartResponse:
          'Add stricter claim discipline, RFQ fields, access-control package logic, and Dana notes about bad specs and wrong assumptions.',
      },
    ],
    shortTermImpact: 'Improves trust for security RFQs and prevents unsafe crash-tested wording.',
    longTermMoat: 'Builds critical-infrastructure authority tied to exact documentation discipline.',
    askGroups: [
      {
        label: 'Photos',
        purpose: 'Show supported gate types and access-point context.',
        items: [
          'Manufacturer-approved crash-rated gate product photos.',
          'Vehicle access point examples, operators, controls, safety devices, and guard-lane context.',
          'Photos or diagrams showing slide, swing, cantilever, vertical lift, and barrier-assisted layouts.',
        ],
      },
      {
        label: 'PDFs / Specs',
        purpose: 'Match the utility buyers expect from serious high-security pages.',
        items: [
          'Crash Gate RFQ Checklist.',
          'Crash-Rating Terms Guide.',
          'Approved manufacturer drawings, brochures, spec links, and documentation request instructions.',
        ],
      },
      {
        label: 'Product Truth',
        purpose: 'Keep claims safe and useful.',
        items: [
          'Supported gate types and manufacturer paths.',
          'Exact language for crash rated vs crash tested.',
          'Ratings and documents Bru-Hart can discuss publicly.',
        ],
      },
      {
        label: 'Dana Notes',
        purpose: 'Show how a true gate expert thinks before quoting.',
        items: [
          'What details change a crash-rated gate recommendation.',
          'When a barrier is better than a gate.',
          'Common bad specifications and how to spot them early.',
        ],
      },
      {
        label: 'Case Studies',
        purpose: 'Prove Bru-Hart can guide critical-access decisions.',
        items: [
          'One anonymized story where rating, operator, or layout planning prevented a wrong quote.',
          'One example of choosing a barrier/gate package instead of forcing the gate to solve everything.',
        ],
      },
    ],
    danaQuestions: [
      'What information do you need before you will quote a crash-rated gate?',
      'Where do buyers misuse K-rating, M-rating, ASTM, or crash-tested language?',
      'When should Bru-Hart tell someone they need a barrier instead of a gate?',
    ],
    firstSprint: [
      'Finalize the claim-language guardrail.',
      'Collect approved product/spec references.',
      'Draft the Crash Gate RFQ Checklist.',
    ],
  },
  {
    priority: 3,
    title: 'Crash Rated Barriers',
    path: '/products/crash-rated-barriers',
    pageType: 'National Product / Vehicle Mitigation',
    primaryGoal: 'Help buyers choose between gates, bollards, wedges, beams, and layered vehicle mitigation.',
    whyItMatters:
      'Many secure sites should not solve every vehicle threat with a gate. This page helps Bru-Hart guide buyers into the right barrier pattern.',
    competitorContext:
      'Sloan, Delta, TYMETAL, Ameristar, and crash-barrier manufacturers show product depth. Bru-Hart can add the distributor-side decision logic buyers need before product selection.',
    competitorExamples: [
      {
        label: 'Sloan Crash Rated Barriers',
        href: 'https://www.sloansg.com/security/crash-rated-barriers',
        searchLanes: ['crash rated barriers', 'vehicle mitigation barriers', 'anti ram barriers'],
        whyItWorks:
          'It clearly frames the barrier category around security, crash protection, and physical perimeter hardening.',
        bruhartResponse:
          'Add the buyer-side decision matrix: fixed vs active, gate vs bollards, approach path, operation frequency, and RFQ inputs.',
      },
      {
        label: 'Delta Scientific Sliding Gates',
        href: 'https://deltascientific.com/high-security/sliding-gates/',
        searchLanes: ['high security sliding gates', 'anti ram sliding gate', 'crash barrier gate'],
        whyItWorks:
          'It benefits from highly specific product/category relevance in a technical security niche.',
        bruhartResponse:
          'Use Bru-Hart as the sourcing and planning guide for choosing the right barrier pattern before a buyer gets locked into a manufacturer/product type.',
      },
    ],
    shortTermImpact: 'Improves the quality of barrier and high-security RFQs.',
    longTermMoat: 'Positions Bru-Hart as a perimeter-planning resource, not only a product reseller.',
    askGroups: [
      {
        label: 'Photos',
        purpose: 'Show the difference between fixed, removable, retractable, and active protection.',
        items: [
          'Bollards, barriers, beams, wedges, service yards, protected equipment areas, and vulnerable vehicle approaches.',
          'Photos or diagrams showing where fixed barriers beat active barriers.',
          'Photos showing gate/barrier/fence transitions.',
        ],
      },
      {
        label: 'PDFs / Specs',
        purpose: 'Turn product comparison into a useful sales tool.',
        items: [
          'Barrier Selection Worksheet.',
          'Vehicle Approach RFQ Checklist.',
          'Fixed vs Active Barrier Comparison.',
        ],
      },
      {
        label: 'Dana Notes',
        purpose: 'Capture what product pages usually skip.',
        items: [
          'When fixed bollards are the right answer.',
          'When active barriers create operational problems.',
          'Where buyers overbuild or underbuild vehicle mitigation.',
        ],
      },
      {
        label: 'Case Studies',
        purpose: 'Show practical judgment around layered protection.',
        items: [
          'One story where Bru-Hart helped route a buyer away from the wrong barrier type.',
          'One story where a gate plus barrier package was the correct answer.',
        ],
      },
    ],
    danaQuestions: [
      'What barrier choice do buyers misunderstand most often?',
      'When should an opening use a fixed barrier line instead of an active system?',
      'What photos or drawings make the right barrier obvious?',
    ],
    firstSprint: [
      'Draft fixed vs active barrier comparison.',
      'Collect 10 vehicle mitigation photos or manufacturer-approved examples.',
      'Create the Vehicle Approach RFQ Checklist.',
    ],
  },
  {
    priority: 4,
    title: 'Data Center Security Gates',
    path: '/industries/data-center-security-gates',
    pageType: 'National Industry / Critical Infrastructure',
    primaryGoal: 'Own a high-value industry lane by connecting access points, uptime, vehicle mitigation, and perimeter security.',
    whyItMatters:
      'Data center buyers care about uptime, service access, vendor flow, generator yards, vehicle approaches, and documented security products.',
    competitorContext:
      'TYMETAL and high-security manufacturers show data-center and crash-gate products. Bru-Hart should show how to assemble the whole access-zone conversation.',
    competitorExamples: [
      {
        label: 'TYMETAL Data Center Security Gates',
        href: 'https://www.tymetal.com/market/data-centers/',
        searchLanes: ['data center security gates', 'data center perimeter security', 'security gates for data centers'],
        whyItWorks:
          'It maps data centers to security gates, barriers, fencing, operators, spec support, and a direct expert CTA.',
        bruhartResponse:
          'Bru-Hart should build the access-zone view: entrances, service yards, generator yards, loading areas, vendor flow, controls, and documentation needs.',
      },
      {
        label: 'Ameristar High Security Fence',
        href: 'https://www.ameristarperimeter.com/us/en/products/high-security-fence',
        searchLanes: ['high security fence', 'anti climb fence', 'data center perimeter fence'],
        whyItWorks:
          'It has product credibility, security-category depth, and recognizable perimeter-security positioning.',
        bruhartResponse:
          'Connect fence, gate, barrier, operator, and access-control selection in one RFQ path instead of acting like a single-product manufacturer.',
      },
    ],
    shortTermImpact: 'Makes Bru-Hart more credible for national critical-infrastructure RFQs.',
    longTermMoat: 'Creates an industry hub that can support subpages for generator yards, service gates, loading zones, and access control.',
    askGroups: [
      {
        label: 'Photos / Diagrams',
        purpose: 'Show the access-zone logic, not just individual products.',
        items: [
          'Diagram of main entrance, visitor lane, service gate, loading area, generator yard, and perimeter road.',
          'Approved product photos for gates, barriers, fencing, operators, and access-control devices.',
          'Anonymized site-zone examples if public project photos are not allowed.',
        ],
      },
      {
        label: 'PDFs / Tools',
        purpose: 'Make the industry page actionable for facility and contractor RFQs.',
        items: [
          'Data Center Perimeter RFQ Checklist.',
          'Access Zone Planning Worksheet.',
          'Gate/Barrier/Access-Control package worksheet.',
        ],
      },
      {
        label: 'Dana Notes',
        purpose: 'Explain what matters operationally.',
        items: [
          'Which access points data centers forget to harden.',
          'How service/vendor/emergency access changes gate selection.',
          'When uptime concerns should change operator, backup, or manual-release choices.',
        ],
      },
      {
        label: 'Case Studies',
        purpose: 'Prove critical-infrastructure judgment without exposing sensitive sites.',
        items: [
          'One anonymized critical-infrastructure access-point story.',
          'One story about avoiding a weak service-yard or generator-yard opening.',
        ],
      },
    ],
    danaQuestions: [
      'What is different about a data center gate compared with a normal commercial gate?',
      'Which zones should we ask about before quoting?',
      'What language is safe if a project is sensitive or confidential?',
    ],
    firstSprint: [
      'Sketch the access-zone diagram.',
      'Draft the Data Center Perimeter RFQ Checklist.',
      'Collect approved product photos for the page.',
    ],
  },
  {
    priority: 5,
    title: 'BH Track',
    path: '/custom-fabrication/enclosed-aluminum-gate-track',
    pageType: 'Custom Fabrication / Signature Product',
    primaryGoal: 'Make enclosed aluminum gate track a searchable Bru-Hart differentiator.',
    whyItMatters:
      'BH Track gives Bru-Hart something stronger than a commodity catalog page: a component story tied to smoother gates, fewer callbacks, and fabricator trust.',
    competitorContext:
      'Ametco, HI-MOTIONS, CantileverGateParts, and generic component sellers show gate hardware and design resources. Bru-Hart should be more practical and fabricator-focused.',
    competitorExamples: [
      {
        label: 'Ametco Cantilever Gates',
        href: 'https://www.ametco.com/products/gates/gate-systems/cantilever-gates/',
        searchLanes: ['cantilever gates', 'cantilever gate systems', 'commercial cantilever gates'],
        whyItWorks:
          'It presents a specific gate system with product imagery, system context, and enough detail for buyers comparing options.',
        bruhartResponse:
          'Make BH Track more component-specific and fabricator-specific: dimensions, drawings, pairing rules, product photos, and failure/callback prevention.',
      },
      {
        label: 'CantileverGateParts Design Guide',
        href: 'https://cantilevergateparts.com/store/resources/resources-hub/cantilever-track-gate-design.html',
        searchLanes: ['cantilever gate track', 'cantilever gate design', 'cantilever gate parts'],
        whyItWorks:
          'It wins by teaching buyers how the system works, not just listing parts.',
        bruhartResponse:
          'Build a better fabricator guide around BH Track: when to use it, what to measure, what to avoid, and how to pair it with Bru-Hart trucks.',
      },
    ],
    shortTermImpact: 'Creates a sales page for fabricators and contractors who care about gate performance.',
    longTermMoat: 'Builds a proprietary product lane that large distributors cannot easily copy.',
    askGroups: [
      {
        label: 'Photos',
        purpose: 'Show that BH Track is real and useful.',
        items: [
          'Track profile close-ups.',
          'Cut lengths, packaging, yard inventory, and installed examples.',
          'Side-by-side comparison with common alternatives if approved.',
        ],
      },
      {
        label: 'PDFs / Specs',
        purpose: 'Give fabricators the information they need to quote and build.',
        items: [
          'BH Track Sell Sheet.',
          'BH Track Shop Drawing.',
          'Approved CAD/PDF drawing.',
          'Track & Truck Pairing Guide.',
        ],
      },
      {
        label: 'Product Truth',
        purpose: 'Prevent vague product claims.',
        items: [
          'Dimensions, custom length rules, order inputs, finish notes, packaging, shipping, and truck compatibility.',
          'When BH Track is the right fit.',
          'When BH Track should not be recommended.',
        ],
      },
      {
        label: 'Testimonials',
        purpose: 'Show fabricator trust.',
        items: [
          'One fabricator quote about smoother operation or fewer callbacks.',
          'One contractor/customer quote about finished gate feel.',
        ],
      },
      {
        label: 'Case Studies',
        purpose: 'Connect the component to field outcomes.',
        items: [
          'One before/after gate-operation story.',
          'One repeatable commercial build story.',
        ],
      },
    ],
    danaQuestions: [
      'What makes BH Track better than the generic alternative?',
      'What details do you need before saying it is the right fit?',
      'What failure does good track prevent?',
    ],
    firstSprint: [
      'Shoot 12 BH Track product photos.',
      'Create the first sell-sheet outline.',
      'List exact dimensions and order inputs approved for public use.',
    ],
  },
  {
    priority: 6,
    title: 'CNC-Milled Gate Trucks',
    path: '/custom-fabrication/cnc-milled-gate-trucks',
    pageType: 'Custom Fabrication / Component',
    primaryGoal: 'Show why gate trucks, track compatibility, and rolling performance matter to fabricators.',
    whyItMatters:
      'This page turns a small component into an expert page about smooth operation, alignment, load, operator strain, and fewer callbacks.',
    competitorContext:
      'Generic gate hardware pages list parts. Bru-Hart should explain the moving system and how to quote replacements correctly.',
    competitorExamples: [
      {
        label: 'HI-MOTIONS Cantilever Sliding Gates',
        href: 'https://www.himotionsusa.com/category/cantilever-sliding-gates.html',
        searchLanes: ['cantilever sliding gate hardware', 'cantilever gate components', 'sliding gate trucks'],
        whyItWorks:
          'It organizes components around the sliding-gate system, which helps buyers connect parts to the larger gate assembly.',
        bruhartResponse:
          'Go deeper on diagnosis: track profile, gate weight, worn trucks, replacement measurements, operator strain, and photos needed before quoting.',
      },
      {
        label: 'CantileverGateParts Design Guide',
        href: 'https://cantilevergateparts.com/store/resources/resources-hub/cantilever-track-gate-design.html',
        searchLanes: ['cantilever gate rollers', 'cantilever gate track', 'cantilever gate design'],
        whyItWorks:
          'It captures component search intent by explaining design variables and system behavior.',
        bruhartResponse:
          'Use Dana-level replacement guidance and real product photos to make Bru-Hart more useful than a parts catalog.',
      },
    ],
    shortTermImpact: 'Helps fabricators and repair teams request the right truck/track package.',
    longTermMoat: 'Builds technical credibility around gate motion and custom components.',
    askGroups: [
      {
        label: 'Photos',
        purpose: 'Show the trucks as precision components.',
        items: [
          'Truck assemblies from multiple angles.',
          'Installed trucks paired with BH Track.',
          'Old failed trucks, wear patterns, alignment issues, and packaging.',
        ],
      },
      {
        label: 'PDFs / Specs',
        purpose: 'Make replacement and new-build quoting easier.',
        items: [
          'CNC Gate Truck Sell Sheet.',
          'Replacement Truck Measurement Guide.',
          'BH Track + Truck Package Sheet.',
        ],
      },
      {
        label: 'Product Truth',
        purpose: 'Avoid compatibility mistakes.',
        items: [
          'Compatibility rules.',
          'Measurements needed for replacements.',
          'Load/application guidance if approved.',
          'When generic trucks are acceptable and when they are risky.',
        ],
      },
      {
        label: 'Testimonials',
        purpose: 'Prove fabricator value.',
        items: [
          'One gate builder quote about fit or rolling behavior.',
          'One maintenance/repair quote about replacement diagnosis.',
        ],
      },
      {
        label: 'Case Studies',
        purpose: 'Show diagnosis skill.',
        items: [
          'One story where Bru-Hart identified the truck/track problem from photos or measurements.',
          'One story where better hardware reduced troubleshooting.',
        ],
      },
    ],
    danaQuestions: [
      'What measurements matter before quoting gate trucks?',
      'What symptoms tell you the truck/track system is wrong?',
      'When would you refuse to recommend a truck without more information?',
    ],
    firstSprint: [
      'Shoot product photos and installed examples.',
      'Draft replacement measurement guide.',
      'List public compatibility rules.',
    ],
  },
  {
    priority: 7,
    title: 'Chain Link Fence Supplies',
    path: '/products/chain-link-fence-supplies',
    pageType: 'National + Local Product Category',
    primaryGoal: 'Turn a commodity category into a package-guidance page that can compete with major distributors.',
    whyItMatters:
      'Chain link has broad search demand, but Bru-Hart should not win by price alone. The page should help buyers get fabric, framework, gates, fittings, coatings, and repair parts right.',
    competitorContext:
      'Master Halco has strong chain link pages with specs, brochures, warranties, drawings, mesh/gauge education, and coating information. Bru-Hart must match utility and add expert package guidance.',
    competitorExamples: [
      {
        label: 'Master Halco Chain Link Product Information',
        href: 'https://www.masterhalco.com/chainlink/product-information',
        searchLanes: ['chain link fence supplies', 'chain link fence fabric', 'chain link fence specification'],
        whyItWorks:
          'It has brochures, specs, warranty, drawings, mesh/gauge information, coating education, privacy slat details, and product images.',
        bruhartResponse:
          'Match the buyer utility with checklists and tables, then add package-level advice: what buyers forget, Florida coating concerns, gate openings, and stocked/sourced truth.',
      },
      {
        label: 'Master Halco Chain Link Gates',
        href: 'https://www.masterhalco.com/chainlink/gates',
        searchLanes: ['chain link gates', 'commercial chain link gates', 'chain link gate hardware'],
        whyItWorks:
          'It separates gate types and helps buyers understand pedestrian, drive, rolling, slide, cantilever, and specialty gate options.',
        bruhartResponse:
          'Tie chain link gate choices to opening width, hardware, posts, operator readiness, repair parts, and when a stronger commercial/security gate is needed.',
      },
    ],
    shortTermImpact: 'Improves a high-volume category and gives local/commercial buyers a practical quote path.',
    longTermMoat: 'Supports many subpages for fabric, posts, gates, fittings, privacy slats, security chain link, and local service.',
    askGroups: [
      {
        label: 'Photos',
        purpose: 'Prove real product support.',
        items: [
          'Fabric rolls, posts, rails, fittings, gates, slats, tension wire, privacy options, and repair materials.',
          'Local yard/product display photos.',
          'Close-ups of mesh, gauge, coatings, fittings, and gate hardware.',
        ],
      },
      {
        label: 'PDFs / Specs',
        purpose: 'Match major-distributor usefulness.',
        items: [
          'Chain Link Material Checklist.',
          'Mesh / Gauge / Coating Comparison.',
          'Chain Link Gate Opening Worksheet.',
        ],
      },
      {
        label: 'Product Truth',
        purpose: 'Make stocked/sourced expectations clear.',
        items: [
          'Stocked, sourced, special-order, and quote-only status for fabric, posts, rails, fittings, gates, slats, and coatings.',
          'Florida corrosion/coating guidance.',
          'Which chain link parts buyers forget most often.',
        ],
      },
      {
        label: 'Testimonials',
        purpose: 'Show contractor trust in package accuracy.',
        items: [
          'One contractor quote about Bru-Hart helping get the whole package right.',
          'One local buyer quote once product support is visible.',
        ],
      },
      {
        label: 'Case Studies',
        purpose: 'Make the category more than a material list.',
        items: [
          'One repair-material story.',
          'One commercial chain link package story.',
          'One local chain link supply story.',
        ],
      },
    ],
    danaQuestions: [
      'Where do chain link buyers most often under-spec?',
      'What should Bru-Hart stock or source first for local demand?',
      'What chain link choices matter most in North Florida?',
    ],
    firstSprint: [
      'Collect 20 chain link product photos.',
      'Draft mesh/gauge/coating table.',
      'Create stocked/sourced status for top chain link items.',
    ],
  },
  {
    priority: 8,
    title: 'Fence Pipe & Tube',
    path: '/products/fence-pipe-tube',
    pageType: 'National + Contractor Product Category',
    primaryGoal: 'Compete on pipe/tube expertise: origin, wall thickness, cut requirements, special orders, and application fit.',
    whyItMatters:
      'Pipe and tube can be a serious contractor/fabricator lane because buyers need the right OD, wall, length, finish, origin, and load fit.',
    competitorContext:
      'Binford clearly talks about import/domestic pipe and tube, cut-to-order support, Schedule 80 sourcing, and special orders. Bru-Hart should match clarity and add deeper decision support.',
    competitorExamples: [
      {
        label: 'Binford Pipe / Tube',
        href: 'https://binfordsupply.com/our-products/pipe-tube/',
        searchLanes: ['fence pipe and tube', 'galvanized fence pipe', 'gate frame tubing'],
        whyItWorks:
          'It is short but direct: import/domestic, galvanized/color options, cut-to-order support, Schedule 80 sourcing, and special orders.',
        bruhartResponse:
          'Keep the clarity but add decision depth: OD, wall, schedule, origin, finish, cut lengths, application fit, and when an imported product is still the best answer.',
      },
      {
        label: 'Stephens Pipe & Steel Pipe Products',
        href: 'https://www.spsfence.com/products/pipe/',
        searchLanes: ['fence pipe', 'steel fence pipe', 'pipe and tube fence supply'],
        whyItWorks:
          'It benefits from product-category focus and the credibility of a known fence pipe supplier.',
        bruhartResponse:
          'Compete with a practical RFQ path and special-order guidance instead of trying to look like a pipe mill or commodity warehouse.',
      },
    ],
    shortTermImpact: 'Creates a practical RFQ path for contractors and fabricators.',
    longTermMoat: 'Builds authority in nonstandard and special-order material where expert sourcing can win.',
    askGroups: [
      {
        label: 'Photos',
        purpose: 'Show real material depth.',
        items: [
          'Pipe bundles, tube, galvanized pipe, color pipe, cut lengths, gate-frame tubing, and special-order examples.',
          'Photos that show OD/wall/length differences if possible.',
          'Import/domestic packaging or markings if approved.',
        ],
      },
      {
        label: 'PDFs / Specs',
        purpose: 'Help buyers specify the right material.',
        items: [
          'Fence Pipe & Tube RFQ Sheet.',
          'Post / Rail / Gate-Frame Tube Matrix.',
          'Import vs Domestic Decision Guide.',
        ],
      },
      {
        label: 'Product Truth',
        purpose: 'Prevent wrong assumptions on origin and strength.',
        items: [
          'OD, wall thickness, schedule, length, finish, cut-to-order, domestic/imported status, and special-order paths.',
          'What Bru-Hart can stock, source, or quote-only.',
          'When imported product is the best fit and when domestic is required.',
        ],
      },
      {
        label: 'Testimonials',
        purpose: 'Prove material-sourcing credibility.',
        items: [
          'One contractor/fabricator quote about finding the right pipe or tube.',
          'One quote about cut length, special order, or avoiding wrong substitution.',
        ],
      },
      {
        label: 'Case Studies',
        purpose: 'Show hard-sourcing value.',
        items: [
          'One special-order pipe/tube story.',
          'One gate-frame tubing or replacement-material story.',
        ],
      },
    ],
    danaQuestions: [
      'What pipe/tube sizes and wall thicknesses should the site explain first?',
      'What should we say publicly about import vs domestic?',
      'What special-order paths are realistic?',
    ],
    firstSprint: [
      'Build the OD/wall/length matrix.',
      'Collect pipe/tube product photos.',
      'Draft import vs domestic guidance for owner review.',
    ],
  },
  {
    priority: 9,
    title: 'Agricultural Fencing',
    path: '/products/agricultural-fencing',
    pageType: 'Local Product Category / North Florida',
    primaryGoal: 'Make Bru-Hart visibly useful for local farm, ranch, homestead, livestock, and rural property buyers.',
    whyItMatters:
      'This supports the local agricultural commitment around Branford while building a real local search lane separate from national high-security work.',
    competitorContext:
      'Master Halco has an animal/use-case agricultural structure. Southern Pro, K Fence, and North River speak directly to farm fence buyers. Bru-Hart needs local product truth and real photos.',
    competitorExamples: [
      {
        label: 'Master Halco Agricultural',
        href: 'https://www.masterhalco.com/agricultural',
        searchLanes: ['agricultural fencing', 'farm fence supplies', 'livestock fencing'],
        whyItWorks:
          'It organizes agricultural fencing by animal/use case and supports the page with catalog and brochure downloads.',
        bruhartResponse:
          'Build the North Florida version: animal matrix, local product availability, gate/brace/post guidance, repair materials, and local proof.',
      },
      {
        label: 'Southern Pro Farm Fence',
        href: 'https://southernprofence.com/farm-fence/',
        searchLanes: ['farm fence Florida', 'horse fence Florida', 'agricultural fence contractor'],
        whyItWorks:
          'It speaks plainly to Florida farm-fence buyers with local installation and animal/property context.',
        bruhartResponse:
          'Use Bru-Hart product-supply expertise and local commitment language, then add real yard photos, product lists, and neighbor/customer proof.',
      },
    ],
    shortTermImpact: 'Shows council members, neighbors, and local buyers the ag offering is real.',
    longTermMoat: 'Builds a local demand engine around agricultural fence, farm gates, posts, braces, wire, and repair materials.',
    askGroups: [
      {
        label: 'Photos',
        purpose: 'Show the agricultural product mix clearly.',
        items: [
          'Field fence, woven wire, no-climb, barbed wire, high-tensile, T-posts, wood posts, braces, farm gates, latches, and repair hardware.',
          'Yard displays, bundles, product stacks, pickup/delivery readiness, and local signage.',
          'Local property/material examples where approved.',
        ],
      },
      {
        label: 'PDFs / Tools',
        purpose: 'Help local buyers request the right materials.',
        items: [
          'North Florida Farm Fence Material Checklist.',
          'Agricultural Fence Product Matrix.',
          'Animal / Use-Case Material Guide.',
        ],
      },
      {
        label: 'Product Truth',
        purpose: 'Make the local offer concrete.',
        items: [
          'Stocked, sourced, special-order, and quote-only status for wire, posts, braces, gates, hardware, and repair items.',
          'Cattle vs horse vs goat/sheep guidance.',
          'Local soil, humidity, terrain, gate width, and repairability notes.',
        ],
      },
      {
        label: 'Testimonials',
        purpose: 'Build local trust.',
        items: [
          'One local landowner quote.',
          'One local contractor or agricultural buyer quote.',
        ],
      },
      {
        label: 'Case Studies',
        purpose: 'Show local service in practice.',
        items: [
          'One agricultural material supply story.',
          'One farm gate or repair-material story.',
        ],
      },
    ],
    danaQuestions: [
      'What exact agricultural products are we prepared to support locally?',
      'What does a North Florida landowner need to know before buying fence material?',
      'Which nearby towns should we mention now and which should wait?',
    ],
    firstSprint: [
      'Collect 25 agricultural product photos.',
      'Create local stocked/sourced product list.',
      'Draft animal/use-case material matrix.',
    ],
  },
  {
    priority: 10,
    title: 'Branford Agricultural Fencing',
    path: '/service-areas/branford-fl-agricultural-fencing',
    pageType: 'Local Service / Council Commitment',
    primaryGoal: 'Make the Branford agricultural commitment specific, useful, and visible.',
    whyItMatters:
      'This page should prove Bru-Hart is serving local agricultural fence and gate needs, not just using local language for SEO.',
    competitorContext:
      'Local competitors win when they feel more present and practical. Bru-Hart needs real Branford/North Florida photos, product lists, and neighbor-facing proof.',
    competitorExamples: [
      {
        label: 'Southern Pro Farm Fence',
        href: 'https://southernprofence.com/farm-fence/',
        searchLanes: ['farm fence near me', 'agricultural fencing Florida', 'horse fence Florida'],
        whyItWorks:
          'It feels local and practical because it talks about actual farm-fence use cases instead of abstract product categories.',
        bruhartResponse:
          'Make the Branford page visibly local: local product displays, approved council-commitment language, local quote sheet, and nearby-town service reality.',
      },
      {
        label: 'K Fence Livestock & Wildlife Fencing',
        href: 'https://www.kfence.com/',
        searchLanes: ['livestock fencing Florida', 'wildlife fencing Florida', 'farm fence Florida'],
        whyItWorks:
          'It is focused around farm, livestock, and wildlife fencing needs, which matches local rural intent.',
        bruhartResponse:
          'Use Bru-Hart as the local material and expert-sourcing answer, then only expand town pages when real demand and proof justify them.',
      },
    ],
    shortTermImpact: 'Creates a page Dana can show local stakeholders and nearby buyers.',
    longTermMoat: 'Supports local trust, future reviews, and expansion into nearby towns only when demand justifies it.',
    askGroups: [
      {
        label: 'Photos',
        purpose: 'Make the local commitment visible.',
        items: [
          'Branford yard/product display photos.',
          'Local agricultural fence materials, farm gates, wire, posts, hardware, and signage.',
          'Pickup/delivery readiness and local product stacks.',
        ],
      },
      {
        label: 'PDFs / Tools',
        purpose: 'Give neighbors and local buyers a clear quote path.',
        items: [
          'Branford Agricultural Fence Quote Sheet.',
          'Local Product Availability List.',
          'Farm Gate and Repair Material Intake Sheet.',
        ],
      },
      {
        label: 'Product Truth',
        purpose: 'Tie the page to what Bru-Hart will actually provide locally.',
        items: [
          'Exact council-commitment language approved for public use.',
          'Nearby towns to mention naturally.',
          'Products Bru-Hart will truly support locally.',
        ],
      },
      {
        label: 'Testimonials',
        purpose: 'Build local trust without fake review language.',
        items: [
          'One Branford-area landowner quote.',
          'One nearby contractor or agricultural buyer quote.',
        ],
      },
      {
        label: 'Case Studies',
        purpose: 'Show local service history as it develops.',
        items: [
          'One local material supply story.',
          'One local farm gate, repair, or fence-material story.',
        ],
      },
    ],
    danaQuestions: [
      'What public wording best describes the council/local ag commitment?',
      'What products should a neighbor expect Bru-Hart to support?',
      'What proof would make this page feel unquestionably real?',
    ],
    firstSprint: [
      'Shoot Branford/local product photos.',
      'Write approved local commitment language.',
      'Build the local product availability list.',
    ],
  },
  {
    priority: 11,
    title: 'Complex Gate Package RFQ Guide',
    path: '/resources/complex-gate-package-rfq-guide',
    pageType: 'Resource / Sales Intake',
    primaryGoal: 'Train buyers to send the details Bru-Hart needs before quoting gates, operators, hardware, safety devices, and access control.',
    whyItMatters:
      'This page improves sales efficiency and demonstrates expertise by showing all the details a price-sheet quote misses.',
    competitorContext:
      'Master Halco and operator/manufacturer pages cover access-control categories. Bru-Hart can beat them by making the complete RFQ process clearer.',
    competitorExamples: [
      {
        label: 'Master Halco Commercial Slide Operators',
        href: 'https://www.masterhalco.com/access-controls/commercial-slide',
        searchLanes: ['commercial slide gate operator', 'gate operator selection', 'commercial gate access control'],
        whyItWorks:
          'It lists operator types, duty levels, gate widths/weights, accessories, battery backup, solar, safety, and commercial use cases.',
        bruhartResponse:
          'Make the Bru-Hart resource stronger as an intake tool: opening, weight, cycle count, operator, controls, safety devices, photos, and missing details before pricing.',
      },
      {
        label: 'LiftMaster Safety / UL 325',
        href: 'https://www.liftmaster.com/about-liftmaster/safety',
        searchLanes: ['UL 325 gate operator safety', 'gate safety devices', 'automatic gate safety'],
        whyItWorks:
          'It anchors automated-gate decisions in safety standards and buyer education.',
        bruhartResponse:
          'Use safety/device education as part of the RFQ checklist so buyers understand why loops, photo eyes, edges, pedestrians, and fail modes are not optional afterthoughts.',
      },
    ],
    shortTermImpact: 'Improves inquiry quality and gives sales a repeatable intake tool.',
    longTermMoat: 'Turns Dana\'s field judgment into a scalable sales and SEO asset.',
    askGroups: [
      {
        label: 'Photos / Diagrams',
        purpose: 'Show what makes a gate package complete.',
        items: [
          'Annotated gate package diagram.',
          'Operator, loop, photo eye, edge, hinge, latch, truck, track, guide, and control photos.',
          'Failed gate and worn component photos where approved.',
        ],
      },
      {
        label: 'PDFs / Tools',
        purpose: 'Make the page directly useful in sales.',
        items: [
          'Complex Gate Package RFQ Checklist.',
          'Gate Safety Device Checklist.',
          'Gate Problem Photo Guide.',
        ],
      },
      {
        label: 'Dana Notes',
        purpose: 'Show what a buyer usually forgets.',
        items: [
          'Top gate RFQ details buyers forget.',
          'Wrong operator examples.',
          'Hardware mistakes, safety device misses, and the photos that solve the problem fastest.',
        ],
      },
      {
        label: 'Case Studies',
        purpose: 'Prove the value of complete package thinking.',
        items: [
          'One hard gate problem story.',
          'One story about catching a wrong operator, weak hardware, missing safety device, or incompatible component path.',
        ],
      },
    ],
    danaQuestions: [
      'What are the first five questions you ask before quoting a gate package?',
      'What does a buyer forget that creates the most expensive mistake?',
      'What photos should every gate buyer send?',
    ],
    firstSprint: [
      'Draft the main RFQ checklist.',
      'Sketch the annotated gate diagram.',
      'Record Dana explaining the top five missing RFQ details.',
    ],
  },
];

export const tier1PacketTotals = tier1ContentPackets.reduce(
  (totals, packet) => ({
    pages: totals.pages + 1,
    askGroups: totals.askGroups + packet.askGroups.length,
    asks: totals.asks + packet.askGroups.reduce((count, group) => count + group.items.length, 0),
  }),
  { pages: 0, askGroups: 0, asks: 0 }
);
