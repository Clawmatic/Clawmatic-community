import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const BASE_URL = 'https://community.clawmatic.eu';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'ClawMatic Community — The unofficial OpenClaw AI hub',
    template: '%s — ClawMatic Community',
  },
  description:
    'Free guides, curated AI model setups, skill packs, and a community of builders. Everything you need to get the most out of OpenClaw AI.',
  keywords: ['OpenClaw AI', 'OpenClaw guides', 'OpenClaw skill packs', 'AI automation', 'ClawMatic'],
  authors: [{ name: 'ClawMatic', url: BASE_URL }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'ClawMatic Community',
    title: 'ClawMatic Community — The unofficial OpenClaw AI hub',
    description: 'Free guides, curated AI model setups, skill packs, and a community of builders.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
