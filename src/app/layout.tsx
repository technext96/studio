import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Inter, Space_Grotesk } from 'next/font/google';
import { cn } from '@/lib/utils';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: {
    default: 'Code Harbor | Custom Software & Web Development',
    template: '%s | Code Harbor',
  },
  description: 'Code Harbor is a premium software house delivering custom web development, mobile apps, and enterprise solutions. We turn your ideas into reality.',
  keywords: ['software development', 'web development', 'mobile apps', 'custom software', 'nextjs', 'react'],
  openGraph: {
    title: 'Code Harbor | Custom Software & Web Development',
    description: 'High-performance solutions for your business needs.',
    type: 'website',
    locale: 'en_US',
    url: 'https://codeharbor.dev', // Replace with your actual domain
    siteName: 'Code Harbor',
  },
};

export const viewport: Viewport = {
  themeColor: '#00ffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased', inter.variable, spaceGrotesk.variable)}>
        <div className="relative flex min-h-dvh flex-col bg-background">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
