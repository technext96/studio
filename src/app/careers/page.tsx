import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Briefcase, BrainCircuit, Users } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import { FadeIn } from '@/components/ui/fade-in';

export const metadata: Metadata = {
    title: "Careers",
    description: "Join our forward-thinking team at Code Harbor and help build the future of software solutions. Explore our open positions.",
    openGraph: {
        title: 'Careers | Code Harbor',
        description: "Join our forward-thinking team at Code Harbor and help build the future of software solutions. Explore our open positions.",
    },
};

const jobOpenings = [
    {
        title: "Senior Full-Stack Engineer",
        location: "Remote",
        department: "Engineering",
        description: "We are looking for an experienced Full-Stack Engineer to build and maintain scalable web applications. You'll work with a modern tech stack (Next.js, React, Genkit) and contribute to all phases of the development lifecycle, from concept to deployment."
    },
    {
        title: "AI/ML Engineer",
        location: "Tech City Office",
        department: "AI & Data Science",
        description: "Join our AI team to design, implement, and deploy machine learning models. You will develop AI-driven features, research new algorithms, and push the boundaries of what's possible with artificial intelligence."
    },
    {
        title: "UX/UI Designer",
        location: "Remote",
        department: "Design",
        description: "We are seeking a creative and user-centric UX/UI designer to create intuitive and beautiful user experiences. You'll be responsible for the entire design process, from user research and wireframing to final high-fidelity mockups and hand-off."
    },
    {
        title: "DevOps Engineer",
        location: "Remote / Tech City",
        department: "Engineering",
        description: "Help us build and maintain our robust cloud infrastructure. Your role will involve automating our CI/CD pipelines, ensuring the reliability and scalability of our systems, and implementing best practices for security and performance."
    }
];


const TeamIllustration1 = () => (
    <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
            <linearGradient id="grad-c1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))"/>
            <stop offset="100%" stopColor="hsl(var(--secondary))"/>
            </linearGradient>
        </defs>
        <g fill="none" stroke="url(#grad-c1)" strokeWidth="2">
            <path d="M 50 150 C 50 100, 100 50, 150 50 C 200 50, 250 100, 250 150 C 250 200, 200 250, 150 250 C 100 250, 50 200, 50 150 Z">
            <animateTransform attributeName="transform" type="rotate" from="0 150 150" to="360 150 150" dur="20s" repeatCount="indefinite"/>
            </path>
            <path d="M 100 150 C 100 122.38, 122.38 100, 150 100 C 177.62 100, 200 122.38, 200 150 C 200 177.62, 177.62 200, 150 200 C 122.38 200, 100 177.62, 100 150Z">
            <animateTransform attributeName="transform" type="rotate" from="360 150 150" to="0 150 150" dur="15s" repeatCount="indefinite"/>
            </path>
        </g>
        <g fill="hsl(var(--primary))">
            <circle cx="150" cy="80" r="10"><animate attributeName="cy" values="80;90;80" dur="5s" repeatCount="indefinite"/></circle>
            <circle cx="220" cy="150" r="10"><animate attributeName="cx" values="220;210;220" dur="5s" repeatCount="indefinite"/></circle>
            <circle cx="80" cy="150" r="10"><animate attributeName="cx" values="80;90;80" dur="5s" repeatCount="indefinite"/></circle>
            <circle cx="150" cy="220" r="10"><animate attributeName="cy" values="220;210;220" dur="5s" repeatCount="indefinite"/></circle>
        </g>
    </svg>
);

const TeamIllustration2 = () => (
    <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
            <linearGradient id="grad-c2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" />
            </linearGradient>
        </defs>
        <g fill="none" stroke="url(#grad-c2)" strokeWidth="1" opacity="0.5">
            <rect x="50" y="50" width="200" height="200" rx="20">
            <animateTransform attributeName="transform" type="rotate" from="0 150 150" to="360 150 150" dur="25s" repeatCount="indefinite" />
            </rect>
            <rect x="75" y="75" width="150" height="150" rx="15">
            <animateTransform attributeName="transform" type="rotate" from="360 150 150" to="0 150 150" dur="20s" repeatCount="indefinite" />
            </rect>
            <rect x="100" y="100" width="100" height="100" rx="10">
            <animateTransform attributeName="transform" type="rotate" from="0 150 150" to="360 150 150" dur="15s" repeatCount="indefinite" />
            </rect>
        </g>
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="hsl(var(--primary))" fontSize="40" fontFamily="var(--font-headline)" fontWeight="bold">
            Fun
        </text>
    </svg>
);


