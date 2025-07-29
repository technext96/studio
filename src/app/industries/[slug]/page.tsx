import { Button } from "@/components/ui/button";
import { industries, portfolio } from "@/lib/constants";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const industry = industries.find((p) => p.slug === params.slug);

  if (!industry) {
    return {
      title: "Industry Not Found",
    };
  }

  return {
    title: `${industry.title} Solutions`,
    description: `Learn how our technology solutions are tailored for the ${industry.title} industry.`,
  };
}


export default function IndustryPage({ params }: Props) {
    const industry = industries.find((s) => s.slug === params.slug);

    if (!industry) {
        notFound();
    }

    const relatedProjects = portfolio.filter(p => p.category.includes(industry.title) || p.details.industry === industry.title).slice(0, 2);

    return (
        <>
            <section className="w-full py-12 md:py-20 lg:py-24 bg-secondary/50 relative">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="px-4 md:px-6 z-10 relative">
                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                        <div className="space-y-4">
                            <Button variant="ghost" asChild className="mb-4 -ml-4">
                                <Link href="/industries">
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    All Industries
                                </Link>
                            </Button>
                             <div className="flex items-center gap-4">
                                <div className="text-primary">{industry.icon}</div>
                                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
                                    {industry.title}
                                </h1>
                             </div>
                            <p className="max-w-[600px] text-foreground/80 md:text-xl">
                                {industry.description}
                            </p>
                        </div>
                         <Image
                            src={industry.imageUrl}
                            data-ai-hint={industry.imageHint}
                            width="600"
                            height="400"
                            alt={industry.title}
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover border-2 border-primary/20 glow-effect"
                        />
                    </div>
                </div>
            </section>
            
            {relatedProjects.length > 0 && (
                <section id="portfolio" className="w-full py-12 md:py-24">
                    <div className="px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                        <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Related Case Studies</h2>
                            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed">
                                See our expertise in the {industry.title} industry in action.
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

             <section className="w-full py-12 md:py-24 bg-secondary/20">
                <div className="px-4 md:px-6 text-center">
                   <div className="space-y-4 max-w-3xl mx-auto bg-card/50 backdrop-blur-sm border-primary/10 rounded-lg p-8 glow-effect">
                     <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Ready to Innovate in the {industry.title} Sector?</h2>
                     <p className="text-foreground/80 md:text-lg">
                       Let's discuss how our tailored technology solutions can help you achieve your business goals. Contact us today for a strategic consultation.
                     </p>
                     <Button asChild size="lg">
                       <Link href="/contact">Contact Our Experts</Link>
                     </Button>
                  </div>
                </div>
              </section>
        </>
    )
}


export async function generateStaticParams() {
  return industries.map((s) => ({
    slug: s.slug,
  }));
}
