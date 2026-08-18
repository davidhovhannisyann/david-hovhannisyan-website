/**
 * Work history, straight from the CV.
 *
 * `page` decides which page a role renders on. To move the Ngene role onto the
 * Development page later, change its `page` from 'qa' to 'development' — the
 * QA timeline and the Development page both read from this one array.
 */

export interface Role {
  id: string;
  company: string;
  /** Optional link to the company site. */
  companyUrl?: string;
  title: string;
  /**
   * Human-readable period, e.g. 'January 2024 — Present'. Omit it and the
   * entry simply shows no dates — ongoing, open-ended work reads better
   * without a start date implying a stint that ended.
   */
  period?: string;
  /**
   * ISO-ish start date, used only for sorting (newest first) and for the
   * years-of-experience figure. Never rendered, so it stays accurate even on
   * roles that show no `period`.
   */
  start: string;
  location: string;
  /** True for roles with no end date — renders a live "Current" pill. */
  current: boolean;
  /** Logo path relative to /public, or null when there's no usable logo. */
  logo: string | null;
  /** Alt text for the logo. */
  logoAlt?: string;
  /**
   * The logo's intrinsic pixel size, `[width, height]`. Two jobs: it reserves
   * the right-shaped box before the image loads, and its ratio decides the
   * layout — anything 2:1 or wider is treated as a wordmark and set as a block
   * above the heading instead of a floated column. Defaults to a portrait box.
   */
  logoSize?: [number, number];
  /**
   * Extra distance between the floated logo and the copy, on top of the
   * default. For marks whose artwork runs right up to the edge of the file —
   * the Rockbite lockup has no margin of its own — the shared gap leaves the
   * text looking wedged against it.
   */
  logoGap?: string;
  /**
   * The company's own colour, used for this entry's role title, bullet marks
   * and rules. Falls back to the page accent when unset. Keep these on the
   * site palette (`var(--c-red)` and friends) rather than sampling the logo
   * exactly, so the page still reads as one set of colours.
   */
  brand?: string;
  /** Which page this role belongs to. */
  page: 'qa' | 'development' | 'creative';
  /** Discipline badge shown on the card. */
  discipline: 'Quality Assurance' | 'Software Engineering' | 'Video Editing';
  bullets: string[];
  /** Optional trailing note rendered below the bullets. */
  note?: string;
  /**
   * The entry's second image, sitting in the outer column beside the copy.
   * Falls back to the avatar illustration when unset — drop a per-role image
   * in `public/images/art/` and point this at it to replace the placeholder.
   */
  character?: string;
  /** That image's intrinsic pixel size, `[width, height]`. */
  characterSize?: [number, number];
  /**
   * Per-role size multiplier for that character art, since each illustration
   * will sit differently in the frame. 1 is the default; 0.8 is smaller.
   * Squarer images need a bump to carry the same visual weight as the tall
   * default avatar.
   */
  characterScale?: number;
  /**
   * Lean on that image, in degrees. Negative tips it left (anticlockwise),
   * positive right. 0 by default — a logo sitting dead straight next to a
   * tilted company mark looks pasted on rather than placed.
   */
  characterTilt?: number;
  /**
   * Extra distance between that image and the copy, on top of the default.
   * Art with no transparent margin of its own crowds the text without it.
   */
  characterGap?: string;
}

