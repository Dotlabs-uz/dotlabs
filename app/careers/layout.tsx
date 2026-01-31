import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | Dotlabs Studio',
  description: 'Join Dotlabs Studio. Open roles and how to get in touch.',
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
