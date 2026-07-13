export interface Actor {
  id: string;
  /** Id de la carte de tarot qui incarne l'acteur (ex. "major-04"). */
  cardId: string;
  name: string;
  text: string;
}

export interface Question {
  id: string;
  text: string;
  /** Fil résolu ? (barré, estompé, mais conservé). */
  done: boolean;
}

export interface World {
  actors: Actor[];
  questions: Question[];
}

const STORAGE_KEY = 'ltl.world.v1';

export function newId(): string {
  const c = globalThis.crypto;
  if (c && typeof c.randomUUID === 'function') return c.randomUUID();
  return `id-${Date.now()}-${Math.floor(Math.random() * 1e9)}`;
}

function str(value: unknown): string {
  return typeof value === 'string' ? value : '';
}

/** Lit le monde depuis localStorage, avec garde-fous sur la forme des données. */
export function loadWorld(): World {
  const world: World = { actors: [], questions: [] };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return world;
    const parsed = JSON.parse(raw) as Partial<World>;
    if (Array.isArray(parsed.actors)) {
      for (const a of parsed.actors) {
        if (a && typeof a === 'object' && typeof (a as Actor).cardId === 'string') {
          world.actors.push({
            id: str((a as Actor).id) || newId(),
            cardId: (a as Actor).cardId,
            name: str((a as Actor).name),
            text: str((a as Actor).text),
          });
        }
      }
    }
    if (Array.isArray(parsed.questions)) {
      for (const q of parsed.questions) {
        if (q && typeof q === 'object' && typeof (q as Question).text === 'string') {
          world.questions.push({
            id: str((q as Question).id) || newId(),
            text: (q as Question).text,
            done: (q as Question).done === true,
          });
        }
      }
    }
  } catch {
    // localStorage indisponible ou JSON corrompu → monde vide.
  }
  return world;
}

export function saveWorld(world: World): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(world));
  } catch {
    // Écriture impossible → ignoré.
  }
}
