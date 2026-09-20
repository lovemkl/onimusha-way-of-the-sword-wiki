/**
 * Names from Steam store edition / early-adopter copy for
 * Onimusha: Way of the Sword (app 2638890). No combat numbers published.
 */

export type CharmOption = {
  id: string;
  name: string;
  source: string;
  note: string;
};

export type CosmeticOption = {
  id: string;
  name: string;
  source: string;
  /** Steam: sword appearances do not alter battle performance. */
  combatChange: "none" | "unknown";
};

export type FocusSlot = {
  id: string;
  label: string;
  provisional: true;
  note: string;
};

export const CHARMS: CharmOption[] = [
  {
    id: "oni-lady",
    name: "Oni Lady",
    source: "Deluxe / Premium Deluxe Kit (Steam)",
    note: "Steam: equipping charms strengthens Miyamoto Musashi's abilities. Exact effects: Unknown.",
  },
  {
    id: "little-dancer",
    name: "Little Dancer",
    source: "Deluxe / Premium Deluxe Kit (Steam)",
    note: "Steam: equipping charms strengthens Miyamoto Musashi's abilities. Exact effects: Unknown.",
  },
  {
    id: "mentor",
    name: "Mentor",
    source: "Deluxe / Premium Deluxe Kit (Steam)",
    note: "Steam: equipping charms strengthens Miyamoto Musashi's abilities. Exact effects: Unknown.",
  },
  {
    id: "lion-dog",
    name: "Lion Dog",
    source: "Early Adopter Bonus (Steam)",
    note: "Steam: equipping charms strengthens Miyamoto Musashi's abilities. Exact effects: Unknown.",
  },
  {
    id: "white-monkey",
    name: "White Monkey",
    source: "Early Adopter Bonus (Deluxe / Premium editions — Steam)",
    note: "Steam: equipping charms strengthens Miyamoto Musashi's abilities. Exact effects: Unknown.",
  },
];

export const SWORD_APPEARANCES: CosmeticOption[] = [
  {
    id: "bamboo-panda",
    name: "Bamboo & Panda",
    source: "Deluxe / Premium Deluxe Kit (Steam)",
    combatChange: "none",
  },
  {
    id: "whittled-oar",
    name: "Whittled Oar",
    source: "Deluxe / Premium Deluxe Kit (Steam)",
    combatChange: "none",
  },
  {
    id: "raizan",
    name: "Raizan",
    source: "Deluxe / Premium Deluxe Kit (Steam)",
    combatChange: "none",
  },
  {
    id: "enryuu",
    name: "Enryuu",
    source: "Deluxe / Premium Deluxe Kit (Steam)",
    combatChange: "none",
  },
  {
    id: "sealed-curse",
    name: "Sealed Curse",
    source: "Early Adopter Bonus (Steam)",
    combatChange: "none",
  },
  {
    id: "white-lion",
    name: "White Lion",
    source: "Early Adopter Bonus (Deluxe / Premium editions — Steam)",
    combatChange: "none",
  },
];

export const GAUNTLET_APPEARANCES: CosmeticOption[] = [
  {
    id: "crimson-lotus",
    name: "Crimson Lotus",
    source: "Deluxe / Premium Deluxe Kit (Steam) — Oni Gauntlet appearance",
    combatChange: "unknown",
  },
];

/** Provisional planner labels — Steam does not publish named stances with stats. */
export const FOCUS_SLOTS: FocusSlot[] = [
  {
    id: "soul-absorb",
    label: "Soul Absorb",
    provisional: true,
    note: "Planner label inspired by Steam: Oni Gauntlet can absorb Genma souls. Not a published stance / no numbers.",
  },
  {
    id: "gauntlet-power",
    label: "Gauntlet Power",
    provisional: true,
    note: "Planner label for Oni Gauntlet enhancement focus. Unknown / not published on Steam store.",
  },
  {
    id: "duel-pressure",
    label: "Duel Pressure",
    provisional: true,
    note: "Planner label for rival-duelist encounters mentioned on Steam. Unknown / not published on Steam store.",
  },
];

export function getCharm(id: string | null | undefined) {
  if (!id) return undefined;
  return CHARMS.find((c) => c.id === id);
}
export function getSword(id: string | null | undefined) {
  if (!id) return undefined;
  return SWORD_APPEARANCES.find((s) => s.id === id);
}
export function getGauntlet(id: string | null | undefined) {
  if (!id) return undefined;
  return GAUNTLET_APPEARANCES.find((g) => g.id === id);
}
export function getFocus(id: string | null | undefined) {
  if (!id) return undefined;
  return FOCUS_SLOTS.find((f) => f.id === id);
}
