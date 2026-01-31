import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Dotlabs Studio',
  description: 'Privacy policy for Dotlabs Studio. How we collect, use, and protect your information.',
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
