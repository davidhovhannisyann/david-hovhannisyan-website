/** Skills, languages and education — the reference sections of the CV. */

export interface SkillGroup {
  label: string;
  /** Emoji-free icon key, mapped to an inline SVG in the Icon component. */
  icon: 'code' | 'clipboard' | 'plug' | 'chart' | 'gamepad' | 'branch' | 'board' | 'media';
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Programming & Automation',
    icon: 'code',
    items: ['Java', 'C++', 'Kotlin (basic)', 'Selenium WebDriver'],
  },
  {
    label: 'Test Management',
    icon: 'clipboard',
    items: ['TestRail', 'TestLodge'],
  },
  {
    label: 'API Testing',
    icon: 'plug',
    items: ['Postman', 'Charles Proxy'],
  },
  {
    label: 'Monitoring & Analytics',
    icon: 'chart',
    items: ['Firebase', 'Google Play Console', 'Appsflyer'],
  },
  {
    label: 'Game Engines & Frameworks',
    icon: 'gamepad',
    items: ['LibGDX'],
  },
  {
    label: 'Version Control',
    icon: 'branch',
    items: ['GitHub'],
  },
  {
    label: 'Project Management & Issue Tracking',
    icon: 'board',
    items: ['ClickUp', 'Trello'],
  },
  {
    label: 'Media & Design Tools',
    icon: 'media',
    items: ['Adobe Premiere Pro', 'Adobe Photoshop'],
  },
];

export interface Language {
  name: string;
  level: string;
  /** 0-100, drives the proficiency meter width. */
  proficiency: number;
}

export const languages: Language[] = [
  { name: 'Armenian', level: 'Native', proficiency: 100 },
  { name: 'Russian', level: 'C2 — Proficient', proficiency: 95 },
  { name: 'English', level: 'C1 — Advanced', proficiency: 85 },
];

export interface Education {
  institution: string;
  institutionUrl?: string;
  degree: string;
  field: string;
  period: string;
  logo: string | null;
  logoAlt?: string;
}

export const education: Education[] = [
  {
    institution: 'Russian-Armenian University',
    institutionUrl: 'https://rau.am/en',
    degree: "Bachelor's degree",
    field: 'Applied Mathematics',
    period: '2020 — 2024',
    logo: '/images/logos/rau.png',
    logoAlt: 'Russian-Armenian University logo',
  },
];
