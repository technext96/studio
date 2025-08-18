
import { Button } from '@/components/ui/button';
import { valuePropositions } from '@/lib/constants';
import { CheckCircle2, Eye, Gem, Target, Users } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '@/components/ui/fade-in';

const siteUrl = 'https://technext96.com';
const pageUrl = `${siteUrl}/about`;

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about TechNext's mission, vision, and the values that drive our commitment to innovation and client success in software development.",
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: 'About Us | TechNext',
        description: "Learn about TechNext's mission, vision, and values.",
        url: pageUrl,
    },
};

const TeamIllustration = () => (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: 'hsl(var(--primary))', stopOpacity:1}} />
          <stop offset="100%" style={{stopColor: 'hsl(var(--secondary))', stopOpacity:1}} />
        </linearGradient>
      </defs>
      <g fill="none" stroke="hsl(var(--primary) / 0.2)">
        <circle cx="256" cy="256" r="200" strokeWidth="1" />
        <circle cx="256" cy="256" r="150" strokeWidth="1" />
      </g>
      <g fill="hsl(var(--primary))">
        <circle cx="256" cy="106" r="30">
          <animateTransform attributeName="transform" type="rotate" from="0 256 256" to="360 256 256" dur="20s" repeatCount="indefinite"/>
        </circle>
        <circle cx="156" cy="206" r="20">
          <animateTransform attributeName="transform" type="rotate" from="0 256 256" to="360 256 256" dur="18s" repeatCount="indefinite" begin="-2s"/>
        </circle>
        <circle cx="356" cy="206" r="20">
           <animateTransform attributeName="transform" type="rotate" from="0 256 256" to="360 256 256" dur="18s" repeatCount="indefinite" begin="-2s"/>
        </circle>
        <circle cx="186" cy="356" r="25">
           <animateTransform attributeName="transform" type="rotate" from="0 256 256" to="360 256 256" dur="22s" repeatCount="indefinite" begin="-4s"/>
        </circle>
        <circle cx="326" cy="356" r="25">
            <animateTransform attributeName="transform" type="rotate" from="0 256 256" to="360 256 256" dur="22s" repeatCount="indefinite" begin="-4s"/>
        </circle>
      </g>
      <g stroke="hsl(var(--primary) / 0.5)" strokeWidth="0.5">
        <path d="M 256 136 L 166 196" />
        <path d="M 256 136 L 346 196" />
        <path d="M 156 226 L 196 331" />
        <path d="M 356 226 L 316 331" />
      </g>
    </svg>
);

export default function AboutPage() {
    return (
        <>
            <section className="w-full py-20 md:py-28 lg:py-36 bg-secondary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="px-8 md:px-12 text-center z-10 relative">
                    <FadeIn className="space-y-4">
                        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-6xl text-primary">We’re More Than a Team, We’re Architects of the Future</h1>
                        <p className="max-w-3xl mx-auto text-foreground/80 md:text-xl">
                            We are a passionate collective of thinkers, creators, and problem-solvers dedicated to crafting reliable and scalable software solutions.
                        </p>
                    </FadeIn>
                </div>
            </section>

            <section className="w-full py-16 md:py-24">
                <div className="px-8 md:px-12">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <FadeIn className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="bg-primary/10 text-primary p-4 rounded-full flex-shrink-0"><Eye className="h-7 w-7" /></div>
                                <div>
                                    <h2 className="text-3xl font-headline font-bold">Our Vision</h2>
                                    <p className="text-foreground/80 mt-3">To be a globally recognized leader in technology innovation, empowering businesses to thrive in the digital age through intelligent and impactful solutions.</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-6">
                                <div className="bg-primary/10 text-primary p-4 rounded-full flex-shrink-0"><Target className="h-7 w-7" /></div>
                                <div>
                                    <h2 className="text-3xl font-headline font-bold">Our Mission</h2>
                                    <p className="text-foreground/80 mt-3">Our mission is to build enduring partnerships by delivering superior quality software and strategic insights, fostering a culture of collaboration and excellence.</p>
                                </div>
                            </div>
                        </FadeIn>
                        <FadeIn>
                            <div className="rounded-lg glow-effect mx-auto aspect-square w-full max-w-md p-4">
                               <TeamIllustration/>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

             <section className="w-full py-16 md:py-24 bg-secondary/20">
                <div className="px-8 md:px-12">
                     <FadeIn className="text-center space-y-3 mb-16">
                         <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">Our Core Values</h2>
                         <p className="max-w-3xl mx-auto text-foreground/80 md:text-lg">These are the fundamental principles that guide every decision we make, every line of code we write, and every relationship we build.</p>
                    </FadeIn>
                    <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
                        <FadeIn className="space-y-4">
                            <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                <Gem className="h-9 w-9"/>
                            </div>
                            <h3 className="font-headline text-2xl font-bold">Innovation</h3>
                            <p className="text-foreground/80">We are driven by a relentless curiosity to explore emerging technologies and find creative, cutting-edge solutions to complex problems.</p>
                        </FadeIn>
                         <FadeIn className="space-y-4" style={{animationDelay: '0.1s'}}>
                            <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                <CheckCircle2 className="h-9 w-9"/>
                            </div>
                            <h3 className="font-headline text-2xl font-bold">Integrity</h3>
                            <p className="text-foreground/80">We operate with unwavering transparency and honesty. Trust is the foundation of our relationships, and we build it with our clients and team members.</p>
                        </FadeIn>
                         <FadeIn className="space-y-4" style={{animationDelay: '0.2s'}}>
                            <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center">
                               <Users className="h-9 w-9"/>
                            </div>
                            <h3 className="font-headline text-2xl font-bold">Collaboration</h3>
                            <p className="text-foreground/80">We believe that the most brilliant results are born from teamwork. We combine diverse perspectives and expertise to achieve common goals.</p>
                        </FadeIn>
                    </div>
                </div>
            </section>
            
            <section className="w-full py-20 md:py-28">
                <div className="px-8 md:px-12 text-center">
                   <FadeIn className="space-y-6">
                     <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">Join Our Team of Innovators</h2>
                     <p className="text-foreground/80 md:text-lg">
                       We are always searching for passionate, talented, and driven individuals to join our growing family. If you are ready to make an impact on the future of technology, we invite you to explore our open positions.
                     </p>
                     <div className="pt-4">
                         <Button asChild size="lg" className="text-lg px-8 py-6">
                           <Link href="/careers">View Open Careers</Link>
                         </Button>
                     </div>
                  </FadeIn>
                </div>
              </section>
        </>
    );
}
