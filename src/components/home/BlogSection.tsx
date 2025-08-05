
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { blogPosts } from "@/lib/data.tsx";
import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import { illustrationMap } from "@/lib/constants";

export default function BlogSection() {
    return (
        <section id="blog" className="w-full py-16 md:py-24 lg:py-32 bg-secondary/20">
            <div className="px-8 md:px-12">
                <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-3">
                        <div className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm text-primary font-semibold">Our Blog</div>
                        <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">Your Gateway To Tech Intelligence</h2>
                        <p className="max-w-3xl text-foreground/80 md:text-xl/relaxed">
                            Stay ahead of the curve with our expert insights. Access thought leadership, industry trends, and innovation-driven business resources to fuel your growth and knowledge.
                        </p>
                    </div>
                </FadeIn>
                <div className="mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16">
                    {blogPosts.slice(0, 3).map((post, i) => {
                        const Illustration = illustrationMap[post.illustration];
                        return (
                        <FadeIn key={post.slug} style={{ animationDelay: `${i * 0.1}s` }}>
                            <Link href={`/blog/${post.slug}`} className="group">
                                <Card className="overflow-hidden h-full flex flex-col bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/50 transition-all duration-300 glow-effect">
                                    <div className="aspect-video w-full object-cover bg-secondary/50 p-4">
                                        {Illustration && <Illustration />}
                                    </div>
                                    <CardHeader>
                                        <p className="text-sm text-primary font-semibold">{post.category}</p>
                                        <CardTitle className="font-headline">{post.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <p className="text-sm text-foreground/80">{post.excerpt}</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        </FadeIn>
                    )})}
                </div>
                <FadeIn className="mt-16 text-center">
                    <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
                        <Link href="/blog">Read More</Link>
                    </Button>
                </FadeIn>
            </div>
        </section>
    );
}
