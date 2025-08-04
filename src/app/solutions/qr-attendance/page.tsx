
'use client';

import { useEffect, useRef, useState } from 'react';
import jsQR from 'jsqr';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle2, QrCode, Video, XCircle } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';
import { Metadata } from 'next';
import Link from 'next/link';

// Since this is a client component, we can't export metadata directly.
// This would be done in a parent layout or page if this were a separate page.
// For now, we'll assume this component is part of a page that handles its own metadata.

const QrScanner = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scannedData, setScannedData] = useState<string | null>(null);
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const getCameraPermission = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setHasCameraPermission(true);
      } catch (error) {
        console.error('Error accessing camera:', error);
        setHasCameraPermission(false);
        toast({
          variant: 'destructive',
          title: 'Camera Access Denied',
          description: 'Please enable camera permissions in your browser settings.',
        });
      }
    };

    getCameraPermission();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [toast]);

  useEffect(() => {
    if (!hasCameraPermission || scannedData) return;

    const tick = () => {
      if (videoRef.current && videoRef.current.readyState === videoRef.current.HAVE_ENOUGH_DATA) {
        const canvas = canvasRef.current;
        const video = videoRef.current;
        if (canvas && video) {
          const ctx = canvas.getContext('2d');
          if (ctx) {
            canvas.height = video.videoHeight;
            canvas.width = video.videoWidth;
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const code = jsQR(imageData.data, imageData.width, imageData.height, {
              inversionAttempts: 'dontInvert',
            });
            if (code) {
              setScannedData(code.data);
              toast({
                title: 'QR Code Scanned!',
                description: `Data: ${code.data}`,
              });
            }
          }
        }
      }
      requestAnimationFrame(tick);
    };

    const animationFrameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hasCameraPermission, scannedData, toast]);

  const handleReset = () => {
    setScannedData(null);
  };

  return (
    <Card className="w-full max-w-lg mx-auto bg-card/50 backdrop-blur-sm border-primary/20 glow-effect">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline"><QrCode /> Live QR Scanner Demo</CardTitle>
        <CardDescription>Point your camera at a QR code to see it in action.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative aspect-square w-full bg-secondary rounded-md overflow-hidden">
          <video ref={videoRef} className="w-full h-full object-cover" autoPlay muted playsInline />
          <canvas ref={canvasRef} className="hidden" />
          {hasCameraPermission === false && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 text-white p-4">
              <XCircle className="w-12 h-12 text-destructive mb-4" />
              <h3 className="text-xl font-bold">Camera Access Denied</h3>
              <p className="text-center">Please allow camera access in your browser to use the scanner.</p>
            </div>
          )}
          {scannedData && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 text-white p-4 animate-fade-in-up">
              <CheckCircle2 className="w-16 h-16 text-primary mb-4" />
              <h3 className="text-2xl font-bold">Scan Successful!</h3>
              <p className="mt-2 text-center font-mono bg-background text-foreground p-2 rounded-md break-all">{scannedData}</p>
              <Button onClick={handleReset} className="mt-6">Scan Another</Button>
            </div>
          )}
           {!scannedData && hasCameraPermission && (
             <div className="absolute inset-0 border-4 border-dashed border-primary/50 rounded-md animate-pulse">
                <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-primary rounded-tl-md"></div>
                <div className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-primary rounded-tr-md"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 border-primary rounded-bl-md"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-primary rounded-br-md"></div>
             </div>
           )}
        </div>
      </CardContent>
    </Card>
  );
};