export default function CareersPage() {
    return (
        <>
            <section className="w-full py-20 md:py-28 lg:py-36 bg-secondary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="px-8 md:px-12 text-center z-10 relative">
                    <FadeIn className="space-y-4">
                        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-6xl text-primary">Build the Future with Us</h1>
                        <p className="max-w-3xl mx-auto text-foreground/80 md:text-xl">
                            At Code Harbor, we aren't just building software; we're crafting the future. Join a forward-thinking team that is passionate about technology, dedicated to innovation, and committed to making a difference. Your next great opportunity starts here.
                        </p>
                    </FadeIn>
                </div>
            </section>

             <section className="w-full py-16 md:py-24">
                <div className="px-8 md:px-12">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <FadeIn className="space-y-6">
                            <h2 className="text-4xl font-headline font-bold">Life at Code Harbor</h2>
                            <p className="text-foreground/80 text-lg">
                                At Code Harbor, we cultivate a vibrant and inclusive culture that encourages growth, continuous learning, and meaningful contributions. We believe in empowering our team members, providing them with the resources and autonomy they need to succeed, and celebrating our collective achievements. We are more than just a company; we are a community of innovators dedicated to making a difference and pushing the boundaries of technology.
                            </p>
                            <ul className="space-y-4 text-foreground/80 text-lg pt-4">
                                <li className="flex items-start gap-4"><BrainCircuit className="text-primary h-6 w-6 mt-1 flex-shrink-0"/><span>Access to continuous learning, professional development opportunities, and tech conferences.</span></li>
                                <li className="flex items-start gap-4"><Briefcase className="text-primary h-6 w-6 mt-1 flex-shrink-0"/><span>Flexible work arrangements, generous paid time off, and a focus on a healthy work-life balance.</span></li>
                                <li className="flex items-start gap-4"><Users className="text-primary h-6 w-6 mt-1 flex-shrink-0"/><span>A collaborative, inclusive, and supportive work environment where every voice is heard and valued.</span></li>
                            </ul>
                        </FadeIn>
                         <div className="grid grid-cols-2 gap-6">
                            <FadeIn><div className="rounded-lg glow-effect aspect-square"><TeamIllustration1/></div></FadeIn>
                             <FadeIn style={{animationDelay: '0.1s'}}><div className="rounded-lg glow-effect aspect-square"><TeamIllustration2/></div></FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-16 md:py-24 bg-secondary/20">
                <div className="px-8 md:px-12">
                    <FadeIn><h2 className="text-4xl font-headline font-bold text-center mb-16">Current Open Positions</h2></FadeIn>
                    <div className="grid md:grid-cols-2 gap-10">
                        {jobOpenings.map((job, index) => (
                            <FadeIn key={index} style={{animationDelay: `${index * 0.1}s`}}>
                                <Card className="bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/50 transition-all duration-300 flex flex-col h-full">
                                    <CardHeader>
                                        <CardTitle className="font-headline text-2xl">{job.title}</CardTitle>
                                        <CardDescription>
                                            <div className="flex items-center gap-6 text-sm mt-2 text-foreground/80">
                                                <span className="flex items-center gap-2"><Briefcase className="h-4 w-4 text-primary"/> {job.department}</span>
                                                <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary"/> {job.location}</span>
                                            </div>
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <p className="text-foreground/80">{job.description}</p>
                                    </CardContent>
                                    <CardFooter>
                                        <Button asChild>
                                            <Link href={`mailto:careers@codeharbor.dev?subject=Application for ${job.title}`}>Apply Now</Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
