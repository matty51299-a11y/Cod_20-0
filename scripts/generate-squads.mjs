import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const CDL_DB = 'cdl_gauntlet_database_v1.md';
const PRE_CDL_PATCH = 'cdl_gauntlet_pre_cdl_12_team_patch_v2.md';

const GAME_ALIASES = [
  ['Black Ops Cold War', 'Cold War'],
  ['Modern Warfare 3', 'Modern Warfare 3'],
  ['MW3', 'Modern Warfare 3'],
  ['Modern Warfare', 'Modern Warfare'],
  ['Vanguard', 'Vanguard'],
  ['MWII', 'MWII'],
  ['MWIII', 'MWIII'],
  ['Black Ops 6', 'Black Ops 6'],
  ['Black Ops 7', 'Black Ops 7'],
  ['Black Ops 2', 'Black Ops 2'],
  ['Black Ops 3', 'Black Ops 3'],
  ['Black Ops 4', 'Black Ops 4'],
  ['Infinite Warfare', 'Infinite Warfare'],
  ['Advanced Warfare', 'Advanced Warfare'],
  ['Ghosts', 'Ghosts'],
  ['WWII', 'WWII'],
  ['Black Ops', 'Black Ops'],
];

const COLORS = {
  'OpTic Gaming': { bg: '#101408', ac: '#9DC73B' },
  'OpTic Texas': { bg: '#101408', ac: '#9DC73B' },
  'OpTic Chicago': { bg: '#101408', ac: '#9DC73B' },
  'OpTic Gaming Los Angeles': { bg: '#101408', ac: '#9DC73B' },
  'Atlanta FaZe': { bg: '#190A0A', ac: '#E43D30' },
  'FaZe Clan': { bg: '#190A0A', ac: '#E43D30' },
  'FaZe Vegas': { bg: '#190A0A', ac: '#E43D30' },
  'LA Thieves': { bg: '#170609', ac: '#EA0029' },
  'Los Angeles Thieves': { bg: '#170609', ac: '#EA0029' },
  '100 Thieves': { bg: '#170609', ac: '#EA0029' },
  'Dallas Empire': { bg: '#0A0F1C', ac: '#7C8DB0' },
  'Team Envy': { bg: '#0A1224', ac: '#3B6FE0' },
  'Team EnVyUs': { bg: '#0A1224', ac: '#3B6FE0' },
  'Team EnvyUs': { bg: '#0A1224', ac: '#3B6FE0' },
  'Toronto Ultra': { bg: '#120A1C', ac: '#9D5CFF' },
  'Toronto KOI': { bg: '#120A1C', ac: '#9D5CFF' },
  'New York Subliners': { bg: '#171303', ac: '#FFD200' },
  'Cloud9 New York': { bg: '#171303', ac: '#FFD200' },
  'Seattle Surge': { bg: '#06121C', ac: '#00A9E0' },
  'Vancouver Surge': { bg: '#06121C', ac: '#00A9E0' },
  'Florida Mutineers': { bg: '#061614', ac: '#1FD6BE' },
  'Miami Heretics': { bg: '#061614', ac: '#1FD6BE' },
  'Chicago Huntsmen': { bg: '#0A1410', ac: '#35E08C' },
  'Team Kaliber': { bg: '#190B0B', ac: '#D6483C' },
  'compLexity': { bg: '#1A0A0C', ac: '#E0454F' },
  'Complexity': { bg: '#1A0A0C', ac: '#E0454F' },
  'Fariko Impact': { bg: '#0A1626', ac: '#3AA0FF' },
  'Splyce': { bg: '#171303', ac: '#FFC20E' },
  'Rise Nation': { bg: '#0B1219', ac: '#8FC7E8' },
  'Evil Geniuses': { bg: '#0A1018', ac: '#4E7DA6' },
  'eUnited': { bg: '#071320', ac: '#2BA3E8' },
  'Denial Esports': { bg: '#071715', ac: '#19C2AE' },
  'Minnesota RØKKR': { bg: '#1A1022', ac: '#7D55C7' },
  'G2 Minnesota': { bg: '#1A1022', ac: '#7D55C7' },
  'London Royal Ravens': { bg: '#08111F', ac: '#55A7FF' },
  'Carolina Royal Ravens': { bg: '#08111F', ac: '#55A7FF' },
  'Boston Breach': { bg: '#061512', ac: '#27D07D' },
  'Las Vegas Legion': { bg: '#12091A', ac: '#B06AFF' },
  'Las Vegas Falcons': { bg: '#1B1306', ac: '#D9A441' },
  'Riyadh Falcons': { bg: '#1B1306', ac: '#D9A441' },
  'Paris Legion': { bg: '#111727', ac: '#6B8FFF' },
  'Paris Gentle Mates': { bg: '#111727', ac: '#6B8FFF' },
  'LA Guerrillas M8': { bg: '#111727', ac: '#6B8FFF' },
  'Los Angeles Guerrillas': { bg: '#141414', ac: '#777777' },
};

const CHAMPIONS = new Set([
  'dal20', 'atl21', 'lat22', 'nysl23', 'opt24', 'lat25',
]);

function splitRow(line) {
  return line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((cell) => cell.trim());
}

function cleanPlacement(value) {
  if (!value) return null;
  const m = value.match(/\d+/);
  return m ? Number(m[0]) : null;
}

