
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { industries } from "@/lib/data.tsx";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";
import { illustrationMap, iconMap } from "@/lib/constants";

const siteUrl = 'https://technext96.com';

export const metadata: Metadata = {
  title: "Industries We Serve",
  description: "Discover how our technology solutions drive innovation and success across a wide range of industries, from Fintech to Healthcare.",
  alternates: {
    canonical: `${siteUrl}/industries`,
  },
  openGraph: {
      title: 'Industries We Serve | TechNext',
      description: "Discover how our technology solutions drive innovation and success across a wide range of industries.",
      url: `${siteUrl}/industries`,
  },
};

export default function IndustriesPage() {
  return (
    <>
      <section className="w-full py-20 md:py-28 lg:py-36 bg-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="px-8 md:px-12 text-center z-10 relative">
          <FadeIn className="space-y-4">
            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-6xl text-primary">Industries We Serve with Distinction</h1>
            <p className="max-w-3xl mx-auto text-foreground/80 md:text-xl">
              We leverage deep industry knowledge to deliver impactful and customized software solutions that meet the unique challenges and regulatory demands of your sector. Our expertise isn't just technical—it's contextual.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="w-full py-16 md:py-24">
        <div className="px-8 md:px-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, i) => {
              const Illustration = illustrationMap[industry.illustration];
              const Icon = iconMap[industry.icon];
              return (
              <FadeIn key={industry.slug} style={{ animationDelay: `${i * 0.05}s` }}>
                <Card className="group hover:shadow-lg transition-shadow duration-300 flex flex-col h-full bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/50">
                   <div className="aspect-video w-full object-cover bg-secondary/50 p-4">
                      {Illustration && <Illustration />}
                    </div>
                  <CardHeader className="flex flex-row items-start gap-4">
                    <div className="text-primary mt-1 flex-shrink-0">{Icon && <Icon className="w-10 h-10" />}</div>
                    <div>
                      <CardTitle className="font-headline text-2xl">{industry.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                     <p className="text-foreground/80">{industry.description}</p>
                  </CardContent>
                  <CardFooter>
                     <Button asChild variant="link" className="p-0 h-auto text-primary font-semibold">
                       <Link href={`/industries/${industry.slug}`}>
                        Explore Solutions <ArrowRight className="ml-2 h-4 w-4" />
                       </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </FadeIn>
            )})}
          </div>
        </div>
      </section>
    </>
  );
}
