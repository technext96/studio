
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/constants";
import { ArrowLeft, Calendar, User } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { format } from "date-fns";

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

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="w-full py-16 md:py-24 lg:py-28">
      <div className="px-8 md:px-12">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" asChild className="mb-8 -ml-4">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <article className="prose prose-invert max-w-none prose-h1:font-headline prose-h1:text-4xl prose-h1:text-primary prose-h2:font-headline prose-h2:text-3xl prose-h3:font-headline prose-h3:text-2xl prose-p:text-lg prose-p:text-foreground/80 prose-blockquote:border-primary prose-blockquote:text-xl">
            <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 mb-4">{post.category}</Badge>
            <h1>{post.title}</h1>

            <div className="flex items-center gap-8 text-base text-foreground/80 my-6">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{format(new Date(post.date), "MMMM d, yyyy")}</span>
              </div>
            </div>

            <div className="rounded-lg my-8 border-2 border-primary/20 glow-effect aspect-video w-full object-cover bg-secondary/50 p-4">
              {post.illustration}
            </div>

            <h2>The Dawn of a New Era</h2>
            <p>
              {post.excerpt} The landscape of technology is in a perpetual state of flux, but every so often, a paradigm shift occurs that redefines the boundaries of what's possible. Today, we stand at the precipice of such a change, driven by the advancements in {post.category}. This article will explore the fundamental concepts, practical applications, and future implications of this transformative technology.
            </p>

            <h2>Core Concepts and Breakthroughs</h2>
            <p>
              To truly grasp the significance of "{post.title}," we must first understand its core principles. Unlike traditional approaches that rely on linear processing, this new frontier leverages complex, interconnected systems to achieve unprecedented results. We will delve into the key breakthroughs that have made this possible, from novel algorithms to advancements in hardware capabilities. This section aims to provide a clear, accessible explanation for technical and non-technical readers alike.
            </p>
            <blockquote>
              "The best way to predict the future is to invent it. The innovations we're seeing in {post.category} are not just predictions; they are the building blocks of tomorrow."
            </blockquote>
            <p>
              The practical applications are already beginning to emerge, disrupting industries from healthcare to finance. For example, in the medical field, AI-driven diagnostic tools are achieving accuracy levels that surpass human experts. In finance, algorithmic trading models can now analyze market data at speeds previously unimaginable. These are not isolated incidents but rather the first waves of a technological tsunami.
            </p>

            <h2>Conclusion: Navigating the Future</h2>
            <p>
              As we conclude our exploration, it's clear that the rise of {post.category} is not a fundamental evolution. The implications for business, society, and our daily lives will be profound. The key takeaway is not to fear this change but to embrace it, understand it, and strategically integrate it. At TechNext, we are not just observers of this revolution; we are architects of it, helping our clients navigate this new terrain and build the solutions of the future.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
