/**
 * Site-wide identity, navigation and links.
 *
 * PRIVACY NOTE: the phone number and email address from the CV are deliberately
 * absent from this file and from the whole codebase. LinkedIn is the only
 * contact channel published. Do not add them back without asking David.
 */

export interface NavItem {
  /** Label shown in the nav bar. */
  label: string;
  /** Route, always root-relative — pass through `url()` before rendering. */
  href: string;
  /** Accent key from the theme; drives the hover/active colour per section. */
  accent?: AccentKey;
}

export type AccentKey = 'qa' | 'creative' | 'development';

export const site = {
  name: 'David Hovhannisyan',
  /** Short form used in the logo mark and mobile nav. */
  shortName: 'David H.',
  /** Initials for the square logo tile. */
  initials: 'DH',
  role: 'QA Engineer',
  location: 'Yerevan, Armenia',
  /** Used for <title>, meta description and Open Graph defaults. */
  tagline: 'Quality Assurance Engineer breaking games so players never have to.',
  description:
    'David Hovhannisyan — QA Engineer in Yerevan, Armenia. Mobile and PC game testing, ' +
    'test automation with Selenium and Java, API testing, and release-quality ownership.',
} as const;

/**
 * PHOTO SLOT — the hero and the About page both read this.
 *
 * While it is `null`, they render a designed abstract panel instead. To use a
 * real photo: drop the file into `public/images/`, then set this to its path,
 * e.g. `'/images/david.jpg'`. A portrait crop around 900×1125 (4:5) looks best;
 * anything portrait-ish works, since the frame crops with object-fit: cover.
 */
export const portrait: string | null = null;

export const links = {
  linkedin: {
    label: 'LinkedIn',
    handle: 'david-hovhannisyan',
    href: 'https://www.linkedin.com/in/david-hovhannisyan',
  },
} as const;

export const nav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'QA', href: '/qa', accent: 'qa' },
  { label: 'Creative', href: '/creative', accent: 'creative' },
  { label: 'Development', href: '/development', accent: 'development' },
  { label: 'About Me', href: '/about' },
];
