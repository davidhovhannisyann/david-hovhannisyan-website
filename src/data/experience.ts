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
  /** Human-readable period, e.g. 'January 2024 — Present'. */
  period: string;
  /** ISO-ish start date, used only for sorting (newest first). */
  start: string;
  location: string;
  /** True for roles with no end date — renders a live "Present" pill. */
  current: boolean;
  /** Logo path relative to /public, or null when there's no usable logo. */
  logo: string | null;
  /** Alt text for the logo. */
  logoAlt?: string;
  /** Which page this role belongs to. */
  page: 'qa' | 'development' | 'creative';
  /** Discipline badge shown on the card. */
  discipline: 'Quality Assurance' | 'Software Engineering' | 'Video Editing';
  bullets: string[];
  /** Optional trailing note rendered below the bullets. */
  note?: string;
  /**
   * Character art for the QA page's free-form entries. Falls back to the
   * avatar illustration when unset — drop a per-role image in
   * `public/images/art/` and point this at it to replace the placeholder.
   */
  character?: string;
  /**
   * Per-role size multiplier for that character art, since each illustration
   * will sit differently in the frame. 1 is the default; 0.8 is smaller.
   */
  characterScale?: number;
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
    page: 'qa',
    discipline: 'Quality Assurance',
    bullets: [
      'Designed, created, executed, and maintained test cases in TestRail.',
      'Performed manual regression and sanity testing on mobile applications across Android and iOS platforms.',
      'Monitored game performance and ANR rates using Google Play Console and Firebase, identifying issues and supporting stability improvements.',
      'Conducted API testing using Postman and Charles Proxy.',
      'Automated web application test cases using Selenium WebDriver with Java.',
      'Developed internal mobile testing tools using Java and Kotlin.',
      'Worked closely with engineering, game design, art and support teams to drive issue resolution and maintain release quality.',
    ],
    note: 'Live mobile titles on Google Play.',
  },
  {
    id: 'freelance',
    company: 'Freelance',
    title: 'Quality Assurance Engineer',
    period: 'December 2024 — Present',
    start: '2024-12',
    location: 'Remote',
    current: true,
    logo: null,
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
  {
    id: 'ducky',
    company: 'Ducky LTD',
    title: 'Video Editor',
    // No calendar dates were given for this contract, so the visible period
    // states its length instead. Replace with real dates when you have them.
    period: '3–4 month contract',
    // Sort key only — never rendered. It sits after Ngene so it doesn't affect
    // the "years of experience" figure, which counts from the earliest role.
    start: '2025-01',
    location: 'Remote',
    current: false,
    logo: null,
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

  // ---------------------------------------------------------------------
  // TEMPLATE ENTRY — placeholder text, meant to be filled in.
  // Replace `title`, `period`, `start`, `location` and every bullet below.
  // `start` is only used for sorting (newest first), so keep it accurate.
  // ---------------------------------------------------------------------
  {
    id: 'independent',
    company: 'Independent',
    title: 'Software Developer',
    period: 'Dates to fill in',
    start: '2025-01',
    location: 'Remote',
    current: true,
    logo: null,
    page: 'development',
    discipline: 'Software Engineering',
    bullets: [
      'Replace this line with what you built, and the language or framework you used.',
      'Add one bullet per project or responsibility.',
      'Keep the same voice as the other roles — past tense, one concrete thing each.',
    ],
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
