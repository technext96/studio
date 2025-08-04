
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { FadeIn } from '@/components/ui/fade-in';
import { CheckCircle2, QrCode, Smartphone, BarChart, ShieldCheck, Wifi, MapPin, Building, HardHat, GraduationCap, Mail } from 'lucide-react';
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

const QrAttendanceIllustration = () => (
    <svg viewBox="0 0 400 800" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain">
        <defs>
            <linearGradient id="grad-qr-screen" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0.1}} />
                <stop offset="100%" style={{stopColor: 'hsl(var(--secondary))', stopOpacity: 0.2}} />
            </linearGradient>
            <filter id="glow-qr" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="10" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>
        
        {/* Phone Body */}
        <rect x="50" y="100" width="300" height="600" rx="40" fill="hsl(var(--background))" stroke="hsl(var(--border))" strokeWidth="2"/>
        <rect x="65" y="115" width="270" height="570" rx="25" fill="url(#grad-qr-screen)" />
        
        {/* Notch */}
        <rect x="150" y="115" width="100" height="20" rx="10" fill="hsl(var(--background))" />
        
        {/* QR Code */}
        <g transform="translate(125, 275)" filter="url(#glow-qr)">
            <rect width="150" height="150" fill="hsl(var(--primary))" rx="10"/>
            <g fill="hsl(var(--primary-foreground))">
                <rect x="10" y="10" width="40" height="40" rx="5"/>
                <rect x="100" y="10" width="40" height="40" rx="5"/>
                <rect x="10" y="100" width="40" height="40" rx="5"/>
                
                <rect x="25" y="25" width="10" height="10" fill="hsl(var(--primary))"/>
                <rect x="115" y="25" width="10" height="10" fill="hsl(var(--primary))"/>
                <rect x="25" y="115" width="10" height="10" fill="hsl(var(--primary))"/>

                <rect x="60" y="60" width="10" height="10" />
                <rect x="80" y="60" width="10" height="10" />
                <rect x="60" y="80" width="10" height="10" />
                <rect x="80" y="80" width="10" height="10" />
                
                <rect x="100" y="70" width="10" height="10" />
                <rect x="70" y="100" width="10" height="10" />
                <rect x="120" y="90" width="10" height="10" />
                <rect x="90" y="120" width="10" height="10" />
                 <rect x="60" y="130" width="10" height="10" />
            </g>
             <animateTransform 
                attributeName="transform"
                type="scale"
                values="1; 1.05; 1"
                begin="0s"
                dur="4s"
                repeatCount="indefinite"
            />
        </g>
        
        {/* Text on Screen */}
        <text x="200" y="470" textAnchor="middle" fontFamily="var(--font-space-grotesk)" fontSize="24" fill="hsl(var(--foreground))" fontWeight="bold">Scan to Check-In</text>
        <text x="200" y="500" textAnchor="middle" fontFamily="var(--font-inter)" fontSize="16" fill="hsl(var(--muted-foreground))">Point your camera at the QR code</text>
        
         {/* Status Icon */}
        <g transform="translate(170, 540)">
            <circle cx="30" cy="30" r="30" fill="hsl(var(--primary) / 0.8)"/>
            <path d="M 20 30 L 28 38 L 42 22" stroke="hsl(var(--primary-foreground))" strokeWidth="4" fill="none" strokeLinecap="round"/>
             <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite" />
        </g>
    </svg>
);


