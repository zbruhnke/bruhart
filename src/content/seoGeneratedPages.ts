import type { SeoLandingPage } from './seoLandingPages';

type LinkItem = { label: string; href: string };

type FamilyConfig = {
  eyebrow: string;
  buyer: string;
  productTypes: string[];
  applications: string[];
  decisionFactors: string[];
  related: LinkItem[];
};

type ProductFamily =
  | 'chainLink'
  | 'wood'
  | 'vinyl'
  | 'ornamental'
  | 'pipeTube'
  | 'gates'
  | 'access'
  | 'security'
  | 'temporary'
  | 'hardware'
  | 'agriculture';

type ProductSeed = {
  slug: string;
  label: string;
  family: ProductFamily;
};

type ServiceFocus = 'fenceSupply' | 'agriculture' | 'farmGates' | 'chainLink' | 'access' | 'materials';

type ServiceSeed = {
  slug: string;
  city: string;
  region: string;
  focus: ServiceFocus;
};

type IndustrySeed = {
  slug: string;
  label: string;
  assets: string[];
  products: string[];
  concerns: string[];
};

type ResourceSeed = {
  slug: string;
  label: string;
  audience: string;
  questions: string[];
  related: LinkItem[];
};

type ManufacturerSeed = {
  slug: string;
  label: string;
  knownFor: string[];
  categories: string[];
  bestFit: string[];
};

type AboutSeed = {
  slug: string;
  label: string;
  audience: string;
  proofPoints: string[];
  outcomes: string[];
};

const productFamilies: Record<ProductFamily, FamilyConfig> = {
  chainLink: {
    eyebrow: 'Chain Link Fence Supply',
    buyer: 'contractors, property owners, and facility teams sourcing chain link materials',
    productTypes: ['fabric', 'posts', 'rails', 'fittings', 'gates', 'hardware', 'privacy slats'],
    applications: ['commercial properties', 'yards', 'schools', 'utilities', 'storage areas', 'rural boundaries'],
    decisionFactors: ['height', 'gauge', 'coating', 'post schedule', 'gate openings', 'security level'],
    related: [
      { label: 'Fence Materials & Supplies', href: '/products/fence-materials-supplies' },
      { label: 'Perimeter Security Fencing', href: '/products/perimeter-security-fencing' },
      { label: 'Gate Hardware', href: '/products/gate-hardware' },
    ],
  },
  wood: {
    eyebrow: 'Wood Fence Materials',
    buyer: 'contractors and local buyers comparing wood fence packages',
    productTypes: ['pickets', 'posts', 'rails', 'privacy layouts', 'board-on-board materials', 'gates'],
    applications: ['residential boundaries', 'rural properties', 'commercial screening', 'privacy lines', 'yards'],
    decisionFactors: ['species', 'treatment', 'board layout', 'post spacing', 'gate openings', 'finish plan'],
    related: [
      { label: 'Fence Materials & Supplies', href: '/products/fence-materials-supplies' },
      { label: 'Farm & Ranch Gates', href: '/products/farm-ranch-gates' },
      { label: 'Branford Fence Supply', href: '/service-areas/branford-fl-fence-supply' },
    ],
  },
  vinyl: {
    eyebrow: 'Vinyl Fence Supply',
    buyer: 'contractors and property owners looking for low-maintenance fence materials',
    productTypes: ['privacy panels', 'picket systems', 'ranch rail', 'posts', 'rails', 'gates', 'hardware'],
    applications: ['residential privacy', 'ranch rail', 'yards', 'commercial edges', 'pool-adjacent areas'],
    decisionFactors: ['profile', 'color', 'post spacing', 'reinforcement', 'gate width', 'wind exposure'],
    related: [
      { label: 'Fence Materials & Supplies', href: '/products/fence-materials-supplies' },
      { label: 'Ranch Rail Fence', href: '/products/ranch-rail-fence' },
      { label: 'Vinyl Gates', href: '/products/vinyl-gates' },
    ],
  },
  ornamental: {
    eyebrow: 'Ornamental Fence Systems',
    buyer: 'commercial, residential, and municipal buyers needing appearance and control',
    productTypes: ['aluminum panels', 'steel panels', 'ornamental gates', 'pool fence', 'commercial fence sections'],
    applications: ['campuses', 'pools', 'commercial frontages', 'municipal properties', 'controlled access points'],
    decisionFactors: ['material', 'height', 'style', 'finish', 'gate hardware', 'security requirement'],
    related: [
      { label: 'Perimeter Security Fencing', href: '/products/perimeter-security-fencing' },
      { label: 'Ornamental Fence Gates', href: '/products/ornamental-fence-gates' },
      { label: 'Gate Hinges', href: '/products/gate-hinges' },
    ],
  },
  pipeTube: {
    eyebrow: 'Fence Pipe & Tube',
    buyer: 'contractors and fabricators sourcing posts, rails, and gate frame material',
    productTypes: ['pipe', 'tube', 'posts', 'rails', 'brace material', 'gate frame material'],
    applications: ['commercial fence', 'chain link', 'gate fabrication', 'agricultural gates', 'industrial yards'],
    decisionFactors: ['diameter', 'wall thickness', 'finish', 'length', 'load', 'gate weight'],
    related: [
      { label: 'Commercial Gates', href: '/products/commercial-gates' },
      { label: 'Gate Frame Tubing', href: '/products/gate-frame-tubing' },
      { label: 'Custom Fabrication', href: '/custom-fabrication' },
    ],
  },
  gates: {
    eyebrow: 'Gate Systems',
    buyer: 'contractors, fabricators, and facilities planning vehicle and pedestrian access',
    productTypes: ['slide gates', 'swing gates', 'vertical lift gates', 'farm gates', 'estate gates', 'hardware'],
    applications: ['driveways', 'industrial yards', 'critical infrastructure', 'farms', 'campuses', 'restricted entries'],
    decisionFactors: ['opening width', 'weight', 'cycle count', 'hardware', 'operator readiness', 'security level'],
    related: [
      { label: 'Access Control & Automation', href: '/products/access-control-automation' },
      { label: 'Cantilever Gate Systems', href: '/products/cantilever-gate-systems' },
      { label: 'Gate Hardware', href: '/products/gate-hardware' },
    ],
  },
  access: {
    eyebrow: 'Gate Access Control',
    buyer: 'contractors and facilities selecting gate operators, credentials, and safety devices',
    productTypes: ['operators', 'keypads', 'card readers', 'telephone entry', 'loops', 'photo eyes', 'intercoms'],
    applications: ['commercial gates', 'gated properties', 'utilities', 'industrial yards', 'restricted entries'],
    decisionFactors: ['gate type', 'duty cycle', 'power', 'safety devices', 'credential method', 'fail mode'],
    related: [
      { label: 'Access Control & Automation', href: '/products/access-control-automation' },
      { label: 'Gate Operators', href: '/products/gate-operators' },
      { label: 'UL 325 & ASTM F2200 Guide', href: '/resources/ul-325-astm-f2200-gate-safety' },
    ],
  },
  security: {
    eyebrow: 'High-Security Fence & Barrier',
    buyer: 'owners, contractors, and security teams hardening vulnerable perimeters',
    productTypes: ['anti-climb fence', 'anti-cut fence', 'bollards', 'wedge barriers', 'crash-rated gates', 'security toppings'],
    applications: ['data centers', 'utilities', 'government sites', 'ports', 'industrial yards', 'campuses'],
    decisionFactors: ['threat profile', 'approach speed', 'cut resistance', 'climb resistance', 'rating documentation', 'access workflow'],
    related: [
      { label: 'Crash Rated Gates', href: '/products/crash-rated-gates' },
      { label: 'Crash Rated Barriers', href: '/products/crash-rated-barriers' },
      { label: 'Perimeter Security Fencing', href: '/products/perimeter-security-fencing' },
    ],
  },
  temporary: {
    eyebrow: 'Temporary Fence Supply',
    buyer: 'contractors and project teams needing short-term site control',
    productTypes: ['temporary panels', 'stands', 'clamps', 'gates', 'barricades', 'site accessories'],
    applications: ['construction sites', 'events', 'staging areas', 'repairs', 'restricted work zones'],
    decisionFactors: ['panel length', 'site exposure', 'gate access', 'duration', 'mobility', 'crowd or vehicle flow'],
    related: [
      { label: 'Fence Materials & Supplies', href: '/products/fence-materials-supplies' },
      { label: 'Construction Site Fence', href: '/products/construction-site-fence' },
      { label: 'Crowd Control Barricades', href: '/products/crowd-control-barricades' },
    ],
  },
  hardware: {
    eyebrow: 'Fence & Gate Hardware',
    buyer: 'contractors, fabricators, and repair teams sourcing the parts that make fences work',
    productTypes: ['hinges', 'latches', 'caps', 'fasteners', 'bands', 'bars', 'rollers', 'guides'],
    applications: ['new fence builds', 'gate repairs', 'commercial gates', 'agricultural gates', 'maintenance work'],
    decisionFactors: ['load', 'fit', 'finish', 'adjustability', 'replacement compatibility', 'field serviceability'],
    related: [
      { label: 'Gate Hinges', href: '/products/gate-hinges' },
      { label: 'Gate Latches', href: '/products/gate-latches' },
      { label: 'Fence Materials & Supplies', href: '/products/fence-materials-supplies' },
    ],
  },
  agriculture: {
    eyebrow: 'Agricultural Fence Supply',
    buyer: 'farms, ranches, homesteads, and rural contractors planning livestock and boundary fence',
    productTypes: ['field fence', 'fixed knot', 'barbed wire', 'high-tensile wire', 'posts', 'braces', 'farm gates'],
    applications: ['cattle pasture', 'horse properties', 'goat and sheep lots', 'rural boundaries', 'equipment access'],
    decisionFactors: ['animal type', 'wire height', 'post spacing', 'brace strength', 'gate width', 'repairability'],
    related: [
      { label: 'Agricultural Fencing', href: '/products/agricultural-fencing' },
      { label: 'Field Fence & Woven Wire', href: '/products/field-fence-woven-wire' },
      { label: 'Farm & Ranch Gates', href: '/products/farm-ranch-gates' },
    ],
  },
};

