
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import Link from "next/link";

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

export default function HeroSection() {
    return (
        <section className="w-full pt-24 md:pt-36 lg:pt-48 relative overflow-hidden">
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
    );
}
