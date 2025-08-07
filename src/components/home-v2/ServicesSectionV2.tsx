
'use client';

import { services } from "@/lib/data.tsx";
import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import { iconMap } from "@/lib/constants";
import { motion } from 'framer-motion';
import { ArrowRight } from "lucide-react";

export default function ServicesSectionV2() {
    const featuredServices = services.slice(0, 4);

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1], // Expo out ease
            },
        },
    };

    return (
        <section id="services" className="w-full py-16 md:py-24 lg:py-32 bg-background">
            <div className="px-8 md:px-12">
                <FadeIn className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
                    <div className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm text-primary font-bold tracking-widest uppercase">Our Capabilities</div>
                    <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">Full-Spectrum Technology Solutions</h2>
                    <p className="text-foreground/80 md:text-xl">
                        From foundational architecture to advanced AI, we provide the end-to-end engineering expertise required to build and scale world-class digital products.
                    </p>
                </FadeIn>

                <motion.div
                    className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {featuredServices.map((service) => {
                        const Icon = iconMap[service.icon];
                        return (
                            <motion.div
                                key={service.slug}
                                variants={cardVariants}
                                className="h-full"
                            >
                                <motion.div
                                    className="relative block h-full overflow-hidden rounded-xl border border-border bg-card/50 p-8 shadow-sm transition-all duration-300"
                                    whileHover={{ y: -8, boxShadow: '0 10px 30px -10px hsl(var(--primary) / 0.2)' }}
                                >
                                    <div className="mb-6 text-primary">{Icon && <Icon className="w-12 h-12" />}</div>
                                    <h3 className="font-headline text-xl font-bold">{service.title}</h3>
                                    <p className="mt-3 text-sm text-muted-foreground flex-grow">{service.description}</p>
                                    <Link href={`/services/${service.slug}`} className="mt-6 text-sm font-bold text-primary inline-flex items-center group">
                                        Explore <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </Link>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
