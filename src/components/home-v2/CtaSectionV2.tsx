
'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function CtaSectionV2() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className="w-full py-20 md:py-32 bg-background">
            <div className="px-8 md:px-12">
                <motion.div
                    className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-card to-secondary/50 p-8 md:p-16 shadow-lg border border-primary/20"
                    initial="hidden"
                    whileInView="visible"
                    variants={containerVariants}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                    <motion.div
                        className="absolute -top-1/4 -right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,hsl(var(--primary)/0.15),transparent_60%)] -z-10"
                        animate={{
                            transform: ["rotate(0deg)", "rotate(360deg)"],
                        }}
                        transition={{
                            duration: 30,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    ></motion.div>
                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        <motion.h2
                            className="text-4xl font-headline font-bold tracking-tight text-primary sm:text-5xl"
                            variants={itemVariants}
                        >
                            Ready to Build Your Competitive Edge?
                        </motion.h2>
                        <motion.p
                            className="mt-6 text-foreground/80 md:text-xl"
                            variants={itemVariants}
                        >
                            Your vision requires a world-class engineering partner. Let's have a strategic conversation about your goals and how our technology solutions can drive your success.
                        </motion.p>
                        <motion.div
                            variants={itemVariants}
                            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <Button asChild size="lg" className="text-lg px-8 py-7 w-full sm:w-auto">
                                <Link href="/contact">
                                    Schedule a Consultation <ArrowRight className="ml-2" />
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="ghost" className="text-lg px-8 py-7 w-full sm:w-auto">
                                <Link href="mailto:technext96@gmail.com">
                                    <Mail className="mr-2" /> Email Our Team
                                </Link>
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
