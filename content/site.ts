/**
 * Site-wide content: navigation, footer, brand, meta.
 * Edit this file to change global site copy and links.
 */

export const SITE_META = {
  title: 'Dotlabs Studio | Building Digital Excellence',
  description:
    'A high-end, award-worthy creative tech studio website designed for 2026 standards, featuring fluid animations and premium UI/UX.',
  locale: 'en',
} as const;

export const BRAND = {
  name: 'DOTLABS',
  tagline: 'Building Digital Excellence',
  logoLetter: 'D',
  colors: {
    primary: '#3b82f6',
    dark: '#050505',
    secondary: '#101010',
    accent: '#a855f7',
  },
} as const;

/** Main navigation links. Use /#section so they work from any page (home scrolls, other pages go to home + section). */
export const NAV_LINKS = [
  { label: 'Work', href: '/#work' },
  { label: 'Services', href: '/#services' },
  { label: 'Team', href: '/#team' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
] as const;

/** Footer: primary CTA block. buttonHref: /#contact works from any page (home scrolls, others go to home + contact). */
export const FOOTER_CTA = {
  headline: 'Ready to build\nthe next legacy?',
  headlineHighlight: 'legacy?',
  buttonLabel: 'Get in touch',
  buttonHref: '/#contact',
} as const;

/** Footer: navigation column. */
export const FOOTER_NAV = {
  title: 'Navigation',
  links: [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/#work' },
    { label: 'Services', href: '/#services' },
    { label: 'About', href: '/#about' },
    { label: 'Journal', href: '/journal' },
    { label: 'Careers', href: '/careers' },
  ],
} as const;

/** Footer: social and location. */
export const FOOTER_SOCIAL = {
  title: 'Social',
  links: [
    { name: 'Instagram', href: 'https://instagram.com', icon: 'Instagram' },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'Linkedin' },
    { name: 'Twitter', href: 'https://twitter.com', icon: 'Twitter' },
  ],
} as const;

export const FOOTER_LOCATION = {
  title: 'Location',
  line1: 'Tashkent, Uzbekistan',
  line2: 'Dotlabs HQ, 2026',
} as const;

/** Footer: copyright and legal. */
export const FOOTER_LEGAL = {
  copyright: '© 2026 DOTLABS STUDIO. ALL RIGHTS RESERVED.',
  links: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
} as const;
