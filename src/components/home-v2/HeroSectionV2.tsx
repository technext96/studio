
'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from 'framer-motion';
import { ArrowRight } from "lucide-react";

const HeroIllustration = () => {
    return (
        <div className="w-full h-full relative">
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
                <defs>
                    <filter id="glow-hero-v3" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="15" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <radialGradient id="grad-glow-v3" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="grad-ring" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--primary) / 0.8)" />
                        <stop offset="100%" stopColor="hsl(var(--primary) / 0.2)" />
                    </linearGradient>
                </defs>

                {/* Central Core */}
                <motion.circle 
                    cx="256" 
                    cy="256" 
                    r="50" 
                    fill="url(#grad-glow-v3)" 
                    filter="url(#glow-hero-v3)"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <circle cx="256" cy="256" r="30" fill="hsl(var(--primary)/0.2)" stroke="hsl(var(--primary))" strokeWidth="1"/>

                {/* Orbiting Rings */}
                <g transform="translate(256 256)">
                     {/* Ring 1 - Horizontal */}
                    <motion.ellipse
                        rx="180"
                        ry="80"
                        fill="none"
                        stroke="url(#grad-ring)"
                        strokeWidth="1.5"
                        transform="rotate(90)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    />
                    <motion.circle r="6" fill="hsl(var(--primary))">
                        <animateMotion dur="10s" repeatCount="indefinite" path="M0,80 A180,80 0 1,1 0,-80 A180,80 0 1,1 0,80" />
                    </motion.circle>
                    
                    {/* Ring 2 - Vertical */}
                    <motion.ellipse
                        rx="180"
                        ry="80"
                        fill="none"
                        stroke="url(#grad-ring)"
                        strokeWidth="1.5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    />
                     <motion.circle r="6" fill="hsl(var(--primary))">
                        <animateMotion dur="8s" repeatCount="indefinite" path="M180,0 A180,80 0 1,1 -180,0 A180,80 0 1,1 180,0" />
                    </motion.circle>

                     {/* Ring 3 - Diagonal */}
                     <motion.ellipse
                        rx="180"
                        ry="80"
                        fill="none"
                        stroke="url(#grad-ring)"
                        strokeWidth="1.5"
                        transform="rotate(45)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    />
                </g>
            </svg>
        </div>
    );
};

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
            <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10"></div>
            <div className="px-8 md:px-12 z-20 relative">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    <motion.div
                        className="flex flex-col justify-center space-y-6 text-center lg:text-left"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h1
                            className="font-headline text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl"
                            variants={itemVariants}
                        >
                            <span className="text-primary">Engineering</span>
                            <span className="text-foreground"> a Competitive </span>
                            <span className="text-foreground">Advantage</span>
                        </motion.h1>
                        <motion.p
                            className="max-w-2xl mx-auto lg:mx-0 text-foreground/80 md:text-xl"
                            variants={itemVariants}
                        >
                            We are an elite team of software architects and AI specialists. We don't just build applications—we engineer powerful, scalable solutions that become your greatest competitive asset.
                        </motion.p>
                        <motion.div
                            className="flex flex-col gap-4 min-[400px]:flex-row justify-center lg:justify-start pt-4"
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
                        className="mx-auto aspect-square max-w-lg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        <HeroIllustration />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
