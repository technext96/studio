import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolio } from "@/lib/constants";
import { ArrowLeft, CheckCircle2, Bot, GraduationCap, HeartPulse, ShoppingCart, Briefcase, Factory, User, Rocket, Shield, ExternalLink } from "lucide-react";
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

  const renderSimpleDetails = () => (
    <>
      <h2>The Challenge</h2>
      <p>{project.challenge}</p>
      <h2>Our Solution</h2>
      <p>{project.solution}</p>
    </>
  );

  const renderDetailedProject = () => (
    <>
      <section className="w-full py-12 md:py-20 lg:py-24 bg-secondary/20">
        <div className="px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-primary">Quick Summary</h2>
              <p className="text-foreground/80">{project.summary}</p>
            </div>
            <Card className="bg-card/50 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle>Project Details</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4 text-sm">
                    {project.details.useCase && <div className="flex items-start gap-2"><Bot className="h-5 w-5 text-primary mt-1"/><div><p className="font-semibold">Use Case</p><p className="text-foreground/80">{project.details.useCase}</p></div></div>}
                    {project.details.industry && <div className="flex items-start gap-2"><Factory className="h-5 w-5 text-primary mt-1"/><div><p className="font-semibold">Industry</p><p className="text-foreground/80">{project.details.industry}</p></div></div>}
                    {project.details.headquarters && <div className="flex items-start gap-2"><Briefcase className="h-5 w-5 text-primary mt-1"/><div><p className="font-semibold">Headquarters</p><p className="text-foreground/80">{project.details.headquarters}</p></div></div>}
                    {project.details.product && <div className="flex items-start gap-2"><Rocket className="h-5 w-5 text-primary mt-1"/><div><p className="font-semibold">Product</p><p className="text-foreground/80">{project.details.product}</p></div></div>}
                    {project.details.results && <div className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-1"/><div><p className="font-semibold">Results</p><p className="text-foreground/80">{project.details.results}</p></div></div>}
                </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {project.solutions && (
        <section className="w-full py-12 md:py-24">
          <div className="px-4 md:px-6">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-center mb-12">Solutions We Provided</h2>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <h3 className="text-2xl font-bold font-headline mb-6 flex items-center gap-2"><User className="text-primary" /> For Students</h3>
                <div className="space-y-4">
                  {project.solutions.forStudents.map((solution, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">{solution.title}</h4>
                        <p className="text-foreground/80 text-sm">{solution.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-headline mb-6 flex items-center gap-2"><Shield className="text-primary" /> For Admins</h3>
                <div className="space-y-4">
                  {project.solutions.forAdmins.map((solution, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">{solution.title}</h4>
                        <p className="text-foreground/80 text-sm">{solution.description}</p>
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
        <section className="w-full py-12 md:py-24 bg-secondary/20">
          <div className="px-4 md:px-6">
             <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-center mb-12">USPs of the Project</h2>
             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.usps.map((usp, index) => (
                    <Card key={index} className="bg-card/50 backdrop-blur-sm">
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold flex items-start gap-3">
                                <CheckCircle2 className="h-6 w-6 text-primary mt-1" />
                                <span>{usp.title}</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-foreground/80">{usp.description}</p>
                        </CardContent>
                    </Card>
                ))}
             </div>
          </div>
        </section>
      )}

      {project.techStack && (
        <section className="w-full py-12 md:py-24">
            <div className="px-4 md:px-6">
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-center mb-12">The Technology Used</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {project.techStack.map(tech => (
                        <Badge key={tech} variant="secondary" className="text-lg py-2 px-4 bg-primary/10 text-primary hover:bg-primary/20 glow-effect">{tech}</Badge>
                    ))}
                </div>
            </div>
        </section>
      )}

      {project.impacts && (
        <section className="w-full py-12 md:py-24 bg-secondary/20">
          <div className="px-4 md:px-6">
             <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-center mb-12">Impacts and benefits from our solution</h2>
             <div className="grid sm:grid-cols-2 gap-8">
                {project.impacts.map((impact, index) => (
                    <div key={index}>
                        <h3 className="text-xl font-bold font-headline mb-2">{impact.title}</h3>
                        <p className="text-foreground/80">{impact.description}</p>
                    </div>
                ))}
             </div>
          </div>
        </section>
      )}
    </>
  );

  return (
    <>
      <section className="w-full py-12 md:py-20 lg:py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="px-4 md:px-6 z-10 relative">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" asChild className="mb-8 -ml-4">
              <Link href="/portfolio">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Link>
            </Button>

            <div className="space-y-4">
              <p className="text-primary font-semibold">{project.category}</p>
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
                {project.title}
              </h1>
              <p className="text-foreground/80 text-lg md:text-xl">{project.excerpt}</p>
            </div>
             {(project.demoUrl || project.purchaseUrl) && (
              <div className="flex gap-4 mt-8">
                  {project.demoUrl && (
                      <Button asChild size="lg">
                          <Link href={project.demoUrl} target="_blank">
                              <ExternalLink className="mr-2 h-5 w-5"/>
                              Live Demo
                          </Link>
                      </Button>
                  )}
                  {project.purchaseUrl && (
                       <Button asChild size="lg" variant="outline">
                          <Link href={project.purchaseUrl} target="_blank">
                              <ShoppingCart className="mr-2 h-5 w-5"/>
                              Purchase
                          </Link>
                      </Button>
                  )}
              </div>
            )}

            <Image
              src={project.imageUrl}
              data-ai-hint={project.imageHint}
              width={1200}
              height={600}
              alt={project.title}
              className="rounded-lg my-12 border-2 border-primary/20 glow-effect"
            />
          </div>
        </div>
      </section>

      {project.summary ? renderDetailedProject() : (
         <div className="prose prose-invert max-w-4xl mx-auto py-12 px-4 md:px-6 prose-h1:font-headline prose-h1:text-4xl prose-h1:text-primary prose-h2:font-headline prose-h2:text-2xl prose-h3:font-headline">
           {renderSimpleDetails()}
         </div>
      )}

      <section className="w-full py-12 md:py-24">
        <div className="px-4 md:px-6 text-center">
            <div className="space-y-4 max-w-3xl mx-auto bg-card/50 backdrop-blur-sm border-primary/10 rounded-lg p-8 glow-effect">
                <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Want to See Your Idea as the Next Big Thing?</h2>
                <p className="text-foreground/80 md:text-lg">
                Get custom solutions, recommendations, estimates, confidentiality & same day response guaranteed!
                </p>
                <Button asChild size="lg">
                <Link href="/contact">Talk to Our Experts</Link>
                </Button>
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