export const roles: Role[] = [
  {
    id: 'rockbite',
    company: 'Rockbite Games',
    companyUrl: 'https://rockbitegames.com',
    title: 'Quality Assurance Engineer',
    period: 'January 2024 — Present',
    start: '2024-01',
    location: 'Yerevan, Armenia',
    current: true,
    // Tall portrait lockup — suits the QA page's logo column.
    logo: '/images/logos/rockbite-logo-long.png',
    logoAlt: 'Rockbite Games logo',
    logoSize: [348, 774],
    // The lockup is cropped tight to the artwork, so the shared gap alone left
    // the copy pressed against it.
    logoGap: '1.25rem',
    brand: 'var(--c-red)',
    // Near the same proportions as the default avatar it replaces (0.76 vs
    // 0.74) and cropped tight to the figure, so it needs no scale correction.
    character: '/images/art/rabbit-io.png',
    characterSize: [224, 295],
    page: 'qa',
    discipline: 'Quality Assurance',
    bullets: [
      'Designed, created, executed, and maintained test cases in TestRail.',
      'Performed manual testing on mobile applications across Android and iOS platforms.',
      'Monitored game performance and ANR rates using Google Play Console and Firebase, identifying issues and supporting stability improvements.',
      'Conducted manual and automated API testing with Rest API, Postman and Charles Proxy.',
      'Automated web application test cases using Selenium WebDriver with Java.',
      'Developed internal mobile testing tools using Java and Kotlin.',
      'Worked closely with engineering, game design, art and support teams to drive issue resolution and maintain release quality.',
    ],
    note: 'Live mobile titles on Google Play and Apple App Store.',
  },
  {
    id: 'freelance',
    company: 'Freelance',
    title: 'Quality Assurance Engineer',
    // No `period` and no "Current" pill on purpose: this is continuous,
    // open-ended work across many clients rather than one dated post, and a
    // date range implied a single engagement. `start` below is kept because it
    // is never rendered — only sorted on.
    start: '2024-12',
    location: 'Remote',
    current: false,
    // Most of the freelance work came through Fiverr, so its mark stands in
    // for a company logo this role doesn't have.
    logo: '/images/logos/fiverr-logo-long.png',
    logoAlt: 'Fiverr logo',
    logoSize: [1000, 1000],
    brand: 'var(--c-green)',
    // The store most of the freelance titles shipped on. NOTE: this file is a
    // white mark on transparency, so it only reads on a dark band — which is
    // where this role lands as the second entry on the QA page. Move it to an
    // odd position in this array and the logo disappears.
    character: '/images/logos/steam.png',
    characterSize: [1500, 1500],
    characterScale: 1.2,
    characterTilt: -8,
    characterGap: '1.5rem',
    page: 'qa',
    discipline: 'Quality Assurance',
    bullets: [
      'Partnered with multiple indie and solo developers to support product quality throughout the development.',
      'Performed manual testing across mobile and PC applications.',
      'Executed manual regression and sanity testing to detect defects, verify fixes, and maintain release stability.',
      'Collaborated with design teams to help ensure a smooth, intuitive, and high-quality user experience.',
    ],
    note: 'Released titles on Steam and itch.io.',
  },
  // ---------------------------------------------------------------------
  // PLACEHOLDER CONTENT — every bullet below, plus `period` and `title`, is
  // waiting to be written. `start` is only used for sorting, and `current`
  // is set to match the Rockbite QA role; correct both when you fill this in.
  // ---------------------------------------------------------------------
  {
    id: 'rockbite-creative',
    company: 'Rockbite Games',
    companyUrl: 'https://rockbitegames.com',
    title: 'Video Editor',
    period: 'Dates to fill in',
    start: '2024-01',
    location: 'Yerevan, Armenia',
    current: true,
    logo: '/images/logos/rockbite-logo-long.png',
    logoAlt: 'Rockbite Games logo',
    logoSize: [348, 774],
    logoGap: '1.25rem',
    brand: 'var(--c-red)',
    character: '/images/art/root-rush-guy.png',
    characterSize: [1086, 1448],
    // The figure only occupies the lower-left of its frame — the rest is the
    // pile of produce — so it needs to run wider than the default to read at
    // the same size as the other entries' art.
    characterScale: 1.25,
    page: 'creative',
    discipline: 'Video Editing',
    bullets: [
      'Placeholder — what you produced for the ad campaigns, and for which titles.',
      'Placeholder — one bullet per responsibility, past tense, same voice as the roles above.',
      'Placeholder — the tools used and the platforms the creatives ran on.',
    ],
  },
  {
    id: 'ducky',
    company: 'Ducky LTD',
    companyUrl: 'https://playducky.com/',
    title: 'Motion Designer',
    // No calendar dates were given for this contract, so the visible period
    // states its length instead. Replace with real dates when you have them.
    period: '3–4 month contract',
    // Sort key only — never rendered. It sits after Ngene so it doesn't affect
    // the "years of experience" figure, which counts from the earliest role.
    start: '2025-01',
    location: 'Remote',
    current: false,
    logo: '/images/logos/ducky-logo-long.svg',
    logoAlt: 'Ducky logo',
    logoSize: [250, 300],
    // Ducky's mark is built from the same violet family as the site's own.
    brand: 'var(--c-purple)',
    // The game the whole contract was about, rather than the stand-in avatar.
    character: '/images/art/melon.webp',
    characterSize: [521, 477],
    // Near-square, so it needs to run wider than the tall default avatar to
    // carry the same weight in the column.
    characterScale: 1.35,
    page: 'creative',
    discipline: 'Video Editing',
    bullets: [
      'Created 250+ mobile game ad creatives for Melon Sandbox — a title with over 100M downloads — across multiple advertising platforms.',
      'Developed concepts, recorded gameplay footage and edited end to end: hooks, voiceovers, subtitles, music, sound effects and ending cards.',
      'Adapted every creative to the format requirements of each advertising platform.',
      "Produced 50+ videos for the game's TikTok and Instagram channels.",
      'Worked closely with the marketing team on new creative directions, campaign requirements and a high volume of platform-ready output.',
    ],
    note: 'Melon Sandbox — 100M+ downloads on Google Play.',
  },
  {
    id: 'ngene',
    company: 'Ngene',
    companyUrl: 'https://www.ngene.co',
    title: 'Software Engineer',
    period: 'March 2023 — March 2024',
    start: '2023-03',
    location: 'Yerevan, Armenia',
    current: false,
    logo: '/images/logos/ngene.png',
    logoAlt: 'Ngene logo',
    // 5:1 wordmark — the entry renders it as a masthead above the heading
    // rather than squeezing it into the floated logo column.
    logoSize: [700, 136],
    brand: 'var(--c-blue)',
    character: '/images/art/labview.svg',
    characterSize: [396, 407],
    characterScale: 1.2,
    characterTilt: 8,
    page: 'development',
    discipline: 'Software Engineering',
    bullets: [
      'Developed PC and hardware applications using C++, LabVIEW and CUDA, supporting high-performance and specialized software solutions.',
      'Contributed to the development of CuLab, a GPU-accelerated toolkit designed to improve processing performance and efficiency.',
      'Contributed to the development of NGCV, a video encoding and decoding toolkit.',
    ],
  },
];

/**
 * Roles for a given page, in the order they appear in the array above.
 *
 * Deliberately NOT sorted by date: the newest start date isn't always the one
 * that should lead — Rockbite is the headline role even though the freelance
 * work started later. Reorder the entries above to reorder the page.
 */
export function rolesFor(page: Role['page']): Role[] {
  return roles.filter((r) => r.page === page);
}

/** The current headline role — drives the "latest" card on the landing page. */
export const currentRole = roles.find((r) => r.id === 'rockbite')!;

/** Years of professional experience, counted from the first role. */
export const yearsExperience = (() => {
  const earliest = roles.reduce((min, r) => (r.start < min ? r.start : min), roles[0].start);
  const [y, m] = earliest.split('-').map(Number);
  const now = new Date();
  const months = (now.getFullYear() - y) * 12 + (now.getMonth() + 1 - m);
  return Math.max(1, Math.floor(months / 12));
})();
