/**
 * Homepage section copy: intro banner, work, testimonials, CTA.
 * Edit all non-component-specific text here.
 */

export const WORK_SECTION = {
  title: 'Featured Creations',
  description:
    'A curated selection of our most ambitious projects, pushing the boundaries of technology and design.',
} as const;

export const INTRO_BANNER = {
  marqueeText: 'INNOVATION • EXCELLENCE • STRATEGY •',
  headline:
    'We empower startups and enterprises to dominate the digital landscape with precision engineering.',
  headlineHighlight: 'dominate',
  missionLabel: 'Our\nMission',
} as const;

/** Testimonials on homepage (main page only). */
export const HOME_TESTIMONIALS = [
  {
    quote:
      "Dotlabs didn't just build a website, they engineered a growth engine for our company. The level of craft is unmatched.",
    author: 'Azamat M.',
    role: 'Head of Product',
    image: 'https://picsum.photos/seed/p1/100/100',
  },
  {
    quote:
      'Fast, reliable, and incredibly creative. They are the true partners we were looking for in Central Asia.',
    author: 'Elena Petrova',
    role: 'Marketing Director',
    image: 'https://picsum.photos/seed/p2/100/100',
  },
] as const;

export const TESTIMONIALS_SECTION = {
  label: 'Selected Kind Words',
} as const;

export const CTA_SECTION = {
  headline: "Let's start\nsomething big.",
  headlineHighlight: 'something big.',
  subtitle:
    'Currently accepting new projects for Q3 2026. Our team is ready to scale your vision.',
  buttonLabel: 'Book a Discovery Call',
  buttonHref: '#contact',
} as const;
