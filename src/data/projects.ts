/**
 * Shipped titles.
 *
 * `via` records which role a title came through. It isn't rendered — the list
 * is shown as one grid ordered by store — but it's kept because the developer
 * name alone doesn't distinguish studio work from freelance, and that would be
 * tedious to reconstruct later.
 *
 * All metadata is real: Steam entries come from the official storefront API,
 * Google Play entries from each app's store listing, itch.io from its page.
 */

export type Platform = 'Steam' | 'Google Play' | 'itch.io';
export type Via = 'rockbite' | 'freelance';

export interface Project {
  id: string;
  name: string;
  platform: Platform;
  storeUrl: string;
  developer: string;
  /** Omitted where the store doesn't publish a firm date. */
  releaseDate?: string;
  genres: string[];
  /**
   * Store description. Not rendered — the card was trimmed to the identifying
   * facts so the grid stays compact as the list grows. Kept because it's real
   * storefront copy that would be tedious to gather again, and it's what a
   * per-title page would open with.
   */
  blurb: string;
  /**
   * Store artwork. `banner` is wide key art (Steam capsules, itch covers) and
   * fills the card head; `icon` is a square app icon, which is centred on a
   * tinted panel instead so it isn't cropped to a letterbox.
   */
  art: { type: 'banner' | 'icon'; src: string };
  /** Provenance only — not currently shown on the page. */
  via: Via;
  /**
   * Optional second link, e.g. a devlog that credits the team. Not rendered:
   * the card is one store link and four bands of text, and a second link had
   * nowhere to sit that didn't make that card taller than its neighbours.
   * Kept for a per-title page, or a credits line under the grid.
   */
  credit?: { label: string; href: string };
}

