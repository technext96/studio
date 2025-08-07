
'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from 'framer-motion';
import { ArrowRight } from "lucide-react";

const HeroIllustration = () => {
    const circleVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: (i: number) => ({
            scale: 1,
            opacity: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1], // Expo out ease
            },
        }),
    };

    const lineVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i: number) => ({
            pathLength: 1,
            opacity: 0.3,
            transition: {
                delay: 0.5 + i * 0.15,
                duration: 0.8,
                ease: "easeInOut",
            },
        }),
    };

    return (
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain">
            <defs>
                <filter id="glow-hero-v2" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="15" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            
            <g>
                {[...Array(5)].map((_, i) => (
                     <motion.circle
                        key={`c-${i}`}
                        cx="256"
                        cy="256"
                        r={(i + 1) * 40}
                        stroke="hsl(var(--primary) / 0.1)"
                        strokeWidth="1"
                        fill="none"
                        variants={circleVariants}
                        custom={i}
                     />
                ))}
                
                <motion.circle 
                    cx="256" cy="256" r="30" 
                    fill="hsl(var(--primary))" 
                    filter="url(#glow-hero-v2)"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 120 }}
                />

                {[...Array(8)].map((_, i) => (
                    <motion.line
                        key={`l-${i}`}
                        x1="256" y1="256"
                        x2={256 + 250 * Math.cos(i * Math.PI / 4)}
                        y2={256 + 250 * Math.sin(i * Math.PI / 4)}
                        stroke="hsl(var(--primary))"
                        strokeWidth="1"
                        variants={lineVariants}
                        custom={i}
                    />
                ))}
            </g>
        </svg>
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
                        initial="hidden"
                        animate="visible"
                    >
                        <HeroIllustration />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
