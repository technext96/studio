
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FadeIn } from '@/components/ui/fade-in';
import { CheckCircle, Code, GitBranch, LayoutTemplate, Lightbulb, Mail, MessageSquare, PlayCircle, Projector, Send } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Web Development Training Program | From Zero to Hero in 6 Months",
    description: "Join our comprehensive 6-month web development training program. Master HTML, CSS, JavaScript, and React through hands-on projects and expert guidance.",
    openGraph: {
        title: "Web Development Training Program | TechNext",
        description: "A complete roadmap to becoming a professional web developer in 6 months. Learn practical skills with our project-based curriculum.",
    },
};

const curriculum = {
    "Weeks 1-2: Web Foundations": [
        { title: "HTML Basics", details: "Learn the fundamental structure of web pages, including meta tags and how to inspect pages using browser developer tools.", resources: [{ type: "video", label: "HTML Course 1" }, { type: "video", label: "HTML Course 2" }] },
        { title: "CSS Basics", details: "Understand how to style web pages, covering selectors, properties, and the box model.", resources: [{ type: "video", label: "CSS Course" }] },
    ],
    "Weeks 3-5: Advanced CSS & DOM": [
        { title: "The Document Object Model (DOM)", details: "A deep dive into what the DOM is, how it works, and its relationship with HTML and JavaScript.", resources: [{ type: "video", label: "What is the DOM?" }, { type: "article", label: "DOM Explained" }] },
        { title: "Flexbox", details: "Master the modern CSS layout module for creating responsive and flexible page structures. Includes the Flexbox Froggy challenge.", resources: [{ type: "video", label: "Flexbox Course" }, { type: "exercise", label: "Flexbox Froggy" }] },
        { title: "CSS Grid", details: "Learn the two-dimensional grid system for creating complex and responsive layouts.", resources: [{ type: "video", label: "CSS Grid Course" }, { type: "exercise", label: "Grid Masterclass" }] },
        { title: "CSS Positioning", details: "Understand the different positioning schemes in CSS (static, relative, absolute, fixed, sticky).", resources: [{ type: "video", label: "Positioning Course" }] },
    ],
    "Weeks 6-12: JavaScript Fundamentals & Advanced": [
        { title: "JavaScript Basics", details: "Covering variables, data types, operators, control flow, functions, and arrays. Includes problem-solving exercises.", resources: [{ type: "exercise", label: "JS Basics Problems" }] },
        { title: "Array Methods", details: "In-depth look at powerful array methods like map, filter, reduce, and forEach.", resources: [{ type: "article", label: "10 Array Exercises" }] },
        { title: "Asynchronous JavaScript", details: "Learn about API calls, Promises, and async/await for handling asynchronous operations.", resources: [{ type: "video", label: "API Calls Playlist" }] },
        { title: "DOM Manipulation with JS", details: "Interactively change the content and style of your web pages using JavaScript.", resources: [{ type: "video", label: "DOM Manipulation Guide" }] },
    ],
    "Weeks 13-20: React.js Deep Dive": [
        { title: "React Fundamentals", details: "Learn the most popular JavaScript library for building user interfaces. Covering components, state, props, hooks, and the virtual DOM.", resources: [{ type: "video", label: "React Course (Self-Paced)" }] },
        { title: "Practical React Projects", details: "Build several projects including a Todo App, an Accordion component, and an image gallery using the Unsplash API to solidify your skills.", resources: [{ type: "exercise", label: "Unsplash API Project" }] },
        { title: "Building a Dashboard", details: "A multi-day task to build a complete dashboard application, applying all the React concepts you've learned.", resources: [{ type: "video", label: "Dashboard Build Guide" }] },
    ],
    "Weeks 21-24: Final Real-World Projects": [
        { title: "Capstone Project", details: "Apply all your knowledge by building a complete, real-world application from a selection of projects like a Weather App, E-commerce Store, or Recipe Finder.", resources: [{ type: "project", label: "Choose Your Final Project" }] },
        { title: "Career Preparation", details: "Finalize your portfolio, set up your CV with project links, optimize your LinkedIn profile, and prepare for project presentations.", resources: [{ type: "action", label: "CV & LinkedIn Setup" }] },
    ],
};

const projects = [
    { title: "E-commerce Site", description: "Build a functional online store with product listings, a shopping cart, and checkout functionality.", icon: <LayoutTemplate className="h-8 w-8 text-primary"/> },
    { title: "Weather App", description: "Create a beautiful app that fetches and displays weather data from a third-party API.", icon: <LayoutTemplate className="h-8 w-8 text-primary"/> },
    { title: "GitHub User Finder", description: "An application to search for GitHub users and display their profile information and repositories.", icon: <LayoutTemplate className="h-8 w-8 text-primary"/> },
    { title: "Recipe Finder", description: "Develop an app that helps users find recipes based on ingredients they have.", icon: <LayoutTemplate className="h-8 w-8 text-primary"/> },
    { title: "News Feed Dashboard", description: "A dashboard that aggregates news from various sources using RSS feeds.", icon: <LayoutTemplate className="h-8 w-8 text-primary"/> },
    { title: "Advanced To-Do App", description: "A feature-rich task management application with advanced state management.", icon: <LayoutTemplate className="h-8 w-8 text-primary"/> },
];