const productSeeds: ProductSeed[] = [
  { slug: 'chain-link-fence-supplies', label: 'Chain Link Fence Supplies', family: 'chainLink' },
  { slug: 'chain-link-fence-fabric', label: 'Chain Link Fence Fabric', family: 'chainLink' },
  { slug: 'galvanized-chain-link-fence', label: 'Galvanized Chain Link Fence', family: 'chainLink' },
  { slug: 'black-vinyl-coated-chain-link', label: 'Black Vinyl-Coated Chain Link', family: 'chainLink' },
  { slug: 'chain-link-posts-rails', label: 'Chain Link Posts & Rails', family: 'chainLink' },
  { slug: 'chain-link-fittings-hardware', label: 'Chain Link Fittings & Hardware', family: 'chainLink' },
  { slug: 'chain-link-gates', label: 'Chain Link Gates', family: 'chainLink' },
  { slug: 'commercial-chain-link-fence', label: 'Commercial Chain Link Fence', family: 'chainLink' },
  { slug: 'security-chain-link-fence', label: 'Security Chain Link Fence', family: 'chainLink' },
  { slug: 'chain-link-privacy-slats', label: 'Chain Link Privacy Slats', family: 'chainLink' },
  { slug: 'chain-link-tension-wire', label: 'Chain Link Tension Wire', family: 'chainLink' },
  { slug: 'chain-link-terminal-posts', label: 'Chain Link Terminal Posts', family: 'chainLink' },
  { slug: 'wood-fence-materials', label: 'Wood Fence Materials', family: 'wood' },
  { slug: 'pressure-treated-pine-fence-pickets', label: 'Pressure-Treated Pine Fence Pickets', family: 'wood' },
  { slug: 'cedar-fence-pickets', label: 'Cedar Fence Pickets', family: 'wood' },
  { slug: 'wood-fence-posts', label: 'Wood Fence Posts', family: 'wood' },
  { slug: 'wood-privacy-fence-materials', label: 'Wood Privacy Fence Materials', family: 'wood' },
  { slug: 'board-on-board-fence-materials', label: 'Board-on-Board Fence Materials', family: 'wood' },
  { slug: 'shadowbox-fence-materials', label: 'Shadowbox Fence Materials', family: 'wood' },
  { slug: 'wood-fence-rails', label: 'Wood Fence Rails', family: 'wood' },
  { slug: 'split-rail-fence', label: 'Split Rail Fence', family: 'wood' },
  { slug: 'post-and-rail-fence', label: 'Post and Rail Fence', family: 'wood' },
  { slug: 'vinyl-fence-supplies', label: 'Vinyl Fence Supplies', family: 'vinyl' },
  { slug: 'vinyl-privacy-fence', label: 'Vinyl Privacy Fence', family: 'vinyl' },
  { slug: 'vinyl-ranch-rail-fence', label: 'Vinyl Ranch Rail Fence', family: 'vinyl' },
  { slug: 'vinyl-fence-posts-rails', label: 'Vinyl Fence Posts & Rails', family: 'vinyl' },
  { slug: 'vinyl-gates', label: 'Vinyl Gates', family: 'vinyl' },
  { slug: 'vinyl-picket-fence', label: 'Vinyl Picket Fence', family: 'vinyl' },
  { slug: 'vinyl-fence-hardware', label: 'Vinyl Fence Hardware', family: 'vinyl' },
  { slug: 'ornamental-aluminum-fence', label: 'Ornamental Aluminum Fence', family: 'ornamental' },
  { slug: 'ornamental-steel-fence', label: 'Ornamental Steel Fence', family: 'ornamental' },
  { slug: 'aluminum-fence-panels', label: 'Aluminum Fence Panels', family: 'ornamental' },
  { slug: 'steel-fence-panels', label: 'Steel Fence Panels', family: 'ornamental' },
  { slug: 'ornamental-fence-gates', label: 'Ornamental Fence Gates', family: 'ornamental' },
  { slug: 'aluminum-pool-fence', label: 'Aluminum Pool Fence', family: 'ornamental' },
  { slug: 'commercial-ornamental-fence', label: 'Commercial Ornamental Fence', family: 'ornamental' },
  { slug: 'fence-pipe-tube', label: 'Fence Pipe & Tube', family: 'pipeTube' },
  { slug: 'galvanized-fence-pipe', label: 'Galvanized Fence Pipe', family: 'pipeTube' },
  { slug: 'gate-frame-tubing', label: 'Gate Frame Tubing', family: 'pipeTube' },
  { slug: 'commercial-fence-posts', label: 'Commercial Fence Posts', family: 'pipeTube' },
  { slug: 'brace-rail-line-posts', label: 'Brace Rail & Line Posts', family: 'pipeTube' },
  { slug: 'terminal-posts-corner-posts', label: 'Terminal Posts & Corner Posts', family: 'pipeTube' },
  { slug: 'top-rail-bottom-rail', label: 'Top Rail & Bottom Rail', family: 'pipeTube' },
  { slug: 'commercial-gates', label: 'Commercial Gates', family: 'gates' },
  { slug: 'slide-gates', label: 'Slide Gates', family: 'gates' },
  { slug: 'swing-gates', label: 'Swing Gates', family: 'gates' },
  { slug: 'vertical-lift-gates', label: 'Vertical Lift Gates', family: 'gates' },
  { slug: 'barrier-arm-gates', label: 'Barrier Arm Gates', family: 'gates' },
  { slug: 'custom-gate-fabrication', label: 'Custom Gate Fabrication', family: 'gates' },
  { slug: 'estate-gates', label: 'Estate Gates', family: 'gates' },
  { slug: 'rolling-gate-hardware', label: 'Rolling Gate Hardware', family: 'gates' },
  { slug: 'gate-operators', label: 'Gate Operators', family: 'access' },
  { slug: 'slide-gate-operators', label: 'Slide Gate Operators', family: 'access' },
  { slug: 'swing-gate-operators', label: 'Swing Gate Operators', family: 'access' },
  { slug: 'keypads-card-readers', label: 'Keypads & Card Readers', family: 'access' },
  { slug: 'telephone-entry-systems', label: 'Telephone Entry Systems', family: 'access' },
  { slug: 'loop-detectors-photo-eyes', label: 'Loop Detectors & Photo Eyes', family: 'access' },
  { slug: 'access-control-accessories', label: 'Access Control Accessories', family: 'access' },
  { slug: 'vehicle-detection-loops', label: 'Vehicle Detection Loops', family: 'access' },
  { slug: 'intercoms-phone-entry', label: 'Intercoms & Phone Entry', family: 'access' },
  { slug: 'security-bollards', label: 'Security Bollards', family: 'security' },
  { slug: 'wedge-barriers', label: 'Wedge Barriers', family: 'security' },
  { slug: 'anti-ram-barriers', label: 'Anti-Ram Barriers', family: 'security' },
  { slug: 'anti-climb-fencing', label: 'Anti-Climb Fencing', family: 'security' },
  { slug: 'anti-cut-fencing', label: 'Anti-Cut Fencing', family: 'security' },
  { slug: 'high-security-fence-panels', label: 'High-Security Fence Panels', family: 'security' },
  { slug: 'security-fence-toppings', label: 'Security Fence Toppings', family: 'security' },
  { slug: 'temporary-fence-panels', label: 'Temporary Fence Panels', family: 'temporary' },
  { slug: 'construction-site-fence', label: 'Construction Site Fence', family: 'temporary' },
  { slug: 'crowd-control-barricades', label: 'Crowd Control Barricades', family: 'temporary' },
  { slug: 'temporary-fence-stands-clamps', label: 'Temporary Fence Stands & Clamps', family: 'temporary' },
  { slug: 'temporary-gates', label: 'Temporary Gates', family: 'temporary' },
  { slug: 'fence-hardware', label: 'Fence Hardware', family: 'hardware' },
  { slug: 'gate-hinges', label: 'Gate Hinges', family: 'hardware' },
  { slug: 'gate-latches', label: 'Gate Latches', family: 'hardware' },
  { slug: 'post-caps', label: 'Post Caps', family: 'hardware' },
  { slug: 'fence-fasteners', label: 'Fence Fasteners', family: 'hardware' },
  { slug: 'tension-bands-bars', label: 'Tension Bands & Bars', family: 'hardware' },
  { slug: 'truss-rods', label: 'Truss Rods', family: 'hardware' },
  { slug: 'gate-wheels-rollers-guides', label: 'Gate Wheels, Rollers & Guides', family: 'hardware' },
  { slug: 'cattle-fencing', label: 'Cattle Fencing', family: 'agriculture' },
  { slug: 'goat-sheep-fencing', label: 'Goat & Sheep Fencing', family: 'agriculture' },
  { slug: 'no-climb-horse-fence', label: 'No-Climb Horse Fence', family: 'agriculture' },
  { slug: 'fixed-knot-fence', label: 'Fixed Knot Fence', family: 'agriculture' },
  { slug: 'electric-fence-supplies', label: 'Electric Fence Supplies', family: 'agriculture' },
  { slug: 't-posts-wood-posts', label: 'T-Posts & Wood Posts', family: 'agriculture' },
  { slug: 'h-braces-corner-posts', label: 'H-Braces & Corner Posts', family: 'agriculture' },
  { slug: 'ranch-rail-fence', label: 'Ranch Rail Fence', family: 'agriculture' },
  { slug: 'wire-fence-repair-materials', label: 'Wire Fence Repair Materials', family: 'agriculture' },
  { slug: 'livestock-panels', label: 'Livestock Panels', family: 'agriculture' },
  { slug: 'corral-panels-gates', label: 'Corral Panels & Gates', family: 'agriculture' },
  { slug: 'driveway-farm-gates', label: 'Driveway Farm Gates', family: 'agriculture' },
];

