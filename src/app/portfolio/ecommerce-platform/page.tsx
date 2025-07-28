import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Study: E-commerce Platform",
  description: "Learn how we built a scalable e-commerce solution that boosted sales by 40% through an optimized user experience and streamlined checkout process.",
};

const technologies = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"];
const projectDetails = {
    client: "FashionForward Inc.",
    timeline: "4 Months",
    industry: "Retail & E-commerce"
}

export default function EcommercePlatformCaseStudy() {
  return (
    <div className="w-full py-12 md:py-20 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/portfolio">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
            </Link>
          </Button>

          <article className="prose prose-gray dark:prose-invert max-w-none prose-h1:font-headline prose-h1:text-4xl prose-h2:font-headline">
            <p className="text-primary font-semibold">Web Development</p>
            <h1>Case Study: Next-Gen E-commerce Platform</h1>

            <Image
              src="https://placehold.co/1200x600.png"
              data-ai-hint="online fashion store"
              width={1200}
              height={600}
              alt="E-commerce Platform Showcase"
              className="rounded-lg my-8"
            />
            
            <div className="grid md:grid-cols-3 gap-8 my-12 border-y py-8">
              <div>
                <h3 className="font-semibold text-foreground/80">Client</h3>
                <p className="text-lg font-bold">{projectDetails.client}</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground/80">Timeline</h3>
                <p className="text-lg font-bold">{projectDetails.timeline}</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground/80">Industry</h3>
                <p className="text-lg font-bold">{projectDetails.industry}</p>
              </div>
            </div>

            <h2>The Challenge</h2>
            <p>
                FashionForward Inc., a rising star in online retail, was hampered by an outdated, slow, and non-responsive e-commerce site. The platform suffered from high cart abandonment rates, poor mobile experience, and difficulty in managing inventory, which directly impacted sales and customer satisfaction.
            </p>

            <h2>Our Solution</h2>
            <p>
                Code Harbor was tasked with a complete overhaul. We designed and developed a new e-commerce platform from the ground up using a modern tech stack centered on Next.js for superior performance and SEO. Our solution focused on three key areas:
            </p>
            <ul>
                <li><strong>User Experience (UX):</strong> We created a visually appealing, intuitive interface with a streamlined, three-step checkout process.</li>
                <li><strong>Performance:</strong> Leveraging server-side rendering and static site generation, we achieved sub-second page load times.</li>
                <li><strong>Admin Dashboard:</strong> A custom dashboard was built to simplify product management, order tracking, and sales analytics.</li>
            </ul>

            <div className="my-8">
                <h3 className="font-headline not-prose mb-4 text-2xl">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                    {technologies.map(tech => (
                        <Badge key={tech} variant="secondary" className="text-sm">{tech}</Badge>
                    ))}
                </div>
            </div>

            <h2>The Results</h2>
            <p>
                The new platform was a resounding success, delivering tangible business results within the first quarter of launch.
            </p>
            <div className="grid md:grid-cols-3 gap-4 my-8 text-center">
                <div className="p-4 bg-secondary rounded-lg">
                    <p className="text-3xl font-bold text-primary font-headline">+40%</p>
                    <p className="text-sm text-foreground/80">Increase in Sales</p>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                    <p className="text-3xl font-bold text-primary font-headline">-60%</p>
                    <p className="text-sm text-foreground/80">Page Load Time</p>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
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
