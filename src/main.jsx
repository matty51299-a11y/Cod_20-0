import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { DATA_SOURCES, SQUADS } from './data/squads.js';
import './styles.css';

const COACHES = [
  { n: 'Rambo', t: 'The Architect', d: 'Rings as a player, rings as a coach. +2 team rating.', rating: 2 },
  { n: 'Crowder', t: 'Galaxy Brain', d: 'Sees the game three moves ahead. Chemistry counts for 50% more.', chemMult: 1.5 },
  { n: 'Karma', t: 'Three Rings', d: 'The greatest closer ever. Big boost on Search & Destroy.', snd: 0.09 },
  { n: 'JP Krez', t: 'The Strategist', d: 'Hill rotations drawn up to the second. Big boost on Hardpoint.', hp: 0.09 },
  { n: 'Tisch', t: 'The Professor', d: 'Set pieces and map control. Big boost on Control.', ctl: 0.09 },
  { n: 'Saintt', t: 'Steady Hands', d: 'Calm in every timeout. +1 rating and a small SnD edge.', rating: 1, snd: 0.04 },
  { n: 'Muddawg', t: 'The GM', d: 'Knows everyone, gets deals done. +2 extra rerolls.', rerolls: 2 },
  { n: 'Parasite', t: 'The Analyst', d: 'Elite CoD brain, hand grenade in the locker room. +2 rating, -5 chemistry.', rating: 2, chemFlat: -5 },
  { n: 'Hastr0', t: "The Owner's Pick", d: 'Buys you talent, costs you peace. +1 reroll, -3 chemistry.', rerolls: 1, chemFlat: -3 },
];

const DUOS = [
  { a: 'Scump', b: 'FormaL', label: "The world's best duo", v: 5 },
  { a: 'Simp', b: 'aBeZy', label: 'Tiny Terrors', v: 5 },
  { a: 'Crimsix', b: 'Karma', label: 'Rings in the room', v: 4 },
  { a: 'Shotzzy', b: 'Dashy', label: 'Texas two-step', v: 4 },
  { a: 'HyDra', b: 'KiSMET', label: 'Subliner spine', v: 3 },
  { a: 'CleanX', b: 'Insight', label: 'Ultra core', v: 4 },
  { a: 'Kenny', b: 'Octane', label: 'Thieves veterans', v: 3 },
  { a: 'Clayster', b: 'JKap', label: 'Two rings, twice', v: 3 },
  { a: 'ACHES', b: 'TeePee', label: 'The brains', v: 4 },
  { a: 'Attach', b: 'ZooMaa', label: 'FaZe faithful', v: 3 },
  { a: 'Kenny', b: 'Shotzzy', label: '2024 champions', v: 3 },
];

const TRIO = { names: ['Simp', 'aBeZy', 'Cellium'], label: 'The FaZe big three', v: 8 };

const RIVALRIES = [
  { a: 'ACHES', b: 'Scump', label: 'A decade of bad blood', v: -5 },
  { a: 'Crimsix', b: 'Dashy', label: 'Podcast wars', v: -3 },
  { a: 'Gunless', b: 'Arcitys', label: 'The pencil incident', v: -3 },
  { a: 'Parasite', b: 'Scump', label: 'Years of slander', v: -3 },
];

const SLOTS = [
  { key: 0, label: 'SMG', accepts: ['SMG', 'FLEX'] },
  { key: 1, label: 'SMG', accepts: ['SMG', 'FLEX'] },
  { key: 2, label: 'AR', accepts: ['AR', 'FLEX'] },
  { key: 3, label: 'AR', accepts: ['AR', 'FLEX'] },
];

const DIFFICULTIES = [
  { id: 'easy', label: 'Easy', sub: '5 rerolls · kinder squad pool · ratings visible', rerolls: 5, hidden: false, auto: false, weights: { elite: 5, strong: 5, mid: 3, weak: 1, disaster: 0.25 } },
  { id: 'normal', label: 'Normal', sub: '3 rerolls · full weighted database · ratings visible', rerolls: 3, hidden: false, auto: false, weights: { elite: 2, strong: 3, mid: 4, weak: 2, disaster: 1 } },
  { id: 'hard', label: 'Hard', sub: '1 reroll · nasty squad pool · ratings hidden', rerolls: 1, hidden: true, auto: false, weights: { elite: 0.75, strong: 1.5, mid: 3, weak: 4, disaster: 2.5 } },
  { id: 'open', label: 'Open Bracket', sub: 'Auto-drafted squad · pure chaos', rerolls: 0, hidden: true, auto: true, weights: { elite: 1, strong: 2, mid: 4, weak: 4, disaster: 3 } },
];

