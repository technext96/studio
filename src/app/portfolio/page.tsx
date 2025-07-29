import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolio } from "@/lib/constants";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore our portfolio, showcasing successful implementations of advanced technologies.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container px-4 md:px-6 text-center z-10 relative">
          <div className="space-y-2 animate-fade-in-up">
            <h1 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-primary">Our Work</h1>
            <p className="max-w-[600px] mx-auto text-foreground/80 md:text-xl">
              A showcase of our passion for technology and commitment to client success.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 lg:gap-8">
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
                      <p className="text-sm text-primary font-semibold">{project.category}</p>
                      <CardTitle className="font-headline">{project.title}</CardTitle>
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