const serviceSeeds: ServiceSeed[] = [
  { slug: 'branford-fl-fence-supply', city: 'Branford, FL', region: 'Suwannee River region', focus: 'fenceSupply' },
  { slug: 'live-oak-fl-fence-supply', city: 'Live Oak, FL', region: 'Suwannee County', focus: 'fenceSupply' },
  { slug: 'lake-city-fl-fence-supply', city: 'Lake City, FL', region: 'Columbia County', focus: 'fenceSupply' },
  { slug: 'fort-white-fl-fence-supply', city: 'Fort White, FL', region: 'Columbia County', focus: 'fenceSupply' },
  { slug: 'mayo-fl-fence-supply', city: 'Mayo, FL', region: 'Lafayette County', focus: 'fenceSupply' },
  { slug: 'obrien-fl-fence-supply', city: 'O Brien, FL', region: 'Suwannee County', focus: 'fenceSupply' },
  { slug: 'high-springs-fl-fence-supply', city: 'High Springs, FL', region: 'North Florida', focus: 'fenceSupply' },
  { slug: 'trenton-fl-fence-supply', city: 'Trenton, FL', region: 'Gilchrist County', focus: 'fenceSupply' },
  { slug: 'jasper-fl-fence-supply', city: 'Jasper, FL', region: 'Hamilton County', focus: 'fenceSupply' },
  { slug: 'alachua-fl-fence-supply', city: 'Alachua, FL', region: 'North Florida', focus: 'fenceSupply' },
  { slug: 'bell-fl-fence-supply', city: 'Bell, FL', region: 'Gilchrist County', focus: 'fenceSupply' },
  { slug: 'chiefland-fl-fence-supply', city: 'Chiefland, FL', region: 'Levy County', focus: 'fenceSupply' },
  { slug: 'cross-city-fl-fence-supply', city: 'Cross City, FL', region: 'Dixie County', focus: 'fenceSupply' },
  { slug: 'perry-fl-fence-supply', city: 'Perry, FL', region: 'Taylor County', focus: 'fenceSupply' },
  { slug: 'madison-fl-fence-supply', city: 'Madison, FL', region: 'North Florida', focus: 'fenceSupply' },
  { slug: 'gainesville-fl-fence-supply', city: 'Gainesville, FL', region: 'Alachua County', focus: 'fenceSupply' },
  { slug: 'live-oak-fl-agricultural-fencing', city: 'Live Oak, FL', region: 'Suwannee County', focus: 'agriculture' },
  { slug: 'lake-city-fl-agricultural-fencing', city: 'Lake City, FL', region: 'Columbia County', focus: 'agriculture' },
  { slug: 'fort-white-fl-agricultural-fencing', city: 'Fort White, FL', region: 'Columbia County', focus: 'agriculture' },
  { slug: 'mayo-fl-agricultural-fencing', city: 'Mayo, FL', region: 'Lafayette County', focus: 'agriculture' },
  { slug: 'obrien-fl-agricultural-fencing', city: 'O Brien, FL', region: 'Suwannee County', focus: 'agriculture' },
  { slug: 'trenton-fl-agricultural-fencing', city: 'Trenton, FL', region: 'Gilchrist County', focus: 'agriculture' },
  { slug: 'high-springs-fl-agricultural-fencing', city: 'High Springs, FL', region: 'North Florida', focus: 'agriculture' },
  { slug: 'jasper-fl-agricultural-fencing', city: 'Jasper, FL', region: 'Hamilton County', focus: 'agriculture' },
  { slug: 'branford-fl-farm-gates', city: 'Branford, FL', region: 'Suwannee River region', focus: 'farmGates' },
  { slug: 'live-oak-fl-farm-gates', city: 'Live Oak, FL', region: 'Suwannee County', focus: 'farmGates' },
  { slug: 'lake-city-fl-farm-gates', city: 'Lake City, FL', region: 'Columbia County', focus: 'farmGates' },
  { slug: 'lake-city-fl-chain-link-fence-supplies', city: 'Lake City, FL', region: 'Columbia County', focus: 'chainLink' },
  { slug: 'live-oak-fl-chain-link-fence-supplies', city: 'Live Oak, FL', region: 'Suwannee County', focus: 'chainLink' },
  { slug: 'live-oak-fl-gate-operators-access-control', city: 'Live Oak, FL', region: 'Suwannee County', focus: 'access' },
  { slug: 'lake-city-fl-gate-operators-access-control', city: 'Lake City, FL', region: 'Columbia County', focus: 'access' },
  { slug: 'fort-white-fl-fence-materials', city: 'Fort White, FL', region: 'Columbia County', focus: 'materials' },
];

const industrySeeds: IndustrySeed[] = [
  {
    slug: 'ports-logistics-security',
    label: 'Ports & Logistics Security',
    assets: ['truck gates', 'container yards', 'service roads', 'employee entrances'],
    products: ['crash rated gates', 'bollards', 'barrier arms', 'security fencing'],
    concerns: ['vehicle flow', 'authorized access', 'stand-off', 'high-cycle operation'],
  },
  {
    slug: 'corporate-campus-perimeter-security',
    label: 'Corporate Campus Perimeter Security',
    assets: ['visitor entries', 'parking access', 'service yards', 'pedestrian openings'],
    products: ['ornamental security fence', 'access control', 'bollards', 'automated gates'],
    concerns: ['appearance', 'visitor flow', 'credentialing', 'public-facing security'],
  },
  {
    slug: 'industrial-yard-security',
    label: 'Industrial Yard Security',
    assets: ['equipment yards', 'material storage', 'truck entrances', 'loading zones'],
    products: ['chain link fence', 'slide gates', 'gate operators', 'anti-climb options'],
    concerns: ['after-hours access', 'equipment protection', 'vehicle movement', 'repairability'],
  },
  {
    slug: 'warehouse-distribution-center-security',
    label: 'Warehouse & Distribution Center Security',
    assets: ['truck courts', 'employee parking', 'dock areas', 'service lanes'],
    products: ['barrier arms', 'operators', 'security gates', 'bollards'],
    concerns: ['traffic sequencing', 'delivery access', 'cycle count', 'safety devices'],
  },
  {
    slug: 'solar-farm-security-fencing',
    label: 'Solar Farm Security Fencing',
    assets: ['panel fields', 'inverter pads', 'service roads', 'remote entrances'],
    products: ['security fencing', 'wide gates', 'wire mesh', 'access hardware'],
    concerns: ['remote maintenance', 'wildlife pressure', 'weather exposure', 'large perimeters'],
  },
  {
    slug: 'telecom-site-security-fencing',
    label: 'Telecom Site Security Fencing',
    assets: ['tower compounds', 'equipment shelters', 'service entrances', 'remote pads'],
    products: ['chain link fence', 'anti-climb additions', 'secure gates', 'lock hardware'],
    concerns: ['remote access', 'theft deterrence', 'maintenance access', 'standardized hardware'],
  },
  {
    slug: 'municipal-public-works-security',
    label: 'Municipal & Public Works Security',
    assets: ['fleet yards', 'maintenance shops', 'fuel areas', 'public interfaces'],
    products: ['commercial gates', 'chain link', 'bollards', 'access control'],
    concerns: ['public access', 'service vehicles', 'budget discipline', 'durability'],
  },
  {
    slug: 'school-campus-security-gates',
    label: 'School Campus Security Gates',
    assets: ['staff entrances', 'service drives', 'bus areas', 'pedestrian paths'],
    products: ['controlled gates', 'ornamental fence', 'bollards', 'access control'],
    concerns: ['student safety', 'emergency access', 'visitor control', 'appearance'],
  },
  {
    slug: 'water-wastewater-facility-security',
    label: 'Water & Wastewater Facility Security',
    assets: ['pump stations', 'treatment plants', 'chemical areas', 'remote access points'],
    products: ['security fencing', 'service gates', 'locks', 'access control'],
    concerns: ['remote reliability', 'corrosion exposure', 'crew access', 'public safety'],
  },
  {
    slug: 'rail-yard-security-gates',
    label: 'Rail Yard Security Gates',
    assets: ['yard entrances', 'maintenance access', 'material storage', 'service roads'],
    products: ['wide slide gates', 'barrier arms', 'security fence', 'operators'],
    concerns: ['large openings', 'vehicle clearance', 'cycle count', 'industrial durability'],
  },
  {
    slug: 'correctional-facility-security',
    label: 'Correctional Facility Security',
    assets: ['secure perimeters', 'service entrances', 'sally ports', 'pedestrian openings'],
    products: ['anti-climb fence', 'crash rated gates', 'bollards', 'controlled hardware'],
    concerns: ['layered security', 'documentation', 'restricted access', 'maintenance discipline'],
  },
  {
    slug: 'military-base-perimeter-security',
    label: 'Military Base Perimeter Security',
    assets: ['controlled entrances', 'service roads', 'restricted zones', 'storage areas'],
    products: ['crash rated gates', 'barriers', 'anti-climb fence', 'access control'],
    concerns: ['rating documentation', 'threat profile', 'access sequencing', 'operational continuity'],
  },
  {
    slug: 'manufacturing-plant-security',
    label: 'Manufacturing Plant Security',
    assets: ['employee entrances', 'truck gates', 'inventory yards', 'loading areas'],
    products: ['commercial fence', 'slide gates', 'operators', 'access control'],
    concerns: ['shift traffic', 'truck flow', 'asset protection', 'serviceability'],
  },
  {
    slug: 'truck-yard-security-gates',
    label: 'Truck Yard Security Gates',
    assets: ['fleet storage', 'driver entrances', 'service lanes', 'parking yards'],
    products: ['wide slide gates', 'barrier arms', 'operators', 'security fencing'],
    concerns: ['wide openings', 'high cycle count', 'driver access', 'after-hours control'],
  },
];

