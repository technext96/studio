import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import Link from "next/link";
import { format } from "date-fns";
import { FadeIn } from "@/components/ui/fade-in";
import { prisma } from '@/lib/prisma';
import { Blog, Prisma } from "@/generated/prisma";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { illustrationMap } from "@/lib/constants";

const siteUrl = 'https://technext96.com';
const pageUrl = `${siteUrl}/blog`;

export const metadata: Metadata = {
  title: "TechNext Blog | Insights on Software, AI & Automation",
  description:
    "Explore the TechNext Blog for expert insights on custom software development, AI/ML integration, and automation. Read tutorials, case studies, and articles to stay ahead in tech.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "TechNext Blog | Insights on Software, AI & Automation",
    description:
      "Explore the TechNext Blog for expert insights on custom software development, AI/ML integration, and automation. Read tutorials, case studies, and articles to stay ahead in tech.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "TechNext Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechNext Blog | Insights on Software, AI & Automation",
    description:
      "Explore the TechNext Blog for expert insights on custom software development, AI/ML integration, and automation. Read tutorials, case studies, and articles to stay ahead in tech.",
    images: [`${siteUrl}/og-image.png`],
  },
};

export default async function BlogPage() {
  let posts: Blog[] = [];
  try {
    posts = await prisma.blog.findMany({
      where: {
        status: 'PUBLISHED',
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  } catch (error) {
     if (error instanceof Prisma.PrismaClientKnownRequestError || error instanceof Prisma.PrismaClientInitializationError) {
      console.warn("Could not fetch blog posts. Please check your database connection and migrations.", error.message);
    } else {
      console.error("An unexpected error occurred while fetching blog posts:", error);
    }
  }

  const featuredPost = posts.find(p => p.featured) || (posts.length > 0 ? posts[0] : null);
  const otherPosts = featuredPost ? posts.filter(p => p.id !== featuredPost.id) : posts;
  const FeaturedIllustration = featuredPost ? illustrationMap[featuredPost.image || 'aiMl'] : null;

  return (
    <>
      <section className="w-full py-20 md:py-24 lg:py-32 bg-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="px-4 md:px-6 text-center z-10 relative">
          <FadeIn className="space-y-4">
            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl text-primary">From Our Digital Labs</h1>
            <p className="max-w-[700px] mx-auto text-foreground/80 text-base sm:text-lg md:text-xl">
              Dive into our collection of expert insights, in-depth tutorials, and forward-thinking articles on the future of technology. Your resource for staying ahead in the digital age.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="w-full py-16 md:py-24">
        <div className="px-4 md:px-6 max-w-7xl mx-auto">
          {/* Featured Post */}
          {featuredPost && (
            <FadeIn className="mb-16">
              <Link href={`/blog/${featuredPost.slug}`} className="group block">
                <Card className="grid md:grid-cols-2 overflow-hidden bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/50 transition-all duration-300 glow-effect">
                  <div className="bg-secondary/50 p-8 flex items-center justify-center">
                    <div className="w-full h-full max-w-sm transition-transform duration-300 group-hover:scale-105">
                        {FeaturedIllustration && <FeaturedIllustration />}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col">
                    <CardHeader className="p-0">
                      <Badge className="w-fit mb-2">{featuredPost.tags[0] || 'Featured'}</Badge>
                      <CardTitle className="font-headline text-3xl">{featuredPost.title}</CardTitle>
                      <CardDescription className="pt-2">
                        Published on {format(new Date(featuredPost.createdAt), "MMMM d, yyyy")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 mt-4 flex-grow">
                      <p className="text-foreground/80 line-clamp-3">{featuredPost.description}</p>
                    </CardContent>
                    <div className="mt-6 font-semibold text-primary flex items-center group-hover:underline">
                      Read Full Article <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Card>
              </Link>
            </FadeIn>
          )}

          {/* Other Posts */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {otherPosts.map((post, i) => {
              const Illustration = illustrationMap[post.image || 'aiMl'];
              return (
              <FadeIn key={post.slug} style={{ animationDelay: `${i * 0.1}s`}}>
                <Link href={`/blog/${post.slug}`} className="group h-full flex">
                  <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_20px_theme(colors.primary/0.5)] bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/50 w-full">
                    <div className="overflow-hidden aspect-video w-full object-cover bg-secondary/50 p-4 flex items-center justify-center">
                       <div className="w-full h-full max-w-[200px] transition-transform duration-300 group-hover:scale-110">
                         {Illustration && <Illustration />}
                       </div>
                    </div>
                    <CardHeader>
                      <Badge className="w-fit">{post.tags[0] || 'Tech'}</Badge>
                      <CardTitle className="font-headline mt-2">{post.title}</CardTitle>
                      <CardDescription>
                        {format(new Date(post.createdAt), "MMM d, yyyy")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-sm text-foreground/80 line-clamp-3">{post.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </FadeIn>
            )})}
          </div>
          {posts.length === 0 && (
            <div className="text-center py-16">
              <h2 className="text-2xl font-headline font-semibold">No Blog Posts Found</h2>
              <p className="text-foreground/80 mt-2">Check back later for new articles, or ensure your database is connected and migrated correctly.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