const rnd = (a, b) => a + Math.random() * (b - a);
const ri = (a, b) => Math.floor(rnd(a, b + 1));
const shuffle = (arr) => {
  const x = [...arr];
  for (let i = x.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [x[i], x[j]] = [x[j], x[i]];
  }
  return x;
};

function weightedSquads(squads, weights) {
  return shuffle(squads.flatMap((squad) => Array.from({ length: Math.max(1, Math.round((weights[squad.tier] ?? 1) * 4)) }, () => squad)));
}

function squadRating(sq) {
  const avg = sq.players.reduce((s, p) => s + p.r, 0) / sq.players.length;
  return avg + (sq.champs ? 1.5 : 0);
}

function computeChem(picks, coach) {
  const lines = [];
  let total = 0;
  const add = (label, v) => { lines.push({ label, v }); total += v; };

  for (let i = 0; i < picks.length; i++) {
    for (let j = i + 1; j < picks.length; j++) {
      if (picks[i].squadId === picks[j].squadId) add(`${picks[i].n} + ${picks[j].n} — same squad, same year`, 3);
      else if (picks[i].org === picks[j].org) add(`${picks[i].n} + ${picks[j].n} — same org, different eras`, 1);
    }
  }

  const names = picks.map((p) => p.n);
  DUOS.forEach((d) => {
    if (names.includes(d.a) && names.includes(d.b)) add(`${d.a} + ${d.b} — ${d.label}`, d.v);
  });
  if (TRIO.names.every((n) => names.includes(n))) add(TRIO.label, TRIO.v);
  RIVALRIES.forEach((rv) => {
    if (names.includes(rv.a) && names.includes(rv.b)) add(`${rv.a} vs ${rv.b} — ${rv.label}`, rv.v);
  });

  const byGame = {};
  picks.forEach((p) => { byGame[p.game] = (byGame[p.game] || 0) + 1; });
  Object.entries(byGame).forEach(([g, c]) => {
    if (c >= 3) add(`${c} players from the ${g} era`, 3);
  });

  if (coach.chemFlat) add(`${coach.n} — locker room impact`, coach.chemFlat);
  const mult = coach.chemMult || 1;
  if (mult !== 1 && total > 0) add(`${coach.n} amplifies your chemistry`, Math.round(total * (mult - 1) * 10) / 10);
  return { lines, total: Math.round(total * 10) / 10 };
}

function teamEffective(picks, chemTotal, coach) {
  const avg = picks.reduce((s, p) => s + p.r, 0) / picks.length;
  return avg + chemTotal * 0.45 + (coach.rating || 0);
}

function simSeries(myRating, opp, coach, isBogey) {
  const oppRating = squadRating(opp) + (isBogey ? 5 : 0);
  const diff = myRating + rnd(-3, 3) - (oppRating + rnd(-3, 3));
  const base = 1 / (1 + Math.pow(10, -diff / 13));
  const order = ['hp', 'snd', 'ctl', 'hp', 'snd'];
  const maps = [];
  let w = 0;
  let l = 0;
  for (const m of order) {
    if (w === 3 || l === 3) break;
    let p = base;
    if (m === 'hp' && coach.hp) p = Math.min(0.97, p + coach.hp);
    if (m === 'snd' && coach.snd) p = Math.min(0.97, p + coach.snd);
    if (m === 'ctl' && coach.ctl) p = Math.min(0.97, p + coach.ctl);
    const win = Math.random() < p;
    let score;
    if (m === 'hp') {
      const lo = ri(120, 245);
      score = win ? `250–${lo}` : `${lo}–250`;
    } else if (m === 'snd') {
      const lo = ri(0, 5);
      score = win ? `6–${lo}` : `${lo}–6`;
    } else {
      const lo = ri(0, 2);
      score = win ? `3–${lo}` : `${lo}–3`;
    }
    if (win) w++; else l++;
    maps.push({ m: m === 'hp' ? 'HP' : m === 'snd' ? 'SnD' : 'CTL', score, win });
  }
  return { won: w === 3, w, l, maps, opp, isBogey };
}

function loadBest() {
  try {
    const value = localStorage.getItem('cdl200-best');
    return value ? JSON.parse(value) : null;
  } catch {
    return null;
  }
}

