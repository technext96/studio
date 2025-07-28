import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { services, portfolio, valuePropositions, blogPosts } from "@/lib/constants";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container px-4 md:px-6 z-10 relative">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 animate-fade-in-up">
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
                  Engineering Tomorrow
                </h1>
                <p className="max-w-[600px] text-foreground/80 md:text-xl">
                  Code Harbor crafts futuristic software solutions that power growth, innovation, and efficiency. From sleek web apps to robust enterprise systems, we bring your vision to life with cutting-edge technology.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect">
                    <Link href="/contact">Get a Free Quote</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="glow-effect">
                    <Link href="/portfolio">Our Work</Link>
                  </Button>
                </div>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                 <Image
                    src="https://placehold.co/600x400.png"
                    data-ai-hint="abstract technology"
                    width="600"
                    height="400"
                    alt="Hero"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full border-2 border-primary/20 glow-effect"
                  />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm text-primary font-semibold">Our Services</div>
                <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">What We Do Best</h2>
                <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a comprehensive suite of services to cover all your digital needs, ensuring seamless integration and exceptional performance.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 mt-12">
              {services.map((service, i) => (
                <div key={service.slug} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s`}}>
                  <Card className="group bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/50 transition-all duration-300 glow-effect h-full flex flex-col">
                    <CardHeader>
                      <div className="mb-4 text-primary">{service.icon}</div>
                      <CardTitle className="font-headline">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="mt-auto">
                      <Button asChild variant="link" className="p-0 h-auto text-primary">
                         <Link href={`/services/${service.slug}`}>
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

        {/* Portfolio Section */}
        <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
               <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm text-primary font-semibold">Our Portfolio</div>
                <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Success Stories</h2>
                <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're proud of the solutions we've delivered. Explore some of our recent projects that have made a real impact.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 mt-12">
              {portfolio.slice(0, 3).map((project, i) => (
                 <Link href={`/portfolio/${project.slug}`} key={project.slug} className="group animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s`}}>
                  <Card className="overflow-hidden h-full flex flex-col bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/50 transition-all duration-300 glow-effect">
                    <Image
                      src={project.imageUrl}
                      data-ai-hint={project.imageHint}
                      width="600"
                      height="400"
                      alt={project.title}
                      className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <CardHeader>
                      <CardTitle className="font-headline">{project.title}</CardTitle>
                      <CardDescription>{project.category}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-foreground/80">{project.excerpt}</p>
                    </CardContent>
                  </Card>
                 </Link>
              ))}
            </div>
             <div className="mt-12 text-center">
              <Button asChild size="lg" variant="outline" className="glow-effect">
                <Link href="/portfolio">View All Projects</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm text-primary font-semibold">Our Commitment</div>
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">Your Partner in Innovation</h2>
              <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're more than just developers; we're strategic partners dedicated to your success. Our process is built on collaboration, transparency, and a relentless pursuit of quality.
              </p>
              <ul className="grid gap-4">
                {valuePropositions.map((prop, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <h3 className="font-semibold">{prop.title}</h3>
                      <p className="text-foreground/80">{prop.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
             <Image
                src="https://placehold.co/600x600.png"
                data-ai-hint="team collaboration futuristic"
                width="600"
                height="600"
                alt="Why Choose Us"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover border-2 border-primary/20 glow-effect"
              />
          </div>
        </section>


        {/* Blog Section */}
        <section id="blog" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm text-primary font-semibold">Our Blog</div>
                <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">From Our Labs</h2>
                <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed">
                  Insights, tutorials, and thoughts on the future of technology.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 mt-12">
              {blogPosts.slice(0, 3).map((post, i) => (
                <Link href={`/blog/${post.slug}`} key={post.slug} className="group animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s`}}>
                  <Card className="overflow-hidden h-full flex flex-col bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/50 transition-all duration-300 glow-effect">
                    <Image
                      src={post.imageUrl}
                      data-ai-hint={post.imageHint}
                      width="600"
                      height="400"
                      alt={post.title}
                      className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <CardHeader>
                      <p className="text-sm text-primary font-semibold">{post.category}</p>
                      <CardTitle className="font-headline">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-foreground/80">{post.excerpt}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild size="lg" variant="outline" className="glow-effect">
                <Link href="/blog">Read More</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32">
            <div className="container px-4 md:px-6">
                <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-secondary/50 p-8 md:p-12 shadow-[0_0_40px_-15px_hsl(var(--primary)/0.3)]">
                    <div className="absolute -top-1/2 -right-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,hsl(var(--primary)/0.1),transparent_70%)] -z-10 animate-pulse"></div>
                    <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                             <h2 className="text-3xl font-headline font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">
                                Ready to Build the Future?
                              </h2>
                              <p className="max-w-xl text-foreground/80 md:text-xl">
                                Let's discuss how we can help you achieve your goals. Contact us today for a no-obligation consultation.
                              </p>
                        </div>
                        <div className="flex justify-center md:justify-end">
                              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto glow-effect text-lg px-8 py-6">
                                 <Link href="/contact">Contact Us</Link>
                               </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      </main>
    </div>
  );
}
