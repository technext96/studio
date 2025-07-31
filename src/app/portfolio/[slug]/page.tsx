

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolio } from "@/lib/constants";
import { ArrowLeft, CheckCircle2, Bot, GraduationCap, HeartPulse, ShoppingCart, Briefcase, Factory, User, Rocket, Shield, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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

  const renderSimpleDetails = () => (
    <div className="prose prose-invert max-w-none py-16 px-8 md:px-12 prose-h2:font-headline prose-h2:text-2xl prose-h2:text-primary prose-p:text-lg prose-p:text-foreground/80">
      <h2>Project Summary</h2>
      <p>{project.summary || "Summary not available."}</p>
      
      {project.keyFeatures && (
        <>
            <h2>Key Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 not-prose p-0 m-0 list-none">
                {project.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0"/>
                        <span className="text-foreground/80">{feature}</span>
                    </li>
                ))}
            </ul>
        </>
      )}
    </div>
  );

  const renderDetailedProject = () => (
    <>
      <section className="w-full py-16 md:py-24 lg:py-28 bg-secondary/20">
        <div className="px-8 md:px-12">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl text-primary">Quick Summary</h2>
              <p className="text-foreground/80 md:text-xl">{project.summary}</p>
            </div>
            <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Project Details</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-6 text-lg">
                    {project.details.useCase && <div className="flex items-start gap-4"><Bot className="h-7 w-7 text-primary mt-1"/><div><p className="font-semibold">Use Case</p><p className="text-foreground/80">{project.details.useCase}</p></div></div>}
                    {project.details.industry && <div className="flex items-start gap-4"><Factory className="h-7 w-7 text-primary mt-1"/><div><p className="font-semibold">Industry</p><p className="text-foreground/80">{project.details.industry}</p></div></div>}
                    {project.details.headquarters && <div className="flex items-start gap-4"><Briefcase className="h-7 w-7 text-primary mt-1"/><div><p className="font-semibold">Headquarters</p><p className="text-foreground/80">{project.details.headquarters}</p></div></div>}
                    {project.details.product && <div className="flex items-start gap-4"><Rocket className="h-7 w-7 text-primary mt-1"/><div><p className="font-semibold">Product</p><p className="text-foreground/80">{project.details.product}</p></div></div>}
                    {project.details.results && <div className="flex items-start gap-4"><CheckCircle2 className="h-7 w-7 text-primary mt-1"/><div><p className="font-semibold">Results</p><p className="text-foreground/80">{project.details.results}</p></div></div>}
                    {project.details.timeline && <div className="flex items-start gap-4"><CheckCircle2 className="h-7 w-7 text-primary mt-1"/><div><p className="font-semibold">Timeline</p><p className="text-foreground/80">{project.details.timeline}</p></div></div>}
                </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {project.solutions && (
        <section className="w-full py-16 md:py-24">
          <div className="px-8 md:px-12 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl text-center mb-16">Solutions We Provided</h2>
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <h3 className="text-3xl font-bold font-headline mb-8 flex items-center gap-4 text-primary"><User /> For Students</h3>
                <div className="space-y-6">
                  {project.solutions.forStudents.map((solution, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-xl">{solution.title}</h4>
                        <p className="text-foreground/80 text-base">{solution.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold font-headline mb-8 flex items-center gap-4 text-primary"><Shield /> For Admins</h3>
                <div className="space-y-6">
                  {project.solutions.forAdmins.map((solution, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-xl">{solution.title}</h4>
                        <p className="text-foreground/80 text-base">{solution.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {project.usps && (
        <section className="w-full py-16 md:py-24 bg-secondary/20">
          <div className="px-8 md:px-12 max-w-7xl mx-auto">
             <h2 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl text-center mb-16">Unique Selling Propositions</h2>
             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {project.usps.map((usp, index) => (
                    <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/10">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold flex items-start gap-4">
                                <CheckCircle2 className="h-7 w-7 text-primary mt-1 flex-shrink-0" />
                                <span>{usp.title}</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-base text-foreground/80">{usp.description}</p>
                        </CardContent>
                    </Card>
                ))}
             </div>
          </div>
        </section>
      )}

      {project.techStack && (
        <section className="w-full py-16 md:py-24">
            <div className="px-8 md:px-12 max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl text-center mb-12">The Technology Stack</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {project.techStack.map(tech => (
                        <Badge key={tech} variant="secondary" className="text-lg py-2 px-4 bg-primary/10 text-primary hover:bg-primary/20 glow-effect">{tech}</Badge>
                    ))}
                </div>
            </div>
        </section>
      )}

      {project.impacts && (
        <section className="w-full py-16 md:py-24 bg-secondary/20">
          <div className="px-8 md:px-12 max-w-7xl mx-auto">
             <h2 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl text-center mb-16">Impacts and Business Outcomes</h2>
             <div className="grid sm:grid-cols-2 gap-10">
                {project.impacts.map((impact, index) => (
                    <div key={index} className="bg-card/50 p-6 rounded-lg">
                        <h3 className="text-2xl font-bold font-headline mb-3 text-primary">{impact.title}</h3>
                        <p className="text-foreground/80 text-lg">{impact.description}</p>
                    </div>
                ))}
             </div>
          </div>
        </section>
      )}

      {project.faq && (
        <section className="w-full py-16 md:py-24">
            <div className="px-8 md:px-12 max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl text-center mb-12">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                    {project.faq.map((item, index) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger className="text-left text-lg hover:no-underline">{item.question}</AccordionTrigger>
                            <AccordionContent className="text-base text-foreground/80">
                            {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
      )}
    </>
  );

  return (
    <>
      <section className="w-full py-20 md:py-28 lg:py-36 bg-background relative overflow-hidden pt-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="px-8 md:px-12 z-10 relative">
          <div className="max-w-5xl mx-auto">
            <Button variant="ghost" asChild className="mb-8 -ml-4">
              <Link href="/portfolio">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Link>
            </Button>

            <div className="space-y-6">
              <p className="text-primary font-semibold text-lg">{project.category}</p>
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
                {project.title}
              </h1>
              <p className="text-foreground/80 text-lg md:text-xl max-w-4xl">{project.excerpt}</p>
            </div>
             {(project.demoUrl || project.purchaseUrl) && (
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  {project.demoUrl && (
                      <Button asChild size="lg" className="text-lg px-8 py-6">
                          <Link href={project.demoUrl} target="_blank">
                              <ExternalLink className="mr-2 h-5 w-5"/>
                              Live Demo
                          </Link>
                      </Button>
                  )}
                  {project.purchaseUrl && (
                       <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
                          <Link href={project.purchaseUrl} target="_blank">
                              <ShoppingCart className="mr-2 h-5 w-5"/>
                              Purchase
                          </Link>
                      </Button>
                  )}
              </div>
            )}
            
            <div className="rounded-lg my-12 border-2 border-primary/20 glow-effect aspect-video w-full object-cover bg-secondary/50 p-4">
              {project.illustration}
            </div>
          </div>
        </div>
      </section>

      {project.solutions ? renderDetailedProject() : renderSimpleDetails()}

      <section className="w-full py-20 md:py-28">
        <div className="px-8 md:px-12 text-center">
            <div className="space-y-6 max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border-primary/10 rounded-lg p-10 glow-effect">
                <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">Want to See Your Idea as the Next Big Thing?</h2>
                <p className="text-foreground/80 md:text-lg">
                Get custom solutions, recommendations, estimates, and a confidentiality agreement, with a same-day response guaranteed! Let's build the future together.
                </p>
                 <div className="pt-4">
                    <Button asChild size="lg" className="text-lg px-8 py-6">
                        <Link href="/contact">Talk to Our Experts</Link>
                    </Button>
                 </div>
            </div>
        </div>
      </section>
    </>
  );
}

export async function generateStaticParams() {
  return portfolio.map((p) => ({
    slug: p.slug,
  }));
}
