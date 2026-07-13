// Ordre spectral (rouge → jaune → vert → bleu → violet), aligné sur le prisme.
export const PRISMS = [
  'instinct',
  'perseverance',
  'eloquence',
  'concentration',
  'creativity',
] as const;
export type Prism = (typeof PRISMS)[number];

export const BALANCES = ['confident', 'balanced', 'risky'] as const;
export type Balance = (typeof BALANCES)[number];

export interface Profile {
  name: string;
  prisms: Record<Prism, Balance>;
}

export const DEFAULT_PROFILE: Profile = {
  name: '',
  prisms: {
    instinct: 'balanced',
    concentration: 'balanced',
    eloquence: 'balanced',
    creativity: 'balanced',
    perseverance: 'balanced',
  },
};

const STORAGE_KEY = 'ltl.profile.v1';

function isBalance(value: unknown): value is Balance {
  return value === 'confident' || value === 'balanced' || value === 'risky';
}

/** Lit le profil depuis localStorage en fusionnant avec les valeurs par défaut. */
export function loadProfile(): Profile {
  const profile: Profile = {
    name: DEFAULT_PROFILE.name,
    prisms: { ...DEFAULT_PROFILE.prisms },
  };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return profile;
    const parsed = JSON.parse(raw) as Partial<Profile>;
    if (typeof parsed.name === 'string') profile.name = parsed.name;
    if (parsed.prisms) {
      for (const prism of PRISMS) {
        const value = parsed.prisms[prism];
        if (isBalance(value)) profile.prisms[prism] = value;
      }
    }
  } catch {
    // localStorage indisponible ou JSON corrompu → valeurs par défaut.
  }
  return profile;
}

export function saveProfile(profile: Profile): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  } catch {
    // Écriture impossible (mode privé, quota) → ignoré silencieusement.
  }
}
