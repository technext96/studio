import { Button } from '@/components/ui/button';
import { valuePropositions } from '@/lib/constants';
import { CheckCircle2, Eye, Gem, Target, Users } from 'lucide-react';
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
                <div className="px-4 md:px-6 text-center z-10 relative">
                    <div className="space-y-2 animate-fade-in-up">
                        <h1 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-primary">We’re More Than a Team, We’re Architects of the Future</h1>
                        <p className="max-w-[600px] mx-auto text-foreground/80 md:text-xl">
                            We are a passionate collective of thinkers, creators, and problem-solvers dedicated to crafting reliable and scalable solutions that ensure your long-term success.
                        </p>
                    </div>
                </div>
            </section>

            <section className="w-full py-12 md:py-24">
                <div className="px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 text-primary p-3 rounded-full"><Eye className="h-6 w-6" /></div>
                                <div>
                                    <h2 className="text-2xl font-headline font-bold">Our Vision</h2>
                                    <p className="text-foreground/80 mt-2">To be a globally recognized leader in technology innovation, empowering businesses of all sizes to thrive in the digital age. We aim to transform complex challenges into elegant, impactful, and intelligent solutions that redefine industries.</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-4">
                                <div className="bg-primary/10 text-primary p-3 rounded-full"><Target className="h-6 w-6" /></div>
                                <div>
                                    <h2 className="text-2xl font-headline font-bold">Our Mission</h2>
                                    <p className="text-foreground/80 mt-2">Our mission is to build enduring partnerships with our clients by consistently delivering superior quality software and strategic insights. We are committed to fostering a culture of collaboration, continuous learning, and technological excellence to drive success through strategic and sustainable technology implementation.</p>
                                </div>
                            </div>
                        </div>
                        <Image
                            src="https://placehold.co/600x400.png"
                            data-ai-hint="team collaboration futuristic"
                            width={600}
                            height={400}
                            alt="Our Team Collaborating"
                            className="rounded-lg glow-effect mx-auto"
                        />
                    </div>
                </div>
            </section>

             <section className="w-full py-12 md:py-24 bg-secondary/20">
                <div className="px-4 md:px-6">
                     <div className="text-center space-y-2 mb-12">
                         <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Our Core Values</h2>
                         <p className="max-w-[700px] mx-auto text-foreground/80 md:text-lg">These are the fundamental principles that guide every decision we make, every line of code we write, and every relationship we build.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="space-y-3">
                            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                <Gem className="h-8 w-8"/>
                            </div>
                            <h3 className="font-headline text-xl font-bold">Innovation</h3>
                            <p className="text-foreground/80">We are driven by a relentless curiosity to explore emerging technologies and find creative, cutting-edge solutions to complex problems. We embrace change as an opportunity for growth.</p>
                        </div>
                         <div className="space-y-3">
                            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                <CheckCircle2 className="h-8 w-8"/>
                            </div>
                            <h3 className="font-headline text-xl font-bold">Integrity</h3>
                            <p className="text-foreground/80">We operate with unwavering transparency and honesty. Trust is the foundation of our relationships, and we build it with our clients and team members through every interaction.</p>
                        </div>
                         <div className="space-y-3">
                            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center">
                               <Users className="h-8 w-8"/>
                            </div>
                            <h3 className="font-headline text-xl font-bold">Collaboration</h3>
                            <p className="text-foreground/80">We believe that the most brilliant results are born from teamwork. By combining our diverse perspectives and expertise, we unite to achieve common goals and deliver exceptional value.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="w-full py-12 md:py-24">
                <div className="px-4 md:px-6 text-center">
                   <div className="space-y-4 max-w-3xl mx-auto">
                     <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Join Our Team of Innovators</h2>
                     <p className="text-foreground/80 md:text-lg">
                       We are always searching for passionate, talented, and driven individuals to join our growing family. If you're ready to make an impact and help shape the future of technology, explore our open positions and find your place at Code Harbor.
                     </p>
                     <Button asChild size="lg">
                       <Link href="/careers">View Open Careers</Link>
                     </Button>
                  </div>
                </div>
              </section>
        </>
    );
}
