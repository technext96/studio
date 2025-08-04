
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";

export default function CtaSection() {
    return (
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
    );
}
