import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolio } from "@/lib/constants";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore a selection of our finest projects and success stories. See how we've helped businesses like yours achieve their goals with custom software solutions.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Our Work</h1>
            <p className="max-w-[600px] mx-auto text-foreground/80 md:text-xl">
              A showcase of our passion for technology and commitment to client success.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {portfolio.map((project) => (
              <Link href={`/portfolio/${project.slug}`} key={project.slug} className="group">
                <Card className="overflow-hidden h-full flex flex-col transition-shadow duration-300 hover:shadow-xl">
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
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
