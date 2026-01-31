/**
 * Content & media — single entry point for all site content.
 *
 * Edit content in these files:
 *   site.ts       — meta, brand, nav, footer
 *   hero.ts       — homepage hero
 *   home-sections.ts — intro banner, testimonials, CTA
 *   projects.ts   — projects list + detail (images, videos, copy)
 *   team.ts       — team members
 *   testimonials.ts — testimonial quotes (reusable)
 *   services.tsx  — services (copy + icon keys)
 *
 * Components import from @/content (this file).
 */

// Site-wide
export {
  SITE_META,
  BRAND,
  NAV_LINKS,
  FOOTER_CTA,
  FOOTER_NAV,
  FOOTER_SOCIAL,
  FOOTER_LOCATION,
  FOOTER_LEGAL,
} from './site';

// Homepage
export { HERO } from './hero';
export {
  WORK_SECTION,
  INTRO_BANNER,
  HOME_TESTIMONIALS,
  TESTIMONIALS_SECTION,
  CTA_SECTION,
} from './home-sections';

// Projects
export { PROJECTS_LIST, PROJECT_DETAILS, getProjectBySlug } from './projects';

// Team & testimonials
export { TEAM_MEMBERS } from './team';
export { TESTIMONIALS } from './testimonials';

// Services (React nodes; use services.tsx for icon mapping)
export { SERVICES } from './services';

/** Alias for list used on homepage. */
import { PROJECTS_LIST } from './projects';
export const PROJECTS = PROJECTS_LIST;

/** Alias for brand colors (backward compat). */
import { BRAND } from './site';
export const BRAND_COLORS = BRAND.colors;
