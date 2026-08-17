/**
 * Shipped titles from the freelance QA work — the three games named in the CV.
 * Metadata and cover art come from the official Steam storefront API, so
 * developer names, genres and release dates are the real ones.
 */

export interface Project {
  id: string;
  /** Title as it appears on the store page. */
  name: string;
  /** Steam application id. */
  appId: number;
  storeUrl: string;
  developer: string;
  releaseDate: string;
  genres: string[];
  /** One-line pitch, trimmed from the store description. */
  blurb: string;
  /** 460x215 Steam header capsule, stored locally in /public. */
  cover: string;
}

export const projects: Project[] = [
  {
    id: 'hexadel',
    name: 'HEXADEL',
    appId: 2499130,
    storeUrl: 'https://store.steampowered.com/app/2499130/HEXADEL/',
    developer: 'Planetary Gears',
    releaseDate: '24 April 2026',
    genres: ['Strategy', 'Puzzle', 'Indie'],
    blurb:
      'A neon-drenched layered tower defence puzzle game, with minimalist tunes and endless ways to build your citadel.',
    cover: '/images/games/hexadel-header.jpg',
  },
  {
    id: 'office-chair-curling',
    name: 'office chair curling',
    appId: 4483800,
    storeUrl: 'https://store.steampowered.com/app/4483800/office_chair_curling/',
    developer: 'osuika, kris_wilson88',
    releaseDate: '16 April 2026',
    genres: ['Action', 'Multiplayer'],
    blurb:
      'A 1-bit curling game where you throw office chairs at a target — ported from Playdate with online cross-play.',
    cover: '/images/games/office-chair-curling-header.jpg',
  },
  {
    id: 'new-stars',
    name: 'New Stars',
    appId: 2231270,
    storeUrl: 'https://store.steampowered.com/app/2231270/New_Stars/',
    developer: 'adamjr',
    releaseDate: '4 March 2026',
    genres: ['4X Strategy', 'Simulation', 'Indie'],
    blurb:
      'Expand a galactic empire across new stars, research technologies and challenge great alien powers in a 4X grand strategy game.',
    cover: '/images/games/new-stars-header.jpg',
  },
];
