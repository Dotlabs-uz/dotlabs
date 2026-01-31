import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Journal | Dotlabs Studio',
  description: 'Insights, case studies, and updates from Dotlabs Studio.',
};

export default function JournalLayout({ children }: { children: React.ReactNode }) {
  return children;
}
