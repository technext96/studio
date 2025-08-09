
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { blogPosts, portfolio } from "@/lib/data.tsx";
import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import { illustrationMap } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import { Badge } from "../ui/badge";

export default function PortfolioAndBlogSection() {
    const featuredPortfolio = portfolio.slice(0, 2);
    const featuredBlog = blogPosts.slice(0, 2);

    return (
        <section id="insights" className="w-full py-16 md:py-24 lg:py-32 bg-secondary/20">
            <div className="px-8 md:px-12">
                <FadeIn className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">Insights & Success Stories</h2>
                    <p className="text-foreground/80 md:text-xl">
                        Explore our portfolio of impactful projects and read our latest articles on technology, business, and innovation.
                    </p>
                </FadeIn>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Portfolio Column */}
                    <div className="space-y-8">
                        {featuredPortfolio.map((project, i) => {
                             const Illustration = illustrationMap[project.illustration];
                             const projectUrl = project.slug.startsWith('solutions/')
                                ? `/${project.slug}`
                                : `/portfolio/${project.slug}`;
                             return (
                                <FadeIn key={project.slug} style={{ animationDelay: `${i * 0.1}s` }}>
                                    <Link href={projectUrl} className="group block">
                                        <Card className="overflow-hidden h-full flex flex-col bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/50 transition-all duration-300 glow-effect">
                                            <div className="aspect-video w-full object-cover bg-secondary/50 p-4">
                                                {Illustration && <Illustration />}
                                            </div>
                                            <CardHeader>
                                                <Badge variant="secondary" className="w-fit">{project.category}</Badge>
                                                <CardTitle className="font-headline mt-2">{project.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-sm text-foreground/80">{project.excerpt}</p>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </FadeIn>
                             )
                        })}
                    </div>

                    {/* Blog Column */}
                     <div className="space-y-8">
                        {featuredBlog.map((post, i) => {
                             const Illustration = illustrationMap[post.illustration];
                             return (
                                <FadeIn key={post.slug} style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
                                    <Link href={`/blog/${post.slug}`} className="group block">
                                        <Card className="overflow-hidden h-full flex flex-col bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/50 transition-all duration-300 glow-effect">
                                            <div className="aspect-video w-full object-cover bg-secondary/50 p-4">
                                                {Illustration && <Illustration />}
                                            </div>
                                            <CardHeader>
                                                 <Badge className="w-fit">{post.category}</Badge>
                                                <CardTitle className="font-headline mt-2">{post.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-sm text-foreground/80">{post.excerpt}</p>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </FadeIn>
                             )
                        })}
                    </div>
                </div>

                <FadeIn className="mt-16 text-center">
                    <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
                        <Link href="/blog">Explore All Insights</Link>
                    </Button>
                </FadeIn>
            </div>
        </section>
    );
}
