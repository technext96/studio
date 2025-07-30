
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

const siteUrl = 'https://technext.dev';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'TechNext | Custom Software & Web Development',
    template: '%s | TechNext',
  },
  description: 'TechNext is a premium software house delivering custom web development, mobile apps, and enterprise solutions. We turn your ideas into reality.',
  keywords: ['software development', 'web development', 'mobile apps', 'custom software', 'nextjs', 'react', 'TechNext', 'AI development', 'automation'],
  openGraph: {
    title: 'TechNext | Custom Software & Web Development',
    description: 'High-performance solutions for your business needs.',
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'TechNext',
    images: [
      {
        url: '/og-image.png', // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: 'TechNext - Custom Software & Web Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechNext | Custom Software & Web Development',
    description: 'High-performance solutions for your business needs.',
    images: ['/og-image.png'], // Replace with your actual Twitter card image URL
  },
  alternates: {
    canonical: '/',
  },
};

export const viewport: Viewport = {
  themeColor: '#179CF0', // Updated theme color
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TechNext',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`, // Replace with your actual logo URL
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-234-567-890',
      contactType: 'customer service',
    },
  };
  
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased', inter.variable, spaceGrotesk.variable)}>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="relative flex min-h-dvh flex-col bg-background">
          <div className="fixed top-0 left-0 w-full h-full -z-50 animated-gradient"></div>
          <Header />
          <main className="flex-1 pt-24">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
