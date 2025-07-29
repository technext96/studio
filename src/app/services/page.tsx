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
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Our Services</h1>
            <p className="max-w-[600px] mx-auto text-foreground/80 md:text-xl">
              Comprehensive solutions to build, scale, and innovate your digital presence.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {services.map((service) => (
              <Card key={service.slug} className="group hover:shadow-lg transition-shadow duration-300 flex flex-col bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/50">
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="text-primary mt-1">{service.icon}</div>
                  <div>
                    <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                    <CardDescription className="mt-2">{service.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardFooter className="mt-auto">
                   <Button asChild variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                       <Link href={`/services/${service.slug}`}>
                        Explore Service <ArrowRight className="ml-2 h-4 w-4" />
                       </Link>
                    </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
