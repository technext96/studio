import { Button } from '@/components/ui/button';
import { valuePropositions } from '@/lib/constants';
import { CheckCircle2, Eye, Gem, Target } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about Code Harbor's mission, vision, and the values that drive our commitment to innovation and client success.",
};

export default function AboutPage() {
    return (
        <>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="container px-4 md:px-6 text-center z-10 relative">
                    <div className="space-y-2 animate-fade-in-up">
                        <h1 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-primary">We’re More Than a Team, We’re a Family</h1>
                        <p className="max-w-[600px] mx-auto text-foreground/80 md:text-xl">
                            Expertly crafting reliable, scalable solutions focused on your long-term success.
                        </p>
                    </div>
                </div>
            </section>

            <section className="w-full py-12 md:py-24">
                <div className="container px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 text-primary p-3 rounded-full"><Eye className="h-6 w-6" /></div>
                                <div>
                                    <h2 className="text-2xl font-headline font-bold">Our Vision</h2>
                                    <p className="text-foreground/80 mt-2">To be a globally recognized leader in technology innovation, empowering businesses to thrive in the digital age by transforming complex challenges into elegant, impactful solutions.</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-4">
                                <div className="bg-primary/10 text-primary p-3 rounded-full"><Target className="h-6 w-6" /></div>
                                <div>
                                    <h2 className="text-2xl font-headline font-bold">Our Mission</h2>
                                    <p className="text-foreground/80 mt-2">To build enduring partnerships with our clients by consistently delivering superior quality software, fostering a culture of collaboration and continuous learning, and driving success through strategic technology implementation.</p>
                                </div>
                            </div>
                        </div>
                        <Image
                            src="https://placehold.co/600x400.png"
                            data-ai-hint="team collaboration futuristic"
                            width={600}
                            height={400}
                            alt="Our Team"
                            className="rounded-lg glow-effect mx-auto"
                        />
                    </div>
                </div>
            </section>

             <section className="w-full py-12 md:py-24 bg-secondary/20">
                <div className="container px-4 md:px-6">
                     <div className="text-center space-y-2 mb-12">
                         <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Our Core Values</h2>
                         <p className="max-w-[700px] mx-auto text-foreground/80 md:text-lg">The principles that guide every decision we make.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="space-y-3">
                            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                <Gem className="h-8 w-8"/>
                            </div>
                            <h3 className="font-headline text-xl font-bold">Innovation</h3>
                            <p className="text-foreground/80">We are driven by a relentless curiosity to explore new technologies and find creative solutions to complex problems.</p>
                        </div>
                         <div className="space-y-3">
                            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                <CheckCircle2 className="h-8 w-8"/>
                            </div>
                            <h3 className="font-headline text-xl font-bold">Integrity</h3>
                            <p className="text-foreground/80">We operate with transparency and honesty, building trust with our clients and team members through every interaction.</p>
                        </div>
                         <div className="space-y-3">
                            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center">
                               <Users className="h-8 w-8"/>
                            </div>
                            <h3 className="font-headline text-xl font-bold">Collaboration</h3>
                            <p className="text-foreground/80">We believe the best results come from working together, combining diverse perspectives to achieve a common goal.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="w-full py-12 md:py-24">
                <div className="container px-4 md:px-6 text-center">
                   <div className="space-y-4 max-w-3xl mx-auto">
                     <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Join Our Team</h2>
                     <p className="text-foreground/80 md:text-lg">
                       We are always looking for passionate and talented individuals to join our growing family. Explore our open positions and find your place at Code Harbor.
                     </p>
                     <Button asChild size="lg">
                       <Link href="/careers">View Careers</Link>
                     </Button>
                  </div>
                </div>
              </section>
        </>
    );
}
