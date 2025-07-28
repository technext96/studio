import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolio, services } from "@/lib/constants";
import { Check, ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import VisionDocumentGenerator from "./VisionDocumentGenerator";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find((p) => p.slug === params.slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} Services`,
    description: service.longDescription,
  };
}


export default function ServicePage({ params }: Props) {
    const service = services.find((s) => s.slug === params.slug);

    if (!service) {
        notFound();
    }

    const relatedProjects = portfolio.filter(p => p.category.includes(service.categoryFilter)).slice(0, 2);

    return (
        <>
            <section className="w-full py-12 md:py-20 lg:py-24 bg-secondary/50 relative">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="container px-4 md:px-6 z-10 relative">
                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                        <div className="space-y-4">
                            <Button variant="ghost" asChild className="mb-4 -ml-4">
                                <Link href="/services">
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    All Services
                                </Link>
                            </Button>
                            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
                                {service.title}
                            </h1>
                            <p className="max-w-[600px] text-foreground/80 md:text-xl">
                                {service.longDescription}
                            </p>
                        </div>
                         <Image
                            src={service.imageUrl}
                            data-ai-hint={service.imageHint}
                            width="600"
                            height="400"
                            alt={service.title}
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover border-2 border-primary/20 glow-effect"
                        />
                    </div>
                </div>
            </section>

            <section className="w-full py-12 md:py-24">
                <div className="container px-4 md:px-6">
                    <div className="text-center space-y-2 mb-12">
                         <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Our Process</h2>
                         <p className="max-w-[700px] mx-auto text-foreground/80 md:text-lg">A collaborative and transparent journey from idea to launch.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" aria-hidden="true"></div>
                        {service.process.map((step, index) => (
                             <div key={index} className="relative mb-12 md:mb-16">
                                <div className="md:flex md:items-center" style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}>
                                    <div className="md:w-5/12"></div>
                                    <div className="hidden md:block">
                                        <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 border-4 border-background flex items-center justify-center">
                                            <div className="w-3 h-3 bg-background rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="md:w-5/12">
                                        <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/10">
                                            <p className="font-bold text-primary mb-2">Step {index + 1}</p>
                                            <h3 className="text-xl font-bold font-headline mb-2">{step.title}</h3>
                                            <p className="text-foreground/80">{step.description}</p>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {service.slug === 'ai-integration' && (
              <section className="w-full py-12 md:py-24 bg-background">
                <div className="container px-4 md:px-6">
                   <div className="text-center space-y-2 mb-12">
                     <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">AI-Powered Vision Document Generator</h2>
                     <p className="max-w-[700px] mx-auto text-foreground/80 md:text-lg">Have an idea? Describe it below and let our AI create a starting vision document for you.</p>
                  </div>
                  <VisionDocumentGenerator />
                </div>
              </section>
            )}


             <section className="w-full py-12 md:py-24 bg-secondary/50">
                <div className="container px-4 md:px-6">
                    <div className="text-center space-y-2 mb-12">
                         <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Technologies We Use</h2>
                         <p className="max-w-[700px] mx-auto text-foreground/80 md:text-lg">We use a modern, battle-tested stack to deliver robust and efficient applications.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {service.technologies.map(tech => (
                            <Badge key={tech} variant="secondary" className="text-lg py-2 px-4 bg-primary/10 text-primary hover:bg-primary/20 glow-effect">{tech}</Badge>
                        ))}
                    </div>
                </div>
            </section>

            {relatedProjects.length > 0 && (
                <section id="portfolio" className="w-full py-12 md:py-24">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                        <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Related Work</h2>
                            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed">
                            See our expertise in action.
                            </p>
                        </div>
                        <div className="mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 lg:gap-8 max-w-5xl">
                            {relatedProjects.map((project) => (
                            <Link href={`/portfolio/${project.slug}`} key={project.slug} className="group">
                                <Card className="overflow-hidden h-full flex flex-col bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/50 transition-all duration-300 glow-effect">
                                    <Image
                                    src={project.imageUrl}
                                    data-ai-hint={project.imageHint}
                                    width="600"
                                    height="400"
                                    alt={project.title}
                                    className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <CardHeader>
                                    <CardTitle className="font-headline">{project.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                    <p className="text-sm text-foreground/80">{project.excerpt}</p>
                                    </CardContent>
                                </Card>
                            </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

        </>
    )
}


export async function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}
