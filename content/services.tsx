/**
 * Services: titles, descriptions, tags, icons.
 * Edit copy here; icon keys map to Lucide icons below.
 */

'use client';

import React from 'react';
import { Monitor, Smartphone, Database, Figma } from 'lucide-react';
import type { Service } from '@/types';

const ICON_MAP = {
  Monitor,
  Smartphone,
  Database,
  Figma,
} as const;

type IconKey = keyof typeof ICON_MAP;

const SERVICES_RAW: Array<{
  id: string;
  title: string;
  description: string;
  iconKey: IconKey;
  tags: string[];
}> = [
  {
    id: 's1',
    title: 'Web Engineering',
    description: 'High-performance Jet pages and robust web architectures built for scale.',
    iconKey: 'Monitor',
    tags: ['Next.js', 'React', 'AWS'],
  },
  {
    id: 's2',
    title: 'Mobile Solutions',
    description: 'Immersive native and cross-platform mobile experiences that users love.',
    iconKey: 'Smartphone',
    tags: ['iOS', 'Android', 'Flutter'],
  },
  {
    id: 's3',
    title: 'Enterprise CRM',
    description: 'Custom internal tools and automation systems that streamline operations.',
    iconKey: 'Database',
    tags: ['Automations', 'Dashboards', 'BI'],
  },
  {
    id: 's4',
    title: 'Product Design',
    description: 'User-centric UI/UX design that bridges the gap between humans and tech.',
    iconKey: 'Figma',
    tags: ['UI Design', 'User Research', 'Prototyping'],
  },
];

export const SERVICES: Service[] = SERVICES_RAW.map((s) => {
  const Icon = ICON_MAP[s.iconKey];
  return {
    id: s.id,
    title: s.title,
    description: s.description,
    icon: Icon ? <Icon className="w-6 h-6" /> : null,
    tags: s.tags,
  };
});