export default function TrainingProgramPage() {
    const getResourceIcon = (type: string) => {
        switch (type) {
            case "video": return <PlayCircle className="h-4 w-4 text-muted-foreground"/>;
            case "article": return <Projector className="h-4 w-4 text-muted-foreground"/>;
            case "exercise": return <Lightbulb className="h-4 w-4 text-muted-foreground"/>;
            case "project": return <GitBranch className="h-4 w-4 text-muted-foreground"/>;
            default: return <CheckCircle className="h-4 w-4 text-muted-foreground"/>;
        }
    }
    
    return (
        <>
            <section className="w-full pt-24 md:pt-36 lg:pt-40 bg-secondary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="px-8 md:px-12 z-10 relative text-center">
                    <FadeIn className="space-y-6">
                        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
                           The Ultimate 6-Month Web Development Program
                        </h1>
                        <p className="max-w-3xl mx-auto text-foreground/80 md:text-xl">
                            A comprehensive, project-based training program designed to take you from a complete beginner to a job-ready web developer. Learn by doing, with expert-curated resources and real-world projects.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Button size="lg" className="text-lg px-8 py-6" asChild>
                                <Link href="#curriculum">View Curriculum</Link>
                            </Button>
                             <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                                <Link href="mailto:technext96@gmail.com?subject=Inquiry about the 6-Month Training Program">Enroll Now</Link>
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </section>
            
            <section id="overview" className="w-full py-16 md:py-24">
                <div className="px-8 md:px-12">
                    <FadeIn className="text-center space-y-3 mb-12 max-w-3xl mx-auto">
                        <div className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm text-primary font-semibold">Program Philosophy</div>
                        <h2 className="text-4xl font-headline font-bold">Learn by Building, Not Just Watching</h2>
                        <p className="text-foreground/80 md:text-lg">
                           Our program is built on the principle that practical application is the key to mastery. You'll spend less time on theory and more time building, debugging, and deploying real applications.
                        </p>
                    </FadeIn>
                </div>
            </section>
            
            <section id="curriculum" className="w-full py-16 md:py-24 bg-secondary/20">
                <div className="px-8 md:px-12">
                    <FadeIn className="text-center space-y-3 mb-12 max-w-3xl mx-auto">
                        <h2 className="text-4xl font-headline font-bold">The 6-Month Roadmap</h2>
                        <p className="text-foreground/80 md:text-lg">
                            A structured, week-by-week curriculum to guide you from the basics of HTML to advanced React concepts and deployment.
                        </p>
                    </FadeIn>
                    <FadeIn className="max-w-4xl mx-auto">
                        <Accordion type="single" collapsible className="w-full">
                            {Object.entries(curriculum).map(([week, topics]) => (
                                <AccordionItem key={week} value={week}>
                                    <AccordionTrigger className="text-xl font-headline hover:no-underline">{week}</AccordionTrigger>
                                    <AccordionContent className="space-y-4 pt-4">
                                        {topics.map(topic => (
                                            <Card key={topic.title} className="bg-background/50">
                                                <CardHeader>
                                                    <CardTitle className="text-lg">{topic.title}</CardTitle>
                                                    <CardDescription>{topic.details}</CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Key Resources:</h4>
                                                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                                                        {topic.resources.map(res => (
                                                            <div key={res.label} className="flex items-center gap-2 text-sm">
                                                                {getResourceIcon(res.type)}
                                                                <span>{res.label}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </FadeIn>
                </div>
            </section>

             <section id="projects" className="w-full py-16 md:py-24">
                <div className="px-8 md:px-12">
                    <FadeIn className="text-center space-y-3 mb-12 max-w-3xl mx-auto">
                        <h2 className="text-4xl font-headline font-bold">Build a Portfolio-Worthy Project</h2>
                        <p className="text-foreground/80 md:text-lg">
                           In the final month, you'll build a complete application from scratch, solidifying your skills and giving you a standout project for your CV.
                        </p>
                    </FadeIn>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {projects.map((project, i) => (
                             <FadeIn key={project.title} style={{ animationDelay: `${i * 0.05}s` }}>
                                <Card className="bg-card/50 backdrop-blur-sm border-primary/10 h-full p-6 text-center flex flex-col items-center">
                                    <div className="mb-4">{project.icon}</div>
                                    <h3 className="font-headline text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-foreground/80 text-sm flex-grow">{project.description}</p>
                                </Card>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

             <section id="contact" className="w-full py-20 md:py-28">
                <div className="px-8 md:px-12 text-center">
                   <FadeIn className="space-y-6 max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border-primary/10 rounded-lg p-10 glow-effect">
                     <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">Ready to Start Your Developer Journey?</h2>
                     <p className="text-foreground/80 md:text-lg">
                       This program is your comprehensive guide to becoming a web developer. If you're ready to commit and build a new career, we're ready to guide you.
                     </p>
                      <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="text-lg px-8 py-6">
                           <Link href="mailto:technext96@gmail.com?subject=Enrollment: 6-Month Training Program">
                                <Send className="mr-2 h-5 w-5"/>
                                Enroll via Email
                            </Link>
                        </Button>
                         <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
                           <Link href="https://wa.me/923491089456?text=Hi! I'm interested in the 6-Month Web Development Training Program.">
                                <MessageSquare className="mr-2 h-5 w-5"/>
                                Ask on WhatsApp
                            </Link>
                        </Button>
                      </div>
                  </FadeIn>
                </div>
              </section>
        </>
    );
}
