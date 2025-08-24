import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import BlogPostClient from "@/components/BlogPostClient";
import { PrismaClient } from "@/generated/prisma";
import { illustrationMap } from "@/lib/constants";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";
import { marked } from 'marked';
import { Button } from "@/components/ui/button";

const prisma = new PrismaClient();

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const post = await prisma.blog.findUnique({
    where: { slug: params.slug },
  });

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const siteUrl = 'https://technext96.com';
  const ogImage = '/og-image.png';
  const canonicalUrl = `${siteUrl}/blog/${post.slug}`;

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    keywords: post.seoKeywords,
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      url: canonicalUrl,
      type: 'article',
      publishedTime: post.createdAt.toISOString(),
      images: [
        {
          url: `${siteUrl}${ogImage}`, 
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seoTitle,
      description: post.seoDescription,
      images: [`${siteUrl}${ogImage}`],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await prisma.blog.findUnique({
    where: { slug: params.slug },
  });

  if (!post) {
    notFound();
  }
  
  const relatedPosts = await prisma.blog.findMany({
    where: {
      tags: {
        hasSome: post.tags,
      },
      NOT: {
        id: post.id,
      },
    },
    take: 2,
    orderBy: {
      createdAt: 'desc',
    },
  });

  const parsedContent = await marked.parse(
    // Quick fix for button component in MDX
    post.content.replace(
      /<Button>(.*?)<\/Button>/g,
      '<a href="/contact" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">$1</a>'
    )
  );

  const clientPost = {
    ...post,
    date: post.createdAt.toISOString(),
    excerpt: post.description,
    tags: post.tags,
    category: post.tags.join(', '),
    author: { name: 'TechNext AI Writer', role: 'AI Content Specialist' },
    illustration: 'aiMl', 
    jsonLd: post.jsonLd,
    content: parsedContent,
  };

  return (
    <>
      <BlogPostClient post={clientPost} />
       {relatedPosts.length > 0 && (
          <section id="related-posts" className="w-full py-16 md:py-24 bg-secondary/20">
              <div className="px-4 md:px-6">
                  <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                  <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Related Articles</h2>
                      <p className="max-w-3xl mx-auto text-foreground/80 md:text-xl/relaxed">
                          Enjoyed this article? Here are a few other posts you might find interesting.
                      </p>
                  </FadeIn>
                  <div className="mx-auto grid gap-8 md:grid-cols-2 lg:gap-10 max-w-5xl">
                      {relatedPosts.map((relatedPost, i) => {
                          const ProjectIllustration = illustrationMap['aiMl']; 
                          return (
                          <FadeIn key={relatedPost.slug} style={{ animationDelay: `${i * 0.1}s` }}>
                              <Link href={`/blog/${relatedPost.slug}`} className="group">
                                  <Card className="overflow-hidden h-full flex flex-col bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/50 transition-all duration-300 glow-effect">
                                      <div className="aspect-video w-full object-cover bg-secondary/50 p-4">
                                          {ProjectIllustration && <ProjectIllustration/>}
                                      </div>
                                      <CardHeader>
                                      <CardTitle className="font-headline text-xl">{relatedPost.title}</CardTitle>
                                      </CardHeader>
                                      <CardContent className="flex-grow">
                                      <p className="text-sm text-foreground/80 line-clamp-3">{relatedPost.description}</p>
                                      </CardContent>
                                  </Card>
                              </Link>
                          </FadeIn>
                      )})}
                  </div>
              </div>
          </section>
      )}
    </>
  );
}

export async function generateStaticParams() {
  const posts = await prisma.blog.findMany({
    select: { slug: true },
  });

  return posts.map((p) => ({
    slug: p.slug,
  }));
}
