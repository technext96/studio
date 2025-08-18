
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/data.tsx";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { iconMap } from "@/lib/constants";

const siteUrl = 'https://technext96.com';
const pageUrl = `${siteUrl}/services`;

export const metadata: Metadata = {
  title: "Our Services",
  description: "Discover our range of expert services, including web development, mobile app creation, cloud solutions, and AI integration. We provide the tools you need to succeed.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
      title: 'Our Services | TechNext',
      description: "Explore our comprehensive technology solutions, from AI/ML to custom software development.",
      url: pageUrl,
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="w-full py-20 md:py-28 lg:py-36 bg-secondary/20">
        <div className="px-8 md:px-12">
          <FadeIn className="text-center space-y-4">
            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-6xl">Our Suite of Services</h1>
            <p className="max-w-3xl mx-auto text-foreground/80 md:text-xl">
              We provide comprehensive, end-to-end technology solutions designed to help you build, scale, and innovate your digital presence. Explore how our expertise across a wide range of services can empower your business to reach its full potential.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="w-full py-16 md:py-24">
        <div className="px-8 md:px-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
              <FadeIn key={service.slug} style={{ animationDelay: `${i * 0.05}s`}}>
                  <Card className="group hover:shadow-lg transition-shadow duration-300 flex flex-col h-full bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/50">
                    <CardHeader className="flex flex-row items-start gap-6">
                      <div className="text-primary mt-1 flex-shrink-0">{Icon && <Icon className="w-10 h-10" />}</div>
                      <div>
                        <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                        <CardDescription className="mt-2 text-base">{service.description}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardFooter className="mt-auto pl-[4.5rem]">
                       <Button asChild>
                           <Link href={`/services/${service.slug}`}>
                            Explore Service <ArrowRight className="ml-2 h-4 w-4" />
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
