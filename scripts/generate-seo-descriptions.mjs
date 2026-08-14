import fs from 'node:fs';
import path from 'node:path';

const docsDir = path.resolve('docs');
const outputPath = path.resolve('src/generated/seo-descriptions.json');
const overridesPath = path.resolve('scripts/seo-description-overrides.json');
const overrides = fs.existsSync(overridesPath)
  ? JSON.parse(fs.readFileSync(overridesPath, 'utf8'))
  : {};

function walk(directory) {
  return fs.readdirSync(directory, {withFileTypes: true}).flatMap((entry) => {
    const resolved = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(resolved) : [resolved];
  });
}

function escapeRegExp(value) {
  return value.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
}

function stripYamlQuotes(value) {
  return value?.trim().replace(/^['"]|['"]$/g, '');
}

function cleanMarkdownLine(rawLine) {
  const trimmed = rawLine.trim();
  if (!trimmed || /^#{1,6}\s/.test(trimmed) || /^!\[/.test(trimmed)) return '';
  if (/^(?:---|:::|<!--|-->)/.test(trimmed)) return '';
  if (/^\|.*\|$/.test(trimmed)) return '';
  if (/^\|?(?:\s*:?-+:?\s*\|)+\s*$/.test(trimmed)) return '';
  if (/^(?:This is a defensive tool-intelligence page|It is intended for analyst navigation|It is not a malware-analysis report)/i.test(trimmed)) return '';
  if (/^Generated from\b/i.test(trimmed)) return '';

  return trimmed
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/https?:\/\/\S+/g, 'the linked source')
    .replace(/【[^】]+】/g, '')
    .replace(/\be\.g\./gi, 'for example')
    .replace(/\bi\.e\./gi, 'that is')
    .replace(/\betc\./gi, 'and related examples')
    .replace(/\bU\.S\./g, 'US')
    .replace(/(\d)\.(\d)/g, '$1·$2')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[`*_#>]/g, '')
    .replace(/^[-+]\s+/, '')
    .replace(/^\d+[.)]\s+/, '')
    .replace(/\|/g, '; ')
    .replace(/\.{2,}|…/g, '.')
    .replace(/\s+/g, ' ')
    .replace(/^[\s:;,.-]+|[\s:;,-]+$/g, '')
    .trim();
}

function splitCompleteStatements(value) {
  const normalized = value.replace(/\s+/g, ' ').trim();
  if (!normalized) return [];
  return (normalized.match(/[^.!?]+(?:[.!?]+|$)/g) ?? [])
    .map((statement) => statement.trim())
    .filter((statement) => statement.length >= 30 && statement.split(/\s+/).length >= 5)
    .map((statement) => statement.replace(/(\d)·(\d)/g, '$1.$2'))
    .map((statement) => /[.!?]$/.test(statement) ? statement : statement + '.');
}

function parseDocument(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const frontMatterMatch = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
  const frontMatter = frontMatterMatch?.[1] ?? '';
  const body = frontMatterMatch ? raw.slice(frontMatterMatch[0].length) : raw;
  const frontMatterTitle = stripYamlQuotes(frontMatter.match(/^title:\s*(.+?)\s*$/m)?.[1]);
  const frontMatterDescription = stripYamlQuotes(frontMatter.match(/^description:\s*(.+?)\s*$/m)?.[1]);
  const headingTitle = body.match(/^#\s+(.+?)\s*$/m)?.[1];
  const title = (frontMatterTitle || headingTitle || path.basename(file, path.extname(file)))
    .replace(/\s*\|\s*1200km\s*$/i, '')
    .trim();

  const prose = body
    .replace(/<!-- ACTOR-NAVIGATION:START -->[\s\S]*?<!-- ACTOR-NAVIGATION:END -->/g, ' ')
    .replace(/<!--([\s\S]*?)-->/g, ' ')
    .replace(/Generated from[\s\S]*?\.\s*(?=\n)/g, ' ')
    .replace(/```[\s\S]*?```/g, ' ');

  const statements = [];
  if (frontMatterDescription) statements.push(frontMatterDescription);

  if (/\bResearch Intake$/i.test(title)) {
    const topic = title.replace(/\s+(?:Deep )?Research Intake$/i, '').trim();
    statements.push(
      'Review imported research evidence covering ' + topic
      + '; validate its claims, citations, IOCs, and detection logic against primary public sources.',
    );
  }

  const associatedActors = body.match(/^- Associated actor\(s\):\s*(.+)$/m)?.[1];
  const toolType = body.match(/^- Tool type\(s\):\s*(.+)$/m)?.[1];
  if (associatedActors && toolType) {
    const actors = associatedActors
      .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
      .replace(/[`*_]/g, '')
      .split(';')
      .map((value) => value.trim())
      .filter(Boolean)
      .slice(0, 2);
    const actorPhrase = actors.length > 1 ? actors.join(' and ') : actors[0];
    const confidence = body.match(/^- Confidence level\(s\):\s*(.+)$/m)?.[1]
      ?.replace(/[`*_]/g, '')
      .trim()
      .toLowerCase();
    const sourceIds = body.match(/^- Source ID\(s\):\s*(.+)$/m)?.[1]
      ?.replace(/[`*_]/g, '')
      .trim();
    const typeAliases = {
      reg: 'Windows configuration utility',
      net: 'Windows command-line utility',
    };
    const type = typeAliases[title.toLowerCase()]
      ?? toolType.replace(/[`*_]/g, '').trim().toLowerCase();
    if (actorPhrase && type) {
      const evidenceScope = [
        confidence ? 'at ' + confidence + ' confidence' : '',
        sourceIds ? 'under ' + sourceIds : '',
      ].filter(Boolean).join(' ');
      statements.push(
        'Review a ' + type + ' associated with ' + actorPhrase
        + (evidenceScope ? ', recorded ' + evidenceScope : '') + '.',
      );
    }

    const behaviorSection = body.match(/## Behavior\s+([\s\S]*?)(?=\n##\s|$)/)?.[1] ?? '';
    const behaviorRow = behaviorSection
      .split(/\r?\n/)
      .find((line) => /^\|.*\|$/.test(line.trim()) && !/Behavior Summary|---/.test(line));
    const behavior = behaviorRow?.split('|')[2]?.trim();
    if (behavior) {
      const titlePattern = new RegExp(escapeRegExp(title), 'gi');
      const statement = behavior
        .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
        .replace(titlePattern, 'this tool')
        .replace(/[`*_]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
      if (statement) statements.push(/[.!?]$/.test(statement) ? statement : statement + '.');
    }
  }

  for (const rawLine of prose.split(/\r?\n/)) {
    const line = cleanMarkdownLine(rawLine);
    statements.push(...splitCompleteStatements(line));
  }

  return {title, statements};
}

