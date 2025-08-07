
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { FadeIn } from '@/components/ui/fade-in';
import { CheckCircle2, Users, Building, GraduationCap, ArrowRight, Video, Mail, MessageSquare } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';

export const metadata: Metadata = {
    title: "White-Label Carpooling App | Launch in 48 Hours",
    description: "Build your own carpooling app with our white-label solution. Includes app, admin panel & full customization.",
    openGraph: {
        title: "White-Label Carpooling App",
        description: "Launch your carpooling business with a ready-made, scalable white-label solution.",
        url: "https://technext96.com/solutions/carpooling-app",
        images: [
            {
                url: '/images/carpool.jpg', // Assuming you will add this image to your /public/images folder
                width: 1200,
                height: 630,
                alt: 'White-Label Carpooling App Solution',
            },
        ],
    },
    alternates: {
        canonical: '/solutions/carpooling-app',
    },
};

const CarpoolingHeroIllustration = () => (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain">
        <defs>
            <linearGradient id="grad-car" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: 'hsl(var(--primary))', stopOpacity:1}} />
                <stop offset="100%" style={{stopColor: 'hsl(var(--secondary))', stopOpacity:1}} />
            </linearGradient>
        </defs>
        {/* Road */}
        <path d="M 50 400 Q 256 300, 462 400" fill="none" stroke="hsl(var(--border))" strokeWidth="8" strokeDasharray="20 15" />

        {/* Car */}
        <g>
            <path d="M 100 380 L 120 340 L 200 340 L 220 380 Z" fill="hsl(var(--primary))" />
            <rect x="110" y="380" width="100" height="20" rx="5" fill="hsl(var(--secondary))" />
            <circle cx="130" cy="400" r="12" fill="hsl(var(--foreground))" />
            <circle cx="190" cy="400" r="12" fill="hsl(var(--foreground))" />
            <animateTransform 
                attributeName="transform"
                type="translate"
                values="0,0; 50,-15; 100,-25; 150,-30; 200,-25; 250,-15; 300,0; 250,0; 200,0; 150,0; 100,0; 50,0; 0,0"
                dur="10s"
                repeatCount="indefinite" />
        </g>

        {/* Map pins */}
        <g fill="hsl(var(--primary) / 0.7)">
            <path d="M 150 150 C 150 120, 200 120, 200 150 C 200 180, 175 220, 175 220 C 175 220, 150 180, 150 150 Z">
                <animate attributeName="opacity" values="0;1;1;0" dur="5s" repeatCount="indefinite" begin="0s" />
            </path>
            <circle cx="175" cy="150" r="10" />
        </g>
        <g fill="hsl(var(--primary) / 0.7)">
            <path d="M 350 180 C 350 150, 400 150, 400 180 C 400 210, 375 250, 375 250 C 375 250, 350 210, 350 180 Z">
                 <animate attributeName="opacity" values="0;1;1;0" dur="5s" repeatCount="indefinite" begin="2.5s" />
            </path>
            <circle cx="375" cy="180" r="10" />
        </g>
        
        {/* Connection line */}
        <path d="M 175 160 C 250 80, 300 250, 375 190" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" strokeDasharray="5 5">
             <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1.5s" repeatCount="indefinite" />
        </path>
    </svg>
);


