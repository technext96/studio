
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FadeIn } from '@/components/ui/fade-in';
import { CheckCircle2, Bot, Users, BarChart, Sparkles, SlidersHorizontal, ArrowRight, Mail } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "CampiX.AI | Autonomous AI Ad Campaigns",
    description: "Launch, manage, and optimize ad campaigns across Facebook, Google & TikTok with zero marketing knowledge. Let our AI be your marketing department.",
    openGraph: {
        title: "CampiX.AI | Autonomous AI-Powered Ad Campaigns",
        description: "Launch, manage, and optimize ad campaigns across Facebook, Google & TikTok with zero marketing knowledge. Let our AI be your marketing department.",
    },
};

const CampixIllustration = () => (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain">
        <defs>
            <linearGradient id="grad-campix" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: 'hsl(var(--primary))'}} />
                <stop offset="100%" style={{stopColor: 'hsl(var(--secondary))'}} />
            </linearGradient>
            <filter id="glow-campix" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="15" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>
        
        {/* Central Brain/AI core */}
        <g filter="url(#glow-campix)">
            <path d="M256 160c-44 0-80 36-80 80v32c0 44 36 80 80 80s80-36 80-80v-32c0-44-36-80-80-80z" fill="hsl(var(--primary) / 0.2)" />
            <Bot className="text-primary" x="224" y="224" width="64" height="64" strokeWidth="1.5" />
        </g>

        {/* Orbiting Platform Icons */}
        <g fill="hsl(var(--primary))">
            <circle cx="256" cy="128" r="12"><animateTransform attributeName="transform" type="rotate" from="0 256 256" to="360 256 256" dur="10s" repeatCount="indefinite" /></circle>
            <text x="256" y="100" textAnchor="middle" fontSize="14" fill="hsl(var(--foreground))">FB</text>
            
            <circle cx="384" cy="256" r="12"><animateTransform attributeName="transform" type="rotate" from="0 256 256" to="360 256 256" dur="10s" repeatCount="indefinite" begin="-2.5s" /></circle>
            <text x="412" y="260" textAnchor="middle" fontSize="14" fill="hsl(var(--foreground))">GG</text>

            <circle cx="256" cy="384" r="12"><animateTransform attributeName="transform" type="rotate" from="0 256 256" to="360 256 256" dur="10s" repeatCount="indefinite" begin="-5s" /></circle>
            <text x="256" y="412" textAnchor="middle" fontSize="14" fill="hsl(var(--foreground))">TK</text>

            <circle cx="128" cy="256" r="12"><animateTransform attributeName="transform" type="rotate" from="0 256 256" to="360 256 256" dur="10s" repeatCount="indefinite" begin="-7.5s" /></circle>
             <text x="100" y="260" textAnchor="middle" fontSize="14" fill="hsl(var(--foreground))">YT</text>
        </g>
        
        {/* Data lines */}
        <path d="M256 192 V 140" stroke="url(#grad-campix)" strokeWidth="1.5" strokeDasharray="4 4"><animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite"/></path>
        <path d="M320 256 H 372" stroke="url(#grad-campix)" strokeWidth="1.5" strokeDasharray="4 4"><animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" begin="-0.5s"/></path>
        <path d="M256 320 V 372" stroke="url(#grad-campix)" strokeWidth="1.5" strokeDasharray="4 4"><animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" begin="-1s"/></path>
        <path d="M192 256 H 140" stroke="url(#grad-campix)" strokeWidth="1.5" strokeDasharray="4 4"><animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" begin="-1.5s"/></path>
    </svg>
);


