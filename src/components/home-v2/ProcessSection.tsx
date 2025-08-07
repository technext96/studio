
'use client';

import { motion } from 'framer-motion';
import { Lightbulb, PencilRuler, Code, Rocket, Repeat } from 'lucide-react';
import { FadeIn } from '../ui/fade-in';

const processSteps = [
    {
        icon: Lightbulb,
        title: "1. Discovery & Strategy",
        description: "We dive deep into your business goals, market landscape, and technical requirements to build a comprehensive project blueprint."
    },
    {
        icon: PencilRuler,
        title: "2. Architecture & Design",
        description: "Our architects design a scalable, secure, and future-proof system while our UI/UX experts craft an intuitive and engaging user experience."
    },
    {
        icon: Code,
        title: "3. Agile Development",
        description: "Working in iterative sprints, we build and test your application, providing regular demos and incorporating your feedback at every stage."
    },
    {
        icon: Rocket,
        title: "4. Deployment & Launch",
        description: "We handle the entire deployment process, ensuring a seamless and secure launch on robust cloud infrastructure."
    },
    {
        icon: Repeat,
        title: "5. Iterate & Scale",
        description: "Our partnership continues post-launch with ongoing support, performance monitoring, and strategic enhancements to help you scale."
    }
];

export default function ProcessSection() {
    const lineVariants = {
        hidden: { height: 0 },
        visible: {
            height: '100%',
            transition: {
                duration: 2,
                ease: "linear"
            }
        }
    };
    
    return (
        <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary/20">
            <div className="px-8 md:px-12">
                <FadeIn className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">Our Blueprint for Success</h2>
                    <p className="text-foreground/80 md:text-xl">
                        We follow a battle-tested, transparent process to transform your vision into a high-performance reality, ensuring alignment and excellence at every step.
                    </p>
                </FadeIn>
                
                <div className="relative max-w-3xl mx-auto">
                    <motion.div 
                        className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={lineVariants}
                    />
                    {processSteps.map((step, index) => (
                        <FadeIn key={index} className="relative pl-16 md:pl-0 mb-12 last:mb-0">
                            <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                                <div className={`md:text-right ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}></div>
                                <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                                    <div className="absolute left-6 top-1 md:left-1/2 w-12 h-12 bg-primary rounded-full -translate-x-1/2 flex items-center justify-center ring-8 ring-secondary/20">
                                        <step.icon className="w-6 h-6 text-primary-foreground" />
                                    </div>
                                    <div className="md:ml-12">
                                        <h3 className="font-headline text-2xl font-bold text-primary mb-2">{step.title}</h3>
                                        <p className="text-foreground/80">{step.description}</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
