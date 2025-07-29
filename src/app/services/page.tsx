import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Discover our range of expert services, including web development, mobile app creation, cloud solutions, and AI integration. We provide the tools you need to succeed.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="w-full py-20 md:py-28 lg:py-36 bg-secondary/20">
        <div className="px-8 md:px-12">
          <div className="text-center space-y-4 max-w-4xl mx-auto">
            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-6xl">Our Suite of Services</h1>
            <p className="max-w-3xl mx-auto text-foreground/80 md:text-xl">
              We provide comprehensive, end-to-end technology solutions designed to help you build, scale, and innovate your digital presence. Explore how our expertise across a wide range of services can empower your business to reach its full potential.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24">
        <div className="px-8 md:px-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
            {services.map((service, i) => (
              <div key={service.slug} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.05}s`}}>
                  <Card className="group hover:shadow-lg transition-shadow duration-300 flex flex-col h-full bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/50">
                    <CardHeader className="flex flex-row items-start gap-6">
                      <div className="text-primary mt-1 flex-shrink-0">{service.icon}</div>
                      <div>
                        <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                        <CardDescription className="mt-2 text-base">{service.description}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardFooter className="mt-auto pl-[4.5rem]">
                       <Button asChild variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                           <Link href={`/services/${service.slug}`}>
                            Explore Service <ArrowRight className="ml-2 h-4 w-4" />
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
