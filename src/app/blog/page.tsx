
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { blogPosts } from "@/lib/data.tsx";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { FadeIn } from "@/components/ui/fade-in";
import { illustrationMap } from "@/lib/constants";

const siteUrl = 'https://technext96.com';
const pageUrl = `${siteUrl}/blog`;

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights, tutorials, and thoughts on the future of technology from the TechNext team.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
      title: 'Blog | TechNext',
      description: "Insights, tutorials, and thoughts on the future of technology from the TechNext team.",
      url: pageUrl,
      type: 'website',
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
      card: 'summary_large_image',
      title: 'Blog | TechNext',
      description: "Insights, tutorials, and thoughts on the future of technology from the TechNext team.",
      images: [`${siteUrl}/og-image.png`],
  },
};

export default function BlogPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="px-4 md:px-6 text-center z-10 relative">
          <FadeIn className="space-y-2">
            <h1 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-primary">From Our Digital Labs</h1>
            <p className="max-w-[600px] mx-auto text-foreground/80 md:text-xl">
              Dive into our collection of expert insights, in-depth tutorials, and forward-thinking articles on the future of technology. Your resource for staying ahead in the digital age.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {blogPosts.map((post, i) => {
              const Illustration = illustrationMap[post.illustration];
              return (
              <FadeIn key={post.slug} style={{ animationDelay: `${i * 0.1}s`}}>
                <Link href={`/blog/${post.slug}`} className="group">
                  <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_20px_theme(colors.primary/0.5)] bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/50">
                    <div className="overflow-hidden aspect-video w-full object-cover bg-secondary/50 p-4">
                      {Illustration && <Illustration />}
                    </div>
                    <CardHeader>
                      <p className="text-sm text-primary font-semibold">{post.category}</p>
                      <CardTitle className="font-headline">{post.title}</CardTitle>
                      <CardDescription>
                        By {post.author.name} on {format(new Date(post.date), "MMMM d, yyyy")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-sm text-foreground/80">{post.excerpt}</p>
                    </CardContent>
                  </Card>
                </Link>
              </FadeIn>
            )})}
          </div>
        </div>
      </section>
    </>
  );
}
