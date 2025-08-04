
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FadeIn } from '@/components/ui/fade-in';
import { CheckCircle2, QrCode, Smartphone, BarChart, ShieldCheck } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
    title: "Proxy-Proof QR Attendance System | Secure Check-ins",
    description: "Our QR attendance system uses device & Wi-Fi verification to prevent buddy punching and ensure secure, error-free check-ins for your staff.",
    openGraph: {
        title: "Proxy-Proof QR Attendance System | Secure Check-ins",
        description: "Say goodbye to buddy punching. Our system uses device & Wi-Fi verification to ensure secure, error-free check-ins.",
    },
};

export default function QRAttendancePage() {

    const features = [
        { 
            icon: <Smartphone className="h-8 w-8 text-primary"/>,
            title: "Mobile-First Design", 
            description: "Access from any smartphone or tablet with our intuitive interface optimized for touchscreens." 
        },
        { 
            icon: <BarChart className="h-8 w-8 text-primary"/>,
            title: "Real-Time Tracking", 
            description: "Get instant attendance updates and smart notifications when someone checks in or out." 
        },
        { 
            icon: <ShieldCheck className="h-8 w-8 text-primary"/>,
            title: "Secure & Reliable", 
            description: "All data is protected with 256-bit encryption, secure cloud storage, and regular backups." 
        },
    ];

    const steps = [
        {
            step: 1,
            title: "Generate QR Codes",
            description: "Create unique, secure QR codes for your events, classes, or workplace in seconds."
        },
        {
            step: 2,
            title: "Attendees Scan In",
            description: "Participants use their phone cameras to quickly scan and register their attendance. No app install needed."
        },
        {
            step: 3,
            title: "Access Real-Time Data",
            description: "View attendance reports, get analytics, and export data instantly from your live dashboard."
        }
    ];

    return (
        <>
            <section className="w-full pt-24 md:pt-36 lg:pt-40 bg-secondary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="px-8 md:px-12 z-10 relative">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <FadeIn className="space-y-6 text-center lg:text-left">
                            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
                                The Proxy-Proof QR Attendance System
                            </h1>
                            <p className="max-w-xl mx-auto lg:mx-0 text-foreground/80 md:text-xl">
                                Say goodbye to buddy punching. Our system uses device & Wi-Fi verification to ensure secure, error-free check-ins.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                                <Button size="lg" className="text-lg px-8 py-6 as-child">
                                     <Link href="https://wa.me/923491089456?text=Hi! I'm interested in the QR Attendance System.">
                                        WhatsApp Us
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" className="text-lg px-8 py-6 as-child">
                                     <Link href="#demo">
                                        Watch Demo
                                    </Link>
                                </Button>
                            </div>
                        </FadeIn>
                        <FadeIn>
                             <div className="mx-auto max-w-xs">
                                <Image
                                    src="https://placehold.co/400x800.png"
                                    data-ai-hint="smartphone screen qrcode"
                                    width={400}
                                    height={800}
                                    alt="A mockup of a smartphone screen showing a QR code for attendance check-in."
                                    className="rounded-2xl border-4 border-primary/20 glow-effect"
                                />
                             </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
            
            <section id="features" className="w-full py-16 md:py-24">
                <div className="px-8 md:px-12">
                    <FadeIn className="text-center space-y-3 mb-12 max-w-3xl mx-auto">
                        <h2 className="text-4xl font-headline font-bold">Powerful Features, Simple to Use</h2>
                        <p className="text-foreground/80 md:text-lg">
                            Designed to streamline your attendance process from start to finish.
                        </p>
                    </FadeIn>
                    <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
                        {features.map((feature, i) => (
                             <FadeIn key={feature.title} style={{ animationDelay: `${i * 0.1}s` }} className="flex flex-col items-center gap-4">
                                {feature.icon}
                                <h3 className="font-headline text-2xl font-bold">{feature.title}</h3>
                                <p className="text-foreground/80">{feature.description}</p>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

             <section id="how-it-works" className="w-full py-16 md:py-24 bg-secondary/20">
                <div className="px-8 md:px-12">
                    <FadeIn className="text-center space-y-3 mb-16 max-w-3xl mx-auto">
                        <h2 className="text-4xl font-headline font-bold">Get Started in 3 Simple Steps</h2>
                    </FadeIn>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 hidden md:block"></div>
                         <div className="absolute top-1/2 left-0 w-full h-0.5 bg-primary -translate-y-1/2 hidden md:block animate-pulse"></div>
                       {steps.map((step, i) => (
                         <FadeIn key={step.step} style={{ animationDelay: `${i * 0.15}s` }} className="relative flex flex-col items-center text-center p-4">
                            <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold border-4 border-background mb-6 z-10">
                                {step.step}
                            </div>
                            <h3 className="font-headline text-2xl font-bold mb-2">{step.title}</h3>
                            <p className="text-foreground/80">{step.description}</p>
                         </FadeIn>
                       ))}
                    </div>
                </div>
            </section>
            
             <section id="demo" className="w-full py-16 md:py-24">
                <div className="px-8 md:px-12">
                     <FadeIn className="text-center space-y-3 mb-12 max-w-3xl mx-auto">
                        <h2 className="text-4xl font-headline font-bold">Watch a Quick Demo</h2>
                        <p className="text-foreground/80 md:text-lg">
                           See how our secure QR attendance system works in this short video walkthrough.
                        </p>
                    </FadeIn>
                    <FadeIn>
                        <div className="max-w-4xl mx-auto aspect-video rounded-xl border-2 border-primary/20 glow-effect bg-secondary/50 flex items-center justify-center">
                             <Image 
                                src="https://placehold.co/1280x720.png"
                                data-ai-hint="app dashboard interface"
                                alt="Video placeholder for QR attendance system demo"
                                width={1280}
                                height={720}
                                className="rounded-lg"
                             />
                        </div>
                    </FadeIn>
                </div>
            </section>

             <section className="w-full py-20 md:py-28">
                <div className="px-8 md:px-12 text-center">
                   <FadeIn className="space-y-6 max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border-primary/10 rounded-lg p-10 glow-effect">
                     <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">Ready to Secure Your Attendance?</h2>
                     <p className="text-foreground/80 md:text-lg">
                       Contact us today for a live demo and a custom quote to fit your organization's needs. Let's make buddy punching a thing of the past.
                     </p>
                      <div className="pt-4">
                        <Button asChild size="lg" className="text-lg px-8 py-6">
                           <Link href="/contact">Get a Quote</Link>
                        </Button>
                      </div>
                  </FadeIn>
                </div>
              </section>
        </>
    )
}
