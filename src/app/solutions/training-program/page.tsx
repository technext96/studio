
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FadeIn } from '@/components/ui/fade-in';
import { CheckCircle, Code, GitBranch, LayoutTemplate, Lightbulb, Mail, MessageSquare, PlayCircle, Projector, Send, Database, Server, Palette, Search, BarChart, Figma, CodeXml, Component, BrainCircuit } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';


export const metadata: Metadata = {
    title: "Tech Training Programs | From Zero to Hero",
    description: "Explore our comprehensive training programs for Frontend, Backend, UI/UX Design, and SEO. Master in-demand skills with our hands-on, project-based curricula.",
    openGraph: {
        title: "Tech Training Programs | TechNext",
        description: "A complete roadmap to becoming a professional in your chosen tech field. Learn practical skills with our expert-guided learning paths.",
    },
};

const curriculums = {
    frontend: {
        "Weeks 1-2: Web Foundations": [
            { title: "HTML Basics", details: "Learn the fundamental structure of web pages, including semantic tags, forms, and accessibility.", resources: [{ type: "video", label: "HTML Full Course" }] },
            { title: "CSS Basics", details: "Understand how to style web pages, covering selectors, properties, the box model, and basic responsive design.", resources: [{ type: "video", label: "CSS for Beginners" }] },
        ],
        "Weeks 3-5: Advanced CSS & DOM": [
            { title: "The Document Object Model (DOM)", details: "A deep dive into what the DOM is and its relationship with HTML and JavaScript.", resources: [{ type: "video", label: "What is the DOM?" }, { type: "article", label: "DOM Explained" }] },
            { title: "Flexbox & CSS Grid", details: "Master modern CSS layout modules for creating complex responsive structures.", resources: [{ type: "video", label: "Flexbox & Grid Course" }, { type: "exercise", label: "Flexbox Froggy" }, { type: "exercise", label: "Grid Garden" }] },
        ],
        "Weeks 6-12: JavaScript Fundamentals & Advanced": [
            { title: "JavaScript Basics", details: "Covering variables, data types, operators, control flow, functions, objects, and arrays. Includes problem-solving exercises.", resources: [{ type: "exercise", label: "JS Basics Problems" }, { type: "article", label: "Array Methods" }] },
            { title: "Asynchronous JavaScript", details: "Learn about API calls, Promises, and async/await for handling asynchronous operations.", resources: [{ type: "video", label: "Async JS Explained" }] },
            { title: "DOM Manipulation with JS", details: "Interactively change the content and style of your web pages using JavaScript.", resources: [{ type: "video", label: "DOM Manipulation Guide" }] },
        ],
        "Weeks 13-20: React.js Deep Dive": [
            { title: "React Fundamentals", details: "Learn the most popular JavaScript library for UI. Covering components, state, props, hooks, and the virtual DOM.", resources: [{ type: "video", label: "React Full Course" }] },
            { title: "State Management", details: "Understand advanced state management concepts and libraries like Redux or Zustand.", resources: [{ type: "video", label: "React State Management" }] },
            { title: "Building a Dashboard", details: "A multi-day task to build a complete dashboard application, applying all the React concepts you've learned.", resources: [{ type: "project", label: "Dashboard Build Guide" }] },
        ],
        "Weeks 21-24: Final Project & Career Prep": [
            { title: "Capstone Project", details: "Build a complete, real-world application from a selection of projects like an E-commerce Store or Recipe Finder.", resources: [{ type: "project", label: "Choose Your Final Project" }] },
            { title: "Career Preparation", details: "Finalize your portfolio, set up your CV with project links, optimize your LinkedIn profile, and prepare for interviews.", resources: [{ type: "action", label: "CV & LinkedIn Setup" }] },
        ],
    },
    backend: {
        "Weeks 1-4: Programming & Database Fundamentals": [
            { title: "Python/Node.js Basics", details: "Choose a language and master its core concepts, including syntax, data structures, and control flow.", resources: [{ type: "video", label: "Python for Beginners" }, { type: "video", label: "Node.js Full Course" }] },
            { title: "SQL & Relational Databases", details: "Learn SQL fundamentals and how to design and interact with databases like PostgreSQL or MySQL.", resources: [{ type: "video", label: "SQL in 60 Minutes" }, { type: "exercise", label: "SQLBolt" }] },
            { title: "Introduction to NoSQL", details: "Understand the concepts behind NoSQL databases like MongoDB.", resources: [{ type: "video", label: "MongoDB Explained" }] },
        ],
        "Weeks 5-10: API Development": [
            { title: "Building RESTful APIs", details: "Learn the principles of REST and build your first API using a framework like Express (Node.js) or FastAPI (Python).", resources: [{ type: "video", label: "Build a REST API" }] },
            { title: "Authentication & Authorization", details: "Implement secure user authentication using JWT, OAuth, and sessions.", resources: [{ type: "article", label: "The JWT Handbook" }] },
            { title: "Introduction to GraphQL", details: "Explore an alternative to REST and build a basic GraphQL API.", resources: [{ type: "video", label: "GraphQL Full Course" }] },
        ],
        "Weeks 11-18: DevOps & Cloud Infrastructure": [
            { title: "Git & Version Control", details: "Master Git for collaboration, branching, and managing code history.", resources: [{ type: "exercise", label: "Learn Git Branching" }] },
            { title: "Containerization with Docker", details: "Learn to package and run your applications in isolated containers using Docker.", resources: [{ type: "video", label: "Docker for Beginners" }] },
            { title: "Cloud Fundamentals (AWS/GCP)", details: "Deploy your application on a major cloud provider and learn about core services.", resources: [{ type: "video", label: "AWS Fundamentals" }] },
        ],
        "Weeks 19-24: Final Project & System Design": [
            { title: "System Design Basics", details: "Learn the fundamentals of designing scalable, reliable, and maintainable backend systems.", resources: [{ type: "article", label: "System Design Primer" }] },
            { title: "Capstone Project", details: "Build a complete backend for a real-world application, such as a social media clone or a booking system.", resources: [{ type: "project", label: "Choose Your Final Project" }] },
        ],
    },
    uiux: {
        "Weeks 1-4: Design Foundations & User Research": [
            { title: "Intro to UI/UX", details: "Understand the core principles of User Interface and User Experience design.", resources: [{ type: "video", label: "Google UX Design Course" }] },
            { title: "Figma Fundamentals", details: "Master the industry-standard design tool, from basic shapes to auto layout and components.", resources: [{ type: "video", label: "Figma for Beginners" }] },
            { title: "User Research & Personas", details: "Learn how to conduct user interviews, surveys, and create user personas to guide your design decisions.", resources: [{ type: "article", label: "Guide to User Research" }] },
        ],
        "Weeks 5-10: Wireframing, Prototyping & UI Design": [
            { title: "Information Architecture", details: "Learn how to organize and structure content in a way that is intuitive for users.", resources: [{ type: "article", label: "IA Heuristics" }] },
            { title: "Wireframing & Prototyping", details: "Create low-fidelity wireframes and build interactive prototypes in Figma.", resources: [{ type: "video", label: "Prototyping in Figma" }] },
            { title: "Visual Design Principles", details: "Study color theory, typography, and composition to create beautiful and effective user interfaces.", resources: [{ type: "exercise", label: "Color Theory Challenge" }] },
        ],
        "Weeks 11-18: Design Systems & User Testing": [
            { title: "Building a Design System", details: "Learn to create a library of reusable components to ensure consistency and speed up your workflow.", resources: [{ type: "video", label: "Intro to Design Systems" }] },
            { title: "Usability Testing", details: "Plan and conduct usability tests to get feedback on your designs and identify areas for improvement.", resources: [{ type: "article", label: "How to Conduct a Usability Test" }] },
            { title: "Design Handoff", details: "Learn the best practices for handing off your designs to developers to ensure a smooth implementation.", resources: [{ type: "article", label: "Designer-Developer Collaboration" }] },
        ],
        "Weeks 19-24: Portfolio & Final Project": [
            { title: "Portfolio Development", details: "Create a professional design portfolio that showcases your skills and projects.", resources: [{ type: "article", label: "Building a UX Portfolio" }] },
            { title: "Capstone Project", details: "Design a complete mobile or web application from scratch, covering the entire design process from research to a high-fidelity prototype.", resources: [{ type: "project", label: "Choose Your Final Project" }] },
        ],
    },
    seo: {
        "Weeks 1-4: SEO Fundamentals": [
            { title: "How Search Engines Work", details: "Understand the basics of crawling, indexing, and ranking.", resources: [{ type: "video", label: "Google Search Explained" }] },
            { title: "Keyword Research", details: "Learn how to find and analyze keywords that your target audience is searching for.", resources: [{ type: "article", label: "Ahrefs' Keyword Research Guide" }] },
            { title: "On-Page SEO", details: "Master title tags, meta descriptions, header tags, and content optimization.", resources: [{ type: "video", label: "On-Page SEO Tutorial" }] },
        ],
        "Weeks 5-10: Technical & Off-Page SEO": [
            { title: "Technical SEO", details: "Dive into sitemaps, robots.txt, schema markup, site speed, and mobile-friendliness.", resources: [{ type: "article", label: "SEMRush Technical SEO Guide" }] },
            { title: "Link Building", details: "Understand the importance of backlinks and learn strategies for acquiring high-quality links.", resources: [{ type: "video", label: "Link Building for Beginners" }] },
            { title: "Local SEO (GEO)", details: "Optimize for local search with Google Business Profile, local citations, and location-based keywords.", resources: [{ type: "article", label: "BrightLocal's Guide to Local SEO" }] },
        ],
        "Weeks 11-18: Analytics & Content Strategy": [
            { title: "Google Analytics 4", details: "Learn how to set up, navigate, and interpret data in GA4 to track your SEO performance.", resources: [{ type: "video", label: "GA4 for Beginners" }] },
            { title: "Content Strategy for SEO", details: "Develop a content plan that attracts your target audience and ranks well in search engines.", resources: [{ type: "article", label: "HubSpot's Content Strategy Guide" }] },
            { title: "App Store Optimization (ASO)", details: "Learn the fundamentals of optimizing app listings on the Apple App Store and Google Play Store.", resources: [{ type: "video", label: "ASO Explained" }] },
        ],
        "Weeks 19-24: Final Project & Reporting": [
            { title: "SEO Audit", details: "Learn how to conduct a comprehensive SEO audit for a real website.", resources: [{ type: "project", label: "Perform an SEO Audit" }] },
            { title: "Reporting & KPIs", details: "Create meaningful SEO reports that demonstrate value and track key performance indicators.", resources: [{ type: "article", label: "Essential SEO KPIs" }] },
        ],
    }
};

