
import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Inter, Space_Grotesk } from 'next/font/google';
import { cn } from '@/lib/utils';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import ChatWidget from '@/components/ChatWidget';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const siteUrl = 'https://technext96.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'TechNext | Custom Software, AI, & Web Development Solutions',
    template: '%s | TechNext',
  },
  description: "TechNext delivers expert custom software, AI/ML integration, and web development services to power your business growth and innovation. Get your free quote today.",
  keywords: ["custom software development", "ai solutions development company", "mobile app development", "web application development", "custom machine learning solutions", "intelligent automation", "ai for business operations", "devops for ml", "ai development company", "ai automation", "ai in business"],
  openGraph: {
    title: 'TechNext | Custom Software, AI, & Web Development Solutions',
    description: 'We build high-performance, scalable software solutions to turn your ideas into reality.',
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'TechNext',
    images: [
      {
        url: '/og-image.png',
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
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#179CF0',
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
    logo: `${siteUrl}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+92-349-1089456',
      contactType: 'customer service',
      email: 'technext96@gmail.com'
    },
    sameAs: [
      'https://github.com/technext96/',
      'https://www.youtube.com/@technext-096',
      'https://www.linkedin.com/company/technext96'
    ]
  };
  
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased', inter.variable, spaceGrotesk.variable)}>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="relative flex min-h-dvh flex-col bg-background">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
           <div className="fixed top-0 left-0 w-full h-full -z-50 animated-gradient"></div>
        </div>
        <Toaster />
        <SpeedInsights />
        <Analytics />
        <ChatWidget />
        <Script src="https://analytics.ahrefs.com/analytics.js" data-key="gGi2ufveMQa5LNZzbJQ3vQ" async />
      </body>
    </html>
  );
}
