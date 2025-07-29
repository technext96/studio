import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { industries } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description: "Discover how our technology solutions drive innovation and success across a wide range of industries, from Fintech to Healthcare.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="px-4 md:px-6 text-center z-10 relative">
          <div className="space-y-2 animate-fade-in-up">
            <h1 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-primary">Industries We Serve</h1>
            <p className="max-w-[600px] mx-auto text-foreground/80 md:text-xl">
              Driving impactful and customized software solutions to meet unique industry challenges.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, i) => (
              <div key={industry.slug} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.05}s` }}>
                <Card className="group hover:shadow-lg transition-shadow duration-300 flex flex-col h-full bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/50">
                   <Image
                      src={industry.imageUrl}
                      data-ai-hint={industry.imageHint}
                      width="600"
                      height="300"
                      alt={industry.title}
                      className="aspect-video w-full object-cover"
                    />
                  <CardHeader className="flex flex-row items-start gap-4">
                    <div className="text-primary mt-1">{industry.icon}</div>
                    <div>
                      <CardTitle className="font-headline text-2xl">{industry.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                     <p className="text-foreground/80">{industry.description}</p>
                  </CardContent>
                  <CardFooter>
                     <Button asChild variant="link" className="p-0 h-auto text-primary">
                       <Link href={`/industries/${industry.slug}`}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                       </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