const getResourceIcon = (type: string) => {
    switch (type) {
        case "video": return <PlayCircle className="h-4 w-4 text-muted-foreground"/>;
        case "article": return <Projector className="h-4 w-4 text-muted-foreground"/>;
        case "exercise": return <Lightbulb className="h-4 w-4 text-muted-foreground"/>;
        case "project": return <GitBranch className="h-4 w-4 text-muted-foreground"/>;
        default: return <CheckCircle className="h-4 w-4 text-muted-foreground"/>;
    }
}

const TrainingCurriculum = ({ curriculum }: { curriculum: typeof curriculums.frontend }) => (
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
);


export default function TrainingProgramPage() {
    return (
        <>
            <section className="w-full pt-24 md:pt-36 lg:pt-40 bg-secondary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="px-8 md:px-12 z-10 relative text-center">
                    <FadeIn className="space-y-6">
                        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
                           TechNext Professional Training Programs
                        </h1>
                        <p className="max-w-3xl mx-auto text-foreground/80 md:text-xl">
                            Comprehensive, project-based training designed to take you from beginner to job-ready. Choose your path and master the skills needed to succeed in the tech industry.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Button size="lg" className="text-lg px-8 py-6" asChild>
                                <Link href="#curriculum">Explore Programs</Link>
                            </Button>
                             <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                                <Link href="mailto:technext96@gmail.com?subject=Inquiry about Training Programs">Enroll Now</Link>
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <section id="curriculum" className="w-full py-16 md:py-24">
                <div className="px-8 md:px-12">
                     <FadeIn className="text-center space-y-3 mb-12 max-w-3xl mx-auto">
                        <h2 className="text-4xl font-headline font-bold">Choose Your Career Path</h2>
                        <p className="text-foreground/80 md:text-lg">
                           We offer specialized, 6-month roadmaps for the most in-demand roles in the tech industry. Each program is structured to provide deep practical knowledge and a portfolio of real-world projects.
                        </p>
                    </FadeIn>
                    <FadeIn className="max-w-6xl mx-auto">
                        <Tabs defaultValue="frontend" className="w-full">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
                                <TabsTrigger value="frontend" className="py-3 flex-col gap-1 h-full"><CodeXml/>Frontend Developer</TabsTrigger>
                                <TabsTrigger value="backend" className="py-3 flex-col gap-1 h-full"><Server/>Backend Developer</TabsTrigger>
                                <TabsTrigger value="uiux" className="py-3 flex-col gap-1 h-full"><Palette/>UI/UX Designer</TabsTrigger>
                                <TabsTrigger value="seo" className="py-3 flex-col gap-1 h-full"><Search/>SEO & ASO</TabsTrigger>
                            </TabsList>
                            <TabsContent value="frontend" className="pt-8">
                                <TrainingCurriculum curriculum={curriculums.frontend} />
                            </TabsContent>
                            <TabsContent value="backend" className="pt-8">
                                <TrainingCurriculum curriculum={curriculums.backend} />
                            </TabsContent>
                            <TabsContent value="uiux" className="pt-8">
                                <TrainingCurriculum curriculum={curriculums.uiux} />
                            </TabsContent>
                            <TabsContent value="seo" className="pt-8">
                                <TrainingCurriculum curriculum={curriculums.seo} />
                            </TabsContent>
                        </Tabs>
                    </FadeIn>
                </div>
            </section>
            
            <section id="contact" className="w-full py-20 md:py-28 bg-secondary/20">
                <div className="px-8 md:px-12 text-center">
                   <FadeIn className="space-y-6 max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border-primary/10 rounded-lg p-10 glow-effect">
                     <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">Ready to Start Your Tech Journey?</h2>
                     <p className="text-foreground/80 md:text-lg">
                       This program is your comprehensive guide to a new career. If you're ready to commit and build your future, we're ready to guide you.
                     </p>
                      <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="text-lg px-8 py-6">
                           <Link href="mailto:technext96@gmail.com?subject=Enrollment Inquiry: Training Programs">
                                <Send className="mr-2 h-5 w-5"/>
                                Enroll via Email
                            </Link>
                        </Button>
                         <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
                           <Link href="https://wa.me/923491089456?text=Hi! I'm interested in the TechNext Training Programs.">
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
