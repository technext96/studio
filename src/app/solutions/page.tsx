
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { solutions } from "@/lib/data.tsx";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import { illustrationMap } from "@/lib/constants";

const siteUrl = 'https://technext96.com';
const pageUrl = `${siteUrl}/solutions`;

export const metadata: Metadata = {
  title: "Custom Software & AI Solutions for Business | TechNext",
  description: "Explore our portfolio of successful projects and solutions, from AI-powered learning platforms to scalable food delivery solutions. See our expertise in action.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
      title: 'Our Work & Success Stories | TechNext',
      description: "Explore our portfolio of successful projects and see how we solve complex challenges for our clients.",
      url: pageUrl,
      type: 'website',
      images: [
          {
              url: `${siteUrl}/og-image.png`,
              width: 1200,
              height: 630,
              alt: "TechNext - Our Solutions",
          },
      ],
  },
  twitter: {
      card: 'summary_large_image',
      title: 'Our Work & Success Stories | TechNext',
      description: "Explore our portfolio of successful projects and see how we solve complex challenges for our clients.",
      images: [`${siteUrl}/og-image.png`],
  },
};

export default function SolutionsPage() {
  return (
    <>
      <section className="w-full py-20 md:py-28 lg:py-36 bg-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="px-4 md:px-6 text-center z-10 relative">
          <FadeIn className="space-y-4 max-w-4xl mx-auto">
            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">Our Solutions, Your Success</h1>
            <p className="text-foreground/80 text-base sm:text-lg md:text-xl">
              We take pride in our work and the value we deliver. Explore a curated selection of our projects that demonstrate our passion for technology, our innovative approach to problem-solving, and our unwavering commitment to client success.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="w-full py-16 md:py-24">
        <div className="px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 max-w-5xl mx-auto">
            {solutions.map((project, i) => {
              const Illustration = illustrationMap[project.illustration];
              const projectUrl = `/solutions/${project.slug}`;
              return (
              <FadeIn key={project.slug} style={{ animationDelay: `${i * 0.1}s`}}>
                <Link href={projectUrl} className="group">
                  <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_20px_theme(colors.primary/0.5)] bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/50">
                    <div className="overflow-hidden aspect-video w-full object-cover bg-secondary/50 p-4">
                      {Illustration && <Illustration />}
                    </div>
                    <CardHeader>
                      <CardDescription className="text-sm text-primary font-semibold">{project.category}</CardDescription>
                      <CardTitle className="font-headline text-xl sm:text-2xl">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-sm text-foreground/80">{project.excerpt}</p>
                    </CardContent>
                  </Card>
                </Link>
              </FadeIn>
            )})}
          </div>
        </div>
      </section>
    </>
  );
}
