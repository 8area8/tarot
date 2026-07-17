// Historique des tirages, persistant côté navigateur (localStorage, sans backend).
// On ne stocke QUE de quoi rejouer un tirage : identifiants de cartes + orientation
// + type + horodatage. Le contenu (noms, sens, images) est re-dérivé des données.
// Langue-agnostique : un tirage consigné en FR se réaffiche en EN sans conversion.

export type SpreadKind = 'single' | 'two' | 'three';

export interface HistoryCard {
  id: string;
  reversed: boolean;
}

export interface HistoryEntry {
  /** Horodatage (ms) du tirage — sert de tri et d'affichage. */
  at: number;
  kind: SpreadKind;
  cards: HistoryCard[];
}

// Clé versionnée : si le format évolue, on repart proprement au lieu de planter.
const STORAGE_KEY = 'tarot.history.v1';
// Fenêtre glissante : les tirages les plus anciens tombent au-delà de cette limite.
const MAX_ENTRIES = 50;

const KINDS: readonly SpreadKind[] = ['single', 'two', 'three'];

/** Valide une entrée inconnue (JSON potentiellement corrompu ou d'une autre version). */
function isEntry(value: unknown): value is HistoryEntry {
  if (typeof value !== 'object' || value === null) return false;
  const e = value as Record<string, unknown>;
  if (typeof e.at !== 'number') return false;
  if (typeof e.kind !== 'string' || !KINDS.includes(e.kind as SpreadKind)) return false;
  if (!Array.isArray(e.cards) || e.cards.length === 0) return false;
  return e.cards.every(
    (c) =>
      typeof c === 'object' &&
      c !== null &&
      typeof (c as HistoryCard).id === 'string' &&
      typeof (c as HistoryCard).reversed === 'boolean',
  );
}

/** Lit l'historique (le plus récent en tête). Renvoie [] si vide, absent ou corrompu. */
export function readHistory(): HistoryEntry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isEntry);
  } catch {
    return [];
  }
}

function write(entries: HistoryEntry[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  } catch {
    /* stockage indisponible (mode privé, quota…) : on n'échoue pas le tirage */
  }
}

/** Ajoute un tirage en tête et tronque à la fenêtre glissante. */
export function pushHistory(entry: HistoryEntry): void {
  const entries = readHistory();
  entries.unshift(entry);
  write(entries.slice(0, MAX_ENTRIES));
}

/** Retire l'entrée à l'index donné et renvoie la liste mise à jour. */
export function removeAt(index: number): HistoryEntry[] {
  const entries = readHistory();
  if (index < 0 || index >= entries.length) return entries;
  entries.splice(index, 1);
  write(entries);
  return entries;
}

/** Vide tout l'historique. */
export function clearHistory(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* stockage indisponible */
  }
}

/**
 * Fragment d'URL (#…) qui rejoue le tirage sur la home via `initFromHash`.
 * Doit rester aligné sur le parseur de `src/pages/[lang]/index.astro` :
 *   - spread (two/three) : `#spread=<id>[.r],…`
 *   - carte simple        : `#<id>[-reversed]`
 */
export function hashFor(entry: HistoryEntry): string {
  if (entry.kind === 'two' || entry.kind === 'three') {
    const parts = entry.cards.map((c) => c.id + (c.reversed ? '.r' : ''));
    return `#spread=${parts.join(',')}`;
  }
  const c = entry.cards[0];
  return `#${c.id}${c.reversed ? '-reversed' : ''}`;
}