const resourceSeeds: ResourceSeed[] = [
  {
    slug: 'ul-325-astm-f2200-gate-safety',
    label: 'UL 325 & ASTM F2200 Gate Safety',
    audience: 'contractors and owners planning automated vehicular gates',
    questions: ['operator class', 'entrapment protection', 'photo eyes and edges', 'manual release'],
    related: [
      { label: 'Access Control & Automation', href: '/products/access-control-automation' },
      { label: 'Gate Operators', href: '/products/gate-operators' },
      { label: 'Loop Detectors & Photo Eyes', href: '/products/loop-detectors-photo-eyes' },
    ],
  },
  {
    slug: 'crash-rated-vs-crash-tested-gates',
    label: 'Crash Rated vs Crash Tested Gates',
    audience: 'specifiers comparing rating language',
    questions: ['rating documentation', 'physical testing', 'configuration limits', 'proposal wording'],
    related: [
      { label: 'Crash Rated Gates', href: '/products/crash-rated-gates' },
      { label: 'ASTM F2656 Guide', href: '/resources/astm-f2656-crash-ratings' },
      { label: 'Crash Rated Barriers', href: '/products/crash-rated-barriers' },
    ],
  },
  {
    slug: 'k-rated-vs-m-rated-barriers',
    label: 'K-Rated vs M-Rated Barriers',
    audience: 'buyers translating older and newer barrier terminology',
    questions: ['K4 K8 K12', 'M30 M40 M50', 'penetration rating', 'ASTM F2656'],
    related: [
      { label: 'ASTM F2656 Guide', href: '/resources/astm-f2656-crash-ratings' },
      { label: 'Crash Rated Barriers', href: '/products/crash-rated-barriers' },
      { label: 'Security Bollards', href: '/products/security-bollards' },
    ],
  },
  {
    slug: 'how-to-measure-a-cantilever-gate-opening',
    label: 'How to Measure a Cantilever Gate Opening',
    audience: 'fabricators and contractors planning sliding or cantilever gates',
    questions: ['clear opening', 'backspace', 'counterbalance', 'track and truck selection'],
    related: [
      { label: 'Cantilever Gate Systems', href: '/products/cantilever-gate-systems' },
      { label: 'Enclosed Aluminum Gate Track', href: '/custom-fabrication/enclosed-aluminum-gate-track' },
      { label: 'CNC-Milled Gate Trucks', href: '/custom-fabrication/cnc-milled-gate-trucks' },
    ],
  },
  {
    slug: 'how-to-plan-farm-fence-material-list',
    label: 'How to Plan a Farm Fence Material List',
    audience: 'landowners and contractors planning agricultural fence',
    questions: ['footage', 'corners', 'gates', 'posts', 'wire', 'braces'],
    related: [
      { label: 'Agricultural Fencing', href: '/products/agricultural-fencing' },
      { label: 'Field Fence & Woven Wire', href: '/products/field-fence-woven-wire' },
      { label: 'Farm & Ranch Gates', href: '/products/farm-ranch-gates' },
    ],
  },
  {
    slug: 'field-fence-vs-fixed-knot-fence',
    label: 'Field Fence vs Fixed Knot Fence',
    audience: 'agricultural buyers comparing wire fence options',
    questions: ['animal pressure', 'wire spacing', 'fence height', 'long-term maintenance'],
    related: [
      { label: 'Field Fence & Woven Wire', href: '/products/field-fence-woven-wire' },
      { label: 'Fixed Knot Fence', href: '/products/fixed-knot-fence' },
      { label: 'Cattle Fencing', href: '/products/cattle-fencing' },
    ],
  },
  {
    slug: 'chain-link-fence-materials-checklist',
    label: 'Chain Link Fence Materials Checklist',
    audience: 'contractors and property owners pricing chain link projects',
    questions: ['fabric', 'posts', 'rails', 'fittings', 'gates', 'privacy slats'],
    related: [
      { label: 'Chain Link Fence Supplies', href: '/products/chain-link-fence-supplies' },
      { label: 'Chain Link Fittings & Hardware', href: '/products/chain-link-fittings-hardware' },
      { label: 'Chain Link Gates', href: '/products/chain-link-gates' },
    ],
  },
  {
    slug: 'gate-operator-selection-guide',
    label: 'Gate Operator Selection Guide',
    audience: 'buyers selecting slide, swing, or barrier arm operators',
    questions: ['gate weight', 'cycle count', 'power', 'safety devices', 'access control'],
    related: [
      { label: 'Gate Operators', href: '/products/gate-operators' },
      { label: 'Slide Gate Operators', href: '/products/slide-gate-operators' },
      { label: 'Swing Gate Operators', href: '/products/swing-gate-operators' },
    ],
  },
  {
    slug: 'how-to-choose-farm-gate-width',
    label: 'How to Choose Farm Gate Width',
    audience: 'landowners planning pasture, driveway, and equipment gates',
    questions: ['tractor width', 'trailer access', 'animal movement', 'gate posts', 'hinge strength'],
    related: [
      { label: 'Farm & Ranch Gates', href: '/products/farm-ranch-gates' },
      { label: 'Driveway Farm Gates', href: '/products/driveway-farm-gates' },
      { label: 'H-Braces & Corner Posts', href: '/products/h-braces-corner-posts' },
    ],
  },
  {
    slug: 'fence-post-types-explained',
    label: 'Fence Post Types Explained',
    audience: 'buyers comparing wood, steel, terminal, line, and gate posts',
    questions: ['line posts', 'terminal posts', 'wood posts', 'T-posts', 'gate posts'],
    related: [
      { label: 'T-Posts & Wood Posts', href: '/products/t-posts-wood-posts' },
      { label: 'Commercial Fence Posts', href: '/products/commercial-fence-posts' },
      { label: 'Terminal Posts & Corner Posts', href: '/products/terminal-posts-corner-posts' },
    ],
  },
  {
    slug: 'gate-hinge-latch-selection-guide',
    label: 'Gate Hinge & Latch Selection Guide',
    audience: 'contractors repairing or building gates',
    questions: ['gate weight', 'swing direction', 'lockability', 'adjustability', 'weather exposure'],
    related: [
      { label: 'Gate Hinges', href: '/products/gate-hinges' },
      { label: 'Gate Latches', href: '/products/gate-latches' },
      { label: 'Fence Hardware', href: '/products/fence-hardware' },
    ],
  },
  {
    slug: 'fence-materials-stocked-vs-special-order',
    label: 'Stocked vs Special-Order Fence Materials',
    audience: 'buyers planning timelines and quote expectations',
    questions: ['lead time', 'availability', 'substitutions', 'job fit', 'manufacturer support'],
    related: [
      { label: 'Fence Materials & Supplies', href: '/products/fence-materials-supplies' },
      { label: 'Manufacturers', href: '/manufacturers' },
      { label: 'Contact Bru-Hart', href: '/contact' },
    ],
  },
  {
    slug: 'import-vs-domestic-fence-products',
    label: 'Import vs Domestic Fence Products',
    audience: 'buyers weighing origin, quality, support, and project requirements',
    questions: ['domestic requirements', 'quality', 'lead time', 'best fit', 'replacement support'],
    related: [
      { label: 'Manufacturers', href: '/manufacturers' },
      { label: 'Fence Materials & Supplies', href: '/products/fence-materials-supplies' },
      { label: 'Custom Fabrication', href: '/custom-fabrication' },
    ],
  },
  {
    slug: 'choosing-best-product-for-the-job',
    label: 'Choosing the Best Fence Product for the Job',
    audience: 'buyers who need practical product-selection help',
    questions: ['application fit', 'price vs value', 'origin', 'documentation', 'support'],
    related: [
      { label: 'Products', href: '/products' },
      { label: 'Manufacturers', href: '/manufacturers' },
      { label: 'Request a Quote', href: '/contact' },
    ],
  },
  {
    slug: 'agricultural-fence-repair-checklist',
    label: 'Agricultural Fence Repair Checklist',
    audience: 'local landowners repairing farm and livestock fence',
    questions: ['wire damage', 'posts', 'braces', 'gates', 'hardware', 'replacement material'],
    related: [
      { label: 'Wire Fence Repair Materials', href: '/products/wire-fence-repair-materials' },
      { label: 'Agricultural Fencing', href: '/products/agricultural-fencing' },
      { label: 'Branford Agricultural Fencing', href: '/service-areas/branford-fl-agricultural-fencing' },
    ],
  },
  {
    slug: 'ask-a-fence-expert',
    label: 'Ask a Fence Expert',
    audience: 'contractors, landowners, and facility teams who need experienced fence and gate judgment',
    questions: ['product fit', 'material substitutions', 'gate hardware', 'manufacturer options', 'field reliability'],
    related: [
      { label: 'Fence Industry Experience', href: '/about/fence-industry-experience' },
      { label: 'Reviews', href: '/reviews' },
      { label: 'Case Studies', href: '/case-studies' },
    ],
  },
  {
    slug: 'hard-to-source-fence-gate-products',
    label: 'Hard-to-Source Fence & Gate Products',
    audience: 'buyers who cannot solve the job with a standard price sheet',
    questions: ['manufacturer options', 'special-order paths', 'lead time', 'domestic or imported fit', 'replacement support'],
    related: [
      { label: 'Expert Sourcing', href: '/expert-sourcing' },
      { label: 'Manufacturers', href: '/manufacturers' },
      { label: 'Ask a Fence Expert', href: '/resources/ask-a-fence-expert' },
    ],
  },
  {
    slug: 'complex-gate-package-rfq-guide',
    label: 'Complex Gate Package RFQ Guide',
    audience: 'contractors and facilities quoting gates that involve operators, controls, hardware, and field constraints',
    questions: ['opening size', 'gate weight', 'cycle count', 'operator fit', 'safety devices', 'access control'],
    related: [
      { label: 'Expert Sourcing', href: '/expert-sourcing' },
      { label: 'Gate Operator Selection Guide', href: '/resources/gate-operator-selection-guide' },
      { label: 'Access Control & Automation', href: '/products/access-control-automation' },
    ],
  },
  {
    slug: 'fence-gate-value-engineering',
    label: 'Fence & Gate Value Engineering',
    audience: 'buyers trying to reduce cost without creating callbacks, weak points, or product mismatches',
    questions: ['application fit', 'acceptable substitutions', 'documentation', 'lead time', 'long-term serviceability'],
    related: [
      { label: 'Expert Sourcing', href: '/expert-sourcing' },
      { label: 'Choosing the Best Product for the Job', href: '/resources/choosing-best-product-for-the-job' },
      { label: 'Fence Materials & Supplies', href: '/products/fence-materials-supplies' },
    ],
  },
  {
    slug: 'fixing-bad-fence-gate-specifications',
    label: 'Fixing Bad Fence & Gate Specifications',
    audience: 'contractors, owners, and project teams who suspect the spec or bid package is incomplete',
    questions: ['missing details', 'wrong product assumptions', 'rating language', 'hardware compatibility', 'field constraints'],
    related: [
      { label: 'Expert Sourcing', href: '/expert-sourcing' },
      { label: 'ASTM F2656 Guide', href: '/resources/astm-f2656-crash-ratings' },
      { label: 'UL 325 & ASTM F2200 Gate Safety', href: '/resources/ul-325-astm-f2200-gate-safety' },
    ],
  },
  {
    slug: 'replacement-gate-parts-field-substitutions',
    label: 'Replacement Gate Parts & Field Substitutions',
    audience: 'contractors and maintenance teams trying to repair gates without creating a new failure point',
    questions: ['old model numbers', 'dimensions', 'load', 'finish', 'compatible substitutions', 'field photos'],
    related: [
      { label: 'Gate Hardware', href: '/products/gate-hardware' },
      { label: 'Gate Hinge & Latch Selection Guide', href: '/resources/gate-hinge-latch-selection-guide' },
      { label: 'Ask a Fence Expert', href: '/resources/ask-a-fence-expert' },
    ],
  },
  {
    slug: 'when-low-bid-fence-package-fails',
    label: 'When the Low-Bid Fence Package Fails',
    audience: 'buyers comparing cheap material packages with products that need to survive the actual job',
    questions: ['callback risk', 'weak hardware', 'wrong coating', 'poor gate fit', 'missing components', 'repair cost'],
    related: [
      { label: 'Expert Sourcing', href: '/expert-sourcing' },
      { label: 'Fence & Gate Value Engineering', href: '/resources/fence-gate-value-engineering' },
      { label: 'Case Studies', href: '/case-studies' },
    ],
  },
  {
    slug: 'special-order-fence-gate-components',
    label: 'Special-Order Fence & Gate Components',
    audience: 'buyers who need nonstandard sizes, specialty hardware, manufacturer-specific products, or uncommon configurations',
    questions: ['dimensions', 'manufacturer preference', 'finish', 'lead time', 'import or domestic requirements', 'replacement availability'],
    related: [
      { label: 'Expert Sourcing', href: '/expert-sourcing' },
      { label: 'Custom Fabrication', href: '/custom-fabrication' },
      { label: 'Manufacturers', href: '/manufacturers' },
    ],
  },
  {
    slug: 'critical-project-fence-gate-checklist',
    label: 'Critical Project Fence & Gate Checklist',
    audience: 'facilities, contractors, and security teams planning fence or gate packages where failure is expensive',
    questions: ['site risk', 'traffic flow', 'rating documentation', 'access workflow', 'maintenance', 'replacement support'],
    related: [
      { label: 'Expert Sourcing', href: '/expert-sourcing' },
      { label: 'Crash Rated Gates', href: '/products/crash-rated-gates' },
      { label: 'Perimeter Security Fencing', href: '/products/perimeter-security-fencing' },
    ],
  },
];

