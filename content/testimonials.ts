/**
 * Testimonials (reusable: homepage, project pages, etc.).
 * Edit quotes, authors, and photos here.
 */

import type { Testimonial } from '@/types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Alisher Usmanov',
    role: 'CEO',
    company: 'TechFlow',
    content:
      "Dotlabs transformed our digital presence into a world-class experience. Their attention to detail is unparalleled.",
    image: 'https://picsum.photos/seed/person1/200/200',
  },
  {
    id: 't2',
    name: 'Sarah Chen',
    role: 'Product Lead',
    company: 'Vortex Global',
    content: "The best engineering team we've worked with. They don't just build, they innovate.",
    image: 'https://picsum.photos/seed/person2/200/200',
  },
];
