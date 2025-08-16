
'use client';

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FadeIn } from "@/components/ui/fade-in";
import { portfolio } from "@/lib/data.tsx";
import { illustrationMap } from "@/lib/constants";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

export default function FeaturedProjectsSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const featuredProjects = portfolio.filter(p => [
      'solutions/campix',
      'ai-powered-learning-platform',
      'medical-chatbot',
      'ai-personal-shopper'
  ].includes(p.slug));

  return (
    <section id="work" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="px-8 md:px-12">
        <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm text-primary font-semibold">Our Work</div>
            <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">AI-Powered Solutions</h2>
            <p className="max-w-3xl text-foreground/80 md:text-xl/relaxed">
              We take pride in our work and the value we deliver. Explore a curated selection of our projects that demonstrate our passion for technology.
            </p>
          </div>
        </FadeIn>
        <FadeIn>
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {featuredProjects.map((project, index) => {
                const Illustration = illustrationMap[project.illustration];
                const projectUrl = `/solutions/${project.slug}`;
                return (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                       <Link href={projectUrl} className="group block h-full">
                        <Card className="overflow-hidden h-full flex flex-col bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/50 transition-all duration-300 glow-effect">
                            <div className="aspect-video w-full object-cover bg-secondary/50 p-4">
                                {Illustration && <Illustration />}
                            </div>
                            <CardHeader>
                                <Badge variant="secondary" className="w-fit">{project.category}</Badge>
                                <CardTitle className="font-headline mt-2">{project.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-sm text-foreground/80 line-clamp-3">{project.excerpt}</p>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <div className="text-sm font-bold text-primary inline-flex items-center group">
                                    View Case Study <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </div>
                            </div>
                        </Card>
                       </Link>
                    </div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </FadeIn>
         <FadeIn className="mt-16 text-center">
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
                <Link href="/solutions">Explore All Projects</Link>
            </Button>
        </FadeIn>
      </div>
    </section>
  );
}
