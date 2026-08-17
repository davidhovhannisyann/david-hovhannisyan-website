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
  page: 'qa' | 'development';
  /** Discipline badge shown on the card. */
  discipline: 'Quality Assurance' | 'Software Engineering';
  bullets: string[];
  /** Optional trailing note rendered below the bullets. */
  note?: string;
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
    logo: '/images/logos/rockbite.png',
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

/** Roles for a given page, newest first. */
export function rolesFor(page: Role['page']): Role[] {
  return roles
    .filter((r) => r.page === page)
    .sort((a, b) => b.start.localeCompare(a.start));
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
