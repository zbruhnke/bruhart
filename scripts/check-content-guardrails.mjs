#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const args = new Set(process.argv.slice(2));

const modes = {
  source: args.has('--source') || (!args.has('--source') && !args.has('--rendered')),
  rendered: args.has('--rendered') || (!args.has('--source') && !args.has('--rendered')),
};

const sourceTargets = [
  path.join(root, 'src'),
  path.join(root, 'scripts', 'seed-sanity.ts'),
];

const renderedTargets = [
  path.join(root, '.next', 'server', 'app'),
];

const skippedDirectories = new Set(['node_modules', '.git', '.next', 'out', '.sanity']);
const sourceExtensions = new Set(['.ts', '.tsx', '.js', '.jsx', '.mjs', '.json', '.mdx']);
const renderedExtensions = new Set(['.html']);

const rules = [
  {
    id: 'direct-we-install',
    pattern: /\bwe\s+(?:can\s+|will\s+|do\s+|also\s+|actually\s+)?install(?:s|ed|ing)?\b/i,
    message: 'Do not say or imply that Bru-Hart installs products.',
  },
  {
    id: 'bruhart-installs',
    pattern: /\bbru-?hart\s+installs?\b/i,
    message: 'Bru-Hart does not install anything it sells.',
  },
  {
    id: 'installation-services',
    pattern: /\b(?:fence|gate|barrier|access-control|agricultural\s+fence)?\s*installation\s+services?\b/i,
    message: 'Use technical support, product guidance, or installer recommendations instead of installation services.',
  },
  {
    id: 'our-installers',
    pattern: /\bour\s+(?:experienced\s+)?installers?\b/i,
    message: 'Use "experienced installers" or "recommended installers"; do not imply Bru-Hart has installers.',
  },
  {
    id: 'installation-team',
    pattern: /\bour\s+installation\s+team\b/i,
    message: 'Bru-Hart has product experts, not an installation team.',
  },
  {
    id: 'installed-by-bruhart',
    pattern: /\binstalled\s+by\s+(?:bru-?hart|our\s+team)\b/i,
    message: 'Do not say products are installed by Bru-Hart or its team.',
  },
  {
    id: 'turnkey-installation',
    pattern: /\bturnkey\s+(?:installation|install|service|project|system|solution)\b/i,
    message: 'Turnkey language can imply field labor; use material package, product package, or technical support.',
  },
  {
    id: 'end-to-end-solution',
    pattern: /\bend-to-end\s+(?:perimeter|security|gate|fence|solution|service|installation|project)\b/i,
    message: 'End-to-end language can imply design/install/service scope.',
  },
  {
    id: 'design-and-install',
    pattern: /\bdesign\s+and\s+install\b/i,
    message: 'Bru-Hart can advise, source, and support; it does not design-and-install as a field contractor.',
  },
  {
    id: 'full-service-fence-company',
    pattern: /\bfull[-\s]service\s+(?:fence|gate|perimeter|security)\s+(?:company|contractor|provider)\b/i,
    message: 'Full-service fence/gate company usually implies installation services.',
  },
  {
    id: 'professional-installation',
    pattern: /\bprofessional\s+installation\b/i,
    message: 'Refer to customer, contractor, or separate installer-led installation instead.',
  },
  {
    id: 'provide-installation',
    pattern: /\bwe\s+(?:provide|offer|handle|perform)\s+(?:the\s+)?installation\b/i,
    message: 'Bru-Hart provides technical support and materials, not installation.',
  },
];

const isSkippableLine = (line) =>
  line.includes('content-guardrail-disable-line');

const shouldScanFile = (filePath, extensions) =>
  extensions.has(path.extname(filePath));

function collectFiles(target, extensions) {
  if (!fs.existsSync(target)) {
    return [];
  }

  const stat = fs.statSync(target);
  if (stat.isFile()) {
    return shouldScanFile(target, extensions) ? [target] : [];
  }

  const files = [];
  const entries = fs.readdirSync(target, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(target, entry.name);

    if (entry.isDirectory()) {
      if (!skippedDirectories.has(entry.name)) {
        files.push(...collectFiles(fullPath, extensions));
      }
      continue;
    }

    if (entry.isFile() && shouldScanFile(fullPath, extensions)) {
      files.push(fullPath);
    }
  }

  return files;
}

function scanFile(filePath) {
  const relativePath = path.relative(root, filePath);
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split(/\r?\n/);
  const findings = [];

  lines.forEach((line, index) => {
    if (isSkippableLine(line)) {
      return;
    }

    for (const rule of rules) {
      if (rule.pattern.test(line)) {
        findings.push({
          file: relativePath,
          line: index + 1,
          id: rule.id,
          message: rule.message,
          excerpt: line.trim().slice(0, 220),
        });
      }
    }
  });

  return findings;
}

function runScan(label, targets, extensions) {
  const files = targets.flatMap((target) => collectFiles(target, extensions));
  const findings = files.flatMap(scanFile);

  if (findings.length === 0) {
    console.log(`Content guardrails passed for ${label} (${files.length} files scanned).`);
    return 0;
  }

  console.error(`Content guardrails failed for ${label}.`);
  console.error('Bru-Hart must never be described as an installer or installation-services company.\n');

  for (const finding of findings) {
    console.error(`${finding.file}:${finding.line} [${finding.id}] ${finding.message}`);
    console.error(`  ${finding.excerpt}\n`);
  }

  console.error('Rewrite using: materials/components supplier, technical support, product guidance, RFQ support, documentation support, troubleshooting guidance, and experienced installer recommendations.');
  return findings.length;
}

let failureCount = 0;

if (modes.source) {
  failureCount += runScan('source content', sourceTargets, sourceExtensions);
}

if (modes.rendered) {
  failureCount += runScan('rendered HTML', renderedTargets, renderedExtensions);
}

if (failureCount > 0) {
  process.exit(1);
}
