/**
 * The three "latest from each section" cards on the landing page.
 *
 * When a section gets real content, update its entry here — the landing card,
 * its accent colour and its link all come from this one place.
 */

import type { AccentKey } from './site';
import { currentRole, rolesFor } from './experience';
import { projects } from './projects';

const devRoles = rolesFor('development');

export interface Highlight {
  accent: AccentKey;
  /** Section name, shown as the card's eyebrow. */
  section: string;
  href: string;
  /** Small label above the headline, e.g. 'Currently'. */
  kicker: string;
  headline: string;
  body: string;
  /** Short facts rendered as chips at the bottom of the card. */
  meta: string[];
  /** Renders the muted "in progress" treatment instead of the live one. */
  comingSoon: boolean;
  cta: string;
}

export const highlights: Highlight[] = [
  {
    accent: 'qa',
    section: 'QA',
    href: '/qa',
    kicker: 'Currently',
    headline: `${currentRole.title} at ${currentRole.company}`,
    body:
      'Owning release quality across Android and iOS — test design in TestRail, API testing, ' +
      'Selenium automation in Java, and crash/ANR monitoring in Firebase and Play Console.',
    meta: [currentRole.period, `${projects.length} shipped Steam titles`],
    comingSoon: false,
    cta: 'See the full history',
  },
  {
    accent: 'creative',
    section: 'Creative',
    href: '/creative',
    kicker: 'In progress',
    headline: 'Video editing work, coming soon',
    body:
      'Cuts, edits and motion work built in Premiere Pro and Photoshop. ' +
      'The reel is being put together — check back shortly.',
    meta: ['Adobe Premiere Pro', 'Adobe Photoshop'],
    comingSoon: true,
    cta: 'Take a look',
  },
  {
    accent: 'development',
    section: 'Development',
    href: '/development',
    kicker: 'Also doing',
    headline: 'Engineering, tooling and automation',
    body:
      'GPU-accelerated toolkits in C++, CUDA and LabVIEW at Ngene, internal mobile ' +
      'testing tools in Java and Kotlin, and Selenium automation frameworks.',
    meta: [`${devRoles.length} roles`, 'C++ · CUDA · Java'],
    comingSoon: false,
    cta: 'See the work',
  },
];
