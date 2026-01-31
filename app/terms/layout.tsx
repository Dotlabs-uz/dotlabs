import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Dotlabs Studio',
  description: 'Terms of service for Dotlabs Studio website and services.',
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