export default function QRAttendancePage() {

    const features = [
        { 
            icon: <ShieldCheck className="h-8 w-8 text-primary"/>,
            title: "Device Verification", 
            description: "Bind each employee to a single device, making it impossible for them to have a friend check in on their behalf from another phone."
        },
        { 
            icon: <Wifi className="h-8 w-8 text-primary"/>,
            title: "Wi-Fi Validation", 
            description: "Restrict check-ins to your office Wi-Fi network. If they're not on your network, they can't check in."
        },
        { 
            icon: <MapPin className="h-8 w-8 text-primary"/>,
            title: "Geolocation Fencing", 
            description: "Ensure employees are physically at the workplace by setting a GPS-based boundary for allowed check-ins."
        },
        { 
            icon: <Smartphone className="h-8 w-8 text-primary"/>,
            title: "Mobile-First Design", 
            description: "A beautiful, intuitive interface that works flawlessly on any smartphone, tablet, or desktop. No app installation required."
        },
        { 
            icon: <BarChart className="h-8 w-8 text-primary"/>,
            title: "Real-Time Dashboard", 
            description: "Monitor attendance live, track who is in and who is out, and generate detailed reports with just a few clicks."
        },
        { 
            icon: <QrCode className="h-8 w-8 text-primary"/>,
            title: "Dynamic QR Codes", 
            description: "For added security, QR codes can be set to refresh periodically, preventing screenshot abuse."
        },
    ];

    const useCases = [
        {
            icon: <Building className="h-8 w-8 text-primary" />,
            title: "Corporate Offices",
            description: "Track employee and visitor check-ins effortlessly while ensuring only on-site staff can mark their attendance."
        },
        {
            icon: <HardHat className="h-8 w-8 text-primary" />,
            title: "Construction & Field Sites",
            description: "Use geolocation fencing to manage a mobile workforce across multiple job sites accurately."
        },
        {
            icon: <GraduationCap className="h-8 w-8 text-primary" />,
            title: "Schools & Universities",
            description: "Simplify student attendance for classes and events, preventing academic dishonesty with secure check-ins."
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
                                <QrAttendanceIllustration />
                             </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
            
            <section id="features" className="w-full py-16 md:py-24">
                <div className="px-8 md:px-12">
                    <FadeIn className="text-center space-y-3 mb-12 max-w-3xl mx-auto">
                        <div className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm text-primary font-semibold">Security First</div>
                        <h2 className="text-4xl font-headline font-bold">Powerful Features, Simple to Use</h2>
                        <p className="text-foreground/80 md:text-lg">
                            Our system is packed with features designed to eliminate time theft and streamline your attendance process from start to finish.
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

             <section id="use-cases" className="w-full py-16 md:py-24 bg-secondary/20">
                <div className="px-8 md:px-12">
                    <FadeIn className="text-center space-y-3 mb-12 max-w-3xl mx-auto">
                        <h2 className="text-4xl font-headline font-bold">Perfect For Any Workplace</h2>
                        <p className="text-foreground/80 md:text-lg">
                            Our secure attendance solution is flexible enough to fit the unique needs of any organization.
                        </p>
                    </FadeIn>
                     <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto text-center">
                        {useCases.map((useCase, i) => (
                             <FadeIn key={useCase.title} style={{ animationDelay: `${i * 0.1}s` }} className="flex flex-col items-center gap-4">
                                {useCase.icon}
                                <h3 className="font-headline text-2xl font-bold">{useCase.title}</h3>
                                <p className="text-foreground/80">{useCase.description}</p>
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
                        <div className="max-w-4xl mx-auto aspect-video rounded-xl border-2 border-primary/20 glow-effect bg-secondary/50 overflow-hidden">
                             <iframe 
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/scFgfFTyq6Q"
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                            </iframe>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <section id="pricing" className="w-full py-16 md:py-24 bg-secondary/20">
                <div className="px-8 md:px-12">
                    <FadeIn className="text-center space-y-3 mb-12 max-w-3xl mx-auto">
                        <h2 className="text-4xl font-headline font-bold">Get a System That Pays for Itself</h2>
                        <p className="text-foreground/80 md:text-lg">
                           One-time payment for a lifetime license. Stop revenue loss from time theft and get a positive ROI in months.
                        </p>
                    </FadeIn>
                    <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
                        <FadeIn>
                             <Card className="bg-card/50 backdrop-blur-sm border-primary/10 h-full flex flex-col">
                                <CardHeader>
                                    <CardTitle className="font-headline text-3xl">Standard Package</CardTitle>
                                    <CardDescription className="text-4xl font-bold text-primary pt-2">$1,999</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow space-y-4">
                                     <p className="text-foreground/80">The complete, secure solution for up to 100 employees. Deployed and branded for you.</p>
                                     <ul className="space-y-2">
                                        <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary"/><span>Device & Wi-Fi Verification</span></li>
                                        <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary"/><span>Admin Dashboard & Reporting</span></li>
                                        <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary"/><span>Your Custom Branding</span></li>
                                        <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary"/><span>Full Source Code Included</span></li>
                                     </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button asChild className="w-full text-lg py-6"><Link href="/contact?plan=qr-standard">Get Started</Link></Button>
                                </CardFooter>
                             </Card>
                        </FadeIn>
                        <FadeIn style={{ animationDelay: `0.1s` }}>
                             <Card className="bg-card/80 backdrop-blur-sm border-primary/50 h-full flex flex-col ring-2 ring-primary shadow-[0_0_20px_theme(colors.primary/0.5)]">
                                <CardHeader>
                                    <CardTitle className="font-headline text-3xl">Enterprise Package</CardTitle>
                                    <CardDescription className="text-4xl font-bold text-primary pt-2">Contact Us</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow space-y-4">
                                     <p className="text-foreground/80">For larger organizations or those needing custom integrations and features.</p>
                                     <ul className="space-y-2">
                                        <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary"/><span>Everything in Standard, plus:</span></li>
                                        <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary"/><span>Unlimited Employees & Locations</span></li>
                                        <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary"/><span>HRIS/Payroll Integration</span></li>
                                        <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary"/><span>Dedicated Technical Support</span></li>
                                     </ul>
                                </CardContent>
                                <CardFooter>
                                     <Button asChild className="w-full text-lg py-6"><Link href="/contact?plan=qr-enterprise">Request a Quote</Link></Button>
                                </CardFooter>
                             </Card>
                        </FadeIn>
                    </div>
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
                           <Link href="mailto:technext96@gmail.com?subject=QR Attendance Demo Request">
                                <Mail className="mr-2 h-5 w-5"/>
                                Email for a Live Demo
                            </Link>
                        </Button>
                      </div>
                  </FadeIn>
                </div>
              </section>
        </>
    )
}
