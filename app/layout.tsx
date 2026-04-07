import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partner Portal',
  description: 'Headless partner portal for affiliates and brokers.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
