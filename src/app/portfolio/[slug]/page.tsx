import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { portfolio } from "@/lib/constants";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = portfolio.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `Case Study: ${project.title}`,
    description: project.excerpt,
  };
}

export default function PortfolioProjectPage({ params }: Props) {
  const project = portfolio.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="w-full py-12 md:py-20 lg:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/portfolio">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
            </Link>
          </Button>

          <article className="prose prose-invert max-w-none prose-h1:font-headline prose-h1:text-4xl prose-h1:text-primary prose-h2:font-headline prose-h2:text-2xl prose-h3:font-headline">
            <p className="text-primary font-semibold">{project.category}</p>
            <h1>Case Study: {project.title}</h1>

            <Image
              src={project.imageUrl}
              data-ai-hint={project.imageHint}
              width={1200}
              height={600}
              alt={project.title}
              className="rounded-lg my-8 border-2 border-primary/20 glow-effect"
            />
            
            <div className="grid md:grid-cols-3 gap-8 my-12 border-y border-border/50 py-8">
              <div>
                <h3 className="font-semibold text-foreground/80 uppercase tracking-wider text-sm">Client</h3>
                <p className="text-lg font-bold">{project.details.client}</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground/80 uppercase tracking-wider text-sm">Timeline</h3>
                <p className="text-lg font-bold">{project.details.timeline}</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground/80 uppercase tracking-wider text-sm">Industry</h3>
                <p className="text-lg font-bold">{project.details.industry}</p>
              </div>
            </div>

            <h2>The Challenge</h2>
            <p>
                {project.challenge}
            </p>

            <h2>Our Solution</h2>
            <p>
                {project.solution}
            </p>

            {project.keyFeatures && (
                <div className="bg-secondary/20 rounded-lg p-8 my-8">
                    <h3 className="font-headline not-prose mb-4 text-xl">Key Features</h3>
                    <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4 not-prose p-0 m-0">
                        {project.keyFeatures.map(feature => (
                            <li key={feature} className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            
            {project.technologies && (
                <div className="my-8">
                    <h3 className="font-headline not-prose mb-4 text-xl">Technology Stack</h3>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map(tech => (
                            <Badge key={tech} variant="secondary" className="text-sm bg-primary/10 text-primary hover:bg-primary/20">{tech}</Badge>
                        ))}
                    </div>
                </div>
            )}


            <h2>The Results</h2>
            <p>
                {project.results.summary}
            </p>
            <div className="grid md:grid-cols-3 gap-4 my-8 text-center">
                {project.results.metrics.map(metric => (
                     <div key={metric.label} className="p-4 bg-secondary/20 rounded-lg border border-border/50">
                        <p className="text-3xl font-bold text-primary font-headline">{metric.value}</p>
                        <p className="text-sm text-foreground/80">{metric.label}</p>
                    </div>
                ))}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return portfolio.map((p) => ({
    slug: p.slug,
  }));
}