const manufacturerSeeds: ManufacturerSeed[] = [
  {
    slug: 'alfafence',
    label: 'AlfaFence',
    knownFor: ['European-style aluminum fencing', 'modern gate and fence appearance', 'durable aluminum systems'],
    categories: ['ornamental aluminum fence', 'gates', 'architectural fence systems'],
    bestFit: ['residential projects', 'commercial frontages', 'properties where appearance and durability both matter'],
  },
  {
    slug: 'ball-fabrics',
    label: 'Ball Fabrics',
    knownFor: ['fence screening', 'fabric solutions', 'visual privacy and wind-control applications'],
    categories: ['screening', 'privacy fabric', 'security fence fabric'],
    bestFit: ['sports facilities', 'commercial screening', 'yards needing privacy or visual control'],
  },
  {
    slug: 'd-d-technologies',
    label: 'D&D Technologies',
    knownFor: ['gate hinges', 'gate latches', 'self-closing and safety-focused gate hardware'],
    categories: ['gate hardware', 'hinges', 'latches', 'closers'],
    bestFit: ['pool gates', 'pedestrian gates', 'residential and commercial gate hardware upgrades'],
  },
  {
    slug: 'fencetrac',
    label: 'FenceTrac',
    knownFor: ['modern fence framing', 'mixed-material fence systems', 'clean commercial fence lines'],
    categories: ['fence framing', 'commercial fence systems', 'privacy fence systems'],
    bestFit: ['modern residential projects', 'commercial screens', 'custom infill fence layouts'],
  },
  {
    slug: 'gatemaster',
    label: 'Gatemaster',
    knownFor: ['gate locks', 'gate closers', 'commercial security gate hardware'],
    categories: ['locks', 'latches', 'closers', 'gate security hardware'],
    bestFit: ['commercial pedestrian gates', 'industrial yards', 'security-sensitive gate openings'],
  },
  {
    slug: 'hi-motions',
    label: 'HI Motions',
    knownFor: ['cantilever gate hardware', 'rolling gate systems', 'heavy-duty gate movement components'],
    categories: ['cantilever hardware', 'gate rollers', 'rolling gate components'],
    bestFit: ['commercial cantilever gates', 'industrial slide gates', 'fabricator component packages'],
  },
  {
    slug: 'locinox',
    label: 'Locinox',
    knownFor: ['premium gate hardware', 'locks', 'hinges', 'closers', 'weather-ready gate components'],
    categories: ['gate locks', 'hinges', 'closers', 'access hardware'],
    bestFit: ['high-use pedestrian gates', 'commercial gates', 'projects where hardware quality is visible'],
  },
  {
    slug: 'max-controls',
    label: 'Max Controls',
    knownFor: ['gate operators', 'access control equipment', 'durable automated gate systems'],
    categories: ['operators', 'controls', 'access-control accessories'],
    bestFit: ['automated entrances', 'commercial gates', 'properties needing controlled vehicle access'],
  },
  {
    slug: 'rotary-gate-systems',
    label: 'Rotary Gate Systems',
    knownFor: ['space-efficient rotary gate systems', 'controlled access', 'limited-clearance gate solutions'],
    categories: ['rotary gates', 'controlled access gates', 'specialty gate systems'],
    bestFit: ['restricted-access sites', 'tight openings', 'facilities where a conventional swing or slide gate is not ideal'],
  },
];

const aboutSeeds: AboutSeed[] = [
  {
    slug: 'fence-industry-experience',
    label: 'Fence Industry Experience',
    audience: 'buyers who need to know who is behind Bru-Hart',
    proofPoints: ['45+ years in the fence and gate industry', 'deep manufacturer and contractor relationships', 'field knowledge across gates, hardware, access control, and perimeter security'],
    outcomes: ['better product judgment', 'fewer mismatched components', 'stronger RFQ conversations'],
  },
  {
    slug: 'why-contractors-call-bruhart',
    label: 'Why Contractors Call Bru-Hart',
    audience: 'fence contractors, gate fabricators, and project teams',
    proofPoints: ['practical product selection help', 'selective manufacturer support', 'fast routing to the right fence, gate, or hardware category'],
    outcomes: ['fewer callbacks', 'cleaner bids', 'better component packages'],
  },
  {
    slug: 'branford-local-commitment',
    label: 'Branford Local Commitment',
    audience: 'local residents, landowners, council members, and North Florida buyers',
    proofPoints: ['agricultural fence and gate support', 'local service-area pages', 'clear separation between local ag demand and national high-security demand'],
    outcomes: ['better local access to materials', 'stronger neighbor-facing transparency', 'a real product commitment around Branford'],
  },
  {
    slug: 'wholesale-fence-supply-approach',
    label: 'Wholesale Fence Supply Approach',
    audience: 'contractors and commercial buyers comparing Bru-Hart with larger distributors',
    proofPoints: ['job-fit-first product selection', 'domestic and imported products evaluated honestly', 'manufacturer reputation treated as a trust signal'],
    outcomes: ['smarter sourcing', 'better product availability conversations', 'less dependence on generic catalog guessing'],
  },
];

const joinList = (items: string[]) => {
  if (items.length <= 1) {
    return items[0] || '';
  }
  return `${items.slice(0, -1).join(', ')}, and ${items[items.length - 1]}`;
};

function toProductPage(seed: ProductSeed): SeoLandingPage {
  const family = productFamilies[seed.family];

  return {
    category: 'products',
    slug: seed.slug,
    path: `/products/${seed.slug}`,
    sitemapPriority: seed.family === 'agriculture' ? 0.72 : 0.74,
    title: `${seed.label} | Wholesale Fence Supply | Bru-Hart`,
    description: `${seed.label} support from Bru-Hart for ${family.buyer}, with help selecting materials around fit, reliability, availability, and field performance.`,
    eyebrow: family.eyebrow,
    heroTitle: `${seed.label} selected around the job, not a generic SKU`,
    heroDescription:
      `Bru-Hart helps ${family.buyer} compare ${seed.label.toLowerCase()} options by application fit, documentation, product support, and the way the material will actually be used in the field.`,
    introTitle: `${seed.label} matched to the real project conditions`,
    intro:
      `${seed.label} decisions should account for ${joinList(family.decisionFactors)}. Bru-Hart's role is to help customers avoid weak products, mismatched components, and false economy whether the best fit is domestic, imported, stocked, sourced, or special-order.`,
    highlights: [
      `Material support for ${joinList(family.applications.slice(0, 4))}`,
      `Common package items include ${joinList(family.productTypes.slice(0, 5))}`,
      `Selection help around ${joinList(family.decisionFactors.slice(0, 4))}`,
      'RFQ support focused on the right product for the job, not the cheapest substitute',
    ],
    sections: [
      {
        title: 'Start with the application',
        body:
          `${seed.label} can be the right answer for some jobs and the wrong answer for others. The useful conversation starts with where the product is going, who will use it, how often it will be touched, and what failure would cost.`,
        bullets: family.applications.slice(0, 3).map((item) => `Fit for ${item} when specified with the right supporting materials`),
      },
      {
        title: 'Evaluate origin, quality, and support honestly',
        body:
          'Bru-Hart does not treat domestic or imported as automatic proof of quality. Product origin matters when the project requires it, but field performance, manufacturer reputation, documentation, parts support, and fit matter too.',
        bullets: [
          'Domestic options where project requirements, lead time, or documentation call for them',
          'Imported options when they are the best-performing or best-fit product for the job',
          'Manufacturer reputation and replacement support considered before recommendation',
        ],
      },
      {
        title: 'Plan the full package',
        body:
          `${seed.label} is rarely the only thing a customer needs. Gates, posts, fittings, hardware, operators, braces, or repair parts often determine whether the finished system works cleanly after the customer or installer puts it in place.`,
        bullets: family.productTypes.slice(0, 3).map((item) => `Coordinate ${item} with the rest of the fence or gate package`),
      },
    ],
    specTitle: `${seed.label} Planning Inputs`,
    specs: [
      { label: 'Common buyers', value: family.buyer },
      { label: 'Related items', value: joinList(family.productTypes) },
      { label: 'Applications', value: joinList(family.applications) },
      { label: 'Decision factors', value: joinList(family.decisionFactors) },
    ],
    proofTitle: 'Why Bru-Hart Carries Selectively',
    proof: [
      '45+ years of fence and gate industry experience behind product selection',
      'Manufacturer reputation, job fit, documentation, and support matter more than generic catalog breadth',
      'The company is building a proof library of testimonials, photos, and case studies as projects and customer stories are collected',
    ],
    decisionMatrix: [
      {
        option: `Standard ${seed.label}`,
        chooseWhen: `The application matches common uses such as ${joinList(family.applications.slice(0, 3))}.`,
        avoidWhen: 'The project has unusual load, security, rating, appearance, animal, access, or compatibility requirements that need a more specific product path.',
        notes: `Confirm ${joinList(family.decisionFactors.slice(0, 4))} before buying on price alone.`,
      },
      {
        option: 'Special-order or sourced option',
        chooseWhen: 'The standard product is not the right fit, the spec requires a particular manufacturer, or timing and documentation need to be reviewed.',
        avoidWhen: 'The job can be solved cleanly with a stocked or simpler package and the special-order path adds unnecessary delay.',
        notes: 'Availability, lead time, replacement support, and manufacturer documentation should be verified before the quote is treated as final.',
      },
    ],
    rfqChecklist: [
      { label: 'Use case', detail: `Explain whether this is for ${joinList(family.applications.slice(0, 4))} or another application.` },
      { label: 'Measurements', detail: 'Send footage, height, opening widths, quantities, photos, drawings, or existing product dimensions.' },
      { label: 'Material fit', detail: `Clarify ${joinList(family.decisionFactors.slice(0, 5))}.` },
      { label: 'Package needs', detail: `List related items such as ${joinList(family.productTypes.slice(0, 6))}.` },
      { label: 'Constraints', detail: 'Note deadline, pickup/delivery needs, manufacturer preference, domestic/imported requirement, and any spec documents.' },
    ],
    availabilityNotes: [
      { label: 'Availability', value: 'Confirm stocked, sourced, special-order, or quote-only status with Bru-Hart before planning the job around a timeline.' },
      { label: 'Origin', value: 'Domestic and imported options should be evaluated by job fit, requirements, documentation, support, and field performance.' },
      { label: 'Package fit', value: `${seed.label} should be quoted with the related hardware, posts, gates, operators, braces, or repair materials needed for the full job.` },
    ],
    downloads: [
      { label: `${seed.label} RFQ Checklist`, description: `Checklist for measurements, product fit, related materials, photos, and availability questions for ${seed.label.toLowerCase()}.`, status: 'Planned download' },
    ],
    proofAssets: [
      { label: `${seed.label} Product Photos`, description: 'Add real yard, product, delivery, repair, or project photos once approved.', status: 'Proof needed' },
      { label: `${seed.label} Customer Story`, description: 'Add a contractor, landowner, facility, or fabricator story when real proof is collected.', status: 'Proof needed' },
    ],
    faqs: [
      {
        question: `Does Bru-Hart stock every ${seed.label.toLowerCase()} option?`,
        answer:
          'Not necessarily. Some products are stocked, some are sourced, and some are quote-only or special-order. That distinction should be confirmed during the RFQ so the customer gets the right product and timeline.',
      },
      {
        question: 'Is an imported product automatically lower quality?',
        answer:
          'No. Bru-Hart evaluates products by job fit, reliability, documentation, support, and field performance. If an imported product is the best available option for the application, that should be stated plainly.',
      },
    ],
    related: family.related,
  };
}

