import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Aster — Watch the Dot | Live GPS tracking for cycling events',
  description:
    'Aster turns every gravel race, group ride, and grand départ into a live, watchable event. Real-time GPS tracking, leaderboards, and SOS — built for cycling.',
  metadataBase: new URL('https://watchthedot.cc'),
  openGraph: {
    title: 'Aster — Watch the Dot',
    description:
      'Live GPS tracking for cycling events. Riders ride, fans watch, organizers stay in control.',
    url: 'https://watchthedot.cc',
    siteName: 'Aster',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aster — Watch the Dot',
    description: 'Live GPS tracking for cycling events.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen bg-ink-950 text-ink-100 antialiased">
        <SiteHeader />
        <main className="relative">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