function gameFromHeading(heading) {
  for (const [needle, game] of GAME_ALIASES) {
    if (heading.includes(needle)) return game;
  }
  return heading.replace(/^#+\s*/, '').replace(/^\d{4}\s+/, '').replace(/,.*$/, '').replace(/ - .*$/, '').trim();
}

function yearFromHeading(heading) {
  return Number((heading.match(/\b(20\d{2}|2011|2012|2013|2014|2015|2016|2017|2018|2019)\b/) || [])[0]);
}

function parsePlayers(raw) {
  return raw.split(',').map((part) => part.trim()).filter(Boolean).map((part) => {
    let m = part.match(/^(.*?)\s+(SMG|AR|FLEX)\s+(\d+)$/i);
    if (m) return { n: m[1].trim(), r: Number(m[3]), role: m[2].toUpperCase() };
    m = part.match(/^(.*?)\s+(\d+)\s+(SMG|AR|FLEX)$/i);
    if (m) return { n: m[1].trim(), r: Number(m[2]), role: m[3].toUpperCase() };
    throw new Error(`Cannot parse player: ${part}`);
  });
}

function tagFor(squad) {
  const lead = squad.players.slice().sort((a, b) => b.r - a.r)[0];
  if (squad.champs) return `${squad.era === 'pre-CDL' ? 'World' : 'CDL'} Champions`;
  return `${squad.tier[0].toUpperCase()}${squad.tier.slice(1)} ${squad.era === 'pre-CDL' ? 'Champs' : 'CDL'} card${lead ? ` — ${lead.n} ${lead.r}` : ''}`;
}

function colorFor(team, id) {
  if (COLORS[team]) return COLORS[team];
  const palettes = [
    ['#10151D', '#E8B43A'], ['#141A23', '#7C8DB0'], ['#1A0F18', '#E0596B'],
    ['#061614', '#1FD6BE'], ['#171303', '#FFC20E'], ['#120A1C', '#9D5CFF'],
    ['#0B1219', '#8FC7E8'], ['#071320', '#2BA3E8'], ['#190B0B', '#D6483C'],
  ];
  const sum = [...id].reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  const [bg, ac] = palettes[sum % palettes.length];
  return { bg, ac };
}

function makeSquad({ id, org, year, game, era, placement, tier, gameSize, players }) {
  const champs = era === 'pre-CDL' ? placement === 1 : CHAMPIONS.has(id);
  const squad = {
    id, org, year, game, era, placement, champs, tier, gameSize,
    rosterSnapshot: era === 'pre-CDL' ? 'champs' : 'season',
    source: era === 'pre-CDL' ? PRE_CDL_PATCH : CDL_DB,
    c: colorFor(org, id),
    players,
  };
  squad.tag = tagFor(squad);
  return squad;
}

function parseTables(markdown, sourceKind) {
  const lines = markdown.split(/\r?\n/);
  const squads = [];
  let heading = '';
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^#{1,2}\s+/.test(line)) heading = line.replace(/^#+\s*/, '').trim();
    if (!line.trim().startsWith('|')) continue;
    const header = splitRow(line);
    const normalizedHeader = header.map((h) => h.toLowerCase());
    if (!normalizedHeader.includes('players')) continue;
    const rows = [];
    i += 2; // skip separator
    while (i < lines.length && lines[i].trim().startsWith('|')) {
      rows.push(splitRow(lines[i]));
      i++;
    }
    i--;
    const idx = Object.fromEntries(header.map((name, index) => [name.toLowerCase(), index]));
    for (const row of rows) {
      const isPre = sourceKind === 'pre-cdl';
      const id = row[idx['squad id'] ?? idx.id];
      const org = row[idx.team];
      const tier = row[idx.tier] ?? row[idx['current tier']];
      const placement = cleanPlacement(row[idx.placement] ?? row[idx.place]);
      const gameSize = Number(row[idx['game size']]);
      const year = yearFromHeading(heading);
      const game = gameFromHeading(heading);
      const players = parsePlayers(row[idx.players]);
      squads.push(makeSquad({ id, org, year, game, era: isPre ? 'pre-CDL' : 'CDL', placement, tier, gameSize, players }));
    }
  }
  return squads;
}

const cdlMarkdown = readFileSync(CDL_DB, 'utf8');
const preMarkdown = readFileSync(PRE_CDL_PATCH, 'utf8');
const cdlSection = cdlMarkdown.split('# Code-ready CDL Era Database')[1].split('# Pre-CDL / Champs Era Proof-Check Pool')[0];
const squads = [
  ...parseTables(preMarkdown, 'pre-cdl'),
  ...parseTables(cdlSection, 'cdl'),
].sort((a, b) => a.year - b.year || a.placement - b.placement || a.id.localeCompare(b.id));

mkdirSync('src/data', { recursive: true });
writeFileSync('src/data/squads.js', `// Generated by scripts/generate-squads.mjs from ${PRE_CDL_PATCH} and ${CDL_DB}.
// Do not hand-edit squad ratings here; edit the markdown source tables and rerun npm run generate:squads.

export const SQUADS = ${JSON.stringify(squads, null, 2)};

export const DATA_SOURCES = ${JSON.stringify([PRE_CDL_PATCH, CDL_DB], null, 2)};
`);
console.log(`Generated ${squads.length} squads from markdown sources.`);
