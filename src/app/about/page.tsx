import { Button } from '@/components/ui/button';
import { valuePropositions } from '@/lib/constants';
import { CheckCircle2, Eye, Gem, Target, Users } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '@/components/ui/fade-in';

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about Code Harbor's mission, vision, and the values that drive our commitment to innovation and client success.",
    openGraph: {
        title: 'About Us | Code Harbor',
        description: "Learn about Code Harbor's mission, vision, and the values that drive our commitment to innovation and client success.",
    },
};

export default function AboutPage() {
    return (
        <>
            <section className="w-full py-20 md:py-28 lg:py-36 bg-secondary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="px-8 md:px-12 text-center z-10 relative">
                    <FadeIn className="space-y-4">
                        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-6xl text-primary">We’re More Than a Team, We’re Architects of the Future</h1>
                        <p className="max-w-3xl mx-auto text-foreground/80 md:text-xl">
                            We are a passionate collective of thinkers, creators, and problem-solvers dedicated to crafting reliable and scalable software solutions. Our foundation is built on a deep understanding of technology's potential to transform businesses and a commitment to ensuring our clients' long-term success.
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
                                    <p className="text-foreground/80 mt-3">To be a globally recognized leader in technology innovation, empowering businesses of all sizes to thrive in the digital age. We aim to transform complex challenges into elegant, impactful, and intelligent solutions that redefine industries and set new standards for excellence.</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-6">
                                <div className="bg-primary/10 text-primary p-4 rounded-full flex-shrink-0"><Target className="h-7 w-7" /></div>
                                <div>
                                    <h2 className="text-3xl font-headline font-bold">Our Mission</h2>
                                    <p className="text-foreground/80 mt-3">Our mission is to build enduring partnerships with our clients by consistently delivering superior quality software and strategic insights. We are committed to fostering a culture of collaboration, continuous learning, and technological excellence to drive success through strategic and sustainable technology implementation.</p>
                                </div>
                            </div>
                        </FadeIn>
                        <FadeIn>
                            <Image
                                src="https://placehold.co/600x400.png"
                                data-ai-hint="team collaboration futuristic"
                                width={600}
                                height={400}
                                alt="Our Team Collaborating"
                                className="rounded-lg glow-effect mx-auto"
                            />
                        </FadeIn>
                    </div>
                </div>
            </section>

             <section className="w-full py-16 md:py-24 bg-secondary/20">
                <div className="px-8 md:px-12">
                     <FadeIn className="text-center space-y-3 mb-16">
                         <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">Our Core Values</h2>
                         <p className="max-w-3xl mx-auto text-foreground/80 md:text-lg">These are the fundamental principles that guide every decision we make, every line of code we write, and every relationship we build. They are the bedrock of our culture and the blueprint for our success.</p>
                    </FadeIn>
                    <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
                        <FadeIn className="space-y-4">
                            <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                <Gem className="h-9 w-9"/>
                            </div>
                            <h3 className="font-headline text-2xl font-bold">Innovation</h3>
                            <p className="text-foreground/80">We are driven by a relentless curiosity to explore emerging technologies and find creative, cutting-edge solutions to complex problems. We don't just follow trends; we aim to set them, embracing change as an opportunity for growth.</p>
                        </FadeIn>
                         <FadeIn className="space-y-4" style={{animationDelay: '0.1s'}}>
                            <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                <CheckCircle2 className="h-9 w-9"/>
                            </div>
                            <h3 className="font-headline text-2xl font-bold">Integrity</h3>
                            <p className="text-foreground/80">We operate with unwavering transparency and honesty. Trust is the foundation of our relationships, and we build it with our clients and team members through every interaction, ensuring our actions always align with our promises.</p>
                        </FadeIn>
                         <FadeIn className="space-y-4" style={{animationDelay: '0.2s'}}>
                            <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center">
                               <Users className="h-9 w-9"/>
                            </div>
                            <h3 className="font-headline text-2xl font-bold">Collaboration</h3>
                            <p className="text-foreground/80">We believe that the most brilliant results are born from teamwork. By combining our diverse perspectives and expertise, we unite to achieve common goals, delivering exceptional value that is greater than the sum of its parts.</p>
                        </FadeIn>
                    </div>
                </div>
            </section>
            
            <section className="w-full py-20 md:py-28">
                <div className="px-8 md:px-12 text-center">
                   <FadeIn className="space-y-6">
                     <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">Join Our Team of Innovators</h2>
                     <p className="text-foreground/80 md:text-lg">
                       We are always searching for passionate, talented, and driven individuals to join our growing family. If you are a visionary who thrives on challenges and is ready to make a tangible impact on the future of technology, we invite you to explore our open positions and find your place at Code Harbor.
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
