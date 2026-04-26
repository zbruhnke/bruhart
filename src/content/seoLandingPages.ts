import { generatedSeoLandingPages } from './seoGeneratedPages';

export type LandingCategory = 'products' | 'industries' | 'custom-fabrication' | 'resources' | 'service-areas' | 'manufacturers' | 'about';

export interface SeoLandingPage {
  category: LandingCategory;
  slug: string;
  path: string;
  sitemapPriority: number;
  title: string;
  description: string;
  eyebrow: string;
  heroTitle: string;
  heroDescription: string;
  introTitle: string;
  intro: string;
  highlights: string[];
  sections: Array<{
    title: string;
    body: string;
    bullets: string[];
  }>;
  specTitle: string;
  specs: Array<{
    label: string;
    value: string;
  }>;
  proofTitle: string;
  proof: string[];
  decisionMatrix?: Array<{
    option: string;
    chooseWhen: string;
    avoidWhen: string;
    notes: string;
  }>;
  rfqChecklist?: Array<{
    label: string;
    detail: string;
  }>;
  downloads?: Array<{
    label: string;
    description: string;
    href?: string;
    status: string;
  }>;
  proofAssets?: Array<{
    label: string;
    description: string;
    href?: string;
    status: string;
  }>;
  availabilityNotes?: Array<{
    label: string;
    value: string;
  }>;
  sourceReferences?: Array<{
    label: string;
    href: string;
    description: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  related: Array<{
    label: string;
    href: string;
  }>;
}

export const curatedSeoLandingPages: SeoLandingPage[] = [
  {
    category: 'products',
    slug: 'crash-rated-gates',
    path: '/products/crash-rated-gates',
    sitemapPriority: 0.9,
    title: 'Crash Rated Gates | ASTM F2656 Gate Systems | Bru-Hart',
    description:
      'Crash rated slide, swing, vertical lift, and cantilever gate systems for data centers, utilities, airports, government sites, and critical infrastructure.',
    eyebrow: 'Crash Rated Gate Systems',
    heroTitle: 'Crash rated gates for critical access points',
    heroDescription:
      'Bru-Hart helps contractors, owners, and security teams specify gate systems that combine rated vehicle mitigation, day-to-day access control, and field-ready installation support.',
    introTitle: 'The gate is usually the weakest point in a secure perimeter.',
    intro:
      'High-security fences, walls, and barriers still need openings for vehicles, crews, deliveries, and emergency access. Those openings need more than a heavy-looking gate. They need the right crash rating, foundation approach, operator, safety devices, and controls for the actual threat profile.',
    highlights: [
      'ASTM F2656, M30, M40, M50, K4, K8, and K12 specification support',
      'Slide, swing, cantilever, vertical lift, beam, and hybrid gate options',
      'Access control, operators, safety loops, and barrier sequencing guidance',
      'Applications for data centers, utilities, airports, ports, government, and industrial sites',
    ],
    sections: [
      {
        title: 'Built around the site, not a generic catalog item',
        body:
          'Crash rated gates need to match clear opening, vehicle approach speed, available backspace, grade, drainage, utilities, cycle count, and access-control requirements. Bru-Hart can help narrow the options before a project gets locked into the wrong gate type.',
        bullets: [
          'Cantilever and slide gates for wide, high-cycle openings',
          'Swing and vertical lift options where space, grade, or traffic flow require them',
          'Crash beams, bollards, or wedges where a gate alone is not the best barrier pattern',
        ],
      },
      {
        title: 'Certification language has to be precise',
        body:
          'Buyers, engineers, and agencies search for crash ratings because documentation matters. Bru-Hart gates should be described as crash rated, not crash tested, unless a specific product configuration has separate physical test documentation.',
        bullets: [
          'Support for ASTM F2656 and legacy DOS K-rating conversations',
          'Selection help for M30/K4, M40/K8, and M50/K12 performance levels',
          'Documentation-focused language for contractors and spec teams',
        ],
      },
      {
        title: 'Access control still has to work every day',
        body:
          'A crash rated gate is also a daily operating asset. Operators, battery backup, safety devices, credentials, guard controls, and emergency operation all affect whether the perimeter stays secure without creating operational drag.',
        bullets: [
          'Operator and control integration for secure vehicle flow',
          'UL 325 and ASTM F2200 safety considerations for automated gates',
          'Planning support for guard booths, remote controls, card readers, intercoms, and loops',
        ],
      },
    ],
    specTitle: 'Common Specification Points',
    specs: [
      { label: 'Common ratings', value: 'M30/K4, M40/K8, M50/K12, with penetration rating reviewed by product' },
      { label: 'Gate types', value: 'Slide, cantilever, swing, vertical lift, beam, wedge-assisted, and hybrid layouts' },
      { label: 'Common sites', value: 'Data centers, substations, airports, government campuses, ports, and secure yards' },
      { label: 'Decision factors', value: 'Approach speed, opening width, backspace, foundation, cycle count, and controls' },
    ],
    proofTitle: 'What Bru-Hart Brings To The Conversation',
    proof: [
      '45+ years of fence and gate industry experience',
      'Manufacturer relationships for domestic and international security products',
      'Practical support for contractors who need the right product before the bid gets painful',
    ],
    decisionMatrix: [
      {
        option: 'Crash-rated slide or cantilever gate',
        chooseWhen: 'The opening is wide, vehicle traffic is regular, and the site has enough backspace for a sliding or cantilever configuration.',
        avoidWhen: 'The site does not have backspace, has major grade conflicts, or needs a different access pattern.',
        notes: 'Confirm clear opening, backspace, gate weight, infill, operator speed, foundation, and rating documentation before pricing.',
      },
      {
        option: 'Crash-rated swing gate',
        chooseWhen: 'The opening layout, traffic flow, or site geometry makes a sliding gate impractical.',
        avoidWhen: 'The swing arc conflicts with vehicles, pedestrians, grade, utilities, or secure staging requirements.',
        notes: 'Swing gates need careful review of hinges, operators, wind load, safety devices, and emergency operation.',
      },
      {
        option: 'Barrier plus non-rated gate',
        chooseWhen: 'Vehicle mitigation should happen at bollards, beams, wedges, or other barriers while the gate handles access control.',
        avoidWhen: 'The specification requires the gate itself to carry the documented crash rating.',
        notes: 'This can be the smarter package when the gate is operationally important but the crash load should be handled elsewhere.',
      },
    ],
    rfqChecklist: [
      { label: 'Opening', detail: 'Clear opening width, available backspace, gate height, grade, drainage, and utility conflicts.' },
      { label: 'Rating', detail: 'Required ASTM F2656, M-rating, K-rating, agency language, penetration limit, and documentation expectations.' },
      { label: 'Operations', detail: 'Daily cycle count, staffed or unstaffed entrance, emergency access, fail mode, and required opening speed.' },
      { label: 'Controls', detail: 'Operator, loops, safety devices, guard controls, card readers, intercoms, remote release, and backup power.' },
      { label: 'Site proof', detail: 'Photos, drawings, approach path, vehicle speed assumptions, existing fence/gate details, and bid/spec documents.' },
    ],
    availabilityNotes: [
      { label: 'Product path', value: 'Crash-rated gates are quote-driven and configuration-specific; final availability depends on manufacturer, rating, opening, operator, and documentation requirements.' },
      { label: 'Claim discipline', value: 'Bru-Hart should describe supported gate configurations as crash rated, not crash tested, unless a specific physical test document supports that exact statement.' },
      { label: 'Best fit', value: 'The right answer may be a gate, a barrier, or a combined package. Bru-Hart should help choose the system before the buyer locks into a product name.' },
    ],
    downloads: [
      { label: 'Crash Gate RFQ Checklist', description: 'A Bru-Hart checklist for opening, rating, operator, access-control, and documentation inputs.', status: 'Planned download' },
      { label: 'Crash-Rating Terms Guide', description: 'Plain-English guide to ASTM F2656, M-ratings, K-ratings, and penetration language.', href: '/resources/astm-f2656-crash-ratings', status: 'Available as resource page' },
    ],
    proofAssets: [
      { label: 'Crash Gate Specification Support Story', description: 'Use a real project or anonymized sales story once approved to show how Bru-Hart prevented a wrong gate or rating assumption.', status: 'Proof needed' },
      { label: 'Manufacturer Documentation Examples', description: 'Add approved product documents, drawings, or manufacturer links for supported configurations.', status: 'Needs manufacturer approval' },
    ],
    sourceReferences: [
      {
        label: 'ASTM F2656/F2656M',
        href: 'https://store.astm.org/f2656_f2656m-20.html',
        description: 'Primary standard reference for vehicle crash testing of perimeter barriers.',
      },
      {
        label: 'ASTM F2200',
        href: 'https://store.astm.org/f2200-11b.html',
        description: 'Reference standard for automated vehicular gate construction requirements.',
      },
    ],
    faqs: [
      {
        question: 'Is a heavy-duty gate the same as a crash rated gate?',
        answer:
          'No. A crash rated gate should have clear rating documentation for the product and configuration being specified. A heavy-duty gate may be strong, but strength alone is not the same as a crash rating.',
      },
      {
        question: 'Do all projects need M50 or K12 protection?',
        answer:
          'No. The rating should be based on approach conditions, asset risk, security requirements, and available stand-off. Over-specifying can add cost and complexity without improving the actual site plan.',
      },
    ],
    related: [
      { label: 'Crash Rated Barriers', href: '/products/crash-rated-barriers' },
      { label: 'Data Center Security Gates', href: '/industries/data-center-security-gates' },
      { label: 'ASTM F2656 Guide', href: '/resources/astm-f2656-crash-ratings' },
    ],
  },
  {
    category: 'products',
    slug: 'crash-rated-barriers',
    path: '/products/crash-rated-barriers',
    sitemapPriority: 0.88,
    title: 'Crash Rated Barriers | Bollards, Wedges, Beams & Gates | Bru-Hart',
    description:
      'Crash rated vehicle barrier planning for secure entrances, loading zones, utility yards, data centers, and government facilities.',
    eyebrow: 'Vehicle Mitigation',
    heroTitle: 'Crash rated barriers for layered perimeter protection',
    heroDescription:
      'Protect vehicle approaches with the right mix of fixed barriers, active barriers, crash gates, bollards, wedge systems, beams, and access-control equipment.',
    introTitle: 'Not every vehicle threat should be solved with the same barrier.',
    intro:
      'Secure sites often need several barrier types working together. A fixed bollard line, active wedge, barrier arm, crash gate, or hardened fence can each be correct depending on traffic flow, stand-off, operations, and where a vehicle could build speed.',
    highlights: [
      'Fixed, removable, retractable, and active barrier options',
      'Bollards, wedges, beams, cable barriers, crash gates, and crash-rated fence coordination',
      'Support for M30, M40, M50, K4, K8, and K12 product selection',
      'Practical planning for entries, service lanes, generator yards, and emergency access',
    ],
    sections: [
      {
        title: 'Use fixed barriers where access is not needed',
        body:
          'Fixed bollards, crash-rated fencing, and passive barriers can be the best answer where a vehicle should never pass. They reduce moving parts and can harden long perimeter runs or vulnerable building approaches.',
        bullets: [
          'Pedestrian-adjacent hardening',
          'Generator yards and service equipment zones',
          'Perimeter reinforcement behind architectural fencing',
        ],
      },
      {
        title: 'Use active barriers where access has to stay open',
        body:
          'Wedges, retractable bollards, beams, and crash gates are better for controlled entrances, delivery lanes, and staffed checkpoints where vehicles need to move through under authorization.',
        bullets: [
          'Guarded entrances and service drives',
          'Delivery and logistics access points',
          'Emergency access lanes that need controlled opening',
        ],
      },
      {
        title: 'Coordinate barriers with controls and site geometry',
        body:
          'Barrier performance depends on more than the product. The approach path, foundation, utility conflicts, control sequence, and safety devices all determine whether the installation works in the field.',
        bullets: [
          'Approach-speed review before selecting a rating',
          'Operator, signal, loop, and guard-control planning',
          'Foundation and shallow-mount considerations where utilities are present',
        ],
      },
    ],
    specTitle: 'Barrier Planning Inputs',
    specs: [
      { label: 'Barrier types', value: 'Bollards, wedges, beams, crash gates, cable barriers, crash-rated fencing' },
      { label: 'Common ratings', value: 'M30, M40, M50 and legacy K4, K8, K12 references' },
      { label: 'Common zones', value: 'Entrances, truck courts, loading lanes, building approaches, and utility yards' },
      { label: 'Operational inputs', value: 'Traffic volume, authorization method, fail mode, emergency access, and maintenance' },
    ],
    proofTitle: 'Where Bru-Hart Fits',
    proof: [
      'Product sourcing across gate, barrier, fencing, and access-control categories',
      'Contractor-friendly guidance for specifying the right product before procurement',
      'Experience with critical-infrastructure use cases where failure is expensive',
    ],
    decisionMatrix: [
      {
        option: 'Fixed bollards or passive barriers',
        chooseWhen: 'Vehicles should never pass through the protected line and low-maintenance protection is preferred.',
        avoidWhen: 'Authorized vehicle access is needed through the same point.',
        notes: 'Use fixed protection for building approaches, pedestrian zones, equipment pads, and perimeter hardening.',
      },
      {
        option: 'Active wedge, beam, or retractable bollard',
        chooseWhen: 'Authorized vehicles need controlled access through a hardened point.',
        avoidWhen: 'The site cannot support the foundation, power, drainage, controls, or maintenance requirements.',
        notes: 'Active barriers need early coordination with controls, loops, signals, guard procedures, and safety systems.',
      },
      {
        option: 'Crash-rated gate',
        chooseWhen: 'The access opening itself needs documented vehicle mitigation and must also operate as a gate.',
        avoidWhen: 'A separate barrier can handle the crash requirement more cleanly than the moving gate leaf.',
        notes: 'The correct package may combine fencing, gate, bollards, wedges, controls, and guard procedures.',
      },
    ],
    rfqChecklist: [
      { label: 'Threat path', detail: 'Vehicle approach direction, likely speed, stand-off, protected assets, and whether the opening is staffed.' },
      { label: 'Access need', detail: 'Who needs to pass, how often, what vehicle types, emergency access, and fail-open or fail-secure expectations.' },
      { label: 'Barrier type', detail: 'Fixed, removable, retractable, wedge, beam, bollard, crash gate, cable, or fence-supported barrier.' },
      { label: 'Site limits', detail: 'Foundation depth, utilities, drainage, grade, power, traffic controls, and construction phasing.' },
      { label: 'Documents', detail: 'Rating requirement, drawings, specs, authority requirements, and any approved manufacturer list.' },
    ],
    availabilityNotes: [
      { label: 'Quote-driven', value: 'Crash-rated barriers are not generic shelf items. Rating, foundation, controls, site geometry, and manufacturer availability drive the quote path.' },
      { label: 'System fit', value: "The best barrier may not be the most expensive barrier. It should match the actual threat path and the site's daily operations." },
      { label: 'Documentation', value: 'Final product recommendations should be tied to manufacturer documentation and rating language for the exact configuration being proposed.' },
    ],
    downloads: [
      { label: 'Vehicle Mitigation RFQ Checklist', description: 'Checklist for threat path, access needs, barrier type, controls, and documentation.', status: 'Planned download' },
      { label: 'ASTM F2656 Crash Ratings Guide', description: 'Bru-Hart guide to crash-rating terms and buyer questions.', href: '/resources/astm-f2656-crash-ratings', status: 'Available as resource page' },
    ],
    proofAssets: [
      { label: 'Barrier Selection Example', description: 'Add a real or anonymized project showing why a gate, bollard, wedge, beam, or combined package was recommended.', status: 'Proof needed' },
      { label: 'Approved Product Documents', description: 'Add manufacturer PDFs, drawings, or links only after relationship and claim language are approved.', status: 'Needs manufacturer approval' },
    ],
    sourceReferences: [
      {
        label: 'ASTM F2656/F2656M',
        href: 'https://store.astm.org/f2656_f2656m-20.html',
        description: 'Primary standard reference for crash testing of vehicle security barriers.',
      },
      {
        label: 'ASTM Security Standards Article',
        href: 'https://www.astm.org/news/security-standards-help-stop-threat-so24',
        description: 'ASTM overview of vehicle security barrier standards and threat mitigation context.',
      },
    ],
    faqs: [
      {
        question: 'Should I choose a gate, bollards, or a wedge barrier?',
        answer:
          'The right choice depends on whether vehicles need access, how often the opening cycles, the available foundation, and how much speed a vehicle can build. Many high-security sites use more than one barrier type.',
      },
      {
        question: 'Can crash rated barriers be integrated with existing access control?',
        answer:
          'Often, yes. The control design should be reviewed early so credentials, guard controls, loops, signals, and safety systems work with the selected barrier.',
      },
    ],
    related: [
      { label: 'Crash Rated Gates', href: '/products/crash-rated-gates' },
      { label: 'Bollards & Barriers', href: '/products/bollards-barriers' },
      { label: 'Utility Substation Security', href: '/industries/utility-substation-security' },
    ],
  },
  {
    category: 'products',
    slug: 'perimeter-security-fencing',
    path: '/products/perimeter-security-fencing',
    sitemapPriority: 0.86,
    title: 'Perimeter Security Fencing | Anti-Climb & Crash-Rated Systems | Bru-Hart',
    description:
      'High-security perimeter fencing, anti-climb mesh, anti-cut systems, crash-rated fence coordination, and access point planning for critical infrastructure.',
    eyebrow: 'High-Security Fence Systems',
    heroTitle: 'Perimeter security fencing that supports the whole site plan',
    heroDescription:
      'Bru-Hart helps project teams source and specify fencing systems that deter, delay, and integrate with crash-rated gates, barriers, and access control.',
    introTitle: 'A secure perimeter is a system, not just a fence line.',
    intro:
      "Critical facilities need fencing that works with gates, vehicle barriers, pedestrian openings, intrusion detection, visibility requirements, and the owner's security procedures. The best fence choice depends on the threat model and the way the site operates.",
    highlights: [
      'Anti-climb, anti-cut, welded wire, chain link, ornamental, and crash-rated options',
      'Fence-to-gate coordination for secure vehicle and pedestrian openings',
      'Applications for utilities, data centers, airports, ports, and industrial facilities',
      'Support for access control and detection integration points',
    ],
    sections: [
      {
        title: 'Match the fence to the threat and environment',
        body:
          'Some sites need visibility, others need screening. Some need anti-cut mesh, others need crash-rated cable or barrier reinforcement. The fence should reflect site risk, maintenance expectations, and inspection requirements.',
        bullets: [
          'Anti-climb and anti-cut mesh for higher forced-entry resistance',
          'Crash-rated or barrier-backed systems for vehicle mitigation',
          'Ornamental and architectural systems where appearance still matters',
        ],
      },
      {
        title: 'Design the openings as carefully as the fence',
        body:
          'Fence failures often occur at gates, pedestrian openings, utility penetrations, and service lanes. Bru-Hart can help align fencing with gates, bollards, operators, and access-control components.',
        bullets: [
          'Vehicle gate and pedestrian gate coordination',
          'Fence transitions around active barriers and bollards',
          'Hardware, hinges, latches, operators, and credential-device planning',
        ],
      },
      {
        title: 'Plan for maintenance, inspection, and expansion',
        body:
          'Commercial and critical-infrastructure sites change over time. The fencing plan should support repairs, future gates, equipment yards, detection upgrades, and clear documentation.',
        bullets: [
          'Material selection for corrosion and weather exposure',
          'Standardized hardware and replaceable components',
          'Future access points and detection zones considered early',
        ],
      },
    ],
    specTitle: 'Fence System Inputs',
    specs: [
      { label: 'Fence types', value: 'Welded wire, chain link, ornamental steel, aluminum, anti-climb, anti-cut, crash-rated systems' },
      { label: 'Security layers', value: 'Fence, gates, bollards, barriers, access control, detection, and lighting' },
      { label: 'Common sites', value: 'Substations, data centers, airports, logistics yards, ports, and government facilities' },
      { label: 'Planning factors', value: 'Visibility, cut resistance, climb resistance, vehicle risk, maintenance, and aesthetics' },
    ],
    proofTitle: 'Why Work Through Bru-Hart',
    proof: [
      'Wholesale and manufacturer relationships across fence, gate, and hardware categories',
      'Practical field knowledge from decades in fencing and gate fabrication',
      'Ability to connect the fence package to gates, operators, and barriers',
    ],
    faqs: [
      {
        question: 'Is chain link enough for critical infrastructure?',
        answer:
          'Sometimes, but not always. Chain link may work as one layer, but many secure sites need anti-climb mesh, anti-cut materials, crash-rated reinforcement, or detection integration.',
      },
      {
        question: 'Can crash-rated fencing be added behind a non-rated fence?',
        answer:
          'In some designs, a crash-rated barrier or cable system can be integrated with or placed behind another fence line. The exact approach depends on the product, rating, foundation, and site layout.',
      },
    ],
    related: [
      { label: 'Crash Rated Barriers', href: '/products/crash-rated-barriers' },
      { label: 'Government Facility Security', href: '/industries/government-facility-security' },
      { label: 'Airport Perimeter Security', href: '/industries/airport-perimeter-security' },
    ],
  },
  {
    category: 'products',
    slug: 'access-control-automation',
    path: '/products/access-control-automation',
    sitemapPriority: 0.84,
    title: 'Gate Access Control & Automation | Bru-Hart Industries',
    description:
      'Gate operators, card readers, keypads, barrier arms, visitor controls, and automation planning for commercial and critical-infrastructure entrances.',
    eyebrow: 'Access Control & Automation',
    heroTitle: 'Gate automation that keeps secure entrances moving',
    heroDescription:
      'Bru-Hart helps align gates, operators, credentials, barrier arms, safety devices, and controls so secure vehicle access works in daily operation.',
    introTitle: 'The access point has to be both secure and usable.',
    intro:
      'A secure gate that creates slowdowns, maintenance calls, or unsafe movement becomes a liability. Automation and access control should be selected with the gate type, cycle count, user flow, and security procedures in mind.',
    highlights: [
      'Slide, swing, cantilever, vertical lift, and barrier-arm operator support',
      'Card readers, keypads, intercoms, remote controls, loops, and safety devices',
      'Planning for high-cycle commercial and restricted-access sites',
      'Integration with crash-rated gates and barriers where needed',
    ],
    sections: [
      {
        title: 'Start with the gate and traffic pattern',
        body:
          'Operator selection depends on gate weight, opening width, duty cycle, wind exposure, security level, and fail mode. Bru-Hart helps project teams avoid mismatches between gate hardware and automation.',
        bullets: [
          'Industrial slide and cantilever gate operators',
          'Swing and vertical lift gate automation options',
          'Barrier arms and sequenced vehicle control',
        ],
      },
      {
        title: 'Use credentials that match the facility',
        body:
          'A data center, truck yard, gated commercial property, and government site may all need different access patterns. The credential method should reflect users, visitors, service crews, and guard involvement.',
        bullets: [
          'Card readers, fobs, PIN pads, phone entry, and intercoms',
          'Guard control, remote release, and visitor workflows',
          'Future integration points for cameras or facility security systems',
        ],
      },
      {
        title: 'Do not treat safety as an afterthought',
        body:
          'Automated gate systems need safety planning around entrapment protection, pedestrians, loops, photo eyes, edges, and construction standards. This matters for liability and day-to-day reliability.',
        bullets: [
          'UL 325 and ASTM F2200 conversations during specification',
          'Vehicle loops, edges, photo eyes, and pedestrian separation planning',
          'Emergency operation and power-loss behavior reviewed early',
        ],
      },
    ],
    specTitle: 'Automation Planning Inputs',
    specs: [
      { label: 'Gate types', value: 'Slide, swing, cantilever, vertical lift, barrier arm, and crash-rated systems' },
      { label: 'Control devices', value: 'Card readers, keypads, intercoms, loops, guard controls, and remote release' },
      { label: 'Site types', value: 'Commercial properties, secure yards, utilities, data centers, airports, and campuses' },
      { label: 'Safety factors', value: 'UL 325, ASTM F2200, entrapment protection, pedestrian separation, and fail mode' },
    ],
    proofTitle: 'Bru-Hart Advantage',
    proof: [
      'Gate, hardware, operator, and access-control sourcing under one conversation',
      'Real-world gate experience instead of equipment selection in isolation',
      'Support for contractors who need reliable components and fewer callbacks',
    ],
    faqs: [
      {
        question: 'Can access control be added to an existing gate?',
        answer:
          'Often, but the gate condition, operator compatibility, safety devices, power, and conduit path should be reviewed before promising a simple retrofit.',
      },
      {
        question: 'What matters most for a high-cycle gate operator?',
        answer:
          'Gate weight, duty cycle, power, environmental exposure, safety devices, and serviceability. The cheapest operator is rarely the best fit for a busy commercial or restricted-access site.',
      },
    ],
    related: [
      { label: 'Crash Rated Gates', href: '/products/crash-rated-gates' },
      { label: 'Cantilever Gate Systems', href: '/products/cantilever-gate-systems' },
      { label: 'Data Center Security Gates', href: '/industries/data-center-security-gates' },
    ],
  },
  {
    category: 'products',
    slug: 'cantilever-gate-systems',
    path: '/products/cantilever-gate-systems',
    sitemapPriority: 0.84,
    title: 'Cantilever Gate Systems | Commercial Sliding Gates | Bru-Hart',
    description:
      'Commercial and industrial cantilever gate systems, enclosed track components, trucks, operators, and access-control planning for secure vehicle openings.',
    eyebrow: 'Cantilever Gate Systems',
    heroTitle: 'Commercial cantilever gate systems for demanding openings',
    heroDescription:
      'Bru-Hart supports contractors and facility teams with cantilever gate components, track systems, automation, and security planning for high-cycle vehicle entrances.',
    introTitle: 'Cantilever gates solve problems ground-track gates cannot.',
    intro:
      'Where debris, grade, snow, gravel, or constant traffic make ground tracks a maintenance issue, cantilever gates keep the moving leaf suspended and the opening clear. The system still depends on the right track, trucks, frame, operator, and opening geometry.',
    highlights: [
      'Commercial and industrial sliding gate applications',
      'Enclosed aluminum track and truck component support',
      'Automation-ready planning for high-cycle entrances',
      'Security, access-control, and crash-rated option coordination',
    ],
    sections: [
      {
        title: 'The hardware carries the performance',
        body:
          'A cantilever gate is only as reliable as the track, trucks, support posts, frame, and alignment. Bru-Hart can support component selection for fabricators building commercial-grade gates.',
        bullets: [
          'Enclosed aluminum track systems for smoother operation',
          'Truck assemblies selected for load, cycle count, and environment',
          'Component planning for custom gate fabrication',
        ],
      },
      {
        title: 'Opening size changes the design',
        body:
          'Larger openings, heavier infill, wind load, and limited backspace can change whether a single-track, double-track, or different gate type makes sense.',
        bullets: [
          'Clear opening and counterbalance review',
          'Weight and infill considerations',
          'Automation and safety-device planning',
        ],
      },
      {
        title: 'Security can be layered into the system',
        body:
          'Cantilever gates can support commercial, industrial, and high-security applications when paired with the right infill, operator, controls, and adjacent barriers.',
        bullets: [
          'Access control and gate operator integration',
          'Anti-climb or security infill options',
          'Crash-rated options reviewed where vehicle mitigation is required',
        ],
      },
    ],
    specTitle: 'Cantilever System Inputs',
    specs: [
      { label: 'Core components', value: 'Gate frame, enclosed track, truck assemblies, posts, guides, receivers, and operator' },
      { label: 'Use cases', value: 'Industrial yards, utilities, logistics facilities, commercial properties, and secure campuses' },
      { label: 'Design factors', value: 'Opening width, counterbalance, gate weight, wind load, cycle count, and available backspace' },
      { label: 'Related products', value: 'BH Track, CNC-milled trucks, access-control hardware, and operators' },
    ],
    proofTitle: 'Built For Fabricators And Contractors',
    proof: [
      'Made-in-USA BH Track and CNC-milled truck component offering',
      'Wholesale component support for gate fabricators',
      'Industry experience with the details that create smooth operation',
    ],
    faqs: [
      {
        question: 'When should I use a cantilever gate instead of a track gate?',
        answer:
          'A cantilever gate is often better where a ground track would collect debris, conflict with traffic, create maintenance issues, or be difficult to install cleanly.',
      },
      {
        question: 'Can cantilever gates be automated?',
        answer:
          'Yes. Many commercial cantilever gates are automated, but the operator should be selected after reviewing gate size, weight, cycle count, and safety requirements.',
      },
    ],
    related: [
      { label: 'Enclosed Aluminum Gate Track', href: '/custom-fabrication/enclosed-aluminum-gate-track' },
      { label: 'CNC-Milled Gate Trucks', href: '/custom-fabrication/cnc-milled-gate-trucks' },
      { label: 'Access Control & Automation', href: '/products/access-control-automation' },
    ],
  },
  {
    category: 'products',
    slug: 'bollards-barriers',
    path: '/products/bollards-barriers',
    sitemapPriority: 0.82,
    title: 'Bollards & Barriers | Vehicle Mitigation Systems | Bru-Hart',
    description:
      'Fixed, removable, retractable, and crash-rated bollard and barrier options for storefronts, campuses, utilities, data centers, and secure entries.',
    eyebrow: 'Bollards & Barriers',
    heroTitle: 'Bollards and barriers for controlled vehicle mitigation',
    heroDescription:
      'Bru-Hart helps specify bollards and barrier systems that protect vulnerable approaches while preserving the access patterns each facility needs.',
    introTitle: 'Vehicle mitigation is about location, access, and risk.',
    intro:
      'Bollards and barriers can protect pedestrians, buildings, gates, service yards, and restricted zones. The right system depends on whether vehicles need to pass, how the area is used, and what level of impact protection the owner requires.',
    highlights: [
      'Fixed, removable, retractable, decorative, and crash-rated options',
      'Entry, storefront, building approach, utility yard, and campus applications',
      'Coordination with gates, fencing, access control, and traffic flow',
      'Specification support for M30, M40, M50 and K-rated requirements',
    ],
    sections: [
      {
        title: 'Fixed where protection should be permanent',
        body:
          'Fixed bollards and passive barriers work well when the protected area should never allow vehicle passage. They can create a durable layer with low operating complexity.',
        bullets: [
          'Building entrances and pedestrian edges',
          'Equipment yards and utility assets',
          'Areas around generators, transformers, and service lanes',
        ],
      },
      {
        title: 'Active where access has to be controlled',
        body:
          'Retractable bollards, removable bollards, wedges, and barrier arms preserve authorized vehicle movement while adding a controlled protective layer.',
        bullets: [
          'Staffed entrances and visitor lanes',
          'Emergency access and service drives',
          'Delivery and maintenance vehicle routes',
        ],
      },
      {
        title: 'Aesthetic and operational details matter',
        body:
          'Covers, lighting, finish, drainage, power, manual operation, and maintenance access all affect whether the system performs well after installation.',
        bullets: [
          'Decorative covers and finish coordination',
          'Manual override and power-loss behavior',
          'Drainage, foundation, and shallow-mount considerations',
        ],
      },
    ],
    specTitle: 'Bollard & Barrier Inputs',
    specs: [
      { label: 'Barrier types', value: 'Fixed, removable, retractable, decorative, wedge, beam, and barrier arm systems' },
      { label: 'Common locations', value: 'Entrances, storefronts, campuses, truck courts, service lanes, and utility yards' },
      { label: 'Security factors', value: 'Impact rating, stand-off, traffic flow, pedestrian flow, visibility, and maintenance' },
      { label: 'Integration', value: 'Gates, access control, guard stations, signals, and perimeter fencing' },
    ],
    proofTitle: 'Practical Selection Support',
    proof: [
      'Sourcing across vehicle barrier, gate, and perimeter security categories',
      'Experience matching product type to the real site conditions',
      'RFQ-focused support for commercial and critical-infrastructure projects',
    ],
    faqs: [
      {
        question: 'Are decorative bollards crash rated?',
        answer:
          'Not automatically. Decorative covers can be used with rated cores, but the rating depends on the barrier assembly, product documentation, and installation requirements.',
      },
      {
        question: 'What is the difference between removable and retractable bollards?',
        answer:
          'Removable bollards are manually taken out when access is needed. Retractable bollards lower into the ground and are better for frequent controlled access, but require more infrastructure.',
      },
    ],
    related: [
      { label: 'Crash Rated Barriers', href: '/products/crash-rated-barriers' },
      { label: 'Government Facility Security', href: '/industries/government-facility-security' },
      { label: 'Data Center Security Gates', href: '/industries/data-center-security-gates' },
    ],
  },
  {
    category: 'products',
    slug: 'agricultural-fencing',
    path: '/products/agricultural-fencing',
    sitemapPriority: 0.82,
    title: 'Agricultural Fencing & Farm Fence Supplies | Bru-Hart',
    description:
      'Agricultural fencing, farm gates, field fence, high-tensile wire, posts, hardware, and material support for Branford and North Florida properties.',
    eyebrow: 'Agricultural Fencing',
    heroTitle: 'Agricultural fencing for working North Florida properties',
    heroDescription:
      'Bru-Hart supports local farms, ranches, homesteads, and rural properties with practical fence, gate, and material options suited to livestock, access, and property boundaries.',
    introTitle: 'The local product mix needs to match the land around Branford.',
    intro:
      'Bru-Hart is more than a high-security distributor. Serving Branford and nearby North Florida communities also means supporting the agricultural fencing needs that fit local land use, rural neighbors, and everyday property work.',
    highlights: [
      'Field fence, woven wire, barbed wire, high-tensile, and electric fence accessory support',
      'Farm and ranch gates for pastures, equipment access, driveways, and working pens',
      'Posts, braces, hinges, latches, clips, staples, strainers, and repair materials',
      'Practical quote support for cattle, horses, goats, pasture boundaries, and acreage',
    ],
    sections: [
      {
        title: 'Match the fence to the animal and boundary',
        body:
          'A pasture perimeter, horse paddock, goat lot, driveway gate, and garden boundary do not need the same fence. The right product depends on containment, visibility, maintenance, soil, terrain, and how the property is used.',
        bullets: [
          'Woven wire and field fence for livestock and pasture boundaries',
          'No-climb and board-style options for horse-focused properties',
          'Barbed wire or high-tensile systems where cattle and long fence runs are the priority',
        ],
      },
      {
        title: 'Build the corners, braces, and gates correctly',
        body:
          'Farm fence failures often start at weak corners, undersized braces, poor tension, or gates that sag under daily use. Materials should be selected as a system, not as disconnected parts.',
        bullets: [
          'H-brace and corner assembly material planning',
          'Line posts, T-posts, wood posts, clips, staples, and strainers',
          'Gate openings sized for trucks, tractors, trailers, and animals',
        ],
      },
      {
        title: 'Serve the local commitment directly',
        body:
          'Because Bru-Hart operates in a rural agricultural context, agricultural fence and gate products should be visible, quoteable, and easy for local neighbors to understand. This page gives that commitment a clear place on the site.',
        bullets: [
          'Local product guidance for Branford, O Brien, Live Oak, Fort White, Mayo, and nearby towns',
          'A practical path for walk-in, phone, and RFQ conversations',
          'Clear separation between local agricultural demand and national high-security demand',
        ],
      },
    ],
    specTitle: 'Agricultural Fence Planning Inputs',
    specs: [
      { label: 'Fence types', value: 'Field fence, woven wire, no-climb horse fence, barbed wire, high-tensile, electric, rail, and ranch-style fence' },
      { label: 'Materials', value: 'T-posts, wood posts, brace assemblies, clips, staples, strainers, hinges, latches, and repair hardware' },
      { label: 'Applications', value: 'Pastures, livestock lots, driveways, equipment access, property boundaries, and rural homesteads' },
      { label: 'Local fit', value: 'Branford, Suwannee County, Lafayette County, Gilchrist County, and surrounding North Florida communities' },
    ],
    proofTitle: 'Why Bru-Hart Should Own This Locally',
    proof: [
      'The company is headquartered in Branford and has a practical reason to serve agricultural properties nearby',
      'Gate and fence experience transfers directly into stronger local fence, gate, and hardware support',
      'The page supports qualified local demand without diluting the national high-security positioning',
    ],
    decisionMatrix: [
      {
        option: 'Woven wire / field fence',
        chooseWhen: 'The property needs practical containment for cattle, goats, sheep, dogs, or mixed rural boundaries.',
        avoidWhen: 'The property needs high-visibility horse paddocks, a decorative front entrance, or a security-focused perimeter.',
        notes: 'Confirm animal type, wire height, stay spacing, post plan, brace layout, gates, and repair expectations before pricing.',
      },
      {
        option: 'No-climb or horse fence',
        chooseWhen: 'Visibility, hoof safety, and animal contact are more important than the lowest material cost.',
        avoidWhen: 'The fence is a long cattle-only run where another agricultural wire system is more practical.',
        notes: 'Horse properties need careful gate, latch, brace, and post decisions because animal safety and daily handling matter.',
      },
      {
        option: 'Barbed wire / high-tensile package',
        chooseWhen: 'Long pasture runs, cattle containment, and cost-effective acreage coverage are the main priorities.',
        avoidWhen: 'The property has horses, heavy public interface, or visibility/safety concerns that make barbed wire inappropriate.',
        notes: 'The quote should include corners, braces, strainers, clips, staples, gates, and any electric offset needs.',
      },
    ],
    rfqChecklist: [
      { label: 'Animal', detail: 'Cattle, horses, goats, sheep, dogs, mixed livestock, garden protection, or boundary-only use.' },
      { label: 'Footage', detail: 'Approximate linear footage, number of corners, terrain notes, and whether this is repair or new fence.' },
      { label: 'Gates', detail: 'Number of gates, opening widths, driveway/equipment needs, trailer access, and walk-through access.' },
      { label: 'Materials', detail: 'Wire type, post preference, brace requirements, clips/staples/strainers, and repair hardware needs.' },
      { label: 'Local context', detail: 'Property location, pickup/delivery needs, timeline, and whether the buyer wants stocked, sourced, or special-order options.' },
    ],
    availabilityNotes: [
      { label: 'Local commitment', value: 'This page should stay visibly useful for Branford and nearby agricultural buyers, not just national security customers.' },
      { label: 'Product truth', value: 'Stocked, sourced, special-order, and quote-only status should be filled in as Bru-Hart finalizes the local agricultural product mix.' },
      { label: 'Best fit', value: 'The right agricultural fence depends on animal behavior, corners/braces, gate use, terrain, and repairability.' },
    ],
    downloads: [
      { label: 'North Florida Farm Fence Material Checklist', description: 'A one-page checklist for animal type, footage, posts, gates, braces, hardware, and repair materials.', status: 'Needs PDF/spec sheet' },
      { label: 'Agricultural Fence Product Matrix', description: 'Wire, post, brace, gate, and hardware options mapped to common local use cases.', status: 'Needs product matrix' },
    ],
    proofAssets: [
      { label: 'Local Agricultural Product Photos', description: 'Real photos of field fence, wire, posts, gates, hardware, yard displays, deliveries, and local material stacks.', status: 'Needs photos' },
      { label: 'Neighbor / Landowner Testimonials', description: 'Short quotes from Branford-area buyers once agricultural supply conversations begin.', status: 'Proof needed' },
      { label: 'Council-Commitment Support Photos', description: 'Photos that show Bru-Hart is visibly supporting agricultural fence and gate needs in the local market.', status: 'Needs photos' },
    ],
    faqs: [
      {
        question: 'Does agricultural fencing belong on a high-security gate site?',
        answer:
          'Yes. Bru-Hart can pursue national commercial security demand while also serving the agricultural fence, gate, and material needs around Branford and North Florida.',
      },
      {
        question: 'What should a landowner know before asking for farm fence materials?',
        answer:
          'Useful inputs include animal type, total footage, number of gates, desired gate widths, post preference, corner locations, terrain, and whether the fence needs electric offset or predator deterrence.',
      },
    ],
    related: [
      { label: 'Field Fence & Woven Wire', href: '/products/field-fence-woven-wire' },
      { label: 'Farm & Ranch Gates', href: '/products/farm-ranch-gates' },
      { label: 'Branford Agricultural Fencing', href: '/service-areas/branford-fl-agricultural-fencing' },
    ],
  },
  {
    category: 'products',
    slug: 'field-fence-woven-wire',
    path: '/products/field-fence-woven-wire',
    sitemapPriority: 0.78,
    title: 'Field Fence & Woven Wire Fence | Bru-Hart',
    description:
      'Field fence and woven wire material support for livestock containment, pasture boundaries, rural acreage, and agricultural properties in North Florida.',
    eyebrow: 'Field Fence & Woven Wire',
    heroTitle: 'Field fence and woven wire for livestock and rural boundaries',
    heroDescription:
      'Source the right woven wire, posts, braces, gates, and hardware for cattle, goats, sheep, dogs, gardens, and acreage boundaries.',
    introTitle: 'Woven wire works when the whole fence line is planned.',
    intro:
      'Field fence is a practical choice for many rural properties, but height, stay spacing, wire gauge, post spacing, brace design, and gate placement determine whether it holds up to real use.',
    highlights: [
      'Woven wire and field fence options for livestock and property boundaries',
      'Material planning for corners, braces, posts, clips, staples, and tensioning',
      'Gate coordination for tractors, trailers, trucks, and daily animal movement',
      'Useful for farms, homesteads, pasture divisions, gardens, and rural lots',
    ],
    sections: [
      {
        title: 'Choose the right height, spacing, and strength',
        body:
          'A garden fence, goat lot, cattle pasture, and mixed-use boundary each call for different wire characteristics. The fence should be chosen around what needs to stay in, what needs to stay out, and how often the line will be maintained.',
        bullets: [
          'Field fence for pasture and livestock boundaries',
          'Tighter mesh patterns where smaller animals are involved',
          'Heavier materials where pressure, terrain, or exposure justify it',
        ],
      },
      {
        title: 'Do not underbuild the ends',
        body:
          'Woven wire depends on tension. Corners, terminal posts, H-braces, and gate posts need to be planned before buying roll quantities or hardware.',
        bullets: [
          'Corner and end-brace material planning',
          'Tensioning hardware, clips, staples, and splices',
          'Post selection for soil, run length, and expected pressure',
        ],
      },
      {
        title: 'Pair field fence with the right gates',
        body:
          'Access points change how the fence performs. Gate width, hinge strength, latch type, animal pressure, and vehicle movement should be decided alongside the wire and post package.',
        bullets: [
          'Tube gates, wire-filled gates, and custom gate options',
          'Driveway, pasture, equipment, and handling-area openings',
          'Gate hardware selected for the real weight and use pattern',
        ],
      },
    ],
    specTitle: 'Field Fence Inputs',
    specs: [
      { label: 'Common uses', value: 'Livestock boundaries, cross fencing, garden protection, rural lots, and pasture divisions' },
      { label: 'Materials', value: 'Woven wire rolls, T-posts, wood posts, braces, staples, clips, strainers, and gate hardware' },
      { label: 'Animals', value: 'Cattle, goats, sheep, dogs, poultry areas, and mixed small-farm uses depending on fence design' },
      { label: 'Planning factors', value: 'Footage, gates, terrain, animal pressure, post spacing, wire height, and tensioning' },
    ],
    proofTitle: 'Local Material Support',
    proof: [
      'Bru-Hart can turn a rough fence need into a more complete material conversation',
      'Gate and hardware experience helps avoid weak access points',
      'The page gives local agricultural buyers a clear path separate from commercial security buyers',
    ],
    faqs: [
      {
        question: 'Is field fence the same as woven wire?',
        answer:
          'The terms often overlap in everyday use. The important details are wire height, mesh spacing, gauge, knot style, and whether the fence fits the animal and boundary.',
      },
      {
        question: 'What measurements are needed for a field fence quote?',
        answer:
          'Start with total footage, corner count, gate count, gate widths, animal type, post preference, and whether the fence will be a perimeter line or cross fence.',
      },
    ],
    related: [
      { label: 'Agricultural Fencing', href: '/products/agricultural-fencing' },
      { label: 'Farm & Ranch Gates', href: '/products/farm-ranch-gates' },
      { label: 'Fence Materials & Supplies', href: '/products/fence-materials-supplies' },
    ],
  },
  {
    category: 'products',
    slug: 'horse-fencing',
    path: '/products/horse-fencing',
    sitemapPriority: 0.76,
    title: 'Horse Fencing, No-Climb Fence & Farm Gates | Bru-Hart',
    description:
      'Horse fence material support including no-climb wire, board fence, ranch rail, gates, posts, and hardware for North Florida horse properties.',
    eyebrow: 'Horse Fence Materials',
    heroTitle: 'Horse fencing that balances containment, visibility, and safety',
    heroDescription:
      'Bru-Hart helps horse property owners and contractors plan fence, gate, post, and hardware packages for paddocks, pastures, lanes, and equipment access.',
    introTitle: 'Horse fence selection is not just about keeping animals in.',
    intro:
      'Horse properties need fences that are visible, durable, and appropriate for the way horses move around pastures, paddocks, barns, arenas, and trailer access points.',
    highlights: [
      'No-climb woven wire, board fence, ranch rail, and compatible gate options',
      'Post, brace, hinge, latch, and electric-offset material planning',
      'Support for paddocks, pastures, lanes, arenas, barns, and rural driveways',
      'Local relevance for Branford and North Florida horse and acreage properties',
    ],
    sections: [
      {
        title: 'Prioritize visibility and animal-safe details',
        body:
          'Sharp edges, large openings, weak latches, and poor visibility can create avoidable problems. Fence choices should account for animal behavior, daily handling, and how the property is maintained.',
        bullets: [
          'No-climb mesh where hoof entrapment risk needs to be reduced',
          'Board or rail systems where visibility and appearance matter',
          'Electric offset options where pressure on the fence line needs to be managed',
        ],
      },
      {
        title: 'Design gates for people, horses, and equipment',
        body:
          'Horse properties often need several gate types: walk-through gates, pasture gates, trailer access, barn lanes, and equipment openings. Hardware matters because sagging gates quickly become a daily problem.',
        bullets: [
          'Pasture and paddock gate planning',
          'Hinge and latch selection for animal areas',
          'Opening widths that support tractors, trailers, and feed deliveries',
        ],
      },
      {
        title: 'Coordinate fence materials before installation',
        body:
          'Better outcomes come from reviewing posts, braces, gates, wire or rail, hardware, and total footage before the project starts. That reduces mismatched materials and last-minute runs for missing parts.',
        bullets: [
          'Post and brace quantities',
          'Wire, rail, or board selections',
          'Gate and hardware lists by opening',
        ],
      },
    ],
    specTitle: 'Horse Fence Inputs',
    specs: [
      { label: 'Fence options', value: 'No-climb woven wire, board fence, ranch rail, electric offset, and hybrid layouts' },
      { label: 'Common zones', value: 'Pastures, paddocks, lanes, barns, arenas, trailer access, and driveway gates' },
      { label: 'Hardware', value: 'Heavy-duty hinges, latches, gate posts, brace assemblies, insulators, and tensioning materials' },
      { label: 'Planning factors', value: 'Animal pressure, visibility, gate use, terrain, maintenance, and property appearance' },
    ],
    proofTitle: 'Fence And Gate Experience',
    proof: [
      'Bru-Hart understands gates and hardware as part of the fence system',
      'Local agricultural pages make horse fence demand visible instead of hidden under general products',
      'Quote support can focus on complete material packages instead of one-off parts',
    ],
    faqs: [
      {
        question: 'What fence is best for horses?',
        answer:
          'There is no single best fence for every horse property. No-climb wire, board fence, rail systems, and electric offset can all make sense depending on visibility, budget, animal behavior, and maintenance expectations.',
      },
      {
        question: 'Should horse gates be different from regular farm gates?',
        answer:
          'Often, yes. Gate spacing, latch style, hinge quality, and opening width should be selected for daily handling, animal safety, and equipment access.',
      },
    ],
    related: [
      { label: 'Farm & Ranch Gates', href: '/products/farm-ranch-gates' },
      { label: 'Field Fence & Woven Wire', href: '/products/field-fence-woven-wire' },
      { label: 'Branford Agricultural Fencing', href: '/service-areas/branford-fl-agricultural-fencing' },
    ],
  },
  {
    category: 'products',
    slug: 'barbed-wire-high-tensile-fence',
    path: '/products/barbed-wire-high-tensile-fence',
    sitemapPriority: 0.76,
    title: 'Barbed Wire & High-Tensile Fence Materials | Bru-Hart',
    description:
      'Barbed wire, high-tensile fence, electric fence accessories, posts, braces, and hardware for cattle, pasture, and rural boundary projects.',
    eyebrow: 'Wire Fence Materials',
    heroTitle: 'Barbed wire and high-tensile fence for long rural runs',
    heroDescription:
      'Plan practical wire fence packages for cattle, pasture divisions, boundary lines, and large-acreage projects around Branford and North Florida.',
    introTitle: 'Long fence runs need strength, tension, and maintainability.',
    intro:
      'Barbed wire and high-tensile systems can be efficient for cattle and rural perimeters, but they rely on strong ends, proper tensioning, appropriate posts, and clear gate planning.',
    highlights: [
      'Barbed wire, high-tensile wire, electric wire, and offset accessory support',
      'Corners, H-braces, line posts, T-posts, strainers, clips, staples, and repair materials',
      'Useful for cattle, pasture boundaries, cross fencing, and rural acreage',
      'Quote support for long runs where material planning matters',
    ],
    sections: [
      {
        title: 'Use wire systems where the application fits',
        body:
          'Wire fencing can be efficient for cattle and rural boundaries, but it is not the answer for every animal or every property edge. The fence should reflect containment needs, neighbors, roads, maintenance access, and safety expectations.',
        bullets: [
          'Barbed wire for traditional cattle and boundary applications',
          'High-tensile systems for longer, tensioned runs',
          'Electric components where controlled pressure or rotational grazing is needed',
        ],
      },
      {
        title: 'Treat bracing as the foundation',
        body:
          'Wire tension transfers force into corners, ends, and gate posts. Weak bracing can make a new fence fail early even when the wire itself is correct.',
        bullets: [
          'H-brace and corner material support',
          'Strainers, tensioners, staples, clips, and sleeves',
          'Post selection based on soil, run length, and animal pressure',
        ],
      },
      {
        title: 'Plan repairs and expansions',
        body:
          'Rural fences are maintained over time. Having compatible wire, hardware, gate parts, and post materials available helps landowners repair storm damage, animal pressure, and routine wear.',
        bullets: [
          'Repair materials for existing barbed or high-tensile runs',
          'Gate hardware and replacement part planning',
          'Material lists for future cross fencing or pasture changes',
        ],
      },
    ],
    specTitle: 'Wire Fence Inputs',
    specs: [
      { label: 'Fence types', value: 'Barbed wire, high-tensile smooth wire, electric wire, offset wire, and hybrid fence lines' },
      { label: 'Common uses', value: 'Cattle pasture, rural boundary, cross fencing, hay fields, and large-acreage property lines' },
      { label: 'Materials', value: 'Wire rolls, T-posts, wood posts, stays, brace materials, tensioners, clips, staples, and insulators' },
      { label: 'Planning factors', value: 'Run length, corners, gates, animal pressure, road frontage, soil, and maintenance access' },
    ],
    proofTitle: 'Practical Rural Fit',
    proof: [
      'The product category directly supports agricultural properties near Bru-Hart headquarters',
      'Fence and gate planning experience helps customers avoid underbuilt corners and weak openings',
      'Clear product pages make it easier for local buyers to request the right material package',
    ],
    faqs: [
      {
        question: 'When should I choose high-tensile instead of barbed wire?',
        answer:
          'High-tensile can make sense for longer tensioned runs and certain managed grazing layouts. Barbed wire remains common for cattle and boundary applications. The right choice depends on animal type, maintenance, layout, and local expectations.',
      },
      {
        question: 'Can Bru-Hart help with repair materials?',
        answer:
          'Yes. The useful starting point is the existing fence type, post type, wire count, damaged length, and whether gates or brace assemblies are involved.',
      },
    ],
    related: [
      { label: 'Agricultural Fencing', href: '/products/agricultural-fencing' },
      { label: 'Fence Materials & Supplies', href: '/products/fence-materials-supplies' },
      { label: 'Field Fence & Woven Wire', href: '/products/field-fence-woven-wire' },
    ],
  },
  {
    category: 'products',
    slug: 'farm-ranch-gates',
    path: '/products/farm-ranch-gates',
    sitemapPriority: 0.78,
    title: 'Farm & Ranch Gates | Pasture, Driveway & Equipment Gates | Bru-Hart',
    description:
      'Farm and ranch gate support for pastures, driveways, equipment openings, livestock areas, hinges, latches, posts, and access hardware.',
    eyebrow: 'Farm & Ranch Gates',
    heroTitle: 'Farm and ranch gates for daily rural access',
    heroDescription:
      'Bru-Hart helps local landowners and contractors select gate types, widths, posts, hinges, latches, and hardware that fit how the property actually works.',
    introTitle: 'The gate gets used more than the fence line.',
    intro:
      'A farm fence may run for hundreds or thousands of feet, but the daily frustration usually happens at the gate. Width, hinge strength, latch style, post support, animal pressure, and equipment access all matter.',
    highlights: [
      'Tube gates, wire-filled gates, pasture gates, driveway gates, and equipment openings',
      'Hinges, latches, gate posts, chain, stops, receivers, and repair hardware',
      'Planning for tractors, trailers, trucks, livestock handling, and pedestrian access',
      'Local support for Branford and surrounding rural properties',
    ],
    sections: [
      {
        title: 'Size the opening for real equipment',
        body:
          'Gate openings should be planned around the vehicles and equipment that will actually pass through them, including trailers, tractors, feed trucks, utility vehicles, and emergency access.',
        bullets: [
          'Driveway and equipment gate width planning',
          'Pasture gates for animals and daily chores',
          'Multiple openings where animal flow and vehicle flow conflict',
        ],
      },
      {
        title: 'Use hardware that can carry the gate',
        body:
          'Undersized hinges, weak latches, and unsupported posts create sagging and repeated repairs. The hardware package should match the gate weight, width, and use frequency.',
        bullets: [
          'Heavy-duty hinge and latch options',
          'Gate posts and braces selected for the opening',
          'Stops, chains, receivers, and safety details for daily use',
        ],
      },
      {
        title: 'Connect farm gates to the broader fence plan',
        body:
          'Gate choices should be made with the fence type, animal area, road frontage, driveway layout, and future expansion in mind. Good gates make the whole property easier to manage.',
        bullets: [
          'Wire, field fence, rail, and driveway gate coordination',
          'Openings for rotational grazing or pasture changes',
          'Repair and replacement planning for older rural gates',
        ],
      },
    ],
    specTitle: 'Farm Gate Inputs',
    specs: [
      { label: 'Gate types', value: 'Tube gates, wire-filled gates, pasture gates, driveway gates, walk gates, and custom rural access gates' },
      { label: 'Hardware', value: 'Hinges, latches, chain, receivers, gate posts, braces, stops, and replacement parts' },
      { label: 'Common openings', value: 'Pastures, barns, equipment lanes, driveways, garden areas, working pens, and property entrances' },
      { label: 'Planning factors', value: 'Gate width, gate weight, animal pressure, post support, latch style, and vehicle turning radius' },
    ],
    proofTitle: 'Gate Knowledge Applied Locally',
    proof: [
      'Bru-Hart already understands gate behavior, hardware, operators, and access points',
      'Farm gates extend that expertise to local rural and agricultural properties',
      'A dedicated page helps neighbors ask for the right gate instead of a generic part',
    ],
    faqs: [
      {
        question: 'What width should a farm gate be?',
        answer:
          'It depends on the equipment and traffic pattern. Driveway and equipment openings often need wider gates than simple walk-through or animal movement gates.',
      },
      {
        question: 'Can farm gates be automated?',
        answer:
          'Some driveway or estate-style gates can be automated, but pasture and livestock gates usually need simple, durable hardware first. Automation should be reviewed against gate weight, safety, power, and use pattern.',
      },
    ],
    related: [
      { label: 'Agricultural Fencing', href: '/products/agricultural-fencing' },
      { label: 'Fence Materials & Supplies', href: '/products/fence-materials-supplies' },
      { label: 'Access Control & Automation', href: '/products/access-control-automation' },
    ],
  },
  {
    category: 'products',
    slug: 'fence-materials-supplies',
    path: '/products/fence-materials-supplies',
    sitemapPriority: 0.78,
    title: 'Fence Materials & Supplies | Posts, Wire, Gates & Hardware | Bru-Hart',
    description:
      'Fence materials and supplies for agricultural, residential, commercial, and security projects, including posts, wire, gates, hardware, braces, and components.',
    eyebrow: 'Fence Materials & Supplies',
    heroTitle: 'Fence materials and supplies for complete project packages',
    heroDescription:
      'Bru-Hart helps customers think through posts, wire, gates, braces, hardware, and components before the project turns into a series of missing parts.',
    introTitle: 'A fence quote should not stop at the visible fence material.',
    intro:
      'Strong fences depend on posts, braces, hardware, fasteners, gate parts, tensioning, and repair materials. This page gives local and commercial buyers a practical way to ask for complete material support.',
    highlights: [
      'Posts, wire, gates, hinges, latches, clips, staples, strainers, and brace materials',
      'Support for agricultural, rural, commercial, and security fence projects',
      'Material conversations that include openings, corners, repairs, and future maintenance',
      'Useful for local buyers and contractors who need more than one product category',
    ],
    sections: [
      {
        title: 'Start with the full material list',
        body:
          'Fence projects often stall because the parts around the main fence material were not counted. Corners, ends, gate openings, terrain changes, and repairs all affect the actual list.',
        bullets: [
          'Line posts, terminal posts, braces, stays, clips, staples, and fasteners',
          'Gate hardware, hinges, latches, stops, and chain',
          'Wire, mesh, rail, fence panels, and compatible accessories',
        ],
      },
      {
        title: 'Support multiple fence categories',
        body:
          'Bru-Hart can connect agricultural material needs with broader gate, security, and access-control knowledge. That helps customers who have mixed properties or contractors working across several job types.',
        bullets: [
          'Agricultural and rural fence materials',
          'Commercial and security fence components',
          'Gate fabrication and access-control-adjacent hardware',
        ],
      },
      {
        title: 'Make repairs easier to discuss',
        body:
          'Local buyers often need repair parts, replacement gates, post materials, and hardware before they need a full new fence. A supplies page gives that demand a clear landing point.',
        bullets: [
          'Storm, animal, and equipment-damage repair material conversations',
          'Replacement gate and hardware support',
          'Compatibility checks for existing fence lines',
        ],
      },
    ],
    specTitle: 'Material Categories',
    specs: [
      { label: 'Posts', value: 'T-posts, wood posts, terminal posts, gate posts, line posts, brace posts, and related hardware' },
      { label: 'Wire and fence', value: 'Field fence, woven wire, barbed wire, high-tensile wire, electric accessories, mesh, rail, and panels' },
      { label: 'Gate hardware', value: 'Hinges, latches, receivers, chains, stops, wheels, guides, operators, and access components where applicable' },
      { label: 'Project types', value: 'Farm, ranch, rural residential, commercial, industrial, security, and custom gate fabrication' },
    ],
    proofTitle: 'A Better RFQ Starting Point',
    proof: [
      'The page supports small local material inquiries and larger contractor quote conversations',
      'Bru-Hart can connect fence materials with gates, hardware, and fabrication components',
      'Complete material planning creates better sales conversations than isolated SKU requests',
    ],
    faqs: [
      {
        question: 'Can I request only repair materials?',
        answer:
          'Yes. Useful details include what is damaged, existing fence type, post type, approximate length, photos if available, and whether a gate or corner assembly is involved.',
      },
      {
        question: 'Does Bru-Hart only sell high-security fence products?',
        answer:
          'No. High-security gates and barriers are a major focus, but the local product strategy also includes agricultural fence, farm gates, and general fence materials suited to Branford and nearby communities.',
      },
    ],
    related: [
      { label: 'Agricultural Fencing', href: '/products/agricultural-fencing' },
      { label: 'Farm & Ranch Gates', href: '/products/farm-ranch-gates' },
      { label: 'Perimeter Security Fencing', href: '/products/perimeter-security-fencing' },
    ],
  },
  {
    category: 'service-areas',
    slug: 'branford-fl-agricultural-fencing',
    path: '/service-areas/branford-fl-agricultural-fencing',
    sitemapPriority: 0.8,
    title: 'Agricultural Fencing in Branford, FL | Farm Gates & Materials | Bru-Hart',
    description:
      'Agricultural fencing, farm gates, field fence, horse fencing, posts, wire, and hardware support for Branford, FL and nearby North Florida communities.',
    eyebrow: 'Branford, FL Agricultural Fence',
    heroTitle: 'Agricultural fence, gates, and materials for Branford, FL',
    heroDescription:
      'Bru-Hart is building a local agricultural fence offering for Branford and surrounding North Florida towns, while continuing to serve commercial gate and perimeter security buyers.',
    introTitle: 'Local agricultural service is part of the business plan.',
    intro:
      'Bru-Hart operates from a rural North Florida community. The local opportunity is not only national security projects; it is also helping nearby landowners, farms, ranches, and homesteads get the right fence materials, farm gates, posts, and hardware.',
    highlights: [
      'Agricultural fence materials for Branford, O Brien, Live Oak, Fort White, Mayo, and nearby areas',
      'Field fence, woven wire, horse fence, barbed wire, high-tensile, posts, braces, and hardware',
      'Farm and ranch gates for pastures, driveways, equipment access, and rural entrances',
      'A visible local page that supports Bru-Hart\'s agricultural land-use commitment',
    ],
    sections: [
      {
        title: 'Serve neighbors with practical fence products',
        body:
          'The page should make it obvious that a local property owner can contact Bru-Hart for farm fence, horse fence, wire, posts, gate hardware, and related materials without having to interpret a high-security-only website.',
        bullets: [
          'Fence and gate support for rural residential and agricultural properties',
          'Material conversations for repairs, expansions, and new fence runs',
          'Quote path for local buyers who prefer phone or in-person conversations',
        ],
      },
      {
        title: 'Use local SEO without creating thin town pages',
        body:
          'Branford deserves a dedicated page because it is the headquarters market and tied to a real local operating commitment. Nearby towns can be mentioned naturally until search data proves that separate service-area pages are justified.',
        bullets: [
          'Start with one strong Branford agricultural fencing page',
          'Mention nearby towns only where it helps users understand service fit',
          'Avoid duplicate city pages unless future search data proves demand',
        ],
      },
      {
        title: 'Connect local ag demand to product pages',
        body:
          'The service-area page should route customers into the exact product categories they need: agricultural fencing, field fence, horse fence, wire fence, farm gates, and general materials.',
        bullets: [
          'Internal links to agricultural product pages',
          'Clear quote CTA for local fence and gate materials',
          'Related links to commercial/security pages where a property has mixed needs',
        ],
      },
    ],
    specTitle: 'Local Fence Categories',
    specs: [
      { label: 'Fence types', value: 'Agricultural fence, field fence, woven wire, horse fence, barbed wire, high-tensile, electric, rail, and ranch fence' },
      { label: 'Gate needs', value: 'Pasture gates, driveway gates, equipment gates, walk gates, gate posts, hinges, latches, and repair hardware' },
      { label: 'Materials', value: 'Wire, posts, braces, clips, staples, strainers, stays, insulators, panels, and compatible accessories' },
      { label: 'Nearby areas', value: 'Branford, O Brien, Live Oak, Fort White, Mayo, Suwannee County, Lafayette County, and Gilchrist County' },
    ],
    proofTitle: 'Why This Page Deserves To Exist',
    proof: [
      'It reflects a real local agricultural commitment rather than a generic SEO city page',
      'It gives council members, neighbors, and local buyers an obvious place to see the ag-focused offer',
      'It keeps local agricultural demand organized separately from Bru-Hart\'s national high-security content',
    ],
    decisionMatrix: [
      {
        option: 'Branford agricultural fence materials',
        chooseWhen: 'A nearby buyer needs farm fence, wire, posts, gates, braces, or repair materials for a working rural property.',
        avoidWhen: 'The inquiry is really a national security gate, crash-rated, or commercial access-control project that belongs in the high-security structure.',
        notes: 'Keep this page grounded in real local service: what Bru-Hart can quote, source, stock, display, deliver, or arrange locally.',
      },
      {
        option: 'Nearby town service mention',
        chooseWhen: 'A buyer is in O Brien, Live Oak, Fort White, Mayo, or another nearby town and the service reality is the same.',
        avoidWhen: 'The only goal is to create thin duplicate city pages without proof, local photos, or inquiry data.',
        notes: 'Expand town pages only after Search Console, calls, photos, and actual service history justify them.',
      },
      {
        option: 'High-security / commercial cross-sell',
        chooseWhen: 'A local agricultural, rural commercial, or estate property also needs gates, operators, access control, or stronger perimeter planning.',
        avoidWhen: 'The local buyer just needs simple material guidance and would be confused by national-security language.',
        notes: 'This page should show the local offer first, then route complex gate needs into the broader Bru-Hart structure.',
      },
    ],
    rfqChecklist: [
      { label: 'Location', detail: 'Property city, road/area, pickup or delivery expectation, and whether Bru-Hart should quote local material support.' },
      { label: 'Property use', detail: 'Pasture, homestead, horse property, cattle operation, garden, driveway, commercial rural site, or repair project.' },
      { label: 'Material list', detail: 'Wire/fence type, posts, brace assemblies, gates, hinges, latches, clips, staples, strainers, and repair parts.' },
      { label: 'Photos', detail: 'Send photos of existing fence, gates, corners, terrain, washouts, animals, and any failed materials.' },
      { label: 'Timeline', detail: 'Immediate repair, planned build, seasonal need, contractor schedule, or council/neighbor-facing local commitment.' },
    ],
    availabilityNotes: [
      { label: 'Service area', value: 'Branford is the anchor page because it is tied to headquarters and the agricultural land-use commitment.' },
      { label: 'Expansion rule', value: 'Nearby city pages should be created only when real demand and proof assets justify them.' },
      { label: 'Proof path', value: 'Local photos, neighbor testimonials, product displays, and project notes should be added before this page is considered mature.' },
    ],
    downloads: [
      { label: 'Branford Agricultural Fence Quote Sheet', description: 'A local quote sheet for farm fence, gates, posts, hardware, repair materials, pickup, and delivery inputs.', status: 'Needs PDF/spec sheet' },
      { label: 'Local Product Availability List', description: 'Stocked, sourced, special-order, and quote-only agricultural categories for Branford-area buyers.', status: 'Needs product truth' },
    ],
    proofAssets: [
      { label: 'Branford Yard / Product Display Photos', description: 'Images of local agricultural fence materials, wire, gates, posts, hardware, signage, and pickup/delivery readiness.', status: 'Needs photos' },
      { label: 'Local Buyer Quotes', description: 'Short approved comments from nearby landowners, contractors, or agricultural buyers.', status: 'Proof needed' },
      { label: 'Council Commitment Context', description: 'Approved language and photos showing Bru-Hart is serving the agricultural fence needs it committed to support.', status: 'Needs approval' },
    ],
    faqs: [
      {
        question: 'Why does Bru-Hart have a Branford agricultural fencing page?',
        answer:
          'Because the company is headquartered in Branford and has committed to serving agricultural fence, gate, and material needs that fit the surrounding rural community.',
      },
      {
        question: 'Should Bru-Hart create separate pages for every nearby town?',
        answer:
          'Not yet. The better first move is one strong Branford/North Florida page supported by specific product pages. Separate town pages should only be created if search data and real demand justify them.',
      },
    ],
    related: [
      { label: 'Agricultural Fencing', href: '/products/agricultural-fencing' },
      { label: 'Horse Fencing', href: '/products/horse-fencing' },
      { label: 'Fence Materials & Supplies', href: '/products/fence-materials-supplies' },
    ],
  },
  {
    category: 'industries',
    slug: 'data-center-security-gates',
    path: '/industries/data-center-security-gates',
    sitemapPriority: 0.88,
    title: 'Data Center Security Gates & Perimeter Barriers | Bru-Hart',
    description:
      'Crash-rated gates, barriers, fencing, bollards, and access-control planning for data center perimeter security and service-yard protection.',
    eyebrow: 'Data Center Perimeter Security',
    heroTitle: 'Data center security gates for uptime-critical sites',
    heroDescription:
      'Bru-Hart helps data center teams and contractors secure vehicle access points, service yards, generator areas, and perimeter openings with gate and barrier systems built around operational continuity.',
    introTitle: 'Physical access points are part of data center uptime.',
    intro:
      'Data centers already treat cyber, power, cooling, and redundancy seriously. Vehicle entrances, loading areas, generator yards, and perimeter roads deserve the same level of planning because they can expose critical assets and operations.',
    highlights: [
      'Crash-rated gates, bollards, barriers, and fencing options',
      'Access control and operator planning for authorized vehicle flow',
      'Support for service yards, loading areas, generator zones, and visitor entries',
      'Security layers that protect without disrupting daily operations',
    ],
    sections: [
      {
        title: 'Secure the vehicle paths first',
        body:
          'The highest-value planning often starts with how vehicles approach the site. Entrances, service lanes, loading docks, and generator yards each need a different mix of gate, barrier, and access control.',
        bullets: [
          'Crash-rated gates for controlled perimeter openings',
          'Bollards or wedges for entry hardening',
          'Crash-rated or anti-climb fencing for perimeter reinforcement',
        ],
      },
      {
        title: 'Design for operations, not just impact resistance',
        body:
          'Data centers need secure access that works for deliveries, technicians, vendors, guards, and emergency response. Cycle count, fail mode, controls, and monitoring need to be considered early.',
        bullets: [
          'High-cycle operators and backup power considerations',
          'Visitor, vendor, and employee credential workflows',
          'Guard and remote release coordination',
        ],
      },
      {
        title: 'Layer gates, fencing, and barriers',
        body:
          'A data center perimeter rarely depends on one product. Bru-Hart can help coordinate the vehicle gate, fence system, bollards, barriers, and access control so the site has fewer weak points.',
        bullets: [
          'Perimeter fencing and anti-climb options',
          'Crash barriers at vulnerable vehicle approaches',
          'Access-control integration at vehicle and pedestrian openings',
        ],
      },
    ],
    specTitle: 'Data Center Security Inputs',
    specs: [
      { label: 'Protected zones', value: 'Main entrances, service roads, loading docks, generator yards, and perimeter roads' },
      { label: 'Common products', value: 'Crash gates, bollards, wedges, barrier arms, security fencing, and access control' },
      { label: 'Operational factors', value: 'Uptime, high cycle counts, vendor access, guard procedures, and emergency access' },
      { label: 'Security questions', value: 'Approach speed, stand-off, vehicle authorization, detection, and fail-safe behavior' },
    ],
    proofTitle: 'Why Bru-Hart Is Relevant',
    proof: [
      'Experience with critical-infrastructure gate and perimeter security categories',
      'Sourcing support across gates, barriers, fencing, operators, and hardware',
      'Practical support for contractors serving high-stakes facilities',
    ],
    decisionMatrix: [
      {
        option: 'Crash-rated vehicle gate',
        chooseWhen: 'A controlled vehicle opening needs documented vehicle mitigation and must still operate for vendors, staff, service, or emergency access.',
        avoidWhen: 'The site can harden the vehicle approach more effectively with fixed or active barriers away from the gate opening.',
        notes: 'Confirm rating language, clear opening, backspace, cycle count, operators, controls, and exact documentation expectations.',
      },
      {
        option: 'Bollards, wedges, or beams',
        chooseWhen: 'The access path needs vehicle mitigation at a checkpoint, service lane, generator yard, or building approach.',
        avoidWhen: 'The buyer is trying to solve a daily traffic-control problem with a barrier that is too disruptive to operate.',
        notes: 'Separate fixed protection from active access early so the package protects assets without slowing operations unnecessarily.',
      },
      {
        option: 'Security fence plus access control',
        chooseWhen: 'The priority is layered perimeter protection, credentialed movement, anti-climb deterrence, and controlled pedestrian or vehicle openings.',
        avoidWhen: 'The approach-speed or vehicle-threat requirement clearly calls for a rated barrier product.',
        notes: 'Fence, gates, operators, credentials, monitoring, and maintenance parts should be planned as one package.',
      },
    ],
    rfqChecklist: [
      { label: 'Zones', detail: 'Main entrance, service lane, loading dock, generator yard, fuel area, perimeter road, visitor lane, or contractor access.' },
      { label: 'Threat', detail: 'Approach path, vehicle speed assumptions, stand-off, protected asset, and whether crash-rating language is specified.' },
      { label: 'Operation', detail: 'Vendor flow, guard process, cycle count, fail mode, emergency access, backup power, and maintenance expectations.' },
      { label: 'Controls', detail: 'Operators, loops, photo eyes, card readers, intercoms, guard controls, remote release, and monitoring requirements.' },
      { label: 'Proof', detail: 'Site plans, photos, bid documents, security requirements, existing gate/fence details, and manufacturer preferences.' },
    ],
    availabilityNotes: [
      { label: 'Package logic', value: 'Data center perimeter work is usually a package decision: gates, barriers, fence, operators, controls, and serviceability.' },
      { label: 'Documentation', value: 'Rating and safety claims should be tied to exact manufacturer documentation, not broad product-category language.' },
      { label: 'Sales fit', value: 'This page is built for qualified RFQs where uptime, security, and operational continuity matter more than commodity material pricing.' },
    ],
    downloads: [
      { label: 'Data Center Perimeter RFQ Checklist', description: 'Checklist for zones, vehicle paths, gate openings, barrier needs, controls, and documentation inputs.', status: 'Needs PDF/spec sheet' },
      { label: 'Access Zone Planning Worksheet', description: 'Worksheet for separating public, vendor, service, emergency, and protected-equipment access paths.', status: 'Needs worksheet' },
    ],
    proofAssets: [
      { label: 'Data Center Access-Zone Diagram', description: 'A simple diagram showing where gates, barriers, fence, operators, and controls belong around a data center site.', status: 'Needs illustration' },
      { label: 'Critical-Infrastructure Support Story', description: 'An approved or anonymized example showing how Bru-Hart helped avoid a weak access-point decision.', status: 'Proof needed' },
      { label: 'Product / Manufacturer Documentation Examples', description: 'Approved documents for gates, barriers, operators, safety devices, and security fencing used in data center-style projects.', status: 'Needs manufacturer approval' },
    ],
    sourceReferences: [
      {
        label: 'ASTM F2656/F2656M',
        href: 'https://store.astm.org/f2656_f2656m-20.html',
        description: 'Primary standard reference for vehicle crash testing of perimeter barriers.',
      },
      {
        label: 'ASTM F2200',
        href: 'https://store.astm.org/f2200-11b.html',
        description: 'Reference standard for automated vehicular gate construction requirements.',
      },
    ],
    faqs: [
      {
        question: 'Do data centers need crash-rated gates?',
        answer:
          'Many do, especially where a vehicle can approach critical assets, service yards, loading docks, or occupied areas. The rating should be selected based on the site conditions and security requirements.',
      },
      {
        question: 'What should be protected besides the main gate?',
        answer:
          'Generator yards, fuel areas, service entrances, loading docks, visitor lanes, and long straight approaches are often worth reviewing during perimeter planning.',
      },
    ],
    related: [
      { label: 'Crash Rated Gates', href: '/products/crash-rated-gates' },
      { label: 'Access Control & Automation', href: '/products/access-control-automation' },
      { label: 'Crash Rated Barriers', href: '/products/crash-rated-barriers' },
    ],
  },
  {
    category: 'industries',
    slug: 'utility-substation-security',
    path: '/industries/utility-substation-security',
    sitemapPriority: 0.86,
    title: 'Utility Substation Security Gates & Fencing | Bru-Hart',
    description:
      'Security gates, crash-rated barriers, anti-climb fencing, bollards, and access-control planning for utility substations and energy infrastructure.',
    eyebrow: 'Utility & Substation Security',
    heroTitle: 'Substation security gates and fencing for critical utility assets',
    heroDescription:
      'Bru-Hart supports utility, energy, and contractor teams with perimeter security products that protect access points, equipment yards, and remote infrastructure.',
    introTitle: 'Utility sites need security that holds up without constant attention.',
    intro:
      'Substations and energy assets are often remote, exposed, and expensive to disrupt. Gates, fencing, barriers, and access control need to resist intrusion while staying serviceable for crews and emergency response.',
    highlights: [
      'Anti-climb, anti-cut, and crash-rated perimeter options',
      'Vehicle gate, bollard, and barrier planning for service entrances',
      'Access control for crews, contractors, and restricted zones',
      'Support for remote, harsh, and high-consequence sites',
    ],
    sections: [
      {
        title: 'Protect the perimeter and the service opening',
        body:
          'The fence line may deter unauthorized entry, but the service gate is often the operational weak point. Substation gate systems should account for crew access, vehicle size, lockout needs, and barrier requirements.',
        bullets: [
          'Heavy-duty vehicle and pedestrian gates',
          'Anti-climb and anti-cut fencing options',
          'Crash-rated barrier support for vulnerable approaches',
        ],
      },
      {
        title: 'Plan for remote operation and maintenance',
        body:
          'Utility assets cannot depend on fragile equipment. Components should be selected for weather exposure, serviceability, clear documentation, and reliable operation under field conditions.',
        bullets: [
          'Corrosion and weather exposure considerations',
          'Manual operation and backup access planning',
          'Standardized hardware and replacement parts where possible',
        ],
      },
      {
        title: 'Coordinate security with electrical-site realities',
        body:
          'Clearances, grounding, utilities, access roads, and emergency procedures all affect the perimeter design. Bru-Hart can help keep product selection grounded in what can actually be built and maintained.',
        bullets: [
          'Gate and barrier placement around equipment access',
          'Fence transitions and utility penetrations',
          'Access-control plans for crews and contractors',
        ],
      },
    ],
    specTitle: 'Substation Security Inputs',
    specs: [
      { label: 'Assets', value: 'Substations, transformer yards, switchyards, power plants, and remote utility properties' },
      { label: 'Common products', value: 'Security fencing, crash barriers, slide gates, cantilever gates, bollards, and access control' },
      { label: 'Site factors', value: 'Remote access, weather, crew access, service vehicles, utilities, and emergency entry' },
      { label: 'Security layers', value: 'Deter, delay, control access, and harden vulnerable vehicle approaches' },
    ],
    proofTitle: 'Useful For Utility Contractors',
    proof: [
      'Wholesale-oriented support for contractors and project teams',
      'Gate, fence, barrier, and hardware sourcing in one conversation',
      'Experience with critical-infrastructure requirements and field constraints',
    ],
    faqs: [
      {
        question: 'What type of fencing is best for substations?',
        answer:
          'It depends on risk, visibility, environment, and compliance requirements. Anti-climb mesh, welded wire, chain link with enhancements, and barrier-backed systems can all be valid in different situations.',
      },
      {
        question: 'Do remote utility sites need automated gates?',
        answer:
          'Sometimes. Automation can improve controlled access, but remote sites need careful planning for power, communications, emergency access, manual operation, and maintenance.',
      },
    ],
    related: [
      { label: 'Perimeter Security Fencing', href: '/products/perimeter-security-fencing' },
      { label: 'Crash Rated Barriers', href: '/products/crash-rated-barriers' },
      { label: 'Access Control & Automation', href: '/products/access-control-automation' },
    ],
  },
  {
    category: 'industries',
    slug: 'airport-perimeter-security',
    path: '/industries/airport-perimeter-security',
    sitemapPriority: 0.84,
    title: 'Airport Perimeter Security Gates & Barriers | Bru-Hart',
    description:
      'Airport perimeter gates, crash-rated barriers, access-control systems, and security fencing for aviation facilities and restricted vehicle openings.',
    eyebrow: 'Airport & Aviation Security',
    heroTitle: 'Airport perimeter security gates for controlled movement',
    heroDescription:
      'Bru-Hart helps aviation project teams secure vehicle access points, service gates, restricted zones, and perimeter fence lines while preserving operational flow.',
    introTitle: 'Airports need secure openings that still move traffic.',
    intro:
      'Airport perimeters include service roads, tarmac access, maintenance gates, tenant areas, fuel zones, and public-facing approaches. Each opening needs the right balance of vehicle control, credentialing, safety, and uptime.',
    highlights: [
      'Crash-rated gates, bollards, wedges, barriers, and fencing options',
      'Vehicle and pedestrian access-control coordination',
      'Support for service gates, airside entrances, fuel areas, and maintenance zones',
      'Planning for high-cycle, restricted-access, and staffed entrances',
    ],
    sections: [
      {
        title: 'Separate public, service, and restricted access patterns',
        body:
          'Airport access points have different risk and traffic profiles. A visitor parking entrance, fuel-service gate, airside service road, and emergency access point should not be specified the same way.',
        bullets: [
          'Airside and landside gate planning',
          'Service vehicle and emergency access considerations',
          'Guarded and credentialed access workflows',
        ],
      },
      {
        title: 'Harden vehicle approaches where needed',
        body:
          'Crash-rated gates, bollards, wedges, and barrier arms may be appropriate where unauthorized vehicle entry could expose restricted areas, aircraft operations, or critical infrastructure.',
        bullets: [
          'Crash-rated vehicle barriers for high-risk approaches',
          'Barrier arms and gate systems for vehicle control',
          'Fencing transitions around access openings',
        ],
      },
      {
        title: 'Plan for reliability and safety',
        body:
          'Airport security gates often operate repeatedly and under supervision. Operators, safety devices, backup power, manual release, and maintenance access need to be part of the specification.',
        bullets: [
          'High-cycle operators and control sequencing',
          'UL 325 and ASTM F2200 safety conversations',
          'Backup access and emergency operation planning',
        ],
      },
    ],
    specTitle: 'Airport Security Inputs',
    specs: [
      { label: 'Openings', value: 'Service roads, airside gates, fuel zones, maintenance access, emergency lanes, and tenant yards' },
      { label: 'Products', value: 'Crash gates, barrier arms, bollards, wedges, anti-climb fencing, operators, and credentials' },
      { label: 'Planning factors', value: 'Traffic flow, restricted areas, guard procedures, emergency access, and cycle count' },
      { label: 'Security layers', value: 'Vehicle mitigation, access control, perimeter fencing, and monitored operation' },
    ],
    proofTitle: 'Why Bru-Hart Fits Aviation Projects',
    proof: [
      'Experience with high-security gate and barrier categories',
      'Manufacturer relationships across fence, gate, hardware, and access-control products',
      'Support for contractors who need correct components and clean specification language',
    ],
    faqs: [
      {
        question: 'What airport openings usually need the most attention?',
        answer:
          'Service roads, airside access gates, fuel zones, emergency lanes, and maintenance entrances often deserve early review because they combine vehicle movement with restricted-area exposure.',
      },
      {
        question: 'Can airport gates be both crash rated and automated?',
        answer:
          'Yes, depending on product and layout. The operator, control sequence, safety devices, and emergency operation need to be coordinated with the crash-rated gate or barrier system.',
      },
    ],
    related: [
      { label: 'Crash Rated Gates', href: '/products/crash-rated-gates' },
      { label: 'Perimeter Security Fencing', href: '/products/perimeter-security-fencing' },
      { label: 'Access Control & Automation', href: '/products/access-control-automation' },
    ],
  },
  {
    category: 'industries',
    slug: 'government-facility-security',
    path: '/industries/government-facility-security',
    sitemapPriority: 0.84,
    title: 'Government Facility Security Gates & Barriers | Bru-Hart',
    description:
      'Crash-rated gates, vehicle barriers, bollards, fencing, and access-control systems for government, municipal, military, and restricted-access facilities.',
    eyebrow: 'Government & Restricted Access',
    heroTitle: 'Government facility security gates and barriers',
    heroDescription:
      'Bru-Hart helps secure restricted vehicle openings, perimeter fence lines, public approaches, and staff access points for government and high-security facilities.',
    introTitle: 'Government sites need documented, defensible perimeter choices.',
    intro:
      'Municipal buildings, military sites, public safety facilities, and restricted campuses often need perimeter products that are more than visually secure. They need selection logic, product documentation, and installation planning that can survive review.',
    highlights: [
      'Crash-rated gates, bollards, beams, wedges, and barrier systems',
      'Anti-climb and crash-rated fence coordination',
      'Access-control planning for staff, visitors, service vehicles, and guards',
      'Specification support for ASTM F2656 and legacy K-rating requirements',
    ],
    sections: [
      {
        title: 'Start with threat, access, and public interface',
        body:
          'Government facilities often blend secure operations with public-facing access. The barrier plan should distinguish staff entrances, visitor lanes, service gates, emergency access, and sensitive zones.',
        bullets: [
          'Vehicle mitigation at public approaches',
          'Secure staff and service entrances',
          'Pedestrian and vehicle flow separation',
        ],
      },
      {
        title: 'Use ratings where ratings are required',
        body:
          'When a project calls for ASTM F2656, M-ratings, or K-ratings, the product selection and wording should be accurate. Bru-Hart can help contractors and owners source options that match the required documentation.',
        bullets: [
          'M30, M40, M50 and K4, K8, K12 terminology support',
          'Crash gates, bollards, beams, wedges, and rated fencing options',
          'Product documentation reviewed before bid or procurement',
        ],
      },
      {
        title: 'Make daily operation part of the design',
        body:
          'Security that slows staff, service providers, emergency response, or public access can create operational problems. Gate controls, fail modes, and maintenance access should be planned alongside the barrier product.',
        bullets: [
          'Credential, guard, and visitor workflow coordination',
          'Emergency access and manual operation planning',
          'Safety and operator requirements considered early',
        ],
      },
    ],
    specTitle: 'Government Facility Inputs',
    specs: [
      { label: 'Facilities', value: 'Municipal sites, courthouses, public safety, military support, restricted campuses, and agencies' },
      { label: 'Products', value: 'Crash gates, bollards, wedges, beams, fencing, operators, card readers, and guard controls' },
      { label: 'Security factors', value: 'Public access, restricted zones, vehicle threat, documentation, and emergency response' },
      { label: 'Spec language', value: 'ASTM F2656, M-ratings, K-ratings, penetration rating, operator class, and access workflow' },
    ],
    proofTitle: 'Bru-Hart Support',
    proof: [
      'High-security product sourcing and contractor support',
      'Gate and fence industry experience spanning decades',
      'Practical RFQ support when government projects require clear product documentation',
    ],
    faqs: [
      {
        question: 'Are K-ratings still used?',
        answer:
          'Yes, they are still commonly referenced, even though modern projects often use ASTM F2656 M-ratings and penetration ratings. The spec should be translated carefully.',
      },
      {
        question: 'Can security barriers be made less industrial-looking?',
        answer:
          'Often, yes. Decorative covers, ornamental fencing, architectural infill, and careful placement can improve appearance, but the rated barrier assembly and installation requirements still control performance.',
      },
    ],
    related: [
      { label: 'ASTM F2656 Guide', href: '/resources/astm-f2656-crash-ratings' },
      { label: 'Bollards & Barriers', href: '/products/bollards-barriers' },
      { label: 'Perimeter Security Fencing', href: '/products/perimeter-security-fencing' },
    ],
  },
  {
    category: 'custom-fabrication',
    slug: 'enclosed-aluminum-gate-track',
    path: '/custom-fabrication/enclosed-aluminum-gate-track',
    sitemapPriority: 0.86,
    title: 'Enclosed Aluminum Gate Track | BH Track Systems | Bru-Hart',
    description:
      'Made-in-USA enclosed aluminum gate track systems for fabricators building smoother, lower-maintenance commercial and industrial cantilever gates.',
    eyebrow: 'BH Track System',
    heroTitle: 'Enclosed aluminum gate track for commercial gate fabricators',
    heroDescription:
      'BH Track gives fabricators a domestic, smooth-running enclosed track option for custom cantilever and sliding gate builds.',
    introTitle: 'Track quality determines how the finished gate feels in the field.',
    intro:
      'Fabricators can build a strong frame and still lose the customer if the gate drags, chatters, binds, or creates callbacks. The track and truck system is where a commercial gate becomes a reliable operating asset.',
    highlights: [
      'Made-in-USA custom extruded aluminum track',
      'Enclosed design helps protect moving components from debris',
      'Designed to pair with Bru-Hart CNC-milled trucks',
      'Wholesale pricing and custom lengths for fabricators',
    ],
    sections: [
      {
        title: 'Built for fewer callbacks',
        body:
          'An enclosed aluminum track helps keep the running surface protected while reducing corrosion concerns and supporting smoother movement over the life of the gate.',
        bullets: [
          'Debris-resistant enclosed profile',
          'Corrosion-resistant aluminum construction',
          'Smooth operation for commercial and industrial gate builds',
        ],
      },
      {
        title: 'Designed for fabricators',
        body:
          'The goal is not to sell another generic component. It is to give gate builders a repeatable track and truck system they can trust on paid commercial work.',
        bullets: [
          'Custom lengths available',
          'Wholesale component support',
          'Pairs with precision CNC-milled truck assemblies',
        ],
      },
      {
        title: 'Use it as a system',
        body:
          'The best performance comes from matching track, trucks, frame, gate weight, and operator. Bru-Hart can help fabricators think through the package before the gate is built.',
        bullets: [
          'Component pairing with Bru-Hart trucks',
          'Commercial gate fabrication support',
          'Operator and access-control considerations when needed',
        ],
      },
    ],
    specTitle: 'BH Track Inputs',
    specs: [
      { label: 'Product type', value: 'Custom extruded enclosed aluminum gate track' },
      { label: 'Best fit', value: 'Commercial and industrial gate fabricators building cantilever or sliding gate systems' },
      { label: 'Support', value: 'Wholesale pricing, custom lengths, track and truck pairing, and component guidance' },
      { label: 'Related component', value: 'Bru-Hart CNC-milled gate trucks' },
    ],
    proofTitle: 'Why Fabricators Care',
    proof: [
      'Domestic manufacturing and reliable supply matter when projects are moving',
      'Smoother gates create fewer callbacks and better customer confidence',
      'Bru-Hart understands gate fabrication, not just part numbers',
    ],
    decisionMatrix: [
      {
        option: 'BH Track enclosed aluminum track',
        chooseWhen: 'A fabricator wants a smoother, cleaner-running commercial gate system with protected rolling components and a repeatable track/truck pairing.',
        avoidWhen: 'The gate design, weight, opening, operator, or field environment has not been reviewed enough to confirm fit.',
        notes: 'Confirm clear opening, total gate length, gate weight, truck pairing, operator plan, finish, cut requirements, and deadline.',
      },
      {
        option: 'Generic exposed roller / track hardware',
        chooseWhen: 'The application is simple, low-risk, already designed around exposed components, and price is the controlling factor.',
        avoidWhen: 'Callbacks, corrosion, debris, operator strain, or customer feel would create a bigger cost than a better component package.',
        notes: 'Use the choose/avoid language to explain why Bru-Hart is not just selling a part; it is protecting the finished gate experience.',
      },
      {
        option: 'Custom track package review',
        chooseWhen: 'The fabricator has an unusual opening, special length, heavy gate, tight schedule, replacement problem, or operator concern.',
        avoidWhen: 'The buyer only wants a generic SKU and will not share the details needed to confirm fit.',
        notes: 'This is where Dana-style expertise should show: asking better questions before the gate is built.',
      },
    ],
    rfqChecklist: [
      { label: 'Opening', detail: 'Clear opening, available backspace, gate height, total gate length, site constraints, and whether the gate is new or replacement.' },
      { label: 'Gate build', detail: 'Frame material, estimated weight, infill, wind exposure, operator plan, duty cycle, and expected customer use.' },
      { label: 'Track need', detail: 'Desired length, quantity, cut requirements, finish, truck pairing, packaging, pickup/shipping, and deadline.' },
      { label: 'Compatibility', detail: 'Existing hardware, current failure, replacement dimensions, preferred truck assembly, and any manufacturer constraints.' },
      { label: 'Proof', detail: 'Shop drawings, photos of the gate/track, product dimensions, project schedule, and callback problem if applicable.' },
    ],
    availabilityNotes: [
      { label: 'Product path', value: 'Custom lengths and wholesale support should be confirmed with Bru-Hart before a fabrication schedule is locked.' },
      { label: 'System fit', value: 'Best evaluated with gate weight, opening, truck pairing, operator expectations, and field conditions.' },
      { label: 'Positioning', value: 'This page should be a signature Bru-Hart differentiator because major distributors are harder to beat on commodity SKUs than on expert component fit.' },
    ],
    downloads: [
      { label: 'BH Track Sell Sheet', description: 'Dimensions, profile, pairing notes, order inputs, application fit, and quote requirements.', status: 'Needs PDF/spec sheet' },
      { label: 'BH Track Shop Drawing', description: 'Profile drawing and dimensional reference for fabricators, plus approved CAD/PDF versions if available.', status: 'Needs drawing/CAD file' },
      { label: 'Track & Truck Pairing Guide', description: 'A simple guide explaining what information is needed to pair BH Track with CNC-milled trucks.', status: 'Needs technical review' },
    ],
    proofAssets: [
      { label: 'Track Product Photos', description: 'Close-up photos of the track profile, cut lengths, packaging, yard inventory, and installed examples.', status: 'Needs photos' },
      { label: 'Fabricator Testimonial', description: 'Approved quote from a fabricator or contractor about smoother operation, fewer callbacks, or better customer confidence.', status: 'Proof needed' },
      { label: 'Before / After Gate Operation Story', description: 'An approved example where better track/truck selection improved a gate that was binding, dragging, or creating callbacks.', status: 'Proof needed' },
    ],
    faqs: [
      {
        question: 'Why use enclosed track instead of exposed hardware?',
        answer:
          'An enclosed profile helps protect the rolling path and truck system from debris and weather exposure, which can improve long-term operation when the system is properly designed.',
      },
      {
        question: 'Can Bru-Hart cut track to custom lengths?',
        answer:
          'The current custom fabrication offer includes custom lengths. Confirm opening size, gate design, and truck selection before ordering.',
      },
    ],
    related: [
      { label: 'CNC-Milled Gate Trucks', href: '/custom-fabrication/cnc-milled-gate-trucks' },
      { label: 'Cantilever Gate Systems', href: '/products/cantilever-gate-systems' },
      { label: 'Custom Fabrication', href: '/custom-fabrication' },
    ],
  },
  {
    category: 'custom-fabrication',
    slug: 'cnc-milled-gate-trucks',
    path: '/custom-fabrication/cnc-milled-gate-trucks',
    sitemapPriority: 0.84,
    title: 'CNC-Milled Gate Trucks | Commercial Gate Components | Bru-Hart',
    description:
      'Made-in-USA CNC-milled gate trucks designed to pair with BH Track systems for smooth commercial and industrial gate operation.',
    eyebrow: 'Precision Gate Components',
    heroTitle: 'CNC-milled gate trucks for smoother commercial gates',
    heroDescription:
      'Bru-Hart supplies precision truck assemblies for fabricators who need commercial gate components that roll cleanly and stand up to real use.',
    introTitle: 'The truck assembly is where gate weight becomes motion.',
    intro:
      'A gate can look perfect in the shop and still disappoint in service if the rolling hardware is not up to the load, alignment, and cycle count. Bru-Hart trucks are positioned for fabricators who want smoother movement and fewer field issues.',
    highlights: [
      'Made-in-USA CNC-machined truck components',
      'Designed to pair with BH Track enclosed aluminum track',
      'Heavy-duty construction for commercial gate builds',
      'Wholesale component support for fabricators',
    ],
    sections: [
      {
        title: 'Precision matters under load',
        body:
          'Gate trucks carry the moving assembly and influence smoothness, alignment, vibration, and operator strain. Consistent machining helps the gate builder control those variables.',
        bullets: [
          'CNC-machined consistency',
          'Designed for smooth rolling action',
          'Built for commercial and industrial gate demands',
        ],
      },
      {
        title: 'Match the truck to the track',
        body:
          'Bru-Hart trucks are designed to pair with BH Track so fabricators can source a compatible system instead of forcing parts together late in the build.',
        bullets: [
          'Track and truck pairing support',
          'System-oriented component planning',
          'Wholesale pricing for fabricators and contractors',
        ],
      },
      {
        title: 'Protect the finished gate and your reputation',
        body:
          'Smooth operation is one of the first things a customer notices. Better component selection can reduce callbacks, operator strain, and field troubleshooting.',
        bullets: [
          'Cleaner movement during manual or automated operation',
          'Reduced strain on properly selected gate operators',
          'Higher confidence in repeatable commercial builds',
        ],
      },
    ],
    specTitle: 'Gate Truck Inputs',
    specs: [
      { label: 'Product type', value: 'CNC-milled gate trucks for commercial gate systems' },
      { label: 'Best fit', value: 'Fabricators building cantilever and sliding gate assemblies' },
      { label: 'Pairing', value: 'Designed to work with BH Track enclosed aluminum track' },
      { label: 'Planning factors', value: 'Gate weight, track profile, alignment, cycle count, and operator selection' },
    ],
    proofTitle: 'Field-Oriented Component Support',
    proof: [
      'Bru-Hart sells to people who have to make the gate work after installation',
      'Component quality helps protect both customer experience and fabricator reputation',
      'Support comes from fence and gate experience, not generic hardware sales',
    ],
    decisionMatrix: [
      {
        option: 'Bru-Hart CNC-milled gate trucks',
        chooseWhen: 'The gate needs smoother operation, consistent fit, and a truck assembly designed to work with the BH Track system.',
        avoidWhen: 'The project cannot confirm track compatibility, gate weight, alignment, or the load conditions the trucks will carry.',
        notes: 'Confirm track profile, gate weight, expected cycle count, operator plan, and replacement dimensions before quoting.',
      },
      {
        option: 'Generic replacement trucks',
        chooseWhen: 'The buyer is replacing like-for-like hardware on a low-risk gate and compatibility is already proven.',
        avoidWhen: 'The existing gate is failing, dragging, binding, wearing unevenly, or overloading the operator.',
        notes: 'A cheap truck can become expensive if it creates callbacks, operator strain, or another field failure.',
      },
      {
        option: 'Full gate movement review',
        chooseWhen: 'The issue may involve gate frame, alignment, track, trucks, guide rollers, operators, grade, or wind exposure.',
        avoidWhen: 'The buyer refuses to provide dimensions/photos and wants a blind recommendation.',
        notes: 'This is a strong page for expert sourcing because the right part depends on the whole moving system.',
      },
    ],
    rfqChecklist: [
      { label: 'Gate', detail: 'Gate type, clear opening, gate weight estimate, frame material, infill, height, and total gate length.' },
      { label: 'Track', detail: 'BH Track or existing track profile, dimensions, condition, alignment, and whether this is new build or replacement.' },
      { label: 'Operation', detail: 'Manual or automated, operator model if known, cycle count, speed expectations, guide hardware, and current symptoms.' },
      { label: 'Quantity', detail: 'Number of trucks, spare needs, finish/hardware requirements, delivery deadline, and whether the project needs a paired track package.' },
      { label: 'Photos', detail: 'Close-up photos of current trucks, track, gate frame, wear marks, guides, operator, and site conditions.' },
    ],
    availabilityNotes: [
      { label: 'Compatibility', value: 'Designed to pair with BH Track; any other use should be reviewed before quoting as compatible.' },
      { label: 'Proof path', value: 'The page should gain photos, product drawings, tolerances if approved, and fabricator testimonials as soon as they are available.' },
      { label: 'Sales fit', value: 'Best for fabricators and contractors who care about repeatable gate performance, not only lowest hardware price.' },
    ],
    downloads: [
      { label: 'CNC Gate Truck Sell Sheet', description: 'Product photos, dimensions, pairing notes, order inputs, load/application guidance if approved, and quote requirements.', status: 'Needs PDF/spec sheet' },
      { label: 'Replacement Truck Measurement Guide', description: 'How to photograph and measure old trucks, track, wear points, and alignment issues before requesting a replacement quote.', status: 'Needs PDF/spec sheet' },
      { label: 'BH Track + Truck Package Sheet', description: 'Combined page showing how the track and truck system should be quoted together.', status: 'Needs technical review' },
    ],
    proofAssets: [
      { label: 'Truck Product Photos', description: 'Close-up photos from multiple angles, installed examples, packaging, and side-by-side comparison with common generic trucks if approved.', status: 'Needs photos' },
      { label: 'Fabricator Performance Quote', description: 'Approved quote from a gate builder about fit, rolling behavior, or reduced troubleshooting.', status: 'Proof needed' },
      { label: 'Replacement Diagnosis Story', description: 'A real example where Bru-Hart identified the right truck/track issue from photos, dimensions, or symptoms.', status: 'Proof needed' },
    ],
    faqs: [
      {
        question: 'Are the trucks only for BH Track?',
        answer:
          'They are designed to pair with BH Track. Confirm compatibility before using them in any other track system.',
      },
      {
        question: 'Why does CNC machining matter for gate trucks?',
        answer:
          'Consistent machining can improve fit, alignment, and rolling behavior, especially on commercial gates where weight and cycle count expose weak hardware quickly.',
      },
    ],
    related: [
      { label: 'Enclosed Aluminum Gate Track', href: '/custom-fabrication/enclosed-aluminum-gate-track' },
      { label: 'Cantilever Gate Systems', href: '/products/cantilever-gate-systems' },
      { label: 'Request Wholesale Pricing', href: '/contact' },
    ],
  },
  {
    category: 'resources',
    slug: 'astm-f2656-crash-ratings',
    path: '/resources/astm-f2656-crash-ratings',
    sitemapPriority: 0.8,
    title: 'ASTM F2656, M-Ratings & K-Ratings for Crash Barriers | Bru-Hart',
    description:
      'A practical guide to ASTM F2656, M30/M40/M50, K4/K8/K12, penetration ratings, and how to discuss crash-rated gates and barriers during specification.',
    eyebrow: 'Specification Guide',
    heroTitle: 'ASTM F2656 and crash-rating terms, explained for gate projects',
    heroDescription:
      'Use this plain-language guide to frame better conversations about M-ratings, K-ratings, penetration ratings, and crash-rated gate or barrier selection.',
    introTitle: 'Crash-rating language can get expensive when it is vague.',
    intro:
      'Owners, engineers, and contractors often use terms like K12, M50, crash tested, crash rated, anti-ram, and ASTM F2656 in the same conversation. The words matter because Bru-Hart gates are currently crash rated, but they should not be described as crash tested.',
    highlights: [
      'ASTM F2656 is the modern vehicle security barrier crash-test framework',
      'K4, K8, and K12 are older but still common shorthand terms',
      'M30, M40, and M50 refer to medium-duty vehicle impact speeds',
      'Penetration ratings describe how far the test vehicle travels past the barrier',
    ],
    sections: [
      {
        title: 'ASTM F2656 gives the project a common language',
        body:
          'ASTM F2656 is used to establish a penetration rating for vehicle perimeter barriers subjected to impact. That helps project teams compare barriers against site-specific requirements instead of relying on appearance or vague strength claims.',
        bullets: [
          'Ask for the rating standard and configuration',
          'Ask for vehicle class, speed, and penetration rating',
          'Ask whether the product is crash rated, crash tested, or engineered/rated for a similar condition',
        ],
      },
      {
        title: 'K-ratings are still used as shorthand',
        body:
          'K4, K8, and K12 come from older Department of State terminology and are still common in specs and conversations. Modern documentation often translates these to M30, M40, and M50 style references.',
        bullets: [
          'K4 is commonly associated with a 30 mph medium-duty vehicle impact',
          'K8 is commonly associated with a 40 mph medium-duty vehicle impact',
          'K12 is commonly associated with a 50 mph medium-duty vehicle impact',
        ],
      },
      {
        title: 'The rating is not the whole design',
        body:
          'A barrier rating does not guarantee performance in every site condition. Approach route, impact location, foundation, installation, utilities, topography, and maintenance all affect the finished result.',
        bullets: [
          'Select ratings based on actual approach conditions',
          'Review foundation and utility constraints early',
          'Coordinate gate, barrier, operator, and access-control behavior',
        ],
      },
    ],
    specTitle: 'Terms To Use Carefully',
    specs: [
      { label: 'Crash rated', value: 'Use for Bru-Hart gate configurations with rating documentation or supported rating claims' },
      { label: 'Crash tested', value: 'Use only when a specific gate or barrier configuration has physical crash-test documentation' },
      { label: 'M50/K12', value: 'Common shorthand for high-level medium-duty vehicle impact protection' },
      { label: 'P-rating', value: 'Penetration category showing how far the vehicle traveled past the barrier in the test' },
    ],
    proofTitle: 'How Bru-Hart Can Help',
    proof: [
      'Translate project requirements into product conversations',
      'Help contractors ask manufacturers for the right documentation',
      'Source gate, barrier, fence, and access-control components around the same site plan',
    ],
    faqs: [
      {
        question: 'Is M50 always better than M30?',
        answer:
          'Not automatically. M50 is a higher impact-speed reference, but the best rating depends on the site risk, approach speed, budget, foundation constraints, and stand-off distance.',
      },
      {
        question: 'Can I call a reinforced gate crash rated?',
        answer:
          'Only if the gate system has documented test performance for the rating being claimed. Reinforced construction alone is not the same as a recognized crash rating.',
      },
    ],
    related: [
      { label: 'Crash Rated Gates', href: '/products/crash-rated-gates' },
      { label: 'Crash Rated Barriers', href: '/products/crash-rated-barriers' },
      { label: 'Government Facility Security', href: '/industries/government-facility-security' },
    ],
  },
];

export const seoLandingPages: SeoLandingPage[] = [
  ...curatedSeoLandingPages,
  ...generatedSeoLandingPages,
];

export function getLandingPagesByCategory(category: LandingCategory) {
  return seoLandingPages.filter((page) => page.category === category);
}

export function getLandingPage(category: LandingCategory, slug: string) {
  return seoLandingPages.find((page) => page.category === category && page.slug === slug);
}
