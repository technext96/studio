import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Study: E-commerce Platform",
  description: "Learn how we built a scalable e-commerce solution that boosted sales by 40% through an optimized user experience and streamlined checkout process.",
};

const technologies = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL", "Vercel"];
const projectDetails = {
    client: "FashionForward Inc.",
    timeline: "4 Months",
    industry: "Retail & E-commerce"
}
const keyFeatures = [
  "Intuitive, mobile-first UX/UI",
  "Sub-second page loads via SSR & ISR",
  "Frictionless Stripe checkout integration",
  "Custom admin dashboard for inventory and order management",
  "Advanced product search and filtering",
  "Automated email marketing flows"
]

export default function EcommercePlatformCaseStudy() {
  return (
    <div className="w-full py-12 md:py-20 lg:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/portfolio">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
            </Link>
          </Button>

          <article className="prose prose-invert max-w-none prose-h1:font-headline prose-h1:text-4xl prose-h1:text-primary prose-h2:font-headline prose-h2:text-2xl prose-h3:font-headline">
            <p className="text-primary font-semibold">Web Development</p>
            <h1>Case Study: Next-Gen E-commerce Platform</h1>

            <Image
              src="https://placehold.co/1200x600.png"
              data-ai-hint="online fashion store"
              width={1200}
              height={600}
              alt="E-commerce Platform Showcase"
              className="rounded-lg my-8 border-2 border-primary/20 glow-effect"
            />
            
            <div className="grid md:grid-cols-3 gap-8 my-12 border-y border-border/50 py-8">
              <div>
                <h3 className="font-semibold text-foreground/80 uppercase tracking-wider text-sm">Client</h3>
                <p className="text-lg font-bold">{projectDetails.client}</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground/80 uppercase tracking-wider text-sm">Timeline</h3>
                <p className="text-lg font-bold">{projectDetails.timeline}</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground/80 uppercase tracking-wider text-sm">Industry</h3>
                <p className="text-lg font-bold">{projectDetails.industry}</p>
              </div>
            </div>

            <h2>The Challenge</h2>
            <p>
                FashionForward Inc., a rising star in online retail, was hampered by an outdated, slow, and non-responsive e-commerce site. The platform suffered from high cart abandonment rates, poor mobile experience, and difficulty in managing inventory, which directly impacted sales and customer satisfaction.
            </p>

            <h2>Our Solution</h2>
            <p>
                Code Harbor was tasked with a complete overhaul. We designed and developed a new e-commerce platform from the ground up using a modern tech stack centered on Next.js for superior performance and SEO. Our solution focused on three key areas: user experience, performance, and manageability.
            </p>

            <div className="bg-secondary/20 rounded-lg p-8 my-8">
                <h3 className="font-headline not-prose mb-4 text-xl">Key Features</h3>
                <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4 not-prose p-0 m-0">
                    {keyFeatures.map(feature => (
                        <li key={feature} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
            

            <div className="my-8">
                <h3 className="font-headline not-prose mb-4 text-xl">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                    {technologies.map(tech => (
                        <Badge key={tech} variant="secondary" className="text-sm bg-primary/10 text-primary hover:bg-primary/20">{tech}</Badge>
                    ))}
                </div>
            </div>

            <h2>The Results</h2>
            <p>
                The new platform was a resounding success, delivering tangible business results within the first quarter of launch. The combination of a stellar user experience and lightning-fast performance created a frictionless shopping environment.
            </p>
            <div className="grid md:grid-cols-3 gap-4 my-8 text-center">
                <div className="p-4 bg-secondary/20 rounded-lg border border-border/50">
                    <p className="text-3xl font-bold text-primary font-headline">+40%</p>
                    <p className="text-sm text-foreground/80">Increase in Sales</p>
                </div>
                <div className="p-4 bg-secondary/20 rounded-lg border border-border/50">
                    <p className="text-3xl font-bold text-primary font-headline">-60%</p>
                    <p className="text-sm text-foreground/80">Page Load Time</p>
                </div>
                <div className="p-4 bg-secondary/20 rounded-lg border border-border/50">
                    <p className="text-3xl font-bold text-primary font-headline">+75%</p>
                    <p className="text-sm text-foreground/80">Mobile Conversion Rate</p>
                </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
