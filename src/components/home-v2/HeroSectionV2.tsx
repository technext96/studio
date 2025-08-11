
'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from 'framer-motion';
import { ArrowRight } from "lucide-react";

const HeroIllustration = () => {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { type: 'spring', stiffness: 100, damping: 10 } 
        },
    };

    return (
        <motion.div 
            className="w-full h-full relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
                <defs>
                    <filter id="glow-hero-v2" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="15" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                    <radialGradient id="grad-glow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3"/>
                        <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0"/>
                    </radialGradient>
                </defs>

                <motion.circle cx="256" cy="256" r="250" fill="url(#grad-glow)" />

                {/* Animated grid lines */}
                {[...Array(12)].map((_, i) => (
                    <motion.path
                        key={`line-a-${i}`}
                        d={`M256 6 L256 506`}
                        transform={`rotate(${i * 15} 256 256)`}
                        stroke="hsl(var(--primary))"
                        strokeWidth="0.5"
                        opacity="0.2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                    />
                ))}
            </svg>

            {/* Central Cube */}
            <motion.div
                className="absolute w-24 h-24 top-1/2 left-1/2"
                style={{ transform: 'translate(-50%, -50%)', transformStyle: 'preserve-3d' }}
                animate={{ rotateX: [0, 360], rotateY: [0, 360], rotateZ: [0, 360] }}
                transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            >
                <div className="absolute w-24 h-24 border border-primary bg-primary/10" style={{ transform: 'rotateY(0deg) translateZ(48px)' }}></div>
                <div className="absolute w-24 h-24 border border-primary bg-primary/10" style={{ transform: 'rotateY(90deg) translateZ(48px)' }}></div>
                <div className="absolute w-24 h-24 border border-primary bg-primary/10" style={{ transform: 'rotateY(180deg) translateZ(48px)' }}></div>
                <div className="absolute w-24 h-24 border border-primary bg-primary/10" style={{ transform: 'rotateY(-90deg) translateZ(48px)' }}></div>
                <div className="absolute w-24 h-24 border border-primary bg-primary/10" style={{ transform: 'rotateX(90deg) translateZ(48px)' }}></div>
                <div className="absolute w-24 h-24 border border-primary bg-primary/10" style={{ transform: 'rotateX(-90deg) translateZ(48px)' }}></div>
            </motion.div>
        </motion.div>
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
