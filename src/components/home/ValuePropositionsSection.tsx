
import { valuePropositions } from "@/lib/constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function ValuePropositionsSection() {
    const internalLinks = [
        { href: "/services/custom-software", text: "Custom Software Development" },
        { href: "/services/ai-ml", text: "AI and Machine Learning" },
        { href: "/services/offshore-development", text: "Offshore Development" },
    ];
    
    return (
        <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary/20">
            <div className="px-8 md:px-12">
                <div className="grid lg:grid-cols-3 gap-8">
                    {valuePropositions.map((vp, index) => (
                        <FadeIn key={vp.title} style={{ animationDelay: `${index * 0.1}s` }}>
                            <Card className="bg-card/50 backdrop-blur-sm border-primary/10 h-full text-center">
                                <CardHeader>
                                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                                        <vp.icon className="w-8 h-8"/>
                                    </div>
                                    <CardTitle className="font-headline text-2xl">{vp.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-foreground/80">{vp.description}</p>
                                    {internalLinks[index] && (
                                        <Button asChild variant="link" className="mt-4 text-primary font-semibold">
                                           <Link href={internalLinks[index].href}>
                                                Explore {internalLinks[index].text} <ArrowRight className="ml-2 h-4 w-4" />
                                           </Link>
                                        </Button>
                                    )}
                                </CardContent>
                            </Card>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
