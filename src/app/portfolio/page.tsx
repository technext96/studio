import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolio } from "@/lib/constants";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore our portfolio of successful projects, from AI-powered learning platforms to scalable food delivery solutions. See our expertise in action.",
  openGraph: {
      title: 'Our Work & Success Stories | Code Harbor',
      description: "Explore our portfolio of successful projects and see how we solve complex challenges for our clients.",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <section className="w-full py-20 md:py-28 lg:py-36 bg-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="px-8 md:px-12 text-center z-10 relative">
          <div className="space-y-4 animate-fade-in-up">
            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-6xl text-primary">Our Work, Your Success</h1>
            <p className="max-w-3xl mx-auto text-foreground/80 md:text-xl">
              We take pride in our work and the value we deliver. Explore a curated selection of our projects that demonstrate our passion for technology, our innovative approach to problem-solving, and our unwavering commitment to client success.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24">
        <div className="px-8 md:px-12">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
            {portfolio.map((project, i) => (
              <div key={project.slug} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s`}}>
                <Link href={`/portfolio/${project.slug}`} className="group">
                  <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_20px_theme(colors.primary/0.5)] bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/50">
                    <div className="overflow-hidden">
                      <Image
                        src={project.imageUrl}
                        data-ai-hint={project.imageHint}
                        width="600"
                        height="400"
                        alt={project.title}
                        className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardDescription className="text-sm text-primary font-semibold">{project.category}</CardDescription>
                      <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-sm text-foreground/80">{project.excerpt}</p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
