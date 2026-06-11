import { SQUADS } from '../src/data/squads.js';

const REQUIRED_PRE_CDL_COUNTS = {
  'Black Ops': 12,
  'Modern Warfare 3': 12,
  'Black Ops 2': 12,
  Ghosts: 12,
  'Advanced Warfare': 12,
  'Black Ops 3': 12,
  'Infinite Warfare': 12,
  WWII: 12,
  'Black Ops 4': 12,
};

const errors = [];
const seenIds = new Set();
for (const squad of SQUADS) {
  if (seenIds.has(squad.id)) errors.push(`Duplicate squad id: ${squad.id}`);
  seenIds.add(squad.id);
  if (!squad.players?.length) errors.push(`${squad.id} has no players`);
  for (const player of squad.players || []) {
    if (!['SMG', 'AR', 'FLEX'].includes(player.role)) errors.push(`${squad.id}/${player.n} has invalid role ${player.role}`);
    if (!Number.isInteger(player.r) || player.r < 1 || player.r > 100) errors.push(`${squad.id}/${player.n} has invalid rating ${player.r}`);
  }
}

const preCdlByGame = SQUADS.filter((s) => s.era === 'pre-CDL').reduce((acc, s) => {
  acc[s.game] = (acc[s.game] || 0) + 1;
  return acc;
}, {});

for (const [game, expected] of Object.entries(REQUIRED_PRE_CDL_COUNTS)) {
  if (preCdlByGame[game] !== expected) errors.push(`${game} expected ${expected} pre-CDL squads, found ${preCdlByGame[game] || 0}`);
}

console.table(preCdlByGame);
console.log(`Validated ${SQUADS.length} squads.`);

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