function saveBest(rec) {
  try {
    localStorage.setItem('cdl200-best', JSON.stringify(rec));
  } catch {
    // Storage can be blocked in private or embedded browsers.
  }
}

const RatingChip = ({ r, hidden }) => (
  <span className="rating-chip">{hidden ? '––' : r}</span>
);

const RoleTag = ({ role }) => <span className={`role-tag role-${role.toLowerCase()}`}>{role}</span>;

const Btn = ({ children, onClick, disabled, variant = 'primary', className = '' }) => (
  <button onClick={onClick} disabled={disabled} className={`btn btn-${variant} ${className}`}>{children}</button>
);

function App() {
  const [phase, setPhase] = useState('setup');
  const [teamName, setTeamName] = useState('');
  const [diff, setDiff] = useState(DIFFICULTIES[1]);
  const [coach, setCoach] = useState(null);
  const [rerolls, setRerolls] = useState(3);
  const [round, setRound] = useState(0);
  const [slots, setSlots] = useState([null, null, null, null]);
  const [pool, setPool] = useState([]);
  const [current, setCurrent] = useState(null);
  const [spinning, setSpinning] = useState(false);
  const [spinName, setSpinName] = useState('');
  const [chem, setChem] = useState({ lines: [], total: 0 });
  const [fixtures, setFixtures] = useState([]);
  const [results, setResults] = useState([]);
  const [bogeyIdx, setBogeyIdx] = useState(-1);
  const [best, setBest] = useState(null);
  const [copied, setCopied] = useState(false);
  const [simmingAll, setSimmingAll] = useState(false);
  const spinTimer = useRef(null);

  const databaseStats = useMemo(() => {
    const years = SQUADS.map((s) => s.year);
    return { count: SQUADS.length, first: Math.min(...years), last: Math.max(...years) };
  }, []);

  useEffect(() => { setBest(loadBest()); }, []);
  useEffect(() => () => clearInterval(spinTimer.current), []);

  const picks = slots.filter(Boolean);
  const openSlotKeys = SLOTS.filter((s) => !slots[s.key]);

  function fits(player) {
    return openSlotKeys.some((s) => s.accepts.includes(player.role));
  }

  function startGame() {
    const c = COACHES[Math.floor(Math.random() * COACHES.length)];
    setCoach(c);
    setRerolls(diff.rerolls + (c.rerolls || 0));
    setPool(weightedSquads(SQUADS, diff.weights));
    setSlots([null, null, null, null]);
    setRound(1);
    setResults([]);
    setPhase('coach');
  }

  function drawSquad(currentPool, currentSlots) {
    const taken = currentSlots.filter(Boolean);
    const open = SLOTS.filter((s) => !currentSlots[s.key]);
    const fitsP = (p) => open.some((s) => s.accepts.includes(p.role));
    const seen = new Set();
    const idx = currentPool.findIndex((sq) => {
      if (seen.has(sq.id)) return false;
      seen.add(sq.id);
      return sq.players.some((p) => fitsP(p) && !taken.some((t) => t.n === p.n && t.squadId === sq.id));
    });
    if (idx === -1) return { squad: currentPool[0], rest: currentPool.slice(1) };
    const squad = currentPool[idx];
    const rest = currentPool.filter((sq, i) => i !== idx && sq.id !== squad.id);
    return { squad, rest };
  }

  function spin(consumeReroll) {
    if (spinning) return;
    if (consumeReroll) {
      if (rerolls <= 0) return;
      setRerolls((r) => r - 1);
    }
    setSpinning(true);
    setCurrent(null);
    let ticks = 0;
    spinTimer.current = setInterval(() => {
      const s = SQUADS[Math.floor(Math.random() * SQUADS.length)];
      setSpinName(`${s.org} '${String(s.year).slice(2)} · ${s.tier}`);
      ticks++;
      if (ticks >= 12) {
        clearInterval(spinTimer.current);
        const { squad, rest } = drawSquad(pool, slots);
        setPool(rest);
        setCurrent(squad);
        setSpinning(false);
      }
    }, 90);
  }

  function pickPlayer(p) {
    if (!current) return;
    const slotIdx = SLOTS.find((s) => !slots[s.key] && s.accepts.includes(p.role));
    if (!slotIdx) return;
    const entry = { ...p, squadId: current.id, org: current.org, year: current.year, game: current.game, colors: current.c };
    const next = [...slots];
    next[slotIdx.key] = entry;
    setSlots(next);
    setCurrent(null);
    if (next.filter(Boolean).length === 4) finishDraft(next);
    else setRound((r) => r + 1);
  }

  function autoDraft() {
    let p = weightedSquads(SQUADS, diff.weights);
    const s = [null, null, null, null];
    for (let i = 0; i < 4; i++) {
      const { squad, rest } = drawSquad(p, s);
      p = rest;
      const taken = s.filter(Boolean);
      const open = SLOTS.filter((x) => !s[x.key]);
      const options = squad.players.filter((pl) => open.some((x) => x.accepts.includes(pl.role)) && !taken.some((t) => t.n === pl.n && t.squadId === squad.id));
      const choice = options[Math.floor(Math.random() * options.length)];
      const slotIdx = SLOTS.find((x) => !s[x.key] && x.accepts.includes(choice.role));
      s[slotIdx.key] = { ...choice, squadId: squad.id, org: squad.org, year: squad.year, game: squad.game, colors: squad.c };
    }
    setSlots(s);
    finishDraft(s);
  }

  function finishDraft(finalSlots) {
    const ps = finalSlots.filter(Boolean);
    const ch = computeChem(ps, coach);
    setChem(ch);
    const usedIds = ps.map((p) => p.squadId);
    const available = SQUADS.filter((s) => !usedIds.includes(s.id));
    const sorted = [...available].sort((a, b) => squadRating(b) - squadRating(a));
    const champsBracket = sorted.slice(0, 8);
    const regularPool = shuffle(available.filter((s) => !champsBracket.slice(0, 4).some((b) => b.id === s.id)));
    const regular = regularPool.slice(0, 16);
    const bracket = shuffle(champsBracket).slice(0, 4).sort((a, b) => squadRating(a) - squadRating(b));
    setFixtures([...regular, ...bracket]);
    setBogeyIdx(Math.floor(Math.random() * 16));
    setPhase('review');
  }

  function playNext() {
    const i = results.length;
    if (i >= fixtures.length) return;
    const eff = teamEffective(picks, chem.total, coach);
    const res = simSeries(eff, fixtures[i], coach, i === bogeyIdx);
    const next = [...results, res];
    setResults(next);
    if (next.length === fixtures.length) endSeason(next);
  }

  function simRest() {
    setSimmingAll(true);
    const eff = teamEffective(picks, chem.total, coach);
    let next = [...results];
    let i = next.length;
    const step = () => {
      if (i >= fixtures.length) { setSimmingAll(false); endSeason(next); return; }
      next = [...next, simSeries(eff, fixtures[i], coach, i === bogeyIdx)];
      setResults(next);
      i++;
      setTimeout(step, 140);
    };
    step();
  }

  function endSeason(finalResults) {
    const finalWins = finalResults.filter((r) => r.won).length;
    const finalLosses = finalResults.length - finalWins;
    const rec = { wins: finalWins, losses: finalLosses, name: teamName || 'Unnamed' };
    if (!best || finalWins > best.wins) { setBest(rec); saveBest(rec); }
    setTimeout(() => setPhase('result'), 600);
  }

  async function share() {
    const finalWins = results.filter((r) => r.won).length;
    const finalLosses = results.length - finalWins;
    const grid = results.map((r) => (r.won ? '🟩' : '🟥')).join('');
    const txt = `20-0: The All-Time CDL Gauntlet\n${teamName || 'My squad'}: ${picks.map((p) => `${p.n} '${String(p.year).slice(2)}`).join(', ')}\nCoach: ${coach.n}\nRecord: ${finalWins}-${finalLosses}\n${grid}`;
    try {
      await navigator.clipboard.writeText(txt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  function reset() {
    setPhase('setup'); setCoach(null); setSlots([null, null, null, null]);
    setResults([]); setCurrent(null); setRound(0); setCopied(false);
  }

  const wins = results.filter((r) => r.won).length;
  const losses = results.length - wins;
  const undefeated = losses === 0;

  return (
    <div className="app-shell">
      <div className="phone-frame">
        <header className="header">
          <div className="title">20–0</div>
          <div className="subtitle">The All-Time CDL Gauntlet</div>
          {best && phase === 'setup' && <div className="best">Best run: {best.wins}–{best.losses} ({best.name})</div>}
        </header>

        {phase === 'setup' && (
          <div className="stack-lg">
            <p className="intro">Draft a four-man roster from {databaseStats.first} to {databaseStats.last} competitive Call of Duty, using the squad and rating markdown databases in this repo. Survive a 16-match season and a four-round Champs bracket. Every player is rated for the specific year you draft them from.</p>
            <div className="database-note">{databaseStats.count} squad cards loaded from {DATA_SOURCES.join(' + ')}.</div>
            <div>
              <label className="label">Name your team</label>
              <input value={teamName} onChange={(e) => setTeamName(e.target.value)} maxLength={24} placeholder="e.g. Telford Toxicity" className="input" />
            </div>
            <div>
              <label className="label">Difficulty</label>
              <div className="stack-sm">
                {DIFFICULTIES.map((d) => <button key={d.id} onClick={() => setDiff(d)} className={`difficulty ${diff.id === d.id ? 'active' : ''}`}><span>{d.label}</span><small>{d.sub}</small></button>)}
              </div>
            </div>
            <Btn onClick={startGame}>Take the job</Btn>
          </div>
        )}

        {phase === 'coach' && coach && (
          <div className="stack-lg text-center">
            <div className="eyebrow">The org has appointed your coach</div>
            <div className="panel coach-card"><div className="coach-name">{coach.n}</div><div className="coach-title">“{coach.t}”</div><p>{coach.d}</p></div>
            <div className="mono-muted">Rerolls available: {rerolls}</div>
            <Btn onClick={() => { if (diff.auto) autoDraft(); else setPhase('draft'); }}>{diff.auto ? 'Let the board draft' : 'Start the draft'}</Btn>
          </div>
        )}

        {phase === 'draft' && (
          <div className="stack-md">
            <div className="row mono-muted"><span>ROUND <b>{round}</b>/4</span><span>REROLLS <b>{rerolls}</b></span></div>
            <RosterSlots slots={slots} hidden={diff.hidden} />
            {!current && <div className="panel text-center">{spinning ? <div className="spin-name">{spinName}</div> : <><p>Spin to draw a squad from history. You draft one player from whatever comes up.</p><Btn onClick={() => spin(false)}>Spin</Btn></>}</div>}
            {current && <CurrentSquad current={current} picks={picks} fits={fits} hidden={diff.hidden} rerolls={rerolls} onPick={pickPlayer} onReroll={() => spin(true)} />}
          </div>
        )}

        {phase === 'review' && (
          <div className="stack-md">
            <div className="text-center"><div className="section-title">{teamName || 'Your squad'}</div><div className="mono-muted">Coach {coach.n} · “{coach.t}”</div></div>
            <ReviewSlots slots={slots} />
            <Chemistry chem={chem} strength={teamEffective(picks, chem.total, coach)} />
            <p className="fineprint">16 league matches, then a four-round Champs bracket. One opponent is your bogey team — you'll find out who at the end.</p>
            <Btn onClick={() => setPhase('season')}>Start the season</Btn>
          </div>
        )}

        {phase === 'season' && (
          <div className="stack-md">
            <div className="text-center"><div className={`record ${undefeated ? 'perfect' : ''}`}>{wins}–{losses}</div><div className={`eyebrow ${undefeated ? 'green' : ''}`}>{undefeated ? 'Still perfect' : 'The dream is dead — finish the job'}</div></div>
            <ResultsList results={results} fixtures={fixtures} />
            {results.length < fixtures.length && <div className="grid-two"><Btn onClick={playNext} disabled={simmingAll}>Play next</Btn><Btn variant="secondary" onClick={simRest} disabled={simmingAll}>Sim rest</Btn></div>}
          </div>
        )}

        {phase === 'result' && (
          <div className="stack-lg text-center">
            <div><div className={`final-record ${losses === 0 ? 'perfect' : ''}`}>{wins}–{losses}</div><div className="result-label">{losses === 0 ? '20–0 · IMMORTAL' : results[19]?.won ? 'World Champions' : wins >= 16 ? 'Champs calibre — no ring' : wins >= 12 ? 'Playoff team' : wins >= 8 ? 'Mid-table' : 'Full rebuild'}</div>{results[19]?.won && losses > 0 && <p>You dropped maps along the way, but you won the one that matters.</p>}</div>
            <div className="result-grid">{results.map((r, i) => <span key={i}>{r.won ? '🟩' : '🟥'}</span>)}</div>
            <div className="panel text-left"><div className="label">Season review</div><div className="review-copy"><div>Squad: {picks.map((p) => `${p.n} '${String(p.year).slice(2)}`).join(', ')}</div><div>Coach: {coach.n} — “{coach.t}”</div><div>Bogey team: <b>{fixtures[bogeyIdx]?.org} '{String(fixtures[bogeyIdx]?.year).slice(2)}</b>{results[bogeyIdx] && !results[bogeyIdx].won ? ' — and they got you.' : ' — handled.'}</div>{best && <div>Best ever run: {best.wins}–{best.losses}</div>}</div></div>
            <div className="grid-two"><Btn variant="secondary" onClick={share}>{copied ? 'Copied!' : 'Share result'}</Btn><Btn onClick={reset}>Run it back</Btn></div>
          </div>
        )}

        <footer>Ratings and squads are generated from the local markdown database files.</footer>
      </div>
    </div>
  );
}

function RosterSlots({ slots, hidden }) {
  return <div className="slot-grid">{SLOTS.map((s) => { const p = slots[s.key]; return <div key={s.key} className="slot" style={{ background: p ? p.colors.bg : undefined, borderColor: p ? p.colors.ac : undefined }}><div className="slot-label" style={{ color: p ? p.colors.ac : undefined }}>{s.label}</div>{p ? <><div className="slot-name">{p.n}</div><div className="slot-meta" style={{ color: p.colors.ac }}>'{String(p.year).slice(2)} · {hidden ? '––' : p.r}</div></> : <div className="empty-plus">+</div>}</div>; })}</div>;
}

function CurrentSquad({ current, picks, fits, hidden, rerolls, onPick, onReroll }) {
  return <div className="squad-card" style={{ background: current.c.bg, borderColor: current.c.ac }}><div className="squad-head"><div><div className="squad-org" style={{ color: current.c.ac }}>{current.org}</div><div className="squad-game">{current.game}{current.champs ? ' · 🏆' : ''} · {current.tier}</div><div className="squad-tag">{current.tag}</div></div><div className="squad-year">{current.year}</div></div><div className="player-list">{current.players.map((p) => { const taken = picks.some((t) => t.n === p.n && t.squadId === current.id); const ok = fits(p) && !taken; return <button key={`${p.n}-${p.role}`} onClick={() => ok && onPick(p)} disabled={!ok} className="player-btn"><span><b>{p.n}</b> <RoleTag role={p.role} /></span><RatingChip r={p.r} hidden={hidden} /></button>; })}</div><Btn variant="ghost" onClick={onReroll} disabled={rerolls <= 0}>Reroll squad ({rerolls} left)</Btn></div>;
}

function ReviewSlots({ slots }) {
  return <div className="review-grid">{SLOTS.map((s) => { const p = slots[s.key]; return <div key={s.key} className="review-card" style={{ background: p.colors.bg, borderColor: p.colors.ac }}><div className="row"><span className="slot-label" style={{ color: p.colors.ac }}>{s.label}</span><RatingChip r={p.r} hidden={false} /></div><div className="review-name">{p.n}</div><div className="slot-meta">{p.org} '{String(p.year).slice(2)}</div></div>; })}</div>;
}

function Chemistry({ chem, strength }) {
  return <div className="panel"><div className="label">Chemistry</div>{chem.lines.length === 0 && <div className="fineprint text-left">Four strangers in a server. No links.</div>}<div className="stack-sm">{chem.lines.map((l, i) => <div key={i} className="chem-line"><span>{l.label}</span><b className={l.v >= 0 ? 'positive' : 'negative'}>{l.v >= 0 ? '+' : ''}{l.v}</b></div>)}</div><div className="strength"><span>Team strength</span><b>{strength.toFixed(1)}</b></div></div>;
}

function ResultsList({ results, fixtures }) {
  return <div className="results-list">{results.map((r, i) => <div key={i} className={`result-row ${r.won ? 'win' : 'loss'}`}><div><div className="result-opponent"><span>{i < 16 ? `M${i + 1}` : ['QF', 'SF', 'WF', 'GF'][i - 16]}</span><b style={{ color: r.opp.c.ac }}>{r.opp.org} '{String(r.opp.year).slice(2)}</b></div><div className="maps">{r.maps.map((m) => `${m.m} ${m.score}`).join(' · ')}</div></div><strong>{r.w}–{r.l}</strong></div>)}{results.length < fixtures.length && <div className="next-match">Next: {results.length < 16 ? `Match ${results.length + 1} of 16` : ['Champs Quarterfinal', 'Champs Semifinal', 'Winners Final', 'GRAND FINAL'][results.length - 16]} — {fixtures[results.length].org} '{String(fixtures[results.length].year).slice(2)}</div>}</div>;
}

createRoot(document.getElementById('root')).render(<App />);