function toValueStatement(statement) {
  const transformed = statement
    .replace(/^Explain how to\s+/i, 'Learn how to ')
    .replace(/^Show how to\s+/i, 'Learn how to ')
    .replace(/^Define\s+/i, 'Learn how to define ')
    .replace(/^Separate\s+/i, 'Learn to separate ')
    .replace(/^Give\s+/i, 'Find ')
    .replace(/^Provide\s+/i, 'Use ')
    .replace(/^This page documents\s+/i, 'Review ')
    .replace(/^This documentation organizes\s+/i, 'Explore ')
    .replace(/\s+/g, ' ')
    .trim();
  return /[.!?]$/.test(transformed) ? transformed : transformed + '.';
}

function isCompliant(description, title) {
  const openParentheses = (description.match(/\(/g) ?? []).length;
  const closeParentheses = (description.match(/\)/g) ?? []).length;
  return description.length >= 140
    && description.length <= 160
    && !description.toLowerCase().includes(title.toLowerCase())
    && !/\.\.|…/.test(description)
    && /[.!?]$/.test(description)
    && description.split(/\s+/).length >= 16
    && openParentheses === closeParentheses
    && !/\b(?:a|an|and|as|at|by|for|from|in|of|on|or|the|to|with)\.$/i.test(description)
    && !/\b(?:Guide (?:analyst )?review|Inform (?:analyst review|practical defensive analysis)|Apply (?:these findings in defensive analyst work|the evidence and limits in defensible analyst decisions)|Use it to guide analyst review|Use these findings in practical defensive analysis|Support defensible analyst decisions|Use the evidence(?:, limitations, and workflow guidance| and limitations)? to support defensible analysis)\b/i.test(description);
}

function descriptionCandidates(statement) {
  const suffixes = [
    ' Guide review.',
    ' Guide analyst review.',
    ' Inform analyst review.',
    ' Use it to guide analyst review.',
    ' Inform practical defensive analysis.',
    ' Apply these findings in defensive analyst work.',
    ' Use these findings in practical defensive analysis.',
    ' Apply the evidence and limits in defensible analyst decisions.',
    ' Support defensible analyst decisions with the documented evidence and limits.',
    ' Use the evidence and limitations to support defensible analysis and transparent analyst decisions.',
    ' Use the evidence, limitations, and workflow guidance to support defensible analysis and transparent analyst decisions.',
  ];
  return [statement, ...suffixes.map((suffix) => statement + suffix)];
}

function composeDescription(statements, title, used) {
  const titlePattern = new RegExp(escapeRegExp(title), 'i');
  const usable = statements
    .map(toValueStatement)
    .filter((statement) => !titlePattern.test(statement))
    .filter((statement, index, values) => values.indexOf(statement) === index);

  for (const statement of usable) {
    for (const candidate of descriptionCandidates(statement)) {
      if (isCompliant(candidate, title) && !used.has(candidate)) return candidate;
    }
  }

  for (let index = 0; index < usable.length - 1; index += 1) {
    const combined = usable[index] + ' ' + usable[index + 1];
    if (isCompliant(combined, title) && !used.has(combined)) return combined;
  }

  throw new Error('No complete, unique SEO description could be composed for "' + title + '".');
}

const files = walk(docsDir).filter((file) => /\.mdx?$/.test(file));
const descriptions = {};
const used = new Map();

for (const file of files) {
  const relative = path.relative(docsDir, file).split(path.sep).join('/');
  const sourceKey = '@site/docs/' + relative;
  const {title, statements} = parseDocument(file);
  const override = overrides[sourceKey];
  if (override !== undefined && (typeof override !== 'string' || !isCompliant(override, title))) {
    throw new Error('Invalid curated SEO description for "' + title + '" (' + sourceKey + ').');
  }
  const description = override ?? composeDescription(statements, title, used);
  used.set(description, relative);
  descriptions[sourceKey] = description;
}

for (const sourceKey of Object.keys(overrides)) {
  if (!(sourceKey in descriptions)) {
    throw new Error('Curated SEO description does not match a documentation source: ' + sourceKey);
  }
}

fs.mkdirSync(path.dirname(outputPath), {recursive: true});
fs.writeFileSync(outputPath, JSON.stringify(descriptions, null, 2) + '\n');
console.log('Generated ' + Object.keys(descriptions).length + ' unique SEO descriptions at ' + path.relative(process.cwd(), outputPath) + '.');
