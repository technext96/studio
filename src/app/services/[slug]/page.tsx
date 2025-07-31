
import { Button } from "@/components/ui/button";
import { services } from "@/lib/constants";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import VisionDocumentGenerator from "./VisionDocumentGenerator";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/fade-in";

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

    const process = [
        { title: "1. Discovery & Strategic Planning", description: "Every successful project begins with a deep understanding of your vision. We collaborate closely with you to define objectives, analyze market dynamics, and map out a strategic roadmap. This foundational step ensures our efforts are perfectly aligned with your business goals from day one." },
        { title: "2. Architectural Design & Prototyping", description: "With a clear strategy, our architects and designers craft intuitive, user-centric interfaces. We create detailed wireframes and interactive prototypes, allowing you to visualize and refine the user experience before development begins, ensuring the final product is both beautiful and functional."},
        { title: "3. Agile Development & Iteration", description: "Our development process is built on agile principles. We work in iterative sprints, delivering functional pieces of your application regularly. This approach allows for continuous feedback, flexibility to adapt to new requirements, and complete transparency throughout the development lifecycle."},
        { title: "4. Rigorous Testing & Quality Assurance", description: "Quality is at the core of everything we do. Our dedicated QA team conducts comprehensive testing—from functional and performance to security—to ensure your application is robust, scalable, and bug-free before it ever reaches your users." },
        { title: "5. Seamless Deployment & Ongoing Support", description: "We manage the entire deployment process to ensure a smooth and seamless launch. But our partnership doesn't end there. We provide ongoing support and maintenance to keep your application running at peak performance, adapting to new challenges and opportunities as your business grows."}
    ];

    return (
        <>
            <section className="w-full py-20 md:py-28 lg:py-36 bg-secondary/50 relative">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="px-8 md:px-12 z-10 relative">
                    <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
                        <FadeIn className="space-y-6">
                            <Button variant="ghost" asChild className="mb-4 -ml-4">
                                <Link href="/services">
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    All Services
                                </Link>
                            </Button>
                            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
                                {service.title}
                            </h1>
                            <p className="max-w-2xl text-foreground/80 md:text-xl">
                                {service.longDescription} At TechNext, we don't just build software; we architect solutions that drive progress and create lasting value for your business.
                            </p>
                        </FadeIn>
                         <FadeIn>
                            <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover border-2 border-primary/20 glow-effect bg-secondary/50 p-4">
                                {service.illustration}
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            <section className="w-full py-16 md:py-24">
                <div className="px-8 md:px-12">
                    <FadeIn className="text-center space-y-4 mb-16 max-w-4xl mx-auto">
                         <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">Our End-to-End Approach</h2>
                         <p className="max-w-3xl mx-auto text-foreground/80 md:text-xl/relaxed">We follow a structured, collaborative, and transparent journey to transform your ambitious ideas into market-ready realities. Our process is designed for clarity, efficiency, and exceptional outcomes.</p>
                    </FadeIn>
                    <div className="relative max-w-5xl mx-auto">
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" aria-hidden="true"></div>
                        {process.map((step, index) => (
                             <div key={index} className="relative mb-12 md:mb-16">
                                <FadeIn className="md:flex md:items-center" style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}>
                                    <div className="md:w-1/2 p-4 md:p-0"></div>
                                    <div className="hidden md:block">
                                        <div className="absolute left-1/2 top-1/2 w-8 h-8 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 border-4 border-background flex items-center justify-center font-bold text-primary-foreground">
                                           {index + 1}
                                        </div>
                                    </div>
                                    <div className="md:w-1/2 p-4 md:p-0">
                                        <div className={`p-6 bg-card/50 backdrop-blur-sm border-primary/10 rounded-lg shadow-lg md:mx-8`}>
                                            <h3 className="text-xl font-bold font-headline mb-3 text-primary">{step.title}</h3>
                                            <p className="text-foreground/80">{step.description}</p>
                                        </div>
                                    </div>
                                </FadeIn>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {service.slug === 'ai-ml' && (
              <section className="w-full py-16 md:py-24 bg-background">
                <div className="px-8 md:px-12">
                   <FadeIn className="text-center space-y-4 mb-12 max-w-4xl mx-auto">
                     <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">AI-Powered Vision Document Generator</h2>
                     <p className="max-w-3xl mx-auto text-foreground/80 md:text-xl/relaxed">Have a brilliant idea? Describe it below and let our custom-trained AI create a foundational vision document to kickstart your project planning.</p>
                  </FadeIn>
                  <FadeIn><VisionDocumentGenerator /></FadeIn>
                </div>
              </section>
            )}

            {service.subServices && (
                 <section className="w-full py-16 md:py-24 bg-secondary/20">
                    <div className="px-8 md:px-12">
                        <FadeIn className="text-center space-y-4 mb-12 max-w-4xl mx-auto">
                             <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">Key Offerings within {service.title}</h2>
                             <p className="max-w-3xl mx-auto text-foreground/80 md:text-xl/relaxed">We provide top-tier expertise across a wide range of specialized areas to deliver comprehensive and effective solutions.</p>
                        </FadeIn>
                        <FadeIn className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
                            {service.subServices.map(tech => (
                                <Badge key={tech} variant="secondary" className="text-lg py-2 px-4 bg-primary/10 text-primary hover:bg-primary/20 glow-effect">{tech}</Badge>
                            ))}
                        </FadeIn>
                    </div>
                </section>
            )}

             <section className="w-full py-20 md:py-28">
                <div className="px-8 md:px-12 text-center">
                   <FadeIn className="space-y-6 max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border-primary/10 rounded-lg p-10 glow-effect">
                     <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">Ready to Start Your {service.title} Project?</h2>
                     <p className="text-foreground/80 md:text-lg">
                       Let's discuss how our expertise in {service.title} can help you achieve your strategic goals and overcome your biggest challenges. Contact us today for a complimentary, no-obligation consultation with one of our specialists.
                     </p>
                      <div className="pt-4">
                        <Button asChild size="lg" className="text-lg px-8 py-6">
                           <Link href="/contact">Get a Free Quote</Link>
                        </Button>
                      </div>
                  </FadeIn>
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
