import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/constants";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
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
    title: `${service.title}`,
    description: service.longDescription,
  };
}


export default function ServicePage({ params }: Props) {
    const service = services.find((s) => s.slug === params.slug);

    if (!service) {
        notFound();
    }

    // A simple process timeline for demonstration
    const process = [
        { title: "Discovery & Strategy", description: "We start by understanding your goals, audience, and market to define a clear roadmap for success." },
        { title: "Design & Prototyping", description: "Our designers create intuitive and beautiful interfaces focused on delivering a superior user experience."},
        { title: "Agile Development", description: "We build your application in iterative sprints, allowing for flexibility and regular feedback."},
        { title: "Deployment & Support", description: "We handle the deployment process and offer ongoing support and maintenance to keep your application running smoothly."}
    ];

    return (
        <>
            <section className="w-full py-12 md:py-20 lg:py-24 bg-secondary/50 relative">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="px-4 md:px-6 z-10 relative">
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
                <div className="px-4 md:px-6">
                    <div className="text-center space-y-2 mb-12">
                         <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Our Approach</h2>
                         <p className="max-w-[700px] mx-auto text-foreground/80 md:text-lg">A collaborative and transparent journey from idea to launch.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" aria-hidden="true"></div>
                        {process.map((step, index) => (
                             <div key={index} className="relative mb-12 md:mb-16">
                                <div className="md:flex md:items-center" style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}>
                                    <div className="md:w-5/12"></div>
                                    <div className="hidden md:block">
                                        <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 border-4 border-background flex items-center justify-center">
                                            <div className="w-3 h-3 bg-background rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="md:w-5/12">
                                        <div className="p-6 bg-card/50 backdrop-blur-sm border-primary/10 rounded-lg">
                                            <p className="font-bold text-primary mb-2">Step {index + 1}</p>
                                            <h3 className="text-xl font-bold font-headline mb-2">{step.title}</h3>
                                            <p className="text-foreground/80">{step.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {service.slug === 'ai-ml' && (
              <section className="w-full py-12 md:py-24 bg-background">
                <div className="px-4 md:px-6">
                   <div className="text-center space-y-2 mb-12">
                     <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">AI-Powered Vision Document Generator</h2>
                     <p className="max-w-[700px] mx-auto text-foreground/80 md:text-lg">Have an idea? Describe it below and let our AI create a starting vision document for you.</p>
                  </div>
                  <VisionDocumentGenerator />
                </div>
              </section>
            )}

            {service.subServices && (
                 <section className="w-full py-12 md:py-24 bg-secondary/20">
                    <div className="px-4 md:px-6">
                        <div className="text-center space-y-2 mb-12">
                             <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Key Offerings</h2>
                             <p className="max-w-[700px] mx-auto text-foreground/80 md:text-lg">We provide top-tier expertise across a wide range of areas within {service.title}.</p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4">
                            {service.subServices.map(tech => (
                                <Badge key={tech} variant="secondary" className="text-lg py-2 px-4 bg-primary/10 text-primary hover:bg-primary/20 glow-effect">{tech}</Badge>
                            ))}
                        </div>
                    </div>
                </section>
            )}

             <section className="w-full py-12 md:py-24">
                <div className="px-4 md:px-6 text-center">
                   <div className="space-y-4 max-w-3xl mx-auto bg-card/50 backdrop-blur-sm border-primary/10 rounded-lg p-8 glow-effect">
                     <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Ready to Start Your Project?</h2>
                     <p className="text-foreground/80 md:text-lg">
                       Let's discuss how our {service.title} expertise can help you achieve your goals. Contact us today for a no-obligation consultation.
                     </p>
                     <Button asChild size="lg">
                       <Link href="/contact">Get a Free Quote</Link>
                     </Button>
                  </div>
                </div>
              </section>

        </>
    )
}


export async function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}
