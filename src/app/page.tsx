

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { services, portfolio, industries, blogPosts, homePageFaqs } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Metadata } from "next";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
    title: 'TechNext | Custom Software, AI, & Web Development Solutions',
    description: 'TechNext delivers expert custom software, AI/ML integration, and web development services to power your business growth and innovation. Get your free quote today.',
    openGraph: {
        title: 'TechNext | Custom Software, AI, & Web Development Solutions',
        description: 'We build high-performance, scalable software solutions to turn your ideas into reality.',
    },
};

const HeroIllustration = () => (
    <svg viewBox="0 0 512 341.3" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
        <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: 'hsl(var(--primary))', stopOpacity:1}} />
                <stop offset="100%" style={{stopColor: 'hsl(var(--secondary))', stopOpacity:1}} />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>
        <g fill="none" stroke="url(#grad1)" strokeWidth="1">
            <path d="M256,33.3c-123.2,0-223,99.8-223,223" opacity="0.1"><animate attributeName="opacity" values="0.1;0.5;0.1" dur="5s" repeatCount="indefinite" /></path>
            <path d="M256,83.3c-95.5,0-173,77.5-173,173" opacity="0.2"><animate attributeName="opacity" values="0.2;0.6;0.2" dur="5s" repeatCount="indefinite" /></path>
            <path d="M256,133.3c-67.7,0-123,55.3-123,123" opacity="0.3"><animate attributeName="opacity" values="0.3;0.7;0.3" dur="5s" repeatCount="indefinite" /></path>
            <path d="M256,183.3c-39.8,0-72,32.2-72,72" opacity="0.4"><animate attributeName="opacity" values="0.4;0.8;0.4" dur="5s" repeatCount="indefinite" /></path>
        </g>
        <circle cx="256" cy="256.3" r="30" fill="hsl(var(--primary))" filter="url(#glow)">
            <animateTransform attributeName="transform" type="rotate" from="0 256 256.3" to="360 256 256.3" dur="10s" repeatCount="indefinite" />
        </circle>
        <g stroke="hsl(var(--primary) / 0.5)" strokeWidth="0.5">
            <line x1="100" y1="100" x2="412" y2="241.3">
                <animate attributeName="x1" values="100;150;100" dur="8s" repeatCount="indefinite" />
                <animate attributeName="y1" values="100;120;100" dur="8s" repeatCount="indefinite" />
            </line>
            <line x1="412" y1="100" x2="100" y2="241.3">
                <animate attributeName="x1" values="412;362;412" dur="7s" repeatCount="indefinite" />
                <animate attributeName="y1" values="100;80;100" dur="7s" repeatCount="indefinite" />
            </line>
        </g>
    </svg>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-24 md:py-36 lg:py-48 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>
           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10"></div>
          <div className="px-8 md:px-12 z-20 relative">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              <FadeIn className="flex flex-col justify-center space-y-6">
                <h1 className="font-headline text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl text-primary">
                  Powering Your Growth Through Expert Technology
                </h1>
                <p className="max-w-2xl text-foreground/80 md:text-xl">
                  Delivering real-world solutions that solve challenges and accelerate business growth. TechNext crafts futuristic software solutions that power growth, innovation, and efficiency. We transform complex challenges into high-impact digital products that secure your place in the future.
                </p>
                <div className="flex flex-col gap-4 min-[400px]:flex-row pt-4">
                  <Button asChild size="lg" className="text-lg px-8 py-6">
                    <Link href="/contact">Get a Free Quote</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
                    <Link href="/portfolio">Our Work</Link>
                  </Button>
                </div>
              </FadeIn>
              <FadeIn>
                 <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full border-2 border-primary/20 glow-effect">
                    <HeroIllustration />
                  </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Promo Section */}
        <section className="w-full py-16 md:py-24 bg-secondary/20">
          <div className="px-8 md:px-12">
            <FadeIn>
              <Link href="/contact">
                <Image
                  src="/qr-promo.png"
                  width={1280}
                  height={1280}
                  alt="Free QR Code App Promotion"
                  className="rounded-lg glow-effect mx-auto"
                />
              </Link>
            </FadeIn>
          </div>
        </section>

        {/* Services Section */}
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
              {services.slice(0,6).map((service, i) => (
                <FadeIn key={service.slug} style={{ animationDelay: `${i * 0.1}s`}}>
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
        
        {/* Industries Section */}
        <section id="industries" className="w-full py-16 md:py-24 lg:py-32 bg-secondary/20">
          <div className="px-8 md:px-12">
            <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-3">
                <div className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm text-primary font-semibold">Industries We Serve</div>
                <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">Driving Client Success Through Innovation</h2>
                <p className="max-w-3xl text-foreground/80 md:text-xl/relaxed">
                  Delivering impactful and customized software solutions to meet unique industry challenges. Our deep domain expertise ensures that we speak your language and understand what it takes to succeed.
                </p>
              </div>
            </FadeIn>
            <div className="mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mt-16 text-center">
              {industries.slice(0, 10).map((industry, i) => (
                <FadeIn key={industry.slug} style={{ animationDelay: `${i * 0.05}s`}}>
                  <Link href={`/industries/${industry.slug}`} className="group flex flex-col items-center gap-4">
                      <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                          {industry.icon}
                      </div>
                      <p className="font-semibold text-md transition-colors group-hover:text-primary">{industry.title}</p>
                  </Link>
                </FadeIn>
              ))}
            </div>
            <FadeIn className="mt-16 text-center">
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
                <Link href="/industries">View All Industries</Link>
              </Button>
            </FadeIn>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="w-full py-16 md:py-24 lg:py-32 bg-background">
          <div className="px-8 md:px-12">
            <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
               <div className="space-y-3">
                <div className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm text-primary font-semibold">Our Portfolio</div>
                <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">Success Stories</h2>
                <p className="max-w-3xl text-foreground/80 md:text-xl/relaxed">
                  Explore our portfolio, showcasing successful implementations of advanced technologies. Our work speaks for itself, creating tangible value and transforming businesses for our clients.
                </p>
              </div>
            </FadeIn>
            <div className="mx-auto grid gap-8 md:grid-cols-2 lg:gap-10 mt-16">
              {portfolio.slice(0, 2).map((project, i) => (
                 <FadeIn key={project.slug} style={{ animationDelay: `${i * 0.1}s`}}>
                   <Link href={`/portfolio/${project.slug}`} className="group">
                    <Card className="overflow-hidden h-full flex flex-col bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/50 transition-all duration-300 glow-effect">
                      <div className="aspect-video w-full object-cover bg-secondary/50 p-4">
                        {project.illustration}
                      </div>
                      <CardHeader>
                        <CardDescription>{project.category}</CardDescription>
                        <CardTitle className="font-headline">{project.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-sm text-foreground/80">{project.excerpt}</p>
                      </CardContent>
                    </Card>
                   </Link>
                 </FadeIn>
              ))}
            </div>
             <FadeIn className="mt-16 text-center">
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
                <Link href="/portfolio">View All Projects</Link>
              </Button>
            </FadeIn>
          </div>
        </section>


        {/* Blog Section */}
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
              {blogPosts.slice(0, 3).map((post, i) => (
                <FadeIn key={post.slug} style={{ animationDelay: `${i * 0.1}s`}}>
                  <Link href={`/blog/${post.slug}`} className="group">
                    <Card className="overflow-hidden h-full flex flex-col bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/50 transition-all duration-300 glow-effect">
                      <div className="aspect-video w-full object-cover bg-secondary/50 p-4">
                        {post.illustration}
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
              ))}
            </div>
            <FadeIn className="mt-16 text-center">
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
                <Link href="/blog">Read More</Link>
              </Button>
            </FadeIn>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-background">
            <div className="px-8 md:px-12">
                <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-3">
                        <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
                        <p className="max-w-3xl text-foreground/80 md:text-xl/relaxed">
                            Have questions? We've got answers. Here are some of the most common queries we receive from our clients.
                        </p>
                    </div>
                </FadeIn>
                <FadeIn className="mx-auto mt-12">
                    <Accordion type="single" collapsible className="w-full">
                        {homePageFaqs.map((faq, index) => (
                            <AccordionItem value={`item-${index}`} key={index}>
                                <AccordionTrigger className="text-left text-lg hover:no-underline font-semibold">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-base text-foreground/80">
                                {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </FadeIn>
            </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32">
            <div className="px-8 md:px-12">
                <FadeIn className="relative overflow-hidden rounded-2xl border border-primary/20 bg-secondary/50 p-8 md:p-16 shadow-[0_0_40px_-15px_hsl(var(--primary)/0.3)]">
                    <div className="absolute -top-1/2 -right-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,hsl(var(--primary)/0.1),transparent_70%)] -z-10 animate-pulse"></div>
                    <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                             <h2 className="text-4xl font-headline font-bold tracking-tight text-primary sm:text-5xl">
                                Ready to Build the Future?
                              </h2>
                              <p className="max-w-xl text-foreground/80 md:text-xl">
                                Your vision deserves the best technology partner. Let's discuss how we can help you achieve your goals and turn your ideas into reality. Contact us today for a no-obligation consultation and let's start building together.
                              </p>
                        </div>
                        <div className="flex justify-center md:justify-end">
                              <Button asChild size="lg" className="text-lg px-8 py-6">
                                 <Link href="/contact">Contact Us</Link>
                               </Button>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>

      </main>
    </div>
  );
}