const serviceFocusLabels: Record<ServiceFocus, string> = {
  fenceSupply: 'Fence Supply',
  agriculture: 'Agricultural Fencing',
  farmGates: 'Farm Gates',
  chainLink: 'Chain Link Fence Supplies',
  access: 'Gate Operators & Access Control',
  materials: 'Fence Materials',
};

const serviceFocusProducts: Record<ServiceFocus, string[]> = {
  fenceSupply: ['chain link', 'wood fence materials', 'vinyl fence', 'agricultural fence', 'gates', 'hardware'],
  agriculture: ['field fence', 'barbed wire', 'high-tensile wire', 'farm gates', 'posts', 'braces'],
  farmGates: ['tube gates', 'wire-filled gates', 'driveway gates', 'hinges', 'latches', 'gate posts'],
  chainLink: ['fabric', 'posts', 'rails', 'fittings', 'gates', 'privacy slats'],
  access: ['gate operators', 'keypads', 'card readers', 'loops', 'photo eyes', 'barrier arms'],
  materials: ['posts', 'wire', 'gates', 'hardware', 'braces', 'repair materials'],
};

function toServicePage(seed: ServiceSeed): SeoLandingPage {
  const focus = serviceFocusLabels[seed.focus];
  const products = serviceFocusProducts[seed.focus];

  return {
    category: 'service-areas',
    slug: seed.slug,
    path: `/service-areas/${seed.slug}`,
    sitemapPriority: 0.68,
    title: `${focus} in ${seed.city} | Bru-Hart Industries`,
    description: `${focus} support for ${seed.city} and ${seed.region}, including ${joinList(products.slice(0, 4))} from Bru-Hart Industries.`,
    eyebrow: `${seed.city} ${focus}`,
    heroTitle: `${focus} support for ${seed.city}`,
    heroDescription:
      `Bru-Hart supports ${seed.city} and the surrounding ${seed.region} with practical fence, gate, access-control, and material sourcing built around local rural, commercial, and contractor needs.`,
    introTitle: `${seed.city} fence and gate support without boilerplate city pages`,
    intro:
      `${seed.city} matters because Bru-Hart is building a North Florida footprint around real fence and gate demand. This page gives local buyers a clear path for ${focus.toLowerCase()} without forcing every inquiry through a high-security-only message.`,
    highlights: [
      `${focus} support for ${seed.city} and nearby communities`,
      `Common needs include ${joinList(products.slice(0, 5))}`,
      'Useful for local landowners, contractors, commercial sites, and rural properties',
      'Quote conversations can distinguish stocked, sourced, special-order, and quote-only products',
    ],
    sections: [
      {
        title: 'Local demand is product-specific',
        body:
          `${seed.city} buyers may need a pasture gate, a chain link package, a driveway operator, or repair materials. The page exists to route that demand into the right product conversation quickly.`,
        bullets: products.slice(0, 3).map((item) => `${item} conversations tied to the local application`),
      },
      {
        title: 'Serve the local market without thin SEO',
        body:
          'Local service content works best when it reflects real product fit, nearby demand, and practical service reality. Bru-Hart can keep nearby town expansion tied to actual inquiries and customer needs.',
        bullets: [
          'Use real service-area details instead of duplicated city copy',
          'Use project photos and local feedback as they become available',
          'Keep nearby town expansion tied to actual inquiries and Search Console signal',
        ],
      },
      {
        title: 'Connect local buyers to the broader supply network',
        body:
          'The local advantage is practical availability and product judgment. Bru-Hart can support nearby buyers while still drawing from respected manufacturers and national product knowledge.',
        bullets: [
          'Manufacturer reputation used as a trust signal',
          'Domestic and imported options evaluated by job fit',
          'RFQs routed to the right fence, gate, or access-control category',
        ],
      },
    ],
    specTitle: `${seed.city} RFQ Inputs`,
    specs: [
      { label: 'Primary need', value: focus },
      { label: 'Product categories', value: joinList(products) },
      { label: 'Useful details', value: 'Location, footage, gate count, opening widths, product preference, photos, and timeline' },
      { label: 'Region', value: seed.region },
    ],
    proofTitle: 'Local Buying Signals',
    proof: [
      'Photos of local material, gates, displays, deliveries, or completed projects',
      'Testimonials from nearby contractors, landowners, and commercial buyers',
      'Clear stocked, sourced, and special-order product notes to set expectations',
    ],
    faqs: [
      {
        question: `Does Bru-Hart serve ${seed.city}?`,
        answer:
          `This page is built for ${seed.city} and the surrounding ${seed.region}. Product availability, pickup, delivery, and quote details should be confirmed with Bru-Hart before planning a job around a specific timeline.`,
      },
      {
        question: 'Why not create the same page for every town?',
        answer:
          'Because local SEO should reflect real service and product fit. Bru-Hart can expand town pages where demand, service reality, and customer activity justify them.',
      },
    ],
    related: [
      { label: 'Fence Materials & Supplies', href: '/products/fence-materials-supplies' },
      { label: 'Agricultural Fencing', href: '/products/agricultural-fencing' },
      { label: 'Contact Bru-Hart', href: '/contact' },
    ],
  };
}

function toIndustryPage(seed: IndustrySeed): SeoLandingPage {
  return {
    category: 'industries',
    slug: seed.slug,
    path: `/industries/${seed.slug}`,
    sitemapPriority: 0.72,
    title: `${seed.label} | Gates, Fencing & Access Control | Bru-Hart`,
    description: `${seed.label} planning for ${joinList(seed.assets.slice(0, 3))}, using ${joinList(seed.products.slice(0, 3))} and practical access-control support.`,
    eyebrow: seed.label,
    heroTitle: `${seed.label} built around access, assets, and perimeter risk`,
    heroDescription:
      `Bru-Hart helps project teams think through ${joinList(seed.products)} for ${seed.label.toLowerCase()} where product fit, documentation, and daily operation all matter.`,
    introTitle: `${seed.label} needs more than a generic fence package.`,
    intro:
      `The right perimeter plan depends on ${joinList(seed.concerns)}. Bru-Hart can help connect the fence, gate, barrier, hardware, and access-control package before a project gets locked into the wrong product.`,
    highlights: [
      `Protect ${joinList(seed.assets.slice(0, 4))}`,
      `Common product mix includes ${joinList(seed.products)}`,
      `Planning factors include ${joinList(seed.concerns.slice(0, 4))}`,
      'RFQ support for contractors and owners who need practical product judgment',
    ],
    sections: [
      {
        title: 'Map the perimeter to the operation',
        body:
          `${seed.label} projects should start with how people, vehicles, vendors, and service crews move through the site. Product choice follows the access pattern.`,
        bullets: seed.assets.slice(0, 3).map((asset) => `Review ${asset} before choosing gates or barriers`),
      },
      {
        title: 'Use the right level of security',
        body:
          'Some openings need basic access control. Others need anti-climb, anti-cut, or crash-rated products with rating documentation. Overbuilding and underbuilding both create problems.',
        bullets: seed.products.slice(0, 3).map((product) => `${product} considered where the risk and operation justify it`),
      },
      {
        title: 'Plan for serviceability',
        body:
          'A secure site still has to work every day. Operators, hinges, latches, posts, replacement parts, and manufacturer support affect long-term performance.',
        bullets: [
          'Standardize components where maintenance matters',
          'Confirm documentation and product availability before bid commitments',
          'Use project examples and documentation to support future maintenance conversations',
        ],
      },
    ],
    specTitle: `${seed.label} Planning Inputs`,
    specs: [
      { label: 'Assets', value: joinList(seed.assets) },
      { label: 'Products', value: joinList(seed.products) },
      { label: 'Concerns', value: joinList(seed.concerns) },
      { label: 'Buyer fit', value: 'Contractors, facility owners, engineers, and security teams' },
    ],
    proofTitle: 'What Bru-Hart Brings',
    proof: [
      'Fence and gate experience that connects products to field realities',
      'Selective manufacturer support instead of generic catalog guessing',
      'A growing base of testimonials and case studies can support buyer confidence over time',
    ],
    faqs: [
      {
        question: `What products matter most for ${seed.label.toLowerCase()}?`,
        answer:
          `The common mix includes ${joinList(seed.products)}, but the correct package depends on ${joinList(seed.concerns)}.`,
      },
      {
        question: 'Should every site use crash-rated products?',
        answer:
          'No. Crash-rated products should be used where the risk, approach conditions, and project requirements justify them. Product documentation should be confirmed for the exact configuration being specified.',
      },
    ],
    related: [
      { label: 'Perimeter Security Fencing', href: '/products/perimeter-security-fencing' },
      { label: 'Access Control & Automation', href: '/products/access-control-automation' },
      { label: 'Crash Rated Barriers', href: '/products/crash-rated-barriers' },
    ],
  };
}

