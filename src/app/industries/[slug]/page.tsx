
import { Button } from "@/components/ui/button";
import { industries, portfolio } from "@/lib/constants";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";

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

    const relatedProjects = portfolio.filter(p => p.category.includes(industry.title) || (p.details && p.details.industry === industry.title)).slice(0, 2);

    const industryChallenges = [
        `Navigating complex regulatory and compliance requirements specific to the ${industry.title} sector.`,
        "Integrating legacy systems with modern, cloud-native technologies to improve efficiency.",
        `Leveraging data analytics and AI to gain a competitive edge and personalize user experiences.`,
        `Ensuring robust cybersecurity measures to protect sensitive ${industry.title.toLowerCase()} data.`
    ];

    const ourSolutions = [
        { title: "Custom Platform Development", description: `We build bespoke platforms for ${industry.title} that streamline operations, from patient management in Healthcare to supply chain optimization in Logistics.` },
        { title: "AI & Machine Learning Integration", description: `Harnessing predictive analytics, automation, and data-driven insights to solve the most pressing challenges in the ${industry.title} industry.` },
        { title: "Legacy System Modernization", description: "We help you migrate from outdated systems to scalable, secure, and efficient cloud-based infrastructures." },
        { title: "Compliance & Security", description: `Our solutions are built with ${industry.title}-specific regulatory standards in mind, ensuring data integrity and security.` }
    ];

    return (
        <>
            <section className="w-full py-20 md:py-28 lg:py-36 bg-secondary/50 relative">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="px-8 md:px-12 z-10 relative">
                    <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
                        <FadeIn className="space-y-6">
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
                            <p className="max-w-2xl text-foreground/80 md:text-xl">
                                {industry.description} We deliver tailored technology solutions that address the unique challenges and opportunities within the {industry.title.toLowerCase()} sector, driving innovation and digital transformation.
                            </p>
                        </FadeIn>
                         <FadeIn>
                            <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover border-2 border-primary/20 glow-effect bg-secondary/50 p-4">
                                {industry.illustration}
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
            
             <section className="w-full py-16 md:py-24">
                <div className="px-8 md:px-12">
                    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                        <FadeIn className="space-y-6">
                            <h2 className="text-4xl font-headline font-bold">Common Challenges in {industry.title}</h2>
                            <p className="text-foreground/80 text-lg">
                                The {industry.title} sector is constantly evolving, facing unique pressures from technological disruption, regulatory shifts, and changing consumer expectations. We understand these complexities and build solutions to overcome them.
                            </p>
                            <ul className="space-y-4 text-foreground/80 pt-4">
                                {industryChallenges.map((challenge, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <CheckCircle2 className="text-primary h-6 w-6 mt-1 flex-shrink-0"/>
                                        <span>{challenge}</span>
                                    </li>
                                ))}
                            </ul>
                        </FadeIn>
                        <div className="space-y-8">
                           {ourSolutions.map((solution, i) => (
                                <FadeIn key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                                    <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
                                        <CardHeader>
                                            <CardTitle className="font-headline text-2xl">{solution.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">{solution.description}</p>
                                        </CardContent>
                                    </Card>
                                </FadeIn>
                           ))}
                        </div>
                    </div>
                </div>
            </section>

            {relatedProjects.length > 0 && (
                <section id="portfolio" className="w-full py-16 md:py-24 bg-secondary/20">
                    <div className="px-8 md:px-12">
                        <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                        <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">Related Case Studies</h2>
                            <p className="max-w-3xl mx-auto text-foreground/80 md:text-xl/relaxed">
                                See our expertise in the {industry.title} industry in action. Explore how we've solved real-world problems for clients like you.
                            </p>
                        </FadeIn>
                        <div className="mx-auto grid gap-8 md:grid-cols-2 lg:gap-10 max-w-6xl">
                            {relatedProjects.map((project, i) => (
                            <FadeIn key={project.slug} style={{ animationDelay: `${i * 0.1}s` }}>
                                <Link href={`/portfolio/${project.slug}`} className="group">
                                    <Card className="overflow-hidden h-full flex flex-col bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/50 transition-all duration-300 glow-effect">
                                        <div className="aspect-video w-full object-cover bg-secondary/50 p-4">
                                            {project.illustration}
                                        </div>
                                        <CardHeader>
                                        <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="flex-grow">
                                        <p className="text-sm text-foreground/80">{project.excerpt}</p>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>
            )}

             <section className="w-full py-20 md:py-28">
                <div className="px-8 md:px-12 text-center">
                   <FadeIn className="space-y-6 max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border-primary/10 rounded-lg p-10 glow-effect">
                     <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">Ready to Innovate in the {industry.title} Sector?</h2>
                     <p className="text-foreground/80 md:text-lg">
                       Let's discuss how our tailored technology solutions can help you achieve your business goals and set a new standard in your industry. Contact us today for a strategic consultation with our {industry.title} experts.
                     </p>
                      <div className="pt-4">
                        <Button asChild size="lg" className="text-lg px-8 py-6">
                           <Link href="/contact">Contact Our Experts</Link>
                        </Button>
                      </div>
                  </FadeIn>
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
