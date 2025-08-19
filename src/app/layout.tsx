
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
  title: "Custom AI Software & Intelligent Automation | TechNext",
  description: "We build high-performance, scalable software and AI solutions that deliver measurable results and a powerful ROI.",
  openGraph: {
    title: "Custom AI Software Development & Automation | TechNext",
    description: "High-performance AI software, automation, and web solutions to power growth and ROI.",
    url: "https://technext96.com/",
    type: "website",
    images: [
      {
        url: "https://technext96.com/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "TechNext AI Software & Automation Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom AI Software & Automation | TechNext",
    description: "Build scalable software, AI tools, and automation with TechNext.",
    images: ["https://technext96.com/images/og-home.jpg"],
  },
  alternates: {
    canonical: "https://technext96.com/",
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
      <head>
        <meta name="trustpilot-one-time-domain-verification-id" content="f2f5ba88-b873-4a40-83d9-edcc56a4e13d"/>
      </head>
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
        <Script src="https://ahrefs.com/site-audit/js/nocrawl.js" data-key="gGi2ufveMQa5LNZzbJQ3vQ" async />
      </body>
    </html>
  );
}
