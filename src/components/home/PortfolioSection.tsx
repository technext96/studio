
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolio } from "@/lib/data";
import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import { illustrationMap } from "@/lib/constants";

export default function PortfolioSection() {
    return (
        <section id="portfolio" className="w-full py-16 md:py-24 lg:py-32 bg-background">
            <div className="px-8 md:px-12">
                <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-3">
                        <div className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm text-primary font-semibold">Our Portfolio</div>
                        <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">Success Stories</h2>
                        <p className="max-w-3xl text-foreground/80 md:text-xl/relaxed">
                            Explore our portfolio, showcasing successful implementations of advanced technologies. Our work speaks for itself, creating tangible value and transforming businesses for our clients.
                        </p>
                    </div>
                </FadeIn>
                <div className="mx-auto grid gap-8 md:grid-cols-2 lg:gap-10 mt-16">
                    {portfolio.slice(0, 2).map((project, i) => {
                        const Illustration = illustrationMap[project.illustration];
                        return (
                        <FadeIn key={project.slug} style={{ animationDelay: `${i * 0.1}s` }}>
                            <Link href={`/portfolio/${project.slug}`} className="group">
                                <Card className="overflow-hidden h-full flex flex-col bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/50 transition-all duration-300 glow-effect">
                                    <div className="aspect-video w-full object-cover bg-secondary/50 p-4">
                                        {Illustration && <Illustration />}
                                    </div>
                                    <CardHeader>
                                        <CardDescription>{project.category}</CardDescription>
                                        <CardTitle className="font-headline">{project.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <p className="text-sm text-foreground/80">{project.excerpt}</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        </FadeIn>
                    )})}
                </div>
                <FadeIn className="mt-16 text-center">
                    <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
                        <Link href="/portfolio">View All Projects</Link>
                    </Button>
                </FadeIn>
            </div>
        </section>
    );
}
