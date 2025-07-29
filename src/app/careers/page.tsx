import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Briefcase, BrainCircuit, Users } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Careers",
    description: "Join our forward-thinking team at Code Harbor and help build the future of software solutions. Explore our open positions.",
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

export default function CareersPage() {
    return (
        <>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="px-4 md:px-6 text-center z-10 relative">
                    <div className="space-y-2 animate-fade-in-up">
                        <h1 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-primary">Build the Future with Us</h1>
                        <p className="max-w-[600px] mx-auto text-foreground/80 md:text-xl">
                            Join a forward-thinking team that is passionate about technology and dedicated to building the future of software solutions. Your next great opportunity starts here.
                        </p>
                    </div>
                </div>
            </section>

             <section className="w-full py-12 md:py-24">
                <div className="px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-headline font-bold">Life at Code Harbor</h2>
                            <p className="text-foreground/80">
                                At Code Harbor, we cultivate a vibrant and inclusive culture that encourages growth, continuous learning, and meaningful contributions. We believe in empowering our team members, providing them with the resources and autonomy they need to succeed, and celebrating our collective achievements. We are more than just a company; we are a community of innovators dedicated to making a difference.
                            </p>
                            <ul className="space-y-2 text-foreground/80">
                                <li className="flex items-center gap-2"><BrainCircuit className="text-primary h-5 w-5"/> Access to continuous learning, professional development opportunities, and tech conferences.</li>
                                <li className="flex items-center gap-2"><Briefcase className="text-primary h-5 w-5"/> Flexible work arrangements, generous paid time off, and a focus on a healthy work-life balance.</li>
                                <li className="flex items-center gap-2"><Users className="text-primary h-5 w-5"/> A collaborative, inclusive, and supportive work environment where every voice is heard and valued.</li>
                            </ul>
                        </div>
                         <div className="grid grid-cols-2 gap-4">
                            <img src="https://placehold.co/300x300.png" data-ai-hint="team working together" alt="Team at work" className="rounded-lg glow-effect" />
                             <img src="https://placehold.co/300x300.png" data-ai-hint="office fun activity" alt="Team fun" className="rounded-lg glow-effect" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-12 md:py-24 bg-secondary/20">
                <div className="px-4 md:px-6">
                    <h2 className="text-3xl font-headline font-bold text-center mb-12">Current Open Positions</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {jobOpenings.map((job, index) => (
                            <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/50 transition-all duration-300">
                                <CardHeader>
                                    <CardTitle className="font-headline">{job.title}</CardTitle>
                                    <CardDescription>
                                        <div className="flex items-center gap-4 text-sm mt-2">
                                            <span className="flex items-center gap-1"><Briefcase className="h-4 w-4"/> {job.department}</span>
                                            <span className="flex items-center gap-1"><MapPin className="h-4 w-4"/> {job.location}</span>
                                        </div>
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-foreground/80">{job.description}</p>
                                </CardContent>
                                <CardFooter>
                                    <Button asChild>
                                        <Link href={`mailto:careers@codeharbor.dev?subject=Application for ${job.title}`}>Apply Now</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
