import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/constants";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Metadata } from "next";
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
    <div className="w-full py-12 md:py-20 lg:py-24 bg-background">
      <div className="px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <article className="prose prose-invert max-w-none prose-h1:font-headline prose-h1:text-4xl prose-h1:text-primary prose-h2:font-headline prose-h2:text-2xl prose-h3:font-headline">
            <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">{post.category}</Badge>
            <h1>{post.title}</h1>

            <div className="flex items-center gap-8 text-sm text-foreground/80 my-4">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{format(new Date(post.date), "MMMM d, yyyy")}</span>
              </div>
            </div>

            <Image
              src={post.imageUrl}
              data-ai-hint={post.imageHint}
              width={1200}
              height={600}
              alt={post.title}
              className="rounded-lg my-8 border-2 border-primary/20 glow-effect"
            />

            <h2>Introduction</h2>
            <p>
              {post.excerpt} This is where the main body of the blog post would begin. We are using placeholder text here to demonstrate the structure and layout of a full blog post page. In a real application, this content would be fetched from a CMS or a local markdown file.
            </p>

            <h2>Diving Deeper</h2>
            <p>
              The topic of "{post.title}" is vast and multi-faceted. This section would expand on the core concepts, providing detailed explanations, examples, and perhaps some code snippets to illustrate the points being made. The goal is to offer valuable insights to the reader, establishing Code Harbor as a thought leader in the tech space.
            </p>
            <blockquote>
              "This is an inspiring quote related to the topic. It serves to break up the text and add a point of emphasis."
            </blockquote>
            <p>
              Further paragraphs would continue to build the narrative, exploring different angles of the subject. Using lists, blockquotes, and other formatting elements helps to keep the content engaging and easy to digest for the reader.
            </p>

            <h2>Conclusion</h2>
            <p>
              To wrap up, this final section would summarize the key takeaways from the post and might offer some predictions or concluding thoughts on the future of the technology discussed. It's a chance to leave a lasting impression on the reader and encourage them to explore more of our content or get in touch.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