function toResourcePage(seed: ResourceSeed): SeoLandingPage {
  return {
    category: 'resources',
    slug: seed.slug,
    path: `/resources/${seed.slug}`,
    sitemapPriority: 0.64,
    title: `${seed.label} | Bru-Hart Resource Guide`,
    description: `${seed.label} guide for ${seed.audience}, covering ${joinList(seed.questions.slice(0, 4))}.`,
    eyebrow: 'Fence & Gate Resource',
    heroTitle: seed.label,
    heroDescription:
      `A practical Bru-Hart guide for ${seed.audience}, written to support better quote conversations and fewer product mismatches.`,
    introTitle: 'Better buying decisions start with better questions.',
    intro:
      `${seed.label} should help buyers understand ${joinList(seed.questions)} before they request pricing. The goal is not generic education; it is to help the customer arrive at a better product conversation.`,
    highlights: [
      `Built for ${seed.audience}`,
      `Covers ${joinList(seed.questions.slice(0, 4))}`,
      'Supports RFQs, product selection, and internal linking',
      'Designed to gain more photos, diagrams, and field notes over time',
    ],
    sections: [
      {
        title: 'What to clarify first',
        body:
          `Start with ${joinList(seed.questions.slice(0, 3))}. These details usually change the product recommendation, the timeline, or the supporting materials list.`,
        bullets: seed.questions.slice(0, 3).map((question) => `Clarify ${question} before requesting final pricing`),
      },
      {
        title: 'Where product judgment matters',
        body:
          'The best product is the one that fits the job. Domestic origin, imported origin, price, documentation, and availability are all inputs, but none of them replaces application fit.',
        bullets: [
          'Use manufacturer reputation as evidence, not a substitute for product fit',
          'Confirm rating or safety documentation where the project requires it',
          'Avoid cheap substitutions that create callbacks or weak points',
        ],
      },
      {
        title: 'How to turn the guide into an RFQ',
        body:
          'A stronger quote request includes measurements, photos, site use, preferred products, timing, and the parts of the job that cannot fail.',
        bullets: [
          'Send photos and measurements where possible',
          'Describe the use case, not just the product name',
          'Ask whether products are stocked, sourced, special-order, or quote-only',
        ],
      },
    ],
    specTitle: 'Useful Inputs',
    specs: [
      { label: 'Audience', value: seed.audience },
      { label: 'Questions', value: joinList(seed.questions) },
      { label: 'Output', value: 'A clearer product, material, or specification conversation' },
      { label: 'Next step', value: 'Request a quote with measurements, photos, timeline, and product preferences' },
    ],
    proofTitle: 'Why This Helps The Quote',
    proof: [
      'Better inputs reduce blind recommendations',
      'Photos, diagrams, and material details make product fit easier to verify',
      'Clear tradeoffs help buyers compare origin, lead time, price, and reliability',
    ],
    faqs: [
      {
        question: 'Is this a substitute for a project-specific quote?',
        answer:
          'No. This guide is meant to improve the quote conversation. Product availability, compatibility, rating documentation, and final fit should be confirmed with Bru-Hart.',
      },
      {
        question: 'Can Bru-Hart recommend imported products?',
        answer:
          'Yes. If an imported product is the best available option for the job, Bru-Hart can explain the product-fit reasoning clearly.',
      },
    ],
    related: seed.related,
  };
}

function toManufacturerPage(seed: ManufacturerSeed): SeoLandingPage {
  return {
    category: 'manufacturers',
    slug: seed.slug,
    path: `/manufacturers/${seed.slug}`,
    sitemapPriority: 0.66,
    title: `${seed.label} Fence & Gate Product Support | Bru-Hart`,
    description: `Bru-Hart support for ${seed.label} products, including ${joinList(seed.categories)} and application-fit quote guidance.`,
    eyebrow: 'Manufacturer Support',
    heroTitle: `${seed.label} product support through Bru-Hart`,
    heroDescription:
      `Bru-Hart uses manufacturer reputation as part of product selection, then matches ${seed.label} options to the job, the buyer, and the field conditions.`,
    introTitle: `Why ${seed.label} belongs in the conversation.`,
    intro:
      `${seed.label} is known for ${joinList(seed.knownFor)}. Bru-Hart's job is to help buyers understand where that reputation fits the application instead of treating a brand name as a shortcut.`,
    highlights: [
      `Known for ${joinList(seed.knownFor.slice(0, 3))}`,
      `Relevant categories include ${joinList(seed.categories)}`,
      `Best fit for ${joinList(seed.bestFit.slice(0, 3))}`,
      'Bru-Hart evaluates product fit, origin, support, documentation, and field performance',
    ],
    sections: [
      {
        title: 'What the brand is known for',
        body:
          `${seed.label} has a specific place in the fence and gate market. Buyers who already know the brand should be able to quickly see how Bru-Hart can support product selection and quoting.`,
        bullets: seed.knownFor.map((item) => `${seed.label} reputation: ${item}`),
      },
      {
        title: 'Why Bru-Hart carries selectively',
        body:
          'Bru-Hart does not need to sell junk to compete. A product can be domestic, imported, premium, or specialized; the question is whether it is the best available fit for the job.',
        bullets: [
          'Origin matters when project requirements call for it',
          'Imported products can be the best choice when performance and fit justify them',
          'Manufacturer support and replacement availability affect long-term value',
        ],
      },
      {
        title: 'Turn brand interest into a quote',
        body:
          `A useful ${seed.label} RFQ should include the product category, application, dimensions, finish, quantity, timeline, and any rating or safety requirement.`,
        bullets: seed.categories.map((category) => `Request ${category} support with application details`),
      },
    ],
    specTitle: `${seed.label} RFQ Inputs`,
    specs: [
      { label: 'Known for', value: joinList(seed.knownFor) },
      { label: 'Categories', value: joinList(seed.categories) },
      { label: 'Best fit', value: joinList(seed.bestFit) },
      { label: 'Availability', value: 'Confirm stocked, sourced, special-order, or quote-only status with Bru-Hart' },
    ],
    proofTitle: 'Manufacturer Reputation As Proof',
    proof: [
      'Strong manufacturers reduce buyer uncertainty before the first sales conversation',
      'Bru-Hart can add customer testimonials and project examples as real proof is collected',
      'Brand support language stays factual and avoids unauthorized relationship claims',
    ],
    faqs: [
      {
        question: `Does Bru-Hart carry every ${seed.label} product?`,
        answer:
          `Not necessarily. Bru-Hart confirms the specific ${seed.label} product line, availability, timeline, and application fit during the quote process.`,
      },
      {
        question: 'Does product origin determine quality?',
        answer:
          'No. Product origin is one input. Bru-Hart evaluates fit, reliability, documentation, support, replacement availability, and field performance before recommending a product.',
      },
    ],
    related: [
      { label: 'Manufacturers', href: '/manufacturers' },
      { label: 'Fence Materials & Supplies', href: '/products/fence-materials-supplies' },
      { label: 'Request a Quote', href: '/contact' },
    ],
  };
}

