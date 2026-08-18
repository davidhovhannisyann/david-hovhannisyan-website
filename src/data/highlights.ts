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
    headline: 'Quality Assurance and testing',
    body:
      'Owning release quality across Android and iOS — test design in TestRail, API testing, ' +
      'Selenium automation in Java, and crash/ANR monitoring in Firebase and Play Console.',
    /* `period` is optional on a Role now, so it is filtered rather than
       assumed — the chip row simply loses an item if the headline role ever
       stops showing dates. */
    meta: [currentRole.period, '15+ shipped titles'].filter(
      (item): item is string => Boolean(item),
    ),
    comingSoon: false,
    cta: 'See the full history',
  },
  {
    accent: 'creative',
    section: 'Creative',
    href: '/creative',
    kicker: 'Also doing',
    headline: 'Video editing and marketing',
    body:
      '250+ mobile ad creatives made for game campaigns.' +
      ' 300+ videos made for TikTok, Instagram and X.',
    meta: ['250+ creatives', 'Premiere Pro'],
    comingSoon: false,
    cta: 'See the work',
  },
  {
    accent: 'development',
    section: 'Development',
    href: '/development',
    kicker: 'Also doing',
    headline: 'Engineering, tooling and automation',
    body:
      'From toolkits in C++, CUDA and LabVIEW, to building ' +
      'testing tools in Java and Kotlin, and Selenium automation frameworks.',
    meta: [`${devRoles.length} ${devRoles.length === 1 ? 'role' : 'roles'}`, 'C++ · CUDA · Java'],
    comingSoon: false,
    cta: 'See the work',
  },
];
