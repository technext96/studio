
'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from 'framer-motion';
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const HeroIllustration = () => {
    return (
        <div className="absolute inset-0 w-full h-full object-cover z-0 opacity-20">
            <svg viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(var(--primary) / 0.5)" />
                        <stop offset="100%" stopColor="hsl(var(--primary) / 0)" />
                    </linearGradient>
                     <filter id="glow-hero" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="15" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>

                {/* Grid lines */}
                <g stroke="hsl(var(--primary) / 0.1)">
                    {[...Array(20)].map((_, i) => (
                        <path key={`h-${i}`} d={`M0 ${i * 25} H1440`} strokeWidth="0.5" />
                    ))}
                    {[...Array(40)].map((_, i) => (
                        <path key={`v-${i}`} d={`M${i * 40} 0 V500`} strokeWidth="0.5" />
                    ))}
                </g>
                
                {/* Central radiating lines */}
                <g transform="translate(720, 250)">
                    {[...Array(36)].map((_, i) => (
                         <motion.path
                            key={i}
                            d="M0 0 L 1000 0"
                            stroke="url(#grad1)"
                            strokeWidth="1"
                            transform={`rotate(${i * 10})`}
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1, delay: i * 0.05, ease: "easeOut" }}
                        />
                    ))}
                </g>
                
                <motion.circle 
                    cx="720" 
                    cy="250" 
                    r="80" 
                    fill="hsl(var(--primary)/0.1)" 
                    filter="url(#glow-hero)"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
            </svg>
        </div>
    );
};

const featuredLogos = [
    { name: "Tech Journal", svg: <svg viewBox="0 0 120 40" height="24"><text x="0" y="28" fontFamily="var(--font-space-grotesk)" fontSize="24" fontWeight="bold" fill="currentColor">Tech Journal</text></svg> },
    { name: "Innovate AI", svg: <svg viewBox="0 0 120 40" height="24"><text x="0" y="28" fontFamily="var(--font-space-grotesk)" fontSize="24" fontWeight="bold" fill="currentColor">INNOVATE</text></svg> },
    { name: "FutureAI", svg: <svg viewBox="0 0 120 40" height="24"><text x="0" y="28" fontFamily="var(--font-space-grotesk)" fontSize="24" fontWeight="bold" fill="currentColor">FutureAI</text></svg> },
    { name: "QuantumPost", svg: <svg viewBox="0 0 130 40" height="24"><text x="0" y="28" fontFamily="var(--font-space-grotesk)" fontSize="24" fontWeight="bold" fill="currentColor">QuantumPost</text></svg> },
    { name: "Digital Weekly", svg: <svg viewBox="0 0 140 40" height="24"><text x="0" y="28" fontFamily="var(--font-space-grotesk)" fontSize="24" fontWeight="bold" fill="currentColor">Digital Weekly</text></svg> },
];


export default function HeroSectionV2() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1], // Expo out ease
            }
        },
    };

    return (
        <section className="w-full pt-28 md:pt-40 lg:pt-48 pb-16 md:pb-24 lg:pb-32 relative overflow-hidden">
            <HeroIllustration />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10"></div>
            <div className="px-8 md:px-12 z-20 relative">
                <motion.div
                    className="flex flex-col items-center justify-center space-y-6 text-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        className="font-headline text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl max-w-4xl"
                        variants={itemVariants}
                    >
                        <span className="text-primary">Engineering</span>
                        <span className="text-foreground"> a Competitive </span> 
                        <span className="text-foreground">Advantage</span>
                    </motion.h1>
                    <motion.p
                        className="max-w-2xl text-foreground/80 md:text-xl"
                        variants={itemVariants}
                    >
                        We are an elite team of software architects and AI specialists. We don't just build applications—we engineer powerful, scalable solutions that become your greatest competitive asset.
                    </motion.p>
                    <motion.div
                        className="flex flex-col gap-4 min-[400px]:flex-row justify-center pt-4"
                        variants={itemVariants}
                    >
                        <Button asChild size="lg" className="text-lg px-8 py-7">
                            <Link href="/contact">
                                Start a Project <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="text-lg px-8 py-7">
                            <Link href="/services">Explore Services</Link>
                        </Button>
                    </motion.div>
                </motion.div>
                
                <motion.div 
                    className="mt-24"
                    variants={itemVariants}
                >
                    <p className="text-center text-sm font-semibold text-foreground/60 tracking-wider uppercase">
                        Featured In
                    </p>
                    <div className="mt-6 flex justify-center items-center gap-8 md:gap-12 flex-wrap">
                        {featuredLogos.map((logo, index) => (
                             <motion.div
                                key={logo.name}
                                title={logo.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                className="opacity-50 hover:opacity-100 transition-opacity"
                             >
                                {logo.svg}
                             </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