export default function CampixSolutionPage() {
    const howItWorks = [
        {
            title: "1. Tell Us Your Goal",
            description: "Start by telling our AI what you want to promote in plain language. For example, 'I want to sell my new running shoes to people in London'."
        },
        {
            title: "2. AI Creates Your Campaign",
            description: "CampiX instantly drafts everything: ad copy, headlines, AI-generated images, and precise audience targeting. You can review, edit, or regenerate anything you like."
        },
        {
            title: "3. Launch & Let AI Manage",
            description: "Once you approve, our AI takes over. It monitors performance 24/7, stops failing ads, scales winning ones, and continuously optimizes to maximize your return on investment."
        }
    ];

    const features = [
        {
            icon: <Bot className="h-8 w-8 text-primary"/>,
            title: "Fully Autonomous Management",
            description: "Our AI handles everything post-launch, from budget allocation to A/B testing creatives, making smarter decisions than humanly possible."
        },
        {
            icon: <Sparkles className="h-8 w-8 text-primary"/>,
            title: "AI Creative Studio",
            description: "Generate high-quality ad images and videos with DALL-E. Get endless variations of compelling ad copy with GPT-4."
        },
         {
            icon: <Users className="h-8 w-8 text-primary"/>,
            title: "Precision Audience Targeting",
            description: "The AI analyzes your goal to define and refine the perfect audience segments based on location, interests, and behavior."
        },
        {
            icon: <BarChart className="h-8 w-8 text-primary"/>,
            title: "Multi-Platform Campaigns",
            description: "Launch and manage campaigns seamlessly across Facebook, Instagram, Google, TikTok, and YouTube from a single dashboard."
        },
        {
            icon: <SlidersHorizontal className="h-8 w-8 text-primary"/>,
            title: "Flexible Control Modes",
            description: "Choose between 'Full Auto' for a hands-off experience or 'Semi-Auto' to approve the AI's suggestions before they go live."
        },
        {
            icon: <CheckCircle2 className="h-8 w-8 text-primary"/>,
            title: "Actionable Insights",
            description: "A clean dashboard shows you the most important KPIs and provides clear, AI-driven recommendations to improve performance."
        }
    ];

    return (
        <>
            <section className="w-full pt-24 md:pt-36 lg:pt-40 bg-secondary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="px-8 md:px-12 z-10 relative">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <FadeIn className="space-y-6 text-center lg:text-left">
                             <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
                                Your Autonomous AI Marketing Department
                            </h1>
                            <p className="max-w-xl mx-auto lg:mx-0 text-foreground/80 md:text-xl">
                                Launch, manage, and scale professional ad campaigns across all major platforms with zero marketing experience. CampiX.AI does the work for you.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                                <Button size="lg" className="text-lg px-8 py-6">
                                    <Link href="#contact">
                                        Request Early Access
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                                     <Link href="#features">
                                        Explore Features
                                    </Link>
                                </Button>
                            </div>
                        </FadeIn>
                        <FadeIn>
                             <div className="mx-auto aspect-square max-w-lg">
                                <CampixIllustration/>
                             </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
            
            <section id="how-it-works" className="w-full py-16 md:py-24">
                <div className="px-8 md:px-12">
                    <FadeIn className="text-center space-y-3 mb-12 max-w-3xl mx-auto">
                        <h2 className="text-4xl font-headline font-bold">Launch a Professional Campaign in 3 Steps</h2>
                         <p className="text-foreground/80 md:text-lg">
                           From a simple idea to a fully optimized, multi-platform ad campaign in minutes.
                        </p>
                    </FadeIn>
                     <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
                        {howItWorks.map((step, i) => (
                             <FadeIn key={step.title} style={{ animationDelay: `${i * 0.1}s` }} className="flex flex-col items-center gap-4">
                                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl font-bold font-headline">{i+1}</div>
                                <h3 className="font-headline text-2xl font-bold">{step.title}</h3>
                                <p className="text-foreground/80">{step.description}</p>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

             <section id="features" className="w-full py-16 md:py-24 bg-secondary/20">
                <div className="px-8 md:px-12">
                    <FadeIn className="text-center space-y-3 mb-12 max-w-3xl mx-auto">
                        <h2 className="text-4xl font-headline font-bold">Powerful AI Features, Simple Interface</h2>
                        <p className="text-foreground/80 md:text-lg">
                            We've packed an entire marketing team's worth of expertise into a single, easy-to-use platform.
                        </p>
                    </FadeIn>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {features.map((feature, i) => (
                             <FadeIn key={feature.title} style={{ animationDelay: `${i * 0.05}s` }}>
                                <Card className="bg-card/50 backdrop-blur-sm border-primary/10 h-full p-6 text-center flex flex-col items-center">
                                    <div className="mb-4">{feature.icon}</div>
                                    <h3 className="font-headline text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-foreground/80 text-sm">{feature.description}</p>
                                </Card>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

             <section id="contact" className="w-full py-20 md:py-28">
                <div className="px-8 md:px-12 text-center">
                   <FadeIn className="space-y-6 max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border-primary/10 rounded-lg p-10 glow-effect">
                     <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">Ready to Automate Your Advertising?</h2>
                     <p className="text-foreground/80 md:text-lg">
                       CampiX.AI is currently in private beta. Join our waitlist to get early access and be the first to experience the future of autonomous marketing.
                     </p>
                      <div className="pt-4">
                        <Button asChild size="lg" className="text-lg px-8 py-6">
                           <Link href="mailto:technext96@gmail.com?subject=CampiX.AI Early Access Request">
                                <Mail className="mr-2 h-5 w-5"/>
                                Join the Waitlist
                            </Link>
                        </Button>
                      </div>
                  </FadeIn>
                </div>
              </section>
        </>
    );
}