export const projects: Project[] = [
  // ---------------------------------------------------------------- Rockbite
  {
    id: 'idle-outpost',
    name: 'Idle Outpost: Upgrade Games',
    platform: 'Google Play',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.rockbite.zombieoutpost',
    developer: 'Rockbite Games',
    genres: ['Simulation', 'Idle', 'Casual'],
    blurb:
      'Idle business simulator and tycoon game with a post-apocalyptic theme — build your outpost, trade with survivors and expand.',
    art: { type: 'banner', src: '/images/games/idle-outpost-cover.webp' },
    via: 'rockbite',
  },
  {
    id: 'wasteland-trade',
    name: 'Wasteland Trade: Idle Zombie',
    platform: 'Google Play',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.rockbite.idlezombie',
    developer: 'Rockbite Games',
    genres: ['Simulation', 'Idle'],
    blurb:
      'Build, trade and survive in a world overrun by zombies — run a trading outpost, establish routes and grow the business.',
    art: { type: 'banner', src: '/images/games/wasteland-trade-cover.webp' },
    via: 'rockbite',
  },
  {
    id: 'repopulation',
    name: 'Repopulation',
    platform: 'Google Play',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.rockbite.arcworld',
    developer: 'Rockbite Games',
    genres: ['Simulation', 'City Builder'],
    blurb:
      'A relaxing post-apocalyptic city builder — restore polluted land, rebuild settlements and bring life back to a ruined world.',
    art: { type: 'banner', src: '/images/games/repopulation-cover.webp' },
    via: 'rockbite',
  },
  {
    id: 'root-rush',
    name: 'Root Rush',
    platform: 'Google Play',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.rockbite.rootrush',
    developer: 'Rockbite Games',
    genres: ['Action', 'Arcade'],
    blurb:
      'A fast-paced arcade adventure where every second matters — gather resources and reach the portal before time runs out.',
    art: { type: 'banner', src: '/images/games/root-rush-cover.webp' },
    via: 'rockbite',
  },

  // --------------------------------------------------------------- Freelance
  {
    id: 'office-chair-curling',
    name: 'office chair curling',
    platform: 'Steam',
    storeUrl: 'https://store.steampowered.com/app/4483800/office_chair_curling/',
    developer: 'osuika, kris_wilson88',
    releaseDate: '16 April 2026',
    genres: ['Action', 'Multiplayer'],
    blurb:
      'A 1-bit curling game where you throw office chairs at a target — ported from Playdate with online cross-play.',
    art: { type: 'banner', src: '/images/games/office-chair-curling-header.jpg' },
    via: 'freelance',
  },
  {
    id: 'hexadel',
    name: 'HEXADEL',
    platform: 'Steam',
    storeUrl: 'https://store.steampowered.com/app/2499130/HEXADEL/',
    developer: 'Planetary Gears',
    releaseDate: '24 April 2026',
    genres: ['Strategy', 'Puzzle', 'Indie'],
    blurb:
      'A neon-drenched layered tower defence puzzle game, with minimalist tunes and endless ways to build your citadel.',
    art: { type: 'banner', src: '/images/games/hexadel-header.jpg' },
    via: 'freelance',
  },
  {
    id: 'pacebreak',
    name: 'PaceBreak',
    platform: 'Steam',
    storeUrl: 'https://store.steampowered.com/app/3330570/PaceBreak/',
    developer: 'Greg Softworks',
    releaseDate: '2026',
    genres: ['Racing', 'Action', 'Indie'],
    blurb:
      'A first-person parkour speedrunning game — race yourself, your friends or the top of the leaderboard across official and community levels.',
    art: { type: 'banner', src: '/images/games/pacebreak-header.jpg' },
    via: 'freelance',
  },
  {
    id: 'new-stars',
    name: 'New Stars',
    platform: 'Steam',
    storeUrl: 'https://store.steampowered.com/app/2231270/New_Stars/',
    developer: 'adamjr',
    releaseDate: '4 March 2026',
    genres: ['4X Strategy', 'Simulation', 'Indie'],
    blurb:
      'Expand a galactic empire across new stars, research technologies and challenge great alien powers in a 4X grand strategy game.',
    art: { type: 'banner', src: '/images/games/new-stars-header.jpg' },
    via: 'freelance',
  },
  {
    id: 'tiny-space-pirate',
    name: 'Tiny space pirate',
    platform: 'Steam',
    storeUrl: 'https://store.steampowered.com/app/3921290/Tiny_space_pirate/',
    developer: 'Deleted Cookie',
    releaseDate: '4 May 2026',
    genres: ['Adventure', 'Casual', 'Indie'],
    blurb:
      'A cozy top-down space adventure — explore a handcrafted galaxy, upgrade your ship and help out the quirky space locals.',
    art: { type: 'banner', src: '/images/games/tiny-space-pirate-header.jpg' },
    via: 'freelance',
  },
  {
    id: 'tropical-resort-simulator',
    name: 'Tropical Resort Simulator',
    platform: 'Steam',
    storeUrl: 'https://store.steampowered.com/app/2936190/Tropical_Resort_Simulator/',
    developer: 'Beardroid Games',
    releaseDate: '21 May 2026',
    genres: ['Simulation', 'Casual'],
    blurb:
      'Transform an abandoned island into a thriving business — install activities, open your restaurant and manage staff and equipment.',
    art: { type: 'banner', src: '/images/games/tropical-resort-simulator-header.jpg' },
    via: 'freelance',
  },
  {
    id: 'franklin-albrecht',
    name: 'The Rebirth of Franklin Albrecht',
    platform: 'itch.io',
    storeUrl: 'https://studio-taranta.itch.io/the-rebirth-of-franklin-albrecht',
    developer: 'Studio Taranta',
    releaseDate: 'Early demo',
    genres: ['Investigative', 'Psychological'],
    blurb:
      'An investigative, psychological game currently available as an early demo.',
    art: { type: 'banner', src: '/images/games/franklin-albrecht-cover.jpg' },
    via: 'freelance',
    credit: {
      label: 'Credited in the team devlog',
      href: 'https://studio-taranta.itch.io/the-rebirth-of-franklin-albrecht/devlog/1578649/devlog-12-meet-the-team-behind-the-early-demo',
    },
  },
];

/**
 * Display order on the QA page: Steam first, then Google Play, then itch.io.
 *
 * The page renders `orderedProjects`, NOT the raw `projects` array — so where a
 * title sits in the list above doesn't matter, only its `platform`. Add new
 * entries wherever they read best; they'll slot into the right block on their
 * own. Sorting is stable, so titles within one platform keep the order above.
 */
const PLATFORM_ORDER: Platform[] = ['Steam', 'Google Play', 'itch.io'];

export const orderedProjects: Project[] = [...projects].sort(
  (a, b) => PLATFORM_ORDER.indexOf(a.platform) - PLATFORM_ORDER.indexOf(b.platform),
);

/** Distinct store platforms present, in display order. */
export const platforms: Platform[] = PLATFORM_ORDER.filter((p) =>
  projects.some((project) => project.platform === p),
);
