import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolio } from "@/lib/constants";
import { Check, ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Development Services",
  description: "Expert web development services using modern technologies like Next.js, React, and Node.js to build fast, scalable, and secure web applications for your business.",
};

const techStack = ["React", "Next.js", "Node.js", "TypeScript", "GraphQL", "PostgreSQL", "Docker"];
const processSteps = [
    { title: "Discovery & Strategy", description: "We start by understanding your goals, audience, and market to define a clear roadmap for success." },
    { title: "UI/UX Design", description: "Our designers create intuitive and beautiful interfaces focused on delivering a superior user experience."},
    { title: "Agile Development", description: "We build your application in iterative sprints, allowing for flexibility and regular feedback."},
    { title: "Quality Assurance", description: "Rigorous testing is performed throughout the development cycle to ensure a bug-free, high-quality product."},
    { title: "Deployment & Support", description: "We handle the deployment process and offer ongoing support and maintenance to keep your application running smoothly."}
]

export default function WebDevelopmentPage() {
    return (
        <>
            <section className="w-full py-12 md:py-20 lg:py-24 bg-secondary/50">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                        <div className="space-y-4">
                            <Button variant="ghost" asChild className="mb-4 -ml-4">
                                <Link href="/services">
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    All Services
                                </Link>
                            </Button>
                            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
                                Custom Web Development
                            </h1>
                            <p className="max-w-[600px] text-foreground/80 md:text-xl">
                                We build high-performance, scalable, and secure web applications that drive business growth. From marketing sites to complex enterprise platforms, our solutions are engineered for excellence.
                            </p>
                        </div>
                         <Image
                            src="https://placehold.co/600x400.png"
                            data-ai-hint="web development code"
                            width="600"
                            height="400"
                            alt="Web Development"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
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
                        {processSteps.map((step, index) => (
                             <div key={index} className="relative mb-12 md:mb-16">
                                <div className="md:flex md:items-center" style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}>
                                    <div className="md:w-5/12"></div>
                                    <div className="hidden md:block">
                                        <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 border-4 border-background"></div>
                                    </div>
                                    <div className="md:w-5/12">
                                        <Card className="p-6">
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

             <section className="w-full py-12 md:py-24 bg-secondary/50">
                <div className="container px-4 md:px-6">
                    <div className="text-center space-y-2 mb-12">
                         <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Technologies We Use</h2>
                         <p className="max-w-[700px] mx-auto text-foreground/80 md:text-lg">We use a modern, battle-tested stack to deliver robust and efficient applications.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {techStack.map(tech => (
                            <Badge key={tech} variant="default" className="text-lg py-2 px-4 bg-primary text-primary-foreground">{tech}</Badge>
                        ))}
                    </div>
                </div>
            </section>

             <section id="portfolio" className="w-full py-12 md:py-24">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                       <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Related Work</h2>
                        <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed">
                          See our web development expertise in action.
                        </p>
                    </div>
                    <div className="mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 lg:gap-8 max-w-5xl">
                        {portfolio.filter(p => p.category.includes("Web")).slice(0, 2).map((project) => (
                           <Link href={`/portfolio/${project.slug}`} key={project.slug} className="group">
                            <Card className="overflow-hidden h-full flex flex-col transition-shadow duration-300 hover:shadow-xl">
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
        </>
    )
}
