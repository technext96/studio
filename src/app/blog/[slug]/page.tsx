
import { blogPosts } from "@/lib/data.tsx";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import BlogPostClient from "@/components/BlogPostClient";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

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
            url: '/images/rideshare.jpg', 
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

  return <BlogPostClient post={post} />;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({
    slug: p.slug,
  }));
}
