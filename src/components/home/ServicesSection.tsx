
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";

export default function ServicesSection() {
    return (
        <section id="services" className="w-full py-16 md:py-24 lg:py-32 bg-background">
            <div className="px-8 md:px-12">
                <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-3">
                        <div className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm text-primary font-semibold">Our Services</div>
                        <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">What We Do Best</h2>
                        <p className="max-w-3xl text-foreground/80 md:text-xl/relaxed">
                            We offer a comprehensive suite of services to cover all your digital needs, ensuring seamless integration and exceptional performance. From intelligent automation to custom software, our expert teams deliver measurable results.
                        </p>
                    </div>
                </FadeIn>
                <div className="mx-auto grid items-start gap-8 sm:grid-cols-2 md:gap-10 lg:grid-cols-3 mt-16">
                    {services.slice(0, 6).map((service, i) => (
                        <FadeIn key={service.slug} style={{ animationDelay: `${i * 0.1}s` }}>
                            <Card className="group bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/50 transition-all duration-300 glow-effect h-full flex flex-col">
                                <CardHeader>
                                    <div className="mb-4 text-primary">{service.icon}</div>
                                    <CardTitle className="font-headline">{service.title}</CardTitle>
                                    <CardDescription>{service.description}</CardDescription>
                                </CardHeader>
                                <CardFooter className="mt-auto">
                                    <Button asChild variant="link" className="p-0 h-auto text-primary font-semibold">
                                        <Link href={`/services/${service.slug}`}>
                                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
