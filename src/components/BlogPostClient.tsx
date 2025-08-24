'use client';

import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Twitter, Linkedin, Facebook, Calendar, User } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";
import Script from "next/script";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

type BlogPostClientProps = {
  post: {
    title: string;
    date: string;
    tags: string[];
    author: { name: string };
    content: string; // Now a string of HTML
    excerpt: string;
    jsonLd?: string | null;
  };
};

export default function BlogPostClient({ post }: BlogPostClientProps) {
  const [pageUrl, setPageUrl] = useState('');

  useEffect(() => {
    // This code now only runs on the client, avoiding hydration errors
    setPageUrl(window.location.href);
  }, []);

  const socialLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(post.title)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(pageUrl)}&title=${encodeURIComponent(post.title)}&summary=${encodeURIComponent(post.excerpt)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`,
  };

  return (
    <>
      {post.jsonLd && (
        <Script
          id="blog-post-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: post.jsonLd }}
        />
      )}
      <div className="w-full py-16 md:py-24 lg:py-28 bg-secondary/20">
        <div className="px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Button variant="ghost" asChild className="-ml-4 mb-4">
                <Link href="/blog">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Blog
                </Link>
              </Button>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map(tag => <Badge key={tag} className="text-sm">{tag}</Badge>)}
              </div>
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl text-primary">
                {post.title}
              </h1>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-foreground/80">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{post.author.name}</span>
                  </div>
                   <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Published on {format(new Date(post.date), "MMMM d, yyyy")}</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-12 md:py-16">
        <div className="px-4 md:px-6 max-w-4xl mx-auto relative">
          
           <div className="absolute top-0 -left-24 hidden lg:flex flex-col gap-2">
            <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-2">Share</p>
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary hover:bg-primary/20 text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary hover:bg-primary/20 text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
             <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary hover:bg-primary/20 text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
          </div>

          <article 
            className="prose prose-invert max-w-none prose-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </>
  );
}