function toAboutPage(seed: AboutSeed): SeoLandingPage {
  return {
    category: 'about',
    slug: seed.slug,
    path: `/about/${seed.slug}`,
    sitemapPriority: 0.7,
    title: `${seed.label} | Bru-Hart Industries`,
    description: `${seed.label} at Bru-Hart for ${seed.audience}, built around ${joinList(seed.proofPoints.slice(0, 3))}.`,
    eyebrow: 'Bru-Hart Proof',
    heroTitle: seed.label,
    heroDescription:
      `Bru-Hart connects buyers with product judgment, manufacturer context, and local commitments that make fence and gate decisions easier to get right.`,
    introTitle: 'Authority has to be visible, not assumed.',
    intro:
      `${seed.label} matters for ${seed.audience}. Bru-Hart makes that advantage visible through clear guidance, practical product decisions, and proof-backed support that reflects field experience.`,
    highlights: [
      `Built for ${seed.audience}`,
      `Proof points include ${joinList(seed.proofPoints.slice(0, 3))}`,
      `Business outcomes include ${joinList(seed.outcomes)}`,
      'Built to connect buyers with the right product path before a quote is finalized',
    ],
    sections: [
      {
        title: 'What buyers need to understand',
        body:
          'Bru-Hart is not a generic price-sheet seller. The value is in product judgment, sourcing context, local support, and knowing which details change the recommendation.',
        bullets: seed.proofPoints.map((point) => `Buyer signal: ${point}`),
      },
      {
        title: 'How this supports buyers',
        body:
          'A better page helps a buyer move from vague product search to a confident RFQ. That requires product truth, manufacturer context, practical guidance, and clear next steps.',
        bullets: seed.outcomes.map((outcome) => `Buyer outcome: ${outcome}`),
      },
      {
        title: 'How the decision gets clearer',
        body:
          'The best buyers do not just need a category name. They need to understand what changes price, lead time, fit, compliance, field performance, and support after the product is put in service by the customer, contractor, or installer.',
        bullets: [
          'Clarify the real use case before quoting',
          'Route complex decisions to expert sourcing when a commodity answer is not enough',
          'Use approved proof and product detail where it helps the buyer make a better decision',
        ],
      },
    ],
    specTitle: 'What Buyers Can Evaluate',
    specs: [
      { label: 'Audience', value: seed.audience },
      { label: 'Proof points', value: joinList(seed.proofPoints) },
      { label: 'Buyer outcomes', value: joinList(seed.outcomes) },
      { label: 'Best next step', value: 'Share product needs, site details, timeline, photos, and documentation requirements before quoting' },
    ],
    proofTitle: 'Why This Strengthens Bru-Hart',
    proof: [
      'It turns known industry reputation into practical buyer guidance',
      'It gives buyers a clearer way to understand where expert judgment matters',
      'It supports sales conversations with more context before the first quote',
    ],
    faqs: [
      {
        question: 'Does Bru-Hart need every buyer to know the company already?',
        answer:
          'No. These pages make the company easier to evaluate for buyers who may not already know the people, product judgment, or supplier relationships behind it.',
      },
      {
        question: 'Why does this matter before requesting a quote?',
        answer:
          'Fence and gate quotes can go wrong when the buyer starts with a vague category instead of the application, material requirements, site conditions, and support needs.',
      },
    ],
    related: [
      { label: 'Reviews', href: '/reviews' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Ask a Fence Expert', href: '/resources/ask-a-fence-expert' },
    ],
  };
}

const generatedQualityOverrides: Record<string, Partial<SeoLandingPage>> = {
  'chain-link-fence-supplies': {
    decisionMatrix: [
      {
        option: 'Galvanized chain link package',
        chooseWhen: 'The buyer needs a practical, durable fence package for yards, commercial sites, schools, utilities, storage, or rural boundaries.',
        avoidWhen: 'The site needs architectural appearance, high privacy without slats/screening, anti-climb performance, or a non-metallic fence system.',
        notes: 'Confirm height, mesh, gauge, coating, post schedule, gates, fittings, tension wire, top rail, and any barbed-wire or privacy needs.',
      },
      {
        option: 'Black vinyl-coated chain link',
        chooseWhen: 'Appearance, corrosion resistance, or a cleaner commercial/residential look matters more than lowest first cost.',
        avoidWhen: 'The buyer only needs a short-term or lowest-price industrial boundary and appearance is not important.',
        notes: 'Confirm coating, color match, fittings, gates, framework, and whether privacy slats or screening will be added.',
      },
      {
        option: 'Security chain link package',
        chooseWhen: 'The site needs smaller mesh, heavier gauge, toppings, privacy control, stronger posts, or controlled gate openings.',
        avoidWhen: 'The threat level calls for anti-climb welded mesh, crash-rated barriers, or another high-security system entirely.',
        notes: 'Use this page to route serious security jobs into perimeter security, crash-rated gates, and access-control pages.',
      },
    ],
    rfqChecklist: [
      { label: 'Fence line', detail: 'Total footage, height, terminal/corner count, line post count if known, terrain, and repair vs new build.' },
      { label: 'Fabric', detail: 'Mesh size, gauge, galvanized or vinyl-coated, color, privacy slats, screening, and any spec requirements.' },
      { label: 'Framework', detail: 'Post OD/schedule, top rail, brace rail, bottom rail or tension wire, coating, and gate-post needs.' },
      { label: 'Gates', detail: 'Walk gates, double drive gates, cantilever or slide gates, opening widths, latches, hinges, rollers, and operator readiness.' },
      { label: 'Site use', detail: 'Residential, commercial, school, utility, storage, rural, security, dog containment, privacy, or temporary repair.' },
    ],
    availabilityNotes: [
      { label: 'Competitor baseline', value: 'Large distributors already show chain link brochures, specs, drawings, warranties, and mesh/gauge tables. This page adds buyer utility plus expert guidance.' },
      { label: 'Product truth', value: 'Fill in stocked, sourced, special-order, and quote-only status for fabric, posts, rails, fittings, gates, slats, and color systems.' },
      { label: 'Positioning', value: 'This page is strongest when the buyer needs the whole chain-link package specified correctly, not just the cheapest piece count.' },
    ],
    downloads: [
      { label: 'Chain Link Material Checklist', description: 'Checklist for fabric, framework, fittings, gates, privacy, coatings, and repair parts.', status: 'Needs PDF/spec sheet' },
      { label: 'Mesh / Gauge / Coating Comparison', description: 'Plain-English table explaining common chain link fabric choices and where they fit.', status: 'Needs product matrix' },
      { label: 'Chain Link Gate Opening Worksheet', description: 'Worksheet for walk gates, double drive gates, cantilever gates, hinges, latches, posts, and operator readiness.', status: 'Needs PDF/spec sheet' },
    ],
    proofAssets: [
      { label: 'Chain Link Yard Photos', description: 'Photos of fabric rolls, framework, fittings, gates, slats, privacy options, and common repair materials.', status: 'Needs photos' },
      { label: 'Contractor Package Testimonial', description: 'Short quote from a contractor who values Bru-Hart helping get the whole chain-link package right.', status: 'Proof needed' },
      { label: 'Florida Corrosion / Coating Note', description: 'Owner note or photo-supported guidance on galvanized vs vinyl-coated material for local conditions.', status: 'Needs owner input' },
    ],
  },
  'fence-pipe-tube': {
    decisionMatrix: [
      {
        option: 'Domestic pipe / tube',
        chooseWhen: 'The project requires domestic material, tighter documentation, specific manufacturer preference, or a buyer who prioritizes origin and support path.',
        avoidWhen: 'The job has no domestic requirement and a sourced/imported option is clearly the better fit for performance, availability, or budget.',
        notes: 'Confirm origin requirements before quoting because price alone can hide a spec-compliance problem.',
      },
      {
        option: 'Imported pipe / tube',
        chooseWhen: 'The imported product is the best available fit for the job, documentation is acceptable, and the buyer understands the tradeoffs.',
        avoidWhen: 'The spec, public project, or buyer requirement explicitly requires domestic material or a specific document package.',
        notes: 'Say plainly when an imported product is the best option, but tie that recommendation to fit, not cheapness.',
      },
      {
        option: 'Schedule 40 / heavy-wall / special-order',
        chooseWhen: 'The application involves commercial posts, gate frames, heavier loads, unusual sizes, or a project that cannot fail in the field.',
        avoidWhen: 'Light-duty material is acceptable and heavier product only adds cost without improving the actual job.',
        notes: 'Clarify OD, wall thickness, length, finish, cut requirements, load, and gate/fence role before quoting.',
      },
    ],
    rfqChecklist: [
      { label: 'Use', detail: 'Line posts, terminal posts, brace rail, top rail, gate frames, commercial fence, agricultural gates, or fabrication stock.' },
      { label: 'Dimensions', detail: 'Outside diameter, wall thickness or schedule, length, quantity, cut-to-order needs, and tolerance requirements if any.' },
      { label: 'Origin', detail: 'Domestic required, import acceptable, either acceptable, unknown, or project-specific documentation needed.' },
      { label: 'Finish', detail: 'Galvanized, color-coated, raw, powder-coated, or other coating expectation.' },
      { label: 'Project constraints', detail: 'Deadline, pickup/shipping, bundle quantity, truckload vs pieces, manufacturer preference, and matching existing material.' },
    ],
    availabilityNotes: [
      { label: 'Competitor baseline', value: 'Binford publicly emphasizes import/domestic pipe and tube, cut-to-order support, Schedule 80 sourcing, and special orders. Bru-Hart must match that clarity and add expert fit guidance.' },
      { label: 'Product truth', value: 'The page needs a real stocked/sourced/special-order matrix for OD, wall, length, finish, origin, and cut options.' },
      { label: 'Sales fit', value: 'Best for contractors and fabricators who need the right pipe/tube answer, not just the cheapest piece count.' },
    ],
    downloads: [
      { label: 'Fence Pipe & Tube RFQ Sheet', description: 'Order inputs for OD, wall, length, finish, origin, cut requirements, quantity, and application.', status: 'Needs PDF/spec sheet' },
      { label: 'Post / Rail / Gate-Frame Tube Matrix', description: 'Matrix mapping common pipe and tube choices to fence, gate, brace, and fabrication use cases.', status: 'Needs product matrix' },
      { label: 'Import vs Domestic Decision Guide', description: 'Plain-English guidance for when origin matters and when product fit should control the decision.', status: 'Needs owner review' },
    ],
    proofAssets: [
      { label: 'Pipe & Tube Inventory Photos', description: 'Photos of galvanized pipe, tube, color pipe, cut lengths, bundles, gate-frame material, and special-order examples.', status: 'Needs photos' },
      { label: 'Fabricator / Contractor Quote', description: 'Approved quote about Bru-Hart helping find the right pipe, wall, length, or replacement material.', status: 'Proof needed' },
      { label: 'Special-Order Example', description: 'A real or anonymized story where Bru-Hart sourced a nonstandard pipe/tube requirement that a price-sheet seller would struggle with.', status: 'Proof needed' },
    ],
  },
  'complex-gate-package-rfq-guide': {
    decisionMatrix: [
      {
        option: 'Simple manual gate package',
        chooseWhen: 'The opening is low-cycle, manually operated, and the main needs are frame, posts, hinges, latch, guide hardware, and fit.',
        avoidWhen: 'The gate is heavy, high-cycle, automated, security-sensitive, crash-rated, or tied to access-control requirements.',
        notes: 'Even simple gates need correct posts, hinges, latch, clear opening, swing/slide path, and hardware compatibility.',
      },
      {
        option: 'Automated commercial gate package',
        chooseWhen: 'The opening needs an operator, safety devices, loops, access control, power planning, and repeatable daily operation.',
        avoidWhen: 'The site cannot provide enough detail about power, cycles, gate weight, safety devices, and how people/vehicles will move.',
        notes: 'This is where buyers need a complete RFQ instead of a generic operator price.',
      },
      {
        option: 'High-security / crash-rated package',
        chooseWhen: 'The site has vehicle-threat, rating, perimeter security, or critical-infrastructure requirements.',
        avoidWhen: 'The buyer only needs traffic control, basic access, or visual deterrence without documented vehicle mitigation.',
        notes: 'Use crash-rated language carefully and confirm documentation for the exact product/configuration being specified.',
      },
    ],
    rfqChecklist: [
      { label: 'Opening', detail: 'Clear opening, gate type, swing/slide direction, backspace, grade, drainage, utilities, and traffic pattern.' },
      { label: 'Gate', detail: 'Frame material, height, infill, estimated weight, wind exposure, site class, and expected cycle count.' },
      { label: 'Hardware', detail: 'Posts, hinges, rollers, trucks, guides, latches, locks, stops, receivers, and replacement compatibility.' },
      { label: 'Automation', detail: 'Operator type, power, battery backup, loops, photo eyes, edges, credentials, intercom, guard controls, and fail mode.' },
      { label: 'Documentation', detail: 'Spec documents, manufacturer preference, UL 325 / ASTM F2200 concerns, crash-rating language, drawings, and photos.' },
    ],
    availabilityNotes: [
      { label: 'Purpose', value: 'This resource reduces bad RFQs by showing exactly what details change the recommendation.' },
      { label: 'Expert positioning', value: 'It supports the "call Bru-Hart when the job is not a commodity quote" message without naming private competitor rescue calls.' },
      { label: 'Proof path', value: 'Use annotated diagrams and approved project examples to show how better RFQ detail prevents expensive mistakes.' },
    ],
    downloads: [
      { label: 'Complex Gate Package RFQ Checklist', description: 'The primary downloadable checklist for gate type, opening, hardware, operators, safety, controls, and documentation.', status: 'Needs PDF/spec sheet' },
      { label: 'Gate Safety Device Checklist', description: 'Checklist for loops, photo eyes, edges, monitored devices, pedestrian separation, and automated-gate safety planning.', status: 'Needs technical review' },
      { label: 'Gate Problem Photo Guide', description: 'A guide showing which photos Bru-Hart needs to diagnose replacement parts, failed gates, worn trucks, and operator issues.', status: 'Needs photo examples' },
    ],
    proofAssets: [
      { label: 'Annotated Gate Package Diagram', description: 'Illustration labeling gate frame, posts, hinges, trucks, track, operator, loops, photo eyes, controls, and safety devices.', status: 'Needs illustration' },
      { label: 'Dana Field Note', description: 'Owner note explaining the top five gate RFQ details buyers usually forget and why those misses create expensive problems.', status: 'Needs owner input' },
      { label: 'Hard Gate Problem Story', description: 'Approved or anonymized example of Bru-Hart catching a wrong operator, weak hardware, missing safety device, or incompatible component path.', status: 'Proof needed' },
    ],
  },
};

function applyGeneratedQualityOverrides(page: SeoLandingPage): SeoLandingPage {
  const override = generatedQualityOverrides[page.slug];

  return override ? { ...page, ...override } : page;
}

export const generatedSeoLandingPages: SeoLandingPage[] = [
  ...productSeeds.map(toProductPage),
  ...serviceSeeds.map(toServicePage),
  ...industrySeeds.map(toIndustryPage),
  ...resourceSeeds.map(toResourcePage),
  ...manufacturerSeeds.map(toManufacturerPage),
  ...aboutSeeds.map(toAboutPage),
].map(applyGeneratedQualityOverrides);