export default function QRAttendancePage() {
    return (
        <>
            <section className="w-full pt-24 md:pt-36 lg:pt-40 bg-secondary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="px-8 md:px-12 z-10 relative">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <FadeIn className="space-y-6 text-center lg:text-left">
                            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
                                QR Attendance System
                            </h1>
                            <p className="max-w-xl mx-auto lg:mx-0 text-foreground/80 md:text-xl">
                                Launch a modern, reliable QR-based attendance solution for your school, event, or business. Our white-label platform is ready to be deployed under your brand.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                                <Button size="lg" className="text-lg px-8 py-6 as-child">
                                    <Link href="#demo">
                                        <QrCode className="mr-2 h-5 w-5"/>
                                        Try the Demo
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" className="text-lg px-8 py-6 as-child">
                                     <Link href="#pricing">
                                        View Pricing
                                    </Link>
                                </Button>
                            </div>
                        </FadeIn>
                        <FadeIn>
                            <QrScanner />
                        </FadeIn>
                    </div>
                </div>
            </section>
            <section id="features" className="w-full py-16 md:py-24">
                <div className="px-8 md:px-12">
                    <FadeIn className="text-center space-y-3 mb-12 max-w-3xl mx-auto">
                        <div className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm text-primary font-semibold">Core Features</div>
                        <h2 className="text-4xl font-headline font-bold">The Complete Attendance Solution</h2>
                        <p className="text-foreground/80 md:text-lg">
                            Our platform includes everything you need to manage attendance efficiently and securely.
                        </p>
                    </FadeIn>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            { title: "Secure QR Code Generation", description: "Generate unique, time-sensitive QR codes for each event, class, or day to prevent misuse." },
                            { title: "Real-Time Dashboard", description: "Monitor attendance live from a central admin panel as users scan in." },
                            { title: "Detailed Reporting", description: "Export attendance data, track absenteeism, and generate insightful reports effortlessly." },
                            { title: "Mobile-First Design", description: "A seamless experience for users scanning on any mobile device, with no app installation required." },
                            { title: "User Management", description: "Easily add, remove, and manage participants, students, or employees." },
                            { title: "Full Branding Customization", description: "Your logo, your colors. We customize the platform to match your brand identity." },
                        ].map((feature, i) => (
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
             <section id="pricing" className="w-full py-16 md:py-24 bg-secondary/20">
                <div className="px-8 md:px-12">
                    <FadeIn className="text-center space-y-3 mb-12 max-w-3xl mx-auto">
                        <h2 className="text-4xl font-headline font-bold">Flexible Pricing for Any Scale</h2>
                        <p className="text-foreground/80 md:text-lg">
                           One-time payment for a lifetime license. Get the full source code and own your solution.
                        </p>
                    </FadeIn>
                    <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
                        <FadeIn>
                             <Card className="bg-card/50 backdrop-blur-sm border-primary/10 h-full flex flex-col">
                                <CardHeader>
                                    <CardTitle className="font-headline text-3xl">Standard Package</CardTitle>
                                    <CardDescription className="text-4xl font-bold text-primary pt-2">$2,499</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow space-y-4">
                                     <p className="text-foreground/80">Perfect for small businesses, schools, or single events.</p>
                                     <ul className="space-y-2">
                                        <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary"/><span>Web App & Admin Panel</span></li>
                                        <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary"/><span>Up to 500 users</span></li>
                                        <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary"/><span>Your Custom Branding</span></li>
                                        <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary"/><span>3 Months of Support</span></li>
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
                                     <div className="flex justify-between items-center">
                                        <CardTitle className="font-headline text-3xl">Enterprise Package</CardTitle>
                                        <div className="bg-primary text-primary-foreground text-xs font-bold py-1 px-3 rounded-full">RECOMMENDED</div>
                                    </div>
                                    <CardDescription className="text-4xl font-bold text-primary pt-2">Contact Us</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow space-y-4">
                                     <p className="text-foreground/80">For large organizations needing custom features and scalability.</p>
                                     <ul className="space-y-2">
                                        <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary"/><span>Everything in Standard, plus:</span></li>
                                        <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary"/><span>Unlimited Users</span></li>
                                        <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary"/><span>Custom Feature Development</span></li>
                                        <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary"/><span>Dedicated Technical Support & SLA</span></li>
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
        </>
    )
}
