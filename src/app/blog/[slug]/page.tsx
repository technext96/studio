

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/data.tsx";
import { ArrowLeft, Share2, Twitter, Linkedin, Facebook } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { illustrationMap } from "@/lib/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Script from "next/script";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  // Specific SEO for white-label rideshare app post
  if (post.slug === 'white-label-rideshare-app') {
    return {
      title: "White-Label Ride-Sharing App | Launch Uber Clone Fast",
      description: "Launch your Uber-like ride-sharing app with our white-label solution. Affordable, fast, scalable.",
      openGraph: {
        title: "White-Label Ride-Sharing App",
        description: "Launch your Uber-like app with our white-label software today.",
        url: "https://technext96.com/blog/white-label-rideshare-app",
        type: 'article',
        publishedTime: post.date,
        authors: [post.author.name],
        images: [
          {
            url: '/images/rideshare.jpg', // Assuming you will add this image to your /public/images folder
            width: 1200,
            height: 630,
            alt: 'White-Label Ride-Sharing App Solution',
          },
        ],
      },
       alternates: {
        canonical: `/blog/${post.slug}`,
      },
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const Illustration = illustrationMap[post.illustration];

  const rideShareSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "White-Label Ride-Sharing App",
    "description": "Launch your Uber-like ride-sharing app with a white-label software solution.",
    "author": {
      "@type": "Organization",
      "name": "TechNext"
    },
    "datePublished": "2024-08-05",
    "url": "https://technext96.com/blog/white-label-rideshare-app"
  };

  return (
    <>
      {post.slug === 'white-label-rideshare-app' && (
        <Script
          id="blog-post-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(rideShareSchema) }}
        />
      )}
      <div className="w-full py-16 md:py-24 lg:py-28">
        <div className="px-8 md:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <nav className="text-sm mb-4" aria-label="Breadcrumb">
                <ol className="list-none p-0 inline-flex space-x-2 text-foreground/80">
                  <li><Link href="/" className="hover:text-primary">Home</Link></li>
                  <li><span>/</span></li>
                  <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
                  <li><span>/</span></li>
                  <li className="text-primary" aria-current="page">{post.category}</li>
                </ol>
              </nav>
              <p className="text-base text-primary font-semibold mb-2">{post.category}</p>
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl text-primary">
                {post.title}
              </h1>
              <p className="mt-4 text-lg text-foreground/80">{post.excerpt}</p>
              <div className="mt-6 flex items-center justify-between text-sm text-foreground/80">
                <p>Published on {format(new Date(post.date), "MMMM d, yyyy")}</p>
                <div className="flex items-center gap-2">
                  <Share2 className="h-4 w-4" />
                  <span className="font-semibold">Share:</span>
                  <a href="#" className="hover:text-primary"><Twitter className="h-4 w-4" /></a>
                  <a href="#" className="hover:text-primary"><Linkedin className="h-4 w-4" /></a>
                  <a href="#" className="hover:text-primary"><Facebook className="h-4 w-4" /></a>
                </div>
              </div>
            </div>

            <div className="my-8">
              <div className="rounded-lg border-2 border-primary/20 glow-effect aspect-video w-full object-cover bg-secondary/50 p-4">
                {Illustration && <Illustration />}
              </div>
            </div>

            {post.keyTakeaways && (
              <Card className="my-12 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                      <CardTitle className="font-headline text-2xl">Key Takeaways</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <ul className="list-disc list-inside space-y-2 text-foreground/80">
                          {post.keyTakeaways.map((takeaway, i) => <li key={i}>{takeaway}</li>)}
                      </ul>
                  </CardContent>
              </Card>
            )}

            <article className="prose prose-invert max-w-none">
              {post.content}
            </article>

            {post.faq && post.faq.length > 0 && (
              <div className="mt-16">
                <h2 className="text-3xl font-bold font-headline mb-8 text-primary">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                  {post.faq.map((item, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                      <AccordionTrigger className="text-left text-lg hover:no-underline">{item.question}</AccordionTrigger>
                      <AccordionContent className="text-base text-foreground/80 prose prose-invert max-w-none prose-p:text-lg prose-p:text-foreground/80">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )}

            <div className="mt-16 border-t border-border pt-8">
              <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-full bg-secondary overflow-hidden flex-shrink-0 flex items-center justify-center p-2">
                      <Image src="/logo.png" alt="TechNext Logo" width={64} height={64} className="object-contain" />
                  </div>
                  <div>
                      <p className="text-sm text-muted-foreground">Written by</p>
                      <h4 className="font-bold text-lg text-foreground">{post.author.name}</h4>
                      <p className="text-muted-foreground">{post.author.role}</p>
                  </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({
    slug: p.slug,
  }));
}