export default function CarpoolingSolutionPage() {
    const features = [
        {
            title: "Custom Branding",
            description: "Your logo, your colors, your app. We handle the rebranding to match your identity."
        },
        {
            title: "Full Admin Panel",
            description: "Manage users, rides, payments, and settings from a powerful web-based dashboard."
        },
        {
            title: "React Native Mobile App",
            description: "A cross-platform app for iOS and Android, built with Expo for fast updates."
        },
        {
            title: "Intelligent Ride Matching",
            description: "Our core logic connects drivers and riders based on route, schedule, and preferences."
        },
         {
            title: "Secure Payments",
            description: "Integrated with Stripe for reliable and secure in-app transactions between users."
        },
        {
            title: "Full Source Code",
            description: "You get the complete source code, giving you total ownership and control to extend the app."
        }
    ];

    const targetAudience = [
        {
            icon: <Users className="h-8 w-8 text-primary" />,
            title: "Entrepreneurs",
            description: "Launch a carpooling startup in your city or niche market without the technical overhead."
        },
        {
            icon: <Building className="h-8 w-8 text-primary" />,
            title: "Companies",
            description: "Offer a sustainable and cost-effective commuting solution for your employees."
        },
        {
            icon: <GraduationCap className="h-8 w-8 text-primary" />,
            title: "Colleges & NGOs",
            description: "Provide a safe, community-focused ride-sharing platform for students or members."
        }
    ];

     const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "White-Label Carpooling App",
        "description": "A complete white-label carpooling app with mobile apps and admin panel.",
        "brand": {
            "@type": "Organization",
            "name": "TechNext"
        },
        "url": "https://technext96.com/solutions/carpooling-app"
    };

    return (
        <>
            <Script
                id="product-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
            <section className="w-full pt-24 md:pt-36 lg:pt-40 bg-secondary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="px-8 md:px-12 z-10 relative">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <FadeIn className="space-y-6 text-center lg:text-left">
                            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
                                Your White-Label Carpooling App Solution
                            </h1>
                            <p className="max-w-xl mx-auto lg:mx-0 text-foreground/80 md:text-xl">
                                Your ready-made carpool startup in a box. Get a fully-functional, white-label carpooling solution with mobile apps and an admin panel, and launch under your brand in weeks.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                                <Button size="lg" className="text-lg px-8 py-6">
                                    <Link href="#demo">
                                        <Video className="mr-2 h-5 w-5"/>
                                        Watch Demo
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                                     <Link href="#pricing">
                                        See Pricing
                                    </Link>
                                </Button>
                            </div>
                        </FadeIn>
                        <FadeIn>
                             <div className="mx-auto aspect-square max-w-lg">
                                <CarpoolingHeroIllustration/>
                             </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
            
            <section id="features" className="w-full py-16 md:py-24">
                <div className="px-8 md:px-12">
                    <FadeIn className="text-center space-y-3 mb-12 max-w-3xl mx-auto">
                        <div className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm text-primary font-semibold">What You Get</div>
                        <h2 className="text-4xl font-headline font-bold">A Complete Carpool App Solution</h2>
                        <p className="text-foreground/80 md:text-lg">
                            We provide everything you need to operate a successful carpooling service. This isn't just software; it's a full business opportunity for your rideshare carpool startup.
                        </p>
                    </FadeIn>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {features.map((feature, i) => (
                             <FadeIn key={feature.title} style={{ animationDelay: `${i * 0.05}s` }}>
                                <Card className="bg-card/50 backdrop-blur-sm border-primary/10 h-full">
                                    <CardHeader>
                                        <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-foreground/80">{feature.description}</p>
                                    </CardContent>
                                </Card>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            <section id="audience" className="w-full py-16 md:py-24 bg-secondary/20">
                <div className="px-8 md:px-12">
                    <FadeIn className="text-center space-y-3 mb-12 max-w-3xl mx-auto">
                        <h2 className="text-4xl font-headline font-bold">Who Is This Custom Carpool Mobile App For?</h2>
                        <p className="text-foreground/80 md:text-lg">
                            Our white-label solution is perfect for visionaries who want to tap into the mobility market without building from scratch.
                        </p>
                    </FadeIn>
                     <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto text-center">
                        {targetAudience.map((audience, i) => (
                             <FadeIn key={audience.title} style={{ animationDelay: `${i * 0.1}s` }} className="flex flex-col items-center gap-4">
                                {audience.icon}
                                <h3 className="font-headline text-2xl font-bold">{audience.title}</h3>
                                <p className="text-foreground/80">{audience.description}</p>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

             <section id="demo" className="w-full py-16 md:py-24">
                <div className="px-8 md:px-12">
                     <FadeIn className="text-center space-y-3 mb-12 max-w-3xl mx-auto">
                        <h2 className="text-4xl font-headline font-bold">See It In Action</h2>
                        <p className="text-foreground/80 md:text-lg">
                           Watch our 2-minute video walkthrough to see how the app and admin panel work together to create a seamless carpooling experience.
                        </p>
                    </FadeIn>
                    <FadeIn>
                        <div className="max-w-4xl mx-auto aspect-video rounded-xl border-2 border-primary/20 glow-effect bg-secondary/50 flex items-center justify-center">
                             <Image 
                                src="https://placehold.co/1280x720.png"
                                data-ai-hint="app interface map"
                                alt="Video placeholder for carpooling app demo"
                                width={1280}
                                height={720}
                                className="rounded-lg"
                             />
                        </div>
                    </FadeIn>
                </div>
            </section>

             <section id="pricing" className="w-full py-16 md:py-24 bg-secondary/20">
                <div className="px-8 md:px-12">
                    <FadeIn className="text-center space-y-3 mb-12 max-w-3xl mx-auto">
                        <h2 className="text-4xl font-headline font-bold">Simple, Transparent Pricing</h2>
                        <p className="text-foreground/80 md:text-lg">
                           Choose the plan that's right for you. One-time payment, lifetime license, full ownership.
                        </p>
                    </FadeIn>
                    <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
                        <FadeIn>
                             <Card className="bg-card/50 backdrop-blur-sm border-primary/10 h-full flex flex-col">
                                <CardHeader>
                                    <CardTitle className="font-headline text-3xl">Standard Package</CardTitle>
                                    <CardDescription className="text-4xl font-bold text-primary pt-2">$4,999</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow space-y-4">
                                     <p className="text-foreground/80">Get the complete, ready-to-launch solution. We'll handle the setup and branding.</p>
                                     <ul className="space-y-2">
                                        <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary"/><span>Mobile App & Admin Panel</span></li>
                                        <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary"/><span>Your Custom Branding</span></li>
                                        <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary"/><span>Deployment to App Stores</span></li>
                                        <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary"/><span>3 Months of Support</span></li>
                                     </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button asChild className="w-full text-lg py-6"><Link href="/contact?plan=standard">Get Started</Link></Button>
                                </CardFooter>
                             </Card>
                        </FadeIn>
                        <FadeIn style={{ animationDelay: `0.1s` }}>
                             <Card className="bg-card/80 backdrop-blur-sm border-primary/50 h-full flex flex-col ring-2 ring-primary shadow-[0_0_20px_theme(colors.primary/0.5)]">
                                <CardHeader>
                                     <div className="flex justify-between items-center">
                                        <CardTitle className="font-headline text-3xl">Enterprise Package</CardTitle>
                                        <div className="bg-primary text-primary-foreground text-xs font-bold py-1 px-3 rounded-full">POPULAR</div>
                                    </div>
                                    <CardDescription className="text-4xl font-bold text-primary pt-2">Contact Us</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow space-y-4">
                                     <p className="text-foreground/80">For businesses needing custom features, integrations, or dedicated support.</p>
                                     <ul className="space-y-2">
                                        <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary"/><span>Everything in Standard, plus:</span></li>
                                        <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary"/><span>Custom Feature Development</span></li>
                                        <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary"/><span>API Integrations (e.g., Maps, SMS)</span></li>
                                        <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary"/><span>Dedicated Technical Support</span></li>
                                     </ul>
                                </CardContent>
                                <CardFooter>
                                     <Button asChild className="w-full text-lg py-6"><Link href="/contact?plan=enterprise">Request a Quote</Link></Button>
                                </CardFooter>
                             </Card>
                        </FadeIn>
                    </div>
                     <FadeIn className="text-center mt-12">
                        <p className="text-foreground/80">Looking for a full ride-hailing app instead? Check out our <Link href="/blog/white-label-rideshare-app" className="text-primary underline hover:no-underline">white-label ride-sharing app</Link> solution.</p>
                    </FadeIn>
                </div>
            </section>
            
            <section className="w-full py-20 md:py-28">
                <div className="px-8 md:px-12 text-center">
                   <FadeIn className="space-y-6 max-w-4xl mx-auto">
                     <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">Ready to Launch Your Carpooling Startup?</h2>
                     <p className="text-foreground/80 md:text-lg">
                       You bring the vision, we provide the technology. Let's schedule a live demo to discuss your project and how we can help you get to market fast.
                     </p>
                      <div className="pt-4 flex justify-center items-center gap-4">
                        <Button asChild size="lg" className="text-lg px-8 py-6">
                           <Link href="mailto:technext96@gmail.com?subject=Carpooling App Demo Request">
                                <Mail className="mr-2 h-5 w-5"/>
                                Email Us
                            </Link>
                        </Button>
                         <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
                           <Link href="https://wa.me/923491089456?text=Hi! I'm interested in the carpooling app solution.">
                                <MessageSquare className="mr-2 h-5 w-5"/>
                                Chat on WhatsApp
                            </Link>
                        </Button>
                      </div>
                  </FadeIn>
                </div>
            </section>
        </>
    );
}
